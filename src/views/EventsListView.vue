<template>
    <div class="events-list-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>
        <div class="list col-xs-offset-1 col-xs-10">
            <div class="item col-sm-3 col-xs-12" v-for="item in items" :key="item.id" @click="goDetail(item.id)">
                <img alt="" :src="config.host + item.conver">
                <div class="hover">
                    <div class="mask">
                        <h2 class="h2">{{isch? item.enTitle:item.title }}</h2>
                        <!-- <router-link :to="{ name: 'events-detail', params: { id: item.id }}"><img src="../assets/img/main/more.png" alt=""></router-link> -->
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
import {bus} from  '../assets/js/app/public'

export default {
    name : 'events-list-view',
    components : { OurworkSubNav, Arrow },
    data(){
        return {
            link : 'events',
            config,
            items : [],
            showO:2,
            isch:''
        }
    },
    created() {
        this.$bus.$emit('canvas-open');
        bus.$on('language',(val) => {this.isch = val})
        this.items = [];
        this.$axios.get(config.host+'/apax/news/list.do?page=1&rows=100&category=ourwork&orderBy=seq:asc').then((response) => {
            console.log('图片请求成功');
            this.items = response.data.result.content;
        }, (error) => {
            console.log(error)
        });

    },
    updated(){

    },
    mounted(){
        let sr = this.$sr({ reset: true, delay: 0 });
        sr.reveal('.item', { duration: 1000 });
        bus.$emit('change',this.showO);
    },
    methods: {
        replaceImgSrc(){
            for (let i = 0; i < this.items.length; i++) {
                this.items[i].thumbnailUrl = this.items[i].thumbnailUrl.replace('150', '640X360');
            }
        },
        goDetail(id){
            this.$router.push({ name: 'events-detail', params: { id: id }});
        }
    }
}
</script>

<style lang="less">
@import '../assets/style/common.less';

.events-list-view {
    padding-bottom: 150px;

    .subnav {
        padding-top: 80px;
    }

    .list {
        margin-top: 8em;

        .item {
            font-size: 0;
            position: relative;
            padding: 0 5px 0px 0;
            margin-bottom: 30px;
            >img {
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
            top:0;
            left:0;
            opacity: 0;
            transition: all 0.3s ease-in-out;
            /*padding: 0 5px 5px 0;*/
            .mask {
                background-color: rgba(0, 0, 0, 0.5);
                transition: all 0.3s ease-in-out;
                width: 100%;
                height: 100%;
                color: #fff;
                font-size: 12px;
                text-align: center;
                /*padding-top: 20%;*/
                /*padding: 0 5px 10px 0;*/
                .h2{
                    margin: 0;
                    height: 100%;
                    font-size: 12px;
                    line-height: 100%;
                    transform: translateY(50%);
                    /*margin-top: -8px;*/
                    font-weight: normal;
                }
            }

            h2 {
                margin-bottom: 2em;
            }
        }
    }
}

@media screen and (max-width: @max-width) {
.events-list-view {

    .list {
        margin-top: 4em;
    }
}
}
</style>
