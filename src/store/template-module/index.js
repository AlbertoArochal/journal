import state from "./module-template/state";
import * as actions from "./module-template/actions";
import * as mutations from "./module-template/mutations";
import * as getters from "./module-template/getters";

const myCustomModule = {
  namespaced: true,
  actions,
  mutations,
  getters,
  state,
};

export default myCustomModule;
