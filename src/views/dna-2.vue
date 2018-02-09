<template>
    <div class="dna-2 clearfix">

        <div class="list col-xs-offset-1 col-xs-10">
            <div class="title">DNA 2<br>Eco-tourism </div>
            <!--<div class="title2">The latest from the world of APAX</div>-->
            <div class="col-xs-12 awardsImg">
                <img src="../../static/recreation/shengtai2.jpg" alt="">
                <p>
                    Discovery Adventures Park as the first Discovery Channel theme park globally, one of our purposes is to introduce Eco-Tourism in the industry.
                    What is Eco-Tourism? The biggest difference from traditional tourism industry is that Eco-Tourism developing on the premise of protecting environment, based on core principles of marking tourists enjoy the most original travel experience in the nature and maintaining sustainable development of the eco-environment.<br>
                </p>
                <img src="../../static/recreation/shengtai1.jpeg" alt="">
                <p>
                    Moganshan ecosystem is a textbook model of domestic eco-tourism, it has great geographic advantage: surrounded by cloud-shrouded views and four distinct seasons of
                    nature climate which makes it celebrities’ most favorite spot over the last century. CNN names it as: “One of the Chinese Attractions That You Must Visit Besides the Great Wall”.
                    The concept of Discovery Adventures Park and style of Moganshan have come together in a harmonious way, every program completely reflects “Eco-Tourism” mission. Guests
                    can explore a better experience as well as taking programs outside of the park, which brightening up Moganhan’s long lasting title as “Hot Holiday Spot” even more remarkable.
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
        name: 'dna-2',
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

    .dna-2 {
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
        .dna-2 {
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
