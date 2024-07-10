<template>
  <section class="content-intro">
    <div class="left">
      <div class="name">Chansol Park</div>
      <div class="description">Algorithm, Web Developer</div>
    </div>
    <div class="right">Develop software<br />makes world better</div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use "@/styles";

.content-intro {
  position: fixed;
  left: 30vh;
  //top: calc(styles.$nav-height + styles.$hr-height);
  bottom: 30vh;
  z-index: 95;
  display: flex;
}

.left {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

@keyframes animation {
  to {
    top: 0;
    margin-bottom: inherit;
  }
}

.name {
  font-weight: 900;
  font-size: 4.5rem;
  background: linear-gradient(135deg, #f00ae8 0%, #7b64f0 50%, #2fcff5 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: animation 1s forwards;
}

.description {
  font-weight: 600;
  font-size: 2rem;
  animation: animation 1s ease forwards;
  animation-delay: 1s;
}

.right {
  margin-left: 2rem;
  padding-left: 2rem;
  border-left: 1px solid black;
  font-weight: 200;
  font-size: 1.5rem;
  align-self: stretch;
  display: flex;
  align-items: center;
}
</style>
