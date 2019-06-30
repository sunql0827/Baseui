import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
Vue.use(Router)

export default new Router({
  routes: [
   
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/MenuPublic',
      name: 'MenuPublic',
      component: () => import('./components/MenuPublic.vue')
    },
    {
      path: '/FontSize',
      name: 'FontSize',
      component: () => import('./components/FontSize.vue')
    },
    {
      path: '/FontColor',
      name: 'FontColor',
      component: () => import('./components/FontColor.vue')
    },
    {
      path: '/BgColor',
      name: 'BgColor',
      component: () => import('./components/BgColor.vue')
    },
    {
      path: '/Space',
      name: 'Space',
      component: () => import('./components/Space.vue')
    }
  ]
})
