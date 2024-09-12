<template>
	<view class="refundDetail_container">
		<div class="refund_status_box">
			<div v-if="false" class="refund_status_title_auditing status_title">商家正在审核中</div>
			<div v-if="true" class="refund_status_title_success status_title">退款成功</div>

			<div v-if="false" class="refund_status_text_auditing status_tips">商家同意后，会将退款返回到您的账户中</div>
			<div v-if="true" class="refund_status_text_success status_tips">您的订单已完成退款</div>

			<div @click="openProcess_Popup" class="refund_status_detail">查看退款明细</div>
		</div>

		<div class="refund_goods_info_box">
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
			<div class="refund_money_line optionsLine">
				<div class="optionsLine_label">退款金额</div>
				<div class="refund_money_total optionsLine_value">
					<span class="value_text">￥9.99</span>
				</div>
			</div>
			<div class="refund_reason_line optionsLine">
				<div class="optionsLine_label">退款原因</div>
				<div @click="openReasonPopup" class="refund_reason_options optionsLine_value">
					<span class="value_text">拍错/多拍/不喜欢</span>
				</div>
			</div>
			<div class="refund_reason_line optionsLine">
				<div class="optionsLine_label">申请时间</div>
				<div @click="openReasonPopup" class="refund_reason_options optionsLine_value">
					<span class="value_text">2024-12-12 13:30:30</span>
				</div>
			</div>
			<div class="refund_reason_line optionsLine">
				<div class="optionsLine_label">订单编号</div>
				<div @click="openReasonPopup" class="refund_reason_options optionsLine_value">
					<span class="value_text">98765432345678</span>
					<span class="gap_line"></span>
					<span @click="copyOrderNum(item)" class="value_text color_red">复制</span>
				</div>
			</div>
		</div>

		<!-- 退货退款弹窗 -->
		<uni-popup ref="refund_process_Popup" borderRadius="32rpx 32rpx 0 0" :safe-area="true" background-color="#fff">
			<div class="refund_process_Popup_header">
				<div class="refund_process_Popup_title">退款明细</div>
				<image @click="closeProcess_Popup" :src="shopPrefix + '/close_icon.png'" class="close_icon"></image>
			</div>
			<div class="refund_process_Popup_content">
				<div class="process_box">
					<div class="process_box_title">
						<div class="process_box_title_label">退款金额</div>
						<div class="process_box_title_value">
							<span class="value_unit">￥</span>
							<span class="value_num">9.99</span>
						</div>
					</div>
					<div class="process_box_subTitle">退款流程</div>
					<div class="process_box_content">
						<div v-for="(item, index) in 3" :key="index" class="process_item">
							<div class="item_title">
								<span class="round"></span>
								<span class="item_title_status">卖家审核中</span>
								<span class="item_title_time">2024-12-12 13:30:40</span>
							</div>
							<div class="item_tips">已提交给商家审核中，退款将原路退回。</div>
							<div v-if="item != 0" class="item_line"></div>
						</div>
					</div>
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
		mounted() { },
		methods: {
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
			openProcess_Popup() {
				this.$refs.refund_process_Popup.open('bottom');
			},
			closeProcess_Popup() {
				this.$refs.refund_process_Popup.close()
			},
		},
	}
</script>

<style lang="scss">
.refundDetail_container {
	padding: 24rpx;

	.refund_status_box {
		padding: 28rpx 44rpx 24rpx;
		border-radius: 24rpx;
		background-color: #fff;
		margin-bottom: 20rpx;

		.status_title {
			color: #333;
			font-size: 28rpx;
			line-height: 44rpx;
			font-weight: 600;
			margin-bottom: 20rpx;
		}

		.status_tips {
			color: #999;
			font-size: 28rpx;
			line-height: 40rpx;
		}

		.refund_status_detail {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 72rpx;
			font-size: 28rpx;
			color: #333;
			border-radius: 12rpx;
			border: 2rpx solid #e6e6e6;
			margin-top: 24rpx;
		}
	}

	.refund_goods_info_box {
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

		.optionsLine {
			display: flex;
			justify-content: space-between;
			margin-bottom: 24rpx;

			.optionsLine_label {
				color: #999;
				min-width: 5em;
				font-size: 24rpx;
				line-height: 40rpx;
			}

			.optionsLine_value {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: flex-end;

				.value_text {
					color: #333;
					font-size: 24rpx;
					line-height: 40rpx;
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

	.refund_process_Popup_header {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100rpx;
		background: #f9f9f9;
		border-radius: 32rpx 32rpx 0 0;
		padding: 0 24rpx;

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

	.refund_process_Popup_content {
		padding: 24rpx;
		background-color: #f9f9f9;

		.process_box {
			padding: 40rpx 24rpx;
			border-radius: 24rpx;
			background-color: #fff;

			.process_box_title {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 40rpx;

				.process_box_title_label {
					color: #333;
					font-size: 32rpx;
					line-height: 40rpx;
					font-weight: 500;
				}

				.process_box_title_value {
					color: #FF0C1B;

					.value_unit {
						font-size: 28rpx;
						line-height: 40rpx;
					}

					.value_num {
						font-size: 36rpx;
						font-weight: 500;
						line-height: 40rpx;
					}
				}
			}

			.process_box_subTitle {
				color: #333;
				font-size: 28rpx;
				line-height: 40rpx;
				margin-bottom: 24rpx;
			}

			.process_box_content {
				max-height: 800rpx;
				overflow-y: scroll;

				.process_item {
					position: relative;
					margin-bottom: 30rpx;

					&:last-child {
						margin-bottom: 0;
					}

					.item_title {
						display: flex;
						align-items: center;

						.round {
							display: inline-block;
							width: 12rpx;
							height: 12rpx;
							border-radius: 50%;
							border: 2rpx solid #FF0C1B;
							margin-right: 20rpx;
						}

						.item_title_status {
							color: #333;
							font-size: 28rpx;
							line-height: 40rpx;
							margin-right: 20rpx;
						}

						.item_title_time {
							color: #999;
							font-size: 24rpx;
							line-height: 40rpx;
						}
					}

					.item_tips {
						color: #999;
						font-size: 24rpx;
						line-height: 40rpx;
						padding-left: 32rpx;
						margin-top: 14rpx;
					}

					.item_line {
						position: absolute;
						top: -50%;
						left: 8rpx;
						transform: translate(-50%, -50%);
						width: 2rpx;
						height: 68rpx;
						background-color: #FF0C1B;
					}
				}
			}
		}
	}
}
</style>
