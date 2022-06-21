<template>
    <div class="product-wrapper container">
      <section class="product">
        <div class="product__photos">
          <img class="product__photo-1" src="../img/product-new.jpg" />
          <div  class="product__photo-2">
            <img src="../img/product-new.jpg" />
          </div>
          <div  class="product__photo-2 half">
            <img src="../img/product-new.jpg" />
          </div>
          <div  class="product__photo-2 half">
            <img src="../img/product-new.jpg" />
          </div>
        </div>
        <div class="product__description">
          <div class="product__description-top">
            <span>БЛУЗА</span>
            <h3>ARMANI EXCHANGE</h3>
          </div>
          <span class="product__description-sale">SALE</span>
          <div class="product__description-price">
            <span>3 400 ₽</span>
            <span class="old-price">4 400 ₽</span>
          </div>
          <ul class="product__description-size">
            <li :class="{ 'active' : active === 1 }" @click="chooseSize(1)">XS</li>
            <li :class="{ 'active' : active === 2 }" @click="chooseSize(2)">S</li>
            <li :class="{ 'active' : active === 3 }" @click="chooseSize(3)">M</li>
            <li :class="{ 'active' : active === 4 }" @click="chooseSize(4)">L</li>
            <li :class="{ 'active' : active === 5 }" @click="chooseSize(5)">XL</li>
          </ul>
          <button class="product__description-button">Таблица размеров</button>
          <div class="product__description-like">
            <button class="product__description-button dark">Добавить в корзину</button>
            <div class="product__description-like-icon" @click="toggleFavorite">
              <div v-if="!isFavorite">
                <img src="../img/heart-big.png" alt="">
              </div>
              <div v-else>
                <svg width="57" height="48" viewBox="0 0 57 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28.9332 48C28.1349 48 27.3652 47.7217 26.7654 47.2163C24.5 45.3105 22.3159 43.5195 20.3889 41.9397L20.379 41.9315C14.7295 37.2995 9.85085 33.2994 6.4564 29.3589C2.66192 24.9537 0.894531 20.777 0.894531 16.2142C0.894531 11.781 2.47453 7.69115 5.34317 4.69742C8.24604 1.6683 12.2292 0 16.5602 0C19.7972 0 22.7617 0.984598 25.371 2.92622C26.6879 3.90629 27.8816 5.10575 28.9332 6.50485C29.9853 5.10575 31.1785 3.90629 32.4958 2.92622C35.1052 0.984598 38.0696 0 41.3067 0C45.6372 0 49.6208 1.6683 52.5237 4.69742C55.3923 7.69115 56.9719 11.781 56.9719 16.2142C56.9719 20.777 55.2049 24.9537 51.4104 29.3585C48.016 33.2994 43.1378 37.2991 37.4891 41.9306C35.5587 43.5129 33.3711 45.3068 31.1006 47.2171C30.5012 47.7217 29.7311 48 28.9332 48Z" fill="#DA251C"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="product__description-accordion" :class="{ open: !isOpen }" @click="toggleAccordion">Описание</div>
          <div class="product__description-text" :class="{ open: isOpen }">
            Цена. Каждый размер это кликабельная кнопка (размеры подгружаются из 1с, исходя из товарных остатков)+ ссылка
            на единую таблицу размеров сайта. Кнопка «Положить в корзину» и/или избранное. При нажатии на положить
            в корзину карточка товара отображается в верхней части экрана у корзины.
          </div>
          <div class="product__description-data">
            <span class="title">Состав:</span>
            <span class="structure">Хлопок 50%, полиэстр 50%</span>
            <div>
              <span>Артикул:</span>
              <span>00000.0</span>
            </div>
            <div>
              <span>Производитель:</span>
              <span>Китай</span>
            </div>
            <div>
              <span>Цвет:</span>
              <span>Белый</span>
            </div>
            <div>
              <span>Пол:</span>
              <span>Женский</span>
            </div>
          </div>
        </div>
      </section>
      <section class="addition">
        <h3>С этим товаром покупают:</h3>
        <div>
          <ul class="addition__list">
            <li v-for="item in wearList" :key="item">
              <product-card
                :imgageUrl="item.imgageUrl"
                :prodTitle="item.prodTitle"
                :prodMark="item.prodMark"
                :isFavorite="item.isFavorite"
                :isNew="item.new"
               />
            </li>
          </ul>
        </div>
      </section>
      <section class="recent">
        <h3>Вы недавно смотрели:</h3>
        <ul class="recent__list">
          <li v-for="item in recentList" :key="item">
            <product-card
              :imgageUrl="item.imgageUrl"
              :prodTitle="item.prodTitle"
              :prodMark="item.prodMark"
              :isFavorite="item.isFavorite"
              :isNew="item.new"
              :isTiny="true"
              />
          </li>
        </ul>
      </section>
    </div>
