<template>
    <div class="dna-1 clearfix">

        <div class="list col-xs-offset-1 col-xs-10">
            <div class="title">Outdoor Sports</div>
            <!--<div class="title2">The latest from the world of APAX</div>-->
            <div class="col-xs-12 awardsImg">
                <img src="../../static/recreation/huwai1.jpg" alt="">
                <p>
                    There needs no other reasons for outdoor lovers come to Discovery Adventures Park, “the country’s largest outdoor three-dimensional rock climbing wall” as one of the
                    highlights will bring excitement among outdoor enthusiasts.<br>
                    Discovery Adventures Park is also a must-to-go place for outdoor sports beginners. There is a famous saying in outdoor sports circle, “Savage their physique, Purify its soul”, this
                    gives perfect definition of the question why we should do outdoor exercise.
                </p>
                <img src="../../static/recreation/huwai2.jpg" alt="">
                <p>
                    Moreover, with the highly modernized urban life, we are surrounding by artificial electric waves and poor air quality. Humans are the creatures of nature and we should back
                    roots in natural environment, to feel the nature’s magnetic energy.<br>
                    A wide selection of challenge programs available in Discovery Adventures Park:<br>
                    Such as the Climbing Wall, Eagle Track, High Altitude Net Array Challenge, Earth Obstacle, Timing Cross-country Race, Hot Air Balloon, Hiking and Wilderness Survival.
                    Which one will you choose from 8 of the world class outdoor survival experience? Our professional coach will assist you during every program, explain techniques patiently to
                    ensure support and encourage you to complete every “Extreme Challenge”.<br>
                    Hot air balloon experience will leave you unforgettable memories without fly to Turkey or using annual holidays & pay for discount ticket, you can take off on a hot air balloon
                    which is the same as in Cappadocia from our theme park.
                </p>
                <div class="recreationBack col-sm-2 col-sm-offset-5" @click="goBack()">BACK</div>
            </div>
            <div class="linkUs col-xs-offset-8 col-xs-4">
                <a href="javascript:;">Are you ready to take the adventure with us?</a>
            </div>
        </div>
    </div>
</template>
<script>
    import Arrow from '../components/Arrow.vue';
    import { config } from '../assets/js/app/config';

    export default {
        name: 'dna-1',
        components: {Arrow},
        data() {
            return {
                items: [],
                config: config,
            };
        },
        created() {
            this.$bus.$emit('canvas-open');
        },
        updated() {
            let sr = this.$sr({reset: true, delay: 300});
            sr.reveal('.item', {duration: 1000});
        },
        methods: {
            goBack:function () {
                this.$router.go(-1);
            }
        },
    };
</script>

<style lang="less">
    @import '../assets/style/common.less';
    @import '../assets/style/but';

    .dna-1 {
        padding-top: 12vh;
        padding-bottom: 150px;
        .blue {
            margin-left: -20px;
        }
        .list {
            margin-top: 7vh;
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
            .awardsImg {
                margin-bottom: 5em;
                img {
                    width: 100%;
                }
                p {
                    margin: 3em 0;
                }
                .recreationBack{
                    font-size: 1.4em;
                    margin-top: 3em;
                    text-align: center;
                    cursor: pointer;
                }
                .recreationBack:hover{
                    color: #6D227B;
                }
            }
            .title {
                font-size: 2.2em;
                margin-bottom: 2vh;
            }
        }

    }

    @media screen and (max-width: @max-width) {
        .news-list-view {
            .title {
                font-size: 2em !important;
                margin-bottom: 2vh;
            }
            .title2 {
                font-size: 1.8em !important;
            }
            .title3 {
                font-size: 1.2em;
                font-weight: bold;
            }
            .list {
                margin-top: 20vh;
            }
            .text {
                margin-top: 4vh;
            }
        }
    }
</style>
