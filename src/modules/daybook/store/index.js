import { createStore } from "vuex";
import journal from "../../daybook/store/journal";
const store = createStore({
  modules: {
    journal,
  },
});

export default store;
