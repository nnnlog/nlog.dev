<template>
  <section class="content-hr"></section>
  <section class="content-main">
    <div class="header">{{ $t("project.index.header") }}</div>
    <div class="sub-header detail">
      {{ $t("project.index.ssurade.header")
      }}<span class="detail-value">
        {{ $t("project.index.ssurade.duration") }}
      </span>
    </div>
    <ul>
      <li>{{ $t("project.index.ssurade.description") }}</li>
      <li class="semi-bold">{{ $t("project.index.ssurade.tech") }}</li>
      <li>{{ $t("project.index.ssurade.scale") }}</li>
      <li class="semi-bold">
        <a
          href="https://play.google.com/store/apps/details?id=com.nnnlog.ssurade"
          class="link"
          target="_blank"
        >
          {{ $t("project.index.ssurade.playstore")
          }}<mdicon width="1rem" height="1rem" name="open-in-new" />
        </a>
      </li>
      <li class="none">
        <ul>
          <li class="detail">
            {{ $t("project.index.ssurade.playstore_installation_count") }}
          </li>
        </ul>
      </li>
      <!--      <li class="semi-bold">-->
      <!--        <router-link to="/project/ssurade" class="link">-->
      <!--          {{ $t("project.index.ssurade.view")-->
      <!--          }}<mdicon width="1.5rem" height="1.5rem" name="arrow-right" />-->
      <!--        </router-link>-->
      <!--      </li>-->
      <li class="semi-bold">
        <a
          href="https://github.com/nnnlog/ssurade"
          class="link"
          target="_blank"
        >
          {{ $t("project.index.ssurade.github")
          }}<mdicon class="up" width="1rem" height="1rem" name="open-in-new" />
        </a>
      </li>
    </ul>
    <div class="sub-header detail" style="margin-top: 2rem">
      {{ $t("project.index.ssullabus.header")
      }}<span class="detail-value">
        {{ $t("project.index.ssullabus.duration") }}
      </span>
    </div>
    <ul>
      <li>{{ $t("project.index.ssullabus.description") }}</li>
      <li class="semi-bold">{{ $t("project.index.ssullabus.tech") }}</li>
      <li>{{ $t("project.index.ssullabus.scale") }}</li>
      <li class="semi-bold">
        <a href="https://ssullabus.nlog.dev" class="link" target="_blank">
          {{ $t("project.index.ssullabus.web")
          }}<mdicon width="1rem" height="1rem" name="open-in-new" />
        </a>
      </li>
      <li class="semi-bold">
        <a
          href="https://github.com/nnnlog/ssullabus"
          class="link"
          target="_blank"
        >
          {{ $t("project.index.ssullabus.github")
          }}<mdicon class="up" width="1rem" height="1rem" name="open-in-new" />
        </a>
      </li>
    </ul>
    <div class="sub-header detail" style="margin-top: 2rem">
      {{ $t("project.index.codemap.header")
      }}<span class="detail-value">
        {{ $t("project.index.codemap.duration") }}
      </span>
    </div>
    <ul>
      <li>{{ $t("project.index.codemap.description") }}</li>
      <li class="semi-bold">{{ $t("project.index.codemap.tech") }}</li>
      <li>{{ $t("project.index.codemap.scale") }}</li>
      <li class="semi-bold">
        <a
          href="https://github.com/codemap-ai/codemap-frontend"
          class="link"
          target="_blank"
        >
          {{ $t("project.index.codemap.github")
          }}<mdicon class="up" width="1rem" height="1rem" name="open-in-new" />
        </a>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup></script>
