<template>
    <div class="rocks-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="info col-xs-offset-1 col-xs-10">
            <div class="title col-sm-10 col-xs-12">GLOBAL CONNECTIONS</div>
            <div class="sub-title col-xs-12">
                <p>As the strategic partner and leading agency of
                    Shanghai Fashion Week organizing committee,
                    APAX Group work closely together at raising the benchmark of Shanghai Fashion Week year after year.
                    Assisting Shanghai Fashion Week in developing into the world’s 5th top fashion week.
                </p>
            </div>
            <div class="content col-xs-12">
                <div class="col-xs-12"><img src="../../static/week/1.jpg" alt=""></div>
                <!--<div class="col-xs-12"><img src="../../static/rocks-detail/1.jpg" alt=""></div>-->
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <!--<div class="space clearfix"></div>-->
                <div class="col-xs-12"><img src="../../static/week/2.jpeg" alt=""></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <!--<div class="space clearfix"></div>-->
                <div class="col-xs-12"><img src="../../static/week/3.jpeg" alt=""></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class=" col-xs-12"><img src="../../static/week/4.jpeg" alt=""></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="col-xs-12"><img src="../../static/week/5.jpeg" alt=""></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="col-xs-12"><img src="../../static/week/6.jpeg" alt=""></div>
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
    import Arrow from '@/components/Arrow.vue';
    import { bus } from '../assets/js/app/public';
    import Share from '@/components/Share.vue';

    export default {
        name: 'rocks-view',
        components: {OurworkSubNav, Arrow, Share},
        data() {
            return {
                link: 'rocks',
                info: {},
                showO: 6,
            };
        },
        created() {
            //console.log(this.$route.params)
            // this.$axios.get('http://jsonplaceholder.typicode.com/photos/1').then((response) => {
            //     this.info = response.data;
            //     this.info.date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getDay() + 1);
            //     this.info.content = `
            //         大量内容
            //     `
            //     //console.log(this.info)
            // }, (error) => {
            //     console.log(error)
            // });
            this.$bus.$emit('canvas-open');
        },
        mounted() {
            bus.$emit('change', this.showO);
            let sr = this.$sr({reset: true, delay: 0});
            sr.reveal('.content div', {duration: 1000});
        },
        methods: {
            goback() {
                this.$router.go(-1);
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
        .share {
            text-align: center;
        }
        .title {
            font-size: 3em;
        }

        .sub-title {
            padding-top: 10px;
            p {
                /*line-height: 30px;*/
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
        .content {
            margin: 2em 0;
            margin-bottom: 5em;

            p {
                line-height: 2em;
            }

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

        .s11, .s12, .s13 {
            img {
                width: 95%;
            }
        }

        .s12 {
            text-align: right;
            /*top:-200px;*/
        }

        .s13 {
            text-align: right;
            /*top:-100px;*/
        }

        .s21, .s22 {
            img {
                width: 95%;
            }
        }

        .s22 {
            text-align: left;
            /*padding-right: 10px;*/
            /*top: 250px;*/
        }

        .s32, .s33 {
            img {
                width: 95%;
            }
        }

        .s32 {
            top: -250px;
        }

        .s33 {
            top: 50px;
            text-align: right;
        }

        .s41, .s42 {
            text-align: right;
            img {
                width: 95%;
            }
        }

        .s42 {
            text-align: right;
        }

        .s51 {
            font-size: 2.5em;
        }

        .s52 {
            top: -1em;
            line-height: 2em;

            h2 {
                font-size: 2.5em;
                font-weight: normal;
                line-height: 2.5em;
            }

            h3 {
                font-weight: normal;
                font-size: 2em;
                margin-top: 2em;
            }
        }
    }

    .s14 {
        img {
            width: 95%;
            margin-right: 50px;
        }
        p {
            margin-right: 50px;
        }
    }

    @media screen and (max-width: @max-width) {
        .rocks-view {
            .info {
                padding-top: 4em;
            }

            .title {
                font-size: 1.5em;
            }

            .date {
                text-align: left;
            }

            .s11, .s12, .s13 {
                img {
                    width: 95%;
                }
            }

            .s12 {
                text-align: right;
                top: -100px;
            }

            .s13 {
                text-align: right;
                /*top:-50px;*/
            }

            .s21, .s22 {
                img {
                    width: 95%;
                }
            }

            .s22 {
                text-align: right;
                /*top: 50px;*/
            }

            .s32, .s33 {
                img {
                    width: 95%;
                }
            }

            .s32 {
                top: -50px;
            }

            .s33 {
                top: 50px;
                text-align: right;
            }

            .s41, .s42 {
                img {
                    width: 95%;
                }
            }

            .s42 {
                text-align: right;
            }

            .s51 {
                /*font-size: 2.5em;*/
            }

            .s52 {
                top: -1em;
                line-height: 2em;

                h2 {
                    font-size: 2.5em;
                    font-weight: normal;
                }

                h3 {
                    font-weight: normal;
                    font-size: 2em;
                    margin-top: 2em;
                }
            }
        }
    }
</style>
