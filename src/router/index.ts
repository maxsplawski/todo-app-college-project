import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TasksView from "@/views/TasksView.vue";
import CreateTaskView from "@/views/CreateTaskView.vue";
import SettingsView from "@/views/SettingsView.vue";
import EditTaskView from "@/views/EditTaskView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: TasksView,
    },
    {
      path: '/tasks/create',
      name: 'createTask',
      component: CreateTaskView,
    },
    {
      path: "/tasks/:id/edit",
      name: "editTask",
      component: EditTaskView,
      props: true,
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue'),
    },
  ],
})

export default router
