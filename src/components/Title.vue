<template>
  <div class="main-title">
    <span class="mdi title-icon" :class="'mdi-' + icon"></span>
    <p class="title-text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    text: String,
    icon: String,
  }
}
</script>

<style scoped>
.main-title {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title-icon {
  margin-right: 10px;
  font-size: 52px;
}

.title-text {
  font-size: 52px;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;

  margin: 0;
}
</style>
