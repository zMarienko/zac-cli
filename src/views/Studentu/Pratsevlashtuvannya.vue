<template>
  <main class="main" style="background-image: url(/img/study.png);">
    <section class="pratsevlashtuvannya">
      <div class="container">
        <div class="pratsevlashtuvannya__inner">
          <div class="pratsevlashtuvannya__title common-title">
            Працевлаштування студентiв
          </div>
          <div class="pratsevlashtuvannya__images">
            <img src="/img/pratsevlashtuvannya/1.jpg" />
            <img src="/img/pratsevlashtuvannya/2.jpg" />
            <img src="/img/pratsevlashtuvannya/3.jpg" />
            <img src="/img/pratsevlashtuvannya/4.jpg" />
            <img src="/img/pratsevlashtuvannya/5.jpg" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'pratsevlashtuvannya',
};
</script>

<style lang="scss" scoped>
.pratsevlashtuvannya {
  &__inner {
    margin: 10px 15px;
    padding-bottom: 10px;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);
  }
  &__title {
    text-align: center;
    line-height: 1.2;
    padding: 25px 15px;
    font-size: 34px;
  }
  &__images {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 80%;
    }
  }
}
</style>
