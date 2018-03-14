<template>
    <div class="info-view events-info-view clearfix">
        <div class="info events col-xs-offset-1 col-xs-10 col-sm-8 col-sm-offset-2">
            <img src="../assets/img/main/events-title.png" alt="" class="eventsInfoImg">
            <div class="eventsContent" :class="{text:iseventsText}">
                <h3 class="shine">{{isch?'STORYTELLING IS OUR JOB':'用创意叙说故事'}}</h3>
                <p v-if="isch">
                    We develop and deliver a wide range of services covering fashion and premium events.<br>
                    With partnerships throughout the world and outstanding strength of global network<br>
                    bringing you unique brand experiences, creation of content and cooperation opportunities.
                </p>
                <p v-if="!isch">
                    我们提供全方位的服务，涵盖时尚与各类高端品牌活动推广体验。<br>
                    拥有世界各地的合作伙伴和全球资源网络，
                    为您带来独特的品牌体验、创造性内容营销及多种合作机会。
                </p>

                <div class="set_6_btn in blue">
                    <router-link to="/ourwork/events/iconic" class="link">
                        <span>{{isch?'READY FOR THE JOURNEY':'开启旅程'}}</span>
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
    name : 'events-info-view',
    data(){
        return{
            iseventsText:false,
            isch:''
        }
    },
    created(){
        bus.$on('language',(val) => {this.isch = val})
        this.$bus.$emit('canvas-close');
    },
    mounted(){
        setTimeout(()=> this.iseventsText = true, 200);
        setTimeout(()=> this.$('.events-info-view').css({'display':'flex'}), 500);
    }
}
</script>

<style lang="less">
@import '../assets/style/common.less';
@import '../assets/style/but';
.events-info-view {
    display: none;
    height: 100vh;
    padding-top: 95px;
    align-items: center;
    padding-bottom: 95px;
    //初入页面的放大动画
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
        -webkit-animation: textUp 0.8s linear	 forwards;
        -moz-animation: textUp 0.8s linear	 forwards;
        -o-animation: textUp 0.8s linear	 forwards;
        animation: textUp 0.8s linear	 forwards;
        animation-delay: 0.7s;
        -moz-animation-delay: 0.7s;
        -webkit-animation-delay: 0.7s;
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

    .eventsInfoImg{
        -webkit-animation: initAn 0.6s linear  forwards;
        -moz-animation: initAn 0.6s linear  forwards;
        -o-animation: initAn 0.6s linear  forwards;
        animation: initAn 0.6s linear  forwards;
    }
    .eventsContent{
        opacity: 0;
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
        /*width: 55%;*/
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
    .info {
        p {
            margin-top: 0;
        }

        p:nth-last-child(2) {
            margin-bottom: 3em;
        }
        .link {
            span {
                /*border: 1px solid;*/
                /*padding: 10px;*/
                /*font-size: 12px;*/
            }
        }
    }
}

@media screen and (max-width: @max-width) {
    .events-info-view  {
    /*margin-top: 3em;*/
        /*height:auto;*/
        /*display: block !important;*/
        padding-top: 2.4rem;
        h3{
        font-size: 1.5em;
    }
    img{
        height: 24px;
    }
    /*.events >img {*/
            /*width: 100%;*/
        /*}*/
    }
}
</style>
