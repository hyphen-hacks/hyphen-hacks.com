<template>
  <div>
    <Nav></Nav>
    <div class="infoPage mx-auto container lg:p-10 flex pt-8 flex flex-col justify-center p-5">
      <div class="flex flex-col-reverse lg:flex-row lg:justify-between w-full">
      <div class="mx-auto">
        <h1 class="font-bold text-5xl sm:text-7xl text-primary small-spacing font-serif">Volunteer</h1>

        <p class="faqText">Volunteers are a key part of Hyphen-Hacks. As a volunteer, you will assist the Hyphen-Hacks team in preparing meals, directing attendees, and monitoring spaces. Volunteering is a great way for you to support Hyphen-Hacks without any prior knowledge.</p>
        <p class="faqText">In addition, volunteers get access to all meals for free as well as complimentary swag. If you need service hours, the Hyphen-Hacks team can sign off on your time commitment.</p>
        <p class="faqText">Volunteers get access to all meals for free as well as complimentary swag. If you need
          service hours Hyphen-Hacks can sign off on your time commitment.</p>
        <p class="faqText" v-if="!signups">Volunteer applications are currently closed. Sign up for our mailing list to be notified when they open.</p>
        <MailingList v-if="!signups" refferer="volunteer page"></MailingList>
        <div v-if="signups" class="flex flex-row">
          <a class="btn mr-5" href="">Sign up to volunteer</a>
          <router-link to="/mentor" class="btn--outline">Mentor</router-link>
        </div>
      </div>
      <div class="mx-auto lg:p-4 flex-col flex justify-center items-center ">
        <picture>
          <source srcset="../assets/lick.webp" alt="Lick-Wilmerding campus" type="image/webp">
          <img src="../assets/lick.jpg" alt="Lick-Wilmerding campus" type="image/jpg">
        </picture>

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
    },
    data() {
      return {
       signups: this.$remoteConfig.getValue("volunteerSignUps") == "true"
      }
    }
  }
</script>
