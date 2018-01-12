<template>
    <div class="main-nav">
        <div class="nav1" @click="goBack()"></div>
        <div class="nav2"></div>
        <div class="pc">
            <div class="nav3">
                <div>
                    <a href="http://www.facebook.com/APAXGROUP" target="_blank"  @mouseover="hover(1)"
                       @mouseout="mouseout(1)" >
                        <img src="../assets/img/icon/facebook_off.png" alt="" v-show="!on1">
                        <img src="../assets/img/icon/facebook_on.png" alt="" v-show="on1">
                    </a>
                </div>
                <div>
                    <a href="https://weibo.com/apaxgroupsh?refer_flag=1001030103" target="_blank"  @mouseover="hover(2)"
                       @mouseout="mouseout(2)">
                        <img src="../assets/img/icon/weibo_off.png" alt="" v-show="!on2">
                        <img src="../assets/img/icon/weibo_on.png" alt="" v-show="on2">
                    </a>
                </div>
                <div class="weixin1">
                    <p @click="shareWX1"  @mouseover="hover(3)"
                       @mouseout="mouseout(3)">
                        <img src="../assets/img/icon/weixin_off.png" alt="" v-show="!on3">
                        <img src="../assets/img/icon/weixin_on.png" alt="" v-show="on3">
                    </p>
                    <div><img src="../assets/img/icon/erweima.jpg" class="erweima"></div>
                </div>
            </div>
        </div>
        <div class="mobile">
            <div class="nav3">
                <div>
                    <a href="http://www.facebook.com/APAXGROUP" target="_blank"  >
                        <img src="../assets/img/icon/facebook_off.png" alt="">
                    </a>
                </div>
                <div>
                    <a href="https://weibo.com/apaxgroupsh?refer_flag=1001030103" target="_blank">
                        <img src="../assets/img/icon/weibo_off.png" alt="">
                    </a>
                </div>
                <div class="weixin1">
                    <p @click="shareWX1">
                        <img src="../assets/img/icon/weixin_off.png" alt="">
                    </p>
                    <div><img src="../assets/img/icon/erweima.jpg" class="erweima"></div>
                </div>
            </div>
        </div>
        <div class="nav-toggle" @click="goNav" v-show="toggle"></div>
        <div class="nav-close" @click="goBack" v-show="close"></div>
        <div class="nav"></div>
        <div class="language"><img src="../../static/music/music_on.png" alt="" v-show=show @click="playMusic()"><img
            @click="playMusic()" src="../../static/music/music_off.png" alt=""
            v-show=!show><span>中文</span><span>EN</span></div>
        <audio :src="music" hidden="true" autoplay="autoplay" loop="loop" id="audio"></audio>
    </div>
</template>
<script>
    import music from '../../static/bg.mp3';
    import { bus } from '../assets/js/app/public';

    export default {
        name: 'main-nav',
        data() {
            return {
                toggle: true,
                close: false,
                show: true,
                music,
                qr: '',
                on1:false,
                on2:false,
                on3:false,

            };
        },
        created() {
            bus.$on('pause', (val) => {this.show = val;});
        },
        mounted() {
//        var music = $('#audio');
//        music.plya();
            //--创建页面监听，等待微信端页面加载完毕 触发音频播放
            document.addEventListener('DOMContentLoaded', function () {
                function audioAutoPlay() {
                    var audio = document.getElementById('audio');
                    audio.play();
                    document.addEventListener('WeixinJSBridgeReady', function () {
                        audio.play();
                    }, false);
                }

                audioAutoPlay();
            });
//--创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
//            document.addEventListener('touchstart', function () {
//                function audioAutoPlay() {
//                    var audio = document.getElementById('audio');
//                    audio.play();
//                }
//
//                audioAutoPlay();
//            });
            this.$bus.$on('change', () => {
                this.toggle = true;
                this.close = false;
            });
        },
        methods: {
            goNav() {
                this.$router.push('/nav');
                this.toggle = !this.toggle;
                this.close = !this.close;
            },
            goBack() {
                this.$router.go(-1);
                this.toggle = !this.toggle;
                this.close = !this.close;
            },
            playMusic: function () {
                var music = document.getElementById('audio');
                this.show = !this.show;
                !this.show ? music.pause() : music.play();
            },
            shareWX1() {
                if (this.qr === '') {
//                this.$axios.get('http://test.tron-m.com/api/qr/json.do?text=' + encodeURIComponent(location.href)).then((response) => {
//                    this.qr = 'data:img/png;base64,' + response.data.msg;
                    $('.weixin1 div').toggle();
//                }, (error) => {
//                    console.log(error)
//                });
                }
                else {
                    $('.weixin1 div').toggle();
                }
            },

            shareWB() {
                window.open('http://v.t.sina.com.cn/share/share.php?title=' + encodeURIComponent(document.title) + '&url=' + encodeURIComponent(location.href) + '&source=bookmark', '_blank', 'width=450,height=400');
            },

            shareFB() {
                window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(location.href) + '&amp;t=' + encodeURIComponent(document.title), 'newWindow', 'width=450, height=400', 'center');
            },
            hover:function (v) {
                switch(v){
                    case 1:
                        this.on1 = true;
                    break;
                    case 2:
                        this.on2 = true;
                        break;
                    case 3:
                    this.on3 = true;
                    break;
                }
            },
            mouseout:function(v){
                switch(v){
                    case 1:
                        this.on1 = false;
                        break;
                    case 2:
                        this.on2 = false;
                        break;
                    case 3:
                        this.on3 = false;
                        break;
                }
            }
        },
    };
