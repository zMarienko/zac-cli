<template>
  <main class="main">
    <div class="container">
      <section class="error-404">
        <div class="error-404__img" />
        <div class="error-404__inner">
          <h2 class="error-404__title">Помилка 404</h2>
          <h3 class="error-404__subtitle">Сторiнка не найдена</h3>
          <p
            class="error-404__text"
          >Вибачте, але сторінка яку ви шукаєте не існує, або була видалена, або її ім'я змінено, або вона тимчасово недоступна</p>
          <router-link to="/" class="error-404__link">Повернутися на головну</router-link>
        </div>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.error-404 {
  margin-top: 6em;
  &__inner {
    padding: 0px 15px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    font-size: 46px;
    font-weight: 700;
  }

  &__subtitle {
    font-size: 18px;
  }

  &__text {
    padding: 15px 0px;
    text-align: center;
    max-width: 400px;
  }

  &__link {
    color: #16486b;
    border-bottom: 2px dotted #80b1d9;
  }

  &__img {
    position: absolute;
    left: 20%;
    top: 35%;
    width: 180px;
    height: 180px;
    background-image: url("/img/404.png");
    background-size: cover;

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      transform: scale(1.7);
      border-radius: 50%;
      background-color: #f2f5f8;
      z-index: -1;
    }
  }
}
</style>