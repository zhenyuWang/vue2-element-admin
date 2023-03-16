<template>
  <div v-if="!item.hidden">
    <template v-if="item.children">
      <template v-if="isOnlyChild(item)">
        <SliderBarItem
          :item="
            Object.assign(
              {},
              {
                ...item.children[0],
                meta: { ...item.meta, ...item.children[0].meta }
              }
            )
          "
        />
      </template>
      <el-submenu v-else :index="item.name">
        <template #title>
          <i v-if="item.meta && item.meta.icon" :class="item.meta.icon"></i>
          <span>{{ (item.meta && item.meta.title) || item.name }}</span>
        </template>
        <template>
          <SliderBarItem
            v-for="child in item.children"
            :key="child.name"
            :item="child"
          />
        </template>
      </el-submenu>
    </template>
    <el-menu-item v-else :index="item.name">
      <router-link :to="item">
        <i v-if="item.meta && item.meta.icon" :class="item.meta.icon"></i>
        <span>{{ (item.meta && item.meta.title) || item.name }}</span>
      </router-link>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: "SliderBarItem",
  components: {},
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    isOnlyChild(item) {
      return item.children && item.children.length === 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.el-menu-item {
  a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
}
</style>
