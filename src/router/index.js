import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home/home'
import news from '../pages/News/news'
import petitions from "../pages/petitions_strikes/petitions";
import download from "../pages/downloadpage/download";
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            component: home
        },
        {
            path: '/news',
            name: 'news',
            component: news
        },
        {
            path:'/petition_strikes',
            name:'petitions',
            component: petitions,
        },
        {
            path:'/download',
            name:'download',
            component: download,
        }
    ]
})
