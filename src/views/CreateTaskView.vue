<script setup lang="ts">
import CreateForm from "@/components/CreateForm.vue";
import {user} from "@/composables/auth";
import {useRouter} from "vue-router";

const router = useRouter()

const saveTask = (task: Task) => {
  task.id = user.value.tasks.length + 1
  user.value.tasks.push(task)
  router.push("/tasks")
}
</script>

<template>
  <CreateForm
      @create="saveTask"
  />
</template>
