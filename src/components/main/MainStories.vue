<template>
  <section class="stories container">
    <div style="margin-left: -20px">
      <q-tabs
        v-model="tab"
        narrow-indicator
        align="justify"
        dense
        caps
        class="text-black text-roboto text-bold nav-tabs menu-tabs"
      >
        <q-tab name="women" label="Женщины" />
        <q-tab name="men" label="Мужчины"  />
        <q-tab name="children" label="Дети" />
      </q-tabs>
    </div>
    <h3>истории</h3>

    <!-- women slider  -->

    <div v-if="tab === 'women'" class="slider">
      <carousel :items-to-show="4">
        <slide v-for="slide in womanSlides" :key="slide">
          <div class="slide" @click="goTo">
            <img class="slider__image" :src="slide.imgUrl" alt="story image">
          </div>
        </slide>
      </carousel>
    </div>

    <!-- men slider  -->

    <div v-if="tab === 'men'" class="slider">
      <carousel :items-to-show="4">
        <slide v-for="slide in menSlides" :key="slide">
          <div class="slide" @click="goTo">
            <img class="slider__image" :src="slide.imgUrl" alt="story image">
          </div>
        </slide>
      </carousel>
    </div>

    <!-- children slider  -->

    <div v-if="tab === 'children'" class="slider">
      <carousel :items-to-show="4">
        <slide v-for="slide in womanSlides" :key="slide">
          <div class="slide" @click="goTo">
            <img class="slider__image" :src="slide.imgUrl" alt="story image">
          </div>
        </slide>
      </carousel>
    </div>
    
  </section>
</template>

<script>
import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';

export default {
  components: { Carousel, Slide },
  setup () {
    return {
      tab: ref('women'),
    }
  },
  data() {
    return {
      womanSlides: [
        {
          imgUrl: require('src/img/slide-wom1.png'),
          slug: 'id',
        },
        {
          imgUrl: require('src/img/slide-wom2.png'),
          slug: 'id',
        },
        {
          imgUrl: require('src/img/slide-wom3.png'),
          slug: 'id',
        },
        {
          imgUrl: require('src/img/slide-wom1.png'),
          slug: 'id',
        },
        {
          imgUrl: require('src/img/slide-wom3.png'),
          slug: 'id',
        },
        {
          imgUrl: require('src/img/slide-wom2.png'),
          slug: 'id',
        },
        {
          imgUrl: require('src/img/slide-wom3.png'),
          slug: 'id',
        },
        {
          imgUrl: require('src/img/slide-wom1.png'),
          slug: 'id',
        },
      ],
      menSlides: [
        {
          imgUrl: require('src/img/slide-wom3.png'),
          slug: 'id',
        },
        {
          imgUrl: require('src/img/slide-wom1.png'),
          slug: 'id',
        },
        {
          imgUrl: require('src/img/slide-wom2.png'),
          slug: 'id',
        },
        {
          imgUrl: require('src/img/slide-wom3.png'),
          slug: 'id',
        },
        {
          imgUrl: require('src/img/slide-wom1.png'),
          slug: 'id',
        },
        {
          imgUrl: require('src/img/slide-wom2.png'),
          slug: 'id',
        },
        {
          imgUrl: require('src/img/slide-wom2.png'),
          slug: 'id',
        },
        {
          imgUrl: require('src/img/slide-wom2.png'),
          slug: 'id',
        },
      ]
    }
  },
  methods: {
    goTo() {
      this.$router.push('/cart')
    }
  }
}
</script>

<style lang="scss" scoped>
.stories {
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  h3 {
    display: flex;
    font-weight: bold;
    justify-content: left;
    font-size: 18px;
    line-height: 22px;
  }
}

.slider {
  margin-bottom: 20px;
  width: 100vw;

  .slide img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
  }
}

::v-deep .slider .carousel__viewport {
  overflow: visible;
}
</style>