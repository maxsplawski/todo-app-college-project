<script setup lang="ts">
import List from "@/components/List.vue";
import {user} from "@/composables/auth";
import {computed, ref} from "vue";
import router from "@/router";

const offset = ref(0)
const limit = ref(2)

const markTaskAsFinished = (id: number) =>  {
  const task = user.value.tasks
      .find(task => task.id === id)
  task.isFinished = true
}

const navigateToEditTaskView = (id: number) => {
  router.push(`/tasks/${id}/edit`)
}

const deleteTask = (id: number) => {
  user.value.tasks = user.value.tasks
      .filter(task => task.id !== id)
}

const paginatedTasks = computed(() => {
  return user.value.tasks
      .slice((offset.value * limit.value), ((offset.value + 1) * limit.value))
})

const hasNextPage = computed(() => {
  return ((offset.value + 1) * limit.value) < user.value.tasks.length
})
</script>

<template>
  <div class="flex-column">
    <h2>Tasks</h2>
    <RouterLink to="/tasks/create" class="button">Add a new task</RouterLink>
    <List
        :tasks="paginatedTasks"
        @finish="markTaskAsFinished"
        @edit="navigateToEditTaskView"
        @delete="deleteTask"
    />
    <div class="buttons">
      <button type="button" @click="offset--" :disabled="offset === 0" class="button">&lang;</button>
      <button type="button" @click="offset++" :disabled="!hasNextPage" class="button">&rang;</button>
    </div>
  </div>
</template>
