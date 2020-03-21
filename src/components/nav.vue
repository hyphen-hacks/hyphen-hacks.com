<template>
  <nav class="flex flex-row items-center bg-gray-lighter p-5">
    <router-link to="/" class="flex flex-row items-center mr-auto">
      <img class="h-10 mr-1" src="../assets/logo.svg" alt="Hyphen-Hacks logo">
      <h1 class="font-bold text-2xl">Hyphen-Hacks 2020</h1>
    </router-link>

    <a class="nav_link" href="">MISSION</a>
    <a class="nav_link"  href="">CONTACT</a>
    <a class="nav_link"  href="">FAQ</a>
    <router-link to="/volunteer" class="nav_link btn--outline" href="">Volunteer</router-link>
    <a class="nav_link btn--outline" href="">Mentor</a>
    <a class="nav_link btn" href="">Apply</a>

  </nav>
</template>