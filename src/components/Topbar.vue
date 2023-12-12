<script setup></script>

<template>
  <div
    class="w-full h-[64px] p-2 bg-white flex row items-center justify-between"
  >
    <div class="flex items-center relative ml-2">
      <input
        type="text"
        placeholder="Search"
        class="h-[32px] min-w-[320px] px-4 bg-stone-100 border-none rounded focus:outline-none placeholder:text-sm placeholder:text-neutral-400 focus:ring-1 focus:ring-primary-accent"
      />
      <img
        src="../assets/icons/search.svg"
        alt="Search Icon"
        class="absolute right-4"
      />
    </div>
  </div>
</template>

<style scoped></style>
