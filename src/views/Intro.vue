<template>
  <Main/>
  <div class="intro" :class="(current ? '' : 'hide-scroll') + ' ' + animation">
    <div :class="current ? 'intro-scroll' : ''">
      <div class="intro-wrapper">
        <Navigator/>
        <div class="intro-main">
          <Title icon="widgets-outline" text="Intro"/>
          <main class="intro-content">
            <div class="intro-part">
              <SubTitle icon="card-bulleted-outline" text="Name"/>
              <ul class="intro-indent">
                <SuffixText text="박찬솔" suffix="(ChanSol Park)"/>
                <SuffixText text="엔로그" suffix="(nlog)" small/>
              </ul>
              <div class="intro-nxt"></div>
              <SubTitle icon="near-me" text="Contact"/>
              <ul class="intro-indent">
                <li><a href="mailto:me@nlog.dev">me@nlog.dev</a></li>
                <li><a href="https://t.me/nnnlog" target="_blank" class="intro-font-spec">@nnnlog</a></li>
              </ul>
              <div class="intro-nxt"></div>
              <SubTitle icon="school" text="Education"/>
              <ul class="intro-indent">
                <PrefixText prefix="(2022.03 ~ )" text="Soongsil University Computer Science"/>
                <PrefixText prefix="(2019.03 ~ 2022.02)" text="Dongnae High School"/>
              </ul>
            </div>
            <div class="intro-part">
              <SubTitle icon="link-variant" text="External Links"/>
              <ul class="intro-part-list">
                <DetailText v-for="({text, detail, link}) of links" :text="text" :detail="detail" :link="link" small/>
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

export default {
  name: 'Intro',
  components: {Main, DetailText, SuffixText, PrefixText, SubTitle, Title, Navigator},
  data() {
    return {
      links: [
        {
          text: "Blog",
          detail: `- Views. <span style='font-family: "Raleway", sans-serif; font-weight: 400;'>${this.$store.getters.info.blog}</span>`,
          link: "https://blog.nlog.dev/"
        },
        {
          text: "Github",
          detail: `- Followers. <span style='font-family: "Raleway", sans-serif; font-weight: 400;'>${this.$store.getters.info.github}</span>`,
          link: "https://github.com/nnnlog"
        },
        {
          text: "Codeforces",
          detail: `- Max rat. <span style='font-family: "Raleway", sans-serif; font-weight: 400; color: ${this.getCodeforcesColor(this.$store.getters.info.cf)};'>${this.$store.getters.info.cf}</span>`,
          link: "https://codeforces.com/profile/nlog/"
        },
        {
          text: "Baekjoon Online Judge",
          detail: `- Solved. <span style='font-family: "Raleway", sans-serif; font-weight: 400;'>${this.$store.getters.info.boj}</span>`,
          link: "https://www.acmicpc.net/user/chansol"
        },
        {
          text: "Solved.ac",
          detail: `- Diamond IV. <span style='font-family: "Raleway", sans-serif; font-weight: 400; color: #2196F3'>${this.$store.getters.info.solved_rat}</span>`,
          link: "https://solved.ac/profile/chansol"
        },
      ],
      animation: ""
    }
  },
  methods: {
    getCodeforcesColor(rating) {
      if (rating <= 1599) return "";
      if (rating <= 1899) return "#283593";
      if (rating <= 2099) return "#a0a";
      if (rating <= 2399) return "#ff8c00";
      return "";
    },
  },
  computed: {
    current() {
      return this.$route.path.substr(-1) === "2";
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
.intro {
  height: calc(100% - 10px);
  width: calc(98% - 5px);

  padding: 5px 5px 5px 0;

  background-color: white;

  box-shadow: 4px 4px 64px 16px rgba(0, 0, 0, 0.25);
  border-radius: 0 5px 5px 0;

  position: absolute;
}

.intro-scroll {
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
}

.intro-wrapper {
  position: relative;

  padding: 100px;
}

.intro-main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.intro-content {
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-top: 60px;
  margin-left: 25px;
}

.intro-part {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  flex: 1;
  width: 100%;
}

.intro-part-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 0;
  margin: 20px 0 0 10px;
}

.intro-part-list > li {
  margin-top: 30px;
}

.intro-part-list > li:first-child {
  margin-top: 0;
}

.intro-indent {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  padding: 0;
  margin: 0 0 0 10px;
}

.intro-indent > *:first-child {
  margin-top: 8px;
}

.intro-nxt {
  margin-top: 70px;
}

.intro-indent > li {
  list-style: none;

  margin-top: 5px;

  font-family: 'Raleway', sans-serif;
  font-weight: 300;
}

.intro-font-spec::first-letter {
  font-family: 'IBM Plex Sans KR', sans-serif;
}

@media (max-width: 900px) {
  .intro-wrapper {
    padding: 50px;
  }

  .intro-content {
    margin-top: 30px;
    margin-left: 5px;

    flex-direction: column;
  }

  .intro-nxt, .intro-part:last-child {
    margin-top: 40px;
  }
}
</style>
