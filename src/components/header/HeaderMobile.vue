<template>
  <div>
    <div class="header-mobile">
      <div class="header-mobile__top-wrapper">
        <div class="header-mobile__top container">
          <a href="mailto:info@tyumen-retail.com" target="_blank" rel="noopener">
            <img src="../../img/mail.svg" alt="mail-svg">
          </a>
          <div>
            <q-icon name="bi-telephone-fill" color="primary" size="16px" class="header-mobile__icon"/>
            <span v-if="isMobile">+7 (919)-123-45-56</span>
          </div>
          <div>
            <img src="../../img/whatsapp.svg" alt="whatsapp-icon" class="header-mobile__icon">
          </div>
          <div>
            <img src="../../img/mask.svg" alt="mask-icon" class="header-mobile__icon">
            <span v-if="isMobile">Бесконтактная доставка</span>
            
          </div>
          <div>
            <q-icon name="bi-box-arrow-in-right" color="primary" size="24px" class="header-mobile__icon" @click="goTo('/cart')"/>
          </div>
        </div>
      </div>
      <div class="header-mobile__bottom container">
        <q-btn
          flat
          @click="toggleDrawler"
          class="text-black menu-button"
          icon="menu"
          bordered
        />
        <div class="header-mobile__logo" @click="goTo('/')">
          <img src="../../img/deepmag.svg" alt="Deepmag" />
          <h1 class="visually-hidden">Deep Mag</h1>
        </div>
        <div class="header-mobile__search" @click="showSearch">
          <q-icon class="text-black" name="las la-search" size="30px" v-show="!isVisible"/>
          <q-input
            standout="bg-grey-1"
            dense
            input-style="color: #000000;"
            color="dark"
            type="search"
            @clear="hideSearch"
            clearable
            placeholder="Поиск"
            class="search-input"
            bg-color="grey-4"
            v-model="text"
            v-show="isVisible">
            <template v-slot:prepend >
              <div class="icon">
                <q-icon name="las la-search" size="30px"/>
              </div>
            </template>
          </q-input>
        </div>
        <div class="header-mobile__favorites" @click="goTo('/favorites')">
          <q-icon class="text-black" name="bi-heart" size="sm"/>
        </div>
        <div class="header-mobile__cart" @click="goTo('/cart')">
          <q-icon class="text-black" name="bi-cart" size="25px"/>
        </div>
      </div>
    </div>
    <div>
      <q-drawer 
      side="left"
      v-model="drawerRight"
      bordered
      :width="drawlerWidth"
      class="bg-accent"
      show-if-above
      >
        <q-scroll-area class="fit">
            <mobile-menu @clickClose="toggleDrawler" />
        </q-scroll-area>
      </q-drawer>
    </div>
    <div v-show="isVisible" class="hide-search" @click="hideSearch">.</div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useWindowSize } from 'vue-window-size';
import MobileMenu from './MobileMenu.vue'

export default {
  components: { MobileMenu },
  setup () {
    const { width } = useWindowSize();
    return {
      drawerRight: ref(false),
      windowWidth: width,
    }
  },
  data() {
    return {
      text: '',
      isVisible: false
    }
  },
  methods: {
    goTo(address) {
      this.$router.push(address)
    },
    showSearch() {
      this.isVisible = true
    },
    hideSearch() {
      this.isVisible = false
    },
    toggleDrawler() {
      this.drawerRight = !this.drawerRight
    }
  },
  computed: {
    drawlerWidth() {
      if (this.windowWidth >= 768 ) {
        return 600
      } return this.windowWidth
    },
    isMobile() {
      return this.windowWidth >= 768
    }
  }
}
</script>

<style lang="scss" scoped>
.header-mobile {
  position: relative;

  &__top-wrapper {
    width: 100%;
    height: 40px;
    background: #000000;
  }
  

  &__top {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;

    a,
    div {
      height: 100%;
      display: flex;
      min-width: 44px;
      align-items: center;

      @media (max-width: 767px) {
        justify-content: center;
      }
    }

    a:first-of-type {
      @media (max-width: 767px) {
        margin: 0 10px 0 -15px;
      }
      
    }

    div:first-of-type {
      margin: 0 10px 0 0;
    }

    div:nth-of-type(2) {
      margin: 0 50px 0 0;
    }

    div:last-of-type {
      margin-right: -10px;
    }
  }

  &__icon {
    min-width: 20px;
    margin-right: 15px;

    @media (max-width: 767px) {
      margin: 0;
    }
  }

  &__bottom {
    position: relative;
    display: flex;
    align-items: center;
    height: 60px;
  }

  &__search {
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    min-width: 50px;
    justify-content: center;
    right: 50%;
    margin-left: 50px;
    transform: translateX(172px);
    z-index: 500;

    @media (max-width: 767px) {
      transform: translateX(-85px);
      min-width: 40px;
    }
  
  }

  &__logo {
    width: 280px;
    margin-left: 75px;
    margin-right: 120px;

    @media (max-width: 767px) {
      margin: 0 10px 0 35px;
      width: 150px;
    }

    & img {
      margin-top: 7px;
      width: 100%;
    } 
  }

  // &__favorites {
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   height: 100%;
  //   margin: 0 0 2px auto;
  // }

  &__favorites,
  &__cart {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0 0 2px auto;
    min-width: 50px;

    @media (max-width: 767px) {
      min-width: 40px;
    }
  }

  &__favorites {
    margin: 0 0 2px auto;
  }

  &__cart {
    @media (max-width: 767px) {
      margin-right: -10px;
      margin-bottom: 5px;
    }
  }

  // &__drawler {
  //   width: 600px;
  // }
}

.menu-button {
  margin-left: -18px;
  width: 60px;
  padding-left: 30px;

  @media (max-width: 767px) {
    margin-left: -21px;
  }
}

::v-deep  .menu-button i {
  transform: scale(1.5);
}

.search-input {
  position: absolute;
  left: 5px;
  top: 10px;
  width: 210px;
  overflow: hidden;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  z-index: 500;
  transition: 0.3s;

  @media (max-width: 767px) {
    width: 200px;
    top: 15px;
    left: 5px;
  }
}

::v-deep .search-input {
  .q-field__control {
    padding-left: 5px;
    padding-bottom: 15px;
    height: 40px;


    @media (max-width: 767px) {
      height: 30px;
      padding-left: 0;
    }
  }

  .q-field__native {
    @media (max-width: 767px) {
      font-size: 11px;
    }
  }

  .q-icon {
    padding-bottom: 3px;
    @media (max-width: 767px) {
      padding-bottom: 0;
      margin-bottom: -4px;
    }
  }

  .q-field__marginal {
    height: 43px;
    @media (max-width: 767px) {
      font-size: 18px;
      height: 25px;
    }
  }
}

::v-deep .header-mobile__bottom .q-icon:before {
  @media (max-width: 767px) {
    transform: scale(0.7);
    margin-bottom: -2px;
  }
}

.hide-search {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: transparent;
  z-index: 99;
  color: transparent
}
</style>