<template>
	<li class="slide">
		<div  @mouseenter="showDescr"  @mouseleave="hideDescr" @click="goTo" >
			<q-img class="full-height slide__image" :src="imageUrl" />
			<div class="slide__descr text-roboto" :class="{ shown: isShown }">
				<p>Серьги позолоченные</p>
				<h4>300₽</h4>
				<span>Подробнее</span>
			</div>
		</div>
	</li>
</template>

<script>
export default {
	props: [ 'imageUrl' ],
	data() {
		return {
			isShown: false
		}
	},
	methods: {
		showDescr() {
      this.isShown = !this.isShown
    },
    hideDescr() {
      this.isShown = false
    },
    goTo() {
      this.$router.push('/product')
    }
	}
}
</script>

<style lang="scss" scoped>
.slide-list {
  height: 300px;
}

.slide {
  position: relative;
  width: 200px;
  margin-left: 45px;
  padding: 0;
  height: 300px;

  @media (max-width: 1440px) {
    margin-left: 10px;
  }

  &__image {
    width: 200px;
    height: 100%;

    @media (max-width: 1440px) {
      width: 180px;
      height: 270px;
    }
  }

  &__descr {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    opacity: 0;
    background: #525252;
    color: #ffffff;
    overflow: hidden;
    transition: all 0.5s;

    @media (max-width: 1440px) {
      display: none;
    }

    p {
      white-space: nowrap;
      margin: 10px 0 10px 10px;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      display: flex;
      align-items: center;
      letter-spacing: 0.06em;

      color: #FFFFFF;
    }

    h4 {
      margin: 0 0 10px 10px;
      font-weight: bold;
      font-size: 24px;
      line-height: 24px;
      color: #FFFFFF;
    }

    span {
      position: relative;
      font-weight: normal;
      margin-left: 10px;
      font-size: 14px;
      line-height: 16px;
      display: flex;
      align-items: center;
      cursor: pointer;
      color: #FFFFFF;

      &::after {
        position: absolute;
        content: '';
        bottom: 0;
        right: 15px;
        width: 65px;
        height: 10px;
        background-image: url("../../img/arrow-long.png");
        background-repeat: no-repeat;
      }
    }

    &.shown {
      height: 100px;
      transition: 0.3;
      opacity: 1;
    }
  }
}

</style>
