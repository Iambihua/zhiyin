<template>
  <div class="songRec">
    <header>
      <img src="../assets/images/songRec/arrow.png" alt="" class="arrow" />
      <p>歌曲推荐</p>
      <img src="../assets/images/songRec/more.png" alt="" class="more" />
    </header>
    <div class="detail">
      <img src="../assets/images/songRec/bigCover.png" alt="" />
      <div class="text">
        <p>漂洋过海来看你</p>
        <p>歌手：周深</p>
        <p>也曾彼此安慰 也曾相拥叹息</p>
        <p>不管将会面对什么样的结局</p>
      </div>
    </div>
    <div class="container">
      <div class="option">
        <img src="../assets/images/songRec/playback.png" alt="" />
        <span>全部播放</span>
        <img src="../assets/images/songRec/more.png" alt="" />
      </div>
      <div class="list">
        <div class="list-item">
          <img src="../assets/images/songRec/bigCover.png" alt="" />
          <div class="detail">
            <span>漂洋过海来看你</span>
            <span>周深</span>
          </div>
          <img src="../assets/images/songRec/love.png" alt="" />
        </div>
        <div class="list-item">
          <img src="../assets/images/songRec/bigCover.png" alt="" />
          <div class="detail">
            <span>漂洋过海来看你</span>
            <span>周深</span>
          </div>
          <img src="../assets/images/songRec/love.png" alt="" />
        </div>
        <div class="list-item">
          <img src="../assets/images/songRec/bigCover.png" alt="" />
          <div class="detail">
            <span>漂洋过海来看你</span>
            <span>周深</span>
          </div>
          <img src="../assets/images/songRec/love.png" alt="" />
        </div>
        <div class="list-item">
          <img src="../assets/images/songRec/bigCover.png" alt="" />
          <div class="detail">
            <span>漂洋过海来看你</span>
            <span>周深</span>
          </div>
          <img src="../assets/images/songRec/love.png" alt="" />
        </div>
        <div class="list-item">
          <img src="../assets/images/songRec/bigCover.png" alt="" />
          <div class="detail">
            <span>漂洋过海来看你</span>
            <span>周深</span>
          </div>
          <img src="../assets/images/songRec/love.png" alt="" />
        </div>
        <div class="list-item">
          <img src="../assets/images/songRec/bigCover.png" alt="" />
          <div class="detail">
            <span>漂洋过海来看你</span>
            <span>周深</span>
          </div>
          <img src="../assets/images/songRec/love.png" alt="" />
        </div>
        <div class="list-item">
          <img src="../assets/images/songRec/bigCover.png" alt="" />
          <div class="detail">
            <span>漂洋过海来看你</span>
            <span>周深</span>
          </div>
          <img src="../assets/images/songRec/love.png" alt="" />
        </div>
      </div>
    </div>
    <div class="top">
      <div class="light">
        <img src="../assets/images/records.png" alt="" class="record" />
        <img src="../assets/images/recordCover.png" alt="" class="cover" />
      </div>
      <p>漂洋过海来看你</p>
      <div class="right">
        <img src="../assets/images/stop.png" alt="" class="play" />
        <img src="../assets/images/playlist.png" alt="" class="list" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.songRec {
  padding-top: 9.07vw;
  background-image: url(../assets/images/songRec/bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  padding-left: 4.53vw;
  padding-right: 4.53vw;
  header {
    display: flex;
    height: 5.47vw;
    .arrow {
      width: 2.8vw;
      height: 5.47vw;
    }
    p {
      font-family: SourceHanSansCN;
      font-size: 4.8vw;
      color: #fff;
      margin: 0;
      margin-left: 33.2vw;
      margin-right: 34.53vw;
    }
    .more {
      width: 1.07vw;
      height: 5.2vw;
    }
  }
  .detail {
    display: flex;
    margin-top: 9.33vw;
    height: 36.93vw;
    img {
      width: 36.93vw;
      height: 36.93vw;
    }
    .text {
      margin-top: 1.87vw;
      margin-bottom: 1.87vw;
      margin-left: 2.67vw;
      p {
        color: #fff;
        margin: 0;
        font-family: SourceHanSansCN;
        color: #d2d2d2;
        &:first-child {
          font-size: 4.8vw;
          margin-bottom: 3.87vw;
          letter-spacing: 0.12vw;
          color: #fff;
        }
        &:nth-child(2) {
          font-size: 4vw;
          letter-spacing: 0.11vw;
          margin-bottom: 12.8vw-1.73vw;
        }
        &:nth-child(3),
        &:nth-child(4) {
          font-size: 3.2vw;
          letter-spacing: 0.08vw;
          margin-top: 1.73vw;
        }
      }
    }
  }
  .container {
    margin-top: 14vw;
    .option {
      img:first-child {
        width: 0.43rem;
        height: 0.43rem;
      }
      img:last-child {
        width: 0.08rem;
        height: 0.4rem;
        position: absolute;
        right: 6vw;
      }
      span {
        color: #fff;
        margin-left: 1.73vw;
        font-family: SourceHanSansCN-Normal;
        font-size: 3.73vw;
      }
    }
    .list {
      margin-top: 4.4vw;

      .list-item {
        margin-bottom: 1.33vw;
        height: 14.93vw;
        display: flex;
        align-items: center;
        img:first-child {
          width: 14.67vw;
          height: 14.67vw;
          background-color: #ffffff;
          border-radius: 0.67vw;
        }
        img:last-child {
          width: 4.4vw;
          height: 3.6vw;
          position: absolute;
          right: 4vw;
        }
        .detail {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 2.53vw;
          margin-top: 0;
          span:first-child {
            font-family: SourceHanSansCN-Regular;
            font-size: 4vw;
            letter-spacing: 0.03vw;
            color: #ffffff;
          }
          span:last-child {
            font-family: SourceHanSansCN-Normal;
            font-size: 3.47vw;
            margin-top: 2.13vw;
            letter-spacing: 0.09vw;
            color: #979797;
          }
        }
      }
    }
  }
  .top {
    margin-top: 4.8vw;
    padding-bottom: 6.27vw;
    height: 1.05rem;
    display: flex;
    background-image: url(../assets/images/top-front.png);
    background-size: 9.11rem 0.93rem;
    background-repeat: no-repeat;
    background-position: center 0.12rem;
    position: relative;
    .light {
      .record {
        position: relative;
        bottom: 0.25rem;
        width: 11.6vw;
        height: 11.6vw;
        margin-left: 3.67vw;
        // animation: rotate 2s linear infinite;

        // @keyframes rotate {
        //   0% {
        //     transform: rotate(0deg);
        //   }
        //   100% {
        //     transform: rotate(360deg);
        //   }
        // }
      }
      .cover {
        width: 8.4vw;
        height: 8.4vw;
        position: relative;
        left: -10.15vw;
        top: -4.05vw;
      }
    }
    p {
      font-family: MiSans;
      font-size: 3.2vw;
      color: #dcdddf;
      position: relative;
      left: -3.2vw;
    }
    .right {
      position: absolute;
      right: 8vw;
      vertical-align: baseline;
      .play {
        position: relative;
        top: 2.13vw;
        width: 7.47vw;
        height: 7.47vw;
        margin-right: 3.47vw;
      }
      .list {
        position: relative;
        top: 0.5vw;
        width: 5.47vw;
        height: 4.67vw;
      }
    }
  }
}
</style>
