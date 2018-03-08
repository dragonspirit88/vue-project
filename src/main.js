import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Components from './components'


Vue.use(ElementUi)
Object.keys(Components).forEach((key) => {
    Vue.component(key, Components[key])
})


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#root");