<script lang="ts" setup>
const isArray = Array.isArray;
</script>

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
    <template
      v-for="(item, index) in $tm('main.employments.google.details')"
      :key="index"
    >
      <li v-if="!isArray(item)" class="detail">
        {{ $rt(item) }}
      </li>
      <li v-else class="none">
        <ul>
          <li
            v-for="(subItem, subIndex) in item"
            :key="subIndex"
            class="detail"
          >
            {{ $rt(subItem) }}
          </li>
        </ul>
      </li>
    </template>
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
    <template
      v-for="(item, index) in $tm('main.employments.moloco.details')"
      :key="index"
    >
      <li v-if="!isArray(item)" class="detail">
        {{ $rt(item) }}
      </li>
      <li v-else class="detail" style="list-style-type: none">
        <ul>
          <li
            v-for="(subItem, subIndex) in item"
            :key="subIndex"
            class="detail"
          >
            {{ $rt(subItem) }}
          </li>
        </ul>
      </li>
    </template>
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
    <template
      v-for="(item, index) in $tm('main.employments.karrot.details')"
      :key="index"
    >
      <li v-if="!isArray(item)" class="detail">
        {{ $rt(item) }}
      </li>
      <li v-else class="detail" style="list-style-type: none">
        <ul>
          <li
            v-for="(subItem, subIndex) in item"
            :key="subIndex"
            class="detail"
          >
            {{ $rt(subItem) }}
          </li>
        </ul>
      </li>
    </template>
  </ul>
</template>
