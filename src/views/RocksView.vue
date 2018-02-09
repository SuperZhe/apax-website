<template>
    <div class="rocks-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="info col-xs-offset-1 col-xs-10">
            <div class="title col-sm-10 col-xs-12">BLEND FASHION WITH MUSIC</div>
            <div class="sub-title col-xs-12">
                <p>
                    By marketing the unification of entertainment and trends, Fashion Rocks offers China & Asia a 360-degree concept with infinite opportunities through fashion and music.
                    An established IP weaving e-commerce, online & offline engagement and international broadcast distribution into a global platform reaching out to a multitude of consumers.
                </p>
            </div>
            <!--只有图与字-->
            <!--<div class="content col-xs-12">
                <div class="col-xs-12">
                    <img src="../../static/rocks-detail/2.jpeg" alt="">
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class="space clearfix"></div>
                <div class="col-xs-12"><img src="../../static/rocks-detail/1.png" alt=""></div>
                &lt;!&ndash;<div class="col-xs-12"><img src="../../static/rocks-detail/1.jpg" alt=""></div>&ndash;&gt;
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="!isMobile"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                &lt;!&ndash;<div class="col-xs-12"><img src="../../static/rocks-detail/2.jpg" alt=""></div>&ndash;&gt;
                <div class="s51 col-sm-12 col-xs-12 title">SUPERSTARS x SUPERBRANDS x SUPERMODELS</div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class="s52 col-sm-12 col-xs-12">
                    <p>
                        Fashion Rocks showcases super A-listers with world-renowned fashion brands in a winning formula presented on stage and online throughout the world!
                    </p>
                </div>

                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                &lt;!&ndash;<div class="space clearfix"></div>&ndash;&gt;
                <div class="col-xs-12"><img src="../../static/rocks-detail/3.jpg" alt=""></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                &lt;!&ndash;<div class="space clearfix"></div>&ndash;&gt;
                <div class="col-xs-12"><img src="../../static/rocks-detail/4.jpg" alt=""></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                &lt;!&ndash;<div class="space clearfix"></div>&ndash;&gt;
                &lt;!&ndash;<div class="space clearfix"></div>&ndash;&gt;
                <p>Across the globe, Fashion Rocks offers an exclusive experience combining fashion by top fashion brands and live music performances by world renowned musicians. As the exclusive licensee and organizer in Asia, APAX LIVE presented the first Fashion Rocks in Asia on October 14th, 2016 in Shanghai and the show was live streamed to over 50 million viewers online via Tencent Video.
                </p>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                &lt;!&ndash;<div class="space clearfix"></div>&ndash;&gt;
                &lt;!&ndash;<div class="space clearfix"></div>&ndash;&gt;
                <div class="s22 col-xs-12 col-sm-6"><img src="../../static/rocks-detail/5.jpg" alt=""></div>
                <div class="s41 col-xs-12 col-sm-6"><img src="../../static/rocks-detail/6.jpg" alt=""></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                &lt;!&ndash;<div class="space clearfix"></div>&ndash;&gt;
                &lt;!&ndash;<div class="space clearfix"></div>&ndash;&gt;
                <div class="col-xs-12"><img src="../../static/rocks-detail/7.jpg" alt=""></div>
                &lt;!&ndash;<div class="space clearfix"></div>&ndash;&gt;
                <div class="space clearfix"></div>
                <p class="rocks-text">
                    THE INAUGURAL FASHION ROCKS 2016 IN ASIA<br/>
                    <span>10 THOUSAND</span> LIVE AUDIENCE<br/>
                    <span>400 MILLION</span> GLOBAL AUDIENCE<br/>
                    OUTDOOR/APP/SOCIAL MEDIA VIEWERSHIP <span>45 MILLION</span><br/>
                    <span>RMB 900 MILLION </span>MEDIA VALUE<br/>
                    LIVE STREAM ON TENCENT <span>60 MILLION</span> VIEWS</p>
          &lt;!&ndash;      <div class="s51 col-sm-3 col-xs-12">About<br>Fashion Rocks</div>
                <div class="s52 col-sm-9 col-xs-12">
                    <p>Established in 2003 and founded by Prince’s Trust, Fashion Rocks was previously held in London, New York, Monaco and Rio de Janeiro. With astounding live fashion and music showcases lasting for 2.5 hours, bringing the best out of the two worlds – Music and Fashion, Fashion Rocks features A-List singers and artists including Beyoncé, Grace Jones, Robbie Williams, David Bowie, Justin Bieber and the likes together with Alexander McQueen, Burberry, Christian Dior, Gucci, Giorgio Armani and other world-class fashion brands.</p>
                    <h2>Fashion Rocks 2016 Artist Line</h2>
                    <h3>Charli XCX</h3>
                    <p>British pop singer Charli XCX is full of energy and talent, Fashion Rocks 2016 is her first official performance in China.</p>
                    <h3>CoCo Lee</h3>
                    <p>As the only Chinese singer to ever perform at the Oscars, Coco Lee is one of Asia’s music icons and the most well-known Asian singers. Coco also won the “I Am A Singer” competition in 2016, one of the most watched TV shows in Chinese television history.</p>
                    <h3>Usher</h3>
                    <p>Famous American superstar, musician, dancer and actor Usher, the 8 Grammies and 6 AMAs winner who has more than 1 RIAA diamond album, is one of the best selling artists in the music history, and also be called the most successful artist in the US by Billboard Magazine. Usher performed on Fashion Rocks New York in 2014 as the opening guest, he performed his new single named No Limit from his new album Hard II Love for the first time in Asia on Fashion Rocks 2016.</p>
                </div>&ndash;&gt;
            </div>-->
            <!--列表-->
            <div class="listItems">
                <div class="item col-sm-4 col-xs-12" v-for="item in items" :key="item.id" @click="goDetail(item.id)">
                    <img alt="" :src="config.host + item.conver">
                    <div class="hover">
                        <div class="mask">
                            <h2>{{ item.enTitle }}</h2>
                            <!-- <router-link :to="{ name: 'sifs-detail', params: { id: item.id }}"><img src="../assets/img/main/more.png" alt=""></router-link> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="back col-xs-1">
                <a href="#" @click="goback">BACK</a>
            </div>
        </div>
    </div>
