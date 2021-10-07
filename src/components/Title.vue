<template>
  <div class="title">
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
.title {
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 52px;
}

.title-icon {
  margin-right: 10px;
}

.title-text {
  font-family: 'Raleway', sans-serif;
  font-weight: 700;

  margin: 0;
}

@media (max-width: 900px) {
  .title {
    font-size: 30px;
  }
}
</style>
