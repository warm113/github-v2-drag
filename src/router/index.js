import Vue from 'vue';
import VueRouter from 'vue-router';
import drag from '../views/index.vue';
import more from '../views/more.vue';
import mixin from '../views/mixin.vue';
import table from '../views/table.vue';
import atable from '../views/atable.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'drag',
    component: drag,
  },
  {
    path: '/more',
    name: 'more',
    component: more,
  },
  {
    path: '/mixin',
    name: 'mixin',
    component: mixin,
  },
  {
    path: '/table',
    name: 'table',
    component: table,
  },
  {
    path: '/atable',
    name: 'atable',
    component: atable,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
