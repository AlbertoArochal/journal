<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: entry.id } })"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold"> {{ day }}</span>
    </div>
    <div class="entry-description">{{ shortText }}</div>
  </div>
</template>
<script>
const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const days = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

export default {
  name: "EntryComponent",
  props: {
    entry: {
      type: Object,
      required: true,
    },
  },
  computed: {
    shortText() {
      return this.entry.text.length > 130
        ? this.entry.text.substr(0, 130) + "..."
        : this.entry.text;
    },
    day() {
      const date = new Date(this.entry.date);
      return `${days[date.getDay()]}, ${date.getDate()} de ${
        months[date.getMonth()]
      }, ${date.getFullYear()}`;
    },
  },
};
</script>

<style lang="scss">
.entry-container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  transition: all 0.2s ease-in;
  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    background-color: lighten($color: grey, $amount: 45);
    transition: all 0.2s ease-in;
  }
  .entry-description {
    font-size: 12px;
  }
}
</style>
