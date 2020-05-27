<template>
  <section class="steps">
    <div class="container">
      <div class="steps__inner">
        <div class="steps__title common-title">
          <h2>Як поступити до коледжу?</h2>
        </div>
        <div class="steps__menu">
          <button class="steps__button common-title steps__button--active">На бюджет</button>
          <button class="steps__button common-title">На контракт</button>
        </div>
        <div class="steps__box">
          <div class="steps__box-item steps__box-item--blue">
            <img class="steps__box-img" src="/img/steps/step-1.svg" alt="Шаг 1. Подать заявку" />
            <div class="steps__box-text">
              <p>Подайте заявку до вступу.</p>
              <p>Вступ по програмi бюджету здійснюється на підставі свiдотства про здобуття базової середньої освіти</p>
            </div>
          </div>
          <div class="steps__box-item steps__box-item--green">
            <img class="steps__box-img" src="/img/steps/step-2.svg" alt="Шаг 2. Подать документы" />
            <div class="steps__box-text">
              <p>Надайте до приймальної комісії документи про поточний рівень освіти</p>
            </div>
          </div>
          <div class="steps__box-item steps__box-item--purple">
            <img
              class="steps__box-img"
              src="/img/steps/step-3.svg"
              alt="Шаг 3. Здайте вступнi випробування"
            />
            <div class="steps__box-text">
              <p>Здайте внутрішні вступні випробування коледжу</p>
            </div>
          </div>
          <div class="steps__box-item steps__box-item--red">
            <img
              class="steps__box-img"
              src="/img/steps/step-4.svg"
              alt="Шаг 4. Отримайте документи про зарахування"
            />
            <div class="steps__box-text">
              <p>Отримайте документи про зарахування і студентський квиток</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

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
          content: "1";
        }
      }

      &--green {
        background-color: rgba(25, 173, 120, 0.65);
        &:before {
          content: "2";
        }
      }

      &--purple {
        background-color: rgba(121, 19, 235, 0.65);
        &:before {
          content: "3";
        }
      }

      &--red {
        background-color: rgba(247, 60, 79, 0.65);
        &:before {
          content: "4";
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
</style>

