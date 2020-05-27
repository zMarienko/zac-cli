<template>
  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="header__top-inner">
          <router-link to="/">
            <img class="header__logo" src="/img/ukraine.svg" alt="zac.zp.ua" />
          </router-link>
          <div class="header__name">
            <router-link to="/admin/news/new" tag="a">
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

.land {
  &__selected {
    border: 1px solid #fff;
    background: #fff;
  }

  &__ua,
  &__ru {
    font-size: 12px;
    border: 1px solid #e7ecef;
    min-height: 20px;
    min-width: 40px;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;

    &-link {
      color: #1c537a;
    }

    &:hover {
      border: 1px solid #fff;
      background: #fff;
    }
  }
}

.mobile__btn {
  align-self: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #fff;
  position: relative;
  color: #464646;
  transition: all 0.5s;

  &::after {
    content: '';
    width: 17px;
    height: 3px;
    border-radius: 1px;
    background-color: #464646;
    position: absolute;
    top: 13px;
    left: 11px;
    box-shadow: 0 6px 0 0 #464646, 0 12px 0 0;
  }

  &:hover {
    background: #888888;
  }
}
</style>
