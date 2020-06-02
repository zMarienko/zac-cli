<template>
  <section class="default">
    <div class="container">
      <div class="default__inner">
        <div class="default__title main-title">{{ $t('title') }}</div>
        <div class="default__quote">
          <a
            target="_blank"
            class="default__link"
            href="http://zac.org.ua/uploads/metodist/pro%20fahovu.pdf"
            >{{ $t('paragraph1') }}
          </a>
        </div>
        <div class="default__quote">
          <a
            target="_blank"
            class="default__link"
            href="http://zac.org.ua/uploads/metodist/instr%20z%20dilovodstva.pdf"
            >{{ $t('paragraph2') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n>
{
  "ua": {
    "title": "Нормативні акти",
    "paragraph1": "Закон України про фахову передвищу освіту.",
    "paragraph2": "Інструкція з діловодства у закладах середньої загальної освіти."
  },
  "ru": {
    "title": "Нормативные акты",
    "paragraph1": "Закон Украины о профессиональной перед высшими образование.",
    "paragraph2": "Инструкция по делопроизводству в учреждениях среднего общего образования."
    }
}
</i18n>
