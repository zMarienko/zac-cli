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
    "title": "Заочне відділення",

    "item1.1": "Присяжна Вiкторiя Юхимiвна",
    "item1.2": "Завідувач відділеннями 'Технологія обробки матеріалів на станках та автоматичних лініях', 'Обслуговування комп'ютерних та інтелектуальних систем і мереж' та 'Економіка підприємства'.",
    "item1.3": "Кабінет 15, ІІ-й поверх головного корпусу."
  },
  "ru": {
    "title": "Заочное отделение",

    "item1.1": "Присяжна Виктория Ефимовна",
    "item1.2": "Заведующая отделениями 'Технология обработки материалов на станках и автоматических линиях', 'Обслуживание компьютерных и интеллектуальных систем и сетей' и 'Экономика предприятия'.",
    "item1.3": "Кабинет 15, ІІ-й этаж главного корпуса."
    }
}
</i18n>
