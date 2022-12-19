<template>
  <menu class="main-menu translate-x-full opacity-0">
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>FAQ</li>
      <li>Contact</li>
    </ul>
    <the-icon
      class="main-menu__close-btn !absolute"
      icon-name="close.png"
      @click="$emit('closeMenu')"
    />
  </menu>
</template>

<script setup>
import { defineEmits } from "vue";

// eslint-disable-next-line no-unused-vars
const emit = defineEmits(["closeMenu"]);
</script>

<style lang="scss">
.main-menu {
  @apply fixed right-0 h-full flex p-5 pt-20 bg-gray-200 z-10;
  max-height: 900px;
  width: 300px;
  transition: transform 300ms ease, opacity 300ms ease;

  & li {
    @apply mb-3 cursor-pointer text-black transition-opacity hover:opacity-60 w-full;
  }

  &__close-btn {
    @apply top-3 right-3;
  }
}
</style>
