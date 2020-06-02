<template>
  <main class="main">
    <div class="container">
      <section class="post">
        <div class="post__inner">
          <div class="post__content">
            <div class="post__title main-title">
              {{ post.title }}
            </div>
            <div class="post__text">
              {{ post.text }}
            </div>
          </div>

          <img class="post__img" :src="post.image" />
        </div>
      </section>
    </div>
  </main>
</template>

<script lang="babel">
export default {
  name: 'post',
  computed: {
    post() {
      return this.$store.getters.postsById(+this.$route.params.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  &__inner {
    display: flex;
    justify-content: space-between;
    margin: 10px 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  }
  &__title {
    font-size: 34px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
  }

  &__text {
    font-size: 18px;
    padding: 0px 25px;
    text-align: justify;
  }
  &__img {
    width: 40%;
    object-fit: cover;
    height: 400px;
  }
}
</style>
