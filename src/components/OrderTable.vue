<script setup>
import { ref } from "vue";

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
    id: "6516845168sdf984",
    from: "London",
    to: "Bristol",
    date: "20/12/2023",
    status: "pending",
    invoice: "view",
  },
  {
    id: "6516845168sdf984",
    from: "London",
    to: "Bristol",
    date: "20/12/2023",
    status: "pending",
    invoice: "view",
  },
  {
    id: "6516845168sdf984",
    from: "London",
    to: "Bristol",
    date: "20/12/2023",
    status: "pending",
    invoice: "view",
  },
]);
</script>

<template>
  <div id="main-container">
    <div class="w-full my-8">
      <table
        class="w-full max-w-6xl border-separate border-spacing-x-0 border-spacing-y-4"
      >
        <thead class="h-10 text-neutral-400 text-left">
          <tr class="text-xs bg-white">
            <th class="font-normal pl-4">Order ID</th>
            <th class="font-normal pl-4">From</th>
            <th class="font-normal pl-4">To</th>
            <th class="font-normal pl-4">Date</th>
            <th class="font-normal pl-4">Status</th>
            <th class="font-normal pl-4">Invoice</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" class="h-10 bg-white text-sm">
            <td class="pl-4">{{ order.id }}</td>
            <td class="pl-4">{{ order.from }}</td>
            <td class="pl-4">{{ order.to }}</td>
            <td class="pl-4">{{ order.date }}</td>
            <td class="pl-4">{{ order.status }}</td>
            <td class="pl-4">{{ order.invoice }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
