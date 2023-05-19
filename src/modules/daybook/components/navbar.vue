<template>
  <nav class="navbar bg-primary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img
          src="../../../assets/logo.png"
          alt=""
          width="24"
          height="24"
          class="d-inline-block align-text-top mx-2"
        />
        <a class="navbar-brand text-white">Daybook</a>
      </router-link>
      <div class="d-flex">
        <button class="btn btn-outline-info me-2" type="button">
          <i class="fa fa-sign-out-alt"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navBar",
};
</script>
