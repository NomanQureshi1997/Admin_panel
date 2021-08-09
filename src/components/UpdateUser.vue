<template>
  <div>
    <b-form @submit="update">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          value=""
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="JOB Title:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="jobtitle"
          :options="['Front End ', 'Backend', 'Fullstack']"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "UpdateUser",
  //data is is fetch from table component with it's index
  props: ["data", "index"],
  data() {
    return {
      name: this.data[this.index].Name,
      email: this.data[this.index].Email,
      jobtitle: this.data[this.index].jobtitle,
    };
  },
  methods: {
    update() {
      let getdata = JSON.parse(localStorage.getItem("Userdata"));
      getdata[this.index].Name = this.name;
      getdata[this.index].Email = this.email;
      getdata[this.index].jobtitle = this.jobtitle;
      localStorage.setItem("Userdata", JSON.stringify(getdata));
    },
  },
};
</script>
