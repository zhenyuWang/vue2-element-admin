<template>
  <div class="visited_views flex flex-align-center">
    <div
      class="font-size-12 c_666 pointer"
      v-for="view in $store.getters.visitedViews"
      :key="view.name"
      :class="{ active: $route.name === view.name }"
      @click="goTargetView(view)"
      @contextmenu.prevent="mouseRightClick(view, $event)"
    >
      {{ (view.meta && view.meta.title) || view.name }}
      <i
        v-if="view.meta && !view.meta.fixed"
        class="el-icon-error"
        @click.stop="delTargetVisited(view)"
      ></i>
    </div>
    <ul
      v-show="visible"
      ref="menu"
      class="menu bg_fff font-size-13 pointer c_333"
    >
      <li @click="refresh">刷新</li>
      <li
        v-if="mouseRightView.meta && !mouseRightView.meta.fixed"
        @click="close"
      >
        关闭
      </li>
      <li @click="closeOther">关闭其他</li>
      <li @click="closeAll">关闭所有</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      mouseRightView: "",
      visible: false
    };
  },
  methods: {
    goTargetView(view) {
      this.$router.push(view.fullPath);
    },
    delTargetVisited(view) {
      this.$store.dispatch("tagsView/deleteVisitedView", view);
      if (view.name === this.$route.name) {
        const visitedViews = this.$store.getters.visitedViews;
        if (visitedViews && visitedViews.length)
          this.$router.push(visitedViews[visitedViews.length - 1]);
      }
    },
    hideMenu() {
      this.visible = false;
    },
    showMenu(left, top) {
      window.addEventListener("click", this.hideMenu);
      this.visible = true;
      this.$refs.menu.style.left = `${left}px`;
      this.$refs.menu.style.top = `${top + 10}px`;
    },
    mouseRightClick(view, e) {
      this.mouseRightView = view;
      this.showMenu(e.clientX, e.clientY);
    },
    async refresh() {
      await this.$store.commit(
        "tagsView/DELETE_CACHE_VIEW",
        this.mouseRightView.name
      );
      if (this.mouseRightView.name === this.$route.name) {
        await this.$router.push({ name: "NotFund" });
        this.$router.replace(this.mouseRightView);
      } else {
        this.$router.push(this.mouseRightView);
      }
    },
    close() {
      this.delTargetVisited(this.mouseRightView);
    },
    closeOther() {
      this.$store.commit(
        "tagsView/DELETE_OTHER_VISITED_VIEW",
        this.mouseRightView
      );
      if (this.mouseRightView.name !== this.$route.name) {
        this.$router.push(this.mouseRightView);
      }
    },
    closeAll() {
      this.$store.commit("tagsView/CLEAR_CACHE_VIEW");
      this.$store.commit("tagsView/CLEAR_VISITED_VIEW");
      const visitedViews = this.$store.getters.visitedViews;
      if (visitedViews && visitedViews.length)
        this.$router.push(visitedViews[visitedViews.length - 1]);
    }
  }
};
</script>

<style lang="scss" scoped>
.visited_views {
  height: 30px;
  > div {
    height: 24px;
    margin-right: 5px;
    padding: 0 10px;
    line-height: 24px;
    border: 1px solid #ccc;
    border-radius: 3px;
    &.active {
      background-color: rgb(19, 107, 19);
      border: none;
      color: #fff;
    }
  }
  .menu {
    width: 100px;
    padding: 5px 10px;
    position: absolute;
    z-index: 9999;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    > li {
      padding: 5px 2px;
      &:hover {
        color: #3477f2;
      }
    }
  }
}
</style>
