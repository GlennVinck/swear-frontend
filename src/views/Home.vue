<script setup>
import Sidebar from "../components/Sidebar.vue";
import Topbar from "../components/Topbar.vue";
</script>

<template>
  <div class="w-screen h-screen flex bg-neutral-200">
    <Sidebar />
    <div>
      <Topbar />
      <div>
        <h1>Home</h1>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
