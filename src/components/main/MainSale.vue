<template>
  <section  class="sale-wrapper">
    <h3 class="visually-hidden">Sale</h3>
    <div class="sale-block">
      -30%
      <span>на аксессуары</span>
    </div>
    <div v-if="isTabletWidth" class="slogan" >
      <h3>Распродажа началась</h3>
      <span>Успей купить аксессуары со скидкой 30%</span>
    </div>
    <div class="slider" v-if="!isTabletWidth">
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        :autoplay="autoplay"
        infinite
        animated
        class="slider__carousel"
        control-color="primary"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide :name="1" class="row no-wrap">
          <ul class="row justify-start items-center no-wrap slide-list" >
            <slider-item v-for="item in 5" :key="item" :imageUrl="image1" />
          </ul>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="row no-wrap">
          <ul class="row justify-start items-center no-wrap slide-list" >
            <slider-item v-for="item in 5" :key="item" imageUrl="https://cdn.quasar.dev/img/cat.jpg" />
          </ul>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="row no-wrap">
          <ul class="row justify-start items-center no-wrap slide-list" >
            <slider-item v-for="item in 5" :key="item" imageUrl="https://cdn.quasar.dev/img/cat.jpg" />
          </ul>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div v-else class="tablet-slider">
      <carousel :items-to-show="4">
        <slide v-for="slide in 12" :key="slide">
          <div @click="goTo">
            <img class="tablet-slider__image" :src="image1" alt="sale image">
          </div>
        </slide>
      </carousel>
    </div>
    
  </section>
</template>

<script>
import { ref } from 'vue'
import { useWindowSize } from 'vue-window-size'
import SliderItem from './SliderItem.vue'
import { Carousel, Slide } from 'vue3-carousel';

export default {
  components: { SliderItem, Carousel, Slide },
  setup () {
    const { width } = useWindowSize();
    return {
      slide: ref(1),
      autoplay: ref(true),
      windowWidth: width,
    }
  },
  data() {
    return {
      tab: 'new',
      isShown: false,
      image1: require('src/img/slide-sm.jpg'),
    }
  },
  methods: {
    showDescr() {
      this.isShown = !this.isShown
    },
    hideDescr() {
      this.isShown = false
    },
    goTo() {
      this.$router.push('/catalog')
    }
  },
  computed: {
    isTabletWidth() {
      return this.windowWidth <= 1023
    }
  }
}
</script>

<style lang="scss" scoped>
.sale-wrapper {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1900px;
  margin: 0 auto 50px auto;

  @media (max-width: 1440px) {
    flex-direction: column;
  }

  @media (max-width: 1023px) {
    margin-bottom: 10px;
  }
}

.sale-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 144px;
  line-height: 176px;
  width: 672px;
  height: 300px;
  background: #525252;
  border: 10px solid #D3D3D3;
  color: #ffffff;
  letter-spacing: -0.05em;

  @media (max-width: 1760px) {
    font-size: 80px;
    line-height: 120px;
  }

  @media (max-width: 1440px) {
    margin: 0 auto 20px auto;
  }

  @media (max-width: 1023px) {
    position: relative;
    border: none;
    font-size: 60px;
    line-height: 80px;
    flex-direction: row;
    justify-content: left;
    align-items: baseline;
    padding: 30px;
    background-image: url("../../img/wom2.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  @media (max-width: 767px) {
    width: 300px;
    height: 126px;
    padding: 10px 20px;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 0;
  }

  span {
    font-weight: normal;
    font-size: 36px;
    line-height: 44px;
    display: flex;
    align-items: center;
    letter-spacing: 0.115em;
    color: #FFFFFF;

    @media (max-width: 1760px) {
      text-align: center;
      letter-spacing: 0.1em;
      font-size: 30px;
    }

    @media (max-width: 1023px) {
      margin: auto 0 0 auto;
      font-size: 45px;
      line-height: 60px;
    }

    @media (max-width: 767px) {
      white-space: nowrap;
      display: flex;
      font-size: 24px;
      line-height: 29px;
    }
  }
}

.slider {
  display: flex;
  padding: 0;
  width: fit-content;

  &::after {
    position: absolute;
    content: '';
    right: 0;
    top: 0;
    height: 100%;
    width: 140px;
    background: linear-gradient(89.78deg, rgba(255, 255, 255, 0) 0.36%, #FFFFFF 85.51%);
    z-index: 3;

    @media (max-width: 1023px) {
      height: 300px;
      top: auto;
      bottom: 0;
    }
  }

  @media (max-width: 1440px) {
    margin: 0 auto;
  }

  &__carousel {
    height: 300px;
  }

  & .q-carousel__slide::v-deep {
    padding: 0;
  }
}

.slogan {
  h3,
  span {
    display: flex;
    justify-content: left;
    width: 672px;
    margin: 0 auto 20px auto;
    font-weight: 600;

    @media (max-width: 767px) {
      display: flex;
      width: 300px;
      margin: 10px auto 2px auto;
      font-size: 18px;
      line-height: 22px;
    }
  }

  span {
    font-weight: 400;
    font-size: 21px;
    line-height: 25px;

    @media (max-width: 767px) {
      font-size: 10px;
      line-height: 13px;
      margin-top: 0;
    }
  }
}

.tablet-slider {
  margin-top: 20px;

  &__image {
    width: 150px;

    @media (max-width: 767px) {
      width: 80px;
    }

    @media (max-width: 359px) {
      width: 70px;
    }
  }
}

</style>