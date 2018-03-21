<template>
    <div class="dna-1 clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>
        <div class="list col-xs-offset-1 col-xs-10">
            <div class="title" v-if="isch">CORE ELEMENT 1<br>Outdoor Sports</div>
            <div class="title" v-if="!isch">元素 1<br>户外运动</div>
            <!--<div class="title2">The latest from the world of APAX</div>-->
            <div class="col-xs-12 awardsImg">
                <img src="../../static/recreation/huwai1.jpg" alt="">
                <p v-if="isch">
                    There needs no other reasons for outdoor lovers come to Discovery Adventures Park, “the country’s largest outdoor three-dimensional climbing wall” as one of the highlights
                    will bring excitement among outdoor enthusiasts.<br>
                    Discovery Adventures Park is also a must-to-go place for outdoor sports beginners. There is a famous saying in the outdoor sports field, “Strengthen your body, purify your soul”,
                    this gives a perfect summary to answer the question why we should do outdoor exercise.
                </p>
                <p v-if="!isch">
                    对于户外爱好者来说，来Discovery 探索极限主题公园是不需要其他理由的，仅用“全国最大户外立体攀岩墙”这一个亮点就能让“驴友”们沸腾起来。
                    对于户外运动的新人们来说，Discovery 探索极限主题公园也是必去之地。户外圈的经典名言—“野蛮其体魄，净化其灵魂”，恰好给“为何要进行户外运动”这一问题作出了完美解释。
                </p>
                <img src="../../static/recreation/huwai2.jpg" alt="">
                <p v-if="isch">
                    Moreover, with the highly modernized urban life, we are surrounded by artificial electric waves and poor air quality. Humans are the creatures of nature and we should go back
                    to the natural environment, to feel the nature’s magnetic energy. A wide selection of challenge programs available in Discovery Adventures Park: Such as the Climbing Wall,
                    Zipline, Obstacle Course, Adventure Trekking, Timing Cross-country Race, Hot Air Balloon, Hiking and Wilderness Survival. Which one will you choose? Our professional coach
                    would be there and assist you during every program, explain techniques patiently to ensure support and encourage you to overcome every “Extreme Challenge”.<br>
                    I am sure that Hot air balloon experience will leave you unforgettable memories without fly to Turkey, you can take off on a hot air balloon which is the same as in Cappadocia
                    from our theme park.
                </p>
                <p v-if="!isch">
                    此外，随着都市生活的高度现代化，我们身边处处充斥着人造电波与糟糕的空气质量。而人类是大自然孕育出来的产物，本该回归自然环境中，感受大自然的磁场能量。Discovery 探索极限主题公园当然离不开各式各样的挑战项目：园区8项世界顶级的户外求生体验，你敢挑战哪项？攀岩墙、丛林滑索、高空网阵挑战、地面障碍、计时越野挑战、热气球、徒步探索、荒野求生体验。每一个项目都需要在专业的教练指导协助下进行，耐心的为你讲解要领，帮助并鼓励你独立完成每一个“极限挑战”。
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
                <a href="http://www.discoveryadventuresmoganshan.com/" target="_blank">{{isch?'Are you ready to take the adventure with us?':'你准备好和我们一起冒险了吗?'}}</a>
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
        components: {Arrow,OurworkSubNav},
        data() {
            return {
                link: 'recreation',
                items: [],
                isch:''
//                config: config,
            };
        },
        created() {
            bus.$on('language',(val) => {this.isch = val})
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
                margin-top: 0;
                .title {
                    font-size: 1.4em !important;
                    margin-bottom: 2vh;
                }
                .list {
                    margin-top: 20vh;
                }
                .awardsImg{
                    p{margin: 0;}
                    img{
                        margin: 0.4rem 0;
                    }
                }
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
