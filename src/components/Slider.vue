<template>
  <section class="slider">
    <div class="container">
      <div class="slider__slick-slider">
        <div class="slider__item">
          <div class="slider__item-inner">
            <div class="slider__content">
              <div class="slider__title">
                <h3>134 Авіаційна та ракетно-космічна техніка</h3>
              </div>
              <div class="slider__about">
                <p>Готуються для роботи в складальних, механоскладальних та випробувальних цехах, лабораторіях, відділах підприємств, які виготовляють або ремонтують двигуни, а також на підприємствах, що проектують двигуни</p>
              </div>
              <div class="slider__qualification">
                <span>Квалiфiкацiя: технік-конструктор</span>
              </div>
              <button class="slider__btn common-button">
                <a class="slider__btn-link">Детальнiше</a>
              </button>
            </div>
            <img
              src="/img/slider/slider-1.jpg"
              alt="Авіаційна та ракетно-космічна техніка"
              class="slider__image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.slider {
  &__slick-slider {
    margin: 10px 15px;
    cursor: grab;
  }

  &__item {
    &-inner {
      display: flex;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.7);
      background-color: rgba(25, 99, 211, 0.75);
      border-radius: 3px;
      max-height: 380px;
      overflow: hidden;
    }
  }

  &__content {
    padding: 15px 15px;
    display: flex;
    flex-direction: column;
    width: 30%;
  }

  &__title {
    text-align: center;
    margin-bottom: 20px;
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
    font-size: 16px;
    color: #fff;
    flex: 1 1 auto;
  }

  &__qualification {
    margin-top: 10px;
    font-size: 18px;
    color: #fff;
    text-align: center;
  }

  &__btn {
    font-size: 16px;
    align-self: center;
    margin-top: 15px;
    padding: 10px 30px;
    &-link {
      color: #fff;
    }
  }

  &__image {
    width: 70%;
    object-fit: cover;
  }
}
</style>