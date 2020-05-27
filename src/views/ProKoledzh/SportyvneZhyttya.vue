<template>
  <main class="main" style="background-image: url(/img/study.png);">
    <section class="sportyvne-zhyttya">
      <div class="container">
        <div class="sportyvne-zhyttya__inner">
          <div class="sportyvne-zhyttya__title common-title">
            Спортивне життя
          </div>
          <div class="sportyvne-zhyttya__text">
            Навчальну, спортивно-масову і тренерську роботу в Запорізькому
            авіаційному коледжі проводять висококваліфіковані викладачі вищої
            категорії, майстри та кандидати у майстри спорту.<br /><br />

            Кафедра фізичного виховання у своїй роботі в повній мірі
            використовує, як свою спортивну базу: спортивний зал, зал аеробіки,
            тренажерний зал, так і базу спортивного клубу «Мотор Січ»:
            плавальний басейн - 50 м., стадіон, легкоатлетичний манеж.<br /><br />

            У коледжі працюють спортивні секції, в яких можуть займатися всі
            бажаючі студенти і підвищувати свою спортивну майстерність:
            баскетбол, волейбол, легка атлетика, гирьовий спорт, аеробіка,
            футбол, настільний теніс.<br /><br />

            Серед наших випускників є студенти-спортсмени, які за роки навчання
            виконали нормативи кандидатів і майстрів спорту України. Вони є
            членами збірних команд Запорізької області.
          </div>
          <div class="sportyvne-zhyttya__images">
            <img src="/img/sportyvne-zhyttya/1.jpg" />
            <img src="/img/sportyvne-zhyttya/2.jpg" />
            <img src="/img/sportyvne-zhyttya/3.jpg" />
            <img src="/img/sportyvne-zhyttya/4.jpg" />
            <img src="/img/sportyvne-zhyttya/5.jpg" />
            <img src="/img/sportyvne-zhyttya/6.jpg" />
            <img src="/img/sportyvne-zhyttya/7.jpg" />
            <img src="/img/sportyvne-zhyttya/8.jpg" />
            <img src="/img/sportyvne-zhyttya/9.jpg" />
            <img src="/img/sportyvne-zhyttya/10.jpg" />
            <img src="/img/sportyvne-zhyttya/11.jpg" />
            <img src="/img/sportyvne-zhyttya/12.jpg" />
            <img src="/img/sportyvne-zhyttya/13.jpg" />
            <img src="/img/sportyvne-zhyttya/14.jpg" />
            <img src="/img/sportyvne-zhyttya/15.jpg" />
            <img src="/img/sportyvne-zhyttya/16.jpg" />
            <img src="/img/sportyvne-zhyttya/17.jpg" />
            <img src="/img/sportyvne-zhyttya/18.jpg" />
            <img src="/img/sportyvne-zhyttya/19.jpg" />
            <img src="/img/sportyvne-zhyttya/20.jpg" />
            <img src="/img/sportyvne-zhyttya/21.jpg" />
            <img src="/img/sportyvne-zhyttya/22.jpg" />
            <img src="/img/sportyvne-zhyttya/23.jpg" />
            <img src="/img/sportyvne-zhyttya/24.jpg" />
            <img src="/img/sportyvne-zhyttya/25.jpg" />
            <img src="/img/sportyvne-zhyttya/26.jpg" />
            <img src="/img/sportyvne-zhyttya/27.jpg" />
            <img src="/img/sportyvne-zhyttya/28.jpg" />
            <img src="/img/sportyvne-zhyttya/29.jpg" />
            <img src="/img/sportyvne-zhyttya/30.jpg" />
            <img src="/img/sportyvne-zhyttya/31.jpg" />
            <img src="/img/sportyvne-zhyttya/32.jpg" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'sportyvne-zhyttya',
};
</script>

<style lang="scss" scoped>
.sportyvne-zhyttya {
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
