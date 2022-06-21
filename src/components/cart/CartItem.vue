<template>
  <div class="item">
    <div class="item__images">
      <q-carousel
        animated
        v-model="slide"
        swipeable
        control-color="black"
        navigation
        infinite
        height="330px"
      >
        <q-carousel-slide :name="1" img-src="../../img/product-cart.jpg" />
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
        <q-carousel-slide :name="3" img-src="../../img/product-cart.jpg" />
        <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
        <q-carousel-slide :name="5" img-src="../../img/product-cart.jpg" />
      </q-carousel>
    </div>
    <div class="item__description">
      <div class="item__close">
        <q-icon name="close" />
      </div>
      <div class="item__description-row">
        <span class="item__name">{{ prodName }}</span>
        <span class="item__brand">{{ brand }}</span>
      </div>
      <div class="item__description-row">
        <div class="item__quantity">
          <span class="item__text">Количество</span>
          <div class="item__counter">
            <button @click="minusItem">-</button>
            <span>{{ quantity }}</span>
            <button @click="quantity++">+</button>
          </div>
        </div>
        <div v-if="sale" class="item__old-price">{{ oldPrice }}</div>
        <div v-else class="item__price">{{ price }}</div>
      </div>
       <div class="item__description-row">
        <div class="item__quantity">
          <span class="item__text">Артикул:</span>
          <span class="item__text">{{ article }}</span>
        </div>
        <div>
          <span v-if="sale" class="item__text">Цена с учётом скидки:</span>
          <span v-if="sale" class="item__new-price">12 400 ₽</span>
        </div>
      </div>
      <div class="item__description-row">
        <div class="item__quantity">
          <span class="item__text">Размер:</span>
          <span class="item__text">{{ size }}</span>
        </div>
      </div>
      <div class="item__description-row">
        <div class="item__quantity">
          <span class="item__text">Цвет:</span>
          <span class="item__text">{{ color }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  	props: {
		prodName: {
			type: String,
    	required: true,
		},
    brand: {
			type: String,
    	required: true,
		},
    oldPrice: {
      type: String,
    	required: false,
      default: '',
    },
    newPrice: {
      type: String,
    	required: false,
      default: '',
    },
    sale: {
      type: Boolean,
      required: false,
      default: false,
    },
    price: {
      type: String,
    	required: false,
      default: '',
    },
    article: {
      type: Number,
    	required: true,
    },
    size: {
			type: String,
    	required: true,
		},
    color: {
			type: String,
    	required: true,
		},
  },
  setup () {
    return {
      slide: ref(1)
    }
  },
  data() {
    return {
      quantity: 1,
    }
  },
  methods: {
    minusItem() {
      if(this.quantity >= 1) {
        return this.quantity--
      } return
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  width: 1069px;
  border-bottom: 2px solid #e5e5e5;
  padding-bottom: 20px;

  &__images {
    width: 428px;
    height: 330px;
  }

  &__description {
    width: 641px;
    display: flex;
    flex-direction: column;
    padding-left: 15px;
  }

  &__description-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
  }

  &__close {
    display: flex;
    justify-content: right;
    font-size: 3em;
    color: #525252;
    cursor: pointer;
    margin-top: -7px;
    margin-bottom: 40px;
  }

  &__name {
    font-weight: bold;
    font-size: 24px;
    line-height: 100%;
  }

  &__brand {
    font-size: 20px;
  }

  &__quantity {
    display: flex;
    align-items: center;
    justify-content: space-between;

    
  }

  &__counter {
    display: flex;
    border: 1px solid #E5E5E5;
    height: 27px;

    button {
      border: none;
      background: #ffffff;
      padding: 0 14px;
      cursor: pointer;
    }

    span {
      display: flex;
      justify-content: center;
      min-width: 24px;
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
      }
  }

  &__price {
    font-weight: bold;
    font-size: 24px;
    line-height: 100%;
    color: #000000;
  }

  &__old-price {
    font-weight: bold;
    font-size: 24px;
    line-height: 100%;
    text-decoration-line: line-through;
    color: #C4C4C4;
  }

  &__new-price {
    font-weight: 900;
    font-size: 24px;
    line-height: 100%;
    color: #DA251C;
  }

  &__text {
    justify-content: left;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    min-width: 115px;
    margin-right: 15px;
  }
}

::v-deep .q-carousel__navigation {
  & .q-carousel__navigation-icon--active {
    display: block;

    span.q-btn__content {
      background: transparent !important;
      outline: 2px solid #000000;
      border-radius: 50%;
      width: 10px;
      height: 10px;
    }

    i {
      visibility: hidden;
    }
  }

  .q-btn {
    margin: 0px 15px;
    font-size: 8px !important;
  }
}


</style>