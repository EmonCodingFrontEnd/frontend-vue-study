import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {
      // // 第一层级是商铺ID
      // shopId: {
      //   // 第二层是商铺ID
      //   // 第二层内容是商品内容以及购物车数量
      //   productId: {
      //     _id: '1',
      //     name: '番茄250元/份',
      //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
      //     sales: 10,
      //     price: 33.6,
      //     oldPrice: 39.6,
      //     count: 2
      //   }
      // }
    }
  },
  mutations: {
    addItemToCart (state, payload) {
      const {
        shopId,
        productId,
        productInfo
      } = payload
      console.log(shopId, productInfo, productId)
    }
  },
  actions: {
    demo (context, payload) {
      console.log(context)
    }
  },
  modules: {}
})
