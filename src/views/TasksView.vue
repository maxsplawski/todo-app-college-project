<script setup lang="ts">
import List from "@/components/List.vue";
import {user} from "@/composables/auth";
import {computed, ref} from "vue";

const offset = ref(0)
const limit = ref(2)

const markTaskAsFinished = (id: number) =>  {
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
  <main>
    <List
        :tasks="paginatedTasks"
        @finish="markTaskAsFinished"
        @delete="deleteTask"
    />
    <button :disabled="offset === 0" @click="offset--"><</button>
    <button :disabled="!hasNextPage" @click="offset++">></button>
  </main>
</template>
