<template>
    <div class="news-list-view clearfix">

        <div class="list col-xs-offset-1 col-xs-10">
            <div class="title" v-if="isch">APAX NEWS<br> <span>THE LATEST FROM THE WORLD OF APAX</span><br>
                </div>
            <div class="title" v-if="!isch">APAX最新资讯<br>
                </div>
            <div class="content">
                <div class="col-sm-5 contentNews col-xs-12" >
                    <img src="../../static/news/4.png" alt="">
                </div>
                <div class="col-sm-7 col-xs-12">
                    <div class="col-sm-offset-1 col-sm-9 newstext col-xs-12">
                        <div class="title3">{{isch?'APAX Group Won Two Trophies For Campaign Greater China Agency Of the Year!':'APAX斩获Campaign AOY两座重磅奖杯！'}}</div>
                        <p v-if="isch">Campaign Agency of the Year awards has recognized inspired leadership, management excellence,<br> outstanding business performance and overall achievements in advertising and communications industries. </p>
                        <p v-if="!isch">Campaign AOY奖项在营销行业内占据了举足轻重的地位，以表彰亚太地区年度拥有杰出成就的代理商，认可其在领域内的领导力，卓越的管理及突出的商业表现。 </p>
                        <p  v-if="isch">APAX Group is honored to announce that we have won two trophies - one gold and one silver for Campaign Greater China Agency Of the Year.</p>
                        <p  v-if="!isch">APAX Group很荣幸向大家宣布，我们获得了 Campaign大中华区2017年度代理商的两项重磅大奖，以一金一银两座奖杯的好成绩成为超级赢家！</p>
                    <div class="mobileSet">
                        <div class="set_6_btn in blue">
                            <router-link to="awards/detail/1"><span>{{isch?'View Article':'阅读详情'}}</span></router-link>
                            <div class="corners top"></div>
                            <div class="corners bottom"></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Arrow from '../components/Arrow.vue';

    import { bus,isChinese } from '../assets/js/app/public';
    export default {
        name : 'news-list-view',
        components : { Arrow },
        data(){
            return {
                items : [],
                isch:''
            }
        },
        created() {
            bus.$on('language',(val) => {this.isch = val})
            this.$bus.$emit('canvas-open');
            this.items = [];
            /*this.$axios.get('http://test.tron-m.com/apax/news/list.do?page=1&rows=100&category=ourwork&orderBy=id:desc').then((response) => {
                this.items = response.data.result.content;
            }, (error) => {
                console.log(error)
            });*/
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
                font-size: 2em;
                margin-bottom: 2em;
                span{
                    font-size: 0.38rem;
                }
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
                font-size: 0.46rem !important;
                margin-bottom: 2vh;
                span{
                    font-size: 0.36rem !important;
                }
            }
            .mobileSet{
                text-align: center;
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
