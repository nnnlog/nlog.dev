<template>
  <section class="content-hr"></section>
  <section class="content-main">
    <div class="header">Activity</div>
    <div class="sub-header">in Algorithm Field</div>
    <ul>
      <li>Participating on Contest</li>
      <li>Operating Contest</li>
      <li>Lecturer of Algorithm class</li>
      <li>
        <router-link to="/activity/algorithm" class="link bold">
          View all activities related to algorithm<mdicon
            width="1.5rem"
            height="1.5rem"
            name="arrow-right"
          />
        </router-link>
      </li>
    </ul>
    <div class="sub-header" style="margin-top: 2rem">
      in Soongsil University
    </div>
    <ul>
      <li class="semi-bold">Listened mainly subjects</li>
      <li class="none">
        <ul>
          <li>Linux System Programming, Operating System</li>
          <li>Network Programming, Computer Network</li>
          <li>Computer Vision</li>
        </ul>
      </li>
      <li class="semi-bold">
        President, Executives in SCCC, Problem Solving Club in CSE department
      </li>
      <li>
        <router-link to="/activity/univ" class="link bold">
          View detailed activities in the school<mdicon
            width="1.5rem"
            height="1.5rem"
            name="arrow-right"
          />
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ActivityView",
});
</script>

<style lang="scss" scoped>
@use "@/styles";
</style>
