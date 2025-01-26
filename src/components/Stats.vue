<script setup lang="ts">
defineProps<{
  tasks: Task[]
}>()
</script>

<template>
  <div>
    <div>Hello, User!</div>
    <div>You have {{ tasks.length }} {{ tasks.length > 0 && tasks.length < 2 ? "task" : "tasks" }}</div>
    <div v-if="tasks.length">
      <RouterLink to="/tasks">View tasks</RouterLink>
    </div>
    <div v-else>
      <RouterLink to="/tasks/create">Add a new task</RouterLink>
    </div>
  </div>
</template>

<style scoped>

</style>
