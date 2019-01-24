<template>
  <div class="bill">
    <!-- 账单 -->

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

    <section class="bill-cont" v-loading="loading">
      <table class="bill-total">
        <tr>
          <th></th>
          <th>消费</th>
          <th>收入</th>
        </tr>
        <tr v-for="(item, i) in detail.types" :key="i">
          <th>{{ item }}</th>
          <th>{{ detail.xList[i] }}</th>
          <th>{{ detail.sList[i] }}</th>
        </tr>
        <tr>
          <th>总计</th>
          <th>{{ detail.xTotal }}</th>
          <th>{{ detail.sTotal }}</th>
        </tr>
        <tr>
          <th>剩余</th>
          <th :colspan="2" style="color: red; font-size: 18px;">
            {{ (detail.sTotal - detail.xTotal).toFixed(2) }}
          </th>
        </tr>
      </table>

      <el-row :gutter="20" v-if="!tel">
        <el-col :span="4" v-for="(item, i) in head" :key="i">{{ item }}</el-col>
      </el-row>
      <el-row :gutter="20" v-for="(item, i) in list" :key="i" v-show="!tel">
        <el-col :span="4">{{ $Date(item.crtime).format('YYYY-MM-DD HH:mm:ss') }}</el-col>
        <el-col :span="4">{{ item.type === 1 ? '支出' : '收入' }}</el-col>
        <el-col :span="4">{{ item.route }}</el-col>
        <el-col :span="4">￥{{ item.nums }}</el-col>
        <el-col :span="4">{{ item.remarks }}</el-col>
        <el-col :span="4">
          <span class="del-btn" @click="del(item)">del</span>
        </el-col>
      </el-row>
      <el-row v-if="!tel" v-show="!list || list.length < 1">
        <el-col :span="24" style="text-align: center;">暂无数据</el-col>
      </el-row>

      <ul v-else class="tel-bill">
        <h3>账单列表</h3>
        <li v-for="(item, i) in list" :key="i">
          <p class="tel-time">{{ $Date(item.crtime).format('YYYY-MM-DD HH:mm:ss') }}</p>
          <p>{{ item.type === 1 ? '支出' : '收入' }}: ￥
            <span class="tel-nums">{{ item.nums }}</span>
          </p>
          <p>{{ item.route }}</p>
          <p>{{ item.remarks }}</p>
        </li>
        <li v-show="!list || list.length < 1" class="tc">
          暂无数据
        </li>
      </ul>
    </section>

    <el-dialog
      :visible.sync="addDialog"
      width="300px"
      top="30px">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="60px" class="demo-ruleForm">
        <el-form-item label="时间" prop="time">
          <el-date-picker
            v-model="ruleForm.time"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-radio-group v-model="ruleForm.type">
            <el-radio-button :label="1">支出</el-radio-button>
            <el-radio-button :label="2">收入</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="路径" prop="route">
          <!-- <el-input v-model="ruleForm.route" placeholder="如：支付宝"></el-input> -->
          <el-autocomplete
            class="inline-input"
            v-model="ruleForm.route"
            :fetch-suggestions="querySearch"
            placeholder="如：零食"
          ></el-autocomplete>
        </el-form-item>
        <el-form-item label="金额" prop="nums">
          <!-- <el-input v-model.number="ruleForm.nums" type="number" placeholder="金额"></el-input> -->
          <el-input-number v-model="ruleForm.nums" label="金额"></el-input-number>
        </el-form-item>
        <el-form-item label="备注" prop="remarks">
          <el-input v-model="ruleForm.remarks" placeholder="备注"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// import Set from 'es6-set/polyfill';
interface Check {
  time: any[];
  type: any;
  keyword: string;
}

interface Detail {
  sTotal: number; // 收入 总数
  xTotal: number; // 消费 总数
  types: any[]; // 类型
  sList: any[]; // 收入分类型总数
  xList: any[];
}

