import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, savedPosition) {
    if ( savedPosition ) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash}
    }
    return {x:0, y: 0}
  }
})

router.beforeEach((to, from,next) => {
  console.log('global beforeEach')
  next( )
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
