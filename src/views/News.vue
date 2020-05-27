<template>
  <main class="main" style="background-image: url(/img/study.png);">
    <section class="news">
      <div class="container">
        <div class="news__inner">
          <div class="news__content-inner">
            <div v-if="posts.length" class="news__list">
              <article
                v-for="post of displayPosts2"
                :key="post.id"
                class="news__article"
              >
                <img :src="post.image" class="news__img" />
                <div class="news__content">
                  <router-link :to="'/news/' + post.id">
                    <h3 class="news__title common-title">{{ post.title }}</h3>
                  </router-link>
                  <div class="news__description">
                    {{ post.description }}
                  </div>
                  <span class="news__date">{{ post.date }}</span>
                </div>
              </article>
            </div>
            <div v-else class="news__content-inner">
              <div class="news__title common-title">Постов нету</div>
            </div>
          </div>
          <aside class="sidebar">
            <button
              class="sidebar__title common-title"
              v-on:click="(month = null), (year = null)"
            >
              Архiв
            </button>
            <nav class="sidebar__archive">
              <ul class="sidebar__block">
                <li class="sidebar__year">2020</li>
                <li>
                  <button
                    class="sidebar__item"
                    v-on:click="(month = 5), (year = 2020)"
                  >
                    Травень
                  </button>
                </li>
                <li>
                  <button
                    class="sidebar__item"
                    v-on:click="(month = 4), (year = 2020)"
                  >
                    Квiтень
                  </button>
                </li>
                <li>
                  <button
                    class="sidebar__item"
                    v-on:click="(month = 3), (year = 2020)"
                  >
                    Березень
                  </button>
                </li>
                <li>
                  <button
                    class="sidebar__item"
                    v-on:click="(month = 2), (year = 2020)"
                  >
                    Лютий
                  </button>
                </li>
                <li>
                  <button
                    class="sidebar__item"
                    v-on:click="(month = 1), (year = 2020)"
                  >
                    Сiчень
                  </button>
                </li>
              </ul>
              <ul class="sidebar__block">
                <li class="sidebar__year">2019</li>
                <li>
                  <button
                    class="sidebar__item"
                    v-on:click="(month = 12), (year = 2019)"
                  >
                    Грудень
                  </button>
                </li>
                <li>
                  <button
                    class="sidebar__item"
                    v-on:click="(month = 11), (year = 2019)"
                  >
                    Листопад
                  </button>
                </li>
                <li>
                  <button
                    class="sidebar__item"
                    v-on:click="(month = 10), (year = 2019)"
                  >
                    Жовтень
                  </button>
                </li>
                <li>
                  <button
                    class="sidebar__item"
                    v-on:click="(month = 9), (year = 2019)"
                  >
                    Листопад
                  </button>
                </li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'news',
  data: () => ({
    month: null,
    year: null,
  }),
  computed: {
    posts() {
      return this.$store.getters.posts;
    },
    displayPosts2() {
      return this.posts.filter((t) => {
        if (!this.month && !this.year) {
          return true;
        }
        return t.month === this.month && t.year === this.year;
      });
    },
  },
};
</script>

<style lang="scss">
.news__inner {
  margin: 10px 15px;
  display: flex;
  justify-content: space-between;
}

.news {
  &__content-inner {
    width: 75%;
  }

  &__article {
    padding: 10px 15px;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);
    display: flex;
    height: 200px;
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__title {
    padding: 5px 90px 10px 15px;
    font-size: 24px;
  }

  &__date {
    position: absolute;
    top: 0;
    right: 0;
    padding: 2px 5px 4px;
    color: #fff;
    text-shadow: none;
    box-shadow: inset 0 0px 15px rgba(0, 0, 0, 0.4),
      3px 4px 10px rgba(0, 0, 0, 0.22);
    background-color: rgba(25, 99, 211, 0.75);
    font-size: 16px;
  }

  &__description {
    color: #464646;
    padding-left: 10px;
    padding-top: 10px;
    line-height: 1.2;
    font-size: 16px;
  }

  &__content {
    position: relative;
    width: 60%;
  }

  &__img {
    width: 40%;
    object-fit: cover;
  }
}

.sidebar {
  margin-left: 15px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);
  width: 25%;
  height: 100%;
  margin-bottom: 10px;
  padding-bottom: 10px;

  &__title {
    font-size: 34px;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    background-color: transparent;
  }

  &__block {
    padding: 0px 10px;
  }

  &__year {
    padding: 5px 0px;
    text-align: center;
    color: #464646;
    overflow: hidden;

    &:before,
    &:after {
      content: '';
      display: inline-block;
      vertical-align: middle;
      width: 100%;
      height: 3px;
      background: #cddff1;
      border: solid #fff;
      border-width: 0 10px;
    }

    &:before {
      margin-left: -100%;
    }

    &:after {
      margin-right: -100%;
    }
  }

  &__item {
    cursor: pointer;
    font-size: 20px;
    box-shadow: inset 0 0px 15px rgba(0, 0, 0, 0.4),
      3px 4px 10px rgba(0, 0, 0, 0.22);
    background-color: rgba(25, 99, 211, 0.75);
    text-align: center;
    color: #fff;
    padding: 0.5% 10px;
    margin: 0.5% 0px;
    width: 100%;

    &:hover {
      background-color: rgba(59, 132, 241, 0.75);
    }
  }
}
</style>
