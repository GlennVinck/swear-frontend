<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goToOrderDetails = (orderId) => {
  router.push({ name: "OrderDetails", params: { id: orderId } });
};

const orders = ref([
  {
    id: "6516845168sdf984",
    from: "London",
    to: "Bristol",
    date: "20/12/2023",
    status: "pending",
    invoice: "view",
  },
  {
    id: "6516845168sdf983",
    from: "London",
    to: "Bristol",
    date: "20/12/2023",
    status: "pending",
    invoice: "view",
  },
  {
    id: "6516845168sdf982",
    from: "London",
    to: "Bristol",
    date: "20/12/2023",
    status: "pending",
    invoice: "view",
  },
  {
    id: "6516845168sdf981",
    from: "London",
    to: "Bristol",
    date: "20/12/2023",
    status: "pending",
    invoice: "view",
  },
]);
</script>

<template>
  <table
    class="w-full max-w-6xl border-separate border-spacing-x-0 border-spacing-y-4"
  >
    <thead class="h-10 text-neutral-400 text-left">
      <tr class="text-xs">
        <th class="font-normal pl-4 rounded-l bg-neutral-300">Order ID</th>
        <th class="font-normal pl-4 bg-neutral-300">From</th>
        <th class="font-normal pl-4 bg-neutral-300">To</th>
        <th class="font-normal pl-4 bg-neutral-300">Date</th>
        <th class="font-normal pl-4 bg-neutral-300">Status</th>
        <th class="font-normal pl-4 rounded-r bg-neutral-300">Invoice</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="order in orders"
        :key="order.id"
        class="h-10 text-sm cursor-pointer hover:text-primary-accent"
        @click="() => goToOrderDetails(order.id)"
      >
        <td class="pl-4 rounded-l bg-white">{{ order.id }}</td>
        <td class="pl-4 bg-white">{{ order.from }}</td>
        <td class="pl-4 bg-white">{{ order.to }}</td>
        <td class="pl-4 bg-white">{{ order.date }}</td>
        <td class="pl-4 bg-white">{{ order.status }}</td>
        <td class="pl-4 rounded-r bg-white">{{ order.invoice }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
