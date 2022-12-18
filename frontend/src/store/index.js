import { createStore } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default createStore({
  state: {
    sidebarNavElements: [
      {
        id: uuidv4(),
        text: "Overview",
        imageName: "home-line.svg",
        amountOfNotifications: 10,
        active: true,
      },
      {
        id: uuidv4(),
        text: "Buy / Sell",
        imageName: "bank.svg",
      },
      {
        id: uuidv4(),
        text: "Wallets",
        imageName: "wallet-02.svg",
      },
      {
        id: uuidv4(),
        text: "Bundles",
        imageName: "check-verified-02.svg",
      },
      {
        id: uuidv4(),
        text: "Reporting",
        imageName: "flag-01.svg",
      },
      {
        id: uuidv4(),
        text: "Community",
        imageName: "atom-02.svg",
      },
    ],
  },
  getters: {
    getSidebarNavElements(state) {
      return state.sidebarNavElements;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
