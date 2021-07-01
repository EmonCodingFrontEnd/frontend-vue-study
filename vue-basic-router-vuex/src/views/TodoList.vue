<template>
  <div><input v-model="inputValue"/>
    <button class="button" @click="handleAddItem">提交</button>
  </div>
  <ul>
    <todo-item v-for="(item, index) in list" :key="index" :msg="item"></todo-item>
  </ul>
</template>

<script>
import { reactive, ref } from 'vue'
import TodoItem from '../components/TodoItem'

export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  setup () {
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

<style scoped>
.button {
  margin-left: 20px;
  color: red;
}
</style>
