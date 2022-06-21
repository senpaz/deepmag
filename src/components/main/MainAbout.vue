<template>
  <section class="about-wrapper">
    <div class="about container">
      <h3 class="about__title text-roboto">О компании</h3>
      <div class="about__content">
        <div class="about__image-wrapper">
          <q-parallax class="about__image"
            src="../../img/about2.jpg"
          />
        </div>
        <div class="about__text-wrapper">
          <div class="about__text">
            <h3>DEEP MAG</h3>
            <p>— Cеть магазинов мировых брендов ARMANI EXCHANGE, GANT, CALVIN KLEIN, TOMMY HILFIGER, GEOX. Более 10 лет мы являемся официальными представителями всемирно известных брендов в Тюмени, законодателями ярких трендов и модных тенденций.</p>
            <router-link to="/about" class="about__text--link">Читать далее
            <img src="../../img/Arrow-dark.svg" alt="">
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-wrapper {
  background: #E1E1E1;
  text-align: center;

  @media (min-width: 1024px) and (max-width: 1440px) {
    padding: 40px 30px;
  }
  @media  (max-width: 1023px) {
    padding: 30px 50px;
  }
  @media (max-width: 767px) {
    padding: 30px 10px;

  }
}

.about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

  &__title {
    display: flex;
    font-weight: 400;
    width: 250px;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
    letter-spacing: 0.05em;
    margin-top: 50px;
    margin-bottom: 80px;

    @media (max-width: 1023px) {
      width: 490px;
    }

    @media (max-width: 767px) {
      width: 300px;
      font-size: 18px;
      line-height: 20px;
      margin: 0 auto 20px 0;
      font-weight: 700;
      justify-content: left;
      font-family: 'Montserrat', Arial, Helvetica, sans-serif !important;
    }
  }

  &__image {
    width: 600px;
    margin-left: 50px;
    height: 670px !important;

    @media (max-width: 1760px) {
      margin: 0;
      width: 585px;
      margin-left: 65px;
    }

    @media (max-width: 1440px) {
      width: 530px;
      margin-left: 65px;
    }

    @media (max-width: 767px) {
      width: 300px;
      margin: 0;
       height: 500px !important;
    }
  }

  &__image-wrapper {
    display: flex;
    justify-content: left;
    position: relative;
    width: 932px;
    height: 673px;
    margin-bottom: 100px;

    &::after {
      position: absolute;
      content: '';
      left: 648px;
      bottom: 27px;
      background: #525252;
      width: 20px;
      height: 372px;

      @media (max-width: 1440px) {
        left: 594px;
        bottom: 20px;
        width: 10px;
      }
    }

    @media (max-width: 1023px) {
      margin-bottom: 0;
    }

    @media (max-width: 767px) {
      width: 300px;
      height: 450px;
    }
  }
  &__content {
    display: flex;
    flex-wrap: nowrap;
    @media (max-width: 1023px) {
      flex-direction: column;
      align-items: center;
    }
    @media (max-width: 767px) {
      width: 300px;
    }
  }
  &__text-wrapper {

    @media (max-width: 1023px) {
      width: 100%;
      margin-top: -40px;
    }
    @media (max-width: 767px) {
      width: 250px;
      margin-top: -100px;
      margin-left: 80px;
    }
  }

  &__text {
    position: relative;
    background: #f0f0f0;
    width: 872px;
    height: 327px;
    padding: 20px 30px 45px;
    text-align: left;
    margin-top: 20px;
    margin-left: -330px;
    z-index: 3;

    @media (max-width: 1760px) {
      width: 750px;
      height: 380px;
    }

    @media (max-width: 1440px) {
      width: 400px;
      height: 550px;
      margin-left: -455px;
    }

    @media (max-width: 1023px) {
      margin-left: 0;
      width: 660px;
      height: 350px;
      margin-bottom: 30px;
    }

    @media (max-width: 767px) {
      width: 250px;
      padding: 20px;
      height: auto;
    }

    &::after {
      position: absolute;
      content: '';
      right: -19px;
      bottom: 35px;
      background: #525252;
      width: 20px;
      height: 270px;

      @media (max-width: 1440px) {
        transform: rotate(90deg);
        height: 200px;
        width: 10px;
        right: 170px;
        bottom: -105px;
      }

      @media (max-width: 1023px) {
        display: none;
      }
    }

    & h3 {
      margin: 0 auto 20px 0;
      font-size: 22px;
      font-weight: bold;

      @media (max-width: 767px) {
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 10px;
      }
    }
    & p {
      font-size: 24px;
      line-height: 30px;
      margin-bottom: 44px;
      font-weight: 300;

      @media (max-width: 1023px) {
        font-size: 20px;
        line-height: 28px;
      }
      
      @media (max-width: 767px) {
        margin-bottom: 30px;
        font-size: 10px;
        color: #000;
        line-height: 15px;
        font-weight: 500;
      }
    }
    &--link {
      display: flex;
      position: relative;
      align-items: center;
      font-weight: bold;
      font-size: 18px;
      color: #000;

      @media (max-width: 767px) {
        font-size: 12px;
      }

      img {
        padding-left: 10px;

        @media (max-width: 767px) {
          transform: scale(0.5);
          padding-left: 0;
        }
      }

      &:hover {
        opacity: 0.5;
      }
    }
  }
}
</style>