<template>
  <section class="content-hr bottom"></section>
  <section class="content-main">
    <MainInformation></MainInformation>
    <MainExperience></MainExperience>
    <MainEducation></MainEducation>
    <MainProjects></MainProjects>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainInformation from "@/components/main/MainInformation.vue";
import MainExperience from "@/components/main/MainExperience.vue";
import MainEducation from "@/components/main/MainEducation.vue";
import MainProjects from "@/components/main/MainProjects.vue";

export default defineComponent({
  name: "MainView",
  components: { MainProjects, MainEducation, MainExperience, MainInformation },
});
</script>

<style lang="scss" scoped>
@use "@/styles";
</style>
