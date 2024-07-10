<script setup lang="ts"></script>

<template>
  <div class="header" style="margin-top: 6rem">Projects</div>
  <ul>
    <li>
      <div class="semi-bold">Mostly using a Language & Framework</div>
      <div>: Javascript/Typescript (</div>
      <b>Node.js</b>
      <div>, express,</div>
      <b>Vue.js</b>
      <div>), Flutter, C++ (Algorithm)</div>
    </li>
    <li class="bold">
      <router-link to="/project" class="link">
        <!--
            -->View all projects<!--
        --><mdicon width="1.5rem" height="1.5rem" name="arrow-right" />
      </router-link>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@use "@/styles";
</style>
