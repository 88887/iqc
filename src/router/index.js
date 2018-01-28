import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/signin'
import MainPage from '@/components/MainPage'
import addReport from '@/components/addReport'
import archiveReport from '@/components/IQCReport/archiveReport'
import queryReport from '@/components/IQCReport/queryReport'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'signin',
      component: login
    },
    {
    path: '/MainPage',
    name: 'MainPage',
    component: MainPage
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
