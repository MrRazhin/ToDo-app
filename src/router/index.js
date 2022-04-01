import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from '../pages/TodoList';
import Create from '../pages/Create';

Vue.use(VueRouter)

const routes = [
  {
    path: '/list',
    name: 'list',
    component: TodoList
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  },
  
]

const router = new VueRouter({
  routes
})

export default router
