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
            href="https://drive.google.com/open?id=1UQSl57JzIushhLD5_GTrjO8ClhdV2AQs"
          >
            {{ $t('paragraph1') }}
          </a>
        </div>
        <div class="default__quote">
          <a
            target="_blank"
            class="default__link"
            href="https://drive.google.com/open?id=1JoO7PDWNFDkJuXsc4TbABYJYqU5D0DgO"
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
    "title": "Реквiзити оплати",
    "paragraph1": "Реквiзити на оплату навчання та гуртожитку.",
    "paragraph2": "Реквiзити на оплату навчання на пiдготовчих курсах."
  },
  "ru": {
    "title": "Реквизиты оплаты",
    "paragraph1": "Реквизиты на оплату обучения и общежития.",
    "paragraph2": "Реквизиты на оплату обучения на подготовительных курсах."
    }
}
</i18n>
