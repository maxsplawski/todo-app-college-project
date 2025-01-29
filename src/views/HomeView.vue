<script setup lang="ts">
import {user} from "@/composables/auth";
</script>

<template>
  <div class="flex-column">
    <h2>Hello, {{ user.name }}!</h2>
    <div>You have {{ user.tasks.length }} {{ user.tasks.length > 0 && user.tasks.length < 2 ? "task" : "tasks" }}</div>
    <template v-if="user.tasks.length">
      <RouterLink to="/tasks" class="button">View tasks</RouterLink>
    </template>
    <template v-else class="button">
      <RouterLink to="/tasks/create" class="button">Add a new task</RouterLink>
    </template>
  </div>
</template>