</template>

<script>
import ProductCard from '../components/common/ProductCard.vue'

export default {
  components: { ProductCard },
  data() {
    return {
      active: 1,
      isOpen: true,
      isFavorite: false,
      wearList: [
        {
          imgageUrl: require('../img/card2.jpg'),
          prodTitle: 'Юбка миди',
          prodMark: 'GANT',
          isFavorite: true,
          new: true
        },
        {
          imgageUrl: require('../img/card2.jpg'),
          prodTitle: 'Юбка миди',
          prodMark: 'GANT',
          isFavorite: true,
          new: true
        },
        {
          imgageUrl: require('../img/card2.jpg'),
          prodTitle: 'Юбка миди',
          prodMark: 'GANT',
          isFavorite: true,
          new: true
        },
        {
          imgageUrl: require('../img/card2.jpg'),
          prodTitle: 'Юбка миди',
          prodMark: 'GANT',
          isFavorite: true,
          new: true
        },
        {
          imgageUrl: require('../img/card2.jpg'),
          prodTitle: 'Юбка миди',
          prodMark: 'GANT',
          isFavorite: true,
          new: true
        },
      ],
      recentList: [
        {
          imgageUrl: require('../img/wom-nav.jpg'),
          prodTitle: 'Юбка миди',
          prodMark: 'GANT',
          isFavorite: false,
          new: true
        },
         {
          imgageUrl: require('../img/wom-nav.jpg'),
          prodTitle: 'Юбка миди',
          prodMark: 'GANT',
          isFavorite: true,
          new: true
        },
         {
          imgageUrl: require('../img/wom-nav.jpg'),
          prodTitle: 'Юбка миди',
          prodMark: 'GANT',
          isFavorite: false,
          new: true
        },
         {
          imgageUrl: require('../img/wom-nav.jpg'),
          prodTitle: 'Юбка миди',
          prodMark: 'GANT',
          isFavorite: false,
          new: true
        },
         {
          imgageUrl: require('../img/wom-nav.jpg'),
          prodTitle: 'Юбка миди',
          prodMark: 'GANT',
          isFavorite: true,
          new: true
        },
         {
          imgageUrl: require('../img/wom-nav.jpg'),
          prodTitle: 'Юбка миди',
          prodMark: 'GANT',
          isFavorite: true,
          new: true
        },
      ],
    }
  },
  methods: {
    chooseSize(item) {
      this.active = item
    },
    toggleAccordion() {
      this.isOpen = !this.isOpen
    },
    toggleFavorite() {
      this.isFavorite = !this.isFavorite
    }
  }
}
</script>

<style lang="scss" scoped>
.product-wrapper {
  margin-top: 20px;
  flex-direction: column;
}

