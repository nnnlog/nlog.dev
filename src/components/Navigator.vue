<template>
  <span class="btn left mdi mdi-arrow-left" @click="left"></span>
  <span v-if="skip !== ''" class="btn right mdi mdi-arrow-right" @click="right"></span>
</template>

<script>
export default {
  name: 'Navigator',
  props: ["skip"],
  computed: {
    current() {
      return parseInt(this.$route.path.substr(-1));
    }
  },
  methods: {
    left() {
      this.$store.dispatch('prev', true);
      setTimeout(() => {
        this.$router.push((this.current - 1).toString());
      }, 1000);
    },
    right() {
      this.$store.dispatch('next', true);
      this.$router.push((this.current + 1).toString());
    },
  }
}
</script>

<style scoped>
.left {
  position: absolute;
  top: 40px;
  left: 40px;
  font-size: 25px;
}

.right {
  position: absolute;
  top: 40px;
  right: 40px;
  font-size: 25px;
}
</style>
