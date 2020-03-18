<template>
  <div>
    <Nav></Nav>
  <div class="home">
    <header class="container xl  mx-auto flex flex-col justify-around home_header">
      <h1 class="twentyTwentyHeader">2020</h1>
      <div class="z-50">
        <h1 class="text-10xl font-bold">Hyphen-Hacks</h1>
        <p class="font-semibold text-5xl">24 hour programming competition with learning opportunities for all</p>
      </div>

      <p class="font-semibold text-2xl z-50">October 17th-18th 2020 @ Lick-Wilmerding High School</p>
      <div class="flex justify-between items-end">
        <div class="flex">
          <a href="" class="btn">Apply</a>
          <a href="" class="btn--outline mx-3">Volunteer</a>
        </div>
        <form @submit.prevent>
          <label for="mailingList" class="text-sm text-semibold">Sign up for our mailing list</label>
          <div>
            <input id="mailingList" type="email" class=" input rounded-r-none" placeholder="Email">
            <button type="submit" class="btn  rounded-l-none">Sign Up</button>
          </div>

        </form>
      </div>
    </header>
    <section class="header_image_container bg-primary container xl mx-auto p-8 px-10">
      <img class="header_image" src="../assets/Ronan-3765.jpeg" alt="Hyphen-Hacks attendeees programming">

    </section>
    <section class="container xl mx-auto pt-8">
      <h2 class="feature_headline">Mission</h2>
      <p class="feature_text">Hyphen-Hacks is an annual 24-hour hackathon aimed at high school students from around the
        Bay Area with diverse backgrounds and skill levels. We hope to create a space where all students are inspired to
        learn new skills while collaborating on new inventions.</p>
      <h2 class="feature_headline text-right">Learn</h2>
      <p class="feature_text right">At Hyphen-Hacks you will get the opportunity to receive mentorship from
        industry professionals, take classes ranging from beggeiner topics to advanced tenicques, and meet like minded
        students from across the Bay Area.</p>
      <img src="../assets/hh-team.jpg" class="my-10" alt="">
      <h2 class="feature_headline">Community</h2>
      <p class="feature_text">We strive to foster a strong inclusive community. Whether this is your first time
        programming or your 10th hackathon, we want you to feel included and supported.</p>
      <h2 class="feature_headline text-right">Grow</h2>
      <p class="feature_text right">Hyphen-Hacks will stretch your skills and imagination, pushing you to achieve
        what you never dreamed to be possible. Our open, supportive atmosphere will provide a platform for you to create
        amazing products.</p>
      <h2 class="feature_headline">Open Format</h2>
      <p class="feature_text">Unlike many hackathons, Hyphen-Hacks has an open structure. You are free to work on your
        projects for the whole time, or you can choose to attend one of our many workshops.</p>
      <div class="bg-primary p-16 py-20 flex flex-row text-black font-semibold my-16">
        <div class="w-1/2">
          <h3 class="text-4xl">Food!</h3>
          <p class="text-xl">We will serve four meals starting with lunch on Saturday. Additionally we always have
            snacks available and a special midnight snack.</p>
        </div>
        <div class="w-1/2">
          <h3 class="text-4xl">Fun!</h3>
          <p class="text-xl">At Hyphen-Hacks we have tons of fun games including: laser tag, ping pong, and boardgames galore. Additionally we provide team building workshops to help foster  a sense of community</p>
        </div>
      </div>
      <h2 class="feature_headline">Prizes</h2>
      <p class="feature_text">This year we have over $10,000 in prizes as well as sponsored products such as Adobe XD licences.</p>
      <img src="../assets/2020attendees.jpeg" alt="">
      <h2 class="feature_headline text-center">Apply for free</h2>
      <div class="flex justify-center mt-3 mb-3">
        <a href="" class="btn mx-auto text-center">Apply</a>
      </div>
    </section>
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
