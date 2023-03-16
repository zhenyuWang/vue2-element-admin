<template>
  <div class="collapse_box pr_20 pointer" @click="changeCollapse">
    <span v-if="isCollapse" class="font-size-20 el-icon-s-unfold"></span>
    <span v-else class="font-size-20 el-icon-s-fold"></span>
  </div>
</template>

<script>
export default {
  name: "",
  computed: {
    isCollapse() {
      return this.$store.getters.isCollapse;
    }
  },
  methods: {
    changeCollapse() {
      this.$store.commit(
        "setting/SET_COLLAPSE",
        !this.$store.getters.isCollapse
      );
    }
  }
};
</script>
