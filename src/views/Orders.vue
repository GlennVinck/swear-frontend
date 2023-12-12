<script setup>
import Sidebar from "../components/Sidebar.vue";
import Topbar from "../components/Topbar.vue";
import OrderTable from "../components/OrderTable.vue";
</script>

<template>
  <div class="w-screen h-screen flex bg-stone-100">
    <Sidebar />
    <div class="w-full">
      <Topbar />
      <div class="p-8">
        <h1 class="text-2xl font-semibold mb-4">Orders</h1>
        <div class="w-fit p-4 pr-0 my-4">
          <!-- You can add any other buttons or filters specific to the Orders page here -->
        </div>
        <div class="w-screeen max-w-7xl p-4 pb-0 my-4">
          <OrderTable />
          <!-- You can pass data or props to OrderTable component if needed -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
