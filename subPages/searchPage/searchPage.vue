<template>
	<view class="searchPage_container">
		<z-paging ref="paging" v-model="productList" @query="queryList">
			<template #top>
				<div class="pager_header">
					<div class="search_bar">
						<image :src="shopPrefix + '/search_icon.png'" class="search_icon"></image>
						<input v-model.trim="searchProduct" type="text" placeholder="请搜索商品标题" placeholder-class="search_placeholder" class="search_input">
						<div @click="toSearch" class="search_btn">搜索</div>
					</div>

					<div v-if="false" class="search_history">
						<div class="history_title">
							<div class="title_text">搜索历史</div>
							<image @click="openDeleteDialog" :src="shopPrefix + '/delete_icon.png'" class="title_icon"></image>
						</div>
						<div class="history_list_box">
							<div @click="historySearch(item)" v-for="(item, index) in historyList" :key="index" class="history_item">{{ item }}</div>
						</div>
					</div>

					<div v-else class="tab_box">
						<div @click="changeTab(item)" v-for="(item, index) in tabList" :key="index" class="tab_item">
							<div class="tab_text">{{ item.text }}</div>
							<div @click="changeDesc" v-if="item.text == '价格'" class="price_desc_box">
								<image v-if="item.desc == 0" :src="shopPrefix + '/desc_none.png'" class="desc_icon"></image>
								<image v-if="item.desc == 1" :src="shopPrefix + '/desc_asc.png'" class="desc_icon"></image>
								<image v-if="item.desc == 2" :src="shopPrefix + '/desc_desc.png'" class="desc_icon"></image>
							</div>
							<div v-if="currentTab.text == item.text" class="tab_line"></div>
						</div>
					</div>
				</div>
			</template>

			<template #loadingMoreNoMore>
				<div style="text-align: center; color: #999;padding-bottom: 24rpx;background-color: #f9f9f9;">没有更多了</div>
			</template>

			<template #empty></template>

			<div class="product_list">
				<div v-for="(item, index) in 11" :key="index" class="product_item">
					<image class="product_pic" src="@/static/test.png"></image>
					<div class="product_item_body">
						<div class="product_desc">【嗨心兔】纯水湿厕纸80片家庭装加厚加大大大</div>
						<div class="product_price">
							<div class="price_num">
								<span class="unit">￥</span>
								<span class="num">9.99</span>
							</div>
							<div class="sale_num">已售999</div>
						</div>
					</div>
				</div>

				<div v-if="false" class="empty_box">
					<image :src="shopPrefix + '/empty_img.png'" class="empty_img"></image>
					<div class="empty_text">暂无相关商品</div>
				</div>
			</div>
		</z-paging>
		
		<uni-popup ref="deletePopup" background-color="#fff" borderRadius='10rpx 10rpx 10rpx 10rpx'>
			<view class="inquiry">
				<view class="title">提示</view>
				<view class="inquiry-content">是否清空历史搜索</view>
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
				searchProduct: '',
				historyList: [],
				tabList: [
					{
						text: '综合',
					},
					{
						text: '销量',
					},
					{
						text: '价格',
						desc: 0,
					},
				],
				currentTab: {
					text: '综合',
				},
				productList: [],
			};
		},
		onLoad(options) {
			this.searchProduct = options.searchProduct;
			this.getHistory();
		},
		methods: {
			toSearch() {
				if (!this.searchProduct) return;

				this.addHistory();
			},
			addHistory() {
				try {
					let historyList = this.getHistory();
					
					if (historyList.length >= 10) {
						historyList.shift();
					}
					historyList.push(this.searchProduct);
					uni.setStorageSync('historyList', historyList);
					this.historyList = historyList;
				} catch (error) {
					console.log(error, '取本地缓存失败');
				}
			},
			getHistory() {
				try {
					let historyList = uni.getStorageSync('historyList') ? uni.getStorageSync('historyList') : [];
					this.historyList = historyList;
					return historyList;
				} catch (error) {
					console.log(error, '取本地缓存失败');
				}
			},
			historySearch() {

			},
			openDeleteDialog() {
				this.$refs.deletePopup.open('center')
			},
			closeDeletePopup() {
				this.$refs.deletePopup.close()
			},
			confirmDeletePopup() {
				uni.removeStorageSync('historyList');
				this.historyList = [];
				this.$refs.deletePopup.close()
			},
			changeTab(item) {
				this.currentTab = item;
			},
			changeDesc() {
				if (this.currentTab.text != '价格') return;

				this.tabList[2].desc += 1;
				if (this.tabList[2].desc > 2) this.tabList[2].desc = 0;
			},
			queryList(pageNo, pageSize) {
				console.log(pageNo, pageSize);
				this.$refs.paging.complete([]);
			},
		},
	}
