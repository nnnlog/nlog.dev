<script setup lang="ts"></script>

<template>
  <div class="loading">Loading page...</div>
</template>

<style scoped lang="scss">
@import "@/styles";

.loading {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 600;
  background-color: $primary-scroll-color;
}
</style>
