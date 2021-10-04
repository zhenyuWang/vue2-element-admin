<template>
  <div>
      <el-table
        :data="tableData"
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
            <el-button type='success' size='small' @click="detail(scope.row,scope.$index)">详情</el-button>
            <el-button type='primary' size='small' @click="edit">编辑</el-button>
            <el-button type='danger' size='small' @click="del">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        layout="prev, pager, next"
        :current-page='param.pageNo'
        :page-size='param.pageSize'
        :total="totalCount"
        @current-change="getList">
      </el-pagination>
      </div>
</template>
<script>
export default {
  name:'List2',
  components: {},
  data () {
    return {
      loading:false,
      param:{
        pageNo:1,
        pageSize:10
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      totalCount:20,
    }
  },
  created(){
    this.getList();
  },
  methods:{
    getList(){
      this.loading = true;
      console.log('getList2');
      setTimeout(() => {
        this.loading = false
      },1000)
    },
    detail(item,index){
      console.log('item',item);
      console.log('index',index);
    },
    edit(){
      console.log('edit');
    },
    del(){
      console.log('del');
    }
  }
}
</script>
