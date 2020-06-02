<template>
  <section class="default">
    <div class="container">
      <div class="default__inner">
        <div class="default__inner default__inner--row">
          <div class="default__title default__title--row main-title">
            {{ $t('menu__item5-submenu1') }}
          </div>
          <a
            href="http://zac.org.ua/uploads/2019-2020 2.XLS"
            class="default__btn blue-button"
          >
            {{ $t('more__btn') }}
          </a>
        </div>
        <div class="default__inner default__inner--row">
          <div class="default__title default__title--row main-title">
            {{ $t('menu__item5-submenu2') }}
          </div>
          <router-link
            to="/student/zminy-v-rozkladi"
            class="default__btn blue-button"
          >
            {{ $t('more__btn') }}
          </router-link>
        </div>
        <div class="default__inner default__inner--row">
          <div class="default__title default__title--row main-title">
            {{ $t('menu__item5-submenu3') }}
          </div>
          <a
            target="_blank"
            href="http://zac.org.ua/uploads/grafic%20cons%20dist.pdf"
            class="default__btn blue-button"
          >
            {{ $t('more__btn') }}
          </a>
        </div>
        <div class="default__inner default__inner--row">
          <div class="default__title default__title--row main-title">
            {{ $t('menu__item5-submenu4') }}
          </div>
          <a
            href="http://zac.org.ua/uploads/stamp.rar"
            class="default__btn blue-button"
          >
            {{ $t('more__btn') }}
          </a>
        </div>
        <div class="default__inner default__inner--row">
          <div class="default__title default__title--row main-title">
            {{ $t('menu__item5-submenu5') }}
          </div>
          <router-link
            to="/student/pratsevlashtuvannya"
            class="default__btn blue-button"
          >
            {{ $t('more__btn') }}
          </router-link>
        </div>
        <div class="default__inner default__inner--row">
          <div class="default__title default__title--row main-title">
            {{ $t('menu__item5-submenu6') }}
          </div>
          <router-link
            to="/student/elektronni-pidruchnyky"
            class="default__btn blue-button"
          >
            {{ $t('more__btn') }}
          </router-link>
        </div>
        <div class="default__inner default__inner--row">
          <div class="default__title default__title--row main-title">
            {{ $t('menu__item5-submenu7') }}
          </div>
          <router-link to="/student/hurtky" class="default__btn blue-button">
            {{ $t('more__btn') }}
          </router-link>
        </div>
        <div class="default__inner default__inner--row">
          <div class="default__title default__title--row main-title">
            {{ $t('menu__item5-submenu8') }}
          </div>
          <router-link
            to="/student/rekvizyty-oplaty"
            class="default__btn blue-button"
          >
            {{ $t('more__btn') }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
