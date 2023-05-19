export default {
  name: "daybook",
  component: () =>
    import(/* webpackChunkName: "daybook" */ "../layouts/daybookLayout.vue"),
};
