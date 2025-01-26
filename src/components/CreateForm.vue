<script setup lang="ts">

const newTask = {
  id: 0,
  title: null,
  description: null,
  isFinished: false,
}
</script>

<template>
  <form @submit.prevent="$emit('create', newTask)">
    <label for="title">Title</label>
    <input
        name="title"
        type="text"
        v-model="newTask.title"
    >
    <label for="description">Description</label>
    <input
        name="description"
        type="text"
        v-model="newTask.description"
    >
    <button type="submit">Add</button>
  </form>
</template>
