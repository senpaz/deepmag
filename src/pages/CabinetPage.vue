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
      </q-breadcrumbs>
    </div>
    <section class="cabinet">
      <div class="cabinet__header">
        <h2>Личный кабинет</h2>
      </div>
      <div class="cabinet__body">
        <personal-data title="Моя информация" />
        <div class="support">
          <h3>Написать в <br> службу поддержки</h3>
          <textarea v-model="support" placeholder="Ваше обращение" id="" cols="30" rows="10" />
          <button>Отправить</button>
          <a href="#">Информация о возврате</a>
        </div>
      </div>

      <div class="orders">
        <h3>Информация о заказах</h3>
        <ul class="orders__list">
          <li @click="goTo('/info')" v-for="(order,index) in ordersList" :key="index">
            <span>Заказ № {{ order.id }}</span>
            <span>от {{ order.date}}</span>
            <span class="price">{{ order.price}} ₽</span>
            <span>{{ order.status}}</span>
          </li>
        </ul>
      </div>
      
    </section>
  </div>
</template>

<script>
import PersonalData from '../components/common/PersonalData.vue'
export default {
   components: {
    PersonalData
  },
  data() {
    return {
      support: '',
      ordersList: [
        {
          id: '00001',
          date: '01.01.2021',
          price: '99 000',
          status: 'В пути',
        },
        {
          id: '00002',
          date: '01.01.2022',
          price: '60 000',
          status: 'В пути',
        },
        {
          id: '00003',
          date: '01.02.2022',
          price: '199 000',
          status: 'В пути',
        },
      ]
    }
  },
  computed: {
    userData() {
      return this.$store.getters['login/form']
    },
  },
  methods: {
    goTo(item) {
      this.$router.push(item)
    }
  },
}
</script>

<style lang="scss" scoped>
.cabinet-wrapper {
  margin-top: 20px;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
}

.cabinet {
  display: flex;
  flex-direction: column;

  &__body {
    width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
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
}

.support {
  width: 430px;
  height: 490px;
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  background: #f0f0f0;

  h3 {
    text-align: center;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    color: #000;
  }

  textarea {
    resize: none;
    margin-top: 15px;
    border: none;
    outline: none;
    padding: 8px 5px;
    margin-bottom: 29px;

    &::placeholder {
      font-weight: 300;
      font-size: 18px;
      line-height: 150%;
      color: #ababab;
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
    width: 100%;
    height: 40px;
    margin-bottom: 20px;

    &:hover {
      opacity: 0.7;
      cursor: pointer;
    }
  }

  a {
    color: #000;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 150%;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
}

.orders {
  width: 1300px;
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  background: #f0f0f0;
  margin-bottom: 40px;

  h3 {
    width: 100%;
    text-align: center;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    color: #000;
    margin-bottom: 50px;
  }

  &__list li {
    cursor: pointer;
    display: flex;
    background: #fff;
    padding: 25px 50px;
    justify-content: space-between;
    margin-bottom: 20px;

    & span {
      font-weight: 500;
      font-size: 18px;
      line-height: 100%;
      color: #525252;
    }

    & span.price {
      font-weight: 600;
    }
  }
}
</style>