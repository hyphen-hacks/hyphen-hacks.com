<template>
  <div>
    <Nav></Nav>
    <div class="home">
      <header class="container xl mx-auto flex flex-col justify-around home_header md:p-10 p-5">
        <h1 class="twentyTwentyHeader">2020</h1>
        <div class="z-50">
          <h1 class="text-4xl md:text-7xl lg:text-10xl font-bold font-serif">Hyphen-Hacks</h1>
          <p
            class="font-semibold text-xl md:text-3xl lg:text-5xl"
          >24 hour programming competition with learning opportunities for all</p>
        </div>

        <p
          class="font-semibold text-base sm:text-2xl z-50"
        >February 13th &amp; 14th at Lick-Wilmerding High School</p>
        <div class="flex flex-col sm:flex-row justify-between items-end z-10">
          <div class="flex between w-full sm:w-auto">
            <g-link to="/apply" class="btn mr-auto sm:mx-0">Apply</g-link>
            <g-link to="/volunteer" class="btn--outline ml-auto sm:mx-3">Volunteer</g-link>
          </div>
          <MailingList refferer="home page" class="mt-5 w-full sm:w-auto z-10"></MailingList>
        </div>
      </header>
      <section class="header_image_container bg-primary container xl mx-auto p-5 sm:px-10">
        <g-image
          class="header_image"
          src="../assets/Ronan-3765.jpg"
          alt="Hyphen-Hacks attendeees programming"
          type="image/jpg"
        ></g-image>
      </section>
      <section class="container xl mx-auto pt-8 p-5 md:p-10">
        <h2 id="mission" class="feature_headline">Mission</h2>
        <p class="feature_text">
          Hyphen-Hacks is an annual 24-hour hackathon aimed at high school students from around the
          Bay Area with diverse backgrounds and skill levels. We hope to create a space where all students are inspired to
          learn new skills while collaborating on new inventions.
        </p>
        <h2 class="feature_headline text-right">Learn</h2>
        <p
          class="feature_text right"
        >At Hyphen-Hacks, you will get the opportunity to receive mentorship from industry professionals, take classes ranging from beginner topics to advanced techniques, and meet like-minded students from around the Bay Area.</p>

        <g-image
          src="../assets/hh-team.jpg"
          class="my-10"
          alt="2019 Hyphen-Hacks team"
          type="image/jpg"
        ></g-image>

        <h2 class="feature_headline">Community</h2>
        <p
          class="feature_text"
        >We strive to foster a strong, inclusive community. Whether this is your first time programming or your tenth hackathon, we want you to feel included and supported.</p>
        <h2 class="feature_headline text-right">Grow</h2>
        <p class="feature_text right">
          Hyphen-Hacks will stretch your skills and imagination, pushing you to achieve
          what you never dreamed to be possible. Our open, supportive atmosphere will provide a platform for you to create
          amazing products.
        </p>
        <h2 class="feature_headline">Open Format</h2>
        <p class="feature_text">
          Unlike many hackathons, Hyphen-Hacks has an open structure. You are free to work on your
          projects for the whole time, or you can choose to attend one of our many workshops.
        </p>
        <div
          class="bg-primary p-5 sm:p-16 p-7 sm:py-20 flex flex-col sm:flex-row text-black font-semibold my-10 sm:my-16"
        >
          <div class="sm:mr-16">
            <h3 class="text-4xl font-serif small-spacing">Food!</h3>
            <p
              class="text-base"
            >We will serve four meals, starting with lunch on Saturday. Of course, we always have snacks available, including a special midnight snack!</p>
          </div>
          <div class="sm:ml-16 mt-5 sm:mt-0">
            <h3 class="text-4xl font-serif small-spacing">Fun!</h3>
            <p
              class="text-base"
            >At Hyphen-Hacks, we have tons of fun activities, including laser tag, ping pong, and board games. We also provide team building workshops to help foster a sense of community.</p>
          </div>
        </div>
        <h2 class="feature_headline">Prizes</h2>
        <p
          class="feature_text"
        >Projects will be judged by, and receive feedback from, an array of industry professionals. This year's prizes are still being determined.</p>

        <g-image src="../assets/2020attendees.jpg" type="image/jpg" alt="2019 Hyphen-Hacks winners"></g-image>

        <section class="my-5">
          <h2 class="feature_headline text-center">Apply for free!</h2>
          <div class="flex justify-center mt-3 mb-3">
            <router-link to="/apply" class="btn mx-auto text-center">Apply</router-link>
          </div>
        </section>
      </section>
    </div>
    <Footer class="mt-10"></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/nav.vue";
import Footer from "@/components/footer.vue";
import MailingList from "@/components/mailinglist.vue";

export default {
  name: "Home",
  metaInfo: {
    title: "Hyphen-Hacks | 24 hour hackathon for high school students",
    meta: [
      {
        name: "description",
        content:
          "Hyphen-Hacks is a 24 hour hackathon for High School Students interested in programming with of all levels of experience"
      },
      {
        name: "og:description",
        content:
          "Hyphen-Hacks is a 24 hour hackathon for High School Students interested in programming with of all levels of experience"
      }
    ]
  },
  components: {
    Nav,
    Footer,
    MailingList
  }
};
</script>
