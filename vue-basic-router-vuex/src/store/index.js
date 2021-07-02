import { createStore } from 'vuex'
import axios from 'axios'

// VueX 数据管理框架
// VueX 创建了一个全局唯一的仓库，用来存放全局的数据
export default createStore({
  state: {
    name: 'dell'
  },
  // 规范：mutation 里面值允许写同步代码，不允许写异步代码【推荐，强烈建议，但不强制】
  /**
   * 【commit 和 mutation 做关联】
   * 你可以向 store.commit 传入额外的参数，即 mutation 的载荷（payload）：
   */
  mutations: {
    // [VueX同步改变数据]:第二步，mutation 感知到提交的 change，触发一个 mutation
    // [VueX异步改变数据]:第四步，mutation 感知到提交的 change，触发一个 mutation
    change (state, payload) {
      // [VueX同步改变数据]:第三步，在mutation 里面修改数据
      // [VueX异步改变数据]:第五步，在mutation 里面修改数据
      console.log(payload)
      state.name = `被修改了的dell说了 ${payload} `
    }
  },
  /**
   * 【dispatch 和 action 做关联】
   * Action 提交的是 mutation，而不是直接变更状态
   * Action 可以包含任意异步操作。
   * Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
   * 因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。
   */
  actions: {
    // [VueX异步改变数据]:第二步，store 感知到你发出了一个叫做 change 的 action，执行 change 方法
    change (context, payload) {
      // [VueX异步改变数据]:第三步，提交一个 commit 触发一个 mutation
      setTimeout(() => {
        context.commit('change', payload)
      }, 2000)
    },
    getData (context) {
      const url = 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/user/register'
      axios.get(url).then((response) => {
        const msg = response.data.desc
        context.commit('change', msg)
      })
    }
  },
  modules: {}
})
