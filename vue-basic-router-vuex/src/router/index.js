import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TodoList from '../views/TodoList'
import Home2 from '../views/Home2'

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
    // 异步加载路由
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/todo',
    name: 'Todo',
    component: TodoList
  },
  {
    path: '/home2',
    name: 'Home2',
    component: Home2
  },
  {
    path: '/about2',
    name: 'About2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 异步加载路由
    component: () => import(/* webpackChunkName: "about" */ '../views/About2.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(), // hash路由
  routes
})

export default router
