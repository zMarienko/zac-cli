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
            <div v-html="$t('item1.3')" class="default__item-text"></div>
            <a class="default__item-link" href="tel:+380612652262">
              тел.: (061) 265-22-62
            </a>
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
            <div v-html="$t('item2.3')" class="default__item-text"></div>
            <a class="default__item-link" href="tel:+380612652262">
              тел.: (061) 265-22-62
            </a>
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
            <div v-html="$t('item3.3')" class="default__item-text"></div>
            <a class="default__item-link" href="tel:+3806122187638">
              тел.: (061) 2218-76-38
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n>
{
  "ua": {
    "title": "Денне відділення",

    "item1.1": "Дяченко Оксана Олександрiвна",
    "item1.2": "Завідувач відділеннями 'Авіаційна та ракетно-космічна техніка' та 'Металургія'.",
    "item1.3": "Кабінет 15, ІІ-й поверх головного корпусу.",

    "item2.1": "Бiлозуб Лiна Вiкторiвна",
    "item2.2": "Завідувач відділеннями 'Галузеве машинобудування' та 'Прикладна механіка'.",
    "item2.3": "Кабінет 15, ІІ-й поверх головного корпусу.",

    "item3.1": "Присяжна Вiкторiя Юхимiвна",
    "item3.2": "Завідувач відділеннями 'Комп'ютерна інженерія', 'Комп'ютерні науки та інформаційні технології' та 'Економіка'.",
    "item3.3": "Кабінет 15, ІІ-й поверх головного корпусу."
  },
  "ru": {
    "title": "Дневное отделение",

    "item1.1": "Дяченко Оксана Александровна",
    "item1.2": "Заведующая отделениями 'Авиационная и ракетно-космическая техника' и 'Металлургия'.",
    "item1.3": "Кабинет 15, ІІ-й этаж главного корпуса.",

    "item2.1": "Билозуб Лина Викторовна",
    "item2.2": "Заведующая отделениями 'Отраслевое машиностроение' и 'Прикладная механика'.",
    "item2.3": "Кабинет 15, ІІ-й этаж главного корпуса.",

    "item3.1": "Присяжна Виктория Ефимовна",
    "item3.2": "Заведующая отделениями 'Компьютерная инженерия', 'Компьютерные науки и информационные технологии' и 'Экономика'.",
    "item3.3": "Кабинет 15, ІІ-й этаж главного корпуса."
    }
}
</i18n>
