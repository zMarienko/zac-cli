<template>
  <main class="main" style="background-image: url(/img/study.png);">
    <section class="tsyklovi-komisiyi">
      <div class="container">
        <div class="tsyklovi-komisiyi__inner">
          <div class="tsyklovi-komisiyi__title common-title">
            Циклові комісії
          </div>
          <div class="tsyklovi-komisiyi__images">
            <img src="/img/tsyklovi-komisiyi/1.jpg" />
            <img src="/img/tsyklovi-komisiyi/2.jpg" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'tsyklovi-komisiyi',
};
</script>

<style lang="scss" scoped>
.tsyklovi-komisiyi {
  &__inner {
    margin: 10px 15px;
    padding-bottom: 10px;
  }
  &__title {
    text-align: center;
    line-height: 1.2;
    padding: 15px 15px;
    font-size: 34px;
  }
  &__images {
    display: flex;
    justify-content: space-around;

    img {
      width: 40%;
      box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.5);
      margin: 15px;
    }
  }
}
</style>
