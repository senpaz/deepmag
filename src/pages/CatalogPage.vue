<template>
  <div class="catalog-wrapper container">
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
        <q-breadcrumbs-el label="Женщинам" />
        <q-breadcrumbs-el label="Обувь" />
        <q-breadcrumbs-el label="Балетки" />
      </q-breadcrumbs>
    </div>
    <h2 class="page-title">БАЛЕТКИ</h2>
    <ul class="tabs">
      <li class="tabs__item">ARMANI EXCHANGE</li>
      <li class="tabs__item tabs__item--sizes">XL</li>
      <li class="tabs__item">ARMANI EXCHANGE</li>
    </ul>
    <div class="catalog">
      <div class="catalog__filters">
        <h3>ФИЛЬТР</h3>
        <div class="catalog__filters-content" :class="{ 'closed' : filtersIsClosed }">
          <catalog-filters />
        </div>
        <button v-if="!filtersIsClosed" class="catalog__filters-button mb-20" @click="toggleFilters">Закрыть</button>
        <button v-else class="catalog__filters-button mb-20" @click="toggleFilters">Открыть</button>
      </div>
      <div class="catalog__cards">
        <div class="catalog__toggle">
          <ul class="catalog__toggle-list">
            <li @click="changeCardType(1)">
              <img v-if="cardsType === 1" src="../img/grid-2-active.png" alt="">
              <img v-else src="../img/grid-2-unactive.png" alt="">
            </li>
            <li @click="changeCardType(2)">
              <img v-if="cardsType === 2" src="../img/grid-3-active.png" alt="">
              <img v-else src="../img/grid-3-unactive.png" alt="">
            </li>
            <li @click="changeCardType(3)">
              <img v-if="cardsType === 3" src="../img/grid-4-active.png" alt="">
              <img v-else src="../img/grid-4-unactive.png" alt="">
            </li>
          </ul>
          
        </div>
        <div class="catalog__cards-content">
          <div v-if="cardsType === 1" class="flex-wrap">
            <catalog-big-cards
              :key="index"
              v-for="(card, index) in productList"
              :image="card.image"
              :name="card.name"
              :brand="card.brand"
              :price="card.price"
              :oldPrice="card.oldPrice"
              :sale="card.sale"
              :favorite="card.favorite"
            />
          </div>
          <div v-if="cardsType === 2" class="flex-between flex-wrap">
            <catalog-middle-cards
              :key="index"
              v-for="(card, index) in productList"
              :image="card.image"
              :name="card.name"
              :brand="card.brand"
              :price="card.price"
              :oldPrice="card.oldPrice"
              :sale="card.sale"
              :favorite="card.favorite"
            />
          </div>
          <div v-if="cardsType === 3" class="flex-wrap">
            <catalog-small-cards
              :key="index"
              v-for="(card, index) in productList"
              :image="card.image"
              :name="card.name"
              :brand="card.brand"
              :price="card.price"
              :oldPrice="card.oldPrice"
              :sale="card.sale"
              :favorite="card.favorite"
            />
          </div>
        </div>
      </div>
      
    </div>
    
  </div>
  
</template>

<script>
import CatalogFilters from '../components/catalog/CatalogFilters.vue'
import CatalogBigCards from '../components/catalog/CatalogBigCards.vue'
import CatalogMiddleCards from '../components/catalog/CatalogMiddleCards.vue'
import CatalogSmallCards from '../components/catalog/CatalogSmallCard.vue'
export default {
  name: 'CatalogPage',
  components: { CatalogFilters, CatalogBigCards, CatalogMiddleCards, CatalogSmallCards },
  data() {
    return {
      filtersIsClosed: false,
      cardsType: 1,
      productList: [
        {
          image: require('src/img/prodBig.jpg'),
          name: 'Балетки',
          brand: 'GANT',
          price: '3 400',
        },
        {
          image: require('src/img/prodBig.jpg'),
          name: 'Балетки',
          brand: 'LOVE REPUBLIC',
          price: '3 400',
          favorite: true,
        },
        {
          image: require('src/img/prodBig.jpg'),
          name: 'Балетки',
          brand: 'DEEPMAG',
          price: '2 400',
          oldPrice: '3 400',
          sale: true,
        },
        {
          image: require('src/img/prodBig.jpg'),
          name: 'Балетки',
          brand: 'DEEPMAG',
          price: '2 400',
          oldPrice: '3 400',
          sale: true,
        },
        {
          image: require('src/img/prodBig.jpg'),
          name: 'Балетки',
          brand: 'GANT',
          price: '3 400',
        },
        {
          image: require('src/img/prodBig.jpg'),
          name: 'Балетки',
          brand: 'LOVE REPUBLIC',
          price: '3 400',
          favorite: true,
        },
        {
          image: require('src/img/prodBig.jpg'),
          name: 'Балетки',
          brand: 'DEEPMAG',
          price: '2 400',
          oldPrice: '3 400',
          sale: true,
        },
        {
          image: require('src/img/prodBig.jpg'),
          name: 'Балетки',
          brand: 'DEEPMAG',
          price: '2 400',
          oldPrice: '3 400',
          sale: true,
        },
      ]
    }
  },
  methods: {
    toggleFilters() {
      this.filtersIsClosed = !this.filtersIsClosed
    },
    changeCardType(type) {
      this.cardsType = type
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 600px;
  margin-top: 20px;
}
.breadcrumbs {
  position: absolute;
  left: 0;
  top: 0;
}

.catalog {
  display: flex;
  
  &__filters {
    width: 250px;
    overflow: hidden;

    h3 {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      display: flex;
      align-items: left;
      width: 100%;
      color: #525252;
      margin: 0 auto 20px 0;
      background: #ffffff;
      position: relative;
      z-index: 3;
    }

    &-button {
      width: 100%;
      border: none;
      outline: none;
      height: 40px;
      font-size: 18px;
      line-height: 22px;
      background-color: #E5E5E5;

      &:hover {
        cursor: pointer;
        opacity: 0.7;
        transition: 0.3s;
      }
    }
  }

  &__toggle {
    position: absolute;
    top: 70px;
    right: 10px;
  }

  &__toggle-list {
    width: 130px;
    display: flex;
    justify-content: space-between;

    & li {
      cursor: pointer;
    }

    & li img {
      height: 20px;
    }
  }

  &__filters-content {
    transition: 0.3s;
    transform: translateY(0);
    overflow: hidden;
  
    &.closed {
      height: 1px;
      overflow: hidden;
      transition: 0.3s;
      transform: translateY(-100%);
    }
  }

  &__cards-content {
    width: 1500px;
    padding-left: 20px;
    margin-bottom: 40px;
  }
}
.page-title {
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.1em;
  margin: 0 auto 33px auto;
}

.tabs {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: center;

  &__item {
    width: 210px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e5e5e5;
    margin: 15px;

    &--sizes {
      justify-content: left;
      padding-left: 20px;
    }
  }
}

.flex-wrap {
  display: flex;
  flex-wrap: wrap;
}
</style>