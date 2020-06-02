<template>
  <section class="steps">
    <div class="container">
      <div class="steps__inner">
        <div class="steps__title main-title">
          <h2>{{ $t('steps__title') }}</h2>
        </div>
        <div class="steps__menu">
          <button class="steps__button main-title steps__button--active">
            {{ $t('steps__button1') }}
          </button>
          <button class="steps__button main-title">
            {{ $t('steps__button2') }}
          </button>
        </div>
        <div class="steps__box">
          <div class="steps__box-item steps__box-item--blue">
            <img
              class="steps__box-img"
              src="/img/steps/step-1.svg"
              alt="Шаг 1. Подать заявку"
            />
            <div class="steps__box-text">
              <p>{{ $t('steps__box-text1.1') }}</p>
              <p>
                {{ $t('steps__box-text1.2') }}
              </p>
            </div>
          </div>
          <div class="steps__box-item steps__box-item--green">
            <img
              class="steps__box-img"
              src="/img/steps/step-2.svg"
              alt="Шаг 2. Подать документы"
            />
            <div class="steps__box-text">
              <p>
                {{ $t('steps__box-text2') }}
              </p>
            </div>
          </div>
          <div class="steps__box-item steps__box-item--purple">
            <img
              class="steps__box-img"
              src="/img/steps/step-3.svg"
              alt="Шаг 3. Здайте вступнi випробування"
            />
            <div class="steps__box-text">
              <p>{{ $t('steps__box-text3') }}</p>
            </div>
          </div>
          <div class="steps__box-item steps__box-item--red">
            <img
              class="steps__box-img"
              src="/img/steps/step-4.svg"
              alt="Шаг 4. Отримайте документи про зарахування"
            />
            <div class="steps__box-text">
              <p>{{ $t('steps__box-text4') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n>
{
  "ua": {
    "steps__title": "Як поступити до коледжу?",
    "steps__button1": "На бюджет",
    "steps__button2": "На контракт",
    "steps__box-text1.1": "Подайте заявку до вступу.",
    "steps__box-text1.2": "Вступ по програмi бюджету здійснюється на підставі свiдотства про здобуття базової середньої освіти",
    "steps__box-text2": "Надайте до приймальної комісії документи про поточний рівень освіти",
    "steps__box-text3": "Здайте внутрішні вступні випробування коледжу",
    "steps__box-text4": "Отримайте документи про зарахування і студентський квиток"
  },
  "ru": {
    "steps__title": "Как поступить в колледж?",
    "steps__button1": "На бюджет",
    "steps__button2": "На контракт",
    "steps__box-text1.1": "Подайте заявку для поступления.",
    "steps__box-text1.2": "Вступление по программе бюджета осуществляется на основании свидетельства о получении базового среднего образования",
    "steps__box-text2": "Предоставьте в приемную комиссию документы о текущем уровне образования",
    "steps__box-text3": "Сдайте внутренние вступительные испытания колледжа",
    "steps__box-text4": "Получите документы о зачислении и студенческий билет"
    }
}
</i18n>

<style lang="scss">
.steps {
  &__inner {
    margin: 0px 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  }

  &__title {
    font-size: 34px;
    padding: 30px 15px 20px 25px;
  }

  &__menu {
    padding-left: 20px;
    margin-bottom: 15px;
    display: flex;
  }

  &__button {
    background-color: transparent;
    transition: all 0.2s ease-in-out;
    padding-bottom: 5px;
    border-bottom: 2px solid transparent;
    font-size: 24px;

    &:hover:not(.steps__button--active) {
      border-color: #579ce0;
    }
  }

  &__button--active {
    border-color: #1c537a;
  }

  &__button + &__button {
    margin-left: 20px;
  }

  &__box {
    display: flex;

    &-text {
      border-top: 2px solid #fff;
    }

    &-text p {
      padding-top: 10px;
      line-height: 1.2;
      font-size: 18px;
      color: #fff;
    }

    &-img {
      width: 150px;
      align-self: center;
      margin: 20px;
    }

    &-item {
      padding: 10px;
      display: flex;
      flex-direction: column;
      margin: 10px;
      position: relative;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.7);

      &--blue {
        background-color: rgba(27, 109, 233, 0.65);
        &:before {
          content: '1';
        }
      }

      &--green {
        background-color: rgba(25, 173, 120, 0.65);
        &:before {
          content: '2';
        }
      }

      &--purple {
        background-color: rgba(121, 19, 235, 0.65);
        &:before {
          content: '3';
        }
      }

      &--red {
        background-color: rgba(247, 60, 79, 0.65);
        &:before {
          content: '4';
        }
      }

      &:before {
        color: #fff;
        border: 2px solid #fff;
        width: 44px;
        height: 44px;
        top: 10px;
        right: 10px;
        border-radius: 100%;
        text-align: center;
        font-size: 28px;
        line-height: 1.4;
        position: absolute;
      }
    }
  }
}

@media (max-width: 957px) {
  .steps__box-text p {
    font-size: 16px;
  }
  .steps__box-img {
    width: 120px;
  }
}

@media (max-width: 866px) {
  .steps__title {
    font-size: 28px;
  }
  .steps__box-img {
    width: 90px;
  }
}

@media (max-width: 796px) {
  .steps__button {
    font-size: 18px;
  }
}

@media (max-width: 720px) {
  .steps {
    &__box {
      flex-direction: column;
    }
  }
}

@media (max-width: 485px) {
  .steps__title {
    font-size: 22px;
  }
}

@media (max-width: 360px) {
  .steps__title {
    font-size: 20px;
  }
  .steps__button {
    font-size: 16px;
  }
}
</style>
