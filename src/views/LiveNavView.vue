<template>
    <div class="live-nav-view clearfix">
        <div class="nav col-sm-offset-1 col-sm-10 col-xs-offset-1 col-xs-10">

            <div class="rocks clearfix col-sm-4">
                <!--<div class="col-xs-offset-4 col-xs-4 logo"><img src="../assets/img/main/rocks.png" alt=""></div>-->
                <div class="logo"><img src="../assets/img/main/rocks.png" alt=""></div>
                <div class="col-sm-8 col-sm-offset-2 col-xs-offset-1 col-xs-10">
                    <p>
                        The only place where we bring together the world’s top fashion brands and world’s leading music artists for a union of catwalk and concert.<br>
                        Founded in 2003, in association with the Prince’s trust by Prince Charles, APAX Live is the exclusive licensee for Asia and will continue to stage the most exciting show this side of the globe.
                    </p>
                </div>
            </div>
            <div class="btnCenter col-sm-4">
                <div class="set_6_btn in blue">
                    <router-link to="rocks" class="more more-1">
                            <span class="btn">
                            VIEW DETAILS
                        </span>
                    </router-link>
                    <div class="corners top"></div>
                    <div class="corners bottom"></div>
                </div>
            </div>
            <div class="rocks clearfix col-sm-4 ">
                <!--<div class="col-xs-offset-4 col-xs-4 logo"><img src="../assets/img/main/rocks.png" alt=""></div>-->
                <div class="logo fashionWeekdiv">
                    <img src="../assets/img/main/fashion.png" alt="" class="fashionWeek">
                </div>
                <div class="col-sm-8 col-sm-offset-2 col-xs-offset-1 col-xs-10">
                    <p>
                        As the strategic partner and leading events agency of Shanghai Fashion Week, APAX Group continuously assisted in enhancing the credibility and standards of Shanghai Fashion Week,
                        including consultancy, the management of the event and building the best truss-less tentage.
                    </p>
                </div>
            </div>
            <div class="btnCenter col-sm-4 col-sm-offset-4">
                <div class="set_6_btn in blue">
                    <router-link to="week" class="more more-1">
                                <span class="btn">
                                    VIEW DETAILS
                                </span>
                    </router-link>
                    <div class="corners top"></div>
                    <div class="corners bottom"></div>
                </div>
            </div>
            <div class="sifs clearfix col-sm-4">
                <!--<div class="col-xs-offset-4 col-xs-5 logo"><img src="../assets/img/main/sifs.png" alt=""></div>-->
                <div class="logo">
                    <img src="../assets/img/main/sifs.png" alt="" class="sifslogo">
                </div>
                <div class="col-sm-8 col-sm-offset-2 col-xs-offset-1 col-xs-10">
                    <p>
                        From 2014, APAX Live became the sole presenter of Shanghai International Fashion Showcase, the international platform under Shanghai Fashion Week official calendar,
                        <br>
                        we started catering an alternative program by introducing world-renowned fashion brands to the China market and marrying brands on crossover collections.
                    </p>

                </div>

            </div>
            <div class="btnCenter col-sm-4 col-sm-offset-8">
                <div class="set_6_btn in blue">
                    <router-link to="sifs" class="more">
                                <span class="btn">
                                    VIEW DETAILS
                                </span>
                    </router-link>
                    <div class="corners top"></div>
                    <div class="corners bottom"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'live-nav-view',
        created() {
            this.$bus.$emit('canvas-close');
        },
        mounted() {
            setTimeout(() => this.$('.live-nav-view').fadeIn(), 500);
            setTimeout(() => this.$('.live-nav-view').css({'display': 'flex'}), 500);
        },
    };
</script>

<style lang="less">
    @import '../assets/style/common.less';
    @import '../assets/style/but';

    .more {
        img {
            width: 50px;
        }
    }

    .live-nav-view {
        /*display: none;*/
        /*height: 100vh;*/
        /*padding-top: 95px;*/
        /*align-items: center;*/
        /*padding-bottom: 95px;*/
        padding-top: 26vh;
        padding-bottom: 10vh;
        .fashionWeekdiv{
            height: 92px;
            .fashionWeek{
                width: 96px;
                margin-top: 26px;
            }
        }

        .nav {
            //margin: 0 auto;
            /*padding: 0 10em;*/
        }
        .btnCenter {
            text-align: center;
            position: absolute;
            bottom:-5em;
        }
        .logo {
            text-align: center;
            .sifslogo {
                display: block;
                margin: 0 auto;
            }
        }

        .nav {position: relative}> div {
            /*padding: 5em 5em;*/
            /*position: relative;*/
        }

        .more {
            display: block;
            width: 100%;
            text-align: center;
            /*position: absolute;*/
            /*bottom:-1em;*/
            /*right:5em;*/
            border: none;
            /*margin-top: 2em;*/
            .btn {
                /*border: 1px solid;*/
                /*padding: 6px 20px ;*/
            }
        }
        .more-1 {
            bottom: -2em;
        }
    }

    @media screen and (max-width: @max-width) {
        .live-nav-view {
            padding-top: 15vh;
            padding-bottom: 15vh;
            height: auto;
            display: block !important;

            .btnCenter {
                text-align: center;
                position: absolute;
                bottom:1em;
            }
            .fashionWeekdiv{
                height: auto;
                .fashionWeek{
                    width: 96px;
                    /*margin-top: 20px;*/
                }
            }
            .nav {
                padding: 0;
            }

            .nav > div {
                padding: 2em 0em;
                position: relative;
            }

            .logo {
                padding: 1em 0;
                /*img { width: 100%; }*/
            }

            .rocks {
                .logo {
                    padding-top: 3em;
                }
            }

            .sifs {
                .logo {
                    padding-top: 3em;
                }
            }

            p {
                padding: 1em;
            }

            .more {
                /*position: absolute;*/
                /*bottom: -2em;*/
                /*right: 1em;*/
            }
        }
    }
</style>
