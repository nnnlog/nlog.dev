<template>
  <section class="content-hr bottom"></section>
  <section class="content-main">
    <div class="not-found">
      There is no page that you are looking for!
      <a @click="$router.go(-1)" class="link">
        <mdicon width="1.5rem" height="1.5rem" name="arrow-left" />
        Go back
      </a>
    </div>
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
