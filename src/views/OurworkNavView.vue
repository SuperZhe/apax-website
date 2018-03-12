<template>
    <div class="ourwork-nav-view">
        <div class="nav">
            <div class="ourworkLive">
                <router-link to="/ourwork/live">
                    <img src="../assets/img/main/live-title.png" alt="" :class="{leave:over1,end:isEnd}" @mouseover="liveOver()"
                         @mouseout="liveLeave()">
                </router-link>
            </div>
            <div class="ourworEvents" >
                <router-link to="/ourwork/events">
                    <img src="../assets/img/main/events-title.png" alt="" :class="{leave:over1,end:isEnd1}" @mouseover="liveOver()"
                         @mouseout="liveLeave()" >
                </router-link>
            </div>
            <div class="ourworkRecreation">
                <router-link to="/ourwork/recreation">
                    <img src="../assets/img/main/recreation-title.png" alt="" :class="{leave:over1,end:isEnd}"
                         @mouseover="liveOver()" @mouseout="liveLeave()" >
                </router-link>
            </div>
            <!--<div v-show=We>-->
            <!--<router-link to="/"><span>W</span>E CREATE NEXT WAVE</router-link>-->
            <!--</div>-->
        </div>

    </div>
</template>

<script>
    export default {
        name: 'ourwork-nav-view',
        data() {
            return {
                We: true,
                over1: false,
                isEnd:false,
                isEnd1:false
            };
        },
        created() {
            this.$bus.$emit('canvas-close');
        },
        mounted() {
            var _url = window.location.hash.split('?')[1];
            _url ? this.We = false : this.We = true;
            setTimeout(() => this.isEnd = true, 1200);
            setTimeout(() => this.isEnd1 = true, 500);
        },
        methods: {
            liveOver: function () {
                this.over1 = true;
            },
            liveLeave: function () {
                this.over1 = false;
            },
        },
    };
</script>

<style lang="less">
    @import '../assets/style/common.less';
    //动画


    .ourwork-nav-view {
        /*display: table;*/
        /*width: 100%;*/
        /*height: 100vh;*/
        height: 100vh;
        padding-top: 95px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 95px;
        @keyframes initAn {
            0% {
                opacity: 0;
                -webkit-transform: scale(1.8);
                -moz-transform: scale(1.8);
                -o-transform: scale(1.8);
                transform: scale(1.8);
            }

            100% {
                opacity: 1;
                -webkit-transform: scale(1);
                -moz-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
            }
        }

        .ourworEvents img {
            -webkit-animation: initAn 0.6s linear forwards;
            -moz-animation: initAn 0.6s linear  forwards;
            -o-animation: initAn 0.6s linear  forwards;
            animation: initAn 0.6s linear  forwards;
            /*animation-fill-mode:forwards;*/
        }

        .ourworkLive img {
            -webkit-animation: initAn 0.6s linear  forwards;
            -moz-animation: initAn 0.6s linear  forwards;
            -o-animation: initAn 0.6s linear  forwards;
            animation: initAn 0.6s linear  forwards;
            animation-delay: 0.7s;
            -moz-animation-delay: 0.7s;
            -webkit-animation-delay: 0.7s;
        }

        .ourworkRecreation img {
            -webkit-animation: initAn 0.6s linear  forwards;
            -moz-animation: initAn 0.6s linear  forwards;
            -o-animation: initAn 0.6s linear  forwards;
            animation: initAn 0.6s linear  forwards;
            animation-delay: 0.7s;
            -moz-animation-delay: 0.7s ;
            -webkit-animation-delay: 0.7s;
        }
        .nav {
            display: table-cell;
            vertical-align: middle;
            text-align: center;

            > div {
                display: inline;
                margin: 0 50px;
                img {
                    height: 24px;
                    -moz-transition: all 0.3s ease-in-out; /* for Firefox */
                    -o-transition: all 0.3s ease-in-out;
                    -webkit-transition: all 0.3s ease-in-out;
                    transition: all 0.3s ease-in-out;
                }
                img:hover {
                    opacity: 1;
                    height: 34px;
                    transition: height 0.3s ease-in-out;
                }
            }
            div:nth-last-child(1) {
                font-size: 28px;
                letter-spacing: 4px;
                margin-top: 20px;
                span {
                    font-size: 36px;
                    color: #920783;
                }
            }

            a {

                img{
                    opacity: 0;
                }
                .end{
                    opacity: 1;
                }
                .leave {
                    opacity: 0.3;
                    -moz-transition: all 0.3s ease-in-out ; /* for Firefox */
                    -o-transition: all 0.3s ease-in-out ;
                    -webkit-transition: all 0.3s ease-in-out ;
                    transition: all 0.3s ease-in-out;
                }
                /*display: none;*/
            }
        }
    }



    @media screen and (max-width: @max-width) {
        .ourwork-nav-view {

            .nav > div {
                display: block;
                margin: 50px 0;

            }
            div:nth-last-child(1) {
                font-size: 20px !important;
                span {
                    font-size: 24px !important;
                }
            }
            .ourworEvents img {
                -webkit-animation: initAn 0.8s linear forwards;
                -moz-animation: initAn 0.8s linear  forwards;
                -o-animation: initAn 0.8s linear  forwards;
                animation: initAn 0.8s linear  forwards;
                /*animation-fill-mode:forwards;*/
            }

            .ourworkLive img {
                -webkit-animation: initAn 0.8s linear  forwards;
                -moz-animation: initAn 0.8s linear  forwards;
                -o-animation: initAn 0.8s linear  forwards;
                animation: initAn 0.8s linear  forwards;
                animation-delay: 0.9s;
                -moz-animation-delay: 0.9s;
                -webkit-animation-delay: 0.9s;
            }

            .ourworkRecreation img {
                -webkit-animation: initAn 0.8s linear  forwards;
                -moz-animation: initAn 0.8s linear  forwards;
                -o-animation: initAn 0.8s linear  forwards;
                animation: initAn 0.8s linear  forwards;
                animation-delay: 0.9s;
                -moz-animation-delay: 0.9s ;
                -webkit-animation-delay: 0.9s;
            }
        }
    }
</style>
