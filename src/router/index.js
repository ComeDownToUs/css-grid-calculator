import Vue from 'vue'
import Router from 'vue-router'
import GridCalc from '@/components/GridCalc'
import BootstrapCalc from '@/components/BootstrapCalc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GridCalc',
      component: GridCalc
    },
    {
      path: '/bootstrap',
      name: 'BootstrapCalc',
      component: BootstrapCalc
    }
  ]
})
