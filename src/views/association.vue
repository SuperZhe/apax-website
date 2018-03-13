<template>
    <div class="info-view association-view clearfix">
        <div class="info col-xs-offset-1 col-xs-10 col-sm-8 col-sm-offset-2">
            <!--<h2>PARTNERS</h2>-->
            <div>
                <br />
                <h4>Axis Mundi</h4>
                <p>Two of Asia’s creative innovators, Film Director Wong Kar Wai and APAX Group have come together with their respective expertise in art,<br> culture, entertainment and fashion to transform the idea of luxury events.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'association-view',
        created(){
            this.$bus.$emit('canvas-close');
        },
        mounted(){
            setTimeout(()=> this.$('.association-view').fadeIn(), 500);
            setTimeout(()=> this.$('.association-view').css({'display':'flex'}), 500);
        }
    }
</script>

<style lang="less">
    .info-view{
    }
    .association-view{
        display: none;
        height: 100vh;
        padding-top: 95px;
        align-items: center;
        padding-bottom: 95px;
        .info{
            /*margin-top: 16vh;*/
            h4{
                margin-bottom: 2vh;
            }
        }
    }
</style>
