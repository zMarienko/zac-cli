<template>
  <section class="employment">
    <div class="container">
      <div class="employment__inner main-title">
        <div class="employment__title">Працевлаштування студентiв</div>
        <router-link
          tag="button"
          to="/studentu/pratsevlashtuvannya"
          class="employment__btn common-button"
        >
          <span class="employment__link">Детальнiше</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.employment {
  &__inner {
    margin: 10px 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
    display: flex;
  }

  &__title {
    padding: 30px 15px 30px 25px;
    font-size: 34px;
  }

  &__btn {
    padding: 10px 50px;
    margin-left: auto;
    margin-right: 30px;
    align-self: center;
    font-size: 24px;
  }

  &__link {
    color: #fff;
  }
}

.common-button {
  border-radius: 3px;
  border: 1px solid darken(#fff, 20%);
  background-image: linear-gradient(
    to right,
    #336ec7 0%,
    #ffffff 70%,
    #336ec7 100%
  );
  transition: 0.7s;
  background-size: 500% auto;
  &:hover {
    background-position: right center;
  }
}
</style>
