<template>
  <section class="content-hr"></section>
  <section class="content-main">
    <div class="header">{{ $t("activity.index.header") }}</div>
    <div class="sub-header">{{ $t("activity.index.algorithm.header") }}</div>
    <ul>
      <li>{{ $t("activity.index.algorithm.desc1") }}</li>
      <li>{{ $t("activity.index.algorithm.desc2") }}</li>
      <li>{{ $t("activity.index.algorithm.desc3") }}</li>
      <li>
        <router-link class="link bold" to="/activity/algorithm">
          {{ $t("activity.index.algorithm.view")
          }}<mdicon height="1.5rem" name="arrow-right" width="1.5rem" />
        </router-link>
      </li>
    </ul>
    <div class="sub-header" style="margin-top: 2rem">
      {{ $t("activity.index.ssu.header") }}
    </div>
    <ul>
      <li class="semi-bold">{{ $t("activity.index.ssu.desc1.header") }}</li>
      <li class="none">
        <ul>
          <li>{{ $t("activity.index.ssu.desc1.desc1") }}</li>
          <li>{{ $t("activity.index.ssu.desc1.desc2") }}</li>
          <li>{{ $t("activity.index.ssu.desc1.desc3") }}</li>
        </ul>
      </li>
      <li class="semi-bold">
        {{ $t("activity.index.ssu.desc2") }}
      </li>
      <li>
        <router-link class="link bold" to="/activity/univ">
          {{ $t("activity.index.ssu.view")
          }}<mdicon height="1.5rem" name="arrow-right" width="1.5rem" />
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup></script>
