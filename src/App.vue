<template>
  <div id="app">
    <nav class="flex flex-row items-center bg-gray-lighter p-5">
      <div class="flex flex-row items-center mr-auto">
        <img class="h-10 mr-1" src="./assets/logo.svg" alt="Hyphen-Hacks logo">
        <h1 class="font-bold text-2xl">Hyphen-Hacks 2020</h1>
      </div>

      <a class="nav_link" href="">MISSION</a>
      <a class="nav_link"  href="">CONTACT</a>
      <a class="nav_link"  href="">FAQ</a>
      <a class="nav_link btn--outline" href="">Volunteer</a>
      <a class="nav_link btn--outline" href="">Mentor</a>
      <a class="nav_link btn" href="">Apply</a>

    </nav>
    <router-view/>
  </div>
</template>

