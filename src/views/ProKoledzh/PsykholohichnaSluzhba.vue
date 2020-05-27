<template>
  <main class="main" style="background-image: url(/img/study.png);">
    <section class="psykholohichna-sluzhba">
      <div class="container">
        <div class="psykholohichna-sluzhba__inner">
          <div class="psykholohichna-sluzhba__content">
            <div class="psykholohichna-sluzhba__title common-title">
              Психологiчна служба
            </div>
            <div class="psykholohichna-sluzhba__item">
              <img
                src="/img/psiholog.jpg"
                alt
                class="psykholohichna-sluzhba__item-img"
              />
              <div class="psykholohichna-sluzhba__item-name">
                <div class="psykholohichna-sluzhba__item-title">
                  Новік Галина Миколаївна
                </div>
                <div class="psykholohichna-sluzhba__item-subtitle">
                  Психолог другої категорії
                </div>
              </div>
            </div>
          </div>

          <div class="psykholohichna-sluzhba__quote">
            Мета: психологічний супровід і створення в освітньому закладі умов
            для максимального успішного особистісного розвитку, навчання і
            соціалізації всіх учасників процесу навчання.<br /><br />

            Проблеми:<br />

            - Адаптація студентів коледжу до навчання;<br />

            - Попередження конфліктів у молодіжному середовищі;<br />

            - Психолого-педагогічний клімат освітньої діяльності ;<br />

            - Організація своєчасної соціально-психологічної допомоги учасника
            навчально-виховного процесу у зв’язку із зростанням загального рівня
            стресу та тривожності у дітей та дорослих в наслідок подій, що
            відбуваються в Україні.<br /><br />

            Завдання і напрями роботи:<br />

            - Допомога студентам в адаптації під час переходу до нових умов
            навчання;<br />

            - Робота із студентами «Групи ризику»;<br />

            - Допомога підліткам у кризових ситуаціях;<br />

            - Превентивне виховання, метою якого є формування орієнтації на
            здоровий спосіб життя та захист психічного здоров’я;<br />

            - Профілактика адекватної поведінки( алкоголізм, куріння,
            наркоманії, тощо) серед молоді;<br />

            - Профорієнтація студентів випускних курсів; розвиток особистої
            зрілості та соціальної компетенції студентів;<br />

            - Робота з обдарованими студентами;<br />

            - Співпраця з батьками, з поглиблення розуміння
            психолого-педагогічних основ сімейного виховання;<br />

            - Просвіта викладачів з питань гуманістичної психології, методів
            підтримки дисципліни, навичок конструктивних переговорів; участь у
            розробці навчальних програм.
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'psykholohichna-sluzhba',
};
</script>

<style lang="scss" scoped>
.psykholohichna-sluzhba {
  &__inner {
    margin: 10px 15px;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);
  }
  &__title {
    text-align: center;
    line-height: 1.2;
    padding: 25px 15px;
    font-size: 34px;
    margin: 0 auto;
  }
  &__quote {
    background: #f8f9f9 url(/img/lines.gif) repeat;
    border-left: 10px solid #3190d3;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 0px 10px 10px 10px;
  }
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__item {
    border-left: 5px solid #3190d3;
    margin: 20px;
    text-align: center;
    padding: 5px 5px 5px 15px;
    display: flex;
    background-color: rgba(#b6c1ca, 0.3);
    box-shadow: 0 0px 5px rgba(0, 0, 0, 0.5);
    &-name {
      padding: 20px 10px;
    }
    &-title {
      font-size: 26px;
      color: #1c537a;
      font-weight: 700;
      text-shadow: 2px 2px 0px #fff, 5px 4px 0px rgba(0, 0, 0, 0.15);
    }
    &-subtitle {
      font-size: 20px;
      padding-top: 10px;
      color: #464646;
    }
    &-img {
      height: 150px;
      width: 150px;
      object-fit: cover;
    }
  }
}
</style>
