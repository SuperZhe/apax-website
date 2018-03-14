<template>
    <div class="info-view safety clearfix">
        <div class="info col-xs-offset-1 col-xs-10">
            <br>
            <h3>{{isch?'SAFETY':'安全'}}</h3>
            <div class="col-xs-offset-0 col-xs-12 col-sm-10 col-sm-offset-1 safetyLogo">
                <div class="col-xs-4 col-sm-4 course">
                    <img src="../../static/recreation/icon2.png" alt="" class="col-xs-10 col-xs-offset-1">
                </div>
                <div class="col-xs-4 col-sm-4 course">
                    <img src="../../static/recreation/icon3.png" alt="" class="col-xs-10 col-xs-offset-1">
                </div>
                <div class="col-xs-4 col-sm-4 course">
                    <img src="../../static/recreation/icon1.png" alt="" class="col-xs-10 col-xs-offset-1">
                </div>
            </div>
            <h4 class="title2 col-xs-12" v-if="isch">INTERNATIONAL STANDARD FACILITIES AND SAFETY SUPPORT</h4>
            <h4 class="title2 col-xs-12" v-if="!isch">国际标准化设备设施以及安全系统</h4>
            <h3 class="title3 col-xs-12">{{isch?'FACILITIES':'园内活动设施'}}</h3>
            <div class="col-xs-12 safetyLogo">
                <img src="../../static/recreation/5.jpg" alt="" class="col-xs-12 col-sm-3">
                <img src="../../static/recreation/shengtai1.jpeg" alt="" class="col-xs-12 col-sm-3">
                <img src="../../static/recreation/6.jpg" alt="" class="col-xs-12 col-sm-3">
                <img src="../../static/recreation/7.jpg" alt="" class="col-xs-12 col-sm-3">
                <img src="../../static/recreation/4.jpg" alt="" class="col-xs-12 col-sm-3">
                <img src="../../static/recreation/2.jpg" alt="" class="col-xs-12 col-sm-3">
                <img src="../../static/recreation/1.jpg" alt="" class="col-xs-12 col-sm-3">

                <img src="../../static/recreation/3.jpg" alt="" class="col-xs-12 col-sm-3">
            </div>
            <h3 class="title3 col-xs-12">{{isch?'COURSE SERIES':'课程系列'}}</h3>
            <div class="col-xs-12 safetyLogo">
                <div class="col-xs-12 col-sm-3 course">
                    <img src="../../static/recreation/icon-DCS.png" alt="" class="col-xs-2 col-xs-offset-5">
                    <p class="col-sm-10 col-sm-offset-1 col-xs-12" v-if="isch">
                        Discovery Adventures Corporate Series (DCS)Discovery Adventures 企业定制系列</p>
                    <p class="col-sm-10 col-sm-offset-1 col-xs-12" v-if="isch">
                        Discovery Adventures Corporate Series courses arespecially designed
                        corporate team building programs which aim to enhance and create
                        understanding of leadership skills, team building, communication,
                        decision-making and crisis management.
                    </p>
                    <p class="col-sm-10 col-sm-offset-1 col-xs-12" v-if="!isch">DCS企业系列</p>
                    <p class="col-sm-10 col-sm-offset-1 col-xs-12" v-if="!isch">
                        企业课程系列为企业客户提供一站式团队建设
                        和培训体验服务。其中6大类培训模块：
                        包括领导力、沟通力、决策力、
                        危机管理能力和冲突解决能力。
                    </p>
                </div>
                <div class="col-xs-12 col-sm-3 course">
                    <img src="../../static/recreation/icon-DES.png" alt="" class="col-xs-2 col-xs-offset-5">
                    <p class="col-sm-10 col-sm-offset-1 col-xs-12" v-if="isch">Discovery Adventures Educational Series (DES)
                        Discovery Adventures 教育课程系列</p>
                    <p class="col-sm-10 col-sm-offset-1 col-xs-12" v-if="isch">
                        Discovery Adventures Educational Series courses are designed
                        for junior adventurers to help them think creatively and to work
                        together as a team. Our courses provide opportunities for youth
                        to have fun while challenging themselves and gaining valuable
                        new skills along the way.
                    </p>
                    <p class="col-sm-10 col-sm-offset-1 col-xs-12" v-if="!isch">DES教育系列</p>
                    <p class="col-sm-10 col-sm-offset-1 col-xs-12" v-if="!isch">
                        旨在通过户外活动和体验，
                        帮助小探险家们提升思维创新能力、
                        学习团队合作能力。课程系列为小探险家们提供了
                        挑战自我与学习户外技能的完善平台，这些技能都将于
                        潜移默化中积极影响他们的日常生活。
                    </p>
                </div>
                <div class="col-xs-12 col-sm-3 course">
                    <img src="../../static/recreation/icon-DIS.png" alt="" class="col-xs-2 col-xs-offset-5">
                    <p class="col-sm-10 col-sm-offset-1 col-xs-12" v-if="isch">Discovery Adventures Individual Series (DIS)
                        Discovery Adventures 自由探索课程</p>
                    <p class="col-sm-10 col-sm-offset-1 col-xs-12" v-if="isch">Discovery Adventures welcomes all adventure lovers,
                        vacation and holiday planners, as well as family groups for
                        a day of adventures in our park. Our range of activities includes
                        a Zip Line Tour, Hot Air Balloon, Climbing Wall.
                        Pre-booking of activities is necessary.
                    </p>
                    <p class="col-sm-10 col-sm-offset-1 col-xs-12" v-if="!isch">DIS自由探索系列</p>
                    <p class="col-sm-10 col-sm-offset-1 col-xs-12" v-if="!isch">
                        自由探索课程期待与探索爱好者、旅行者、
                        家庭团队共同开启一日冒险之旅。
                        该课程需要提前预定。
                    </p>
                </div>
                <div class="col-xs-12 col-sm-3 course">
                    <img src="../../static/recreation/icon-DSS.png" alt="" class="col-xs-2 col-xs-offset-5">
                    <p class="col-sm-10 col-sm-offset-1 col-xs-12" v-if="isch">Discovery Adventures Special Series (DSS)
                        Discovery Adventures 专业定制课程</p>
                    <p class="col-sm-10 col-sm-offset-1 col-xs-12" v-if="isch">Discovery Adventures Special Series are
                        customized options provided upon request to clients.
                        Together with our trainers, we are able to adapt
                        our programming to an off-site location to meet the specific
                        needs of corporate or adventurer groups.
                    </p>
                    <p class="col-sm-10 col-sm-offset-1 col-xs-12" v-if="!isch">DSS特别定制系列</p>
                    <p class="col-sm-10 col-sm-offset-1 col-xs-12" v-if="!isch">
                        Discovery专业定制课程根据客户需求
                        提供定制服务。携手专业教练团队,
                        为企业和团队客户开启一场
                        专属探索之旅。
                    </p>
                </div>

            </div>
            <h3 class="title3 col-xs-12">{{isch?'CERTIFICATE':'认证证书'}}</h3>
            <div class=" col-xs-12 col-sm-12 certificate">
                <img src="../../static/recreation/DES.jpg" alt="" class="col-xs-12 col-sm-6">
                <img src="../../static/recreation/DCS.jpg" alt="" class="col-xs-12 col-sm-6">
            </div>
            <p class="col-xs-10 col-xs-offset-1 certificaText" v-if="isch">
                Participates will get a DISCOVERY ADVENTURES PARK Certificate, a stamp when
                completing our courses.
            </p>
            <p class="col-xs-10 col-xs-offset-1 certificaText" v-if="!isch">
                所有的参与者将获得Discovery探索极限主题公园的认证证书以及完成课程的印章凭证。
            </p>
            <div class="col-xs-12 linkFrame">
                <div class="set_6_btn in blue">
                    <router-link to="/recreationMap" class="link">
                        <span>{{isch?'DISCOVER MORE':'国际布局'}}</span>
                    </router-link>
                    <div class="corners top"></div>
                    <div class="corners bottom"></div>
                </div>
            </div>
            <div class="linkUs  col-xs-12">
                <a href="http://www.discoveryadventuresmoganshan.com/" target="_blank">{{isch?'Are you ready to take the adventure with us?':'你准备好和我们一起冒险了吗?'}}</a>
            </div>
        </div>

    </div>
