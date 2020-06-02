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
              href="https://drive.google.com/drive/folders/11bJDjUHswoK_pfDpVsITBDy64VATeG-U"
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
              href="https://drive.google.com/drive/folders/1PrbdTyvKtXY5jUgnTgiU0U_XGVj57rwm"
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
              href="https://drive.google.com/drive/folders/1qvEbR40aa3WqxXuf8A5Y4m_sbw6zTSnp"
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
              href="https://drive.google.com/drive/folders/1H-FjSKouLjsi4IEva33ravGZYKoIVEzP"
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
              href="https://drive.google.com/drive/folders/1FEcFasjWZvN-t0R9uknzYS6aZyr0kgCP"
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
              href="https://drive.google.com/drive/folders/0BxHzaCHIUifheklTVm5SRFViWEU?usp=sharing"
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

            <div v-html="$t('item8.3')" class="default__item-text"></div>
            <div v-html="$t('item8.4')" class="default__item-teaches"></div>
          </div>
        </div>
        <div class="default__item default__item--large">
          <img
            src="/img/nopicture.jpg"
            class="default__item-img default__item-img--large"
          />
          <div class="default__item-name">
            <div
              v-html="$t('item9.1')"
              class="default__item-title main-title"
            ></div>
            <div v-html="$t('item9.2')" class="default__item-subtitle"></div>

            <div v-html="$t('item9.3')" class="default__item-text"></div>
            <div v-html="$t('item9.4')" class="default__item-teaches"></div>
          </div>
        </div>

        <div class="default__item default__item--large">
          <img
            src="/img/nopicture.jpg"
            class="default__item-img default__item-img--large"
          />
          <div class="default__item-name">
            <div
              v-html="$t('item10.1')"
              class="default__item-title main-title"
            ></div>
            <div v-html="$t('item10.2')" class="default__item-subtitle"></div>
            <a
              target="_blank"
              class="default__item-link"
              href="https://drive.google.com/drive/folders/1ME2nX8bqpPxQW6njGcbENnm8D64FAmgx"
            >
              {{ $t('archive') }}
            </a>
            <div v-html="$t('item10.3')" class="default__item-text"></div>
            <div v-html="$t('item10.4')" class="default__item-teaches"></div>
          </div>
        </div>
        <div class="default__item default__item--large">
          <img
            src="/img/nopicture.jpg"
            class="default__item-img default__item-img--large"
          />
          <div class="default__item-name">
            <div
              v-html="$t('item11.1')"
              class="default__item-title main-title"
            ></div>
            <div v-html="$t('item11.2')" class="default__item-subtitle"></div>
            <a
              target="_blank"
              class="default__item-link"
              href="https://drive.google.com/drive/folders/1OhzVQXPeR24lY4hOQBIH4a527c0ZR2f6"
            >
              {{ $t('archive') }}
            </a>
            <div v-html="$t('item11.3')" class="default__item-text"></div>
            <div v-html="$t('item11.4')" class="default__item-teaches"></div>
          </div>
        </div>
        <div class="default__item default__item--large">
          <img
            src="/img/nopicture.jpg"
            class="default__item-img default__item-img--large"
          />
          <div class="default__item-name">
            <div
              v-html="$t('item12.1')"
              class="default__item-title main-title"
            ></div>
            <div v-html="$t('item12.2')" class="default__item-subtitle"></div>
            <a
              target="_blank"
              class="default__item-link"
              href="https://drive.google.com/drive/folders/1gChK6GhWwspQmxWVdZ5f7LoHl6vWQc0V"
            >
              {{ $t('archive') }}
            </a>
            <div v-html="$t('item12.3')" class="default__item-text"></div>
            <div v-html="$t('item12.4')" class="default__item-teaches"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n>
{
  "ua": {
    "title": "ПЦК авіаконструкторських дисциплін",
    "archive": "Архiв викладача",

    "item1.1": "Маркова Євгенія Олександрівна",
    "item1.2": "Викладач.",
    "item1.3": " ",
    "item1.4": " ",

    "item2.1": "Мещерякова Лариса Іванівна",
    "item2.2": "Спеціаліст вищої категорії, викладач-методист.",
    "item2.3": "Закінчила Запорізький машинобудівний інститут ім. В.Я.Чубаря за спеціальністю 'Технологія машинобудування'.<br /> Педагогiчний стаж - 32 роки.",
    "item2.4": "<b> Викладає:</b> Нарисна геометрія, Інженерна та комп'ютернаграфіка.",

    "item3.1": "Шипкова Світлана Валентинівна",
    "item3.2": "Викладач.",
    "item3.3": " ",
    "item3.4": " ",

    "item4.1": "Одуєва Надія Миколаївна",
    "item4.2": "Викладач.",
    "item4.3": " ",
    "item4.4": " ",

    "item5.1": "Шкробатько Олена Олексіївна",
    "item5.2": "Викладач.",
    "item5.3": " ",
    "item5.4": " ",

    "item6.1": "Кравчук Юлія Сергіївна",
    "item6.2": "Викладач.",
    "item6.3": " ",
    "item6.4": " ",

    "item7.1": "Євангеліст Катерина Ігорівна",
    "item7.2": "Кандидат економічних наук, викладач другої категорії.",
    "item7.3": "Запорізький національний технічний університет, 2010 рік. Спеціальність – Технологія будування авіаційних двигунів; кваліфікація – спеціаліст з технології будування авіаційних двигунів, інженер-механік. Запорізький національний технічний університет, 2011 рік. Спеціальність – Технологія виробництва авіаційних двигунів та енергетичних установок; кваліфікація – магістр з технології будування авіаційних двигунів, інженер-механік, викладач університетів та вищих навчальних закладів. Запорізький національний технічний університет, 2011 рік. Спеціальність – Менеджмент організацій; кваліфікація – менеджер-економіст. Класичний приватний університет, 2012 рік. Спеціальність – Педагогіка вищої школи; кваліфікація – викладач університетів та вищих навчальних закладів. Класичний приватний університет, 2016 рік. Спеціальність – Прикладна економіка; кваліфікація – магістр з прикладної економіки, економіст.<br />Педагогічний стаж - 7 років.",
    "item7.4": "<b>Викладає:</b> Термодинаміка і теплопередача, Технологія двигунобудування, Нарисна геометрія та інженерна графіка, Інженерна графіка, Автоматизоване проектування, Комп’ютерне проектування.",

    "item8.1": "Шевцова Олена Володимирівна",
    "item8.2": "Викладач.",
    "item8.3": " ",
    "item8.4": " ",

    "item9.1": "Камель Георгій Іванович",
    "item9.2": "Доктор технічних наук, профессор, сцеціаліст вищої категорії.",
    "item9.3": "Закінчив з відзнакою Запорізький національний технічний університет, 1969 рік, спеціальність «Обладнання і технологія зварювального виробництва», кваліфікація- інженер-механік.<br /> 8.06.1983 року Присвоєно ВЧЕНЕ ЗВАННЯ СТАРШОГО НАУКОВОГО СПІВРОБІТНИКА по спеціальності «Машини та обладнання целюлозно-паперового виробництва. Захистив ДОКТОРСЬКУ ДИСЕРТАЦІЮ у 1999 році в Росії (Санкт-Петербург) по спеціальності «Технологія та обладнання хімічної переробки деревини; хімія деревини. Присвоєно вчене звання ДОЦЕНТА кафедри деталі машин і підйомно-транспортних механізмів 19.02.2004 року. Міністерство освіти і науки Захистив ДОКТОРСЬКУ ДИСЕРТАЦІЮ 18.02.2009 році в Україні (місто Луганськ) по спеціальності «Промисловий транспорт». Присвоєно ВЧЕНЕ ЗВАННЯ ПРОФЕСОРА кафедри технологія та устаткування зварювання 30 листопада 2012 року. Пройшов практику стажування в відділку Головного металурга ОК «Мотор січ» де ознайомився з нормативними документами по використанню мультимедійної програми при виготовлені та ремонті детале машин підприємства. 15.03.19 року АТЕСТАЦІЙНА КОМІСІЯ в «Департаменті освіти і науки» Запорізької обласної державної адміністрації присвоїла «СПЕЦИАЛІСТА ВИЩОЇ КАТЕГОРІЇ».<br /> Сфера наукових інтересів – триботехніка, теоретичні, прикладні та технологічні аспекти підвищення зносостійкості, конструювання, виробництва, ремонту та експлуатації обладнання робочих органів промислового транспорту.<br /> Має близько 250 наукових праць, у тому числі 6 монографій, 20 авторських свідоцтва, 35 патентів (України) на винаходи та корисні моделі.",
    "item9.4": "<b>Викладає:</b> Технічна механіка, Основи конструювання машин, Опір матеріалів, курсові роботи з дисципліни «Технічна механіка», курсові проекти з дисципліни «Основи конструювання деталей машин».",

    "item10.1": "Кришталь Олександр Герасимович",
    "item10.2": "Викладач.",
    "item10.3": " ",
    "item10.4": " ",

    "item11.1": "Магда Олена Сергіївна",
    "item11.2": "Викладач з вищою освітою.",
    "item11.3": "Закінчила Запорізький національний технічний університет, здобула освітній рівень магістр за спеціальністю 'Авіаційна та ракетно-космічна техніка'.",
    "item11.4": "<b>Викладає:</b> Складання АД, Нарисна геометрія та інженерна графіка.",

    "item12.1": "Колос Олександр Анатолійович",
    "item12.2": "Викладач.",
    "item12.3": " ",
    "item12.4": " "

  },
  "ru": {
    "title": "ПЦК авиаконструкторских дисциплин",
    "archive": "Архив преподавателя",

    "item1.1": "Маркова Евгения Александровна",
    "item1.2": "Преподаватель.",
    "item1.3": " ",
    "item1.4": " ",

    "item2.1": "Мещерякова Лариса Ивановна",
    "item2.2": "Специалист высшей категории, преподаватель-методист.",
    "item2.3": "Закончил Запорожский машиностроительный институт им. В.Я.Чубаря по специальности 'Технология машиностроения'. <br /> Педагогический стаж - 32 года.",
    "item2.4": "<b> Преподает: </b> Начертательная геометрия, Инженерная и компьютерная графика",

    "item3.1": "Шипкова Светлана Валентиновна",
    "item3.2": "Преподаватель.",
    "item3.3": " ",
    "item3.4": " ",

    "item4.1": "Одуева Надежда Николаевна",
    "item4.2": "Преподаватель.",
    "item4.3": " ",
    "item4.4": " ",

    "item5.1": "Шкробатько Елена Алексеевна",
    "item5.2": "Преподаватель.",
    "item5.3": " ",
    "item5.4": " ",

    "item6.1": "Кравчук Юлия Сергеевна",
    "item6.2": "Преподаватель.",
    "item6.3": " ",
    "item6.4": " ",

    "item7.1": "Евангелист Екатерина Игоревна",
    "item7.2": "Кандидат экономических наук, преподаватель второй категории.",
    "item7.3": "Запорожский национальный технический университет, 2010 год. Специальность - Технология строительства авиационных двигателей, квалификация - специалист по технологии строительства авиационных двигателей, инженер-механик. Запорожский национальный технический университет, 2011 год. Специальность - Технология производства авиационных двигателей и энергетических установок, квалификация - магистр по технологии строительства авиационных двигателей, инженер-механик, преподаватель университетов и высших учебных заведений. Запорожский национальный технический университет, 2011 год. Специальность - Менеджмент организаций, квалификация - менеджер-экономист. Классический приватный университет, 2012 год. Специальность - Педагогика высшей школы, квалификация - преподаватель университетов и высших учебных заведений. Классический приватный университет, 2016 год. Специальность - Прикладная экономика, квалификация - магистр прикладной экономики, экономист. <br /> Педагогический стаж - 7 лет.",
    "item7.4": "<b>Преподает: </b> Термодинамика и теплопередача, Технология двигателестроения, Начертательная геометрия и инженерная графика, Инженерная графика, Автоматизированное проектирование Компьютерное проектирование.",

    "item8.1": "Шевцова Елена Владимировна",
    "item8.2": "Преподаватель.",
    "item8.3": " ",
    "item8.4": " ",

    "item9.1": "Камель Георгий Иванович",
    "item9.2": "Доктор технических наук, профессор, сцециалист высшей категории.",
    "item9.3": "Окончил с отличием Запорожский национальный технический университет, 1969 год, специальность «Оборудование и технология сварочного производства», квалификация- инженер-механик. <br /> 8.06.1983 года присвоено ученое звание старшего научного сотрудника по специальности «Машины и оборудование целлюлозно-бумажного производства. Защитил докторскую диссертацию в 1999 году в России (Санкт-Петербург) по специальности «Технология и оборудование химической переработки древесины; химия древесины. присвоено ученое звание доцента кафедры детали машин и подъемно-транспортных механизмов 19.02.2004 года . Министерство образования и науки защитил докторскую диссертацию 18.02.2009 году в Украине (город Луганск) по специальности «Промышленный транспорт». присвоено ученое звание профессора кафедры технологии и оборудование сварки 30 ноября 2012. Прошел практику стажировку в отделении Главного металлурга ОК «Мотор сич» где ознакомился с нормативными документами по использованию мультимедийных приложений мы при изготовлении и ремонте деталей машин предприятия. 15.03.19 года аттестационной комиссии в «Департаменте образования и науки» Запорожской областной государственной администрации присвоила «спецыалиста высшей категории». <br /> Сфера научных интересов - Триботехника, теоретические, прикладные и технологические аспекты повышения износостойкости, конструирование, производства, ремонта и эксплуатации оборудование рабочих органов промышленного транспорта. <br /> Имеет около 250 научных работ, в том числе 6 монографий, 20 авторских свидетельства, 35 патентов (Украина) на изобретения и полезные модели.",
    "item9.4": "<b> Преподает: </b> Техническая механика, Основы конструирования машин, Сопротивление материалов, курсовые работы по дисциплине «Техническая механика», курсовые проекты по дисциплине «Основы конструирования деталей машин».",

    "item10.1": "Крышталь Александр Герасимович",
    "item10.2": "Преподаватель.",
    "item10.3": " ",
    "item10.4": " ",

    "item11.1": "Магда Олена Сергіївна",
    "item11.2": "Преподаватель с высшим образованием.",
    "item11.3": "Закончил Запорожский национальный технический университет, получила образовательный уровень магистр по специальности 'Авиационная и ракетно-космическая техника'.",
    "item11.4": "<b>Преподает: </b> Составление АД, Начертательная геометрия и инженерная графика.",

    "item12.1": "Колос Александр Анатольевич",
    "item12.2": "Преподаватель.",
    "item12.3": " ",
    "item12.4": " "
    }
}
</i18n>
