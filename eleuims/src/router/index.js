import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import TTable from '@/components/Table'
import Tree from '@/components/Tree'
import Pagination from '@/components/Pagination'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/0',
      name: 'Pagination',
      component: Pagination
    },
    {
      path: '/1/1-1',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/1/1-2/1-2-1',
      name: 'TTable',
      component: TTable
    },
    {
      path: '/1/1-2/1-2-2',
      name: 'Tree',
      component: Tree
    },
  ]
})
