<template>
  <AppMain />
</template>

<script>
import AppMain from "./components/AppMain.vue";
import ResizeMixin from "./mixin/resize";
export default {
  components: { AppMain },
  mixins: [ResizeMixin]
};
</script>
