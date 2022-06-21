<template>
  <div class="favorites-wrapper container">
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
        <q-breadcrumbs-el label="Избранное" />
      </q-breadcrumbs>
    </div>
    <section class="favorites">
      <div class="favorites__header">
        <h2>Избранное</h2>
        <button  @click="goTo('/catalog')">Продолжить покупки</button>
      </div>
      <div class="favorites__body">
        <ul class="favorites__list">
          <li v-for="(item,index) in favoritesList" :key="index">
            <product-card
              :imgageUrl="item.imgageUrl"
              :prodTitle="item.prodTitle"
              :prodMark="item.prodMark"
              :isFavorite="item.isFavorite"
              :isSale="item.sale"
              :isNew="item.new"
            />
            <div class="favorites__size-wrapper">
              <catalog-accordion :title="mapSizes[item.size]" :sizes="true" class="mt-27">
                <ul class="favorites__size">
                  <li :class="{ 'active' : item.size === 1 }" @click="item.size = 1">XS</li>
                  <li :class="{ 'active' : item.size === 2 }" @click="item.size = 2">S</li>
                  <li :class="{ 'active' : item.size === 3 }" @click="item.size = 3">M</li>
                  <li :class="{ 'active' : item.size === 4 }" @click="item.size = 4">L</li>
                  <li :class="{ 'active' : item.size === 5 }" @click="item.size = 5">XL</li>
                </ul>
              </catalog-accordion>
            </div>
            <button :class="{ 'disabled' : item.size === 0 }" @click="handleAddToCart(item)" >В корзину</button>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import ProductCard from '../components/common/ProductCard.vue'
import CatalogAccordion from '../components/catalog/CatalogAccordion.vue'

export default {
  components: { ProductCard, CatalogAccordion },
  data() {
    return {
      active: null,
      favoritesList: [
        {
          imgageUrl: require('src/img/card1.jpg'),
          prodTitle: 'Юбка миди',
          prodMark: 'LOVE REPUBLIC',
          sale: true,
          size: 0,
        },
        {
          imgageUrl: require('src/img/card1.jpg'),
          prodTitle: 'Юбка миди',
          prodMark: 'GANT',
          isFavorite: true,
          new: true,
          size: 0,
        },
        {
          imgageUrl: require('src/img/card1.jpg'),
          prodTitle: 'Юбка миди',
          prodMark: 'CALVIN KLEIN',
          sale: true,
          size: 0,
        },
        {
          imgageUrl: require('src/img/card1.jpg'),
          prodTitle: 'Юбка миди',
          prodMark: 'HIM',
          new: true,
          size: 0,
        },
      ],
      mapSizes: [
        'Выбрать размер',
        'XS',
        'S',
        'M',
        'L',
        'XL'
      ]
    }
  },
  methods: {
    goTo(page) {
      this.$router.push(page)
    },
    handleAddToCart(item) {
      if(item.size === 0) {
        return
      } else {
        this.$router.push('/cart')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.favorites-wrapper {
  margin-top: 20px;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
}

.favorites {
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  &__header {
    display: flex;
    align-items: center;
    position: relative;
    min-height: 110px;
    margin-bottom: 100px;

    h2 {
      margin-bottom: 0;
      font-weight: bold;
      font-size: 36px;
      line-height: 100%;
    }

    button {
      border: 2px solid #000000;
      font-weight: bold;
      height: 40px;
      font-size: 18px;
      line-height: 24px;
      margin: 0 20px 0 27px;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
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

  &__body {
    margin-bottom: 40px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;

    li {
      position: relative;
      margin-bottom: 15px;
      margin-right: 15px;

      button {
        width: 100%;
        height: 40px;
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        margin-top: 85px;
        border: 2px solid #525252;
      }

      button:hover {
        cursor: pointer;
        opacity: 0.7;
      }

      button.disabled {
        border: none;
      }
    }
  }

  &__size {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;

    li {
      cursor: pointer;
      text-align: center;
      padding: 0 10px;
      border: 1px solid #000000;
      min-width: 50px;
      margin: 15px;
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

  &__size-wrapper {
    width: 100%;
    position: absolute;
    top: 600px
  }
}

.mt-27 {
  margin-top: 27px;
}
</style>