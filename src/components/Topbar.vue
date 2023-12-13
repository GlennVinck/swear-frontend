<script setup>
import { ref } from 'vue';

const showDropdown = ref(false);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};
</script>

<template>
  <div
    class="w-full h-[64px] p-2 bg-white flex row items-center justify-between rounded-l"
  >
    <div class="flex items-center relative ml-2">
      <input
        type="text"
        placeholder="Search"
        class="h-[32px] min-w-[400px] px-4 bg-stone-100 border-none rounded focus:outline-none placeholder:text-sm placeholder:text-neutral-400 focus:ring-1 focus:ring-primary-accent"
      />
      <img
        src="../assets/icons/search.svg"
        alt="Search Icon"
        class="absolute right-4"
      />
    </div>
    <div class="flex flex-row gap-4 items-center justify-center mr-4 cursor-pointer relative" @click="toggleDropdown">
      <img
        src="../assets/profilepic.jpg"
        alt="profile picture"
        class="w-[32px] h-[32px] rounded-full"
      />

      <div :class="{ 'dropdown-show': showDropdown }" class="dropdown">
          <!-- Dropdown content -->
          <div class="dropdown-item">Account</div>
          <div class="dropdown-item">Settings</div>
          <div class="dropdown-item">Sign out</div>
          <!-- Add other useful links here -->
        </div>

      <div class="flex flex-col">
        <span class="text-sm font-semibold">Joris Hens</span>
        <span class="text-xs text-neutral-400">Admin</span>
      </div>
      <img
        src="../assets/caret-down-thin.svg"
        alt="arrow down"
        class="w-[24px] h-[24px]"
      />
    </div>
  </div>
</template>

<style scoped>
.dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: none;
  z-index: 1000;
}

.dropdown-item {
  padding: 8px;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}

/* Show the dropdown when the showDropdown value is true */
.dropdown-show {
  display: block;
}
</style>
