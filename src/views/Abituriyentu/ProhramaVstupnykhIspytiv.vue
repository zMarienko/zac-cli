<template>
  <section class="default">
    <div class="container">
      <div class="default__inner">
        <div class="default__title main-title">{{ $t('title') }}</div>
        <div v-html="$t('paragraph1')" class="default__quote"></div>
        <div v-html="$t('paragraph2')" class="default__quote"></div>
        <div v-html="$t('paragraph3')" class="default__quote"></div>
        <div v-html="$t('paragraph4')" class="default__quote"></div>
      </div>
    </div>
  </section>
</template>

<i18n>
{
  "ua": {
    "title": "Програми вступних іспитів та співбесід",
    "paragraph1": "Програми вступних іспитів (9 клас): <a   target='_blank'   class='default__link'   href='http://zac.org.ua/uploads/priom/mat%209.pdf' >   - з математики. </a> <a   target='_blank'   class='default__link'   href='http://zac.org.ua/uploads/priom/ukr%209.pdf' >   - з української мови. </a>",
    "paragraph2": "Програми вступних іспитів (11 клас) для осіб, що мають право участі у конкурсі за спеціальними умовами (іспит або ЗНО). <a   target='_blank'   class='default__link'   href='http://zac.org.ua/uploads/priom/mat%2011.pdf' >   - з математики. </a> <a   target='_blank'   class='default__link'   href='http://zac.org.ua/uploads/priom/ukr%2011.pdf' >   - з української мови. </a>",
    "paragraph3": "Програми співбесіди з математики. <a   target='_blank'   class='default__link'   href='http://zac.org.ua/uploads/priom/spiv%20besida%209.pdf' >   - на основі базової загальної середньої освіти. </a> <a   target='_blank'   class='default__link'   href='http://zac.org.ua/uploads/priom/spiv%20besida%2011.pdf' >   - на основі повної загальної середньої освіти. </a>",
    "paragraph4": "Програма для кваліфікованих робітників. <a   target='_blank'   class='default__link'   href='http://zac.org.ua/uploads/priom/kval%20ukr.pdf' >   - з української мови. </a>"
  },
  "ru": {
    "title": "Программы вступительных экзаменов и собеседований",
    "paragraph1": "Программы вступительных экзаменов (9 класс): <a   target='_blank'   class='default__link'   href='http://zac.org.ua/uploads/priom/mat%209.pdf' >   - по математике. </a> <a   target='_blank'   class='default__link'   href='http://zac.org.ua/uploads/priom/ukr%209.pdf' >   - по украинскому языку. </a>",
    "paragraph2": "Программы вступительных экзаменов (11 класс) для лиц, имеющих право участия в конкурсе по специальным условиям (экзамен или ЗНО).  <a   target='_blank'   class='default__link'   href='http://zac.org.ua/uploads/priom/mat%2011.pdf' >   - по математике. </a> <a   target='_blank'   class='default__link'   href='http://zac.org.ua/uploads/priom/ukr%2011.pdf' >   - по украинскому языку. </a>",
    "paragraph3": "Программы собеседования по математике.  <a   target='_blank'   class='default__link'   href='http://zac.org.ua/uploads/priom/spiv%20besida%209.pdf' >   - на основе базового общего среднего образования. </a> <a   target='_blank'   class='default__link'   href='http://zac.org.ua/uploads/priom/spiv%20besida%2011.pdf' >   - на основе полного общего среднего образования. </a>",
    "paragraph4": "Программа для квалифицированных рабочих. <a   target='_blank'   class='default__link'   href='http://zac.org.ua/uploads/priom/kval%20ukr.pdf' >   - по украинскому языку. </a>"
    }
}
</i18n>
