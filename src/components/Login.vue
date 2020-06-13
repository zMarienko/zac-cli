<template>
  <section class="default">
    <div class="container">
      <form class="login" @submit.prevent="login">
        <h3 class="login__title main-title">Особистий кабінет</h3>
        <label class="default__quote login__quote">E-mail</label>
        <input
          required
          v-model="email"
          type="email"
          placeholder="Ввведіть e-mail"
        />
        <label class="default__quote login__quote">Пароль</label>
        <input
          required
          v-model="password"
          type="password"
          placeholder="Введіть пароль"
        />
        <hr />
        <button class="login__btn blue-button" type="submit">Вхід</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login: function() {
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch('login', { email, password })
        .then(() => this.$router.push('/'))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  padding: 10px 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 450px;
  width: 100%;
  margin: 20px auto;

  @media (max-width: 500px) {
    margin: 0px auto;
    height: 520px;
  }

  &__title {
    font-size: 34px;
    text-align: center;
    padding: 10px 15px 30px;
  }

  &__btn {
    color: #fff;
    font-size: 20px;
    padding: 5px 50px;
    text-align: center;
    margin: 20px 0 10px;
  }

  &__quote {
    margin: 0;
    width: 100%;
  }

  label {
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    margin-bottom: 15px;
    padding: 5px 10px;
    border: 2px solid rgba(27, 109, 233, 0.35);
  }
}
</style>
