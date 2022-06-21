<template>
  <div class="menu">
    <div class="menu__top">
      <div class="menu__close" @click="$emit('clickClose')"></div>
    </div>
    <div class="menu__bottom">
      <div>
        <q-tabs
          v-model="tab"
          narrow-indicator
          align="justify"
          dense
          caps
          class="text-black text-roboto text-bold nav-tabs menu-tabs"
        >
          <q-tab name="women" label="Женщины" @click="tabClick('women')" />
          <q-tab name="men" label="Мужчины" @click="tabClick('men')" />
          <q-tab name="children" label="Дети" @click="tabClick('children')" />
        </q-tabs>
        <div>
          <div class="menu__tabs">
            <q-tab-panels v-model="tab" animated class="bg-accent">
              <q-tab-panel name="women">
                <div class="flex menu__panel">
                  <ul class="menu__tab-content">
                    <li>
                      <div class="menu__tab-item" >
                        <img src="../../img/wom-wear.svg" alt="icon">
                        <menu-accordion title="Одежда">
                          <div>
                            <ul class="menu__category-list">
                              <li v-for="item in wearList" :key="item" @click="goTo('/catalog')">{{ item.name }}</li>
                            </ul>
                          </div>
                        </menu-accordion>
                      </div>
                    </li>
                    <li>
                      <div class="menu__tab-item" >
                        <img src="../../img/wom-shoes.png" alt="icon">
                        <menu-accordion title="Обувь">
                          <div>
                            <ul class="menu__category-list">
                              <li v-for="item in shoesList" :key="item" @click="goTo('/catalog')">{{ item.name }}</li>
                            </ul>
                          </div>
                        </menu-accordion>
                      </div>
                    </li>
                    <li>
                      <div class="menu__tab-item" >
                        <img src="../../img/wom-bag.png" alt="icon">
                        <menu-accordion title="Сумки и аксессуары">
                          <div>
                            <ul class="menu__category-list">
                              <li v-for="item in shoesList" :key="item" @click="goTo('/catalog')">{{ item.name }}</li>
                            </ul>
                          </div>
                        </menu-accordion>
                      </div>
                    </li>
                     <li>
                      <div class="menu__tab-item" >
                        <img src="../../img/wom-underwear.png" alt="icon">
                        <menu-accordion title="Нижне бельё">
                          <div>
                            <ul class="menu__category-list">
                              <li v-for="item in wearList" :key="item" @click="goTo('/catalog')">{{ item.name }}</li>
                            </ul>
                          </div>
                        </menu-accordion>
                      </div>
                    </li>
                    <li>
                      <div class="menu__tab-item" >
                        <img src="../../img/sale-menu.png" alt="icon">
                        <menu-accordion title="Распродажа" :sale="true">
                          <div>
                            <ul class="menu__category-list">
                              <li v-for="item in wearList" :key="item" @click="goTo('/catalog')">{{ item.name }}</li>
                            </ul>
                          </div>
                        </menu-accordion>
                      </div>
                    </li>
                  </ul>
                  <img class="menu__tab-image" src="../../img/wom-nav.jpg" alt="deepamg woman">
                </div>
                
              </q-tab-panel>
              <q-tab-panel name="men" class="bg-accent">
                <div class="flex menu__panel" >
                  <ul class="menu__tab-content">
                    <li>
                      <div class="menu__tab-item" >
                        <img src="../../img/wom-wear.svg" alt="icon">
                        <menu-accordion title="Одежда">
                          <div>
                            <ul class="menu__category-list">
                              <li v-for="item in wearList" :key="item" @click="goTo('/catalog')">{{ item.name }}</li>
                            </ul>
                          </div>
                        </menu-accordion>
                      </div>
                    </li>
                    <li>
                      <div class="menu__tab-item" >
                        <img src="../../img/men-shoes.png" alt="icon">
                        <menu-accordion title="Обувь">
                          <div>
                            <ul class="menu__category-list">
                              <li v-for="item in shoesList" :key="item" @click="goTo('/catalog')">{{ item.name }}</li>
                            </ul>
                          </div>
                        </menu-accordion>
                      </div>
                    </li>
                    <li>
                      <div class="menu__tab-item" >
                        <img src="../../img/men-bag.png" alt="icon">
                        <menu-accordion title="Сумки и аксессуары">
                          <div>
                            <ul class="menu__category-list">
                              <li v-for="item in shoesList" :key="item" @click="goTo('/catalog')">{{ item.name }}</li>
                            </ul>
                          </div>
                        </menu-accordion>
                      </div>
                    </li>
                     <li>
                      <div class="menu__tab-item" >
                        <img src="../../img/men-underwear.png" alt="icon">
                        <menu-accordion title="Нижне бельё">
                          <div>
                            <ul class="menu__category-list">
                              <li v-for="item in wearList" :key="item" @click="goTo('/catalog')">{{ item.name }}</li>
                            </ul>
                          </div>
                        </menu-accordion>
                      </div>
                    </li>
                    <li>
                      <div class="menu__tab-item" >
                        <img src="../../img/sale-menu.png" alt="icon">
                        <menu-accordion title="Распродажа" :sale="true">
                          <div>
                            <ul class="menu__category-list">
                              <li v-for="item in wearList" :key="item" @click="goTo('/catalog')">{{ item.name }}</li>
                            </ul>
                          </div>
                        </menu-accordion>
                      </div>
                    </li>
                  </ul>
                  <img class="menu__tab-image" src="../../img/men.jpg" alt="deepamg woman">
                </div>
              </q-tab-panel>

              <q-tab-panel name="children" class="bg-accent">
                <div class="flex menu__panel" >
                  <ul class="menu__tab-content">
                    <li>
                      <div class="menu__tab-item" >
                        <img src="../../img/ch-wear.png" alt="icon">
                        <menu-accordion title="Обувь">
                          <div>
                            <ul class="menu__category-list">
                              <li v-for="item in wearList" :key="item" @click="goTo('/catalog')">{{ item.name }}</li>
                            </ul>
                          </div>
                        </menu-accordion>
                      </div>
                    </li>
                    <li>
                      <div class="menu__tab-item" >
                        <img src="../../img/ch-shoes.png" alt="icon">
                        <menu-accordion title="Обувь">
                          <div>
                            <ul class="menu__category-list">
                              <li v-for="item in shoesList" :key="item" @click="goTo('/catalog')">{{ item.name }}</li>
                            </ul>
                          </div>
                        </menu-accordion>
                      </div>
                    </li>
                    <li>
                      <div class="menu__tab-item" >
                        <img src="../../img/sale-menu.png" alt="icon">
                        <menu-accordion title="Распродажа" :sale="true">
                          <div>
                            <ul class="menu__category-list">
                              <li v-for="item in wearList" :key="item" @click="goTo('/catalog')">{{ item.name }}</li>
                            </ul>
                          </div>
                        </menu-accordion>
                      </div>
                    </li>
                  </ul>
                  <img class="menu__tab-image" src="../../img/child.jpg" alt="deepamg children">
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </div>
        </div>
      </div>
    </div>
    <div class="menu__logo" @click="goTo('/')">
      <img src="../../img/deepmag.svg" alt="deepmag-logo">
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import menuAccordion from './MenuAccordion.vue'

