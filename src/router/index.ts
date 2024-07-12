import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainView from "../views/MainView.vue";
import ActivityView from "@/views/activity/ActivityView.vue";
import ActivityAlgorithmView from "@/views/activity/ActivityAlgorithmView.vue";
import ProjectView from "@/views/project/ProjectView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import ProjectSSUradeView from "@/views/project/ProjectSSUradeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Main",
    component: MainView,
  },
  {
    path: "/activity",
    name: "Activity",
    component: ActivityView,
  },
  {
    path: "/activity/algorithm",
    name: "ActivityAlgorithm",
    component: ActivityAlgorithmView,
  },
  {
    path: "/project",
    name: "Project",
    component: ProjectView,
  },
  // {
  //   path: "/project/ssurade",
  //   name: "ProjectSSUrade",
  //   component: ProjectSSUradeView,
  // },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) return savedPosition;
    return {
      top: 0,
    };
  },
});

export default router;
