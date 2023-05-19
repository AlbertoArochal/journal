export default {
  name: "daybook",
  component: () =>
    import(/* webpackChunkName: "daybook" */ "../layouts/daybookLayout.vue"),
  children: [
    {
      path: "",
      name: "no-entry",
      component: () =>
        import(
          /* webpackChunkName: "daybook-no-entry" */ "../views/noEntrySelected.vue"
        ),
    },
    {
      path: ":id",
      name: "entry",
      component: () =>
        import(
          /* webpackChunkName: "daybook-entry" */ "../views/entryView.vue"
        ),
      props: (route) => {
        return {
          id: route.params.id,
        };
      },
    },
  ],
};
