// pages/page5/page6.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        onco:"#000000",
        twco:"#979797",
        thco:"#979797",
        array:[{
         tuxiang_url:"https://img1.baidu.com/it/u=3034750506,1307358368&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=339" ,
        username:"204邻居来访，留言",
        centent:"今天包了很多饺子，下班来我家拿一些吧。",
       },
       {tuxiang_url:"https://img0.baidu.com/it/u=1291227162,147774560&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=264" ,
       username:"妈妈来访，留言",
       centent:"我把屋子打扫了，给你带了些吃的，放冰箱了。",
      },
      {tuxiang_url:"https://img2.baidu.com/it/u=3720017766,882006503&fm=253&fmt=auto&app=138&f=PNG?w=332&h=500" ,
       username:"闺蜜来访，留言",
       centent:"我的行李放保安室了，来投靠你一阵子。",
      },
      {tuxiang_url:"https://img1.baidu.com/it/u=2607819052,1184902356&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=347" ,
       username:"煤气检修人员留言",
       centent:"明天中午检修，家中留人。",
      },
      {tuxiang_url:"https://img1.baidu.com/it/u=2272222383,1944739802&fm=253&fmt=auto&app=138&f=PNG?w=500&h=333" ,
       username:"物业来访，留言",
       centent:"收到您的投诉，楼道声控灯已修",
      },
    
      
        ]

    },
    abc:function () {
        
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