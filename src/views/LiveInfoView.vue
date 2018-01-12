<template>
    <div class="info-view live-info-view clearfix">
        <div class="info live col-xs-offset-2 col-xs-8">
            <img src="../assets/img/main/live-title.png" alt="">
            <h3>BRING EMOTIONS TO LIFE</h3>
            <!--<br><br><br>-->
            <p>We continually strive to bring you unprecedented platforms, owned or licensed but always uniquely APAX Live.<br>
                By exploiting our expertise in creative thinking, exceptional production and exponential marketing, <br>APAX Live brings you the best in music, fashion, and entertainment.
                 </p>
            <br>

            <div class="set_6_btn in blue">
                <router-link to="live/nav" class="link">
                    <!--<img src="../assets/img/main/more.png" alt="">-->
                    <span>CURIOUS TO SEE MORE</span>
                </router-link>
                <div class="corners top"></div>
                <div class="corners bottom"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'live-info-view',
    created(){
        this.$bus.$emit('canvas-close');
    },
    mounted(){
        setTimeout(()=> this.$('.live-info-view').css({'display':'flex'}), 500);
        setTimeout(()=> this.$('.live-info-view').fadeIn(), 500);

    }
}
</script>

<style lang="less">
@import '../assets/style/common.less';
@import '../assets/style/but';
.live-info-view {
    display: none;
    height: 100vh;
    padding-top: 95px;
    align-items: center;
    padding-bottom: 95px;
}
@media screen and (max-width: @max-width) {
.live-info-view  {
    margin-top: 3em;
    height:auto;
    display: block !important;
    h3{
        font-size: 1.5em;
    }
    img{
        height: 24px;
    }
    }
}
</style>
