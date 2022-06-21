<template>
  <div class="card" :class="{ tiny: isTiny }" @mouseenter="showDescr" @mouseleave="hideDescr">
    <q-img
      :src="imgageUrl"
      spinner-color="white"
      @click="goTo"
    />
    <div v-if="!favorite" class="card__like" @click="toggleFavorite">
        <q-icon name="bi-heart" style="font-size: 25px" />
    </div>
    <div v-else class="card__like" @click="toggleFavorite">
        <q-icon name="bi-heart-fill" style="font-size: 25px; color: #da251c" />
    </div>
    <div class="card__descr" :class="{ 'hovered' : isHovered,  tiny: isTiny }" @click="goTo">
      <div class="card__descr-top" :class="{ tiny: isTiny }">
        <span>{{ prodTitle }}</span>
        <span class="card__descr-top--right">{{ prodMark }}</span>
      </div>
      <div class="card__descr-bottom" :class="{ tiny: isTiny }">
        <span v-if="isSale" class="card__descr-bottom--old">5 400 ₽</span>
        <span class="card__descr-bottom--left">3 400 ₽</span>
        <span class="card__descr-bottom--right text-montserrat">Подробнее
          <img src="../../img/arrow-long.png" alt="">
        </span>
      </div>

      <div class="card__descr-extened">
        <span>
          Описание товара в 3 строки Описание товара в 3 строки Описание товара в 3 строки Описание товара в 3 строки
        </span>
        <button @click="goTo">Выбрать размер</button>
      </div>
    </div>
    <div v-if="isSale" class="card__descr-sale">
      sale
    </div>
    <div v-if="isNew" class="card__descr-new">
      new
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgageUrl: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: false
    },
    height: {
      type: String,
      required: false
    },
    isFavorite: {
      type: Boolean,
      default: false,
      required: false
    },
    prodTitle: {
      type: String,
      required: true
    },
    prodMark: {
      type: String,
      required: true
    },
    isSale: {
      type: Boolean,
      default: false,
      required: false
    },
    isNew: {
      type: Boolean,
      default: false,
      required: false
    },
    isTiny: {
      type: Boolean,
      default: false,
      required: false
    },
  },

  data() {
    return {
      isHovered: false,
      favorite: this.isFavorite
    }
  },
  methods: {
    showDescr() {
      this.isHovered = true
    },
    hideDescr() {
      this.isHovered = false
    },
    toggleFavorite() {
      this.favorite = !this.favorite
    },
    goTo() {
      this.$router.push('/product')
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  height: 600px;
  width: 424px;

  &.tiny {
    width: 278px;
    height: 480px;

  &.tiny .q-img {
    height: 480px;
  }
  }

  @media (max-width: 1760px) {
    height: 480px;
    width: 339px;
  }

  @media (max-width: 1440px) {
    height: 333px;
    width: 235px;
  }

  @media (max-width: 1023px) {
    height: 442px;
    width: 305px;
  }

  &__like {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 33px;
    top: 20px;
    right: 20px;
  }

  &__descr {
    position: absolute;
    width: 100%;
    height: 110px;
    background: rgba(82, 82, 82, 0.9);
    bottom: 0;
    left: 0;
    transition: 0.3s;

    &.tiny {
      height: 70px;
    }

    @media (max-width: 1760px) {
      height: 90px;
    }

    @media (max-width: 1440px) {
      height: 100px;
    }
  }

  &__descr-top {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    font-size: 24px;

    &.tiny span {
      font-size: 14px;
    }

    @media (max-width: 1760px) {
      font-size: 18px;
      padding: 5px;
    }

    @media (max-width: 1440px) {
      flex-direction: column;
      font-size: 15px;
      line-height: 25px;
      padding: 5px;
    }

    span {
      color: #ffffff;
      font-weight: bold;

      @media (max-width: 1440px) {
        font-weight: 600;
      }

      @media (max-width: 767px) {
        text-align: left;
      }

      &--right {
        text-transform: uppercase;
      }
    }
  }

  &__descr-bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;

    &.tiny {
      height: 20px;
    }

    &.tiny span.card__descr-bottom--left {
      font-size: 18px;
    }

    &.tiny span.card__descr-bottom--right {
      font-size: 14px;

      img {
        height: 7px;
        width: 39px;
      }
    }

    &--left {
      font-size: 36px;
      width: 50%;
      line-height: 44px;
      display: flex;
      justify-content: left;
      align-items: center;
      color: #FFFFFF;
      font-weight: bold;

      @media (max-width: 1760px) {
        font-size: 28px;
      }

      @media (max-width: 1440px) {
        width: 100%;
        line-height: 32px;
      }

    }

    &--old {
      white-space: nowrap;
      color: #ffffff;
      font-weight: 500;
      font-size: 14px;
      line-height: 12px;
      display: none;
      align-items: center;
      text-decoration-line: line-through;
      margin-right: 10px;

      @media (max-width: 1440px) {
        display: flex;
      }
    }

    &--right {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 18px;
      line-height: 22px;
      width: 50%;
      color: #FFFFFF;

      @media (max-width: 1760px) {
        font-size: 16px;
      }

      @media (max-width: 1440px) {
        display: none;
      }

      img {
        width: 70px;
        height: 8px;

        @media (max-width: 1760px) {
          width: 50px;
        }
      }
    }
  }

  &__descr-extened {
    span {
      color: #ffffff;
      display: block;
      padding: 10px;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0.05em;
      overflow: hidden;

      @media (max-width: 1760px) {
        font-size: 16px;
        line-height: 19px;
      }
    }

    button {
      background: #ffffff;
      border: none;
      outline: none;
      margin-left: 10px;
      cursor: pointer;
    }
  }

  &__descr-sale,
  &__descr-new {
    display: none;
    position: absolute;
    width: 70px;
    height: 20px;
    align-items: center;
    justify-content: center;
    bottom: 100px;
    left: 0;
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
    background-image: url("../../img/red-rectangle.png");
    background-repeat: no-repeat;
    background-size: contain;

    @media (max-width: 1440px) {
      display: flex;
    }
  }

  &__descr-new {
    background-image: url("../../img/green-rectangle.png");
  }
}

.hovered {
  height: 220px;
  transition: 0.3s;

  @media (max-width: 1440px) {
    height: 100px;
  }
}
</style>
