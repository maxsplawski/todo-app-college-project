<script setup lang="ts">
import Stats from "@/components/Stats.vue";
import {user} from "@/composables/auth";
</script>

<template>
  <main>
    <Stats
        :tasks="user.tasks"
    />
  </main>
</template>
