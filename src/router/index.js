import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUp from "../views/SignUp.vue";
import Terms from "../views/Terms.vue";
import Privacy from "../views/Privacy.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/signUp",
        name: "signUp",
        component: SignUp,
    },
    {
        path: "/terms",
        name: "terms",
        component: Terms,
    },
    {
        path: "/privacy",
        name: "privacy",
        component: Privacy,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
