<template>
  <div class="entry-container mb-3 pointer p-2">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold"> 12 </span>
      <span class="mx-1 fs-5"> julio </span>
      <span class="mx-2 fw-light"> 2021, jueves</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
      inventore, eius expedita molestias quibusdam eveniet libero quas
      consequatur neque. Amet porro magnam eligendi officiis possimus excepturi
      eum ipsum nesciunt facere!
    </div>
  </div>
</template>
<script>
export default {
  name: "EntryComponent",
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
