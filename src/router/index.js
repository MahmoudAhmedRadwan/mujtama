import Vue from "vue";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';



import Landing from '../pages/landing/landing'
import Home from '../components/Home/Home'
import AboutUs from '../components/AboutUs/AboutUs'
import InvestorRelations from '../components/InvestorRelations/InvestorRelations'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/about-us",
        name: "AboutUs",
        component: AboutUs,
      },
      {
        path: "/investor-relations",
        name: "InvestorRelations",
        component: InvestorRelations,
      }
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((_, from, next) => {
  window.scrollTo(0, 0)
  next()
})

export default router;
