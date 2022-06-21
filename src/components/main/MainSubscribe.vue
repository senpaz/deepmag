<template>
<section class="subscribe container">
  <h3>Подпишитесь на рассылку и получите скидку <span>10%</span> на Ваш заказ</h3>
  <span>Оставайтесь в курсе наших новостей и получите скидку 10%</span>
  <form class="subscribe__email" >
     <q-input
       filled
       label="Эл. почта"
       clearable
       v-model="text"
       class="subscribe__input"
     />
     <button>Подписаться</button>
  </form>
</section>

</template>

<script>
export default {
  data() {
    return {
      text: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.subscribe {
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

  @media (max-width: 767px) {
    margin-top: 10px;
  }

  h3 {
    color: #000000;
    text-align: center;
    font-weight: bold;
    font-size: 35px;
    line-height: 100%;
    width: 1003px;
    margin-top: 10px;

    @media (max-width: 1023px) {
      width: 650px;
      line-height: 60px;
    }

    @media (max-width: 767px) {
      width: 300px;
      font-size: 20px;
      line-height: 22px;
    }

    span {
      display: inline;
      color: #da251c;
      font-size: 35px;
      font-weight: 800;

      @media (max-width: 767px) {
        font-size: 18px;
      }
    }
  }

  span {
    display: block;
    font-size: 32px;
    line-height: 100%;
    display: flex;
    letter-spacing: -0.005em;
    margin-bottom: 40px;

    @media (max-width: 1023px) {
      text-align: center;
    }

    @media (max-width: 767px) {
      font-size: 14px;
      line-height: 18px;
    }
  }

  &__email {
    width: 1003px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1440px) {
      width: 985px;
    }

    @media (max-width: 1023px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    @media (max-width: 767px) {
      width: 300px;
    }

    button {
      width: 300px;
      height: 56px;
      border: none;
      background: #525252;
      color: #ffffff;
      font-size: 18px;
      line-height: 24px;
      font-weight: bold;
      text-transform: uppercase;

      @media (max-width: 1023px) {
        margin-top: 30px;
        width: 630px;
      }

      @media (max-width: 767px) {
        width: 300px;
      }

      &:hover {
        cursor: pointer;
        opacity: 0.7;
      }
    }
  }

  &__input {
    width: 630px;

    @media (max-width: 767px) {
      width: 300px;
      height: 40px;
    }
  }
}


</style>