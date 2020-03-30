<template>
  <footer class="footer  xl container flex flex-col justify-between text-gray mb-10">
    <div class="flex items-center">
      <img class="h-12 mr-1" src="../assets/logo-blue.svg" alt="Hyphen-Hacks logo">
      <h2 class="font-bold text-3xl">Hyphen-Hacks 2020</h2>
    </div>
    <div class="flex flex-row justify-around footerLinks" >
      <div class="w-1/3">
        <h4 class="font-bold">Mission</h4>
        <p>Hyphen-Hacks is an annual 24-hour hackathon aimed at high school students from around the Bay Area with diverse backgrounds and skill levels. We hope to create a space where all students are inspired to learn new skills while collaborating on new inventions.</p>
      </div>
      <div class="flex flex-col h-full">
        <h4 class="font-bold">Be a part of Hyphen-Hacks</h4>
        <router-link class="btn--dark mr-auto inline my-1" to="/apply">Apply</router-link>
        <router-link class="btn--dark mr-auto inline my-1" to="/volunteer">Volunteer</router-link>
        <router-link class="btn--dark mr-auto inline my-1" to="/mentor">Mentor</router-link>
      </div>
      <div class="flex flex-col justify-around h-full">
        <router-link to="/" class="dark">Home</router-link>
        <router-link to="/contact" class="dark">Contact</router-link>
        <a href="/#mission" class="dark">Mission</a>
        <router-link to="/faq" class="dark">FAQ</router-link>
      </div>


    </div>
    <div class="flex items-center justify-between">
      <a href="mailto:suport@hyphen-hacks.com" class="dark">suport@hyphen-hacks.com</a>
      <p>Website developed by <a target="_blank" class="dark font-bold" href="https://ronanfuruta.com">Ronan Furuta</a></p>
      <copy>Website released under APL-2.0 License</copy>
    </div>
  </footer>
</template>