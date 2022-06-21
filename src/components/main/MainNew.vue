<template>
  <section class="new-wrapper">
    <div class="new-topic">
      <div class="new-topic__title"><h3 class="text-roboto"> Новинки этой осени</h3></div>
      <div class="new-topic__tabs">
        <q-tabs
          v-model="tab"
          narrow-indicator
          align="justify"
          dense
          no-caps
          class="text-black text-roboto text-bold new-tabs"
        >
          <q-tab name="wear" label="Верхняя одежда"  style="font-size: 4.4em;"/>
          <q-tab name="hoodies" label="Толстовки" />
          <q-tab name="boots" label="Сапоги" />
        </q-tabs>
      </div>
    </div>
    <div class="container">
      <q-tab-panels v-model="tab" animated v-if="!isMobileWidth">
        <q-tab-panel name="wear" style="padding: 0;">
          <ul class="new-content">
            <li v-for="item in wearlist" :key="item">
              <product-card
                :imgageUrl="item.imgageUrl"
                :prodTitle="item.prodTitle"
                :prodMark="item.prodMark"
                :isFavorite="item.isFavorite"
                :isSale="item.sale"
                :isNew="item.new"
              />
            </li>
          </ul>          
        </q-tab-panel>

        <q-tab-panel name="hoodies" style="padding: 0;">
          <ul class="new-content" >
            <li v-for="item in hoodiesList" :key="item">
              <product-card
                :imgageUrl="item.imgageUrl"
                :prodTitle="item.prodTitle"
                :prodMark="item.prodMark"
                :isFavorite="item.isFavorite"
                :isSale="item.sale"
                :isNew="item.new"
              />
            </li>
          </ul>
        </q-tab-panel>

        <q-tab-panel name="boots" style="padding: 0;">
          <ul class="new-content">
            <li v-for="item in wearlist" :key="item">
              <product-card
                :imgageUrl="item.imgageUrl"
                :prodTitle="item.prodTitle"
                :prodMark="item.prodMark"
                :isFavorite="item.isFavorite"
                :isSale="item.sale"
                :isNew="item.new"
              />
            </li>
          </ul>
        </q-tab-panel>
      </q-tab-panels>
      <div class="slider" v-if="isMobileWidth && tab === 'wear'">
        <carousel :items-to-show="1" >
            <slide v-for="slide in wearlist" :key="slide" style="margin-right: 10px">
              <product-card
                :imgageUrl="slide.imgageUrl"
                :prodTitle="slide.prodTitle"
                :prodMark="slide.prodMark"
                :isFavorite="slide.isFavorite"
                :isSale="slide.sale"
                :isNew="slide.new"
              />
            </slide>
        </carousel>
      </div>
      <div class="slider" v-if="isMobileWidth && tab === 'hoodies'">
        <carousel :items-to-show="1">
            <slide v-for="slide in hoodiesList" :key="slide" style="margin-right: 10px">
              <product-card
                :imgageUrl="slide.imgageUrl"
                :prodTitle="slide.prodTitle"
                :prodMark="slide.prodMark"
                :isFavorite="slide.isFavorite"
                :isSale="slide.sale"
                :isNew="slide.new"
              />
            </slide>
        </carousel>
      </div>
      <div class="slider" v-if="isMobileWidth && tab === 'boots'">
        <carousel :items-to-show="1">
            <slide v-for="slide in hoodiesList" :key="slide" style="margin-right: 10px">
              <product-card
                :imgageUrl="slide.imgageUrl"
                :prodTitle="slide.prodTitle"
                :prodMark="slide.prodMark"
                :isFavorite="slide.isFavorite"
                :isSale="slide.sale"
                :isNew="slide.new"
              />
            </slide>
        </carousel>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import ProductCard from '../common/ProductCard.vue'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import { useWindowSize } from 'vue-window-size';

