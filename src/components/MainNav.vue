<template>
    <div class="main-nav">
        <div class="nav1" @click="goBack()"></div>
        <div class="nav2"></div>
        <div class="nav-toggle" @click="goNav" v-show="toggle"></div>
        <div class="nav-close" @click="goBack" v-show="close"></div>
        <div class="nav"></div>
        <div class="language"><img src="../../static/music/music_on.png" alt="" v-show=show @click="playMusic()"><img @click="playMusic()" src="../../static/music/music_off.png" alt=""v-show=!show><span>中文</span><span>EN</span></div>
        <audio :src="music"  hidden="true" autoplay="autoplay" loop="loop" id="audio" ></audio>
    </div>
</template>


<script>
    import music from '../../static/bg.mp3'
    import {bus} from  '../assets/js/app/public'
export default {
    name : 'main-nav',
    data (){
        return {
            toggle : true,
            close : false,
            show:true,
            music,
        }
    },
    created(){
        bus.$on('pause',(val) => {this.show = val})
    },
    mounted(){
//        var music = $('#audio');
//        music.plya();
        //--创建页面监听，等待微信端页面加载完毕 触发音频播放
        document.addEventListener('DOMContentLoaded', function () {
            function audioAutoPlay() {
                var audio = document.getElementById('audio');
                audio.play();
                document.addEventListener("WeixinJSBridgeReady", function () {
                    audio.play();
                }, false);
            }
            audioAutoPlay();
        });
//--创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
        document.addEventListener('touchstart', function () {
            function audioAutoPlay() {
                var audio = document.getElementById('audio');
                audio.play();
            }
            audioAutoPlay();
        });
        this.$bus.$on('change',()=> {
            this.toggle = true;
            this.close = false;
        });
    },
    methods : {
        goNav (){
            this.$router.push('/nav');
            this.toggle = !this.toggle;
            this.close = !this.close;
        },
        goBack (){
            this.$router.go(-1);
            this.toggle = !this.toggle;
            this.close = !this.close;
        },
        playMusic:function () {
            var music = document.getElementById('audio');
            this.show = !this.show;
            !this.show?music.pause():music.play();
        },
    }
}
</script>

<style lang="less">

@import '../assets/style/common.less';
@keyframes music {
    0%{transform:rotate(0deg)}
    100%{transform:rotate(360deg)}
}
.main-nav {
    @padding-height : 40px;
    @padding-width: 20px;

    >div {
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
    img{
        height: 22px;
        cursor: pointer;
        margin-bottom: -7px;
        /*transform: translateY(-8px);*/
    }
        img:nth-child(1){
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
}
</style>


