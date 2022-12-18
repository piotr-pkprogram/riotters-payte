<template>
  <div class="tabs">
    <ul class="tabs__header">
      <li
        v-for="title in tabTitles"
        :key="title"
        :class="{ selected: title === selectedTitle }"
        @click="selectedTitle = title"
      >
        {{ title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
import { ref, provide } from "vue";

export default {
  setup(props, { slots }) {
    const tabTitles = ref(slots.default().map((tab) => tab.props.title));
    const selectedTitle = ref(tabTitles.value[0]);

    provide("selectedTitle", selectedTitle);
    return {
      selectedTitle,
      tabTitles,
    };
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  @apply p-8 bg-gray-100 rounded-t-xl overflow-hidden relative;
  max-height: 400px;

  &__header {
    @apply mb-4 list-none flex gap-6 w-full border-b border-gray-300;
    height: 40px;

    & li {
      @apply relative text-gray-400 cursor-pointer hover:text-black transition-colors text-center after:content-[''];
      width: 80px;

      &::after {
        @apply absolute bg-main p-1 w-full -bottom-1 left-0 opacity-0 transition-opacity;
      }

      &.selected {
        @apply text-black after:opacity-100;
      }
    }
  }
}
</style>
