<template>
    <div class="iconic-detail-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="info col-xs-offset-1 col-xs-10">
            <div class="title col-sm-9 col-xs-12" >Burberry Hologram Fashion Show</div>
            <div class="date col-sm-3 col-xs-12"><span>Beijing, China</span></div>
            <div class="content col-xs-12">
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-3/new1.jpg" alt="">
                </div>
            	<div class="col-xs-12">
                    <p>To commemorate the opening of their flagship Beijing store, Burberry held a unique runway show that incorporated live music from Keane and featured a multi-senatorial virtual experience enhanced by holographic technology. The event was broadcast live all around the world at burberry.com and many other international fashion sites.</p></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-3/new2.jpg" alt="">
                </div>   <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-3/new4.jpg" alt="">
                </div>   <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-3/new3.jpg" alt="">
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix" v-if="isMobile"></div>
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-3/new5.jpg" alt="">
                </div>
            </div>
            <div class="back col-xs-1">
                <a href="javascript:;" @click="goback">BACK</a>
            </div>
            <div class="share col-xs-offset-1 col-xs-8">
                <Share></Share>
            </div>
            <div class="col-xs-2 pagingOne">
                <router-link to="detail-c"><img src="../assets/img/icon/page-prev.png" alt=""></router-link>
                <router-link to="detail-e"><img src="../assets/img/icon/page-next.png" alt=""></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import OurworkSubNav from '@/components/OurworkSubNav.vue';
import AContent from '@/components/AContent.vue';
import Share from '@/components/Share.vue';
import Arrow from '@/components/Arrow.vue';
import {bus} from  '../assets/js/app/public'
export default {
    name : 'iconic-detail-view',
    components : { OurworkSubNav, AContent, Arrow, Share },
    data(){
        return {
            link : 'events',
            info : {},
            showO:1,
            isMobile:false
        }
    },
    created(){
        this.$bus.$emit('canvas-open');
    },
    mounted(){
        bus.$emit('change',this.showO);
        window.scrollTo(0, 0);
        let sr = this.$sr({ reset: true, delay: 0 });
        sr.reveal('.content div', { duration: 1000 });

        if(this.IsPC()){
            this.isMobile = true
        }
    },
    methods : {
        goback(){
            this.$router.push({ path: '/ourwork/events/iconic' })
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
        }
    }
}
</script>

<style lang="less" scoped>
@import '../assets/style/common.less';
.iconic-detail-view {
    padding-bottom: 150px;
.pagingOne{
    text-align: right;
}
    .subnav {
        padding-top: 80px;
    }

    .info {
        padding-top:7vh;
    }

    .title {
        font-size: 2.2em;
    }
	.sec-title{
		font-size: 1em;
		padding:20px 0 ;
	}
    .date {
        text-align: right;

        span {
            position: relative;
            top:2em;
        }
    }
    #content-1{
        margin-bottom: 15em;
    }
    #content-2{
        margin-bottom: 8em;
    }
    .content {
        margin: 5em 0;
        margin-top: 5vh;
        .space {
            padding: 10px 0;
        }

        .center {
            text-align: center;
        }

        img {
            width: 100%;
        }
    }

    .s11 {
        top: -100px;
        z-index: 1;
    }

    .s12 {
        top: -200px;
    }

    .s21 {
        top: -50px;
    }

    .s31 {
        z-index: 3;
    }

    .s32 {
        z-index: 2;
        top: -50px;
    }

    .s33 {
        top: -100px;
    }

    .s41 {
        z-index: 1;
    }

    .s42 {
        top: -100px;
    }
	.sone{
		top: -140px;
	}
	.stwo{
		left: -50px;
		top: 100px;
	}
	.sthree{
		left: 50px;
		top: 100px;
	}
    .s43 {
        padding: 100px 50px;
        line-height: 2em;
    }
}

@media screen and (max-width: @max-width) {
.iconic-detail-view {
    .info {
        padding-top: 4em;
        .div1{
            display: block;
            span{
                display: block;
            }
            span:nth-last-child(1){
                margin-top: 1em;
            }
        }
    }

    .title {
        font-size: 1.5em;
    }

    .date {
        text-align: left;
        margin-bottom: 1.5em;
    }

    .s11 {
        top: -20px;
        z-index: 1;
    }

    .s12 {
        top: -40px;
    }

    .s21 {
        top: -20px;
    }

    .s31 {
        z-index: 3;
    }

    .s32 {
        z-index: 2;
        top: -20px;
    }

    .s33 {
        top: -40px;
    }

    .s41 {
        z-index: 1;
    }
	.sone{
		top: -70px;
	}
	.stwo{
		left: -10px;
		top: 50px;
	}
	.sthree{
		left: 10px;
		top: 50px;
	}
    .s42 {
        top: -40px;
    }

    .s43 {
        padding: 0px 10px;
        line-height: 1.5em;
    }
}
}
</style>
