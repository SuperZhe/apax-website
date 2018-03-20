<template>
    <div class="info-view about-view clearfix">
        <div class="info col-xs-offset-1 col-xs-10 col-sm-8 col-sm-offset-2">
            <!--<h2>ABOUT US</h2>-->
            <!--<br>-->
            <h4>{{isch?'Company Profile':'公司简介'}}</h4>
            <p v-if="isch">APAX Group has emerged as a top leader among experiential marketing companies in Asia Pacific, focusing on the interpretation of brand DNA, innovative solutions, cross border collaborations, quality global resource integration, diversified brand interaction, providing professional branding, execution, and marketing strategy services through a Multi - Cultural Platform of fashion, sports, travel and entertainment. In partnership with Shanghai Fashion Week, APAX established Shanghai International Fashion Showcase.</p>
            <p v-if="!isch">APAX Group是亚太地区最具影响力的体验式市场营销集团，为市场提供最具创意的营销策略、执行和推广，业务版图覆盖全世界。集团业务包含四大板块“时尚、娱乐、运动、旅游”。致力于诠释品牌DNA，并为品牌提供革新的营销方案。在开展跨界合作，整合全球资源的同时，通过多样化互动对品牌DNA进行深入剖析，与上海时装周建立战略合作关系，同时创立上海时装周国际品牌发布（SIFS）版块。</p>
            <p v-if="isch">At the same time, APAX has brought in international IP such as Fashion Rocks; created the Discovery Adventures Park with Discovery Channel. The "all-round " approach to business, with cross-border collaboration is the way to go as the idea of “Bringing in (the global experts to guide and educate us) and setting off (new local talents to the world) ”. At the time of engages global experts to guide and educate while at the same time introducing new local talents and ethnic Chinese culture to the world. In the future, cross-border and cross-cultural cooperation, is also an important direction of APAX Group.</p>
            <p v-if="!isch">APAX Group同时将超级国际IP带到中国，并创建特色IP项目，如引入Fashion Rocks, 与Discovery Channel 创建全球首个Discovery Adventures Park等。本着“引进来、走出去”的核心理念，引进国际资源的同时，将华人文化带到全世界，进行对接及整合。在未来，跨界、跨文化合作是集团的重要方向。
            </p>
        </div>
        <div class="col-xs-12 col-xs-offset-0 col-sm-10 col-sm-offset-1 aboutImg" v-if="isch"><img src="../../static/map.png" alt=""></div>
        <div class="col-xs-12 col-xs-offset-0 col-sm-10 col-sm-offset-1 aboutImg" v-if="!isch"><img src="../../static/chineseMap.png" alt=""></div>
    </div>
</template>

<script>
    import { bus } from '../assets/js/app/public';
export default {
    name : 'about-view',
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
        setTimeout(()=> this.$('.about-view').fadeIn(), 500);


    }
}
</script>

<style lang="less">
    @import '../assets/style/common.less';
.about-view {
    display: none;
    .aboutImg{
        padding: 0 4vw;
        img{
            width:100%;
            margin-top: 3em;
        }
    }
    .info{
        margin-top:5em;
        h4{
            font-size: 2em;
        }
    }
    .pc{
        img{
            height: 25px;
        }
    }
    .mobile{
        img{
            height: 25px;
        }
    }
}

    .purple{
        color: purple;
    }
    .magnify{
        font-size: 1.8em!important;
    }
    .mobile{
        display: none;
    }
@media screen and (max-width: @max-width) {
    .about-view{
            .row{
                margin-top: 2em !important;
            }
            .info{
                .div1{
                    margin-bottom: 2em;
                }
                h4{
                    font-size: 0.42rem;
                }
            }
            .mobile{
                display: block;
                margin-top: 2em;
                div{
                    text-align: center;
                    margin-bottom: 2em;
                }
            }
            .pc{
                display: none;
            }
    }


}
</style>
