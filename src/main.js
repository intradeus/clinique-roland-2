import Vue from 'vue'
import routes from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faPhone, faFile, faMapMarked,faAngleRight, faInfoCircle, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueI18n from 'vue-i18n';
import {translation} from './translation';
import VueRouter from 'vue-router';
import App from './App.vue';

library.add(faMapMarked, faEnvelope, faPhone, faFile, faStar, faAngleRight, faInfoCircle, faStarHalfAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueI18n);
Vue.use(VueRouter);

// Configure i18n
export const i18n = new VueI18n({
  locale : 'fr',
  fallbackLocale : 'fr',
  messages :  translation
});

// Configure router
const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

new Vue({
  el: '#app',
  i18n,
  render: h => h(App),
  router
});