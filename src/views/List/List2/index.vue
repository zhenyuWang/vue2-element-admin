<template>
  <div>
    <el-table :data="list" stripe v-loading="loading" border>
      <el-table-column prop="date" label="日期" align="center" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" align="center" width="150">
      </el-table-column>
      <el-table-column prop="address" label="地址" align="center">
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :current-page.sync="param.pageNo"
      :page-size="param.pageSize"
      :total="totalCount"
      @current-change="getList"
    >
    </el-pagination>
  </div>
</template>
<script>
import { apiGetList } from "@/api/list";
export default {
  name: "List2",
  data() {
    return {
      loading: false,
      param: {
        pageNo: 1,
        pageSize: 10
      },
      list: [],
      totalCount: 0
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.loading = true;
      apiGetList(this.param)
        .then(res => {
          this.totalCount = res.body.count;
          this.list = res.body.list;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>
