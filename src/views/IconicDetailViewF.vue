<template>
    <div class="iconic-detail-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="info col-xs-offset-1 col-xs-10">
            <div class="col-xs-12">
                <p class="Tiffany">
                    APAX Group has worked with the top tier jewelry brand Tiffany to produce large-scale events and witness its grand successful journey with the magic Tiffany Blue.</p>
            </div>
            <div class="title col-sm-9 col-xs-12">This is Tiffany</div>
            <div class="date col-sm-3 col-xs-12"><span> Beijing, China</span></div>
            <div class="content col-xs-12">
                <!-- <AContent :content="info.title"></AContent> -->
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-5/new1.jpg" alt="">
                    <!--<p>-->
                        <!--“This is Tiffany” brand cultural exhibition took place in Phoenix International Media Center Beijing. The “This is Tiffany” brand cultural exhibition recalled the legendary history of Tiffany & Co. by recreating the journey through the five display areas.</p>-->
                </div>
                <div class="col-xs-12">
                    <!--<img src="../../static/iconic-detail-5/new1.jpg" alt="">-->
                    <p>
                        “This is Tiffany” brand cultural exhibition took place in Phoenix International Media Center Beijing. The “This is Tiffany” brand cultural exhibition recalled the legendary history of Tiffany & Co. by recreating the journey through the five display areas.</p>
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
                    <img src="../../static/iconic-detail-5/16.jpg" alt="">
                </div>
            </div>
            <div class="title col-sm-9 col-xs-12">The Art of Transformation  </div>
            <div class="date col-sm-3 col-xs-12"><span> Beijing, China</span></div>
            <div class="content col-xs-12">
                <!-- <AContent :content="info.title"></AContent> -->
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-5/new4.jpg" alt="">
                    <!--<img src="../../static/iconic-detail-5/8.jpg" alt="">-->
                    <!--<p>-->
                        <!--Tiffany & Co. held a glorious exhibition titled “The Art of Transformation” which consisted of 200 stunning fine jewelry pieces, with the worldwide debut of 70 pieces of fine jewelry and the precious antique jewelry collection.</p>-->
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="col-xs-12">
                    <!--<img src="../../static/iconic-detail-5/new4.jpg" alt="">-->
                    <!--<img src="../../static/iconic-detail-5/8.jpg" alt="">-->
                    <p>
                        Tiffany & Co. held a glorious exhibition titled “The Art of Transformation” which consisted of 200 stunning fine jewelry pieces, with the worldwide debut of 70 pieces of fine jewelry and the precious antique jewelry collection.</p>
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
            <div class="title col-sm-9 col-xs-12">Tiffany Diamond </div>
            <div class="date col-sm-3 col-xs-12"><span> Beijing, China</span></div>
            <div class="content col-xs-12">
                <!-- <AContent :content="info.title"></AContent> -->
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-5/new8.jpg" alt="">
                    <!--<p>-->
                        <!--J & E Mansion was turned into a Tiffany Blue Temple for the Tiffany legendary yellow diamond ceremony. The beauty of the yellow diamond impressed the guests. Artist Tan Dun presented and performed the music that specially composed for the legendary diamond, together to create a Tiffany dream night.</p>-->
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="col-xs-12">
                    <!--<img src="../../static/iconic-detail-5/new8.jpg" alt="">-->
                    <p>
                        J & E Mansion was turned into a Tiffany Blue Temple for the Tiffany legendary yellow diamond ceremony. The beauty of the yellow diamond impressed the guests. Artist Tan Dun presented and performed the music that specially composed for the legendary diamond, together to create a Tiffany dream night.</p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"  v-if="isMobile"></div>
                <div class="center col-xs-12">
                    <img src="../../static/iconic-detail-5/new5.jpeg" alt="">
                </div>
                <!--<div class="col-xs-4">-->
                <!--<p>The guests were impressed by the beauty of the yellow diamond. Artist Tan Dun presented and performed the music that specially composed for the legendary diamond, together to create a Tiffany dream night.</p>-->
                <!--</div>-->
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"  v-if="isMobile"></div>
                <!--<div class="space clearfix"></div>-->
                <!--<div class="space clearfix"></div>-->
                <!--<div class=" center col-xs-12"><img src="../../static/iconic-detail-5/7.jpg" alt=""></div>-->
            </div>
            <div class="title col-sm-9 col-xs-12">Tiffany Blue Book Taimiao Gala </div>
            <div class="date col-sm-3 col-xs-12"><span> Beijing, China</span></div>
            <div class="content col-xs-12">
                <!-- <AContent :content="info.title"></AContent> -->
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-5/new6.jpg" alt="">
                    <!--<p>-->
                        <!--Beijing was filled with jewelry from the Tiffany 2011 collection and there were 400 guests dining under a transparent tent in front of the Taimiao and listening to Donna Summer live.</p>-->
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="col-xs-12">
                    <!--<img src="../../static/iconic-detail-5/new6.jpg" alt="">-->
                    <p>
                        Beijing was filled with jewelry from the Tiffany 2011 collection and there were 400 guests dining under a transparent tent in front of the Taimiao and listening to Donna Summer live.</p>
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
            <div class="share col-xs-offset-1 col-xs-8">
                <Share></Share>
            </div>
            <div class="col-xs-2 pagingOne">
                <router-link to="detail-e"><img src="../assets/img/icon/page-prev.png" alt=""></router-link>
                <router-link to="detail-g"><img src="../assets/img/icon/page-next.png" alt=""></router-link>
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
                isMobile:false
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

            if(this.IsPC()){
                this.isMobile = true
            }
        },
        methods: {
            goback() {
                this.$router.push({ path: '/ourwork/events/iconic' })
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
        .pagingOne{
            text-align: right;
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
            margin-top: 5vh;
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
                .div1{
                    display: block;
                    span{
                        display: block;
                    }
                    span:nth-last-child(1){
                        margin-top: 1em;
                    }
                }
            }

            .title {
                font-size: 1.5em;
            }

            .date {
                text-align: left;
                span{
                    top:1vh;
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
