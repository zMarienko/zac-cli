<template>
  <section class="new-publication">
    <div class="container">
      <div class="new-publication__inner">
        <div class="new-publication__title main-title">Нова публiкацiя</div>
        <form class="form" @submit.prevent="submitPost">
          <div class="form__row">
            <div class="form__column-left">
              <label class="form__label">Головна картинка</label>
              <label class="form__label">Назва публiкацї</label>
              <label class="form__label">Короткий опис</label>
              <label class="form__label">Текст</label>
            </div>
            <div class="form__column-right">
              <input
                id="file"
                ref="file"
                type="file"
                class="form__file"
                accept="image/*"
                @change="onFileChange"
                required
              />
              <input
                class="form__title"
                v-model="title"
                placeholder="Введiть назву.."
                maxlength="200"
                required
              />
              <input
                class="form__description"
                v-model="description"
                placeholder="Введiть короткий опис публiкацї.."
                required
              />
              <textarea
                class="form__text"
                v-model="text"
                placeholder="Напишiть щось.."
                rows="12"
                required
              ></textarea>

              <button class="form__btn" type="submit">
                Опублікувати
              </button>
              <input
                type="date"
                :value="date.toISOString().split('T')[0]"
                class="form__date"
                id="form__date"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="babel">
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
      this.$store.dispatch('createPost', post);
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
  }
  &__label {
    padding: 19px 10px;
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
    width: 120px;
  }

  &__column-left {
    display: flex;
    flex-direction: column;
    width: 15%;
    align-items: flex-end;
  }
  &__column-right {
    display: flex;
    flex-direction: column;
    width: 85%;
    margin-right: 30px;
  }
  &__btn {
    background-color: #4caf50;
    color: white;
    padding: 12px 20px;
    border-radius: 4px;
    text-align: center;
    &:hover {
      background-color: #45a049;
    }
  }
}
</style>
