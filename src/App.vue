<template>
  <div class="bg">
    <router-view v-if="!loading"/>
    <pre v-if="error !== undefined" class="error-container">{{ error }}</pre>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit("loadData");
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    info() {
      return this.$store.getters.info;
    },
    error() {
      return this.info.error;
    }
  },
  watch: {
    info() {
      this.loading = false;
    },
  },
}
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/@mdi/font@6.1.95/css/materialdesignicons.min.css');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@100;200;300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap');

@keyframes left-to-right {
  from {
    transform: translateX(-100vw);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes right-to-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100vw);
  }
}

.left-to-right {
  animation: left-to-right 1s 1 normal forwards;
}

.right-to-left {
  animation: right-to-left 1s 1 normal forwards;
}

::-webkit-scrollbar {
  width: 7px;
  height: 20px;
}

::-webkit-scrollbar-thumb {
  background-clip: padding-box;
  background-color: rgba(0, 0, 0, .3);
  border-radius: 20px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, .5);
}

.hide-scroll {
  overflow: hidden;
}

.error-container {
  font-family: 'IBM Plex Sans KR', sans-serif;
  font-size: .85rem;

  position: fixed;
  bottom: 1rem;
  right: 1rem;

  border-radius: .5rem;
  padding: .5rem .7rem;

  background: rgba(0, 0, 0, .4);
  color: white;
}

@media (max-width: 900px) {
  p {
   /* white-space: break-spaces; */
  }
}

p {
  margin: 0;
}

a[href] {
  display: inline-block;
  width: fit-content;

  color: inherit;
  text-decoration: none;
}

a[href]::after {
  content: '';
  width: 0;
  height: 0;
  border: 0;
  border-top: .5px black dotted;
  display: block;
  transition: 300ms;

  z-index: 999;
}

a[href]:hover::after {
  width: 100%;
}

/*
font-family: 'Raleway', sans-serif;
font-family: 'IBM Plex Sans KR', sans-serif;
*/
head, body {
  margin: 0;
  padding: 0;
}

.bg {
  min-height: 100vh;
  width: 100vw;

  background: linear-gradient(180deg, #012459 0.01%, #F06B7E 97.71%);
}

.btn {
  cursor: pointer;
}
</style>
