<template>
  <section class="cart-wrapper container">
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
        <q-breadcrumbs-el label="Корзина" />
      </q-breadcrumbs>
    </div>
    <div class="cart">
      <div class="cart__header">
        <h2>Корзина</h2>
        <button @click="goTo('/catalog')">Продолжить покупки</button>
        <span>В Вашем списке желаний</span>
        <strong>5 товаров </strong>
      </div>
      <div class="cart__content">
        <div class="cart__products">
          <ul class="cart__products-list">
            <li v-for="(product, i) in productList" :key="i">
              <cart-item
                :prodName="product.name"
                :brand="product.brand"
                :sale="product.sale"
                :oldPrice="product.oldPrice"
                :newPrice="product.newPrice"
                :price="product.price"
                :article="product.article"
                :size="product.size"
                :color="product.color"
              />
            </li>
          </ul>
        </div>
        <div class="cart__order">
          <h3>ОБЗОР</h3>
          <div class="cart__order-row">
            <span>Сумма заказа:</span>
            <span>999 999 ₽</span>
          </div>
          <div class="cart__order-row">
            <span>Ваша скидка:</span>
            <span>9 999 ₽</span>
          </div>
          <div class="cart__order-row">
            <span>Стоимость доставки:</span>
            <span>999 ₽</span>
          </div>
          <div class="cart__order-row">
            <span class="cart__promo"  :class="{ open: isOpened }" @click="openPromo">У Вас есть промокод?</span>
            <div class="cart__promo-wrapper" :class="{ open: isOpened }">
              <div class="cart__promo-field">
                 <q-input dense bg-color="white" class="cart__promo-input" filled v-model="promoCode"  placeholder="Введите промокод" />
                 <button>Применить</button>
              </div>
              <span class="cart__promo-disclaimer">*Промокоды не могут быть использованы в сочетании с другими рекламными акциями или промокодами</span>
            </div>
          </div>
          <div class="cart__order-row">
            <span class="cart__total">Стоимость доставки:</span>
            <span class="cart__total">999 ₽</span>
          </div>
          <div class="cart__order-button" @click="goTo('/')">Оформить заказ</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CartItem from '../components/cart/CartItem.vue'

export default {
  name: 'CartPage',
  components: { CartItem },
  data() {
    return {
      promoCode: '',
      isOpened: false,
      productList: [
        {
          name: 'Блуза',
          brand: 'ARMANI EXCHANGE',
          sale: true,
          oldPrice: '13 400',
          newPrice: '12 400',
          article: 1000.2,
          size: 'XL',
          color: 'Белый',
        },
        {
          name: 'Блуза',
          brand: 'ARMANI EXCHANGE',
          price: '13 400',
          article: 23440.2,
          size: 'XXL',
          color: 'Бежевый',
        },
        {
          name: 'Блуза',
          brand: 'DEEP MAG',
          sale: true,
          oldPrice: '16 400',
          newPrice: '13 900',
          article: 1340.2,
          size: 'M',
          color: 'Белый',
        },
      ]
    }
  },
  methods: {
    goTo(page) {
      this.$router.push(page)
    },
    openPromo() {
      this.isOpened = !this.isOpened
    }
  }
}
</script>

<style lang="scss" scoped>
.breadcrumbs {
  margin-top: 25px;
}

.cart-wrapper {
  min-height: 50vh;
  display: flex;
  flex-direction: column;
}

.cart {
  margin-top: 60px;

  &__header {
    position: relative;
    display: flex;
    align-items: flex-end;
    padding-bottom: 20px;

    h2 {
      margin: 0;
      font-weight: bold;
      font-size: 36px;
      line-height: 100%;;
    }

    button {
      border: 2px solid #000000;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      margin: 0 20px 0 27px;
      cursor: pointer;
    }

    span {
      padding-right: 10px;
    }

    &::after {
      position: absolute;
      content: "";
      height: 4px;
      width: 105vw;
      bottom: 0;
      left: -6%;
      background: #E0E0E0;
      opacity: 0.3;
    }
  }

  &__products {
    height: 710px;
    width: 1117px;
    overflow-y: scroll;
    margin-bottom: 40px;
    margin-right: 100px;
  }

  &__content {
    display: flex;
    padding-top: 120px;
  }

  &__products-list li {
    margin-bottom: 20px;
  }

  &__order {
    width: 510px;
    background: #f3f2f3;
    padding: 50px 0 0 0;
    height: fit-content;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    font-weight: 500;

    h3 {
      width: 100%;
      margin: 0 0 40px 0;
      text-align: center;
      font-weight: 500;
      font-size: 18px;
      line-height: 150%;
      text-transform: uppercase;
    }
  }

  &__order-row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 25px;
    padding: 0 20px;
  }

  &__order-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #525252;
    color: #ffffff;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    padding: 8px 0;
    cursor: pointer;
  }

  &__promo {
    display: block;
    min-width: 100%;
    font-weight: 300;
    text-decoration: underline;
    transition: all 0.3s;

    &:hover {
      cursor: pointer;
      text-decoration: none;
    }

    &.open {
      font-weight: bold;
    }
  }


  &__promo-field {
    width: 100%;
    display: flex;
    margin-bottom: 15px;

    button {
      margin-left: 14px;
      border: none;
      background: #525252;
      color: #ffffff;
      font-weight: 700;
      text-transform: uppercase;
      width: 49%;

      &:hover {
        opacity: 0.7;
        cursor: pointer;
      }
    }
  }

  &__promo-input {
    width: 50%;
  }

  &__total {
    font-weight: 700;
  }

  &__promo-wrapper {
    position: relative;
    height: 0;
    margin-top: 16px;
    width: 100%;
    transition: all 0.3s;
    overflow: hidden;

    &.open {
      height: 170px;
    }
  }

  &__promo-disclaimer {
    display: block;
    width: 100%;
    background: #ffffff;
    padding: 5px;
    color: #ababab;
    font-weight: 400;
  }
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color: #E5E5E5;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #525252;
}

</style>