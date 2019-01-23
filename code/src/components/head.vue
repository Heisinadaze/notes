<template>
  <div class="head">
    <!-- 头部 -->

    <div class="menu cursor" @click="isCollapse = !isCollapse" v-if="!modOrCom">
      <i class="el-icon-menu"></i>
    </div>

    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :mode="modOrCom ? 'horizontal' : 'vertical'"
      router>
      <el-menu-item :index="item.path" v-for="(item, i) in list" :key="i" v-show="item.show">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </el-menu>

    <!-- <aside class="art">

    </aside> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Head extends Vue {
  private list = [
    {
      name: '首页',
      icon: 'el-icon-document',
      path: '/index',
      show: 1
    },
    {
      name: '文章',
      icon: 'el-icon-document',
      path: '/artlist',
      show: 1
    },
    {
      name: '账单',
      icon: 'el-icon-document',
      path: '/bill',
      show: (this.user.name && this.concat)
    },
    {
      name: '备忘录',
      icon: 'el-icon-document',
      path: '/log',
      show: (this.user.name && this.concat)
    }
  ];

  private isCollapse = false;

  private modOrCom = false;

  private get treeList () {
    return this.$store.state.treeList;
  }

  private get concat () {
    return this.$store.state.concat;
  }

  private get user () {
    return this.$store.state.user;
  }

  private created () {
    if (document.body.clientWidth && document.body.clientWidth < 754) {
      this.modOrCom = true;
    }
  }
}
</script>

<style lang="scss">
  .head {
    padding: 20px 0;

    @keyframes rot {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(180deg);
      }
    }

    @keyframes chw {
      0% {
        width: 0;
      }
      100% {
        width: 300px;
      }
    }

    @keyframes art {
      0% {
        content: '谁曾见过风';
      }
      12.5% {
        content: '我你尚未曾';
      }
      25% {
        content: '叶儿微微摇';
      }
      37.5% {
        content: '风儿即飘到';
      }
      50% {
        content: '可否看见风';
      }
      62.5% {
        content: '你我尚未能';
      }
      75% {
        content: '林梢颔首间';
      }
      87.5% {
        content: '风儿已飘远';
      }
    }

    .menu {
      padding-left: $width;
      height: 2 * $width;
      line-height: 2 * $width;
      font-size: $width;
      background: $trans;
      color: $white;

      > i:hover {
        animation: rot 1s ease;
      }
    }

    .el-menu, .el-menu--collapse {
      background: $trans;

      .el-icon-document {
        color: $white;
      }

      .el-menu-item span {
        font-weight: bolder;
        font-size: $width;
        padding: 0 20px;
      }
    }

    .is-active {
      background: $white;
      color: yellowgreen;

      i {
        color: yellowgreen !important;
      }
    }

    .art {
      line-height: 40px;
      min-height: 100px;
      text-shadow: 0 0 2px #000;
      // animation: art 10s linear infinite;
      background: $trans;

      &:after {
        content: '林梢颔首间';
        display: block;
        width: 100%;
        line-height: 40px;
        color: #000;
        animation: art 20s linear infinite;
      }
    }
  }

  @media screen and (max-width: 754px) {
    .head {
      padding: 0 !important;

      .el-menu {
        display: flex;

        .el-menu-item {
          padding: 0;

          > span {
            padding: 0;
          }
        }
      }

      .el-menu--horizontal > .el-menu-item {
        line-height: 36px;
        height: 36px;
      }
    }
  }
</style>
