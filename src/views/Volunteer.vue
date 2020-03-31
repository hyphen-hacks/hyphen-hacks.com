<template>
  <div>
    <Nav></Nav>
    <div class="infoPage container xl flex md:p-10">
      <div class="flex flex-row">
      <div class="w-1/2 pr-8">
        <h1 class="font-bold text-7xl text-primary">Volunteer</h1>

        <p class="faqText">Volunteers are a key part of Hyphen-Hacks. As a volunteer you will assist the Hyphen-Hacks
          team in preparing meals, directing attendees, and monitoring spaces. Volunteering is a great way for you to
          support Hyphen-Hacks with out any prior knowledge.</p>
        <p class="faqText">Volunteers get access to all meals for free as well as complimentary swag. If you need
          service hours Hyphen-Hacks can sign off on your time commitment.</p>
        <p class="faqText">Volunteers get access to all meals for free as well as complimentary swag. If you need
          service hours Hyphen-Hacks can sign off on your time commitment.</p>

        <div class="flex flex-row">
          <a class="btn mr-5" href="">Sign up to volunteer</a>
          <router-link to="/mentor" class="btn--outline">Mentor</router-link>
        </div>
      </div>
      <div class="w-1/2">
        <img src="../assets/Ronan-3765.jpeg" alt="">
      </div>
    </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Nav from '@/components/nav.vue'
  import Footer from '@/components/footer.vue'
  export default {
    name: 'Home',
    components: {
      Nav,
      Footer
    }
  }
</script>
