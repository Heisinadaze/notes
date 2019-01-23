<template>
  <div class="article" ref="art">

    <h1 v-show="detail">{{ $route.query.name }}</h1>
    <div v-html="detail" v-if="detail"
      class="content-md" v-highlightA></div>

    <div v-else class="no-content tc text-bold">该文章已下架</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Articled extends Vue {
  private detail: any = '';
  private contextmenu = '';
  private get list () {
    return this.$store.state.list;
  }

  private getDetail () {
    const type = String(this.$route.query.type);
    const name = String(this.$route.query.name);
    const names = `${type}/${name}`;
    this.detail = this.list[names];
  }

  private created () {
    this.getDetail();
    // this.contextmenu = !this.$route.query.me ? 'return false' : '';
    // console.log(this.contextmenu);
  }

  private mounted () {
    const me = this.$store.state.user.name || this.$route.query.me;
    /**
     * 禁用右键菜单
     */
    document.oncontextmenu = (event: any) => {
      if (!me) event.returnValue = false;
    };
    /**
     * 禁用选中功能
     */
    // document.onselectstart = (event: any) => {
    //   if (!me) event.returnValue = false;
    // };
    /**
     * 禁用复制功能
     */
    // document.oncopy = (event: any) => {
    //     event.returnValue = false;
    // };
    /**
     * 禁用鼠标的左右键
     */
    document.onmousedown = (event: any) => {
      if (event.which === 1) { // 鼠标左键
        if (!me) return false;
      }
      if (event.which === 3) { // 鼠标右键
        if (!me) return false;
      }
    };
  }
}
</script>

<style lang="scss">
  .article {
    padding: $width;
    height: calc(100vh - 50px);
    overflow: auto;
    background: $trans;
    font-size: 16px;
    font-family: sans-serif;

    .no-content {
      line-height: 112px;
    }

    ul > li {
      list-style: initial;
    }
  }
</style>
