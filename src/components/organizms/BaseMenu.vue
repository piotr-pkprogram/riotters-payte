<template>
  <menu class="main-menu">
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>FAQ</li>
      <li>Contact</li>
    </ul>
    <the-icon class="main-menu__close-btn" icon-name="close.png" />
  </menu>
</template>

<script>
export default {
  props: {
    closeMenu: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.main-menu {
  @apply fixed right-8 h-full flex p-5 pt-20 bg-gray-200 z-10;
  max-height: 900px;
  width: 300px;

  & li {
    @apply mb-3 cursor-pointer text-black transition-opacity hover:opacity-60 w-full;
  }

  &__close-btn {
    @apply absolute top-3 right-3;
  }
}
</style>
