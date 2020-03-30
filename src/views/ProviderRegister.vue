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
              placeholder="First Name"
              addon-left-icon="ni ni-hat-3"
              v-model="model.firstName"
            ></base-input>

             <base-input
              class="input-group-alternative mb-3"
              placeholder="Last Name"
              addon-left-icon="ni ni-hat-3"
              v-model="model.lastName"
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
              v-model="model.zipCode"
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

           <v-select label="NAME" :options="providers" v-model="model.provider"></v-select>

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
              <base-button v-on:click="register()" type="primary" class="my-4">Create account</base-button>
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
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import axios from "axios";

export default {
  name: "register",
  components: {
    vSelect
  },
  mounted(){
    var component = this;
    axios
      .get(
        "https://services1.arcgis.com/Hp6G80Pky0om7QvQ/arcgis/rest/services/Hospitals_1/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"
      )
      .then(function(response) {
        // handle success
        var hospitalData = [];
        var i;
        for (i = 0; i < 200; i++) {
          var hospital = response.data.features[i].attributes;
          hospital["img"] = "https://logo.clearbit.com/" + hospital.WEBSITE;
          hospitalData.push(hospital);
        }
        component.providers = hospitalData;
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });

  },
  methods: {
      async register(){
          var result = axios.post("http://localhost:4000/register", this.model)
          window.location.href = "http://localhost:8080"
      }
  },
  data() {
    return {
    providers: "",
      model: {
        firstName: "",
        lastName: "",
        email: "",
        zipCode: "",
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
