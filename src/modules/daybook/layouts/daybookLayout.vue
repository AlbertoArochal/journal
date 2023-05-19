<template>
  <navBar />

  <div class="d-flex">
    <div class="col-4">
      <entryList />
    </div>
    <div class="col">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    navBar: defineAsyncComponent(() => import("../components/navbar.vue")),
    entryList: defineAsyncComponent(() =>
      import("../components/entrylist.vue")
    ),
  },
};
</script>
