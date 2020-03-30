<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="min-height: 600px; background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
            <!-- Mask -->
            <span class="mask bg-gradient-hand opacity-8"></span>
            <!-- Header container -->
            <div class="container-fluid d-flex align-items-center">
                <div class="row">
                       <div class="card bg-secondary shadow border-0">
                                    
                                        <div class="text-muted text-center mt-2 mb-3">
                                            <div class="reg-message">
                                            <img :src="hospital.img" @error="imageLoadError" style="width=150px height=150px" />
                                            </div>
                                        </div>
                                      
                                       
                                    </div>
                    <div class="col-lg-7 col-md-10">
                        <h1 class="display-2 text-white">{{hospital.NAME}}</h1>
                        <p class="text-white mt-0 mb-5">Manage the mailing Address and supplies status of your Hospital here</p>
                    </div>
                </div>
            </div>
        </base-header>



                <div class="col-xl-12 order-xl-1">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">My account</h3>
                                </div>
                                <div class="col-4 text-right">
                                    <a href="#!" class="btn btn-sm btn-primary">Settings</a>
                                </div>
                            </div>
                        </div>
                        <template>
                            <form @submit.prevent>
                                <hr class="my-4" />
                                <!-- Description -->
                                <h6 class="heading-small text-muted mb-4">{{hospital.NAME}}</h6>
                                <div class="pl-lg-4">
                                      <div class="row">
                                        <div class="col-md-12">
                                            <base-input alternative=""
                                                        label="Address"
                                                        placeholder="Home Address"
                                                        input-classes="form-control-alternative"
                                                        v-model="hospital.ADDRESS"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="City"
                                                        placeholder="City"
                                                        input-classes="form-control-alternative"
                                                        v-model="hospital.CITY"
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Postal code"
                                                        placeholder="Postal code"
                                                        input-classes="form-control-alternative"
                                                        v-model="hospital.ZIP"
                                            />
                                        </div>
                                    </div>
                                </div>
                                      <hr class="my-4" />
                                <!-- Description -->
                                <h6 class="heading-small text-muted mb-4">Supplies</h6>
                                <div class="pl-lg-4">
                                     <div class="row">
                                        <div class="col-lg-12">
                                            <h3>Current Mask Supply: {{hospital.masks}}%</h3>
                                             <base-slider v-model="hospital.masks" :range="{min: 0, max: 100}"></base-slider>
                                        </div>
                                    </div>
                                    <br>
                                       <div class="row">
                                        <div class="col-lg-12">
                                            <h3>Current Santizer Supply: {{hospital.santizer}}%</h3>
                                             <base-slider v-model="hospital.santizer" :range="{min: 0, max: 100}"></base-slider>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <h3>Current Glove Supply: {{hospital.gloves}}%</h3>
                                             <base-slider v-model="hospital.gloves" :range="{min: 0, max: 100}"></base-slider>
                                        </div>
                                    </div>
                                </div>
                                <base-button v-on:click="submitChanges()" type="danger">Submit</base-button>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Auth from '@okta/okta-vue'
import axios from "axios";
  export default {
    name: 'user-profile',
    async mounted() {
        var id = window.location.href.split("hospitals/")[1]
        var result = await axios.get("http://localhost:4000/providers/" + id)
        this.hospital = result.data
    },
    methods: {
        imageLoadError(row) {
            var image = row.target;
            image.src = "img/brand/Helping-Hand.png";
        },
        async submitChanges() {
            this.model = await this.$auth.getUser()
            console.log(this.model)
            let config = {
            headers: 
                {
                    "Authorization": "Bearer " + await this.$auth.getAccessToken()
                }
            }
            // axios.defaults.headers.common['Authorization'] = `Bearer ${await this.$auth.getAccessToken()}`
            console.log("http://localhost:4000/providers/" + this.model.healthcare_provider_id)
            var result = await axios.post("http://localhost:4000/providers/" + this.model.healthcare_provider_id, this.hospital, config)
        }
    },
    data() {
      return {
        hospital: {
            NAME: '',
            ADDRESS: '',
            ZIP: '',
            STATE: '',
            CITY: '',
            gloves: '',
            masks: '',
            santizer: ''
        },
        model: {
          username: '',
          email: '',
          hospitalTitle: '',
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          country: '',
          zipCode: '',
          about: '',
        }
      }
    },
  };
</script>
<style>
.bg-gradient-hand {
  background: rgb(252,129,135);
background: linear-gradient(90deg, rgba(252,129,135,1) 0%, rgba(251,58,148,1) 100%);
}

#dropdown-states {
    overflow-y: scroll;
}

div.reg-message img {
    width: 200px;
    height: 200px;
}



</style>
