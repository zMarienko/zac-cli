<template>
  <nav class="menu">
    <ul class="menu__inner">
      <li class="menu__item menu__item--home">
        <router-link tag="button" to="/" class="menu__link">{{
          $t('menu__item1')
        }}</router-link>
      </li>
      <li class="menu__item">
        <router-link tag="button" to="/news" class="menu__link">{{
          $t('menu__item2')
        }}</router-link>
        <ul class="menu__submenu">
          <router-link tag="li" to="/news" class="menu__item-submenu">{{
            $t('menu__item2-submenu1')
          }}</router-link>
          <router-link tag="li" to="/news" class="menu__item-submenu">{{
            $t('menu__item2-submenu2')
          }}</router-link>
          <router-link tag="li" to="/news" class="menu__item-submenu">{{
            $t('menu__item2-submenu3')
          }}</router-link>
        </ul>
      </li>
      <li class="menu__item">
        <router-link tag="button" to="/specialty" class="menu__link">{{
          $t('menu__item3')
        }}</router-link>
        <ul class="menu__submenu">
          <router-link
            tag="li"
            to="/specialty/aviatsiyna-ta-raketno-kosmichna-tekhnika"
            class="menu__item-submenu"
            >{{ $t('menu__item3-submenu1') }}</router-link
          >
          <router-link
            tag="li"
            to="/specialty/haluzeve-mashynobuduvannya"
            class="menu__item-submenu"
            >{{ $t('menu__item3-submenu2') }}</router-link
          >
          <router-link
            tag="li"
            to="/specialty/metalurhiya"
            class="menu__item-submenu"
            >{{ $t('menu__item3-submenu3') }}</router-link
          >
          <router-link
            tag="li"
            to="/specialty/prykladna-mekhanika"
            class="menu__item-submenu"
            >{{ $t('menu__item3-submenu4') }}</router-link
          >
          <router-link
            tag="li"
            to="/specialty/kompyuterni-nauky-ta-informatsiyni-tekhnolohiyi"
            class="menu__item-submenu"
            >{{ $t('menu__item3-submenu5') }}</router-link
          >
          <router-link
            tag="li"
            to="/specialty/kompyuterna-inzheneriya"
            class="menu__item-submenu"
            >{{ $t('menu__item3-submenu6') }}</router-link
          >
          <router-link
            tag="li"
            to="/specialty/ekonomika"
            class="menu__item-submenu"
            >{{ $t('menu__item3-submenu7') }}</router-link
          >
        </ul>
      </li>
      <li class="menu__item">
        <router-link tag="button" to="/abituriyent" class="menu__link">{{
          $t('menu__item4')
        }}</router-link>
        <ul class="menu__submenu">
          <router-link
            tag="li"
            to="/abituriyent/pidhotovchi-kursy"
            class="menu__item-submenu"
            >{{ $t('menu__item4-submenu1') }}</router-link
          >
          <li class="menu__item-submenu">
            <a
              target="_blank"
              href="http://zac.org.ua/uploads/priom/pravila2020.pdf"
              >{{ $t('menu__item4-submenu2') }}</a
            >
          </li>
          <router-link
            tag="li"
            to="/abituriyent/vstupna-kompaniya"
            class="menu__item-submenu"
            >{{ $t('menu__item4-submenu3') }}</router-link
          >
          <router-link
            tag="li"
            to="/abituriyent/den-vidkrytykh-dverey"
            class="menu__item-submenu"
            >{{ $t('menu__item4-submenu4') }}</router-link
          >
          <router-link
            tag="li"
            to="/abituriyent/prohrama-vstupnykh-ispytiv"
            class="menu__item-submenu"
            >{{ $t('menu__item4-submenu5') }}</router-link
          >
          <router-link
            tag="li"
            to="/abituriyent/fakhovi-vyprobuvannya"
            class="menu__item-submenu"
            >{{ $t('menu__item4-submenu6') }}</router-link
          >
          <router-link
            tag="li"
            to="/abituriyent/vartist-navchannya"
            class="menu__item-submenu"
            >{{ $t('menu__item4-submenu7') }}</router-link
          >
          <li class="menu__item-submenu">
            <a target="_blank" href="http://vstup.info/2019/i2019i518.html">{{
              $t('menu__item4-submenu8')
            }}</a>
          </li>
          <router-link
            tag="li"
            to="/abituriyent/stypendialne-zabezpechennya"
            class="menu__item-submenu"
            >{{ $t('menu__item4-submenu9') }}</router-link
          >
        </ul>
      </li>
      <li class="menu__item">
        <router-link tag="button" to="/student" class="menu__link">{{
          $t('menu__item5')
        }}</router-link>
        <ul class="menu__submenu">
          <li class="menu__item-submenu">
            <a href="http://zac.org.ua/uploads/2019-2020 2.XLS">{{
              $t('menu__item5-submenu1')
            }}</a>
          </li>
          <router-link
            tag="li"
            to="/student/zminy-v-rozkladi"
            class="menu__item-submenu"
            >{{ $t('menu__item5-submenu2') }}</router-link
          >
          <li class="menu__item-submenu">
            <a
              target="_blank"
              href="http://zac.org.ua/uploads/grafic%20cons%20dist.pdf"
              >{{ $t('menu__item5-submenu3') }}</a
            >
          </li>
          <li class="menu__item-submenu">
            <a href="http://zac.org.ua/uploads/stamp.rar">{{
              $t('menu__item5-submenu4')
            }}</a>
          </li>
          <router-link
            tag="li"
            to="/student/pratsevlashtuvannya"
            class="menu__item-submenu"
            >{{ $t('menu__item5-submenu5') }}</router-link
          >
          <router-link
            tag="li"
            to="/student/elektronni-pidruchnyky"
            class="menu__item-submenu"
            >{{ $t('menu__item5-submenu6') }}</router-link
          >
          <router-link
            tag="li"
            to="/student/hurtky"
            class="menu__item-submenu"
            >{{ $t('menu__item5-submenu7') }}</router-link
          >
          <router-link
            tag="li"
            to="/student/rekvizyty-oplaty"
            class="menu__item-submenu"
            >{{ $t('menu__item5-submenu8') }}</router-link
          >
        </ul>
      </li>
      <li class="menu__item">
        <router-link tag="button" to="/methodical-cabinet" class="menu__link">{{
          $t('menu__item6')
        }}</router-link>
        <ul class="menu__submenu">
          <router-link
            tag="li"
            to="/methodical-cabinet/atestatsiya-vykladachiv"
            class="menu__item-submenu"
            >{{ $t('menu__item6-submenu1') }}</router-link
          >
          <router-link
            tag="li"
            to="/methodical-cabinet/vnutrishni-polozhennya-koledzhu"
            class="menu__item-submenu"
            >{{ $t('menu__item6-submenu2') }}</router-link
          >
          <router-link
            tag="li"
            to="/methodical-cabinet/zrazky-dokumentiv"
            class="menu__item-submenu"
            >{{ $t('menu__item6-submenu3') }}</router-link
          >

          <li class="menu__item-submenu">
            <a
              target="_blank"
              href="https://drive.google.com/drive/folders/1Uooymoxg_2fyQL9aNjKHmsSKEjX7f1dS"
              >{{ $t('menu__item6-submenu4') }}</a
            >
          </li>
          <router-link
            tag="li"
            to="/methodical-cabinet/normatyvni-akty"
            class="menu__item-submenu"
            >{{ $t('menu__item6-submenu5') }}</router-link
          >
        </ul>
      </li>
      <li class="menu__item">
        <router-link tag="button" to="/educational-work" class="menu__link">{{
          $t('menu__item7')
        }}</router-link>
        <ul class="menu__submenu menu__submenu--ptsk">
          <router-link
            tag="li"
            to="/educational-work/navchalni-plany-ta-normatyvni-dokumenty"
            class="menu__item-submenu"
            >{{ $t('menu__item7-submenu1') }}</router-link
          >
          <router-link
            tag="li"
            to="/educational-work/tsyklovi-komisiyi"
            class="menu__item-submenu"
            >{{ $t('menu__item7-submenu2') }}</router-link
          >
          <router-link
            tag="li"
            to="/educational-work/ptsk-suspilno-politychnykh-dystsyplin"
            class="menu__item-submenu"
            >{{ $t('menu__item7-submenu3') }}</router-link
          >
          <router-link
            tag="li"
            to="/educational-work/ptsk-filolohichnykh-dystsyplin"
            class="menu__item-submenu"
            >{{ $t('menu__item7-submenu4') }}</router-link
          >
          <router-link
            tag="li"
            to="/educational-work/ptsk-fizyko-matematychnykh-dystsyplin"
            class="menu__item-submenu"
            >{{ $t('menu__item7-submenu5') }}</router-link
          >
          <router-link
            tag="li"
            to="/educational-work/ptsk-fizkulturnykh-dystsyplin"
            class="menu__item-submenu"
            >{{ $t('menu__item7-submenu6') }}</router-link
          >
          <router-link
            tag="li"
            to="/educational-work/ptsk-metalurhiynykh-dystsyplin"
            class="menu__item-submenu"
            >{{ $t('menu__item7-submenu7') }}</router-link
          >
          <router-link
            tag="li"
            to="/educational-work/ptsk-aviakonstruktorskykh-dystsyplin"
            class="menu__item-submenu"
            >{{ $t('menu__item7-submenu8') }}</router-link
          >
          <router-link
            tag="li"
            to="/educational-work/ptsk-spetstekhnolohichnykh-dystsyplin"
            class="menu__item-submenu"
            >{{ $t('menu__item7-submenu9') }}</router-link
          >
          <router-link
            tag="li"
            to="/educational-work/ptsk-ekonomichnykh-dystsyplin"
            class="menu__item-submenu"
            >{{ $t('menu__item7-submenu10') }}</router-link
          >
          <router-link
            tag="li"
            to="/educational-work/ptsk-kompyuternykh-dystsyplin"
            class="menu__item-submenu"
            >{{ $t('menu__item7-submenu11') }}</router-link
          >
          <router-link
            tag="li"
            to="/educational-work/ptsk-elektrotekhnichnykh-dystsyplin"
            class="menu__item-submenu"
            >{{ $t('menu__item7-submenu12') }}</router-link
          >
          <router-link
            tag="li"
            to="/educational-work/denne-viddilennya"
            class="menu__item-submenu"
            >{{ $t('menu__item7-submenu13') }}</router-link
          >
          <router-link
            tag="li"
            to="/educational-work/zaochne-viddilennya"
            class="menu__item-submenu"
            >{{ $t('menu__item7-submenu14') }}</router-link
          >
        </ul>
      </li>
      <li class="menu__item">
        <router-link tag="button" to="/about" class="menu__link">{{
          $t('menu__item8')
        }}</router-link>
        <ul class="menu__submenu menu__submenu--about">
          <router-link
            tag="li"
            to="/about/istoriya-koledzhu"
            class="menu__item-submenu"
            >{{ $t('menu__item8-submenu1') }}</router-link
          >
          <router-link
            tag="li"
            to="/about/hurtozhytok"
            class="menu__item-submenu"
            >{{ $t('menu__item8-submenu2') }}</router-link
          >
          <router-link
            tag="li"
            to="/about/baza-vidpochynku"
            class="menu__item-submenu"
            >{{ $t('menu__item8-submenu3') }}</router-link
          >
          <router-link
            tag="li"
            to="/about/psykholohichna-sluzhba"
            class="menu__item-submenu"
            >{{ $t('menu__item8-submenu4') }}</router-link
          >
          <router-link
            tag="li"
            to="/about/sportyvne-zhyttya"
            class="menu__item-submenu"
            >{{ $t('menu__item8-submenu5') }}</router-link
          >
          <router-link
            tag="li"
            to="/about/kerivnytstvo"
            class="menu__item-submenu"
            >{{ $t('menu__item8-submenu6') }}</router-link
          >
          <router-link
            tag="li"
            to="/about/normatyvni-dokumenty"
            class="menu__item-submenu"
            >{{ $t('menu__item8-submenu7') }}</router-link
          >
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.menu {
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__link {
    background-color: transparent;
    color: #16486b;
    font-size: 16px;
    padding: 10px 15px;
  }

  &__item {
    position: relative;

    &:last-child {
      margin-left: auto;
    }

    &-submenu {
      padding: 5px 10px;
      color: #16486b;
      cursor: pointer;
      &:hover {
        background: rgba(25, 99, 211, 0.75);
        box-shadow: 0 0px 5px rgba(0, 0, 0, 0.7);
        color: #fff;
        &:first-child {
          border-radius: 5px 5px 0px 0px;
        }

        &:last-child {
          border-radius: 0px 0px 5px 5px;
        }

        a {
          color: #fff;
        }
      }

      a {
        color: #16486b;
      }
    }

    &:not(.menu__item--home) {
      &:before {
        z-index: 2;
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        left: 35%;
        top: 70%;
        border: 10px solid transparent;
        border-bottom-color: #fff;
        visibility: hidden;
      }

      &:after {
        content: '';
        background-color: transparent;
        position: absolute;
        width: 90%;
        height: 10px;
        left: 5%;
        top: 100%;
        visibility: hidden;
      }
    }
    &:hover {
      &:before,
      &:after {
        visibility: visible;
      }

      .menu__submenu {
        visibility: visible;
      }

      background-color: #d9dfe2;
      transition: all 0.3s ease-in-out;
    }
  }

  &__submenu {
    visibility: hidden;
    position: absolute;
    z-index: 2;
    top: 120%;
    left: 0%;
    min-width: 250px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);

    &--about {
      left: auto;
      right: 0%;
      min-width: 170px;
    }
    &--ptsk {
      min-width: 320px;
    }
  }
}
@media (max-width: 1100px) {
  .menu__submenu--ptsk {
    left: auto;
    left: -50%;
  }
}

@media (max-width: 1000px) {
  .menu__link {
    font-size: 14px;
  }
  .menu__item-submenu {
    font-size: 14px;
  }
  .menu__submenu--ptsk {
    min-width: 250px;
  }
}

@media (max-width: 910px) {
  .menu__link {
    padding: 10px 10px;
  }
  .menu__inner {
    padding: 0px 5px;
  }
  .menu__submenu--ptsk {
    min-width: 230px;
  }
}

@media (max-width: 830px) {
  .menu__link {
    padding: 10px 7px;
  }
  .menu__inner {
    padding: 0px 8px;
  }
  .menu__submenu--ptsk {
    min-width: 220px;
  }
}

@media (max-width: 790px) {
  .menu__link {
    padding: 10px 5px;
  }
  .menu__inner {
    padding: 0px 10px;
  }
}

@media (max-width: 770px) {
  .menu__inner {
    display: none;
  }
}
</style>
