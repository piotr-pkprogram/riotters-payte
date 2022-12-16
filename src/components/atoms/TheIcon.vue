<template>
  <div class="icon">
    <img :src="iconSrc" alt="" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    iconSrc: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  @apply p-4 bg-gray-100 w-max h-max rounded-md cursor-pointer hover:opacity-75 transition-opacity;
}
</style>
