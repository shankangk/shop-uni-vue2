<template>
	<view class="orderDetail_container">
		<uni-nav-bar title="待发货" @clickLeft="clickLeft" left-icon="left" :statusBar="true" :fixed="true" background-color='#fff' :border="false"></uni-nav-bar>

		<div class="page_body">
			<div class="address_box">
				<div class="user_info">
					<image :src="shopPrefix + '/location_icon.png'" class="left_location_icon"></image>
					<div class="userName">羊羊羊</div>
					<div class="userPhone">19988899989</div>
				</div>
				<div class="address_info">
					<span class="area">安徽省</span>
					<span class="area">合肥市</span>
					<span class="area">包河区</span>
					<span class="area">绿地中心D座30楼</span>
				</div>
			</div>
			<div class="goodsDetail_box">
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
							<div class="goods_num">x3</div>
						</div>
						<div class="goodsInfo_detail_btn_box">
							<button data-goods-id="123" data-goods-name="456" class="btn share" open-type="share">分享商品</button>
							<div @click="refundGoods(item)" class="btn refund">申请退款</div>
						</div>
					</div>
				</div>
			</div>
			<div class="price_total_box">
				<div class="price_total_title">价格核算</div>
				<div class="price_total__price price_total__text_line">
					<div class="text_line_label">商品总价</div>
					<div class="text_line_value">
						<div class="text_line_value_unit">￥</div>
						<div class="text_line_value_num">9.99</div>
					</div>
				</div>
				<div class="price_total__price price_total__text_line">
					<div class="text_line_label">订单运费</div>
					<div class="text_line_value">
						<div class="text_line_value_unit">￥</div>
						<div class="text_line_value_num">9.99</div>
					</div>
				</div>
				<div class="price_total__price price_total__text_line">
					<div class="text_line_label">实付金额</div>
					<div class="text_line_value">
						<div class="text_line_value_unit color_red">￥</div>
						<div class="text_line_value_num color_red">9.99</div>
					</div>
				</div>
			</div>

			<div class="order_info_box">
				<div class="price_total_title">订单信息</div>
				<div class="price_total__price price_total__text_line">
					<div class="text_line_label">订单号</div>
					<div class="text_line_value">
						<span>98765432345678</span>
						<span class="gap_line"></span>
						<span @click="copyOrderNum(item)" class="copy color_red">复制</span>
					</div>
				</div>
				<div class="price_total__price price_total__text_line">
					<div class="text_line_label">下单时间</div>
					<div class="text_line_value">
						<span>2024-12-12 13:30:30</span>
					</div>
				</div>
				<div class="price_total__price price_total__text_line">
					<div class="text_line_label">付款时间</div>
					<div class="text_line_value">
						<span>2024-12-12 13:30:30</span>
					</div>
				</div>
			</div>
		</div>

		<!-- 退货退款弹窗 -->
		<uni-popup ref="refundPopup" borderRadius="32rpx 32rpx 0 0" :safe-area="true" background-color="#fff">
			<div class="refundPopup_header">
				<div class="refundPopup_header_title">申请退款</div>
				<image @click="closeRefundPopup" :src="shopPrefix + '/close_icon.png'" class="close_icon"></image>
			</div>
			<div class="refundPopup_content">
				<div class="goodsInfo_box">
					<image src="@/static/test.png" class="goods_pic"></image>
					<div class="goodsInfo_detail">
						<div class="goodsInfo_detail_title">【嗨心兔】纯水湿厕纸80片家庭装加厚加大…</div>
						<div class="goodsInfo_detail_standards">1包80抽</div>
						<div class="goodsInfo_detail_price">
							<div class="price_box">
								<span class="price_unit">￥</span>
								<span class="price_num">9.99</span>
							</div>
							<div class="goods_num">x3</div>
						</div>
					</div>
				</div>
				<div @click="toRefund('refund_money')" class="refund_options_box">
					<div class="refund_options_title">
						<image :src="shopPrefix + '/refund_icon1.png'" class="left_refund_icon"></image>
						<div class="options_title_text">仅退款（无需退货）</div>
					</div>
					<div class="refund_options_info">
						<div class="option_text">未收到货/已拒收，或与商家协商一致不用退货只退款</div>
					</div>
					<image :src="shopPrefix + '/right_icon1.png'" class="right_icon"></image>
				</div>
				<div @click="toRefund('refund_money_goods')" class="refund_options_box">
					<div class="refund_options_title">
						<image :src="shopPrefix + '/refund_icon2.png'" class="left_refund_icon"></image>
						<div class="options_title_text">退货退款</div>
					</div>
					<div class="refund_options_info">
						<div class="option_text">已收到货，需退还收到的货物</div>
					</div>
					<image :src="shopPrefix + '/right_icon1.png'" class="right_icon"></image>
				</div>
			</div>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shopPrefix: this.$shopPrefix,
			};
		},
		mounted() {
			wx.showShareMenu({
				withShareTicket: true,
				menus: ['shareAppMessage', 'shareTimeline']
			})
		},
		methods: {
			clickLeft() {
				uni.navigateBack();
			},
			copyOrderNum(item) {
				uni.setClipboardData({
					data: '123312',
					showToast: false,
					success: function () {
						uni.showToast({
							title: '复制成功',
							icon: 'none',
						})
					}
				});
			},
			refundGoods(item) {
				this.$refs.refundPopup.open('bottom');
			},
			closeRefundPopup() {
				this.$refs.refundPopup.close();
			},
			toRefund(type) {
				uni.navigateTo({
					url: '/subPages/refund/refund?pageType=' + type
				})
				this.$refs.refundPopup.close();
			},
		},
		onShareAppMessage(e) {
			return {
				title: e.target.dataset.goodsName,
				path: '/subPages/productDetail/productDetail' + e.target.dataset.goodsId,
			}
		},
	}
