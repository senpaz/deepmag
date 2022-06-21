<template>
  <section>
    <form class="cabinet__register" @submit.prevent="formSubmit(form)">
      <span>{{ title }}</span>

      <div class="cabinet__register-content">

        <!-- LEFT BLOCK  -->

        <div class="cabinet__content-column">
          <input type="text" v-model.trim="form.surname" placeholder="Фамилия">
          <input type="text" v-model.trim="form.name" placeholder="Имя">
          <input type="email" v-model.trim="form.mail" placeholder="E-mail">
          <input type="tel" v-model.trim="form.phone" placeholder="Номер телефона">
          <input v-if="type !== 'no-reg'" type="text" v-model.trim="form.login" placeholder="Логин">
          <input v-if="type !== 'no-reg'" type="password" v-model.trim="form.password2" placeholder="Пароль">
          <input v-if="type !== 'no-reg'" type="password" v-model.trim="form.password21" placeholder="Пароль">
          <div v-if="type === 'no-reg'" class="cabinet__submit">
            <input class="card" type="text" v-model.trim="form.card" placeholder="Номер дисконтной карты">
              <button>Запомнить</button>
          </div>
          <div v-if="type === 'no-reg'" class="cabinet__promo">У Вас есть промокод?</div>
          <q-btn-dropdown
            v-if="type === 'no-reg'"
            class="dropdown text-black"
            color="white"
            padding="5px 10px 5px 5px"
            size="20px"
            no-caps
            align="between"
            dropdown-icon="img:data:image/svg+xml;charset=utf8,<svg style=' transform: scale(0.6)' width='16' height='6' viewBox='0 0 16 6' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 5L7.50386 1.28351C7.81129 1.10783 8.18871 1.10783 8.49614 1.28351L15 5' stroke='black' stroke-width='2' stroke-linecap='round'/></svg>"
            label="Варианты доставки"
            unelevated
          >
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Почта</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>UPS</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Курьер</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>

        <!-- RIGHT BLOCK  -->

        <div class="cabinet__content-column">
          <input type="text" v-model.trim="form.city" placeholder="Населённый пункт">
          <input type="text" v-model.trim="form.street" placeholder="Улица">
          <div class="cabinet__register-content">
            <input class="short" type="text" v-model.trim="form.house" placeholder="Дом">
            <input class="short" type="text" v-model.trim="form.apartment" placeholder="Квартира">
            <input class="short" type="text" v-model.trim="form.index" placeholder="Индекс">
          </div>
          <div v-if="type !== 'no-reg'" class="cabinet__submit">
            <input class="card" type="text" v-model.trim="form.region" placeholder="Регион">
            <button @click.prevent="addPhoto">Добавить фото</button>
          </div>
          <input v-else type="text" v-model.trim="form.region" placeholder="Регион">
          
          <div>
            <div class="cabinet__checkbox">
              <label >
                <input type="checkbox" class="cabinet__checkbox-input" v-model="newsletter">
                <span class="cabinet__checkbox-box"></span>
                Получать новостную рассылку
              </label>                 
            </div>
            <div class="cabinet__checkbox">
              <label >
                <input type="checkbox" class="cabinet__checkbox-input" v-model="disclaimer">
                <span class="cabinet__checkbox-box"></span>
                Я прочитал и соглашаюсь с условиями конфиденциальности и защиты информации 
              </label>                 
            </div>
             <div v-if="type === 'no-reg'" class="cabinet__checkbox">
              <label >
                <input type="checkbox" class="cabinet__checkbox-input" v-model="createAccount">
                <span class="cabinet__checkbox-box"></span>
                Создать аккаунт 
              </label>                 
            </div>
          </div>
          <div v-if="type !== 'no-reg'" class="cabinet__submit" :class="{ margin : !loginStatus}">
            <input class="card" type="text" v-model.trim="form.card" placeholder="Номер дисконтной карты">
              <button>Запомнить</button>
          </div>
          <button v-if="!!loginStatus" class="save">Сохранить изменения</button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: '',
    },
  },
  name: 'PersonalData',
  setup () {
    return {
      onItemClick () {
        // console.log('Clicked on an Item')
      }
    }
  },
  data() {
    return {
      form: {
        mail: '',
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
        card: '',
      },
      newsletter: false,
      disclaimer: false,
      createAccount: false,
    }
  },
  methods: {
    formSubmit(payload) {
      if (!this.isValid) {
        window.alert("Пожалуйста заполните все поля формы");
        return
      } else {
        this.$store.dispatch('login/updateLogin', payload)
      }
      this.$router.push('/cabinet')
    },
    addPhoto() {
      console.log('form is valid:', this.form)
    }        
  },
  computed: {
    loginStatus() {
      return this.$store.getters['login/loginStatus']
    },
    userData() {
      return this.$store.getters['login/form']
    },
    isValid() {
      if ( this.form.mail === '' ||
           this.form.password21 === '' ||
           this.form.surname === '' ||
           this.form.name === '' ||
           this.form.login === '' ||
           this.form.phone === ''
      ) {
        return false
      } 
      return true
    }
  },
  mounted() {
    if (this.loginStatus === true) {
      this.form = this.userData
    }
  }
} 
</script>

