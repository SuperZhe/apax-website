<template>
    <div class="recreation-detail-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="info col-xs-offset-1 col-xs-10">
            <div class="title col-xs-12" >
                <img src="../assets/img/main/recreation-title.png" alt="">
            </div>
            <div class="content col-xs-12">
                <div class=" col-xs-12">
                    <img src="../../static/recreation/1.jpg" alt="">
                    <!--<div class="text">-->
                        <!--<div><span class="title">TRAVEL</span><span>Upgrade of the Chinese tourism industry through new initiatives.</span></div>-->
                        <!--<div><span class="title">ECO - TOURISM</span><span>Integrate and celebrate the unique features &<br> beauty of greater China’s Iconic natural</span></div>-->
                        <!--<div><span class="title">SPORTS</span><span>Opportunity to embrace challenge through exhilarating adventure experiences.</span></div>-->
                        <!--<div><span class="title">EDUCATION</span><span>Inspiring curiosity through a variety of exclusive locations and explorative programs.</span></div>-->
                    <!--</div>-->
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class="col-xs-12 discovery">
                    <img src="../../static/recreation/discovery.png" alt="">
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class="col-xs-12">
                    <img src="../../static/recreation/3.jpeg" alt="">
                </div>
                <div class="space clearfix"></div>
                <div class="col-xs-12 recreationText">
                    <p class="">
                        OPENS YOUR EYES<br/>
                        FEED YOUR MIND<br/>
                        BEYOND LIMITS<br/>
                        INSPIRE YOUR HEART<br/>
                    </p>
                    <p>
                        World-class adventure brand – Discovery Adventures Park.<br/>
                        We created the first discovery adventures park in Moganshan<br>
                        that takes you onto a unique journey. <br/>
                        Open your eyes, feed your mind and inspires your heart<br/>
                    </p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <!--<div class="space clearfix"></div>-->
                <div class="col-xs-12">
                    <img src="../../static/recreation/2.jpg" alt="" class="gray">
                    <!--<div class= "text1">-->
                        <!--<div><span class="title">TRAVEL</span><span>Upgrade of the Chinese tourism industry through new initiatives.</span></div>-->
                        <!--<div><span class="title">ECO - TOURISM</span><span>Integrate and celebrate the unique features &<br> beauty of greater China’s Iconic natural</span></div>-->
                        <!--<div><span class="title">SPORTS</span><span>Opportunity to embrace challenge through exhilarating adventure experiences.</span></div>-->
                        <!--<div><span class="title">EDUCATION</span><span>Inspiring curiosity through a variety of exclusive locations and explorative programs.</span></div>-->
                    <!--</div>-->
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div  class="col-xs-12 linkFrame">
                    <div class="set_6_btn in blue">
                        <a href="http://www.apaxgroup.com/" class="link" target="_blank">
                            <span>GO TO OUR WEBSITE</span>
                        </a>
                        <div class="corners top"></div>
                        <div class="corners bottom"></div>
                    </div>
                </div>
            </div>
            <div class="back col-xs-1">
                <a href="#" @click="goback">BACK</a>
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
    import {bus} from  '../assets/js/app/public'
export default {
    name : 'recreation-detail-view',
    components : { OurworkSubNav, Arrow, Share },
    data (){
        return {
            link : 'recreation',
            isMobile:false
        }
    },
    created(){
        this.$bus.$emit('canvas-open');
    },
    mounted(){
//        $('.recreation-detail-view .play').on('click', () => $('.player-box').show().find('video')[0].play());
//        $('.player-box .close').on('click', () => $('.player-box').hide());
        let sr = this.$sr({reset: true, delay: 0});
        sr.reveal('.content div', {duration: 1000});
        if(this.IsPC()){
            this.isMobile = true
        }
    },
    methods : {
        goback(){
            this.$router.go(-1);
        },
        IsPC:function() {
            let userAgentInfo = navigator.userAgent;
            let Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
            let flag = true;
            for (let v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = false;
                    break;
                }
            }
            return flag;
        }
    }
}
</script>

