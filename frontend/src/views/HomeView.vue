<template>
  <div class="home">
    <invest-block title="Current Balance">
      <div class="invest-btn-container">
        <base-button>Quick Invest</base-button>
        <base-button light>Show Report</base-button>
      </div>
    </invest-block>
    <invest-block title="Summary"></invest-block>
    <tabs-wrapper class="col-start-1 col-end-3">
      <tabs-option title="Summary">
        <base-button>Example</base-button>
      </tabs-option>
      <tabs-option title="Table"></tabs-option>
      <tabs-option title="Charts"></tabs-option>
      <tabs-option title="Reporting"></tabs-option>
      <tabs-option title="Analysis"></tabs-option>
    </tabs-wrapper>
  </div>
</template>

<style lang="scss">
.home {
  @apply h-full grid grid-cols-2 gap-8;
  grid-auto-rows: max-content max-content auto;
}

.invest-btn-container {
  @apply w-full grid grid-flow-col gap-2;
}
</style>
