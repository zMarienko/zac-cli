<template>
  <section class="default">
    <div class="container">
      <div class="default__inner">
        <div class="default__inner default__inner--row">
          <div class="default__title default__title--row main-title">
            {{ $t('menu__item6-submenu1') }}
          </div>
          <router-link
            to="/methodical-cabinet/atestatsiya-vykladachiv"
            class="default__btn blue-button"
          >
            {{ $t('more__btn') }}
          </router-link>
        </div>
        <div class="default__inner default__inner--row">
          <div class="default__title default__title--row main-title">
            {{ $t('menu__item6-submenu2') }}
          </div>
          <router-link
            to="/methodical-cabinet/vnutrishni-polozhennya-koledzhu"
            class="default__btn blue-button"
          >
            {{ $t('more__btn') }}
          </router-link>
        </div>
        <div class="default__inner default__inner--row">
          <div class="default__title default__title--row main-title">
            {{ $t('menu__item6-submenu3') }}
          </div>
          <router-link
            to="/methodical-cabinet/zrazky-dokumentiv"
            class="default__btn blue-button"
          >
            {{ $t('more__btn') }}
          </router-link>
        </div>
        <div class="default__inner default__inner--row">
          <div class="default__title default__title--row main-title">
            {{ $t('menu__item6-submenu4') }}
          </div>
          <a
            target="_blank"
            href="https://drive.google.com/drive/folders/1Uooymoxg_2fyQL9aNjKHmsSKEjX7f1dS"
            class="default__btn blue-button"
          >
            {{ $t('more__btn') }}
          </a>
        </div>
        <div class="default__inner default__inner--row">
          <div class="default__title default__title--row main-title">
            {{ $t('menu__item6-submenu5') }}
          </div>
          <router-link
            to="/methodical-cabinet/normatyvni-akty"
            class="default__btn blue-button"
          >
            {{ $t('more__btn') }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
