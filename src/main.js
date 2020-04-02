import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/performance'
import 'firebase/remote-config'
import './assets/tailwind.scss'
Vue.config.productionTip = false
const firebaseConfig = {
  apiKey: "AIzaSyCvP2O35KnfzOghBF6Ou3bQcD6xCkmeLb0",
  authDomain: "hyphen-hacks-2020.firebaseapp.com",
  databaseURL: "https://hyphen-hacks-2020.firebaseio.com",
  projectId: "hyphen-hacks-2020",
  storageBucket: "hyphen-hacks-2020.appspot.com",
  messagingSenderId: "288103005258",
  appId: "1:288103005258:web:85cec0af8842f6384c3ab3",
  measurementId: "G-EEMXH8HGVL"
};
firebase.initializeApp(firebaseConfig)
Vue.prototype.$perf = firebase.performance();
Vue.prototype.$firebase = firebase
Vue.prototype.$analytics = firebase.analytics();
Vue.prototype.$remoteConfig = firebase.remoteConfig();
Vue.prototype.$remoteConfig.settings = {
  minimumFetchIntervalMillis: 43200000,
};
Vue.prototype.$remoteConfig.fetchAndActivate()
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
