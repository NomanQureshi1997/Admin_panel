<template>
  <b-col cols="2" style="height: 98vh; overflow-y: scroll">

    <b-row style="height: 10vh" class="p-2">

      <img
        :src="require('../assets/logo.png')"
        height="50px"
        width="50px"
        style="margin: 10px 70px auto auto"
      />

    </b-row>

    <b-table-simple hover class="mt-4 table-borderless">

      <b-body>

        <b-tr>
          <b-td><b-icon icon="tv"></b-icon></b-td>
          <b-td
            ><router-link to="/" style="text-decoration: none; color: grey"
              >Dashboard</router-link
            ></b-td
          >
        </b-tr>

        <b-tr>
          <b-td><b-icon icon="globe"></b-icon></b-td>
          <b-td
            ><router-link to="/about" style="text-decoration: none; color: grey"
              >Add new User</router-link
            ></b-td
          >
        </b-tr>

        <b-tr>
          <b-td><b-icon icon="globe"></b-icon></b-td>
          <b-td
            ><router-link to="/axios" style="text-decoration: none; color: grey"
              >Axios</router-link
            ></b-td
          >
        </b-tr>

        <b-tr>
          <b-td><b-icon icon="globe"></b-icon></b-td>
          <b-td
            ><router-link to="/Login" style="text-decoration: none; color: grey"
              >Login</router-link
            ></b-td
          >
        </b-tr>

        <b-tr>
          <b-td><b-icon icon="globe"></b-icon></b-td>
          <b-td
            ><router-link
              to="/SignUp"
              style="text-decoration: none; color: grey"
              >Signup</router-link
            ></b-td
          >
        </b-tr>

      </b-body>
    </b-table-simple>
  </b-col>
</template>

<script>
export default {
  name: "leftnav",
};
</script>
