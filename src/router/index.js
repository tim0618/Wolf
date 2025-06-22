import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import Login from "../page/Login.vue";
import ChatRoom from "../page/ChatRoom.vue";
import Lobby from "../page/Lobby.vue";

const routes = [
  {
    path: "/",
    component: Login,
    meta: { hideLayout: true }, // 登入頁不使用 layout
  },
  {
    path: "/lobby",
    component: MainLayout,
    children: [
      {
        path: "",
        component: Lobby,
      },
    ],
  },
  {
    path: "/chat",
    component: MainLayout,
    children: [
      {
        path: "",
        component: ChatRoom,
      },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
