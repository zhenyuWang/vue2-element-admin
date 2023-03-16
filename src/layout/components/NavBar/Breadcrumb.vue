<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <transition-group name="breadcrumb" mode="out-in">
        <el-breadcrumb-item
          v-for="item in titleList"
          :key="item.path"
          :to="item.path"
          >{{ item.meta.title }}</el-breadcrumb-item
        >
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
    }
  }
};
</script>

<style lang="scss" scoped>
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.3s;
  opacity: 0;
  transform: translateX(20px);
}
</style>
