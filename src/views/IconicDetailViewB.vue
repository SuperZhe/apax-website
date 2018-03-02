<template>
    <div class="iconic-detail-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="info col-xs-offset-1 col-xs-10">
            <div class="div1 col-xs-12" >
                <span class="title col-sm-8 col-md-8 col-xs-12">Starbucks Reserve Roastery Shanghai Grand Opening</span>
                <!--</div>-->
                <!--<div class="date col-sm-3 col-xs-12">-->
                <span class="date col-sm-4 col-md-4 col-xs-12">Taikoo Hui, Shanghai, China</span>
            </div>
            <div class="content col-xs-12">
                <!-- <AContent :content="info.title"></AContent> -->
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-6/new1.jpeg" alt="">
                    <!--<p>-->
                        <!--Starbucks Coffee Company opened its very first international Starbucks Reserve Roastery (outside of Seattle) in Shanghai with a global live streaming on 9 platforms and incorporating Tmall Super Brand Day during its grand opening and unveiling event. An Immersive coffee experience was part of the journey celebration for the excited guests to explore and discover what they never knew about coffee.</p>-->
                </div>
                <div class="col-xs-12">
                    <!--<img src="../../static/iconic-detail-6/new1.png" alt="">-->
                    <p>
                        Starbucks Coffee Company opened its very first international Starbucks Reserve Roastery (outside of Seattle) in Shanghai with a global live streaming on 9 platforms and incorporating Tmall Super Brand Day during its grand opening and unveiling event. An Immersive coffee experience was part of the journey celebration for the excited guests to explore and discover what they never knew about coffee.</p>
                </div>
                <!--<div class="space clearfix"></div>-->
                <!--<div class="space clearfix"></div>-->
                <!--<div class="space clearfix" v-if="isMobile"></div>-->
                <!--<div class="col-xs-12">-->
                    <!--&lt;!&ndash;<img src="../../static/iconic-detail-6/new2.jpg" alt="">&ndash;&gt;-->
                    <!--&lt;!&ndash;<p>Showcases included amazing photography collection by Dan Holdsworth and Wild Constellations by Alexandre Joly, both were inspired by Vallée de Joux, where Audemars Piguet was founded. The film was taken by Chinese artist Chen Ran that tells the story between Audemars Piguet and its origin. </p>&ndash;&gt;-->
                <!--</div>-->
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-6/new3.png" alt="">
                    <!--<p>Showcases included amazing photography collection by Dan Holdsworth and Wild Constellations by Alexandre Joly, both were inspired by Vallée de Joux, where Audemars Piguet was founded. The film was taken by Chinese artist Chen Ran that tells the story between Audemars Piguet and its origin. </p>-->
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-6/new4.png" alt="">
                    <!--<p>Showcases included amazing photography collection by Dan Holdsworth and Wild Constellations by Alexandre Joly, both were inspired by Vallée de Joux, where Audemars Piguet was founded. The film was taken by Chinese artist Chen Ran that tells the story between Audemars Piguet and its origin. </p>-->
                </div>
                <!--<div class="space clearfix"></div>-->
                <!--<div class="space clearfix"></div>-->
                <!--<div class="space clearfix"></div>-->
                <!--<div class=" col-xs-offset-1 col-xs-10">-->
                <!--<img src="../../static/iconic-detail-6/3.jpg" alt="">-->
                <!--&lt;!&ndash;<p>An incredible architectural installation conceived by French designer Mathieu Lehanneur was presented as a showroom that was in the form of an immense copper-made ring consisted by twelve rooms. Each of the twelve rooms revealed a story about Audemars Piguet through vintage and contemporary pieces: from its origins to the 21st century, from watchmaking to contemporary art. 200 timepieces were displayed across the twelve rooms,-->
                <!--making it the largest collection of Audemars Piguet timepieces ever to be shown outside of the Museum. </p>&ndash;&gt;-->
                <!--</div>-->
                <!--<div class="s41 center col-xs-6"><img src="../../static/iconic-detail-6/4.jpg" alt=""></div>-->
                <!--<div class="s43 col-xs-6">An incredible architectural installation conceived by French designer Mathieu Leha.</div>-->
                <!--&lt;!&ndash;<div class="s43 col-xs-5">An incredible architectural installation conceived by French designer Mathieu Lehanneur was presented as a showroom that was in the form of an immense copper-made ring consisted by twelve rooms. Each of the twelve rooms revealed a story about Audemars Piguet through vintage and contemporary pieces: from its origins to the 21st century, from watchmaking to contemporary art. 200 timepieces were displayed across the twelve rooms,-->
                <!--making it the largest collection of Audemars Piguet timepieces ever to be shown outside of the Museum.</div>&ndash;&gt;-->
                <!--<div class="s42 col-xs-offset-7  col-xs-5"><img src="../../static/iconic-detail-6/5.jpg" alt=""></div>-->
                <!--<div class="center col-xs-12"><img src="../../static/iconic-detail-6/6.jpg" alt=""></div>-->
            </div>
            <div class="back col-xs-1">
                <a href="javascript:;" @click="goback()">BACK</a>
            </div>
            <div class="share col-xs-offset-1 col-xs-8">
                <Share></Share>
            </div>
            <div class="col-xs-2 pagingOne" >
                <router-link to="detail-j">
                    <div @mouseover="pagePrevOver()" @mouseout="pagePrevOut()">
                        <img src="../assets/img/icon/page-prev.png" alt="" v-show="pagePrev">
                        <img src="../assets/img/icon/page-prev-on.png" alt="" v-show="!pagePrev">
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
                isMobile:false,
                pagePrev:true
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
            pagePrevOver:function () {
                this.pagePrev = false;
            },
            pagePrevOut:function () {
                this.pagePrev = true;
            },
            goback:function (){
//                this.$router.go('/ourwork/events/iconic');
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
        .div1{
            display: flex;
            align-items: flex-end;
            span:nth-last-child(1){
                padding-bottom: 6px;
            }
        }
.pagingOne{text-align: right}
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
            margin-top: 5em;
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
            top: -50px;
            z-index: 1;
        }

        .s42 {
            top: -400px;
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
                top: -60px;
            }

            .s43 {
                padding: 50px 20px;
                line-height: 1.5em;
            }
        }
    }
</style>
