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
    const ctx = summaryChart.value.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 424);
    gradient.addColorStop(0, "rgba(116, 69, 251, 0.16)");
    gradient.addColorStop(0.5, "rgba(116, 69, 251, 0)");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["", "", "", "17 May", "", ""],
        datasets: [
          {
            label: "This month",
            data: [0, 14, 12, 21, 16, 26],
            borderWidth: 2,
            borderColor: "#7445FB",
            fill: true,
            backgroundColor: gradient,
            tension: 0.4,
            borderJoinStyle: "miter",
            pointBackgroundColor: "#7445FB",
            pointBorderWidth: 0,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#7445FB",
          },
          {
            label: "Last month",
            data: [0, 17, 13, 12.5, 5, 8],
            borderDash: [6, 3],
            borderDashOffset: 4,
            borderWidth: 2,
            borderColor: "#858585",
            tension: 0.4,
            pointBackgroundColor: "#858585",
            pointBorderWidth: 0,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#858585",
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            xAlign: "center",
            yAlign: "bottom",
            bodyAlign: "center",
            titleAlign: "center",
            backgroundColor: "#0A041C",
            displayColors: false,
          },
          legend: {
            position: "bottom",
            align: "start",
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
              boxWidth: 8,
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
              display: false,
              drawBorder: false,
              drawOnChartArea: false,
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              color: "#858585",
              drawBorder: false,
              tickColor: "#F7F7F9",
              borderDash: [2, 8],
              borderDashOffset: 4,
            },
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
