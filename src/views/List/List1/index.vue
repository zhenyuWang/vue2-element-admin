<template>
  <div>
      <el-table
        :data="list"
        stripe
        v-loading='loading'
        border>
        <el-table-column
          prop="date"
          label="日期"
          align='center'
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          align='center'
          width="150">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          align='center'
          width='300'>
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button type='success' size='small' @click="detail(scope.row.id)">详情</el-button>
            <el-button type='primary' size='small' @click="edit(scope.row.id)">编辑</el-button>
            <el-button type='danger' size='small' @click="del(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        layout="prev, pager, next"
        :current-page.sync="param.pageNo"
        :page-size='param.pageSize'
        :total="totalCount"
        @current-change="getList">
      </el-pagination>
      </div>
</template>
<script>
import {apiGetList,apiDel} from '@/api/list'
export default {
  name:'List1',
  components: {},
  data () {
    return {
      loading:false,
      param:{
        pageNo:1,
        pageSize:10
      },
      list: [],
      totalCount:0,
    }
  },
  created(){
    this.getList();
  },
  methods:{
    getList(){
      this.loading = true;
      apiGetList(this.param).then(res => {
        this.totalCount = res.body.count;
        this.list =res.body.list;
      }).finally(() => {
        this.loading = false;
      })
    },
    detail(id){
      this.$router.push({name:'ListDetail',params:{id}})
    },
    edit(id){
      this.$router.push({name:'ListEdit',params:{id}})
    },
    del(id){
      apiDel({id}).then(() => {
        this.$message.success('删除成功！')
        this.getList();
      })
    }
  }
}
</script>
