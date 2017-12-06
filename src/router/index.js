import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import New from '@/components/new/New'
import Order from '@/components/order/Order'
import My from '@/components/my/My'
import ShopList from '@/components/shop/ShopList'
import Shop from '@/components/shop/Shop'
import Goods from '@/components/shop/Goods'

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
    }, {
      path: '/shopList',
      name: 'ShopList',
      component: ShopList
    }, {
      path: '/shop',
      name: 'Shop',
      component: Shop,
      children: [
        {
          path: 'goods',
          name: 'Goods',
          component: Goods
        }, {
          path: 'discuss',
          name: 'Discuss',
          component: Goods
        }, {
          path: 'detail',
          name: 'Detail',
          component: Goods
        }
      ]
    }
  ]
})
