<template>
  <button :class="light ? 'light-btn' : 'main-btn'">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    light: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  @apply md:hover:opacity-80 transition-opacity w-max p-3 text-xl rounded-sm;
}

.main-btn {
  @apply btn text-white block h-min bg-main;
}

.light-btn {
  @apply btn font-semibold block border-2 border-solid text-main border-gray-300 h-min bg-white;
}
</style>
