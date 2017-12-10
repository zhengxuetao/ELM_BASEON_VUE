import Vue from 'vue'
import store from '@/store/index'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import New from '@/components/new/New'
import Order from '@/components/order/Order'
import My from '@/components/my/My'
import ShopList from '@/components/shop/ShopList'
import Shop from '@/components/shop/Shop'
import Goods from '@/components/shop/Goods'
import Login from '@/components/common/Login'

Vue.use(Router)

const router = new Router({
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
      meta: {
        requireAuthentication: true,
      },
      component: Order
    }, {
      path: '/my',
      name: 'My',
      meta: {
        requireAuthentication: true,
      },
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
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuthentication) {
    if (store.state.token) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirectTo: to.fullPath }
      })
    }
  } else {
    next();
  }
});

export default router;