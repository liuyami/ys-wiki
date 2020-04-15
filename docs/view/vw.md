# vw媒体查询适配

## vs code 配置less
- 安装easyless插件
- 文件 => 首选项 => 设置 => 搜索设置查找setting.json
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_29.png)

```javascript
// 在 setting.json文件中加入以下代码    
"less.compile": {
        "compress": true, // 是否删除多余空白字符
        // "sourceMap": false, // 是否创建文件目录树，true的话会自动生成一个 .css.map 文件
        "out": "../css/", // 是否输出css文件，false为不输出
        // "outExt": ".css", // 输出文件的后缀,默认为.css
}
```

上述配置完毕后新建demo目录结构如下
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_30.png)

less文件保存后自动在demo文件夹中会自动创建css文件夹 并创建对应的index.css文件
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_31.png)

html文件中引入编译好的css文件即可
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_32.png)



### 根据css规范，视口单位主要包括以下4个：
- vw：1vw等于视口宽度的1%
- vh：1vh等于视口高度的1%
- vmin：选取vw和vh中最小的那个
- vmax：选取vw和vh中最大的那个

视口单位区别于%单位，视口单位是依赖于视口的尺寸，根据视口尺寸的百分比来定义的；而%单位则是依赖于元素的祖先元素。
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_33.png)

用视口单位度量，视口宽度为100vw，高度为100vh（左侧为竖屏情况，右侧为横屏情况）
例如，在桌面端浏览器视口尺寸为650px，那么1vw = 650 * 1% = 6.5px（这是理论推算得出，如果浏览器不支持0.5px，那么实际渲染结果可能是7px）。

## 兼容性
其兼容性如下图有所示，可以知道：在移动端ios8以上以及Android 4.4以上获得支持，并且在微信 x5 内核中也得到完美的全面支持
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_34.png)

## 使用vw作为css单位
在仅使用vw作为单位作为唯一一种CSS单位的做法下，我们遵守：
- 对于设计稿的尺寸转换成vw单位，我们使用Less函数编译
- 
```less
// 设计稿宽 750
@vw: 7.5vw;
```

- 无论是文本还是布局宽度、间距等都使用vw作为CSS单位
```less
.wrap{
  width: 750/@vw;

  font-size: 16/@vw;
}


```


## 媒体查询

#### 什么是媒体查询

媒体查询（Media Query）是CSS3新语法。

- 使用 @media查询，可以针对不同的媒体类型定义不同的样式
- @media 可以针对不同的屏幕尺寸设置不同的样式
- 当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面 
- 目前针对很多苹果手机、Android手机，平板等设备都用得到多媒体查询

#### 媒体查询语法规范

- 用 @media开头 注意@符号
- mediatype  媒体类型
- 关键字 and  not  only
- media feature 媒体特性必须有小括号包含

```
@media mediatype and|not|only (media feature) {
    CSS-Code;
}
```

1. mediatype 查询类型

​       将不同的终端设备划分成不同的类型，称为媒体类型

![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_36.jpg)

2. 关键字

​       关键字将媒体类型或多个媒体特性连接到一起做为媒体查询的条件。

- and：可以将多个媒体特性连接到一起，相当于“且”的意思。
- not：排除某个媒体类型，相当于“非”的意思，可以省略。
- only：指定某个特定的媒体类型，可以省略。    

3. 媒体特性

   每种媒体类型都具体各自不同的特性，根据不同媒体类型的媒体特性设置不同的展示风格。我们暂且了解三个。

   注意他们要加小括号包含

![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_37.jpg)

   

4. 媒体查询书写规则

   注意： 为了防止混乱，媒体查询我们要按照从小到大或者从大到小的顺序来写,但是我们最喜欢的还是从小到大来写，这样代码更简洁

![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_38.png)

   

   