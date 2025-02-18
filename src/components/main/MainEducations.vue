<script lang="ts" setup></script>

<template>
  <div class="header" style="margin-top: 6rem">
    {{ $t("main.educations.header") }}
  </div>
  <i18n-t
    class="sub-header detail"
    keypath="main.educations.bachelor.header"
    tag="div"
  >
    <template #duration>
      <i18n-t
        class="detail-value"
        keypath="main.educations.bachelor.duration"
        tag="div"
      ></i18n-t>
    </template>
  </i18n-t>
  <ul>
    <i18n-t
      class="detail semi-bold"
      keypath="main.educations.bachelor.grade"
      tag="li"
    >
      <template #rank>
        <span class="detail-value">{{
          $t("main.educations.bachelor.rank")
        }}</span>
      </template>
    </i18n-t>
    <i18n-t
      class="detail"
      keypath="main.educations.bachelor.scholarship"
      tag="li"
    >
      <template #duration>
        <span class="detail-value">
          {{ $t("main.educations.bachelor.scholarship_duration") }}
        </span>
      </template>
    </i18n-t>
    <i18n-t
      class="detail"
      keypath="main.educations.bachelor.undergraduate"
      tag="li"
    >
      <template #duration>
        <span class="detail-value">
          {{ $t("main.educations.bachelor.undergraduate_duration") }}
        </span>
      </template>
    </i18n-t>
    <i18n-t
      class="detail"
      keypath="main.educations.bachelor.sccc.header"
      tag="li"
    >
      <template #duration>
        <span class="detail-value">
          {{ $t("main.educations.bachelor.sccc.duration") }}
        </span>
      </template>
    </i18n-t>
    <li class="none">
      <ul>
        <i18n-t keypath="main.educations.bachelor.sccc.study" tag="li">
          <template #duration>
            <span class="detail-value">
              {{ $t("main.educations.bachelor.sccc.duration") }}
            </span>
          </template>
        </i18n-t>
        <i18n-t keypath="main.educations.bachelor.sccc.scon" tag="li">
          <template #duration>
            <span class="detail-value">
              {{ $t("main.educations.bachelor.sccc.scon_duration") }}
            </span>
          </template>
        </i18n-t>
        <li class="detail">
          <a class="link" href="https://sccc.kr" target="_blank">
            <span>{{ $t("main.educations.bachelor.sccc.homepage") }}</span>
            <mdicon class="up" height="1rem" name="open-in-new" width="1rem" />
          </a>
        </li>
      </ul>
    </li>
    <li class="semi-bold">
      <router-link class="link" to="/activity/univ">
        {{ $t("main.educations.bachelor.completed_subject")
        }}<mdicon height="1.5rem" name="arrow-right" width="1.5rem" />
      </router-link>
    </li>
  </ul>
</template>
