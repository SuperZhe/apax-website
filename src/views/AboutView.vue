<template>
    <div class="info-view about-view clearfix">
        <div class="info col-xs-offset-2 col-xs-8">
            <!--<h2>ABOUT US</h2>-->
            <!--<br>-->
            <h4>Company Profile</h4>
            <p>APAX Group has emerged as a top leader among experiential marketing companies in Asia Pacific, focusing on the interpretation of brand DNA, innovative solutions, cross border collaborations, quality global resource integration, diversified brand interaction, providing professional branding, execution, and marketing strategy services through a Multi - Cultural Platform of fashion, sports, travel and entertainment. In partnership with Shanghai Fashion Week, APAX established Shanghai International Fashion Showcase.</p>
            <p>At the same time, APAX has brought in international IP such as Fashion Rocks; created the Discovery Adventures Park with Discovery Channel. The "all-round " approach to business, with cross-border collaboration is the way to go as the idea of “Bringing in (the global experts to guide and educate us) and setting off (new local talents to the world) ”. At the time of engages global experts to guide and educate while at the same time introducing new local talents and ethnic Chinese culture to the world. In the future, cross-border and cross-cultural cooperation, is also an important direction of APAX Group.</p>
        </div>
        <div class="col-xs-10 col-xs-offset-1 aboutImg"><img src="../../static/map.png" alt=""></div>
    </div>
</template>

<script>

export default {
    name : 'about-view',
    created(){
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
    .info-view{
        .row{
            margin-top: 2em !important;
        }
        .info{
            .div1{
                margin-bottom: 2em;
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
