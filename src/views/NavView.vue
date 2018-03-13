<template>
    <div class="nav-view">
        <div class="nav">
            <router-link to="/">{{isch?'主页':'HOME'}}</router-link>
            <router-link to="/about">{{isch?'关于APAX':'ABOUT US'}}</router-link>
            <router-link to="/news">{{isch?'资讯':'NEWS'}}</router-link>
            <router-link to="/awards">{{isch?'奖项':'AWARDS'}}</router-link>
            <router-link to="/clients">{{isch?'客户':'CLIENTS'}}</router-link>
            <router-link to="/partners">{{isch?'合作':'PARTNERS'}}</router-link>
            <router-link to="/association">{{isch?'联合':'ASSOCIATES'}}</router-link>
            <router-link to="/career">{{isch?'加入我们':'CAREER'}}</router-link>
        </div>
    </div>
</template>

<script>
    import { bus,isChinese } from '../assets/js/app/public';
export default {
    name : 'nav-view',
    data(){
        return{
            isch:'',
            global:isChinese.isChinese
        }
    },
    created(){
        bus.$on('language',(val) => {this.global = val})
        this.$bus.$emit('canvas-close');
    },
    watch:{
        global:function () {
            console.log(1)
            this.isch = isChinese.isChinese
        }
    },
    mounted(){
        //进入此页面蒙版去掉
        $('.video>div').removeClass('mask');
        setTimeout(()=> $('.nav-view a').fadeIn(), 500);

        $('.nav-view a').on('click', () => this.$bus.$emit('change'))
    },
    destroyed(){
        $('.video>div').addClass('mask');
        this.$bus.$emit('change')
    },
}
</script>

<style lang="less">
@import '../assets/style/common.less';

.nav-view {
    /*display: table;*/
    width: 100%;
    height: 100vh;
    padding-bottom: 58px;
    padding-top: 95px;
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
    .nav {
        /*display: table-cell;*/
        /*vertical-align:middle;*/
        /*text-align:center;*/
        width:100%;
        text-align: center;
    }

    a {
        text-align: center;
        display: none;
        margin: 0 20px;
        color: @main-color;

        &:hover {
            color: @over-color;
        }
    }
}

@media screen and (max-width: @max-width) {
.nav-view {
    //display: none;

    a {
        display: block;
        line-height: 40px;
    }
}
}
</style>
