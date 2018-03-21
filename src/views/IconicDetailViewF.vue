<template>
    <div class="iconic-detail-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="info col-xs-offset-1 col-xs-10">
            <div class="col-xs-12">
                <p class="Tiffany" v-if="isch">
                    APAX Group has worked with the top tier jewelry brand Tiffany to produce large-scale events and witness its grand successful journey with the magic Tiffany Blue.
                </p>
                <p class="Tiffany" v-if="!isch">
                    APAX Group 为世界顶级珠宝品牌Tiffany & Co. 蒂芙尼长期以来呈现多场大型活动。见证它百年璀璨的经典传承，演绎怦然心动的传奇之蓝。
                </p>
            </div>
            <div class="title col-sm-9 col-xs-12">This is Tiffany</div>
            <div class="date col-sm-3 col-xs-12"><span>{{isch ? 'Beijing, China' : '中国，北京'}} </span></div>
            <div class="content col-xs-12">
                <!-- <AContent :content="info.title"></AContent> -->
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-5/new1.jpg" alt="">
                    <!--<p>-->
                    <!--“This is Tiffany” brand cultural exhibition took place in Phoenix International Media Center Beijing. The “This is Tiffany” brand cultural exhibition recalled the legendary history of Tiffany & Co. by recreating the journey through the five display areas.</p>-->
                </div>
                <!--<div class="space clearfix"></div>-->
                <div class="col-xs-12">
                    <!--<img src="../../static/iconic-detail-5/new1.jpg" alt="">-->
                    <p v-if="isch">
                        “This is Tiffany” brand cultural exhibition took place in Phoenix International Media Center Beijing. The “This is Tiffany” brand cultural exhibition recalled the legendary history of Tiffany & Co. by recreating the journey through the five display areas.</p>
                    <p v-if="!isch">
                        “This is Tiffany” 蒂芙尼品牌文化展在凤凰国际传媒中心举行。此次"This is Tiffany”品牌文化展旨在运用多种交互方式再现蒂芙尼的风格历程，通过钻石之王，传世风格，现代爱情，艺术情怀，传奇之蓝这五大展区来回顾品牌的传奇历史。
                    </p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <!--<div class="s41 center col-xs-9"><img src="../../static/iconic-detail-5/14.jpg" alt=""></div>-->
                <div class="sone  col-xs-12"><img src="../../static/iconic-detail-5/new2.jpg" alt=""></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class=" col-xs-12">
                    <!--<img src="../../static/iconic-detail-5/16.jpg" alt="">-->
                </div>
            </div>
            <div class="title col-sm-9 col-xs-12">{{isch ? 'The Art of Transformation' : '幻变之韵'}}  </div>
            <div class="date col-sm-3 col-xs-12"><span>{{isch ? 'Beijing, China' : '中国，北京'}}</span></div>
            <div class="content col-xs-12">
                <!-- <AContent :content="info.title"></AContent> -->
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-5/new4.jpg" alt="">
                    <!--<img src="../../static/iconic-detail-5/8.jpg" alt="">-->
                    <!--<p>-->
                    <!--Tiffany & Co. held a glorious exhibition titled “The Art of Transformation” which consisted of 200 stunning fine jewelry pieces, with the worldwide debut of 70 pieces of fine jewelry and the precious antique jewelry collection.</p>-->
                </div>
                <div class="col-xs-12">
                    <!--<img src="../../static/iconic-detail-5/new4.jpg" alt="">-->
                    <!--<img src="../../static/iconic-detail-5/8.jpg" alt="">-->
                    <p v-if="isch">
                        Tiffany & Co. held a glorious exhibition titled “The Art of Transformation” which consisted of 200 stunning fine jewelry pieces, with the worldwide debut of 70 pieces of fine jewelry and the precious antique jewelry collection.
                    </p>
                    <p v-if="!isch">
                        蒂芙尼以高级珠宝创作向“幻变之韵”致敬，于北京特别呈现近200件美轮美奂的高级珠宝，其中70余件高级珠宝作品为全球首发。此次活动更同时展示一系列蒂芙尼古董珍藏珠宝，尽显近180年非凡幻变之美。
                    </p>
                </div>

                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <!--<div class="s41 center col-xs-9"><img src="../../static/iconic-detail-5/9.jpg" alt=""></div>-->
                <div class=" col-xs-12">
                    <div class="sone  col-xs-12"><img src="../../static/iconic-detail-5/10.jpg" alt=""></div>
                </div>
                <!--<div class="space clearfix"></div>-->
                <!--<div class="space clearfix"></div>-->
                <!--<div class="space clearfix"></div>-->
                <!--&lt;!&ndash;<div class=" col-xs-offset-1 col-xs-10">&ndash;&gt;-->
                <!--&lt;!&ndash;<img src="../../static/iconic-detail-5/11.jpg" alt="">&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--<div class="space clearfix"></div>-->
                <!--<div class="space clearfix"></div>-->
                <!--<div class="space clearfix"></div>-->
                <!--<div class="col-xs-offset-1 col-xs-10">-->
                <!--<img src="../../static/iconic-detail-5/12.jpg" alt="">-->
                <!--</div>-->
            </div>
            <div class="title col-sm-9 col-xs-12">{{isch?'Tiffany Diamond':'蒂芙尼传奇黄钻耀世盛典\n'}} </div>
            <div class="date col-sm-3 col-xs-12"><span>{{isch ? 'Beijing, China' : '中国，北京'}}</span></div>
            <div class="content col-xs-12">
                <!-- <AContent :content="info.title"></AContent> -->
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-5/new8.jpg" alt="">
                    <!--<p>-->
                    <!--J & E Mansion was turned into a Tiffany Blue Temple for the Tiffany legendary yellow diamond ceremony. The beauty of the yellow diamond impressed the guests. Artist Tan Dun presented and performed the music that specially composed for the legendary diamond, together to create a Tiffany dream night.</p>-->
                </div>
                <div class="col-xs-12">
                    <!--<img src="../../static/iconic-detail-5/new8.jpg" alt="">-->
                    <p v-if="isch">
                        J & E Mansion was turned into a Tiffany Blue Temple for the Tiffany legendary yellow diamond ceremony. The beauty of the yellow diamond impressed the guests. Artist Tan Dun presented and performed the music that specially composed for the legendary diamond, together to create a Tiffany dream night.
                    </p>
                    <p v-if="!isch">
                        北京建一公馆摇身变成蒂芙尼的蓝色圣殿，蒂芙尼传奇黄钻耀世盛典在此举行。到场贵宾们皆被蒂芙尼传奇黄钻的骄阳之光以及来自蒂芙尼古董珍藏库中的奢华臻宝的雍容璀璨所吸引，更有谭盾献上以传奇黄钻为灵感创作的乐章，营造出如梦似幻的传奇之夜。
                    </p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class="center col-xs-12">
                    <img src="../../static/iconic-detail-5/new5.jpeg" alt="">
                </div>
                <!--<div class="col-xs-4">-->
                <!--<p>The guests were impressed by the beauty of the yellow diamond. Artist Tan Dun presented and performed the music that specially composed for the legendary diamond, together to create a Tiffany dream night.</p>-->
                <!--</div>-->
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <!--<div class="space clearfix"></div>-->
                <!--<div class="space clearfix"></div>-->
                <!--<div class=" center col-xs-12"><img src="../../static/iconic-detail-5/7.jpg" alt=""></div>-->
            </div>
            <div class="title col-sm-9 col-xs-12">{{isch?'Tiffany Blue Book Taimiao Gala':'蒂芙尼Blue Book太庙庆典\n'}} </div>
            <div class="date col-sm-3 col-xs-12"><span>{{isch ? 'Beijing, China' : '中国，北京'}}</span></div>
            <div class="content col-xs-12">
                <!-- <AContent :content="info.title"></AContent> -->
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-5/new6.jpg" alt="">
                    <!--<p>-->
                    <!--Beijing was filled with jewelry from the Tiffany 2011 collection and there were 400 guests dining under a transparent tent in front of the Taimiao and listening to Donna Summer live.</p>-->
                </div>
                <div class="col-xs-12">
                    <!--<img src="../../static/iconic-detail-5/new6.jpg" alt="">-->
                    <p v-if="isch">
                        Beijing was filled with jewelry from the Tiffany 2011 collection and there were 400 guests dining under a transparent tent in front of the Taimiao and listening to Donna Summer live.
                    </p>
                    <p v-if="!isch">
                        为庆祝“2010-2011 Blue Book华贵珠宝系列”闪耀发布，蒂芙尼于北京太庙，以“传奇之蓝，梦想之色”为主题，精心甄选了6套华贵珠宝系列作品，展示于大型“蒂芙尼蓝色礼盒”之中。钻石型的透明空间被蒂芙尼的经典蓝色照亮，400位中外嘉宾齐聚，觥筹交错。
                    </p>
                </div>
                <!--<div class="space clearfix"></div>-->
                <!--<div class="space clearfix"></div>-->
                <!--<div class="space clearfix"></div>-->
                <!--<div class=" col-xs-12">-->
                <!--<img src="../../static/iconic-detail-5/2.jpg" alt="">-->
                <!--</div>-->
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <!--<div class="s41 center col-xs-9"><img src="../../static/iconic-detail-5/3.jpg" alt=""></div>-->
                <div class=" col-xs-12">
                    <div class="sone  col-xs-12"><img src="../../static/iconic-detail-5/new7.jpg" alt=""></div>
                </div>
            </div>
            <div class="back col-xs-1">
                <a href="javascript:;" @click="goback">BACK</a>
            </div>
            <div class="share col-xs-offset-1 col-xs-7">
                <Share></Share>
            </div>
            <div class="col-xs-3 pagingOne">
                <router-link to="detail-e">
                    <div @mouseover="pagePrevOver()" @mouseout="pagePrevOut()">
                        <img src="../assets/img/icon/page-prev.png" alt="" v-show="pagePrev">
                        <img src="../assets/img/icon/page-prev-on.png" alt="" v-show="!pagePrev">
                    </div>
                </router-link>
                <router-link to="detail-g">
                    <div @mouseover="pageNextOver()" @mouseout="pageNextOut()">
                        <img src="../assets/img/icon/page-next.png" alt="" v-show="pageNext">
                        <img src="../assets/img/icon/page-next-on.png" alt="" v-show="!pageNext">
                    </div>
                </router-link>
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
                isch: '',
            };
        },
        created() {
            bus.$on('language', (val) => {this.isch = val;});
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
        .Tiffany {
            margin-bottom: 25px;
        }
        .pagingOne {
            text-align: right;
            text-align: right;
            /*display: flex;*/
            /*justify-content: space-around;*/
            /*align-items: center;*/
            div {
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
        .sone {
            /*top:-100px;*/
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
                span {
                    top: 1vh;
                }
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
            .sone {
                /*top: -40px;*/
            }
            .s43 {
                padding: 0px 10px;
                line-height: 1.5em;
            }
        }
    }
</style>
