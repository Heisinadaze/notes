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
import ico from '../assets/images/favicon.png';

@Component
export default class App extends Vue {
  private file = file;
  private ico = ico;
  private fullscreenLoading = true;

  private setList (file: any) {
    const arr1: any = Object.keys(file);
    const arr = arr1.map((item: any) => item.split('/'));
    const list: any[] = [];
    arr.forEach((item: any, ind: number) => {
      if (!list.find(a => a.name === item[0])) {
        list.push({
          name: item[0],
          children: this.child(arr1, item[0], ind)
        });
      }
    });
    return list;
  }

  private child (arr: any[], item: string, ind: number) {
    let res = arr.filter((i: any) => i.indexOf(`${item}/`) > -1);
    res = res.map(a => ({
      name: a.split(`${item}/`)[1],
      parent: item
    }));
    return res;
  }

  private async mounted () {
    this.fullscreenLoading = false;
    this.$store.commit('LIST', this.file);
    this.$store.commit('TREELIST', this.setList(this.file));
    this.$store.dispatch('concat');

    const link: any = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-png';
    link.rel = 'shortcut icon';
    link.href = this.ico;
    document.getElementsByTagName('head')[0].appendChild(link);
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
    // max-width: 1200px;
    min-height: 100vh;
    // margin: 0 auto;
  }
}
</style>
