# 测试站点通知条使用说明

## 用 **NPM** 方式

### 安装

```javascript
yarn add ys-test-notify-bar # 或者用 npm i ys-test-notify-bar
import Notify from 'ys-test-notify-bar';
```



## 用**CDN**方式

### 安装

使用时需要引入 `//cdn.yscase.com/common/test-notify-bar.min.js` 文件，有两种引用方式：

（1）放在`<head>`部分，需要引用下面的js代码

```js
<script>
    ;(function() {
       var ys = document.createElement("script");
       ys.src = "//cdn.yscase.com/common/test-notify-bar.min.js";
       var s = document.getElementsByTagName("script")[0]; 
       s.parentNode.insertBefore(ys, s);
    })();
</script>
```

（2）或者在`<body>`标签内引入js文件

```js
<script src="//cdn.yscase.com/common/test-notify-bar.min.js"></script>
```


## 使用

### 参数设置

| 参数名   | 类型   | 是否必填 | 默认值                 | 描述                                                         |
| -------- | ------ | -------- | ---------------------- | ------------------------------------------------------------ |
| position | String | 可选     | left-bottom            | 位置，可选位置：left-top、left-bottom、right-top、right-bottom |
| alpha    | Number | 可选     | 0.6                    | 透明度，范围0-1                                              |
| text     | String | 可选     | 测试网站，数据一律无效 | 文案                                                         |



**NPM使用方式**

使用实例1：全部使用默认值

```
new Notify();
```

使用实例2：自定义参数

```
new Notify({
    position:'right-top', //位置，可选
    alpha:0.8, //透明度，可选
    text:'测试测试测试' //文本，可选
});
```



**CDN使用方式**

例如：

```
<script src="//cdn.yscase.com/common/test-notify-bar.min.js?position=left-top&text=测试测试&alpha=0.3"></script>
```



## 注意事项

CDN方式中参数之间使用&符隔开,其中文案部分不可以包含%符号

