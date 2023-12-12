<script setup>
import { defineProps } from "vue";

const props = defineProps(["title", "content"]);

function titleColor() {
  if (props.title === "Pending") {
    return "text-amber-500";
  } else if (props.title === "In Progress") {
    return "text-sky-400";
  } else if (props.title === "Delivered") {
    return "text-green-400";
  } else if (props.title === "Canceled") {
    return "text-red-500";
  } else {
    return "text-neutral-400";
  }
}
</script>

<template>
  <div class="w-[200px] h-[96px] bg-white p-4 mr-4 rounded">
    <h3 :class="titleColor() + ' text-sm mb-2'">{{ title }}</h3>
    <span class="text-2xl font-semibold">{{ content }}</span>
  </div>
</template>

<style scoped></style>
