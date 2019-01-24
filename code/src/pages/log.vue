<template>
  <div class="log">
    <!-- 备忘录 -->
    <section class="bill-head">
      <el-date-picker
        v-model="check.time"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        @change="getList">
      </el-date-picker>
      <el-input v-model="check.keyword" placeholder="关键字搜索" @change="getList"></el-input>
      <el-button type="primary" size="small" @click="addDialog = true">添加</el-button>
    </section>

    <transition name="list">
      <el-form :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="60px"
        class="demo-ruleForm"
        v-show="addDialog">
        <el-form-item label="时间" prop="time">
          <el-date-picker
            v-model="ruleForm.time"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="内容" prop="name">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="请输入.."
            v-model="ruleForm.name">
          </el-input>
        </el-form-item>
        <el-form-item label="备注" prop="other">
          <el-input v-model="ruleForm.other" placeholder="备注"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </transition>

    <section class="log-cont" v-loading="loading" v-show="!tel">
      <el-row :gutter="20">
        <el-col :span="4" >时间</el-col>
        <el-col :span="12" >内容</el-col>
        <el-col :span="6" >备注</el-col>
        <el-col :span="2" >操作</el-col>
      </el-row>
      <el-row :gutter="20" v-for="(item, i) in list" :key="i" class="log-hover">
        <el-col :span="4">{{ $Date(item.crtime).format('YYYY-MM-DD HH:mm') }}</el-col>
        <el-col :span="12">
          <p class="log-content">{{ item.name }}</p>
        </el-col>
        <el-col :span="6">{{ item.other }}</el-col>
        <el-col :span="2">
          <span class="del-btn" @click="del(item)">del</span>
        </el-col>
      </el-row>
      <el-row v-show="!list || list.length < 1">
        <el-col :span="24" style="text-align: center;">暂无数据</el-col>
      </el-row>
    </section>

    <section class="log-content-tel" v-loading="loading" v-show="tel">
      <ul>
        <li v-for="(item, i) in list" :key="i">
          <p>{{ item.name }}</p>
          <p>{{ item.other }}</p>
          <p class="tel-time">{{ $Date(item.crtime).format('YYYY-MM-DD HH:mm') }}</p>
        </li>
        <li v-show="!list || list.length < 1" class="tc">
          暂无数据
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

interface Check {
  time: any[];
  keyword: string;
}

@Component
export default class Log extends Vue {
  private check: Check = {
    time: [],
    keyword: ''
  };
  private addDialog = false;
  private tel = document.body.clientWidth && document.body.clientWidth < 754;
  private ruleForm = {
    time: '',
    type: 1,
    name: '',
    other: ''
  };
  private rules = {
  };
  private list = [];
  private loading = false;

  private get concat () {
    return this.$store.state.concat;
  }

  private get user () {
    return this.$store.state.user;
  }

  private submitForm (formName: any) {
    (this.$refs[formName] as any).validate((valid: any) => {
      if (valid) {
        this.$store.dispatch('bill/addLog', {
          ...this.ruleForm,
          crtime: Date.parse(new (Date as any)(this.ruleForm.time)),
          uid: this.user.id
        }).then(res => {
          if (res.code === 1) {
            this.addDialog = false;
            this.getList();
          }
        });
      } else {
        return false;
      }
    });
  }
  private resetForm (formName: any) {
    (this.$refs[formName] as any).resetFields();
  }
  private getList () {
    const obj = {
      uid: this.user.id,
      time1: 0,
      time2: 0,
      keyword: ''
    };
    let end = 0;
    let start = 0;
    if (!this.check.time || this.check.time.length < 1) {
      end = new Date().getTime() + 3600 * 1000 * 24;
      start = new Date().getTime() - 3600 * 1000 * 24 * 7;
      this.check.time = [
        start, end
      ];
    } else {
      start = typeof this.check.time[0] === 'number' ? this.check.time[0] : Date.parse(this.check.time[0]);
      end = typeof this.check.time[1] === 'number' ? this.check.time[1] : Date.parse(this.check.time[1]);
    }
    obj.time1 = start;
    obj.time2 = end;
    // if (this.check.type) obj.type = this.check.type;
    if (this.check.keyword) obj.keyword = this.check.keyword;
    this.$store.dispatch('bill/getLog', {...obj})
    .then(res => {
      if (res.code === 1) {
        this.list = res.result || [];
      }
    });
  }
  private del (item: any) {
    this.$alert('删除？', '', {
      callback: action => {
        this.$store.dispatch('bill/delLog', {
          uid: this.user.id,
          id: item._id
        })
        .then(res => {
          if (res.code === 1) {
            this.getList();
          }
        });
      }
    });
  }

  private created () {
    if (!this.concat || !this.user.name) {
      this.$router.push('/');
    }
    this.getList();
  }
}
</script>

<style lang="scss">
  .log {
    padding: $width;
    height: calc(100vh - 50px);
    overflow: auto;
    background: $trans;
    font-size: 16px;
    font-family: sans-serif;

    .log-top {
      margin-bottom: 20px;
    }

    .demo-ruleForm {
      margin: 20px 0;
      padding: 20px;
      max-width: 500px;
      box-shadow: 0 0 5px #ccc;
    }

    .log-cont {
      margin-top: 20px;
      line-height: 32px;

      .el-row {
        border-bottom: 1px solid #ccc;

        .log-content {
          white-space: pre;
        }

        &.log-hover:hover {
          background: rgb(240, 239, 239);
        }
      }

      .del-btn {
        color: rgb(238, 66, 14);
        text-decoration: underline;
        cursor: pointer;
      }
    }

    .el-range-editor.el-input__inner {
      width: 280px;
    }

    .bill-head {
      > * {
        margin-right: 10px;
      }

      .el-input, .el-input > .el-input__inner {
        width: 100px !important;
      }
    }

    .el-form {
      padding: 10px 0;
      margin: 10px 0;
      box-shadow: 0 0 5px;
      border-radius: 4px;
    }

    .log-content-tel {
      li {
        border-bottom: 1px dashed #999;

        .tel-time {
          color: #666;
        }

        .tel-nums {
          color: red;
        }

        > p {
          white-space: pre;
          color: #330b0b;
        }
      }
    }
  }
</style>
