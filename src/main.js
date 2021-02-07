import Vue from 'vue'
import App from './App.vue'
import './main.scss' // SCSS
import vuetify from './plugins/vuetify' // Vuetify

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
