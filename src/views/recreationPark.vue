<template>
    <div class="dna-1 clearfix">

        <div class="list col-xs-offset-1 col-xs-10">
            <div class="title">The World’s First Discovery Adventures Park</div>
            <!--<div class="title2">The latest from the world of APAX</div>-->
            <div class="col-xs-12 awardsImg">
                <img src="../../static/recreation/park.jpg" alt="">
                <p>
                    The world's first Discovery Adventures Park, located in Moganshan, Deqing County, Huzhou City, Zhejiang Province, is currently the largest tourism resort complex in
                    Moganshan. Discovery Adventures Park is an outdoor sports and adventure experience theme park that integrates true outdoor environment, state-of-the-art outdoor
                    facilities, international safety standards, a complete curriculum system, and international professional coaches team, providing travelers throughout the world with globally
                    premier outdoor survival training and exploration experience. Discovery Adventures Park follows the values of exploration, challenge, discovery and experience, to enable
                    explorers feel and learn from the nature, challenge themselves, go beyond limits in any season, enjoy inner thoughts and a free world, share environmental-friendly lifestyle
                    with friends and family, and experience and feel the inspiration and shock to the soul brought by breathtaking adventures.<br>
                    Discovery Adventures Park offers a number of outdoor adventure facilities, such as Climbing Wall, Zip Line, Aerial Net, Ground Obstacle, Hot Air Balloon, Hiking, and Wild
                    Survival, which can fully meet the challenge needs of domestic and foreign outdoor players, and bring the world's top outdoor adventure experience.
                </p>
                <div class="col-xs-12 recreationBack" @click="goBack()">
                    <div class="set_6_btn in blue">
                        <a href="javascript:;" class="link">
                            <span>BACK</span>
                        </a>
                        <div class="corners top"></div>
                        <div class="corners bottom"></div>
                    </div>
                </div>
            </div>
            <div class="linkUs  col-xs-12">
                <a href="http://www.discoveryadventuresmoganshan.com/" target="_blank">Are you ready to take the adventure with us?</a>
            </div>
        </div>
    </div>
</template>
<script>
    import Arrow from '../components/Arrow.vue';
    //    import { config } from '../assets/js/app/config';

    export default {
        name: 'dna-1',
        components: {Arrow},
        data() {
            return {
                items: [],
//                config: config,
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
        .set_6_btn.blue:hover .corners:after, .set_6_btn.blue:hover .corners:before {
            border-color: #36bbfc !important;
        }
        .set_6_btn.blue:hover a {
            color: #36bbfc;
            font-size: 18px;
            text-shadow: 0 0 2px #36bbfc,
            0 0 10px #fff;
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
                    color: #00b3ee;
                }
            }
            .awardsImg {
                margin-bottom: 5em;
                img {
                    width: 100%;
                }
                p {
                    margin-bottom: 4em;
                }
                .recreationBack{
                    font-size: 16px;
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
                margin-bottom:2.6em;
            }
        }

    }

    @media screen and (max-width: @max-width) {
        .dna-1 {
            .list{

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
                .awardsImg p{margin: 0;}
                .linkUs {
                    a {
                        font-size: 0.8em;
                        display: block;
                        padding:10px 0;
                        text-align: center;
                    }

                }
            }
        }
    }
</style>
