<template>
  <div class="search-input-container">
    <img src="@/assets/img/search.svg" alt="" />
    <input type="text" name="search" id="search" placeholder="Search" />
  </div>
</template>

<style lang="scss" scoped>
input {
  @apply bg-transparent placeholder:text-sm text-sm focus-visible:outline-none;
}

img {
  height: 16px;
  width: 16px;
}

.search-input-container {
  @apply p-4 bg-gray-100 h-max w-full flex gap-2 rounded-lg items-center;
  max-width: 232px;
  height: 48px;
}
</style>
