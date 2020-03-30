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
                                <base-header class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- Card stats -->
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-6">
                                        <div class="card bg-secondary shadow border-0">
                                            <div class="card-header bg-transparent pb-5">
                                            <div class="text-muted text-center mt-2 mb-3">
                                                <div class="reg-message">
                                                <h4>Gloves</h4>
                                                <img style="width: 120px; height: 120px;" src="/img/brand/gloves.png" />
                                                </div>
                                            </div>
                                            </div>
                                            <div class="card-body px-lg-5 py-lg-5">
                                            <div class="text-center text-muted mb-4">
                                                <base-button
                                                v-on:click="openDonationModal('gloves')"
                                                outline
                                                type="info"
                                                size="lg"
                                                class="active"
                                                role="button"
                                                aria-pressed="true"
                                                >Donate</base-button>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-6">
                                        <div class="card bg-secondary shadow border-0">
                                            <div class="card-header bg-transparent pb-5">
                                            <div class="text-muted text-center mt-2 mb-3">
                                                <div class="reg-message">
                                                <h4>Masks</h4>
                                                <img style="width: 120px; height: 120px;" src="/img/brand/mask.png" />
                                                </div>
                                            </div>
                                            </div>
                                            <div class="card-body px-lg-5 py-lg-5">
                                            <div class="text-center text-muted mb-4">
                                                <base-button
                                                tag="a"
                                                v-on:click="openDonationModal('mask')"
                                                outline
                                                type="info"
                                                size="lg"
                                                class="active"
                                                role="button"
                                                aria-pressed="true"
                                                >Donate</base-button>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-6">
                                        <div class="card bg-secondary shadow border-0">
                                            <div class="card-header bg-transparent pb-5">
                                            <div class="text-muted text-center mt-2 mb-3">
                                                <div class="reg-message">
                                                <h4>Hand Santizer</h4>
                                                <img style="width: 120px; height: 120px;" src="/img/brand/hand-sanitizer.png" />
                                                </div>
                                            </div>
                                            </div>
                                            <div class="card-body px-lg-5 py-lg-5">
                                            <div class="text-center text-muted mb-4">
                                                <base-button
                                                v-on:click="openDonationModal('hand-sanitizer')"
                                                outline
                                                type="info"
                                                size="lg"
                                                class="active"
                                                role="button"
                                                aria-pressed="true"
                                                >Donate</base-button>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-6">
                                        <div class="card bg-secondary shadow border-0">
                                            <div class="card-header bg-transparent pb-5">
                                            <div class="text-muted text-center mt-2 mb-3">
                                                <div class="reg-message">
                                                <h4>Face Sheilds</h4>
                                                <img style="width: 120px; height: 120px;" src="/img/brand/face-sheild.png" />
                                                </div>
                                            </div>
                                            </div>
                                            <div class="card-body px-lg-5 py-lg-5">
                                            <div class="text-center text-muted mb-4">
                                                <base-button
                                                v-on:click="openDonationModal('face-sheild')"
                                                outline
                                                type="info"
                                                size="lg"
                                                class="active"
                                                role="button"
                                                aria-pressed="true"
                                                >Donate</base-button>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </base-header>
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

                                <pop-modal name="donations" width="80%" height="auto" :scrollable="true">
      <stats-card type="gradient-red" icon="ni ni-active-40" class="mb-4 mb-xl-0">
        <h1>Donate {{donationItem}}</h1>
        <template slot="footer">
          <span class="text-success mr-2">
            <img style="width: 120px; height: 120px;" :src="donationItemImage" />
          </span>
        </template>
      </stats-card>
      <div class="row justify-content-center">
        <div class="col-lg-10 col-md-10">
          <div class="card bg-secondary shadow border-0">
            <div class="card-body px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <h3>Fill Out Details</h3>
              </div>
              <form role="form">
                <base-input
                  class="input-group-alternative mb-3"
                  placeholder="Your Name"
                  addon-left-icon="ni ni-pin-3"
                  v-model="name"
                ></base-input>
                <v-select label="name" :options="states" v-model="state"></v-select>

                <h3>Quantity: {{sliders.quantity}}</h3>
                <base-slider v-model="sliders.quantity" :range="{min: 0, max: 100}"></base-slider>
                <br><br>
                <h3>Days Estimated To Ship: {{sliders.daysNeededToShip}}</h3>
                <base-slider v-model="sliders.daysNeededToShip" :range="{min: 0, max: 40}"></base-slider>
                <base-button
                  tag="a"
                  v-on:click="getMatchingProviders()"
                  outline
                  type="info"
                  size="lg"
                  class="active"
                  role="button"
                  aria-pressed="true"
                >Donate</base-button>
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
    </pop-modal>
    <pop-modal name="providerresult" width="80%" height="auto" :scrollable="true">
         <div class="card bg-secondary shadow border-0">
        <div class="card-header bg-transparent pb-5">
          <div class="text-muted text-center mt-2 mb-3">
            <div class="reg-message">
              <h1>{{providerToDonateTo.NAME}} needs {{donationItem}}</h1>
              <img :src="hospital.img" />
              <br>
              <br><h3>Their Address is {{providerToDonateTo.ADDRESS}}, {{providerToDonateTo.CITY}}, {{providerToDonateTo.STATE}}, {{providerToDonateTo.ZIP}}</h3>
            </div>
          </div>
        </div>
        <div class="card-body px-lg-5 py-lg-5">
          <div class="text-center text-muted mb-4">
            <base-button tag="a" outline type="info" size="lg" v-on:click="helpOnTheWay()" class="active" role="button" aria-pressed="true">Let them Know a helping hand is on the way?</base-button>
          </div>
        </div>
      </div>
    </pop-modal>
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
        var user = await this.$auth.getUser()
        console.log("http://localhost:4000/providers/" + user.healthcare_provider_id)
        var result = await axios.get("http://localhost:4000/providers/" + user.healthcare_provider_id)
        this.name = user.email + " at " + result.data.NAME
        this.state = result.data.STATE
        var id = window.location.href.split("hospitals/")[1]
        var result = await axios.get("http://localhost:4000/providers/" + id)
        this.hospital = result.data
    },
    methods: {
        imageLoadError(row) {
            var image = row.target;
            image.src = "/img/brand/Helping-Hand.png";
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
        },
        async openDonationModal(item) {
            console.log(item);
            var items = {"gloves": "gloves", "face-sheild": "face sheilds", "hand-sanitizer": "hand sanitizer", "mask": "masks"}
            this.donationItem = items[item]
            this.donationItemImage = "/img/brand/" + item + ".png";
            this.$modal.show("donations");
        },
        imageLoadError(row) {
            console.log(row);
            console.log("Image failed to load");
            var image = row.target;
            image.src = "img/brand/Helping-Hand.png";
        },
            onChange(event) {
            console.log(event);
            },
            selectState(state) {
            console.log(state);
            this.state = state.name;
            },
            methodToRunOnSelect(payload) {
            console.log(payload);
            this.state = payload.name;
            },
            async helpOnTheWay() {
                console.log(this.sliders)
                result = await axios.post("http://localhost:4000/providers-hands", {"supplies": this.donationItem, quantity: this.sliders.quantity, donatername: this.name, "shipEstimate": this.sliders.daysNeededToShip, "provider": this.providerToDonateTo})
            },
            async getMatchingProviders() {
            this.openResultModal(this.hospital)
            },
            async openResultModal(result){
                this.providerToDonateTo = result
                this.$modal.hide("donations")
                this.$modal.show("providerresult");
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
        },
         donationItem: "",
      donationItemImage: "",
      state: "Select State",
      city: "",
      name: "",
      zipcode: "",
       sliders: {
        quantity: 0,
        daysNeededToShip: 0
      },
       providerToDonateTo: "",
      tableData: [],
      states: [
        {
          name: "Alabama",
          label: "Alabama",
          abbreviation: "AL"
        },
        {
          name: "Alaska",
          label: "Alaska",
          abbreviation: "AK"
        },
        {
          name: "American Samoa",
          label: "American Samoa",
          abbreviation: "AS"
        },
        {
          name: "Arizona",
          label: "Arizona",
          abbreviation: "AZ"
        },
        {
          name: "Arkansas",
          label: "Arkansas",
          abbreviation: "AR"
        },
        {
          name: "California",
          label: "California",
          abbreviation: "CA"
        },
        {
          name: "Colorado",
          label: "Colorado",
          abbreviation: "CO"
        },
        {
          name: "Connecticut",
          label: "Connecticut",
          abbreviation: "CT"
        },
        {
          name: "Delaware",
          label: "Delaware",
          abbreviation: "DE"
        },
        {
          name: "District Of Columbia",
          label: "District Of Columbia",
          abbreviation: "DC"
        },
        {
          name: "Federated States Of Micronesia",
          label: "Federated States Of Micronesia",
          abbreviation: "FM"
        },
        {
          name: "Florida",
          label: "Florida",
          abbreviation: "FL"
        },
        {
          name: "Georgia",
          label: "Georgia",
          abbreviation: "GA"
        },
        {
          name: "Guam",
          label: "Guam",
          abbreviation: "GU"
        },
        {
          name: "Hawaii",
          label: "Hawaii",
          abbreviation: "HI"
        },
        {
          name: "Idaho",
          label: "Idaho",
          abbreviation: "ID"
        },
        {
          name: "Illinois",
          label: "Illinois",
          abbreviation: "IL"
        },
        {
          name: "Indiana",
          label: "Indiana",
          abbreviation: "IN"
        },
        {
          name: "Iowa",
          label: "Indiana",
          abbreviation: "IA"
        },
        {
          name: "Kansas",
          label: "Indiana",
          abbreviation: "KS"
        },
        {
          name: "Kentucky",
          label: "Indiana",
          abbreviation: "KY"
        },
        {
          name: "Louisiana",
          label: "Indiana",
          abbreviation: "LA"
        },
        {
          name: "Maine",
          label: "Indiana",
          abbreviation: "ME"
        },
        {
          name: "Marshall Islands",
          label: "Indiana",
          abbreviation: "MH"
        },
        {
          name: "Maryland",
          label: "Indiana",
          abbreviation: "MD"
        },
        {
          name: "Massachusetts",
          label: "Indiana",
          abbreviation: "MA"
        },
        {
          name: "Michigan",
          label: "Indiana",
          abbreviation: "MI"
        },
        {
          name: "Minnesota",
          label: "Indiana",
          abbreviation: "MN"
        },
        {
          name: "Mississippi",
          label: "Indiana",
          abbreviation: "MS"
        },
        {
          name: "Missouri",
          label: "Indiana",
          abbreviation: "MO"
        },
        {
          name: "Montana",
          label: "Indiana",
          abbreviation: "MT"
        },
        {
          name: "Nebraska",
          label: "Indiana",
          abbreviation: "NE"
        },
        {
          name: "Nevada",
          label: "Indiana",
          abbreviation: "NV"
        },
        {
          name: "New Hampshire",
          label: "Indiana",
          abbreviation: "NH"
        },
        {
          name: "New Jersey",
          label: "Indiana",
          abbreviation: "NJ"
        },
        {
          name: "New Mexico",
          label: "Indiana",
          abbreviation: "NM"
        },
        {
          name: "New York",
          label: "Indiana",
          abbreviation: "NY"
        },
        {
          name: "North Carolina",
          label: "Indiana",
          abbreviation: "NC"
        },
        {
          name: "North Dakota",
          label: "Indiana",
          abbreviation: "ND"
        },
        {
          name: "Northern Mariana Islands",
          label: "Indiana",
          abbreviation: "MP"
        },
        {
          name: "Ohio",
          abbreviation: "OH"
        },
        {
          name: "Oklahoma",
          abbreviation: "OK"
        },
        {
          name: "Oregon",
          abbreviation: "OR"
        },
        {
          name: "Palau",
          abbreviation: "PW"
        },
        {
          name: "Pennsylvania",
          abbreviation: "PA"
        },
        {
          name: "Puerto Rico",
          abbreviation: "PR"
        },
        {
          name: "Rhode Island",
          abbreviation: "RI"
        },
        {
          name: "South Carolina",
          abbreviation: "SC"
        },
        {
          name: "South Dakota",
          abbreviation: "SD"
        },
        {
          name: "Tennessee",
          abbreviation: "TN"
        },
        {
          name: "Texas",
          abbreviation: "TX"
        },
        {
          name: "Utah",
          abbreviation: "UT"
        },
        {
          name: "Vermont",
          abbreviation: "VT"
        },
        {
          name: "Virgin Islands",
          abbreviation: "VI"
        },
        {
          name: "Virginia",
          abbreviation: "VA"
        },
        {
          name: "Washington",
          abbreviation: "WA"
        },
        {
          name: "West Virginia",
          abbreviation: "WV"
        },
        {
          name: "Wisconsin",
          abbreviation: "WI"
        },
        {
          name: "Wyoming",
          abbreviation: "WY"
        }
      ]
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
