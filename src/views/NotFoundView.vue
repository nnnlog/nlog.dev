<template>
  <section class="content-hr"></section>
  <section class="content-main">
    <i18n-t keypath="notfound.message" tag="div" class="not-found">
      <template v-slot:back>
        <a @click="$router.go(-1)" class="link">
          <mdicon width="1.5rem" height="1.5rem" name="arrow-left" />
          {{ $t("notfound.back") }}
        </a>
      </template>
    </i18n-t>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFoundView",
});
</script>

<style lang="scss" scoped>
@use "@/styles";

.content-main {
  display: flex;
  align-items: center;
}

.not-found {
  font-size: 2rem;
  font-weight: 600;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: flex-start;
  width: fit-content;

  a {
    cursor: pointer;
    font-size: 1.5rem;
    margin-top: 1rem;
  }

  .mdi {
    margin-right: 1rem;
  }
}
</style>
