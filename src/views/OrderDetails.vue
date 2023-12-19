<script setup>
import Sidebar from "../components/Sidebar.vue";
import Topbar from "../components/Topbar.vue";
import { ref, watchEffect, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const previousRoute = ref(null);

// Watch for route changes
watchEffect(() => {
  previousRoute.value = router.currentRoute.value;
});

const orderId = ref(router.currentRoute.value.params.id);
const orderDetails = ref({});
const selectedStatus = ref("");

const fetchOrderDetails = async () => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/v1/orders/${orderId.value}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    const data = await response.json();

    if (data.status === "success") {
      orderDetails.value = data.data.order;
      selectedStatus.value = orderDetails.value.status;
    } else {
      console.error("Error fetching order details:", data.message);
    }
  } catch (error) {
    console.error("Error fetching order details:", error);
  }
};

const updateOrderStatus = async () => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/v1/orders/${orderId.value}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: selectedStatus.value }),
      }
    );

    const data = await response.json();

    if (data.status === "success") {
      await fetchOrderDetails();
    } else {
      console.error("Error updating order status:", data.message);
    }
  } catch (error) {
    console.error("Error updating order status:", error);
  }
};

onMounted(() => {
  fetchOrderDetails();
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
          <p class="text-base font-light mr-4 text-gray-500">{{ orderId }}</p>

          <p class="text-base font-semibold">
            {{ orderDetails.status }}
          </p>

          <!-- Dropdown menu for order status -->
          <select v-model="selectedStatus" class="text-base font-light pl-4">
            <option value="pending">Pending</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <button @click="updateOrderStatus" class="text-base font-light pl-4">
            Update Status
          </button>
        </div>

        <h3 class="text-base font-semibold mb-2 mt-16">Overview</h3>
        <div
          class="flex items-center justify-center w-1/8 bg-white p-4 rounded-lg"
        >
          <div class="flex items-center mb-4">
            <div class="w-1/3 flex items-center justify-center">
              <img
                :src="orderDetails.image"
                alt="Card Image"
                class="w-2/3 h-auto rounded-lg"
              />
            </div>

            <!-- overview section -->
            <div class="w-1/3 ml-1/2 flex flex-col">
              <div class="mb-2">
                <p class="text-sm text-gray-500 mb-1">Order ID</p>
                <p class="text-base font-semibold">{{ orderDetails._id }}</p>
              </div>

              <div class="mb-2">
                <p class="text-sm text-gray-500 mb-1">Article ID</p>
                <p class="text-base font-semibold">
                  {{ orderDetails.orderNumber }}
                </p>
              </div>

              <div>
                <p class="text-sm text-gray-500 mb-1">Order Date</p>
                <p class="text-base font-semibold">
                  {{ orderDetails.orderDate }}
                </p>
              </div>
            </div>
            <div class="w-1/3 ml-1/2 flex flex-col">
              <div class="mb-2">
                <p class="text-sm text-gray-500 mb-1">Price</p>
                <p class="text-base font-semibold">
                  {{ "€" + " " + orderDetails.price }}
                </p>
              </div>

              <div class="mb-2">
                <p class="text-sm text-gray-500 mb-1">Quantity</p>
                <p class="text-base font-semibold">
                  {{ orderDetails.quantity }}
                </p>
              </div>

              <div>
                <p class="text-sm text-gray-500 mb-1">Size</p>
                <p class="text-base font-semibold">
                  {{ orderDetails.shoeSize }}
                </p>
              </div>
            </div>
          </div>
          <div class="w-1/2 ml-4">
            <img
              src="../assets/swear-qr.png"
              alt="QR Code"
              class="w-32 h-auto rounded-lg"
            />
          </div>
        </div>

        <!-- customer section -->
        <h3 class="text-base font-semibold mb-2 mt-12">Customer</h3>
        <div
          class="flex items-center justify-left w-1/8 bg-white p-6 rounded-lg"
        >
          <div class="flex">
            <div class="mr-12">
              <p class="text-sm text-gray-500 mb-1">Customer ID</p>
              <p class="text-base font-semibold">
                {{ orderDetails.customerId }}
              </p>
            </div>

            <div class="mr-12">
              <p class="text-sm text-gray-500 mb-1">Name</p>
              <p class="text-base font-semibold">
                {{ orderDetails.firstName + " " + orderDetails.lastName }}
              </p>
            </div>

            <div>
              <p class="text-sm text-gray-500 mb-1">Email</p>
              <p class="text-base font-semibold">
                {{ orderDetails.email }}
              </p>
            </div>
          </div>
        </div>

        <!-- shipping section -->
        <h3 class="text-base font-semibold mb-2 mt-12">Shipping</h3>
        <div
          class="flex items-center justify-left w-1/8 bg-white p-6 rounded-lg"
          v-if="orderDetails.deliveryAdress"
        >
          <div class="flex">
            <div class="mr-12">
              <p class="text-sm text-gray-500 mb-1">Shipping from</p>
              <p class="text-base font-semibold">
                {{ orderDetails.deliveryAdress.shippingFrom }}
              </p>
            </div>

            <div class="mr-12">
              <p class="text-sm text-gray-500 mb-1">Shipping To</p>
              <p class="text-base font-semibold">
                {{ orderDetails.deliveryAdress.shippingTo }}
              </p>
            </div>

            <div class="mr-12">
              <p class="text-sm text-gray-500 mb-1">Shipping Address</p>
              <p class="text-base font-semibold">
                {{ orderDetails.deliveryAdress.fullAdress }}
              </p>
            </div>

            <div class="mr-44">
              <p class="text-sm text-gray-500 mb-1">Date</p>
              <p class="text-base font-semibold">
                {{ orderDetails.orderDate }}
              </p>
            </div>
          </div>
        </div>
        <div class="md:text-right">
          <button
            class="text-1xl font-regular md:mt-4 md:ml-0 text-black p-2 rounded-md"
          >
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
