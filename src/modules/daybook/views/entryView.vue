<template>
  <template v-if="entry">
    <div class="entry-title justify-content-between p-2">
      <div>
        <span class="text-success fs-3 fw-bold"> {{ day }}</span>
        <span class="mx1 fs-3"> {{ month }} </span>
        <span class="mx-2 fs-4 fw-light"> {{ yearDay }} </span>
      </div>

      <div>
        <button class="btn btn-danger">
          Borrar
          <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary">
          Subir Foto <i class="fa fa-camera"></i>
        </button>
      </div>
    </div>

    <hr />
    <div class="d-flex flex-column px-3 h-75">
      <textarea
        v-model="entry.text"
        placeholder="Que sucedio hoy?"
      ></textarea></div
  ></template>
  <FabButton icon="fa-save" @on-click="saveEntry" />
  <img
    src="https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2020/12/28/belen-esteban-en-el-anuncio-navideno-de-amazon-prime-video.png"
    alt="Belen comiendo croquetas"
    class="img-thumbnail"
  />
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
import getMonthYear from "../helpers/getDayMonthYear";

export default {
  name: "HomeView",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    FabButton: defineAsyncComponent(() => import("../components/fab.vue")),
  },

  data() {
    return {
      entry: null,
    };
  },

  computed: {
    ...mapGetters("journal", ["getEntryById"]),
    day() {
      const { day } = getMonthYear(this.entry.date);
      return day;
    },
    month() {
      const { month } = getMonthYear(this.entry.date);
      return month;
    },
    yearDay() {
      const { yearDay } = getMonthYear(this.entry.date);
      return yearDay;
    },
  },
  methods: {
    goToDayBook() {
      this.$router.push({ name: "no-entry" });
    },
    loadEntry() {
      const entry = this.getEntryById(this.id);
      if (!entry) {
        return this.$router.push({ name: "no-entry" });
      }
      this.entry = entry;
    },
    async saveEntry() {
      console.log("save");
    },
  },

  created() {
    this.loadEntry();
  },
  watch: {
    id() {
      this.loadEntry();
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  font-size: 30px;
  border: none;
  height: 100%;
  &:focus {
    outline: none;
  }
}
img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>
