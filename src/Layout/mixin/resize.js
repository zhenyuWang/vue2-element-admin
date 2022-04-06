export default {
  data() {
    return {
      width: 992
    }
  },
  mounted() {
    window.addEventListener('resize', this.resizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler)
  },
  methods: {
    resizeHandler() {
      const rect = document.body.getBoundingClientRect()
      if (rect.width > this.width) {
        this.$store.commit('setting/SET_COLLAPSE', false)
      } else {
        this.$store.commit('setting/SET_COLLAPSE', true)
      }
    }
  }
}
