<script setup lang="ts">
import Task from "@/components/Task.vue";

defineProps<{
  tasks: Task[]
}>()
</script>

<template>
  <ul v-for="task in tasks" :key="task.id">
    <li>
      <Task
          :task="task"
          @finish="(id: number) => $emit('finish', id)"
          @delete="(id: number) => $emit('delete', id)"
      />
    </li>
  </ul>
</template>
