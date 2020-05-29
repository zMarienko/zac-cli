<template>
  <section class="default">
    <div class="container">
      <div class="default__inner">
        <div class="default__title main-title">
          Керівництво коледжу
        </div>
        <div class="default__content">
          <div class="default__row">
            <div class="default__item">
              <img src="/img/dudnikov.png" class="default__item-img " />
              <div class="default__item-name">
                <div class="default__item-title main-title">
                  Дудников Олександр Сергiйович
                </div>
                <div class="default__item-subtitle">
                  Директор коледжу
                </div>
              </div>
            </div>
            <div class="default__item">
              <img src="/img/pavlova.jpg" class="default__item-img " />
              <div class="default__item-name">
                <div class="default__item-title main-title">
                  Павлова Кристина Василiвна
                </div>
                <div class="default__item-subtitle">
                  Заступник директора з навчальної роботи
                </div>
              </div>
            </div>
          </div>
          <div class="default__row">
            <div class="default__item">
              <img src="/img/snizhko.png" class="default__item-img " />
              <div class="default__item-name">
                <div class="default__item-title main-title">
                  Снiжко Вiктор Іванович
                </div>
                <div class="default__item-subtitle">
                  Заступник директора з навчально-виробничої роботи
                </div>
              </div>
            </div>
            <div class="default__item">
              <img src="/img/zapgrodskaya.jpg" class="default__item-img " />
              <div class="default__item-name">
                <div class="default__item-title main-title">
                  Павлова Кристина Василiвна
                </div>
                <div class="default__item-subtitle">
                  Заступник директора з виховної роботи
                </div>
              </div>
            </div>
          </div>
          <div class="default__row">
            <div class="default__item">
              <img src="/img/nopicture.jpg" class="default__item-img " />
              <div class="default__item-name">
                <div class="default__item-title main-title">
                  Бабченко Валентин Вікторович
                </div>
                <div class="default__item-subtitle">
                  Заступник директора з адміністративно-господарської роботи
                </div>
              </div>
            </div>
            <div class="default__item">
              <img src="/img/nopicture.jpg" class="default__item-img " />
              <div class="default__item-name ">
                <div class="default__item-title main-title">
                  Рожковська Ольга Вадимівна
                </div>
                <div class="default__item-subtitle">
                  Голова ППО авіабудівників
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.default {
  &__inner {
    display: flex;
    flex-direction: column;
  }
  &__row {
    display: flex;
    justify-content: space-around;
  }
}
</style>
