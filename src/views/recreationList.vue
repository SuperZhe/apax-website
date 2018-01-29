<template>
    <div class="recreation-detail-view clearfix">


        <div class="info col-xs-offset-1 col-xs-10">
            <div class="content col-xs-12">
                <div class="col-xs-12 navImg">
                    <img src="../../static/recreation/KV.jpg" alt="">
                    <div class="navText">
                        <div>
                            <p>WHERE NATURE AWAITS<br>WHERE THE TRUE YOU AWAKES</p>
                            <P>探索自然，发现自我</P>
                        </div>
                        <ul class="secondaryNav">
                            <li>
                                <router-link to="list/dna-1">
                                <div class="line"></div>
                                <div><p>Outdoor Sports</p>
                                    <P>户外运动</P></div>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="list/dna-2">
                                <div class="line"></div>
                                <div><p>Ecotourism</p>
                                    <P>生态旅游</P></div>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="list/dna-3">
                                <div class="line"></div>
                                <div><p>Science Education</p>
                                    <P>科普教育</P></div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class="col-xs-12 linkFrame">
                    <div class="set_6_btn in blue">
                        <router-link to="/safety" class="link">
                            <span>CURIOUS TO SEE MORE</span>
                        </router-link>
                        <div class="corners top"></div>
                        <div class="corners bottom"></div>
                    </div>
                </div>
            </div>
            <div class="linkUs col-xs-offset-8 col-xs-4">
                <a href="javascript:;">Are you ready to take the adventure with us?</a>
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
        name: 'recreation-list-view',
        components: {OurworkSubNav, Arrow, Share},
        data() {
            return {
                link: 'recreation',
                isMobile: false,
            };
        },
        created() {
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
        padding-bottom: 150px;

        .subnav {
            padding-top: 80px;
        }

        .info {
            padding-top: 9vh;
        }

        .title {
            text-align: center;
            padding: 0 5em;

            p {
                line-height: 1.8em;
            }
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
            .navImg {
                position: relative;
            }
            //二级导航
            .navText {
                position: absolute;
                top: 50%;
                left: 120px;
                transform: translateY(-50%);
                color: #fff;
                div:nth-child(1) {
                    p {
                        font-size: 2.2em;
                    }
                    p:nth-child(1) {
                        margin-top: 0;
                        margin-bottom: 0;
                    }
                    p:nth-last-child(1) {
                        margin-top: 0;
                    }
                }
                .secondaryNav {
                    margin: 0;
                    padding: 0;
                    li:nth-child(1) {
                        margin: 0;
                    }
                    li {
                        float: left;
                        list-style: none;
                        a{
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            color: #fff;
                        }

                        margin-left: 60px;
                        .line {
                            height: 46px;
                            border: 1px solid #bd5720;
                        }
                        div:nth-last-child(1) {
                            margin-left: 10px;
                            p {
                                letter-spacing: 2px;
                                margin: 0;
                            }
                        }
                    }
                }
            }

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
                    font-size: 3em;
                    letter-spacing: 5px;
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
                color: #6D227B;
            }
        }
        .share {
            text-align: center;
        }

        .player-box {
            position: fixed;
            z-index: 20;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            top: 0;
            display: none;

            > div {
                position: relative;
                top: 50%;
                left: 50%;
                margin-top: -300px;
                margin-left: -450px;
                width: 900px;
                height: 600px;
                padding: 5px;
                background-color: #fff;
            }

            object, #object {
                width: 100%;
                height: 100%;

                video {
                    width: 100%;
                    height: 100%;
                }
            }

            .close {
                position: absolute;
                right: 10px;
                top: 10px;
                animation: kf-close-out 500ms ease;
                cursor: pointer;

                &:hover {
                    animation: kf-close-in 500ms ease;
                }
            }

            .tips {
                position: absolute;
                bottom: 20px;
                left: 40px;
            }
        }
    }

    @media screen and (max-width: @max-width) {
        .recreation-detail-view {

            .info {
                padding-top: 5em;
            }

            .title {
                padding: 0 2em;

                img {
                    width: 100%;
                }
            }

            .content {
                margin: 3em 0;

                .hover {
                    padding: 5px;
                    opacity: 1;
                }
            }
        }
    }
</style>
