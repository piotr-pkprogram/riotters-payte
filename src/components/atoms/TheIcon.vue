<template>
  <div class="icon">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.icon {
  @apply p-4 bg-gray-100 w-max h-max rounded-md cursor-pointer hover:opacity-75 transition-opacity;
}
</style>
