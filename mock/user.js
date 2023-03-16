const Mock = require('mockjs')

Mock.mock('/api/user/login', 'post', (req) => {
  const data = JSON.parse(req.body).body
  return {
    header: {
      code: 0,
    },
    body: {
      userId: '001',
      name: data.name,
      avatar: 'http://114.115.235.59/avatar.png',
    },
  }
})

Mock.mock('/api/user/logout', 'get', () => {
  return {
    header: {
      code: 0,
    },
    body: {},
  }
})

Mock.mock('/api/user/changePassword', 'post', () => {
  return {
    header: {
      code: 0,
    },
    body: {},
  }
})
