<template>
  <div class="home">
    <SideBarElement
      text="Overview"
      imageName="home-line.svg"
      :amountOfNotifications="10"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import SideBarElement from "../components/atoms/SideBarElement.vue";

export default {
  name: "HomeView",
  components: { SideBarElement },
};
</script>
