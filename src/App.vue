<template>
  <div id="app">
  <div class="banner">
    <p> We are monitoring the COVID-19 outbreak and considering several options to provide the best Hyphen-Hacks experience possible. Keep checking here and sign up for our mailing list to stay informed about our plans.</p>
  </div>
    <router-view/>
  </div>
</template>
<script>
  export  default {
    name: "app",
    created() {
     // this.$remoteConfig.fetchAndActivate()
      //console.log(this.$remoteConfig.getValue("volunteerSignUps"))
    }
  }
</script>

