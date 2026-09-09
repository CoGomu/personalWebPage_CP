<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="h-screen flex flex-col">
    <Navbar></Navbar>
    <div class="flex flex-grow">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped></style>
