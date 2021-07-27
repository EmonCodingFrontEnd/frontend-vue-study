<template>
  <div class="content">
    <div class="category">
      <div
        :class="{'category__item': true, 'category__item--active': currentTab===item.tab}"
        @click="()=>handleTabClick(item.tab)"
        v-for="item in categories"
        :key="item.name">{{
          item.name
        }}
      </div>
      <!--      <div class="category__item">秒杀</div>
            <div class="category__item">新鲜水果</div>
            <div class="category__item">休闲食品</div>
            <div class="category__item">时令蔬菜</div>
            <div class="category__item">肉蛋家禽</div>-->
    </div>
    <div class="product">
      <div class="product__item" v-for="item in list" :key="item._id">
        <img class="product__item__img" :src="item.imgUrl" alt="1">
        <div class="product__item__detail">
          <h4 class="product__item__title">{{ item.name }}</h4>
          <p class="product__item__sales">月售{{ item.sales }}件</p>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>{{ item.price }}
            <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
          </p>
        </div>
        <div class="product__number">
          <div class="product__number__minus">-</div>
          {{ cartList?.[shopId] ?.[item._id]?.count || 0 }}
          <div
            class="product__number__plus"
            @click="()=>{addItemToCart(shopId, item._id, item)}"
          >+
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { get } from '../../utils/request'

const categories = [{
  name: '全部商品',
  tab: 'all'
}, {
  name: '秒杀',
  tab: 'seckill'
}, {
  name: '新鲜水果',
  tab: 'fruit'
}]

// Tab 切换相关的逻辑
const useTabEffect = () => {
  const currentTab = ref(categories[0].tab)

  const handleTabClick = (tab) => {
    currentTab.value = tab
  }
  return {
    currentTab,
    handleTabClick
  }
}

// 列表内容相关逻辑
const useCurrentListEffect = (currentTab, shopId) => {
  const content = reactive({
    list: []
  })

  const getContentData = async () => {
    const result = await get(`/api/shop/${shopId}/products`, { tab: currentTab.value })
    if (result?.errno === 0 && result?.data?.length) {
      content.list = result.data
    }
  }

  watchEffect(() => {
    getContentData()
  })

  const { list } = toRefs(content)
  return {
    list,
    shopId
  }
}

// 购物车相关逻辑
const useCartEffect = () => {
  const store = useStore()
  const { cartList } = toRefs(store.state.cartList)

  const addItemToCart = (shopId, productId, productInfo) => {
    store.commit('addItemToCart', {
      shopId,
      productId,
      productInfo
    })
  }
  return {
    cartList,
    addItemToCart
  }
}

export default {
  name: 'Content',
  setup () {
    const route = useRoute()
    const shopId = route.params.id

    const {
      currentTab,
      handleTabClick
    } = useTabEffect()

    const {
      list
    } = useCurrentListEffect(currentTab, shopId)

    const {
      cartList,
      addItemToCart
    } = useCartEffect()

    return {
      categories,
      currentTab,
      handleTabClick,
      list,
      cartList,
      shopId,
      addItemToCart
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables";
@import "../../style/mixins";

.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: .5rem;
}

.category {
  overflow-y: scroll;
  height: 100%;
  width: .76rem;
  background: #F5F5F5;

  &__item {
    line-height: .4rem;
    text-align: center;
    font-size: .14rem;
    color: $content-fontcolor;

    &--active {
      background: $bgColor;
    }
  }
}

.product {
  overflow-y: scroll;
  flex: 1;

  &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bgColor;

    &__img {
      width: .68rem;
      height: .68rem;
      margin-right: .16rem;
    }

    &__detail {
      overflow: hidden;
    }

    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      @include ellipsis
    }

    &__sales {
      margin: .06rem 0;
      line-height: .16rem;
      font-size: .12rem;
      color: $content-fontcolor;
    }

    &__price {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $hightlight-fontColor;
    }

    &__yen {
      font-size: .12rem;
    }

    &__origin {
      margin-left: .06rem;
      line-height: .2rem;
      font-size: .12rem;
      color: $light-fontColor;
      text-decoration: line-through;
    }

    .product__number {
      position: absolute;
      right: 0;
      bottom: .12rem;

      &__minus, &__plus {
        display: inline-block;
        width: .2rem;
        height: .2rem;
        border-radius: 50%;
        font-size: .2rem;
        text-align: center;
        line-height: .16rem;
      }

      &__minus {
        border: .01rem solid $medium-fontColor;
        color: $medium-fontColor;
        margin-right: .05rem;
      }

      &__plus {
        background: $btn-bgColor;
        color: $bgColor;
        margin-left: .05rem;
      }
    }
  }
}
</style>
