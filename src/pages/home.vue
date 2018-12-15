<template>
  <div class="home">
    <!-- 首页 -->

    Welcome
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from 'vue-property-decorator';
import noImg from '@/assets/images/no-image.png';

@Component
export default class Home extends Vue {
  private get list () {
    return this.$store.state.list;
  }

  private created () {
    // this.setList(this.list);
  }
}
</script>

<style lang="scss" scoped>
  .home {
    height: 100%;
    padding: 0.5 * $width;
    background: $white;
  }
</style>
