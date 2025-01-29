<script setup lang="ts">
import {user} from "@/composables/auth";
import {ref} from "vue";
import router from "@/router";

const nameModel = ref(user.value.name);

const updateName = () => {
  user.value.name = nameModel;
  router.push("/")
}
</script>

<template>
  <div class="flex-column">
    <h2>Settings</h2>
    <form @submit.prevent="updateName" class="flex-column">
      <div class="form-input">
        <label for="username">Username</label>
        <input
            name="username"
            type="text"
            v-model="nameModel"
        >
      </div>
      <button type="submit" class="button">Save changes</button>
    </form>
  </div>
</template>

