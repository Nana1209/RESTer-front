import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Report from '@/components/Report'
import HSReport from '@/components/HSReport'
import OASinput from "../components/OASinput";
import DynamicReport from "../components/DynamicReport";
import ConsistentReport from "../components/ConsistentReport";

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
    },
    {
      path: '/dynamicreport',
      name: 'DynamicReport',
      component: DynamicReport
    },
    {
      path: '/consistentreport',
      name: 'ConsistentReport',
      component: ConsistentReport
    },
    {
      path: '/hsreport',
      name: 'HSReport',
      component: HSReport
    }
  ]
})
