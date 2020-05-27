<template>
  <main class="main" style="background-image: url(/img/study.png);">
    <section class="normatyvni-dokumenty">
      <div class="container">
        <div class="normatyvni-dokumenty__inner">
          <div class="normatyvni-dokumenty__title common-title">
            Нормативнi документи
          </div>
          <a
            class="normatyvni-dokumenty__link"
            href="http://zac.org.ua/prav/statut.DOC"
          >
            Статут "Запорізький авіаційний коледж ім. О.Г. Івченко"
          </a>
          <a
            class="normatyvni-dokumenty__link"
            href="http://zac.org.ua/uploads/poloshennya_styp_kom.doc"
          >
            Положення про стипендіальну комісію </a
          ><br />
          <a
            target="_blank"
            class="normatyvni-dokumenty__link"
            href="http://zac.org.ua/uploads/metodist/kodeks%20dobrochesnosti.pdf"
          >
            Кодекс академічної доброчесності
          </a>
          <a
            target="_blank"
            class="normatyvni-dokumenty__link"
            href="http://zac.org.ua/uploads/pravila%20stypendiya.pdf"
          >
            Правила призначення та виплати стипендій студентам Запорізького
          </a>

          <a
            target="_blank"
            class="normatyvni-dokumenty__link"
            href="http://zac.org.ua/uploads/vybory/zakon.PDF"
          >
            Закон України Про вищу освіту витяг
          </a>
          <a
            target="_blank"
            class="normatyvni-dokumenty__link"
            href="http://zac.org.ua/uploads/viddil%20kadriv/posadova%20vykladacha.pdf"
          >
            Посадова інструкція викладача </a
          ><br />
          <a
            class="normatyvni-dokumenty__link"
            href="http://zac.org.ua/uploads/polozhennya%20pro%20pravovu%20komIsIyu.doc"
          >
            Положення про правову комісію
          </a>
          <a
            class="normatyvni-dokumenty__link"
            href="http://zac.org.ua/uploads/Polozhennya%20pro%20kerivnika%20grupi.doc"
          >
            Положення про керівника групи Зак
          </a>
          <a
            class="normatyvni-dokumenty__link"
            href="http://zac.org.ua/uploads/123456.doc"
          >
            Положення конкурсу "Калейдоскоп талантів" </a
          ><br />
          <a
            class="normatyvni-dokumenty__link"
            href="http://zac.org.ua/uploads/files/1354534147_zapobgannya-nasilstvu.doc"
          >
            Наказ про запобігання насильству
          </a>
          <a
            class="normatyvni-dokumenty__link"
            href="http://zac.org.ua/uploads/files/1354534176_zapobgannya-tyutyunokurnnya.doc"
          >
            Наказ про запобігання тютюнокуріння
          </a>
          <a
            class="normatyvni-dokumenty__link"
            href="http://zac.org.ua/uploads/files/1354534184_na-poselennya-u-gurtozhitok.doc"
          >
            Наказ на поселення в гуртожиток
          </a>
          <a
            class="normatyvni-dokumenty__link"
            href="http://zac.org.ua/uploads/files/1354534198_pro-vdznachennya-do-dnya-studentov.doc"
          >
            Наказ про відзначення Дня студента
          </a>
          <a
            class="normatyvni-dokumenty__link"
            href="http://zac.org.ua/uploads/files/1354534148_pro-priznachennya-ker.gup-2012-13.doc"
          >
            Наказ про призначення керівникiв груп 2012-2013 </a
          ><br />
          <a
            class="normatyvni-dokumenty__link"
            href="http://zac.org.ua/uploads/instruktag_winter.doc"
          >
            Iнструкцiя з безпеки життєдіяльностістудентів під час зимових
            канікул
          </a>
          <a
            class="normatyvni-dokumenty__link"
            href="http://zac.org.ua/uploads/vstup_instruktag.doc"
          >
            Iнструкцiя вступного інструктажу з безпеки життєдіяльності студентів </a
          ><br />
          <a
            class="normatyvni-dokumenty__link"
            href="http://zac.org.ua/uploads/spisok%20studentov%20shablon12.doc"
          >
            Шаблон списку студентiв
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'normatyvni-dokumenty',
};
</script>

<style lang="scss" scoped>
.normatyvni-dokumenty {
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
