<template>
  <navBar />

  <div v-if="isLoading" class="row justify-content-md-center">
    <div class="col-3 alert-info text-center mt-5">
      "espere por favor..."
      <h3 class="mt-2">
        <i class="fa fa-spinner fa-spin"></i>
      </h3>
    </div>
  </div>

  <div v-else class="d-flex">
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
import { mapActions, mapState } from "vuex";
export default {
  components: {
    navBar: defineAsyncComponent(() => import("../components/navbar.vue")),
    entryList: defineAsyncComponent(() =>
      import("../components/entrylist.vue")
    ),
  },
  methods: {
    ...mapActions("journal", ["loadEntries"]),
  },
  computed: {
    ...mapState("journal", ["isLoading"]),
  },
  created() {
    this.loadEntries();
  },
};
</script>
