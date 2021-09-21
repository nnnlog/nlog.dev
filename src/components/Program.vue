<template>
  <div class="program">
    <a class="program-link" :href="link" target="_blank">
      <div class="program-header">
        <span class="mdi program-icon" :class="'mdi-' + icon"></span>
        <p class="program-title">{{ name }}</p>
      </div>
    </a>
    <p class="program-desc" v-html="desc"></p>
    <ul class="program-lang">
      <Icon v-for="n of lang" :name="n"/>
    </ul>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  name: 'Program',
  components: {Icon},
  props: ['icon', 'name', 'link', 'desc', 'lang']
}
</script>

<style scoped>
.program {
  white-space: pre;

  margin-top: 10px;
}

.program-link {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.program-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 28px;
}

.program-icon {
  margin-right: 10px;
}

.program-title {
  font-family: 'Raleway', 'IBM Plex Sans KR', sans-serif;
  font-weight: 500;

  margin: 0;
}

.program-desc {
  font-family: 'IBM Plex Sans KR', sans-serif;
  font-weight: 300;

  font-size: 18px;

  margin: 10px 0 0 0;
}

.program-lang {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin: 10px 0 0 0;
  padding: 0;
}

@media (max-width: 900px) {
  .program-header {
    font-size: 25px;
  }

  .program-desc {
    font-size: 16px;
  }
}
</style>
