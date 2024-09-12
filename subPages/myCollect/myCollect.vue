<template>
	<view class="myCollect_container">
		<div v-for="(item, index) in 11" :key="index" class="collect_item">
			<image src="@/static/test.png" class="collect_pic"></image>
			<div class="collect_info">
				<div class="collect_title">【嗨心兔】纯水湿厕纸80片家庭装加厚加大大大加厚加大大大加厚加大大大</div>
				<div class="specifications">1包80抽</div>
				<div class="collect_price">
					<div class="price_num">
						<span class="unit">￥</span>
						<span class="num">9.99</span>
					</div>
					<div @click="openDeletePopup(item)" class="cancelCollect_btn">取消收藏</div>
				</div>
			</div>
		</div>

		<div v-if="false" class="empty_box">
			<image :src="shopPrefix + '/empty_img1.png'" class="empty_pic"></image>
			<div class="empty_text">暂无收藏商品</div>
		</div>

		<uni-popup ref="deletePopup" background-color="#fff" borderRadius='10rpx 10rpx 10rpx 10rpx'>
			<view class="inquiry">
				<view class="title">提示</view>
				<view class="inquiry-content">确认取消收藏？</view>
				<view class="btn">
					<view class="cancel" @click="closeDeletePopup">取消</view>
					<view class="affirm" @click="confirmDeletePopup">确认</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shopPrefix: this.$shopPrefix,
				currentChoose: null,
			};
		},
		methods: {
			openDeletePopup(item) {
				this.currentChoose = item;
				this.$refs.deletePopup.open('center')
			},
			closeDeletePopup() {
				this.$refs.deletePopup.close()
			},
			confirmDeletePopup() {
				this.$refs.deletePopup.close()
			},
		},
	}
</script>

<style lang="scss">
.myCollect_container {
	padding: 24rpx;
	min-height: 100vh;
	background-color: #f9f9f9;

	.collect_item {
		display: flex;
		padding: 24rpx;
		background-color: #fff;
		border-radius: 24rpx;
		margin-bottom: 24rpx;

		&:last-child {
			margin-bottom: 0;
		}

		.collect_pic {
			width: 192rpx;
			height: 192rpx;
			border-radius: 12rpx;
			margin-right: 24rpx;
		}

		.collect_info {
			flex: 1;

			.collect_title {
				color: #333;
				font-size: 28rpx;
				line-height: 40rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				margin-bottom: 16rpx;
			}

			.specifications {
				color: #999;
				font-size: 20rpx;
				line-height: 40rpx;
				margin-bottom: 16rpx;
			}

			.collect_price {
				display: flex;
				align-items: center;
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

				.cancelCollect_btn {
					display: flex;
					align-items: center;
					justify-content: center;
					color: #999;
					font-size: 20rpx;
					line-height: 40rpx;
					width: 120rpx;
					height: 48rpx;
					border-radius: 40rpx;
					border: 1rpx solid #00000033
				}
			}
		}
	}

	.empty_box {
		position: absolute;
		top: 45%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;

		.empty_pic {
			width: 302rpx;
			height: 230rpx;
			margin-bottom: 24rpx;
		}

		.empty_text {
			color: #999;
			font-size: 28rpx;
			line-height: 40rpx;
		}
	}

	.inquiry {
		background-color: #fff;
		width: 582rpx;
		border-radius: 24rpx;
		padding: 44rpx 24rpx 44rpx;

		.title {
			height: 48rpx;
			font-weight: 700;
			text-align: center;
			line-height: 48rpx;

		}

		.inquiry-content {
			text-align: center;
			color: #999999;
			padding: 40rpx 0;
			border-bottom: 1rpx solid #F0F0F0;
		}

		.btn {
			padding-top: 32rpx;
			display: flex;
			align-content: center;

			.cancel {
				width: 290rpx;
				text-align: center;
			}

			.affirm {
				width: 290rpx;
				text-align: center;
				font-weight: 700;
				border-left: 1rpx solid #F0F0F0;
				color: red;
			}
		}
	}
}
</style>
