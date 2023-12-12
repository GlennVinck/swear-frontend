<script setup>
import Sidebar from "../components/Sidebar.vue";
import Topbar from "../components/Topbar.vue";
import { ref, watchEffect } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const previousRoute = ref(null);

// Watch for route changes
watchEffect(() => {
  previousRoute.value = router.currentRoute.value;
});

const orderDetails = ref({
  id: "6516845168sdf984",
  from: "London",
  to: "Bristol",
  date: "20/12/2023",
  status: "pending",
  invoice: "View",
});

</script>

<template>
  <div class="w-screen h-screen flex bg-stone-100">
    <Sidebar />
    <div class="w-full">
      <Topbar />
      <div class="p-8">
        <button @click="goBack" class="text-blue-500 hover:underline">
          Back
        </button>
        <h1 class="text-2xl font-semibold mb-2">Order</h1>


        <div class="flex row items-center">
          <div class="w-1/8 mr-8">
            <img
              src="../assets/herobanner.jpg"
              alt="Order Image" 
              class="w-full h-auto mb-4 rounded-lg"
            />
          </div>
          <div class="w-1/2">
            <p class="text-base font-semibold">Order ID:</p>
            <p class="text-lg mb-4">{{ orderDetails.id }}</p>

            <p class="text-base font-semibold">Shipment From:</p>
            <p class="text-lg mb-4">{{ orderDetails.from }}</p>

            <p class="text-base font-semibold">Shipment To:</p>
            <p class="text-lg mb-4">{{ orderDetails.to }}</p>

            <p class="text-base font-semibold">Order Date:</p>
            <p class="text-lg mb-4">{{ orderDetails.date }}</p>

            <p class="text-base font-semibold">Status:</p>
            <p class="text-lg mb-4">{{ orderDetails.status }}</p>

            <p class="text-base font-semibold">Invoice:</p>
            <p class="text-lg">{{ orderDetails.invoice }}</p>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    goBack() {
      // Use the previous route information to determine where to go back
      const backRoute = this.previousRoute?.value?.name || "/";
      this.$router.push(backRoute);
    },
  },
};
</script>

<style scoped></style>
