<template>
    <div class="events-detail-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="info col-xs-offset-1 col-xs-10">
            <div class="title col-sm-12 col-xs-12">{{isch?info.title1: info.title2 }}</div>
            <!--<div class="date col-sm-2 col-xs-12"><span>{{ info.date }}</span></div>-->
            <div class="content col-xs-12">
                <AContent :content="info.content1" v-if="isch"></AContent>
                <AContent :content="info.content2" v-if="!isch"></AContent>
            </div>
            <div class="back col-xs-1">
                <a href="javascript:;" @click="goback">BACK</a>
            </div>
            <div class="share col-xs-offset-1 col-xs-7">
                <Share></Share>
            </div>
            <div class="col-xs-3 pagingOne">
                <router-link :to="{ name : 'events-detail', params : { id : nextId } }" v-if="!nextId==0">
                    <div  @mouseover="pageNextOver()" @mouseout="pageNextOut()">
                        <img src="../assets/img/icon/page-prev.png" alt="" v-show="pageNext" @click="RefreshOnce">
                        <img src="../assets/img/icon/page-prev-on.png" alt="" v-show="!pageNext" @click="RefreshOnce">
                    </div>
                    <!--<img src="../assets/img/icon/page-next.png" alt="" @click="RefreshOnce">-->
                </router-link>
                <router-link :to="{ name : 'events-detail', params : { id : prevId } }" v-if="!prevId==0">
                    <div @mouseover="pagePrevOver()" @mouseout="pagePrevOut()">
                        <img src="../assets/img/icon/page-next.png" alt="" v-show="pagePrev" @click="RefreshOnce">
                        <img src="../assets/img/icon/page-next-on.png" alt="" v-show="!pagePrev" @click="RefreshOnce">
                    </div>
                    <!--<img src="../assets/img/icon/page-prev.png" alt="" >-->
                </router-link>

            </div>
        </div>
    </div>
</template>

<script>
    import OurworkSubNav from '@/components/OurworkSubNav.vue';
    import AContent from '@/components/AContent.vue';
    import Share from '@/components/Share.vue';
    import Arrow from '@/components/Arrow.vue';
    import config from '@js-app/config';
    import {bus} from '../assets/js/app/public'

    export default {
        name: 'events-detail-view',
        components: {OurworkSubNav, AContent, Arrow, Share},
        data() {
            return {
                link: 'events',
                title: '',
                config,
                info: {
                    title1: '',
                    title2: '',
                    date: null,
                    content1: '',
                    content2: ''
                },
                prevId: 0,
                nextId: 0,
                showO: 2,
                pageNext:true,
                pagePrev:true,
                isch:''
            }
        },
        beforeRouteUpdate (to, from, next) {
            this.loadDetail(this.$route.params.id);
            this.setBg();
            this.setPage(this.$route.params.id);
            next();
        },
        created() {
            bus.$on('language',(val) => {this.isch = val})
            this.setBg();
            this.setPage();
        },
        watch:{
            '$route' (to) {
                this.loadDetail(this.$route.params.id);
                this.setBg();
                this.setPage(this.$route.params.id);
            }
        },
        mounted() {
            bus.$emit('change', this.showO);
            this.loadDetail();
        },
        methods: {
            pagePrevOver:function () {
                this.pagePrev = false;
            },
            pagePrevOut:function () {
                this.pagePrev = true;
            },
            pageNextOver:function () {
                this.pageNext = false;
            },
            pageNextOut:function () {
                this.pageNext = true;
            },
            goback() {
                this.$router.push(-1);
                this.$router.go(-1);
            },
            setBg() {
                this.$bus.$emit('canvas-open');
            },
            setPage(id) {
                this.$axios.get('http://test.tron-m.com/apax/news/navigation.do?id=' + (id?id:this.$route.params.id) + '&category=ourwork').then((response) => {
                    //console.log(response);
                    var data = response.data.result;
                    if (data.prev) {

                        this.prevId = data.prev.id;
                    }

                    if (data.next) {

                        this.nextId = data.next.id;
                    }

                }, (error) => {
                    console.log(error)
                });
            },

            loadDetail(id) {
                this.$axios.get('http://test.tron-m.com/apax/news/get.do?id=' + (id?id:this.$route.params.id)).then((response) => {
                    //console.log(response.data.result);
                    this.info.title1 = response.data.result.enTitle;
                    this.info.title2 = response.data.result.title;
                    this.info.content1 = response.data.result.enHtml
                    this.info.content2 = response.data.result.html;
                    this.info.date = response.data.result.enAddr;
//                        new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getDay() + 1);
                    window.scrollTo(0, 0);
                }, (error) => {
                    console.log(error)
                });
            },
            RefreshOnce() {
//                this.$router.go(0)
            }
        },
    }
</script>

<style lang="less">
    @import '../assets/style/common.less';

    .events-detail-view {
        padding-bottom: 150px;

        .subnav {
            padding-top: 80px;
        }

        .info {
            padding-top: 7vh;
        }

        .title {
            font-size: 2.2em;
        }

        .date {
            text-align: right;

            span {
                position: relative;
                top: 2em;
            }
        }

        .content {
            margin: 5em 0;
            margin-top: 1em;
        }

        .share {
            text-align: center;
        }
        .pagingOne {
            text-align: right;
            div{
                display: inline-block;
            }
        }
    }

    @media screen and (max-width: @max-width) {
        .events-detail-view {
            .content {
                margin: 3em 0;
            }
            .info {
                padding-top: 4em;
            }

            .title {
                font-size: 1.5em;
            }

            .date {
                text-align: left;
            }
        }
    }
</style>
