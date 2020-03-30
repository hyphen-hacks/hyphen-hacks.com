<template>
  <div>
    <Nav></Nav>
    <div class="infoPage container xl">
      <div class="w-full bg-primary h-1/2 p-10">
        <div id="applyBanner">
          <h1 class="font-bold text-10xl">Apply</h1>
        </div>
      </div>
      <div class="flex pt-10 items-center">
        <div class="w-1/2 ">
          <p class="faqText">Because Hyphen-Hacks is a free event, we must limit the number of people who get accepted into Hyphen-Hacks. Please complete our short application process to attend Hyphen-Hacks 2020.</p>
          <a class="btn mt-5">Start Application</a>
        </div>
        <div class="w-1/2 p-10">
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
  export default {
    name: 'Home',
    components: {
      Nav,
      Footer
    }
  }
</script>
