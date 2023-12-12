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
    <div class="flex flex-row gap-4 items-center justify-center mr-4">
      <img
        src="../assets/profilepic.jpg"
        alt="profile picture"
        class="w-[32px] h-[32px] rounded-full"
      />
      <div class="flex flex-col">
        <span class="text-sm font-semibold">Joris Hens</span>
        <span class="text-xs text-neutral-400">Admin</span>
      </div>
      <img
        src="../assets/caret-down-thin.svg"
        alt="arrow down"
        class="w-[24px] h-[24px]"
      />
    </div>
  </div>
</template>

<style scoped></style>
