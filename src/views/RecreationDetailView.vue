<template>
    <div class="recreation-detail-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="info col-xs-12 col-sm-10 col-sm-offset-1">
            <div class="pc">
                <div class="content col-xs-12">
                    <div class="col-xs-12 recreationOneImg">
                        <img src="../../static/recreation/32.jpg" alt="">
                        <div class="eyes col-xs-10">
                            <img src="../../static/recreation/title.png" alt="">
                            <p v-if="isch">
                                Discovery Adventures Park is the Key IP project introduced and hatched by APAX Recreation. APAX Recreation brought Discovery
                                IP to China, creating the world's first Discovery Adventures Park and giving Discovery a new 'LBE' concept - Discovery Comes to
                                Life. The first park is in Moganshan, Zhejiang China. APAX Recreation brings the content and spirit of Discovery to life with an
                                outdoor lifestyle approach and three main aims - ecotourism, outdoor sports, and education all in one. And from there, continue
                                to launch more theme parks worldwide.
                            </p>
                            <p v-if="!isch">
                                Discovery Adventures Park 探索极限主题公园是 APAX Recreation 引入并孵化的 IP 项目。
                                APAX Recreation 引入国际优质探索品牌IP，创造了全球首个Discovery探索极限主题公园，，带您踏上独一无二的旅程，让“Discovery探索”的內涵与精神成为真实的体验，Discovery Comes to Life (探索成真)，赋予Discovery 全新’LBE' 概念 ，打造国际旅游目的地，集“生态旅游，户外运动，科普教育” 为一体的主题公园，并由此逐步进驻世界各地。
                            </p>
                            <div class="parkButton">
                                <router-link to="park">
                                    {{isch?'The World’s First Discovery Adventures Park':'全球首个Discovery探索极限主题公园'}}

                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="space clearfix"></div>
                    <div class="space clearfix"></div>
                    <div class="space clearfix" v-if="isMobile"></div>
                    <div class="col-xs-12 linkFrame">
                        <div class="set_6_btn in blue">
                            <router-link to="list" class="link">
                                <span>{{isch?'DISCOVER MORE':' 探索不凡'}}</span>
                            </router-link>
                            <div class="corners top"></div>
                            <div class="corners bottom"></div>
                        </div>
                    </div>
                </div>
                <div class="linkUs col-xs-12">
                    <a href="http://www.discoveryadventuresmoganshan.com/" target="_blank">{{isch?'Are you ready to take the adventure with us?':'你准备好和我们一起冒险了吗?'}}</a>
                </div>
            </div>
            <div class="mobile">
                <div class="content col-xs-12">
                    <div class="col-xs-12 recreationOneImg">
                        <img src="../../static/recreation/mobile2.jpg" alt="">
                        <div class="eyes col-xs-10 col-xs-offset-1">
                            <img src="../../static/recreation/title.png" alt="" class="eyesTitle">
                            <p v-if="isch">
                                Discovery Adventures Park is the Key IP project introduced and hatched by APAX Recreation. APAX Recreation brought Discovery
                                IP to China, creating the world's first Discovery Adventures Park and giving Discovery a new 'LBE' concept - Discovery Comes to
                                Life. The first park is in Moganshan, Zhejiang China. APAX Recreation brings the content and spirit of Discovery to life with an
                                outdoor lifestyle approach and three main aims - ecotourism, outdoor sports, and education all in one. And from there, continue
                                to launch more theme parks worldwide.
                            </p>
                            <p v-if="!isch">
                                Discovery Adventures Park 探索极限主题公园是 APAX Recreation 引入并孵化的 IP 项目。
                                APAX Recreation 引入国际优质探索品牌IP，创造了全球首个Discovery探索极限主题公园，，带您踏上独一无二的旅程，让“Discovery探索”的內涵与精神成为真实的体验，Discovery Comes to Life (探索成真)，赋予Discovery 全新’LBE' 概念 ，打造国际旅游目的地，集“生态旅游，户外运动，科普教育” 为一体的主题公园，并由此逐步进驻世界各地。
                            </p>
                        </div>
                    </div>
                    <div class="space clearfix"></div>
                    <div class="parkButton">
                        <router-link to="park">
                            {{isch?'The World’s First Discovery Adventures Park':'全球首个Discovery探索极限主题公园'}}
                        </router-link>
                    </div>
                    <div class="space clearfix"></div>
                    <div class="space clearfix" v-if="isMobile"></div>
                    <div class="col-xs-12 linkFrame">
                        <div class="set_6_btn in blue">
                            <router-link to="list" class="link">
                                <span>{{isch?'DISCOVER MORE':'探索不凡'}}</span>
                            </router-link>
                            <div class="corners top"></div>
                            <div class="corners bottom"></div>
                        </div>
                    </div>
                </div>
                <div class="linkUs col-xs-10 col-xs-offset-1">
                    <a href="http://www.discoveryadventuresmoganshan.com/" target="_blank">{{isch?'Are you ready to take the adventure with us?':'你准备好和我们一起冒险了吗?'}}</a>
                </div>
            </div>
            <div class="share col-xs-offset-1 col-xs-8">
                <Share></Share>
            </div>
        </div>
    </div>
