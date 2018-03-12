<template>
    <div id="video" class="info-view">
        <div class="info col-xs-offset-2 col-xs-8">
            <h4>SHOWREELS</h4>
        </div>
        <div class="col-xs-offset-1 col-xs-10">
            <div class="content col-xs-12 col-sm-12">
                <ul class="videoList">
                    <li v-for="item in video" v-if="video">
                        <img :src="item.titleImg" alt="" class="logoTitle">
                        <!-- <img src="../assets/img/main/video-bg.jpg" alt=""> -->
                        <div class="maskVideo">
                            <img :src="item.bgUrl" alt="11" class="videoBg">
                            <div class="hover">
                                <div class="mask">
                                    <div class="middle"><img class="play" src="../assets/img/icon/play.png" alt=""
                                                             @click="playVideo(item.videoUrl)">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- <div class="col-xs-offset-1 col-xs-10">
             <div class="content col-xs-12 col-sm-12">
                 <img src="../assets/img/main/live-title.png" alt="" class="logoTitle">
                 &lt;!&ndash; <img src="../assets/img/main/video-bg.jpg" alt=""> &ndash;&gt;
                 <div class="maskVideo">
                     <img src="../../static/video-bg.jpg" alt="11" class="videoBg">
                     <div class="hover">
                         <div class="mask">
                             <div class="middle"><img class="play" src="../assets/img/icon/play.png" alt=""></div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         <div class="col-xs-offset-1 col-xs-10">
             <div class="content col-xs-12 col-sm-12">
                 <img src="../assets/img/main/recreation-title.png" alt="" class="logoTitle">
                 &lt;!&ndash; <img src="../assets/img/main/video-bg.jpg" alt=""> &ndash;&gt;
                 <div class="maskVideo">
                     <img src="../../static/video-bg.jpg" alt="11" class="videoBg">
                     <div class="hover">
                         <div class="mask">
                             <div class="middle"><img class="play" src="../assets/img/icon/play.png" alt=""></div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>-->
        <!--播放器-->
        <div class="player-box" v-if="this.IsPC()">
            <div>
                <div id="object">
                    <video :src=video controls="controls" class="videoAPAX"></video>
                </div>
                <div class="close"><img src="../assets/img/icon/close.png" alt="关闭"/></div>
                <div class="tips"></div>
            </div>
        </div>
        <div class="mobileVideoBg">
            <video src="" v-if="!this.IsPC()" class="mobileVideo"
                   x-webkit-airplay="allow" x5-video-orientation="landscape" x5-video-player-type="h5"
                   x5-video-player-fullscreen="true" controls="controls">

            </video>
        </div>

    </div>
</template>

<script>
    import OurworkSubNav from '@/components/OurworkSubNav.vue';
    import { bus } from '../assets/js/app/public';
    import video1 from '../../static/APAXEvents480.mp4';
    import video3 from '../../static/APAX RECREATION_480.mp4';
    import video2 from '../../static/Live v5.mp4';
    import events from '../assets/img/main/events-title.png';
    import live from '../assets/img/main/live-title.png';
    import recreation from '../assets/img/main/recreation-title.png';
    import bg1 from '../../static/video-bg.jpg';
    import bg2 from '../../static/video-bg.jpg';
    import bg3 from '../../static/video-bg.jpg';

    export default {
        name: 'Events-video',
        data() {
            return {
                link: 'events',
                showO: 3,
                video: [
                    {
                        titleImg: events,
                        videoUrl: video1,
                        bgUrl: bg1,
                    },
                    {
                        titleImg: live,
                        videoUrl: video2,
                        bgUrl: bg2,
                    },
                    {
                        titleImg: recreation,
                        videoUrl: video3,
                        bgUrl: bg3,
                    },
                ],
                pauseO: false,
            };
        },
        components: {OurworkSubNav},
        created() {
            this.$bus.$emit('canvas-open');
        },
        mounted() {
            bus.$emit('change', this.showO);
            bus.$emit('pause', this.pauseO);
            /*$('.play').on('click', () => {
             $('.videoAPAX').attr('src', video);
             $('.player-box').show().find('video')[0].play();
             });
             $('.player-box .close').on('click', () => {
             $('.player-box').hide();
             $('.player-box').find('video')[0].pause();
             });*/
            //视频结束控件
            let video = $('.mobileVideo');
            video.on('timeupdate', function () {

                // 视频结束前执行
                if (video[0].duration > 0 && video[0].currentTime > video[0].duration - 1.5) {
                    video[0].pause();
                }
            });
            video.on('pause', function () {

                $('.mobileVideoBg').hide();
                video[0].pause();
            });
        },
        methods: {
            playVideo: function (video) {
                if (this.IsPC()) {
                    console.log('pc');
                    $('.videoAPAX').attr('src', video);
                    $('.player-box').show().find('video')[0].play();
                    // 关闭视频
                    $('.player-box .close').on('click', () => {
                        $('.player-box').hide();
                        $('.player-box').find('video')[0].pause();
                    });
                } else {
                    console.log('手机');
                    let _video = $('.mobileVideo');
                    $('.mobileVideoBg').show();
                    _video.attr('src', video);
                    _video[0].play();
                }

            },
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
        destroyed() {
            this.pauseO = true;
            bus.$emit('pause', this.pauseO);
        },
    };
</script>
<style lang="less">
    @import '../assets/style/common.less';

    .subnav {
        padding-top: 80px;
    }

    /*video{*/
    /*margin-top:4vh;*/
    /*height: 80vh;*/
    /*}*/
    .content {
        margin-top: 4em;
        position: relative;
        margin-bottom: 4em;
        /*视频播放背景*/
        .videoList {
            padding: 0;
            li {
                list-style: none;
                margin-top: 1.5rem;
                >img{

                }
            }
            .logoTitle {
                width: 180px;
                margin-bottom: 1em;
            }
            img:nth-child(2) {
                width: 100%;
            }
            .maskVideo:hover {
                .hover {
                    opacity: 1;
                    transition: all 0.3s ease-in-out;
                }
            }
            .maskVideo {
                position: relative;
                font-size: 0;
                > img {
                    width: 100%;
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
                        /*padding: 2em;*/
                        position: relative;

                        display: table;
                    }

                    .middle {
                        /*display: table-cell;*/
                        /*vertical-align: middle;*/
                        /*text-align: center;*/
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        img {
                            cursor: pointer;
                        }
                    }
                }
            }
        }

        .share {
            text-align: center;
        }
    }

    .player-box {
        background-color: red;
        /*margin: 5em 0;*/
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

    //手机视频
    .mobileVideoBg {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        .mobileVideo {
            width: 100%;
            height: 100%;
        }
    }

    @media screen and (max-width: @max-width) {
        .content {
            margin-top: 0;
        }
    }
</style>
