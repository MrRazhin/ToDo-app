import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "materialize-css";
import 'materialize-css/dist/js/materialize.min';

Vue.config.productionTip = false 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
