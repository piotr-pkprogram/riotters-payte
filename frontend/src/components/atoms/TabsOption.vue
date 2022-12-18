<template>
  <div class="tab w-full" v-show="title === selectedTitle">
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
