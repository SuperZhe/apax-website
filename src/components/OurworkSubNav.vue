<template>
    <div class="ourwork-sub-nav col-xs-offset-1 col-xs-10 clearfix">
        <div class="left">
            <router-link to="/ourwork/events" v-if="l1"><img src="../assets/img/main/events-subnav.png" alt="" class="events"></router-link>
            <router-link to="/ourwork/live" v-if="l2"><img src="../assets/img/main/live-subnav.png" alt="" class="live"></router-link>
            <router-link to="/ourwork/recreation" v-if="l3"><img src="../assets/img/main/recreation-subnav.png" alt="" class="recreation"></router-link>
            <router-link to="/ourwork/events/iconic" v-if="l4" ><span :class="{pitch:showO == 1}">iconic</span></router-link>
            <router-link to="/ourwork/events/list" v-if="l4" ><span :class="{pitch:showO == 2}">project</span></router-link>
            <!--新的页面展示视频-->
            <router-link to="/ourwork/events/list" v-if="l4" ><span :class="{pitch:showO == 3}">video</span></router-link>
            <router-link to="/ourwork/live/sifs" v-if="l5"><img src="../assets/img/main/sifs-subnav.png" alt="" class="sifs"></router-link>
            <router-link to="/ourwork/live/rocks" v-if="l6"><img src="../assets/img/main/rocks-subnav.png" alt="" class="rocks"></router-link>
        </div>
        <div class="right">
            <router-link to="/ourwork/events" v-if="r1"><img src="../assets/img/main/events-subnav.png" alt="" class="events events-1"></router-link>
            <router-link to="/ourwork/live" v-if="r2"><img src="../assets/img/main/live-subnav.png" alt="" class="live live-1"></router-link>
            <router-link to="/ourwork/recreation" v-if="r3"><img src="../assets/img/main/recreation-subnav.png" alt="" class="recreation recreation-1"></router-link>
        </div>
    </div>
</template>


<script>
    import {bus} from  '@/assets/js/app/public'
export default {
    name : 'ourwork-sub-nav',
    data (){
        return {
            l1 : false,
            l2 : false,
            l3 : false,
            l4 : false,
            l5 : false,
            l6 : false,
            r1 : false,
            r2 : false,
            r3 : false,
            showO:''
        }
    },
    props : ['links'],
    created (){
        switch (this.links) {
            case 'recreation' :
                this.l3 = true, this.r1 = true, this.r2 = true;
                break;

            case 'events' :
                this.l1 = true, this.l4 = true, this.r2 = true, this.r3 = true;
                break;

            case 'rocks' :
                this.l2 = true, this.l5 = true, this.r1 = true, this.r3 = true;
                break;

            case 'sifs' :
                this.l2 = true, this.l6 = true, this.r1 = true, this.r3 = true;
                break;
        }
//        console.log(bus)
        bus.$on('change',(val) => {this.showO = val} )
    },
    mounted() {

    }
}
</script>


<style lang="less">
@import '../assets/style/common.less';
.events{
    height: 14px;
}
.live-1,.recreation-1{
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: grayscale(100%);

    filter:gray;
}
.live,.events-1{
    height: 11px;
}

.StateSelected{
    font-size: 16px;
    color: #fff;
}
.pitch{
    font-size: 16px;
    color: #fff;
}
.ourwork-sub-nav {
    .left {
        float: left;

        a { margin-right: 22px;
            font-size: 12px;
            color: #8d8d8d;
        }

    }

    .right {
        float: right;

        a { margin-left: 22px; }
    }

    .recreation {
        position: relative;
        top:1px;
    }

}

@media screen and (max-width: @max-width) {
.ourwork-sub-nav {
    padding-top: 8vh;

    .left {
        float: initial;
    }

    .right {
        margin-top: 2em;
        text-align: right;
        float: initial;
    }
}
}
</style>
