<template>
  <li class="icon">
    <a class="icon-link" :href="data.link" target="_blank">
      <span class="mdi" :class="`mdi-${data.name}`" :style="`color: ${data.color}`"></span>
    </a>
  </li>
</template>

<script>
export default {
  name: 'Icon',
  props: ['name'],
  computed: {
    data() {
      return this.icons[this.name] || {};
    }
  },
  data() {
    return {
      icons: {
        nodejs: {
          color: "#44883E",
          name: "nodejs",
          link: "https://nodejs.org/"
        },
        vue: {
          color: "#42B883",
          name: "vuejs",
          link: "https://vuejs.org/"
        },
        cpp: {
          color: "#00549E",
          name: "language-cpp",
          link: undefined
        },
        android: {
          color: "#3DDC84",
          name: "android",
          link: undefined
        },
        javascript: {
          color: "#F0DB4F",
          name: "language-javascript",
          link: "https://developer.mozilla.org/ko/docs/Web/JavaScript"
        },
      }
    };
  }
}
</script>

<style scoped>
.icon {
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: 26px;

  white-space: pre;

  margin-right: 10px;
}

.icon-link {
  font-family: 'Raleway', 'IBM Plex Sans KR', sans-serif;
  font-weight: 400;

  margin: 0;
}

.icon-link::after, .icon-link:hover::after {
  border: none;
}

@media (max-width: 900px) {
  .icon {
    font-size: 20px;
  }
}
</style>
