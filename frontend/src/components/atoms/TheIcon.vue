<template>
  <div class="icon">
    <img :src="require(`@/assets/img/${iconName}`)" alt="" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  @apply relative p-4 bg-gray-100 w-max h-max rounded-lg cursor-pointer hover:opacity-75 transition-opacity;
  height: 48px;
  width: 48px;
}
</style>
