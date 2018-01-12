<template>
    <div class="rocks-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="info col-xs-offset-1 col-xs-10">
            <div class="title col-sm-10 col-xs-12" >BLEND FASHION WITH MUSIC</div>
            <div class="sub-title col-xs-12" >
                <p>By marketing the unification of entertainment and trends, Fashion Rocks offers China & Asia a 360-degree concept with infinite opportunities through fashion and music.
                    <br>
                    An established IP weaving e-commerce, online & offline engagement and international broadcast distribution into a global platform reaching out to a multitude of consumers.
                </p>
            </div>
            <div class="content col-xs-12">
                <div class="col-xs-12">
                    <img src="../../static/rocks-detail/1.png" alt="">
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class="space clearfix"></div>
                <div class="col-xs-12"><img src="../../static/rocks-detail/2.jpeg" alt=""></div>
                <!--<div class="col-xs-12"><img src="../../static/rocks-detail/1.jpg" alt=""></div>-->
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="!isMobile"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <!--<div class="col-xs-12"><img src="../../static/rocks-detail/2.jpg" alt=""></div>-->
                <div class="s51 col-sm-12 col-xs-12 title">SUPERSTARS x SUPERBRANDS x SUPERMODELS</div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class="s52 col-sm-12 col-xs-12">
                    <p>
                        Fashion Rocks showcases super A-listers with world-renowned fashion brands in a winning formula presented on stage and online throughout the world!
                    </p>
                </div>

                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <!--<div class="space clearfix"></div>-->
                <div class="col-xs-12"><img src="../../static/rocks-detail/3.jpg" alt=""></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <!--<div class="space clearfix"></div>-->
                <div class="col-xs-12"><img src="../../static/rocks-detail/4.jpg" alt=""></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <!--<div class="space clearfix"></div>-->
                <!--<div class="space clearfix"></div>-->
                <p>Across the globe, Fashion Rocks offers an exclusive experience combining fashion by top fashion brands and live music performances by world renowned musicians. As the exclusive licensee and organizer in Asia, APAX LIVE presented the first Fashion Rocks in Asia on October 14th, 2016 in Shanghai and the show was live streamed to over 50 million viewers online via Tencent Video.
                </p>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <!--<div class="space clearfix"></div>-->
                <!--<div class="space clearfix"></div>-->
                <div class="s22 col-xs-12 col-sm-6"><img src="../../static/rocks-detail/5.jpg" alt=""></div>
                <div class="s41 col-xs-12 col-sm-6"><img src="../../static/rocks-detail/6.jpg" alt=""></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <!--<div class="space clearfix"></div>-->
                <!--<div class="space clearfix"></div>-->
                <div class="col-xs-12"><img src="../../static/rocks-detail/7.jpg" alt=""></div>
                <!--<div class="space clearfix"></div>-->
                <div class="space clearfix"></div>
                <p class="rocks-text">
                    THE INAUGURAL FASHION ROCKS 2016 IN ASIA<br/>
                    <span>10 THOUSAND</span> LIVE AUDIENCE<br/>
                    <span>400 MILLION</span> GLOBAL AUDIENCE<br/>
                    OUTDOOR/APP/SOCIAL MEDIA VIEWERSHIP <span>45 MILLION</span><br/>
                    <span>RMB 900 MILLION </span>MEDIA VALUE<br/>
                    LIVE STREAM ON TENCENT <span>60 MILLION</span> VIEWS</p>
          <!--      <div class="s51 col-sm-3 col-xs-12">About<br>Fashion Rocks</div>
                <div class="s52 col-sm-9 col-xs-12">
                    <p>Established in 2003 and founded by Prince’s Trust, Fashion Rocks was previously held in London, New York, Monaco and Rio de Janeiro. With astounding live fashion and music showcases lasting for 2.5 hours, bringing the best out of the two worlds – Music and Fashion, Fashion Rocks features A-List singers and artists including Beyoncé, Grace Jones, Robbie Williams, David Bowie, Justin Bieber and the likes together with Alexander McQueen, Burberry, Christian Dior, Gucci, Giorgio Armani and other world-class fashion brands.</p>
                    <h2>Fashion Rocks 2016 Artist Line</h2>
                    <h3>Charli XCX</h3>
                    <p>British pop singer Charli XCX is full of energy and talent, Fashion Rocks 2016 is her first official performance in China.</p>
                    <h3>CoCo Lee</h3>
                    <p>As the only Chinese singer to ever perform at the Oscars, Coco Lee is one of Asia’s music icons and the most well-known Asian singers. Coco also won the “I Am A Singer” competition in 2016, one of the most watched TV shows in Chinese television history.</p>
                    <h3>Usher</h3>
                    <p>Famous American superstar, musician, dancer and actor Usher, the 8 Grammies and 6 AMAs winner who has more than 1 RIAA diamond album, is one of the best selling artists in the music history, and also be called the most successful artist in the US by Billboard Magazine. Usher performed on Fashion Rocks New York in 2014 as the opening guest, he performed his new single named No Limit from his new album Hard II Love for the first time in Asia on Fashion Rocks 2016.</p>
                </div>-->
            </div>
            <div class="back col-xs-1">
                <a href="#" @click="goback">BACK</a>
            </div>
        </div>
    </div>
