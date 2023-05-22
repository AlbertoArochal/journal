const state = () => ({
  isLoading: true,
  entries: [
    {
      id: "1",
      date: new Date().toDateString(),
      text: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      picture: null,
    },
    {
      id: "2",
      date: new Date().toDateString(),
      text: "lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit.",
      picture: null,
    },
    {
      id: "3",
      date: new Date().toDateString(),
      text: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      picture: null,
    },
  ],
});

export default state;
