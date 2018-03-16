<template>
    <div class="recreation-show-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="info  col-xs-12 col-sm-10 col-sm-offset-1">
            <div class="pc ">
                <div class="title col-xs-12">
                </div>
                <div class="content col-xs-12">
                    <div class="col-xs-12 recreationOneImg">
                        <img src="../../static/recreation/show.jpg" alt="">
                        <div class="col-xs-10 eyes ">
                            <img src="../assets/img/main/recreation-title.png" alt="" class="eyesTitle">
                            <p v-if="isch">
                                APAX Recreation is committed to creating in-depth experience tourism destinations with international IP operations that set
                                “Culture" "Sports" "Tourism" “Education" as the core with five pillars as the content - customized travel, content media, health
                                data analysis, sport competition operations and outdoor e-commerce.
                            </p>
                            <p v-if="!isch">
                                APAX Recreation 致力于打造以 “文化”“体育”“旅游”“教育”为核心，以内容生产，大数据分析，赛事运营以及电商介入等为一体的深度体验国际旅游目的地IP运营以及孵化为核心的平台。
                            </p>
                            <ul class="col-xs-8 col-xs-offset-2">
                                <li>{{isch?'CULTURE':'文化'}}</li>
                                <li>{{isch?'SPORT':'体育'}}</li>
                                <li>{{isch?'TRAVEL':'旅游'}}</li>
                                <li>{{isch?'EDUCATION':'教育'}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="space clearfix"></div>
                    <div class="space clearfix"></div>
                    <div class="space clearfix"></div>
                    <div class="space clearfix" v-if="isMobile"></div>
                    <div class="col-xs-12 linkFrame">
                        <div class="set_6_btn in blue">
                            <router-link to="detail" class="link">
                                <!--<span>DISCOVER MORE</span>-->
                                <span>{{isch?'DISCOVER MORE':' 探索不凡'}}</span>
                            </router-link>
                            <div class="corners top"></div>
                            <div class="corners bottom"></div>
                        </div>
                    </div>
                </div>
                <div class="linkUs col-xs-12">
                    <a href="http://www.discoveryadventuresmoganshan.com/" target="_blank">
                        {{isch?'Are you ready to take the adventure with us?':'你准备好和我们一起冒险了吗?'}}</a>
                </div>
            </div>
            <div class="mobile">
                <div class="title col-xs-12">
                </div>
                <div class="content col-xs-12">
                    <div class="col-xs-12 recreationOneImg">
                        <img src="../../static/recreation/mobile1.jpg" alt="">
                        <div class="col-xs-offset-1 col-xs-10 eyes ">
                            <img src="../assets/img/main/recreation-title.png" alt="" class="eyesTitle">
                            <p v-if="isch">
                                APAX Recreation is committed to creating in-depth experience tourism destinations with international IP operations that set
                                “Culture" "Sports" "Tourism" “Education" as the core with five pillars as the content - customized travel, content media, health
                                data analysis, sport competition operations and outdoor e-commerce.
                            </p>
                            <p v-if="!isch">
                                APAX Recreation 致力于打造以 “文化”“体育”“旅游”“教育”为核心，以内容生产，大数据分析，赛事运营以及电商介入等为一体的深度体验国际旅游目的地IP运营以及孵化为核心的平台。
                            </p>
                            <ul class="col-xs-10 col-xs-offset-1">
                                <li>{{isch?'CULTURE':'文化'}}</li>
                                <li>{{isch?'SPORT':'体育'}}</li>
                                <li>{{isch?'TRAVEL':'旅游'}}</li>
                                <li>{{isch?'EDUCATION':'教育'}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="space clearfix"></div>
                    <div class="space clearfix"></div>
                    <div class="space clearfix"></div>
                    <div class="space clearfix" v-if="isMobile"></div>
                    <div class="col-xs-12 linkFrame">
                        <div class="set_6_btn in blue">
                            <router-link to="detail" class="link">
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
        name: 'recreation-show-view',
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
            setTimeout(() => $('.recreation-show-view').fadeIn(), 500);
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

    .recreation-show-view {
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
        .title {
            text-align: center;
            padding: 0 5em;

            p {
                line-height: 1.8em;
            }
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
                        width: auto;
                        margin: 0 auto;
                    }
                    .eyesTitle {
                        margin-bottom: 2em;
                    }
                    ul {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        li {
                            list-style: none;
                            float: left;
                            height: 120px;
                            width: 120px;
                            border-radius: 50%;
                            text-align: center;
                            line-height: 120px;
                            background-color: #229dd5;
                        }
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
        }
            .subnav {
                padding-top: 80px;
            }



            .date {
                text-align: right;

                span {
                    position: relative;
                    top: 2em;
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
                    top: 10%;
                    text-align: center;
                    .eyesTitle {
                        width: 80%;
                    }
                    p {
                        font-size: 12px;
                        margin-top: 0.5rem;
                    }
                    ul {
                        display: flex;
                        justify-content: space-around;
                        flex-wrap: wrap;
                        li {
                            margin-bottom: 0.5rem;
                            list-style: none;
                            float: left;
                            width: 1.8rem;
                            height: 1.8rem;
                            font-size: 12px;
                            background-color: #229dd5;
                            text-align: center;
                            line-height: 1.8rem;
                            color: #fff;
                            border-radius: 50%;
                        }
                    }
                }
            }
            .linkFrame {
                text-align: center;
                margin-top: 0.6rem;
            }
            .linkUs{
                text-align: center;
                margin-top: 0.6rem;
                a{
                    display: block;
                    font-size: 14px;
                    padding: 0.2rem 0.04rem;
                    border: 1px solid;
                }

            }
        }

    }

    @media screen and (max-width: 1200px) {
        .recreation-show-view
        .pc {
            .recreationOneImg .eyes {
                ul {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    li {
                        list-style: none;
                        float: left;
                        height: 100px;
                        width: 100px;
                        border-radius: 50%;
                        text-align: center;
                        line-height: 100px;
                        background-color: #229dd5;
                        font-size: 15px;
                    }
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
    }

    @media screen and (max-width: @max-width) {
        .recreation-show-view {
            .recreationOneImg img{margin-top: 0 !important}
            .pc {
                display: none;
            }
            .mobile {
                display: block;
            }
            .ourwork-sub-nav {
                /*margin-top: 65px;*/
            }
            .content{
                margin-top: 0;
            }
        }
    }
</style>
