<template>
  <div class="home">
    <CurrencyBalance />
    <SummaryChart />
    <tabs-wrapper class="col-start-1 col-end-3">
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

<script>
import { defineComponent } from "vue";
import CurrencyBalance from "@/components/organizms/CurrencyBalance.vue";
import SummaryList from "@/components/organizms/SummaryList.vue";
import SummaryChart from "@/components/organizms/SummaryChart.vue";

export default defineComponent({
  components: { SummaryChart, SummaryList, CurrencyBalance },
});
</script>

<style lang="scss">
.home {
  @apply h-full grid grid-cols-2 gap-8;
  grid-auto-rows: max-content max-content auto;
}
</style>
