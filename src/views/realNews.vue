<template>
    <div class="real-news clearfix">

        <div class="info col-xs-offset-1 col-xs-10">
            <div class="title col-sm-10 col-xs-12">APAX NEWS</div>
            <div class="title1 col-sm-10 col-xs-12">THE LATEST FROM THE WORLD OF APAX</div>
            <div class="sub-title col-xs-12">
                <!--<p>-->
                    <!--By marketing the unification of entertainment and trends, Fashion Rocks offers China & Asia a 360-degree concept with infinite opportunities through fashion and music.-->
                    <!--An established IP weaving e-commerce, online & offline engagement and international broadcast distribution into a global platform reaching out to a multitude of consumers.-->
                <!--</p>-->
            </div>
            <!--<div class="back col-xs-1">-->
                <!--<a href="#" @click="goback">BACK</a>-->
            <!--</div>-->
        </div>
    </div>
</template>

<script>
    import OurworkSubNav from '@/components/OurworkSubNav.vue';
    import Arrow from '@/components/Arrow.vue';
    import { bus } from '../assets/js/app/public';

    export default {
        name: 'real-news',
        components: {OurworkSubNav, Arrow},
        data() {
            return {
                info: {},
            };
        },
        created() {
            this.$bus.$emit('canvas-open');
        },
        mounted() {
            setTimeout(()=> this.$('.real-news').fadeIn(), 500);
            bus.$emit('change', this.showO);
            let sr = this.$sr({reset: true, delay: 0});
//            sr.reveal('.content div', {duration: 1000});

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

    .real-news {
        display: none;
        padding-bottom: 150px;

        .subnav {
            padding-top: 80px;
        }

        .info {
            /*padding-top:6em;*/
            padding-top: 12em;
        }

        .title {
            font-size: 2.2em;
        }
        .title1{
            font-size: 2.2em;
            margin-top: 10px;
        }

        .sub-title {
            padding-top: 10px;
            p {
                /*line-height: 30px;*/
            }
        }
    }


</style>
