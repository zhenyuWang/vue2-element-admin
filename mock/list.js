// 引入mockjs
const Mock = require('mockjs')
// 列表1
Mock.mock('/api/list/list', 'post', (req) => {
  const data = JSON.parse(req.body).body;
  const listData = [
    {
      id:'001',
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      id:'002',
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      id:'003',
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      id:'004',
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    },{
      id:'005',
      date: '2016-05-05',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      id:'006',
      date: '2016-05-06',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      id:'007',
      date: '2016-05-07',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      id:'008',
      date: '2016-05-08',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    },{
      id:'009',
      date: '2016-05-09',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      id:'010',
      date: '2016-05-10',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      id:'011',
      date: '2016-05-11',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      id:'012',
      date: '2016-05-12',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }
  ]
  return {
    header:{
      code:0
    },
    body:{
      count:listData.length,
      list:listData.slice((data.pageNo-1)*data.pageSize,data.pageNo*data.pageSize)
    }
  }
})