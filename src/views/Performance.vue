<template>
  <Intro/>
  <div class="perf" :class="(current ? '' : 'hide-scroll') + ' ' + animation">
    <div :class="current ? 'perf-scroll' : ''">
      <div class="perf-wrapper">
        <Navigator/>
        <div class="perf-main">
          <Title icon="chart-line-variant" text="Performance"/>
          <main class="perf-content">
            <div class="perf-part">
              <SubTitle icon="trophy-variant-outline" text="Awards"/>
              <ul class="perf-part-list">
                <PrefixText v-for="({prefix, text}) of awards" :prefix="prefix" :text="text"/>
              </ul>
            </div>
            <div class="perf-part">
              <SubTitle icon="monitor" text="Activity"/>
              <ul class="perf-part-list">
                <DetailText v-for="({text, detail}) of activities" :text="text" :detail="detail"/>
              </ul>
            </div>
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

export default {
  name: 'Performance',
  components: {Intro, Main, DetailText, SuffixText, PrefixText, SubTitle, Title, Navigator},
  data() {
    return {
      awards: [
        {prefix: "(2020.08.)", text: "제 5회 국민대학교 알고리즘 대회 장려상"},
        {prefix: "(2021.09.)", text: "2020 부산 코딩경진대회 고등부 대상"},
        {prefix: "(2021.06.)\n\n\n", text: "제 38회 한국정보올림피아드\n1차 대회 고등부\n일반고부문 은상, 전체응시자부문 동상"},
        {prefix: "(2021.08.)\n\n", text: "제 38회 한국정보올림피아드\n2차 대회 고등부 장려상"},
        {prefix: "(2021.08.)", text: "2021 부산 코딩경진대회 고등부 대상"},
        {prefix: "(2021.08.)", text: "제 6회 국민대학교 알고리즘 대회 동상"},
      ],
      activities: [
        {text: "차세대 보안리더 양성 프로그램\n(BEST OF THE BEST 9기) 보안제품개발 수료", detail: "- 2020.07. ~ 2021.03."},
      ],
      animation: ""
    }
  },
  computed: {
    current() {
      return this.$route.path.substr(-1) === "3";
    },
    prev() {
      return this.current && this.$store.getters.prev;
    },
    next() {
      return this.current && this.$store.getters.next;
    },
    info() {
      return this.$store.getters.info;
    }
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
.perf {
  height: calc(100% - 10px);
  width: calc(96% - 5px);

  padding: 5px 5px 5px 0;

  overflow-y: scroll;

  background-color: white;

  box-shadow: 4px 4px 64px 16px rgba(0, 0, 0, 0.25);
  border-radius: 0 5px 5px 0;

  position: absolute;
}

.perf-scroll {
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
}

.perf-wrapper {
  position: relative;

  padding: 100px;
}

.perf-main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.perf-content {
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-top: 60px;
  margin-left: 25px;
}

.perf-part {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  flex: 1;
  width: 100%;
}

.perf-part-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 0;
  margin: 20px 0 0 10px;
}


@media (max-width: 900px) {
  .perf-wrapper {
    padding: 50px;
  }

  .perf-content {
    margin-top: 30px;
    margin-left: 5px;

    flex-direction: column;
  }

  .perf-nxt, .perf-part:last-child {
    margin-top: 40px;
  }
}
</style>

<style>
@media (max-width: 900px) {
  p {
    white-space: break-spaces;
  }
}
</style>