.product {
  width: 100%;
  display: flex;
  margin-bottom: 50px;

  &__photos {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 873px;
  }

  &__photo-1 {
    width: 282px;
    height: 404px;
  }

   &__photo-2 {
    width: 577px;
    height: 404px;
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      object-fit: cover;
      width: 100%;
    }

    &.half {
      margin-top: 12px;
      width: 429px;
      height: 442px;
    }
  }

  &__description {
    width: 873px;
    padding: 20px 15px;
  }

  &__description-top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    span {
      font-weight: bold;
      font-size: 48px;
      line-height: 100%;
    }
  }

  &__description-sale {
    font-weight: 900;
    font-size: 36px;
    line-height: 47px;
    color: #6E0F17;
  }

  &__description-price {
    display: flex;
    margin-top: 20px;
    align-items: center;
    margin-bottom: 20px;

    span {
      font-weight: bold;
      font-size: 48px;
      line-height: 100%;
    }

    span.old-price {
      font-weight: bold;
      font-size: 36px;
      line-height: 100%;
      display: flex;
      align-items: center;
      text-decoration-line: line-through;
      color: #C4C4C4;
      margin-left: 32px;
    }
  }

  &__description-size {
    display: flex;
    margin-bottom: 20px;

    li {
      cursor: pointer;
      text-align: center;
      padding: 0 10px;
      border: 1px solid #000000;
      min-width: 50px;
      margin-right: 30px;
      font-size: 24px;
      line-height: 29px;
      background: #f0f0f0;
    }

    li.active {
      position: relative;
      background: #ffffff;
      z-index: 30;

      &::before {
        position: absolute;
        content: "";
        background: #ffffff;
        bottom: -4px;
        left: 3px;
        z-index: 2;
        width: 50px;
        height: 3px;
        border-left: 1px solid #000000;
        border-bottom: 1px solid #000000;
      }

      &:after {
        position: absolute;
        content: "";
        background: #ffffff;
        top: 3px;
        right: -4px;
        z-index: 2;
        width: 3px;
        height: 30px;
        border-right: 1px solid #000000;
        border-top: 1px solid #000000;
        border-bottom: 1px solid #000000;
      }
    }
  }

  &__description-button {
    width: 290px;
    height: 40px;
    background: #F0F0F0;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    border: none;
    margin-bottom: 20px;
    text-transform: uppercase;

    &:hover {
      opacity: 0.7;
      cursor: pointer;
    }

    &.dark {
      background: #525252;
      color: #ffffff;
      margin-right: 35px;
    }
  }

  &__description-like {
    display: flex;
  }

  &__description-like-icon {
    transform: scale(0.75);
    margin-top: -5px;
  }

  &__description-heart {
    cursor: pointer;
    font-size: 3em;
  }

  &__description-accordion {
    cursor: pointer;
    position: relative;
    font-size: 24px;
    line-height: 29px;
    color: #000;
    margin-bottom: 10px;
    transition: all 0.3s;

    &::after {
      position: absolute;
      content: "";
      width: 16px;
      height: 6px;
      left: 145px;
      top: 13px;
      background-image: url('../img/up.svg');
      transform: rotate(180deg);
      background-size: contain;
      background-repeat: no-repeat;
      transition: 0.3s;
    }

    &.open::after {
      transform: rotate(0deg);
    }
  }

  &__description-text {
    color: #525252;
    font-size: 18px;
    line-height: 170%;
    height: 0;
    overflow: hidden;
    transition: 0.3s;
    margin-bottom: 10px;

    &.open {
      height: 130px;
    }
  }

  &__description-data {
    width: 375px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    span.title {
      font-size: 24px;
      line-height: 170%;
    }

    span.structure {
      font-size: 18px;
      line-height: 170%;
      color: #525252;
    }

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      font-size: 18px;
      line-height: 170%;
      margin: 7px 0;
    }
  }
}

.addition {
  h3 {
    font-weight: bold;
    font-size: 48px;
    line-height: 170%;
    color: #000000;
    margin-bottom: 0;
  }

  &__list {
    display: flex;
    margin-left: -50px;
    margin-top: -30px;

    li {
      width: 337px;
      transform: scale(0.79);
      margin-left: 17px;
    }
  }
}

.recent {
  width: 100%;
  margin-bottom: 65px;

  h3 {
    font-weight: bold;
    font-size: 48px;
    line-height: 170%;
    color: #000000;
    margin-bottom: 20px;
  }

  &__list {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
}
</style>