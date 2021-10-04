<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <transition-group name="breadcrumb" mode="out-in">
        <template v-for="item in titleList">
          <el-breadcrumb-item :to="item.path"  :key="item.path">{{
            item.meta.title
          }}</el-breadcrumb-item>
        </template>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  name: "",
  computed: {
    titleList() {
      return this.$route.matched;
    },
  },
};
</script>
<style lang="scss" scoped>
/* breadcrumb transition */
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.3s;
  opacity: 0;
  transform: translateX(20px);
}
</style>
