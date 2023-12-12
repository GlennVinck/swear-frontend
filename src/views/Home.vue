<script setup>
import Sidebar from "../components/Sidebar.vue";
import Topbar from "../components/Topbar.vue";
import CardSmall from "../components/CardSmall.vue";
import OrderTable from "../components/OrderTable.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const showAllOrders = () => {
  router.push({ name: "Orders" });
};

const newestOrdersToShow = 4;
</script>

<template>
  <div class="w-screen h-screen flex bg-stone-100">
    <Sidebar />
    <div class="w-full">
      <Topbar />
      <div class="p-8">
        <h1 class="text-2xl font-semibold mb-2">Home</h1>
        <div class="w-fit p-4 pr-0 my-4">
          <h2 class="text-base font-semibold mb-2">Overview</h2>
          <div class="flex row">
            <CardSmall title="Total Orders" :content="165" />
            <CardSmall title="Total Customers" :content="143" />
            <CardSmall title="Total Revenue" :content="'€23,450.00'" />
          </div>
        </div>
        <div class="w-fit p-4 pr-0 my-4">
          <h2 class="text-base font-semibold mb-2">Global Order Status</h2>
          <div class="flex row">
            <CardSmall
              icon="../src/assets/icons/pending.svg"
              title="Pending"
              :content="12"
            />
            <CardSmall
              icon="../src/assets/icons/inprogress.svg"
              title="In Progress"
              :content="8"
            />
            <CardSmall
              icon="../src/assets/icons/delivered.svg"
              title="Delivered"
              :content="110"
            />
            <CardSmall
              icon="../src/assets/icons/cancel.svg"
              title="Canceled"
              :content="35"
            />
          </div>
        </div>
        <div class="w-screeen max-w-6xl p-4 pb-0 my-4">
          <div class="flex row items-center">
            <h2 class="text-base font-semibold">Newest Orders</h2>
            <img
              src="../assets/label-live.jpg"
              alt=""
              class="h-fit w-auto ml-2"
            />
          </div>
          <OrderTable :ordersToShow="newestOrdersToShow" />
          <button class="text-primary-accent underline mt-2 cursor-pointer" @click="showAllOrders">
        See All Orders
      </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
