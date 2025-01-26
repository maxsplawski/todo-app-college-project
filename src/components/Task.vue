<script setup lang="ts">
defineProps<{
  task: Task
}>()
</script>

<template>
  <div>
    <div>Title: {{ task.title }}</div>
    <div>Description: {{ task.description }}</div>
    <div>Status: {{ task.isFinished ? "FINISHED" : "IN PROGRESS" }}</div>
    <button :disabled="task.isFinished" @click="$emit('finish', task.id)">Finish task</button>
    <button @click="$emit('delete', task.id)">Delete</button>
  </div>
</template>
