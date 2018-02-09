<template>
    <div class="iconic-detail-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="info col-xs-offset-1 col-xs-10">
            <div class="div1 col-xs-12" >
                <span class="title col-sm-8 col-md-8 col-xs-12">Plaza 66 Home to Luxury Celebration Party</span>
                <!--</div>-->
                <!--<div class="date col-sm-3 col-xs-12">-->
                <span class="date col-sm-4 col-md-4 col-xs-12">Plaza 66, Shanghai,China</span>
            </div>
            <div class="content col-xs-12">
                <!-- <AContent :content="info.title"></AContent> -->
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail/new1.jpg" alt="">
                    <!--<p>Hang Lung Properties was set to mark a milestone in its history with the transformation of its flagship Shanghai Plaza Plaza 66 on September 8, 2017 with a grand celebration - Home to Luxury. The star-studded celebration highlighted 66 Showcases, which showed numerous luxury brands unveiling their special or limited collections. The Grammy Award winning Singer - Alicia Keys performed her greatest hits during the splendid evening. </p>-->
                </div>
                <div class="col-xs-12">
                    <!--<img src="../../static/iconic-detail/new1.jpg" alt="">-->
                    <p>Hang Lung Properties was set to mark a milestone in its history with the transformation of its flagship Shanghai Plaza Plaza 66 on September 8, 2017 with a grand celebration - Home to Luxury. The star-studded celebration highlighted 66 Showcases, which showed numerous luxury brands unveiling their special or limited collections. The Grammy Award winning Singer - Alicia Keys performed her greatest hits during the splendid evening. </p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class=" col-xs-12"><img src="../../static/iconic-detail/new2.png" alt=""></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class=" col-xs-12"><img src="../../static/iconic-detail/new3.jpg" alt=""></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class=" col-xs-12"><img src="../../static/iconic-detail/new4.jpg" alt=""></div>
            </div>
            <div class="back col-xs-1">
                <a href="javascript:;" @click="goback">BACK</a>
            </div>
            <div class="share col-xs-offset-1 col-xs-7">
                <Share></Share>
            </div>
            <div class="col-xs-3 pagingOne">
                <router-link to="detail-f"><div @mouseover="pagePrevOver()" @mouseout="pagePrevOut()">
                    <img src="../assets/img/icon/page-prev.png" alt="" v-show="pagePrev">
                    <img src="../assets/img/icon/page-prev-on.png" alt="" v-show="!pagePrev">
                </div></router-link>
                <router-link to="detail-h"> <div  @mouseover="pageNextOver()" @mouseout="pageNextOut()">
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
            pagePrev:true
        }
    },
    created(){
        this.$bus.$emit('canvas-open');
    },
    mounted(){
        window.scrollTo(0, 0);
        bus.$emit('change',this.showO);
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
        text-align: right;
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
        top: -300px;
    }

    .s43 {
        padding: 100px 50px;
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
        line-height: 1.5em;
    }
}
}
</style>
