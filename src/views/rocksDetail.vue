<template>
    <div class="rocks-detail-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="info col-xs-offset-1 col-xs-10">
            <div class="title col-sm-12 col-xs-12">{{ info.title }}</div>
            <!--<div class="date col-sm-2 col-xs-12"></div>-->
            <div class="content col-xs-12">
                <AContent :content="info.content"></AContent>
            </div>
            <div class="back col-xs-1">
                <a href="javascript:;" @click="goback">BACK</a>
            </div>
            <div class="share col-xs-offset-1 col-xs-7">
                <Share></Share>
            </div>
            <div class="col-xs-3 pagingOne">
                <!--<router-link :to="{ name : 'sifs-detail', params : { id : prevId } }" v-if="!prevId==0"><img-->
                <!--src="../assets/img/icon/page-prev.png" alt="" @click="RefreshOnce"></router-link>-->
                <!--<router-link :to="{ name : 'sifs-detail', params : { id : nextId } }" v-if="!nextId==0"><img-->
                <!--src="../assets/img/icon/page-next.png" alt="" @click="RefreshOnce"></router-link>-->
                <router-link :to="{ name : 'rocks-detail-view', params : { id : prevId } }" v-if="!prevId==0">
                    <div @mouseover="pagePrevOver()" @mouseout="pagePrevOut()">
                        <img src="../assets/img/icon/page-prev.png" alt="" v-show="pagePrev" @click="RefreshOnce">
                        <img src="../assets/img/icon/page-prev-on.png" alt="" v-show="!pagePrev" @click="RefreshOnce">
                    </div>
                    <!--<img src="../assets/img/icon/page-prev.png" alt="" >-->
                </router-link>
                <router-link :to="{ name : 'rocks-detail-view', params : { id : nextId } }" v-if="!nextId==0">
                    <div @mouseover="pageNextOver()" @mouseout="pageNextOut()">
                        <img src="../assets/img/icon/page-next.png" alt="" v-show="pageNext" @click="RefreshOnce">
                        <img src="../assets/img/icon/page-next-on.png" alt="" v-show="!pageNext" @click="RefreshOnce">
                    </div>
                    <!--<img src="../assets/img/icon/page-next.png" alt="" @click="RefreshOnce">-->
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
//    import config from '@js-app/config';
    import { bus } from '../assets/js/app/public';

    export default {
        name: 'rocks-detail-view',
        components: {OurworkSubNav, AContent, Arrow, Share},
        data() {
            return {
                link: 'rocks',
                info: {
                    title: '1',
                    date: null,
                    content: '2',
                },
                showO: 5,
                prevId: 0,
                nextId: 0,
                pageNext: true,
                pagePrev: true,
            };
        },
        created() {
            //console.log(this.$route.params)
            // this.$axios.get('http://jsonplaceholder.typicode.com/photos/' + this.$route.params.id).then((response) => {
            //     this.info = response.data;
            //     this.info.date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getDay() + 1);
            //     this.info.content = `
            //         大量内容
            //     `
            //     window.scrollTo(0, 0);
            //     //console.log(this.info)
            // }, (error) => {
            //     console.log(error)
            // });
            this.setPage();
            this.$bus.$emit('canvas-open');
        },
        mounted() {
//            this.$axios.get('http://test.tron-m.com/apax/news/get.do?id=' + this.$route.params.id).then((response) => {
//                //console.log(response.data.result);
//                this.isch?this.info.title = response.data.result.enTitle:this.info.title = response.data.result.title
//                this.info.content = response.data.result.enHtml;
//                this.info.date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getDay() + 1);
//                // this.info.content = `
//                //     大量内容
//                // `
//                window.scrollTo(0, 0);
//            }, (error) => {
//                console.log(error);
//            });
            this.loadDetail(this.$route.params.id);
            bus.$emit('change', this.showO);
        },
        watch: {
            '$route'(to) {
                this.loadDetail(this.$route.params.id);
                this.setPage(this.$route.params.id);
            },
        },
        methods: {
            pagePrevOver: function () {
                this.pagePrev = false;
            },
            pagePrevOut: function () {
                this.pagePrev = true;
            },
            pageNextOver: function () {
                this.pageNext = false;
            },
            pageNextOut: function () {
                this.pageNext = true;
            },
            goback() {
                this.$router.go(-1);
            },
            setPage(id) {
                this.$axios.get('http://test.tron-m.com/apax/news/navigation.do?id=' + (id ? id : this.$route.params.id) + '&category=Rocks').then((response) => {
                    var data = response.data.result;
                    if (data.prev) {
                        this.prevId = data.prev.id;
                    } else {
                        this.prevId = 0;
                    }

                    if (data.next) {
                        this.nextId = data.next.id;
                    } else {
                        this.nextId = 0;
                    }

                }, (error) => {
                    console.log(error);
                });
            },
            loadDetail(id) {
                this.$axios.get('http://test.tron-m.com/apax/news/get.do?id=' + (id ? id : this.$route.params.id)).then((response) => {
                    console.log(response.data.result);
                    this.info.title = response.data.result.enTitle;
                    this.info.content = response.data.result.enHtml;
                    window.scrollTo(0, 0);
                }, (error) => {
                    console.log(error);
                });
            },
            RefreshOnce() {
//                this.$router.go(0)
            },
        },
    };
</script>

<style lang="less">
    @import '../assets/style/common.less';

    .rocks-detail-view {
        padding-bottom: 150px;
        .subnav {
            padding-top: 80px;
        }
        .pagingOne {
            text-align: right;
            /*display: flex;*/
            /*justify-content: space-around;*/
            /*align-items: center;*/
            div{
                display: inline-block;
            }
        }
        .acontent{
            img{
                margin-top: 30px;
            }
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
            margin-top: 2em;
        }

        .share {
            text-align: center;
        }
    }

    @media screen and (max-width: @max-width) {
        .sifs-detail-view {
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
