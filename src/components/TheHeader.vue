<template>
  <q-header class="bg-white" v-if="showDescktopHeader">

    <!-- Top bar  -->

    <div class="bg-black header-top header-news">
      <div class="container">
        <div class="top-bar">
          <div class="top-bar__element">
              Строка для новостей
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black header-top" >
      <div class="container">
        <div class="top-bar">
          <div class="top-bar__element">
            <a href="mailto:info@tyumen-retail.com" target="_blank" rel="noopener" >
              <img src="../img/mail.svg" alt="mail-svg" class="top-bar__icon">
              <span>support@deepmag.ru</span>
            </a>
            <a href="tel:+79191234556" rel="noopener">
              <q-icon name="bi-telephone-fill" color="primary" size="16px" class="top-bar__icon"/>
              <span>+7 (919)-123-45-56</span>
            </a>
            <a href="#" target="_blank" rel="noopener">
              <img src="../img/whatsapp.svg" alt="whatsapp-icon" class="top-bar__icon">
              <span>Напишите нам в WhatsApp</span>
            </a>
          </div>
          <div class="top-bar__element top-bar__element--right">
            <a href="#" rel="noopener">
              <img src="../img/mask.svg" alt="mask-icon" class="top-bar__icon">
              <span>Бесконтактная доставка</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Middle bar  -->

    <div class="header-middle">
      <div class="container middle-bar">
        <div style="height: 15px; width: 280px;">
          <router-link to="/">
            <img src="../img/deepmag.svg" alt="Deep Mag" class="middle-bar__title" />
            <h1 class="visually-hidden">Deep Mag</h1>
          </router-link>
        </div>
        <div class="middle-bar__search search">
          <q-input
            standout="bg-grey-1"
            dense
            input-style="color: #000000; padding-left: 10px;"
            color="dark"
            type="search"
            clearable
            placeholder="Поиск"
            class="search-input"
            bg-color="grey-4"

            v-model="text">
            <template v-slot:prepend >
              <div class="icon">
                <q-icon name="las la-search" size="sm"/>
              </div>
            </template>
          </q-input>
        </div>
        <div class="middle-bar__right">
          <router-link  v-if="!loginStatus" to="/register">
            <span class="registry-text">Вход/регистрация</span>
            <img src="../img/enter.svg" alt="enter-icon" >
          </router-link>
           <router-link  v-else to="/cabinet">
            <span class="registry-text">{{ name }} {{ surname }}</span>
            <q-icon name="bi-person-circle" style="font-size: 2.3em;" color="grey-8" />
          </router-link>
          <router-link to="/favorites">
            <div class="icon-wrapper">
              <q-icon name="bi-heart" color="grey-8" style="font-size: 2.3em;" />
              <span class="icon-number">0</span>
            </div>
          </router-link>
          <router-link to="/cart">
            <div class="icon-wrapper" style="margin-top: 4px">
              <img src="../img/cart.svg" alt="enter-icon" >
              <span class="icon-number">0</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Bottom bar  -->

    <header-bottom />
  </q-header>

  <!-- tablet version  -->

  <q-header elevated class="bg-primary" v-else>
    <header-mobile />
  </q-header>

</template>

<script>
import TheCart from './layout/TheCart.vue'
import { ref } from 'vue'
import HeaderBottom from '../components/header/HeaderBottom.vue'
import HeaderMobile from '../components/header/HeaderMobile.vue'
import { useWindowSize } from 'vue-window-size';

export default {
  components: { TheCart, HeaderBottom, HeaderMobile },
    setup () {
    const { width } = useWindowSize();
    return {
      drawerRight: ref(false),
      tab: ref('women'),
      subTab: ref('wear'),
      windowWidth: width,
    }
  },
  data() {
    return {
      text: ''
    }
  },
  computed: {
    loginStatus() {
      return this.$store.getters['login/loginStatus']
    },
    name() {
      return this.$store.getters['login/userName']
    },
    surname() {
      return this.$store.getters['login/userSurname']
    },
    showDescktopHeader() {
      if (this.windowWidth >= 1024) {
        return true
      } return false
    }
  },
}
</script>


