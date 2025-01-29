<script setup lang="ts">
import {ref} from "vue";
import {user} from "@/composables/auth";
import router from "@/router";

const props = defineProps<{
  id: string
}>()

const task = user.value.tasks.find(task => task.id === +props.id);

const titleModel = ref(task?.title)
const descriptionModel = ref(task?.description)

const updateTask = (task: Task) => {
  user.value.tasks = user.value.tasks.map(task => {
    if (task.id !== +props.id) return task;
    return {
      ...task,
      title: titleModel,
      description: descriptionModel
    }
  })
  router.push("/tasks")
}
</script>

<template>
  <div class="flex-column">
    <h2>Edit {{ task.title }}</h2>
    <form @submit.prevent="updateTask(task)" class="flex-column">
      <div class="form-input">
        <label for="title">Title</label>
        <input
            name="title"
            type="text"
            v-model="titleModel"
        >
      </div>
      <div class="form-input">
        <label for="description">Description</label>
        <input
            name="description"
            type="text"
            v-model="descriptionModel"
        >
      </div>
      <button type="submit" class="button">Save changes</button>
    </form>
  </div>
</template>
