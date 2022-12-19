<template>
  <invest-block class="relative !pb-0" title="Summary">
    <canvas class="summary-chart" ref="summaryChart"></canvas>
  </invest-block>
</template>

<script setup>
import Chart from "chart.js/auto";
import { onMounted, ref } from "vue";

const summaryChart = ref(null);

onMounted(() => {
  const ctx = summaryChart.value;
  console.log(ctx);
  // const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  // gradient.addColorStop(0, "rgba(250,174,50,1)");
  // gradient.addColorStop(1, "rgba(250,174,50,0)");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["", "", "", "", "", ""],
      datasets: [
        {
          label: "This month",
          data: [12, 19, 3, 5, 2, 3],
          borderDash: [4, 16],
          borderDashOffset: 4,
          borderWidth: 2,
          borderColor: "#7445FB",
          fill: true,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          pointStyle: false,
          tension: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
</script>

<style lang="scss">
.summary-chart {
  @apply w-full mt-6 bottom-4 left-0 lgs:absolute;
}
</style>
