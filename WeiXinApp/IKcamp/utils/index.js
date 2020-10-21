import config from './config'
import * as Mock from './mock'

let util = {
  isDEV: config.isDev,
  log() {
    this.isDEV && console.log(...arguments);
  },
  alert(title = '提示', content = config.defaultAlertMessage) {
    if(typeof content === 'object') {
      content = this.isDEV && JSON.stringify(content)
    }
    wx.showModal({
      title: title,
      content: content
    });
  },
  getStorageDate(key, cb) {
    wx.getStorage({
      key: key,
      success (res) {
        cb && cb(res.data)
      },
      fail (err) {
        this.log(err)
      }
    })
  },
  setStorageDate(key, value='',cb) {
    wx.setStorage({
      key: key,
      data: value,
      success () {
        cb && cb()
      } 
    })
  },
  request(opt) {
    let {url,data, header, mothod, dataType, mock = false} = opt
    //相当于 let url = opt.url
    let self = this
    return new Promise((resolve,reject) =>{
      if (mock) {
        let res = {
          statusCode: 200,
          data: Mock[url]
        }
        if (res && res.statusCode ==200 && res.data ) {
          resolve(res.data)
        }else{
          self.alert('提示',res)
          reject(res)
        }
      }else {
        wx.request({
          url: url, //仅为示例，并非真实的接口地址
          data: data,
          header: header || {'Content-Type': 'application/json'},
          method: method || 'GET',
          dataType: dataType || 'JSON',
          success (res) {
            //statusCode ==200表示接口请求成功
            if (res && res.statusCode ==200 && res.data ) {
              resolve(res.data)
            }else{
              self.alert('提示',res)
              reject(res)
            }
          },
          fail (err) {
            self.log(err)
            self.alert('提示',err)
            reject(err)
          }
        })
      }
     
    })
  }

}

export default util
