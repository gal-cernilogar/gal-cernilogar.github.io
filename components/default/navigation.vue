<template>
  <nav class="flex flex-col gap-2 overflow-y-auto pb-20 w-full max-w-full lg:max-w-fit h-full">
    <NuxtLink v-for="item in items" :to="item.link" class="flex gap-2 rounded-full pr-6 opacity-50 transition-all"
      :class="isMenuShowing ? 'hover:bg-neutral-300 dark:hover:bg-neutral-700' : ''">
      <Icon :name="item.icon" size="3em" class="rounded-full p-2 min-w-[3rem] opacity-75 transition-all"
        :class="isMenuShowing ? '' : 'hover:bg-neutral-300 dark:hover:bg-neutral-700'" />
      <span class="inline-flex items-center">{{ item.label }}</span>
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
const isMenuShowing = useState('isMenuShowing');

const items = [
  { icon: 'solar:planet-bold', label: 'Journey Through the Solar System', link: 'https://gal-cernilogar.github.io/journey-through-the-solar-system/' },
  { icon: 'solar:gamepad-bold', label: 'Playground', link: 'https://gal-cernilogar.github.io/playground/' }
]
</script>