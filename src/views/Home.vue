<script setup>
import Sidebar from "../components/Sidebar.vue";
import Topbar from "../components/Topbar.vue";
import CardSmall from "../components/CardSmall.vue";
import OrderTable from "../components/OrderTable.vue";
</script>

<template>
  <div class="w-screen h-screen flex bg-neutral-200">
    <Sidebar />
    <div class="w-full">
      <Topbar />
      <div class="p-8">
        <h1 class="text-2xl font-semibold mb-2">Home</h1>
        <div class="w-fit p-4 pr-0 my-4 border border-neutral-300">
          <h2 class="text-base font-semibold mb-2">Overview</h2>
          <div class="flex row">
            <CardSmall title="Total Orders" :content="165" />
            <CardSmall title="Total Customers" :content="143" />
            <CardSmall title="Total Revenue" :content="'€23,450.00'" />
          </div>
        </div>
        <div class="w-fit p-4 pr-0 my-4 border border-neutral-300">
          <h2 class="text-base font-semibold mb-2">Status</h2>
          <div class="flex row">
            <CardSmall title="Pending" :content="12" />
            <CardSmall title="In Progress" :content="8" />
            <CardSmall title="Delivered" :content="110" />
            <CardSmall title="Canceled" :content="35" />
          </div>
        </div>
        <OrderTable />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
