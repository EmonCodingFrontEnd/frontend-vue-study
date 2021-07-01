import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TodoList from '../views/TodoList'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/todo',
    name: 'Todo',
    component: TodoList
  }
]

const router = createRouter({
  history: createWebHashHistory(), // hash路由
  routes
})

export default router
