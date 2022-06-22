// pages/page1/page1.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        onco:"#979797",
        twco:"#979797",
        thco:"#000000",

    },
    abc:function () {
        wx.navigateTo({
          url: '../page6/page6',
        })
    },
    def:function () {
        wx.navigateTo({
          url: '../page4/page4',
        })
    },
    mno:function () {
        wx.redirectTo({
          url: '../page1/page1',
        })  
    },
    points:function(e) {
      var that = this
      if(that.data.Light>=300&&that.data.Press==0){
        wx.showModal({
          title: '守门卫士提醒您',
          content: '有人在家门口逗留，已响起警报',
          showCancel:false,
          success (res) { }
        })
      }
      else if(that.data.Press==1){
        wx.showModal({
          title: '守门卫士提醒您',
          content: '有人试图强行闯入，请及时报警！',
          showCancel:false,
          success (res) { }
        })
      }
      else{
        console.log("success")
    }
      wx.request({
        url: 'https://api.heclouds.com/devices/954677441/datapoints?',
        //设备ID
        //api-key
        header:{
          "api-key":"vZZ4uFzNoOwVYwchqs6p4jDBlAA="
        },
        data:{
          limit:2
        },
        method :"GET",
        success:function(res){
         that.setData({
           Light:res.data.data.datastreams[0].datapoints[0].value,
           Press:res.data.data.datastreams[1].datapoints[0].value,
         })    
        }
      })
      
    },
    radioChange: function (e) {
      var str = null;
      for (var value of this.data.items) {
        if (value.name === e.detail.value) {
          str = value.value;
          break;
        }
      }
      this.setData({ radioStr: str });
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