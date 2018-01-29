<template>
    <div class="news-detail clearfix">
        <!--<div class="subnav">-->
        <!--<OurworkSubNav :links="link"></OurworkSubNav>-->
        <!--</div>-->

        <!--<Arrow></Arrow>-->

        <div class="info col-xs-offset-1 col-xs-10">
            <div class="div1 col-xs-12">
                <span class="title col-sm-12 col-md-12 col-xs-12">APAX Group won two trophies for Campaign Greater China Agency Of the Year !</span>
                <!--</div>-->
                <!--<div class="date col-sm-3 col-xs-12">-->
                <!--<span class="date col-sm-4 col-md-4 col-xs-12"> The Great Wall, Beijing, China</span>-->
            </div>
            <div class="content col-xs-12">
                <!-- <AContent :content="info.title"></AContent> -->
                <div class="col-xs-12">
                    <img src="../../static/news/1.png" alt="">
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class="col-xs-12">
                    <p>
                        Campaign Asia-Pacific provides insights and intelligence into the ideas, work and personalities shaping the region's marketing-communications industry. Campaign Asia-Pacific dives deeper into important subjects and presents the most compelling information that matters to businesses in the fastest-growing and most exciting communications market in the world. Campaign Asia-Pacific's portfolio includes Awards, Conferences, Data System, Training Programs.
                    </p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="!isMobile"></div>
                <!--<div class="space clearfix" v-if="!isMobile"></div>-->
                <!--<div class="space clearfix" v-if="isMobile"></div>-->
                <div class="col-xs-12">
                    <img src="../../static/news/2.png" alt="">
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class="col-xs-12">
                    <p>
                        For 24 years, Campaign Agency of the Year awards has recognized inspired leadership, management excellence, outstanding business performance and overall achievements in advertising and communications industries. Campaign Agency of the Year is the largest and most highly recognized awards in the field. Rewarding companies and individuals that have not only contributed to raising industry standards but have also excelled in business performance. More than 800 agencies have participated in this year's awards competition. With results tabulated by PricewaterhouseCoopers（PWC）it is the only awards programme that honours agency performance at both a regional and national level.
                    </p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="!isMobile"></div>
                <div class="space clearfix" v-if="!isMobile"></div>
                <div class=" col-xs-12">
                    <img src="../../static/news/3.png" alt="">
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class=" col-xs-12">
                    <p class="differentText">
                        <span>Greater China Independent Agency of the Year</span><br>
                        <span>GOLD</span><br>
                        <span>Greater China Experiential Marketing Agency of the Year </span><br>
                        <span>SILVER</span><br>
                    </p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <!--<div class="space clearfix"></div>-->
                <!--<div class="space clearfix"></div>-->
                <!--<div class="space clearfix"></div>-->
                <!--<div class="s41 center col-xs-9"><img src="../../static/iconic-detail-1/4.jpg" alt=""></div>-->
                <div class="col-xs-12">
                    <!--<div class="s43 col-xs-5">For both Fendi and Karl Lagerfeld, “Fendi on the Wall” was recorded as an epic masterpiece in history.</div>-->
                    <div class="col-xs-12">
                        <img src="../../static/news/4.png" alt="">
                    </div>
                </div>
                <div class="space clearfix"></div>
                <div class="col-xs-12">
                    <!--<div class="s43 col-xs-5">For both Fendi and Karl Lagerfeld, “Fendi on the Wall” was recorded as an epic masterpiece in history.</div>-->
                    <div class="col-xs-12">
                        <p>
                            APAX Group is honored to announce that we have won two trophies - one gold and one silver for Campaign Greater China Agency Of the Year. We couldn't have won these awards without the support of our respected clients!
                        </p>
                        <!--<p class="end">LOOK FORWARD TO OUR NEXT WAVE!</p>-->
                    </div>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class="col-xs-12">
                    <!--<div class="s43 col-xs-5">For both Fendi and Karl Lagerfeld, “Fendi on the Wall” was recorded as an epic masterpiece in history.</div>-->
                    <div class="col-xs-12">
                        <p class="end">LOOK FORWARD TO OUR NEXT WAVE!</p>
                    </div>
                </div>
                <div class="space clearfix"></div>
                <!--<div class="center col-xs-12"><img src="../../static/iconic-detail-1/6.jpg" alt=""></div>-->
            </div>
            <div class="back col-xs-1">
                <a href="javascript:;" @click="goback">BACK</a>
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
        name: 'news-detail',
        components: {OurworkSubNav, AContent, Arrow, Share},
        data() {
            return {
                link: 'events',
                info: {},
                showO: 1,
                isMobile: false,
            };
        },
        created() {
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
            goback() {
                this.$router.push(-1);
                this.$router.go(-1);

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

    .news-detail {
        padding-bottom: 150px;
        .differentText {
            font-size: 18px;
            text-align: center;
            margin: 0;
            span:nth-child(1) {
                color: #6D227B;
            }
            span:nth-child(3) {
                color: #d6a841;
            }
            span:nth-child(5) {
                color: #6D227B;
            }
            span:nth-child(7) {
                color: #9e9e9e;
            }
        }
        .subnav {
            padding-top: 80px;
        }

        .info {
            padding-top:17vh;
            .div1 {
                display: flex;
                align-items: flex-end;
                span:nth-last-child(1) {
                    padding-bottom: 6px;
                }
            }
        }
        .title {
            font-size: 2.6em;
        }

        .date {
            text-align: right;
            span {
                position: relative;
                top: 2em;
            }
        }

        .content {
            margin-top: 4em;
            margin-bottom: 5em;
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
        .end {
            font-size: 1.6em;
            text-align: center;
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
        .news-detail {
            .info {
                padding-top: 20vh;
                .div1 {
                    display: block;
                    span {
                        display: block;
                    }
                    span:nth-last-child(1) {
                        margin-top: 1em;
                        padding-bottom: 2px;
                    }
                }
            }

            .title {
                font-size: 1.5em;
            }

            .date {
                text-align: left;
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
