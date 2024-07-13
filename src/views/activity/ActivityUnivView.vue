<template>
  <section class="content-hr"></section>
  <section class="content-main">
    <div class="header">{{ $t("activity.univ.header") }}</div>
    <div class="sub-header detail">
      {{ $t("activity.univ.network.header")
      }}<span class="detail-value">{{
        $t("activity.univ.network.duration")
      }}</span>
    </div>
    <ul>
      <li>{{ $t("activity.univ.network.outline") }}</li>
      <li class="semi-bold">{{ $t("activity.univ.network.hw1") }}</li>
      <li class="semi-bold">{{ $t("activity.univ.network.hw2") }}</li>
      <li>{{ $t("activity.univ.network.grade") }}</li>
      <li class="semi-bold">
        <a
          class="link"
          href="https://github.com/nnnlog/ssu-cse/tree/master/Network%20Programming"
          target="_blank"
          >{{ $t("activity.univ.network.github") }}
          <mdicon class="up" height="1rem" name="open-in-new" width="1rem" />
        </a>
      </li>
    </ul>
    <div class="sub-header detail" style="margin-top: 2rem">
      {{ $t("activity.univ.pl.header")
      }}<span class="detail-value">{{ $t("activity.univ.pl.duration") }}</span>
    </div>
    <ul>
      <li class="semi-bold">{{ $t("activity.univ.pl.hw") }}</li>
      <li class="semi-bold">
        <a
          class="link"
          href="https://github.com/nnnlog/ssu-cse/tree/master/Programming%20Language"
          target="_blank"
          >{{ $t("activity.univ.pl.github") }}
          <mdicon class="up" height="1rem" name="open-in-new" width="1rem" />
        </a>
      </li>
    </ul>
    <div class="sub-header detail" style="margin-top: 2rem">
      {{ $t("activity.univ.cv.header")
      }}<span class="detail-value">{{ $t("activity.univ.cv.duration") }}</span>
    </div>
    <ul>
      <li>{{ $t("activity.univ.cv.outline") }}</li>
      <li class="semi-bold">{{ $t("activity.univ.cv.hw1") }}</li>
      <li class="semi-bold">{{ $t("activity.univ.cv.hw2") }}</li>
      <li>{{ $t("activity.univ.cv.grade") }}</li>
      <li class="semi-bold">
        <a
          class="link"
          href="https://github.com/nnnlog/ssu-cse/tree/master/Computer%20Vision"
          target="_blank"
          >{{ $t("activity.univ.cv.github") }}
          <mdicon class="up" height="1rem" name="open-in-new" width="1rem" />
        </a>
      </li>
    </ul>
    <div class="sub-header detail" style="margin-top: 2rem">
      {{ $t("activity.univ.os.header")
      }}<span class="detail-value">{{ $t("activity.univ.os.duration") }}</span>
    </div>
    <ul>
      <li>{{ $t("activity.univ.os.outline") }}</li>
      <li class="semi-bold">{{ $t("activity.univ.os.hw") }}</li>
      <li>{{ $t("activity.univ.os.grade") }}</li>
      <li class="semi-bold">
        <a
          class="link"
          href="https://github.com/nnnlog/ssu-cse/tree/master/Operating%20System"
          target="_blank"
          >{{ $t("activity.univ.os.github") }}
          <mdicon class="up" height="1rem" name="open-in-new" width="1rem" />
        </a>
      </li>
    </ul>
    <div class="sub-header detail" style="margin-top: 2rem">
      {{ $t("activity.univ.lsp.header")
      }}<span class="detail-value">{{ $t("activity.univ.lsp.duration") }}</span>
    </div>
    <ul>
      <li>{{ $t("activity.univ.lsp.outline") }}</li>
      <li class="semi-bold">{{ $t("activity.univ.lsp.hw") }}</li>
      <li>{{ $t("activity.univ.lsp.grade") }}</li>
      <li class="semi-bold">
        <a
          class="link"
          href="https://github.com/nnnlog/ssu-cse/tree/master/Linux%20System%20Programming"
          target="_blank"
          >{{ $t("activity.univ.lsp.github") }}
          <mdicon class="up" height="1rem" name="open-in-new" width="1rem" />
        </a>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup></script>