</template>

<script>
import OurworkSubNav from '@/components/OurworkSubNav.vue';
import Arrow from '@/components/Arrow.vue';
import {bus} from  '../assets/js/app/public'
export default {
    name : 'rocks-view',
    components : { OurworkSubNav, Arrow },
    data(){
        return {
            link : 'rocks',
            info : {},
            isMobile:false
        }
    },
    created(){
        //console.log(this.$route.params)
        // this.$axios.get('http://jsonplaceholder.typicode.com/photos/1').then((response) => {
        //     this.info = response.data;
        //     this.info.date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getDay() + 1);
        //     this.info.content = `
        //         大量内容
        //     `
        //     //console.log(this.info)
        // }, (error) => {
        //     console.log(error)
        // });
        this.$bus.$emit('canvas-open');
    },
    mounted(){
        bus.$emit('change', this.showO);
        let sr = this.$sr({ reset: true, delay: 0 });
        sr.reveal('.content div', { duration: 1000 });
        if(this.IsPC()){
            this.isMobile = true
        }

    },
    methods : {
        goback(){
            this.$router.go(-1);
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

<style lang="less">
@import '../assets/style/common.less';

.rocks-view {
    padding-bottom: 150px;

    .subnav {
        padding-top: 80px;
    }

    .info {
        /*padding-top:6em;*/
        padding-top: 7vh;
    }

    .title {
        font-size: 3em;
    }

    .sub-title {
        padding-top: 10px;
        p{
            /*line-height: 30px;*/
        }
    }

    .date {
        text-align: right;

        span {
            position: relative;
            top:2em;
        }
    }
    .rocks-text{
        text-align: center;
        span{
            color: #6D227B;
        }
    }
    .content {
        margin: 2em 0;

        p {
            line-height: 2em;
        }

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

    .s11, .s12, .s13 {
        img {
            width: 95%;
        }
    }

    .s12 {
        text-align: right;
        /*top:-200px;*/
    }

    .s13 {
        text-align: right;
        /*top:-100px;*/
    }

    .s21, .s22 {
        img {
            width: 95%;
        }
    }

    .s22 {
        text-align: left;
        /*padding-right: 10px;*/
        /*top: 250px;*/
    }

    .s32, .s33 {
        img {
            width: 95%;
        }
    }

    .s32 {
        top: -250px;
    }

    .s33 {
        top: 50px;
        text-align: right;
    }

    .s41, .s42 {
        text-align: right;
        img {
            width: 95%;
        }
    }

    .s42 {
        text-align: right;
    }

    .s51 {
        font-size: 2.5em;
    }

    .s52 {
        top: -1em;
        line-height: 2em;

        h2 {
            font-size: 2.5em;
            font-weight: normal;
            line-height: 2.5em;
        }

        h3 {
            font-weight: normal;
            font-size: 2em;
            margin-top: 2em;
        }
    }
}

.s14{
    img{
        width:95%;
        margin-right: 50px;
    }
    p{
        margin-right: 50px;
    }
}
@media screen and (max-width: @max-width) {
.rocks-view {
    .rocks-text{
        margin-top: 1.6em;
    }
    .info {
        padding-top: 2em;
    }

    .title {
        font-size: 1.5em;
    }

    .date {
        text-align: left;
    }

    .s11, .s12, .s13 {
        img {
            width: 95%;
        }
    }

    .s12 {
        text-align: right;
        top:-100px;
    }

    .s13 {
        text-align: right;
        /*top:-50px;*/
    }

    .s21, .s22 {
        img {
            width: 100% !important;
        }
    }

    .s22 {
        text-align: center;
        /*top: 50px;*/
    }

    .s32, .s33 {
        img {
            width: 95%;
        }
    }

    .s32 {
        top: -50px;
    }

    .s33 {
        top: 50px;
        text-align: right;
    }

    .s41, .s42 {
        margin-top: 2em !important;
        img {
            width: 100% !important;
        }
    }

    .s42 {
        margin-top: 2em !important;
        text-align: center;
    }

    .s51 {
        /*font-size: 2.5em;*/
        margin-bottom: 1em;
    }

    .s52 {
        /*top: -1em;*/
        line-height: 2em;
        /*margin-bottom: 2em;*/

        h2 {
            font-size: 2.5em;
            font-weight: normal;
        }

        h3 {
            font-weight: normal;
            font-size: 2em;
            margin-top: 2em;
        }
    }
}
}
</style>
