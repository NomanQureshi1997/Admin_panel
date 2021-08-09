<template>
  <!-- img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image" -->
  <!-- Material form login -->
  <!-- <div class="gradientset">
  
  <h1 style="text-align: center;" >Login Form</h1>
    <b-card
    tag="article"
    style="max-width: 35rem;"
    class="mb-2 mx-auto d-block rounded bg-light pt-5"
  >
    <b-form >
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password" label-for="input-2" class="pt-3">
        <b-form-input
          id="input-2"
          type="password"
          placeholder="Password"
          required
        ></b-form-input>
      </b-form-group>
    </b-form>
    <b-button href="#" variant="primary" style="width:100%" class="mt-3">Go somewhere</b-button>
  </b-card>
  
</div> -->
  <div class="container-fluid bg-secondary" style="height: 100vh">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto my-5">
        <div class="card card-signin my-2 set-position" >
          
          <div class="card-body">
            <h5 class="card-title text-center"><b>Sign Up</b></h5>
          </div>
            </div>
        <div class="card card-signin my-5" style="position: relative">
          <div class="card-body my-5">
            <!-- Signup form  -->
            <form class="form-signin">
              <div class="form-label-group">
                <input
                  type="text"
                  id="inputEmail"
                  class="form-control"
                  placeholder="First Name"
                  v-model="form.firstname"
                  required
                  autofocus
                />
              </div>
              <div class="form-label-group">
                <input
                  type="text"
                  id="inputEmail"
                  class="form-control"
                  placeholder="Last Name"
                  v-model="form.lastname"
                  required
                  autofocus
                />
              </div>
              <div class="form-label-group">
                <input
                  type="email"
                  id="inputEmail"
                  class="form-control"
                  placeholder="Email address"
                  v-model="form.email"
                  required
                  autofocus
                />
              </div>

              <div class="form-label-group">
                <input
                  type="password"
                  id="inputPassword"
                  class="form-control"
                  placeholder="Password"
                  v-model="form.password"
                  required
                />
              </div>

              <button
                class="btn btn-lg btn-primary btn-block text-uppercase"
                type="submit"
                @click="submit"
              >
                Sign Up
              </button>
              <hr class="my-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Signup",
  // Getting data from input form using v-bind
  data() {
    return {
      form: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      },
      user: [],
    };
  },
  // Submit function used to submit from
  methods: {

    submit() {
      let check = JSON.parse(localStorage.getItem("Users"));
      if (check == null) {
        this.user.push(this.form);
        localStorage.setItem("Users", JSON.stringify(this.user));
      } else {
        let addnew = JSON.parse(localStorage.getItem("Users"));
        for (let i = 0; i < addnew.length; i++) {
          if (this.form.email == addnew[i].email) {
            console.log("email all ready exits");
            break;
          } else {
            addnew.push(this.form);
            localStorage.setItem("Users", JSON.stringify(addnew));
            break;
          }
        }
      }
    },
  },
};
</script>

<style scoped>
.gradientset {
  height: 100vh;
  opacity: 0.6;
  background-image: linear-gradient(
    to top,
    rgb(78, 78, 252),
    red,
    rgb(241, 151, 151),
    rgb(116, 116, 252)
  );
}
.set-position{
height:40px; 
position: absolute; 
z-index:1; 
top:0px;
left:17vh;
height: 15vh;
width: 40vh;
}
.card-signin {
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.card-signin .card-title {
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
}

.card-signin .card-body {
  padding: 2rem;
}

.form-signin {
  width: 100%;
}

.form-signin .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
  padding: 1rem;
  transition: all 0.2s;
}




</style>
