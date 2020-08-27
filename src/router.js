import Vue from "vue";
import Router from "vue-router";
import Login from "./components/login.vue";
import Home from "./components/home.vue";
import Overview from "./components/home-page/overview.vue";
import Charge from "./components/home-page/charge.vue";
import Student from "./components/home-page/student.vue";
import TeacherManage from "./components/home-page/teacherManage.vue";
import ViewContent from "./components/home-page/overview/viewContent.vue";
import FaceGet from "./components/home-page/charge/faceGet.vue";
import SendBill from "./components/home-page/charge/sendBill.vue";
Vue.use(Router);

const router = new Router({
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: Login },
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "/overview",
          component: Overview,
          children: [{ path: "/viewcontent", component: ViewContent }]
        },
        {
          path: "/charge",
          component: Charge,
          children: [
            { path: "/faceget", component: FaceGet },
            { path: "/sendbill", component: SendBill }
          ]
        },
        { path: "/student", component: Student },
        { path: "/teacherManage", component: TeacherManage }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login") return next();
  const tokenStr = window.sessionStorage.getItem("token");
  if (!tokenStr) return next("/login");
  next();
});

export default router;
