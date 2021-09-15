import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'

// create an axios instance
const service = axios.create({
   // url = base url + request url
  baseURL: process.env.VUE_APP_BASE_API,
  // request timeout
  timeout: 10000
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    // if the custom code is not 0, it is judged as an error.
    if (res.header.code !== 0) {
      Message({
        message: res.header.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.header.code === 50008 || res.header.code === 50012 || res.header.code === 50014) {
        // to re-login
        MessageBox.confirm('您已经退出登录状态，您可以点击取消留在当前页面或者重新登录', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.header.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    Message({
      message: error.header ? error.header.msg : '请求超时，请稍后重试',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
/**
 * 封装接口请求方法
 * @param url 域名后需补齐的接口地址
 * @param method 接口请求方式
 * @param data data下的其他数据体
 */
const request = (url, method,data) => {
  return service({
    url,
    method,
    data: {
      body: data
    }
  })
}

export default request
