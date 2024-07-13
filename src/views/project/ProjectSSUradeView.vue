<script lang="ts" setup></script>

<template>
  <section class="content-hr"></section>
  <section class="content-main">
    <div class="header detail">
      {{ $t("project.ssurade.header") }}
      <span class="detail-value">{{ $t("project.ssurade.duration") }}</span>
    </div>
    <ul>
      <li>{{ $t("project.ssurade.description") }}</li>
      <li class="semi-bold">{{ $t("project.ssurade.tech") }}</li>
      <li>{{ $t("project.ssurade.scale") }}</li>
      <li class="semi-bold">
        <a
          class="link"
          href="https://play.google.com/store/apps/details?id=com.nnnlog.ssurade"
          target="_blank"
        >
          {{ $t("project.ssurade.playstore")
          }}<mdicon height="1rem" name="open-in-new" width="1rem" />
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
          class="link"
          href="https://github.com/nnnlog/ssurade"
          target="_blank"
        >
          {{ $t("project.ssurade.github")
          }}<mdicon class="up" height="1rem" name="open-in-new" width="1rem" />
        </a>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped></style>
