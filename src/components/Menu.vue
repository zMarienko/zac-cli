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
        <router-link tag="button" to="/abituriyentu" class="menu__link"
          >Абiтурієнту</router-link
        >
        <ul class="menu__submenu">
          <router-link
            tag="li"
            to="/abituriyentu/pidhotovchi-kursy"
            class="menu__item-submenu"
            >Пiдготовчi курси</router-link
          >
          <router-link
            tag="li"
            to="/abituriyentu/pravyla-pryyomu"
            class="menu__item-submenu"
            >Правила прийому</router-link
          >
          <router-link
            tag="li"
            to="/abituriyentu/vstupna-kompaniya"
            class="menu__item-submenu"
            >Вступна компанiя</router-link
          >
          <router-link
            tag="li"
            to="/abituriyentu/den-vidkrytykh-dverey"
            class="menu__item-submenu"
            >День вiдкритих дверей</router-link
          >
          <router-link
            tag="li"
            to="/abituriyentu/prohrama-vstupnykh-ispytiv"
            class="menu__item-submenu"
            >Програма вступних iспитiв</router-link
          >
          <router-link
            tag="li"
            to="/abituriyentu/fakhovi-vyprobuvannya"
            class="menu__item-submenu"
            >Фаховi випробування</router-link
          >
          <router-link
            tag="li"
            to="/abituriyentu/vartist-navchannya"
            class="menu__item-submenu"
            >Вартiсть навчання</router-link
          >
          <router-link
            tag="li"
            to="/abituriyentu/reytynhovi-spysky"
            class="menu__item-submenu"
            >Рейтинговi списки</router-link
          >
          <router-link
            tag="li"
            to="/abituriyentu/stypendialne-zabezpechennya"
            class="menu__item-submenu"
            >Стипендiальне забезпечення</router-link
          >
        </ul>
      </li>
      <li class="menu__item">
        <router-link tag="button" to="/studentu" class="menu__link"
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
            to="/studentu/pratsevlashtuvannya"
            class="menu__item-submenu"
            >Працевлаштування</router-link
          >
          <router-link
            tag="li"
            to="/studentu/elektronni-pidruchnyky"
            class="menu__item-submenu"
            >Електронні пiдручники</router-link
          >
          <router-link tag="li" to="/studentu/hurtky" class="menu__item-submenu"
            >Гуртки</router-link
          >
          <router-link
            tag="li"
            to="/studentu/rekvizyty-oplaty"
            class="menu__item-submenu"
            >Реквiзити оплаты</router-link
          >
        </ul>
      </li>
      <li class="menu__item">
        <router-link tag="button" to="/metodychnyy-kabinet" class="menu__link"
          >Методичний кабiнет</router-link
        >
        <ul class="menu__submenu">
          <router-link
            tag="li"
            to="/metodychnyy-kabinet/atestatsiya-vykladachiv"
            class="menu__item-submenu"
            >Атестація викладачів</router-link
          >
          <router-link
            tag="li"
            to="/metodychnyy-kabinet/vnutrishni-polozhennya-koledzhu"
            class="menu__item-submenu"
            >Внутрішні положення коледжу</router-link
          >
          <router-link
            tag="li"
            to="/metodychnyy-kabinet/zrazky-dokumentiv"
            class="menu__item-submenu"
            >Зразки документів</router-link
          >
          <router-link
            tag="li"
            to="/metodychnyy-kabinet/ministerski-prohramy"
            class="menu__item-submenu"
            >Міністерські програми</router-link
          >
          <router-link
            tag="li"
            to="/metodychnyy-kabinet/normatyvni-akty"
            class="menu__item-submenu"
            >Нормативні акти</router-link
          >
        </ul>
      </li>
      <li class="menu__item">
        <router-link tag="button" to="/navchalna-robota" class="menu__link"
          >Навчальна робота</router-link
        >
        <ul class="menu__submenu menu__submenu--ptsk">
          <router-link
            tag="li"
            to="/navchalna-robota/navchalni-plany-ta-normatyvni-dokumenty"
            class="menu__item-submenu"
            >Навчальні плани та нормативні документи</router-link
          >
          <router-link
            tag="li"
            to="/navchalna-robota/tsyklovi-komisiyi"
            class="menu__item-submenu"
            >Циклові комісії</router-link
          >
          <router-link
            tag="li"
            to="/navchalna-robota/ptsk-suspilno-politychnykh-dystsyplin"
            class="menu__item-submenu"
            >ПЦК суспільно-політичних дисциплін</router-link
          >
          <router-link
            tag="li"
            to="/navchalna-robota/ptsk-filolohichnykh-dystsyplin"
            class="menu__item-submenu"
            >ПЦК філологічних дисциплін</router-link
          >
          <router-link
            tag="li"
            to="/navchalna-robota/ptsk-fizyko-matematychnykh-dystsyplin"
            class="menu__item-submenu"
            >ПЦК фізико-математичних дисциплін</router-link
          >
          <router-link
            tag="li"
            to="/navchalna-robota/ptsk-fizkulturnykh-dystsyplin"
            class="menu__item-submenu"
            >ПЦК фізкультурних дисциплін</router-link
          >
          <router-link
            tag="li"
            to="/navchalna-robota/ptsk-metalurhiynykh-dystsyplin"
            class="menu__item-submenu"
            >ПЦК металургійних дисциплін</router-link
          >
          <router-link
            tag="li"
            to="/navchalna-robota/ptsk-aviakonstruktorskykh-dystsyplin"
            class="menu__item-submenu"
            >ПЦК авіаконструкторських дисциплін</router-link
          >
          <router-link
            tag="li"
            to="/navchalna-robota/ptsk-spetstekhnolohichnykh-dystsyplin"
            class="menu__item-submenu"
            >ПЦК спецтехнологічних дисциплін</router-link
          >
          <router-link
            tag="li"
            to="/navchalna-robota/ptsk-ekonomichnykh-dystsyplin"
            class="menu__item-submenu"
            >ПЦК економічних дисциплін</router-link
          >
          <router-link
            tag="li"
            to="/navchalna-robota/ptsk-kompyuternykh-dystsyplin"
            class="menu__item-submenu"
            >ПЦК комп'ютерних дисциплін</router-link
          >
          <router-link
            tag="li"
            to="/navchalna-robota/ptsk-elektrotekhnichnykh-dystsyplin"
            class="menu__item-submenu"
            >ПЦК електротехнічних дисциплін</router-link
          >
          <router-link
            tag="li"
            to="/navchalna-robota/denne-viddilennya"
            class="menu__item-submenu"
            >Денне відділення</router-link
          >
          <router-link
            tag="li"
            to="/navchalna-robota/zaochne-viddilennya"
            class="menu__item-submenu"
            >Заочне відділення</router-link
          >
        </ul>
      </li>
      <li class="menu__item">
        <router-link tag="button" to="/pro-koledzh" class="menu__link"
          >Про коледж</router-link
        >
        <ul class="menu__submenu menu__submenu--about">
          <router-link
            tag="li"
            to="/pro-koledzh/istoriya-koledzhu"
            class="menu__item-submenu"
            >Iсторiя коледжу</router-link
          >
          <router-link
            tag="li"
            to="/pro-koledzh/hurtozhytok"
            class="menu__item-submenu"
            >Гуртожиток</router-link
          >
          <router-link
            tag="li"
            to="/pro-koledzh/baza-vidpochynku"
            class="menu__item-submenu"
            >База вiдпочинку</router-link
          >
          <router-link
            tag="li"
            to="/pro-koledzh/psykholohichna-sluzhba"
            class="menu__item-submenu"
            >Психологiчна служба</router-link
          >
          <router-link
            tag="li"
            to="/pro-koledzh/sportyvne-zhyttya"
            class="menu__item-submenu"
            >Спортивне життя</router-link
          >
          <router-link
            tag="li"
            to="/pro-koledzh/kerivnytstvo"
            class="menu__item-submenu"
            >Керiвництво</router-link
          >
          <router-link
            tag="li"
            to="/pro-koledzh/normatyvni-dokumenty"
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
</style>
