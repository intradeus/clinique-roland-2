import Vue from 'vue'
import routes from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faPhone, faFile, faMapMarked,faAngleRight, faInfoCircle, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueI18n from 'vue-i18n';
import {translation} from './translation';

library.add(faMapMarked, faEnvelope, faPhone, faFile, faStar, faAngleRight, faInfoCircle, faStarHalfAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueI18n);
export const i18n = new VueI18n({
  locale : 'fr',
  fallbackLocale : 'fr',
  messages :  translation
});

const app = new Vue({
  el: '#app',
  i18n,
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
