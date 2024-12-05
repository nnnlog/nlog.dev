<script lang="ts" setup></script>

<template>
  <div class="header" style="margin-top: 6rem">
    {{ $t("main.career.header") }}
  </div>
  <i18n-t
    class="sub-header detail"
    keypath="main.career.moloco.header"
    tag="div"
  >
    <template #duration>
      <span class="detail-value">
        {{ $t("main.career.moloco.duration") }}
      </span>
    </template>
  </i18n-t>
  <ul>
    <li class="detail semi-bold">{{ $t("main.career.moloco.tbd") }}</li>
  </ul>
  <i18n-t
    class="sub-header detail"
    keypath="main.career.daangn.header"
    style="margin-top: 2rem"
    tag="div"
  >
    <template #duration>
      <span class="detail-value">
        {{ $t("main.career.daangn.duration") }}
      </span>
    </template>
  </i18n-t>
  <ul>
    <li
      v-for="item in $tm('main.career.daangn.details')"
      class="detail"
      :key="item"
    >
      {{ $rt(item) }}
    </li>
  </ul>
</template>
