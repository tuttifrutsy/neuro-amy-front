import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Services from "@/views/Services.vue";
import About from "@/views/About";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/services",
      name: "services",
      component: Services
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
