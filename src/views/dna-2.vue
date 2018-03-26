<template>
    <div class="dna-2 clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>
        <div class="list col-xs-offset-1 col-xs-10">
            <div class="title" v-if="isch">CORE ELEMENT 2<br>Ecotourism </div>
            <div class="title" v-if="!isch">元素 2<br>生态旅游</div>
            <!--<div class="title2">The latest from the world of APAX</div>-->
            <div class="col-xs-12 awardsImg">
                <img src="../../static/recreation/shengtai2.jpg" alt="">
                <p v-if="isch">
                    Discovery Adventures Park as the World's first park came out of Discovery Channel, one of our purposes is to introduce Eco-Tourism in the industry.<br>
                    What is Eco-Tourism? The biggest difference from traditional tourism industry is that Eco-Tourism developing on the premise of protecting the environment, based on core
                    principles of marking tourists enjoy the most original travel experience in nature and maintaining sustainable development of the eco-environment.
                </p>
                <p v-if="!isch">
                    Discovery 探索极限主题公园作为Discovery Channel在全球范围内的首家主题公园，主旨之一便是要将“生态旅游”进行到底。<br>
                    什么是生态旅游？与传统旅游业最大的不同是，生态旅游是建立在保护环境的前提下发展的，以让游客在原生态的大自然中体验旅游和生态环境的可持续发展为双重核心。
                </p>
                <img src="../../static/recreation/shengtai1.jpeg" alt="">
                <p v-if="isch">
                    Moganshan ecosystem is a textbook model of domestic eco-tourism, it has a great geographic condition: surrounded by cloud-shrouded views and four distinct seasons of
                    nature climate which makes it celebrities’ most favorite spot over the last century. CNN names it as: “One of the Chinese Attractions That You Must Visit Besides the Great Wall”.
                    The concept of Discovery Adventures Park and style of Moganshan have come together in a harmonious way - every program completely reflects “Eco-Tourism” mission.<br>
                    Guests can receive a better experience as they can do some out park adventures programs in an entirely natural environment, which brighten up Moganhan’s long-lasting title
                    as “Hot Holiday Spot” even more remarkable.
                </p>
                <p v-if="!isch">
                    莫干山生态圈作为国内生态旅游教科书般的范本，拥有卓越的地理优势：云雾环绕的秀美风光和四季分明的自然气候都造就了这个上世纪名人最爱去的“打卡圣地”。CNN将这里称为：除长城之外，你必须要去的中国特色地方之一。<br>
                    Discovery 探索极限主题公园与莫干山的风格一拍即合，每一个项目都将“生态旅游”表现得淋漓尽致，不仅仅在园区内能感受到，在园区外的项目中更能让大家切身体会到这一理念。这也是让莫干山经久不衰的百年“网红度假地”头衔得以增光增彩。
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
        </div>
          <div class="linkUs col-xs-10 col-xs-offset-1 col-sm-10">
                <a href="http://www.discoveryadventuresmoganshan.com/" target="_blank">{{isch ? 'Are you ready to take the adventure with us?' : '你准备好和我们一起冒险了吗?'}}</a>
            </div>
    </div>
</template>
<script>
    import { bus } from '../assets/js/app/public';
    import Arrow from '../components/Arrow.vue';
    import OurworkSubNav from '@/components/OurworkSubNav.vue';
    //    import { config } from '../assets/js/app/config';

    export default {
        name: 'dna-2',
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
    .dna-2 {
        padding-top: 12vh;
        padding-bottom: 150px;
        .blue {
            /*margin-left: -20px;*/
            }
        .subnav {
            padding-top: 0;
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
        .list {
            margin-top: 7vh;
            .awardsImg {
                margin-bottom: 5em;
                img {
                    width: 100%;
                    }
                p {
                    /*margin: 3em 0;*/
                    margin-bottom: 4em;
                    }
                .recreationBack {
                    font-size: 16px;
                    margin-top: 3em;
                    text-align: center;
                    cursor: pointer;
                    }
                .recreationBack:hover {
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
        .dna-2 {
            .list {
                margin-top: 0;
                .title {
                    font-size: 1.4em !important;
                    margin-bottom: 2vh;
                    }
                .list {
                    margin-top: 20vh;
                    }
                .awardsImg {
                    p {
                        margin: 0;
                        }
                    img {
                        margin: 0.4rem 0;
                        }
                    }
                }
            .linkUs {
                a {
                    border: 1px solid;
                    font-size: 14px;
                    display: block;
                    padding: 10px 0px !important;
                    text-align: center;
                    }

                }
            }
        }
</style>
