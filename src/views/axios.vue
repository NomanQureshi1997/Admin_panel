<template>
  <div>
    <b-table striped hover :items="posts"></b-table>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "axios",
  mounted() {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => (this.posts = res.data.data));
  },
  data() {
    return {
      posts: null,
    };
  },
};
</script>
