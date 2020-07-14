// wxss/wxss.js
Page({
  // mixins: [require('../../mixin/themeChanged')],
  data: {
      inputShowed: false,
      inputVal: "",
      isActive:false
  },
  showInput: function () {
      this.setData({
          inputShowed: true
      });
  },
  hideInput: function () {
      this.setData({
          inputVal: "",
          inputShowed: false
      });
  },
  clearInput: function () {
      this.setData({
          inputVal: ""
      });
  },
  inputTyping: function (e) {
      this.setData({
          inputVal: e.detail.value
      });
  },
  handleClick(){
      this.setData({
          isActive:!this.data.isActive
      })
      
  }
})