<script setup lang="ts"></script>

<template>
  <div class="header">Information</div>
  <div class="information">
    <div class="info-row">
      <div class="info-key">Name</div>
      <div class="info-value bold">Chansol Park</div>
    </div>
    <div class="info-row">
      <div class="info-key">Email</div>
      <div class="info-value link bold">
        <a href="mailto:sorisem4106@naver.com" target="_blank">
          sorisem4106@naver.com
        </a>
      </div>
    </div>
    <div class="info-row">
      <div class="info-key">Place</div>
      <div class="info-value">Seoul, Republic of Korea</div>
    </div>
    <div class="info-row">
      <div class="info-key">Nation</div>
      <div class="info-value">Republic of Korea</div>
    </div>
  </div>
  <div class="sub-header" style="margin-top: 3rem">External Links</div>
  <div class="information">
    <div class="info-row">
      <div class="info-key">Github</div>
      <div class="info-value bold link">
        <a href="https://github.com/nnnlog" target="_blank">nnnlog</a>
      </div>
    </div>
    <div class="info-row">
      <div class="info-key">ICPCID</div>
      <div class="info-value">
        <a
          href="https://icpc.global/ICPCID/IZEFL2OKWZE1"
          class="link"
          target="_blank"
        >
          Link<mdicon
            width="1rem"
            height="1rem"
            name="open-in-new"
            class="up"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/styles";

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
</style>
