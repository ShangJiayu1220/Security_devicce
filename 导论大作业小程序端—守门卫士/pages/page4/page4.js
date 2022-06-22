// pages/pade4.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        onco:"#979797",
        twco:"#000000",
        thco:"#979797",
       detail:"",
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
    yes:function(e){
        this.data.detail=e.detail.value
    },
    sharer:function(e){
        wx.showLoading({
          title: '加载中',
        })
     //与服务器交互

    setTimeout(function(){
        wx.hideLoading()},2000)
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
    points:function(e) {
      var that = this
      wx.request({
         //设备ID
        //api-key
        url: '954677441', //xxxxxxxxxx这里填写你的设备id
        header:{
          "api-key":"vZZ4uFzNoOwVYwchqs6p4jDBlAA="  //这里写你的api-key
        },
        data:{
          limit:1
        },
        method :"GET",
         //获取成功
        success:function(res){
         that.setData({
           shidu:res.data.data.datastreams[0].datapoints[0].value, //这里的shidu要跟wxml{{shidu}} 名字相同
           wendu:res.data.data.datastreams[1].datapoints[0].value,
         })    
        }
      })
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