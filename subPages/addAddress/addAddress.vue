<template>
	<view class="addAddress_container">
		<div class="form_box">
			<div class="form_item">
				<div class="label">姓名</div>
				<div class="value">
					<input type="text" placeholder="请输入姓名" placeholder-class="placeholder" class="input">
				</div>
			</div>
			<div class="form_item">
				<div class="label">手机号</div>
				<div class="value">
					<input type="text" placeholder="请输入手机号" placeholder-class="placeholder" class="input">
				</div>
			</div>
			<div class="form_item">
				<div class="label">地区</div>
				<div @click="open" class="value">
					<div v-if="!formData.area" class="fakeInput">请选择地区</div>
					<div v-else class="realInput">{{ formData.area }}</div>
					<image :src="shopPrefix + '/right_icon.png'" class="right_icon"></image>
				</div>
			</div>
			<div class="form_item">
				<div class="label">详细地址</div>
				<div class="value">
					<textarea placeholder="请输入详细地址" auto-height class="textarea" style="max-height: 3em;" />
				</div>
			</div>
			<div class="form_item" style="padding: 24rpx 0;">
				<div class="left_text">
					<div class="text_title">设为默认地址</div>
					<div class="text_desc">启动时间将优先定位在默认地址</div>
				</div>
				<div class="right_switch">
					<switch checked color="#FF0C1B" @change="switchChange" style="transform:scale(0.7)" />
				</div>
			</div>
		</div>

		<div class="footer">
			<div @click="toAddress" class="addAddress_btn">保存</div>
		</div>

		<cityPicker :column="column" :default-value="defaultValue" :mask-close-able="maskCloseAble" @confirm="confirm" @cancel="cancel" :visible="visible"/>
	</view>
</template>

<script>
	import cityPicker from '@/uni_modules/piaoyi-cityPicker/components/piaoyi-cityPicker/piaoyi-cityPicker';
	export default {
		data() {
			return {
				shopPrefix: this.$shopPrefix,
				visible: false,
                maskCloseAble: true,
				column: 3,
				formData: {
					userName: '',
					phone: '',
					area: '',
					address: '',
					isDefault: true,
				},
			};
		},
		components: {
            cityPicker
        },
		methods: {
			open () {
                this.visible = true;
            },
            confirm (val) {
                console.log(val);
				this.formData.area = val.provinceName + '/' + val.cityName + '/' + val.areaName;
                this.visible = false
            },
            cancel () {
                this.visible = false;
            },
			switchChange(e) {
				console.log(e.detail.value);
				this.formData.isDefault = e.detail.value;
			},
			toAddress() {},
		},
	}
</script>

<style lang="scss">
.addAddress_container {
	position: relative;
	min-height: 100vh;
	padding: 24rpx 24rpx 216rpx 24rpx;
	background-color: #f9f9f9;

	.form_box {
		padding: 0 24rpx;
		border-radius: 24rpx;
		background-color: #fff;
		overflow: hidden;

		.form_item {
			display: flex;
			min-height: 120rpx;
			border-bottom: 2rpx solid #f0f0f0;

			&:last-child {
				border-bottom: none;
			}
			
			.label {
				display: flex;
				align-items: center;
				min-width: 144rpx;
				min-height: 120rpx;
				color: #333;
				font-size: 28rpx;
				font-weight: 500;
			}

			.value {
				position: relative;
				flex: 1;
				min-height: 120rpx;
				display: flex;
				align-items: center;
				color: #333;
				font-size: 28rpx;
				font-weight: 400;

				.input {
					/deep/.search_placeholder {
						color: #999;
						font-size: 28rpx;
					}
				}

				.fakeInput {
					color: #999;
				}

				.realInput {
					max-width: 90%;
				}

				.right_icon {
					position: absolute;
					top: 50%;
					right: 0;
					transform: translateY(-50%);
					width: 40rpx;
					height: 40rpx;
				}

				.textarea {
					min-width: 80%;
					max-width: 80%;
				}
			}

			.left_text {
				flex: 1;
				min-height: 120rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;

				.text_title {
					color: #333;
					font-size: 28rpx;
					font-weight: 500;
					line-height: 40rpx;
				}

				.text_desc {
					color: #999;
					font-size: 24rpx;
					line-height: 40rpx;
				}
			}

			.right_switch {
				display: flex;
				align-items: center;
				width: 88rpx;
				min-height: 120rpx;
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
}
</style>
