<template>
	<view class="paySuccess_container">
		<uni-nav-bar title="支付成功" @clickLeft="clickLeft" left-icon="left" :statusBar="true" :fixed="true" background-color='#fff' :border="false" style="position: fixed;top: 0;"></uni-nav-bar>

		<div class="paySuccess_content">
			<image :src="shopPrefix + '/paySuccess_icon.png'" class="success_icon"></image>
			<div class="success_text">支付成功</div>
			<div class="success_btn_box">
				<div class="success_btn back" @click="toHome">返回首页</div>
				<div class="success_btn success" @click="toOrderDetail">查看订单</div>
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
			clickLeft() {
				uni.navigateBack({
					delta: 2,
				});
			},
			toHome(){
				uni.switchTab({
					url: '/pages/home/home'
				});
			},
			toOrderDetail() {
				uni.navigateTo({
					url: '/subPages/orderDetail/orderDetail'
				})
			},
		},
	}
</script>

<style lang="scss">
.paySuccess_container {
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;

	.paySuccess_content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.success_icon {
			width: 302rpx;
			height: 230rpx;
			margin-bottom: 24rpx;
		}

		.success_text {
			color: #999;
			font-size: 28rpx;
			line-height: 40rpx;
		}

		.success_btn_box {
			display: flex;
			gap: 46rpx;
			margin-top: 100rpx;

			.success_btn {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 232rpx;
				height: 80rpx;
				font-size: 28rpx;
				border-radius: 64rpx;
				border: 2rpx solid #FF0C1B;
			}

			.back {
				color: #FF0C1B;
			}

			.success {
				color: #fff;
				background: linear-gradient(51.35deg, #FF0C1B 10.25%, #FF474F 80.97%);
			}
		}
	}
}
</style>
