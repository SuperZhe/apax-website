<template>
    <div class="info-view partners-view clearfix">
        <div class="info col-xs-offset-1 col-xs-10 col-sm-8 col-sm-offset-2">

            <!--<h2>PARTNERS</h2>-->
            <br />
            <h4>CHAO GROUPS</h4>
            <p>CHAO GROUPS has been a major breakthrough in “celebrity weddings". Upholding it's "life planning concept",<br>the agency retains "planning" expertise to help people prepare for life's most important four stages.<br> From single to fall in love; from the wedding day, to the marriage life.</p>
            <br />
            <h4>Campaign China</h4>
            <p>Campaign China creates intelligent retail solutions that push the boundaries of the consumer experience and<br> transformative personalized brand spaces that define the retail landscape.</p>

        </div>
    </div>
</template>

<script>
export default {
    name : 'partners-view',
    created(){
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
        display: block !important;
        height:auto;
        .info{
            margin-top: 3em;
        }
    }

}
</style>
