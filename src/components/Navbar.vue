<template>
  <nav class="flex items-center justify-center px-6 py-4 bg-goldbeige text-white">
    
    <div class="flex gap-6">
      <router-link
        to="/"
        class="hover:text-gray-300 transition"
      >
        Home
      </router-link>

      <router-link
        to="/about"
        class="hover:text-gray-300 transition"
      >
        About
    </router-link>

      <router-link
        to="/contact"
        class="hover:text-gray-300 transition"
      >
        Contact Me
      </router-link>
    </div>
  </nav>
</template>