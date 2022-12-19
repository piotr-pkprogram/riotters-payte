<template>
  <ul class="summary-list">
    <li v-for="currency in currencies" :key="currency.id">
      <SummaryListElement
        :day-change="currency.quote.USD.percent_change_24h"
        :price="currency.quote.USD.price"
        :name="currency.name"
        :symbol="currency.symbol"
        :image-name="currency.imageName"
      />
    </li>
  </ul>
  <div class="curtain" />
</template>

<script setup>
import SummaryListElement from "@/components/molecules/SummaryListElement.vue";
import { onMounted, ref } from "vue";
import axios from "axios";

const currencies = ref([]);

onMounted(async () => {
  const response = await axios.get("http://localhost:5000/api/crypto/");

  const currenciesSymbols = ["BTC", "ETH", "ADA", "AVAX"];
  currencies.value = response.data.filter((currency) => {
    if (currenciesSymbols.includes(currency.symbol)) {
      currency.imageName = `${currency.name.toLowerCase()}-icon.svg`;
      return true;
    } else {
      return false;
    }
  });
});
</script>

<style lang="scss">
.summary-list {
  @apply grid gap-2;
}

.curtain {
  @apply hidden absolute w-full -bottom-4 left-0 mds:block;
  height: 136px;
  background: linear-gradient(180deg, rgba(247, 247, 249, 0) 0%, #f7f7f9 100%);
}
</style>
