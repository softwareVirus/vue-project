import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import EnterScreen from "../components/EnterScreen";
import ProductScreen from "../components/ProductScreen"
import SellerScreen from "../components/SellerScreen"
import AboutUs from '../components/AboutUs'
import ContactUs from '../components/ContactUs'
import SignUp from '../components/SignUp'
const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: EnterScreen,
    },
    {
      path: "/products/:id",
      component: ProductScreen,
    },
    {   
      path: "/product-sellers/:id",
      component: SellerScreen
    },
    {   
      path: "/about-us",
      component: AboutUs
    },
    {   
      path: "/contact-us",
      component: ContactUs
    },
    {   
      path: "/sign-up",
      component: SignUp
    }
  ],
});

export default router;
