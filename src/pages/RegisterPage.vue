<template>
  <div class="cabinet-wrapper container">
    <div class="breadcrumbs">
      <q-breadcrumbs  gutter="none">
        <template v-slot:separator>
          <q-icon
            size="1.5em"
            name="chevron_right"
            color="primary"
            dense
          />
        </template>
        <q-breadcrumbs-el to="/" label="Главная" />
        <q-breadcrumbs-el label="Личный кабинет" />
        <q-breadcrumbs-el label="Авторизация" />
      </q-breadcrumbs>
    </div>
    <section class="cabinet">
      <div class="cabinet__header">
        <h2>Личный кабинет</h2>
      </div>
      <div class="cabinet__body">
        <form class="cabinet__login" @submit="formSubmit">
          <span>Войти</span>
          <input type="email" v-model.trim="mail" placeholder="E-mail">
          <input type="password" v-model.trim="password" placeholder="Пароль">
          <a href="#">Восстановить пароль</a>
          <button class="button">Войти в личный кабинет</button>
        </form>
        <personal-data title="Зарегистрироваться" isRegistered="true" />
      </div>
      
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import PersonalData from '../components/common/PersonalData.vue'

export default {
  components: {
    PersonalData
  },
  setup () {
    return {
      left: ref(true),
    }
  },
  data() {
    return {
      mail: '',
      mail2: '',
      password: '',
      password2: '',
      password21: '',
      surname: '',
      name: '',
      phone: '',
      login: '',
      city: '',
      street: '',
      house: '',
      apartment: '',
      index: '',
      region: '',
      newsletter: false,
      disclaimer: false,
      card: '',
    }
  },
  methods: {
    formSubmit() {
      console.log(this.mail, this.password)
    },
    showLogin() {
      console.log('123456789', this.loginStatus )
    }
  },
  computed: {
    loginStatus() {
      return this.$store.getters['login/loginStatus']
    }
  }
}
</script>

<style lang="scss" scoped>
.cabinet-wrapper {
  margin-top: 20px;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
}

.breadcrumbs {
  margin-bottom: 40px;
}

.cabinet {
  display: flex;
  flex-direction: column;

  &__body {
    width: 100%;
    margin-top: 40px;
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 40px;
  }

  &__header {
    position: relative;
    min-height: 70px;

    h2 {
      margin: 0;
      font-weight: bold;
      font-size: 36px;
      line-height: 100%;;
    }

    &::after {
      position: absolute;
      content: "";
      height: 4px;
      width: 105vw;
      bottom: 0;
      left: -8%;
      background: #E0E0E0;
      opacity: 0.3;
    }
  }

  &__login {
    width: 430px;
    padding: 20px 50px;
    display: flex;
    flex-direction: column;
    background: #f0f0f0;
    margin-right: 15px;
    max-height: 300px;

    span {
      width: 100%;
      text-align: center;
      font-weight: 500;
      font-size: 24px;
      line-height: 150%;
      color: #000;
      margin-bottom: 50px;
    }

    input {
      height: 40px;
      margin-bottom: 12px;
      border: none;
      outline: none;
      font-size: 22px;
      line-height: 150%;
      padding-left: 5px;
      
      

      &::placeholder {
        color: #ababab;
        font-weight: 300;
      }
    }

    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #ffffff inset;
      box-shadow: 0 0 0px 1000px #ffffff inset;
      transition: background-color 5000s ease-in-out 0s;
    }

    a {
      color: #525252;
      text-decoration: underline;
      font-weight: 500;
      font-size: 18px;
      line-height: 100%;
      margin-bottom: 15px;

      &:hover {
        text-decoration: none;
        opacity: 0.7;
      }
    }

    button {
      background: #525252;
      border: none;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      text-transform: uppercase;
      color: #FFFFFF;
      padding: 8px 0;

      &:hover {
        opacity: 0.7;
        cursor: pointer;
      }
    }
  }
}
</style>