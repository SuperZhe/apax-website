<template>
    <div class="live-nav-view clearfix">
        <div class="nav col-sm-offset-1 col-sm-10 col-xs-offset-1 col-xs-10">

            <div class="rocks clearfix col-sm-6">
                <div class="col-xs-offset-4 col-xs-4 logo"><img src="../assets/img/main/rocks.png" alt=""></div>
                <div class="col-xs-12">
                    <p>As the exclusive licensee of Fashion Rocks Asia, APAX LIVE introduces an integrated experience extravaganza of music & fashion to the Chinese audience.</p>
                </div>
                <router-link to="rocks" class="more more-1">
                    <!--<img src="../assets/img/main/more.png" alt="">-->
                    ——>
                </router-link>
            </div>
            <div class="sifs clearfix col-sm-6">
                <div class="col-xs-offset-4 col-xs-4 logo"><img src="../assets/img/main/sifs.png" alt=""></div>
                <div class="col-xs-12">
                    <p>As the strategic partner of Shanghai Fashion Week, Shanghai International Fashion Showcase (SIFS) provides the ultimate business solution to emerging international designers and luxury/fashion brands by utilizing its platform to bring the Chinese market to the world.</p>
                </div>
                <router-link to="sifs" class="more">
                    <!--<img src="../assets/img/main/more.png" alt="">-->
                    ——>
                </router-link>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name : 'live-nav-view',
    created(){
        this.$bus.$emit('canvas-close');
    },
    mounted(){
        setTimeout(()=> this.$('.live-nav-view').fadeIn(), 500);
    }
}
</script>

<style lang="less">
@import '../assets/style/common.less';

.live-nav-view {
    display: none;
    padding-top: 25vh;
    padding-bottom: 150px;

    .nav {
        //margin: 0 auto;
        /*padding: 0 10em;*/
    }

    .logo {
        text-align: center;
    }

    .nav>div {
        padding: 5em 5em;
        position: relative;
    }



    .more {
        position: absolute;
        bottom:-1em;
        right:5em;
    }
    .more-1{
        bottom: -2em;
    }
}


@media screen and (max-width: @max-width) {
.live-nav-view {
    padding-top: 15vh;
    padding-bottom: 15vh;

    .nav {
        padding: 0;
    }

    .nav>div {
        padding: 2em 0em;
        position: relative;
    }

    .logo {
        padding: 1em 0 ;
        img { width: 100%; }
    }

    .rocks {
        .logo {
            padding-top: 3em;
        }
    }

    .sifs {
        .logo {
            padding-top: 3em;
        }
    }

    p {
        padding: 1em;
    }

    .more {
        position: absolute;
        bottom:1em;
        right:1em;
    }
}
}
</style>
