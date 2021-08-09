<template>
  <div>
    <b-card
      title="Add New User"
      tag="article"
      style="max-width: 50rem"
      class="mb-2 mt-5 mx-auto d-block rounded bg-light"
    >
    <!-- Form that get data from the user -->
      <b-form @submit="onSubmit">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="email"
            type="email"
            placeholder="Enter email"
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
    </b-card>
  </div>
</template>

<script>
export default {
  name: "AddNewUser",

  data() {
    return {
      // geting the data from the input fields 
      // form is an empty array to push data every time the form is submited
      email: null,
      name: null,
      jobtitle: null,
      form: [],
    };
  },
  methods: {

    // Funtion to submit the data to local storage
    onSubmit(event) {
      
      event.preventDefault();
      
      let check = JSON.parse(localStorage.getItem("Userdata"));
      
      if (check === null) {

        this.form.push({

          ID: Math.random().toString(16).slice(2),
          Name: this.name,
          Email: this.email,
          avatar: `<img :src="require('../assets/logo.png')" height="50px" width="50px" >`,
          jobtitle: this.jobtitle,

        });

        localStorage.setItem("Userdata", JSON.stringify(this.form));
      } 
      
      else {

        let addnew = JSON.parse(localStorage.getItem("Userdata"));

        for (let i = 0; i < addnew.length; i++) {

          if (this.email == addnew[i].Email) {
            alert("email all ready exits");
            break;
          } 
          
          else {

              addnew.push({
              ID: Math.random().toString(16).slice(2),
              Name: this.name,
              Email: this.email,
              jobtitle: this.jobtitle,

            });

            localStorage.setItem("Userdata", JSON.stringify(addnew));

            break;
          }
        }
      }
    },
  },
};
</script>
