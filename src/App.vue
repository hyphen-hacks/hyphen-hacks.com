<template>
  <div id="app">

    <router-view/>
  </div>
</template>
<script>
  export  default {
    name: "app",
    created() {
      this.$remoteConfig.fetchAndActivate()
      //console.log(this.$remoteConfig.getValue("volunteerSignUps"))
    }
  }
</script>

