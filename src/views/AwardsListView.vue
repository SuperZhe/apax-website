<template>
    <div class="news-list-view clearfix">

        <div class="list col-xs-offset-1 col-xs-10">
            <div class="title">APAX AWARDS</div>
            <!--<div class="title2">The latest from the world of APAX</div>-->
            <div class="col-xs-12 awardsImg">
                <img src="../../static/news/0.jpg" alt="">
                <p>Independent Agency of the Year - Experiential Marketing Agency of the Year - Best Creativity Event - Best Product Launch - Best Use of Venue - Entertainment IP Marketing - Best Vacation Product - Travel Destination - Business Model Innovation
                </p>
            </div>
            <div class="content">
                <div class="col-sm-4 contentNews col-xs-12" >
                    <img src="../../static/news/4.png" alt="">
                </div>
                <div class="col-sm-8 col-xs-12">
                    <div class="col-xs-offset-1 col-xs-8 newstext">
                        <div class="title3">APAX Group won two trophies for Campaign Greater China Agency Of the Year !</div>
                        <p>Campaign Agency of the Year awards has recognized inspired leadership, management excellence,<br> outstanding business performance and overall achievements in advertising and communications industries. </p>
                        <p>APAX Group is honored to announce that we have won two trophies - one gold and one silver for Campaign Greater China Agency Of the Year.</p>

                        <div class="set_6_btn in blue">
                            <router-link to="awards/detail/1"><span>View Article</span></router-link>
                            <div class="corners top"></div>
                            <div class="corners bottom"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!--<div class="item col-sm-6 col-xs-12" v-for="item in items" :key="item.id" @click="goDetail(item.id)">-->
                <!--<img alt="" :src="'http://test.tron-m.com/'+item.conver">-->
                <!--<div class="hover">-->
                    <!--<div class="mask">-->
                        <!--<h2>{{ item.enTitle }}</h2>-->
                        <!--&lt;!&ndash; <router-link :to="{ name: 'news-detail', params: { id: item.id }}"><img src="../assets/img/main/more.png" alt=""></router-link> &ndash;&gt;-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
            <!-- <div class="col-xs-6">4</div> -->
        </div>
    </div>
</template>

<script>

import Arrow from '../components/Arrow.vue';
import {config} from  '../assets/js/app/config'
export default {
    name : 'news-list-view',
    components : { Arrow },
    data(){
        return {
            items : [],
            config:config
        }
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
        this.$axios.get('http://test.tron-m.com/apax/news/list.do?page=1&rows=100&category=ourwork&orderBy=id:desc').then((response) => {
            this.items = response.data.result.content;
        }, (error) => {
            console.log(error)
        });
    },
    updated(){
            let sr = this.$sr({ reset: true, delay: 300 });
            sr.reveal('.item', { duration: 1000 });
    },
    mounted(){
        setTimeout(()=> this.$('.news-list-view').fadeIn(), 500);
    },
    methods: {
        replaceImgSrc(){
            for (let i = 0; i < this.items.length; i++) {
                this.items[i].thumbnailUrl = this.items[i].thumbnailUrl.replace('150', '640X360');
            }
        },

        goDetail(id){
            this.$router.push({ name: 'news-detail', params: { id: id }});
        }
    }
}
</script>

<style lang="less">
@import '../assets/style/common.less';
@import '../assets/style/but';
.news-list-view {
    display: none;
    padding-top: 10vh;
    padding-bottom: 150px;
    .blue{
        margin-left: -20px;
    }
    .list {
        margin-top: 7vh;
        .awardsImg{
            margin-bottom: 5em;
            img{
                width:100%;
            }
        }
        .title{
            font-size: 2.2em;
            margin-bottom: 2vh;
        }
        .title2{
            font-size: 2.6em;
        }
        .content{
            margin-top: 5vh;
        }
        .contentNews{
            img{
                width:100%;
            }
        }
        .newstext{
            /*height: 300px;*/
            padding-bottom: 60px;
            .title3{
                font-size: 1.4em;
                font-weight: bold;
            }
            .article{
                border: 1px solid;
                padding: 5px 10px;
                position: absolute;
                bottom: 0 ;
                left: 0;
            }
        }

    }
}

@media screen and (max-width: @max-width) {
.news-list-view {
    .title{
        font-size: 2em !important;
        margin-bottom: 2vh;
    }
    .title2{
        font-size: 1.8em !important;
    }
    .title3{
        font-size: 1.2em;
        font-weight: bold;
    }
    .list {
        margin-top: 20vh;
    }
    .text{
        margin-top: 4vh;
    }
}
}
</style>
