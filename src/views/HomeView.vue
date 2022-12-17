<template>
  <div class="home">
    <SideBar />
    <main class="main-container">
      <nav class="navigation">
        <SearchInput />
        <the-icon icon-name="interface-alert-alarm.svg">
          <span class="red-notify-dot"></span>
        </the-icon>
        <the-icon icon-name="interface-setting-menu-hamburger.svg" />
      </nav>
      <div class="invest-blocks-container">
        <invest-block title="Current Balance">
          <div class="invest-btn-container">
            <base-button>Quick Invest</base-button>
            <base-button light>Show Report</base-button>
          </div>
        </invest-block>
        <invest-block title="Summary"></invest-block>
      </div>
      <tabs-wrapper>
        <tabs-option title="Summary"></tabs-option>
        <tabs-option title="Table"></tabs-option>
        <tabs-option title="Charts"></tabs-option>
        <tabs-option title="Reporting"></tabs-option>
        <tabs-option title="Analysis"></tabs-option>
      </tabs-wrapper>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import { defineComponent } from "vue";
import SearchInput from "@/components/atoms/SearchInput.vue";
import SideBar from "@/components/organizms/SideBar.vue";

export default defineComponent({
  components: { SideBar, SearchInput },
});
</script>

<style lang="scss">
.home {
  @apply grid grid-flow-col;
  grid-auto-columns: 264px auto;
}

.main-container {
  @apply p-16 h-full pt-12 gap-x-8;
}

.red-notify-dot {
  @apply p-1.5 bg-red-500 absolute -top-1 -right-1 rounded-full border-2 border-white;
}

.navigation {
  @apply w-full grid grid-flow-col items-center gap-6;
  grid-auto-columns: auto max-content max-content;
}

.invest-blocks-container {
  @apply w-full grid grid-cols-2 gap-8 mt-8;
}

.invest-btn-container {
  @apply w-full grid grid-flow-col gap-2;
}
</style>
