<template>
    <div class="iconic-detail-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="info col-xs-offset-1 col-xs-10">
            <div class="div1 col-xs-12" >
                <span class="title col-sm-8 col-md-8 col-xs-12">{{isch?'Huawei Global Product Launch Barcelona':'华为2017全球新品发布会'}}</span>
                <!--</div>-->
                <!--<div class="date col-sm-3 col-xs-12">-->
                <span class="date col-sm-4 col-md-4 col-xs-12">{{isch?'Barcelona, Spain,China':'西班牙，巴塞罗那，中国'}}</span>
            </div>
            <div class="content col-xs-12">
                <!-- <AContent :content="info.title"></AContent> -->
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-4/new1.jpg" alt="">
                    <!--<p>-->
                        <!--Huawei dominated the news during the World Mobile Congress 2017 in Barcelona when they launched their new products (the P10 and smart watch) to a worldwide audience - the W Product 2017 at world Press Conference. The semi-circular door was a diamond cutting surface that formed as a natural crack for a metaphor of the breakthrough in innovation and the modern art attraction. Social media was a buzz with tens of thousands of articles and reviews that helped drive sales to an all-time high.-->
                    <!--</p>-->
                </div>
                <div class="col-xs-12">
                    <!--<img src="../../static/iconic-detail-4/new1.jpg" alt="">-->
                    <p v-if="isch">
                        Huawei dominated the news during the World Mobile Congress 2017 in Barcelona when they launched their new products (the P10 and smart watch) to a worldwide audience - the W Product 2017 at world Press Conference. The semi-circular door was a diamond cutting surface that formed as a natural crack for a metaphor of the breakthrough in innovation and the modern art attraction. Social media was a buzz with tens of thousands of articles and reviews that helped drive sales to an all-time high.
                    </p>
                    <p v-if="!isch">
                        华为W系列2017新品发布会在巴塞罗那意大利馆举行，发布了全新的华为P10手机及智能手表。为配合华为给人们带来的科技形象，以及华为W系列绝妙的设计感，场馆外观以钻石的切割为灵感打造，入口处幻彩的钻石裂痕成为了一道通向活动现场的探索之门。此次发布会创造了很高的社交媒体价值，广受好评。
                    </p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <!--<div class="s41 center col-xs-9"><img src="../../static/iconic-detail-4/2.jpg" alt=""></div>-->
                <div class=" col-xs-12">
                <!--<div class="s43 col-xs-5">The semi-circle door as the Façade showed a diamond cutting surface that formed as a natural crack to metaphor the breakthrough in innovation and the modern and art attraction. The special dress sculpture at the entrance reception featured the color of Huawei P10 cases that shine under the sky.</div>-->
                <div class="col-xs-12"><img src="../../static/iconic-detail-4/new2.jpg" alt=""></div>
				</div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class="center col-xs-12"><img src="../../static/iconic-detail-4/new3.jpg" alt="">
                	<!--<p>The lighting show and animation effects welcomed Speakers at the launch moment. Instead of making them walk from backstage to the front, we put them on the blind area by playing around the light and shades. Speakers appeared when the sunbeam penetrated the dark spot.</p>-->
                </div>
                <!--<div class="space clearfix"></div>-->
                <!--<div class="space clearfix"></div>-->
                <!--<div class="col-xs-offset-1 col-xs-10">-->
                    <!--<img src="../../static/iconic-detail-4/5.jpg" alt="">-->
                    <!--<p>The demo area presented a strong fashion approach with art gallery. Leica Studio was special designed for providing an immediate experience with P10 camera. Guests shared the real time experience on social media.</p>-->
                <!--</div>-->
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class=" col-xs-12">
                    <img src="../../static/iconic-detail-4/new4.jpg" alt="">
                    <!--<p>The event received high reputation, the buzz was well created via social media. Tens of thousands of articles and reviews that helped drive sales to an all-time high.</p>-->
                </div>
            </div>
            <div class="back col-xs-1">
                <a href="javascript:;" @click="goback">BACK</a>
            </div>
            <div class="share col-xs-offset-1 col-xs-7">
                <Share></Share>
            </div>
            <div class="col-xs-3 pagingOne">
                <router-link to="detail-d"><div @mouseover="pagePrevOver()" @mouseout="pagePrevOut()">
                    <img src="../assets/img/icon/page-prev.png" alt="" v-show="pagePrev">
                    <img src="../assets/img/icon/page-prev-on.png" alt="" v-show="!pagePrev">
                </div>
                </router-link>
                <router-link to="detail-f"> <div  @mouseover="pageNextOver()" @mouseout="pageNextOut()">
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
        /*top: -100px;*/
    }

    .s43 {
        padding-top: 450px;
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
        line-height: 1em;
    }
}
}
</style>
