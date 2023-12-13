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
        <div class="flex items-center">
        <p class="text-base font-light mr-4 text-gray-500">{{ orderDetails.id }}</p>
        <p class="text-base font-light pl-4">{{ orderDetails.status }}</p>
       </div>

        <h3 class="text-base font-semibold mb-2 mt-16">Overview</h3>
      <div class="flex items-center justify-center w-1/8 bg-white p-4 rounded-lg">
          <div class="flex items-center mb-4">

            <div class="w-1/3 flex items-center justify-center">
              <img
                src="../assets/herobanner.jpg"
                alt="Card Image" 
                class="w-2/3 h-auto rounded-lg"
              />
            </div>
            

            <!-- overview section -->
            <div class="w-1/3 ml-1/2 flex flex-col">
            <div class="mb-2">
              <p class="text-sm text-gray-500 mb-1">Order ID</p>
              <p class="text-base font-semibold">{{ orderDetails.id }}</p>
            </div>

            <div class="mb-2">
              <p class="text-sm text-gray-500 mb-1">Article ID</p>
              <p class="text-base font-semibold">Your Article ID</p>
            </div>

            <div>
              <p class="text-sm text-gray-500 mb-1">Order Date</p>
              <p class="text-base font-semibold">{{ orderDetails.date }}</p>
            </div>
          </div>
        </div>
          <div class="w-1/2 ml-4">
            <img
              src="../assets/qr-code-test.png"
              alt="QR Code" 
              class="w-32 h-auto rounded-lg"
            />
          </div>
      </div>



            <!-- customer section -->
      <h3 class="text-base font-semibold mb-2 mt-12">Customer</h3>
        <div class="flex items-center justify-left w-1/8 bg-white p-6 rounded-lg">

          <div class="flex">
            <div class="mr-12">
              <p class="text-sm text-gray-500 mb-1">Customer ID</p>
              <p class="text-base font-semibold">Customer ID</p>
            </div>

            <div class="mr-12">
              <p class="text-sm text-gray-500 mb-1">Name</p>
              <p class="text-base font-semibold">Customer Name</p>
            </div>

            <div>
              <p class="text-sm text-gray-500 mb-1">Email</p>
              <p class="text-base font-semibold">Customer Email</p>
            </div>
          </div>
        </div>





             <!-- shipping section -->
      <h3 class="text-base font-semibold mb-2 mt-12">Shipping</h3>
        <div class="flex items-center justify-left w-1/8 bg-white p-6 rounded-lg">

          <div class="flex">
            <div class="mr-12">
              <p class="text-sm text-gray-500 mb-1">Shipping from</p>
              <p class="text-base font-semibold"> {{ orderDetails.from }}</p>
            </div>

            <div class="mr-12">
              <p class="text-sm text-gray-500 mb-1">Shipping To</p>
              <p class="text-base font-semibold">{{ orderDetails.to }}</p>
            </div>

            <div class="mr-12">
              <p class="text-sm text-gray-500 mb-1">Shipping Address</p>
              <p class="text-base font-semibold">Customer Adress</p>
            </div>

            <div class="mr-44">
              <p class="text-sm text-gray-500 mb-1">Date</p>
              <p class="text-base font-semibold">{{ orderDetails.date }}</p>
            </div>

            <div>
              <p class="text-sm text-gray-500 mb-1">Status</p>
              <p class="text-base font-semibold">{{ orderDetails.status }}</p>
            </div>
    </div>
  </div>
  <div class="md:text-right">
  <button class="text-1xl font-regular md:mt-4 md:ml-0 text-black p-2 rounded-md">
    Cancel Order
  </button>
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