<style lang="scss" scoped>
.header-top {
  display: flex;
  align-items: center;
  height: 30px;
}
.header-news{
  border-bottom: 0.2px solid #575757;
}
.header-middle {
  display: flex;
  background: #f0f0f0;
  align-items: center;
  height: 64px;
  border-bottom: 1px solid #E1E1E1;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
}

.top-bar {
  display: flex;
  justify-content: space-between;
  color: #D3D3D3;
  font-size: 13px;
  width: 100%;
  height: 30px;

  &__icon {
    width: 20px;
    margin-right: 7px;
  }

  &__element {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-between;
    width: fit-content;
    width: 50%;
    padding-right: 75px;
    a{
      display: flex;
      align-items: center;
    }

    @media (max-width: 1760px) {
      width: 75%;
      padding-right: 0;
    }

    &--right {
      justify-content: right;
      padding-right: 0;

      @media (max-width: 1760px) {
        width: 25%;
      }
    }

    div {
      height: 100%;
      display: flex;
      align-items: center;
    }

    & a {
      font-size: 12px;
      color: #D3D3D3;
      span{
        transition: 0.5s;
      }
      &:hover {
        span{
          text-decoration: underline;
          opacity: 0.8;
        }
      }
    }

    & span {
      color: #D3D3D3;
    }
  }
}

.middle-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__search {
    width: 240px;

    & span {
      color: #525252;
      font-size: 12px;
    }
  }

  &__title {
    width: 350px;

    @media (max-width: 1440px) {
      width: 250px;
    }
  }

  &__right {
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      margin-right: 30px;

      &:hover {
        opacity: 0.7;
      }

      span {
        margin-right: 10px;
        margin-top: 10px;
        font-size: 12px;
        font-weight: 500;
        color: #000;
      }
    }
  }
}

.header-mobile {
  position: relative;
  z-index: 100;

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
    }
  }

  &__bottom {
    height: 60px;
  }
}



.header-mobile {
  &__right {
    margin: 0 0 0 auto;
    display: flex;
    flex-direction: row;
  }
}

.mobile-menu {
  text-align: center;
  font-size: 20px;
  & li {
    margin-bottom: 10px;
  }
}
.header-mobile__cart {
  margin-right: 20px;
}

.menu-button {

  @media (max-width: 360px) {
    right: 10px;
  }
}

.logo-link {
  @media (max-width: 360px) {
    padding-left: 10px;
  }
}

::v-deep  .menu-button i {
  transform: scale(1.4);
  margin-left: -15px;

  @media (max-width: 360px) {
     transform: scale(1.1);
  }
}

::v-deep .search  {
  margin: 0 auto 0 300px;

  @media (max-width: 1760px) {
    margin: 0 auto 0 160px;
  }

   @media (max-width: 1440px) {
     margin: 0 auto 0 50px;
   }

  .q-field__control {
    padding: 0 10px 0 0;
    height: 30px;
  }

  .q-field__prepend {
    background: #c4c4c4;
    border-top-left-radius: 3px;
    padding-bottom: 12px;
    padding-left: 4px;
  }

  input::-webkit-input-placeholder {
    padding-left: 235px;
    font-size: 18px;

    @media (max-width: 1440px) {
     padding-left: 135px;
   }
  }

  button {
    margin-bottom: 10px;
  }
}

::v-deep .q-drawer__backdrop,
.q-drawer {
  margin-top: 100px;
}

::v-deep .q-drawer-container aside {
  top: 40px;
}

.icon-wrapper {
  position: relative;

  .icon-number {
    display: flex;
    position: absolute;
    right: -13px;
    top: -8px;
    justify-content: center;
    font-weight: 600;
    font-size: 11px;
    width: 16px;
    height: 16px;
    color: #fff;
    background: #da251c;
    border-radius: 50%;
    outline: 3px solid #f0f0f0;
  }
}

.search-input {
  width: 600px;
  max-height: 30px;
  overflow: hidden;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;

   @media (max-width: 1440px) {
     width: 400px;
   }
}

.registry-text {
  margin-top: 0 !important;
  @media (max-width: 1440px) {
     display: none;
   }
}

</style>
