<template>
    <div class="info-view association-view clearfix">
        <div class="info col-xs-offset-1 col-xs-10 col-sm-8 col-sm-offset-2">
            <!--<h2>PARTNERS</h2>-->
            <div>
                <br />
                <h4>{{isch?'Axis Mundi':'Axis Mundi 台中央'}}</h4>
                <p v-if="isch">Two of Asia’s creative innovators, Film Director Wong Kar Wai and APAX Group have come together with their respective expertise in art,<br> culture, entertainment and fashion to transform the idea of luxury events.</p>
                <p v-if="!isch">时尚与艺术两厢汇聚，颠覆过往，全新定义风格。电影导演王家卫与APAX Group，亚洲两大创意先驱强强联合，以各自在世界文化、艺术、时尚与娱乐领域的领先专业理念与经验，革新打造奢侈品活动新传奇。
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import { bus } from '../assets/js/app/public';
    export default {
        name : 'association-view',
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
