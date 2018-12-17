<template>
  <div class="index">

    <section class="list-top" v-for="(item, i) in show" :key="i">
      <h3 class="cursor" @click="route(item)">{{ item.redirect || item.name }} 
        <span> | {{ item.type }}</span>
      </h3>

      <p>{{ item.content }}</p>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Index extends Vue {
  private show = [
    {
      name: '小结',
      redirect: '小结 1',
      type: 'vue',
      content: '一些前端基础总结，只有一部分。'
    },
    {
      name: 'README',
      redirect: '云计算概念',
      type: 'architect',
      content: '对云计算进行一个大概了解。'
    },
    {
      name: 'learn web3.js',
      redirect: 'learn web3.js',
      type: '以太坊',
      content: '学习区块链时，对需要用到的工具，遇到的问题，进行总结（肯定不全）。'
    },
    {
      name: '常用的一些正则',
      redirect: '常用的一些正则',
      type: '正则',
      content: '对常用的一些正则表达式进行罗列，方便需要的时候进行使用。'
    },
    {
      name: '弹性布局flex',
      redirect: '弹性布局flex',
      type: 'CSS',
      content: '对健忘的事，就直接置顶。'
    },
    {
      name: 'echarts',
      redirect: 'echarts',
      type: '其他',
      content: '遇到的echarts,常用属性罗列'
    }
  ];

  private route (item: any) {
    this.$router.push({ path: '/article', query: {type: item.type, name: item.name} });
    (this as any).$ga.event({
      eventCategory: item.name,
      eventAction: item.type,
      eventLabel: this.$route.path,
      eventValue: item.name
    });
  }
}
</script>

<style lang="scss" scoped>
  .index {
    padding: 20px;
    height: calc(100vh - 50px);
    overflow: auto;
    background: $trans;

    .list-top {
      padding: 20px 0;
      border-bottom: 1px dashed #999;

      > h3 {
        line-height: 30px;

        > span {
          font-weight: normal;
          color: #999;
        }
      }
      
      > p {
        line-height: 30px;
      }
    }
  }
</style>
