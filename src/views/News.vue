<template>
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
              <div class="news__img">
                <router-link :to="'/news/' + post.id">
                  <img :src="post.image"
                /></router-link>
              </div>
              <div class="news__content">
                <router-link :to="'/news/' + post.id">
                  <h3 class="news__title main-title">{{ post.title }}</h3>
                </router-link>
                <router-link :to="'/news/' + post.id">
                  <div class="news__description">
                    {{ post.description }}
                  </div>
                </router-link>
                <span class="news__date">{{ post.date }}</span>
              </div>
            </article>
          </div>
          <div v-else class="news__content-inner">
            <div class="news__title main-title">Постов нету</div>
          </div>
        </div>
        <aside class="sidebar">
          <button
            class="sidebar__title main-title"
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
                  Квітень
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
                  Січень
                </button>
              </li>
            </ul>
            <ul class="sidebar__block">
              <li class="sidebar__year">2015</li>
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
                  Вересень
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 5), (year = 2019)"
                >
                  Травень
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 4), (year = 2019)"
                >
                  Квітень
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 3), (year = 2019)"
                >
                  Березень
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 2), (year = 2019)"
                >
                  Лютий
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 1), (year = 2019)"
                >
                  Січень
                </button>
              </li>
            </ul>
            <ul class="sidebar__block">
              <li class="sidebar__year">2018</li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 12), (year = 2018)"
                >
                  Грудень
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 11), (year = 2018)"
                >
                  Листопад
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 10), (year = 2018)"
                >
                  Жовтень
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 9), (year = 2018)"
                >
                  Вересень
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 5), (year = 2018)"
                >
                  Травень
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 4), (year = 2018)"
                >
                  Квітень
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 3), (year = 2018)"
                >
                  Березень
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 2), (year = 2018)"
                >
                  Лютий
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 1), (year = 2018)"
                >
                  Січень
                </button>
              </li>
            </ul>
            <ul class="sidebar__block">
              <li class="sidebar__year">2017</li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 12), (year = 2017)"
                >
                  Грудень
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 11), (year = 2017)"
                >
                  Листопад
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 10), (year = 2017)"
                >
                  Жовтень
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 9), (year = 2017)"
                >
                  Вересень
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 5), (year = 2017)"
                >
                  Травень
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 4), (year = 2017)"
                >
                  Квітень
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 3), (year = 2017)"
                >
                  Березень
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 2), (year = 2017)"
                >
                  Лютий
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 1), (year = 2017)"
                >
                  Січень
                </button>
              </li>
            </ul>
            <ul class="sidebar__block">
              <li class="sidebar__year">2016</li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 12), (year = 2016)"
                >
                  Грудень
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 11), (year = 2016)"
                >
                  Листопад
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 10), (year = 2016)"
                >
                  Жовтень
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 9), (year = 2016)"
                >
                  Вересень
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 5), (year = 2016)"
                >
                  Травень
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 4), (year = 2016)"
                >
                  Квітень
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 3), (year = 2016)"
                >
                  Березень
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 2), (year = 2016)"
                >
                  Лютий
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 1), (year = 2016)"
                >
                  Січень
                </button>
              </li>
            </ul>
            <ul class="sidebar__block">
              <li class="sidebar__year">2015</li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 12), (year = 2015)"
                >
                  Грудень
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 11), (year = 2015)"
                >
                  Листопад
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 10), (year = 2015)"
                >
                  Жовтень
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 9), (year = 2015)"
                >
                  Вересень
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 5), (year = 2015)"
                >
                  Травень
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 4), (year = 2015)"
                >
                  Квітень
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 3), (year = 2015)"
                >
                  Березень
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 2), (year = 2015)"
                >
                  Лютий
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 1), (year = 2015)"
                >
                  Січень
                </button>
              </li>
            </ul>
            <ul class="sidebar__block">
              <li class="sidebar__year">2014</li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 12), (year = 2014)"
                >
                  Грудень
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 11), (year = 2014)"
                >
                  Листопад
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 10), (year = 2014)"
                >
                  Жовтень
                </button>
              </li>
              <li>
                <button
                  class="sidebar__item"
                  v-on:click="(month = 9), (year = 2019)"
                >
                  Вересень
                </button>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  </section>
</template>

<script lang="babel">
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
.news {
  &__inner {
    margin: 10px 15px;
    display: flex;
    justify-content: space-between;
  }

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
    box-shadow: 3px 4px 10px rgba(0, 0, 0, 0.22);
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
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}

.sidebar {
  margin-left: 15px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);
  width: 25%;
  height: 100%;
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
    box-shadow: 3px 4px 10px rgba(0, 0, 0, 0.22);
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

@media (max-width: 770px) {
  .news__inner {
    justify-content: start;
    flex-direction: column;
  }

  .news__content-inner {
    width: 100%;
  }

  .sidebar {
    width: 100%;
    margin: 0px;
  }
}
</style>
