<template>
  <footer class="footer">
    <div class="footer__social">
      <div class="container">
        <div class="footer__social-inner">
          <span class="footer__social-title">{{
            $t('footer__social-title')
          }}</span>
          <a class="footer__social-link" href="https://t.me/zaczp">
            <img
              class="footer__social-telegram"
              src="/img/social-media/telegram.svg"
              alt="social-telegram"
            />
          </a>
          <a
            class="footer__social-link"
            href="https://www.instagram.com/zac.zp/"
          >
            <img
              class="footer__social-instagram"
              src="/img/social-media/instagram.svg"
              alt="social-instagram"
            />
          </a>
          <a class="footer__social-link" href="https://twitter.com/zac_org_ua">
            <img
              class="footer__social-twitter"
              src="/img/social-media/twitter.svg"
              alt="social-twitter"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="footer__content">
      <div class="container">
        <nav class="footer__list">
          <div class="footer__copyright">
            <img
              class="footer__copyright-logo"
              src="/img/mini-logo.png"
              alt="mini-logo"
            />
            <h6 class="footer__copyright">
              © 2020 {{ $t('footer__copyright') }}
            </h6>
          </div>
          <ul class="footer__column">
            <li class="footer__title">{{ $t('footer__item1') }}</li>
            <li class="footer__item">
              <span class="footer__item-span">{{
                $t('footer__item1-span1')
              }}</span>
              <a class="footer__item-link" href="tel:2390428">239-04-28</a>
            </li>
            <li class="footer__item">
              <span class="footer__item-span">{{
                $t('footer__item1-span2')
              }}</span>
              <a class="footer__item-link" href="tel:2390235">239-02-35</a>
            </li>
          </ul>
          <ul class="footer__column">
            <li class="footer__title">{{ $t('footer__item2') }}</li>
            <li class="footer__item">
              <span class="footer__item-span"
                >{{ $t('footer__item2-span1') }} &zwj;</span
              >
              <a class="footer__item-link" href="tel:+380617205526"
                >(061)720-55-26</a
              >
            </li>
            <li class="footer__item">
              <span class="footer__item-span">{{
                $t('footer__item2-span2')
              }}</span>
              <a class="footer__item-link" href="tel:+380612122152"
                >(061)212-21-52</a
              >
            </li>
          </ul>
          <ul class="footer__column">
            <li class="footer__title">{{ $t('footer__item3') }}</li>
            <li class="footer__item">
              <span class="footer__item-span"
                >{{ $t('footer__item3-span1') }} &zwj;</span
              >
              <a class="footer__item-link" href="mailto:zac.office@meta.ua"
                >zac.office@meta.ua</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>

<i18n>
{
  "ua": {
    "footer__social-title": "ЗАК у соціальних мережах:",
    "footer__copyright": "Запорiзький Авiацiйний Коледж iм. О.Г. Iвченка",
    "footer__item1": "Департамент освіти і науки",
    "footer__item1-span1": "Основний:",
    "footer__item1-span2": "Додатковий:",
    "footer__item2": "Телефони для довідок",
    "footer__item2-span1": "Приймальня директора:",
    "footer__item2-span2": "Приймальна комісія:",
    "footer__item3": "Електронні поштові скриньки",
    "footer__item3-span1": "Приймальня директора:"
  },
  "ru": {
    "footer__social-title": "ЗАК в социальных сетях:",
    "footer__copyright": "Запорожский Авиационный Колледж им. О.Г Ивченко",
    "footer__item1": "Департамент образования и науки",
    "footer__item1-span1": "Основной:",
    "footer__item1-span2": "Дополнительный:",
    "footer__item2": "Телефоны для справок",
    "footer__item2-span1": "Приемная директора:",
    "footer__item2-span2": "Приемная комиссия:",
    "footer__item3": "Электронные почтовые ящики",
    "footer__item3-span1": "Приемная директора:"
    }
}
</i18n>

<style lang="scss">
.footer {
  z-index: 0;
  &__social {
    background: #e7ecef;
    color: #464646;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.7);

    &-inner {
      padding: 10px 15px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    &-title {
      padding-right: 10px;
    }

    &-telegram,
    &-twitter {
      height: 28px;
      width: 28px;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25), 3px 4px 4px rgba(0, 0, 0, 0.22);
      border-radius: 20px;
    }

    &-instagram {
      height: 30px;
      width: 30px;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25), 3px 4px 4px rgba(0, 0, 0, 0.22);
      border-radius: 32px;
    }

    &-link + &-link {
      padding-left: 5px;
    }
  }

  &__content {
    background: #cddff1;
  }

  &__copyright {
    text-align: center;
    max-width: 200px;
    font: 12px Arial, sans-serif;
    color: #073252;

    &-logo {
      max-width: 130px;
    }
  }

  &__list {
    display: flex;
    justify-content: space-around;
    padding: 20px 15px;
  }

  &__column {
    padding-top: 20px;
    padding-left: 10px;
  }

  &__title {
    color: #073252;
    padding-bottom: 5px;
  }

  &__item {
    line-height: 1.2;
    font-size: 14px;
    display: flex;
    justify-content: space-between;

    &-link {
      color: #16486b;
      height: 100%;
      white-space: nowrap;
      border-bottom: 2px dotted #80b1d9;
    }

    &-span {
      color: #464646;
    }
  }
}

@media (max-width: 1000px) {
  .footer {
    .footer__column:nth-child(2) {
      display: none;
    }
  }
}

@media (max-width: 866px) {
  .footer__column {
    min-width: 260px;
  }
}

@media (max-width: 796px) {
  .footer__column:nth-child(4) {
    display: none;
  }
  .footer__list {
    padding: 15px 0px;
  }
}

@media (max-width: 530px) {
  .footer__column {
    display: none;
  }
}

@media (max-width: 420px) {
  .footer {
    &__list {
      padding: 10px 0px;
    }

    &__social {
      &-title {
        font-size: 14px;
      }

      &-telegram,
      &-twitter {
        height: 25px;
      }

      &-instagram {
        height: 27px;
      }
    }
  }
}
</style>
