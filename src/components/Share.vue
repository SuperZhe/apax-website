<template>
    <div class="share hidden-xs">
        <!--<a @click="shareFB" @mouseover="hover(1)"-->
           <!--@mouseout="mouseout(1)">-->
            <!--<img src="../assets/img/icon/facebook_off.png" alt="" v-show="!off1">-->
            <!--<img src="../assets/img/icon/facebook_on.png" alt="" v-show="off1">-->
        <!--</a>-->
        <!--<a @click="shareWB" @mouseover="hover(2)"-->
           <!--@mouseout="mouseout(2)">-->
            <!--<img src="../assets/img/icon/weibo_off.png" alt="" v-show="!off2">-->
            <!--<img src="../assets/img/icon/weibo_on.png" alt="" v-show="off2">-->
        <!--</a>-->
        <!--<a @click="shareWX" class="weixin" @mouseover="hover(3)"-->
           <!--@mouseout="mouseout(3)">-->
            <!--<img src="../assets/img/icon/weixin_off.png" alt="" v-show="!off3">-->
            <!--<img src="../assets/img/icon/weixin_on.png" alt="" v-show="off3">-->
            <!--<div><img :src="qr"></div>-->
        <!--</a>-->
    </div>
</template>


<script>
export default {
    name : 'share',
    data(){
        return {
            qr:'',
            off1:false,
            off2:false,
            off3:false,
        }
    },
    methods : {
        shareWX(){
            if (this.qr === '') {
                this.$axios.get('http://test.tron-m.com/api/qr/json.do?text=' + encodeURIComponent(location.href)).then((response) => {
                    this.qr = 'data:img/png;base64,' + response.data.msg;
                    $('.weixin div').toggle();
                }, (error) => {
                    console.log(error)
                });
            }
            else {
                $('.weixin div').toggle();
            }
        },
        hover:function (v) {
            switch(v){
                case 1:
                    this.off1 = true;
                    break;
                case 2:
                    this.off2 = true;
                    break;
                case 3:
                    this.off3 = true;
                    break;
            }
        },
        mouseout:function(v){
            switch(v){
                case 1:
                    this.off1 = false;
                    break;
                case 2:
                    this.off2 = false;
                    break;
                case 3:
                    this.off3 = false;
                    break;
            }
        },
        shareWB(){
            window.open('http://v.t.sina.com.cn/share/share.php?title='+encodeURIComponent(document.title)+'&url='+encodeURIComponent(location.href)+'&source=bookmark','_blank','width=450,height=400')
        },

        shareFB(){
            window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(location.href)+'&amp;t='+encodeURIComponent(document.title), 'newWindow', 'width=450, height=400','center');
        }
    }
}
</script>


<style lang="less">
.share {
    text-align: center;

    a {
        margin: 0 5px;
        cursor: pointer;
        position: relative;
        img{
            width:28px;}

        div {
            position: absolute;
            top:-220px;
            left:-100px;
            width: 200px;
            height: 200px;
            background-color: #fff;
            display: none;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
