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
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto my-5" >
        <div class="card card-signin my-2 set-position" >
          
          <div class="card-body">
            <h5 class="card-title text-center">Sign In</h5>
          </div>
            </div>
        <div class="card card-signin my-5" style="position: relative">
          <div class="card-body my-5">
            
            
            <!-- Login form -->
            <form class="form-signin">
              <div class="form-label-group">
                <input
                  type="email"
                  id="inputEmail"
                  v-model="Email"
                  class="form-control"
                  placeholder="Email address"
                  required
                  autofocus
                />
              </div>

              <div class="form-label-group">
                <input
                  type="password"
                  id="inputPassword"
                  v-model="Password"
                  class="form-control"
                  placeholder="Password"
                  required
                />
              </div>

              <div class="custom-control custom-checkbox mb-3">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1"
                  >Remember password</label
                >
              </div>
              <button
                class="btn btn-lg btn-primary btn-block text-uppercase"
                @click="SuccessLogin"
                type="submit"
              >
                Sign in
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
  name: "Login",
  // Getting data from Inputs
  data() {
    return {
      Email: null,
      password: null,
    };
  },
  methods: {
    // Funtion validates the login user
    SuccessLogin() {
      let Success =JSON.parse( localStorage.getItem("Users"));

      Success.map((values) => {
        if (values.email == this.Email && this.Password == values.password) {
          alert("You are loged in");
          this.$slots.commit("setAuthentication" , true);
          this.$routes.replace({name:"Home"});
        } 
        else {
          alert("login Failed");
        }
      });
    },
  },
};
</script>

<style scoped>

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

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group input {
  height: auto;
  border-radius: 2rem;
}

.form-label-group > label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  line-height: 1.5;
  color: #495057;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: all 0.1s ease-in-out;
}
</style>
