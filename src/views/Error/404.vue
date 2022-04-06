<template>
  <div class="not_fund flex flex-center flex-direction-column">
    <img class="banner" src="@/assets/img/404.jpg" alt="" />
    <p class="pb-20">您访问的页面不存在</p>
    <el-button type="primary" @click="$router.push({ name: 'Home' })"
      >返回首页</el-button
    >
  </div>
</template>
<script>
export default {
  name: "NotFund"
};
</script>
<style lang="scss" scoped>
.not_fund {
  .banner {
    width: 700px;
    height: 300px;
    margin: 200px auto 50px;
  }
}
</style>
