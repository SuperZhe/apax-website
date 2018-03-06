<template>
    <div class="recreation-show-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="info col-xs-offset-1 col-xs-10">
            <div>
                <div class="title col-xs-12">
                </div>
                <div class="content col-xs-12">
                    <div class="col-xs-12 recreationOneImg">
                        <img src="../../static/recreation/show.jpg" alt="">
                        <div class="col-xs-10 eyes ">
                            <img src="../assets/img/main/recreation-title.png" alt="" class="eyesTitle">
                            <p>
                                APAX Recreation is committed to creating in-depth experience tourism destinations with international IP operations that set
                                “Culture" "Sports" "Tourism" “Education" as the core with five pillars as the content - customized travel, content media, health
                                data analysis, sport competition operations and outdoor e-commerce.
                            </p>
                            <ul class="col-xs-8 col-xs-offset-2">
                                <li>CULTURE</li>
                                <li>SPORT</li>
                                <li>TRAVEL</li>
                                <li>EDUCATION</li>
                            </ul>
                        </div>
                    </div>
                    <div class="space clearfix"></div>
                 <!--   <div class="col-xs-12 recreationText">
                        <h4 class="title1">The World’s First Discovery Adventures Park</h4>
                        <p>
                            APAX Recreation introduced an international premium IP to China. Creating the world's first Discovery Adventures Park and giving Discovery a new 'LBE' concept - Discovery
                            Comes to Life. The first park location is in Moganshan, Zhejiang China. APAX Recreation brings the content and spirit of Discovery to life with an outdoor lifestyle approach
                            and three main ambition - ecotourism, outdoor sports, and education all in one. And from there, continue to launch more theme parks worldwide!
                        </p>
                    </div>-->
                    <div class="space clearfix"></div>
                    <div class="space clearfix"></div>
                    <div class="space clearfix" v-if="isMobile"></div>
                    <div class="col-xs-12 linkFrame">
                        <div class="set_6_btn in blue">
                            <router-link to="detail" class="link">
                                <span>DISCOVER MORE</span>
                            </router-link>
                            <div class="corners top"></div>
                            <div class="corners bottom"></div>
                        </div>
                    </div>
                </div>
                <div class="linkUs col-xs-12">
                    <a href="http://www.discoveryadventuresmoganshan.com/" target="_blank">Are you ready to take the adventure with us?</a>
                </div>
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
    import { bus } from '../assets/js/app/public';

    export default {
        name: 'recreation-show-view',
        components: {OurworkSubNav, Arrow, Share},
        data() {
            return {
                link: 'recreation',
                isMobile: false,
            };
        },
        created() {
            this.$bus.$emit('canvas-open');
        },
        mounted() {
//        $('.recreation-detail-view .play').on('click', () => $('.player-box').show().find('video')[0].play());
//        $('.player-box .close').on('click', () => $('.player-box').hide());
//            let sr = this.$sr({reset: true, delay: 0});
//            sr.reveal('.content div', {duration: 1000});
            if (this.IsPC()) {
                this.isMobile = true;
            }
            setTimeout(() => $('.recreation-show-view').fadeIn(), 500);
        },
        methods: {
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
    };
</script>

<style lang="less">
    @import '../assets/style/common.less';
    @import '../assets/style/but';

    .recreation-show-view {
        display: none;
        padding-bottom: 150px;
        .set_6_btn.blue:hover .corners:after, .set_6_btn.blue:hover .corners:before{
            border-color:#36bbfc !important ;
        }
        .set_6_btn.blue:hover a{
            color: #36bbfc;
            font-size: 16px;
            text-shadow: 0 0 2px #36bbfc,
            0 0 10px #fff;
        }
        .recreationOneImg {
            position: relative;
            .eyes {
                position: absolute;
                top: 10%;
                left: 50%;
                transform: translateX(-50%);
                text-align: center;
                color: #fff;
                img{
                    width:auto;
                    margin: 0 auto;
                }
                .eyesTitle{
                    margin-bottom: 2em;
                }
                ul{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    li{
                        list-style: none;
                        float: left;
                        height: 120px;
                        width: 120px;
                        border-radius: 50%;
                        text-align: center;
                        line-height: 120px;
                        background-color: #229dd5;
                    }
                }
                span {
                    text-align: center;
                    color: #fff;
                    font-size: 2.8em;
                    display: block;
                    line-height: 50px;
                }
            }
        }
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
                top: 2em;
            }
        }

        .content {
            margin: 5em 0;
            position: relative;
            .linkFrame {
                text-align: center;
            }

            .space {
                padding: 10px 0;
            }
            img {
                width: 100%;
            }
            .discovery {
                margin: 2vh 0;
                text-align: center;
                img {
                    width: auto;
                }
            }
            .text {
                position: absolute;
                top: 1vh;
                left: 0;
                /*top: 30px;*/
                /*left: 20px;*/
                width: 100%;
                color: #fff;
                div {
                    margin: 20px 0 20px 20px;
                    display: flex;
                    align-items: center;
                    .title {

                        /*display: block;*/
                        /*height: 30px;*/
                        padding: 5px 20px;
                        background-color: #00b3ee;
                        border-top-left-radius: 10px;
                        border-bottom-right-radius: 10px;
                        font-size: 1.8em;
                        float: left;
                    }
                    span:nth-last-child(1) {
                        font-size: 1.2em;
                        margin-left: 20px;
                        width: 60%;
                        float: left;
                    }
                }
                div:after {
                    clear: both;
                    display: block;
                    visibility: hidden;
                    content: '';
                }
            }
            .text1 {
                position: absolute;
                bottom: 10vh;
                left: 0;
                /*top: 30px;*/
                /*left: 20px;*/
                width: 100%;
                color: #fff;
                div {
                    margin: 20px 0 20px 20px;
                    display: flex;
                    align-items: center;
                    .title {

                        /*display: block;*/
                        /*height: 30px;*/
                        padding: 5px 20px;
                        background-color: #00b3ee;
                        border-top-left-radius: 10px;
                        border-bottom-right-radius: 10px;
                        font-size: 1.8em;
                        float: left;
                    }
                    span:nth-last-child(1) {
                        font-size: 1.2em;
                        margin-left: 20px;
                        width: 60%;
                        float: left;
                    }
                }
                div:after {
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
            .recreationText {
                /*text-align: center;*/
                .title1 {
                    margin: 15px 0;
                    font-size: 2em;
                    font-weight: normal;
                    /*text-align: justify;*/
                    /*text-justify: distribute-all-lines;*/
                    /*text-align-last: justify;*/
                }
                p {
                    /*text-align: center;*/
                }
                p:nth-child(1) {
                    font-size: 1.2em;
                }
            }
        }
        .linkUs {
            text-align: right;
            a {
                padding: 15px 20px;
                border: 1px solid;
            }
            a:hover {
                color: #00b3ee;
            }
        }
        .share {
            text-align: center;
        }

    }
    @media screen and (max-width: 1200px){
        .recreation-show-view .recreationOneImg .eyes {
            ul{
                display: flex;
                justify-content: space-between;
                align-items: center;
                li{
                    list-style: none;
                    float: left;
                    height: 100px;
                    width: 100px;
                    border-radius: 50%;
                    text-align: center;
                    line-height: 100px;
                    background-color: #229dd5;
                    font-size: 15px;
                }
            }
            span {
                text-align: center;
                color: #fff;
                font-size: 2.8em;
                display: block;
                line-height: 50px;
            }
        }
    }
    @media screen and (max-width: @max-width) {
        .recreation-detail-view {

            .info {
                padding-top: 2em;
                .title {
                    font-size: 2em !important;
                    margin-bottom: 2vh;
                }
                .title2 {
                    font-size: 1.8em !important;
                }
                .title3 {
                    font-size: 1.2em;
                    font-weight: bold;
                }
                .list {
                    margin-top: 20vh;
                }
                .text {
                    margin-top: 4vh;
                }
                .awardsImg p {
                    margin: 0;
                }
                .linkUs {
                    a {
                        font-size: 0.8em;
                        display: block;
                        padding: 10px 0;
                        text-align: center;
                    }

                }
            }

            .title {
                padding: 0 2em;

                img {
                    width: 100%;
                }
            }

            .content {
                margin: 3em 0;
                .eyes {
                    span{
                        font-size: 0.6em;
                        line-height: 2em;
                    }
                }
                .recreationText{
                    .title1{
                        font-size: 1.6em;
                    }
                }

                .hover {
                    padding: 5px;
                    opacity: 1;
                }
            }
        }
    }
</style>
