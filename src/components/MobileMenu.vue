<template>
  <div class="mobile-menu">
    <nav class="mobile-menu__nav" :class="{ open: btnIsActive }">
      <ul class="mobile-menu__list">
        <router-link class="mobile-menu__link" tag="li" to="/">{{
          $t('menu__item1')
        }}</router-link
        ><router-link class="mobile-menu__link" tag="li" to="/news">{{
          $t('menu__item2')
        }}</router-link
        ><router-link class="mobile-menu__link" tag="li" to="/specialty">{{
          $t('menu__item3')
        }}</router-link
        ><router-link class="mobile-menu__link" tag="li" to="/abituriyent">{{
          $t('menu__item4')
        }}</router-link
        ><router-link class="mobile-menu__link" tag="li" to="/student">{{
          $t('menu__item5')
        }}</router-link
        ><router-link
          class="mobile-menu__link"
          tag="li"
          to="/methodical-cabinet"
          >{{ $t('menu__item6') }}</router-link
        ><router-link
          class="mobile-menu__link"
          tag="li"
          to="/educational-work"
          >{{ $t('menu__item7') }}</router-link
        >
        <router-link class="mobile-menu__link" tag="li" to="/about">{{
          $t('menu__item8')
        }}</router-link>
      </ul>
    </nav>

    <button class="mobile-menu__btn-bg" v-on:click="btnIsActive = !btnIsActive">
      <div class="mobile-menu__btn" v-bind:class="{ active: btnIsActive }">
        <span></span>
      </div>
    </button>
  </div>
</template>

<script lang="babel">
export default {
  data: function() {
    return {
      btnIsActive: false,
    };
  },
  watch: {
    '$route': {
        handler () {
            this.btnIsActive = false;
        }
    },
}

};
</script>

<style lang="scss">
.mobile-menu {
  &__link {
    cursor: pointer;
    color: #1c537a;
    font-size: 1.5em;
    line-height: 4.2em;
    width: 100%;
    display: block;
    border-top: 1px solid #fff;

    &:last-child {
      border-bottom: 1px solid #fff;
    }
  }

  &__nav {
    background-color: rgba(#f1f2ff, 0.9);
    position: absolute;
    top: 95px;
    right: 0;
    bottom: 0;
    z-index: 5;
    height: 0px;
    width: 100%;
    overflow: hidden;
    transition: height 0.2s;

    &.open {
      height: 100vh;
      transition: height 1.25s;
      pointer-events: none;
    }
  }

  &__list {
    text-align: center;
  }
  &__btn-bg {
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: 30px;
    background-color: #fff;
  }

  &__btn {
    position: absolute;
    height: 16px;
    width: 20px;
    cursor: pointer;
    background-color: transparrent;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);

    &.active {
      span {
        opacity: 0;
      }
      &.mobile-menu__btn:before,
      &.mobile-menu__btn:after {
        top: 40%;
      }
      &.mobile-menu__btn:before {
        transform: rotate(45deg);
      }
      &.mobile-menu__btn:after {
        transform: rotate(-45deg);
      }
    }

    span,
    &:before,
    &:after {
      display: block;
      position: absolute;
      height: 3px;
      width: 100%;
      background-color: #1c537a;
      border-radius: 6px;
      opacity: 1;
    }
    &:before,
    &:after {
      content: '';
      transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1),
        transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
    }

    span {
      top: 50%;
      transform: translateY(-50%);
    }
    &:before {
      top: 0;
      z-index: 1;
    }
    &:after {
      top: calc(100% - 3px);
      z-index: 1;
    }
  }
}

@media (max-width: 500px) {
  .mobile-menu__nav {
    top: 85px;
  }
  .mobile-menu__link {
    line-height: 2.9em;
  }
}

@media (max-width: 390px) {
  .mobile-menu__nav {
    top: 80px;
  }
  .mobile-menu__link {
    line-height: 2.4em;
  }
}
</style>
