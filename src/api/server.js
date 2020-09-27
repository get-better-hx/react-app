import axios from 'axios'

import { baseUrl } from '@/config/envconfig'


/**
 * 
 * @param method { string } 方法名
 * @param url { string } 请求地址例如： /login 配合baseUrl组成完整请求地址
 * @param baseUrl { string } 请求地址统一前缀***需要提前指定*** 例如http://cangdu.org
 * @param timeout { number } 请求超时时间 默认 30000
 * @param params { object } get方式传参key值
 * @param headers { string } 指定请求头信息
 * @param withCredentials { boolean } 请求时候携带本地cookies信息默认开启
 * @param validateStatus { func } 默认判断请求成功的范围 200-300
 * @return { Promise }
 * 其他要更多拓展参看axios文档自行拓展
 * 注意： params中的数据会覆盖method url参数，所以如果指定了这两个参数则不需要在params中带入
 */

 export default class Server {
   axios(method,url, data) {
     return new Promise ((resolve, reject) => {
       let _option = {
         method,
         url,
         baseUrl: baseUrl,
         timeout: 30000,
         data: data,
         headers: null,
         withCredentials: true,
         validateStatus: (status) => {
           return status >= 200 && status < 300
         }
       }

       axios.request(_option).then(res => {
         resolve(typeof res.data === 'object' ? res.data: JSON.parse(res.data))
       }, error => {
         if (error.response) {
           reject(error.response.data)
         } else {
           reject(error)
         }
       })
     })
   }
 }