<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <ShopInfo v-for="item in nearbyList" :key="item._id" :item="item"/>
  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'

const useNearbyListEffect = () => {
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const result = await get('/api/shop/hot-list')
    console.log(result)
    if (result?.errno === 0 && result?.data?.length) {
      nearbyList.value = result.data
      // localStorage.setItem('isLogin', 'true')
      // router.push({ name: 'Home' })
      // data.showToast = false
    } else {
      // showToast(result?.code + ':' + result?.desc)
    }
  }
  return {
    nearbyList,
    getNearbyList
  }
}
export default {
  name: 'Nearby',
  components: {
    ShopInfo
  },
  setup () {
    const {
      nearbyList,
      getNearbyList
    } = useNearbyListEffect()
    getNearbyList()

    return { nearbyList }
  }

}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';

.nearby {
  &__title {
    margin: .16rem 0 .04rem 0;
    font-size: .18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
}

</style>
