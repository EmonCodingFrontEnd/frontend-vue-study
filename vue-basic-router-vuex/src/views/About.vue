<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ myName }}</h1>

  </div>
</template>

<script>
export default {
  name: 'About',
  computed: {
    myName () {
      return this.$store.state.name
    }
  }
}
</script>
