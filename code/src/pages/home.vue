<template>
  <div class="home">
    <!-- 首页 -->

    <el-container class="type">
      <el-aside width="200px">
        <heads></heads>
      </el-aside>
      <el-main>
        <transition name="el-zoom-in-top">
          <router-view></router-view>
        </transition>
      </el-main>
    </el-container>

  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from 'vue-property-decorator';
import noImg from '@/assets/images/no-image.png';
import heads from '@/components/head.vue';

@Component({
  components: {
    heads
  }
})
export default class Home extends Vue {
  private get treeList () {
    return this.$store.state.treeList;
  }

  private created () {
    // this.setList(this.list);
  }
}
</script>

<style lang="scss" scoped>
  .home {
    height: 100%;
    overflow: hidden;
    padding: 0.5 * $width;
    background: url(../assets/wz/8.jpg) no-repeat center $white;
    // background: url(../assets/images/bg1.jpg) no-repeat center $white;
    background-size: cover;

    .el-aside {
      width: auto !important;
    }

    .type {
      margin: 0 auto;
      max-width: 1500px;
    }
  }
</style>

<style lang="scss">
  @media screen and (max-width: 754px) {
    .home {
      padding: 0 !important;

      .type {
        display: block;
      }

      .el-main {
        padding: 10px 0;

        .art-list > .el-input {
          margin-bottom: 10px;
        }
      }
    }
  }
</style>
