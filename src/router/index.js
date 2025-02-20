import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/archive",
    name: "archive",
    component: () => import("../views/Article.vue")
  },
  {
    path: "*",
    name: "404",
    component: () => import("../views/ErrorScreen.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
