<template>
  <div class="summary-list-element">
    <div class="flex gap-3 justify-self-start">
      <img :src="require(`@/assets/img/${imageName}`)" :alt="name + ' icon'" />
      <p class="text-container">
        <span class="text-gray-400">{{ symbol }}</span>
        <span class="font-semibold">{{ name }}</span>
      </p>
    </div>
    <p class="text-container">
      <span class="text-gray-400">Price</span>
      <span class="font-semibold">${{ Math.round(price * 100) / 100 }}</span>
    </p>
    <div class="text-container">
      <span class="text-gray-400">Change</span>
      <div class="flex gap-1">
        <p v-if="dayChange > 0" class="font-semibold text-green-500">
          {{ `+ ${Math.round(dayChange * 100) / 100}%` }}
        </p>
        <p v-else class="font-semibold text-red-500">
          {{ `${Math.round(dayChange * 100) / 100}%` }}
        </p>
        <img
          :src="
            require(`@/assets/img/arrow-${dayChange > 0 ? 'up' : 'down'}.svg`)
          "
          alt=""
        />
      </div>
    </div>
    <div class="chart">
      <img
        :src="
          require(`@/assets/img/${dayChange > 0 ? 'green' : 'red'}-chart.svg`)
        "
        alt=""
      />
    </div>
    <div class="flex gap-2 items-center justify-self-end">
      <base-button light>Sell</base-button>
      <base-button>Buy</base-button>
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
    price: {
      type: Number,
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
.summary-list-element {
  @apply flex flex-wrap lgs:grid lgs:grid-flow-col p-4 bg-white gap-x-10 gap-y-4 lgs:gap-0 lgs:justify-items-center items-center;
}

.brand-container {
  @apply flex gap-3 justify-self-start;

  &__name {
    @apply grid items-center text-sm;
  }
}

.text-container {
  @apply grid items-center text-sm;
}
</style>
