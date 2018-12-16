<template>
  <div class="article">

  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Article extends Vue {
  private get list () {
    return this.$store.state.list;
  }
}
</script>

<style lang="scss" scoped>

</style>
