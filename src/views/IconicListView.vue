<template>
    <div class="iconic-list-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="list col-xs-offset-1 col-xs-10">
            <div class="item" v-for="item in items" :key="item.id" @click="goDetail(item.url)">
                <img alt="" :src="item.imgSrc">
                <div class="hover">
                    <div class="mask">
                        <h2>{{isch?item.title:item.chineseTitle }}</h2>
                        <!--<div class="date">{{ item.date }}</div>-->
                        <!-- <div class="brief" v-html="item.brief">{{ item.brief }}</div> -->
                        <!-- <router-link :to="{ name: 'iconic-detail', params: { id: item.id }}" class="more"><img src="../assets/img/main/more.png" alt=""></router-link> -->
                    </div>
                </div>
            </div>

            <!-- <div class="item" @click="goDeail(1)">
                <img src="../../static/iconic/101.jpg" alt="">
                <div class="hover">
                    <div class="mask">
                        <h2>Fendi on the Wall</h2>
                        <div class="date">The Great Wall, Beijing, China - Oct. 19, 2007</div>
                        <div class="brief">Karl Lagerfeld and Fendi held a monumental fashion show - atop the Great Wall of China, no less - the first ever fashion show in history at the Great Wall.<br>
The show was capped off with giant double-F logos projected onto neighboring mountains. "This is about positioning Fendi for the next 50 years," says Fendi CEO Michael Burke.</div>
                        <router-link :to="{ name: 'iconic-detail', params: { id: 1 }}" class="more"><img src="../assets/img/main/more.png" alt=""></router-link>
                    </div>
                </div>
            </div> -->

        </div>
    </div>
</template>

