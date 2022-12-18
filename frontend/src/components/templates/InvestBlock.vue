<template>
  <div class="invest-block">
    <div class="invest-block__header">
      <h2>{{ title }}</h2>
      <img src="@/assets/img/dots-horizontal.svg" alt="" />
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.invest-block {
  @apply p-8 bg-gray-100 rounded-xl;

  &__header {
    @apply grid grid-cols-2;

    & h2 {
      @apply font-medium text-xl;
    }

    & img {
      @apply justify-self-end;
    }
  }
}
</style>
