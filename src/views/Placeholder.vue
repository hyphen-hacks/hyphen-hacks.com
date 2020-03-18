<template>
  <div class="flex flex-col justify-between h-screen">
    <nav class="flex flex-row items-center p-5">
      <div class="flex flex-row items-center mr-auto">
        <img class="h-10 mr-2" src="../assets/logo.svg" alt="Hyphen-Hacks logo">
        <h1 class="font-bold text-2xl">Hyphen-Hacks 2020</h1>
      </div>


    </nav>

      <h1 class="twentyTwentyHeaderPlaceholder">2020</h1>
      <div class="z-50 p-10">
        <h1 class="text-10xl font-bold">Hyphen-Hacks</h1>
        <p class="font-semibold text-5xl">24 hour programming competition with learning opportunities for all</p>
      </div>

      <p class="font-semibold text-2xl z-50 p-10">October @ Lick-Wilmerding High School</p>
      <div class="flex justify-between items-end p-10">
        <div class="flex">
          <a href="mailto:team@hyphen-hacks.com" class="btn">Contact</a>
        </div>
        <form @submit.prevent>
          <label for="mailingList" class="text-sm text-semibold">Sign up for our mailing list</label>
          <div>
            <input id="mailingList" type="email" class=" input rounded-r-none" placeholder="Email">
            <button type="submit" class="btn  rounded-l-none">Sign Up</button>
          </div>

        </form>

      </div>
      <p class="text-center p-10">More information coming soon</p>

  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'Home',
    components: {
      HelloWorld
    }
  }
</script>
