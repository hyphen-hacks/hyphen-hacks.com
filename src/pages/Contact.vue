<template>
  <div>
    <Nav></Nav>
    <div class="infoPage mx-auto container lg:p-10 flex pt-8 flex flex-col justify-center p-5">
      <div class="flex flex-col-reverse lg:flex-row lg:justify-between w-full">
      <div class="mx-auto md:pr-8 faqText sm:w-2/3">
        <h1 class="font-bold text-5xl sm:text-7xl  text-primary small-spacing font-serif">Contact</h1>
        <p>We are located at Lick-Wilmerding High School: 755 Ocean Ave San Francisco, CA 94112</p>
        <br>
        <p>We welcome your input! For general inquiries please email <a href="mailto:support@hyphen-hacks.com">support@hyphen-hacks.com</a></p>
        <br>
        <p>Interested in sponsoring us? Please email us at <a href="mailto:finance@hyphen-hacks.com">finance@hyphen-hacks.com</a></p>

      </div>
      <div class="mx-auto sm:w-1/3 flex-col flex justify-center items-center">
        <img src="../assets/undraw_contact_us_15o2.svg" alt="">
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
    metaInfo: {
      title: 'Contact',
      meta: [
        { name: 'description', content: 'Contact Hyphen-Hacks' },
        { name: 'og:description', content: 'Contact Hyphen-Hacks' }
      ]
    },
    name: 'Home',
    components: {
      Nav,
      Footer
    }
  }
</script>
