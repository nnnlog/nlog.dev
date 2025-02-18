<template>
  <section class="content-hr bottom"></section>
  <section class="content-main">
    <MainInformation></MainInformation>
    <MainEmployments></MainEmployments>
    <MainActivities></MainActivities>
    <MainEducations></MainEducations>
    <MainProjects></MainProjects>
  </section>
</template>

<script lang="ts" setup>
import MainInformation from "@/components/main/MainInformation.vue";
import MainActivities from "@/components/main/MainActivities.vue";
import MainEducations from "@/components/main/MainEducations.vue";
import MainProjects from "@/components/main/MainProjects.vue";
import MainEmployments from "@/components/main/MainEmployments.vue";
</script>
