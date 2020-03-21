<template>
  <div>
    <Nav></Nav>
    <div class="infoPage container xl flex">
      <div class="w-1/2">
        <h1 class="font-bold text-10xl text-primary">FAQ</h1>

      </div>
      <div class="w-1/2">
        <img src="../assets/Ronan-3765.jpeg" alt="">
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
