<template>
    <div class="news-list-view clearfix">

        <div class="list col-xs-offset-1 col-xs-10">
            <div class="title">APAX NEWS<br>
                THE LATEST FROM THE WORLD OF APAX</div>
            <div class="content">
                <div class="col-sm-5 contentNews col-xs-12" >
                    <img src="../../static/news/4.png" alt="">
                </div>
                <div class="col-sm-7 col-xs-12">
                    <div class="col-xs-offset-1 col-xs-9 newstext">
                        <div class="title3">APAX Group Won Two Trophies For Campaign Greater China Agency Of the Year !</div>
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
                margin-bottom: 2em;
                img{
                    width:100%;
                }
                p{
                    text-align: center;
                }
            }
            .title{
                font-size: 2.2em;
                margin-bottom: 2em;
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
