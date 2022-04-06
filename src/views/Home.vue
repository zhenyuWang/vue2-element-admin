<template>
  <div class="box t-center">
    <img src="@/assets/img/snail.png" alt="" />
    <h1 class="home pt_20 t-center fontsize_20 c-3477F2">
      {{ message }}
    </h1>
  </div>
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
<style lang="scss" scoped>
.box {
  padding-top: 100px;
  > img {
    width: 100px;
    height: auto;
    margin-bottom: 20px;
    border-radius: 50%;
  }
}
</style>
