<template>
  <footer class="footer-wrapper">
    <div class="footer container">
      <ul class="footer__list">
        <li class="footer__list-item" v-if="!isMobileWidth">
          <h3>Информация</h3>
          <ul style="width: 100%">
            <li class="footer__list-link" style="width: 100%" v-for="item in infoList" :key="item">
              <router-link :to="item.link" class="footer__list-link">{{ item.name }}</router-link>
            </li>
          </ul>
        </li>
        <li class="footer__list-item" v-else>
          <menu-accordion title="Информация" style="background: #f0f0f0 !important">
            <ul style="width: 100%">
              <li class="footer__list-link" style="width: 100%" v-for="item in infoList" :key="item">
                <router-link :to="item.link" class="footer__list-link">{{ item.name }}</router-link>
              </li>
            </ul>
          </menu-accordion>
        </li>   
        <li class="footer__list-item" v-if="!isMobileWidth">
          <h3>Служба поддержки</h3>
          <ul style="width: 100%">
            <li class="footer__list-link" style="width: 100%" v-for="item in supportList" :key="item">
              <router-link :to="item.link" class="footer__list-link">{{ item.name }}</router-link>
            </li>
          </ul>
        </li>
        <li class="footer__list-item" v-else>
          <menu-accordion title="Служба поддержки" style="background: #f0f0f0 !important">
            <ul style="width: 100%">
              <li class="footer__list-link" style="width: 100%" v-for="item in supportList" :key="item">
                <router-link :to="item.link" class="footer__list-link">{{ item.name }}</router-link>
              </li>
            </ul>
          </menu-accordion>
        </li>  
        <li class="footer__list-item"  v-if="!isMobileWidth">
          <h3>Сервис для клиентов</h3>
          <ul style="width: 100%">
            <li class="footer__list-link" style="width: 100%" v-for="item in serviceList" :key="item">
              <router-link :to="item.link" class="footer__list-link">{{ item.name }}</router-link>
            </li>
          </ul>
        </li>
         <li class="footer__list-item" v-else>
          <menu-accordion title="Сервис для клиентов" style="background: #f0f0f0 !important">
            <ul style="width: 100%">
              <li class="footer__list-link" style="width: 100%" v-for="item in serviceList" :key="item">
                <router-link :to="item.link" class="footer__list-link">{{ item.name }}</router-link>
              </li>
            </ul>
          </menu-accordion>
        </li> 
        <li class="footer__list-item">
          <h3>DEEPMAG</h3>
          <router-link to="/contacts" class="footer__list-link">О нас</router-link>
          <router-link to="/contacts" class="footer__list-link">Карта DEEPMAG</router-link>
          <router-link to="/contacts" class="footer__list-link">Подарочная карта</router-link>
          <router-link to="/contacts" class="footer__list-link">Работа в DEEPMAG</router-link>
          <router-link to="/contacts" class="footer__list-link" style="margin-bottom: 30px">Магазины</router-link>
          <a href="https://www.instagram.com/deepmag.ru/" class="footer__list-link" rel="noopener" target="_blank">
            <img src="../img/insta.png" alt="instagram">
            @deepmag.ru
          </a>
          <a href="https://www.instagram.com/icons_tmn/" class="footer__list-link"  rel="noopener" target="_blank">
            <img src="../img/mail.png" alt="mail">
            info@tyumen-retail.com
          </a>
          <a href="https://www.instagram.com/icons_tmn/" class="footer__list-link"  rel="noopener" target="_blank">
            <img src="../img/phone.png" alt="phone">
            8 919 933 33 93
          </a>
        </li>
      </ul>
    </div>
    <div class="footer__copyright">
      <div class="container footer__copyright-content">
        <span>© 2021 DEEP MAG Все права защищены</span>
        <router-link to="/about">Политика конфеденциальности</router-link>
      </div>
    </div>
  </footer>
</template>

<script>
import { useWindowSize } from 'vue-window-size';

import MenuAccordion from '../components/header/MenuAccordion.vue'

export default {
  components: { MenuAccordion },
  setup () {
    const { width } = useWindowSize();
    return {
      windowWidth: width,
    }
  },
  computed: {
    isMobileWidth() {
      return this.windowWidth <= 767
    },
    infoList() {
      return this.$store.getters['common/infoList']
    },
    supportList() {
      return this.$store.getters['common/supportList']
    },
    serviceList() {
      return this.$store.getters['common/supportList']
    },
  }  
}
</script>

<style lang="scss" scoped>
.footer-wrapper {
  background: #F0F0F0;
  padding-top: 40px;

  @media (max-width: 767px) {
    padding-top: 10px;
  }
}

.footer {
  display: flex;
  flex-direction: column;
  

  &__list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 70px;

    @media (max-width: 1440px) {
      width: 960px;
      flex-wrap: wrap;
    }

    @media (max-width: 1023px) {
      flex-direction: row;
      width: 100%;
    }

    &-item {
      display: flex;
      flex-direction: column;
      width: 200px;

      @media (max-width: 1440px) {
        width: 165px;
        margin-left: 20px;
      }

      @media (max-width: 1023px) {
        margin: 0;
        width: 155px;
      }

      @media (max-width: 767px) {
        width: 300px;
        margin-bottom: 10px;
      }


      & h3 {
        font-size: 15px;
        font-weight: 600;
        line-height: 20px;
        height: 40px;
        margin-bottom: 0;
      }
    }
    &-link {
      width: 100%;
      margin-bottom: 15px;
      color: #000000;
      &:hover {
        opacity: 0.5;
      }

      @media (max-width: 1023px) {
        display: flex;
        align-items: center;
        height: 50px;
        margin-bottom: 0;
      }

      img {
        margin-right: 10px;
      }
    }
  }
}


.footer__copyright {
  display: flex;
  justify-content: space-between;
  background: #D3D3D3;
  height: 70px;
  box-shadow: inset 0 8px 15px -3px rgb(0 0 0 / 35%);

  &-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000;

    span {
      display: block;
    }

    @media (max-width: 767px) {
      flex-direction: column;
      align-items: left;
    }
  }
  
  & span {
    display: inline-block;
    width: 300px;

    @media (max-width: 767px) {
      text-align: left;
      margin: 10px auto;
    }
  }

  & a {
    color: #000;
    @media (max-width: 767px) {
      margin: 0 auto 10px 0;
      text-align: left;
    }
  }

  & a:hover {
    opacity: 0.5;
  }
}

::v-deep .footer__list-item .accordion__top {
  background: #f0f0f0 !important;
}
</style>