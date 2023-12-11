<script setup>
import { ref } from "vue";
</script>

<template>
  <div
    class="flex items-center justify-center min-h-screen drop-shadow-[0_0px_60px_rgba(0,0,0,0.5)]"
  >
    <div class="w-[600px] h-[400px]">
      <img src="../assets/herobanner.jpg" alt="herobanner" />
    </div>
    <div class="w-[400px] h-[400px] bg-white">
      <div class="flex flex-col items-start justify-between h-full p-6">
        <div>
          <img
            class="w-auto h-[18px]"
            src="../assets/swear-logo-black.webp"
            alt=""
          />
        </div>
        <div class="flex flex-col w-full">
          <span class="font-semibold">Email</span>
          <input
            class="w-full h-[40px] px-4 mt-2 mb-4 bg-neutral-100 placeholder:text-neutral-400 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-primary-accent"
            type="text"
            placeholder="Enter your username"
          />
          <span class="font-semibold">Password</span>
          <input
            class="w-full h-[40px] px-4 my-2 bg-neutral-100 placeholder:text-neutral-400 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-primary-accent"
            type="password"
            placeholder="Enter your password"
          />
          <router-link
            to="/passwordreset"
            class="text-right text-xs text-primary-accent"
            >Forgotten Password?</router-link
          >
        </div>
        <button class="w-full h-[40px] my-2 text-white bg-black">LOG IN</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
