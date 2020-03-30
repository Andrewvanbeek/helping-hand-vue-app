<template>
  <div class="card shadow" :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0" :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">{{title}}</h3>
        </div>
        <div class="col text-right">
          <base-button type="primary" size="sm">See all</base-button>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table
        class="table align-items-center table-flush"
        :class="type === 'dark' ? 'table-dark': ''"
        :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
        tbody-classes="list"
        :data="tableData"
      >
        <template slot="columns">
          <th>Donater Name</th>
          <th>Supply Type</th>
          <th>Quantity</th>
          <th>Shipping Estimate</th>
        </template>

        <template slot-scope="{row}">
          <th scope="row">
            <div class="media align-items-center">
              <div class="media-body">
                <span class="name mb-0 text-sm">{{row.donatername}}</span>
              </div>
            </div>
          </th>
          <td>
            <badge class="badge-dot mr-4" :type="row.statusType">
              <i :class="`bg-${row.statusType}`"></i>
              <span class="status">{{row.supplies}}</span>
            </badge>
          </td>
          <td>
            <div class="d-flex align-items-center">
            <badge class="badge-dot mr-4" :type="row.statusType">
              <span class="status">{{row.quantity}}</span>
            </badge>
            </div>
          </td>
          <td>
           <div class="d-flex align-items-center">
            <badge class="badge-dot mr-4" :type="row.statusType">
              <span class="status">{{row.shipEstimate}}</span>
            </badge>
            </div>
          </td>
       
          <td class="text-right">
            <base-dropdown class="dropdown" position="right">
              <a
                slot="title"
                class="btn btn-sm btn-icon-only text-light"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-ellipsis-v"></i>
              </a>

              <template>
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </template>
            </base-dropdown>
          </td>
        </template>
      </base-table>
    </div>

    <div
      class="card-footer d-flex justify-content-end"
      :class="type === 'dark' ? 'bg-transparent': ''"
    >
      <base-pagination total="30"></base-pagination>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Auth from '@okta/okta-vue'

export default {
  name: "projects-table",
  props: {
    type: {
      type: String
    },
    title: String
  },
  async mounted() {
    console.log("TEST"); // I'm text inside the component.
    var component = this;
    var user = await this.$auth.getUser()
        var result = await axios.get("http://localhost:4000/providers/" + user.healthcare_provider_id + "/hands")
        console.log(result)
        component.tableData = result.data.hands
  },
  methods: {
    imageLoadError(row) {
      // console.log(row);
      // console.log("Image failed to load");
      var image = row.target;
      image.src = "img/brand/Helping-Hand.png";
    }
  },
  data() {
    return {
      tableData: []
    };
  }
};
</script>
<style>
</style>
