<template>
  <Performance/>
  <div class="project" :class="(current ? '' : 'hide-scroll') + ' ' + animation">
    <div :class="current ? 'project-scroll' : ''">
      <div class="project-wrapper">
        <Navigator skip/>
        <div class="project-main">
          <Title icon="developer-board" text="Project"/>
          <main class="project-content">
            <Program v-for="({icon, name, link, desc, lang}) of programs" :icon="icon" :name="name" :link="link"
                     :desc="desc" :lang="lang"></Program>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title";
import Navigator from "@/components/Navigator";
import SubTitle from "@/components/SubTitle";
import PrefixText from "@/components/PrefixText";
import SuffixText from "@/components/SuffixText";
import DetailText from "@/components/DetailText";
import Main from "@/views/Main";
import Intro from "@/views/Intro";
import Performance from "@/views/Performance";
import Program from "@/components/Program";

export default {
  name: 'Project',
  components: {Program, Performance, Intro, Main, DetailText, SuffixText, PrefixText, SubTitle, Title, Navigator},
  data() {
    return {
      programs: [
        {
          icon: "school-outline",
          name: "dongo",
          link: "https://github.com/dongnae/dongo-be",
          desc: "동래고등학교 수강 신청 프로그램",
          lang: ['nodejs', 'vue'],
        },
        {
          icon: "clock-time-nine-outline",
          name: "Libreism",
          link: "https://github.com/organization/Libreism",
          desc: "서버 시간 조회 프로그램",
          lang: ['cpp', 'vue'],
        },
        {
          icon: "syllabary-hiragana",
          name: "japanese",
          link: "https://github.com/nnnlog/japanese",
          desc: "일본어 단어 학습 프로그램",
          lang: ['vue'],
        },
      ],
      animation: ""
    }
  },
  computed: {
    current() {
      return this.$route.path.substr(-1) === "4";
    },
    prev() {
      return this.current && this.$store.getters.prev;
    },
    next() {
      return this.current && this.$store.getters.next;
    },
  },
  watch: {
    prev(prev) {
      if (prev) {
        this.animation = "right-to-left";
        this.$store.dispatch('prev', false);
      }
    }
  },
  created() {
    if (this.next) {
      this.animation = "left-to-right";
      this.$store.dispatch('next', false);
    }
  }
}
</script>

<style scoped>
.project {
  height: calc(100% - 10px);
  width: calc(94% - 5px);

  padding: 5px 5px 5px 0;

  overflow-y: scroll;

  background-color: white;

  box-shadow: 4px 4px 64px 16px rgba(0, 0, 0, 0.25);
  border-radius: 0 5px 5px 0;

  position: absolute;
}

.project-scroll {
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
}

.project-wrapper {
  position: relative;

  padding: 100px;
}

.project-main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.project-content {
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px 0;

  margin-top: 60px;
  margin-left: 25px;
}
</style>
