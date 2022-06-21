<template>
  <div class="accordion" :class="{ 'open' : isOpened }">
    <div class="accordion__top" :class="{ 'sale' : sale }" @click="openbox" >
      {{ title }}
    </div>
    <div class="accordion__content">
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
    sale: {
      type: Boolean,
      required: false,
      default: false
    },
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
  overflow: hidden;
  transition: 0.2s;
  font-weight: 500;

  &.open {
    height: fit-content;
    transition: 0.2s;

    & .accordion__top::after {
      transform: rotate(0);
      transition: 0.2s;
    }

    & .accordion__content {
      height: fit-content;
      transform: translateY(0);
      transition: 0.2s;
    }
  }

  &__top {
    position: relative;
    height: 30px;
    display: flex;
    align-items: center;
    font-size: 18px;
    justify-content: left;
    transition: 0.3s;
    cursor: pointer;
    z-index: 3;
    background: #fafafa;

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

      @media (max-width: 767px) {
        top: 13px;
        right: 0;
      }
    }
  }

  &__content {
    height: 0;
    transform: translateY(-100%);
    transition: 0.3s;
  }
}

.sale {
  font-weight: bold;
  color: #DA251C;
}

</style>