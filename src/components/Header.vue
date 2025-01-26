<script setup lang="ts">
import {RouterLink} from "vue-router";
</script>

<template>
  <header>
    <div>Task Management App</div>
    <nav>
      <ul>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/tasks">Tasks</RouterLink>
        <RouterLink to="/settings">Settings</RouterLink>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

</style>
