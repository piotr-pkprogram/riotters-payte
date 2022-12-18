<template>
  <invest-block title="Current Balance">
    <div class="mt-10 mb-18">
      <p class="currency-price-container">
        <span class="text-gray-400">$</span>
        <span>{{ btcPrice }}</span>
      </p>
      <div class="month-change-container">
        <img
          :src="
            require(`@/assets/img/arrow-${
              monthChange > 0 ? 'up' : 'down'
            }-02.svg`)
          "
          alt=""
        />
        <p v-if="monthChange > 0" class="text-green-500">
          {{ `${Math.round(monthChange)}% vs last month` }}
        </p>
        <p v-else class="text-red-500">
          {{ `${Math.round(monthChange)}% vs last month` }}
        </p>
      </div>
    </div>
    <div class="invest-btn-container">
      <base-button>Quick Invest</base-button>
      <base-button light>Show Report</base-button>
    </div>
  </invest-block>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const btcPrice = ref(0);
const monthChange = ref(0);

onMounted(async () => {
  const response = await axios.get("http://localhost:5000/api/crypto/btc");

  btcPrice.value = Math.round(response.data.quote.USD.price * 100) / 100;
  monthChange.value =
    Math.round(response.data.quote.USD.percent_change_30d * 100) / 100;
});
</script>

<style lang="scss">
.currency-price-container {
  @apply text-5xl text-black w-full;
}

.invest-btn-container {
  @apply w-full flex gap-2;
}

.month-change-container {
  @apply font-semibold text-lg flex gap-2 mt-3;
}
</style>
