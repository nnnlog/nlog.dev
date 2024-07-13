<template>
  <section class="content-intro">
    <div class="left">
      <div class="name">{{ $t("intro.name") }}</div>
      <div class="description">{{ $t("intro.description") }}</div>
    </div>
    <div class="right">
      <div>{{ $t("intro.word[0]") }}</div>
      <div>{{ $t("intro.word[1]") }}</div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@use "@/styles";

.content-intro {
  $var: 30vw;
  position: fixed;
  bottom: 30vh;
  left: 0;
  right: 0;
  width: fit-content;
  margin: 0 auto;
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
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

@media screen and (max-width: 700px) {
  .content-intro {
    flex-direction: column;
  }

  .right {
    padding-left: 0;
    margin-left: 0;
    padding-top: 2rem;
    margin-top: 2rem;
    border-left: none;
    border-top: 1px solid black;
    flex-direction: row;
    justify-content: center;
  }

  .right > *:first-child {
    margin-right: 0.5rem;
  }
}
</style>
