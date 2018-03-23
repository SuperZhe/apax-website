<template>
    <div class="ourwork-sub-nav  col-xs-12 col-sm-10 col-sm-offset-1 clearfix">
        <div class="left">
            <div class="mobileLeft">
                <router-link to="/ourwork/live"><img src="../assets/img/main/live-title.png" alt="" class="live"
                                                     :class="{present:subnav1}"></router-link>
                <router-link to="/ourwork/events"><img src="../assets/img/main/events-title.png" alt=""
                                                       :class="{present:subnav}"></router-link>
                <router-link to="/ourwork/recreation"><img src="../assets/img/main/recreation-title.png" alt=""
                                                           :class="{present:subnav2}"></router-link>
            </div>
            <!--<router-link to="/ourwork/events/iconic" v-if="l4" ><span :class="{pitch:showO == 1}" class="hover" >iconic</span></router-link>-->
            <!--<router-link to="/ourwork/events/list" v-if="l4" ><span :class="{pitch:showO == 2}" class="hover">project</span></router-link>-->
            <!--&lt;!&ndash;新的页面展示视频&ndash;&gt;-->
            <!--&lt;!&ndash;<router-link to="/ourwork/events/video" v-if="l4" ><span :class="{pitch:showO == 3}" class="hover">video</span></router-link>&ndash;&gt;-->
            <!--<router-link to="/ourwork/live/sifs" v-if="l5"><img src="../assets/img/main/sifs-subnav.png" alt="" class="sifs"></router-link>-->
            <!--<router-link to="/ourwork/live/sifs" v-if="l5"><span :class="{pitch:showO == 5}" class="hover">sifs</span></router-link>-->
            <!--&lt;!&ndash;<router-link to="/ourwork/live/rocks" v-if="l6"><img src="../assets/img/main/rocks-subnav.png" alt="" class="rocks"></router-link>&ndash;&gt;-->
            <!--<router-link to="/ourwork/live/rocks" v-if="l6"><span :class="{pitch:showO == 4}" >FASHTON ROCKS</span></router-link>-->
        </div>
        <div class="right" :class="{navWidth:showO == 1 || showO  == 2,chinese:!isch}">
            <div class="mobileRight">
                <router-link to="/ourwork/events/iconic" v-if="r1" :class="{chinese2:!isch}">
                    <span :class="{pitch:showO == 1,bottomAlignment:showO == 1,}" class="hover eventsNav1">{{isch?'Signature Events':'经典案例'}}</span>
                </router-link>
                <router-link to="/ourwork/events/list" v-if="r1" :class="{chinese3:!isch}">
                    <span :class="{pitch:showO == 2,bottomAlignment:showO == 2}" class="hover eventsNav2">{{isch?'More Events':'更多作品'}}</span>
                </router-link>
                <router-link to="/ourwork/live/rocks" v-if="r2"><span :class="{pitch:showO == 5,bottomAlignment:showO == 5}" class="hover">Fashion Rocks</span>
                </router-link>

                <router-link to="/ourwork/live/week" v-if="r2"><span :class="{pitch:showO == 6,fashionNav:showO == 6}"
                                                                     class="hover">{{isch?'Shanghai Fashion Week':'上海时装周'}}</span></router-link>
                <router-link to="/ourwork/live/sifs" v-if="r2"><span :class="{pitch:showO == 4,bottomAlignment:showO == 4}">SIFS</span>
                </router-link>

            </div>
        </div>
    </div>
</template>


<script>
    import { bus } from '@/assets/js/app/public';

    export default {
        name: 'ourwork-sub-nav',
        data() {
            return {
                subnav: false,
                subnav1: false,
                subnav2: false,
                l4: false,
                l5: false,
                l6: false,
                r1: false,
                r2: false,
                r3: false,
                showO: '',
                isch:''
            };
        },
        props: ['links'],
        created() {
            bus.$on('language',(val) => {this.isch = val})
            switch (this.links) {
                case 'recreation' :
                    this.subnav2 = true;
                    break;

                case 'events' :
                    this.subnav = true, this.r1 = true;
                    break;

                case 'rocks' :
                    this.subnav1 = true, this.r2 = true;
                    break;

                case 'sifs' :
                    this.subnav1 = true, this.r2 = true;
                    break;
            }
//        console.log(bus)
            bus.$on('change', (val) => {
                this.showO = val;
            });
        },
        mounted() {

        },
        methods: {
            mous: function () {
//           this.$refs.oneT.css({color:'#fff'});

            },
        },
    };
