<template>
  <div>
    <Nav></Nav>
    <div class="infoPage container xl flex md:p-10">
      <div class="flex flex-row">
      <div class="w-1/2 pr-8">
        <h1 class="font-bold text-7xl text-primary">Mentor</h1>

        <p class="faqText">Our quality mentors is a crucial factor in what sets Hyphen-Hacks apart from other hackathons. As a mentor you will create meaningful connections with high school students interested in programing. You will travel from team to team assisting students with questions they may have about the process of software creation.</p>
        <p class="faqText">Mentors get access to all meals for free as well as complimentary swag. If you need service hours Hyphen-Hacks can sign off on your time commitment.</p>
        <p class="faqText">If you don’t have prior knowledge about programming or software creation, you can still help out by volunteering.</p>

        <div class="flex flex-row">
          <a class="btn mr-5" href="">Sign up to volunteer</a>
          <router-link class="btn--outline" to="/volunteer">Volunteer</router-link>
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
