<template>
	<div class="home_container">
		<z-paging ref="paging" v-model="productList" @query="queryList">
			<template #top>
				<Nav />
			</template>
			
			<template #loadingMoreNoMore>
				<div style="text-align: center; color: #999;padding-bottom: 24rpx;">没有更多了</div>
			</template>
			
			<template #empty></template>

			<div class="page-body">
				<div class="search_bar">
					<image :src="shopPrefix + '/search_icon.png'" class="search_icon"></image>
					<input v-model.trim="searchProduct" type="text" placeholder="请搜索商品标题" placeholder-class="search_placeholder" class="search_input">
					<div @click="toSearch" class="search_btn">搜索</div>
				</div>

				<div class="product_banner">
					<uni-swiper-dot :info="[1,2,3,4]" :current="currentSwiper" field="content" mode="round">
						<swiper @change="swiperChange" class="banner_swiper" circular :autoplay="true">
							<swiper-item>
								<view class="swiper-item uni-bg-red">A</view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item uni-bg-green">B</view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item uni-bg-blue">C</view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item uni-bg-blue">D</view>
							</swiper-item>
						</swiper>
					</uni-swiper-dot>
				</div>

				<div class="product_list">
					<div @click="toProductDetail(item)" v-for="(item, index) in 6" :key="index" class="product_item">
						<image class="product_pic" src="@/static/test.png"></image>
						<div class="product_item_body">
							<div class="product_desc">【嗨心兔】纯水湿厕纸80片家庭装加厚加大大大</div>
							<div class="product_price">
								<div class="price_num">
									<span class="unit">￥</span>
									<span class="num">9.99</span>
								</div>
								<div class="sale_num">已售999</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</z-paging>
	</div>
</template>

<script>
import { login } from '@/api/home';
import Nav from './nav.vue';
export default {
	data() {
		return {
			shopPrefix: this.$shopPrefix,
			searchProduct: '',
			productList: [],
			currentSwiper: 0,
		};
	},
	components: {
		Nav,
	},
	onLoad() {
	},
	mounted() {

	},
	methods: {
		toSearch() {
			if (!this.searchProduct) return;

			uni.navigateTo({
				url: '/subPages/searchPage/searchPage?searchProduct=' + this.searchProduct
			})
		},
		toProductDetail(item) {
			uni.navigateTo({
				url: '/subPages/productDetail/productDetail'
			})
		},
		onRefresh() {
			setTimeout(() => {
				this.$refs.paging.complete();
			}, 1500)
		},
		queryList(pageNo, pageSize) {
			console.log(pageNo, pageSize);
			this.$refs.paging.complete([]);
		},
		swiperChange(e) {
			this.currentSwiper = e.detail.current;
		},
	}
};
</script>

<style lang="scss" scoped>
.home_container {
	min-height: 100vh;
	background-color: #f9f9f9;
	background-repeat: no-repeat;
	background-size: auto 600rpx;
	background-image: linear-gradient(180deg, rgba(255, 12, 27, 0.12) 0%, rgba(255, 255, 255, 0) 100%);

	.page-body {
		padding: 0 24rpx 24rpx;

		.search_bar {
			display: flex;
			align-items: center;
			height: 80rpx;
			background-color: #fff;
			border-radius: 76rpx;
			padding: 0 8rpx 0 24rpx;
			margin-bottom: 24rpx;

			.search_icon {
				width: 32rpx;
				height: 32rpx;
				margin-right: 16rpx;
			}

			.search_input {
				flex: 1;
				height: 44rpx;
				font-size: 28rpx;

				/deep/.search_placeholder {
					color: #999;
					font-size: 28rpx;
				}
			}
			
			.search_btn {
				display: flex;
				align-items: center;
				justify-content: center;
				color: #fff;
				width: 144rpx;
				height: 64rpx;
				font-size: 28rpx;
				border-radius: 32rpx;
				margin-left: 24rpx;
				background: linear-gradient(51.35deg, #FF0C1B 10.25%, #FF474F 80.97%);
			}
		}

		.product_banner {
			height: 340rpx;
			border-radius: 16rpx;
			background-color: pink;
			margin-bottom: 24rpx;

			.banner_swiper {
				height: 340rpx;
			}
		}

		.product_list {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 24rpx;

			.product_item {
				display: flex;
				flex-direction: column;
				width: 340rpx;
				height: 520rpx;
				border-radius: 24rpx;
				background-color: #fff;
				overflow: hidden;

				.product_pic {
					width: 100%;
					height: 340rpx;
					border-radius: 24rp 24rpx 0 0;
				}

				.product_item_body {
					flex: 1;
					padding: 0 20rpx;

					.product_desc {
						color: #333;
						font-size: 28rpx;
						line-height: 40rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
  						-webkit-line-clamp: 2;
						margin: 20rpx 0 16rpx 0;
					}

					.product_price {
						display: flex;
						justify-content: space-between;

						.price_num {
							color: #FF0C1B;

							.unit {
								font-size: 28rpx;
								line-height: 40rpx;
							}

							.num {
								font-size: 36rpx;
								line-height: 40rpx;
								font-weight: 500;
							}
						}

						.sale_num {
							color: #999;
							font-size: 20rpx;
							line-height: 40rpx;
						}
					}
				}
			}
		}
	}
}
</style>
