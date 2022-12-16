<template>
  <div :class="`sidebar-element ${active ? 'active' : ''}`">
    <img
      :src="require(`../../assets/img/sidebar-nav-icons/${imageName}`)"
      alt=""
    />
    <span>{{ text }}</span>
    <span
      v-if="amountOfNotifications > 0"
      class="rounded-full px-1.5 py-0.5 bg-red-500 text-white text-xs"
      >{{ amountOfNotifications > 9 ? "9+" : amountOfNotifications }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    imageName: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    amountOfNotifications: {
      type: Number,
      required: false,
      default: 0,
    },
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar-element {
  @apply p-4 text-gray-400 w-full grid grid-flow-col items-center gap-3 font-medium rounded-lg;
  grid-auto-columns: max-content auto max-content;

  &.active {
    @apply bg-white text-black font-semibold;
  }
}
</style>
