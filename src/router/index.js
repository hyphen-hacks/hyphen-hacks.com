import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Placeholder from '../views/Placeholder.vue'
import Volunteer from '../views/Volunteer.vue'
import FAQ from '../views/FAQ.vue'
import Mentor from '../views/Mentor.vue'
import Apply from '../views/Apply.vue'
import Contact from '../views/Contact.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Hyphen-Hacks | 24 hour hackathon for high school students',
      metaTags: [
        {
          name: 'description',
          content: 'Hyphen-Hacks is a 24 hour hackathon for High School Students interested in programming with of all levels of experience'
        },
        {
          property: 'og:description',
          content: 'Hyphen-Hacks is a 24 hour hackathon for High School Students interested in programming with of all levels of experience'
        }
      ]
    }
  },
  {
    path: '/volunteer',
    name: 'Volunteer',
    component: Volunteer,
    meta: {
      title: 'Hyphen-Hacks | Volunteer',
      metaTags: [
        {
          name: 'description',
          content: 'Volunteers are a key part of Hyphen-Hacks. As a volunteer you will assist the Hyphen-Hacks team in preparing meals, directing attendees, and monitoring spaces. Volunteering is a great way for you to support Hyphen-Hacks with out any prior knowledge.'
        },
        {
          property: 'og:description',
          content: 'Volunteers are a key part of Hyphen-Hacks. As a volunteer you will assist the Hyphen-Hacks team in preparing meals, directing attendees, and monitoring spaces. Volunteering is a great way for you to support Hyphen-Hacks with out any prior knowledge.'
        }
      ]
    }
  },
  {
    path: '/mentor',
    name: 'Mentor',
    component: Mentor,
    meta: {
      title: 'Hyphen-Hacks | Mentor',
      metaTags: [
        {
          name: 'description',
          content: 'Our quality mentors is a crucial factor in what sets Hyphen-Hacks apart from other hackathons. As a mentor you will create meaningful connections with high school students interested in programing. You will travel from team to team assisting students with questions they may have about the process of software creation.'
        },
        {
          property: 'og:description',
          content: 'Our quality mentors is a crucial factor in what sets Hyphen-Hacks apart from other hackathons. As a mentor you will create meaningful connections with high school students interested in programing. You will travel from team to team assisting students with questions they may have about the process of software creation.'
        }
      ]
    }
  },
  {
    path: '/faq',
    name: 'Faq',
    component: FAQ,
    meta: {
      title: 'Hyphen-Hacks | FAQ',
      metaTags: [
        {
          name: 'description',
          content: 'Frequently asked questions about Hyphen-Hacks and hackathons.'
        },
        {
          property: 'og:description',
          content: 'Frequently asked questions about Hyphen-Hacks and hackathons.'
        }
      ]
    }
  },
  {
    path: '/apply',
    name: 'Apply',
    component: Apply,
    meta: {
      title: 'Hyphen-Hacks | Apply',
      metaTags: [
        {
          name: 'description',
          content: 'Apply to attend Hyphen-Hacks the free 24 hour high school hackathon.'
        },
        {
          property: 'og:description',
          content: 'Apply to attend Hyphen-Hacks the free 24 hour high school hackathon.'
        }
      ]
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Hyphen-Hacks | Contact',
      metaTags: [
        {
          name: 'description',
          content: 'Contact Hyphen-Hacks'
        },
        {
          property: 'og:description',
          content: 'Contact Hyphen-Hacks'
        }
      ]
    }
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
})

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});
export default router