<script>
import OurworkSubNav from '@/components/OurworkSubNav.vue';
import Arrow from '@/components/Arrow.vue';
import {bus} from  '../assets/js/app/public'
export default {
    name : 'iconic-list-view',
    components : { OurworkSubNav, Arrow },
    data(){
        return {
            link : 'events',
            items : this.getData(),
            showO:1,
            isch:''
        }
    },
    mounted(){
        bus.$on('language',(val) => {this.isch = val})
        bus.$emit('change',this.showO);
    },
    created() {
        // this.$axios.get('http://jsonplaceholder.typicode.com/photos?albumId=1').then((response) => {
        //     this.items = response.data;
        //     this.items.splice(11, this.items.length);
        //     this.replaceImgSrc();
        // }, (error) => {
        //     console.log(error)
        // });

        this.$bus.$emit('canvas-open');
    },
    updated(){
            let sr = this.$sr({ reset: true, delay: 300 });
            sr.reveal('.item', { duration: 1000 });
    },
    methods: {
        replaceImgSrc(){
            for (let i = 0; i < this.items.length; i++) {
                this.items[i].thumbnailUrl = this.items[i].thumbnailUrl.replace('150', '640X180');
            }
        },

        getData(){
            var result = [];

            // for(let i = 1; i<= 10; i++) {
            //     result.push({
            //         id : i,
            //         url : 'iconic/detail-a',
            //         title : 'Fendi on the Wall',
            //         imgSrc : 'http://www.tron-m.com/frog/apax/static/iconic/' + (100+i) + '.jpg',
            //         date : 'The Great Wall, Beijing, China - Oct. 19, 2007',
            //         brief : 'Karl Lagerfeld and Fendi held a monumental fashion show - atop the Great Wall of China, no less - the first ever fashion show in history at the Great Wall.<br>The show was capped off with giant double-F logos projected onto neighboring mountains. "This is about positioning Fendi for the next 50 years," says Fendi CEO Michael Burke.'
            //     })
            // }

            result.push({
                id : 1,
                url : 'iconic/detail-a',
                title : 'Fendi on the Wall',
                imgSrc : 'http://test.tron-m.com/webapax/static/iconic/101.jpg',
                chineseTitle:'FENDI芬迪长城秀',
                date : 'The Great Wall, Beijing, China - Oct. 19, 2007',
                brief : 'Karl Lagerfeld and Fendi held a monumental fashion show - atop the Great Wall of China, no less - the first ever fashion show in history at the Great Wall.<br>The show was capped off with giant double-F logos projected onto neighboring mountains. "This is about positioning Fendi for the next 50 years," says Fendi CEO Michael Burke.'
            });

//            result.push({
//                id : 2,
//                url : 'iconic/detail-b',
//                title : 'Exhibition - Audemars Piguet',
//                imgSrc : 'http://test.tron-m.com/frog/apax/static/iconic/102.jpg',
//                date : 'Shanghai, China - Oct.29, 2016',
//                brief : 'Karl Lagerfeld and Fendi held a monumental fashion show - atop the Great Wall of China, no less - the first ever fashion show in history at the Great Wall.<br>The show was capped off with giant double-F logos projected onto neighboring mountains. "This is about positioning Fendi for the next 50 years," says Fendi CEO Michael Burke.'
//            })

            result.push({
                id : 3,
                url : 'iconic/detail-c',
                title : 'Hennessy XO Exclusive Collection VI Worldwide Launch',
                imgSrc : 'http://test.tron-m.com/webapax/static/iconic/103.jpg',
                chineseTitle:'轩尼诗XO 第六代珍藏版全球发售',
                date : 'The Great Wall, Beijing, China - Oct. 19, 2007',
                brief : 'Karl Lagerfeld and Fendi held a monumental fashion show - atop the Great Wall of China, no less - the first ever fashion show in history at the Great Wall.<br>The show was capped off with giant double-F logos projected onto neighboring mountains. "This is about positioning Fendi for the next 50 years," says Fendi CEO Michael Burke.'
            })

//            result.push({
//                id : 4,
//                url : 'iconic/detail-d',
//                title : 'DIOR',
//                imgSrc : 'http://test.tron-m.com/frog/apax/static/iconic/104.jpg',
//                date : 'Beijing, China - Dec. 15, 2011',
//                brief : 'Karl Lagerfeld and Fendi held a monumental fashion show - atop the Great Wall of China, no less - the first ever fashion show in history at the Great Wall.<br>The show was capped off with giant double-F logos projected onto neighboring mountains. "This is about positioning Fendi for the next 50 years," says Fendi CEO Michael Burke.'
//            })
            result.push({
                id : 4,
                url : 'iconic/detail-d',
                chineseTitle:'Burberry博柏利全息投影时装秀',
                title : 'Burberry Hologram Fashion Show',
                imgSrc : 'http://test.tron-m.com/webapax/static/iconic/111.jpg',
                date : 'Beijing, China - Dec. 15, 2011',
                brief : 'Karl Lagerfeld and Fendi held a monumental fashion show - atop the Great Wall of China, no less - the first ever fashion show in history at the Great Wall.<br>The show was capped off with giant double-F logos projected onto neighboring mountains. "This is about positioning Fendi for the next 50 years," says Fendi CEO Michael Burke.'
            })
            result.push({
                id : 5,
                url : 'iconic/detail-e',
                chineseTitle:'华为2017全球新品发布会',
                title : 'Huawei Global Product Launch Barcelona',
                imgSrc : 'http://test.tron-m.com/webapax/static/iconic/105.jpg',
                date : 'GreaBarcelona, Spain - Feb. 26, 2017',
                brief : 'Karl Lagerfeld and Fendi held a monumental fashion show - atop the Great Wall of China, no less - the first ever fashion show in history at the Great Wall.<br>The show was capped off with giant double-F logos projected onto neighboring mountains. "This is about positioning Fendi for the next 50 years," says Fendi CEO Michael Burke.'
            })

            result.push({
                id : 6,
                url : 'iconic/detail-f',
                chineseTitle:'Tiffany & Co.蒂芙尼',
                title : 'Tiffany & Co.',
                imgSrc : 'http://test.tron-m.com/webapax/static/iconic/106.jpg',
                date : 'Beijing, China - Oct.23, 2010',
                brief : 'Karl Lagerfeld and Fendi held a monumental fashion show - atop the Great Wall of China, no less - the first ever fashion show in history at the Great Wall.<br>The show was capped off with giant double-F logos projected onto neighboring mountains. "This is about positioning Fendi for the next 50 years," says Fendi CEO Michael Burke.'
            })

            result.push({
                id : 7,
                url : 'iconic/detail-g',
                chineseTitle:'恒隆广场 Home To Luxury 盛装派对',
                title : 'Plaza 66 Home To Luxury Celebration Party',
                imgSrc : 'http://test.tron-m.com/webapax/static/iconic/107.jpg',
                date : 'Plaza 66, Shanghai, China September. 8, 2017',
                brief : 'Karl Lagerfeld and Fendi held a monumental fashion show - atop the Great Wall of China, no less - the first ever fashion show in history at the Great Wall.<br>The show was capped off with giant double-F logos projected onto neighboring mountains. "This is about positioning Fendi for the next 50 years," says Fendi CEO Michael Burke.'
            })

            result.push({
                id : 8,
                url : 'iconic/detail-h',
                chineseTitle:'星球大战：原力觉醒',
                title : 'STAR WARS: The Force Awakens',
                imgSrc : 'http://test.tron-m.com/webapax/static/iconic/108.jpg',
                date : 'Oct. 20, 2015 - Great wall, Beijing',
                brief : 'Karl Lagerfeld and Fendi held a monumental fashion show - atop the Great Wall of China, no less - the first ever fashion show in history at the Great Wall.<br>The show was capped off with giant double-F logos projected onto neighboring mountains. "This is about positioning Fendi for the next 50 years," says Fendi CEO Michael Burke.'
            })

            result.push({
                id : 9,
                url : 'iconic/detail-i',
                chineseTitle:'Max Mara MONOPOLIS! 奇异都市',
                title : 'MAX MARA MONOPOLIS!',
                imgSrc : 'http://test.tron-m.com/webapax/static/iconic/109.jpg',
                date : 'Shanghai, China - Dec. 15, 2016',
                brief : 'Karl Lagerfeld and Fendi held a monumental fashion show - atop the Great Wall of China, no less - the first ever fashion show in history at the Great Wall.<br>The show was capped off with giant double-F logos projected onto neighboring mountains. "This is about positioning Fendi for the next 50 years," says Fendi CEO Michael Burke.'
            })

            result.push({
                id : 10,
                url : 'iconic/detail-j',
                chineseTitle:'Under Armour 史蒂芬•库里开启“见高下”2017亚洲行',
                title : 'UNDER ARMOUR Stephen Curry Asian Tour',
                imgSrc : 'http://test.tron-m.com/webapax/static/iconic/110.jpg',
                date : 'Taimiao, Beijing, China - July 22, 2017',
                brief : 'Karl Lagerfeld and Fendi held a monumental fashion show - atop the Great Wall of China, no less - the first ever fashion show in history at the Great Wall.<br>The show was capped off with giant double-F logos projected onto neighboring mountains. "This is about positioning Fendi for the next 50 years," says Fendi CEO Michael Burke.'
            })
            result.push({
                id : 11,
                url : 'iconic/detail-b',
                chineseTitle:'星巴克臻选烘焙工坊开幕盛典',
                title : 'Starbucks Reserve Roastery Grand Opening\n',
                imgSrc : 'http://test.tron-m.com/webapax/static/iconic/new1.jpg',
                date : 'Shanghai, China - Oct.29, 2016',
                brief : 'Karl Lagerfeld and Fendi held a monumental fashion show - atop the Great Wall of China, no less - the first ever fashion show in history at the Great Wall.<br>The show was capped off with giant double-F logos projected onto neighboring mountains. "This is about positioning Fendi for the next 50 years," says Fendi CEO Michael Burke.'
            })
            result.push({
                id : 12,
                url : 'iconic/detail-k',
                chineseTitle:'阿玛尼“唯有今宵”',
                title : 'Giorgio Armani “One Night Only”',
                imgSrc : 'http://test.tron-m.com/webapax/static/iconic/112.jpg',
                date : 'Shanghai, China - Oct.29, 2016',
                brief : 'Karl Lagerfeld and Fendi held a monumental fashion show - atop the Great Wall of China, no less - the first ever fashion show in history at the Great Wall.<br>The show was capped off with giant double-F logos projected onto neighboring mountains. "This is about positioning Fendi for the next 50 years," says Fendi CEO Michael Burke.'
            })


                return result;
        },

        goDetail(id){
            //this.$router.push({ name: 'iconic-detail', params: { id: id }});
            this.$router.push({ path: id });
        }
    }
}
</script>


