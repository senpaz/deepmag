<template>
  <div class="header-bottom" @mouseleave="closeMenu()">
    <div class="container">
      <div>
        <q-tabs
          v-model="tab"
          narrow-indicator
          align="justify"
          dense
          caps
          class="text-black text-roboto text-bold nav-tabs"
        >
          <ul class="menu_lvl1">
            <li :class="{'active-tab' : activeTab === 'men'}" @mouseenter="tabClick('men')">Мужчины</li>
            <li :class="{'active-tab' : activeTab === 'women'}" @mouseenter="tabClick('women')">Женщины</li>
            <li :class="{'active-tab' : activeTab === 'children'}" @mouseenter="tabClick('children')">Дети</li>
          </ul>
        </q-tabs>
      </div>
      <div class="tabs-center">
        <q-tabs
          v-model="subTab"
          narrow-indicator
          align="justify"
          no-caps
          dense
          class="text-black text-roboto nav-tabs"
        >
          <ul class="menu_lvl2">
<!--          <q-tab name="wear" label="Одежда" @click="categoryClick('wear')"/>-->
<!--          <q-tab name="shoes" label="Обувь" @click="categoryClick('shoes')" />-->
<!--          <q-tab name="accesoires" label="Сумки и аксессуары" @click="categoryClick('accesoires')" />-->
<!--          <q-tab name="wnderwear" label="Нижне бельё" @click="categoryClick('wnderwear')" />-->
<!--          <q-tab name="sales" label="Распродажа" class="red-tab" @click="categoryClick('sales')" />-->
            <li :class="{'active-tab' : activeTabCategory === 'wear'}" @mouseenter="categoryClick('wear')">Одежда</li>
            <li :class="{'active-tab' : activeTabCategory === 'shoes'}" @mouseenter="categoryClick('shoes')" >Обувь</li>
            <li :class="{'active-tab' : activeTabCategory === 'accesoires'}" @mouseenter="categoryClick('accesoires')">Сумки и аксессуары</li>
            <li :class="{'active-tab' : activeTabCategory === 'wnderwear'}" @mouseenter="categoryClick('wnderwear')">Нижне бельё</li>
            <li :class="{'active-tab' : activeTabCategory === 'sales'}" class="red-tab" @mouseenter="categoryClick('sales')">Распродажа</li>
          </ul>
        </q-tabs>
      </div>
    </div>
    <div class="container">
      <div class="navigation" :class="{ 'open' : isOpen}">
        <div class="navigation__center">
          <div class="navigation__content">
            <span v-show="activeTab !== 'men'" @click="goTo">Балетки</span>
            <span v-show="activeTabCategory === 'shoes'" @click="goTo">Босоножки</span>
            <span @click="goTo">Ботинки</span>
            <span @click="goTo">Кеды</span>
            <span @click="goTo">Кроссовки</span>
            <span @click="goTo">Мокасины</span>
            <span v-show="activeTab === 'children'" @click="goTo">Первые шаги</span>
            <span @click="goTo">Пляжная обувь</span>
            <span @click="goTo">Полусапоги</span>
            <span @click="goTo">Сандали</span>
            <span @click="goTo">Сапоги</span>
            <span @click="goTo">Слипоны</span>
            <span @click="goTo">Тапочки</span>
            <span @click="goTo">Туфли</span>
            <span @click="goTo">Эспадрильи</span>
            <span @click="goTo">Средства по уходу</span>
          </div>
          <div>
            <ul class="navigation__brands">
              <li class="brand-item brand-item--armani" @click="goToBrand()">
                <q-img src="../../img/AE.png" alt="Armani Exchange" />
              </li>
              <li class="brand-item brand-item--th" @click="goToBrand()">
                <q-img src="../../img/th.png" alt="Tommy Hilfiger" />
              </li>
              <li class="brand-item brand-item--geox" @click="goToBrand()">
                <q-img src="../../img/geox.png" alt="GEOX" />
              </li>
              <li class="brand-item brand-item--ck" @click="goToBrand()">
                <q-img src="../../img/ck.png" alt="Calvin Clein" />
              </li>
              <li class="brand-item brand-item--gant" @click="goToBrand()">
                <q-img src="../../img/gant.png" alt="GANT" />
              </li>
              <li class="brand-item brand-item--guess" @click="goToBrand()">
                <q-img src="../../img/guess.png" alt="GUESS" />
              </li>
              <li class="brand-item brand-item--deepmag" @click="goToBrand()">
                <q-img src="../../img/deepmag.svg" alt="Deep Mag" />
              </li>
            </ul>
          </div>
        </div>
        <div class="navigation__image">
          <q-img
            src="../../img/wom-nav.jpg"
            style="height: 375px; max-width: 250px"
            v-show="activeTab === 'women'"
          />
          <q-img
            src="../../img/men.jpg"
            style="height: 375px; max-width: 250px"
            v-show="activeTab === 'men'"
          />
          <q-img
            src="../../img/child.jpg"
            style="height: 375px; max-width: 250px"
            v-show="activeTab === 'children'"
          />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      tab: ref('women'),
      subTab: ref('wear'),
    }
  },
  data() {
    return {
      isOpen: false,
      activeTab: '',
      activeTabCategory: '',
    }
  },
  methods: {
    tabClick(tab) {
      // if(this.activeTab === tab && this.isOpen === true) {
      //   this.isOpen = false
      // } else {
        this.activeTab = tab
        this.isOpen = true
      // }
    },
    categoryClick(subTab) {
      this.activeTabCategory = subTab
      if(this.activeTab === '') {
        this.activeTab = 'women'
        this.isOpen = true
      }
      // } else if (this.subTab !== subTab && this.isOpen === true) {
      //   return
      // } else {
      //   this.isOpen = !this.isOpen
      // }
    },
    goTo() {
      this.isOpen = false
      this.$router.push('/catalog')
    },
    goToBrand() {
      this.isOpen = false
      this.$router.push('/catalog')
    },
    closeMenu(){
      this.isOpen = false
      this.activeTab = ''
        this.activeTabCategory= ''
    }
  }
}
</script>

