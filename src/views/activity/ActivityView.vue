<template>
  <section class="content-hr"></section>
  <section class="content-main">
    <div class="header">{{ $t("activities.index.header") }}</div>
    <div class="sub-header">{{ $t("activities.index.algorithm.header") }}</div>
    <ul>
      <li>{{ $t("activities.index.algorithm.desc1") }}</li>
      <li>{{ $t("activities.index.algorithm.desc2") }}</li>
      <li>{{ $t("activities.index.algorithm.desc3") }}</li>
      <li>
        <router-link class="link bold" to="/activity/algorithm">
          {{ $t("activities.index.algorithm.view")
          }}<mdicon height="1.5rem" name="arrow-right" width="1.5rem" />
        </router-link>
      </li>
    </ul>
    <div class="sub-header" style="margin-top: 2rem">
      {{ $t("activities.index.ssu.header") }}
    </div>
    <ul>
      <li class="semi-bold">{{ $t("activities.index.ssu.desc1.header") }}</li>
      <li class="none">
        <ul>
          <li>{{ $t("activities.index.ssu.desc1.desc1") }}</li>
          <li>{{ $t("activities.index.ssu.desc1.desc2") }}</li>
          <li>{{ $t("activities.index.ssu.desc1.desc3") }}</li>
        </ul>
      </li>
      <li class="semi-bold">
        {{ $t("activities.index.ssu.desc2") }}
      </li>
      <li>
        <router-link class="link bold" to="/activity/univ">
          {{ $t("activities.index.ssu.view")
          }}<mdicon height="1.5rem" name="arrow-right" width="1.5rem" />
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup></script>
