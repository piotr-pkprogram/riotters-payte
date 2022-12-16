<template>
  <div class="home">
    <SideBar />
    <main class="main-container"></main>
  </div>
</template>

<script>
// @ is an alias to /src
import SideBar from "@/components/organizms/SideBar.vue";

export default {
  name: "HomeView",
  components: { SideBar },
};
</script>

<style lang="scss">
.home {
  @apply grid grid-flow-col;
  grid-auto-columns: 264px auto;
}

.main-container {
  @apply p-6 h-full;
}
</style>
