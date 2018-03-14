<template>
    <div class="iconic-detail-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="info col-xs-offset-1 col-xs-10">
            <div class="div1 col-xs-12" >
                <span class="title col-sm-8 col-md-8 col-xs-12">{{isch?'Fendi on the Wall':'FENDI芬迪长城秀'}}</span>
            <!--</div>-->
            <!--<div class="date col-sm-3 col-xs-12">-->
                <span class="date col-sm-4 col-md-4 col-xs-12">{{isch?' The Great Wall, Beijing, China':'中国，北京，长城\n'}}</span>
            </div>
            <div class="content col-xs-12">
                <!-- <AContent :content="info.title"></AContent> -->
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-1/1.jpg" alt="">
                    <!--<p>A monumental event in fashion history was when Fendi literally had 88 models parade their spring summer collection along 88 meters of the Great Wall of china against a double-f projection onto the neighboring mountains.</p>-->
                </div>
                <!--<div class="space clearfix"></div>-->
                <div class="col-xs-12 contentText">
                    <!--<img src="../../static/iconic-detail-1/1.jpg" alt="">-->
                    <p v-if="isch">A monumental event in fashion history was when Fendi literally had 88 models parade their spring summer collection along 88 meters of the Great Wall of china against a double-f projection onto the neighboring mountains.</p>
                    <p v-if="!isch">APAX Group和拥有精湛工艺的意大利高级时装品牌FENDI芬迪与时尚界大师卡尔·拉格斐，一同征服了世界七大奇迹之一的中国万里长城。长城历史上首次上演时装秀，在时尚史上写下空前一笔。居庸关长城烽火台两侧升起芬迪双F标志旗帜。 日落时分，模特沿着长城上搭建的T台缓步走下，展示了共88套华美造型。
                    </p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-1/2.png" alt="">
                    <!--<p>The show was capped off with giant double-F logos projected onto neighboring mountains. "This is about positioning Fendi for the next 50 years," says Fendi CEO Michael Burke. </p>-->
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class=" col-xs-12">
                    <img src="../../static/iconic-detail-1/3.jpg" alt="">
                    <!--<p>With a section of the awe-inspiring, 4,000-mile-long structure snaking up the mountain behind them, 88 models walked a runway 88 meters long in an expanded version of Fendi's spring-summer collection. Hundreds of journalists and TV crews were invited to document the event,-->
                    	<!--along with some of its best customers from Asia. Flanking the show were a series of dinners and cocktails.</p>-->
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <!--<div class="space clearfix"></div>-->
                <!--<div class="space clearfix"></div>-->
                <!--<div class="space clearfix"></div>-->
                <!--<div class="s41 center col-xs-9"><img src="../../static/iconic-detail-1/4.jpg" alt=""></div>-->
                <div class="col-xs-12">
                <!--<div class="s43 col-xs-5">For both Fendi and Karl Lagerfeld, “Fendi on the Wall” was recorded as an epic masterpiece in history.</div>-->
                <div class="col-xs-12"><img src="../../static/iconic-detail-1/4.jpg" alt=""></div>
				</div>
                <!--<div class="center col-xs-12"><img src="../../static/iconic-detail-1/6.jpg" alt=""></div>-->
            </div>
            <div class="col-xs-12">
                <div class="back col-xs-1" @click="goBack()">
                    <a href="javascript:;">BACK</a>
                </div>
                <div class="share col-xs-offset-1 col-xs-7">
                    <Share></Share>
                </div>
                <div class="col-xs-3 pagingOne">
                    <router-link to="detail-c">
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
        pageNextOver:function () {
            this.pageNext = false;
        },
        pageNextOut:function () {
            this.pageNext = true;
        },
        goBack:function(){
//            this.$router.back(-1);
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
    .subnav {
        padding-top: 80px;
    }
    .pagingOne{
        text-align: right;
        a{
            display: inline-block;
        }
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
        margin-top: 5em;
        margin-bottom: 5em;
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
        padding: 100px 50px;
        line-height: 2em;
    }
}

@media screen and (max-width: @max-width) {
.iconic-detail-view {
    .content{margin-top: 3em}
    .info {
        padding-top: 4em;
        .div1{
            display: block;
            span{
                display: block;
            }
            span:nth-last-child(1){
                margin-top: 1em;
                padding-bottom: 2px;
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
