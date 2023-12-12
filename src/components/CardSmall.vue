<script setup>
defineProps(["title", "content"]);
</script>

<template>
  <div class="w-[200px] h-[96px] bg-white p-4 mr-4">
    <h3 class="text-sm text-neutral-400 mb-2">{{ title }}</h3>
    <span class="text-2xl font-semibold">{{ content }}</span>
  </div>
</template>

<style scoped></style>
