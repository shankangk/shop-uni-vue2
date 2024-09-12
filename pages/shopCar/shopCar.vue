<template>
  <div class="home_container">
    <u-navbar title="购物车" title-size="28" :is-back="false" :border-bottom="false" :background="{ backgroundImage: 'linear-gradient(180deg, #f6d9db, #fae4e5' }"></u-navbar>

    <div class="product-list">
      <div @click="toggleSelect(item, index)" v-for="(item, index) in productList" :key="index" class="product_item">
        <uni-swipe-action>
          <uni-swipe-action-item
            :right-options="options"
            @click="(e) => bindClick(e, index)"
            @change="swipeChange($event, index)"
          >
            <div class="prod">
              <div class="round">
                <image
                  class="round-icon-img"
                  :src="shopPrefix + (selectedList.includes(index) ? '/radio_choose.png' : '/radio_none.png')"
                ></image>
              </div>
              <div class="collect_item">
                <image src="@/static/test.png" class="collect_pic"></image>
                <div class="collect_info">
                  <div class="collect_title">【嗨心兔】纯水湿厕纸80片家庭装加厚加大大大加厚加大大大加厚加大大大</div>
                  <div class="specifications">已售999</div>
                  <div class="collect_price">
                    <div class="price_num">
                      <span class="unit">￥</span>
                      <span class="num">{{item.price}}</span>
                    </div>
                    <uni-number-box
                      :value="item.count"
                      :step="1"
                      :width="35"
                      background="#fff"
                      @change="(value) => countChange(value, index,item)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </uni-swipe-action-item>
        </uni-swipe-action>
      </div>
    </div>

    <div class="recommend">
      <div class="recommend_title">热门推荐</div>
      <div class="recommend-list">
        <div v-for="(item, index) in 6" :key="index" class="product_item">
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
      </div>
    </div>

    <div class="summarize">
      <div @click="doSelecteAll" class="round">
        <image
          class="round-icon-img"
          :src="shopPrefix + (selecteAll ? '/radio_choose.png' : '/radio_none.png')"
        ></image>
        全选
      </div>
      <div class="money-box">
        合计：￥
        <span class="money">{{ totalPrice }}</span>
        <div @click="doSettlement" class="btn">去结算</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopPrefix: this.$shopPrefix,
      productList: [
        { id: 0,price: 1.99, count: 1 },
        { id: 1,price: 3.99, count: 1 },
        { id: 2,price: 5.99, count: 1 },
        { id: 3,price: 9.99, count: 1 },
        { id: 4,price: 0.99, count: 1 },
        { id: 5,price: 7.99, count: 1 },
      ],
      selectedList: [],
      options: [
        {
          text: '删除',
        },
      ],
      selecteAll: false,
    };
  },
  mounted() {},
  computed: {
    totalPrice() {
      return this.selectedList.reduce((total, index) => {
        return total + this.productList[index].count * this.productList[index].price;
      }, 0);
    },
  },
  methods: {
    clickLeft() {
      uni.navigateBack();
    },
    toggleSelect(item, index) {
      if (this.selectedList.includes(index)) {
        this.selectedList = this.selectedList.filter((i) => i !== index);
      } else {
        this.selectedList.push(index);
      }
    },
    bindClick(e) {
      console.log(e);
      console.log('点击了' + (e.position === 'left' ? '左侧' : '右侧') + e.content.text + '按钮');
    },
    swipeChange(e, index) {
      console.log(e, index);
    },
    countChange(value, index,item) {
      console.log(value, index);
      this.productList[index].count = value;
    },
    doSelecteAll() {
      this.selecteAll = !this.selecteAll;
      if (this.selecteAll) {
        this.selectedList = this.productList;
      } else {
        this.selectedList = [];
      }
    },
    doSettlement() {
      console.log(this.productList);
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/.uni-swipe_button {
  padding: 0;
  border-radius: 24rpx;
  margin: 0 4rpx 0 24rpx;
}
/deep/.uni-swipe_button-text {
  width: 120rpx;
  height: 100%;
  background-color: #ff0c1b;
  border-radius: 24rpx;
  font-size: 28rpx;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home_container {
  min-height: 100vh;
  background-size: 100% 600rpx;
  background-repeat: no-repeat;
  background-color: #f9f9f9;
  padding-bottom: 120rpx;

  .product-list {
    height: 100%;
    box-sizing: border-box;
    padding-top: 24rpx;
    padding: 24rpx 24rpx 0;
    .prod {
      display: flex;
      align-items: center;
      width: 100%;
    }
    .product_item {
      margin-bottom: 24rpx;
      padding: 24rpx 24rpx 24rpx 16rpx;
      background-color: #fff;
      border-radius: 24rpx;
      &:last-child {
        margin-bottom: 0;
      }
      .round {
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 16rpx;
        .round-icon-img {
          width: 32rpx;
          height: 32rpx;
        }
      }
      .collect_item {
        display: flex;
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

            .shop-car {
              width: 48rpx;
              height: 48rpx;
            }
          }
        }
      }
    }
  }
  .recommend {
    padding: 0 24rpx 24rpx;
    .recommend_title {
      font-weight: 400;
      font-size: 24rpx;
      color: #999999;
      margin: 40rpx auto 24rpx;
      width: fit-content;
      position: relative;
      &::after {
        content: '';
        width: 32rpx;
        height: 2rpx;
        background: linear-gradient(270deg, #999999 0%, rgba(51, 51, 51, 0) 100%);
        position: absolute;
        left: -44rpx;
        top: 50%;
        transform: translateY(-50%);
      }
      &::before {
        content: '';
        width: 32rpx;
        height: 2rpx;
        background: linear-gradient(90deg, #999999 0%, rgba(51, 51, 51, 0) 100%);
        position: absolute;
        right: -44rpx;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .recommend-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24rpx;

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

          .sale_num {
            color: #999;
            font-size: 20rpx;
            line-height: 40rpx;
          }
        }
      }
    }
  }
  .summarize {
    height: 120rpx;
    width: 750rpx;
    background-color: #fff;
    position: fixed;
    bottom: -2rpx;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px -1px 4px 0px rgba(0, 0, 0, 0.1);
    .round {
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 16rpx;
      color: #333;
      font-size: 28rpx;
      font-weight: 400;
      margin-left: 24rpx;
      .round-icon-img {
        width: 32rpx;
        height: 32rpx;
        margin-right: 12rpx;
      }
    }
    .money-box {
      color: #333;
      font-size: 28rpx;
      font-weight: 400;
      display: flex;
      align-items: center;
      margin-right: 24rpx;
      .money {
        font-weight: 500;
        font-size: 32rpx;
      }
      .btn {
        background: linear-gradient(51.35deg, #ff0c1b 10.25%, #ff474f 80.97%);
        width: 200rpx;
        height: 88rpx;
        border-radius: 12rpx;
        text-align: center;
        line-height: 88rpx;
        margin-left: 24rpx;
        color: #fff;
        font-size: 32rpx;
      }
    }
  }
}
</style>