<style lang="scss" scoped>
.cabinet {
  display: flex;
  flex-direction: column;

  
  &__register {
    width: 1300px;
    padding: 20px 50px;
    display: flex;
    flex-direction: column;
    background: #f0f0f0;

    span {
      width: 100%;
      text-align: center;
      font-weight: 500;
      font-size: 24px;
      line-height: 150%;
      color: #000;
      margin-bottom: 50px;
    }
  }

  &__register-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  &__content-column {
    display: flex;
    flex-direction: column;
    width: 536px;

    input {
      width: 100%;
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

      &.invalid {
        outline:1px solid red !important;

        &::placeholder {
        color: red;
        font-weight: 300;
      }
      }
    }

    input.short {
      width: 133px;
    }

    input.card {
      width: 299px;
    }

    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #ffffff inset;
      box-shadow: 0 0 0px 1000px #ffffff inset;
      transition: background-color 5000s ease-in-out 0s;
    }
  }

  &__checkbox {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 30px;
    font-weight: normal;
    font-size: 12px;
    line-height: 100%;
    color: #9C9C9C;
    height: 20px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  &__checkbox-input {
    position: absolute;
    appearance: none;
    cursor: pointer;

    &:checked + .cabinet__checkbox-box::before,
    &:checked + .cabinet__checkbox-box::after {
      position: absolute;
      background: #9C9C9C;
      content: "";
      width: 7px;
      height: 3px;
      bottom: 6px;
      left: 2px;
      transform: rotate(45deg);
    }

    &:checked + .cabinet__checkbox-box::after {
      width: 15px;
      transform: rotate(-45deg);
      left: 6px;
      bottom: 7px;
    }
  }

  &__checkbox-box {
    position: absolute;
    width: 20px !important;
    height: 20px;
    left: 0;
    top: 0;
    background: #FFFFFF;
    border-radius: 3px;
    cursor: pointer;
  }

  &__submit {
    display: flex;
    justify-content: space-between;

    button {
      background: #525252;
      border: none;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      text-transform: uppercase;
      color: #FFFFFF;
      padding: 8px 0;
      width: 227px;
      height: 40px;

      &:hover {
        opacity: 0.7;
        cursor: pointer;
      }
    }
  }

  &__promo {
    font-weight: 300;
    font-size: 18px;
    letter-spacing: 0.05em;
    text-decoration: underline;
    margin-bottom: 7px;

    &:hover {
      cursor: pointer;
      text-decoration: none;
    }
  }
}

.margin {
  margin-top: 42px;
}

.save {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 40px;
  border: none;
  font-size: 18px;
  line-height: 22px;
  outline: none;
  color: #ababab;
  background: #ffffff;
  margin-left: auto;
  margin-right: 0;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
}

:v-deep .q-btn.q-btn-item  img  {
  transform: scale(0.2) !important;
  display: none;
}
</style>