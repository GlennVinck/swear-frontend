<script setup></script>

<template>
  <div class="min-w-[240px] h-screen bg-white border-r-2 border-neutral-200">
    <div class="flex flex-col items-center justify-start h-full p-6">
      <div>
        <img
          class="w-auto h-[23px]"
          src="../assets/swear-logo-black.webp"
          alt=""
        />
      </div>
      <div>
        <router-link
          to="/"
          class="flex items-center justify-start w-full h-[40px] my-2 text-sm text-neutral-500 hover:text-primary-accent"
          >Home</router-link
        >
        <router-link
          to="/orders"
          class="flex items-center justify-start w-full h-[40px] my-2 text-sm text-neutral-500 hover:text-primary-accent"
          >All Orders</router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
