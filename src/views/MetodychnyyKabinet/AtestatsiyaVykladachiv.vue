<template>
  <section class="default">
    <div class="container">
      <div class="default__inner">
        <div class="default__title main-title">
          {{ $t('title') }}
        </div>
        <div class="default__quote">
          <a
            target="_blank"
            class="default__link"
            href="http://zac.org.ua/uploads/metodist/Harakteristika.pdf"
          >
            {{ $t('paragraph1') }}
          </a>
        </div>
        <div class="default__quote">
          <a
            target="_blank"
            class="default__link"
            href="http://zac.org.ua/uploads/metodist/Kartka-zrazok.pdf"
          >
            {{ $t('paragraph2') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n>
{
  "ua": {
    "title": "Атестація викладачів",
    "paragraph1": "Характеристика викладача.",
    "paragraph2": "Картка-зразок комплексної оцінки професійної діяльності педагогічного працівника в міжатестаційний період."
  },
  "ru": {
    "title": "Аттестация преподавателей",
    "paragraph1": "Характеристика преподавателя.",
    "paragraph2": "Карточка-образец комплексной оценки профессиональной деятельности педагога в межаттестационный период."
    }
}
</i18n>
