<template>
    <div class="info-view home-view clearfix">
        <div class="info col-xs-offset-2 col-xs-8">
            <h2 :class="{light:light,titleHome:!light}">WE CREATE THE NEXT WAVE</h2>
            <div class="contentHome" :class="{text:judgeText}">
                <p>
                    Leading Experiential Marketing company in Asia Pacific. We focus on interpreting the brand’s DNA, providing innovative and valuable commercial solutions, through multi channels and marketing platforms. </p>
                <p>
                    APAX Group presents you with multi cultural platform: EVENTS / LIVE / RECREATION With partnerships throughout the world and outstanding strength of global resources bringing you unique experiences and cooperation opportunities.We are committed to translate the best local cultures and original contents onto the international stage. We nurture, We bring forth.</p>

                <div class="set_6_btn in blue">
                    <router-link to="/ourwork" class="more">
                        <!--<img src="../assets/img/main/more.png" alt="">-->
                        <!--<img src="../assets/img/main/jiantou.png" alt="">-->
                        VIEW DETAILS
                    </router-link>
                    <div class="corners top"></div>
                    <div class="corners bottom"></div>
                </div>
            </div>
            <!-- <video src="http://tronm.oss-cn-shanghai.aliyuncs.com/apax/pc-bg.mp4"></video> -->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home-view',
        data() {
            return {
                light: false,
                judgeText:false
            };
        },
        created() {
            this.$bus.$emit('canvas-close');
        },
        mounted() {
            setTimeout(() => this.judgeText = true, 900);
            setTimeout(() => this.light = true, 700);

            //setTimeout(()=> this.$('.home-view').fadeOut(() => this.$router.push('/ourwork')), 3000);
        },
        methods: {

        },
    };
</script>

<style lang="less">
    @import '../assets/style/common.less';
    @import '../assets/style/but';
    .contentHome {
        /*display: none;*/
        opacity: 0;
        p:nth-child(2){
            margin-bottom: 3em;
        }
    }

    .more {
        /*border: 1px solid;*/
        /*padding: 10px;*/
        /*margin-top: 2em;*/
        img {
            width: 50px;
        }
    }

    @media screen and (min-width: @max-width) {
        .home-view {
            padding-top: 30vh;
        }
    }
    .text{
        -webkit-animation: textUp 0.8s linear	 forwards;
        -moz-animation: textUp 0.8s linear	 forwards;
        -o-animation: textUp 0.8s linear	 forwards;
        animation: textUp 0.8s linear	 forwards;
    }
    .light {
        /*-webkit-animation: neon1 1s ease-in-out infinite alternate;*/
        /*-moz-animation: neon1 1s ease-in-out infinite alternate;*/
        /*animation: neon1 1s ease-in-out infinite alternate;*/
    }

    .titleHome {
        -webkit-animation: rotateWordsSecond 0.6s linear	 alternate;
        -moz-animation: rotateWordsSecond 0.6s linear	 alternate;
        -o-animation: rotateWordsSecond 0.6s linear	 alternate;
        animation: rotateWordsSecond 0.6s linear	 alternate;
    }

    @-webkit-keyframes neon1 {
        from {
            text-shadow: 0 0 10px #fff,
            0 0 20px #fff,
            0 0 40px #fff,
            0 0 60px #fff;
        }
        to {
            text-shadow: 0 0 2px #fff,
            0 0 4px #fff,
            0 0 6px #fff,
            0 0 8px #fff;
        }
    }

    @keyframes rotateWordsSecond {
        0% {
            opacity: 0;
            -webkit-transform: scale(2);
            -moz-transform:scale(2);
            -o-transform:scale(2);
            transform:scale(2);
        }

        100% {
            display: block;
            opacity: 1;
            -webkit-transform: scale(1);
            -moz-transform:scale(1);
            -o-transform:scale(1);
            transform:scale(1);
        }
    }
    @keyframes textUp {
        0% {
            opacity: 0;
            -webkit-transform: translateY(50px);
            -moz-transform:translateY(50px);
            -o-transform:translateY(50px);
            transform:translateY(50px);
        }

        100% {
            display: block;
            opacity: 1;
            -webkit-transform: translateY(0px);
            -moz-transform:translateY(0px);
            -o-transform:translateY(0px);
            transform:translateY(0px);
        }
    }
    .home-view{
        height: 100vh;
        padding-top: 95px;
        display: flex;
        align-items: center;
        padding-bottom: 95px;
    }
    .info-view .info p:nth-child(2){
        margin-top: 0.8em;
    }
    @media screen and (max-width: @max-width) {
        .home-view {
            display: block;
            height:auto;
            margin-top:3em;
            h2{
                font-size: 1.6em;
            }
        }
    }
</style>
