<template>
    <div class="dna-1 clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>
        <div class="list col-xs-offset-1 col-xs-10">
            <div class="title">{{isch ? 'The World’s First Discovery Adventures Park' : '全球首个Discovery探索极限主题公园'}}</div>
            <!--<div class="title2">The latest from the world of APAX</div>-->
            <div class="col-xs-12 awardsImg">
                <img src="../../static/recreation/park.jpg" alt="">
                <p v-if="isch">
                    The world's first Discovery Adventures Park, located in Moganshan, Deqing County, Huzhou City, Zhejiang Province, is currently the largest tourism resort complex in
                    Moganshan. Discovery Adventures Park is an outdoor sports and adventure experience theme park that integrates true outdoor environment, state-of-the-art outdoor
                    facilities, international safety standards, a complete curriculum system, and international professional coaches team, providing travelers throughout the world with globally
                    premier outdoor survival training and exploration experience. Discovery Adventures Park follows the values of exploration, challenge, discovery and experience, to enable
                    explorers feel and learn from the nature, challenge themselves, go beyond limits in any season, enjoy inner thoughts and a free world, share environmental-friendly lifestyle
                    with friends and family, and experience and feel the inspiration and shock to the soul brought by breathtaking adventures.<br>
                    Discovery Adventures Park offers a number of outdoor adventure facilities, such as Climbing Wall, Zip Line, Aerial Net, Ground Obstacle, Hot Air Balloon, Hiking, and Wild
                    Survival, which can fully meet the challenge needs of domestic and foreign outdoor players, and bring the world's top outdoor adventure experience.
                </p>
                <p v-if="!isch">
                    由 APAX Recreation 孵化创立与运营，Discovery 探索极限主题公园的创立给予探索旗下“LBE”全新概念- 探索成真。全球第一个探索极限主题基地坐落于浙江省湖州德清莫干山，是目前世界上最大的区域旅游度假综合体之一。Discovery 探索极限主题公园是以户外生活方式为主导的国际旅游目的地，围绕三个元素- 户外运动，生态旅游，科学教育。 Discovery Adventures Park 把 Discovery探索的理念从线上带到线下，融合了真实的户外环境，先进的户外设施，国际安全标准，完整的产品体系以及国际标准培训的教练，为全球旅行者与户外爱好者提供卓越的深度探索体验。Discovery探索极限主题公园遵循“体验、探索、挑战、发现”的价值观，提倡与鼓励人们探索世界，让探险者感受和向大自然学习，挑战极限，超越自我，发现自我，与朋友家人共同分享户外生活方式的深度体验，并感受到冒险带来灵魂的震撼。
                </p>

            </div>
            <div class="col-xs-12 recreationBack" @click="goBack()">
                <div class="set_6_btn in blue">
                    <a href="javascript:;" class="link">
                        <span>BACK</span>
                    </a>
                    <div class="corners top"></div>
                    <div class="corners bottom"></div>
                </div>
            </div>
            <div class="linkUs  col-xs-12">
                <a href="http://www.discoveryadventuresmoganshan.com/"
                   target="_blank">{{isch ? 'Are you ready to take the adventure with us?' : '你准备好和我们一起冒险了吗?'}}</a>
            </div>
        </div>
    </div>
</template>
<script>
    import OurworkSubNav from '@/components/OurworkSubNav.vue';
    import Arrow from '../components/Arrow.vue';
    //    import { config } from '../assets/js/app/config';
    import { bus } from '../assets/js/app/public';

    export default {
        name: 'dna-1',
        components: {Arrow, OurworkSubNav},
        data() {
            return {
                link: 'recreation',
                items: [],
                isch: '',
//                config: config,
            };
        },
        created() {
            bus.$on('language', (val) => {this.isch = val;});
            this.$bus.$emit('canvas-open');
        },
        updated() {
            let sr = this.$sr({reset: true, delay: 300});
            sr.reveal('.item', {duration: 1000});
        },
        methods: {
            goBack: function () {
                this.$router.go(-1);
            },
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
            /*margin-left: -20px;*/
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
            }
            .recreationBack {
                font-size: 16px;
                margin-bottom: 1rem;
                text-align: center;
                cursor: pointer;
            }
            .recreationBack:hover {
                color: #6D227B;
            }
            .title {
                font-size: 2.2em;
                margin-bottom: 2.6em;
            }
        }

    }

    @media screen and (max-width: @max-width) {
        .dna-1 {
            .list {
                margin-top: 0;
                .title {
                    font-size: 0.4rem;
                    margin-bottom: 2vh;
                }
                .list {
                    margin-top: 20vh;
                }
                .text {
                    margin-top: 4vh;
                }
                .awardsImg {
                    p {
                        margin: 0;
                    }
                    img{
                        margin: 0.4rem 0;
                    }
                }
                .linkUs {
                    a {
                        font-size: 14px;
                        display: block;
                        padding: 10px 0;
                        text-align: center;
                    }

                }
            }
        }
    }
</style>
