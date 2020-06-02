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
            href="https://gdz4you.com/pidruchnyky/10-klas/"
          >
            {{ $t('paragraph1') }}
          </a>
        </div>
        <div class="default__quote">
          <a
            target="_blank"
            class="default__link"
            href="https://gdz4you.com/pidruchnyky/11-klas/"
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
    "title": "Працевлаштування студентiв",
    "paragraph1": "Електронні підручники для 10 класу.",
    "paragraph2": "Електронні підручники для 11 класу."
  },
  "ru": {
    "title": "Трудоустройство студентов",
    "paragraph1": "Электронные учебникии для 10 класса.",
    "paragraph2": "Электронные учебникии для 11 класса."
    }
}
</i18n>
