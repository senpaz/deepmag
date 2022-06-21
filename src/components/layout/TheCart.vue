<template>
  <div class="cart-icon">
    <q-icon color="accent" size="40px">
      <svg width="24" height="28" fill="none" xmlns="http://www.w3.org/2000/svg" class="cart-icon__svg">
        <path d="M23.2 24.2L21.6 6.15a.77.77 0 00-.77-.7h-3.3a5.54 5.54 0 00-11.06 0h-3.3c-.4 0-.73.3-.77.7L.8 24.2v.07C.8 26.33 2.67 28 5 28h14c2.32 0 4.2-1.67 4.2-3.73v-.07zM12 1.55a3.99 3.99 0 013.99 3.9H8A3.99 3.99 0 0112 1.55zm7 24.9H5c-1.46 0-2.64-.96-2.66-2.14L3.87 7h2.6v2.34a.77.77 0 101.55 0V7h7.97v2.34a.77.77 0 101.55 0V7h2.58l1.54 17.3c-.02 1.2-1.2 2.15-2.66 2.15z" fill="#000"/>
      </svg>
    </q-icon>
    <span class="cart-number">0</span>
  </div>
</template>

<style lang="scss" scoped>
.cart-icon {
  position: relative;
  display: flex;
  &__svg {
    transform: scale(1.3);
    margin: 5px 5px auto 10px;
  }
}

.cart-number {
  display: flex;
  position: absolute;
  right: -3px;
  top: 11px;
  justify-content: center;
  font-weight: 600;
  font-size: 11px;
  width: 16px;
  height: 16px;
  color: #fff;
  background: #FF0000;
  border-radius: 50%;
}
</style>