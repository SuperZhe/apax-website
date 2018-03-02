<template>
    <div class="rocks-list-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="info col-xs-offset-1 col-xs-10">
            <div class="col-xs-12 rocksTopLeft">
                <div class="col-xs-7 rocksLeft">
                    <img src="../../static/rocks-detail/new.jpg" alt="">
                </div>
                <div class=" col-xs-5 rocksRight">
                    <span class="title1">BLEND FASHION WITH MUSIC</span>
                    By marketing the unification of entertainment and trends, Fashion Rocks offers China & Asia a 360-degree concept with infinite opportunities through fashion and music. An established IP weaving e-commerce, online & offline engagement and international broadcast distribution into a global platform reaching out to a multitude of consumers.
                </div>
                <div class="space clearfix"></div>
                <div class="title col-sm-10 col-xs-12" >SUPERSTARS x SUPERBRANDS x SUPERMODELS</div>
                <div class="sub-title col-xs-12" >
                    <p>Fashion Rocks showcases super A-listers with world-renowned fashion brands in a winning formula presented on stage and online throughout the world!
                    </p>
                </div>
                <div class="listItems col-xs-12">
                    <div class="item col-sm-4 col-xs-12" v-for="item in items" :key="item.id" @click="goDetail(item.id)">
                        <img alt="" :src="config.host + item.conver">
                        <div class="hover">
                            <div class="mask">
                                <h2>{{ item.enTitle }}</h2>
                                 <!--<router-link :to="{ name: 'rocks-detail', params: { id: item.id }}"><img src="../assets/img/main/more.png" alt=""></router-link>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content col-xs-12">
                <div class="col-xs-12"><img src="../../static/rocks-detail/2.jpg" alt=""></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <!--<div class="space clearfix"></div>-->
                <div class="col-xs-12"><img src="../../static/rocks-detail/3.jpg" alt=""></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class=" col-xs-12"><img src="../../static/rocks-detail/job.jpg" alt=""></div>
            </div>

        </div>
    </div>
</template>

<script>
import OurworkSubNav from '@/components/OurworkSubNav.vue';
import Arrow from '@/components/Arrow.vue';
import {bus} from  '../assets/js/app/public'
import config from '@js-app/config';
export default {
    name : 'rocks-list',
    components : { OurworkSubNav, Arrow },
    data(){
        return {
            link : 'rocks',
            info : {},
            isMobile:false,
            config,
            showO:5,
            items:[]
        }
    },
    created(){
        this.$bus.$emit('canvas-open');
        this.items = [];
        this.$axios.get('http://test.tron-m.com/apax/news/list.do?page=1&rows=100&category=Rocks&orderBy=seq:asc').then((response) => {
            this.items = response.data.result.content;
        }, (error) => {
            console.log(error);
        });
    },
    updated() {
        let sr = this.$sr({reset: true, delay: 300});
        sr.reveal('.item', {duration: 1000});
    },
    mounted(){
        bus.$emit('change', this.showO);
//        let sr = this.$sr({ reset: true, delay: 0 });
//        sr.reveal('.item', { duration: 1000 });
        if(this.IsPC()){
            this.isMobile = true
        }
    },
    methods : {
        goback(){
            this.$router.go(-1);
        },
        IsPC:function() {
            let userAgentInfo = navigator.userAgent;
            let Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
            let flag = true;
            for (let v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = false;
                    break;
                }
            }
            return flag;
        },
        goDetail(id) {
            this.$router.push({name: 'rocks-detail-view', params: {id: id}});
        },
    }
}
</script>

<style lang="less">
@import '../assets/style/common.less';

.rocks-list-view {
    padding-bottom: 150px;
    .rocksTopLeft{
        /*padding-right: 40px;*/
        .rocksLeft{
            margin-bottom: 1em;
            img{
                width:100%;
            }
        }
        .rocksRight{
            padding-left: 25px;
            margin: 0;
            line-height: 1.8em;
            font-size: 15px;
            span{
                display: block;
            }
        }
    }

    .imgListRock{
        img{
            width:100%;
            margin-bottom: 15px;
        }
    }
    .subnav {
        padding-top: 80px;
    }
    .content{
        margin-top: 17px;
         .space {
            padding: 10px 0;
        }
        img{
            width:100%;
        }
    }
    .info {
        /*padding-top:6em;*/
        padding-top: 7vh;
    }

    .title {
        font-size: 1.6em;
    }
    .title1{
        font-size: 1.6em;
        margin-bottom: 1.2em;
    }

    .sub-title {
        padding-top: 10px;
        margin-bottom: 20px;
        p{
            /*line-height: 30px;*/
        }
    }

    .date {
        text-align: right;

        span {
            position: relative;
            top:2em;
        }
    }
    .rocks-text{
        text-align: center;
        span{
            color: #6D227B;
        }
    }
    .listItems{
        /*margin-left: -15px;*/
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap:  wrap;
        .item:nth-child(1),.item:nth-child(4){
            /*margin-left: 30px;
            margin-right: 30px;*/
            margin-left: -15px;
        }
        .item:nth-child(3),.item:nth-child(6){
            margin-right: -15px;
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
.rocks-list-view {
    .rocks-text{
        margin-top: 1.6em;
    }
    .info {
        padding-top: 2em;
    }

    .title {
        font-size: 1.5em;
    }

    .date {
        text-align: left;
    }

    .s11, .s12, .s13 {
        img {
            width: 95%;
        }
    }

    .s12 {
        text-align: right;
        top:-100px;
    }

    .s13 {
        text-align: right;
        /*top:-50px;*/
    }

    .s21, .s22 {
        img {
            width: 100% !important;
        }
    }

    .s22 {
        text-align: center;
        /*top: 50px;*/
    }

    .s32, .s33 {
        img {
            width: 95%;
        }
    }

    .s32 {
        top: -50px;
    }

    .s33 {
        top: 50px;
        text-align: right;
    }

    .s41, .s42 {
        margin-top: 2em !important;
        img {
            width: 100% !important;
        }
    }

    .s42 {
        margin-top: 2em !important;
        text-align: center;
    }

    .s51 {
        /*font-size: 2.5em;*/
        margin-bottom: 1em;
    }

    .s52 {
        /*top: -1em;*/
        line-height: 2em;
        /*margin-bottom: 2em;*/

        h2 {
            font-size: 2.5em;
            font-weight: normal;
        }

        h3 {
            font-weight: normal;
            font-size: 2em;
            margin-top: 2em;
        }
    }
}
}
</style>
