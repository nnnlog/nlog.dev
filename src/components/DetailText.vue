<template>
  <li class="detail" :class="small !== undefined ? 'detail-small' : ''">
    <a v-if="link !== undefined" class="detail-text" :href="link" target="_blank">{{ text }}</a>
    <p v-else class="detail-text">{{ text }}</p>
    <p class="detail-html" v-html="detail"></p>
  </li>
</template>

<script>
export default {
  name: 'DetailText',
  props: ['text', 'detail', 'link', 'small']
}
</script>

<style scoped>
.detail {
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: 18px;

  white-space: pre;

  margin-top: 10px;
}

.detail-small > .detail-html {
  font-size: 16px !important;
}

.detail-text {
  font-family: 'Raleway', 'IBM Plex Sans KR', sans-serif;
  font-weight: 400;

  margin: 0;
}

.detail-html {
  font-family: 'Raleway', sans-serif;
  font-weight: 300;

  margin: 0;
}
</style>
