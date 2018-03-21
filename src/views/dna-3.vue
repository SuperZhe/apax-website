<template>
    <div class="dna-3 clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>
        <div class="list col-xs-offset-1 col-xs-10">
            <div class="title"  v-if="isch">CORE ELEMENT 3<br>Science Education </div>
            <div class="title" v-if="!isch">元素 3<br>科普教育</div>
            <!--<div class="title2">The latest from the world of APAX</div>-->
            <div class="col-xs-12 awardsImg">
                <img src="../../static/recreation/kepu1.jpg" alt="">
                <p v-if="isch">
                    Many of us might have watched the famous exploration science program - Discovery Channel, the world's biggest science channel tells stories and knowledge in wilderness,
                    science, and biology.<br>
                    Speaking of Discovery, we must talk about the man who is standing on the top of food chains—Bear Grylls, who ate raw ox-heart, live earthworm, and cross no-man’s land. Time
                    and time again he challenging the limits of human wilderness survival and risk his life to show us survival knowledge and skills under severe environmental conditions.
                </p>
                <p v-if="!isch">
                    著名的大型野外探索科普类节目Discovery Channel，相信不少人都看过，这个全球最大的科普栏目曾在电视上给无数人讲述了野外，科学，生物等方面的“冷知识”。<br>
                    说到Discovery，不得不说那个站在食物链顶端的男人——贝尔，生吃牛心、活吃蚯蚓、穿越无人区。他一次次挑战着人类荒野生存极限的同时也以身作死则，用生命为屏幕前的大家科普恶劣环境下的求生知识与技能。
                </p>
                <img src="../../static/recreation/kepu2.jpg" alt="">
                <p v-if="isch">
                    However, from the screen, all the experience seems too far and limited. Now it comes something more exciting than the TV channel! At Discovery Adventures Park, you are able
                    to learn knowledge from your personal experience, our coaches will share amazing stories with you and guide you to actually experience all that happens in Discovery
                    Channel.<br>
                    If you are a dad or mom, there are no better choices like take kids to spend holidays in Discovery Adventures Park, your kids will happily study here with a lot of fun! Discovery
                    Adventures Park would thoroughly implement the principle of delight education to let kids love and appreciate the nature and improve learning abilities to become a
                    life-long learner.
                </p>
                <p v-if="!isch">
                    现在，比节目更厉害的来了！屏幕中看到的毕竟是片面而遥远的，在Discovery 探索极限主题公园，你将用亲身经历来接触新知识，在这里，教练们将面对面为你讲述那些神奇的故事。<br>
                    都市里的年轻家庭，带上孩子来极限探索乐园则是假期最好的去处了，孩子们在这里玩得开心学得更开心！Discovery 探索极限主题公园将寓教于乐深入实施，让宝宝在体验中爱上大自然，学习和动手能力都将得到提升。
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
            <div class="linkUs col-xs-12">
                <a href="http://www.discoveryadventuresmoganshan.com/" target="_blank">{{isch?'Are you ready to take the adventure with us?':'你准备好和我们一起冒险了吗?'}}</a>
            </div>
        </div>
    </div>
</template>
<script>
    import { bus } from '../assets/js/app/public';
    import Arrow from '../components/Arrow.vue';
//    import { config } from '../assets/js/app/config';
    import OurworkSubNav from '@/components/OurworkSubNav.vue';
    export default {
        name: 'dna-3',
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

    .dna-3 {
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
                    color: #36bbfc;
                }
            }
            .awardsImg {
                margin-bottom: 5em;
                img {
                    width: 100%;
                }
                p {
                    /*margin: 3em 0;*/
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
                margin-bottom: 2.6em;
            }
        }

    }

    @media screen and (max-width: @max-width) {
        .dna-3 {
            .list{
                margin-top: 0;
                .title {
                    font-size: 1.4em !important;
                    margin-bottom: 2vh;
                }
                .title2 {
                    font-size: 1.8em !important;
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
