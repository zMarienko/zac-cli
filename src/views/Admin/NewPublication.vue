<template>
  <section class="new-publication">
    <div class="container">
      <div class="new-publication__inner">
        <div class="new-publication__title main-title">Нова публiкацiя</div>
        <form class="form" @submit.prevent="submitPost">
          <div class="form__row">
            <label class="form__label form__left">Головна картинка</label>
            <input
              id="file"
              ref="file"
              type="file"
              class="form__file form__right"
              accept="image/*"
              @change="onFileChange"
            />
          </div>
          <div class="form__row">
            <label class="form__label form__left">Назва публiкацї</label>
            <input
              class="form__title form__right"
              v-model="title"
              placeholder="Введiть назву.."
              maxlength="200"
              required
            />
          </div>
          <div class="form__row">
            <label class="form__label form__left">Короткий опис</label>
            <input
              class="form__description form__right"
              v-model="description"
              placeholder="Введiть короткий опис публiкацї.."
              required
            />
          </div>
          <div class="form__row">
            <label class="form__label form__left">Текст</label>
            <textarea
              class="form__text form__right"
              v-model="text"
              placeholder="Напишiть щось.."
              rows="12"
              required
            ></textarea>
          </div>
          <div class="form__row">
            <label class="form__label form__left"> </label>
            <button class="form__btn blue-button form__right" type="submit">
              Опублікувати
            </button>
          </div>
          <div class="form__row">
            <label class="form__label form__left"> </label>
            <input
              type="date"
              :value="date.toISOString().split('T')[0]"
              class="form__right form__date"
              id="form__date"
            />
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="babel">
import axios from 'axios'

export default {
  name: 'new-post',
  data: () => ({
    title: '',
    description: '',
    text: '',
    image: '',
    date: new Date(),
    year: '',
    month: '',
  }),
  mounted() {},
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var reader = new FileReader();

      reader.onload = (e) => {
        this.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    submitPost() {
      const post = {
        title: this.title,
        description: this.description,
        text: this.text,
        date: new Date(
          document.getElementById('form__date').value
        ).toLocaleDateString(),
        id: Date.now(),
        year: new Date(
          document.getElementById('form__date').value
        ).getFullYear(),
        month:
          new Date(document.getElementById('form__date').value).getMonth() + 1,
        image: this.image,
      };
      console.log(post);
      axios.post('http://localhost:3000/new-post', post)
      this.$router.push('/news');
    },
  },
};
</script>

<style lang="scss" scoped>
.new-publication {
  &__inner {
    margin: 10px 15px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    padding: 10px;
  }
  &__title {
    font-size: 34px;
    padding: 25px 15px;
    text-align: center;
  }
}

.form {
  &__row {
    display: flex;
    justify-content: space-between;
    @media (max-width: 650px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  &__label {
    padding: 19px 10px;
    @media (max-width: 650px) {
      padding: 5px 5px;
    }
  }
  &__title,
  &__description,
  &__text,
  &__file {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 5px 0px;
  }

  &__date {
    text-align: right;
  }

  &__left {
    flex: 15%;
    width: 15%;
    text-align: right;
    @media (max-width: 650px) {
      flex: 100%;
      width: 100%;
      text-align: center;
    }
  }

  &__right {
    flex: 85%;
    width: 85%;
    @media (max-width: 650px) {
      flex: 100%;
      width: 100%;
    }
  }

  &__btn {
    color: white;
    padding: 12px 20px;
    border-radius: 4px;
    text-align: center;
  }
}
</style>
