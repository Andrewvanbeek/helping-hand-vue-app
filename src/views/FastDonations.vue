<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- Card stats -->
      <div class="row">
        <div class="col-xl-3 col-lg-6">
          <div class="card bg-secondary shadow border-0">
            <div class="card-header bg-transparent pb-5">
              <div class="text-muted text-center mt-2 mb-3">
                <div class="reg-message">
                  <h4>Gloves</h4>
                  <img style="width: 120px; height: 120px;" src="img/brand/gloves.png" />
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
                  <img style="width: 120px; height: 120px;" src="img/brand/mask.png" />
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
                  <img style="width: 120px; height: 120px;" src="img/brand/hand-sanitizer.png" />
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
                  <img style="width: 120px; height: 120px;" src="img/brand/face-sheild.png" />
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

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col">
          <projects-table title="Hospitals That Need A Helping Hand"></projects-table>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col">
          <projects-table type="dark" title="Dark Table"></projects-table>
        </div>
      </div>
    </div>
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
                <base-input
                  class="input-group-alternative mb-3"
                  placeholder="Your City"
                  addon-left-icon="ni ni-pin-3"
                  v-model="city"
                ></base-input>

                <base-input
                  class="input-group-alternative mb-3"
                  placeholder="Your Zip Code"
                  addon-left-icon="ni ni-pin-3"
                  v-model="zipcode"
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
              <h1>{{providerToDonateTo.NAME}} is close to you and needs {{donationItem}}</h1>
              <img src="img/brand/hospital.png" />
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
  </div>
</template>
<script>
import ProjectsTable from "./Tables/HospitalsTable";
import axios from "axios";
import dropdown from "vue-dropdowns";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
  name: "hospitals",
  components: {
    ProjectsTable,
    vSelect
  },
  data() {
    return {
      object: {
        name: "Object Name"
      },
      donationItem: "",
      donationItemImage: "",
      state: "Select State",
      city: "",
      name: "",
      zipcode: "",
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
      ],
      model: {
        name: "",
        email: "",
        password: ""
      },
      providerToDonateTo: "",
      tableData: [],
      sliders: {
        quantity: 0,
        daysNeededToShip: 0,
        donationItem: "gloves"
      }
    };
  },
  methods: {
    async openDonationModal(item) {
      console.log(item);
      var items = {"gloves": "gloves", "face-sheild": "face sheilds", "hand-sanitizer": "hand sanitizer", "mask": "masks"}
      this.donationItem = items[item]
      this.donationItemImage = "img/brand/" + item + ".png";
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
        var component = this
        var component = this
        var result = await axios.get("http://localhost:4000/providers?ZIP=" + component.zipcode)
        console.log(result)
        if(!result.data.providers) {
            result = await axios.get("http://localhost:4000/providers?CITY=" + component.city)
        }
        console.log(result)
        if(!result.data.providers) {
            result = await axios.get("http://localhost:4000/providers?STATE=" + component.state.abbreviation)
        }
        console.log(result)
        if(result.data.providers){
            component.openResultModal(result.data.providers)
        }
    },
    async openResultModal(results){
        var result = results[0]
        this.providerToDonateTo = result
        this.$modal.hide("donations")
        this.$modal.show("providerresult");
    }
  },
  mounted() {
    console.log("TEST"); // I'm text inside the component.
    axios
      .get(
        "https://services1.arcgis.com/Hp6G80Pky0om7QvQ/arcgis/rest/services/Hospitals_1/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"
      )
      .then(function(response) {
        // handle success
        console.log(response.data.features[0]);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }
};
</script>
<style>
.bg-gradient-hand {
  background: rgb(252, 129, 135);
  background: linear-gradient(
    90deg,
    rgba(252, 129, 135, 1) 0%,
    rgba(251, 58, 148, 1) 100%
  );
}

#dropdown-states {
  overflow-y: scroll;
}
</style>
