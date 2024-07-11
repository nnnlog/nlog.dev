<template>
  <section class="content-hr"></section>
  <section class="content-main">
    <div class="header">{{ $t("activity.algorithm.header") }}</div>
    <div class="sub-header">
      {{ $t("activity.algorithm.participate_contest.header") }}
    </div>
    <ul>
      <li class="detail semi-bold">
        <a href="https://icpc.global/" target="_blank" class="link"
          >{{ $t("activity.algorithm.participate_contest.icpc.header")
          }}<mdicon class="up" width="1rem" height="1rem" name="open-in-new"
        /></a>
        <div class="detail-value">
          {{ $t("activity.algorithm.participate_contest.icpc.description") }}
        </div>
      </li>
      <li class="none">
        <ul>
          <i18n-t
            keypath="activity.algorithm.participate_contest.icpc.icpcwf"
            tag="li"
            class="detail semi-bold"
          >
            <template #th>
              <sup>{{ $t("_number_format.th") }}</sup>
            </template>
            <template #duration>
              <div class="detail-value">
                {{
                  $t(
                    "activity.algorithm.participate_contest.icpc.icpcwf_duration"
                  )
                }}
              </div>
            </template>
          </i18n-t>
          <i18n-t
            keypath="activity.algorithm.participate_contest.icpc.icpc2023"
            tag="li"
            class="detail"
          >
            <template #duration>
              <div class="detail-value">
                {{
                  $t(
                    "activity.algorithm.participate_contest.icpc.icpc2023_duration"
                  )
                }}
              </div>
            </template>
          </i18n-t>
          <i18n-t
            keypath="activity.algorithm.participate_contest.icpc.icpc2022"
            tag="li"
            class="detail semi-bold"
          >
            <template #rank>
              <sup>{{
                $t("activity.algorithm.participate_contest.icpc.icpc2022_rank")
              }}</sup>
            </template>
            <template #duration>
              <div class="detail-value">
                {{
                  $t(
                    "activity.algorithm.participate_contest.icpc.icpc2022_duration"
                  )
                }}
              </div>
            </template>
          </i18n-t>
          <li>
            <a
              href="https://icpc.global/ICPCID/IZEFL2OKWZE1"
              target="_blank"
              class="link bold"
            >
              {{ $t("activity.algorithm.participate_contest.icpc.icpcid")
              }}<mdicon
                class="up"
                width="1rem"
                height="1rem"
                name="open-in-new"
              />
            </a>
          </li>
        </ul>
      </li>
      <li class="detail semi-bold">
        <a href="https://koi.or.kr/" target="_blank" class="link"
          >{{ $t("activity.algorithm.participate_contest.koi.header")
          }}<mdicon class="up" width="1rem" height="1rem" name="open-in-new"
        /></a>
        <div class="detail-value">
          {{ $t("activity.algorithm.participate_contest.koi.description") }}
        </div>
      </li>
      <li class="none">
        <ul>
          <i18n-t
            keypath="activity.algorithm.participate_contest.koi.koi2"
            tag="li"
            class="detail"
          >
            <template #th>
              <sup>{{ $t("_number_format.th") }}</sup>
            </template>
            <template #nd>
              <sup>{{ $t("_number_format.nd") }}</sup>
            </template>
            <template #duration>
              <div class="detail-value">
                {{
                  $t("activity.algorithm.participate_contest.koi.koi2_duration")
                }}
              </div>
            </template>
          </i18n-t>
          <i18n-t
            keypath="activity.algorithm.participate_contest.koi.koi1_general"
            tag="li"
            class="detail"
          >
            <template #th>
              <sup>{{ $t("_number_format.th") }}</sup>
            </template>
            <template #st>
              <sup>{{ $t("_number_format.st") }}</sup>
            </template>
            <template #duration>
              <div class="detail-value">
                {{
                  $t("activity.algorithm.participate_contest.koi.koi1_duration")
                }}
              </div>
            </template>
          </i18n-t>
        </ul>
      </li>
      <li class="detail semi-bold">
        {{ $t("activity.algorithm.participate_contest.contest_univ.header") }}
      </li>
      <li class="none">
        <ul>
          <li class="detail">
            <a href="https://ucpc.me/" class="link" target="_blank">
              {{
                $t(
                  "activity.algorithm.participate_contest.contest_univ.ucpc.header"
                )
              }}<mdicon
                class="up"
                width="1rem"
                height="1rem"
                name="open-in-new"
              />
            </a>
            <div class="detail-value">
              {{
                $t(
                  "activity.algorithm.participate_contest.contest_univ.ucpc.description"
                )
              }}
            </div>
          </li>
          <li class="none">
            <ul>
              <i18n-t
                keypath="activity.algorithm.participate_contest.contest_univ.ucpc.ucpc2023"
                tag="li"
                class="detail"
              >
                <template #th>
                  <sup>{{ $t("_number_format.th") }}</sup>
                </template>
                <template #duration>
                  <div class="detail-value">
                    {{
                      $t(
                        "activity.algorithm.participate_contest.contest_univ.ucpc.ucpc2023_duration"
                      )
                    }}
                  </div>
                </template>
              </i18n-t>
              <i18n-t
                keypath="activity.algorithm.participate_contest.contest_univ.ucpc.ucpc2022"
                tag="li"
                class="detail"
              >
                <template #st>
                  <sup>{{ $t("_number_format.st") }}</sup>
                </template>
                <template #duration>
                  <div class="detail-value">
                    {{
                      $t(
                        "activity.algorithm.participate_contest.contest_univ.ucpc.ucpc2022_duration"
                      )
                    }}
                  </div>
                </template>
              </i18n-t>
            </ul>
          </li>
          <i18n-t
            keypath="activity.algorithm.participate_contest.contest_univ.ucpc.icn2023"
            tag="li"
            class="detail"
          >
            <template #duration>
              <div class="detail-value">
                {{
                  $t(
                    "activity.algorithm.participate_contest.contest_univ.ucpc.icn2023_duration"
                  )
                }}
              </div>
            </template>
          </i18n-t>
        </ul>
      </li>
      <li class="detail semi-bold">
        {{ $t("activity.algorithm.participate_contest.contest_high.header") }}
      </li>
      <li class="none">
        <ul>
          <li>
            {{
              $t(
                "activity.algorithm.participate_contest.contest_high.kookmin.header"
              )
            }}
          </li>
          <li class="none">
            <ul>
              <i18n-t
                keypath="activity.algorithm.participate_contest.contest_high.kookmin.kmu2021"
                tag="li"
                class="detail"
              >
                <template #th>
                  <sup>{{ $t("_number_format.th") }}</sup>
                </template>
                <template #duration>
                  <div class="detail-value">
                    {{
                      $t(
                        "activity.algorithm.participate_contest.contest_high.kookmin.kmu2021_duration"
                      )
                    }}
                  </div>
                </template>
              </i18n-t>
              <i18n-t
                keypath="activity.algorithm.participate_contest.contest_high.kookmin.kmu2020"
                tag="li"
                class="detail"
              >
                <template #th>
                  <sup>{{ $t("_number_format.th") }}</sup>
                </template>
                <template #duration>
                  <div class="detail-value">
                    {{
                      $t(
                        "activity.algorithm.participate_contest.contest_high.kookmin.kmu2020_duration"
                      )
                    }}
                  </div>
                </template>
              </i18n-t>
            </ul>
          </li>
          <li>
            {{
              $t(
                "activity.algorithm.participate_contest.contest_high.busan.header"
              )
            }}
          </li>
          <li class="none">
            <ul>
              <i18n-t
                keypath="activity.algorithm.participate_contest.contest_high.busan.busan2021"
                tag="li"
                class="detail"
              >
                <template #duration>
                  <div class="detail-value">
                    {{
                      $t(
                        "activity.algorithm.participate_contest.contest_high.busan.busan2021_duration"
                      )
                    }}
                  </div>
                </template>
              </i18n-t>
              <i18n-t
                keypath="activity.algorithm.participate_contest.contest_high.busan.busan2020"
                tag="li"
                class="detail"
              >
                <template #duration>
                  <div class="detail-value">
                    {{
                      $t(
                        "activity.algorithm.participate_contest.contest_high.busan.busan2020_duration"
                      )
                    }}
                  </div>
                </template>
              </i18n-t>
              <i18n-t
                keypath="activity.algorithm.participate_contest.contest_high.busan.busan2019"
                tag="li"
                class="detail"
              >
                <template #duration>
                  <div class="detail-value">
                    {{
                      $t(
                        "activity.algorithm.participate_contest.contest_high.busan.busan2019_duration"
                      )
                    }}
                  </div>
                </template>
              </i18n-t>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <div class="sub-header" style="margin-top: 2rem">
      {{ $t("activity.algorithm.operating.header") }}
    </div>
    <ul>
      <li class="detail semi-bold">
        <a href="https://koi.or.kr/" target="_blank" class="link"
          >{{ $t("activity.algorithm.operating.koi.header")
          }}<mdicon class="up" width="1rem" height="1rem" name="open-in-new"
        /></a>
        <div class="detail-value">
          {{ $t("activity.algorithm.operating.koi.description") }}
        </div>
      </li>
      <li class="none">
        <ul>
          <i18n-t
            keypath="activity.algorithm.operating.koi.koi2024_1"
            tag="li"
            class="detail"
          >
            <template #st>
              <sup>{{ $t("_number_format.st") }}</sup>
            </template>
            <template #duration>
              <div class="detail-value">
                {{ $t("activity.algorithm.operating.koi.koi2024_1_duration") }}
              </div>
            </template>
          </i18n-t>
        </ul>
      </li>
      <i18n-t
        keypath="activity.algorithm.operating.scon.header"
        tag="li"
        class="detail semi-bold"
      >
        <template #detail>
          <div class="detail-value">
            {{ $t("activity.algorithm.operating.scon.description") }}
          </div>
        </template>
      </i18n-t>
      <li class="none">
        <ul>
          <i18n-t
            keypath="activity.algorithm.operating.scon.scon2024"
            tag="li"
            class="detail"
          >
            <template #duration>
              <div class="detail-value">
                {{ $t("activity.algorithm.operating.scon.scon2024_duration") }}
              </div>
            </template>
          </i18n-t>
          <i18n-t
            keypath="activity.algorithm.operating.scon.scon2023"
            tag="li"
            class="detail"
          >
            <template #duration>
              <div class="detail-value">
                {{ $t("activity.algorithm.operating.scon.scon2023_duration") }}
              </div>
            </template>
          </i18n-t>
        </ul>
      </li>
    </ul>
    <div class="sub-header" style="margin-top: 2rem">
      {{ $t("activity.algorithm.lecture.header") }}
    </div>
    <ul>
      <li class="detail semi-bold">
        <a href="https://koi.or.kr/" target="_blank" class="link"
          >{{ $t("activity.algorithm.lecture.koi.header")
          }}<mdicon class="up" width="1rem" height="1rem" name="open-in-new"
        /></a>
        <div class="detail-value">
          {{ $t("activity.algorithm.lecture.koi.description") }}
        </div>
      </li>
      <li class="none">
        <ul>
          <i18n-t
            keypath="activity.algorithm.lecture.koi.ioi_camp"
            tag="li"
            class="detail"
          >
            <template #duration>
              <div class="detail-value">
                {{ $t("activity.algorithm.lecture.koi.ioi_camp_duration") }}
              </div>
            </template>
          </i18n-t>
        </ul>
      </li>
      <li>
        <a href="https://icpc-sinchon.io/" target="_blank" class="link"
          >{{ $t("activity.algorithm.lecture.sinchon.header") }}
          <mdicon class="up" width="1rem" height="1rem" name="open-in-new"
        /></a>
      </li>
      <li class="none">
        <ul>
          <i18n-t
            keypath="activity.algorithm.lecture.sinchon.summer2024"
            tag="li"
            class="detail"
          >
            <template #duration>
              <div class="detail-value">
                {{
                  $t("activity.algorithm.lecture.sinchon.summer2024_duration")
                }}
              </div>
            </template>
          </i18n-t>
          <i18n-t
            keypath="activity.algorithm.lecture.sinchon.winter2024"
            tag="li"
            class="detail"
          >
            <template #duration>
              <div class="detail-value">
                {{
                  $t("activity.algorithm.lecture.sinchon.winter2024_duration")
                }}
              </div>
            </template>
          </i18n-t>
          <i18n-t
            keypath="activity.algorithm.lecture.sinchon.summer2023"
            tag="li"
            class="detail"
          >
            <template #duration>
              <div class="detail-value">
                {{
                  $t("activity.algorithm.lecture.sinchon.summer2023_duration")
                }}
              </div>
            </template>
          </i18n-t>
          <li class="">
            <a
              href="https://github.com/nnnlog/algorithm-lecture"
              target="_blank"
              class="link"
              >{{ $t("activity.algorithm.lecture.sinchon.material") }}
              <mdicon class="up" width="1rem" height="1rem" name="open-in-new"
            /></a>
          </li>
        </ul>
      </li>
      <li class="detail">
        <a href="https://sccc.kr/" target="_blank" class="link"
          >{{ $t("activity.algorithm.lecture.sccc.header")
          }}<mdicon class="up" width="1rem" height="1rem" name="open-in-new"
        /></a>
        <div class="detail-value">
          {{ $t("activity.algorithm.lecture.sccc.description") }}
        </div>
      </li>
      <li class="none">
        <ul>
          <i18n-t
            keypath="activity.algorithm.lecture.sccc.study2024"
            tag="li"
            class="detail"
          >
            <template #duration>
              <div class="detail-value">
                {{ $t("activity.algorithm.lecture.sccc.study2024_duration") }}
              </div>
            </template>
          </i18n-t>
          <i18n-t
            keypath="activity.algorithm.lecture.sccc.study2023"
            tag="li"
            class="detail"
          >
            <template #duration>
              <div class="detail-value">
                {{ $t("activity.algorithm.lecture.sccc.study2023_duration") }}
              </div>
            </template>
          </i18n-t>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup></script>
