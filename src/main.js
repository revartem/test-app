
import App from './App.vue'
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import * as VueGoogleMaps from 'vue2-google-maps'
import 'vue-material/dist/theme/default.css'
import '../public/maincolors.sass';
import Vuex from 'vuex'

Vue.use(Vuex);
import { store } from './store'


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB9uAQn_LNiFjZ3TIUUmiqakL1VDCTbW5Q',
  },
})

Vue.use(VueMaterial)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
