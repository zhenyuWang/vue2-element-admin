// 引入mockjs
const Mock = require('mockjs')
Mock.mock('/api/user/login', 'post', (req) => {
  console.log('req',req);
  const data = JSON.parse(req.body).body;
  console.log('data',data);
  return {
    header:{
      code:0
    },
    body:{
      name:data.name,
      avatar:'https://img0.baidu.com/it/u=3233551726,336273710&fm=26&fmt=auto&gp=0.jpg'
    }
  }
})