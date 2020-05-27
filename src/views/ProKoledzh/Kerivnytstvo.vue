<template>
  <main class="main" style="background-image: url(/img/study.png);">
    <div class="kerivnytstvo">
      <div class="container">
        <div class="kerivnytstvo__inner">
          <div class="kerivnytstvo__title common-title">
            Керівництво коледжу
          </div>
          <div class="kerivnytstvo__content">
            <div class="kerivnytstvo__row">
              <div class="kerivnytstvo__item">
                <img
                  src="/img/dudnikov.png"
                  alt
                  class="kerivnytstvo__item-img"
                />
                <div class="kerivnytstvo__item-name">
                  <div class="kerivnytstvo__item-title common-title">
                    Дудников Олександр Сергiйович
                  </div>
                  <div class="kerivnytstvo__item-subtitle">
                    Директор коледжу
                  </div>
                </div>
              </div>
              <div class="kerivnytstvo__item">
                <img
                  src="/img/pavlova.jpg"
                  alt
                  class="kerivnytstvo__item-img"
                />
                <div class="kerivnytstvo__item-name">
                  <div class="kerivnytstvo__item-title common-title">
                    Павлова Кристина Василiвна
                  </div>
                  <div class="kerivnytstvo__item-subtitle">
                    Заступник директора з навчальної роботи
                  </div>
                </div>
              </div>
            </div>
            <div class="kerivnytstvo__row">
              <div class="kerivnytstvo__item">
                <img
                  src="/img/snizhko.png"
                  alt
                  class="kerivnytstvo__item-img"
                />
                <div class="kerivnytstvo__item-name">
                  <div class="kerivnytstvo__item-title common-title">
                    Снiжко Вiктор Іванович
                  </div>
                  <div class="kerivnytstvo__item-subtitle">
                    Заступник директора з навчально-виробничої роботи
                  </div>
                </div>
              </div>
              <div class="kerivnytstvo__item">
                <img
                  src="/img/zapgrodskaya.jpg"
                  alt
                  class="kerivnytstvo__item-img"
                />
                <div class="kerivnytstvo__item-name">
                  <div class="kerivnytstvo__item-title common-title">
                    Павлова Кристина Василiвна
                  </div>
                  <div class="kerivnytstvo__item-subtitle">
                    Заступник директора з виховної роботи
                  </div>
                </div>
              </div>
            </div>
            <div class="kerivnytstvo__row">
              <div class="kerivnytstvo__item">
                <img
                  src="/img/nopicture.png"
                  alt
                  class="kerivnytstvo__item-img"
                />
                <div class="kerivnytstvo__item-name">
                  <div class="kerivnytstvo__item-title common-title">
                    Бабченко Валентин Вікторович
                  </div>
                  <div class="kerivnytstvo__item-subtitle">
                    Заступник директора з адміністративно-господарської роботи
                  </div>
                </div>
              </div>
              <div class="kerivnytstvo__item">
                <img
                  src="/img/nopicture.png"
                  alt
                  class="kerivnytstvo__item-img"
                />
                <div class="kerivnytstvo__item-name ">
                  <div class="kerivnytstvo__item-title common-title">
                    Рожковська Ольга Вадимівна
                  </div>
                  <div class="kerivnytstvo__item-subtitle">
                    Голова ППО авіабудівників
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.kerivnytstvo {
  &__inner {
    margin: 10px 15px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
  }
  &__title {
    font-size: 34px;
    padding: 25px 15px;
    text-align: center;
  }
  &__row {
    display: flex;
    justify-content: space-around;
  }
  &__item {
    text-align: center;
    width: 50%;
    margin: 15px;
    padding: 5px;
    display: flex;
    background-color: rgba(#ffffff, 0.5);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    &-name {
      padding: 20px 10px;
    }
    &-title {
      font-size: 26px;

      padding: 0px 10px;
    }
    &-subtitle {
      font-size: 20px;
      padding: 10px 10px;
      color: #464646;
    }
    &-img {
      min-width: 200px;
      width: 200px;
      min-height: 200px;
      height: 200px;

      object-fit: cover;
    }
  }
}
</style>
