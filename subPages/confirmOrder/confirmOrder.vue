<template>
	<view class="confirmOrder__container">
		<div @click="toAddress" class="chooseAddress_box">
			<image v-if="true" :src="shopPrefix + '/location_icon.png'" class="address_icon"></image>
			<image v-else :src="shopPrefix + '/add_icon.png'" class="address_icon"></image>
			<div class="address_info_box">
				<div v-if="true" class="address_info_line">
					<span class="defaultAddress">默认</span>
					<span class="info_line_text">
						<span class="province area">安徽省</span>
						<span class="city area">合肥市</span>
						<span class="district area">包河区</span>
					</span>
				</div>
				<div class="address_info_line">
					<span class="info_line_text_bold">包河区绿地中心D座30楼</span>
					<image :src="shopPrefix + '/right_icon.png'" class="right_icon"></image>
				</div>
				<div v-if="true" class="address_info_line">
					<span class="info_line_text userName">羊羊羊</span>
					<span class="info_line_text phone">17799888866</span>
				</div>
			</div>
		</div>

		<div class="orderInfo_box">
			<div v-for="(item, index) in 3" :key="index" class="goodsInfo_box">
				<image src="@/static/test.png" class="goods_pic"></image>
				<div class="goodsInfo_detail">
					<div class="goodsInfo_detail_title">【嗨心兔】纯水湿厕纸80片家庭装加厚加大…</div>
					<div class="goodsInfo_detail_standards">1包80抽</div>
					<div class="goodsInfo_detail_price">
						<div class="price_box">
							<span class="price_unit">￥</span>
							<span class="price_num">9.99</span>
						</div>
						<uni-number-box></uni-number-box>
					</div>
				</div>
			</div>
			<div class="goods_total_price goods_text_line">
				<div class="text_line_label">商品总价</div>
				<div class="text_line_value">
					<div class="text_line_value_unit">￥</div>
					<div class="text_line_value_num">9.99</div>
				</div>
			</div>
			<div class="goods_total_price goods_text_line">
				<div class="text_line_label">订单运费</div>
				<div class="text_line_value">
					<div class="text_line_value_unit">￥</div>
					<div class="text_line_value_num">9.99</div>
				</div>
			</div>
		</div>

		<div class="orderInfo_footer">
			<div class="orderInfo_footer_content">
				<div class="left_total_price">
					<span class="left_total_price_label">合计：</span>
					<span class="left_total_price_unit">￥</span>
					<span class="left_total_price_num">9.99</span>
				</div>
				<div @click="toPaySuccess" class="right_submit_btn">提交订单</div>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shopPrefix: this.$shopPrefix,
			};
		},
		methods: {
			toAddress() {
				uni.navigateTo({
					url: '/subPages/addressManage/addressManage'
				})
			},
			toPaySuccess() {
				uni.navigateTo({
					url: '/subPages/paySuccess/paySuccess'
				})
			},
		},
	}
</script>

<style lang="scss">
.confirmOrder__container {
	padding: 24rpx;
	min-height: 100vh;
	background-color: #f9f9f9;

	.chooseAddress_box {
		display: flex;
		align-items: center;
		padding: 28rpx 24rpx;
		border-radius: 24rpx;
		background-color: #fff;
		margin-bottom: 24rpx;

		.address_icon {
			width: 52rpx;
			height: 52rpx;
			margin-right: 24rpx;
		}

		.address_info_box {
			flex: 1;

			.address_info_line {
				display: flex;
				align-items: center;
				position: relative;

				&:nth-child(2) {
					margin: 24rpx 0;
				}

				.info_line_text_bold {
					color: #333;
					font-size: 32rpx;
					line-height: 40rpx;
					font-weight: 500;
				}

				.info_line_text {
					color: #999;
					font-size: 28rpx;
					line-height: 40rpx;

					.area {
						margin-right: .5em;
					}
				}

				.defaultAddress {
					color: #999;
					font-size: 20rpx;
					line-height: 40rpx;
					padding: 0rpx 20rpx;
					border-radius: 8rpx;
					margin-right: 16rpx;
					background-color: #eee;
				}

				.userName {
					margin-right: 24rpx;
				}

				.right_icon {
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					right: 0;
					width: 40rpx;
					height: 40rpx;
				}
			}
		}
	}

	.orderInfo_box {
		padding: 24rpx;
		border-radius: 24rpx;
		background-color: #fff;

		.goodsInfo_box {
			display: flex;
			padding-bottom: 24rpx;
			margin-bottom: 24rpx;
			border-bottom: 2rpx solid #f9f9f9;

			.goods_pic {
				min-width: 192rpx;
				min-height: 192rpx;
				max-width: 192rpx;
				max-height: 192rpx;
				border-radius: 12rpx;
				margin-right: 24rpx;
			}

			.goodsInfo_detail {
				display: flex;
				flex-direction: column;

				.goodsInfo_detail_title {
					color: #333;
					font-size: 28rpx;
					line-height: 40rpx;
					margin-bottom: 16rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
				}

				.goodsInfo_detail_standards {
					color: #999;
					font-size: 20rpx;
					line-height: 40rpx;
					margin-bottom: 16rpx;
				}

				.goodsInfo_detail_price {
					display: flex;
					align-items: center;
					justify-content: space-between;

					.price_box {
						color: #FF0C1B;

						.price_unit {
							font-size: 28rpx;
							line-height: 40rpx;
						}

						.price_num {
							font-size: 36rpx;
							font-weight: 500;
							line-height: 40rpx;
						}
					}
				}
			}
		}
	}

	.goods_text_line {
		display: flex;
		justify-content: space-between;
		margin-bottom: 24rpx;

		&:last-child {
			margin-bottom: 0;
		}

		.text_line_label {
			color: #333;
			font-size: 28rpx;
			line-height: 40rpx;
		}

		.text_line_value {
			display: flex;
			align-items: baseline;
			color: #333;

			.text_line_value_unit {
				font-size: 28rpx;
				line-height: 40rpx;
			}

			.text_line_value_num {
				font-size: 36rpx;
				line-height: 40rpx;
				font-weight: 500;
			}
		}
	}

	.orderInfo_footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100vw;
		// padding-bottom: 68rpx;
		background-color: #fff;
		box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.06);

		.orderInfo_footer_content {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 120rpx;
			padding: 0 24rpx;
			border-bottom: 2rpx solid #f9f9f9;

			.left_total_price {
				.left_total_price_label {
					color: #333;
					font-size: 28rpx;
					line-height: 40rpx;
				}

				.left_total_price_unit {
					color: #FF0C1B;
					font-size: 28rpx;
				}

				.left_total_price_num {
					color: #FF0C1B;
					font-size: 48rpx;
				}
			}

			.right_submit_btn {
				display: flex;
				align-items: center;
				justify-content: center;
				color: #fff;
				width: 200rpx;
				height: 88rpx;
				border-radius: 24rpx;
				background-color: #FF0C1B;
			}
		}
	}
}
</style>
