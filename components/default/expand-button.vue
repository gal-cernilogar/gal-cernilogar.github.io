<template>
  <button @click="toggleMenu"
    class="flex w-fit h-fit ml-auto lg:ml-0 lg:mt-auto p-2 rounded-full opacity-50 hover:bg-neutral-300 dark:hover:bg-neutral-700">
    <Icon name="fa6-solid:chevron-up" size="2em" class="transition-all"
      :class="isMenuShowing ? 'lg:-rotate-90' : 'rotate-180 lg:rotate-90'" />
  </button>
</template>

<script setup lang="ts">
const isMenuShowing = useState('isMenuShowing');
function toggleMenu() {
  isMenuShowing.value = !isMenuShowing.value;
}
</script>
