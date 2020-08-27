// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import './assets/css/global.css'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
// const routerPush = router.prototype.push;
// router.prototype.push = function push(location) {
//     return routerPush.call(this, location).catch(err => err)
// }

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)

}).$mount('#app')