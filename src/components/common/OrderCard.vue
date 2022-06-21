<template>
  <div class="orders__card">
    <q-img src="../../img/card1.jpg" alt="" />
    <div class="orders__description">
      <h3>Юбка миди</h3>
      <div class="orders__row">
        <span>LOVE REPUBLIC</span>
        <span>Цвет: Черный</span>
      </div>
      <div class="orders__row">
        <span>Размер: XXL</span>
        <span>1 шт.</span>
      </div>
      <h3>3 400 ₽</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.orders {
  &__card {
    display: flex;
    flex-direction: column;
    width: 198px;
  }

  &__description {
    margin-top: 5px;
    color: #525252;

    h3 {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      margin-bottom: 5px;
    }
  }

  &__row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;

    & span {
      font-weight: 500;
      font-size: 11px;
      line-height: 13px;
    }
  }
}
</style>