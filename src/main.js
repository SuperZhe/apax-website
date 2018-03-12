// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Bus from '@js-lib/helper/bus';
import router from './router';
import axios from 'axios';
import jquery from 'jquery';
import scrollreveal from 'scrollreveal';
import './assets/js/app/fontSize'
//去除手机端hover二次点击的情况
document.body.addEventListener('touchstart', function(){ });
Vue.prototype.$bus = Bus;
Vue.prototype.$axios = axios;
Vue.prototype.$sr = scrollreveal;
Vue.prototype.$ = jquery;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});
