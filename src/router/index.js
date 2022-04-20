import Vue from 'vue';
import VueRouter from 'vue-router';
import drag from '../views/drag/index.vue';
import more from '../views/drag/more.vue';
import mixin from '../views/drag/mixin.vue';
import table from '../views/drag/table.vue';
import atable from '../views/drag/atable.vue';
import move from '../views/drag/move.vue';
import form from '../views/form/index.vue';
import wordCloud from '../views/wordCloud/index.vue';
import map from '../views/map/index.vue';
import pdf from '../views/pdf/index.vue'

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
  {
    path: '/form',
    name: 'form',
    component: form,
  },
  {
    path: '/wordCloud',
    name: 'wordCloud',
    component: wordCloud,
  },
  {
    path: '/map',
    name: 'map',
    component: map,
  },
  {
    path: '/pdf',
    name: 'pdf',
    component: pdf,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
