<template>
  <section class="slider">
    <div class="container">
      <div class="slider__slick-slider">
        <agile :dots="false" :autoplay="true" :autoplay-speed="5000">
          <div class="slider__item">
            <div class="slider__content">
              <div class="slider__title">
                <h3>134 {{ $t('menu__item3-submenu1') }}</h3>
              </div>
              <div class="slider__about">
                <p>
                  {{ $t('slider__about1') }}
                </p>
              </div>
              <div class="slider__qualification">
                <span>{{ $t('slider__qualification1') }}</span>
              </div>

              <router-link
                to="/specialty/aviatsiyna-ta-raketno-kosmichna-tekhnika"
                class="slider__btn blue-button"
              >
                <span>{{ $t('more__btn') }}</span>
              </router-link>
            </div>
            <img
              src="/img/slider/slider-1.jpg"
              alt="aviatsiyna-ta-raketno-kosmichna-tekhnika"
              class="slider__image"
            />
          </div>

          <div class="slider__item">
            <div class="slider__content">
              <div class="slider__title">
                <h3>133 {{ $t('menu__item3-submenu2') }}</h3>
              </div>
              <div class="slider__about">
                <p>
                  {{ $t('slider__about2') }}
                </p>
              </div>
              <div class="slider__qualification">
                <span>{{ $t('slider__qualification2') }}</span>
              </div>

              <router-link
                to="/specialty/haluzeve-mashynobuduvannya"
                class="slider__btn blue-button"
              >
                <span>{{ $t('more__btn') }}</span>
              </router-link>
            </div>
            <img
              src="/img/slider/slider-2.jpg"
              alt="haluzeve-mashynobuduvannya"
              class="slider__image"
            />
          </div>

          <div class="slider__item">
            <div class="slider__content">
              <div class="slider__title">
                <h3>136 {{ $t('menu__item3-submenu3') }}</h3>
              </div>
              <div class="slider__about">
                <p>
                  {{ $t('slider__about3') }}
                </p>
              </div>
              <div class="slider__qualification">
                <span>{{ $t('slider__qualification3') }}</span>
              </div>

              <router-link
                to="/specialty/metalurhiya"
                class="slider__btn blue-button"
              >
                <span>{{ $t('more__btn') }}</span>
              </router-link>
            </div>
            <img
              src="/img/slider/slider-3.jpg"
              alt="metalurhiya"
              class="slider__image"
            />
          </div>

          <div class="slider__item">
            <div class="slider__content">
              <div class="slider__title">
                <h3>131 {{ $t('menu__item3-submenu4') }}</h3>
              </div>
              <div class="slider__about">
                <p>
                  {{ $t('slider__about4') }}
                </p>
              </div>
              <div class="slider__qualification">
                <span>{{ $t('slider__qualification4') }}</span>
              </div>

              <router-link
                to="/specialty/prykladna-mekhanika"
                class="slider__btn blue-button"
              >
                <span>{{ $t('more__btn') }}</span>
              </router-link>
            </div>
            <img
              src="/img/slider/slider-4.jpg"
              alt="prykladna-mekhanika"
              class="slider__image"
            />
          </div>

          <div class="slider__item">
            <div class="slider__content">
              <div class="slider__title">
                <h3>122 {{ $t('menu__item3-submenu5') }}</h3>
              </div>
              <div class="slider__about">
                <p>
                  {{ $t('slider__about5') }}
                </p>
              </div>
              <div class="slider__qualification">
                <span>{{ $t('slider__qualification5') }}</span>
              </div>

              <router-link
                to="/specialty/kompyuterni-nauky-ta-informatsiyni-tekhnolohiyi"
                class="slider__btn blue-button"
              >
                <span>{{ $t('more__btn') }}</span>
              </router-link>
            </div>
            <img
              src="/img/slider/slider-5.jpg"
              alt="kompyuterni-nauky-ta-informatsiyni-tekhnolohiyi"
              class="slider__image"
            />
          </div>

          <div class="slider__item">
            <div class="slider__content">
              <div class="slider__title">
                <h3>123 {{ $t('menu__item3-submenu6') }}</h3>
              </div>
              <div class="slider__about">
                <p>
                  {{ $t('slider__about6') }}
                </p>
              </div>
              <div class="slider__qualification">
                <span>{{ $t('slider__qualification6') }}</span>
              </div>

              <router-link
                to="/specialty/kompyuterna-inzheneriya"
                class="slider__btn blue-button"
              >
                <span>{{ $t('more__btn') }}</span>
              </router-link>
            </div>
            <img
              src="/img/slider/slider-6.jpg"
              alt="kompyuterna-inzheneriya"
              class="slider__image"
            />
          </div>

          <div class="slider__item">
            <div class="slider__content">
              <div class="slider__title">
                <h3>051 {{ $t('menu__item3-submenu7') }}</h3>
              </div>
              <div class="slider__about">
                <p>
                  {{ $t('slider__about7') }}
                </p>
              </div>
              <div class="slider__qualification">
                <span>{{ $t('slider__qualification7') }}</span>
              </div>

              <router-link
                to="/specialty/ekonomika"
                class="slider__btn blue-button"
              >
                <span>{{ $t('more__btn') }}</span>
              </router-link>
            </div>
            <img
              src="/img/slider/slider-7.jpg"
              alt="ekonomika"
              class="slider__image"
            />
          </div>
        </agile>
      </div>
    </div>
  </section>
