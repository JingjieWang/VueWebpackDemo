import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueRouter);
Vue.use(VueResource)


const router = new VueRouter()
router.map({
  '/':{
    component: App
  }
})

router.redirect({
  '*': '/'
})
router.start(App,'#app')
