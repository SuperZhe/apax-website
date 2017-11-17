<template>
    <div id="video">
        <div class="subnav">
            <OurworkSubNav :links=link></OurworkSubNav>
        </div>
        <video class="col-xs-offset-1 col-xs-10" :src=video  controls
               x-webkit-airplay="true"
               webkit-playsinline="true"
               playsinline="true"
               autoplay="autoplay"
               x5-video-player-type="h5"
               x5-video-player-fullscreen="true"
               preload="auto" loop="true">

        </video>
    </div>
</template>

<script>
    import OurworkSubNav from '@/components/OurworkSubNav.vue';
    import {bus} from  '../assets/js/app/public'
    import video from '../../static/APAXGroupShowreel.mp4'
    export default {
        name:'Events-video',
        data(){
            return{
                link : 'events',
                showO:3,
                video,
                pauseO:false
            }
        },
        components : { OurworkSubNav },
        mounted() {
            bus.$emit('change', this.showO);
            bus.$emit('pause', this.pauseO);
        },
        destroyed(){
            this.pauseO = true;
            bus.$emit('pause', this.pauseO);
        }
    }
</script>
<style lang="less">
    .subnav {
        padding-top: 80px;
    }
    video{
        margin-top:4vh;
        height: 80vh;
    }
</style>