</template>

<script>
    import OurworkSubNav from '@/components/OurworkSubNav.vue';
    import AContent from '@/components/AContent.vue';
    import Share from '@/components/Share.vue';
    import Arrow from '@/components/Arrow.vue';
    import { bus } from '../assets/js/app/public';

    export default {
        name: 'recreation-detail-view',
        components: {OurworkSubNav, Arrow, Share},
        data() {
            return {
                link: 'recreation',
                isMobile: false,
                isch:''
            };
        },
        created() {
            bus.$on('language',(val) => {this.isch = val})
            this.$bus.$emit('canvas-open');
        },
        mounted() {
//        $('.recreation-detail-view .play').on('click', () => $('.player-box').show().find('video')[0].play());
//        $('.player-box .close').on('click', () => $('.player-box').hide());
//            let sr = this.$sr({reset: true, delay: 0});
//            sr.reveal('.content div', {duration: 1000});
            if (this.IsPC()) {
                this.isMobile = true;
            }
            setTimeout(() => $('.recreation-detail-view').fadeIn(), 500);
        },
        methods: {
            IsPC: function () {
                let userAgentInfo = navigator.userAgent;
                let Agents = ['Android', 'iPhone',
                    'SymbianOS', 'Windows Phone',
                    'iPad', 'iPod'];
                let flag = true;
                for ( let v = 0; v < Agents.length; v++ ) {
                    if (userAgentInfo.indexOf(Agents[v]) > 0) {
                        flag = false;
                        break;
                    }
                }
                return flag;
            },
        },
    };
</script>

