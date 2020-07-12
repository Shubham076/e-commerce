import Vue from 'vue'
import App from './App.vue'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {router} from "./routes"
import Vuelidate from "vuelidate"
import {store} from "./Store/store"


//...

Vue.use(Vuelidate)
Vue.config.productionTip = false






new Vue({
  render: h => h(App),
  router,
  store
  
}).$mount('#app')
