<template>
  <view class="my_container">
    <u-navbar
      title="我的"
      title-size="28"
      :is-back="false"
      :border-bottom="false"
      :background="{ backgroundImage: 'linear-gradient(180deg, #f6d9db, #fae4e5' }"
    ></u-navbar>

    <div class="page-body">
      <div class="userInfo_box">
        <image :src="shopPrefix + '/avatar_icon.png'" class="avatar"></image>
        <div class="userInfo">
          <div class="userName">张三</div>
          <div class="userID">12345678901</div>
        </div>
        <div @click="toUserDetail" class="modify_btn">修改资料</div>
      </div>

      <div class="myOrder_box">
        <div class="myOrder_title">
          <div class="text">我的订单</div>
          <div @click="toOrderList('全部')" class="allOrder">
            <span>更多订单</span>
            <image :src="shopPrefix + '/right_icon2.png'" class="right_icon"></image>
          </div>
        </div>
        <div class="myOrder_menu">
          <div class="menu_item" @click="toOrderList('待支付')">
            <image :src="shopPrefix + '/myOrder_menu_icon1.png'" class="menu_icon"></image>
            <div class="menu_text">待支付</div>
          </div>
          <div class="menu_item" @click="toOrderList('待发货')">
            <image :src="shopPrefix + '/myOrder_menu_icon2.png'" class="menu_icon"></image>
            <div class="menu_text">待发货</div>
          </div>
          <div class="menu_item" @click="toOrderList('待收货')">
            <image :src="shopPrefix + '/myOrder_menu_icon3.png'" class="menu_icon"></image>
            <div class="menu_text">待收货</div>
          </div>
          <div class="menu_item" @click="toOrderList('退款售后')">
            <image :src="shopPrefix + '/myOrder_menu_icon4.png'" class="menu_icon"></image>
            <div class="menu_text">退款售后</div>
          </div>
        </div>
      </div>

      <div class="myService_box">
        <div class="myService_title">
          <div class="text">我的服务</div>
        </div>

        <div class="myService_menu">
          <div @click="toMyCollect" class="menu_item">
            <div class="item_left_content">
              <image :src="shopPrefix + '/myService_left_icon1.png'" class="left_icon"></image>
              <div class="left_text">我的收藏</div>
            </div>
            <image :src="shopPrefix + '/right_icon3.png'" class="item_right_icon"></image>
          </div>
          <div @click="toAddressManage" class="menu_item">
            <div class="item_left_content">
              <image :src="shopPrefix + '/myService_left_icon2.png'" class="left_icon"></image>
              <div class="left_text">收货地址</div>
            </div>
            <image :src="shopPrefix + '/right_icon3.png'" class="item_right_icon"></image>
          </div>
          <div class="menu_item">
            <div class="item_left_content">
              <image :src="shopPrefix + '/myService_left_icon3.png'" class="left_icon"></image>
              <div class="left_text">意见反馈</div>
            </div>
            <image :src="shopPrefix + '/right_icon3.png'" class="item_right_icon"></image>
          </div>
        </div>
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
    toUserDetail() {
      uni.navigateTo({
        url: '/subPages/userDetail/userDetail',
      });
    },
    toOrderList(text) {
      uni.navigateTo({
        url: '/subPages/orderList/orderList?tab=' + text,
      });
    },
    toMyCollect() {
      uni.navigateTo({
        url: '/subPages/myCollect/myCollect',
      });
    },
    toAddressManage() {
      uni.navigateTo({
        url: '/subPages/addressManage/addressManage',
      });
    },
  },
};
</script>

<style lang="scss">
.my_container {
  min-height: 100vh;
  background-color: #f9f9f9;
  background-repeat: no-repeat;
  background-size: auto 600rpx;
  background-image: linear-gradient(180deg, rgba(255, 12, 27, 0.12) 0%, rgba(255, 255, 255, 0) 100%);

  .page-body {
    padding: 24rpx;

    .userInfo_box {
      display: flex;
      align-items: center;
      margin-bottom: 24rpx;

      .avatar {
        width: 128rpx;
        height: 128rpx;
        border-radius: 50%;
        margin-right: 24rpx;
      }

      .userInfo {
        flex: 1;

        .userName {
          color: #333;
          font-size: 32rpx;
          font-weight: 500;
          line-height: 40rpx;
          margin-bottom: 16rpx;
        }

        .userID {
          color: #999;
          font-size: 24rpx;
          line-height: 40rpx;
        }
      }

      .modify_btn {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        width: 136rpx;
        height: 60rpx;
        border-radius: 32rpx;
        background: linear-gradient(51.35deg, #ff0c1b 10.25%, #ff474f 80.97%);
      }
    }

    .myOrder_box {
      padding: 32rpx 24rpx;
      border-radius: 24rpx;
      background-color: #fff;
      margin-bottom: 24rpx;

      .myOrder_title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 32rpx;

        .text {
          color: #131313;
          font-size: 32rpx;
          font-weight: 600;
          line-height: 40rpx;
        }

        .allOrder {
          display: flex;
          align-items: center;
          color: #999;
          font-size: 24rpx;

          .right_icon {
            width: 32rpx;
            height: 32rpx;
            margin-left: 16rpx;
          }
        }
      }

      .myOrder_menu {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;

        .menu_item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;

          .menu_icon {
            width: 48rpx;
            height: 48rpx;
            margin-bottom: 16rpx;
          }

          .menu_text {
            color: #131313;
            font-size: 24rpx;
          }
        }
      }
    }

    .myService_box {
      padding: 32rpx 24rpx;
      border-radius: 24rpx;
      background-color: #fff;

      .myService_title {
        margin-bottom: 32rpx;

        .text {
          color: #131313;
          font-size: 32rpx;
          font-weight: 600;
          line-height: 40rpx;
        }
      }

      .myService_menu {
        .menu_item {
          display: flex;
          align-items: center;
          margin-bottom: 64rpx;

          &:last-child {
            margin-bottom: 0;
          }

          .item_left_content {
            flex: 1;
            display: flex;
            align-items: center;

            .left_icon {
              width: 40rpx;
              height: 40rpx;
              margin-right: 20rpx;
            }

            .left_text {
              color: #333;
              font-size: 28rpx;
            }
          }

          .item_right_icon {
            width: 32rpx;
            height: 32rpx;
          }
        }
      }
    }
  }
}
</style>
