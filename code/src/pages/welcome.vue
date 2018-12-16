<template>
  <div class="welcome">
    <!-- welcome -->

    <!-- <p>你偷走了我的影子</p>

    <p>不论你在哪里</p>

    <p>我都会一直想着你</p>

    <p class="tr cursor" @click="goHome">--- 去首页  &gt;</p> -->

    <div class="sky">
      <div class="clouds_one"></div>
      <div class="clouds_two"></div>
      <div class="clouds_three"></div>
    </div>

    <div class="titles">
      <p class="link--yaku tc">
        <span>你</span><span>偷</span><span>走</span><span>了</span><span>我</span><span>的</span><span>影</span><span>子</span>
      </p>
      <p class="link--yaku tc">
        <span>不</span><span>论</span><span>你</span><span>在</span><span>哪</span><span>里</span>
      </p>
      <p class="link--yaku tc">
        <span>我</span><span>都</span><span>会</span><span>一</span><span>直</span><span>想</span><span>着</span><span>你</span>
      </p>

      <p class="tc go cursor" @click="goHome">去首页</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Welcome extends Vue {
  private goHome () {
    this.$router.push('/home');
  }
}
</script>

<style lang="scss" scoped>
  .welcome {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    line-height: 40px;
    color: #fff;
    background: url(../assets/images/3.jpg) no-repeat center;
    background-size: cover;
    font-size: 24px;

    .sky {
      height: 480px;
      background: transparent;
      position: relative;
      overflow: hidden;
      -webkit-animation: sky_background 50s ease-out infinite;
      -moz-animation: sky_background 50s ease-out infinite;
      -o-animation: sky_background 50s ease-out infinite;
      animation: sky_background 50s ease-out infinite;
      -webkit-transform: translate3d(0, 0, 0);
      -ms-transform: translate3d(0, 0, 0);
      -o-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    .sky .clouds_one {
      background: url("../assets/images/cloud_one.png");
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 300%;
      -webkit-animation: cloud_one 50s linear infinite;
      -moz-animation: cloud_one 50s linear infinite;
      -o-animation: cloud_one 50s linear infinite;
      animation: cloud_one 50s linear infinite;
      -webkit-transform: translate3d(0, 0, 0);
      -ms-transform: translate3d(0, 0, 0);
      -o-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    .sky .clouds_two {
      background: url("../assets/images/cloud_two.png");
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 300%;
      -webkit-animation: cloud_two 75s linear infinite;
      -moz-animation: cloud_two 75s linear infinite;
      -o-animation: cloud_two 75s linear infinite;
      animation: cloud_two 75s linear infinite;
      -webkit-transform: translate3d(0, 0, 0);
      -ms-transform: translate3d(0, 0, 0);
      -o-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    .sky .clouds_three {
      background: url("../assets/images/cloud_three.png");
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 300%;
      -webkit-animation: cloud_three 100s linear infinite;
      -moz-animation: cloud_three 100s linear infinite;
      -o-animation: cloud_three 100s linear infinite;
      animation: cloud_three 100s linear infinite;
      -webkit-transform: translate3d(0, 0, 0);
      -ms-transform: translate3d(0, 0, 0);
      -o-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    @-webkit-keyframes cloud_one {
      0% { left: 0 }
      100% { left: -200% }
    }
    @-moz-keyframes cloud_one {
      0% {
      left: 0
      }
      100% {
      left: -200%
      }
    }
    @keyframes cloud_one {
      0% {
      left: 0
      }
      100% {
      left: -200%
      }
    }

    @-webkit-keyframes cloud_two {
      0% {
      left: 0
      }
      100% {
      left: -200%
      }
    }
    @-moz-keyframes cloud_two {
      0% {
      left: 0
      }
      100% {
      left: -200%
      }
    }
    @keyframes cloud_two {
      0% {
      left: 0
      }
      100% {
      left: -200%
      }
    }

    @-webkit-keyframes cloud_three {
      0% {
      left: 0
      }
      100% {
      left: -200%
      }
    }
    @-moz-keyframes cloud_three {
      0% {
      left: 0
      }
      100% {
      left: -200%
      }
    }
    @keyframes cloud_three {
      0% {
      left: 0
      }
      100% {
      left: -200%
      }
    }

    @keyframes blink {
      0%{
        opacity: 1;
      }
      50%{
        opacity: 0.6;
      }
      100%{
        opacity: 1;
      }
    }

    .titles {
      position: absolute;
      padding-top: 62vh;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 100;
      // text-shadow: 0 0 2px #000;

      .go {
        color: red;
        font-size: 30px;
        animation: blink 3s linear infinite;
        text-shadow: 0 0 2px #fff;
      }
    }

    .link--yaku {
      color: #D3D3D3;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 26px;
      overflow: hidden;
      padding: 0 0 10px;
      text-shadow: 0 0 2px #000;
    }

    .link--yaku::before {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      // border-width: 2px 0;
      // border-color: #282828;
      // border-style: solid;
      left: 0;
      text-shadow: 0 0 2px #fff;
      -webkit-transform: translate3d(-101%,0,0);
      transform: translate3d(-101%,0,0);
      -webkit-transition: -webkit-transform 0.5s;
      transition: transform 0.5s;
    }

    .link--yaku:hover::before {
      text-shadow: 0 0 2px #fff;
      -webkit-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
    }

    .link--yaku span {
      display: inline-block;
      position: relative;
      -webkit-transform: perspective(1000px) rotate3d(0,1,0,0deg);
      transform: perspective(1000px) rotate3d(0,1,0,0deg);
      -webkit-transition: -webkit-transform 0.5s, color 0.5s;
      transition: transform 0.5s, color 0.5s;
    }

    .link--yaku:hover span {
      color: #1e1a1b;
      -webkit-transform: perspective(1000px) rotate3d(0,1,0,360deg);
      transform: perspective(1000px) rotate3d(0,1,0,360deg);
    }

    .link--yaku span:nth-child(4),
    .link--yaku:hover span:first-child {
      -webkit-transition-delay: 0s;
      transition-delay: 0s;
    }

    .link--yaku span:nth-child(3),
    .link--yaku:hover span:nth-child(2) {
      -webkit-transition-delay: 0.1s;
      transition-delay: 0.1s;
    }

    .link--yaku span:nth-child(2),
    .link--yaku:hover span:nth-child(3) {
      -webkit-transition-delay: 0.2s;
      transition-delay: 0.2s;
    }

    .link--yaku span:first-child,
    .link--yaku:hover span:nth-child(4) {
      -webkit-transition-delay: 0.3s;
      transition-delay: 0.3s;
    }
  }
</style>
