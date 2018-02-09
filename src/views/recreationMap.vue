<template>
    <div class="info-view recreation-map clearfix">
        <div class="info col-xs-offset-1 col-xs-10">
            <h3 class="title3 col-xs-12">GLOBAL EXPANSION</h3>
            <div class="col-xs-6 col-xs-offset-3">
                <img src="../../static/recreation/global.jpg" alt="" class="col-xs-12">
            </div>
            <div class="linkUs  col-xs-12">
                <a href="http://www.discoveryadventuresmoganshan.com/" target="_blank">Are you ready to take the adventure with us?</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'recreationMap',
        created() {
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
            }
            .title3 {
                /*margin-top: 3em;*/
                margin-top: 0;
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
        .safety {
            .info-view {
                .row {
                    margin-top: 2em !important;
                }
            }
        }
    }
</style>
