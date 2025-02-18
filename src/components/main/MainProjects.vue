<script lang="ts" setup></script>

<template>
  <div class="header" style="margin-top: 6rem">
    {{ $t("main.projects.header") }}
  </div>
  <ul>
    <i18n-t keypath="main.projects.text" tag="li">
      <template #key>
        <div class="semi-bold">{{ $t("main.projects.key") }}</div>
      </template>
      <template #node>
        <b>{{ $t("main.projects.node") }}</b>
      </template>
      <template #vue>
        <b>{{ $t("main.projects.vue") }}</b>
      </template>
    </i18n-t>
    <li class="bold">
      <router-link class="link" to="/project">
        {{ $t("main.projects.link")
        }}<mdicon height="1.5rem" name="arrow-right" width="1.5rem" />
      </router-link>
    </li>
  </ul>
</template>
