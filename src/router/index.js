import Vue from "vue";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';



import Landing from '../pages/landing/landing'
import Home from '../components/Home/Home'
import AboutUs from '../components/AboutUs/AboutUs'
import InvestorRelations from '../components/InvestorRelations/InvestorRelations'
import ContactUs from '../components/ContactUs/ContactUs'
import Branches from '../components/Branches/Branches'
import Form from '../components/Form/Form'
import MedicalJournal from '../components/MedicalJournal/MedicalJournal'

import Error from '../components/Error/Error'
import NotFound from '../components/NotFound/NotFound'

// admin
import Admin from '../pages/Admin/Admin'
import adminBranches from '../components/Admin/Branches/Branches'
import AddBranch from '../components/Admin/AddBranch/AddBranch'
import Articles from '../components/Admin/Articles/Articles'
import AddArticles from '../components/Admin/Articles/AddArticles'
import JobsForSaudis from '../components/Admin/JobsForSaudis/JobsForSaudis'
import KeyPerformanceIndicators from '../components/Admin/KeyPerformanceIndicators/KeyPerformanceIndicators'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueRouter);
const routes = [
  {
    path: "/Error",
    name: "Error",
    component: Error,
  },
  {
    path: "/Not-found",
    name: "NotFound",
    component: NotFound,
  },
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
      },
      {
        path: "/contact-us",
        name: "ContactUs",
        component: ContactUs,
      },
      {
        path: "/branches",
        name: "Branches",
        component: Branches,
      },
      {
        path: "/form",
        name: "Form",
        component: Form,
      },
      {
        path: "/medical-journal",
        name: "MedicalJournal",
        component: MedicalJournal,
      }
    ]
  },

  // admin
  {
    path: "/admin/",
    name: "Admin",
    component: Admin,
    children: [
      {
        path: "/admin/branches",
        name: "adminBranches",
        component: adminBranches
      },
      {
        path: "/admin/add-branch",
        name: "AddBranch",
        component: AddBranch
      },
      {
        path: "/admin/articles",
        name: "Articles",
        component: Articles
      },
      {
        path: "/admin/articles/add-articles",
        name: "AddArticles",
        component: AddArticles
      },
      {
        path: "/admin/jobs-for-saudis",
        name: "JobsForSaudis",
        component: JobsForSaudis
      },
      {
        path: "/admin/key-performance-indicators",
        name: "KeyPerformanceIndicators",
        component: KeyPerformanceIndicators
      }
    ]
  }
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
