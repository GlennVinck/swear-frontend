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

let totalOrders = ref("");
let totalCustomers = ref("");
let totalRevenue = ref("");

const fetchAllOrders = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/v1/orders", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const data = await response.json();

    if (data.status === "success") {
      totalOrders.value = data.data.orders.length;
      //totalrevenue is the sum of all the orders
      totalRevenue.value = data.data.orders.reduce(
        (acc, order) => acc + order.price,
        0
      );
      //total customers is the number of unique customers based on the customerName
      totalCustomers.value = data.data.orders.reduce((acc, order) => {
        if (!acc.includes(order.customerName)) {
          acc.push(order.customerName);
        }
        return acc;
      }, []).length;
    } else {
      console.error("Error fetching total orders:", data.message);
    }
  } catch (error) {
    console.error("Error fetching total orders:", error);
  }
};

fetchAllOrders();

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
            <CardSmall title="Total Orders" :content="totalOrders" />
            <CardSmall title="Total Customers" :content="totalCustomers" />
            <CardSmall title="Total Revenue" :content="totalRevenue" />
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
          <button
            class="text-primary-accent underline mt-2 cursor-pointer"
            @click="showAllOrders"
          >
            See All Orders
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
