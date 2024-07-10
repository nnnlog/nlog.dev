<script setup lang="ts"></script>

<template>
  <div class="header" style="margin-top: 6rem">Education</div>
  <div class="sub-header detail">
    Bachelor, Computer Science & Engineering, Soongsil University
    <div class="detail-value">
      (2022.03 ~ 2025.02 <sup>Expected to graduate</sup>)
    </div>
  </div>
  <ul>
    <li class="detail semi-bold">
      GPA 4.32 / 4.50
      <div class="detail-value">(Class Rank 3/142)</div>
    </li>
    <li class="none">
      <ul>
        <li>Major GPA 4.30 / 4.50</li>
      </ul>
    </li>
    <li class="detail">
      Undergraduate student in Database Lab, Soongsil University
      <div class="detail-value">(2022.03 ~ )</div>
    </li>
    <li class="detail">
      President & Executives of SCCC, Problem Solving Club in CSE department
      <div class="detail-value">(2023.03 ~ )</div>
    </li>
    <li class="none">
      <ul>
        <li class="detail">
          Open study for algorithms, basic C language, and logical circuit
          (digital engineering)
          <div class="detail-value">(2023.04)</div>
        </li>
        <li class="detail">
          Executive Director of 2023 Soongsil University Programming Contest
          <div class="detail-value">(2023.04)</div>
        </li>
        <li class="detail">
          <a class="link" href="https://sccc.kr" target="_blank">
            SCCC Homepage
            <mdicon width="1rem" height="1rem" name="open-in-new" class="up" />
          </a>
        </li>
      </ul>
    </li>
    <li class="semi-bold">
      <router-link to="/activity/univ" class="link">
        View completed subjects' summary in university
        <mdicon width="1.5rem" height="1.5rem" name="arrow-right" />
      </router-link>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@use "@/styles";
</style>
