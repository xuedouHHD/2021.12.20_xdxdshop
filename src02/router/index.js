import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta: {
        ShowFooterGuide: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        ShowFooterGuide: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        ShowFooterGuide: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        ShowFooterGuide: true
      }
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
