<template>
  <div>
    <Nav></Nav>
    <div class="infoPage mx-auto container lg:p-10 flex pt-8 flex flex-col justify-center p-5">
      <div class="flex flex-col-reverse lg:flex-row lg:justify-between w-full">
        <div class="mx-auto">
          <h1 class="font-bold text-5xl sm:text-7xl  text-primary small-spacing font-serif">FAQ</h1>
          <h3 class="faqHeader">What is a Hackathon?</h3>
          <p class="faqText">A hackathon is an event that usually lasts for 24 hours but can go for as long as 3 days. During this confined period, engineers, computer scientists, and designers work together to build a project from scratch, often with very little sleep. The goal of a hackathon is not to build a polished product, but to hack something together and in the process make mistakes and learn new ways of solving problems. A hackathon does not have anything to do with ‘hacking’ in the sense of defeating the security of computers.</p>
          <h3 class="faqHeader">Who can participate?</h3>
          <p class="faqText">Anyone who is enrolled in a high school between the 9th and 12th grades may participate in Hyphen-Hacks.</p>
        </div>
        <div class="mx-auto lg:p-4 flex-col flex justify-center items-center">

          <g-image class="mx-auto" type="image/jpg" src="../assets/collchat.jpg" alt="four Hyphen-Hacks 2019 winners"></g-image>


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
      title: 'FAQ',
      meta: [
        { name: 'description', content: 'Frequently asked questions about Hyphen-Hacks and hackathons.' },
        { name: 'og:description', content: 'Frequently asked questions about Hyphen-Hacks and hackathons.' }
      ]
    },
    name: 'FAQ',
    components: {
      Nav,
      Footer
    }
  }
</script>
