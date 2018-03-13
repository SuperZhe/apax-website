import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '@/views/HomeView';
import NavView from '@/views/NavView';
import CareerView from '@/views/CareerView';
import PartnersView from '@/views/PartnersView';
import AboutView from '@/views/AboutView';
import ClientsView from '@/views/ClientsView';
import NewsView from '@/views/NewsView';
import realNews from '@/views/realNews';
import NewsListView from '@/views/AwardsListView';
import NewsDetailView from '@/views/AwardsDetailView';
import OurworkView from '@/views/OurworkView';
import OurworkNavView from '@/views/OurworkNavView';
import EventsView from '@/views/EventsView';
import EventsInfoView from '@/views/EventsInfoView';
import EventsListView from '@/views/EventsListView';
import EventsDetailView from '@/views/EventsDetailView';
import IconicView from '@/views/IconicView';
import IconicListView from '@/views/IconicListView';
import video from '@/views/video';
import IconicDetailViewA from '@/views/IconicDetailViewA';
import IconicDetailViewB from '@/views/IconicDetailViewB';
import IconicDetailViewC from '@/views/IconicDetailViewC';
import IconicDetailViewD from '@/views/IconicDetailViewD';
import IconicDetailViewE from '@/views/IconicDetailViewE';
import IconicDetailViewF from '@/views/IconicDetailViewF';
import IconicDetailViewG from '@/views/IconicDetailViewG';
import IconicDetailViewH from '@/views/IconicDetailViewH';
import IconicDetailViewI from '@/views/IconicDetailViewI';
import IconicDetailViewJ from '@/views/IconicDetailViewJ';
import IconicDetailViewK from '@/views/IconicDetailViewK';
import LiveView from '@/views/LiveView';
import LiveInfoView from '@/views/LiveInfoView';
import LiveNavView from '@/views/LiveNavView';
import RocksView from '@/views/rocksViews';
import RocksList from '@/views/RocksListView';
import RocksDetail from '@/views/rocksDetail';
import SifsView from '@/views/SifsView';
import SifsListView from '@/views/SifsListView';
import SifsDetailView from '@/views/SifsDetailView';
import RecreationView from '@/views/RecreationView';
import RecreationInfoView from '@/views/RecreationInfoView';
import RecreationDetailView from '@/views/RecreationDetailView';
import RecreationShowList from '@/views/recreationShowList';
import recreationPark from '@/views/recreationPark';
import recreationList from '@/views/recreationList';
import recreationListViews from '@/views/recreationListViews';
import dna1 from '@/views/dna-1';
import dna2 from '@/views/dna-2';
import dna3 from '@/views/dna-3';
import eventsVideo from '@/views/EventsVideo';
import liveVideo from '@/views/liveVideo';
import association from '@/views/association.vue';
import fashionWeek from '@/views/FashionWeek.vue';
import safety from '@/views/safetyViews.vue';
import recreationMap from '@/views/recreationMap.vue';
//中文版路由
// import ChineseHome from '@/chineseViews/HomeView.vue'

Vue.use(Router);

