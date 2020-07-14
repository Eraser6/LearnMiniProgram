// components/my-cpn/my-cpn.js
Component({
  options:{
    styleIsolation:"apply-shared",
    multipleSlots:true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:'默认标题',
      observer:(newVal,oldVal)=>{
        console.log(newVal,oldVal);
        
      }
    }
  },
  externalClasses:['titleclass'],
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleIncrement(){
      this.triggerEvent('increment',{name:'why',age:18},{})
    }
  }
})
