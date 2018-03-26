<template>
    <div class="iconic-detail-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="info col-xs-offset-1 col-xs-10">
            <div class="div1 col-xs-12">
                <span class="title col-sm-8 col-md-8 col-xs-12">{{isch?'Giorgio Armani "One Night Only"':'阿玛尼“唯有今宵”'}}</span>
                <span class="date col-sm-4 col-md-4 col-xs-12">{{isch?'New Tank, Beijing, China':'中国，北京新罐'}}</span>
            </div>
            <div class="content col-xs-12">
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-k/1.jpg" alt="">
                </div>
                <div class="col-xs-12">
                    <p v-if="isch">
                        To celebrate Giorgio Armani tenth anniversary in China, Mr. Giorgio Armani brought the five brand lines to Beijing, held a grand "One Night Only in Beijing” fashion show at 751 "New Tank”, being the first time that the five lines combined to be presented in one show. The night was brought to a climax when the 15 “Tribute to China” gowns that specially designed by Mr. Armani for this anniversary. The one and the only.
                    </p>
                    <p v-if="!isch">
                        为庆祝阿玛尼进入中国十周年，品牌创始人Giorgio Armani先生携旗下五个系列的重磅设计高调来京，举办盛大的“唯有今宵. 北京” 时装发布会，也是唯一一次集五个系列同时发布。北京新罐在APAX的打造和开发下，空前未有得成为了阿玛尼的独特环形秀场。15套阿玛尼先生特别设计的 “向中国致敬”系列高级定制礼服更是将当晚秀场推向高潮。
                    </p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class=" col-xs-12">
                    <div class=" col-xs-12"><img src="../../static/iconic-detail-k/2.jpg" alt="">
                    </div>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class="center col-xs-12"><img src="../../static/iconic-detail-k/3.jpg" alt=""></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class="center col-xs-12"><img src="../../static/iconic-detail-k/4.jpg" alt=""></div>
            </div>
            <div class="back col-xs-1">
                <a href="javascript:;" @click="goback">BACK</a>
            </div>
            <div class="share col-xs-offset-1 col-xs-7">
                <Share></Share>
            </div>
            <div class="col-xs-3 pagingOne">
                <router-link to="detail-b">
                    <div @mouseover="pagePrevOver()" @mouseout="pagePrevOut()">
                        <img src="../assets/img/icon/page-prev.png" alt="" v-show="pagePrev">
                        <img src="../assets/img/icon/page-prev-on.png" alt="" v-show="!pagePrev">
                    </div>
                </router-link>
                <!--<router-link to="detail-k">-->
                    <!--<div @mouseover="pageNextOver()" @mouseout="pageNextOut()">-->
                        <!--<img src="../assets/img/icon/page-next.png" alt="" v-show="pageNext">-->
                        <!--<img src="../assets/img/icon/page-next-on.png" alt="" v-show="!pageNext">-->
                    <!--</div>-->
                <!--</router-link>-->
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
        name: 'iconic-detail-view',
        components: {OurworkSubNav, AContent, Arrow, Share},
        data() {
            return {
                link: 'events',
                info: {},
                showO: 1,
                isMobile: false,
                pageNext: true,
                pagePrev: true,
                isch:''
            };
        },
        created() {
            bus.$on('language',(val) => {this.isch = val})
            this.$bus.$emit('canvas-open');
        },
        mounted() {
            bus.$emit('change', this.showO);
            window.scrollTo(0, 0);
            let sr = this.$sr({reset: true, delay: 0});
            sr.reveal('.content div', {duration: 1000});
            if (this.IsPC()) {
                this.isMobile = true;
            }
        },
        methods: {
            pagePrevOver: function () {
                this.pagePrev = false;
            },
            pagePrevOut: function () {
                this.pagePrev = true;
            },
            pageNextOver: function () {
                this.pageNext = false;
            },
            pageNextOut: function () {
                this.pageNext = true;
            },
            goback() {
                this.$router.push({path: '/ourwork/events/iconic'});
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
    };
</script>

<style lang="less" scoped>
    @import '../assets/style/common.less';

    .iconic-detail-view {
        padding-bottom: 150px;
        .div1 {
            display: flex;
            align-items: flex-end;
            span:nth-last-child(1) {
                padding-bottom: 6px;
            }
        }
        .pagingOne {
            text-align: right;
            /*display: flex;*/
            /*justify-content: space-around;*/
            /*align-items: center;*/
            div{
                display: inline-block;
            }
        }
        .subnav {
            padding-top: 80px;
        }

        .info {
            padding-top: 7vh;
        }

        .title {
            font-size: 2.2em;
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
            /*margin-top: 5vh;*/
            .space {
                padding: 10px 0;
            }

            .center {
                text-align: center;
            }

            img {
                width: 100%;
            }
        }

        .s11 {
            top: -100px;
            z-index: 1;
        }

        .s12 {
            top: -200px;
        }

        .s21 {
            top: -50px;
        }

        .s31 {
            z-index: 3;
        }

        .s32 {
            z-index: 2;
            top: -50px;
        }

        .s33 {
            top: -100px;
        }

        .s41 {
            z-index: 1;
        }

        .s42 {
            top: -100px;
        }

        .s43 {
            padding: 100px 50px;
            line-height: 2em;
        }
    }

    @media screen and (max-width: @max-width) {
        .iconic-detail-view {
            .info {
                padding-top: 4em;
                .div1 {
                    display: block;
                    span {
                        display: block;
                    }
                    span:nth-last-child(1) {
                        margin-top: 1em;
                    }
                }
            }

            .title {
                font-size: 1.5em;
            }

            .date {
                text-align: left;
                margin-bottom: 1.5em;
            }

            .s11 {
                top: -20px;
                z-index: 1;
            }

            .s12 {
                top: -40px;
            }

            .s21 {
                top: -20px;
            }

            .s31 {
                z-index: 3;
            }

            .s32 {
                z-index: 2;
                top: -20px;
            }

            .s33 {
                top: -40px;
            }

            .s41 {
                z-index: 1;
            }

            .s42 {
                top: -40px;
            }

            .s43 {
                padding: 0px 10px;
                line-height: 1.5em;
            }
        }
    }
</style>
