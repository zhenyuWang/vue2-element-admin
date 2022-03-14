<template>
  <div class="not_fund pt_20 t_center">
    <p class="pt_20 pb_20 fontsize_20 ">Not Fund</p>
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
