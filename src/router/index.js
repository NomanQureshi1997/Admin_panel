import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Vuex from 'vuex';


Vue.use(Vuex);

Vue.use(VueRouter);
const store =new Vuex.Store(
  {
    state:{
      authentication: false,
    },
    mutations:{
      setAuthentication(state , status){
        state.authenticated = status;
      }
    }
  }
)

const routes = [
  
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Axios",
    name: "axios",
    component: () =>
      import(/* webpackChunkName: "axios" */  "../views/axios.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../Login&Signup/Login.vue"),
  },
  {
    path: "/Signup",
    name: "Signup",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../Login&Signup/SignUp.vue"),
  },
];

const router = new VueRouter({
  routes :routes,
  store: store,
});

export default router;
