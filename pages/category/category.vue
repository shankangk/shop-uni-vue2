<template>
  <div class="home_container">
    <u-navbar title="分类" title-size="28" :is-back="false" :border-bottom="false" :background="{ backgroundImage: 'linear-gradient(180deg, #f6d9db, #fae4e5' }"></u-navbar>
    <div class="search_bar">
      <image :src="shopPrefix + '/search_icon.png'" class="search_icon"></image>
      <input
        v-model.trim="searchProduct"
        type="text"
        placeholder="请搜索商品标题"
        placeholder-class="search_placeholder"
        class="search_input"
      />
      <div @click="doSearch" class="search_btn">搜索</div>
    </div>

    <div class="content">
      <div class="l">
        <div
          v-for="(item, index) in categoryList"
          :key="index"
          @click="tabClick(item, index)"
          :class="{ on: index === currentIndex, prev: index === currentIndex - 1, next: index === currentIndex + 1 }"
          class="item"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="r">
        <z-paging ref="paging" :fixed="false" v-model="dataList" @query="queryList">
          <template #loadingMoreNoMore>
            <div style="text-align: center; color: #999;padding-bottom: 24rpx;">没有更多了</div>
          </template>

          <template #empty></template>

          <div @click="goDetail(item)" v-for="(item, index) in 11" :key="index" class="collect_item">
            <image src="@/static/test.png" class="collect_pic"></image>
            <div class="collect_info">
              <div class="collect_title">【嗨心兔】纯水湿厕纸80片家庭装加厚加大大大加厚加大大大加厚加大大大</div>
              <div class="specifications">已售999</div>
              <div class="collect_price">
                <div class="price_num">
                  <span class="unit">￥</span>
                  <span class="num">9.99</span>
                </div>
                <image
                  @click.stop="addToCar(item)"
                  class="shop-car"
                  :src="shopPrefix + '/shopCar_icon_round.png'"
                ></image>
              </div>
            </div>
          </div>
        </z-paging>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopPrefix: this.$shopPrefix,
      searchProduct: '',
      categoryList: [
        { name: '全部' },
        { name: '湿厕纸' },
        { name: '湿巾' },
        { name: '湿巾' },
        { name: '湿巾' },
        { name: '湿巾' },
        { name: '湿巾' },
        { name: '湿巾' },
        { name: '湿巾' },
        { name: '湿巾' },
        { name: '湿巾' },
        { name: '湿巾' },
        { name: '湿巾' },
        { name: '湿巾' },
        { name: '湿巾' },
        { name: '湿巾' },
        { name: '湿巾' },
        { name: '湿巾' },
      ],
      currentIndex: 0,
      dataList: [],
    };
  },
  mounted() {},
  methods: {
    clickLeft() {
      uni.navigateBack();
    },
    doSearch() {
      if (!this.searchProduct) return;
    },
    tabClick(item, index) {
      this.currentIndex = index;
    },
    goDetail(item) {
      // uni.navigateTo({
        // url: '/subPages/detail/detail',
      // });
    },
    addToCar(item) {
      console.log(item);
    },
    queryList(pageNo, pageSize) {
      console.log(pageNo, pageSize);
      this.$refs.paging.complete([1,2,3,4]);
    },
  },
};
</script>

<style lang="scss" scoped>
.home_container {
  min-height: 100vh;
  background-color: #f9f9f9;
  background-repeat: no-repeat;
	background-size: auto 600rpx;
	background-image: linear-gradient(180deg, rgba(255, 12, 27, 0.12) 0%, rgba(255, 255, 255, 0) 100%);

  .search_bar {
    margin: 24rpx 24rpx 40rpx;
    display: flex;
    align-items: center;
    height: 80rpx;
    background-color: #fff;
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
      color: #fff;
      width: 144rpx;
      height: 64rpx;
      font-size: 28rpx;
      border-radius: 32rpx;
      margin-left: 24rpx;
      background: linear-gradient(51.35deg, #ff0c1b 10.25%, #ff474f 80.97%);
    }
  }

  .content {
    display: flex;
    height: calc(100vh - 91px - 144rpx);
    overflow: hidden;
    .l {
      width: 160rpx;
      height: 100%;
      overflow: auto;
      background-color: #fff;
      &::-webkit-scrollbar{
        display: none;
      }
      .item {
        height: 96rpx;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28rpx;
        color: #333;
        background-color: #f5f5f5;
        border: none;
        &.on {
          background-color: #fff;
          color: #ff0c1b;
          position: relative;
          &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 8rpx;
            height: 40rpx;
            background-color: #ff0c1b;
            border-radius: 0 8rpx 8rpx 0;
          }
        }
        &.prev {
          border-radius: 0 0 25rpx 0;
        }
        &.next {
          border-radius: 0 25rpx 0 0;
          background-color: #f5f5f5;
        }
      }
    }
    .r {
      flex: 1;
      height: 100%;
      overflow: auto;
      background-color: #fff;
      padding-top: 48rpx;
      box-sizing: border-box;
      &::-webkit-scrollbar{
        display: none;
      }
      .collect_item {
        display: flex;
        padding: 0 24rpx 24rpx;
        background-color: #fff;
        border-radius: 24rpx;
        margin-bottom: 24rpx;
        border-bottom: 1rpx solid #f5f5f5;

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
}
</style>
