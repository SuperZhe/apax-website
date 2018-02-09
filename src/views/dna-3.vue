<template>
    <div class="dna-3 clearfix">

        <div class="list col-xs-offset-1 col-xs-10">
            <div class="title">DNA 3<br>Science Education</div>
            <!--<div class="title2">The latest from the world of APAX</div>-->
            <div class="col-xs-12 awardsImg">
                <img src="../../static/recreation/kepu1.jpg" alt="">
                <p>
                    Many of us might have watched the famous exploration science program Discovery Channel, this globally biggest science channel used to telling countless people knowledge
                    in fields of wilderness, science and biology.<br>
                    Speaking of Discovery, we must talk about the man who is standing on the top of food chains——Bear Grylls, who ate raw ox-heart, live earthworm and cross no-man’s land.
                    Time and time again he challenging the limits of human wilderness survival and risk his life to show us survival knowledge and skills under severe environment conditions.
                </p>
                <img src="../../static/recreation/kepu2.jpg" alt="">
                <p>
                    However, from the screen all the experience seems too far and limited, now comes something more exciting than the TV channel! At the Discover Adventures Park, you are
                    able to learn new knowledge from your personal experience, our coaches will face to face share amazing stories with you.<br>
                    If you are a father or mother, there is no better choices like take kids to spend holidays in Discovery Adventures Park, kids will have a lot of fun here and happy studying!
                    Discovery Adventures Park would thoroughly implement the principle of delight education to let kids love and appreciate the nature, and improve learning and manipulative
                    ability.
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
                <a href="http://www.discoveryadventuresmoganshan.com/" target="_blank">Are you ready to take the adventure with us?</a>
            </div>
        </div>
    </div>
</template>
<script>
    import Arrow from '../components/Arrow.vue';
//    import { config } from '../assets/js/app/config';

    export default {
        name: 'dna-3',
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

    .dna-3 {
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
        .dna-3 {
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
