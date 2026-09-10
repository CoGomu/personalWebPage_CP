<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="h-screen flex flex-col bg-bg">
    <Navbar></Navbar>
    <div class="flex flex-grow items-center justify-center">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped></style>