</script>

<style lang="scss">
.orderDetail_container {
	min-height: 100vh;
	background-color: #f9f9f9;

	.page_body {
		padding: 24rpx;

		.address_box {
			display: flex;
			flex-direction: column;
			padding: 24rpx;
			border-radius: 24rpx;
			background-color: #fff;
			margin-bottom: 24rpx;
			
			.user_info {
				display: flex;
				align-items: center;
				color: #333;
				font-size: 28rpx;
				line-height: 44rpx;
				margin-bottom: 20rpx;

				.left_location_icon {
					width: 52rpx;
					height: 52rpx;
					margin-right: 24rpx;
				}

				.userName {
					margin-right: .5em;
				}
			}

			.address_info {
				color: #999;
				font-size: 28rpx;
				line-height: 40rpx;
				padding-left: 76rpx;
				
				.area {
					margin-right: .5em;
				}
			}
		}

		.goodsDetail_box {
			padding: 24rpx;
			border-radius: 24rpx;
			margin-bottom: 24rpx;
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
							color: #333;

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

						.goods_num {
							color: #999;
							font-size: 24rpx;
							line-height: 40rpx;
						}
					}

					.goodsInfo_detail_btn_box {
						display: flex;
						justify-content: flex-end;
						gap: 16rpx;
						margin-top: 24rpx;

						.btn {
							display: flex;
							align-items: center;
							justify-content: center;
							color: #999;
							font-size: 24rpx;
							line-height: 40rpx;
							padding: 4rpx 24rpx;
							border-radius: 40rpx;
						}

						.share {
							color: #FF0C1B;
							border: 2rpx solid #FF0C1B;
							margin: 0;
							background-color: #fff;
						}

						.refund {
							color: #999;
							border: 2rpx solid #999;
						}
					}
				}
			}
		}

		.price_total_box,.order_info_box {
			padding: 24rpx;
			border-radius: 24rpx;
			margin-bottom: 24rpx;
			background-color: #fff;

			.price_total_title {
				color: #333;
				font-size: 28rpx;
				line-height: 40rpx;
				margin-bottom: 20rpx;
			}

			.price_total__text_line {
				display: flex;
				justify-content: space-between;
				margin-bottom: 20rpx;

				&:last-child {
					margin-bottom: 0;
				}

				.text_line_label {
					color: #999;
					font-size: 24rpx;
					line-height: 40rpx;
				}

				.text_line_value {
					display: flex;
					align-items: baseline;
					color: #333;
					font-size: 24rpx;

					.text_line_value_unit {
						font-size: 28rpx;
						line-height: 40rpx;
					}

					.text_line_value_num {
						font-size: 36rpx;
						line-height: 40rpx;
						font-weight: 500;
					}

					.gap_line {
						display: inline-block;
						height: 16rpx;
						margin: 0 16rpx;
						border-right: 2rpx solid #d9d9d9;
					}

					.color_red {
						color: #FF0C1B;
					}
				}
			}
		}
	}

	.refundPopup_header {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100rpx;
		background: #f9f9f9;
		border-radius: 32rpx 32rpx 0 0;

		.refundPopup_header_title {
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

	.refundPopup_content {
		padding: 0 24rpx 24rpx;
		background-color: #f9f9f9;

		.goodsInfo_box {
			display: flex;
			padding: 24rpx;
			margin-bottom: 24rpx;
			border-radius: 24rpx;
			background-color: #fff;

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
						color: #333;

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

					.goods_num {
						color: #999;
						font-size: 24rpx;
						line-height: 40rpx;
					}
				}
			}
		}

		.refund_options_box {
			position: relative;
			display: flex;
			flex-direction: column;
			padding: 24rpx;
			border-radius: 24rpx;
			background-color: #fff;
			margin-bottom: 24rpx;

			&:last-child {
				margin-bottom: 0;
			}
			
			.refund_options_title {
				display: flex;
				align-items: center;
				color: #333;
				font-size: 32rpx;
				line-height: 44rpx;
				margin-bottom: 24rpx;

				.left_refund_icon {
					width: 48rpx;
					height: 48rpx;
					margin-right: 24rpx;
				}
			}

			.refund_options_info {
				color: #999;
				font-size: 24rpx;
				line-height: 34rpx;
				padding-left: 76rpx;
				max-width: 90%;
			}

			.right_icon {
				position: absolute;
				top: 50%;
				right: 24rpx;
				transform: translateY(-50%);
				width: 24rpx;
				height: 36rpx;
			}
		}
	}
}
</style>