@Component
export default class Bill extends Vue {
  private head = ['时间', '类型', '方式', '数量', '备注', '操作'];
  private check: Check = {
    time: [],
    type: '',
    keyword: ''
  };
  private addDialog = false;
  private tel = document.body.clientWidth && document.body.clientWidth < 754;
  private ruleForm = {
    time: '',
    type: 1,
    route: '',
    nums: 0,
    remarks: ''
  };
  private rules = {
    time: [
      { required: true, message: '请输入时间', trigger: 'blur' }
    ],
    route: [
      { required: true, message: '这是零食还是衣服？', trigger: 'change' }
    ],
    nums: [
      { required: true, message: '金额必填', trigger: 'blur' }
    ]
  };
  private list: any[] = [];
  private detail: Detail = {
    sTotal: 0, // 收入 总数
    xTotal: 0, // 消费 总数
    types: [], // 类型
    sList: [], // 收入分类型总数
    xList: [] // 消费分类型总数
  };
  private loading = false;
  private restaurants: any[] = [];

  private get concat () {
    return this.$store.state.concat;
  }

  private get user () {
    return this.$store.state.user;
  }

  private querySearch (queryString: any, cb: any) {
    const restaurants = this.restaurants;
    const results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
    cb(results);
  }
  private createFilter (queryString: any) {
    return (restaurant: any) => {
      return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
    };
  }
  private submitForm (formName: string) {
    (this.$refs[formName] as any).validate((valid: any) => {
      if (valid) {
        this.$store.dispatch('bill/addBill', {
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
  private resetForm (formName: string) {
    (this.$refs[formName] as any).resetFields();
  }
  private getList () {
    const obj = {
      time1: 0,
      time2: 0,
      keyword: '',
      uid: this.user.id
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
    this.$store.dispatch('bill/getBill', {...obj})
    .then(res => {
      if (res.code === 1) {
        this.list = res.result || [];
        this.sortClass();
      }
    });
  }
  private unique (arr: number[]) {
    arr.sort();
    const a: any[] = [arr[0]];
    arr.forEach((item: any) => {
      if (item !== a[a.length - 1]) a.push(item);
    });
    return a;
  }
  private sortClass () {
    const s = this.list.filter((item: any) => item.type === 2);
    const x = this.list.filter((item: any) => item.type === 1);
    // this.detail.types = [...new (Set as any)(this.list.map((item: any) => item.route))];
    const arr = this.list.map((item: any) => item.route);
    this.detail.types = this.unique(arr);
    this.restaurants = this.detail.types.map(item => ({value: item}));
    const sResult = this.calcBill(s);
    const xResult = this.calcBill(x);
    this.detail.sTotal = sResult.total;
    this.detail.sList = sResult.type;
    this.detail.xTotal = xResult.total;
    this.detail.xList = xResult.type;
  }
  private calcTotal (arr: any) {
    return arr.length > 0 ? arr.reduce((pre: number, next: number) => pre + next) : 0;
  }
  private calcBill (arr: any) {
    const nums = arr.map((item: any) => item.nums);
    const total = this.calcTotal(nums);
    return {
      total,
      type: this.detail.types.map(item => {
        const list = arr.filter((items: any) => items.route === item).map((item: any) => item.nums);
        const total = this.calcTotal(list);
        return total;
      })
    };
  }
  private del (item: any) {
    this.$alert('删除？', '', {
      callback: action => {
        this.$store.dispatch('bill/delBill', {
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
      // this.$router.push('/');
    }
    this.getList();
  }
}
</script>

<style lang="scss">
  .bill {
    padding: $width;
    height: calc(100vh - 50px);
    overflow: auto;
    background: $trans;
    font-size: 16px;
    font-family: sans-serif;

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

    .bill-cont {
      margin-top: 20px;
      line-height: 30px;

      .el-col {
        min-height: 30px;
      }

      .el-row {
        border-bottom: 1px dashed $border-color;
      }

      .del-btn {
        color: rgb(238, 66, 14);
        text-decoration: underline;
        cursor: pointer;
      }

      .bill-total {
        margin-bottom: 20px;

        td, th {
          padding: 6px 10px;
          border: 1px solid #ccc;
          background: whitesmoke;
        }

        tr:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }

    .tel-bill {
      li {
        border-bottom: 1px dashed #999;

        .tel-time {
          color: #330b0b;
        }

        .tel-nums {
          color: red;
        }
      }
    }

    .el-dialog {
      .el-date-editor.el-input, .el-date-editor.el-input__inner {
        width: 200px;
      }
    }
  }
</style>
