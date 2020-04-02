<template>
  <div>
    <Nav></Nav>
    <div class="infoPage mx-auto container lg:p-10 flex pt-8 flex flex-col justify-center p-5">
      <div class="flex flex-col-reverse lg:flex-row lg:justify-between w-full">
      <div class="mx-auto">
        <h1 class="font-bold text-5xl sm:text-7xl text-primary">Mentor</h1>

        <p class="faqText">Our quality mentors is a crucial factor in what sets Hyphen-Hacks apart from other hackathons. As a mentor you will create meaningful connections with high school students interested in programing. You will travel from team to team assisting students with questions they may have about the process of software creation.</p>
        <p class="faqText">Mentors get access to all meals for free as well as complimentary swag. If you need service hours Hyphen-Hacks can sign off on your time commitment.</p>
        <p class="faqText">If you don’t have prior knowledge about programming or software creation, you can still help out by volunteering.</p>
        <p class="faqText">Mentor applications are currently closed. Sign up for our mailing list to be notified when they open.</p>
        <MailingList refferer="mentor page" class="w-full"></MailingList>
        <div v-if="false" class="flex flex-row">
          <a class="btn mr-5" href="">Sign up to mentor</a>
          <router-link class="btn--outline" to="/volunteer">Volunteer</router-link>
        </div>
      </div>
      <div class="mx-auto lg:p-4 flex-col flex justify-center items-center">
        <img class="mx-auto" src="../assets/mentors.jpg" alt="">
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
  import MailingList from '@/components/mailinglist.vue'
  export default {
    name: 'Home',
    components: {
      Nav,
      Footer,
      MailingList
    }
  }
</script>
