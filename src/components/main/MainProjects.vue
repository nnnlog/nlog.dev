<script setup lang="ts"></script>

<template>
  <div class="header" style="margin-top: 6rem">Projects</div>
  <ul>
    <li>
      <div class="semi-bold">Mostly using a Language & Framework</div>
      : Javascript/Typescript (<b>Node.js</b>, express, <b>Vue.js</b>), Flutter,
      C++ (Algorithm)
    </li>
    <li class="bold">
      <router-link to="/project" class="link">
        View all projects
        <mdicon width="1.5rem" height="1.5rem" name="arrow-right" />
      </router-link>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@use "@/styles";
</style>
