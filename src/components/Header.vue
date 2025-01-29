<script setup lang="ts">
import {RouterLink} from "vue-router";
</script>

<template>
  <header>
    <h1>Task Management App</h1>
    <nav>
      <ul>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/tasks">Tasks</RouterLink>
        <RouterLink to="/settings">Settings</RouterLink>
      </ul>
    </nav>
  </header>
</template>