<style lang="less">
@import '../assets/style/common.less';
@import '../assets/style/but';
.recreation-detail-view {
    padding-bottom: 150px;

    .subnav {
        padding-top: 80px;
    }

    .info {
        padding-top: 9vh;
    }

    .title {
        text-align: center;
        padding: 0 5em;

        p {
            line-height: 1.8em;
        }
    }

    .date {
        text-align: right;

        span {
            position: relative;
            top:2em;
        }
    }

    .content {
        margin: 5em 0;
        position: relative;
        .linkFrame{
            text-align: center;
        }
        .gray{
            -webkit-filter: grayscale(100%);
            -moz-filter: grayscale(100%);
            -ms-filter: grayscale(100%);
            -o-filter: grayscale(100%);

            filter: grayscale(100%);

            filter: gray;
        }
         .space {
            padding: 10px 0;
        }
        img {
            width: 100%;
        }
        .discovery{
            margin: 2vh 0;
            text-align: center;
            img{
                width:auto;
            }
        }
        .text{
            position: absolute;
            top:1vh;
            left: 0;
            /*top: 30px;*/
            /*left: 20px;*/
            width:100%;
            color: #fff;
            div{
                margin: 20px 0 20px 20px ;
                display: flex;
                align-items: center;
                .title{

                    /*display: block;*/
                    /*height: 30px;*/
                    padding: 5px 20px;
                    background-color: #00b3ee;
                    border-top-left-radius: 10px ;
                    border-bottom-right-radius: 10px;
                    font-size: 1.8em;
                    float: left;
                }
                span:nth-last-child(1){
                    font-size: 1.2em;
                    margin-left: 20px;
                    width:60%;
                    float: left;
                }
            }
            div:after{
                clear: both;
                display: block;
                visibility: hidden;
                content: '';
            }
        }
        .text1{
            position: absolute;
            bottom:10vh;
            left: 0;
            /*top: 30px;*/
            /*left: 20px;*/
            width:100%;
            color: #fff;
            div{
                margin: 20px 0 20px 20px ;
                display: flex;
                align-items: center;
                .title{

                    /*display: block;*/
                    /*height: 30px;*/
                    padding: 5px 20px;
                    background-color: #00b3ee;
                    border-top-left-radius: 10px ;
                    border-bottom-right-radius: 10px;
                    font-size: 1.8em;
                    float: left;
                }
                span:nth-last-child(1){
                    font-size: 1.2em;
                    margin-left: 20px;
                    width:60%;
                    float: left;
                }
            }
            div:after{
                clear: both;
                display: block;
                visibility: hidden;
                content: '';
            }
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
            top:0;
            left:0;
            opacity: 0;
            transition: all 0.3s ease-in-out;

            .mask {
                background-color: rgba(0, 0, 0, 0.5);
                transition: all 0.3s ease-in-out;
                width: 100%;
                height: 100%;
                color: #fff;
                font-size: 12px;
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
        .recreationText{
            text-align: center;
            p{
                text-align: center;
            }
            p:nth-child(1){
                font-size: 1.2em;
            }
        }
    }

    .share {
        text-align: center;
    }

    .player-box {
        position:fixed;
        z-index:20;
        width:100%;
        height:100%;
        background-color:rgba(0,0,0, 0.8);
        top:0;
        display:none;

        > div {
            position:relative;
            top:50%;
            left:50%;
            margin-top:-300px;
            margin-left:-450px;
            width:900px;
            height:600px;
            padding:5px;
            background-color:#fff;
        }

        object, #object {
            width:100%;
            height:100%;

            video {
                width: 100%;
                height: 100%;
            }
        }

        .close {
            position:absolute;
            right:10px;
            top:10px;
            animation:kf-close-out 500ms ease;
            cursor:pointer;

            &:hover {
                animation:kf-close-in 500ms ease;
            }
        }

        .tips {
            position:absolute;
            bottom:20px;
            left:40px;
        }
    }
}

@media screen and (max-width: @max-width) {
.recreation-detail-view {

    .info {
        padding-top: 5em;
    }

    .title {
        padding: 0 2em;

        img {
            width: 100%;
        }
    }

    .content {
        margin: 3em 0;

        .hover {
            padding: 5px;
            opacity: 1;
        }
    }
}
}
</style>
