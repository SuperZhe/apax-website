<template>
    <div class="news-list-view clearfix">

        <div class="list col-xs-offset-1 col-xs-10">
            <div class="title">{{isch?'APAX AWARDS':'APAX荣誉奖项\n'}}</div>
            <!--<div class="title2">The latest from the world of APAX</div>-->
            <div class="col-xs-12 awardsImg">
                <img src="../../static/news/0.jpg" alt="">
                <p v-if="isch">Independent Agency of the Year <br> Experiential Marketing Agency of the Year <br> Best Creativity Event <br> Best Product Launch <br> Best Use of Venue <br> Entertainment IP Marketing <br> Best Vacation Product <br> Travel Destination <br> Business Model Innovation
                </p>
                <p v-if="!isch">
                     最佳独立公司<br>
                     最佳创意活动<br>
                     最佳场地使用<br>
                     最佳体验式营销公司<br>
                     娱乐IP营销大奖<br>
                     最佳度假产品<br>
                     最佳旅游目的地<br>
                     商业模式创新奖<br>

                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import { bus } from '../assets/js/app/public';
import Arrow from '../components/Arrow.vue';
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
                font-size: 1.4em;
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
