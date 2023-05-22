<template>
  <div class="entry-list-container">
    <div class="px-2 pt">
      <input
        type="text"
        class="form-control"
        placeholder="Buscar Entradas"
        v-model="term"
      />
    </div>
    <div class="entry-scrollarea">
      <entry v-for="item in entriesbyTerm" :key="item.id" :entry="item" />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import { defineAsyncComponent } from "vue";
export default {
  namespaded: true,
  name: "EntryList",

  components: {
    entry: defineAsyncComponent(() => import("../components/entry.vue")),
  },
  computed: {
    ...mapGetters("journal", ["getEntriesbyTerm"]),
    entriesbyTerm() {
      return this.getEntriesbyTerm(this.term);
    },
    ...mapState("journal", ["entries"]),
  },
  data: () => {
    return {
      term: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.entry-list-container {
  border-right: 1px solid #2c3e50;
  background-color: #f3f3f3;
  height: calc(100vh - 56px);
  display: flex;
  flex-direction: column;
}

.entry-scrollarea {
  flex: 1;
  overflow-y: scroll;
  padding: 10px;
  height: calc(100vh - 120px);
}
</style>
