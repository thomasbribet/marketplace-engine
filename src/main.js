import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

// Routes ====================
import AdminCreateCard from './components/admin/Admin-create-card'
import AdminHome from './components/admin/Admin-home'
import Log from './components/admin/Log'
import Home from './components/Home'
import UserDescription from './components/User-description'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: "/", component: Home},
    {path: "/description", component: UserDescription},
    {path: "/log", component: Log},
    {path: "/adminhome", component: AdminHome},
    {path: "/admincreatecard", component: AdminCreateCard}
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

