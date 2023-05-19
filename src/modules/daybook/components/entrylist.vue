<template>
  <div class="entry-list-container">
    <div class="px-2 pt">
      <input type="text" class="form-control" placeholder="Buscar Entradas" />
    </div>
    <div class="entry-scrollarea">
      <h2 v-for="item in 100" :key="item">
        <entry />
      </h2>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "EntryList",
  components: {
    entry: defineAsyncComponent(() => import("../components/entry.vue")),
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
