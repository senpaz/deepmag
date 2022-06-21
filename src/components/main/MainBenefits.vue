<template>
  <section class="container benefits">
    <h2>Преимущества</h2>
    <ul class="benefits__list">
      <li class="benefits__list-item">
        <img src="../../img/note.png" alt="note-icon">
        <h3>ДОСТАВКА И ОПЛАТА</h3>
        <p>Доставка от 15000 рублей в чеке – бесплатно. Оплата после примерки у вас дома.</p>
      </li>
      <li class="benefits__list-item">
        <img src="../../img/flag.png" alt="flag-icon">
        <h3>СИСТЕМА ЛОЯЛЬНОСТИ</h3>
        <p>Ваша экономия с каждой покупки! Скачай свою карту сети уже сегодня!</p>
      </li>
      <li class="benefits__list-item">
        <img src="../../img/star.png" alt="star-icon">
        <h3>ОРИГИНАЛЬНАЯ ПРОДУКЦИЯ</h3>
        <p>Совершая покупку в наших магазинах, вы можете быть уверены, что приобретаете оригинальную одежду и обувь у авторизованного продавца.</p>
      </li>
      <li class="benefits__list-item">
        <img src="../../img/done.png" alt="done-icon">
        <h3>КАЧЕСТВО МАТЕРИАЛОВ</h3>
        <p>В коллекциях наших брендов представлены как 100% натуральные ткани, так и в колоборации с нано-синтетичкими волокнами высокого качества.</p>
      </li>
      <li class="benefits__list-item">
        <img src="../../img/plant.png" alt="plant-icon">
        <h3>СОВРЕМЕННЫЕ ТЕХНОЛОГИИ</h3>
        <p>Мы работаем с брендами, которые изготавливают свою продукцию из переработанных материалов, созданную с особой заботой об окружающей среде.</p>
      </li>
      <!-- <li
        v-for="item in benefits"
        :key="item"
        class="benefits__list-item"
      >
        <img :src="item.image" :alt="item.alt">
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
      </li> -->
    </ul>
  </section>
  
</template>

<script>
export default {
  data() {
    return {
      benefits: [
        {
          image: '../../img/note.png',
          title: 'ДОСТАВКА И ОПЛАТА',
          alt: 'note-icon',
          text: 'Доставка от 15000 рублей в чеке – бесплатно. Оплата после примерки у вас дома.'
        },
        {
          image: '../../img/flag.png',
          title: 'СИСТЕМА ЛОЯЛЬНОСТИ',
          alt: 'flag-icon',
          text: 'Ваша экономия с каждой покупки! Скачай свою карту сети уже сегодня!'
        },
        {
          image: '../../img/star.png',
          title: 'ОРИГИНАЛЬНАЯ ПРОДУКЦИЯ',
          alt: 'star-icon',
          text: 'Совершая покупку в наших магазинах, вы можете быть уверены, что приобретаете оригинальную одежду и обувь у авторизованного продавца.'
        },
        {
          image: '../../img/done.png',
          title: 'КАЧЕСТВО МАТЕРИАЛОВ',
          alt: 'done-icon',
          text: 'В коллекциях наших брендов представлены как 100% натуральные ткани, так и в колоборации с нано-синтетичкими волокнами высокого качества.'
        },
        {
          image: '../../img/plant.png',
          title: 'СОВРЕМЕННЫЕ ТЕХНОЛОГИИ',
          alt: 'plant-icon',
          text: 'Мы работаем с брендами, которые изготавливают свою продукцию из переработанных материалов, созданную с особой заботой об окружающей среде.'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.benefits {
  display: flex;
  flex-direction: column;
  text-align: center;
  & h2 {
    font-size: 40px;
    font-weight: 400;
    margin-top: 70px;
    margin-bottom: 0;
  }
  &__list {
    padding-left: 0;
    display: flex;
    flex-direction: row;
    margin: 50px auto 100px auto;
    justify-content: space-between;
    width: 1300px;
    @media (min-width: 1024px) and (max-width: 1440px) {
      width: 960px;
    }
    @media (min-width: 700px) and (max-width: 1023px) {
      width: 690px;
      flex-wrap: wrap;
    }
    @media (max-width: 699px) {
      flex-direction: column;
      width: 360px;
      align-items: center;
    }
    &-item {
      width: 225px;
      padding: 0 20px;
      text-align: center;
      @media (min-width: 700px) and (max-width: 1023px) {
        width: 345px;
        font-size: 14px;
        padding: 0 10px;
      }
      @media (max-width: 699px) {
        width: 340px;
        font-size: 12px;
        padding: 0;
        margin: 20px;
      }
      &:last-child {
        @media (min-width: 700px) and (max-width: 1023px) {
          width: 410px;
          margin: 0 auto;
        }
      }
      & h3 {
        font-size: 14px;
        line-height: 20px;
        font-weight: 500;
        margin-bottom: 25px;
      }
      @media (min-width: 1024px) and (max-width: 1440px) {
        width: 160px;
        padding: 0;
      }
    }
  }
}
</style>