<style lang="less">
    @import '../assets/style/common.less';
    @import '../assets/style/but';

    .recreation-detail-view {
        display: none;
        padding-bottom: 150px;
        .set_6_btn.blue:hover .corners:after, .set_6_btn.blue:hover .corners:before {
            border-color: #36bbfc !important;
        }
        .set_6_btn.blue:hover a {
            color: #36bbfc;
            font-size: 16px;
            text-shadow: 0 0 2px #36bbfc,
            0 0 10px #fff;
        }
        .pc {
            .recreationOneImg {
                position: relative;
                .eyes {
                    position: absolute;
                    top: 10%;
                    left: 50%;
                    transform: translateX(-50%);
                    text-align: center;
                    color: #fff;
                    img {
                        width: 360px;
                        margin-bottom: 15vh;
                    }
                    p {
                        margin-bottom: 3em;
                    }
                    div {
                        margin-top: 1.5em;
                    }
                    .parkButton {
                        /*width:30%;*/
                        margin: 0 auto;
                        a {
                            border: 1px solid;
                            color: #fff;
                            padding: 15px 25px;
                        }
                    }
                    .parkButton:hover a {
                        color: #00b3ee;
                        border-color: #00b3ee;
                        transition: all 0.8s ease;
                        cursor: pointer;
                    }
                    span {
                        text-align: center;
                        color: #fff;
                        font-size: 2.8em;
                        display: block;
                        line-height: 50px;
                    }
                }
            }



            .title {
                text-align: center;
                padding: 0 5em;

                p {
                    line-height: 1.8em;
                }
            }
            .content {
                margin: 5em 0;
                position: relative;
                .linkFrame {
                    text-align: center;
                }
                .space {
                    padding: 10px 0;
                }
                img {
                    width: 100%;
                }
                .discovery {
                    margin: 2vh 0;
                    text-align: center;
                    img {
                        width: auto;
                    }
                }
                .text {
                    position: absolute;
                    top: 1vh;
                    left: 0;
                    /*top: 30px;*/
                    /*left: 20px;*/
                    width: 100%;
                    color: #fff;
                    div {
                        margin: 20px 0 20px 20px;
                        display: flex;
                        align-items: center;
                        .title {

                            /*display: block;*/
                            /*height: 30px;*/
                            padding: 5px 20px;
                            background-color: #00b3ee;
                            border-top-left-radius: 10px;
                            border-bottom-right-radius: 10px;
                            font-size: 1.8em;
                            float: left;
                        }
                        span:nth-last-child(1) {
                            font-size: 1.2em;
                            margin-left: 20px;
                            width: 60%;
                            float: left;
                        }
                    }
                    div:after {
                        clear: both;
                        display: block;
                        visibility: hidden;
                        content: '';
                    }
                }
                .text1 {
                    position: absolute;
                    bottom: 10vh;
                    left: 0;
                    /*top: 30px;*/
                    /*left: 20px;*/
                    width: 100%;
                    color: #fff;
                    div {
                        margin: 20px 0 20px 20px;
                        display: flex;
                        align-items: center;
                        .title {

                            /*display: block;*/
                            /*height: 30px;*/
                            padding: 5px 20px;
                            background-color: #00b3ee;
                            border-top-left-radius: 10px;
                            border-bottom-right-radius: 10px;
                            font-size: 1.8em;
                            float: left;
                        }
                        span:nth-last-child(1) {
                            font-size: 1.2em;
                            margin-left: 20px;
                            width: 60%;
                            float: left;
                        }
                    }
                    div:after {
                        clear: both;
                        display: block;
                        visibility: hidden;
                        content: '';
                    }
                }
                &:hover {
                    .hover {
                        opacity: 1;
                        transition: all 0.3s ease-in-out;
                    }
                }
                .hover {
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    /*padding: 12px;*/
                    top: 0;
                    left: 0;
                    opacity: 0;
                    transition: all 0.3s ease-in-out;

                    .mask {
                        background-color: rgba(0, 0, 0, 0.5);
                        transition: all 0.3s ease-in-out;
                        width: 100%;
                        height: 100%;
                        color: #fff;
                        font-size: 12px;
                        padding: 2em;
                        position: relative;

                        display: table;
                    }

                    .middle {
                        display: table-cell;
                        vertical-align: middle;
                        text-align: center;

                        img {
                            cursor: pointer;
                        }
                    }
                }
                .recreationText {
                    /*text-align: center;*/
                    .title1 {
                        margin: 15px 0;
                        font-size: 2em;
                        font-weight: normal;
                        /*text-align: justify;*/
                        /*text-justify: distribute-all-lines;*/
                        /*text-align-last: justify;*/
                    }
                    p {
                        /*text-align: center;*/
                    }
                    p:nth-child(1) {
                        font-size: 1.2em;
                    }
                }
            }
            .linkUs {
                text-align: right;
                a {
                    padding: 15px 20px;
                    border: 1px solid;
                }
                a:hover {
                    color: #00b3ee;
                }
            }

            .share {
                text-align: center;
            }
        }
        .subnav {
            padding-top: 80px;
        }
        .mobile {
            display: none;
            .recreationOneImg {
                position: relative;
                img {
                    width: 100%;
                    margin-top: 0.6rem;
                }
                .eyes {
                    position: absolute;
                    top: 5%;
                    text-align: center;
                    .eyesTitle {
                        width: 50%;
                    }
                    p {
                        color: #fff;
                        font-size: 12px;
                        margin-top: 0.2rem;
                    }
                }
            }

            .linkFrame {
                text-align: center;
                margin-top: 0.6rem;
            }
            .parkButton {
                /*margin-top: -1.8rem;*/
                position: relative;
                top:-1.8rem;
                text-align: center;
                a {
                    /*display: block;*/
                    font-size: 12px;
                    width: 90%;
                    padding: 0.2rem 0.06rem;
                    border: 1px solid #fff;
                    color: #fff;
                    margin: 0 auto;
                    text-align: center;
                }
            }
            .linkUs {
                text-align: center;
                margin-top: 0.6rem;
                a {
                    display: block;
                    font-size: 14px;
                    padding: 0.2rem 0.04rem;
                    border: 1px solid;
                }

            }
        }
    }

    @media screen and (max-width: @max-width) {
        .recreation-detail-view {
            .ourwork-sub-nav {
                /*margin-top: 65px;*/
            }
            .recreationOneImg {
                position: relative;
                img {
                    width: 100%;
                    margin-top: 0rem !important;
                }
            }
            .info {
                /*padding-top: 2em;*/
                .pc {
                    display: none;
                }
                .mobile {
                    display: block;
                }
            }
        }
    }
</style>
