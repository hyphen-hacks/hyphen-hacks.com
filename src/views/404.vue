<template>
  <div>
    <Nav></Nav>
    <div class="infoPage mx-auto container lg:p-10 flex pt-8 flex flex-col justify-center p-5">

        <div class="mx-auto text-center">
          <h1 class="font-bold text-7xl sm:text-10xl text-primary small-spacing font-serif">404</h1>

          <p class="faqText">Uh oh, looks like you wandered upon a broke link.</p>


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
        signups: this.$remoteConfig.getValue("mentorSignUps") == "true"
      }
    }
  }
</script>
