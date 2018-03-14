<template>
    <div class="iconic-detail-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="info col-xs-offset-1 col-xs-10">
            <div class="div1 col-xs-12">
                <span class="title col-sm-8 col-md-8 col-xs-12">{{isch?'Under Armour Stephen Curry Asian Tour':'Under Armour 史蒂芬•库里开启“见高下”2017亚洲行'}}</span>
                <!--</div>-->
                <!--<div class="date col-sm-3 col-xs-12">-->
                <span class="date col-sm-4 col-md-4 col-xs-12">{{isch?'Taimiao, Beijing, China':'中国，北京/杭州/成都'}}</span>
            </div>
            <div class="content col-xs-12">
                <!-- <AContent :content="info.title"></AContent> -->
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-9/new1.jpg" alt="">
                    <!--<p>-->
                    <!--For the third straight year, Stephen Curry went on the 2017 Asian tour powered by Under Armour beginning from the Imperial Ancestral Temple of Beijing. Within this beautiful landmark building, Under Armour kicked off the evening with a musical fashion show that combined modern chic with urban sensibility, bringing the audience a brand-new style and sports experience.</p>-->
                </div>
                <div class="col-xs-12">
                    <!--<img src="../../static/iconic-detail-9/new1.jpg" alt="">-->
                    <p v-if="isch">For the third straight year, Stephen Curry went on the 2017 Asian tour powered by Under Armour beginning from the Imperial Ancestral Temple of Beijing. Within this beautiful landmark building, Under Armour kicked off the evening with a musical fashion show that combined modern chic with urban sensibility, bringing the audience a brand-new style and sports experience.</p>
                    <p v-if="!isch">
                        Under Armour 携手史蒂芬•库里开启“见高下”2017亚洲行，于太庙进行了北京首站的发布会与见面会。夜幕降临之际，全场结合现代与古韵、运动与潮流的时尚大秀拉开精彩⼀夜的序幕。史蒂芬•库⾥手捧NBA奖杯，作为蝉联两届联盟最有价值球员（MVP）的他来到帝都，在高涨的气氛和粉丝的包围中亮相。到场的球迷与嘉宾与库里近距离接触，感受库里的篮球魅⼒。
                    </p>
                </div>
                <!--<div class="space clearfix"></div>-->
                <!--<div class="space clearfix"></div>-->
                <!--<div class="space clearfix"></div>-->
                <!--<div class=" col-xs-offset-1 col-xs-10">-->
                <!--<img src="../../static/iconic-detail-9/2.jpg" alt="">-->
                <!--<p>In the beautiful landmark building - Imperial Ancestral Temple, Under Armour kicked off the evening with a fashion show combined modern chic and classical elegance together to bring the audience a brand-new experience.It was a great opportunity for fans across Asia to receive firsthand training from Stephen and his brother Seth Curry (Dallas Mavericks point guard). </p>-->
                <!--</div>-->
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <!--<div class="s41 center col-xs-9"><img src="../../static/iconic-detail-9/3.jpg" alt=""></div>-->
                <div class=" col-xs-12">
                    <div class=" col-xs-12"><img src="../../static/iconic-detail-9/new2.jpg" alt="">
                        <!--<p>he new 3ZERO unveiled via the lion dance, which was hidden in the ball that the lion dangled to the stage. Stephen expressed his story and love toward the new 3ZERO. The 3rd UA Asian tour was an opportunity for Stephen to grow both on-and-off the court, as he continues to "Stare Down Destiny" and further strengthen himself mentally, physically and spiritually throughout this summer journey.</p>-->
                    </div>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class="center col-xs-12"><img src="../../static/iconic-detail-9/new3.jpg" alt=""></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class="center col-xs-12"><img src="../../static/iconic-detail-9/new4.jpg" alt=""></div>
            </div>
            <div class="back col-xs-1">
                <a href="javascript:;" @click="goback">BACK</a>
            </div>
            <div class="share col-xs-offset-1 col-xs-7">
                <Share></Share>
            </div>
            <div class="col-xs-3 pagingOne">
                <router-link to="detail-i">
                    <div @mouseover="pagePrevOver()" @mouseout="pagePrevOut()">
                        <img src="../assets/img/icon/page-prev.png" alt="" v-show="pagePrev">
                        <img src="../assets/img/icon/page-prev-on.png" alt="" v-show="!pagePrev">
                    </div>
                </router-link>
                <router-link to="detail-b">
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
