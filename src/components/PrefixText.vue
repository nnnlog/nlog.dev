<template>
  <li class="prefix">
    <p class="pre-prefix">{{ prefix }}</p>
    <p class="pre-text">{{ text }}</p>
  </li>
</template>

<script>
export default {
  name: 'PrefixText',
  props: {
    text: String,
    prefix: String,
  }
}
</script>

<style scoped>
.prefix {
  display: flex;
  justify-content: center;

  font-size: 18px;

  margin-top: 10px;

  white-space: pre;
}

.pre-prefix {
  font-family: 'Raleway', sans-serif;
  font-weight: 300;

  margin-right: 5px;

  display: flex;
  align-items: center;
}

.pre-text {
  font-family: 'Raleway', 'IBM Plex Sans KR', sans-serif;
  font-weight: 400;
}
</style>
