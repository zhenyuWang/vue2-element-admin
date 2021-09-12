<template>
  <div class="home">
    Home
    <div>
      <p>name:{{ userInfo.name }}</p>
      <p>
        头像:
        <img :src="userInfo.avatar" alt="" />
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      userInfo: {
        name: "",
        avatar: "",
      },
    };
  },
  created() {
    const userInfo = this.$store.getters.userInfo;
    console.log("userInfo", userInfo);
    if (userInfo) {
      this.userInfo = userInfo;
    }
  },
};
</script>
<style lang="scss" scoped>
.home {
  color: red;
  img {
    width: 100px;
    height: 100px;
  }
}
</style>
