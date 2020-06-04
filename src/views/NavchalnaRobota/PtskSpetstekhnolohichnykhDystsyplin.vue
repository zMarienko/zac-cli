<template>
  <section class="default">
    <div class="container">
      <div class="default__inner">
        <div class="default__title main-title">
          {{ $t('title') }}
        </div>
        <div class="default__item default__item--large">
          <img
            src="/img/nopicture.jpg"
            class="default__item-img default__item-img--large"
          />
          <div class="default__item-name">
            <div
              v-html="$t('item1.1')"
              class="default__item-title main-title"
            ></div>
            <div v-html="$t('item1.2')" class="default__item-subtitle"></div>
            <a
              target="_blank"
              class="default__item-link"
              href="https://drive.google.com/drive/folders/1XjpzTwqRXOB7o9KaArBUps48suMaEdsO"
            >
              {{ $t('archive') }}
            </a>
            <div v-html="$t('item1.3')" class="default__item-text"></div>
            <div v-html="$t('item1.4')" class="default__item-teaches"></div>
          </div>
        </div>
        <div class="default__item default__item--large">
          <img
            src="/img/nopicture.jpg"
            class="default__item-img default__item-img--large"
          />
          <div class="default__item-name">
            <div
              v-html="$t('item2.1')"
              class="default__item-title main-title"
            ></div>
            <div v-html="$t('item2.2')" class="default__item-subtitle"></div>
            <a
              target="_blank"
              class="default__item-link"
              href="https://drive.google.com/drive/folders/1s7IFv5o_11MHo6HERcEENmr9PZSOsyKF"
            >
              {{ $t('archive') }}
            </a>
            <div v-html="$t('item2.3')" class="default__item-text"></div>
            <div v-html="$t('item2.4')" class="default__item-teaches"></div>
          </div>
        </div>
        <div class="default__item default__item--large">
          <img
            src="/img/nopicture.jpg"
            class="default__item-img default__item-img--large"
          />
          <div class="default__item-name">
            <div
              v-html="$t('item3.1')"
              class="default__item-title main-title"
            ></div>
            <div v-html="$t('item3.2')" class="default__item-subtitle"></div>
            <a
              target="_blank"
              class="default__item-link"
              href="https://drive.google.com/drive/folders/166wgeZqVniSXIVLh9ijwKOa90OnAnSgk?fbclid=IwAR3D8U2s8FrvQJLCGUwWvOEEGUGBsNA9s--P0MJdrx35U69WMtlcwWGcRro"
            >
              {{ $t('archive') }}
            </a>
            <div v-html="$t('item3.3')" class="default__item-text"></div>
            <div v-html="$t('item3.4')" class="default__item-teaches"></div>
          </div>
        </div>
        <div class="default__item default__item--large">
          <img
            src="/img/nopicture.jpg"
            class="default__item-img default__item-img--large"
          />
          <div class="default__item-name">
            <div
              v-html="$t('item4.1')"
              class="default__item-title main-title"
            ></div>
            <div v-html="$t('item4.2')" class="default__item-subtitle"></div>
            <a
              target="_blank"
              class="default__item-link"
              href="https://drive.google.com/drive/folders/1HlLK04DP_1pYE3uDZZI9MMu6YrMtEewR"
            >
              {{ $t('archive') }}
            </a>
            <div v-html="$t('item4.3')" class="default__item-text"></div>
            <div v-html="$t('item4.4')" class="default__item-teaches"></div>
          </div>
        </div>
        <div class="default__item default__item--large">
          <img
            src="/img/nopicture.jpg"
            class="default__item-img default__item-img--large"
          />
          <div class="default__item-name">
            <div
              v-html="$t('item5.1')"
              class="default__item-title main-title"
            ></div>
            <div v-html="$t('item5.2')" class="default__item-subtitle"></div>

            <div v-html="$t('item5.3')" class="default__item-text"></div>
            <div v-html="$t('item5.4')" class="default__item-teaches"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n>
{
  "ua": {
    "title": "ПЦК спецтехнологічних дисциплін",
    "archive": "Архiв викладача",

    "item1.1": "Рубашко Ірина Володимирівна",
    "item1.2": "Голова ПЦК, викладач.",
    "item1.3": " ",
    "item1.4": " ",

    "item2.1": "Білозуб Ліна Вікторівна",
    "item2.2": "Викладач.",
    "item2.3": " ",
    "item2.4": " ",

    "item3.1": "Рудик Наталя Григорівна",
    "item3.2": "Викладач.",
    "item3.3": " ",
    "item3.4": " ",

    "item4.1": "Лавриненко Анна",
    "item4.2": "Викладач з вищою освітою.",
    "item4.3": " ",
    "item4.4": " ",

    "item5.1": "Ізвекова Катерина",
    "item5.2": "Викладач.",
    "item5.3": " ",
    "item5.4": " "
  },
  "ru": {
    "title": "ПЦК спецтехнологического дисциплин",
    "archive": "Архив преподавателя",

    "item1.1": "Рубашко Ирина Владимировна",
    "item1.2": "Председатель ПЦК, преподаватель.",
    "item1.3": " ",
    "item1.4": " ",

    "item2.1": "Билозуб Лина Викторовна",
    "item2.2": "Преподаватель.",
    "item2.3": " ",
    "item2.4": " ",

    "item3.1": "Рудик Наталья Григорьевна",
    "item3.2": "Преподаватель.",
    "item3.3": " ",
    "item3.4": " ",

    "item4.1": "Лавриненко Анна",
    "item4.2": "Преподаватель с высшим образованием.",
    "item4.3": " ",
    "item4.4": " ",

    "item5.1": "Извекова Екатерина",
    "item5.2": "Преподаватель.",
    "item5.3": " ",
    "item5.4": " "
    }
}
</i18n>
