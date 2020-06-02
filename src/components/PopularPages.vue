<template>
  <section class="popular-pages">
    <div class="container">
      <div class="popular-pages__row">
        <router-link
          to="/abituriyent/pidhotovchi-kursy"
          class="popular-pages__item"
        >
          <span class="popular-pages__title">{{
            $t('menu__item4-submenu1')
          }}</span>
        </router-link>
        <router-link
          to="/abituriyent/vstupna-kompaniya"
          class="popular-pages__item"
        >
          <span class="popular-pages__title">{{
            $t('menu__item4-submenu3')
          }}</span>
        </router-link>

        <a
          class="popular-pages__item"
          href="http://zac.org.ua/uploads/2019-2020 2.XLS"
        >
          <span class="popular-pages__title">{{
            $t('menu__item5-submenu1')
          }}</span>
        </a>

        <router-link
          to="/abituriyent/vartist-navchannya"
          class="popular-pages__item"
        >
          <span class="popular-pages__title">{{
            $t('menu__item4-submenu7')
          }}</span>
        </router-link>

        <router-link
          to="/abituriyent/stypendialne-zabezpechennya"
          class="popular-pages__item"
        >
          <span class="popular-pages__title">{{
            $t('menu__item4-submenu9')
          }}</span>
        </router-link>
        <router-link
          to="/abituriyent/den-vidkrytykh-dverey"
          class="popular-pages__item"
        >
          <span class="popular-pages__title">{{
            $t('menu__item4-submenu4')
          }}</span>
        </router-link>
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
    flex-wrap: wrap;
  }

  &__title {
    font-size: 18px;
    color: #fff;
  }

  &__item {
    width: 33%;
    margin: 5px 0px;
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
}

@media (max-width: 866px) {
  .popular-pages__title {
    font-size: 16px;
  }
}

@media (max-width: 796px) {
  .popular-pages__item {
    width: 49%;
  }
}

@media (max-width: 575px) {
  .popular-pages__item {
    width: 100%;
  }
}
</style>
