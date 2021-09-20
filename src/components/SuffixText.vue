<template>
  <li class="suffix" :class="small !== undefined ? 'suf-small' : ''">
    <p class="suf-text">{{ text }}</p>
    <p class="suf-suffix">{{ suffix }}</p>
  </li>
</template>

<script>
export default {
  name: 'SuffixText',
  props: ['text', 'suffix', 'small']
};
</script>

<style scoped>
.suffix {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 18px;

  white-space: pre;
}

.suf-small {
  font-size: 16px !important;
}

.suf-text {
  font-family: 'Raleway', 'IBM Plex Sans KR', sans-serif;
  font-weight: 300;
}

.suf-suffix {
  font-family: 'Raleway', 'IBM Plex Sans KR', sans-serif;
  font-weight: 400;

  margin-left: 5px;
}
</style>
