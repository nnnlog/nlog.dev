<script setup lang="ts"></script>

<template>
  <div class="header" style="margin-top: 6rem">
    {{ $t("main.experience.header") }}
  </div>
  <i18n-t
    keypath="main.experience.algorithm.header"
    tag="div"
    class="sub-header detail"
  >
    <template #duration>
      <div class="detail-value">
        {{ $t("main.experience.algorithm.duration") }}
      </div>
    </template>
  </i18n-t>
  <ul>
    <i18n-t
      keypath="main.experience.algorithm.icpc.icpcwf"
      tag="li"
      class="detail semi-bold"
    >
      <template #th>
        <sup>{{ $t("_number_format.th") }}</sup>
      </template>
      <template #duration>
        <div class="detail-value">
          {{ $t("main.experience.algorithm.icpc.icpcwf_duration") }}
        </div>
      </template>
    </i18n-t>
    <li class="none">
      <ul>
        <i18n-t
          keypath="main.experience.algorithm.icpc.icpc2022"
          class="detail"
          tag="li"
        >
          <template #rank>
            <sup>{{ $t("main.experience.algorithm.icpc.icpc2022_rank") }}</sup>
          </template>
          <template #duration>
            <div class="detail-value">
              {{ $t("main.experience.algorithm.icpc.icpc2022_duration") }}
            </div>
          </template>
        </i18n-t>
      </ul>
    </li>
    <i18n-t
      keypath="main.experience.algorithm.koi_ta.header"
      tag="li"
      class="detail semi-bold"
    >
      <template #duration>
        <div class="detail-value">
          {{ $t("main.experience.algorithm.koi_ta.duration") }}
        </div>
      </template>
    </i18n-t>
    <li class="none">
      <ul>
        <i18n-t
          keypath="main.experience.algorithm.koi_ta.koi2024first"
          tag="li"
          class="detail"
        >
          <template #st>
            <sup>{{ $t("_number_format.st") }}</sup>
          </template>
          <template #duration>
            <div class="detail-value">
              {{ $t("main.experience.algorithm.koi_ta.koi2024first_duration") }}
            </div>
          </template>
        </i18n-t>
        <i18n-t
          keypath="main.experience.algorithm.koi_ta.ioi_camp"
          tag="li"
          class="detail"
        >
          <template #duration>
            <div class="detail-value">
              {{ $t("main.experience.algorithm.koi_ta.ioi_camp_duration") }}
            </div>
          </template>
        </i18n-t>
      </ul>
    </li>
    <i18n-t
      keypath="main.experience.algorithm.koi_award.first_general"
      tag="li"
      class="detail"
    >
      <template #st>
        <sup>{{ $t("_number_format.st") }}</sup>
      </template>
      <template #th>
        <sup>{{ $t("_number_format.th") }}</sup>
      </template>
      <template #duration>
        <div class="detail-value">
          {{ $t("main.experience.algorithm.koi_award.first_duration") }}
        </div>
      </template>
    </i18n-t>
    <li class="bold">
      <router-link to="/activity/algorithm" class="link">
        <div>{{ $t("main.experience.algorithm.view_all") }}</div>
        <mdicon width="1.5rem" height="1.5rem" name="arrow-right" />
      </router-link>
    </li>
  </ul>
  <i18n-t
    keypath="main.experience.software.header"
    tag="div"
    class="sub-header detail"
    style="margin-top: 2rem"
  >
    <template #duration>
      <div class="detail-value">
        {{ $t("main.experience.software.duration") }}
      </div>
    </template>
  </i18n-t>
  <ul>
    <i18n-t
      keypath="main.experience.software.soma.header"
      tag="li"
      class="detail semi-bold"
    >
      <template #th>
        <sup>{{ $t("_number_format.th") }}</sup>
      </template>
      <template #duration>
        <div class="detail-value">
          {{ $t("main.experience.software.soma.duration") }}
        </div>
      </template>
    </i18n-t>
    <li class="none">
      <ul>
        <i18n-t keypath="main.experience.software.soma.project" tag="li">
          <template #detail>
            <router-link to="/project/codemap" class="link">
              {{ $t("main.experience.software.soma.project_detail")
              }}<mdicon width="1.5rem" height="1.5rem" name="arrow-right" />
            </router-link>
          </template>
        </i18n-t>
      </ul>
    </li>
    <i18n-t
      keypath="main.experience.software.bob.header"
      tag="li"
      class="detail"
    >
      <template #th>
        <sup>{{ $t("_number_format.th") }}</sup>
      </template>
      <template #duration>
        <div class="detail-value">
          {{ $t("main.experience.software.bob.duration") }}
        </div>
      </template>
    </i18n-t>
    <li class="none">
      <ul>
        <i18n-t
          keypath="main.experience.software.bob.award"
          tag="li"
          class="detail"
        >
          <template #th>
            <sup>{{ $t("_number_format.th") }}</sup>
          </template>
          <template #duration>
            <div class="detail-value">
              {{ $t("main.experience.software.bob.award_duration") }}
            </div>
          </template>
        </i18n-t>
      </ul>
    </li>
    <i18n-t
      keypath="main.experience.software.high_school.header"
      tag="li"
      class="detail"
    >
      <template #duration>
        <div class="detail-value">
          {{ $t("main.experience.software.high_school.duration") }}
        </div>
      </template>
    </i18n-t>
  </ul>
</template>
