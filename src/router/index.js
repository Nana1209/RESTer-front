import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Report from '@/components/Report'
import OASinput from "../components/OASinput";

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base:'/rester',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path: '/oas-input',
          name: 'OASinput',
          component: OASinput
        }
      ]
    },
    {
      path: '/report',
      name: 'Report',
      component: Report
    }
  ]
})
