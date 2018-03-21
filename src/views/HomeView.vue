<template>
    <div class="info-view home-view clearfix">
        <div class="info col-xs-offset-1 col-xs-10 col-sm-8 col-sm-offset-2 ">
            <h2 :class="{shine:light,titleHome:!light}">{{isch?'敢潮·敢创':'WE CREATE THE NEXT WAVE'}}</h2>
            <div class="contentHome" :class="{text:judgeText}">
                <p v-if="!isch">
                    Leading Experiential Marketing company in Asia Pacific.<br>
                    We focus on interpreting the brand’s DNA, providing innovative and valuable commercial solutions, through multi channels and marketing platforms.
                </p>
                <p v-if="isch">
                    亚太地区最领先的体验式营销集团。<br>我们致力于创新诠释品牌DNA，整合所有媒介渠道与全方位营销平台，提供集革新创意与商业价值于一体的市场营销解决方案。
                </p>
                <p v-if="!isch">
                    APAX Group presents you with multi cultural platform: EVENTS / LIVE / RECREATION with partnerships throughout the world and outstanding strength of global resources bringing you unique experiences and cooperation opportunities.<br>We are committed to translate the best local cultures and original contents onto the international stage.<br> We nurture, We bring forth.
                </p>
                <p v-if="isch">
                    川力企划由EVENTS、 LIVE、 RECREATION三大跨文化平台组成。<br>我们的合作伙伴遍及海内外，
                    凭借全球业内顶级资源与优势经验，我们带来具有世界级水准的杰出营销体验以及国际合作机会。
                    同时，我们也致力于将最优秀的本土文化和原创内容推向国际化的舞台。<br>
                    引进来，走出去。

                </p>

                <div class="set_6_btn in blue">
                    <router-link to="/ourwork" class="more">
                        <!--<img src="../assets/img/main/more.png" alt="">-->
                        <!--<img src="../assets/img/main/jiantou.png" alt="">-->
                       {{isch?'揭秘APAX':'VIEW DETAILS'}}
                    </router-link>
                    <div class="corners top"></div>
                    <div class="corners bottom"></div>
                </div>
            </div>
            <!-- <video src="http://tronm.oss-cn-shanghai.aliyuncs.com/apax/pc-bg.mp4"></video> -->
        </div>
    </div>
</template>

<script>
    import { bus,isChinese } from '../assets/js/app/public';
    export default {
        name: 'home-view',
        data() {
            return {
                light: false,
                judgeText: false,
                isch:'',
                global:''
            };
        },
        watch:{
            global:function () {
                this.isch = isChinese.isChinese
            }
        },
        created() {
            bus.$on('language',(val) => {this.global = val})
            this.$bus.$emit('canvas-close');
        },
        mounted() {
            setTimeout(() => this.judgeText = true, 700);
            setTimeout(() => this.light = true, 700);


            //setTimeout(()=> this.$('.home-view').fadeOut(() => this.$router.push('/ourwork')), 3000);
        },
        methods: {},
    };
</script>

<style lang="less">
    @import '../assets/style/common.less';
    @import '../assets/style/but';
    .home-view {
        .set_6_btn.blue:hover .corners:after, .set_6_btn.blue:hover .corners:before {
            border-color: #732282;
            color: #732282;
        }
        .set_6_btn.blue:hover a {
            letter-spacing: 1px;
            color: #b74faa;
            font-size: 16px;
            text-shadow: 0 0 2px #732282,
            0 0 4px #732282,
            0 0 6px #fff;
        }
        .contentHome {
            /*display: none;*/
            opacity: 0;
            p:nth-child(2) {
                margin-bottom: 3em;
            }
        }

        .more {
            /*border: 1px solid;*/
            /*padding: 10px;*/
            /*margin-top: 2em;*/
            img {
                width: 50px;
            }
        }
        //闪光动画
        .shine {
            /*line-height: normal !important;*/
            background: #222 -webkit-gradient(linear, left top, right top, from(#222), to(#222), color-stop(0.1, #fff)) 0 0 no-repeat;
            background: #222 -moz-gradient(linear, left top, right top, from(#222), to(#222), color-stop(0.1, #fff)) 0 0 no-repeat;
            background: #222 -o-gradient(linear, left top, right top, from(#222), to(#222), color-stop(0.1, #fff)) 0 0 no-repeat;
            -webkit-background-size: 100px;
            color: rgba(141, 141, 141, 0.2);
            -webkit-background-clip: text;
            /*width: 70%;*/
            /*margin: 0 auto;*/
            margin-left: auto;
            margin-right: auto;
            /*font-size:60px;*/
            /*font-weight:bold !important;*/
            /*display:block;*/
            -webkit-animation-name: shine;
            -webkit-animation-duration: 3s;
            -webkit-animation-iteration-count: infinite;
            /*-webkit-animation-timing-function:linear;*/
        }
        @-webkit-keyframes shine {
            0% {
                background-position: top left;
            }
            100% {
                background-position: top right;
            }
        }
        @media screen and (min-width: @max-width) {
            .home-view {
                padding-top: 30vh;
            }
        }
        .text {
            -webkit-animation: textUp 0.8s linear forwards;
            -moz-animation: textUp 0.8s linear forwards;
            -o-animation: textUp 0.8s linear forwards;
            animation: textUp 0.8s linear forwards;
        }
        .light {
            /*-webkit-animation: neon1 1s ease-in-out infinite alternate;*/
            /*-moz-animation: neon1 1s ease-in-out infinite alternate;*/
            /*animation: neon1 1s ease-in-out infinite alternate;*/
        }

        .titleHome {
            -webkit-animation: rotateWordsSecond 0.6s linear ;
            -moz-animation: rotateWordsSecond 0.6s linear ;
            -o-animation: rotateWordsSecond 0.6s linear ;
            animation: rotateWordsSecond 0.6s linear ;
        }


        @keyframes rotateWordsSecond {
            0% {
                opacity: 0;
                -webkit-transform: scale(1.4);
                -moz-transform: scale(1.4);
                -o-transform: scale(1.4);
                transform: scale(1.4);
            }

            100% {
                /*display: block;*/
                opacity: 1;
                -webkit-transform: scale(1);
                -moz-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
            }
        }
        @keyframes textUp {
            0% {
                opacity: 0;
                -webkit-transform: translateY(50px);
                -moz-transform: translateY(50px);
                -o-transform: translateY(50px);
                transform: translateY(50px);
            }

            100% {
                display: block;
                opacity: 1;
                -webkit-transform: translateY(0px);
                -moz-transform: translateY(0px);
                -o-transform: translateY(0px);
                transform: translateY(0px);
            }
        }
    }

    .home-view {
        height: 100vh;
        padding-top: 95px;
        display: flex;
        align-items: center;
        padding-bottom: 95px;
    }

    .info-view .info p:nth-child(2) {
        margin-top: 0.8em;
    }

    @media screen and (max-width: @max-width) {
        .home-view {
            display: block;
            height: auto;
            margin-top: 3em;
            h2 {
                font-size: 1.6em;
            }
            .shine {
                width: 100%;
            }
        }
    }

</style>
