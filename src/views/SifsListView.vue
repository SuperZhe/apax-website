<template>
    <div class="sifs-list-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="list col-xs-offset-1 col-xs-10">
            <div class="title col-sm-10 col-xs-12">A GLOBAL BRIDGE</div>
            <div class="sub-title col-xs-12">
                <p>
                    APAX Live successfully enhanced the global influence of Shanghai Fashion Week by introducing events and shows of top international fashion brands through Shanghai International Fashion Showcase or SIFS in short.
                    SIFS also serves as bridge between global designers & brands with China’s fast growing fashion industry; marrying brands and crossover collaborations and delivering unique events exclusive to China including the recent Ports flash mob fashion catwalk, 3.1 Phillip Lim’s floral installation as well as a thought provoking forum featuring CFDA’s president,Steven Kolb.
                </p>
            </div>
            <div class="listItems">
                <div class="item col-sm-4 col-xs-12" v-for="item in items" :key="item.id" @click="goDetail(item.id)">
                    <img alt="" :src="config.host + item.conver">
                    <div class="hover">
                        <div class="mask">
                            <h2>{{ item.enTitle }}</h2>
                            <!-- <router-link :to="{ name: 'sifs-detail', params: { id: item.id }}"><img src="../assets/img/main/more.png" alt=""></router-link> -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="col-xs-6">4</div> -->
        </div>
    </div>
</template>

<script>
    import config from '@js-app/config';
    import OurworkSubNav from '@/components/OurworkSubNav.vue';
    import Arrow from '@/components/Arrow.vue';
    import { bus } from '../assets/js/app/public';

    export default {
        name: 'sifs-list-view',
        components: {OurworkSubNav, Arrow},
        data() {
            return {
                link: 'sifs',
                items: [],
                config,
                showO: 4,
            };
        },
        created() {
            // this.$axios.get('http://jsonplaceholder.typicode.com/photos?albumId=1').then((response) => {
            //     this.items = response.data;
            //     this.items.splice(11, this.items.length);
            //     this.replaceImgSrc();
            // }, (error) => {
            //     console.log(error)
            // });
            this.$bus.$emit('canvas-open');
            this.items = [];
            this.$axios.get('http://test.tron-m.com/apax/news/list.do?page=1&rows=100&category=sifs&orderBy=id:asc').then((response) => {
                this.items = response.data.result.content;
            }, (error) => {
                console.log(error);
            });
        },
        updated() {
            let sr = this.$sr({reset: true, delay: 300});
            sr.reveal('.item', {duration: 1000});
        },
        mounted() {
            bus.$emit('change', this.showO);
        },
        methods: {
            replaceImgSrc() {
                for ( let i = 0; i < this.items.length; i++ ) {
                    this.items[i].thumbnailUrl = this.items[i].thumbnailUrl.replace('150', '640X360');
                }
            },
            goDetail(id) {
                this.$router.push({name: 'sifs-detail', params: {id: id}});
            },
        },
    };
</script>

<style lang="less">
    @import '../assets/style/common.less';

    .sifs-list-view {
        padding-bottom: 150px;
        .title {
            font-size: 2.2em;
        }

        .sub-title {
            padding-top: 10px;
            padding-bottom: 20px;
            p {
                /*line-height: 30px;*/
            }
        }
        .subnav {
            padding-top: 80px;
        }

        .list {
            margin-top: 7vh;
            .listItems {
                margin-left: -15px;
            }
            .item {
                font-size: 0;
                position: relative;
                margin-bottom: 30px;
                padding: 0 15px;

                > img {
                    width: 100%;
                }

                &:hover {
                    .hover {
                        opacity: 1;
                        transition: all 0.3s ease-in-out;
                    }
                }
            }
            .hover {
                position: absolute;
                height: 100%;
                width: 100%;
                /*padding: 12px;*/
                top: 0;
                left: 0;
                opacity: 0;
                transition: all 0.3s ease-in-out;

                .mask {
                    background-color: rgba(0, 0, 0, 0.5);
                    transition: all 0.3s ease-in-out;
                    width: 100%;
                    height: 100%;
                    color: #fff;
                    font-size: 12px;
                    text-align: center;
                    padding: 0 15px;
                    /*padding-top: 20%;*/
                    /*padding: 0 5px 10px 0;*/
                }

                h2 {
                    margin: 0;
                    height: 100%;
                    line-height: 100%;
                    transform: translateY(50%);
                    font-size: 14px;
                }
            }
        }
    }

    @media screen and (max-width: @max-width) {
        .sifs-list-view {
            .list {
                margin-top: 4em;
            }
            .title {
                font-size: 2em;
            }
        }
    }
</style>