export default {
  components: { ProductCard, Carousel, Slide },
  setup () {
    const { width } = useWindowSize();
    return {
      tab: ref('wear'),
      windowWidth: width,
    }
  },
  data() {
    return {
      wearlist: [
        {
          imgageUrl: require('src/img/card1.jpg'),
          prodTitle: 'Юбка миди',
          prodMark: 'LOVE REPUBLIC',
          sale: true,
        },
        {
          imgageUrl: require('src/img/card1.jpg'),
          prodTitle: 'Юбка миди',
          prodMark: 'GANT',
          isFavorite: true,
          new: true
        },
        {
          imgageUrl: require('src/img/card1.jpg'),
          prodTitle: 'Юбка миди',
          prodMark: 'CALVIN KLEIN',
          sale: true,
        },
        {
          imgageUrl: require('src/img/card1.jpg'),
          prodTitle: 'Юбка миди',
          prodMark: 'HIM',
          new: true
        },
      ],
      hoodiesList: [
        {
          imgageUrl:  require('src/img/card2.jpg'),
          prodTitle: 'Толстовка',
          prodMark: 'LOVE REPUBLIC',
          sale: true,
        },
        {
          imgageUrl:  require('src/img/card2.jpg'),
          prodTitle: 'Толстовка',
          prodMark: 'GANT',
          isFavorite: true,
          sale: true,
        },
        {
          imgageUrl:  require('src/img/card2.jpg'),
          prodTitle: 'Толстовка',
          prodMark: 'CALVIN KLEIN'
        },
        {
          imgageUrl:  require('src/img/card2.jpg'),
          prodTitle: 'Толстовка',
          prodMark: 'HIM',
          isFavorite: true,
          new: true
        },
      ]
    }
  },
  computed: {
    isMobileWidth() {
      return this.windowWidth <= 767
    }
  }
}
</script>

<style lang="scss" scoped>
.new-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1900px;
  margin: 0 auto 50px auto;
}

.new-topic {
  display: flex;
  width: 100%;
  margin-bottom: 50px;

  @media (max-width: 1023px) {
    flex-direction: column;
  }

  @media (max-width: 767px) {
    margin-bottom: 10px;
  }

  &__title {
    display: flex;
    align-items: center;
    height: 70px;
    width: 805px;
    background: #cbcbcb;

    @media (max-width: 1023px) {
      width: 50%;
      margin-bottom: 20px;
    }

    @media (max-width: 767px) {
      height: 20px;
      width: 66%;
      margin-bottom: 5px;
    }

    & h3 {
      margin: 0 auto 0 80px;
      font-weight: 600;
      font-size: 36px;
      line-height: 100%;
      display: flex;
      align-items: center;
      letter-spacing: 0.05em;

      @media (max-width: 1440px) {
        margin: 0 auto 0 50px;
        font-size: 26px;
        letter-spacing: 0.04em;
      }

      @media (max-width: 1023px) {
        margin: 0 50px 0 auto;
      }

      @media (max-width: 767px) {
        margin-right: 17px;
        font-size: 18px;
        line-height: 18px;
      }
    }
  }

  &__tabs {
    width: 800px;
    display: flex;
    align-items: center;
    margin-left: 62px;

    @media (max-width: 1440px) {
      margin-left: 35px;
      padding-right: 20px;
    }

    @media (max-width: 1023px) {
      justify-content: center;
      margin: 10px auto;
    }

    @media (max-width: 767px) {
      width: 300px;
    }
  }
}

::v-deep .new-tabs {
  margin-left: -10px;

  div {
    min-width: fit-content;
    line-height: 18px;
    font-size: 20px;
    font-weight: 600;
    color: #525252;
    margin-right: 20px;

    @media (max-width: 767px) {
      font-size: 13px;
      margin-right: 0;
    }
    
    .q-tab {
      line-height: 20px;
      min-height: 20px;
      padding: 0 10px;

      &--active div {
        text-shadow:0px 0px 1px black;
        color: #000;
      }
    }
    .q-focus-helper {
      background: #ffffff !important;
    }
  }
}

.new-content {
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  margin: 0;

  @media (max-width: 1440px) {
    margin-left: 2px;
  }

  @media (max-width: 1023px) {
    flex-wrap: wrap;
  }
  

  li:not(:last-of-type) {
    height: 100%;
    margin-right: 20px;

    @media (max-width: 1023px) {
      margin-right: 10px;
    }
  }

  li {
    @media (max-width: 1023px) {
      margin: 10px;
    }

    @media (max-width: 767px) {
      margin: 0;
    }
  }
}

::v-deep .slider {
  width: 100%;
  margin-left: -10px;

  // .slide {
  //   margin-right: 5px;
  // }

  .carousel__viewport {
    overflow: visible;
  }
} 

</style>