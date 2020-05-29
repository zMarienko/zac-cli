<template>
  <section class="popular-pages">
    <div class="container">
      <div class="popular-pages__row">
        <div class="popular-pages__column">
          <router-link
            to="/abituriyentu/pidhotovchi-kursy"
            class="popular-pages__item"
          >
            <span class="popular-pages__title">Пiдготовчi курси</span>
          </router-link>
          <router-link
            to="/abituriyentu/vstupna-kompaniya"
            class="popular-pages__item"
          >
            <span class="popular-pages__title">Вступна компанiя</span>
          </router-link>
        </div>
        <div class="popular-pages__column">
          <a
            class="popular-pages__item"
            href="http://zac.org.ua/uploads/2019-2020 2.XLS"
          >
            <span class="popular-pages__title">Розклад занять</span>
          </a>

          <router-link
            to="/abituriyentu/vartist-navchannya"
            class="popular-pages__item"
          >
            <span class="popular-pages__title">Вартiсть навчання</span>
          </router-link>
        </div>
        <div class="popular-pages__column">
          <router-link
            to="/abituriyentu/stypendialne-zabezpechennya"
            class="popular-pages__item"
          >
            <span class="popular-pages__title">Стипендiальне забезпечення</span>
          </router-link>
          <router-link
            to="/abituriyentu/den-vidkrytykh-dverey"
            class="popular-pages__item"
          >
            <span class="popular-pages__title">День вiдкритих дверей</span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.popular-pages {
  &__row {
    display: flex;
    justify-content: space-between;
    margin: 10px 15px;
  }

  &__column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 33.33333%;
  }

  &__title {
    font-size: 18px;
    color: #fff;
  }

  &__item {
    padding: 15px;
    text-align: center;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.7);
    background-color: rgba(25, 99, 211, 0.75);
    transition: all 0.2s ease-in-out;
    position: relative;
    overflow: hidden;
    height: 100%;

    &:before {
      content: '';
      background-color: rgba(#fff, 0.5);
      height: 100%;
      width: 5em;
      position: absolute;
      top: 0;
      left: -5em;
      transform: skewX(-45deg) translateX(0);
    }

    &:hover {
      background-color: #3577db;
      &:before {
        transform: skewX(-45deg) translateX(24em);
        transition: all 0.7s ease-in-out;
      }
    }
  }

  &__item + &__item {
    margin-top: 10px;
  }

  &__column + &__column {
    margin-left: 10px;
  }
}
</style>
