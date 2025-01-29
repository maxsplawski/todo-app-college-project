<script setup lang="ts">
import {user} from "@/composables/auth";
import {useRouter} from "vue-router";

const router = useRouter()

const saveTask = (task: Task) => {
  task.id = user.value.tasks.length + 1
  user.value.tasks.push(task)
  router.push("/tasks")
}

const newTask = {
  id: 0,
  title: null,
  description: null,
  isFinished: false,
}
</script>

<template>
  <form @submit.prevent="saveTask(newTask)" class="create-form">
    <div class="form-input">
      <label for="title">Title</label>
      <input
          name="title"
          type="text"
          v-model="newTask.title"
      >
    </div>
    <div class="form-input">
      <label for="description">Description</label>
      <input
          name="description"
          type="text"
          v-model="newTask.description"
      >
    </div>
    <button type="submit" class="button" >Add task</button>
  </form>
</template>
