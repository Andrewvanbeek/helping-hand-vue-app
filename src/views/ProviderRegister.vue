<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-body px-lg-5 py-lg-5">
          <div class="text-center text-muted mb-4">
            <small>Sign Up</small>
          </div>
          <form role="form">
            <base-input
              class="input-group-alternative mb-3"
              placeholder="Name"
              addon-left-icon="ni ni-hat-3"
              v-model="model.name"
            ></base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="Email"
              addon-left-icon="ni ni-email-83"
              v-model="model.email"
            ></base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="Zip Code"
              addon-left-icon="ni ni-pin-3"
              v-model="model.zipcode"
            ></base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="PI Number"
              addon-left-icon="ni ni-pin-3"
              v-model="model.PI_Number"
            ></base-input>

            <base-input
              class="input-group-alternative"
              placeholder="Password"
              type="password"
              addon-left-icon="ni ni-lock-circle-open"
              v-model="model.password"
            ></base-input>

         <base-dropdown class="provider-drop">

              <base-button slot="title" type="secondary" class="dropdown-toggle">Provider</base-button>
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else hereSomething else hereSomething else hereSomething else here</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </base-dropdown>

            <div class="text-muted font-italic">
              <small>
                password strength:
                <span class="text-success font-weight-700">strong</span>
              </small>
            </div>

            <div class="row my-4">
              <div class="col-12">
                <base-checkbox class="custom-control-alternative">
                  <span class="text-muted">
                    I agree with the
                    <a href="#!">Privacy Policy</a>
                  </span>
                </base-checkbox>
              </div>
            </div>
            <div class="text-center">
              <base-button type="primary" class="my-4">Create account</base-button>
            </div>
          </form>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6">
          <a href="#" class="text-light">
            <small>Forgot password?</small>
          </a>
        </div>
        <div class="col-6 text-right">
          <router-link to="/login" class="text-light">
            <small>Login into your account</small>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "register",
  data() {
    return {
      model: {
        name: "",
        email: "",
        zipcode: "",
        company: "",
        password: "",
        PI_Number: "",
        provider: ""
      }
    };
  }
};
</script>
<style>

.provider-drop {
    width: 500px;
}

button.btn.dropdown-toggle.btn-secondary {
    margin-left: 25%;
}


</style>
