<script setup lang="ts">
import {RouterView} from 'vue-router'
import Header from "@/components/Header.vue";
</script>

<template>
  <Header />
  <main class="container">
    <RouterView />
  </main>
</template>
