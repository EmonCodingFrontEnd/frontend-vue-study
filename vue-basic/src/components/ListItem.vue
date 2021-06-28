<template>
  <li class="button">{{ msg }}</li>
</template>

<script lang="ts">

export default {
  name: 'ListItem',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
