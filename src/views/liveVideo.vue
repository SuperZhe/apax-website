<!--
<template>
    <div id="video">
        <div class="subnav">
            <OurworkSubNav :links=link></OurworkSubNav>
        </div>
        &lt;!&ndash;<video class="col-xs-offset-1 col-xs-10" :src=video  controls&ndash;&gt;
               &lt;!&ndash;x-webkit-airplay="true"&ndash;&gt;
               &lt;!&ndash;webkit-playsinline="true"&ndash;&gt;
               &lt;!&ndash;playsinline="true"&ndash;&gt;
               &lt;!&ndash;autoplay="autoplay"&ndash;&gt;
               &lt;!&ndash;x5-video-player-type="h5"&ndash;&gt;
               &lt;!&ndash;x5-video-player-fullscreen="true"&ndash;&gt;
               &lt;!&ndash;preload="auto" loop="true">&ndash;&gt;

        &lt;!&ndash;</video>&ndash;&gt;
        <div class="col-xs-offset-1 col-xs-10 container-O">
            <div class="content col-xs-12 col-sm-12">
                &lt;!&ndash; <img src="../assets/img/main/video-bg.jpg" alt=""> &ndash;&gt;
                <img src="../../static/video-bg.jpg" alt="11">
                <div class="hover">
                    <div class="mask"><div class="middle"><img class="play" src="../assets/img/icon/play.png" alt=""></div></div>
                </div>
            </div>
        </div>

        &lt;!&ndash;播放器&ndash;&gt;
        <div class="player-box ">
            <div>
                <div id="object">
                    <video :src=video controls="controls" class="videoC"></video>
                </div>
                <div class="close"><img src="../assets/img/icon/close.png" alt="关闭" /></div>
                <div class="tips"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import OurworkSubNav from '@/components/OurworkSubNav.vue';
    import {bus} from  '../assets/js/app/public'
    import video from '../../static/FashionRocks.mp4'
    export default {
        name:'live-video',
        data(){
            return{
                link : 'rocks',
                showO:4,
                video,
                pauseO:false
            }
        },
        components : { OurworkSubNav },
        mounted() {
            bus.$emit('change', this.showO);
            bus.$emit('pause', this.pauseO);
            $('.play').on('click', () => {$('.videoC').attr('src',video); $('.player-box').show().find('video')[0].play();});
            $('.player-box .close').on('click', () => $('.player-box').hide());
        },
        destroyed(){
            this.pauseO = true;
            bus.$emit('pause', this.pauseO);
        }
    }
</script>
<style lang="less">
    .subnav {
        padding-top: 80px;
    }
    /*video{*/
        /*margin-top:4vh;*/
        /*height: 80vh;*/
    /*}*/
    .container-O{

    }
    .content {
       margin-top: 8em;
        position: relative;
        /*margin-top: 4em;*/

        > img {
            width: 100%;
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
                /*font-size: 12px;*/
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
</style>
-->