</template>

<i18n>
{
  "ua": {
    "slider__about1": "Готуються для роботи в складальних, механоскладальних та випробувальних цехах, лабораторіях, відділах підприємств, які виготовляють або ремонтують двигуни, а також на підприємствах, що проектують двигуни",
    "slider__qualification1": "Квалiфiкацiя: технік-конструктор",
    "slider__about2": "Готуються для професiйної дiяльностi по участi в розробцi i забезпеченню технологiчних процесiв та оснащенню до них, а також органiзацiї обробки матерiалiв на верстатах та автоматичних лiнiях",
    "slider__qualification2": "Квалiфiкацiя: технік-технолог (механік)",
    "slider__about3": "Готуються для роботи в галузi машинобудування i металургiї та у галузевих науко-дослiдних, проектно-конструкторських установах",
    "slider__qualification3": "Квалiфiкацiя: технік-технолог",
    "slider__about4": "Готуються для роботи в механiчних та механоскладальних цехах, лабораторіях, вiддiлах пiдприємств, якi виготовляють або експлуатують верстати з програмним забезпеченням",
    "slider__qualification4": "Квалiфiкацiя: технік-електромеханік",
    "slider__about5": "Готуються для роботи в рiзних галузях управлiнської, економiчної та технiчної дiяльностi на посадах технiка-програмiста, технiка обчислювального центру, фахiвця в галузях iнформацiйних технологiй",
    "slider__qualification5": "Квалiфiкацiя: технік-програміст",
    "slider__about6": "Готуються для роботи в експлуатацiї, наладки комп'ютерних систем, обслуговування, створення програмного забезпечення, створення користувальних програм та їх провадження",
    "slider__qualification6": "Квалiфiкацiя: технік по комп'ютернiй iнженерiї",
    "slider__about7": "Готуються для планово-економiчної дiяльностi в органiзацiях, пiдприємствах, установах рiзних галузей усiх форм власностi",
    "slider__qualification7": "Квалiфiкацiя: економіст"
  },
  "ru": {
    "slider__about1": "Готовятся для работы в сборочных, механосборочных и испытательных цехах, лабораториях, отделах предприятий, производящих или ремонтируют двигатели, а также на предприятиях, проектируют двигатели",
    "slider__qualification1": "Квалификация: техник-конструктор",
    "slider__about2": "Готовятся для профессиональной деятельности по участию в разработке и обеспечению технологических процессов и оснащению к ним, а также организации обработки материалов на станках и автоматических линиях",
    "slider__qualification2": "Квалификация: техник-технолог (механик)",
    "slider__about3": "Готовятся для работы в области машиностроения и металлургии и в наука-исследовательских, проектно-конструкторских учреждениях",
    "slider__qualification3": "Квалификация: техник-технолог",
    "slider__about4": "Готовятся для работы в механических и механосборочных цехах, лабораториях, отделах предприятий, которые изготавливают или эксплуатируют станки с программным обеспечением",
    "slider__qualification4": "Квалификация: техник-электромеханик",
    "slider__about5": "Готовятся для работы в различных отраслях управленческой, экономической и технической деятельности на должностях техника-программиста, техника вычислительного центра, специалиста в области информационных технологий",
    "slider__qualification5": "Квалификация: техник-программист",
    "slider__about6": "Готовятся для работы в эксплуатации, наладки компьютерных систем, обслуживание, создание программного обеспечения, создание пользовательских программ и их производства",
    "slider__qualification6": "Квалификация: техник по компьютерные инженерии",
    "slider__about7": "Готовятся для планово-экономической деятельности в организациях, предприятиях, учреждениях различных отраслей всех форм собственности",
    "slider__qualification7": "Квалификация: экономист"
    }
}
</i18n>

<script lang="babel">
import { VueAgile } from 'vue-agile';

export default {
  components: {
    agile: VueAgile,
  },
};
</script>

<style lang="scss">
.agile__nav-button {
  display: none;
}

.slider {
  &__slick-slider {
    margin: 10px 15px;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.7);
    cursor: grab;
  }

  &__item {
    display: flex;
    background-color: rgba(25, 99, 211, 0.75);
    height: 100%;
  }

  &__content {
    padding: 15px 15px;
    display: flex;
    flex-direction: column;
    width: 30%;
  }

  &__title {
    text-align: center;
    padding: 10px 10px;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.2;
    background: #fff;
    border: 2px solid #e7ecef;
    border-radius: 2px;
    color: #1c537a;
    text-transform: uppercase;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
  }

  &__about {
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 16px;
    color: #fff;
  }

  &__qualification {
    padding-top: 10px;
    font-size: 18px;
    color: #fff;
    text-align: center;
    margin-top: auto;
  }

  &__btn {
    font-size: 16px;
    align-self: center;
    margin-top: 15px;
    padding: 10px 30px;
    color: #fff;
  }

  &__image {
    width: 70%;
    object-fit: cover;
  }
}

@media (max-width: 957px) {
  .slider__about {
    font-size: 16px;
  }
  .slider__title {
    font-size: 16px;
  }
}

@media (max-width: 866px) {
  .slider__image {
    width: 50%;
  }
  .slider__content {
    width: 50%;
  }
}

@media (max-width: 752px) {
  .slider__about {
    font-size: 14px;
  }
}

@media (max-width: 720px) {
  .slider {
    display: none;
  }
}
</style>
