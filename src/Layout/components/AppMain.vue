<template>
  <section class="app_main flex">
    <SliderBar />
    <el-container>
      <el-header height="80px">
        <NavBar />
      </el-header>
      <el-main>
        <transition name="fade-transform" mode="out-in">
          <keep-alive :include="cachedViews">
            <router-view :key="$route.fullPath" />
          </keep-alive>
        </transition>
      </el-main>
    </el-container>
  </section>
</template>

<script>
import SliderBar from "./SliderBar/index.vue";
import NavBar from "./NavBar/index.vue";

export default {
  components: { SliderBar, NavBar },
  data() {
    return {
      cachedViews: this.$store.getters.cachedViews
    };
  }
};
</script>

<style lang="scss" scoped>
.app_main {
  height: 100%;
  .el-header {
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  }
}
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.2s;
  opacity: 0;
  transform: translateX(30px);
}
</style>
