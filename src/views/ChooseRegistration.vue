<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-header bg-transparent pb-5">
          <div class="text-muted text-center mt-2 mb-3">
            <div class="reg-message">
              <h1>I AM HERE TO</h1>
              <h1>DONATE</h1>
              <img src="img/brand/volunteer.png" />
            </div>
          </div>
        </div>
        <div class="card-body px-lg-5 py-lg-5">
          <div class="text-center text-muted mb-4">
             <base-button tag="a" outline type="info" size="lg" href="/donater-register" class="active" role="button" aria-pressed="true">Register</base-button>
          </div>
        </div>
      </div>
      <div class="row mt-3">
      
      </div>
    </div>
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-header bg-transparent pb-5">
          <div class="text-muted text-center mt-2 mb-3">
            <div class="reg-message">
              <h1>I AM A PROVIDER AND I NEED YOUR HELP</h1>
              <img src="img/brand/hospital.png" />
            </div>
          </div>
        </div>
        <div class="card-body px-lg-5 py-lg-5">
          <div class="text-center text-muted mb-4">
            <base-button tag="a" outline type="info" size="lg" href="/provider-register" class="active" role="button" aria-pressed="true">Register</base-button>
          </div>
        </div>
      </div>
      <div class="row mt-3">
  
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
        password: ""
      }
    };
  }
};
</script>
<style>
div.card-header.bg-transparent.pb-5 {
  height: 400px;
}

.bg-gradient-hand {
  background: rgb(252, 129, 135);
  background: linear-gradient(
    90deg,
    rgba(252, 129, 135, 1) 0%,
    rgba(251, 58, 148, 1) 100%
  );
}



div.reg-message {
  margin-top: 30%;
}
</style>
