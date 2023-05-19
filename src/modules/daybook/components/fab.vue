<template>
  <button class="btn btn-primary">
    <i class="fa fa-2x" :class="icon"></i>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "fa-plus",
    },
  },
  name: "FabButton",
  methods: {
    onClick() {
      console.log("click");
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  &:hover {
    background-color: #3c8dbc;
  }
}
</style>
