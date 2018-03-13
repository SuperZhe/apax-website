import Vue from 'vue';
export let bus = new Vue();

//判断当前页面是显示中文还是英文
export let isChinese = {isChinese:false};
// setInterval(()=>{console.log(isChinese.isChinese)},1000);
