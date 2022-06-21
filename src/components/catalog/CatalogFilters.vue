<template>
	<form class="filters">
		<h4>Сортировать по:</h4>

    <!-- // Recomended -->

    <catalog-accordion :title="typeTitle" class="mb-10">
      <div>
        <q-radio size="xs" dense class="q-py-xs" v-model="type" val="recomended" label="Рекомендуем" color="black" />
        <q-radio size="xs" dense class="q-py-xs" v-model="type" val="priceDesc" label="Цена по убыванию" color="black" />
        <q-radio size="xs" dense class="q-py-xs" v-model="type" val="priceAsc" label="Цена по возрастанию" color="black" />
      </div>
    </catalog-accordion>

    <!-- // Brand -->

    <catalog-accordion title="Бренд" class="mb-10">
      <template v-slot:brands>
        <div class="filters__brands">
          <span v-for="item in brands" :key="item" class="filters__brand-tabs" >{{ item }}</span>
        </div>
      </template>
      <div class="filters__checkboxes">
        <q-checkbox v-model="brands" val="ARMANI EXCHANGE" label="ARMANI EXCHANGE" color="white" />
        <q-checkbox v-model="brands" val="CALVIN KLEIN" label="CALVIN KLEIN" color="white" />
        <q-checkbox v-model="brands" val="DEEPMAG" label="DEEPMAG" color="white" />
        <q-checkbox v-model="brands" val="GANT" label="GANT" color="white" />
        <q-checkbox v-model="brands" val="GEOX" label="GEOX" color="white" />
        <q-checkbox v-model="brands" val="GUESS" label="GUESS" color="white" />
        <q-checkbox v-model="brands" val="TOMMY HILFIGER" label="TOMMY HILFIGER" color="white" />
      </div>
    </catalog-accordion>

    <!-- // Category -->

    <catalog-accordion title="Категория" class="mb-10">
      <div class="flex-column">
        <q-radio size="xs" dense class="q-py-xs" v-model="category" val="woman" label="Женщины" color="black"/>
        <q-radio size="xs" dense class="q-py-xs" v-model="category" val="men" label="Мужчины" color="black"/>
        <q-radio size="xs" dense class="q-py-xs" v-model="category" val="children" label="Дети" color="black" />
      </div>
    </catalog-accordion>

    <!-- // Color -->


    <catalog-accordion title="Цвет" class="mb-10">
      <div class="flex-column">
        <q-radio size="xs" dense class="q-py-xs" v-model="color" val="black" label="Черный" color="black" />
        <q-radio size="xs" dense class="q-py-xs" v-model="color" val="red" label="Красный"  color="black"/>
        <q-radio size="xs" dense class="q-py-xs" v-model="color" val="green" label="Зереный" color="black"/>
      </div>
    </catalog-accordion>

    <!-- // Size -->

    <catalog-accordion title="Размер" class="mb-10">
      <div class="filters__checkboxes">
         <q-checkbox v-model="sizes" val="XS" label="XS" color="white" />
         <q-checkbox v-model="sizes" val="S" label="S" color="white" />
         <q-checkbox v-model="sizes" val="M" label="M" color="white" />
         <q-checkbox v-model="sizes" val="L" label="L" color="white" />
         <q-checkbox v-model="sizes" val="XL" label="XL" color="white" />
      </div>
    </catalog-accordion>

    <div class="filters__sale">
      <span @click="clickSale">Со скидкой</span>
      <q-checkbox v-model="sale" val="sale" size="lg" color="white" />
    </div>

    <!-- // Price -->

    <div  class="filters__price">
      <div class="flex-between">
        <span>Цена</span>
        <div style="display: flex">
          <div>
            от:
            <q-badge outline  color="black">
              {{ prices.min }}
            </q-badge>
          </div>
          <div style="margin-left: 5px">
            до:
            <q-badge outline  color="black">
              {{ prices.max }}
            </q-badge>
          </div>
        </div>
      </div>
      <div class="range mb-20">
        <q-range
          class="filter-range"
          v-model="prices"
          :min="1000"
          :max="50000"
          color="grey-8"
        />
      </div>
      <button class="filters__button mb-20">Сбросить</button>
      <button class="filters__button mb-10">Показать все результаты</button>
    </div>
	</form>
</template>

<script>
import { ref } from 'vue'
import CatalogAccordion from './CatalogAccordion.vue'

export default {
  components: { CatalogAccordion },
  data() {
    return {
      sale: true,
    }
  },
  setup () {
    return {
      type: ref('recomended'),
      brands: ref(['ARMANI EXCHANGE']),
      category: ref('woman'),
      color: ref('black'),
      sizes: ref(['M']),
      prices: ref({
        min: 3000,
        max: 15000
      })
    }
  },
  methods: {
    clickSale() {
      this.sale = !this.sale;
    }
  },
  computed: {
    typeTitle() {
      if(this.type === 'recomended')  return 'Рекомендуем'
      if(this.type === 'priceDesc')  return 'Цена по убыванию'
      if(this.type === 'priceAsc')  return 'Цена по возрастанию'
    },
    // customBrands() {
    //   let brandList = this.brand.map(el => el.replace(/['"]+/g, ''));
    //   return brandList
    // },
  }
}
</script>

<style lang="scss" scoped>
.filters {
  width: 250px;

  h4 {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: #949494;
    margin: 0 auto 5px 0;
  }

  &__checkboxes {
    display: flex;
    flex-direction: column;
  }

  &__brands {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }

  &__brand-tabs {
    margin-right: 10px;
    line-height: 17px;
  }

  &__sale {
    display: flex;
    justify-content: space-between;
    margin: -10px -10px 20px 0;
    align-items: center;

    & span {
      display: block;
      font-size: 16px;
      cursor: pointer;
      font-weight: 500;
    }
  }

  &__price {
    display: flex;
    flex-direction: column;
  }

  &__button {
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

::v-deep .q-checkbox {
  &__bg {
    border: 2px solid #E0E0E0;
    border-radius: 3px;
  }

  &__svg {
    color: #000000;
  }
}

::v-deep .filter-range {
  .q-slider__track-container {
    height: 6px;
    border-radius: 15px;
  }

  .q-slider__thumb {
    top: 2px;
  }
}

.range {
  padding: 0 15px;
}

</style>