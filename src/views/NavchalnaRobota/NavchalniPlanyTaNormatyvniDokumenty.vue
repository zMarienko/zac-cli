<template>
  <main class="main" style="background-image: url(/img/study.png);">
    <section class="navchalni-plany-ta-normatyvni-dokumenty">
      <div class="container">
        <div class="navchalni-plany-ta-normatyvni-dokumenty__inner">
          <div
            class="navchalni-plany-ta-normatyvni-dokumenty__title common-title"
          >
            Навчальні плани та нормативні документи
          </div>
          <a
            target="_blank"
            class="navchalni-plany-ta-normatyvni-dokumenty__link"
            href="http://zac.org.ua/uploads/metodist/doc/OPP%20M.pdf"
          >
            Освітня професійна програма (ОПП)
          </a>
          <a
            target="_blank"
            class="navchalni-plany-ta-normatyvni-dokumenty__link"
            href="http://zac.org.ua/uploads/metodist/doc/Osvitnya%20programa%20M.pdf"
          >
            Освітня програма профільної середньої освіти
          </a>
          <a
            target="_blank"
            class="navchalni-plany-ta-normatyvni-dokumenty__link"
            href="http://zac.org.ua/uploads/metodist/doc/Navchlniy%20plan%20M.pdf"
          >
            Навчальний план
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'navchalni-plany-ta-normatyvni-dokumenty',
};
</script>

<style lang="scss" scoped>
.navchalni-plany-ta-normatyvni-dokumenty {
  &__inner {
    margin: 10px 15px;
    padding-bottom: 10px;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);
  }
  &__title {
    text-align: center;
    line-height: 1.2;
    padding: 25px 15px;
    font-size: 34px;
  }
  &__link {
    display: block;
    background: #f8f9f9 url(/img/lines.gif) repeat;
    border-left: 10px solid #3190d3;
    padding: 10px;
    margin: 0px 10px 10px 10px;
  }
}
</style>
