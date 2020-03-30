<template>
  <div>
    <Nav></Nav>
    <div class="infoPage container xl flex">
      <div class="w-2/3 pr-8 faqText">
        <h1 class="font-bold text-7xl text-primary">Contact</h1>
        <p>We are located at Lick-Wilmerding High School: 755 Ocean Ave San Francisco, CA 94112</p>
        <p>We welcome your input! For general inquiries please email <a href="mailto:suport@hyphen-hacks.com">suport@hyphen-hacks.com</a></p>
        <p>Interested in sponsoring us? please email <a href="mailto:finance@hyphen-hacks.com">finance@hyphen-hacks.com</a></p>

      </div>
      <div class="w-1/3">
        <img src="../assets/undraw_contact_us_15o2.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Nav from '@/components/nav.vue'

  export default {
    name: 'Home',
    components: {
      Nav
    }
  }
</script>
