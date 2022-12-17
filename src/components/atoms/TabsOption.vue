<template>
  <div class="tab">
    <slot></slot>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const selectedTitle = inject("selectedTitle");

    return {
      selectedTitle,
    };
  },
};
</script>

<style lang="scss" scoped></style>
