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
import LogIn from '../components/Admin/LogIn/LogIn'
import adminBranches from '../components/Admin/Branches/Branches'
import AddBranch from '../components/Admin/AddBranch/AddBranch'
import ArticlesSections from '../components/Admin/ArticlesSections/ArticlesSections'
import AddArticlesSections from '../components/Admin/ArticlesSections/AddArticlesSections'
import ArticlesSubSections from '../components/Admin/ArticlesSections/ArticlesSubSections'
import Articles from '../components/Admin/Articles/Articles'
import AddArticles from '../components/Admin/Articles/AddArticles'
import JobsForSaudis from '../components/Admin/JobsForSaudis/JobsForSaudis'
import KeyPerformanceIndicators from '../components/Admin/KeyPerformanceIndicators/KeyPerformanceIndicators'
import ResultsAndReports from '../components/Admin/ResultsAndReports/ResultsAndReports'
import AddResultsAndReports from '../components/Admin/ResultsAndReports/AddResultsAndReports'
import EmploymentApplications from '../components/Admin/EmploymentApplications/EmploymentApplications'
import Main from '../components/Admin/Main/Main'

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
  {
    path: "/login",
    name: "LogIn",
    component: LogIn
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
        path: "/admin/articles-sections",
        name: "ArticlesSections",
        component: ArticlesSections
      },
      {
        path: "/admin/articles-sections/add-articles-sections",
        name: "AddArticlesSections",
        component: AddArticlesSections
      },
      {
        path: "/admin/articles-sub-sections",
        name: "ArticlesSubSections",
        component: ArticlesSubSections
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
      },
      {
        path: "/admin/results-and-reports",
        name: "ResultsAndReports",
        component: ResultsAndReports
      },
      {
        path: "/admin/results-and-reports/add-results-and-reports",
        name: "AddResultsAndReports",
        component: AddResultsAndReports
      },
      {
        path: "/admin/employment-applications",
        name: "EmploymentApplications",
        component: EmploymentApplications
      },
      {
        path: "/admin/main",
        name: "Main",
        component: Main
      },
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
