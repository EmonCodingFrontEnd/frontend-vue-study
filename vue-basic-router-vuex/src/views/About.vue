<template>
  <div class="about">
    <h1 @click="handleClickSync">This is an about page</h1>
    <h1 @click="handleClickASync">{{ myName }}</h1>

  </div>
</template>

<script>
export default {
  name: 'About',
  computed: {
    myName () {
      return this.$store.state.name
    }
  },
  methods: {
    handleClickSync () {
      // [VueX同步改变数据]:第一步，提交一个 commit 触发一个 mutation
      this.$store.commit('change')
    },
    handleClickASync () {
      // [VueX异步改变数据]:第一步，dispatch 方法，派发一个 action，名字叫做 change
      this.$store.dispatch('change', 'hello world!')
    }
  }
}
</script>
