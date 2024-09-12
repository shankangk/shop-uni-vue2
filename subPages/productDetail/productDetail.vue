<template>
	<view class="productDetail_container">
		<uni-nav-bar @clickLeft="clickLeft" :statusBar="true" :fixed="true" background-color='rgba(255, 255, 255, 0)' :border="false">
			<block slot="left">
				<image :src="shopPrefix + '/back_icon.png'" style="width: 48rpx;height: 48rpx;"></image>
			</block>
		</uni-nav-bar>

		<div class="page_body">
			<div class="product_swiper">
				<!-- <image src="@/static/test.png" style="width: 100%;height: 100%;"></image> -->
				<swiper class="banner_swiper"@change="swiperChange" circular :indicator-dots="false" :autoplay="true" indicator-color="rgba(255, 255, 255, 0.6)" indicator-active-color="rgba(255, 255, 255, 1)">
					<swiper-item>
						<view class="swiper-item uni-bg-red">A</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-green">B</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-blue">C</view>
					</swiper-item>
				</swiper>
				<div class="dots_box">
					<span>{{ currentIndex }}</span>
					<span>/</span>
					<span>3</span>
				</div>
			</div>
			<div class="product_info">
				<div class="info_price">
					<div class="price_num">
						<span class="unit">￥</span>
						<span class="num">9.99</span>
					</div>
					<div class="sale_num">已售 999</div>
				</div>
				<div class="info_title">【嗨心兔】纯水湿厕纸80片家庭装加厚加大温和亲肤不连抽</div>
				<div class="info_desc">
					<div @click="openQualityPopup" class="desc_service descItem">
						<div class="desc_label"><image :src="shopPrefix + '/safe_icon.png'" class="icon"></image></div>
						<div class="desc_text">品质保证 · 极速退款</div>
						<image :src="shopPrefix + '/right_icon.png'" class="rightIcon"></image>
					</div>
					<div class="desc_service descItem">
						<div class="desc_label">品牌</div>
						<div class="desc_text">嗨心兔</div>
					</div>
				</div>
				<div class="gap_line">
					<image :src="shopPrefix + '/gap_icon_left.png'" class="gap_icon"></image>
					<span class="text">热门推荐</span>
					<image :src="shopPrefix + '/gap_icon_right.png'" class="gap_icon"></image>
				</div>
				<div class="product_pic_list">
				</div>
			</div>
		</div>

		<div class="goods-carts">
			<div class="carts_line">
				<div class="carts_btn_box">
					<div class="left_little_btn_box">
						<div class="l_collect l_btn">
							<image :src="shopPrefix + '/collect_none_icon.png'" class="l_btn_icon"></image>
							<image v-if="false" :src="shopPrefix + '/collect_isRrue_icon.png'" class="l_btn_icon"></image>
							<div class="l_btn_text">收藏</div>
						</div>
						<div class="l_cart l_btn">
							<image :src="shopPrefix + '/cart_icon.png'" class="l_btn_icon"></image>
							<div class="l_btn_text">购物车</div>
							<uni-badge text="1" class="badge"></uni-badge>
						</div>
						<div class="l_customerService l_btn">
							<image :src="shopPrefix + '/customer_icon.png'" class="l_btn_icon"></image>
							<div class="l_btn_text">客服</div>
						</div>
					</div>
					<div class="right_big_btn_box">
						<div class="r_addCart r_btn">加入购物车</div>
						<div @click="openBuyNowPopup" class="r_buyNow r_btn">立即购买</div>
					</div>
				</div>
			</div>
		</div>

		<!-- 品质弹窗 -->
		<uni-popup ref="qualityPopup" borderRadius="32rpx 32rpx 0 0" :safe-area="true" background-color="#fff">
			<div class="qualityPopup_header">
				<div class="qualityPopup_header_title">品质保证</div>
				<image @click="closeQualityPopup" :src="shopPrefix + '/close_icon.png'" class="close_icon"></image>
			</div>
			<div class="qualityPopup_content">
				<div class="content_info_item">
					<div class="content_info_item_title">
						<span class="dot"></span>
						<span class="text">品质严保</span>
					</div>
					<div class="content_info_item_content">
						商品售前、售中、售后对品质严格把控，全流程品质保障
					</div>
				</div>
				<div class="content_info_item">
					<div class="content_info_item_title">
						<span class="dot"></span>
						<span class="text">7天无理由退货</span>
					</div>
					<div class="content_info_item_content">
						根据国家7天无理由退货规范，确保商品完好情况下，消费者可以申请“7天无理由退换货”
					</div>
				</div>
				<div class="content_info_item">
					<div class="content_info_item_title">
						<span class="dot"></span>
						<span class="text">极速退款</span>
					</div>
					<div class="content_info_item_content">
						满足相应条件，待发货状态下，提交退款申请将免审核立即退款
					</div>
				</div>
			</div>
			<div class="common_footer">
				<div class="footer_btn" @click="closeQualityPopup">我知道了</div>
			</div>
		</uni-popup>

		<!-- 立即购买弹窗 -->
		<uni-popup ref="buyNowPopup" borderRadius="32rpx 32rpx 0 0" :safe-area="true" background-color="#fff">
			<div class="buyNowPopup_header">
				<image src="@/static/test.png" class="buyNowPopup_header_currentGoods_pic"></image>
				<div class="buyNowPopup_header_currentGoods_infoBox">
					<div class="infoBox_price_line">
						<div class="price_line_box">
							<div class="unit">￥</div>
							<div class="num">9.99</div>
						</div>
						<image @click="closeBuyNowPopup" :src="shopPrefix + '/close_icon.png'" class="close_icon"></image>
					</div>
					<div class="infoBox_desc_line">已选择【嗨心兔】纯水湿厕纸80片家庭装加厚加…</div>
				</div>
			</div>
			<div class="buyNowPopup_content">
				<div class="buyNowPopup_content_box">
					<div class="buyNowPopup_content_box_title">品类</div>
					<div class="buyNowPopup_content_box_classifyList_box">
						<div @click="chooseCategory(item)" v-for="(item, index) in 3" :key="index" :class="{ 'classifyList_item': true, 'classifyList_item_ac': item == currentChooseCategory }">
							<image src="@/static/test.png" class="classifyList_item_pic"></image>
							<div :class="{ 'classifyList_item_title': true, 'classifyList_item_title_ac': item == currentChooseCategory }">【嗨心兔】纯水湿厕纸80片家庭…</div>
						</div>
					</div>
					<div class="buyNowPopup_content_box_title" style="margin-bottom: 0;">
						<span>数量</span>
						<uni-number-box background="#fff"></uni-number-box>
					</div>
				</div>
			</div>
			<div class="common_footer">
				<div class="footer_btn" @click="toConfirmOrder">立即购买</div>
			</div>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shopPrefix: this.$shopPrefix,
				currentIndex: 1,
				currentChooseCategory: {},
			};
		},
		mounted() {
			
		},
		methods: {
			clickLeft() {
				uni.navigateBack();
			},
			swiperChange(e) {
				// console.log(e.detail.current, '当前swiper的index');
				this.currentIndex = e.detail.current + 1;
			},
			openQualityPopup() {
				this.$refs.qualityPopup.open('bottom');
			},
			closeQualityPopup() {
				this.$refs.qualityPopup.close();
			},
			openBuyNowPopup() {
				this.$refs.buyNowPopup.open('bottom');
			},
			closeBuyNowPopup() {
				this.$refs.buyNowPopup.close();
			},
			chooseCategory(item) {
				this.currentChooseCategory = item;
			},
			toConfirmOrder() {
				uni.navigateTo({
					url: '/subPages/confirmOrder/confirmOrder'
				})
				this.$refs.buyNowPopup.close();
			},
		},
	}
