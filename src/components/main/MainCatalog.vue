<template>
  <div class="container" style="text-align:center">
    <ul class="catalog-list">
      <li
        v-for="item in brands"
        :key="item"
        class="catalog-list__item"
      >
        <router-link :to="item.link" class="catalog-list__link">
          <div class="catalog-list__image">
            <img :src="item.img" :alt="item.alt">
          </div>
          <div class="catalog-list__link-wrapper">
            <span class="catalog-list__link">В каталог</span>
            <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.3536 4.85355C10.5488 4.65829 10.5488 4.34171 10.3536 4.14645L7.17157 0.964466C6.97631 0.769204 6.65973 0.769204 6.46447 0.964466C6.2692 1.15973 6.2692 1.47631 6.46447 1.67157L9.29289 4.5L6.46447 7.32843C6.2692 7.52369 6.2692 7.84027 6.46447 8.03553C6.65973 8.2308 6.97631 8.2308 7.17157 8.03553L10.3536 4.85355ZM0 5H10V4H0V5Z" fill="black"/>
            </svg>
          </div>
        </router-link>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  data() {
    return {
      brands: [
        {
          img: require('src/img/AE.png'),
          link: '/catalog',
          alt: 'Armani Exchange'
        },
        {
          img: require('src/img/guess.png'),
          link: '/catalog',
          alt: 'Guess'
        },
        {
          img: require('src/img/ck.png'),
          link: '/catalog',
          alt: 'Calvin Klein'
        },
        {
          img: require('src/img/geox.png'),
          link: '/catalog',
          alt: 'Geox'
        },
        {
          img: require('src/img/gant.png'),
          link: '/catalog',
          alt: 'Gant'
        },
        {
          img: require('src/img/deepmag.svg'),
          link: '/catalog',
          alt: 'Deepmag'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog-list {
  margin: 69px auto 100px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1440px;
  padding-left: 0;

  @media (max-width: 1023px) {
    width: 690px;
    margin-bottom: 0;
  }

  @media (max-width: 767px) {
    width: 300px;
    margin-top: 20px;
  }

  &__item {
    padding-top: 90px;
    width: 480px;
    height: 300px;
    display: flex;
    margin-bottom: 5%;
    flex-direction: column;
    text-align: center;
    border: 1px solid #c4c4c4;

    @media (max-width: 1023px) {
      width: 330px;
    }
    @media (max-width: 1440px) {
      width: 330px;
      height: 270px;
    }
    @media (max-width: 767px) {
      padding: 0;
      width: 145px;
      height: 110px;
      justify-content: center;
    }
 
  }
  &__image {
    display: flex;
    justify-content: center;
    width: 300px;
    height: 30px;
    margin: 0 auto;

    @media (max-width: 1440px) {
      width: 270px;
    }

    @media (max-width: 767px) {
      display: flex;
      align-items: center;
      width: 130px;
      height: 30px;
    }
    & img {
      max-width: 100%;

      @media (max-width: 767px) {
        width: 85%;
      }
    }
  }
  &__link span {
    position: relative;
    height: 100%;
    display: block;
    color: #000000;
    font-size: 18px;
    margin-right: 10px;
    

    @media (max-width: 767px) {
      font-size: 12px;
    }
  }

  &__link-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 30px;

    @media (max-width: 767px) {
      margin: 15px 0 -20px 0;
    }
  }
}
</style>