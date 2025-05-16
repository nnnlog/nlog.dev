<script lang="ts" setup></script>

<template>
  <div class="header" style="margin-top: 6rem">
    {{ $t("main.employments.header") }}
  </div>
  <i18n-t
    class="sub-header detail"
    keypath="main.employments.google.header"
    tag="div"
  >
    <template #duration>
      <span class="detail-value">
        {{ $t("main.employments.google.duration") }}
      </span>
    </template>
  </i18n-t>
  <ul>
    <li
      v-for="item in $tm('main.employments.google.details')"
      class="detail"
      :key="item"
    >
      {{ $rt(item) }}
    </li>
  </ul>
  <i18n-t
    class="sub-header detail"
    keypath="main.employments.moloco.header"
    style="margin-top: 2rem"
    tag="div"
  >
    <template #duration>
      <span class="detail-value">
        {{ $t("main.employments.moloco.duration") }}
      </span>
    </template>
  </i18n-t>
  <ul>
    <li
      v-for="item in $tm('main.employments.moloco.details')"
      class="detail"
      :key="item"
    >
      {{ $rt(item) }}
    </li>
  </ul>
  <i18n-t
    class="sub-header detail"
    keypath="main.employments.karrot.header"
    style="margin-top: 2rem"
    tag="div"
  >
    <template #duration>
      <span class="detail-value">
        {{ $t("main.employments.karrot.duration") }}
      </span>
    </template>
  </i18n-t>
  <ul>
    <li
      v-for="item in $tm('main.employments.karrot.details')"
      class="detail"
      :key="item"
    >
      {{ $rt(item) }}
    </li>
  </ul>
</template>
