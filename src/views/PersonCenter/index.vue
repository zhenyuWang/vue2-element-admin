<template>
  <div class="user_info pt_20">
    <div class="pb-20 flex font-size-18">
      <div class="label">姓名：</div>
      <div>{{ userInfo.name }}</div>
    </div>
    <div class="flex">
      <div class="label font-size-18">头像：</div>
      <img :src="userInfo.avatar" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data() {
    return {
      userInfo: this.$store.getters.userInfo
    };
  }
};
</script>

<style lang="scss" scoped>
.user_info {
  .label {
    width: 80px;
  }
  img {
    width: 100px;
    height: 100px;
    border-radius: 4px;
  }
}
</style>
