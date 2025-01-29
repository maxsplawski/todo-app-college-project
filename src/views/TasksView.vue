<script setup lang="ts">
import List from "@/components/List.vue";
import {user} from "@/composables/auth";
import {computed, ref} from "vue";

const offset = ref(0)
const limit = ref(2)

const markTaskAsFinished = (id: number) =>  {
  console.log('hello')
  const task = user.value.tasks
      .find(task => task.id === id)
  task.isFinished = true
}

const deleteTask = (id: number) => {
  user.value.tasks = user.value.tasks
      .filter(task => task.id !== id)
}

const paginatedTasks = computed(() => {
  return user.value.tasks.slice((offset.value * limit.value), ((offset.value + 1) * limit.value))
})

const hasNextPage = computed(() => {
  return ((offset.value + 1) * limit.value) < user.value.tasks.length
})
</script>

<template>
  <div class="tasks">
    <RouterLink to="/tasks/create" class="button">Add a new task</RouterLink>
    <List
        :tasks="paginatedTasks"
        @finish="markTaskAsFinished"
        @delete="deleteTask"
    />
    <div class="buttons">
      <button type="button" @click="offset--" :disabled="offset === 0" class="button"><</button>
      <button type="button" @click="offset++" :disabled="!hasNextPage" class="button">></button>
    </div>
  </div>
</template>
