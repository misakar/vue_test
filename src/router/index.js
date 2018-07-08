import Vue from 'vue'
import Router from 'vue-router'
import TestVueIframe from '@/components/TestVueIframe'
import OtherPage from '@/components/OtherPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'TestVueIframe',
      component: TestVueIframe,
      props: (route) => ({
        frame: route.query.frame
      })
    },
    {
      path: '/other',
      name: 'OtherPage',
      component: OtherPage,
    },
  ]
})
