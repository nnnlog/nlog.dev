<script lang="ts" setup></script>

<template>
  <div class="header">{{ $t("main.information.header") }}</div>
  <div class="information">
    <div class="info-row">
      <div class="info-key">{{ $t("main.information.name.key") }}</div>
      <div class="info-value bold">{{ $t("main.information.name.value") }}</div>
    </div>
    <div class="info-row">
      <div class="info-key">{{ $t("main.information.alt_name.key") }}</div>
      <div class="info-value bold">
        {{ $t("main.information.alt_name.value") }}
      </div>
    </div>
    <div class="info-row">
      <div class="info-key">{{ $t("main.information.email.key") }}</div>
      <div class="info-value link bold">
        <a href="mailto:sorisem4106@naver.com" target="_blank">
          {{ $t("main.information.email.value") }}
        </a>
      </div>
    </div>
    <div class="info-row">
      <div class="info-key">{{ $t("main.information.place.key") }}</div>
      <div class="info-value">{{ $t("main.information.place.value") }}</div>
    </div>
    <div class="info-row">
      <div class="info-key">{{ $t("main.information.nation.key") }}</div>
      <div class="info-value">{{ $t("main.information.nation.value") }}</div>
    </div>
  </div>
  <div class="sub-header" style="margin-top: 3rem">
    {{ $t("main.information.external") }}
  </div>
  <div class="information">
    <div class="info-row">
      <div class="info-key">{{ $t("main.information.github.key") }}</div>
      <div class="info-value bold link">
        <a href="https://github.com/nnnlog" target="_blank">{{
          $t("main.information.github.value")
        }}</a>
      </div>
    </div>
    <div class="info-row">
      <div class="info-key">{{ $t("main.information.linkedin.key") }}</div>
      <div class="info-value">
        <a
          class="link"
          href="https://www.linkedin.com/in/nnnlog/"
          target="_blank"
          >{{ $t("main.information.icpc.value") }}
          <mdicon class="up" height="1rem" name="open-in-new" width="1rem" />
        </a>
      </div>
    </div>
    <div class="info-row">
      <div class="info-key">{{ $t("main.information.icpc.key") }}</div>
      <div class="info-value">
        <a
          class="link"
          href="https://icpc.global/ICPCID/IZEFL2OKWZE1"
          target="_blank"
          >{{ $t("main.information.icpc.value") }}
          <mdicon class="up" height="1rem" name="open-in-new" width="1rem" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.information {
  display: flex;
  flex-direction: column;
}

.info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  width: 30rem;
}

.info-key {
  margin-right: 2rem;
  font-weight: 400;
  font-size: 1.5rem;
}

.info-value {
  font-size: 1.5rem;
  text-align: right;
}

@media screen and (max-width: 600px) {
  .info-row {
    width: 100%;
  }
}
</style>
