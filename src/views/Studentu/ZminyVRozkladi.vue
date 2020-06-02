<template>
  <section class="default">
    <div class="container">
      <div class="default__inner">
        <div class="default__title main-title">
          {{ $t('title') }}
        </div>
        <div class="default__quote">
          {{ $t('link') }}
          <a
            target="_blank"
            href="https://docs.google.com/document/d/15sTjEGGQPuYWYlCcPlbZNSkSwoC1Aubdu5dAVtF1hzs/edit"
            >https://docs.google.com/document/d/15sTjEGGQPuYWYlCcPlbZNSkSwoC1Aubdu5dAVtF1hzs/edit</a
          >
        </div>

        <iframe
          src="https://docs.google.com/document/d/15sTjEGGQPuYWYlCcPlbZNSkSwoC1Aubdu5dAVtF1hzs/edit"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
iframe {
  height: 300vh;
  width: 100%;
  //pointer-events: none;
}
</style>

<i18n>
{
  "ua": {
    "title": "Змiни в розкладi",
    "link": "Посилання на змiни в розкладi:"
  },
  "ru": {
    "title": "Изменения в расписании",
    "link": "Ссылка на изменения в расписании:"
    }
}
</i18n>
