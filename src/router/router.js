// resolve => require(['../pages/home.vue'], resolve) ,这种引入组件的方式也完全可以
const router = [{
    name: 'home',
    path: '/',
    component: () =>
        import ('../pages/home.vue')
}, {
    name: 'home',
    path: '/home',
    component: () =>
        import ('../pages/home.vue')
}];
export default router