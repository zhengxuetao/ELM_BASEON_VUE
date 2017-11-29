import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import New from '@/components/new/New'
import Order from '@/components/order/Order'
import My from '@/components/my/My'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/new',
      name: 'New',
      component: New
    }, {
      path: '/order',
      name: 'Order',
      component: Order
    }, {
      path: '/my',
      name: 'My',
      component: My
    }
  ]
})
