import Vue from 'vue'
import VueRouter from 'vue-router'
import drag from '../views/index.vue'
import more from '../views/more.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'drag',
    component: drag
  },
  {
    path: '/more',
    name: 'more',
    component: more
  }
]

const router = new VueRouter({
  routes
})

export default router
