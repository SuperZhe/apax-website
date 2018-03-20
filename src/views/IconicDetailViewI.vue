<template>
    <div class="iconic-detail-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="info col-xs-offset-1 col-xs-10">
            <!--<div class="title col-sm-7 col-xs-12" >Max Mara MONOPOLIS!</div>-->
            <!--<div class="date col-sm-5 col-xs-12"><span>Shanghai Exhibition Center, Shanghai, China</span></div>-->
            <div class="div1 col-xs-12" >
                <span class="title col-sm-7 col-md-8 col-xs-12">{{isch?'Max Mara MONOPOLIS!':'Max Mara MONOPOLIS! 奇异都市'}}</span>
                <!--</div>-->
                <!--<div class="date col-sm-3 col-xs-12">-->
                <span class="date col-sm-5 col-md-4 col-xs-12">{{isch?'Shanghai Exhibition Center, Shanghai, China':'中国，上海，上海展览中心'}}</span>
            </div>
            <div class="content col-xs-12">
                <!-- <AContent :content="info.title"></AContent> -->
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-8/new1.jpg" alt="">
                    <!--<p>Luxury brand Max Mara unveiled its pre-fall 2017 collection series as well as an exclusive, see-now-buy-now Capsule Collection in collaboration with Chinese artist Liu Wei at Shanghai Exhibition Center. Liu Wei’s sculptures and paintings became the installation background, interpreting the modernization of this future city - MONOPOLIS - an “Interesting”, “brutal” and “unsettling” space.</p>-->
                </div>
                <div class="col-xs-12">
                    <!--<img src="../../static/iconic-detail-8/new1.jpg" alt="">-->
                    <p v-if="isch">Luxury brand Max Mara unveiled its pre-fall 2017 collection series as well as an exclusive, see-now-buy-now Capsule Collection in collaboration with Chinese artist Liu Wei at Shanghai Exhibition Center. Liu Wei’s sculptures and paintings became the installation background, interpreting the modernization of this future city - MONOPOLIS - an “Interesting”, “brutal” and “unsettling” space.</p>
                    <p v-if="!isch">Max Mara 携手中国艺术家刘韡，在上海展览中心带来以“MONOPOLIS!奇异都市”为主题的 Max Mara 2017早秋发布。刘韡和品牌对未来城市的乌托邦构想化作现实。创意秀场以刘韡的雕塑和画作为装置背景，打造出一座有趣，原始，充满骚动的奇异都市。这不不仅是Max Mara在上海的首秀，也是该系列的全球首发。同时，品牌还首次尝试了即看即买的模式。
                    </p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class=" col-xs-12">
                    <img src="../../static/iconic-detail-8/new2.jpg" alt="">
                </div>
                <!--<div class=" s43 col-xs-6 ">-->
                	<!--<p>the MONOPOLIS, an “Interesting”, “brutal” and “unsettling” space. With Liu Wei's sculptures and paintings as the installation background, this future city perfectly interpreted the idea of modernization and contrasts. </p>-->
                <!--</div>-->
                <!--<div class="s42  col-xs-6">-->
                    <!--<img src="../../static/iconic-detail-8/3.jpg" alt="">-->
                <!--</div>-->
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class=" center col-xs-12"><img src="../../static/iconic-detail-8/new3.jpg" alt=""></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class="col-xs-12"><img src="../../static/iconic-detail-8/new4.jpg" alt=""></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class="col-xs-12"><img src="../../static/iconic-detail-8/new5.jpeg" alt=""></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class="col-xs-12"><img src="../../static/iconic-detail-8/new6.jpeg" alt=""></div>
                <!--<div class="s43 col-xs-5">More than a thousand of regional media and international guests gathered together to witness this Fashion Miracle.</div>-->
                <!--<div class="s-one col-xs-5"><img src="../../static/iconic-detail-8/6.jpg" alt=""></div>-->
                <!--<div class="s-two col-xs-offset-2 col-xs-5"><img src="../../static/iconic-detail-8/7.jpg" alt=""></div>-->
            </div>
            <div class="back col-xs-1">
                <a href="javascript:;" @click="goback">BACK</a>
            </div>
            <div class="share col-xs-offset-1 col-xs-7">
                <Share></Share>
            </div>
            <div class="col-xs-3 pagingOne">
                <router-link to="detail-h"><div @mouseover="pagePrevOver()" @mouseout="pagePrevOut()">
                    <img src="../assets/img/icon/page-prev.png" alt="" v-show="pagePrev">
                    <img src="../assets/img/icon/page-prev-on.png" alt="" v-show="!pagePrev">
                </div></router-link>
                <router-link to="detail-j"> <div  @mouseover="pageNextOver()" @mouseout="pageNextOut()">
                    <img src="../assets/img/icon/page-next.png" alt="" v-show="pageNext">
                    <img src="../assets/img/icon/page-next-on.png" alt="" v-show="!pageNext">
                </div></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import OurworkSubNav from '@/components/OurworkSubNav.vue';
