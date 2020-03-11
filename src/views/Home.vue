<template>
  <div class="home">
<header class="container xl  mx-auto flex flex-col justify-around home_header">
  <h1 class="twentyTwentyHeader">2020</h1>
  <div class="z-50">
    <h1 class="text-10xl font-bold">Hyphen-Hacks</h1>
    <p class="font-semibold text-5xl">24 hour programming competition with learning opportunities for all</p>
  </div>

  <p class="font-semibold text-2xl z-50">October 17th-18th 2020 @ Lick-Wilmerding High School</p>
  <div class="flex justify-between items-end">
  <div class="flex">
    <a href="" class="btn">Apply</a>
    <a href="" class="btn--outline mx-3">Volunteer</a>
  </div>
    <form @submit.prevent>
      <label for="mailingList" class="text-sm text-semibold">Sign up for our mailing list</label>
      <div>
        <input id="mailingList" type="email" class=" input rounded-r-none" placeholder="Email">
        <button type="submit" class="btn  rounded-l-none">Sign Up</button>
      </div>

    </form>
  </div>
</header>
    <section class="header_image_container bg-primary container xl mx-auto p-8 px-10">
      <img class="header_image" src="../assets/Ronan-3765.jpeg" alt="Hyphen-Hacks attendeees programming">

    </section>
    <section class="container xl mx-auto pt-8">
      <h2 class="font-bold text-8xl mt-3">Mission</h2>
      <p class="font-bold text-3xl">Hyphen-Hacks is an annual 24-hour hackathon aimed at high school students from around the Bay Area with diverse backgrounds and skill levels. We hope to create a space where all students are inspired to learn new skills while collaborating on new inventions.</p>
      <h2 class="font-bold text-8xl  mt-3  text-right">Learn</h2>
      <p class="font-bold text-3xl  text-right">Hyphen-Hacks is an annual 24-hour hackathon aimed at high school students from around the Bay Area with diverse backgrounds and skill levels. We hope to create a space where all students are inspired to learn new skills while collaborating on new inventions.</p>
      <img src="../assets/hh-team.jpg" class="my-10" alt="">
      <h2 class="font-bold text-8xl mt-3">Community</h2>
      <p class="font-bold text-3xl">We strive to foster a strong inclusive community. Whether this is your first time programming or your 10th hackathon, we want you to feel included and supported.</p>
      <h2 class="font-bold text-8xl  mt-3  text-right">Grow</h2>
      <p class="font-bold text-3xl  text-right">Hyphen-Hacks will stretch your skills and imagination, pushing you to achieve what you never dreamed to be possible. Our open, supportive atmosphere will provide a platform for you to create amazing products.</p>

    </section>
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
