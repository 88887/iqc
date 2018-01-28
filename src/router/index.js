import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/signin'
import Dashboard from '@/components/Dashboard'
import addReport from '@/components/addReport'
import archiveReport from '@/components/IQCReport/archiveReport'
import queryReport from '@/components/IQCReport/queryReport'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'addReport',
      component: addReport
    },
    {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
   },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/addReport',
      name: 'addReport',
      component: addReport
    },
    {
      path: '/IQCReport/archiveReport',
      name: 'archive',
      component: archiveReport
    },
    {
      path: '/IQCReport/queryReport',
      name: 'query',
      component: queryReport
    },
  ]
})
