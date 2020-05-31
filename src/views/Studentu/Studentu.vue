<template>
  <section class="default">
    <div class="container">
      <div class="default__inner">
        <div class="default__inner default__inner--row">
          <div class="default__title default__title--row main-title">
            Розклад навчальних занять
          </div>
          <a
            href="http://zac.org.ua/uploads/2019-2020 2.XLS"
            class="default__btn blue-button"
          >
            Детальнiше
          </a>
        </div>
        <div class="default__inner default__inner--row">
          <div class="default__title default__title--row main-title">
            Змiни в розкладi
          </div>
          <a
            target="_blank"
            href="https://docs.google.com/document/d/15sTjEGGQPuYWYlCcPlbZNSkSwoC1Aubdu5dAVtF1hzs/edit"
            class="default__btn blue-button"
          >
            Детальнiше
          </a>
        </div>
        <div class="default__inner default__inner--row">
          <div class="default__title default__title--row main-title">
            Графiк консультацiй викладачiв
          </div>
          <a
            target="_blank"
            href="http://zac.org.ua/uploads/grafic%20cons%20dist.pdf"
            class="default__btn blue-button"
          >
            Детальнiше
          </a>
        </div>
        <div class="default__inner default__inner--row">
          <div class="default__title default__title--row main-title">
            Зразок штампу А4
          </div>
          <a
            href="http://zac.org.ua/uploads/stamp.rar"
            class="default__btn blue-button"
          >
            Детальнiше
          </a>
        </div>
        <div class="default__inner default__inner--row">
          <div class="default__title default__title--row main-title">
            Працевлаштування
          </div>
          <router-link
            to="/student/pratsevlashtuvannya"
            class="default__btn blue-button"
          >
            Детальнiше
          </router-link>
        </div>
        <div class="default__inner default__inner--row">
          <div class="default__title default__title--row main-title">
            Електронні пiдручники
          </div>
          <router-link
            to="/student/elektronni-pidruchnyky"
            class="default__btn blue-button"
          >
            Детальнiше
          </router-link>
        </div>
        <div class="default__inner default__inner--row">
          <div class="default__title default__title--row main-title">
            Гуртки
          </div>
          <router-link to="/student/hurtky" class="default__btn blue-button">
            Детальнiше
          </router-link>
        </div>
        <div class="default__inner default__inner--row">
          <div class="default__title default__title--row main-title">
            Реквiзити оплаты
          </div>
          <router-link
            to="/student/rekvizyty-oplaty"
            class="default__btn blue-button"
          >
            Детальнiше
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
