
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Reservation from './pages/Reservation.vue'
import Contact from './pages/Contact.vue'
import News from './pages/News.vue'
import Annulation from './pages/Annulation.vue'
import Tutorial from './pages/Tutorial.vue'
import P404 from './pages/404.vue'

const routes = [
  {
      path: '/',
      name: 'Home',
      component: Home
  },
  {
      path: '/about',
      name: 'About',
      component: About
  },
  {
    path: '/reservation',
    name: 'Reservation',
    component: Reservation
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/news/:id',
    name: 'News',
    component: News
  },
  {
    path: '/annulation',
    name: 'Annulation',
    component: Annulation
  },
  {
    path: '/tutorial',
    name: 'Tutorial',
    component: Tutorial
  },
  { 
    path: "*",
    name: '404 not found',
    component: P404
  }
];

export default routes;