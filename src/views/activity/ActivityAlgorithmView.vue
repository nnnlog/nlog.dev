<template>
  <section class="content-hr"></section>
  <section class="content-main">
    <div class="header">{{ $t("activities.algorithm.header") }}</div>
    <div class="sub-header">
      {{ $t("activities.algorithm.participate_contest.header") }}
    </div>
    <ul>
      <li class="detail semi-bold">
        <a class="link" href="https://icpc.global/" target="_blank"
          >{{ $t("activities.algorithm.participate_contest.icpc.header")
          }}<mdicon class="up" height="1rem" name="open-in-new" width="1rem" />
        </a>
        <span class="detail-value">
          {{ $t("activities.algorithm.participate_contest.icpc.description") }}
        </span>
      </li>
      <li class="none">
        <ul>
          <i18n-t
            class="detail"
            keypath="activities.algorithm.participate_contest.icpc.icpc2024"
            tag="li"
          >
            <template #duration>
              <span class="detail-value">
                {{
                  $t(
                    "activities.algorithm.participate_contest.icpc.icpc2024_duration"
                  )
                }}
              </span>
            </template>
          </i18n-t>
          <i18n-t
            class="detail semi-bold"
            keypath="activities.algorithm.participate_contest.icpc.icpcwf"
            tag="li"
          >
            <template #th>
              <sup>{{ $t("_number_format.th") }}</sup>
            </template>
            <template #duration>
              <span class="detail-value">
                {{
                  $t(
                    "activities.algorithm.participate_contest.icpc.icpcwf_duration"
                  )
                }}
              </span>
            </template>
          </i18n-t>
          <i18n-t
            class="detail"
            keypath="activities.algorithm.participate_contest.icpc.icpc2023"
            tag="li"
          >
            <template #duration>
              <span class="detail-value">
                {{
                  $t(
                    "activities.algorithm.participate_contest.icpc.icpc2023_duration"
                  )
                }}
              </span>
            </template>
          </i18n-t>
          <i18n-t
            class="detail semi-bold"
            keypath="activities.algorithm.participate_contest.icpc.icpc2022"
            tag="li"
          >
            <template #rank>
              <sup>{{
                $t(
                  "activities.algorithm.participate_contest.icpc.icpc2022_rank"
                )
              }}</sup>
            </template>
            <template #duration>
              <span class="detail-value">
                {{
                  $t(
                    "activities.algorithm.participate_contest.icpc.icpc2022_duration"
                  )
                }}
              </span>
            </template>
          </i18n-t>
          <li>
            <a
              class="link bold"
              href="https://icpc.global/ICPCID/IZEFL2OKWZE1"
              target="_blank"
            >
              {{ $t("activities.algorithm.participate_contest.icpc.icpcid")
              }}<mdicon
                class="up"
                height="1rem"
                name="open-in-new"
                width="1rem"
              />
            </a>
          </li>
        </ul>
      </li>
      <li class="detail semi-bold">
        <a class="link" href="https://koi.or.kr/" target="_blank"
          >{{ $t("activities.algorithm.participate_contest.koi.header")
          }}<mdicon class="up" height="1rem" name="open-in-new" width="1rem" />
        </a>
        <span class="detail-value">
          {{ $t("activities.algorithm.participate_contest.koi.description") }}
        </span>
      </li>
      <li class="none">
        <ul>
          <i18n-t
            class="detail"
            keypath="activities.algorithm.participate_contest.koi.koi2"
            tag="li"
          >
            <template #th>
              <sup>{{ $t("_number_format.th") }}</sup>
            </template>
            <template #nd>
              <sup>{{ $t("_number_format.nd") }}</sup>
            </template>
            <template #duration>
              <span class="detail-value">
                {{
                  $t(
                    "activities.algorithm.participate_contest.koi.koi2_duration"
                  )
                }}
              </span>
            </template>
          </i18n-t>
          <i18n-t
            class="detail"
            keypath="activities.algorithm.participate_contest.koi.koi1_general"
            tag="li"
          >
            <template #th>
              <sup>{{ $t("_number_format.th") }}</sup>
            </template>
            <template #st>
              <sup>{{ $t("_number_format.st") }}</sup>
            </template>
            <template #duration>
              <span class="detail-value">
                {{
                  $t(
                    "activities.algorithm.participate_contest.koi.koi1_duration"
                  )
                }}
              </span>
            </template>
          </i18n-t>
        </ul>
      </li>
      <li class="detail semi-bold">
        {{ $t("activities.algorithm.participate_contest.contest_univ.header") }}
      </li>
      <li class="none">
        <ul>
          <li class="detail">
            <a class="link" href="https://ucpc.me/" target="_blank">
              {{
                $t(
                  "activities.algorithm.participate_contest.contest_univ.ucpc.header"
                )
              }}<mdicon
                class="up"
                height="1rem"
                name="open-in-new"
                width="1rem"
              />
            </a>
            <span class="detail-value">
              {{
                $t(
                  "activities.algorithm.participate_contest.contest_univ.ucpc.description"
                )
              }}
            </span>
          </li>
          <li class="none">
            <ul>
              <i18n-t
                class="detail"
                keypath="activities.algorithm.participate_contest.contest_univ.ucpc.ucpc2023"
                tag="li"
              >
                <template #th>
                  <sup>{{ $t("_number_format.th") }}</sup>
                </template>
                <template #duration>
                  <span class="detail-value">
                    {{
                      $t(
                        "activities.algorithm.participate_contest.contest_univ.ucpc.ucpc2023_duration"
                      )
                    }}
                  </span>
                </template>
              </i18n-t>
              <i18n-t
                class="detail"
                keypath="activities.algorithm.participate_contest.contest_univ.ucpc.ucpc2022"
                tag="li"
              >
                <template #st>
                  <sup>{{ $t("_number_format.st") }}</sup>
                </template>
                <template #duration>
                  <span class="detail-value">
                    {{
                      $t(
                        "activities.algorithm.participate_contest.contest_univ.ucpc.ucpc2022_duration"
                      )
                    }}
                  </span>
                </template>
              </i18n-t>
            </ul>
          </li>
          <i18n-t
            class="detail"
            keypath="activities.algorithm.participate_contest.contest_univ.ucpc.icn2023"
            tag="li"
          >
            <template #duration>
              <span class="detail-value">
                {{
                  $t(
                    "activities.algorithm.participate_contest.contest_univ.ucpc.icn2023_duration"
                  )
                }}
              </span>
            </template>
          </i18n-t>
        </ul>
      </li>
      <li class="detail semi-bold">
        {{ $t("activities.algorithm.participate_contest.contest_high.header") }}
      </li>
      <li class="none">
        <ul>
          <li>
            {{
              $t(
                "activities.algorithm.participate_contest.contest_high.kookmin.header"
              )
            }}
          </li>
          <li class="none">
            <ul>
              <i18n-t
                class="detail"
                keypath="activities.algorithm.participate_contest.contest_high.kookmin.kmu2021"
                tag="li"
              >
                <template #th>
                  <sup>{{ $t("_number_format.th") }}</sup>
                </template>
                <template #duration>
                  <span class="detail-value">
                    {{
                      $t(
                        "activities.algorithm.participate_contest.contest_high.kookmin.kmu2021_duration"
                      )
                    }}
                  </span>
                </template>
              </i18n-t>
              <i18n-t
                class="detail"
                keypath="activities.algorithm.participate_contest.contest_high.kookmin.kmu2020"
                tag="li"
              >
                <template #th>
                  <sup>{{ $t("_number_format.th") }}</sup>
                </template>
                <template #duration>
                  <span class="detail-value">
                    {{
                      $t(
                        "activities.algorithm.participate_contest.contest_high.kookmin.kmu2020_duration"
                      )
                    }}
                  </span>
                </template>
              </i18n-t>
            </ul>
          </li>
          <li>
            {{
              $t(
                "activities.algorithm.participate_contest.contest_high.busan.header"
              )
            }}
          </li>
          <li class="none">
            <ul>
              <i18n-t
                class="detail"
                keypath="activities.algorithm.participate_contest.contest_high.busan.busan2021"
                tag="li"
              >
                <template #duration>
                  <span class="detail-value">
                    {{
                      $t(
                        "activities.algorithm.participate_contest.contest_high.busan.busan2021_duration"
                      )
                    }}
                  </span>
                </template>
              </i18n-t>
              <i18n-t
                class="detail"
                keypath="activities.algorithm.participate_contest.contest_high.busan.busan2020"
                tag="li"
              >
                <template #duration>
                  <span class="detail-value">
                    {{
                      $t(
                        "activities.algorithm.participate_contest.contest_high.busan.busan2020_duration"
                      )
                    }}
                  </span>
                </template>
              </i18n-t>
              <i18n-t
                class="detail"
                keypath="activities.algorithm.participate_contest.contest_high.busan.busan2019"
                tag="li"
              >
                <template #duration>
                  <span class="detail-value">
                    {{
                      $t(
                        "activities.algorithm.participate_contest.contest_high.busan.busan2019_duration"
                      )
                    }}
                  </span>
                </template>
              </i18n-t>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <div class="sub-header" style="margin-top: 2rem">
      {{ $t("activities.algorithm.operating.header") }}
    </div>
    <ul>
      <li class="detail semi-bold">
        <a class="link" href="https://koi.or.kr/" target="_blank"
          >{{ $t("activities.algorithm.operating.koi.header")
          }}<mdicon class="up" height="1rem" name="open-in-new" width="1rem" />
        </a>
        <span class="detail-value">
          {{ $t("activities.algorithm.operating.koi.description") }}
        </span>
      </li>
      <li class="none">
        <ul>
          <i18n-t
            class="detail"
            keypath="activities.algorithm.operating.koi.koi2024_1"
            tag="li"
          >
            <template #st>
              <sup>{{ $t("_number_format.st") }}</sup>
            </template>
            <template #duration>
              <span class="detail-value">
                {{
                  $t("activities.algorithm.operating.koi.koi2024_1_duration")
                }}
              </span>
            </template>
          </i18n-t>
        </ul>
      </li>
      <i18n-t
        class="detail semi-bold"
        keypath="activities.algorithm.operating.scon.header"
        tag="li"
      >
        <template #detail>
          <span class="detail-value">
            {{ $t("activities.algorithm.operating.scon.description") }}
          </span>
        </template>
      </i18n-t>
      <li class="none">
        <ul>
          <i18n-t
            class="detail"
            keypath="activities.algorithm.operating.scon.scon2024"
            tag="li"
          >
            <template #duration>
              <span class="detail-value">
                {{
                  $t("activities.algorithm.operating.scon.scon2024_duration")
                }}
              </span>
            </template>
          </i18n-t>
          <i18n-t
            class="detail"
            keypath="activities.algorithm.operating.scon.scon2023"
            tag="li"
          >
            <template #duration>
              <span class="detail-value">
                {{
                  $t("activities.algorithm.operating.scon.scon2023_duration")
                }}
              </span>
            </template>
          </i18n-t>
        </ul>
      </li>
    </ul>
    <div class="sub-header" style="margin-top: 2rem">
      {{ $t("activities.algorithm.lecture.header") }}
    </div>
    <ul>
      <li class="detail semi-bold">
        <a class="link" href="https://koi.or.kr/" target="_blank"
          >{{ $t("activities.algorithm.lecture.koi.header") }}
          <mdicon class="up" height="1rem" name="open-in-new" width="1rem" />
        </a>
        <span class="detail-value">
          {{ $t("activities.algorithm.lecture.koi.description") }}
        </span>
      </li>
      <li class="none">
        <ul>
          <i18n-t
            class="detail"
            keypath="activities.algorithm.lecture.koi.ioi_camp"
            tag="li"
          >
            <template #duration>
              <span class="detail-value">
                {{ $t("activities.algorithm.lecture.koi.ioi_camp_duration") }}
              </span>
            </template>
          </i18n-t>
        </ul>
      </li>
      <li>
        <a class="link" href="https://icpc-sinchon.io/" target="_blank"
          >{{ $t("activities.algorithm.lecture.sinchon.header") }}
          <mdicon class="up" height="1rem" name="open-in-new" width="1rem" />
        </a>
      </li>
      <li class="none">
        <ul>
          <i18n-t
            class="detail"
            keypath="activities.algorithm.lecture.sinchon.summer2024"
            tag="li"
          >
            <template #duration>
              <span class="detail-value">
                {{
                  $t("activities.algorithm.lecture.sinchon.summer2024_duration")
                }}
              </span>
            </template>
          </i18n-t>
          <i18n-t
            class="detail"
            keypath="activities.algorithm.lecture.sinchon.winter2024"
            tag="li"
          >
            <template #duration>
              <span class="detail-value">
                {{
                  $t("activities.algorithm.lecture.sinchon.winter2024_duration")
                }}
              </span>
            </template>
          </i18n-t>
          <i18n-t
            class="detail"
            keypath="activities.algorithm.lecture.sinchon.summer2023"
            tag="li"
          >
            <template #duration>
              <span class="detail-value">
                {{
                  $t("activities.algorithm.lecture.sinchon.summer2023_duration")
                }}
              </span>
            </template>
          </i18n-t>
          <li class="">
            <a
              class="link"
              href="https://github.com/nnnlog/algorithm-lecture"
              target="_blank"
              >{{ $t("activities.algorithm.lecture.sinchon.material") }}
              <mdicon
                class="up"
                height="1rem"
                name="open-in-new"
                width="1rem"
              />
            </a>
          </li>
        </ul>
      </li>
      <li class="detail">
        <a class="link" href="https://sccc.kr/" target="_blank"
          >{{ $t("activities.algorithm.lecture.sccc.header")
          }}<mdicon class="up" height="1rem" name="open-in-new" width="1rem" />
        </a>
        <span class="detail-value">
          {{ $t("activities.algorithm.lecture.sccc.description") }}
        </span>
      </li>
      <li class="none">
        <ul>
          <i18n-t
            class="detail"
            keypath="activities.algorithm.lecture.sccc.study2024"
            tag="li"
          >
            <template #duration>
              <span class="detail-value">
                {{ $t("activities.algorithm.lecture.sccc.study2024_duration") }}
              </span>
            </template>
          </i18n-t>
          <i18n-t
            class="detail"
            keypath="activities.algorithm.lecture.sccc.study2023"
            tag="li"
          >
            <template #duration>
              <span class="detail-value">
                {{ $t("activities.algorithm.lecture.sccc.study2023_duration") }}
              </span>
            </template>
          </i18n-t>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup></script>
