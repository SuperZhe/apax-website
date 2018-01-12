<template>
    <div class="info-view events-info-view clearfix">
        <div class="info events col-xs-offset-2 col-xs-8">
            <img src="../assets/img/main/events-title.png" alt="">
            <h3>STORYTELLING IS OUR JOB</h3>
            <p>
            We develop and deliver a wide range of services covering fashion and premium events.<br>
            With partnerships throughout the world and outstanding strength of global network<br>
            bringing you unique brand experiences, creation of content and cooperation opportunities.</p>

            <div class="set_6_btn in blue">
                <router-link to="/ourwork/events/iconic" class="link">
                    <span>READY FOR THE JOURNEY</span>
                </router-link>
                <div class="corners top"></div>
                <div class="corners bottom"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'events-info-view',
    created(){
        this.$bus.$emit('canvas-close');
    },
    mounted(){
        setTimeout(()=> this.$('.events-info-view').fadeIn(), 500);
        setTimeout(()=> this.$('.events-info-view').css({'display':'flex'}), 500);
    }
}
</script>

<style lang="less">
@import '../assets/style/common.less';
@import '../assets/style/but';
.events-info-view {
    display: none;
    height: 100vh;
    padding-top: 95px;
    align-items: center;
    padding-bottom: 95px;
    .info {
        p {
            margin-top: 0;
        }

        p:nth-last-child(2) {
            margin-bottom: 3em;
        }
        .link {
            span {
                /*border: 1px solid;*/
                /*padding: 10px;*/
                /*font-size: 12px;*/
            }
        }
    }
}

@media screen and (max-width: @max-width) {
    .events-info-view  {
    margin-top: 3em;
        height:auto;
        display: block !important;
    h3{
        font-size: 1.5em;
    }
    img{
        height: 24px;
    }
    /*.events >img {*/
            /*width: 100%;*/
        /*}*/
    }
}
</style>
