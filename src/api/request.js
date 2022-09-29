// 对于axios进行二次封装
import axios from "axios";
// 引入进度条
import nProgress from "nprogress";
// start:进度条开始 done：进度条结束
// 引入进度条样式
import 'nprogress/nprogress.css'

// 1.利用axios对象的方法create，去创建一个axios实例
// 2.requests就是axios，只不过需要稍微配置一下
const requests = axios.create({
    // 配置对象
    // 基础路径，发送请求的时候，在路径中会添加baseURL的值
    baseURL:'/api',
    // 代表请求超时的时间5s
    timeout:5000
})

// 请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config) =>{
    // config是配置对象，对象里面有个属性即headers请求头很重要
    // 进度条开始动
    nProgress.start()
    return config
})

// 响应拦截器
requests.interceptors.response.use((res) =>{
    // 成功的回调：服务器返回相应数据之后，响应拦截器可以检测到，并进行一些操作
    // 进度条结束
    nProgress.done()
    return res.data
},(error)=>{
    // 响应失败的回调函数
    return Promise.reject(new Error('faile'))
})

// 对外暴露
export default requests