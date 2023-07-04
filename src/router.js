import { createRouter, createWebHashHistory } from "vue-router";

// Import views
import HomeView from "./views/HomeView.vue";
import UploadFiles from "./views/UploadFiles.vue";
import ResultView from "./views/ResultView.vue";
import ResultStreamView from "./views/ResultStreamView.vue";
import StreamView from "./views/StreamView.vue";

// Define routes
const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/upload", name: "upload", component: UploadFiles },
  { path: "/results", name: "results", component: ResultView },
  {
    path: "/results_stream",
    name: "resultsStream",
    component: ResultStreamView,
  },
  {
    path: "/stream",
    name: "stream",
    component: StreamView,
  },
];

// Create router
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
