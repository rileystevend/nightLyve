import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '@/components/homepage';
import PostView from '@/components/postview';
import DetailView from '@/components/detailview';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/post',
      name: 'post',
      component: PostView,
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView,
    },
  ],
});
