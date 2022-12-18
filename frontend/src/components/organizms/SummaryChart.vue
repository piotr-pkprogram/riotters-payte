<template>
  <invest-block class="relative" title="Summary">
    <!--<canvas id="summaryChart"></canvas>-->
    <img src="@/assets/img/summary-chart.svg" alt="" class="summary-chart" />
  </invest-block>
</template>

<script setup>
// import Chart from "chart.js/auto";
// import { onMounted } from "vue";
//
// onMounted(() => {
//   const ctx = document.getElementById("summaryChart");
//
//   // const gradient = ctx.createLinearGradient(0, 0, 0, 400);
//   // gradient.addColorStop(0, "rgba(250,174,50,1)");
//   // gradient.addColorStop(1, "rgba(250,174,50,0)");
//
//   new Chart(ctx, {
//     type: "line",
//     data: {
//       labels: ["", "", "", "", "", ""],
//       datasets: [
//         {
//           label: "This month",
//           data: [12, 19, 3, 5, 2, 3],
//           borderDash: [4, 16],
//           borderDashOffset: 4,
//           borderWidth: 2,
//           borderColor: "#7445FB",
//           fill: true,
//           backgroundColor: "rgba(255, 99, 132, 0.2)",
//           pointStyle: false,
//           tension: 1,
//         },
//       ],
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true,
//         },
//       },
//     },
//   });
// });
</script>

<style lang="scss">
.summary-chart {
  @apply w-full mt-6 absolute bottom-4 left-0;
}
</style>
