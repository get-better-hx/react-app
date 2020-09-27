/**
 * 
 * 存储localStorage
 * @param { * } name
 * @param { * } content
 */

 export const setStore = (name, content) => {
   if (!name) return
   if (typeof content !== 'string') {
      content = JSON.stringify(content)
   }
   window.localStorage.setItem(name, content)
 }

 /**
  * 
  * 获取localStorage
  * @param { * } name
  */

  export const getStore = name => {
    if (!name) return
    return window.localStorage.getItem(name)
  }

  /**
   * 删除locastorage
   * @param { * } name
   */

   export const removeStore = name => {
     if (name) return
     return window.localStorage.removeItem(name)
   }


   /**
    * 用于get方法后vanish的拼接，传入data是对象
    * @param { * } name
    */

    export const getUrlConcat = function (data) {
      let dataStr = ""
      let url = ""

      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      // 去除掉最后一个&符号
      if (dataStr !== "") {
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }

      return url
    }


    /**
     * 
     *  处理图片路径
     */

     export const getImgPath = (path) => {
      // 传递过来的图片地址需要处理后才能正常使用path
      let suffix
      if (!path) {
        return '//elm.cangdy.org/img/default.jpg'
      }
      if (path.indexOf('jpeg') !== -1) {
        suffix = '.jpeg'
      } else {
        suffix = '.png'
      }
      let url = '/' + path.substr(0, 1) + '/' + path.substr(1, 2) + '/' + path.substr(3) + suffix
      return 'https://fuss10.elemecdn.com' +url
     }