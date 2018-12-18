<template>
  <div class="art-list">
    <el-input
      placeholder="输入关键字进行过滤"
      v-model="filterText">
    </el-input>

    <el-tree
      class="filter-tree text-bold"
      icon-class="el-icon-d-caret"
      :data="treeList"
      :accordion="true"
      :indent="50"
      @node-click="route"
      :props="defaultProps"
      :default-expand-all="false"
      :filter-node-method="filterNode"
      ref="tree">
    </el-tree>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
// import { watch } from 'fs';

@Component
export default class ArtList extends Vue {
  private filterText: string = '';

  private defaultProps = {
    children: 'children',
    label: 'name'
  };

  private get treeList () {
    return this.$store.state.treeList;
  }

  private route (item: any) {
    if (item.children && item.children.length > 0) return;
    this.$router.push({ path: '/article', query: {type: item.parent, name: item.name} });
    (this as any).$ga.event({
      eventCategory: item.name,
      eventAction: item.parent,
      eventLabel: this.$route.path,
      eventValue: item.name
    });
  }

  @Watch('filterText')
  private filterT (val: string) {
    (this.$refs.tree as any).filter(val);
  }

  private filterNode(value: any, data: any) {
    if (!value) return true;
    return data.name.indexOf(value) !== -1;
  }
}
</script>

<style lang="scss">
  .art-list {

    .el-input {
      margin-bottom: 20px;
    }

    .el-tree {
      height: calc(100vh - 110px);
      background: $trans;
      overflow: auto;

      .el-tree-node, .el-tree-node__content {
        // padding-left: 20px;
        line-height: 2 * $width;
        min-height: 2 * $width;
      }

      .expanded, .el-tree-node__expand-icon {
        color: #333;

        &.is-leaf {
          color: transparent;
        }
      }

      > .el-tree-node {
        padding-left: 20px;
      }
    }
  }
</style>
