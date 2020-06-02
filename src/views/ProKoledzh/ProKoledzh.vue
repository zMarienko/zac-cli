<template>
  <section class="default">
    <div class="container">
      <div class="default__inner">
        <div class="default__inner default__inner--row">
          <div class="default__title default__title--row main-title">
            {{ $t('menu__item8-submenu1') }}
          </div>
          <router-link
            to="/about/istoriya-koledzhu"
            class="default__btn blue-button"
          >
            {{ $t('more__btn') }}
          </router-link>
        </div>
        <div class="default__inner default__inner--row">
          <div class="default__title default__title--row main-title">
            {{ $t('menu__item8-submenu2') }}
          </div>
          <router-link to="/about/hurtozhytok" class="default__btn blue-button">
            {{ $t('more__btn') }}
          </router-link>
        </div>
        <div class="default__inner default__inner--row">
          <div class="default__title default__title--row main-title">
            {{ $t('menu__item8-submenu3') }}
          </div>
          <router-link
            to="/about/baza-vidpochynku"
            class="default__btn blue-button"
          >
            {{ $t('more__btn') }}
          </router-link>
        </div>
        <div class="default__inner default__inner--row">
          <div class="default__title default__title--row main-title">
            {{ $t('menu__item8-submenu4') }}
          </div>
          <router-link
            to="/about/psykholohichna-sluzhba"
            class="default__btn blue-button"
          >
            {{ $t('more__btn') }}
          </router-link>
        </div>
        <div class="default__inner default__inner--row">
          <div class="default__title default__title--row main-title">
            {{ $t('menu__item8-submenu5') }}
          </div>
          <router-link
            to="/about/sportyvne-zhyttya"
            class="default__btn blue-button"
          >
            {{ $t('more__btn') }}
          </router-link>
        </div>
        <div class="default__inner default__inner--row">
          <div class="default__title default__title--row main-title">
            {{ $t('menu__item8-submenu6') }}
          </div>
          <router-link
            to="/about/kerivnytstvo"
            class="default__btn blue-button"
          >
            {{ $t('more__btn') }}
          </router-link>
        </div>
        <div class="default__inner default__inner--row">
          <div class="default__title default__title--row main-title">
            {{ $t('menu__item8-submenu7') }}
          </div>
          <router-link
            to="/about/normatyvni-dokumenty"
            class="default__btn blue-button"
          >
            {{ $t('more__btn') }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
