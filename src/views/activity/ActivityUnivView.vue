<template>
  <section class="content-hr"></section>
  <section class="content-main">
    <div class="header">{{ $t("activities.univ.header") }}</div>
    <div class="sub-header detail">
      {{ $t("activities.univ.network.header")
      }}<span class="detail-value">{{
        $t("activities.univ.network.duration")
      }}</span>
    </div>
    <ul>
      <li>{{ $t("activities.univ.network.outline") }}</li>
      <li class="semi-bold">{{ $t("activities.univ.network.hw1") }}</li>
      <li class="semi-bold">{{ $t("activities.univ.network.hw2") }}</li>
      <li>{{ $t("activities.univ.network.grade") }}</li>
      <li class="semi-bold">
        <a
          class="link"
          href="https://github.com/nnnlog/ssu-cse/tree/master/Network%20Programming"
          target="_blank"
          >{{ $t("activities.univ.network.github") }}
          <mdicon class="up" height="1rem" name="open-in-new" width="1rem" />
        </a>
      </li>
    </ul>
    <div class="sub-header detail" style="margin-top: 2rem">
      {{ $t("activities.univ.pl.header")
      }}<span class="detail-value">{{
        $t("activities.univ.pl.duration")
      }}</span>
    </div>
    <ul>
      <li class="semi-bold">{{ $t("activities.univ.pl.hw") }}</li>
      <li class="semi-bold">
        <a
          class="link"
          href="https://github.com/nnnlog/ssu-cse/tree/master/Programming%20Language"
          target="_blank"
          >{{ $t("activities.univ.pl.github") }}
          <mdicon class="up" height="1rem" name="open-in-new" width="1rem" />
        </a>
      </li>
    </ul>
    <div class="sub-header detail" style="margin-top: 2rem">
      {{ $t("activities.univ.cv.header")
      }}<span class="detail-value">{{
        $t("activities.univ.cv.duration")
      }}</span>
    </div>
    <ul>
      <li>{{ $t("activities.univ.cv.outline") }}</li>
      <li class="semi-bold">{{ $t("activities.univ.cv.hw1") }}</li>
      <li class="semi-bold">{{ $t("activities.univ.cv.hw2") }}</li>
      <li>{{ $t("activities.univ.cv.grade") }}</li>
      <li class="semi-bold">
        <a
          class="link"
          href="https://github.com/nnnlog/ssu-cse/tree/master/Computer%20Vision"
          target="_blank"
          >{{ $t("activities.univ.cv.github") }}
          <mdicon class="up" height="1rem" name="open-in-new" width="1rem" />
        </a>
      </li>
    </ul>
    <div class="sub-header detail" style="margin-top: 2rem">
      {{ $t("activities.univ.os.header")
      }}<span class="detail-value">{{
        $t("activities.univ.os.duration")
      }}</span>
    </div>
    <ul>
      <li>{{ $t("activities.univ.os.outline") }}</li>
      <li class="semi-bold">{{ $t("activities.univ.os.hw") }}</li>
      <li>{{ $t("activities.univ.os.grade") }}</li>
      <li class="semi-bold">
        <a
          class="link"
          href="https://github.com/nnnlog/ssu-cse/tree/master/Operating%20System"
          target="_blank"
          >{{ $t("activities.univ.os.github") }}
          <mdicon class="up" height="1rem" name="open-in-new" width="1rem" />
        </a>
      </li>
    </ul>
    <div class="sub-header detail" style="margin-top: 2rem">
      {{ $t("activities.univ.lsp.header")
      }}<span class="detail-value">{{
        $t("activities.univ.lsp.duration")
      }}</span>
    </div>
    <ul>
      <li>{{ $t("activities.univ.lsp.outline") }}</li>
      <li class="semi-bold">{{ $t("activities.univ.lsp.hw") }}</li>
      <li>{{ $t("activities.univ.lsp.grade") }}</li>
      <li class="semi-bold">
        <a
          class="link"
          href="https://github.com/nnnlog/ssu-cse/tree/master/Linux%20System%20Programming"
          target="_blank"
          >{{ $t("activities.univ.lsp.github") }}
          <mdicon class="up" height="1rem" name="open-in-new" width="1rem" />
        </a>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup></script>
