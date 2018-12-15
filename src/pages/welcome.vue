<template>
  <div class="welcome">
    <!-- welcome -->

    <!-- <el-button size="small" type="primary" @click="goHome">首页</el-button> -->
    <p>你偷走了我的影子</p>

    <p>不论你在哪里</p>

    <p>我都会一直想着你</p>

    <p class="tr cursor" @click="goHome">--- 去首页  &gt;</p>
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
    width: 100%;
    height: 100%;
    line-height: 40px;
    color: #fff;
    background: url(../assets/images/welcome.jpg) no-repeat center;
    background-size: cover;
    font-size: 24px;
  }
</style>