</template>

<script>
    import { bus } from '../assets/js/app/public';
    export default {
        name: 'safety-view',
        data(){
            return{
                isch:''
            }
        },
        created() {
            bus.$on('language',(val) => {this.isch = val})
            this.$bus.$emit('canvas-open');
        },
        mounted() {
            setTimeout(() => this.$('.safety').fadeIn(), 500);
        },
    };
</script>

<style lang="less">
    @import '../assets/style/common.less';
    @import '../assets/style/but';

    .safety {
        display: none;
        .set_6_btn.blue:hover .corners:after, .set_6_btn.blue:hover .corners:before {
            border-color: #36bbfc !important;
        }
        .set_6_btn.blue:hover a {
            color: #36bbfc;
            font-size: 16px;
            text-shadow: 0 0 2px #36bbfc,
            0 0 10px #fff;
        }
        .info {
            h3 {
                font-size: 2.2em;
                margin-bottom: 3em;
            }
            .title2 {
                margin-top: 1.8em;
                font-size: 1.6em;
            }
            .title3 {
                margin-top: 3em;
                margin-bottom: 1.5em;
            }
            .certificaText {
                font-size: 1.6em;
                text-align: center;
                margin-top: 1em;
            }
            .linkFrame {
                text-align: center;
                margin-top: 3em;
                margin-bottom: 2.5em;
            }
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
            .safetyLogo {
                /*margin-bottom: 2em;*/
                img {
                    padding: 0 10px 6px 0;
                }
                .course {
                    img {
                        padding: 0;
                    }
                    p:nth-child(2) {
                        font-size: 12px;
                        color: #e47226;
                    }
                    p:nth-last-child(1) {
                        font-size: 12px;
                        text-align: left;
                        margin-top: 0.8em;
                    }
                }
                /*>div{*/
                /*padding: 0 10px 10px 0;*/
                /*font-size: 0;*/
                /*}*/
                /*>div:nth-last-child(1){*/
                /*margin-right: 0;*/
                /*}*/
                /*img {*/
                /*width: 100%;*/
                /*}*/
            }
            .certificate{
                img:nth-child(1){
                    padding-right: 25px;
                }
                img:nth-child(2){
                    padding-left: 25px;
                }
            }
        }
    }

    @media screen and (max-width: @max-width) {
        .safety {
            .info {
                .certificaText{
                    font-size: 14px;
                    margin-top: 1.2em;

                }
                .certificate{
                    img{
                        padding: 0 !important;
                        margin-bottom: 0.4rem;
                    }
                }
                h3 {
                    font-size: 1.6em;
                }
                .row {
                    margin-top: 2em !important;
                }
                .title, .title2, .title3 {
                    font-size: 1.6em
                }
                .safetyLogo {
                    img {
                        padding: 0;
                        margin-bottom: 1em;
                    }
                }
                .linkUs {
                    a {
                        font-size: 0.8em;
                        display: block;
                        padding: 0;
                        text-align: center;
                    }

                }
                .linkFrame{
                    margin-top: 1em;
                    margin-bottom: 1em;
                }
            }
        }
    }
</style>
