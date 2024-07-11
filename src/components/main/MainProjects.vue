<script setup lang="ts"></script>

<template>
  <div class="header" style="margin-top: 6rem">
    {{ $t("main.project.header") }}
  </div>
  <ul>
    <i18n-t keypath="main.project.text" tag="li">
      <template #key>
        <div class="semi-bold">{{ $t("main.project.key") }}</div>
      </template>
      <template #node>
        <b>{{ $t("main.project.node") }}</b>
      </template>
      <template #vue>
        <b>{{ $t("main.project.vue") }}</b>
      </template>
    </i18n-t>
    <li class="bold">
      <router-link to="/project" class="link">
        {{ $t("main.project.link")
        }}<mdicon width="1.5rem" height="1.5rem" name="arrow-right" />
      </router-link>
    </li>
  </ul>
</template>
