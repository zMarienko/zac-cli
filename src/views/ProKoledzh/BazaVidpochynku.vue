<template>
  <main class="main" style="background-image: url(/img/study.png);">
    <section class="baza-vidpochynku">
      <div class="container">
        <div class="baza-vidpochynku__inner">
          <div class="baza-vidpochynku__title common-title">
            База відпочинку
          </div>
          <div class="baza-vidpochynku__text">
            Первым делом, первым делом... это отдых, самолеты уж построим Мы
            потом. <br /><br />
            Главное, что отдохнуть есть где.<br /><br />
            На берегу Азовского моря, 5км за Приморском и за 5км до Бердянска,
            расположена база «Авиатор», Запорожского авиационного колледжа.
            Уникальность расположения заключается в том что вокруг чистый
            воздух, настоянный на запахах цветущих степных трав и моря,
            неповторимый ландшафт с голубыми заливами и лиманами, мягкий климат,
            пляж, покрытый песком и мелким ракушечником.<br /><br />
            База отдыха предлагает тихий и спокойный отдых на берегу азовского
            моря в экологически чистом районе побережья в поселке Луначарское.
            Здесь все располагает к семейному отдыху: уютная территория, мелкое
            море. На территории есть беседки, спортивная площадка. От базы
            отдыха до моря примерно 50 м. На пляже детей и взрослых порадуют
            надувные горки, функционирует пункт проката катамаранов,
            скутеров.<br /><br />
            Профсоюзная организация Запорожского авиационного колледжа
            занимается оздоровлением не только сотрудников и преподавателей
            колледжа, но и студентов. А значит это то, что все желающие из
            администрации и преподавателей вместе со студентами старших курсов
            могут в любое время (главное чтоб не в учебное), собраться и поехать
            на пару недель и отдохнуть от городской суеты, тем самым получить
            заряд бодрости и хорошего настроения, а главное воспоминания которые
            останутся в памяти.<br /><br />
            Хочется сказать на последок, что хорошо когда учебное заведение в
            котором ты учишься, не просто рассказывает тебе что-то новое и дает
            тебе новые знания, но и интересуется твоим досугом и хочет чтобы он
            был максимально полезным и познавательным.<br /><br />
            Ну что ж будем ждать лета и айда на море!
          </div>
          <div class="baza-vidpochynku__images">
            <img src="/img/baza-vidpochynku/1.jpg" />
            <img src="/img/baza-vidpochynku/2.jpg" />
            <img src="/img/baza-vidpochynku/3.jpg" />
            <img src="/img/baza-vidpochynku/4.jpg" />
            <img src="/img/baza-vidpochynku/5.jpg" />
            <img src="/img/baza-vidpochynku/6.jpg" />
            <img src="/img/baza-vidpochynku/7.jpg" />
            <img src="/img/baza-vidpochynku/8.jpg" />
            <img src="/img/baza-vidpochynku/9.jpg" />
            <img src="/img/baza-vidpochynku/10.jpg" />
            <img src="/img/baza-vidpochynku/11.jpg" />
            <img src="/img/baza-vidpochynku/12.jpg" />
            <img src="/img/baza-vidpochynku/13.jpg" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'baza-vidpochynku',
};
</script>

<style lang="scss" scoped>
.baza-vidpochynku {
  &__inner {
    margin: 10px 15px;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);
  }
  &__title {
    text-align: center;
    line-height: 1.2;
    padding: 25px 15px;
    font-size: 34px;
  }
  &__text {
    border-left: 10px solid #3190d3;
    font-size: 16px;
    margin: 0px 20px 10px 10px;
    padding-left: 10px;
    text-align: justify;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  &__images {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0px 20px 20px 20px;
    img {
      flex: 1 1 auto;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
      margin: 10px;
      height: 200px;
      object-fit: cover;
    }
  }
}
</style>
