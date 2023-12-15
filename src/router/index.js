import Vue from "vue";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


// main widget
import Landing from '../pages/landing/landing'
import Home from '../components/MainWidget/Home/Home'
import AboutUs from '../components/MainWidget/AboutUs/AboutUs'
import InvestorRelations from '../components/MainWidget/InvestorRelations/InvestorRelations'
import ContactUs from '../components/MainWidget/ContactUs/ContactUs'
import Branches from '../components/MainWidget/Branches/Branches'
import Form from '../components/MainWidget/Form/Form'
import MedicalJournal from '../components/MainWidget/MedicalJournal/MedicalJournal'

import Error from '../components/MainWidget/Error/Error'
import NotFound from '../components/MainWidget/NotFound/NotFound'

// admin
import Admin from '../pages/Admin/Admin'
import LogIn from '../components/Admin/LogIn/LogIn'
import adminBranches from '../components/Admin/Branches/Branches'
import AddBranch from '../components/Admin/AddBranch/AddBranch'
import ArticlesSections from '../components/Admin/ArticlesSections/ArticlesSections'
import AddArticlesSections from '../components/Admin/ArticlesSections/AddArticlesSections'
import ArticlesSubSections from '../components/Admin/ArticlesSections/ArticlesSubSections'
import AddArticlesSubSections from '../components/Admin/ArticlesSections/AddArticlesSubSections'
import Articles from '../components/Admin/Articles/Articles'
import AddArticles from '../components/Admin/Articles/AddArticles'
import JobsForSaudis from '../components/Admin/JobsForSaudis/JobsForSaudis'
import KeyPerformanceIndicators from '../components/Admin/KeyPerformanceIndicators/KeyPerformanceIndicators'
import ResultsAndReports from '../components/Admin/ResultsAndReports/ResultsAndReports'
import AddResultsAndReports from '../components/Admin/ResultsAndReports/AddResultsAndReports'
import EmploymentApplications from '../components/Admin/EmploymentApplications/EmploymentApplications'
import Main from '../components/Admin/Main/Main'

// Store Admin
import StoreAdmin from '../pages/StoreAdmin/StoreAdmin';
import Statistics from '../components/StoreAdmin/Statistics/Statistics';
import Products from '../components/StoreAdmin/Products/Products'
import ProductsCategories from '../components/StoreAdmin/ProductsCategories/ProductsCategories'
import AddCategory from '../components/StoreAdmin/ProductsCategories/AddCategory'
import SubCategory from '../components/StoreAdmin/SubCategory/SubCategory'
import AddSubCategory from '../components/StoreAdmin/SubCategory/AddSubCategory'
import AddProduct from '../components/StoreAdmin/Products/AddProduct'
import Users from '../components/StoreAdmin/Users/Users'
import AddUsers from '../components/StoreAdmin/Users/AddUsers'
import Cities from '../components/StoreAdmin/Cities/Cities'
import AddCity from '../components/StoreAdmin/Cities/AddCity'
import Requests from '../components/StoreAdmin/Requests/Requests'
import Prescriptions from '../components/StoreAdmin/Prescriptions/Prescriptions'
import PrescriptionsInsurance from '../components/StoreAdmin/Prescriptions/Prescriptions-insurance'

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
        path: "/admin/add-branch/:id",
        name: "AddBranch",
        component: AddBranch
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
        path: "/admin/articles-sections/add-articles-sections/:id",
        name: "AddArticlesSections",
        component: AddArticlesSections
      },
      {
        path: "/admin/articles-sections/add-articles-sections",
        name: "AddArticlesSections",
        component: AddArticlesSections
      },
      {
        path: "/admin/articles-sub-sections/:id",
        name: "ArticlesSubSections",
        component: ArticlesSubSections
      },
      {
        path: "/admin/articles-sub-sections/:id/add-articles-sub-sections",
        name: "AddArticlesSubSections",
        component: AddArticlesSubSections
      },
      {
        path: "/admin/articles-sub-sections/:id/add-articles-sub-sections/:subID",
        name: "AddArticlesSubSections",
        component: AddArticlesSubSections
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
        path: "/admin/articles/add-articles/:id",
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
  },

  {
    path: "/store-admin/",
    name: "StoreAdmin",
    component: StoreAdmin,
    children: [
      {
        path: "/store-admin/statistics",
        name: "Statistics",
        component: Statistics
      },
      {
        path: "/store-admin/categories",
        name: "ProductsCategories",
        component: ProductsCategories
      },
      {
        path: "/store-admin/categories/add-category",
        name: "AddCategory",
        component: AddCategory
      },
      {
        path: "/store-admin/categories/add-category/:id",
        name: "AddCategory",
        component: AddCategory
      },
      {
        path: "/store-admin/sub-category/:id",
        name: "SubCategory",
        component: SubCategory
      },
      {
        path: "/store-admin/sub-category/:id/add-sub-category",
        name: "AddSubCategory",
        component: AddSubCategory
      },
      {
        path: "/store-admin/sub-category/:id/add-sub-category/:subID",
        name: "AddSubCategory",
        component: AddSubCategory
      },
      {
        path: "/store-admin/products",
        name: "Products",
        component: Products
      },
      {
        path: "/store-admin/products/add-product",
        name: "AddProduct",
        component: AddProduct
      },
      {
        path: "/store-admin/products/add-product/:id",
        name: "AddProduct",
        component: AddProduct
      },
      {
        path: "/store-admin/users",
        name: "Users",
        component: Users
      },
      {
        path: "/store-admin/users/add-user",
        name: "AddUsers",
        component: AddUsers
      },
      {
        path: "/store-admin/users/add-user/:id",
        name: "AddUsers",
        component: AddUsers
      },
      {
        path: "/store-admin/cities",
        name: "Cities",
        component: Cities
      },
      {
        path: "/store-admin/cities/add-city",
        name: "AddCity",
        component: AddCity
      },
      {
        path: "/store-admin/requests",
        name: "Requests",
        component: Requests
      },
      {
        path: "/store-admin/prescriptions",
        name: "Prescriptions",
        component: Prescriptions
      },
      {
        path: "/store-admin/prescriptions-insurance",
        name: "Prescriptions-insurance",
        component: PrescriptionsInsurance
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
