// pages/page3/page3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    pass:"",
  },
  no:function(e){
    var that=this
    if(that.data.name==''){
      wx.showModal({
        title: '向日葵提醒您',
        content: '用户名还没有填写哦！',
        showCancel:false,
        success (res) { }
      })
    }else if(that.data.pass==''){
      wx.showModal({
        title: '向日葵提醒您',
        content: '密码还没有填写哦！',
        showCancel:false,
        success (res) { }
      })
    }else if(that.data.word!=that.data.pass){
      wx.showModal({
        title: '向日葵提醒您',
        content: '密码不正确！',
        showCancel:false,
        success (res) { }
      })
    }
    else{
        console.log("success")
    }
  },
  name:function(e){
    this.data.name=e.detail.value
  },
  pass:function(e){
    this.data.pass=e.detail.value
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})