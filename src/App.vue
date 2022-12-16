<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Poppins:wght@400;500;600;700&display=swap");
#app {
  font-family: "Poppins", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply bg-white rounded-3xl w-full h-full overflow-x-hidden;
  max-width: 1400px;
  max-height: 900px;
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
  @apply bg-black flex justify-center;
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
</style>
