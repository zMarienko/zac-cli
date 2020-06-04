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
              href="https://drive.google.com/drive/folders/1RG85PIJfspaAA9uEe36dNLf4tU_EQCJq?usp=sharing"
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
              href="https://drive.google.com/drive/folders/1tpjrsEXco5tMbMlTJWugVaU0ev31v931"
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
              href="https://drive.google.com/drive/folders/1CGrRcC6Qw8qOnEZkYxribLvkjpPiz3qi"
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
              href="https://drive.google.com/drive/folders/1o2KIgYFilZUkbO63SxQXX6TtWeAdAIOE"
            >
              {{ $t('archive') }}
            </a>
            <a
              target="_blank"
              class="default__item-link"
              href="https://example89629.wordpress.com/"
            >
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
            <a
              target="_blank"
              class="default__item-link"
              href="https://drive.google.com/drive/folders/1dRt3nIoV3JPF7jnxY3mT3istncCskLQc"
            >
              {{ $t('archive') }}
            </a>

            <div v-html="$t('item5.3')" class="default__item-text"></div>
            <div v-html="$t('item5.4')" class="default__item-teaches"></div>
          </div>
        </div>
        <div class="default__item default__item--large">
          <img
            src="/img/nopicture.jpg"
            class="default__item-img default__item-img--large"
          />
          <div class="default__item-name">
            <div
              v-html="$t('item6.1')"
              class="default__item-title main-title"
            ></div>
            <div v-html="$t('item6.2')" class="default__item-subtitle"></div>
            <a
              target="_blank"
              class="default__item-link"
              href="https://drive.google.com/drive/folders/1HOu5WvZdjmNelTp4MmRL9ht082CvF68H"
            >
              {{ $t('archive') }}
            </a>
            <div v-html="$t('item6.3')" class="default__item-text"></div>
            <div v-html="$t('item6.4')" class="default__item-teaches"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n>
{
  "ua": {
    "title": "ПЦК металургійних дисциплін",
    "archive": "Архiв викладача",
    "site": "Персональний сайт викладача",

    "item1.1": "Калініченко Олена Олександрівна",
    "item1.2": "Голова ПЦК, викладач.",
    "item1.3": " ",
    "item1.4": "<b> Викладає:</b> Вступ в спеціальність, Електроустаткування ливарних цехів, Ливарне виробництво чорних і кольорових металів, Обладнання ливарних цехів.",

    "item2.1": "Дяченко Оксана Олександрівна",
    "item2.2": "Викладач.",
    "item2.3": " ",
    "item2.4": "<b> Викладає:</b> Основи автоматизації, Печі та сушарки.",

    "item3.1": "Горбаненко Костянтин Вікторович",
    "item3.2": "Викладач.",
    "item3.3": " ",
    "item3.4": " ",

    "item4.1": "Тарасенко Ольга Ігорівна",
    "item4.2": "Викладач.",
    "item4.3": " ",
    "item4.4": " ",

    "item5.1": "Солокова Ольга Миколаївна",
    "item5.2": "Викладач.",
    "item5.3": " ",
    "item5.4": " ",

    "item6.1": "Пупченко Світлана Анатоліївна",
    "item6.2": "Викладач.",
    "item6.3": " ",
    "item6.4": " "
  },
  "ru": {
    "title": "ПЦК металлургических дисциплин",
    "archive": "Архив преподавателя",
    "site": "Персональный сайт преподавателя",

    "item1.1": "Калиниченко Елена Александровна",
    "item1.2": "Председатель ПЦК, преподаватель.",
    "item1.3": " ",
    "item1.4": "<b> Преподает: </b> Введение в специальность, Электрооборудование литейных цехов, Литейное производство черных и цветных металлов, Оборудование литейных цехов.",

    "item2.1": "Дяченко Оксана Александровна",
    "item2.2": "Преподаватель.",
    "item2.3": " ",
    "item2.4": "<b> Преподает: </b> Основы автоматизации, Печи и сушилки.",

    "item3.1": "Горбаненко Константин Викторович",
    "item3.2": "Преподаватель.",
    "item3.3": " ",
    "item3.4": " ",

    "item4.1": "Солокова Ольга Николаевна",
    "item4.2": "Преподаватель.",
    "item4.3": " ",
    "item4.4": " ",

    "item5.1": "Солокова Ольга Миколаївна",
    "item5.2": "Преподаватель.",
    "item5.3": " ",
    "item5.4": " ",

    "item6.1": "Пупченко Светлана Анатольевна",
    "item6.2": "Преподаватель.",
    "item6.3": " ",
    "item6.4": " "
    }
}
</i18n>
