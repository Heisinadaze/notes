<template>
  <div class="nofind tc">
    <img class="bg" :src="nofind">

    <div class="btn">
      <button @click="goHome">返回首页</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import nofind from '@/assets/images/404.png';

@Component
export default class NoFind extends Vue {
  private nofind = nofind;

  private goHome () {
    this.$router.push('/');
  }
}
</script>

<style lang="scss">
  .nofind {
    padding-top: 10vh;

    .bg {
      width: 100%;
      max-width: 700px;
    }

    .btn {
      text-align: center;

      > button {
        margin-top: 20px;
        padding: 9px 15px;
        border-radius: 6px;
        border: 1px solid #ccc;
        color: #fff;
        background: #8D7559;
        outline: none;
      }
    }
  }
</style>
