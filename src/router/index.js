import { createRouter, createWebHashHistory } from "vue-router";
import Feed from "../views/Feed.vue";

const routes = [
  {
    path: "/",
    name: "Feed",
    component: Feed
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/explore",
    name: "Explore",
    component: () => import("../views/Explore.vue")
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: () => import("../views/Notifications.vue")
  },
  {
    path: "/direct",
    name: "Direct",
    component: () => import("../views/Direct.vue")
  },
  {
    path: "/igtv",
    name: "Igtv",
    component: () => import("../views/Igtv.vue")
  },
  {
    path: "/stats",
    name: "Stats",
    component: () => import("../views/Stats.vue")
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/Settings.vue")
  },
  {
    path: "/logout",
    name: "Logout",
    component: () => import("../views/Logout.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
