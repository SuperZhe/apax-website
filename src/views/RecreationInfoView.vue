<template>
    <div class="info-view recreation-info-view clearfix">
        <div class="info recreation col-xs-offset-2 col-xs-8">
            <img src="../assets/img/main/recreation-title.png" alt="">
            <h3>WE BRING A NEW VISION</h3>
            <!--<br><br><br>-->
            <p>
                APAX Recreation is committed to building international tourism destinations providing in-depth experience on<br>
                “culture promotion”, “environmental responsible tourism”, “outdoor activities” and “interactive education”.
            </p>
            <br>
            <div class="set_6_btn in blue">
                <router-link to="recreation/detail" class="link">
                    <span>DISCOVER MORE</span>
                </router-link>
                <div class="corners top"></div>
                <div class="corners bottom"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'recreation-info-view',
        created() {
            this.$bus.$emit('canvas-close');
        },
        mounted() {
            setTimeout(() => this.$('.recreation-info-view').fadeIn(), 500);
            setTimeout(() => this.$('.recreation-info-view').css({'display': 'flex'}), 500);
        },
    };
</script>

<style lang="less">
    @import '../assets/style/common.less';
    @import '../assets/style/but';
    .recreation-info-view {
        display: none;
        height: 100vh;
        padding-top: 95px;
        align-items: center;
        padding-bottom: 95px;
    }

    @media screen and (max-width: @max-width) {
        .recreation-info-view {
            margin-top: 3em;
            height: auto;
            display: block !important;
            img {
                height: 24px;
            }
            h3 {
                font-size: 1.5em;
            }
        }
    }
</style>
