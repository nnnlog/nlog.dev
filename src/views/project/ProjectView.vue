<template>
  <section class="content-hr"></section>
  <section class="content-main">
    <div class="header">{{ $t("project.index.header") }}</div>
    <div class="sub-header">{{ $t("project.index.ssurade.header") }}</div>
    <ul>
      <li>{{ $t("project.index.ssurade.description") }}</li>
      <li class="semi-bold">{{ $t("project.index.ssurade.tech") }}</li>
      <li class="semi-bold">
        <router-link to="/project/ssurade" class="link">
          {{ $t("project.index.ssurade.view")
          }}<mdicon width="1.5rem" height="1.5rem" name="arrow-right" />
        </router-link>
      </li>
      <li class="semi-bold">
        <a
          href="https://github.com/nnnlog/ssurade"
          class="link"
          target="_blank"
        >
          {{ $t("project.index.ssurade.github")
          }}<mdicon class="up" width="1rem" height="1rem" name="open-in-new" />
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