export default {
  components: { menuAccordion  },
  setup () {
    return {
      tab: ref('women'),
      subTab: ref(''),
    }
  },
  data() {
    return {
      tabIndex: '',
      menList: [
        {
          img: require('src/img/men-wear.png'),
          title: 'Одежда',
        },
        {
          img: require('src/img/men-shoes.png'),
          title: 'Обувь',
        },
        {
          img: require('src/img/men-bag.png'),
          title: 'Сумки и аксессуары',
        },
        {
          img: require('src/img/men-underwear.png'),
          title: 'Нижне бельё',
        },
        {
          img: require('src/img/sale-menu.png'),
          title: 'Распродажа',
          sale: true
        },
      ],
      childList: [
        {
          img: require('src/img/ch-wear.png'),
          title: 'Одежда',
          slug: 'wear'
        },
        {
          img: require('src/img/ch-shoes.png'),
          title: 'Обувь',
          slug: 'shoes',
        },
        {
          img: require('src/img/sale-menu.png'),
          title: 'Распродажа',
          slug: 'sale',
          sale: true
        },
      ],
      wearList: [
        {
          name: 'Куртки',
          slug: '01'
        },
        {
          name: 'Брюки',
          slug: '02'
        },
        {
          name: 'Майки',
          slug: '03'
        },
        {
          name: 'Худи',
          slug: '04'
        },
        {
          name: 'Костюмы',
          slug: '04'
        },
      ],
      shoesList: [
        {
          name: 'Босаножки',
          slug: '01'
        },
        {
          name: 'Балетки',
          slug: '02'
        },
        {
          name: 'Пляжная обувь',
          slug: '03'
        },
        {
          name: 'Туфли',
          slug: '04'
        },
        {
          name: 'Тапочки',
          slug: '05'
        },
        {
          name: 'Ботинки',
          slug: '06'
        },
        {
          name: 'Эспадрильи',
          slug: '07'
        },
        {
          name: 'Кеды',
          slug: '08'
        },
        {
          name: 'Мокасины',
          slug: '09'
        },
        {
          name: 'Слипоны',
          slug: '10'
        },
        {
          name: 'Полусапоги',
          slug: '11'
        },
        {
          name: 'Сапоги',
          slug: '12'
        },
        {
          name: 'Средства по уходу',
          slug: '13'
        },
      ]
    }
  },
  methods: {
    tabClick(tab) {
      if(this.activeTab === tab && this.isOpen === true) {
        this.isOpen = false
      } else {
        this.activeTab = tab
        this.isOpen = true
      }
    },
    goTo(adr) {
      this.$router.push(adr)
    },
  },
  computed: {
    openTab() {
      return this.tabIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;

  &__top {
    display: flex;
    align-items: center;
    background: #f0f0f0;
    width: 100%;
    height: 60px;
    padding-left: 37px;
    padding-top: 18px;
    padding-bottom: 18px;

    @media (max-width: 767px) {
      padding: 17px 25px;
    }
  }

  &__bottom {
    background: #fafafa;
    padding-top: 20px;

    @media (max-width: 767px) {
      padding-top: 10px;
    }
  }

  &__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 0 0 0;
    width: 100%;
    height: 50px;
    background: #f0f0f0;
    padding-top: 15px;
    padding-bottom: 15px;

    @media (max-width: 767px) {
      margin: 0;
      padding: 15px 25px;
    }

    img {
      @media (max-width: 767px) {
        width: 290px;
      }

       @media (max-width: 360px) {
        width: 270px;
      }
    }
  }
  
  &__close {
    position: relative;
    width: 25px;
    height: 25px;

    &::before,
    &::after {
      position: absolute;
      content: "";
      top: 50%;
      left: 0;
      height: 1px;
      width: 100%;
      background: #000000;
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }

  &__tabs {
    padding-left: 20px;
    background: #fafafa;

    @media (max-width: 360px) {
      padding-left: 0;
    }
  }

  &__tab-content {
    background: #fafafa;
    margin: 0;
    padding-top: 30px;
    max-width: 250px;

    @media (max-width: 767px) {
      padding-top: 20px;
    }
  }

  &__tab-item {
    position: relative;
    display: flex;
    align-items: center;
    color: #000000;
    margin-bottom: 20px;
    width: 265px;

    @media (max-width: 767px) {
      width: 285px;
    }

    img {
      display: flex;
      width: 25px;
      margin: 5px 20px auto 0;
    }
    

    span {
      font-size: 16px;
      margin-left: 20px;
    }

    span.sale {
      font-weight: bold;
      color: #DA251C;
    }
  }

  &__tab-image {
    display: flex;
    margin: 20px auto auto 40px;
    width: 250px;
    height: 335px;

    @media (max-width: 767px) {
      margin-left: 20px;
    }
  }

  &__product-list {
    color: #000000;
    margin: 20px auto 0 40px;

    ul li {
      font-size: 17px;
      margin-bottom: 10px;
    }
  }

  &__category-list li {
    font-size: 17px;
    line-height: 25px;
    margin-bottom: 5px;
  }

  &__panel {
    min-height: 770px;

    @media (max-width: 767px) {
      min-height: 530px;
    }
  }
}

.menu-tabs {
  @media (max-width: 767px) {
    width: 350px;
  }

  @media (max-width: 359px) {
    width: 315px;
  }
}
</style>