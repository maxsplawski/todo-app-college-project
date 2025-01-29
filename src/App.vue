<script setup lang="ts">
import {RouterView} from 'vue-router'
import Header from "@/components/Header.vue";
import {user} from "./composables/auth";
</script>

<template>
  <Header />

  <main class="container">
    <RouterView />
  </main>

  {{ user }}

</template>
