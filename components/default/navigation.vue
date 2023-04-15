<template>
  <nav class="hidden lg:flex flex-col gap-2 overflow-y-auto max-w-fit h-full">
    <NuxtLink v-for="item in items" :to="item.link"
      class="flex gap-4 rounded-full p-2 pr-4 opacity-50 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all">
      <Icon :name="item.icon" size="2em" class="min-w-[2rem]" />
      <span class="inline-flex items-center">{{ item.label }}</span>
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
const items = [
  { icon: 'solar:planet-bold', label: 'Journey Through the Solar System', link: '/' },
  { icon: 'solar:gamepad-bold', label: 'Playground', link: '/' }
]
</script>