export default new Router({
    //mode: 'history',
    //base : 'test',
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0};
    },
    routes: [

        //新添加的模块
        {
            path: '/video',
            name: 'video',
            component: video,
        },
        {
            path: '/news',
            name: 'real-news',
            component: realNews,
        },
        {
            path: '/safety',
            name: 'safety-views',
            component: safety,
        },
        {
            path: '/recreationMap',
            name: 'recreationMap',
            component: recreationMap,
        },

        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
       /* {
            path: '/chineseHome',
            name: 'chineseHome',
            component: ChineseHome,
        },*/
        {
            path: '/nav',
            name: 'nav',
            component: NavView,
        },
        {
            path: '/ourwork',
            component: OurworkView,
            children: [
                {
                    path: '/',
                    name: 'ourwork-nav',
                    component: OurworkNavView,
                },
                {
                    path: 'events',
                    component: EventsView,
                    children: [
                        {
                            path: '/',
                            name: 'events-info',
                            component: EventsInfoView,
                        },
                        {
                            path: 'list',
                            name: 'events-list',
                            component: EventsListView,
                        },
                        {
                            path: 'video',
                            name: 'Events-vide',
                            component: eventsVideo,
                        },
                        {
                            path: 'detail/:id',
                            name: 'events-detail',
                            component: EventsDetailView,
                        },
                        {
                            path: 'iconic',
                            component: IconicView,
                            children: [
                                {
                                    path: '/',
                                    name: 'iconic-list',
                                    component: IconicListView,
                                },
                                // {
                                //     path: 'detail/:id',
                                //     name: 'iconic-detail',
                                //     component: IconicDetailView
                                // },
                                {
                                    path: 'detail-a',
                                    name: 'iconic-detail-a',
                                    component: IconicDetailViewA,
                                },
                                {
                                    path: 'detail-b',
                                    name: 'iconic-detail-b',
                                    component: IconicDetailViewB,
                                },
                                {
                                    path: 'detail-c',
                                    name: 'iconic-detail-c',
                                    component: IconicDetailViewC,
                                },
                                {
                                    path: 'detail-d',
                                    name: 'iconic-detail-d',
                                    component: IconicDetailViewD,
                                },
                                {
                                    path: 'detail-e',
                                    name: 'iconic-detail-e',
                                    component: IconicDetailViewE,
                                },
                                {
                                    path: 'detail-f',
                                    name: 'iconic-detail-f',
                                    component: IconicDetailViewF,
                                },
                                {
                                    path: 'detail-g',
                                    name: 'iconic-detail-g',
                                    component: IconicDetailViewG,
                                },
                                {
                                    path: 'detail-h',
                                    name: 'iconic-detail-h',
                                    component: IconicDetailViewH,
                                },
                                {
                                    path: 'detail-i',
                                    name: 'iconic-detail-i',
                                    component: IconicDetailViewI,
                                },
                                {
                                    path: 'detail-j',
                                    name: 'iconic-detail-j',
                                    component: IconicDetailViewJ,
                                },
                                {
                                    path: 'detail-K',
                                    name: 'iconic-detail-K',
                                    component: IconicDetailViewK,
                                },
                            ],
                        },
                    ],
                },
                {
                    path: 'live',
                    component: LiveView,
                    children: [
                        {
                            path: '/',
                            name: 'live-info',
                            component: LiveInfoView,
                        },
                        {
                            path: 'nav',
                            name: 'live-nav',
                            component: LiveNavView,
                        },
                       /* {
                            path: 'rocks',
                            name: 'live-rocks',
                            component: RocksView,
                        },*/
                        {
                            path: 'video',
                            name: 'live-video',
                            component: liveVideo,
                        },
                        {
                            path: 'week',
                            name: 'fashoinWeek-list-view',
                            component: fashionWeek,
                        },
                        {
                            path: 'sifs',
                            component: SifsView,
                            children: [
                                {
                                    path: '/',
                                    name: 'sifs-list',
                                    component: SifsListView,
                                },
                                {
                                    path: 'detail/:id',
                                    name: 'sifs-detail',
                                    component: SifsDetailView,
                                },
                            ],
                        },
                        {
                            path: 'rocks',
                            name: 'live-rocks',
                            component: RocksView,
                            children: [
                                {
                                    path: '/',
                                    name: 'rocks-list',
                                    component: RocksList,
                                },
                                {
                                    path: 'detail/:id',
                                    name: 'rocks-detail-view',
                                    component: RocksDetail,
                                },
                            ],
                        },
                    ],
                },
                {
                    path: 'recreation',
                    component: RecreationView,
                    children: [
                        {
                            path: '/',
                            name: 'recreation-info',
                            component: RecreationInfoView,
                        },
                        {
                            path: 'showlist',
                            name: 'recreation-show-view',
                            component:RecreationShowList,
                        },
                        {
                            path: 'park',
                            name: 'recreation-park-view',
                            component:recreationPark,
                        },
                        {
                            path: 'detail',
                            name: 'recreation-detail',
                            component: RecreationDetailView,
                        },
                        {
                            path: 'list',
                            name: 'recreation-list-views',
                            component: recreationListViews,
                            children: [
                                {
                                    path: '/',
                                    name: 'recreation-info',
                                    component: recreationList,
                                },
                                {
                                    path: 'dna-1',
                                    name: 'dna-1',
                                    component: dna1,
                                },
                                {
                                    path: 'dna-2',
                                    name: 'dna-2',
                                    component: dna2,
                                },
                                {
                                    path: 'dna-3',
                                    name: 'dna-3',
                                    component: dna3,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            path: '/partners',
            name: 'partners-view',
            component: PartnersView,
        },
        {
            path: '/association',
            name: 'association-view',
            component: association,
        },
        {
            path: '/awards',
            component: NewsView,
            children: [
                {
                    path: '/',
                    name: 'news-list',
                    component: NewsListView,
                },
                {
                    path: 'detail/:id',
                    name: 'news-detail',
                    component: NewsDetailView,
                },
            ],
        },
        {
            path: '/clients',
            name: 'clients-view',
            component: ClientsView,
        },
        {
            path: '/about',
            name: 'about-view',
            component: AboutView,
        },
        {
            path: '/career',
            name: 'career-view',
            component: CareerView,
        },
    ],
});
