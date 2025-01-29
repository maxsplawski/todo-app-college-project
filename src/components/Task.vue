<script setup lang="ts">
defineProps<{
  task: Task
}>()
</script>

<template>
  <div class="task-container">
    <div class="task-name">Title: {{ task.title }}</div>
    <div>Description: {{ task.description }}</div>
    <div>Status: {{ task.isFinished ? "FINISHED" : "IN PROGRESS" }}</div>
    <div class="buttons">
      <button @click="$emit('finish', task.id)" :disabled="task.isFinished" class="button">Finish task</button>
      <button @click="$emit('delete', task.id)" class="button-danger">Delete</button>
    </div>
  </div>
</template>
