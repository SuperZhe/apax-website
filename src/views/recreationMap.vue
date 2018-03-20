<template>
    <div class="info-view recreation-map clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>
        <div class="info col-xs-offset-1 col-xs-10">
            <h3 class="title3 col-xs-12">{{isch?'GLOBAL EXPANSION':'国际布局'}}</h3>
            <div class="col-xs-12 col-sm-offset-3 col-sm-6 ">
                <img src="../../static/recreation/global.jpg" alt="" class="col-xs-12">
            </div>
            <div class="linkUs  col-xs-12">
                <a href="http://www.discoveryadventuresmoganshan.com/" target="_blank">{{isch?'Are you ready to take the adventure with us?':'你准备好和我们一起冒险了吗?'}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    import OurworkSubNav from '@/components/OurworkSubNav.vue';
    import { bus } from '../assets/js/app/public';
    export default {
        name: 'recreationMap',
        components: {OurworkSubNav},
        data(){
            return{
                link: 'recreation',
                isch:''
            }
        },
        created() {
            bus.$on('language',(val) => {this.isch = val})
            this.$bus.$emit('canvas-open');
        },
        mounted() {
            setTimeout(() => this.$('.recreation-map').fadeIn(), 500);
        },
    };
</script>

<style lang="less">
    @import '../assets/style/common.less';
    @import '../assets/style/but';

    .recreation-map {
        padding-top: 80px;
        .set_6_btn.blue:hover .corners:after, .set_6_btn.blue:hover .corners:before{
            border-color:#36bbfc !important ;
        }
        .set_6_btn.blue:hover a{
            color: #36bbfc;
            font-size: 16px;
            text-shadow: 0 0 2px #36bbfc,
                /*0 0 4px #36bbfc,*/
                /*0 0 10px #36bbfc,*/
                /*0 0 20px #fff,*/
                /*0 0 30px #fff,*/
            0 0 10px #fff;
        }
        display: none;
        .info {
            h3 {
                font-size: 2.2em;
                margin-bottom: 8em;
                /*margin-top: 3em;*/
            }
            .title3 {
                margin-top: 3em;
                /*margin-top: 0;*/
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
                margin-top: 3em;
                a {
                    padding: 15px 20px;
                    border: 1px solid;
                }
                a:hover {
                    color: #00b3ee;
                }
            }
            }
        }

    @media screen and (max-width: @max-width) {
        .recreation-map {
            padding-top: 0;
            .linkUs {
                text-align: center;
                margin-top: 0.6rem;
                a {
                    font-size: 14px;
                    display: block;
                    padding: 5px 10px !important;
                    text-align: center;
                }

            }
            .info{
                .title3{
                    font-size: 1.6em;
                    margin-top: 0rem;
                }
            }
            .info-view {

                .row {
                    margin-top: 2em !important;
                }
            }
        }
    }
</style>
