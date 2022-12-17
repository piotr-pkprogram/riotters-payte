<template>
  <aside class="sidebar">
    <img class="ml-4 mb-16" src="@/assets/img/logo-payte.svg" alt="" />
    <nav class="mb-12">
      <SideBarElement
        v-for="navEl in navElements"
        :key="navEl.id"
        :text="navEl.text"
        :imageName="navEl.imageName"
        :amount-of-notifications="navEl.amountOfNotifications"
        :active="navEl.active"
      />
    </nav>
    <div class="favorites">
      <span>Favorites</span>
      <img src="@/assets/img/dots-horizontal.svg" alt="" />
    </div>
    <div class="user-info-block">
      <img
        class="user-img"
        src="@/assets/img/a-portrait-of-businessman-with-smartphone.png"
        alt="portrait of a smiling businessman with smartphone"
      />
      <span>
        Marc Webbler
        <a href="mailto:marc@riot.com">marc@riot.com</a>
      </span>
      <img src="@/assets/img/dots-horizontal.svg" alt="" />
    </div>
  </aside>
</template>

<script>
import SideBarElement from "@/components/atoms/SideBarElement.vue";

export default {
  components: { SideBarElement },
  data() {
    return {
      navElements: this.$store.getters.getSidebarNavElements,
    };
  },
  props: {},
};
</script>

<style lang="scss">
.sidebar {
  @apply relative bg-gray-200 px-2 pt-10 h-screen;
  max-width: 264px;
}

.favorites {
  @apply mx-4 grid grid-flow-col;

  & span {
    @apply text-gray-400;
  }

  & img {
    @apply justify-self-end;
  }
}

.user-info-block {
  @apply absolute bottom-0 grid grid-flow-col gap-3 p-5 pl-3 items-center w-full;

  & span {
    @apply text-sm font-semibold w-min;

    a {
      font-family: "Montserrat", sans-serif;
      @apply font-normal mt-1 text-gray-400;
    }
  }

  & .user-img {
    @apply bg-white rounded-full border-green-400 border;
    height: 40px;
    width: 40px;
  }
}
</style>