</script>

<style lang="scss">
.searchPage_container {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background-color: #fff;

	.pager_header {
		position: sticky;
		top: 0;
		left: 0;
		padding: 24rpx 24rpx 0;
		z-index: 99;
		background-color: #fff;

		.search_bar {
			display: flex;
			align-items: center;
			height: 80rpx;
			background-color: #F9F9F9;
			border-radius: 76rpx;
			padding: 0 8rpx 0 24rpx;

			.search_icon {
				width: 32rpx;
				height: 32rpx;
				margin-right: 16rpx;
			}

			.search_input {
				flex: 1;
				height: 44rpx;
				font-size: 28rpx;

				/deep/.search_placeholder {
					color: #999;
					font-size: 28rpx;
				}
			}
			
			.search_btn {
				display: flex;
				align-items: center;
				justify-content: center;
				color: #FF0C1B;
				width: 144rpx;
				font-size: 28rpx;
				line-height: 1em;
				margin-left: 24rpx;
				border-left: 2rpx solid #D9D9D9;
			}
		}

		.search_history {
			margin-top: 48rpx;
			
			.history_title {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 20rpx;

				.title_text {
					color: #333;
					font-size: 32rpx;
					line-height: 44.8rpx;
					font-weight: 500;
				}

				.title_icon {
					width: 32rpx;
					height: 32rpx;;
				}
			}

			.history_list_box {
				display: flex;
				gap: 24rpx;
				flex-wrap: wrap;
				padding-bottom: 24rpx;

				.history_item {
					font-size: 24rpx;
					line-height: 33.6rpx;
					padding: 8rpx 24rpx;
					background-color: #F4F4F4;
					border-radius: 46rpx;
				}
			}
		}

		.tab_box {
			height: 108rpx;
			display: flex;
			align-items: center;

			.tab_item {
				position: relative;
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				font-size: 32rpx;
				font-weight: 500;

				.tab_text {
					position: relative;
					z-index: 10;
					text-align: center;
					color: #333;
				}

				.desc_icon {
					position: absolute;
					top: 50%;
					right: calc(50% - 2.5em);
					transform: translateY(-50%);
					width: 18rpx;
					height: 26rpx;
					padding: 0 20rpx 0 10rpx;
				}

				.tab_line {
					position: absolute;
					bottom: 0;
					z-index: 0;
					width: 2em;
					height: 8rpx;
					border-radius: 43rpx;
					background: linear-gradient(107.14deg, #FFE1A6 -6.21%, #E85532 82.1%);
				}
			}
		}
	}

	.product_list {
		position: relative;
		flex: 1;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 24rpx;
		background-color: #f9f9f9;
		padding: 32rpx 24rpx;

		.product_item {
			display: flex;
			flex-direction: column;
			width: 340rpx;
			height: 520rpx;
			border-radius: 24rpx;
			background-color: #fff;
			overflow: hidden;

			.product_pic {
				width: 100%;
				height: 340rpx;
				border-radius: 24rp 24rpx 0 0;
			}

			.product_item_body {
				flex: 1;
				padding: 0 20rpx;

				.product_desc {
					color: #333;
					font-size: 28rpx;
					line-height: 40rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					margin: 20rpx 0 16rpx 0;
				}

				.product_price {
					display: flex;
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

					.sale_num {
						color: #999;
						font-size: 20rpx;
						line-height: 40rpx;
					}
				}
			}
		}

		.empty_box {
			position: absolute;
			top: 212rpx;
			left: 50%;
			transform: translateX(-50%);
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