<style lang="less">
    @import '../assets/style/common.less';

    //更改导航的样式

.iconic-list-view {
    padding-bottom: 150px;

    .subnav {
        padding-top: 80px;
    }

    .list {
        margin-top: 8em;

        .item {
            font-size: 0;
            position: relative;
            margin-bottom: 2%;

            >img {
                width: 100%;
            }

            &:hover {
                .hover {
                    opacity: 1;
                    transition: all 0.3s ease-in-out;
                }
            }
        }

        .hover {
            position: absolute;
            height: 100%;
            width: 100%;
            /*padding: 12px;*/
            top:0;
            left:0;
            opacity: 0;
            transition: all 0.3s ease-in-out;

            .mask {
                background-color: rgba(0, 0, 0, 0.5);
                transition: all 0.3s ease-in-out;
                width: 100%;
                height: 100%;
                color: #fff;
                font-size: 12px;
                padding: 2em;
                position: relative;
                h2{
                    margin-top: -0.5em;
                }
            }

            .more {
                position: absolute;
                bottom: 2em;
                right: 2em;
            }

            .date {
                margin-bottom: 2em;
            }

            .brief {
                line-height: 2em;
            }

            h2 {
                margin-bottom: 1em;
            }
        }
    }
}
    @media screen and (max-width: @max-width) {
        .iconic-list-view {
            .list {
                margin-top: 2em;
                .mask{
                    h2{
                        font-size: 1em;
                    }
                }
            }
        }
    }
</style>
