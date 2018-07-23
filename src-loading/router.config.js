import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);//安装插件


import home from './components/home.vue';
import product from './components/product.vue';
import user from './components/user.vue';
import login from './components/login.vue';
import reg from './components/reg.vue';
import error from './components/error.vue';
import detail from './components/detail.vue';

const routes=[
  {path:'/home',component:home},
  {path:'/product',component:product,children:[
    {name:'detail',path:'detail/:aid',component:detail}
  ]},
  {path:'/user',component:user},
  {path:'/login',component:login},
  {path:'/reg',component:reg},
  {path:'/',redirect: '/home'},
  {path:'*',component:error}
];

export default new VueRouter({routes});