</script>

<style lang="scss">
.productDetail_container {
	position: relative;

	.page_body {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;

		.product_swiper {
			position: relative;
			height: 750rpx;
			background-color: pink;

			.banner_swiper {
				height: 100%;
			}

			.dots_box {
				position: absolute;
				right: 24rpx;
				bottom: 48rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #fff;
				font-size: 20rpx;
				width: 80rpx;
				height: 36rpx;
				border-radius: 40rpx;
				background-color: rgba(0, 0, 0, 0.5);
			}
		}

		.product_info {
			position: relative;
			top: -24rpx;
			padding: 24rpx;
			border-radius: 24rpx 24rpx 0 0;
			background-color: #f9f9f9;

			.info_price {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 24rpx;

				.price_num {
					color: #FF0C1B;

					.unit {
						font-size: 28rpx;
						line-height: 40rpx;
					}

					.num {
						font-size: 48rpx;
						line-height: 60rpx;
						font-weight: 500;
					}
				}

				.sale_num {
					color: #999;
					font-size: 24rpx;
					line-height: 40rpx;
				}
			}

			.info_title {
				color: #333;
				font-size: 32rpx;
				font-weight: 500;
				line-height: 48rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				margin-bottom: 24rpx;
			}

			.info_desc {
				padding: 0 24rpx;
				border-radius: 24rpx;
				background-color: #fff;

				.descItem {
					position: relative;
					display: flex;
					align-items: center;
					height: 96rpx;
					font-size: 28rpx;
					line-height: 40rpx;
					border-bottom: 2rpx solid #f9f9f9;

					&:last-child {
						border-bottom: none;
					}

					.desc_label {
						display: flex;
						align-items: center;
						color: #999;
						height: 100%;
						min-width: 84rpx;

						.icon {
							position: relative;
							left: 10rpx;
							width: 40rpx;
							height: 40rpx;
						}
					}

					.desc_text {
						color: #333;
					}

					.rightIcon {
						position: absolute;
						top: 50%;
						right: 0;
						transform: translateY(-50%);
						width: 40rpx;
						height: 40rpx;
					}
				}
			}

			.gap_line{
				display: flex;
				align-items: center;
				justify-content: center;
				height: 96rpx;
				color: #999;
				font-size: 24rpx;

				.text {
					margin: 0 12rpx;
				}

				.gap_icon {
					width: 32rpx;
					height: 2rpx;
				}
			}

			.product_pic_list {

			}
		}
	}

	.goods-carts {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100vw;
		// padding-bottom: 68rpx;
		background-color: #fff;
		box-shadow: 0px -4px 4px 0px #0000001F;

		.carts_line {
			padding: 16rpx 24rpx;
			border-bottom: 2rpx solid #f9f9f9;

			.carts_btn_box {
				display: flex;
				height: 88rpx;

				.left_little_btn_box {
					flex: 1;
					display: flex;

					.l_btn {
						position: relative;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						flex: 1;

						.l_btn_icon {
							width: 44rpx;
							height: 44rpx;
							margin-bottom: 4rpx;
						}

						.l_btn_text {
							color: #333;
							font-size: 24rpx;
							line-height: 32rpx;
						}

						.badge {
							position: absolute;
							top: -10rpx;
							right: 10rpx;
							color: #fff;
							font-size: 20rpx;

							/deep/.uni-badge--error {
								background-color: #FF0C1B;
							}
						}
					}
				}

				.right_big_btn_box {
					display: flex;
					width: 390rpx;
					height: 100%;

					.r_btn {
						flex: 1;
						height: 100%;
						display: flex;
						color: #fff;
						align-items: center;
						justify-content: center;
						font-size: 32rpx;
						font-weight: 500;
					}

					.r_addCart {
						border-radius: 24rpx 0 0 24rpx;
						background: linear-gradient(51.35deg, #FFA20C 10.25%, #FFA947 80.97%);
					}

					.r_buyNow {
						border-radius: 0 24rpx 24rpx 0;
						background: linear-gradient(51.35deg, #FF0C1B 10.25%, #FF474F 80.97%);
					}
				}
			}
		}
	}

	.qualityPopup_header {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100rpx;
		background: linear-gradient(180deg, rgba(255, 12, 27, 0.12) 0%, rgba(255, 12, 27, 0) 100%);

		.qualityPopup_header_title {
			color: #333;
			font-size: 32rpx;
			font-weight: 500;
		}

		.close_icon {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			right: 24rpx;
			width: 40rpx;
			height: 40rpx;
		}
	}

	.qualityPopup_content {
		padding: 24rpx;

		.content_info_item {
			min-height: 92rpx;
			margin-bottom: 24rpx;

			&:last-child {
				margin-bottom: 0;
			}

			.content_info_item_title {
				display: flex;
				align-items: center;
				margin-bottom: 12rpx;

				.dot {
					display: inline-block;
					width: 12rpx;
					height: 12rpx;
					border-radius: 50%;
					margin-right: 20rpx;
					background-color: #FF0C1B;
				}

				.text {
					color: #333;
					font-size: 28rpx;
					line-height: 40rpx;
					font-weight: 500;
				}
			}

			.content_info_item_content {
				color: #333;
				font-size: 24rpx;
				line-height: 40rpx;
				padding-left: 32rpx;
			}
		}
	}

	.buyNowPopup_header {
		display: flex;
		padding: 24rpx 24rpx 0;
		background-color: #f9f9f9;
		border-radius: 24rpx 24rpx 0;

		.buyNowPopup_header_currentGoods_pic {
			width: 124rpx;
			height: 124rpx;
			border-radius: 16rpx;
			margin-right: 24rpx;
		}

		.buyNowPopup_header_currentGoods_infoBox {
			flex: 1;
			height: 124rpx;

			.infoBox_price_line {
				position: relative;
				display: flex;
				align-items: center;
				margin-bottom: 20rpx;

				.price_line_box {
					display: flex;
					align-items: baseline;
					color: #FF0C1B;

					.unit {
						font-size: 28rpx;
						line-height: 40rpx;
					}

					.num {
						font-size: 48rpx;
						line-height: 60rpx;
						font-weight: 500;
					}
				}

				.close_icon {
					position: absolute;
					right: 0;
					width: 40rpx;
					height: 40rpx;
				}
			}

			.infoBox_desc_line {
				color: #999;
				font-size: 24rpx;
				line-height: 40rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 1;
			}
		}
	}

	.buyNowPopup_content {
		padding: 20rpx;
		background-color: #f9f9f9;

		.buyNowPopup_content_box {
			padding: 40rpx 24rpx;
			border-radius: 24rpx;
			background-color: #fff;

			.buyNowPopup_content_box_title {
				display: flex;
				align-items: center;
				justify-content: space-between;
				color: #333;
				font-size: 28rpx;
				line-height: 40rpx;
				margin-bottom: 24rpx;
			}

			.buyNowPopup_content_box_classifyList_box {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				grid-gap: 24rpx;
				margin-bottom: 40rpx;

				.classifyList_item {
					display: flex;
					flex-direction: column;
					width: 202rpx;
					height: 296rpx;
					border-radius: 12rpx;
					overflow: hidden;
					background-color: #f5f5f5;
					border: 2rpx solid #fff;

					.classifyList_item_pic {
						width: 100%;
						height: 202rpx;
					}

					.classifyList_item_title {
						flex: 1;
						color: #333;
						font-size: 20rpx;
						line-height: 32rpx;
						padding: 14rpx 16rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
  						-webkit-line-clamp: 2;
					}

					.classifyList_item_title_ac {
						color: #FF0C1B;
					}
				}

				.classifyList_item_ac {
					border: 2rpx solid #FF0C1B;
				}
			}
		}
	}

	.common_footer {
		display: flex;
		justify-content: center;
		padding: 24rpx;

		.footer_btn {
			display: flex;
			justify-content: center;
			align-items: center;
			color: #fff;
			width: 100%;
			height: 100rpx;
			font-size: 32rpx;
			font-weight: 500;
			border-radius: 64rpx;
			background: linear-gradient(51.35deg, #FF0C1B 10.25%, #FF474F 80.97%);
		}
	}
}
</style>
