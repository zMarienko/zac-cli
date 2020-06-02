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
            href="http://zac.org.ua/uploads/metodist/RP.doc"
          >
            {{ $t('paragraph1') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n>
{
  "ua": {
    "title": "Зразки документів",
    "paragraph1": "Робоча програма."
  },
  "ru": {
    "title": "Образцы документов",
    "paragraph1": "Рабочая программа."
    }
}
</i18n>
