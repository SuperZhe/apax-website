<template>
    <div class="iconic-detail-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="info col-xs-offset-1 col-xs-10">
            <div class="div1 col-xs-12" >
            <span class="title col-sm-8 col-md-8 col-xs-12">
                {{isch?'Hennessy XO Exclusive Collection VI Worldwide Launch':'轩尼诗XO 第六代珍藏版全球发售'}}
                </span>
            <!--</div>-->
            <!--<div class="date col-sm-3 col-xs-12">-->
            <span class="date col-sm-4 col-md-4 col-xs-12">{{isch?'Reed Flute Cave, Guilin, China':'中国，桂林，芦笛岩'}}</span>
        </div>
            <div class="content col-xs-12">
                <!-- <AContent :content="info.title"></AContent> -->
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-2/1.jpg" alt="">
                    <!--<p>-->
                        <!--Hennessy presented the 6th edition of the Hennessy Exclusive Collection; showcasing “The Power of Nature” in the Reed Flute Cave in Guilin. The stones interior of the cave became the natural setting, incorporated with specially designed projection effects to highlight the magnificent and dazzling essence of the new collector’s.-->
                    <!--</p>-->
                </div>
                <div class="col-xs-12">
                    <!--<img src="../../static/iconic-detail-2/1.jpg" alt="">-->
                    <p v-if="isch">
                        Hennessy presented the 6th edition of the Hennessy Exclusive Collection; showcasing “The Power of Nature” in the Reed Flute Cave in Guilin. The stones interior of the cave became the natural setting, incorporated with specially designed projection effects to highlight the magnificent and dazzling essence of the new collector’s.
                    </p>
                    <p v-if="!isch">
                        以岩石蕴藏的力量为灵感的轩尼诗X.O第六代珍藏版在雄奇瑰丽的桂林芦笛岩全球首发。天然岩洞作为布景，晚宴所在之地——芦笛岩“水晶宫”，“华灯”高垂于顶，“莲湖”波光莹莹。黄金之色犹如初升之日在黑暗中光华绽放，瑰宝般的轩尼诗X.O第六代珍藏版在岩石的簇拥下出现在眼前, 独具匠心的外在与百年原创的内涵交相辉映。

                    </p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class=" col-xs-12">
                    <img src="../../static/iconic-detail-2/2.jpg" alt="">
                    <!--<p>The stones and interior of the cave became the natural backdrop with specially-designed projection effects to highlight the magnificent and dazzling essence of the new collector's bottle, together with the natural wonders of the cave. </p>-->
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class="col-xs-12"><img src="../../static/iconic-detail-2/3.jpg" alt=""></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class="col-xs-12"><img src="../../static/iconic-detail-2/4.jpg" alt="">
                	<!--<p>The gala dinner was a true "luxurious" experience along with the long outstanding quality of the Hennessy XO Exclusive Collection VI with its innovative approach - forming a new brand spirit of praise.</p>-->
                </div>
                <!--<div class="s43 col-xs-9">The gala dinner was a true "luxurious" experience along with the long outstanding quality of the Hennessy XO Exclusive Collection VI with its innovative approach - forming a new brand spirit of praise.</div>-->
                <!--<div class="center col-xs-12"><img src="../../static/iconic-detail-2/5.jpg" alt=""></div>-->
            </div>
            <div class="col-xs-12">
                <div class="back col-xs-1">
                    <a href="javascript:;" @click="goback">BACK</a>
                </div>
                <div class="share col-xs-offset-1 col-xs-7">
                    <Share></Share>
                </div>
                <div class="col-xs-3 pagingOne">
                    <router-link to="detail-a">
                        <div @mouseover="pagePrevOver()" @mouseout="pagePrevOut()">
                            <img src="../assets/img/icon/page-prev.png" alt="" v-show="pagePrev">
                            <img src="../assets/img/icon/page-prev-on.png" alt="" v-show="!pagePrev">
                        </div>
                    </router-link>
                    <router-link to="detail-d">
                        <div  @mouseover="pageNextOver()" @mouseout="pageNextOut()">
                            <img src="../assets/img/icon/page-next.png" alt="" v-show="pageNext">
                            <img src="../assets/img/icon/page-next-on.png" alt="" v-show="!pageNext">
                        </div>
                    </router-link>
                </div>
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
    .pagingOne{
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
        .div1{
            display: flex;
            align-items: flex-end;
            span:nth-last-child(1){
                padding-bottom: 6px;
            }
        }
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
    	z-index: 2;
        /*top: -100px;*/
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
