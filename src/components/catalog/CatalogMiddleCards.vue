<template>
   <div class="card">
		<div class="card__image" style="width: 450px">
			<q-img
				:src="image"
				spinner-color="black"
			/>
		</div>
		<div class="card__description">
			<div class="card__description-top flex-between">
				<span class="card__name">{{ name }}</span>
				<span class="card__brand">{{ brand }}</span>
			</div>
			<div class="card__description-bottom  flex-between">
				<div class="flex">
					<span class="card__price">{{ price }} ₽</span>
					<span v-if="sale" class="card__sale">{{ oldPrice}} ₽</span>
				</div>
				
				<div class="card__more" @click="goTo">
					<span style="margin-right: 3px;">Подробнее</span>
					<svg width="87" height="16" viewBox="0 0 87 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM86.7071 8.70711C87.0976 8.31658 87.0976 7.68342 86.7071 7.29289L80.3431 0.928932C79.9526 0.538408 79.3195 0.538408 78.9289 0.928932C78.5384 1.31946 78.5384 1.95262 78.9289 2.34315L84.5858 8L78.9289 13.6569C78.5384 14.0474 78.5384 14.6805 78.9289 15.0711C79.3195 15.4616 79.9526 15.4616 80.3431 15.0711L86.7071 8.70711ZM1 9H86V7H1V9Z" fill="white"/>
          </svg>
				</div>
			</div>
		</div>
    <div class="card__like" @click="toggleFavorite">
      <div v-if="!isFavorite">
        <img src="../../img/heart-big.png" alt="">
      </div>
      <div v-else>
        <svg width="57" height="48" viewBox="0 0 57 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28.9332 48C28.1349 48 27.3652 47.7217 26.7654 47.2163C24.5 45.3105 22.3159 43.5195 20.3889 41.9397L20.379 41.9315C14.7295 37.2995 9.85085 33.2994 6.4564 29.3589C2.66192 24.9537 0.894531 20.777 0.894531 16.2142C0.894531 11.781 2.47453 7.69115 5.34317 4.69742C8.24604 1.6683 12.2292 0 16.5602 0C19.7972 0 22.7617 0.984598 25.371 2.92622C26.6879 3.90629 27.8816 5.10575 28.9332 6.50485C29.9853 5.10575 31.1785 3.90629 32.4958 2.92622C35.1052 0.984598 38.0696 0 41.3067 0C45.6372 0 49.6208 1.6683 52.5237 4.69742C55.3923 7.69115 56.9719 11.781 56.9719 16.2142C56.9719 20.777 55.2049 24.9537 51.4104 29.3585C48.016 33.2994 43.1378 37.2991 37.4891 41.9306C35.5587 43.5129 33.3711 45.3068 31.1006 47.2171C30.5012 47.7217 29.7311 48 28.9332 48Z" fill="#DA251C"/>
        </svg>
      </div>
    </div>
	</div>
</template>

<script>
export default {
	props: {
		image: {
			type: String,
    	required: true,
		},
		name: {
			type: String,
    	required: true,
		},
		brand: {
			type: String,
    	required: true,
		},
		price: {
			type: String,
    	required: true,
		},
		favorite: {
			type: Boolean,
    	required: false,
			default: false
		},
		sale: {
			type: Boolean,
    	required: false,
			default: false
		},
		oldPrice: {
			type: String,
			required: false,
		},
    slug: {
			type: String,
		},
	},
  data() {
    return {
      like: this.favorite,
    }
  },
  methods: {
    goTo() {
      this.$router.push('/product')
    },
    toggleFavorite() {
      this.like = !this.like
    }
  },
  computed: {
    isFavorite() {
      return this.like
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
	position: relative;
	margin: 0 6px 15px 6px;
  min-height: 636px;

	&__description {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 15px;
		width: 100%;
		left: 0;
		bottom: 0;
		height: 111px;
		background: rgba(82, 82, 82, 0.9);
		color: #ffffff;
	}

	&__name,
	&__brand {
		font-size: 24px;
		line-height: 29px;
		font-weight: bold;
	}

	&__price {
		font-weight: bold;
		font-size: 34px;
		line-height: 40px;
    margin-bottom: 7px;
	}

	&__sale {
		position: relative;
		display: block;
		margin: auto 0 10px 3px;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #c4c4c4;

		&::after {
			position: absolute;
			content: "";
			top: 50%;
			left: 0;
			height: 2px;
			width: 100%;
			background: #c4c4c4;
		}
	}

	&__more {
		font-size: 14px;
		line-height: 17px;
		display: flex;
		align-items: center;

		&:hover {
			cursor: pointer;
			opacity: 0.6;
		}
	}

  &__like {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;

    div img,
    div svg {
      max-width: 33px;
      max-height: 28px;
    }
  }
}
</style>
