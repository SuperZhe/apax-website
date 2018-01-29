<template>
    <div class="info-view safety clearfix">
        <div class="info col-xs-offset-1 col-xs-10">
            <br>
            <h3>WE BELIEVE IN TALENTS</h3>
            <div class="col-xs-10 col-xs-offset-1 safetyLogo">
                <div class="col-xs-4">
                    <img src="../../static/recreation/LogoTitle1.png" alt="" class="col-xs-8 col-xs-offset-2">
                </div>
                <div class="col-xs-4">
                    <img src="../../static/recreation/LogoTitle1.png" alt="" class="col-xs-8 col-xs-offset-2">
                </div>
                <div class="col-xs-4">
                    <img src="../../static/recreation/LogoTitle1.png" alt="" class="col-xs-8 col-xs-offset-2">
                </div>
            </div>
            <h4 class="title2 col-xs-12">INTERNATIONAL STANDARD FACILITIES AND SAFETY SUPPORT</h4>
            <h3 class="title3 col-xs-12">FACILITI</h3>
            <div class="col-xs-12 safetyLogo">

                <img src="../../static/recreation/5.jpg" alt="" class="col-xs-3">
                <img src="../../static/recreation/shengtai1.jpeg" alt="" class="col-xs-3">
                <img src="../../static/recreation/6.jpg" alt="" class="col-xs-3">
                <img src="../../static/recreation/7.jpg" alt="" class="col-xs-3">
                <img src="../../static/recreation/4.jpg" alt="" class="col-xs-3">
                <img src="../../static/recreation/2.jpg" alt="" class="col-xs-3">
                <img src="../../static/recreation/1.jpg" alt="" class="col-xs-3">

                <img src="../../static/recreation/3.jpg" alt="" class="col-xs-3">
            </div>
            <h3 class="title3 col-xs-12">COURSE SERIES</h3>
            <div class="col-xs-12 safetyLogo">
                <div class="col-xs-3">
                    <img src="../../static/iconic-detail/1.jpg" alt="" class="col-xs-10 col-xs-offset-1">
                </div>
                <div class="col-xs-3">
                    <img src="../../static/iconic-detail/1.jpg" alt="" class="col-xs-10 col-xs-offset-1">
                </div>
                <div class="col-xs-3">
                    <img src="../../static/iconic-detail/1.jpg" alt="" class="col-xs-10 col-xs-offset-1">
                </div>
                <div class="col-xs-3">
                    <img src="../../static/iconic-detail/1.jpg" alt="" class="col-xs-10 col-xs-offset-1">
                </div>
            </div>
            <h3 class="title3 col-xs-12">CERTIFICA</h3>
            <div class="col-xs-8 col-xs-offset-2">
                <img src="../../static/recreation/8.jpg" alt="" class="col-xs-12">
            </div>
            <p class="col-xs-10 col-xs-offset-1 certificaText">
                Participates will get a DISCOVERY ADVENTURES PARK Certificate, a stamp when
                completing our courses.</p>
            <div class="col-xs-12 linkFrame">
                <div class="set_6_btn in blue">
                    <router-link to="list" class="link">
                        <span>CURIOUS TO SEE MORE</span>
                    </router-link>
                    <div class="corners top"></div>
                    <div class="corners bottom"></div>
                </div>
            </div>
            <div class="linkUs col-xs-offset-8 col-xs-4">
                <a href="javascript:;">Are you ready to take the adventure with us?</a>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'safety-view',
        created() {
            this.$bus.$emit('canvas-open');
        },
        mounted() {
            setTimeout(() => this.$('.career-view').fadeIn(), 500);
        },
    };
</script>

<style lang="less">
    @import '../assets/style/common.less';
    @import '../assets/style/but';

    .safety {
        .info {
            h3 {
                font-size: 2.2em;
                margin-bottom: 3em;
            }
            .title2 {
                margin-top: 1em;
            }
            .title3 {
                margin-top: 3em;
                margin-bottom: 1.5em;
            }
            .certificaText {
                font-size: 1.6em;
                text-align: left;
                margin-top: 1em;
            }
            .linkFrame {
                text-align: center;
                margin-top: 3em;
                margin-bottom: 2.5em;
            }
            .linkUs {
                text-align: right;
                a {
                    padding: 15px 20px;
                    border: 1px solid;
                }
                a:hover {
                    color: #6D227B;
                }
            }
            .safetyLogo {
                /*margin-bottom: 2em;*/
                img {
                    padding: 0 10px 10px 0;
                }
                /*>div{*/
                /*padding: 0 10px 10px 0;*/
                /*font-size: 0;*/
                /*}*/
                /*>div:nth-last-child(1){*/
                /*margin-right: 0;*/
                /*}*/
                /*img {*/
                /*width: 100%;*/
                /*}*/
            }
        }
    }

    @media screen and (max-width: @max-width) {
        .safety {
            .info-view {
                .row {
                    margin-top: 2em !important;
                }
            }
        }
    }
</style>
