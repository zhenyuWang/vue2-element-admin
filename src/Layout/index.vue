// 内容页主体架子
<template>
  <AppMain />
</template>
<script>
import AppMain from "./components/AppMain.vue";
import ResizeMixin from "./mixin/resize";
export default {
  components: { AppMain },
  mixins: [ResizeMixin],
};
</script>
