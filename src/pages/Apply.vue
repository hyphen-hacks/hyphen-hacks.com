<template>
  <div>
    <Nav></Nav>
    <div class="infoPage container xl mx-auto  md:p-10">
      <div class="w-full bg-primary h-1/2 p-5 sm:p-10">
        <div id="applyBanner">
          <h1 class="font-bold text-7xl sm:text-10xl small-spacing font-serif">Apply</h1>
        </div>
      </div>
      <div class="flex flex-col md:flex-row pt-10 items-center">
        <div class="md:w-1/2 p-5 md:p-0">
          <p class="faqText">Because Hyphen-Hacks is a free event, we must limit the number of people who get accepted
            into Hyphen-Hacks. Please complete our short application process to attend Hyphen-Hacks 2020.</p>
          <p class="faqText" v-if="!signups">Attendee applications are currently closed. Sign up for our mailing list to be notified
            when they open.</p>
          <MailingList v-if="!signups" refferer="applicant page"></MailingList>
          <a v-if="signups" class="btn mt-5">Start Application</a>
        </div>

        <div class="md:w-1/2 p-10">
          <img src="../assets/undraw_fill_forms_yltj.svg" alt="">
        </div>
      </div>

    </div>
    <Footer class="mt-10"></Footer>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Nav from '@/components/nav.vue'
  import Footer from '@/components/footer.vue'
  import MailingList from '@/components/mailinglist.vue'

  export default {
    metaInfo: {
      title: 'Apply',
      meta: [
        { name: 'description', content: 'Apply to attend Hyphen-Hacks the free 24 hour high school hackathon.' },
        { name: 'og:description', content: 'Apply to attend Hyphen-Hacks the free 24 hour high school hackathon.' }
      ]
    },
    name: 'Apply',
    components: {
      Nav,
      Footer,
      MailingList
    },
    data() {
      return {
        signups: false
      }
    }
  }
</script>
