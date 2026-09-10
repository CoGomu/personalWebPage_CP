<template>
  <nav class="bg-surface border-b border-border sticky top-0 z-50">
    <div class="flex items-center justify-center px-6 py-4">
      <div class="flex gap-8">
        <router-link
          to="/"
          class="text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-[-13px] after:left-0 after:h-[2px] after:bg-accent after:transition-all after:duration-200 after:content-[''] hover:text-accent"
          :class="$route.path === '/' ? 'text-accent after:w-full' : 'text-secondary after:w-0 hover:after:w-full'"
        >
          Home
        </router-link>
        <router-link
          to="/about"
          class="text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-[-13px] after:left-0 after:h-[2px] after:bg-accent after:transition-all after:duration-200 after:content-[''] hover:text-accent"
          :class="$route.path === '/about' ? 'text-accent after:w-full' : 'text-secondary after:w-0 hover:after:w-full'"
        >
          About
        </router-link>
        <router-link
          to="/services"
          class="text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-[-13px] after:left-0 after:h-[2px] after:bg-accent after:transition-all after:duration-200 after:content-[''] hover:text-accent"
          :class="$route.path === '/services' ? 'text-accent after:w-full' : 'text-secondary after:w-0 hover:after:w-full'"
        >
          Services
        </router-link>
        <router-link
          to="/blog"
          class="text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-[-13px] after:left-0 after:h-[2px] after:bg-accent after:transition-all after:duration-200 after:content-[''] hover:text-accent"
          :class="$route.path === '/blog' ? 'text-accent after:w-full' : 'text-secondary after:w-0 hover:after:w-full'"
        >
          Blog
        </router-link>
        <router-link
          to="/contact"
          class="text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-[-13px] after:left-0 after:h-[2px] after:bg-accent after:transition-all after:duration-200 after:content-[''] hover:text-accent"
          :class="$route.path === '/contact' ? 'text-accent after:w-full' : 'text-secondary after:w-0 hover:after:w-full'"
        >
          Contact
        </router-link>
      </div>
    </div>
  </nav>
</template>
