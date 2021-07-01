<template>
  <li class="button">{{ msg }}</li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    msg: String
  }
}
</script>

<style scoped>
li {
  text-align: left;
}
</style>
