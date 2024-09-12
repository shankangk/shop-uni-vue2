<template>
	<view class="refund_container">
		<uni-nav-bar :title="pageTitle" @clickLeft="clickLeft" left-icon="left" :statusBar="true" :fixed="true" background-color="#fff" :border="false"></uni-nav-bar>

		<div class="refund_content">
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
				<div class="refund_reason_line optionsLine">
					<div class="optionsLine_label">退款原因</div>
					<div @click="openReasonPopup" class="refund_reason_options optionsLine_value">
						<span class="reason_options_text">拍错/多拍/不喜欢</span>
						<image :src="shopPrefix + '/right_icon2.png'" class="right_icon"></image>
					</div>
				</div>
				<div class="refund_money_line optionsLine">
					<div class="optionsLine_label">退款金额</div>
					<div class="refund_money_total optionsLine_value">
						<span class="money_unit">￥</span>
						<input v-model="refundForm.refund_money" @input="refund_money_change" type="digit" placeholder="0.00" class="money_input" :style="{ width: inputWidth }">
						<image :src="shopPrefix + '/pen_icon.png'" class="right_icon"></image>
					</div>
				</div>
				<div class="refund_money_tips">
					最多可输入商品金额¥9.99
				</div>
			</div>
			<div v-if="pageType == 'refund_money_goods'" class="express_delivery_box">
				<div class="express_delivery_line">
					<div class="express_delivery_line_label">寄件方式</div>
					<div class="express_delivery_line_value">自行寄回</div>
				</div>
				<div class="express_delivery_tips">自行联系快递，运费自付/垫付，手动填写单号</div>
			</div>
			<div class="refund_desc_pic_box">
				<div class="refund_desc_pic_title">上传描述和凭证（选填）</div>
				<div class="refund_desc_pic_content">
					<uni-easyinput v-model="refundForm.refund_desc" :maxlength="200" :trim="true" type="textarea" placeholderStyle="font-size: 24rpx; color: #999" placeholder="补充描述，有助于更好的处理售后问题" :inputBorder="false"></uni-easyinput>
					<div class="text_statistics_box">{{ refundForm.refund_desc.length }}/200</div>
					<image @click="uploadImg" :src="shopPrefix + '/upload_icon.png'" class="pic_upload"></image>
				</div>
			</div>
		</div>

		<!-- 退货退款弹窗 -->
		<uni-popup ref="refund_reason_Popup" borderRadius="32rpx 32rpx 0 0" :safe-area="true" background-color="#fff">
			<div class="refund_reason_Popup_header">
				<div class="refund_reason_Popup_title">退款原因</div>
				<image @click="closeReasonPopup" :src="shopPrefix + '/close_icon.png'" class="close_icon"></image>
			</div>
			<div class="refund_reason_Popup_content">
				<div class="Popup_content_tips">请选择真实原因，帮助商家处理申请</div>
				<div class="Popup_content_reason_box">
					<div @click="chooseReason(item)" v-for="(item, index) in reasonList" :key="index" class="Popup_content_reason_item">
						<div class="Popup_content_reason_text">{{ item.text }}</div>
						<image v-if="currentReason.value == item.value" :src="shopPrefix + '/radio_choose.png'" class="radio"></image>
						<image v-else :src="shopPrefix + '/radio_none.png'" class="radio"></image>
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
				pageTitle: '申请退款',
				shopPrefix: this.$shopPrefix,
				refundForm: {
					refund_money: '',
					refund_desc: '',
				},
				inputWidth: '3em',
				pageType: '',
				currentReason: {},
				reasonList: [
					{
						text: '拍错/多拍/不喜欢',
						value: 1
					},
					{
						text: '材质与商品不符',
						value: 2
					},
					{
						text: '与商家协商一致退款',
						value: 3
					},
					{
						text: '商品与描述不符',
						value: 4
					},
					{
						text: '少件/漏发',
						value: 5
					},
					{
						text: '大小尺寸不符',
						value: 6
					},
					{
						text: '质量问题',
						value: 7
					},
					{
						text: '其他',
						value: 8
					},
				],
			};
		},
		onLoad(options) { 
			const { pageType } = options;
			this.pageType = pageType;
			this.pageTitle = pageType == 'refund_money' ? '申请退款' : '申请退货退款';
		},
		mounted() {

		},
		methods: {
			clickLeft() {
				uni.navigateBack();
			},
			refund_money_change(e) {
				let value = e.detail.value;

				if (value.length > 3 && value.length < 8) {
					this.inputWidth = value.length + 'em'
				} else if (value.length < 3) {
					this.inputWidth = '3em'
				}
			},
			openReasonPopup() {
				this.$refs.refund_reason_Popup.open('bottom');
			},
			closeReasonPopup() {
				this.$refs.refund_reason_Popup.close();
			},
			uploadImg() {
				uni.chooseImage({
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						uni.uploadFile({
							url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
							filePath: tempFilePaths[0],
							name: 'file',
							formData: {
								'user': 'test'
							},
							success: (uploadFileRes) => {
								console.log(uploadFileRes.data);
							}
						});
					}
				});
			},
			chooseReason(item) {
				this.currentReason = item;
			},
		}
	}
