<template>
  <div>
    <input v-model="inputValue"/>
    <button class="button" @click="handleAddItem">提交</button>
  </div>
  <ul>
    <list-item v-for="(item, index) in list" :key="index" :msg="item"/>
  </ul>
</template>

<script>
import {reactive, ref} from 'vue'
import ListItem from "./components/ListItem";

/**
 * 单文件组件
 */
export default {
  name: 'App',
  components: {
    ListItem
  },
  setup() {
    const list = reactive([])
    const inputValue = ref('')

    const handleAddItem = () => {
      list.push(inputValue.value)
      inputValue.value = ''
    }
    return {
      list,
      inputValue,
      handleAddItem
    }
  }
}
</script>

<style>
.button {
  margin-left: 20px;
  color: red;
}
</style>
