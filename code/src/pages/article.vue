<template>
  <div class="article">

    <h1 v-show="detail">{{ $route.query.name }}</h1>
    <div v-html="detail" v-if="detail" class="content-md"></div>

    <div v-else class="no-content tc text-bold">该文章已下架</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Article extends Vue {
  private detail: any = '';
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
  }
}
</script>

<style lang="scss" scoped>
  .article {
    padding: $width;
    height: calc(100vh - 50px);
    overflow: auto;
    background: $trans;
    font-size: 16px;

    .no-content {
      line-height: 112px;
    }
  }
</style>
