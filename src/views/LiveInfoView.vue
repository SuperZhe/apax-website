<template>
    <div class="info-view live-info-view clearfix">
        <div class="info live col-xs-offset-1 col-xs-10 col-sm-8 col-sm-offset-2">
            <img src="../assets/img/main/live-title.png" alt="" class="liveInfoImg">
            <div class="liveContent" :class="{text:isText2}">
                <h3 class="shine">{{isch?'BRING EMOTIONS TO LIFE':'让娱乐绽放生活\n'}}</h3>
                <!--<br><br><br>-->
                <p v-if="isch">We continually strive to bring you unprecedented platforms, owned or licensed but always uniquely APAX Live.<br>
                    By exploiting our expertise in creative thinking, exceptional production and exponential marketing, <br>APAX Live brings you the best in music, fashion, and entertainment.
                </p>
                <p v-if="!isch">
                    通过我们的创新思维、杰出的制作和体验营销方面的专业知识，
                    为您带来音乐、时尚和娱乐为一体的最佳体验。<br>
                    为您开启国际优质IP，带来独特的平台 - APAX Live。<br>
                </p>
                <br>

                <div class="set_6_btn in blue">
                    <router-link to="live/nav" class="link">
                        <!--<img src="../assets/img/main/more.png" alt="">-->
                        <span>{{isch?'CURIOUS TO SEE MORE':'遇见精彩'}}</span>
                    </router-link>
                    <div class="corners top"></div>
                    <div class="corners bottom"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { bus } from '../assets/js/app/public';
export default {
    name : 'live-info-view',
    data(){
        return{
            isText2:false,
            isch:''
        }
    },
    created(){
        bus.$on('language',(val) => {this.isch = val})
        this.$bus.$emit('canvas-close');
    },
    mounted(){

//        setTimeout(()=> this.$('.live-info-view').fadeIn(), 500);
        setTimeout(()=> this.isText2 = true, 200);
        setTimeout(()=> this.$('.live-info-view').css({'display':'flex'}), 500);

    }
}
</script>

<style lang="less">
@import '../assets/style/common.less';
@import '../assets/style/but';
.live-info-view {
    display: none;
    height: 100vh;
    padding-top: 95px;
    align-items: center;
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
    .text{
        -webkit-animation: textUp 0.6s linear	 forwards;
        -moz-animation: textUp 0.6s linear	 forwards;
        -o-animation: textUp 0.6s linear	 forwards;
        animation: textUp 0.6s linear	 forwards;
        animation-delay: 0.6s;
        -moz-animation-delay: 0.6s;
        -webkit-animation-delay: 0.6s;
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
            opacity: 1;
            -webkit-transform: translateY(0px);
            -moz-transform:translateY(0px);
            -o-transform:translateY(0px);
            transform:translateY(0px);
        }
    }

    .liveInfoImg{
        -webkit-animation: initAn 0.6s linear  forwards;
        -moz-animation: initAn 0.6s linear  forwards;
        -o-animation: initAn 0.6s linear  forwards;
        animation: initAn 0.6s linear  forwards;
    }
    .liveContent{
       opacity: 0;
    }
    .set_6_btn.blue:hover .corners:after, .set_6_btn.blue:hover .corners:before{
        border-color:#e5369e !important ;
    }
    .set_6_btn.blue:hover a{
        color: #e5369e;
        font-size: 16px;
        text-shadow: 0 0 2px #e5369e,
        0 0 10px #fff;
    }
    //闪光动画
    .shine {
        line-height: normal !important;
        background: #222 -webkit-gradient(linear, left top, right top, from(#222), to(#222), color-stop(0.1,#fff)) 0 0 no-repeat;
        background: #222 -moz-gradient(linear, left top, right top, from(#222), to(#222), color-stop(0.1,#fff)) 0 0 no-repeat;
        background: #222 -o-gradient(linear, left top, right top, from(#222), to(#222), color-stop(0.1,#fff)) 0 0 no-repeat;
        -webkit-background-size: 100px;
        color: rgba(141, 141, 141, 0.5);
        -webkit-background-clip: text;
        /*width:55%;*/
        /*margin: 0 auto;*/
        margin-left: auto;
        margin-right: auto;
        /*font-size:60px;*/
        /*font-weight:bold !important;*/
        /*display:block;*/
        -webkit-animation-name: shine;
        -webkit-animation-duration: 3s;
        -webkit-animation-iteration-count: infinite;
    }
    @-webkit-keyframes shine
    {
        0%
        {
            background-position: top left;
        }
        100%
        {
            background-position: top right;
        }
    }

}
@media screen and (max-width: @max-width) {
.live-info-view  {
    padding-top: 2.4rem;
    /*margin-top: 3em;*/
    /*height:auto;*/
    /*display: block !important;*/
    h3{
        font-size: 1.5em;
    }
    img{
        height: 24px;
    }
    }
}
</style>
