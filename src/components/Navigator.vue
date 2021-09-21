<template>
  <span class="btn navi-left navi mdi mdi-arrow-left" @click="left"></span>
  <span v-if="skip !== ''" class="btn navi navi-right mdi mdi-arrow-right" @click="right"></span>
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
.navi {
  position: absolute;
  top: 40px;
  font-size: 25px;
}

.navi-left {
  left: 40px;
}

.navi-right {
  right: 40px;
}

@media (max-width: 900px) {
  .navi {
    top: 20px;
    font-size: 20px;
  }
  .navi-left {
    left: 25px;
  }
  .navi-right {
    right: 25px;
  }
}
</style>
