import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainView from "../views/MainView.vue";
import ActivityView from "@/views/activity/ActivityView.vue";
import ActivityAlgorithmView from "@/views/activity/ActivityAlgorithmView.vue";
import ProjectView from "@/views/project/ProjectView.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
