<template>
	<view class="userDetail_container">
		<div class="userInfo_box">
			<div class="avatarItem">
				<div class="item_label">头像</div>
				<div class="item_content">
					<button class="avatar-wrapper" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
						<image :src="shopPrefix + '/avatar_icon.png'" class="avatar"></image>
					</button> 
					<image :src="shopPrefix + '/right_icon3.png'" class="right_icon"></image>
				</div>
			</div>
			<div class="infoItem">
				<div class="item_label">昵称</div>
				<div @click="setNicknamePopupOpen" class="item_content">
					<span>张三</span>
					<image :src="shopPrefix + '/right_icon3.png'" class="right_icon"></image>
				</div>
			</div>
			<div class="infoItem">
				<div class="item_label">手机号</div>
				<div class="item_content">
					<button class="avatar-wrapper" open-type="getPhoneNumber" @getphonenumber="getphonenumber">
						<span>13999999999</span>
					</button> 
					<image :src="shopPrefix + '/right_icon3.png'" class="right_icon"></image>
				</div>
			</div>
		</div>

		<div class="companyInfo_box">
			<div class="infoItem">
				<div class="item_label">服务协议</div>
				<div class="item_content">
					<image :src="shopPrefix + '/right_icon3.png'" class="right_icon"></image>
				</div>
			</div>
			<div class="infoItem">
				<div class="item_label">隐私政策</div>
				<div class="item_content">
					<image :src="shopPrefix + '/right_icon3.png'" class="right_icon"></image>
				</div>
			</div>
			<div class="infoItem">
				<div class="item_label">关于我们</div>
				<div class="item_content">
					<span class="aboutUs_text">v0.0.1</span>
				</div>
			</div>
		</div>

		<div class="footer">
			<div @click="changeAccount" class="addAddress_btn">切换账号</div>
		</div>

		<!-- 用户昵称输入弹窗 -->
		<uni-popup ref="nicknamePopup" borderRadius="32rpx 32rpx 0 0" :safe-area="true" background-color="#fff">
			<div class="nicknamePopup_header">
				<div class="nicknamePopup_header_title">设置昵称</div>
				<image @click="closeNicknamePopup" :src="shopPrefix + '/close_icon.png'" class="close_icon"></image>
			</div>
			<div class="nicknamePopup_content">
				<input type="nickname" placeholder="请输入昵称"/>
			</div>
			<div class="common_footer">
				<div class="footer_btn" @click="confirmNickname">确认</div>
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
		},
		methods: {
			onChooseAvatar(e) {
				const { avatarUrl } = e.detail
				console.log(avatarUrl);
			},
			getphonenumber(e) {
				console.log(e)
			},
			setNicknamePopupOpen() {
				this.$refs.nicknamePopup.open('bottom');
			},
			closeNicknamePopup() {
				this.$refs.nicknamePopup.close();
			},
			confirmNickname() {
				this.$refs.nicknamePopup.close();
				uni.showToast({
					title: '修改成功',
					icon: 'none'
				})
			},
			changeAccount() {

			},
		},
	}
</script>

<style lang="scss">
.userDetail_container {
	min-height: 100vh;
	padding: 24rpx;
	background-color: #f9f9f9;

	.userInfo_box {
		padding: 0 24rpx;
		border-radius: 24rpx;
		background-color: #fff;
		margin-bottom: 24rpx;

		.avatarItem,.infoItem {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 148rpx;
			color: #333;
			font-size: 28rpx;
			border-bottom: 2rpx solid #f9f9f9;

			&:last-child {
				border-bottom: none;
			}
			
			.item_content {
				display: flex;
				align-items: center;

				.avatar-wrapper{
					display: flex;
					align-items: center;
					justify-content: center;
					background-color: #fff;
					border: none;
					width: 84rpx;
					height: 84rpx;

					.avatar {
						width: 84rpx;
						height: 84rpx;
					}
				}

				button::after{
					border: none;
				}

				/deep/button {
					padding: 0;
				}

				.right_icon {
					width: 32rpx;
					height: 32rpx;
				}
			}
		}

		.infoItem {
			height: 104rpx;
			
			.avatar-wrapper {
				color: #333;
				font-size: 28rpx;
				width: auto !important;
			}
		}
	}

	.companyInfo_box {
		padding: 0 24rpx;
		border-radius: 24rpx;
		background-color: #fff;

		.infoItem {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 108rpx;
			color: #333;
			font-size: 28rpx;
			border-bottom: 2rpx solid #f9f9f9;

			&:last-child {
				border-bottom: none;
			}
			
			.item_content {
				display: flex;
				align-items: center;

				.aboutUs_text {
					color: #999;
				}

				.right_icon {
					width: 32rpx;
					height: 32rpx;
				}
			}
		}
	}

	.nicknamePopup_header {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100rpx;
		background: linear-gradient(180deg, rgba(255, 12, 27, 0.12) 0%, rgba(255, 12, 27, 0) 100%);

		.nicknamePopup_header_title {
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

	.nicknamePopup_content {
		padding: 48rpx;

		input {
			text-align: center;
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
			color: #FF0C1B;
			width: 670rpx;
			height: 100rpx;
			font-size: 32rpx;
			font-weight: 500;
			border-radius: 64rpx;
			border: 2rpx solid #FF0C1B
		}
	}
}
</style>
