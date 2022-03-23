import Vue from 'vue';
import VueRouter from 'vue-router';
import drag from '../views/drag/index.vue';
import more from '../views/drag/more.vue';
import mixin from '../views/drag/mixin.vue';
import table from '../views/drag/table.vue';
import atable from '../views/drag/atable.vue';
import move from '../views/drag/move.vue';

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
  {
    path: '/move',
    name: 'move',
    component: move,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
