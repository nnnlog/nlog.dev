<script setup lang="ts"></script>

<template>
  <section class="content-hr"></section>
  <section class="content-main">
    <div class="header detail">
      {{ $t("project.ssurade.header") }}
      <div class="detail-value">{{ $t("project.ssurade.duration") }}</div>
    </div>
    <ul>
      <li>{{ $t("project.ssurade.description") }}</li>
      <li class="semi-bold">{{ $t("project.ssurade.tech") }}</li>
      <li>{{ $t("project.ssurade.scale") }}</li>
      <li class="semi-bold">
        <a
          href="https://play.google.com/store/apps/details?id=com.nnnlog.ssurade"
          class="link"
          target="_blank"
        >
          {{ $t("project.ssurade.playstore")
          }}<mdicon width="1rem" height="1rem" name="open-in-new" />
        </a>
      </li>
      <li class="none">
        <ul>
          <li class="detail">
            {{ $t("project.ssurade.playstore_installation_count") }}
          </li>
        </ul>
      </li>
      <li class="semi-bold">
        <a
          href="https://github.com/nnnlog/ssurade"
          class="link"
          target="_blank"
        >
          {{ $t("project.ssurade.github")
          }}<mdicon class="up" width="1rem" height="1rem" name="open-in-new" />
        </a>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss"></style>
