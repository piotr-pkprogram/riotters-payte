<template>
  <SideBar />
  <!--  <BaseMenu ref="baseMenu" />-->
  <main class="main-container">
    <nav class="navigation">
      <SearchInput />
      <the-icon icon-name="interface-alert-alarm.svg">
        <span class="red-notify-dot"></span>
      </the-icon>
      <the-icon icon-name="interface-setting-menu-hamburger.svg" />
    </nav>
    <router-view />
  </main>
</template>

<script>
import { defineComponent } from "vue";
import SideBar from "@/components/organizms/SideBar.vue";
import SearchInput from "@/components/atoms/SearchInput.vue";
import TheIcon from "@/components/atoms/TheIcon.vue";
// import BaseMenu from "@/components/organizms/BaseMenu.vue";

export default defineComponent({
  components: { TheIcon, SearchInput, SideBar },
  // setup() {
  //   const baseMenu = ref(null);
  //
  //   return {
  //     baseMenu,
  //   };
  // },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Poppins:wght@400;500;600;700&display=swap");
#app {
  font-family: "Poppins", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply bg-white rounded-3xl w-full h-full grid grid-flow-col h-full relative overflow-x-hidden;
  max-width: 1400px;
  max-height: 900px;

  @media (min-width: 700px) {
    grid-auto-columns: 264px auto;
  }
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  @apply bg-black flex justify-center items-center h-screen;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  @apply z-0;
}

strong {
  @apply font-semibold;
}

.main-container {
  @apply h-full pt-12 pb-0 p-2 xs:p-5 lg:px-16;
}

.red-notify-dot {
  @apply p-1.5 bg-red-500 absolute -top-1 -right-1 rounded-full border-2 border-white;
}

.navigation {
  @apply w-full flex flex-wrap xs:grid xs:grid-flow-col items-center gap-6 col-start-1 col-end-3 mb-8;
  grid-auto-columns: auto max-content max-content;
}
</style>
