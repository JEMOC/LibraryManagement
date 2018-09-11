import Vue from 'vue'
import Router from 'vue-router'

import DataManagement from './components/router/DataManagement'
import ServerManagement from './components/router/ServerManagement'
import UserManagement from './components/router/UserManagement'
import InputManagement from './components/router/InputManagement'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: 
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
    {
        path: '/Data',
        name: 'data',
        component: DataManagement
    },
    {
        path: '/input',
        name: 'input',
        component: InputManagement
    }
    ,
    {
        path: '/Server',
        name: 'server',
        component: ServerManagement
    },
    {
        path: '/User',
        name: 'user',
        component: UserManagement
    }
  ]
})
