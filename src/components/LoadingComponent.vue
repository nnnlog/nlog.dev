<script lang="ts" setup></script>

<template>
  <div class="loading">{{ $t("loading") }}</div>
</template>

<style lang="scss" scoped>
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
