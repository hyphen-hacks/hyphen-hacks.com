<template>
  <footer class="container w-auto  text-gray my-10 md:m-10  xl:mx-auto m-5  bg-primary p-5 pt-8">
    <div class="flex items-center">
      <img class="h-12 mr-3" src="../assets/logo-blue.svg" alt="Hyphen-Hacks logo">
      <h2 class="font-bold text-3xl">Hyphen-Hacks 2020</h2>
    </div>
    <div class="grid grid-cols-3 md:grid-cols-3 py-10 items-center justify-center gap-2">
      <div class="col-span-3 sm:col-span-1">
        <h4 class="font-bold">Mission</h4>
        <p>Hyphen-Hacks is an annual 24-hour hackathon aimed at high school students from around the Bay Area with diverse backgrounds and skill levels. We hope to create a space where all students are inspired to learn new skills while collaborating on new inventions.</p>
      </div>
      <div class="flex md:col-span-1 col-span-2">
        <div class="sm:mx-auto">
        <h4 class="font-bold">Be a part of Hyphen-Hacks</h4>
        <div class="flex-col flex flex-wrap">
          <router-link class="btn--dark mr-auto inline my-1" to="/apply">Apply</router-link>
          <router-link class="btn--dark mr-auto inline my-1" to="/volunteer">Volunteer</router-link>
          <router-link class="btn--dark mr-auto inline my-1" to="/mentor">Mentor</router-link>
        </div>
        </div>
      </div >
      <div class="flex-col flex justify-between text-right sm:items-center sm:text-center ">
        <router-link to="/" class="dark">Home</router-link>
        <router-link to="/contact" class="dark">Contact</router-link>
        <a href="/#mission" class="dark">Mission</a>
        <router-link to="/faq" class="dark">FAQ</router-link>
      </div>


    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 text-center gap-4 items-center justify-between">
      <a href="mailto:support@hyphen-hacks.com" class="dark">support@hyphen-hacks.com</a>
      <p>Website developed by <a target="_blank" class="dark font-bold" href="https://ronanfuruta.com">Ronan Furuta</a></p>
      <small>Website released under APL-2.0 License</small>
    </div>
  </footer>
</template>