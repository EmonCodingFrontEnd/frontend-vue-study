<template>
  <div class="about">
    <h1 @click="handleClickSync">This is an about page</h1>
    <h1 @click="handleClickASync">{{ name }}</h1>

  </div>
</template>

<script>
import { useStore } from 'vuex'
import { toRefs } from 'vue'

// https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/user/register
export default {
  name: 'About2',
  setup () {
    const store = useStore()
    const { name } = toRefs(store.state)

    const handleClickSync = () => {
      store.commit('change')
    }

    const handleClickASync = () => {
      store.dispatch('getData')
    }

    return {
      name,
      handleClickSync,
      handleClickASync
    }
  }
}
</script>
