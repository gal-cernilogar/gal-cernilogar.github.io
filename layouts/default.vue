<template>
  <div id="default-layout" class="antialiased text-base text-black dark:text-white">
    <DefaultMenu />
    <main id="default-page"
      class="relative lg:mt-0 min-h-[calc(100vh-4rem)] lg:min-h-screen shadow-eqlg bg-white dark:bg-neutral-900 transition-all"
      :class="isMenuShowing ? 'lg:ml-96 mt-96' : 'lg:ml-16 mt-16'">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const isMenuShowing = useState('isMenuShowing', () => false);
</script>