<style lang="scss" scoped>
.header-bottom {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 5px rgb(0 0 0 / 10%);
}

::v-deep .nav-tabs {
  margin-left: -10px;

  div {
    min-width: fit-content;
    line-height: 18px;
    font-size: 16px;

    .q-tab {
      line-height: 20px;
      min-height: 20px;
      padding: 0 10px;

      &--active div {
        text-shadow:0px 0px 1px black;
      }

      &--active.red-tab div {
        text-shadow: none;
      }
    }
    .q-focus-helper {
      background: #ffffff !important;
    }
  }

  & .red-tab div {
    color: #DA251C;
    font-weight: bold;
  }
}

.tabs-center {
  margin-left: 340px;
  margin-bottom: 20px;

  @media (max-width: 1760px) {
    margin: 0 0 20px auto;
  }
}

.navigation {
  display: flex;
  height: 0;
  overflow: hidden;
  transition: 0.3s;
  width: 100%;

  &__center {
    display: flex;
    flex-direction: column;
    width: 864px;
    margin: 0 0 auto auto;
  }


  &__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
    margin: 0 0 70px auto;
    padding-top: 20px;

    span {
      display: block;
      color: #000000;
      width: 144px;
      margin-bottom: 25px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
    }

    span:hover {
      text-shadow:0px 0px 1px black;
    }
  }

  &__brands {
    display: flex;
    flex-wrap: wrap;
    margin-left: -10px;

    @media (min-width: 1024px) and (max-width: 1440px) {
      justify-content: center;
    }

  }

  &__image {
    width: 250px;
    height: 375px;
    margin: 0 90px 35px 130px;

    @media (min-width: 1024px) and (max-width: 1440px) {
      margin: 0 0 auto auto;
    }
  }
}

.open {
  transition: 0.3s;
  height: 410px;
}

.brand-item {
  padding: 0 10px;
  margin-bottom: 25px;
  cursor: pointer;

  &--armani {
    width: 293px;
  }

  &--th {
    width: 388px;
  }

  &--geox {
    width: 170px;
    padding-left: 30px;
  }

  &--ck {
    width: 170px;
  }

  &--gant {
    width: 220px;
    padding: 0 25px;
  }

  &--guess {
    width: 98px;
  }

  &--deepmag {
    width: 350px;
    padding-left: 40px;
    padding-right: 0;
  }
}
.menu_lvl1{
  display: flex;
  align-items: center;
  margin: 0;
  position: relative;
  //background-color: #fff;
  //z-index: 10;
  li{
    cursor: pointer;
    color: #1D1D1D;
    //text-transform: uppercase;
    font-size: 18px;
    border-bottom: 2px solid transparent;
    font-weight: 500;
    transition: .3s;
    //&:hover{
    //
    //}
    &:not(:last-child){
      margin-right: 30px;
    }
  }
  li.active-tab{
    border-color: black;
    text-shadow:0 0 1px black;
  }
}
.menu_lvl2{
  display: flex;
  align-items: center;
  margin: 0;
  position: relative;
  //background-color: #fff;
  //z-index: 10;
  li{
    cursor: pointer;
    color: #1D1D1D;
    font-size: 16px;
    border-bottom: 2px solid transparent;
    font-weight: 500;
    transition: .3s;
    //&:hover{
    //
    //}
    &:not(:last-child){
      margin-right: 30px;
    }
  }
  li.active-tab{
    border-color: black;
    text-shadow:0 0 1px black;
  }
  li.red-tab {
    color: #DA251C;
    text-shadow:0 0 0px red;
    font-weight: bold;
  }
  li.active-tab.red-tab{
    border-color: red;
  }
}
</style>
