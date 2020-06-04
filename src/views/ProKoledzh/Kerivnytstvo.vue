<template>
  <section class="default">
    <div class="container">
      <div class="default__inner">
        <div class="default__title main-title">
          {{ $t('title') }}
        </div>
        <div class="default__content">
          <div class="default__row">
            <div class="default__item">
              <img src="/img/dudnikov.png" class="default__item-img " />
              <div class="default__item-name">
                <div class="default__item-title main-title">
                  {{ $t('item1.1') }}
                </div>
                <div class="default__item-subtitle">
                  {{ $t('item1.2') }}
                </div>
              </div>
            </div>
            <div class="default__item">
              <img src="/img/pavlova.jpg" class="default__item-img " />
              <div class="default__item-name">
                <div class="default__item-title main-title">
                  {{ $t('item2.1') }}
                </div>
                <div class="default__item-subtitle">
                  {{ $t('item2.2') }}
                </div>
              </div>
            </div>
          </div>
          <div class="default__row">
            <div class="default__item">
              <img src="/img/snizhko.png" class="default__item-img " />
              <div class="default__item-name">
                <div class="default__item-title main-title">
                  {{ $t('item3.1') }}
                </div>
                <div class="default__item-subtitle">
                  {{ $t('item3.2') }}
                </div>
              </div>
            </div>
            <div class="default__item">
              <img src="/img/zapgrodskaya.jpg" class="default__item-img " />
              <div class="default__item-name">
                <div class="default__item-title main-title">
                  {{ $t('item4.1') }}
                </div>
                <div class="default__item-subtitle">
                  {{ $t('item4.2') }}
                </div>
              </div>
            </div>
          </div>
          <div class="default__row">
            <div class="default__item">
              <img src="/img/nopicture.jpg" class="default__item-img " />
              <div class="default__item-name">
                <div class="default__item-title main-title">
                  {{ $t('item5.1') }}
                </div>
                <div class="default__item-subtitle">
                  {{ $t('item5.2') }}
                </div>
              </div>
            </div>
            <div class="default__item">
              <img src="/img/nopicture.jpg" class="default__item-img " />
              <div class="default__item-name ">
                <div class="default__item-title main-title">
                  {{ $t('item6.1') }}
                </div>
                <div class="default__item-subtitle">
                  {{ $t('item6.2') }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n>
{
  "ua": {
    "title": "Керівництво коледжу",
    "item1.1": "Дудников Олександр Сергiйович",
    "item1.2": "Директор коледжу",
    "item2.1": "Павлова Кристина Василiвна",
    "item2.2": "Заступник директора з навчальної роботи",
    "item3.1": "Снiжко Вiктор Іванович",
    "item3.2": "Заступник директора з навчально-виробничої роботи",
    "item4.1": "Павлова Кристина Василiвна",
    "item4.2": "Заступник директора з виховної роботи",
    "item5.1": "Бабченко Валентин Вікторович",
    "item5.2": "Заступник директора з адміністративно-господарської роботи",
    "item6.1": "Рожковська Ольга Вадимівна",
    "item6.2": "Голова ППО авіабудівників"
  },
  "ru": {
    "title": "Руководство колледжа",
    "item1.1": "Дудников Александр Сергеевич",
    "item1.2": "Директор колледжа",
    "item2.1": "Павлова Кристина Васильевна",
    "item2.2": "Заместитель директора по учебной работе",
    "item3.1": "Снижко Виктор Иванович",
    "item3.2": "Заместитель директора по учебно-производственной работе",
    "item4.1": "Павлова Кристина Васильевна",
    "item4.2": "Заместитель директора по воспитательной работе",
    "item5.1": "Бабченко Валентин Викторович",
    "item5.2": "Заместитель директора по административно-хозяйственной работе",
    "item6.1": "Рожковская Ольга Вадимовна",
    "item6.2": "Председатель ПВО авиастроителей"
    }
}
</i18n>

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
