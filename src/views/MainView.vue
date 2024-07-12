<template>
  <section class="content-hr bottom"></section>
  <section class="content-main">
    <MainInformation></MainInformation>
    <MainExperience></MainExperience>
    <MainEducation></MainEducation>
    <MainProjects></MainProjects>
  </section>
</template>

<script lang="ts" setup>
import MainInformation from "@/components/main/MainInformation.vue";
import MainExperience from "@/components/main/MainExperience.vue";
import MainEducation from "@/components/main/MainEducation.vue";
import MainProjects from "@/components/main/MainProjects.vue";
</script>
