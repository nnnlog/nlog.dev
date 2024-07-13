<script lang="ts" setup></script>

<template>
  <div class="header" style="margin-top: 6rem">
    {{ $t("main.education.header") }}
  </div>
  <i18n-t
    class="sub-header detail"
    keypath="main.education.bachelor.header"
    tag="div"
  >
    <template #duration>
      <i18n-t
        class="detail-value"
        keypath="main.education.bachelor.duration"
        tag="div"
      >
        <template #expect>
          <sup>{{ $t("main.education.bachelor.graduate_expected") }}</sup>
        </template>
      </i18n-t>
    </template>
  </i18n-t>
  <ul>
    <i18n-t
      class="detail semi-bold"
      keypath="main.education.bachelor.grade"
      tag="li"
    >
      <template #rank>
        <span class="detail-value">{{
          $t("main.education.bachelor.rank")
        }}</span>
      </template>
    </i18n-t>
    <li class="none">
      <ul>
        <li>
          <div>{{ $t("main.education.bachelor.major_gpa") }}</div>
        </li>
      </ul>
    </li>
    <i18n-t
      class="detail"
      keypath="main.education.bachelor.undergraduate"
      tag="li"
    >
      <template #duration>
        <span class="detail-value">
          {{ $t("main.education.bachelor.undergraduate_duration") }}
        </span>
      </template>
    </i18n-t>
    <i18n-t
      class="detail"
      keypath="main.education.bachelor.sccc.header"
      tag="li"
    >
      <template #duration>
        <span class="detail-value">
          {{ $t("main.education.bachelor.sccc.duration") }}
        </span>
      </template>
    </i18n-t>
    <li class="none">
      <ul>
        <i18n-t keypath="main.education.bachelor.sccc.study" tag="li">
          <template #duration>
            <span class="detail-value">
              {{ $t("main.education.bachelor.sccc.duration") }}
            </span>
          </template>
        </i18n-t>
        <i18n-t keypath="main.education.bachelor.sccc.scon" tag="li">
          <template #duration>
            <span class="detail-value">
              {{ $t("main.education.bachelor.sccc.scon_duration") }}
            </span>
          </template>
        </i18n-t>
        <li class="detail">
          <a class="link" href="https://sccc.kr" target="_blank">
            <span>{{ $t("main.education.bachelor.sccc.homepage") }}</span>
            <mdicon class="up" height="1rem" name="open-in-new" width="1rem" />
          </a>
        </li>
      </ul>
    </li>
    <li class="semi-bold">
      <router-link class="link" to="/activity/univ">
        {{ $t("main.education.bachelor.completed_subject")
        }}<mdicon height="1.5rem" name="arrow-right" width="1.5rem" />
      </router-link>
    </li>
  </ul>
</template>
