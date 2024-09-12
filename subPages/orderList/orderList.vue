<template>
  <view class="searchPage_container">
    <z-paging ref="paging" v-model="productList" @query="queryList">
      <template #top>
        <div class="pager_header">
          <div class="tab_box">
            <div @click="changeTab(item)" v-for="(item, index) in tabList" :key="index" class="tab_item">
              <div class="tab_text">{{ item.text }}</div>
              <div v-if="currentTab == item.text" class="tab_line"></div>
              <div v-if="item.count" class="count">{{item.count}}</div>
            </div>
          </div>
        </div>
      </template>

      <template #loadingMoreNoMore>
        <div style="text-align: center; color: #999; padding-bottom: 24rpx; background-color: #f9f9f9">没有更多了</div>
      </template>

      <template #empty></template>

      <div class="product_list">
        <div v-for="(item, index) in 11" :key="index" class="product_item">
          <div class="time-box">
            2024-12-12 12:12:11
            <span class="orange">待发货</span>
            <span class="red">已退款</span>
            <span class="green">待收货</span>
          </div>
          <div v-for="(it, i) in 2" :key="i" class="collect_item">
            <image src="@/static/test.png" class="collect_pic"></image>
            <div class="collect_info">
              <div class="collect_title">【嗨心兔】纯水湿厕纸80片家庭装加厚加大大大加厚加大大大加厚加大大大</div>
              <div class="specifications">
                1包80抽
                <span>退款成功</span>
              </div>
              <div class="collect_price">
                <div class="price_num">
                  <span class="unit">￥</span>
                  <span class="num">9.99</span>
                </div>
                <div class="cancelCollect_btn">x3</div>
              </div>
            </div>
          </div>
          <div class="totalPrice">
            合计：¥
            <span>9.99</span>
          </div>
        </div>

        <div v-if="false" class="empty_box">
          <image :src="shopPrefix + '/empty_img.png'" class="empty_img"></image>
          <div class="empty_text">暂无相关商品</div>
        </div>
      </div>
    </z-paging>
  </view>
</template>

<script>
export default {
  data() {
    return {
      shopPrefix: this.$shopPrefix,
      tabList: [
        {
          text: '全部',
        },
        {
          text: '待支付',
        },
        {
          text: '待发货',
          count: 2,
        },
        {
          text: '待收货',
        },
        {
          text: '退款售后',
        },
      ],
      currentTab: '全部',
      productList: [],
    };
  },
  onLoad(options) {
    this.currentTab = options.tab || '全部';
  },
  methods: {
    changeTab(item) {
      console.log(item);
      this.currentTab = item.text;
    },
    queryList(pageNo, pageSize) {
      console.log(pageNo, pageSize);
      this.$refs.paging.complete([]);
    },
  },
};
</script>

<style lang="scss">
.time-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24rpx;
  color: #999999;
  height: 76rpx;
  padding-top: 8rpx;
  box-sizing: border-box;
  border-bottom: 1rpx solid rgba(0, 0, 0, 0.06);
  span {
    font-weight: 400;
    font-size: 24rpx;
    &.orange {
      color: #fbb11b;
    }
    &.red {
      color: #ff0c1b;
    }
    &.green {
      color: #52c41a;
    }
  }
}
.totalPrice {
  height: 90rpx;
  line-height: 80rpx;
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  font-weight: 400;
  font-size: 28rpx;
  color: #333333;
  span {
    font-weight: 500;
    font-size: 36rpx;
    margin-left: 8rpx;
  }
}
.collect_item {
  display: flex;
  padding: 24rpx 0;
  border-bottom: 1rpx solid rgba(0, 0, 0, 0.06);

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
      display: flex;
      justify-content: space-between;
      span {
        color: #ff0c1b;
      }
    }

    .collect_price {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .price_num {
        color: #ff0c1b;

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
        color: #999;
        font-size: 24rpx;
      }
    }
  }
}
.searchPage_container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fff;

  .pager_header {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 99;
    background-color: #fff;

    .tab_box {
      height: 108rpx;
      display: flex;
      align-items: center;
      background-color: #f9f9f9;
      padding: 0 24rpx;

      .tab_item {
        position: relative;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 32rpx;
        font-weight: 500;
        .count{
          position: absolute;
          top: -4rpx;
          right: 6rpx;
          width: 22rpx;
          height: 22rpx;
          background-color: #ff0c1b;
          border-radius: 50%;
          color: #fff;
          font-size: 20rpx;
          line-height: 22rpx;
          text-align: center;
        }

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
          background: linear-gradient(107.14deg, #ffe1a6 -6.21%, #e85532 82.1%);
        }
      }
    }
  }

  .product_list {
    position: relative;
    flex: 1;
    background-color: #f9f9f9;
    padding: 0 24rpx 24rpx;
    .product_item {
      margin-bottom: 24rpx;
      background-color: #fff;
      border-radius: 24rpx;
      padding: 0 24rpx;
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
      border-bottom: 1rpx solid #f0f0f0;
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
        border-left: 1rpx solid #f0f0f0;
        color: red;
      }
    }
  }
}
</style>
