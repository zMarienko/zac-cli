<template>
  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="header__top-inner">
          <router-link to="/">
            <img class="header__logo" src="/img/ukraine.svg" alt="zac.zp.ua" />
          </router-link>
          <div class="header__name">
            <router-link to="/admin/news/new">
              <h1 class="header__title">
                Запорiзький авiацiйний коледж iм. О.Г. Iвченка
              </h1>
            </router-link>
            <h2 class="header__subtitle">
              Мiнiстерство освіти i науки України
            </h2>
            <div class="header__land land">
              <button class="land__ua land__selected">
                <a class="land__ua-link">Укр.</a>
              </button>
              <button class="land__ru">
                <a class="land__ua-link">Рус.</a>
              </button>
            </div>
          </div>
          <div class="header__btn">
            <button class="mobile__btn"></button>
          </div>
        </div>
      </div>
    </div>
    <div class="header__menu">
      <div class="container">
        <Menu />
      </div>
    </div>
  </header>
</template>

<script>
import Menu from '@/components/Menu';

export default {
  components: { Menu },
};
</script>

<style lang="scss">
.header {
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);

  &__top {
    background-color: #f1f2ff;
    &-inner {
      display: flex;
    }
  }

  &__logo {
    max-height: 100px;
    margin: 10px 15px;
  }

  &__name {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-top: 20px;
    width: 100%;
  }

  &__title {
    font-weight: 700;
    color: #1c537a;
    font-size: 34px;
    width: 380px;
  }

  &__subtitle {
    text-align: center;
    color: #1c537a;
    font-size: 22px;
    padding: 0px 15px;
    transform: translateY(-30px);
    text-transform: uppercase;
    align-self: flex-end;
  }

  &__land {
    position: absolute;
    top: 20px;
    right: 15px;
  }

  &__btn {
    display: none;
    align-self: center;
    padding-right: 15px;
  }

  &__menu {
    background: #e7ecef;
    box-shadow: 0 0px 5px rgba(0, 0, 0, 0.2);
  }
}

@media (max-width: 900px) {
  .header__subtitle {
    max-width: 312px;
  }

  .header__land {
    top: 0px;
    right: 110px;
  }
}

@media (max-width: 752px) {
  .menu {
    display: none;
  }
  .header__title {
    font-size: 30px;
    max-width: 340px;
  }
  .header__subtitle {
    display: none;
  }
  .header__land {
    top: auto;
    right: auto;
    left: 0px;
    bottom: 10px;
  }
  .header__btn {
    display: block;
    margin: auto 15px;
  }
}

@media (max-width: 520px) {
  .header__title {
    font-size: 26px;
    width: 290px;
  }

  .header__logo {
    max-height: 90px;
  }
}

@media (max-width: 485px) {
  .header__top-inner {
    justify-content: center;
  }

  .header__logo {
    height: 70px;
  }

  .header__title {
    font-size: 24px;
  }

  .header__name {
    min-width: 270px;
    max-width: 270px;
    transform: translateY(-7px);
  }

  .header__land {
    bottom: -2px;
  }
  .header__btn {
    padding-right: 0px;
  }
}

@media (max-width: 420px) {
  .header__title {
    font-size: 20px;
    min-width: 222px;
    max-width: 222px;
  }

  .header__name {
    min-width: 222px;
    max-width: 222px;
    transform: translateY(0px);
  }

  .header__land {
    bottom: 5px;
  }
}

@media (max-width: 360px) {
  .header__title {
    font-size: 18px;
    min-width: 200px;
    max-width: 200px;
  }

  .header__name {
    min-width: 200px;
    max-width: 200px;
  }

  .land__ua,
  .land__ru {
    font-size: 10px;
    height: 15px;
    width: 30px;
  }

  .header__land {
    bottom: 7px;
  }
}

@media (max-width: 342px) {
  .header__logo {
    height: 60px;
    margin: 10px 10px;
  }

  .header__title {
    font-size: 18px;
    min-width: 200px;
    max-width: 200px;
  }

  .header__name {
    min-width: 180px;
    max-width: 180px;
  }

  .header__land {
    bottom: 3px;
  }

  .header__btn {
    margin-left: 25px;
  }
}
</style>
