<script lang="ts" setup></script>

<template>
  <div class="header" style="margin-top: 6rem">
    {{ $t("main.career.header") }}
  </div>
  <i18n-t
    class="sub-header detail"
    keypath="main.career.daangn.header"
    tag="div"
  >
    <template #duration>
      <span class="detail-value">
        {{ $t("main.career.daangn.duration") }}
      </span>
    </template>
  </i18n-t>
  <ul>
    <li class="detail semi-bold">{{ $t("main.career.daangn.tbd") }}</li>
  </ul>
</template>
