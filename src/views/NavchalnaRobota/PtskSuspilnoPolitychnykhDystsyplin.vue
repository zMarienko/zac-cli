<template>
  <section class="default">
    <div class="container">
      <div class="default__inner">
        <div class="default__title main-title">
          {{ $t('title') }}
        </div>

        <div class="default__item default__item--large">
          <img
            src="/img/nopicture.jpg"
            class="default__item-img default__item-img--large"
          />
          <div class="default__item-name">
            <div
              v-html="$t('item1.1')"
              class="default__item-title main-title"
            ></div>
            <div v-html="$t('item1.2')" class="default__item-subtitle"></div>
            <a
              target="_blank"
              class="default__item-link"
              href="https://drive.google.com/drive/folders/1BS-33NzdOpEMB-_LmPzGqqwytFQDtitv"
            >
              {{ $t('archive') }}
            </a>
            <div v-html="$t('item1.3')" class="default__item-text"></div>
            <div v-html="$t('item1.4')" class="default__item-teaches"></div>
          </div>
        </div>

        <div class="default__item default__item--large">
          <img
            src="/img/history.jpg"
            class="default__item-img default__item-img--large"
          />
          <div class="default__item-name">
            <div
              v-html="$t('item2.1')"
              class="default__item-title main-title"
            ></div>
            <div v-html="$t('item2.2')" class="default__item-subtitle"></div>
            <a
              target="_blank"
              class="default__item-link"
              href="https://drive.google.com/drive/folders/11FdQuQvg1X9qH3U9Wv3PK8fbxl-4G2KF"
            >
              {{ $t('archive') }} {{ $t('archive2.1') }}
            </a>
            <a
              target="_blank"
              class="default__item-link"
              href="https://drive.google.com/drive/folders/1g5GbAx_rb7vEF5BbXZaJ_zkMGJEVfK8A"
            >
              {{ $t('archive') }} {{ $t('archive2.2') }}
            </a>
            <div v-html="$t('item2.3')" class="default__item-text"></div>
            <div v-html="$t('item2.4')" class="default__item-teaches"></div>
          </div>
        </div>

        <div class="default__item default__item--large">
          <img
            src="/img/pavlova.jpg"
            class="default__item-img default__item-img--large"
          />
          <div class="default__item-name">
            <div
              v-html="$t('item3.1')"
              class="default__item-title main-title"
            ></div>
            <div v-html="$t('item3.2')" class="default__item-subtitle"></div>
            <a
              target="_blank"
              class="default__item-link"
              href="https://drive.google.com/drive/folders/1kMf4zlz-kiitAXxRhyLDvTPHLZE869xS"
            >
              {{ $t('archive') }}
            </a>
            <div v-html="$t('item3.3')" class="default__item-text"></div>
            <div v-html="$t('item3.4')" class="default__item-teaches"></div>
          </div>
        </div>
        <div class="default__item default__item--large">
          <img
            src="/img/nopicture.jpg"
            class="default__item-img default__item-img--large"
          />
          <div class="default__item-name">
            <div
              v-html="$t('item4.1')"
              class="default__item-title main-title"
            ></div>
            <div v-html="$t('item4.2')" class="default__item-subtitle"></div>
            <a
              target="_blank"
              class="default__item-link"
              href="https://drive.google.com/drive/folders/1knGcmurQMVlEQ4TkKUa83wTH1LWqeH11"
            >
              {{ $t('archive') }}
            </a>
            <div v-html="$t('item4.3')" class="default__item-text"></div>
            <div v-html="$t('item4.4')" class="default__item-teaches"></div>
          </div>
        </div>

        <div class="default__item default__item--large">
          <img
            src="/img/nopicture.jpg"
            class="default__item-img default__item-img--large"
          />
          <div class="default__item-name">
            <div
              v-html="$t('item5.1')"
              class="default__item-title main-title"
            ></div>
            <div v-html="$t('item5.2')" class="default__item-subtitle"></div>
            <a
              target="_blank"
              class="default__item-link"
              href="https://drive.google.com/drive/folders/16Js2PtWN6cpWSJfE-5bj0p7bBjWAC3Jl"
            >
              {{ $t('archive') }} {{ $t('archive5.1') }}
            </a>
            <a
              target="_blank"
              class="default__item-link"
              href="https://drive.google.com/drive/folders/1u9TT0XqZFCig4YDbbZhmcOz4Iv1tpRjH"
            >
              {{ $t('archive') }} {{ $t('archive5.2') }}
            </a>
            <div v-html="$t('item5.3')" class="default__item-text"></div>
            <div v-html="$t('item5.4')" class="default__item-teaches"></div>
          </div>
        </div>
        <div class="default__item default__item--large">
          <img
            src="/img/nopicture.jpg"
            class="default__item-img default__item-img--large"
          />
          <div class="default__item-name">
            <div
              v-html="$t('item6.1')"
              class="default__item-title main-title"
            ></div>
            <div v-html="$t('item6.2')" class="default__item-subtitle"></div>
            <a
              target="_blank"
              class="default__item-link"
              href="https://drive.google.com/drive/folders/1qIl5GFN56IoFEuMzXmNY8g5aEBagRAqh"
            >
              {{ $t('archive') }}
            </a>
            <div v-html="$t('item6.3')" class="default__item-text"></div>
            <div v-html="$t('item6.4')" class="default__item-teaches"></div>
          </div>
        </div>
        <div class="default__item default__item--large">
          <img
            src="/img/nopicture.jpg"
            class="default__item-img default__item-img--large"
          />
          <div class="default__item-name">
            <div
              v-html="$t('item7.1')"
              class="default__item-title main-title"
            ></div>
            <div v-html="$t('item7.2')" class="default__item-subtitle"></div>
            <a
              target="_blank"
              class="default__item-link"
              href="https://drive.google.com/drive/folders/1ad-CPcPLUHgNdjwBh8bT2BxTqDGNP9rP"
            >
              {{ $t('archive') }}
            </a>

            <div v-html="$t('item7.3')" class="default__item-text"></div>
            <div v-html="$t('item7.4')" class="default__item-teaches"></div>
          </div>
        </div>
        <div class="default__item default__item--large">
          <img
            src="/img/nopicture.jpg"
            class="default__item-img default__item-img--large"
          />
          <div class="default__item-name">
            <div
              v-html="$t('item8.1')"
              class="default__item-title main-title"
            ></div>
            <div v-html="$t('item8.2')" class="default__item-subtitle"></div>
            <a
              target="_blank"
              class="default__item-link"
              href="https://drive.google.com/drive/folders/1typPnTX4qUp6XNBFuhH_K8FQYKO-deNl"
            >
              {{ $t('archive') }}
            </a>
            <div v-html="$t('item8.3')" class="default__item-text"></div>
            <div v-html="$t('item8.4')" class="default__item-teaches"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n>
{
  "ua": {
    "title": "ПЦК суспільно-політичних дисциплін",
    "archive": "Архiв викладача",

    "item1.1": "Кучерков Ігор Вікторович",
    "item1.2": "Голова ПЦК, викладач вищої категорії.",
    "item1.3": "У 2000 році закінчив Запорізький Державний Університет за спеціальністю «Історія та суспільствознавство» і здобув кваліфікацію історика. З 2006 року працює у Запорізькому авіаційному коледжі ім.О.Г. Івченка. <br /> Педагогічний стаж – 19 років.",
    "item1.4": "<b> Викладає:</b> Політологія, Соціологія.",

    "item2.1": "Завгородня Тетяна Володимирівна",
    "item2.2": "Викладач першої категорії.",
    "item2.3": "Закінчила Криворізький державний педагогічний університет, 2002р. Вчитель історії та географії. <br />Педагогічний стаж – 14 років.",
    "item2.4": "<b> Викладає:</b> Історія України, Географія, Екологія.",
    "archive2.1": "(Історія України 1 курс)",
    "archive2.2": "(Всесвітня історія)",

    "item3.1": "Павлова Кристина Василівна",
    "item3.2": "Заступник директора з НР, спеціаліст вищої категорії, старший викладач.",
    "item3.3": "Закінчила Запорізький національний університет, історичний факультет у 2000р. Класичний приватний університет, факультет післядипломної освти - педагогіка вищої школи у 2008р.<br /> Педагогічний стаж – 18 років.",
    "item3.4": "<b> Викладає:</b> Основи правознавства, Правове регулювання діяльності підприємств, Культурологія.",

    "item4.1": "Савченко Ірина",
    "item4.2": "Голова ПЦК, викладач вищої категорії.",
    "item4.3": " ",
    "item4.4": "<b> Викладає:</b> Філософія.",

    "item5.1": "Степанова Вікторія Вікторівна",
    "item5.2": "Викладач першої категорії.",
    "item5.3": "Запорізький державний університет, 2000 р. спеціальність «Історія», кваліфікація «історик, викладач історії та суспільствознавства, Гуманітарний університет «ЗІДМУ» 2006 р. спеціальність «Педагогіка вищої школи», кваліфікація «магістр з педагогіки вищої школи». <br /> Педагогічний стаж – 11 років.",
    "item5.4": "<b> Викладає:</b> Всесвітня історія, Громадянська освіта (Людина і світ), Культурологія.",
    "archive5.1": "(Всесвітня історія)",
    "archive5.2": "(Громадянська освіта / Людина і світ)",

    "item6.1": "Загродська Ірина Володимирівна",
    "item6.2": "Заступник директора з ВР, Викладач вищої категорії.",
    "item6.3": "Запорізький державний університет, 2001р. Вчитель історії.<br /> Педагогічний стаж – 19 років.",
    "item6.4": "<b> Викладає:</b> Історія України, Всесвітня історія.",

    "item7.1": "Пономарьова Лариса Валеріївна",
    "item7.2": "Викладач вищої категорії, звання «старший викладач».",
    "item7.3": "У 2003 році закінчила Запорізький Державний Університет за спеціальністю «Історія» і здобула кваліфікацію історика. З 2003 року працює у Запорізькому авіаційному коледжі ім. О.Г.Івченка <br /> Педагогічний стаж – 16 років.",
    "item7.4": "<b> Викладає:</b> Всесвітня історія, Історія України.",

    "item8.1": "Новік Галина Миколаївна",
    "item8.2": "Викладач першої категорії, психолог першої категорії.",
    "item8.3": "У 1991 році закінчила Мелітопольський педагогічний інститут за спеціальністю «вчитель географії та біології». У 1995 році закінчила Запорізький національний університет за спеціальністю «Дитячий практичний психолог в системі освіти». <br /> Педагогічний стаж – 24 роки.",
    "item8.4": "<b> Викладає:</b> Психологія, Географія."
  },
  "ru": {
    "title": "ПЦК общественно-политических дисциплин",
    "archive": "Архив преподавателя",

    "item1.1": "Кучерков Игорь Викторович",
    "item1.2": "Председатель ПЦК, преподаватель высшей категории.",
    "item1.3": "В 2000 году окончил Запорожский государственный университет по специальности« История и обществоведение »и получил квалификацию историка. С 2006 года работает в Запорожском авиационном колледже им. О.Г. Ивченко. <br /> Педагогический стаж - 19 лет.",
    "item1.4": "<b> Преподает: </b> Политология, Социология.",

    "item2.1": "Завгородняя Татьяна Владимировна",
    "item2.2": "Преподаватель первой категории.",
    "item2.3": "Закончил Криворожский государственный педагогический университет, 2002г. Учитель истории и географии. <br /> Педагогический стаж - 14 лет.",
    "item2.4": "<b> Преподает: </b> История Украины, География, Экология.",
    "archive2.1": "(История Украины 1 курс)",
    "archive2.2": "(Всемирная история)",

    "item3.1": "Павлова Кристина Васильевна",
    "item3.2": "Заместитель директора по НР, специалист высшей категории, старший преподаватель.",
    "item3.3": "Окончила Запорожский национальный университет, исторический факультет в 2000г. Классический приватный университет, факультет последипломного образования - педагогика высшей школы в 2008г. <br /> Педагогический стаж - 18 лет.",
    "item3.4": "<b> Преподает: </b> Основы правоведения, Правовое регулирование деятельности предприятий, Культурология.",

    "item4.1": "Савченко Ирина",
    "item4.2": "Председатель ПЦК, преподаватель высшей категории.",
    "item4.3": " ",
    "item4.4": "<b> Преподает:</b> Философия.",

    "item5.1": "Степанова Виктория Викторовна",
    "item5.2": "Преподаватель первой категории.",
    "item5.3": "Запорожский государственный университет, 2000 г. Специальность «История», квалификация« историк, преподаватель истории и обществоведения, Гуманитарный университет «ЗИГМУ» 2006 специальность «Педагогика высшей школы», квалификация «магистр педагогики высшей школы ». <br /> Педагогический стаж - 11 лет.",
    "item5.4": "<b> Преподает: </b> Всемирная история, Гражданское образование (Человек и мир), Культурология.",
    "archive5.1": "(Всемирная история)",
    "archive5.2": "(Гражданское образование / Человек и мир)",

    "item6.1": "Загродская Ирина Владимировна",
    "item6.2": "Заместитель директора по ВР Преподаватель высшей категории.",
    "item6.3": "Запорожский государственный университет, 2001г. Учитель истории. <br /> Педагогический стаж - 19 лет.",
    "item6.4": "<b> Преподает: </b> История Украины, Всемирная история.",

    "item7.1": "Пономарева Лариса Валерьевна",
    "item7.2": "Преподаватель высшей категории, звание «старший преподаватель».",
    "item7.3": "В 2003 году окончила Запорожский Государственный Университет по специальности« История »и получила квалификацию историка. С 2003 года работает в Запорожском авиационном колледже им. А.Г. Ивченко <br /> Педагогический стаж - 16 лет.",
    "item7.4": "<b> Преподает: </b> Всемирная история, История Украины.",

    "item8.1": "Новик Галина Николаевна",
    "item8.2": "Преподаватель первой категории, психолог первой категории.",
    "item8.3": "В 1991 году закончила Мелитопольский педагогический институт по специальности« учитель географии и биологии ». В 1995 году окончила Запорожский национальный университет по специальности« Детский практический психолог в системе образования ». <br /> Педагогический стаж - 24 года.",
    "item8.4": "<b> Преподает: </b> Психология, География."
    }
}
</i18n>