</script>


<style lang="less">
    @import '../assets/style/common.less';

    .ourwork-sub-nav {
            /*margin-top: 10vh;*/
        .hover:hover {
            color: #6D227B;
        }

        .present {
            height: 16px !important;
            opacity: 1 !important;
        }

        .live-1, .recreation-1, .events-1 {
            -webkit-filter: grayscale(100%);
            -moz-filter: grayscale(100%);
            -ms-filter: grayscale(100%);
            -o-filter: grayscale(100%);
            filter: grayscale(100%);
            filter: gray;
        }

        .live-1:hover, .recreation-1:hover, .events-1:hover {
            filter: none;
        }

        .events-1 {
            height: 11px;
        }

        .live {
            height: 11px;
        }

        .StateSelected {
            font-size: 16px;
            color: #6D227B;
        }

        .pitch {
            font-size: 14px !important;
            color: #6D227B;
            /*margin-top: 2px !important;*/
        }
    }

    .ourwork-sub-nav {
        .left {
            float: left;
            position: relative;
            z-index:2;
            > div {
                margin-top: -2px;
                height: 20px;
            }
            img {
                height: 11px;
                opacity: 0.5;
                -moz-transition: all 0.3s ease-in-out; /* for Firefox */
                -o-transition: all 0.3s ease-in-out;
                transition: all 0.3s ease-in-out;
            }
            img:hover {
                opacity: 1;
                height: 16px;
                -moz-transition: height 0.3s ease-in-out; /* for Firefox */
                -o-transition: height 0.3s ease-in-out;
                transition: height 0.3s ease-in-out;
            }
            a {
                margin-right: 22px;
                font-size: 12px;
                color: #8d8d8d;
                display: inline-block;
                margin-top: 3px;
                /*width: 120px;*/
            }

        }
        .right {
            position: relative;
            float: right;
            font-size: 0;
            width: 320px;
            z-index:2;
            > div {
                height: 20px;
                display: flex;

                justify-content: space-between;
                align-items: flex-end;
            }
            a {
                /*margin-left: 22px;*/
                span {
                    font-size: 12px;
                }

            }
            a:nth-child(1) span {
                margin: 0;
            }
            a:hover {
                color: #6D227B;
            }
            .bottomAlignment {
                display: block;
                /*margin-bottom: -3px;*/
            }
        }
        .navWidth{
            width: 210px;
        }
        .chinese{
            width: 210px;
            .chinese2{
                margin-left: 50px !important;
            }
        }
        .recreation {
            position: relative;
            top: 1px;
        }

    }

    .subnav {
        opacity: 1;
        height: 16px;
        -moz-transition: all 0.3s ease-in-out; /* for Firefox */
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }

    .fashionNav {
        max-width: 181px !important;
    }

    @media screen and (max-width: @max-width) {
        .ourwork-sub-nav {
            padding-top: 8vh;
            .chinese{
                width: 210px;
                .chinese2{
                    margin-left: 0.6rem !important;
                }
                .chinese3{
                    margin-right: 0.6rem !important;
                }
            }
            .left {
                float: initial;
                .mobileLeft{
                    .present {
                        height: 14px !important;
                        opacity: 1 !important;
                    }

                    display: flex;
                    justify-content: space-between;
                    width:100%;
                    padding: 0 0.6rem;
                    img{
                        height: 0.2rem;
                    }
                }
                div {
                    height:auto;
                    a {
                        display: block;
                        margin: 0;
                        text-align: center;
                        line-height: 30px;
                    }
                }
            }

            .right {
                margin-top: 2em;
                /*text-align: right;*/
                float: initial;
                width:auto;
                .bottomAlignment{
                    margin-bottom: 0;
                }
                .mobileRight{
                    display: flex;
                    justify-content: space-around;
                    align-items: flex-end;
                    height:0.6rem;
                    margin:0 0.8rem;
                    .eventsNav1{
                        margin-left: 0.6rem;
                    }
                    .eventsNav2{
                        margin-right: 0.6rem;
                    }
                }

                div{
                    display: block;
                    height:auto;
                }
                .hover {
                    margin: 0;
                }
                div {
                    a {
                        display: block;
                        margin: 0;
                        text-align: center;
                        /*line-height: 30px;*/
                    }
                }
            }
            .right, .left {
                float: none;
                text-align: center;
            }
            .right a span {
                float: none;
            }
            .title {
                font-size: 2em;
            }
        }
    }
</style>