</script>

<style lang="scss">
.refund_container {
	min-height: 100vh;
	background-color: #f9f9f9;

	.refund_content {
		padding: 24rpx;

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

					.right_icon {
						width: 32rpx;
						height: 32rpx;
						margin-left: 10rpx;
					}
				}

				.refund_reason_options {
					color: #333;
					font-size: 24rpx;
					line-height: 40rpx;
				}

				.refund_money_total {
					.money_unit {
						color: #333;
						font-size: 28rpx;
						line-height: 40rpx;
					}

					.money_input {
						color: #333;
						width: 3em;
						font-size: 36rpx;
						line-height: 40rpx;
						font-weight: 500;
						text-align: center;
					}
				}
			}

			.refund_money_line {
				margin-bottom: 0;
			}

			.refund_money_tips {
				color: #999;
				line-height: 40rpx;
				font-size: 24rpx;
				text-align: right;
				margin-top: 12rpx;
			}
		}

		.express_delivery_box {
			padding: 24rpx;
			border-radius: 24rpx;
			background-color: #fff;
			margin: 24rpx 0;

			.express_delivery_line {
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 24rpx;
				line-height: 40rpx;
				margin-bottom: 8rpx;

				.express_delivery_line_label {
					color: #999;
				}

				.express_delivery_line_value {
					color: #333;
				}
			}

			.express_delivery_tips {
				color: #999;
				font-size: 20rpx;
				line-height: 40rpx;
				text-align: right;
			}
		}

		.refund_desc_pic_box {
			padding: 24rpx;
			border-radius: 24rpx;
			background-color: #fff;
			margin-top: 24rpx;

			.refund_desc_pic_title {
				color: #999;
				font-size: 24rpx;
				line-height: 40rpx;
				margin-bottom: 24rpx;
			}

			.refund_desc_pic_content {
				padding: 24rpx;
				border-radius: 16rpx;
				background-color: #f9f9f9;

				/deep/.uni-easyinput__content-textarea {
					background-color: #f9f9f9;
					margin: 0;
					font-size: 24rpx;
					line-height: 40rpx;
				}

				.text_statistics_box {
					color: #999;
					font-size: 24rpx;
					line-height: 40rpx;
					text-align: right;
					margin-bottom: 16rpx;
				}

				.pic_upload {
					width: 108rpx;
					height: 108rpx;
				}
			}
		}
	}

	.refund_reason_Popup_header {
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

	.refund_reason_Popup_content {
		padding: 0 24rpx 24rpx;
		background-color: #f9f9f9;

		.Popup_content_tips {
			color: #999;
			font-size: 24rpx;
			line-height: 40rpx;
			margin-bottom: 24rpx;
		}

		.Popup_content_reason_box {
			border-radius: 24rpx;
			padding: 0 24rpx;
			background-color: #fff;

			.Popup_content_reason_item {
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 88rpx;
				border-bottom: 2rpx solid #f9f9f9;

				&:last-child {
					border-bottom: none;
				}

				.Popup_content_reason_text {
					color: #333;
					font-size: 24rpx;
					line-height: 40rpx;;
				}

				.radio {
					width: 32rpx;
					height: 32rpx;
				}
			}
		}
	}
}
</style>
