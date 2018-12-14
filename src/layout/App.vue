<template>
  <div 
    id="app"
    v-loading.fullscreen.lock="fullscreenLoading"
    element-loading-spinner="el-icon-loading"
    element-loading-text="加载中">
    <router-view
      class="app-main"
      v-if="!fullscreenLoading"></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import file from '../../file.js';

@Component
export default class App extends Vue {
  private file = file;
  private fullscreenLoading = true;

  private async mounted () {
    this.fullscreenLoading = false;
    console.log(this.file);
  }
}
</script>

<style lang="scss">
#app {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;

  .app-main {
    max-width: 1200px;
    min-height: 100vh;
    margin: 0 auto;
  }
}
</style>
