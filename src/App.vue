<template>
  <div id="app">
    
    <b-row >
      <leftnav/>
      <b-col cols="10" style="overflow-y: scroll; height:97vh">  <router-view /> </b-col>
    </b-row>
    <!-- <router-view> </router-view> -->
    <!-- <Login/> -->
   <!-- <Signup/> -->
  </div>
</template>
<script>
// import Login from '@/Login&Signup/Login.vue';
// import Signup from '@/Login&Signup/SignUp.vue';
import leftnav from '@/components/left-nav.vue';
export default {
  components:{
    leftnav, 
    // Login,
    // Signup
  },
  
  
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.setroute{
  text-decoration: none;
}
</style>
