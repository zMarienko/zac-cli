<template>
  <section class="default">
    <div class="container">
      <div class="default__inner">
        <div class="default__title main-title">
          {{ $t('title') }}
        </div>
        <div v-html="$t('paragraph1')" class="default__quote"></div>
        <div v-html="$t('paragraph2')" class="default__quote"></div>
        <div v-html="$t('paragraph3')" class="default__quote"></div>
        <div class="default__quote">
          <a
            target="_blank"
            class="default__link"
            href="http://zac.org.ua/uploads/pravila%20stypendiya.pdf"
          >
            {{ $t('paragraph4') }}
          </a>
          <a
            class="default__link"
            href="http://zac.org.ua/uploads/poloshennya_styp_kom.doc"
          >
            {{ $t('paragraph5') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n>
{
  "ua": {
    "title": "Стипендіальне забезпечення",
    "paragraph1": "Академічна стипендія з 1 січня 2017 р. становить 1500 грн. для технічних спеціальностей та 1045 грн. для економічних.",
    "paragraph2": "Академічна стипендія для вiдминникiв становить 2250 грн. для технічних спеціальностей та 1500 грн. для економічних.",
    "paragraph3": "Соціальна стипендія становить 890 грн.",
    "paragraph4": "Правила призначення та виплати стипендій студентам.",
    "paragraph5": "Положення про стипендіальну комісію."
  },
  "ru": {
    "title": "Стипендиальное обеспечения",
    "paragraph1": "Академическая стипендия с 1 января 2017 г. составляет 1500 грн. для технических специальностей и 1045 грн. для экономических.",
    "paragraph2": "Академическая стипендия для отличников составляет 2250 грн. для технических специальностей и 1500 грн. для экономических.",
    "paragraph3": "Социальная стипендия составляет 890 грн.",
    "paragraph4": "Правила назначения и выплаты стипендий студентам.",
    "paragraph5": "Положение о стипендиальной комиссии."
    }
}
</i18n>
