<template>
  <!--  <LoadingComponent v-if="!isLoaded"></LoadingComponent>-->
  <div v-if="!isLoaded"></div>
  <div v-else>
    <div class="wrapper">
      <nav class="nav">
        <router-link to="/">CV</router-link>
        <router-link to="/activity">Activity</router-link>
        <router-link to="/project">Project</router-link>
      </nav>
      <div class="background"></div>
      <div class="background2"></div>
      <IntroComponent></IntroComponent>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import IntroComponent from "@/components/IntroComponent.vue";
import { onMounted, ref } from "vue";

let isLoaded = ref(false);

onMounted(() => {
  document.fonts.ready.then(() => {
    isLoaded.value = true;
  });
});
</script>

<style lang="scss">
@use "@/styles";

@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 12px;
}

body {
  margin: 0;
  padding: 0;
  //font-family: "Pretendard Variable", Pretendard, -apple-system,
  //  BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
  //  "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
  //  "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-family: "Pretendard Variable";
}

::selection {
  color: inherit !important;
  background: styles.$primary-scroll-color;
}

.background {
  position: fixed;
  top: 0;
  width: 100%;
  height: calc(styles.$nav-height + styles.$hr-height);
  background: white;
  z-index: 110;
}

.background2 {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(123, 100, 240, 0.1);
  z-index: 90;
}

.wrapper {
  margin-top: styles.$nav-height;

  width: 100%;
  //height: 100vh;
}

.nav {
  display: flex;
  align-items: center;
  height: styles.$nav-height;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 200;
  background: rgba(123, 100, 240, 0.1);
  padding: 0 4rem;
}

.nav::after {
  content: "";
  display: block;
  width: 100%;
  margin-left: -4rem;
  height: styles.$hr-height;
  z-index: 200;
  background: rgba(123, 100, 240, 0.1);
  position: fixed;
  top: styles.$nav-height;
}

.nav > * {
  margin-right: 2rem;
  font-size: 1.5rem;
  text-decoration: none;
  color: styles.$primary-soft-color;
  font-weight: 600;

  &.router-link-exact-active {
    color: styles.$primary-color;
  }
}

.content-hr {
  position: sticky;
  top: styles.$nav-height;
  border-radius: 2rem 2rem 0 0;
  background: #fff;
  height: styles.$hr-height;
  z-index: 1000;
  //box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.75);
  box-shadow: 0 calc(-1 * styles.$hr-height) 40px 2px rgba(123, 100, 240, 0.25);

  &.bottom {
    margin-top: 90vh;
  }

  &::after {
    display: block;
    content: " ";
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    height: 5rem;
    width: 100%;
    position: absolute;
    top: styles.$hr-height;
  }
}

.content-main {
  position: sticky;
  top: calc(styles.$nav-height + styles.$hr-height);
  min-height: calc(100vh - styles.$nav-height - styles.$hr-height);
  width: 100%;
  background: #fff;
  z-index: 100;
  padding: 5rem 7rem;
}
</style>