</script>

<style lang="less">

    @import '../assets/style/common.less';

    @keyframes music {
        0% {
            transform: rotate(0deg)
        }
        100% {
            transform: rotate(360deg)
        }
    }

    .main-nav {
        @padding-height: 34px;
        @padding-width: 20px;

        > div {
            z-index: 10;
        }

        .nav1 {
            width: 16px;
            height: 14px;
            background-image: url('../assets/img/icon/triangle-border.png');
            position: fixed;
            top: @padding-height;
            left: @padding-width;
            cursor: pointer;

            &:hover {
                background-position-x: -16px;
            }
        }

        .nav2 {
            width: 15px;
            height: 14px;
            background-image: url('../assets/img/icon/triangle-grey.png');
            position: fixed;
            bottom: @padding-height;
            left: @padding-width;
            cursor: pointer;

            &:hover {
                background-position-x: -15px;
            }
        }
        .nav3 {
            height: 14px;
            position: fixed;
            bottom: 39px;
            left: 52px;
            cursor: pointer;
            font-weight: 100;
            display: flex;
            align-items: flex-start;
            z-index:999;
            div {
                margin-right: 12px;
                margin-top: 2px;
                font-size: 0;
                img {
                    height: 20px;
                }
            }
            span:hover {
                color: #fff;
            }
        }
        .weixin1 {
            position: relative;
            p {
                margin: 0;
                font-size: 0;
            }
            div {
                display: none;
                position: absolute;
                top: -156px;
                left: -52px;
                img {
                    height: 140px;
                }
            }
        }
        .mobile{
            display: none;
        }
        .nav-toggle {
            width: 20px;
            height: 13px;
            background-image: url('../assets/img/icon/nav-toggle.png');
            position: fixed;
            top: @padding-height;
            right: @padding-width;
            cursor: pointer;
            &:hover {
                background-position-x: -20px;
            }
        }

        .nav-close {
            width: 14px;
            height: 15px;
            background-image: url('../assets/img/icon/nav-close.png');
            position: fixed;
            top: @padding-height;
            right: @padding-width;
            cursor: pointer;

            &:hover {
                background-position-x: -14px;
            }
        }

        .language {
            position: fixed;
            bottom: @padding-height;
            right: @padding-width;
            img {
                height: 22px;
                cursor: pointer;
                margin-bottom: -7px;
                /*transform: translateY(-8px);*/
            }
            img:nth-child(1) {
                animation: music 2s infinite linear;
            }
            span {
                margin-left: 10px;
                cursor: pointer;

                &:hover {
                    color: @over-color;
                }
            }
        }
        /*.weixin{*/
        /*top: -12px;*/
        /*position: absolute;*/
        /*right: -20px;*/
        /*div{*/
        /*display: none;*/
        /*position: absolute;*/
        /*top: -195px;*/
        /*left: -64px;*/
        /*img{*/
        /*width: 185px;*/
        /*}*/
        /*}*/
        /*}*/
        /*.weixin:hover{*/
        /*color: #fff;*/
        /*}*/
    }
    @media screen and (max-width: @max-width) {
        .main-nav {
            .pc {
                display: none;
            }
            .mobile {
                display: block;
                .nav3{
                    z-index:999;
                    height:0;
                    bottom: 55px;
                }
            }
        }
    }
</style>


