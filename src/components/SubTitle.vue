<template>
  <div class="subtitle">
    <span class="mdi subtitle-icon" :class="'mdi-' + icon"></span>
    <p class="subtitle-text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'SubTitle',
  props: {
    text: String,
    icon: String,
  }
}
</script>

<style scoped>
.subtitle {
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 36px;
}

.subtitle-icon {
  margin-right: 5px;
}

.subtitle-text {
  font-family: 'Raleway', sans-serif;
  font-weight: 500;

  margin: 0;
}

@media (max-width: 900px) {
  .subtitle {
    font-size: 20px;
  }
}
</style>
