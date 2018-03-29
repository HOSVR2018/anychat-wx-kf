//app.js
App({
  globalData:{
    phone:'',
    chooseText:''
  },
  onLaunch: function () {
   
  },
  getRequestInfo:function(url,data,callback){
    wx.request({
      url: url,
      data: data,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        callback(res.data);
      },
      fail:function(){
        console.info("调用失败");
      },
      complete:function(){
        console.info("调用了");
      }
    })
  }
})