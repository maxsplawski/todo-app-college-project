<script setup lang="ts">
import {user} from "@/composables/auth";
import {ref} from "vue";

const nameModel = ref(user.value.name);
</script>

<template>
  <form @submit.prevent="user.name = nameModel" class="create-form">
    <div class="form-input">
      <label for="title">Username</label>
      <input
          name="title"
          type="text"
          v-model="nameModel"
      >
    </div>
    <button class="button" type="submit">Save changes</button>
  </form>
</template>

