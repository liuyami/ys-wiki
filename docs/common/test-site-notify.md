# 测试网站通知条

## 1.使用方法

使用时需要引入 //cdn.yscase.com/common/test-notify-bar.min.js 文件，有两种引用方式：

（1）放在head部分，需要引用下面的js代码
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

（2）或者在body标签内引入js文件
```js
<script src="//cdn.yscase.com/common/test-notify-bar.min.js"></script>
```
## 2.src参数设置方式

参数名：

- alpha  透明度


- position  位置     可选位置：left-top、left-bottom（默认）、right-top、right-bottom


- text  文案


参数之间使用&符隔开,其中文案部分不可以包含%符号

例如：*//cdn.yscase.com/common/test-notify-bar.min.js?position=left-top&text=测试测试&alpha=0.3*
