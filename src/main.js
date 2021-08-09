import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// import Login from '@/views/Login.vue';
// import leftnav from '@/components/left-nav.vue';
// import Vue from 'vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from "axios";

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false;
window.axios=require('axios')


new Vue({
  router,
  
  // routers: routers,
  render: (h) => h(App),
  mounted: function(){
    axios.get('https://reqres.in/api/users?page=2')
    .then(response => this.posts=response.data.data )
  },
  data(){
    return{
      posts: null,
    
    }
  },
 
}).$mount("#app");
