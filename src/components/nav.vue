<template>
  <nav class="flex flex-row items-center bg-gray-lighter p-5 flex-wrap">
    <router-link to="/" class="flex flex-row items-center mr-auto no-underline w-full sm:w-auto">
      <img class="h-10 mr-1" src="../assets/logo.svg" alt="Hyphen-Hacks logo">
      <h1 class="font-bold text-2xl no-underline text-white">Hyphen-Hacks 2020</h1>
    </router-link>

    <a class="nav_link" href="/#mission">MISSION</a>
    <router-link to="/contact" class="nav_link" >CONTACT</router-link>
    <router-link to="/faq" class="nav_link" >FAQ</router-link>
    <router-link to="/volunteer" class="nav_link btn--outline">Volunteer</router-link>
    <router-link class="nav_link btn--outline" to="/mentor">Mentor</router-link>
    <router-link class="nav_link btn" to="/apply">Apply</router-link>

  </nav>
</template>