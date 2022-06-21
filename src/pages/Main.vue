<template>
  <main-slider v-if="!isMobileWidth" />
  <main-stories v-else/>
  <main-categories v-if="!isMobileWidth" />
  <main-sale />
  <main-new />
  <main-about />
  <main-catalog v-if="isTabletWidth" />
  <main-subscribe />
</template>

<script>
import { useWindowSize } from 'vue-window-size';

import MainSlider from '../components/main/MainSlider.vue'
import MainCategories from '../components/main/MainCategories.vue'
import MainSale from '../components/main/MainSale.vue'
import MainNew from '../components/main/MainNew.vue'
import MainCatalog from '../components/main/MainCatalog.vue'
import MainAbout from '../components/main/MainAbout.vue'
import MainSubscribe from '../components/main/MainSubscribe.vue'
import MainStories from '../components/main/MainStories.vue'


export default {
  components: {
    MainSlider,
    MainCategories,
    MainSale,
    MainNew,
    MainCatalog,
    MainAbout,
    MainSubscribe,
    MainStories
    },
  name: 'PageIndex',
  setup () {
    const { width } = useWindowSize();
    return {
      windowWidth: width,
    }
  },
  computed: {
    isTabletWidth() {
      return this.windowWidth <= 1023
    },
    isMobileWidth() {
      return this.windowWidth <= 767
    }
  }

}
</script>

<style lang="scss" scoped>

</style>

