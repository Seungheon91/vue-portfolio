import Vue from 'vue';
import VueRouter from 'vue-router';
import Paths from '@/router/paths.js';

Vue.useAttrs(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: Paths
});

export default router;