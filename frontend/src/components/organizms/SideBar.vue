<template>
  <aside class="sidebar" ref="sidebar">
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
    <ul class="grid gap-2 mt-2">
      <li v-for="currency in currencies" :key="currency.id">
        <FavoriteElement
          :day-change="currency.quote.USD.percent_change_24h"
          :name="currency.name"
          :symbol="currency.symbol"
          :image-name="currency.imageName"
        />
      </li>
    </ul>
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
    <the-icon
      class="close-btn !absolute"
      iconName="right-arrow.png"
      @click="closeOpen"
    />
  </aside>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import SideBarElement from "@/components/atoms/SideBarElement.vue";
import FavoriteElement from "@/components/molecules/FavoriteElement.vue";
import axios from "axios";

const store = useStore();
const navElements = computed(() => store.getters.getSidebarNavElements);

const currencies = ref([]);
const sidebar = ref(null);
let isOpen = false;

const closeOpen = () => {
  if (isOpen) {
    sidebar.value.classList.add("!translate-x-0");
    isOpen = false;
  } else {
    sidebar.value.classList.remove("!translate-x-0");
    isOpen = true;
  }
};

onMounted(async () => {
  const response = await axios.get("http://localhost:5000/api/crypto/");

  const currenciesSymbols = ["BTC", "ADA"];
  currencies.value = response.data.filter((currency) => {
    if (currenciesSymbols.includes(currency.symbol)) {
      currency.imageName = `${currency.name.toLowerCase()}-icon.svg`;
      return true;
    } else {
      return false;
    }
  });
});
</script>

<style lang="scss">
.sidebar {
  @apply fixed left-0 bottom-0 h-full bg-gray-200 px-2 pt-10 z-10 -translate-x-full mds:h-auto mds:relative mds:translate-x-0;
  transition: transform 300ms ease;
  width: 264px;
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

.close-btn {
  @apply -right-9 top-16 border-black border-2 mds:hidden;
  transition-property: transform !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
  transition-duration: 150ms !important;

  &:hover {
    @apply scale-110;
    opacity: 1 !important;
  }
}
</style>
