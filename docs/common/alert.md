# 系统弹层组件

> 本组件由 Xia Xiaoming 开发
>
> # ys-layer
>
> # 1.初始化  YSLayer
>
> # npm安装： npm i ys-layer-jssdk
>
> ##### 第一步vue router中引入必须css样式          import 'ys-layer-jssdk/ys-layer.css'
>
> ##### 第二步在页面中引入js                    	      import YSLayer from 'ys-layer-jssdk/ys-layer'
>
> 
>
> 
>
> 
>
> ###### 构造函数通用属性
>
> 1. type: 必须  接收   loding    information   inquiry 三个类型
>
> ## loding配置
>
> ```javascript
> // loding 配置
>     var loding = {
>       type: 'loding',  			//必须 类型String  loding
>       config: {
>         // url: '',			    //可选 loding图片  提示！！！传空字符串 默认图不显示
>         txt: '',  				//可选 默认为空  提示文字
>         isClickHide: true, 		//可选  默认false  点击隐藏loding
>       }
>     };
> 
> var ysLayerLoding = new YSLayer(loding);
> //方法
> ysLayerLoding.fadeIn()      // 显示 接收一个Number时间参数（可选）  默认400 
> ysLayerLoding.fadeOut()     // 隐藏 接收一个Number时间参数（可选）  默认400 
> ysLayerLoding.init(config)  // 重置config
> ```
>
> 
>
> ## information单选框配置  
>
> ```javascript
> var information = {
>       type: 'information',  				//必须 类型String  接收 information
>       config: {
>         txt: '确定关闭当前页面？',			  //必须  说明文字
>         btn: '确定按钮',					 //必须  按钮
>         success: function () {				//必须  回调函数
>           ysLayerInformation.fadeOut()
>         }
>       }
>     };
> 
> var ysLayerInformation = new YSLayer(information);
> //方法
> ysLayerInformation.fadeIn()      // 显示 接收一个Number时间参数（可选）  默认400 
> ysLayerInformation.fadeOut()     // 隐藏 接收一个Number时间参数（可选）  默认400 
> ysLayerInformation.init(config)  // 重置config
> 
> ```
>
> ## inquiry询问框对话
>
> ```javascript
> var inquiry = {
>       type: 'inquiry',						//必须 类型String  接收 inquiry
>       config: {
>         txt: '是否关闭这个内容？',        	  //必须 类型String 
>         btns: ['确定', '取消'],   	 	     //必须 Array
>         success: function () {              //必须 确定按钮回调
>           ysLayerInquiry.fadeOut()
>         },
>         error: function () {		        //必须 取消按钮回调
>           ysLayerInquiry.fadeOut()
>         }
>       }
>     }
> 
> var ysLayerInquiry = new YSLayer(inquiry);
> ysLayerInquiry.fadeIn()      // 显示 接收一个Number时间参数（可选）  默认400 
> ysLayerInquiry.fadeOut()     // 隐藏 接收一个Number时间参数（可选）  默认400 
> ysLayerInquiry.init(config)  // 重置config
> ```
>
> 