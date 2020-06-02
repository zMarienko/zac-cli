<template>
  <section class="default">
    <div class="container">
      <div class="default__inner">
        <div class="default__title main-title">{{ $t('title') }}</div>
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
              href="https://drive.google.com/drive/folders/1Siya6gS4th532XRh-2zvUwNewawKDqhA"
            >
              {{ $t('archive') }}
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
              href="https://drive.google.com/drive/folders/1AwNkRsbqGxzqV4XgwW09bXif-ajajkfH?usp=sharing"
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
              href="https://drive.google.com/drive/folders/1Lv-hh20zmvEy0Z7W89M09a3fjpJZQKmu?usp=sharing"
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
              href="https://drive.google.com/drive/folders/1KLrqdkfpZst7tPKNyponw83iVsZABcog"
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
              href="https://drive.google.com/open?id=1x9cWuXKdpiI35mhfzOczkYI12_HtByS7"
            >
              {{ $t('archive') }}
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
              href="https://drive.google.com/drive/folders/121Jyn_8GaS1tMdLgBncJXOEfOrMAW10G"
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
              href="https://drive.google.com/drive/folders/1486uqhNbQhNb-qdG_6EgmIXMa9x2SNsJ"
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
    "title": "ПЦК економічних дисциплін",
    "archive": "Архiв викладача",

    "item1.1": "Духовна Олена Іванівна",
    "item1.2": "Голова ПЦК, викладач першої категорії.",
    "item1.3": "Запорізька державна інженерна академія, спеціальність «Менеджмент організації». Запорізький національний університет, спеціальність «Перекладач англійської мови». Запорізький національний університет, спеціальність «Педагогіка вищої школи».",
    "item1.4": "<b> Викладає:</b> Менеджмент, Економіка підприємства, Економічний аналіз, Основи управління виробництвом і менеджмент, Управління витратами, Планування та організація діяльності підприємства, Технології (Вступ в спеціальність).",

    "item2.1": "Рожковська Ольга Вадимівна",
    "item2.2": "Викладач.",
    "item2.3": " ",
    "item2.4": " ",

    "item3.1": "Самойленко Людмила Миколаївна",
    "item3.2": "Спеціаліст вищої категорії, старший викладач.",
    "item3.3": "Закінчила Харківський інженерно-економічний інститут у 1985р. Спеціальність: інженер-економіст.<br /> Педагогічний стаж - 22 роки.",
    "item3.4": "<b> Викладає:</b> Економіка, Організація і планування виробництва, Економіка і нормування праці, Основи підприємництва і управлінської діяльності.",

    "item4.1": "Богдан Юрій Миколайович",
    "item4.2": "Викладач.",
    "item4.3": " ",
    "item4.4": " ",

    "item5.1": "Борисенко Петро Анатолійович",
    "item5.2": "Кандидат економічних наук. Доцент, викладач вищої категорії.",
    "item5.3": "Народився у м. Запоріжжя 1981 р. Закінчив Запорізьку державну інженерну академію (колишній Запорізький індустріальний інститут). Спеціальність за дипломом – «Менеджмент організацій», кваліфікація за дипломом – «Менеджер-економіст». У 2011 році став лауреатом премії Програми підтримки вчених та обдарованої молоді, розробленої АКБ «Індустріалбанк». У 2016 році відзначений листом Подяки Департаменту освіти і науки Запорізької облдержадміністрації за сумлінну працю, високий професіоналізм та вагомий внесок у справу виховання підростаючого покоління.<br /> Науково-педагогічний стаж – 16 років.",
    "item5.4": "<b> Викладає:</b> Економіка, Організація і планування виробництва, Основи маркетингу, Ціноутворення, Податкова система, Фінанси підприємств, Статистика.",

    "item6.1": "Присяжна Вікторія Юхимівна",
    "item6.2": "Викладач.",
    "item6.3": " ",
    "item6.4": " ",

    "item7.1": "Ткаленко Валентина Михайлівна",
    "item7.2": "Викладач.",
    "item7.3": " ",
    "item7.4": " "
  },
  "ru": {
    "title": "ПЦК экономических дисциплин",
    "archive": "Архив преподавателя",

    "item1.1": "Духовная Елена Ивановна",
    "item1.2": "Председатель ПЦК, преподаватель первой категории.",
    "item1.3": "Запорожская государственная инженерная академия, специальность «Менеджмент организации». Запорожский национальный университет, специальность« Переводчик английского языка ». Запорожский национальный университет, специальность «Педагогика высшей школы».",
    "item1.4": "<b> Преподает: </b> Менеджмент, Экономика предприятия, Экономический анализ, Основы управления производством и менеджмент, Управление затратами, Планирование и организация деятельности предприятия, Технологии (Введение в специальность).",

    "item2.1": "Рожковская Ольга Вадимовна",
    "item2.2": "Преподаватель.",
    "item2.3": " ",
    "item2.4": " ",

    "item3.1": "Самойленко Людмила Николаевна",
    "item3.2": "Специалист высшей категории, старший преподаватель.",
    "item3.3": "Закончил Харьковский инженерно-экономический институт в 1985г. Специальность: инженер-экономист. <br /> Педагогический стаж - 22 года.",
    "item3.4": "<b> Преподает: </b> Экономика, Организация и планирование производства, Экономика и нормирование труда, Основы предпринимательства и управленческой деятельности.",

    "item4.1": "Богдан Юрий Николаевич",
    "item4.2": "Преподаватель.",
    "item4.3": " ",
    "item4.4": " ",

    "item5.1": "Борисенко Петр Анатольевич",
    "item5.2": "Кандидат экономических наук. Доцент, преподаватель высшей категории.",
    "item5.3": "Родился в г.. Запорожье 1981 Окончил Запорожской государственной инженерной академии (бывший Запорожский индустриальный институт). Специальность по диплому -« Менеджмент организаций », квалификация по диплому -« Менеджер-экономист ». В 2011 году стал лауреатом премии Программы поддержки ученых и одаренной молодежи, разработанной АКБ «Индустриалбанк». в 2016 году отмечен благодарственными письмами Департамента образования и науки Запорожской облгосадминистрации за добросовестный труд, высокий профессионализм и весомый вклад в дело воспитания подрастающего поколения. <br /> Научно-педагогический стаж - 16 лет.",
    "item5.4": "<b> Преподает: </b> Экономика, организация и планирование производства, Основы маркетинга, Ценообразование, Налоговая система, Финансы предприятий, Статистика.",

    "item6.1": "Присяжна Виктория Ефимовна",
    "item6.2": "Преподаватель.",
    "item6.3": " ",
    "item6.4": " ",

    "item7.1": "Ткаленко Валентина Михайловна",
    "item7.2": "Преподаватель.",
    "item7.3": " ",
    "item7.4": " "
    }
}
</i18n>