</template>

<script>
    import OurworkSubNav from '@/components/OurworkSubNav.vue';
    import Arrow from '@/components/Arrow.vue';
    import { bus } from '../assets/js/app/public';

    export default {
        name: 'rocks-view',
        components: {OurworkSubNav, Arrow},
        data() {
            return {
                link: 'rocks',
                info: {},
                isMobile: false,
                showO: 5,
                items:[
                    {
                        id:1,
                        conver:'../../static/',
                        enTitle:'我是一张图'
                    }
                ]
            };
        },
        created() {
            this.$bus.$emit('canvas-open');
        },
        mounted() {
            bus.$emit('change', this.showO);
            let sr = this.$sr({reset: true, delay: 0});
            sr.reveal('.content div', {duration: 1000});
            if (this.IsPC()) {
                this.isMobile = true;
            }

        },
        methods: {
            goback() {
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

<style lang="less">
    @import '../assets/style/common.less';

    .rocks-view {
        padding-bottom: 150px;

        .subnav {
            padding-top: 80px;
        }

        .info {
            padding-top: 7vh;
        }

        .title {
            font-size: 2.2em;
        }

        .sub-title {
            padding-top: 10px;
            p {

            }
        }

        .date {
            text-align: right;

            span {
                position: relative;
                top: 2em;
            }
        }
        .rocks-text {
            text-align: center;
            span {
                color: #6D227B;
            }
        }
        .listItems {
            margin-left: -15px;
        }
        .item {
            font-size: 0;
            position: relative;
            margin-bottom: 30px;
            padding: 0 15px;

            > img {
                width: 100%;
            }

            &:hover {
                .hover {
                    opacity: 1;
                    transition: all 0.3s ease-in-out;
                }
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
                font-size: 12px;
                text-align: center;
                padding: 0 15px;
                /*padding-top: 20%;*/
                /*padding: 0 5px 10px 0;*/
            }

            h2 {
                margin: 0;
                height: 100%;
                line-height: 100%;
                transform: translateY(50%);
                font-size: 14px;
            }
        }
    }

    @media screen and (max-width: @max-width) {
        .rocks-view {
            .rocks-text {
                margin-top: 1.6em;
            }
            .info {
                padding-top: 2em;
            }

            .title {
                font-size: 1.5em;
            }

            .date {
                text-align: left;
            }

        }
    }
</style>
