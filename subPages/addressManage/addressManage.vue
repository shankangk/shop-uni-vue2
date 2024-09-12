<template>
	<view class="addressManage_container">
		<div v-for="(item, index) in 6" :key="index" class="addressItem">
			<div class="user_info">
				<div class="username">羊羊羊</div>
				<div class="userPhone">17700009898</div>
			</div>
			<div class="address_info">安徽省合肥市包河区绿地中心d座30楼</div>
			<div class="operate_box">
				<div @click="setDefaultAddress(item)" class="chooseDefaultAddress">
					<div class="radio_box">
						<image v-if="currentAddress == item" :src="shopPrefix + '/radio_choose.png'" class="radio"></image>
						<image v-else :src="shopPrefix + '/radio_none.png'" class="radio"></image>
					</div>
					<div class="radio_text">默认地址</div>
				</div>
				<div class="btn_box">
					<div class="btn_item">编辑</div>
					<div @click="openDeletePopup(item)" class="btn_item">删除</div>
				</div>
			</div>
		</div>

		<div class="footer">
			<div @click="toAddress" class="addAddress_btn">新增地址</div>
		</div>

		<div v-if="false" class="empty_box">
			<image :src="shopPrefix + '/empty_img2.png'" class="empty_img"></image>
			<div class="empty_text">暂无收货地址，请添加</div>
		</div>

		<uni-popup ref="deletePopup" background-color="#fff" borderRadius='10rpx 10rpx 10rpx 10rpx'>
			<view class="inquiry">
				<view class="title">提示</view>
				<view class="inquiry-content">是否删除该地址？</view>
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
				currentAddress: {},
			};
		},
		methods: {
			setDefaultAddress(item) {
				this.currentAddress = item;
			},
			openDeletePopup(item) {
				this.$refs.deletePopup.open('center')
			},
			confirmDeletePopup() {
				this.$refs.deletePopup.close()
			},
			closeDeletePopup() {
				this.$refs.deletePopup.close()
			},
			toAddress() {
				uni.navigateTo({
					url: '/subPages/addAddress/addAddress'
				})
			},
		},
	}
</script>

<style lang="scss">
.addressManage_container {
	position: relative;
	min-height: 100vh;
	padding: 24rpx 24rpx 152rpx 24rpx;
	background-color: #f9f9f9;

	.addressItem {
		padding: 40rpx 24rpx 20rpx 24rpx;
		background-color: #fff;
		border-radius: 24rpx;
		margin-bottom: 24rpx;

		&:last-child {
			margin-bottom: 0;
		}

		.user_info {
			display: flex;
			align-items: center;
			margin-bottom: 24rpx;

			.username {
				color: #333;
				font-size: 36rpx;
				font-weight: 500;
				line-height: 40rpx;
				margin-right: 24rpx;
			}

			.userPhone {
				color: #999;
				font-size: 28rpx;
				line-height: 40rpx;
			}
		}

		.address_info {
			color: #999;
			font-size: 28rpx;
			line-height: 40rpx;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			padding-bottom: 24rpx;
			border-bottom: 2rpx solid #f0f0f0;
			margin-bottom: 24rpx;
		}

		.operate_box {
			display: flex;
			justify-content: space-between;

			.chooseDefaultAddress {
				display: flex;

				.radio_box {
					margin-right: 12rpx;

					.radio {
						width: 24rpx;
						height: 24rpx;
					}
				}

				.radio_text {
					color: #999;
					font-size: 28rpx;
					line-height: 40rpx;
				}
			}

			.btn_box {
				display: flex;

				.btn_item {
					display: flex;
					align-items: center;
					justify-content: center;
					color: #999;
					font-size: 24rpx;
					line-height: 40rpx;
					width: 120rpx;
					height: 48rpx;
					border-radius: 40rpx;
					border: 0.4px solid rgba(0, 0, 0, 0.2);
					margin-right: 24rpx;

					&:last-child {
						margin-right: 0;
					}
				}
			}
		}
	}

	.footer {
		display: flex;
		justify-content: center;
		position: fixed;
		width: 100vw;
		left: 0;
		bottom: 0;
		background-color: #fff;
		padding: 24rpx 0;

		.addAddress_btn {
			display: flex;
			align-items: center;
			justify-content: center;
			color: #fff;
			width: 670rpx;
			height: 100rpx;
			font-size: 32rpx;
			font-weight: 500;
			border-radius: 64rpx;
			background: linear-gradient(51.35deg, #FF0C1B 10.25%, #FF474F 80.97%);
		}
	}

	.empty_box {
		position: absolute;
		top: 35%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.empty_img {
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
