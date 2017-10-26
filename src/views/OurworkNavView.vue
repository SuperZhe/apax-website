<template>
    <div class="ourwork-nav-view">
        <div class="nav">
            <div>
                <router-link to="/ourwork/events"><img src="../assets/img/main/events.png" alt=""></router-link>
            </div>
            <div>
                <router-link to="/ourwork/live"><img src="../assets/img/main/live.png" alt=""></router-link>
            </div>
            <div>
                <router-link to="/ourwork/recreation"><img src="../assets/img/main/recreation.png" alt=""></router-link>
            </div>
            <div v-show=We>
                <router-link to="/"><span>W</span>E CREATE NEXT WAVE</router-link>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'ourwork-nav-view',
        data(){return{We:true}},
        created() {
            this.$bus.$emit('canvas-close');
        },
        mounted() {
            var _url = window.location.hash.split('?')[1];
           _url?this.We = false:this.We = true;
            setTimeout(() => this.$('.ourwork-nav-view a').fadeIn(), 500);
        },
        methods:{



        }
    }
</script>

<style lang="less">
    @import '../assets/style/common.less';

    .ourwork-nav-view {
        display: table;
        width: 100%;
        height: 100vh;

        .nav {
            display: table-cell;
            vertical-align: middle;
            text-align: center;

            > div {
                display: inline;
                margin: 0 50px;
                img {
                    height: 20px;
                }
            }
            div:nth-last-child(1) {
                display: block;
                font-size: 28px;
                letter-spacing: 4px;
                margin-top: 20px;
                span {
                    font-size: 36px;
                    color: #920783;
                }
            }

            a {
                display: none;
            }
        }
    }

    @media screen and (max-width: @max-width) {
        .ourwork-nav-view {

            .nav > div {
                display: block;
                margin: 50px 0;

            }
            div:nth-last-child(1) {
                font-size: 20px !important;
                span {
                    font-size: 24px !important;
                }
            }
        }
    }
</style>
