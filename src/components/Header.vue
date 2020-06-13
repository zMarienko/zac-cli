<template>
  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="header__top-inner">
          <router-link to="/">
            <img class="header__logo" src="/img/ukraine.svg" alt="zac.zp.ua" />
          </router-link>
          <div class="header__name">
            <router-link to="/">
              <h1 v-html="$t('header__title')" class="header__title"></h1>
            </router-link>
            <h2 class="header__subtitle">
              {{ $t('header__subtitle') }}
            </h2>
            <div class="header__land land">
              <span v-if="isLoggedIn"
                ><a class="header__logout" @click="logout">
                  Вийти
                </a></span
              >
              <button
                v-bind:class="{ land__selected: localeUA }"
                class="land__ua"
                v-on:click="($root.$i18n.locale = 'ua'), (localeUA = true)"
              >
                Укр.
              </button>
              <button
                v-bind:class="{ land__selected: !localeUA }"
                class="land__ru"
                v-on:click="($root.$i18n.locale = 'ru'), (localeUA = false)"
              >
                Рус.
              </button>
            </div>
          </div>
          <div class="header__btn">
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
    <div class="header__menu">
      <div class="container">
        <Menu />
      </div>
    </div>
  </header>
</template>

<i18n>
{
  "ua": {
    "header__title": "Запорiзький авiацiйний <br> коледж iм. О.Г. Iвченка",
    "header__subtitle": " Мiнiстерство освіти i науки України"
  },
  "ru": {
    "header__title": "Запорожский авиационный <br> колледж им. О.Г. Ивченко",
    "header__subtitle": "Министерство образования и науки Украины"
  }
}
</i18n>

<script lang="babel">
import Menu from '@/components/Menu';
import MobileMenu from '@/components/MobileMenu';

export default {
  components: { Menu, MobileMenu },

  data: function() {
    return {
      localeUA: true,
    };
  },
  computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
  methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      }
    },
  created: function () {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch("logout")
        }
        throw err;
      });
    });
  }
};
</script>

<style lang="scss">
.header {
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);

  &__logout {
    cursor: pointer;
    font-size: 12px;
    border: 1px solid #e7ecef;
    padding: 1px 10px;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    color: #fff;
    margin-right: 10px;
    background-image: linear-gradient(
      to right,
      #336ec7 0%,
      #ffffff 70%,
      #336ec7 100%
    );
    transition: 0.7s;
    background-size: 500% auto;

    &:hover {
      border: 1px solid #fff;
      background-position: right center;
    }
  }

  &__top {
    background-color: #f1f2ff;
    &-inner {
      display: flex;
    }
  }

  &__logo {
    max-height: 100px;
    margin: 10px 15px;
    z-index: 3;
  }

  &__name {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-top: 20px;
    width: 100%;
  }

  &__title {
    font-weight: 700;
    color: #1c537a;
    font-size: 34px;
    width: 420px;
    line-height: 1;
    white-space: nowrap;
  }

  &__subtitle {
    text-align: center;
    color: #1c537a;
    font-size: 22px;
    padding: 0px 15px 0px 30px;
    transform: translateY(-30px);
    text-transform: uppercase;
    align-self: flex-end;
  }

  &__land {
    position: absolute;
    top: 25px;
    right: 15px;
  }

  &__btn {
    display: none;
  }

  &__menu {
    background: #e7ecef;
    box-shadow: 0 0px 5px rgba(0, 0, 0, 0.2);
  }
}

@media (max-width: 1075px) {
  .header__land {
    top: auto;
    right: auto;
    left: 0px;
    bottom: 10px;
  }
}

@media (max-width: 770px) {
  .header {
    position: fixed;
    z-index: 2;
    width: 100%;
  }

  .header__subtitle {
    display: none;
  }

  .header__btn {
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 15px;
  }

  .header__top-inner {
    justify-content: center;
  }

  .header__title {
    font-size: 26px;
    width: 200px;
  }

  .header__land {
    bottom: 5px;
  }

  .header__logo {
    max-height: 80px;
  }
}

@media (max-width: 500px) {
  .header__title {
    font-size: 22px;
    transform: translateY(-5px);
  }
  .header__logo {
    max-height: 70px;
  }
  .header__land {
    bottom: 8px;
  }
}

@media (max-width: 420px) {
  .header__title {
    font-size: 18px;
  }

  .header__land {
    bottom: 9px;
  }

  .header__logo {
    max-height: 65px;
  }
}

@media (max-width: 390px) {
  .header__title {
    font-size: 16px;
    width: 160px;
  }

  .header__land {
    bottom: 8px;
  }
  .header__logo {
    max-height: 60px;
  }
}

@media (max-width: 350px) {
  .header__title {
    font-size: 16px;
    width: 160px;
    transform: translateY(-5px);
  }

  .header__land {
    bottom: 10px;
  }
  .header__logo {
    max-height: 60px;
    margin-right: 5px;
  }
}
</style>
