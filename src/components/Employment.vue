<template>
  <section class="employment">
    <div class="container">
      <div class="employment__inner">
        <div class="employment__title main-title">
          {{ $t('employment__title') }}
        </div>
        <router-link
          to="/student/pratsevlashtuvannya"
          class="employment__btn blue-button"
        >
          {{ $t('more__btn') }}
        </router-link>
      </div>
    </div>
  </section>
</template>

<i18n>
{
  "ua": {
    "employment__title": "Працевлаштування студентiв"
  },
  "ru": {
    "employment__title": "Трудоустройство студентов"
    }
}
</i18n>

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
    padding: 13px 50px;
    margin-left: auto;
    margin-right: 30px;
    align-self: center;
    font-size: 24px;
    color: #fff;
  }
}

@media (max-width: 957px) {
  .employment__title {
    font-size: 30px;
  }
}

@media (max-width: 866px) {
  .employment__title {
    font-size: 24px;
  }
  .employment__btn {
    font-size: 18px;
  }
}

@media (max-width: 575px) {
  .employment__link {
    font-size: 16px;
  }
  .employment__btn {
    margin-right: 10px;
    padding: 15px 20px;
  }
}

@media (max-width: 485px) {
  .employment__title {
    font-size: 20px;
  }
  .employment__btn {
    margin-right: 10px;
    padding: 15px 10px;
  }
}

@media (max-width: 420px) {
  .employment__title {
    font-size: 16px;
    padding: 15px 15px;
  }

  .employment__link {
    font-size: 14px;
  }
  .employment__btn {
    padding: 10px 10px;
  }
}
</style>
