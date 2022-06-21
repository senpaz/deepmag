<template>
	<section class="container categories">
		<div class="cat-item">
			<h3>ЖЕНЩИНЫ</h3>
			<router-link to="/catalog">
				<div>
					<img
						src="../../img/wom.jpg"
            class="cat-item__image"
					/>
				</div>
			</router-link>
		</div>
		<div class="cat-item">
			<h3>МУЖЧИНЫ</h3>
			<router-link to="/catalog">
				<div>
					<img
						src="../../img/men.jpg"
						class="cat-item__image"
					/>
				</div>
			</router-link>
		</div>
		<div class="cat-item">
			<h3>ДЕТИ</h3>
			<router-link to="/catalog">
				<div>
					<img
						src="../../img/child.jpg"
						class="cat-item__image"
					/>
				</div>
			</router-link>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.categories {
	display: flex;
	justify-content: center;
	margin-bottom: 50px;
}

.cat-item {
	position: relative;
	display: flex;
	padding-left: 40px;
	margin: 0 23px;

  @media (max-width: 1440px) {
    margin: 0 15px;
    padding-left: 30px;
  }

  @media (max-width: 1023px) {
    padding-left: 0;
  }

	h3 {
		position: absolute;
		font-weight: bold;
		font-size: 25px;
		line-height: 39px;
		width: 200px;
		display: flex;
		bottom: 90px;
		left: -90px;
		margin: 0;
		color: #525252;
		transform: rotate(-90deg);

    @media (max-width: 1023px) {
      transform: rotate(0deg);
      bottom: -25px;
      left: auto;
      right: 0;
      justify-content: right;
      font-size: 19px;
      line-height: 25px;
    }
	}

  &__image {
    height: 600px;
    max-width: 424px;

    @media (max-width: 1760px) {
      height: 540px;
      max-width: 382px;
    }

    @media (max-width: 1440px) {
      height: 400px;
      max-width: 297px;
    }

    @media (max-width: 1023px) {
      height: 320px;
      max-width: 225px;
    }
  }

	a:hover {
		opacity: 0.5;
		transition: all 0.3s;
	}
}
</style>