<template>
  <nav class="menu">
    <ul class="menu__inner">
      <li class="menu__item menu__item--home">
        <router-link tag="button" to="/" class="menu__link"
          >Головна</router-link
        >
      </li>
      <li class="menu__item">
        <router-link tag="button" to="/news" class="menu__link"
          >Новини</router-link
        >
        <ul class="menu__submenu">
          <router-link tag="li" to="/news" class="menu__item-submenu"
            >Вci новини</router-link
          >
          <router-link tag="li" to="/news" class="menu__item-submenu"
            >Заходи проти булiнгу</router-link
          >
          <router-link tag="li" to="/news" class="menu__item-submenu"
            >Тиждень ПЦК</router-link
          >
        </ul>
      </li>
      <li class="menu__item">
        <router-link tag="button" to="/specialty" class="menu__link"
          >Спецiальностi</router-link
        >
        <ul class="menu__submenu">
          <router-link
            tag="li"
            to="/specialty/aviatsiyna-ta-raketno-kosmichna-tekhnika"
            class="menu__item-submenu"
            >Авiацiйна та ракетно-космічна технiка</router-link
          >
          <router-link
            tag="li"
            to="/specialty/haluzeve-mashynobuduvannya"
            class="menu__item-submenu"
            >Галузеве машинобудування</router-link
          >
          <router-link
            tag="li"
            to="/specialty/metalurhiya"
            class="menu__item-submenu"
            >Металургія</router-link
          >
          <router-link
            tag="li"
            to="/specialty/prykladna-mekhanika"
            class="menu__item-submenu"
            >Прикладна механіка</router-link
          >
          <router-link
            tag="li"
            to="/specialty/kompyuterni-nauky-ta-informatsiyni-tekhnolohiyi"
            class="menu__item-submenu"
            >Комп'ютернi науки та iнформацiйнi технологiї</router-link
          >
          <router-link
            tag="li"
            to="/specialty/kompyuterna-inzheneriya"
            class="menu__item-submenu"
            >Комп'ютерна iнженерiя</router-link
          >
          <router-link
            tag="li"
            to="/specialty/ekonomika"
            class="menu__item-submenu"
            >Економіка</router-link
          >
        </ul>
      </li>
      <li class="menu__item">
        <router-link tag="button" to="/abituriyent" class="menu__link"
          >Абiтурієнту</router-link
        >
        <ul class="menu__submenu">
          <router-link
            tag="li"
            to="/abituriyent/pidhotovchi-kursy"
            class="menu__item-submenu"
            >Пiдготовчi курси</router-link
          >
          <li class="menu__item-submenu">
            <a
              target="_blank"
              href="http://zac.org.ua/uploads/priom/pravila2020.pdf"
              >Правила прийому</a
            >
          </li>
          <router-link
            tag="li"
            to="/abituriyent/vstupna-kompaniya"
            class="menu__item-submenu"
            >Вступна компанiя</router-link
          >
          <router-link
            tag="li"
            to="/abituriyent/den-vidkrytykh-dverey"
            class="menu__item-submenu"
            >День вiдкритих дверей</router-link
          >
          <router-link
            tag="li"
            to="/abituriyent/prohrama-vstupnykh-ispytiv"
            class="menu__item-submenu"
            >Програма вступних iспитiв</router-link
          >
          <router-link
            tag="li"
            to="/abituriyent/fakhovi-vyprobuvannya"
            class="menu__item-submenu"
            >Фаховi випробування</router-link
          >
          <router-link
            tag="li"
            to="/abituriyent/vartist-navchannya"
            class="menu__item-submenu"
            >Вартiсть навчання</router-link
          >
          <li class="menu__item-submenu">
            <a target="_blank" href="http://vstup.info/2019/i2019i518.html"
              >Рейтинговi списки</a
            >
          </li>
          <router-link
            tag="li"
            to="/abituriyent/stypendialne-zabezpechennya"
            class="menu__item-submenu"
            >Стипендiальне забезпечення</router-link
          >
        </ul>
      </li>
      <li class="menu__item">
        <router-link tag="button" to="/student" class="menu__link"
          >Студенту</router-link
        >
        <ul class="menu__submenu">
          <li class="menu__item-submenu">
            <a href="http://zac.org.ua/uploads/2019-2020 2.XLS"
              >Розклад навчальних занять</a
            >
          </li>
          <li class="menu__item-submenu">
            <a
              target="_blank"
              href="https://docs.google.com/document/d/15sTjEGGQPuYWYlCcPlbZNSkSwoC1Aubdu5dAVtF1hzs/edit"
              >Змiни в розкладi</a
            >
          </li>
          <li class="menu__item-submenu">
            <a
              target="_blank"
              href="http://zac.org.ua/uploads/grafic%20cons%20dist.pdf"
              >Графiк консультацiй викладачiв</a
            >
          </li>
          <li class="menu__item-submenu">
            <a href="http://zac.org.ua/uploads/stamp.rar">Зразок штампу А4</a>
          </li>
          <router-link
            tag="li"
            to="/student/pratsevlashtuvannya"
            class="menu__item-submenu"
            >Працевлаштування</router-link
          >
          <router-link
            tag="li"
            to="/student/elektronni-pidruchnyky"
            class="menu__item-submenu"
            >Електронні пiдручники</router-link
          >
          <router-link tag="li" to="/student/hurtky" class="menu__item-submenu"
            >Гуртки</router-link
          >
          <router-link
            tag="li"
            to="/student/rekvizyty-oplaty"
            class="menu__item-submenu"
            >Реквiзити оплаты</router-link
          >
        </ul>
      </li>
      <li class="menu__item">
        <router-link tag="button" to="/methodical-cabinet" class="menu__link"
          >Методичний кабiнет</router-link
        >
        <ul class="menu__submenu">
          <router-link
            tag="li"
            to="/methodical-cabinet/atestatsiya-vykladachiv"
            class="menu__item-submenu"
            >Атестація викладачів</router-link
          >
          <router-link
            tag="li"
            to="/methodical-cabinet/vnutrishni-polozhennya-koledzhu"
            class="menu__item-submenu"
            >Внутрішні положення коледжу</router-link
          >
          <router-link
            tag="li"
            to="/methodical-cabinet/zrazky-dokumentiv"
            class="menu__item-submenu"
            >Зразки документів</router-link
          >

          <li class="menu__item-submenu">
            <a
              target="_blank"
              href="https://drive.google.com/drive/folders/1Uooymoxg_2fyQL9aNjKHmsSKEjX7f1dS"
              >Міністерські програми</a
            >
          </li>
          <router-link
            tag="li"
            to="/methodical-cabinet/normatyvni-akty"
            class="menu__item-submenu"
            >Нормативні акти</router-link
          >
        </ul>
      </li>
      <li class="menu__item">
        <router-link tag="button" to="/educational-work" class="menu__link"
          >Навчальна робота</router-link
        >
        <ul class="menu__submenu menu__submenu--ptsk">
          <router-link
            tag="li"
            to="/educational-work/navchalni-plany-ta-normatyvni-dokumenty"
            class="menu__item-submenu"
            >Навчальні плани та нормативні документи</router-link
          >
          <router-link
            tag="li"
            to="/educational-work/tsyklovi-komisiyi"
            class="menu__item-submenu"
            >Циклові комісії</router-link
          >
          <router-link
            tag="li"
            to="/educational-work/ptsk-suspilno-politychnykh-dystsyplin"
            class="menu__item-submenu"
            >ПЦК суспільно-політичних дисциплін</router-link
          >
          <router-link
            tag="li"
            to="/educational-work/ptsk-filolohichnykh-dystsyplin"
            class="menu__item-submenu"
            >ПЦК філологічних дисциплін</router-link
          >
          <router-link
            tag="li"
            to="/educational-work/ptsk-fizyko-matematychnykh-dystsyplin"
            class="menu__item-submenu"
            >ПЦК фізико-математичних дисциплін</router-link
          >
          <router-link
            tag="li"
            to="/educational-work/ptsk-fizkulturnykh-dystsyplin"
            class="menu__item-submenu"
            >ПЦК фізкультурних дисциплін</router-link
          >
          <router-link
            tag="li"
            to="/educational-work/ptsk-metalurhiynykh-dystsyplin"
            class="menu__item-submenu"
            >ПЦК металургійних дисциплін</router-link
          >
          <router-link
            tag="li"
            to="/educational-work/ptsk-aviakonstruktorskykh-dystsyplin"
            class="menu__item-submenu"
            >ПЦК авіаконструкторських дисциплін</router-link
          >
          <router-link
            tag="li"
            to="/educational-work/ptsk-spetstekhnolohichnykh-dystsyplin"
            class="menu__item-submenu"
            >ПЦК спецтехнологічних дисциплін</router-link
          >
          <router-link
            tag="li"
            to="/educational-work/ptsk-ekonomichnykh-dystsyplin"
            class="menu__item-submenu"
            >ПЦК економічних дисциплін</router-link
          >
          <router-link
            tag="li"
            to="/educational-work/ptsk-kompyuternykh-dystsyplin"
            class="menu__item-submenu"
            >ПЦК комп'ютерних дисциплін</router-link
          >
          <router-link
            tag="li"
            to="/educational-work/ptsk-elektrotekhnichnykh-dystsyplin"
            class="menu__item-submenu"
            >ПЦК електротехнічних дисциплін</router-link
          >
          <router-link
            tag="li"
            to="/educational-work/denne-viddilennya"
            class="menu__item-submenu"
            >Денне відділення</router-link
          >
          <router-link
            tag="li"
            to="/educational-work/zaochne-viddilennya"
            class="menu__item-submenu"
            >Заочне відділення</router-link
          >
        </ul>
      </li>
      <li class="menu__item">
        <router-link tag="button" to="/about" class="menu__link"
          >Про коледж</router-link
        >
        <ul class="menu__submenu menu__submenu--about">
          <router-link
            tag="li"
            to="/about/istoriya-koledzhu"
            class="menu__item-submenu"
            >Iсторiя коледжу</router-link
          >
          <router-link
            tag="li"
            to="/about/hurtozhytok"
            class="menu__item-submenu"
            >Гуртожиток</router-link
          >
          <router-link
            tag="li"
            to="/about/baza-vidpochynku"
            class="menu__item-submenu"
            >База вiдпочинку</router-link
          >
          <router-link
            tag="li"
            to="/about/psykholohichna-sluzhba"
            class="menu__item-submenu"
            >Психологiчна служба</router-link
          >
          <router-link
            tag="li"
            to="/about/sportyvne-zhyttya"
            class="menu__item-submenu"
            >Спортивне життя</router-link
          >
          <router-link
            tag="li"
            to="/about/kerivnytstvo"
            class="menu__item-submenu"
            >Керiвництво</router-link
          >
          <router-link
            tag="li"
            to="/about/normatyvni-dokumenty"
            class="menu__item-submenu"
            >Нормативнi документи</router-link
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
      min-width: 300px;
    }
  }
}
@media (max-width: 1000px) {
  .menu__submenu--ptsk {
    min-width: 280px;
  }
}

@media (max-width: 970px) {
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

@media (max-width: 880px) {
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

@media (max-width: 812px) {
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

@media (max-width: 771px) {
  .menu__link {
    padding: 10px 5px;
  }
  .menu__inner {
    padding: 0px 10px;
  }
}

@media (max-width: 752px) {
  .menu {
    display: none;
  }
}
</style>
