<template>
  <div class="favorites-list-element">
    <div class="flex gap-3 justify-self-start">
      <img
        :src="require(`@/assets/img/${imageName}`)"
        :alt="name + ' icon'"
        height="32"
        width="32"
      />
      <p class="grid items-center text-xs">
        <span class="text-gray-400">{{ symbol }}</span>
        <span class="font-semibold">{{ name }}</span>
      </p>
    </div>
    <div class="chart">
      <img
        :src="
          require(`@/assets/img/${dayChange > 0 ? 'green' : 'red'}-chart.svg`)
        "
        alt=""
        height="28"
        width="81"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageName: {
      type: String,
      required: true,
    },
    symbol: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    dayChange: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.favorites-list-element {
  @apply grid grid-flow-col p-2 justify-items-center items-center;
}
</style>
