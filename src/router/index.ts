import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Todos/Home.vue";
import Todos from "@/views/Todos/Todos.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Todos",
      name: "todos.index",
     
      component: Todos,

    },
    /* {
      path: "/Todos",
      name: "todos.index",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/TodosView.vue"),
    }, */
  ],
});

export default router;
