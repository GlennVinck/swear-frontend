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
