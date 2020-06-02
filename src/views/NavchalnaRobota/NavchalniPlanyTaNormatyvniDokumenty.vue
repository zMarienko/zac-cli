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
            href="http://zac.org.ua/uploads/metodist/doc/OPP%20M.pdf"
          >
            {{ $t('paragraph1') }}
          </a>
        </div>
        <div class="default__quote">
          <a
            target="_blank"
            class="default__link"
            href="http://zac.org.ua/uploads/metodist/doc/Osvitnya%20programa%20M.pdf"
          >
            {{ $t('paragraph2') }}
          </a>
        </div>
        <div class="default__quote">
          <a
            target="_blank"
            class="default__link"
            href="http://zac.org.ua/uploads/metodist/doc/Navchlniy%20plan%20M.pdf"
          >
            {{ $t('paragraph3') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n>
{
  "ua": {
    "title": "Навчальні плани та нормативні документи",
    "paragraph1": "Освітня професійна програма (ОПП)",
    "paragraph2": "Освітня програма профільної середньої освіти",
    "paragraph3": "Навчальний план"
  },
  "ru": {
    "title": "Учебные планы и нормативные документы",
    "paragraph1": "Образовательная профессиональная программа (ОПП)",
    "paragraph2": "Образовательная программа профильной среднего образования",
    "paragraph3": "Учебный план"
    }
}
</i18n>
