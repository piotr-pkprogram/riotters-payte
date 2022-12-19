<template>
  <div class="home">
    <CurrencyBalance />
    <SummaryChart class="summary-block" />
    <tabs-wrapper class="lgs:col-start-1 lgs:col-end-3">
      <tabs-option title="Summary">
        <SummaryList />
      </tabs-option>
      <tabs-option title="Table"></tabs-option>
      <tabs-option title="Charts"></tabs-option>
      <tabs-option title="Reporting"></tabs-option>
      <tabs-option title="Analysis"></tabs-option>
    </tabs-wrapper>
  </div>
</template>

<script setup>
import CurrencyBalance from "@/components/organizms/CurrencyBalance.vue";
import SummaryList from "@/components/organizms/SummaryList.vue";
import SummaryChart from "@/components/organizms/SummaryChart.vue";
</script>

<style lang="scss">
.home {
  @apply grid gap-5 lgs:grid-cols-2 lg:gap-8;

  @media (min-width: 945px) {
    grid-auto-rows: max-content max-content auto;
  }
}

.summary-block {
  @apply row-3 mb-5 lgs:row-auto mds:mb-0;
}
</style>
