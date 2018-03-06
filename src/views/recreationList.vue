<template>
    <div class="recreation-list-view clearfix">


        <div class="info col-xs-offset-1 col-xs-10">
            <div class="content col-xs-12">
                <div class="col-xs-12 navImg">
                    <img src="../../static/recreation/KV.jpg" alt="">
                    <div class="navText">
                        <ul class="secondaryNav">
                            <li>
                                <router-link to="list/dna-1">
                                    <img src="../../static/recreation/btn-1.png" alt="" class="dnaImg">
                                </router-link>
                            </li>
                            <li>
                                <router-link to="list/dna-2">
                                    <img src="../../static/recreation/btn-3.png" alt="" class="dnaImg">
                                </router-link>
                            </li>
                            <li>
                                <router-link to="list/dna-3">
                                    <img src="../../static/recreation/btn-2.png" alt="" class="dnaImg">
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
                            <span>DISCOVER MORE</span>
                        </router-link>
                        <div class="corners top"></div>
                        <div class="corners bottom"></div>
                    </div>
                </div>
            </div>
            <div class="linkUs col-xs-12">
                <a href="http://www.discoveryadventuresmoganshan.com/" target="_blank">Are you ready to take the adventure with us?</a>
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
            setTimeout(() => $('.recreation-list-view').fadeIn(), 500);
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

    .recreation-list-view {
        padding-bottom: 150px;
        display: none;
        .dnaImg:hover{
            transform: scale(1.2);
            transition: all 0.4s ease-in-out;

        }
        .set_6_btn.blue:hover .corners:after, .set_6_btn.blue:hover .corners:before{
            border-color:#36bbfc !important ;
        }
        .set_6_btn.blue:hover a{
            color: #36bbfc;
            font-size: 16px;
            text-shadow: 0 0 2px #36bbfc,
                /*0 0 4px #36bbfc,*/
                /*0 0 10px #36bbfc,*/
                /*0 0 20px #fff,*/
                /*0 0 30px #fff,*/
            0 0 10px #fff;
        }
        .subnav {
            padding-top: 80px;
        }

        .info {
            margin-top: 9vh;
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
                >img {
                    width: 100%;
                }
            }
            //二级导航
            .navText {
                position: absolute;
                top: 65%;
                left: 10%;
                transform: translateY(-50%);
                color: #fff;
                .secondaryNav {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    display: flex;
                    justify-content:space-around;
                    align-items: center;
                    width:55%;
                    li{
                        a{
                            display: block;
                            width:80%;
                            img{
                                width:100%;
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
                color: #00b3ee;
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
        .recreation-list-view {
            .info {
                padding-top: 5em;

                .title {
                    font-size: 2em !important;
                    margin-bottom: 2vh;
                }
                .title2 {
                    font-size: 1.8em !important;
                }
                .title3 {
                    font-size: 1.2em;
                    font-weight: bold;
                }
                .list {
                    margin-top: 20vh;
                }
                .text {
                    margin-top: 4vh;
                }
                .awardsImg p {
                    margin: 0;
                }
                .linkUs {
                    a {
                        font-size: 0.8em;
                        display: block;
                        padding: 10px 0;
                        text-align: center;
                    }

                }
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
