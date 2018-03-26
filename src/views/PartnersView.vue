<template>
    <div class="info-view partners-view clearfix">
        <div class="info col-xs-offset-1 col-xs-10 col-sm-8 col-sm-offset-2">

            <!--<h2>PARTNERS</h2>-->
           <!-- <h4>{{isch?'CHAO GROUPS':'我要潮婚'}}</h4>
            <p v-if="isch">CHAO GROUPS has been a major breakthrough in “celebrity weddings". Upholding it's "life planning concept",<br>the agency retains "planning" expertise to help people prepare for life's most important four stages.<br> From single to fall in love; from the wedding day, to the marriage life.</p>
            <p v-if="!isch">
                我要潮婚，以“生活策划 ”为理念，利用“策划”的专长，帮助人们策划人生中最重要的四个阶段。<br>从单身到恋爱、婚礼、婚后的生活领域，连接不同的人群，让热爱生活的人，策划出属于自己的人生舞台。
            </p>
            <br />-->
            <h4>{{isch?'Campaign China':'垦缤设计'}}</h4>
            <p v-if="isch">Campaign China creates intelligent retail solutions that push the boundaries of the consumer experience<br> and transformative personalized brand spaces that define the retail landscape.</p>
            <p v-if="!isch">垦缤设计为品牌提供创意美学与智慧并存的零售解决方案，开拓更完美的消费体验。<br>
                零售之道在于以独具魅力的品牌内涵构建消费者与品牌间的天然默契，垦缤设计中国为品牌变革创新打造个性化空间，定义未来零售格局。
            </p>

        </div>
    </div>
</template>

<script>
    import { bus } from '../assets/js/app/public';
export default {
    name : 'partners-view',
    data(){
        return{
            isch:''
        }
    },
    created(){
        bus.$on('language',(val) => {this.isch = val})
        this.$bus.$emit('canvas-close');
    },
    mounted(){
        setTimeout(()=> this.$('.partners-view').fadeIn(), 500);
        setTimeout(()=> this.$('.partners-view').css({'display':'flex'}), 500);
    }
}
</script>

<style lang="less">
    @import '../assets/style/common.less';
.partners-view {
    display: none;
    height: 100vh;
    padding-top: 95px;
    align-items: center;
    padding-bottom: 95px;
}
    .info{
        /*margin-top: 7vh;*/
        h4{
            margin-bottom: 2vh;
        }
    }
@media screen and (max-width: @max-width) {
    .partners-view{
        /*display: block !important;*/
        /*height:auto;*/
        .info{
            /*margin-top: 3em;*/
            h4{
                font-size: 0.42rem!important;
            }
        }
    }

}
</style>
