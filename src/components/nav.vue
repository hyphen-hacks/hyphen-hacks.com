<template>
  <nav class="flex flex-row items-center bg-gray-lighter p-5 flex-wrap">
    <g-link to="/" class="flex flex-row items-center mr-auto no-underline w-auto">
      <img class="h-8 sm:h-10 mr-3" src="../assets/logo.svg" alt="Hyphen-Hacks logo">
      <h1 class="font-bold text-1xl sm:text-2xl no-underline text-white ">Hyphen-Hacks 2020</h1>
    </g-link>
    <button class=" show-sm" @click="open = !open" aria-label="Show navigation menu"><i v-if="!open" class="fas fa-bars"></i> <i v-if="open"
                                                                                                 class="fas fa-times"></i>
    </button>
    <a class="nav_link hide-sm" href="/#mission">MISSION</a>
    <g-link to="/contact" class="nav_link hide-sm">CONTACT</g-link>
    <g-link to="/faq" class="nav_link hide-sm">FAQ</g-link>
    <g-link to="/volunteer" class="nav_link btn--outline hide-sm">Volunteer</g-link>
    <g-link class="nav_link btn--outline hide-sm" to="/mentor">Mentor</g-link>
    <g-link class="nav_link btn hide-sm" to="/apply">Apply</g-link>

    <div v-if="open" class="md:hiden flex-col flex pt-5 w-full">

      <a class="nav_link" href="/#mission">MISSION</a>
      <g-link to="/contact" class="nav_link">CONTACT</g-link>
      <g-link to="/faq" class="nav_link">FAQ</g-link>
      <g-link to="/volunteer" class="nav_link btn--outline max-w-xl mx-auto">Volunteer</g-link>
      <g-link class="nav_link btn--outline max-w-xl mx-auto" to="/mentor">Mentor</g-link>
      <g-link class="nav_link btn max-w-xl mx-auto" to="/apply">Apply</g-link>


    </div>
  </nav>
</template>
<script>
  export default {
    name: "Nav",
    data() {
      return {
        open: false
      }
    },
    computed: {
      navLink() {
      //  return this.$remoteConfig.getValue("loginLink")? this.$remoteConfig.getValue("loginLink") : "https://my.hyphen-hacks.com"
      },
      showLogin() {
      //  return this.$remoteConfig.getValue("showLogin") == "true"
      }
    }
  }
</script>