<template>
  <div class="about">
    <h1 @click="handleClickSync">This is an about page</h1>
    <h1 @click="handleClickASync">{{ name }}</h1>

  </div>
</template>

<script>
import { useStore } from 'vuex'
import { toRefs } from 'vue'

export default {
  name: 'About2',
  setup () {
    const store = useStore()
    const { name } = toRefs(store.state)

    const handleClickSync = () => {
      store.commit('change')
    }

    const handleClickASync = () => {
      store.dispatch('change', 'hello world!')
    }

    return {
      name,
      handleClickSync,
      handleClickASync
    }
  }
}
</script>
