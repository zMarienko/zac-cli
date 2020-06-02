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
              href="https://drive.google.com/drive/folders/1ghrOyA2snZb-q3jwg8jaNww5PpSn6E6U"
            >
              {{ $t('archive') }}
            </a>
            <a
              target="_blank"
              class="default__item-link"
              href="http://logorifminus.blogspot.com/"
            >
              {{ $t('site') }}
            </a>
            <div v-html="$t('item1.3')" class="default__item-text"></div>
            <div v-html="$t('item1.4')" class="default__item-teaches"></div>
          </div>
        </div>
        <div class="default__item default__item--large">
          <img
            src="/img/nopicture.jpg"
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
              href="https://drive.google.com/drive/folders/1fYFzisAOGGaK67xGHVSOzr8s2XekisPa"
            >
              {{ $t('archive') }}
            </a>
            <div v-html="$t('item2.3')" class="default__item-text"></div>
            <div v-html="$t('item2.4')" class="default__item-teaches"></div>
          </div>
        </div>
        <div class="default__item default__item--large">
          <img
            src="/img/nopicture.jpg"
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
              href="https://drive.google.com/drive/folders/1t9_JEQRhKUb4j71Xby5_enjeOHoxkKad"
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
              href="https://drive.google.com/drive/folders/1DyU2uq_XkXkyUzdf3IwbUs3C5gcI0ehC?usp=sharing"
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
              href="http://logorifminus.blogspot.com/"
            >
              {{ $t('site') }}
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
              href="https://drive.google.com/drive/folders/1yaBigLe6TTb1qovGXRO3P35cqmaG_-i6"
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
              href="https://drive.google.com/drive/folders/1XaAtfdwyS48bGf5vAgJAYABwveKFu1qL"
            >
              {{ $t('archive') }}
            </a>

            <div v-html="$t('item7.3')" class="default__item-text"></div>
            <div v-html="$t('item7.4')" class="default__item-teaches"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n>
{
  "ua": {
    "title": "ПЦК фізико-математичних дисциплін",
    "archive": "Архiв викладача",
    "site": "Сайт викладача",

    "item1.1": "Свіріна Ольга Володимирівна",
    "item1.2": "Голова ПЦК, спеціаліст вищої категорії, старший викладач",
    "item1.3": "Закінчила Запорізький державний університет у 2002 році та здобула кваліфікацію «математика, викладача математики». Працює в ЗАК з 2002 року. <br /> Педагогічний стаж – 16 років.",
    "item1.4": "<b> Викладає:</b> Математику, Вища математика.",

    "item2.1": "Чепурна Оксана Віталіївна",
    "item2.2": "Спеціаліст вищої категорії, викладач-методист.",
    "item2.3": "Закінчила Запорізький державний університет у 1993 році та здобула кваліфікацію «Фізик. Викладач». Працює в ЗАК з 1996 року. <br />Педагогічний стаж – 25 років.",
    "item2.4": "<b> Викладає:</b> Фізика, Астрономія",

    "item3.1": "Карасьова Галина Юріївна",
    "item3.2": "Спеціаліст вищої категорії, викладач.",
    "item3.3": "Закінчила Запорізький державний університет у 1995 році та здобула кваліфікацію «фізика». Працює в ЗАК з 1997 року.<br /> Педагогічний стаж – 27 років.",
    "item3.4": "<b> Викладає:</b> Фізика, Астрономія.",

    "item4.1": "Токарчук Анжела Валентинівна",
    "item4.2": "Спеціаліст вищої категорії, старший викладач.",
    "item4.3": "Закінчила Запорізький державний університет у 1995 році та здобула кваліфікацію «математика, викладача математики». Працює в ЗАК з 2011 року.Здійснює науково-методичне керівництво інформаційного проекту в співпраці з закладом позашкільної освіти ПНЗ ЦНТТМ 'Політ'. Спікер вебінарів: Вебінар «Організація індивідуального простору на уроках математики за допомогою ІКТ». Має інформаційний проект.<br />Педагогічний стаж – 28 роки.",
    "item4.4": "<b> Викладає:</b> Математика, Вища математика.",

    "item5.1": "Райна Альона Юріївна",
    "item5.2": "Спеціаліст з вищої освітою, викладач.",
    "item5.3": "Закінчила Запорізький національний університет у 2008 році та здобула кваліфікацію «фізика, викладача фізики». Працює в ЗАК з 2018 року. <br /> Педагогічний стаж – 2 роки.",
    "item5.4": "<b> Викладає:</b> Фізика, Астрономія",

    "item6.1": "Асламова Любов Володимирівна",
    "item6.2": "Спеціаліст вищої категорії, старший викладач.",
    "item6.3": "Закінчила Запорізький державний педагогічний інститут у 1985 році та здобула кваліфікацію «вчителя математики та фізики». Працює в ЗАК з 2005 року. <br /> Педагогічний стаж – 30 років.",
    "item6.4": "<b> Викладає:</b> Математика, Вища математика",

    "item7.1": "Рудь Галина Миколаївна",
    "item7.2": "Викладач.",
    "item7.3": " ",
    "item7.4": " "
  },
  "ru": {
    "title": "ПЦК физико-математических дисциплин",
    "archive": "Архив преподавателя",
    "site": "Сайт преподавателя",

    "item1.1": "Свирина Ольга Владимировна",
    "item1.2": "Председатель ПЦК, специалист высшей категории, старший преподаватель",
    "item1.3": "Закончила Запорожский государственный университет в 2002 году и получила квалификацию «математика, преподавателя математики». Работает в ЗАК с 2002 года. <br /> Педагогический стаж - 16 лет.",
    "item1.4": "<b> Преподает: </b> Математику, Высшая математика.",

    "item2.1": "Чепурна Оксана Витальевна",
    "item2.2": "Специалист высшей категории, преподаватель-методист.",
    "item2.3": "Закончила Запорожский государственный университет в 1993 году и получила квалификацию «Физик. Преподаватель». Работает в ЗАК с 1996 года. <br /> Педагогический стаж - 25 лет.",
    "item2.4": "<b> Преподает: </b> Физика, Астрономия",

    "item3.1": "Карасева Галина Юрьевна",
    "item3.2": "Специалист высшей категории, преподаватель.",
    "item3.3": "Закончила Запорожский государственный университет в 1995 году и получила квалификацию «Физика». Работает в ЗАК с 1997 года. <br /> Педагогический стаж - 27 лет.",
    "item3.4": "<b> Преподает: </b> Физика, Астрономия.",

    "item4.1": "Токарчук Анжела Валентиновна",
    "item4.2": "Специалист высшей категории, старший преподаватель.",
    "item4.3": "Закончила Запорожский государственный университет в 1995 году и получила квалификацию «математика, преподавателя математики». Работает в ЗАК с 2011 року. Осуществляет научно-методическое руководство информационного проекта в сотрудничестве с учреждением внешкольного образования ПНЗ ЦНТТМ «Полет». спикер вебинаров: Вебинар «Организация индивидуального пространства на уроках математики с помощью ИКТ». Имеет информационный проект. <br /> Педагогический стаж - 28 года. ",
    "item4.4": "<b> Преподает: </b> Математика, Высшая математика.",

    "item5.1": "Райна Алена Юрьевна",
    "item5.2": "Специалист с высшим образованием, преподаватель.",
    "item5.3": "Закончила Запорожский национальный университет в 2008 году и получила квалификацию «физика, преподавателя физики». Работает в ЗАК с 2018 года. <br /> Педагогический стаж - 2 года.",
    "item5.4": "<b> Преподает: </b> Физика, Астрономия",

    "item6.1": "Асламова Любовь Владимировна",
    "item6.2": "Специалист высшей категории, старший преподаватель.",
    "item6.3": "Закончила Запорожский государственный педагогический институт в 1985 году и получила квалификацию «учителя математики и физики». Работает в ЗАК с 2005 года. <br /> Педагогический стаж - 30 лет.",
    "item6.4": "<b> Преподает: </b> Математика, Высшая математика.",

    "item7.1": "Рудь Галина Николаевна",
    "item7.2": "Преподаватель.",
    "item7.3": " ",
    "item7.4": " "
    }
}
</i18n>
