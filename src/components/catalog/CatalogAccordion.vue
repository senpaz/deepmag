<template>
  <div class="accordion" :class="{ 'open' : isOpened, sizes : sizes }">
    <div class="accordion__top" :class="{ sizes : sizes }"  @click="openbox">
      {{ title }}
    </div>
    <div class="accordion__brands">
      <div v-show="!isOpened">
        <slot  name="brands" />
      </div>
    </div>
    <div class="accordion__content" :class="{ sizes : sizes }">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
		title: {
			type: String,
    	required: true,
    },
    sizes: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
   data() {
    return {
      isOpened: false
    }
  },
  methods: {
    openbox() {
      this.isOpened =!this.isOpened;
    }
  }
}
</script>

<style lang="scss" scoped>
.accordion {
  width: 100%;
  padding: 0 5px;
  border: 1px solid #C4C4C4;
  overflow: hidden;
  transition: 0.2s;
  border-radius: 2px;
  font-weight: 500;

  &.open {
    height: fit-content;
    transition: 0.2s;

    & .accordion__top::after {
      transform: rotate(0);
      transition: 0.2s;
    }

    &.sizes .accordion__top::after {
      display: block;
      transform: rotate(180deg);
    }

    & .accordion__content {
      height: fit-content;
      transform: translateY(0);
      transition: 0.2s;
    }

    &.sizes .accordion__content {
      position: relative;
      z-index: 10;
      background: #fff;
      box-shadow: -2px -2px 2px rgba(0, 0, 0, 0.1) inset;
    }
  }

  &.sizes {
    padding: 0;
    border: none;
  }

  &__top {
    position: relative;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: left;
    transition: 0.3s;
    cursor: pointer;
    z-index: 3;
    background: #ffffff;

    &::after {
      position: absolute;
      content: "";
      width: 16px;
      height: 6px;
      right: 5px;
      top: 10px;
      background-image: url('../../img/up.svg');
      transform: rotate(180deg);
      background-size: contain;
      background-repeat: no-repeat;
      transition: 0.3s;
    }

    &.sizes {
      height: 40px;
      justify-content: center;
      background: #F0F0F0;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;

      &::after {
        display: none;
        position: absolute;
        content: "";
        right: 10px;
        top: 17px;
        opacity: 0.4;
      }
    }

  }

  &__content {
    height: 0;
    transform: translateY(-100%);
    transition: 0.3s;
  }

  &__brands {
    font-size: 9px;
    line-height: 11px;
    color: #525252;
  }
}

</style>