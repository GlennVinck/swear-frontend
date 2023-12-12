<script setup>
import Sidebar from "../components/Sidebar.vue";
import Topbar from "../components/Topbar.vue";
</script>

<template>
  <div class="w-screen h-screen flex bg-stone-100">
    <Sidebar />
    <div class="w-full">
      <Topbar />
      <div>
        <h1>All Orders</h1>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
