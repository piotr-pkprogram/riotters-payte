<template>
  <invest-block class="relative !pb-0" title="Summary">
    <canvas class="summary-chart" ref="summaryChart"></canvas>
  </invest-block>
</template>

<script setup>
import Chart from "chart.js/auto";
import { ref, watchEffect } from "vue";

const summaryChart = ref(null);

watchEffect(() => {
  if (summaryChart.value) {
    const ctx = summaryChart.value;
    // const gradient = ctx.createLinearGradient(116, 69, 251, 40);
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
            borderWidth: 2,
            borderColor: "#7445FB",
            fill: true,
            backgroundColor: "rgba(116, 69, 251, 0.4)",
            tension: 1,
            borderJoinStyle: "miter",
            pointBackgroundColor: "#F7F7F9",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#7445FB",
          },
          {
            label: "Last month",
            data: [6, 12, 8, 2, 9, 3],
            borderDash: [6, 3],
            borderDashOffset: 4,
            borderWidth: 2,
            borderColor: "#858585",
            pointStyle: false,
            tension: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              // This more specific font property overrides the global property
              font: {
                size: 12,
                family: "'Poppins', Arial, sans-serif",
              },
            },
          },
        },
        scales: {
          x: {
            border: {
              display: false,
            },
            drawTicks: false,
            grid: {
              borderDash: [8, 4],
              color: "#F7F7F9",
            },
          },
          y: {
            beginAtZero: true,
            border: {
              display: false,
            },
            grid: {
              color: "#858585",
            },
            tickBorderDash: [6, 3],
            tickBorderDashOffset: 4,
          },
        },
      },
    });
  } else {
    // not mounted yet, or the element was unmounted (e.g. by v-if)
  }
});
</script>

<style lang="scss">
.summary-chart {
  @apply w-full h-full mt-6;
}
</style>
