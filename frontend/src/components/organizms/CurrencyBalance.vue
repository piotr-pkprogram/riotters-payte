<template>
  <invest-block title="Current Balance">
    <div class="mt-10 mb-18">
      <p class="currency-price-container">
        <span class="text-gray-400">$</span>
        <span>{{ btcPrice }}</span>
      </p>
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

onMounted(async () => {
  const response = await axios.get("http://localhost:5000/api/crypto/btc");

  btcPrice.value = Math.round(response.data.quote.USD.price * 100) / 100;
});
</script>

<style lang="scss">
.currency-price-container {
  @apply text-5xl text-black w-full;
}

.invest-btn-container {
  @apply w-full flex gap-2;
}
</style>
