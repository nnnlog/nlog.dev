<script setup lang="ts"></script>

<template>
  <div class="header" style="margin-top: 6rem">
    {{ $t("main.education.header") }}
  </div>
  <i18n-t
    keypath="main.education.bachelor.header"
    class="sub-header detail"
    tag="div"
  >
    <template #duration>
      <i18n-t
        keypath="main.education.bachelor.duration"
        class="detail-value"
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
      keypath="main.education.bachelor.grade"
      tag="li"
      class="detail semi-bold"
    >
      <template #rank>
        <div class="detail-value">{{ $t("main.education.bachelor.rank") }}</div>
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
      keypath="main.education.bachelor.undergraduate"
      tag="li"
      class="detail"
    >
      <template #duration>
        <div class="detail-value">
          {{ $t("main.education.bachelor.undergraduate_duration") }}
        </div>
      </template>
    </i18n-t>
    <i18n-t
      keypath="main.education.bachelor.sccc.header"
      tag="li"
      class="detail"
    >
      <template #duration>
        <div class="detail-value">
          {{ $t("main.education.bachelor.sccc.duration") }}
        </div>
      </template>
    </i18n-t>
    <li class="none">
      <ul>
        <i18n-t keypath="main.education.bachelor.sccc.study" tag="li">
          <template #duration>
            <div class="detail-value">
              {{ $t("main.education.bachelor.sccc.duration") }}
            </div>
          </template>
        </i18n-t>
        <i18n-t keypath="main.education.bachelor.sccc.scon" tag="li">
          <template #duration>
            <div class="detail-value">
              {{ $t("main.education.bachelor.sccc.scon_duration") }}
            </div>
          </template>
        </i18n-t>
        <li class="detail">
          <a class="link" href="https://sccc.kr" target="_blank">
            <div>{{ $t("main.education.bachelor.sccc.homepage") }}</div>
            <mdicon width="1rem" height="1rem" name="open-in-new" class="up" />
          </a>
        </li>
      </ul>
    </li>
    <li class="semi-bold">
      <router-link to="/activity/univ" class="link">
        {{ $t("main.education.bachelor.completed_subject") }}
        <mdicon width="1.5rem" height="1.5rem" name="arrow-right" />
      </router-link>
    </li>
  </ul>
</template>
