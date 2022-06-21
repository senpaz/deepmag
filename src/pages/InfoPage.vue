<template>
  <div class="info-wrapper container">
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
        <q-breadcrumbs-el label="Информация о доставке" />
      </q-breadcrumbs>
    </div>
    <section class="info">
      <div class="info__header">
        <h2>Информация о доставке</h2>
       </div>
      <div class="info__body">

        <!-- LEFT BLOCK  -->

        <div class="info__left">
          <form class="info__login" @submit="formSubmit">
            <span>Для зарегистрированных пользователей</span>
            <input type="email" v-model.trim="mail" placeholder="E-mail">
            <input type="password" v-model.trim="password" placeholder="Пароль">
            <a href="#">Восстановить пароль</a>
            <button class="button">Войти в личный кабинет</button>
          </form>
          <div class="info__login">
            <span>Комментарий к заказу</span>
            <textarea v-model="comment" placeholder="Оставьте Ваш комментарий" name="" id="" cols="30" rows="10" />
            <div class="space-between">
              <a href="#" class="small">Информация о возврате</a>
              <a href="#" class="small">Служба поддержки</a>
            </div>
          </div>
        </div>

        <!-- RIGHT BLOCK  -->

        <div class="info__right">
          <personal-data
            isRegistered="true"
            title="Заказ без регистрации"
            type="no-reg"
          />
          <div class="info__down">
            <div class="info__slider">
              <div class="info__carousel">
                <q-carousel
                  v-model="slide"
                  transition-prev="slide-right"
                  transition-next="slide-left"
                  swipeable
                  infinite
                  animated
                  style="width:800px; padding: 0"
                  control-color="black"
                  arrows
                >
                <q-carousel-slide :name="1" class="no-wrap">
                  <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
                    <order-card />
                    <order-card />
                    <order-card />
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="2" class="no-wrap">
                  <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
                    <order-card />
                    <order-card />
                    <order-card />
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="3" class="no-wrap">
                  <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
                    <order-card />
                    <order-card />
                    <order-card />
                  </div>
                </q-carousel-slide>
              </q-carousel>
              </div>

            </div>
            <div class="info__price">
              <div class="row justify-between">
                <span>Сумма:</span>
                <span>999 990 ₽</span>
              </div>
              <div class="row justify-between">
                <span>Доставка:</span>
                <span>199 ₽</span>
              </div>
              <div class="row justify-between">
                <span>Ваша скидка:</span>
                <span class="text-red">9 999 ₽</span>
              </div>
              <div class="row justify-between">
                <span>Ваша скидка:</span>
                <span>999 999 ₽</span>
              </div>
              <button>Купить</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import PersonalData from '../components/common/PersonalData.vue'
import OrderCard from '../components/common/OrderCard.vue'

export default {
  components: {
    PersonalData,
    OrderCard
  },
  setup () {
    return {
      slide: ref(1)
    }
  },
  data() {
    return {
      mail: '',
      password: '',
      comment: '',
    }
  },
  methods: {
    formSubmit() {
      console.log('submit')
    }
  }
}
</script>

<style lang="scss" scoped>
.info-wrapper {
  margin-top: 20px;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
}

.info {
  display: flex;
  flex-direction: column;

  &__body {
    width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }

  &__header {
    position: relative;
    min-height: 110px;

    h2 {
      margin-top: 40px;
      margin-bottom: 0;
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

  &__left {
    width: 429px;
  }

  &__right {
    margin-left: 15px;
    margin-right: auto;
    display: flex;
    flex-direction: column;
  }

  &__login {
    width: 430px;
    padding: 20px 50px;
    display: flex;
    flex-direction: column;
    background: #f0f0f0;
    margin-right: 15px;
    margin-bottom: 15px;
    max-height: 300px;

    span {
      width: 100%;
      text-align: center;
      font-weight: 500;
      font-size: 24px;
      line-height: 150%;
      color: #000;
      margin-bottom: 20px;
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

    a.small {
      font-weight: 300;
      font-size: 13px;
      line-height: 150%;
      color: #000;
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

    textarea {
      border: none;
      padding: 7px 5px;
      resize: none;
      margin-bottom: 15px;
    }

    textarea::placeholder {
      color: #ababab;
    }
  }

  &__slider {
    display: flex;
    width: 794px;
    height: 420px;
    background: #f0f0f0;
    padding: 18px;
  }

  &__carousel {
    width: 100%;
    background: transparent;
    display: flex;
    justify-content: center;

    div {
      background: transparent;
    }
  }

  &__price {
    width: 506px;
    height: 420px;
    background: #f0f0f0;
    margin-left: 15px;
    padding: 30px;

    div span {
      color: #000;
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      margin-bottom: 20px;
    }

    button {
      width: 100%;
      height: 60px;
      background: #525252;
      color: #ffffff;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      border: none;
      outline: none;
      margin-top: 115px;

      &:hover {
        cursor: pointer;
        opacity: 0.7;
      }
    }
  }

  &__down {
    display: flex;
    margin-top: 15px;
  }
}

.grey {
  background: #f0f0f0;

  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    text-align: center;
  }
}
</style>
