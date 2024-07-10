<template>
  <section class="content-hr"></section>
  <section class="content-main">
    <div class="header">Project</div>
    <div class="sub-header">SSUrade</div>
    <ul>
      <li>Inquiry school information such as grade, attendance, etc.</li>
      <li class="semi-bold">Technology: Flutter, Javascript</li>
      <li class="semi-bold">
        <router-link to="/project/ssurade" class="link">
          View details about SSUrade<mdicon
            width="1.5rem"
            height="1.5rem"
            name="arrow-right"
          />
        </router-link>
      </li>
      <li class="semi-bold">
        <a
          href="https://github.com/nnnlog/ssurade"
          class="link"
          target="_blank"
        >
          Github<mdicon
            class="up"
            width="1rem"
            height="1rem"
            name="open-in-new"
          />
        </a>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ActivityView",
});
</script>

<style lang="scss" scoped>
@use "@/styles";
</style>