import AContent from '@/components/AContent.vue';
import Share from '@/components/Share.vue';
import Arrow from '@/components/Arrow.vue';
import {bus} from  '../assets/js/app/public'
export default {
    name : 'iconic-detail-view',
    components : { OurworkSubNav, AContent, Arrow, Share },
    data(){
        return {
            link : 'events',
            info : {},
            showO:1,
            isMobile:false,
            pageNext:true,
            pagePrev:true,
            isch:''
        }
    },
    created(){
        bus.$on('language',(val) => {this.isch = val})
        this.$bus.$emit('canvas-open');
    },
    mounted(){
        bus.$emit('change',this.showO);
        window.scrollTo(0, 0);
        let sr = this.$sr({ reset: true, delay: 0 });
        sr.reveal('.content div', { duration: 1000 });
        if(this.IsPC()){
            this.isMobile = true
        }
    },
    methods : {
        pagePrevOver:function () {
            this.pagePrev = false;
        },
        pagePrevOut:function () {
            this.pagePrev = true;
        },
        pageNextOver:function () {
            this.pageNext = false;
        },
        pageNextOut:function () {
            this.pageNext = true;
        },
        goback(){
            this.$router.push({ path: '/ourwork/events/iconic' })
        },
        IsPC:function() {
            let userAgentInfo = navigator.userAgent;
            let Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
            let flag = true;
            for (let v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = false;
                    break;
                }
            }
            return flag;
        }
    }
}
</script>

<style lang="less" scoped>
@import '../assets/style/common.less';

.iconic-detail-view {
    padding-bottom: 150px;
    .div1{
        display: flex;
        align-items: flex-end;
        span:nth-last-child(1){
            padding-bottom: 6px;
        }
    }
.pagingOne{
    text-align: right;
    /*text-align: right;*/
    /*display: flex;*/
    /*justify-content: space-around;*/
    /*align-items: center;*/
    div{
        display: inline-block;
    }
}
    .subnav {
        padding-top: 80px;
    }

    .info {
        padding-top: 7vh;
    }

    .title {
        font-size: 2.2em;
    }

    .date {
        text-align: right;

        span {
            position: relative;
            top:2em;
        }
    }

    .content {
        margin: 5em 0;
        /*margin-top: 5vh;*/
        .space {
            padding: 10px 0;
        }

        .center {
            text-align: center;
        }

        img {
            width: 100%;
        }
    }

    .s11 {
        top: -100px;
        z-index: 1;
    }

    .s12 {
        top: -200px;
    }

    .s21 {
        top: -50px;
    }

    .s31 {
        z-index: 3;
    }

    .s32 {
        z-index: 2;
        top: -50px;
    }

    .s33 {
        top: -100px;
    }

    .s41 {
        z-index: 1;
    }

    .s42 {
        top: -100px;
    }

    .s43 {
        padding: 10px 50px;
        line-height: 2em;
    }
}

@media screen and (max-width: @max-width) {
.iconic-detail-view {
    .info {
        padding-top: 4em;
        .div1{
            display: block;
            span{
                display: block;
            }
            span:nth-last-child(1){
                margin-top: 1em;
            }
        }
    }

    .title {
        font-size: 1.5em;
    }

    .date {
        text-align: left;
        margin-bottom: 1.5em;
    }

    .s11 {
        top: -20px;
        z-index: 1;
    }

    .s12 {
        top: -40px;
    }

    .s21 {
        top: -20px;
    }

    .s31 {
        z-index: 3;
    }

    .s32 {
        z-index: 2;
        top: -20px;
    }

    .s33 {
        top: -40px;
    }

    .s41 {
        z-index: 1;
    }

    .s42 {
        top: -40px;
    }

    .s43 {
        padding: 0px 10px;
        line-height: 1em;
    }
}
}
</style>
