<template>
  <div class="log">
    备忘录
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Log extends Vue {

  private get concat () {
    return this.$store.state.concat;
  }

  private get user () {
    return this.$store.state.user;
  }

  private created () {
    if (!this.concat || !this.user.name) {
      this.$router.push('/');
    }
  }
}
</script>
