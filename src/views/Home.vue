<template>
  <h1 class="home pt_20 t_center fontsize_20 c-3477F2">
    {{ message }}
  </h1>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      message: "Welcome to vue2-element-admin by running snail!"
    };
  }
};
</script>
