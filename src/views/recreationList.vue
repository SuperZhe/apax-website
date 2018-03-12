<template>
    <div class="recreation-list-view clearfix">


        <div class="info col-xs-offset-1 col-xs-10">
            <div class="content col-xs-12">
                <div class="pc">
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
                </div>
                <div class="mobile">
                    <div class="col-xs-12 navImg">
                        <img src="../../static/recreation/mobile3.jpg" alt="">
                    </div>

                </div>
                <div class="space clearfix"></div>
                <div class="navText2">
                    <ul class="secondaryNav">
                        <li>
                            <router-link to="list/dna-1">
                                <img src="../../static/recreation/btn-1.png" alt="" >
                            </router-link>
                        </li>
                        <li>
                            <router-link to="list/dna-2">
                                <img src="../../static/recreation/btn-3.png" alt="">
                            </router-link>
                        </li>
                        <li>
                            <router-link to="list/dna-3">
                                <img src="../../static/recreation/btn-2.png" alt="">
                            </router-link>
                        </li>
                    </ul>
                </div>
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
        .dnaImg:hover {
            transform: scale(1.2);
            transition: all 0.4s ease-in-out;

        }
        .set_6_btn.blue:hover .corners:after, .set_6_btn.blue:hover .corners:before {
            border-color: #36bbfc !important;
        }
        .set_6_btn.blue:hover a {
            color: #36bbfc;
            font-size: 16px;
            text-shadow: 0 0 2px #36bbfc,
                /*0 0 4px #36bbfc,*/ /*0 0 10px #36bbfc,*/ /*0 0 20px #fff,*/ /*0 0 30px #fff,*/ 0 0 10px #fff;
        }
        .subnav {
            padding-top: 80px;
        }

        .info {
            margin-top: 9vh;
        }

        .content {
            margin: 5em 0;
            position: relative;
            .pc {
                .navImg {
                    position: relative;
                    > img {
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
                        justify-content: space-around;
                        align-items: center;
                        width: 55%;
                        li {
                            a {
                                display: block;
                                width: 80%;
                                img {
                                    width: 100%;
                                }
                            }
                        }
                    }
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
            }
            .linkFrame {
                text-align: center;
            }
            .mobile{
                display: none;
                .navImg {
                    position: relative;
                    > img {
                        width: 100%;
                    }
                }
                //二级导航

                .linkFrame {
                    text-align: center;
                }
                .discovery {
                    margin: 2vh 0;
                    text-align: center;
                    img {
                        width: auto;
                    }
                }
            }
            .navText2 {
                display: none;
                position: absolute;
                bottom: 2.6rem;
                left: 0%;
                transform: translateY(-50%);
                color: #fff;
                width: 100%;
                .secondaryNav {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    li {
                        /*width:90%;*/
                        a {
                            display: block;
                            width: 100%;
                            margin: 0 auto;
                            z-index:1000;
                            text-align: center;
                            img {
                                width: 80%;
                            }
                        }
                    }
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

    @media screen and (max-width: @max-width) {
        .recreation-list-view {
            .info {
                padding-top: 5em;
                .linkUs {
                    a {
                        font-size: 0.8em;
                        display: block;
                        padding: 10px 0;
                        text-align: center;
                    }
                }
                .linkFrame{
                    text-align: center;
                }
                .pc{
                    display: none;
                }
                .mobile{
                    display: block;
                }
                .navText2{
                    display: block;
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
            }
        }
    }
</style>
