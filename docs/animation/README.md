# 动画

## TweenMax

### 介绍

**TweenMax** 是由GreenSock 动画平台(GSAP) 创作的，可用来构建补间动画(tween)。

#### 补间动画

在介绍**TweenMax**之前，我们需要了解`补间动画`是什么。

`补间动画` ：补间动画指的是做FLASH动画时，在两个关键帧中间需要做“补间动画”，才能实现图画的运动。简单来说就是你给定一个`起始帧`和一个`结束帧`，中间的`插补帧`由计算机来运算实现。    
举个栗子 :hand: ：想让一个元素从起始帧 `{x : 0, y : 0}`  的位置移动到结束帧 `{x : 100, y : 100}` 的位置，我们只需要将元素的起点位置和结束位置定义好，计算机会自动补全中间过程，这种便叫做补间动画。

#### 补间动画库

市面上有不少优秀的补间动画库，**TweenMax** 、**tween.JS** 、**anime.JS** ......，而 **TweenMax** 是使用最为广泛的动画库，它拥有丰富的插件，并且具有很好的浏览器兼容性，因此，这里主要对 **TweenMax** 进行讲解。

----



### 兼容性

- TweenMax 的核心功能兼容**各种新旧浏览器、移动设备**等。

![兼容性](https://www.tweenmax.com.cn/templets/default/images/compatible_ie6.png)

1. TweenMax 可以在现代浏览器中实现各种3D Transforms（缩放，倾斜，旋转，x和y轴运动），其2D动画甚至兼容IE6。

2. 使用TweenMax 不需要添加笨重的浏览器前缀和hack。

3. 自动解决SVG在各种浏览器的渲染问题。

   :+1:  

- TweenMax 中 3D Transforms 和其他CSS3 属性动画的兼容性

  **GSAP**的`CSSPlugin` 可以灵活的处理一些新CSS3属性，如3D Transforms，boxShadow，textShadow，borderRadius和clip。并且，你无需担心一连串的浏览器引擎前缀。

| 属性          | 兼容                                                         |
| ------------- | ------------------------------------------------------------ |
| 3D Transforms | Chrome 12, Safari 4, Firefox 10, IE 10, iOS 3.2, Android 3.0<br />1. 浏览器之间的性能差别很大。一般来说，像Chrome和Safari这样的Webkit浏览器做得最好。 <br />2. 在某些浏览器中，当元素开始/结束3D动画时，您可能会注意到像素的轻微移位。已知的解决方法是添加`transform:translateZ(0.1px);` <br />3. 当屏幕上有3D元素时，字体抗锯齿可能会发生变化。在Webkit浏览器中，您可以通过在CSS中设置`-webkit-font-smoothing:antialiased`来解决此问题。 <br />4. 如果浏览器不支持3D转换，则只会忽略它们（不会生成错误）。 <br />5. IE10支持3D转换，但它并不支持`preserve-3d` |
| textShadow    | Chrome 22, Safari 5.1, Firefox 15, IE 10, Opera 12.1, iOS 3.2, Android 2.1 |
| boxShadow     | Chrome 22, Safari 5.1, Firefox 15, IE 9, Opera 12.1, iOS 3.2, Android 2.1 |
| borderRadius  | Chrome 22, Safari 5.1, Firefox 15, IE 9, Opera 12.1, iOS 3.2, Android 2.1) |
| clip          | Chrome 2, Safari 1.3, Firefox 1, IE 9, Opera 9.2, iOS 3.2, Android 2.1 |

---



### 使用方法

1. 获取TweenMax的JS包

   有两种方式

   - [下载](https://www.tweenmax.com.cn/source/) 免费JS包

   - CDN

     请将x.x.x改成你需要的版本号，例如2.0.1

     ````html
     <!-- TweenMax.js CDN -->
     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/x.x.x/TweenMax.min.js"> </script>
     
     <!-- TweenLite和其他组件 CDN -->
     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/x.x.x/TweenLite.min.js"> </script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/x.x.x/plugins/CSSPlugin.min.js"> </script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/x.x.x/easing/EasePack.min.js"> </script>
     ````

     

2. 加载JS文件

   必须要加载核心工具`TweenLite.min.js`或者`TweenMax.min.js`。此外还需要加载其他需要的插件，例如基础插件，时间轴，拓展时间曲线，商业插件等。

   建议在开发中加载`TweenMax.min.js`这个全功能的JS文件，因为它包括了GreenSock动画平台的大部分核心功能。如果是加载`TweenLite.min.js` 我们则需要再加载其他的插件。

   - 如果加载的是`TweenLite.min.js`

     ````html
     <!-- 核心工具，可初始化TweenLite对象 -->
     <script src="js/greensock-js/TweenLite.min.js"> </script>  
     
     <!-- 基础插件，用于制作CSS动画2D，3D动画 -->
     <script src="js/greensock-js/plugins/CSSPlugin.min.js"> </script>
     
     <!-- 基础插件，用于制作贝塞尔曲线 -->
     <script src="js/greensock-js/plugins/BezierPlugin.min.js"> </script>
     
     <!-- 核心工具，创建时间轴管理动画 -->
     <script src="js/greensock-js/TimelineLite.min.js"> </script>
     
     <!-- 拓展的时间曲线，例如bounce -->
     <script src="js/greensock-js/easing/EasePack.min.js"> </script>
     ````

   - 如果加载的是`TweenMax.min.js` ，则以上的加载可以简约为

     ````html
     <script src="js/greensock-js/TweenMax.min.js"> </script>
     ````

     哪个方便，一:eye:了然

     

3. 开始制作动画

   开始之前，我们需要了解一下动画三要素：

   1.  动画目标对象  :man:

   2.  动画的持续时间  :hourglass:
   3.  变化的属性  :collision:

   ![TweenMax使用](https://www.tweenmax.com.cn/templets/default/images/tweenmax-started-01.png)

   举个栗子 :chestnut::

   使用TweenMax的`to()`方法，将一个id为"obj"的DOM元素的CSS属性的left属性从当前值过渡到500px，从而产生移动效果。持续时间3秒。


   HTML

   ```HTml
   <div id="obj"></div>
   ```

   JS

   ```js
   TweenMax.to("#obj", 3, {left:500});
   ```

   

   ***注意***： left属性动画需要position:reletive支持，如需相对位置移动可使用{x : 500 }(CSS3的2D动画)更为简便

   JS

   ```js
   TweenMax.to("#obj", 3, {x:200});        //在原有位置向右移动200px
   TweenMax.to("#obj", 3, {x:200, y:100}); //向右移动200px的同时向下移动100px
   ```

----



### TweenMax.JS API

以下内容都是基于`TweenMax.min.js` 



#### 动画结构

##### TweenMax()

```js
.TweenMax( target:Object, duration:Number, vars:Object ) ;
```

TweenMax的构造函数，用来构建一个TweenMax对象。

**参数**

| 参数名   | 类型   | 是否必填 | 描述                   |
| -------- | ------ | -------- | ---------------------- |
| target   | object | 是       | 需要缓动的对象         |
| duration | number | 是       | 动画持续时间，一般是秒 |
| vars     | object | 是       | 动画参数               |

**示例**

html

```html
<div class="box"></div>
```

js

````js
new TweenMax('.box', 3, {
    x: 500,
    alpha : 0.3,
});
````

将元素从当前位置向x方向移动500px并且透明度变成0.3，持续时间为3秒

----



##### TweenMax.to()

```js
TweenMax.to( target:Object, duration:Number, vars:Object )
```

此方法用于创建一个从当前属性到指定目标属性的TweenMax动画对象。

以下几种方式效果相同

````js
TweenMax.to(obj, 1, {x:100});
var myTween = new TweenMax(obj, 1, {x:100})
var myTween = TweenMax.to(obj, 1, {x:100});
````

当然，我们也可以同时对多个对象进行动画

```js
TweenMax.to([obj1, obj2, obj3], 1, {x:100});
```

**参数**

| 参数名   | 类型   | 是否必填 | 描述                                  |
| -------- | ------ | -------- | ------------------------------------- |
| target   | object | 是       | 需要动画的对象                        |
| duration | number | 是       | 动画持续时间，一般是秒                |
| vars     | object | 是       | 动画参数（CSS属性、延迟、重复次数等） |

**示例**

html

````ht
<div class="wrapper">
  <div class="box green"></div>
  <div class="box orange"></div>
  <div class="box grey"></div>
</div>
````

js

````js
var myTween = TweenMax.to(".box", 1, {
  x: function(index, target) {
    console.log(index, target);
    return (index + 1) * 100 // 100, 200, 300
  }
})
````

可以通过function关键词返回变化值，函数中的参数为index(索引值) ，target(目标)

以上例子对三个元素进行动画，分别向X轴方向运动100px、200px、300px

---



##### TweenMax.from()

```js
TweenMax.from( target:Object, duration:Number, vars:Object )
```

通过设置动画起始点来初始化一个TweenMax，相当于动画从设置点开始。

```js
TweenMax.from(mc, 1.5, {opacity:0, delay:2});   //delay 延迟2s执行
```

多个目标的动画

```js
TweenMax.from([mc1, mc2, mc3], 1.5, {opacity:0});
```



**参数**

| 参数名   | 类型   | 是否必填 | 描述                         |
| -------- | ------ | -------- | ---------------------------- |
| target   | object | 是       | 需要动画的对象               |
| duration | number | 是       | 动画持续时间，一般是秒       |
| vars     | object | 是       | 设置动画的一些属性及其他参数 |

**示例**

html

```html
<div class="box green"></div>
```

js

````js
var myTween = TweenMax.from(".box", 3, {
  x: 500,
})
````

元素从500px开始，返回原来位置

---



##### TweenMax.fromTo()

````js
TweenMax.fromTo( target:Object, duration:Number, fromVars:Object, toVars:Object )
````

通过设置动画起始点和结束点来初始化一个TweenMax，相当于动画从设置点到第二个设置点。

```js
TweenMax.fromTo(element, 1, {x:200}, {x:500});
```

**参数**

| 参数名   | 类型   | 是否必填 | 描述                   |
| -------- | ------ | -------- | ---------------------- |
| target   | object | 是       | 需要动画的对象         |
| duration | number | 是       | 动画持续时间，一般是秒 |
| fromVars | object | 是       | 起始点动画参数         |
| toVars   | object | 是       | 结束点动画参数         |

html

````html
<div class="box green"></div>
````

js

````js
var myTween=TweenMax.fromTo('.box', 3, {x: 200,},{x: 500,});
//从200到500
````

例子中的元素从200px移动到500px

---



##### TweenMax.staggerTo()

```js
TweenMax.staggerTo( targets:Array, duration:Number, vars:Object, stagger:Number, onCompleteAll:Function, onCompleteAllParams:Array, onCompleteAllScope:* )
```

stagger系列方法为多个目标制作一个有间隔的动画序列，相当于有多个TweenMax的数组。
需要设置每个动画的开始间隔。如不设置则为零，同时开始动画。

```js
// 定义一个对象数组
var objects = [obj1, obj2, obj3, obj4, obj5];
TweenMax.staggerTo(objects, 1, {y:150, opacity:0}, 0.2);
```

**参数**

| 参数名              | 类型     | 是否必填 | 描述                                               |
| ------------------- | -------- | -------- | -------------------------------------------------- |
| targets             | Array    | 是       | 要进行动画的对象，可以有多个，以数组形式传入       |
| duration            | number   | 是       | 动画持续的秒数（或帧数，如果设置了useFrames:true） |
| vars                | object   | 是       | 设置动画的一些属性及其他参数                       |
| stagger             | Number   | 否       | 每个动画的起始间隔，默认是0                        |
| onCompleteAll       | Function | 否       | 当所有显示对象都完成动画后要调用的函数             |
| onCompleteAllParams | Array    | 否       | onCompleteAll函数的参数，以数组形式传入            |
| onCompleteAllScope  |          | 否       | onCompleteAll函数的作用域，this                    |

**示例**

html

```html
  <h2>TweenMax.staggerTo()</h2>
  <div id="demo">
    <p>每个动画序列的开始时间间隔0.5秒</p>
    <div class="box green"></div>
    <div class="box grey"></div>
    <div class="box orange"></div>
    <div class="box green"></div>
    <div class="box grey"></div>
    <div class="box orange"></div>
    <div class="box green"></div>
    <div class="box grey"></div>
    <div class="box orange"></div>
  </div>
```

js

```js
TweenMax.staggerTo(".box", 1, {rotation:360, y:100}, 0.5);
```

例子将所有元素间隔0.5秒相继执行动画，旋转360度，向Y轴移动100px

---



##### TweenMax.staggerFrom()

````js
TweenMax.staggerFrom( targets:Array, duration:Number, vars:Object, stagger:Number, onCompleteAll:Function, onCompleteAllParams:Array, onCompleteAllScope:* )
````

通过设定序列动画的终点来初始化一组TweenMax。

```js
// 创建一个对象数组
var objects = [obj1, obj2, obj3, obj4, obj5];
TweenMax.staggerFrom(objects, 1, {y:"+=150"}, 0.2);
```

**参数**

| 参数名              | 类型     | 是否必填 | 描述                                               |
| ------------------- | -------- | -------- | -------------------------------------------------- |
| targets             | Array    | 是       | 要进行动画的对象，可以有多个，以数组形式传入       |
| duration            | number   | 是       | 动画持续的秒数（或帧数，如果设置了useFrames:true） |
| vars                | object   | 是       | 设置动画的一些属性及其他参数                       |
| stagger             | Number   | 否       | 每个动画的间隔，默认是0                            |
| onCompleteAll       | Function | 否       | 当所有显示对象都完成动画后要调用的函数             |
| onCompleteAllParams | Array    | 否       | 传递给onCompleteAll函数的参数，以数组形式传入      |
| onCompleteAllScope  |          | 否       | onCompleteAll函数的作用域                          |

**示例**

html

````html
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
````

js

```js
TweenMax.staggerFrom(".box", 1, {
   y:function(index){
     return index * 20;   // 0，20，40，60，80，100，120，140
  }
}, 0.5);
```

例子中将所有.box元素间隔0.5s从指定的位置移动到初始位置，每个动画持续1s。

---



##### TweenMax.staggerFromTo()

```js
TweenMax.staggerFromTo( targets:Array, duration:Number, fromVars:Object, toVars:Object, stagger:Number, onCompleteAll:Function, onCompleteAllParams:Array, onCompleteAllScope:* )
```

通过设定序列动画的起点和终点来初始化一个TweenMax。

```js
// 创建一个对象数组
var objects = [obj1, obj2, obj3, obj4, obj5];
TweenMax.staggerFromTo(objects, 1, {opacity:1}, {opacity:0}, 0.2);
```

**参数**

| 参数名              | 类型     | 是否必填 | 描述                                               |
| ------------------- | -------- | -------- | -------------------------------------------------- |
| targets             | Array    | 是       | 要进行动画的对象，可以有多个，以数组形式传入       |
| duration            | number   | 是       | 动画持续的秒数（或帧数，如果设置了useFrames:true） |
| fromVars            | object   | 是       | 设置动画的一些属性及其他参数                       |
| toVars              | object   | 是       | 设置动画的一些属性及其他参数                       |
| stagger             | Number   | 否       | 每个动画的间隔，默认是0                            |
| onCompleteAll       | Function | 否       | 当所有显示对象都完成动画后要调用的函数             |
| onCompleteAllParams | Array    | 否       | 传递给onCompleteAll函数的参数，以数组形式传入      |
| onCompleteAllScope  |          | 否       | onCompleteAll函数的作用域                          |

**示例**

html

```html
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
```

js

```js
TweenMax.staggerFromTo(".box", 1, {
    // 起始点也就是fromVars
   y:function(index){
     return index * 10;
   }
},
 {
    // 终点也就是toVars
   y:function(){
     return (Math.random() * 100) + 20;
   }
}, 0.5);
```

---



##### TweenMax.delayedCall()

```js
TweenMax.delayedCall( delay:Number, callback:Function, params:Array, scope:*, useFrames:Boolean )
```

提供一种在设定的时间（或帧）后调用函数的简单方法。

```js
//1秒后执行myFunction并传递两个参数:
TweenMax.delayedCall(1, myFunction, ["param1 value", "param2 value"]);
function myFunction(param1, param2) {
    console.log(param1+param2+this)
}
```

**参数**

| 参数名    | 类型     | 是否必填 | 描述                                                 |
| --------- | -------- | -------- | ---------------------------------------------------- |
| delay     | Number   | 是       | 要延迟的秒数（或帧数，如果设置了useFrames:true）     |
| callback  | Function | 是       | 要延迟执行的函数                                     |
| params    | Array    | 否       | 传递给onComplete函数的参数，以数组形式传入           |
| scope     | *        | 否       | 函数的作用域，this的指向，默认为空                   |
| useFrames | Boolean  | 否       | 设定延迟的时间模式是基于秒数还是帧数 ，默认false：秒 |

**示例**

html

```html
<div class="box green"></div>
```

js

```js
var myTween=new TweenMax('.box', 3, {
    x: 500,
})
var myTween2=TweenMax.delayedCall(2,myFunction,["参数1","参数2"])
function myFunction(param1, param2) {
   alert("延迟2秒输出"+param1+'和'+param2);
}
```

例子定义了一个持续3s的动画，2s后调用函数`myFunction`，并且函数传入了两个参数。

---



##### TweenMax.set()

```js
TweenMax.set( target:Object, vars:Object )
```

立即设置目标的属性值而不产生过渡动画，相当于0的动画时间。可以用来设置一些元素的默认动画属性。

```js
//以下两个设置作用相同
TweenMax.set(myObject, {x:100});
TweenMax.to(myObject, 0, {x:100});
```

**参数**

| 参数名 | 类型   | 是否必填 | 描述           |
| ------ | ------ | -------- | -------------- |
| target | object | 是       | 需要移动的对象 |
| vars   | object | 是       | 动画参数       |

**示例**

html

```html
<div class="wrapper">
	<div class="box"></div>
	<div class="nbox box"></div>
</div>
```

js

```js
TweenMax.set(".nbox",{transformPerspective:300});
//或者设置父级元素，使其全部子元素产生3D效果 TweenMax.set(".wrapper",{perspective:200});
TweenMax.to(".box", 3, {rotationY:360, transformOrigin:"left top"})
```

也可以为一个数组设置属性

```js
TweenMax.set([obj1, obj2, obj3], {x:100, y:50, opacity:0});
```

![效果图](https://ae01.alicdn.com/kf/H95e1ce23214144dea219d3a47e3413d7v.png)

例子中用TweenMax.set设置了`.nbox`的属性值`transformPerspective`，定义 3D 元素距视图的距离，然后对.box元素都使用了TweenMax.to设置3s动画，旋转360度，中心设为左上。如图，右边的设置了`transformPerspective`，看起来更有3D效果。

---



#### 动画初始设置(动画属性)

##### delay(延迟)

```js
delay:Number
```

动画开始之前的延迟秒数（以帧为单位时则为帧数）。

**示例**

html

```html
<div class="box green"></div>
```

js

```js
new TweenMax('.box', 3, {
    x: 500,
    delay: 3    // 动画延迟3s执行
});
```

例子中`delay`属性设置了动画延迟3s执行

---



##### ease(速度曲线)

```js
ease: Ease (or Function or String)
```

过渡效果的速度曲线（缓动效果）。你可以在动画的参数中设置各种缓动来控制动画的变化率，赋予其特定的“感觉”。

| JS文件    | ease缓动类型                                                 | 参数                          |
| --------- | ------------------------------------------------------------ | ----------------------------- |
| TweenLite | Power0、Power1、Power2、Power3、Power4、Linear、Quad、Cubic、Quart、Quint、Strong | .easeIn、.easeOut、.easeInOut |
| TweenMax  | Power0、Power1、Power2、Power3、Power4、Linear、Quad、Cubic、Quart、Quint、Strong、Elastic、Back、Bounce、SlowMo、SteppedEase、RoughEase、Circ、Expo、Sine | .easeIn、.easeOut、.easeInOut |

通过`ease`缓动类型 . 参数的形式来设置`ease`属性。

此外，缓动效果还可以像`Jquery`那样写，`easeOutStrong` 等同于`Strong.easeOut` 。

**示例**

html

```html
<div class="box green"></div>
```

js

```js
new TweenMax('.box', 3, {
    x: 500,
    ease: Bounce.easeOut
});
```

---



##### paused(暂停)

````js
paused: Boolean
````

如果设置为true，动画将在创建时立即暂停，默认false。

**示例**

html

```html
<div class="box green"></div>
<br>
<input type="button" id="playBtn" value="play()" title="播放">
```

js

```js
tween = new TweenMax('.box', 3, {
    x: 500,
    paused: true   // 动画创建时就是暂停的
});

playBtn = document.getElementById("playBtn")   
// 点击按钮启动动画
playBtn.onclick = function() {
    //  play()启动动画，是TweenMax内置的方法，后面会详细说明
    tween.play();
}
```

---



##### immediateRender(立即渲染)

```js
immediateRender:Boolean
```

立即渲染，默认false。

一般来说，TweenMax的运动对象会在下一个渲染周期前(也就是下一帧)被渲染到场景中，除非你设置了`delay`。如果想强制立即渲染，可以把这个参数设为true。   
另外`from()`方法的运动对象是立即渲染的（默认true），如果你不想该运动对象被渲染，可以把这个参数设为`false`。`from()`方法中的`immediateRender`被设置为`false`并且有`delay`之后，运动对象不会立即渲染到设置的位置，而是等`delay`时间结束后才会渲染上去。

**示例**

html

````html
<div class="box green"></div>
<div class="box orange"></div>
````

js

```js
TweenMax.from('.green', 3, {
    x: 500,
    delay:3,
});
TweenMax.from('.orange', 3, {
    x: 500,
    delay:3,
    immediateRender: false,
});
```

例子中的`.green`元素会被立即渲染到x为500px的位置，延迟3s后执行动画回到初始位置。而`.orange`元素因为将`immediateRender`设置为了`false`，所以不会立即渲染到x为500px的位置，而是在初始位置，等到3s后才会渲染到x为500px的位置，并且执行动画回到初始位置。

---



##### overwrite(重叠)

```js
overwrite: String (or int)
```

用来控制同一个对象上有多个动画时的覆盖之类的情况。

```js
TweenMax.to('.box', 6, {x: 700,y:100,});
TweenMax.to('.box', 3, {x: 200,overwrite:"none"});
//或者
TweenMax.to('.box', 3, {x: 200,overwrite:0});
```

有以下6种模式，以上例来说明：

| 模   式 | 模式代码        | 说明                             | 效果                                                         |
| ------- | --------------- | -------------------------------- | ------------------------------------------------------------ |
| 0       | "none"或者false | 不做任何处理                     | 前三秒运行x: 200,y:100 <br />后三秒运行x: 700,y:100          |
| 1       | "all"或者true   | 覆盖所有                         | 只运行x: 200                                                 |
| 2       | "auto"          | 仅覆盖重复的属性<br />(默认模式) | 前三秒运行x: 200,y:100<br />后三秒运行y:100                  |
| 3       | "concurrent"    | 同时发生                         | 跟模式1很相似，不同是它只覆盖掉正在运行的动画属性。而放过其他的没有启动的动画属性。 |
| 4       | "allOnStart"    | 开始时覆盖                       | 跟模式1非常像。两点不同是他是在动画属性第一次渲染时才覆盖掉其他所有的动画属性，而且这个会把在他之后创建的动画属性也覆盖掉。 |
| 5       | "preexisting"   |                                  | 在动画属性第一次渲染时才覆盖掉其他所有的动画属性。           |

**示例**

html

```html
<div class="box green"></div>
```

js

```js
TweenMax.to('.box', 6, {x: 700,y:100,});
TweenMax.to('.box', 3, {x: 200,overwrite:2});
```

例子中的元素前三秒运行`x: 200, y: 100`，后三秒运行`y: 100`

---



##### useFrames(刷帧)

```js
useFrames: Boolean
```

当设置为true时，对这个TweenMax对象的时间计算方式基于帧而不是秒，一般帧速约为16.66ms（60帧/秒）。

```js
TweenMax.to(obj, 100, {x:500,useFrames:true,});
```

**示例**

html

```html
<div class="box green"></div>
```

js

```js
TweenMax.ticker.fps(10);    // 设置帧率, 后面会详细说明
myTween=TweenMax.to('.box', 100, {x:500,useFrames:true,});
```

一个动画的时间模式通常是由其父时间轴决定。可通过`TweenMax.ticker.fps(10)`设置帧速。帧速不能超过60

---



##### repeat(重复)

```js
repeat: Number
```

动画在第一次完成后应重复的次数。例如，如果repeat为1，则动画将总共播放两次（初始播放加1次重复）。要无限期重复，请使用-1。repeat应该始终是一个整数。

**示例**

html

```html
<div class="box green"></div>
```

js

```js
new TweenMax('.box', 3, {
    x: 500,
    repeat: 3,//动画将进行4次
});
```

例子中的元素将会在第一次动画完成后重复播放三次，也就是说一共进行了四次动画，这是很重要的点，因为我们习惯上会将重复次数理解为包含第一次在内的重复的次数。

---



##### repeatDelay(重复延迟)

```js
repeatDelay: Number
```

每次重复之间的秒数（或帧）。例如，如果repeat是2并且repeatDelay是1，则动画将首先播放，然后在重复之前等待1秒，然后再次播放，然后再等待1秒再进行最后的重复。

**示例**

html

```html
<div class="box"></div>
```

js

````js
new TweenMax('.box', 3, {
    x: 500,
    repeat: 2,
    repeatDelay: 1,
});
````

例子中元素重复两次动画，并且每次重复之前都会延迟1s再进行重复。
**注意**：动画第一次渲染的时候是不会有延迟的，`repeatDelay`只对重复的动画有效果。

---



##### yoyo(溜溜球)

```js
yoyo: Boolean
```

溜溜球:grey_question:  其实仔细想想这个词很形象，表示动画就像溜溜球一样每次动画都是从初始位置到终点位置，然后从终点位置回到初始位置这样一个往返的过程。
如果设置yoyo为true，那么重复的动画将往返进行。默认为false。例如当你设置了repeat:2，如果没设置yoyo，那么动画是这样的123-123-123，如果设置了yoyo，动画则是123-321-123

**示例**

html

```html
<div class="box"></div>
```

js

```js
new TweenMax('.box', 3, {
    x: 500,
    repeat:-1,    // 重复次数为无数次
    yoyo:true,    // 开启动画往返
});
```

---



##### yoyoEase(往返速度曲线)

```js
yoyoEase: Ease | Boolean
```

定义动画返回时，缓动效果如何，默认false，返回时的缓动效果按照前进时的反转来进行。
例如，动画前行效果ease:Power1.easeOut，回转时则变成是ease:Power1.easeIn。如果设置为true，回转时则与前进相同，为ease:Power1.easeOut。也可以设置为特定的ease效果，例如Power2.easeOut。

**示例**

html

```html
<div class="box green"></div>
<div class="box orange"></div>
```

js

```js
new TweenMax('.green', 3, {
    x: 500,
    repeat: -1,
    ease: Bounce.easeOut,
    yoyo: true,
});
new TweenMax('.orange', 3, {
    x: 500,
    repeat: -1,
    ease: Bounce.easeOut,
    yoyo: true,
    yoyoEase: true,
});
```

例子中`.green`元素没有使用`yoyoEase`，所以动画按照123-123-123.....的形式重复，而`.orange`元素使用了`yoyoEase`，所以动画按照123-321-123....的形式重复。

---



##### startAt(开始于)

```js
startAt: Object
```

设置动画属性开始时的值

**示例**

html

```html
<div class="box"></div>
```

js

````js
new TweenMax('.box', 3, {
    x: 500,
    startAt: {x:200},//从200开始
});
````

例子中的元素设置了`startAt`，那么元素将从x为200px的地方开始动画。

---



##### cycle(整套)

```js
cycle: Object
```

在stagger（错开）动画中设定属性组。
虽然stagger限定了动画目标使用相同的属性（如`x:100, rotation:90`），但你可以使用`cycle`来设定一个属性组（如 `cycle:{x:[100,-100], rotation:[30,60,90]}` ），还可使用function关键词（如 `{x:function() { return Math.random() * 200; }}` ）。
cycle适用于 `staggerTo()` 、 `staggerFrom()` 和 `staggerFromTo()` 。

:cry: 单看文字可能还不太理解这个属性的作用，通过一个例子来说明下

**示例**

html

```html
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
```

js

```js
myTween = TweenMax.staggerTo(".box", 1, {
	cycle: {
		//为目标循环设置一下属性数组
		backgroundColor: ["red", "white", "#00f"],
		//通过function返回属性数组
		y: function(index, target) {
			console.log(index, target)
           // 目标数组的动画索引值index
			return index * 20;
		},
	},
}, 0.5);
```

例子中对所有的元素都添加了动画，并且使用`cycle`设置了一个属性组`backgroundColor`，那么设置在cycle中的`backgroundColor`属性组将会对所有的元素进行逐个设置，元素按照`"red", "white", "#00f"`进行动画渲染。如图，动画到指定位置的样子:

![示例图片](https://ae01.alicdn.com/kf/H693635f31eda45cb903e08255ce0bd389.png)

---





#### 动画事件

##### onComplete	

```js
onComplete: Function
```

在动画结束时触发此回调函数。

```js
TweenMax.to('.box', 2, {
    x: 500,
    onComplete:function(){
       console.log('动画完成')
    }
});
```

**示例**

html

```html
<div class="box green"></div>
<div id="panel"></div>
```

js

```js
panel= document.getElementById("panel");
TweenMax.to('.box', 2, {
    x: 500,
    repeat: 1,
    yoyo:true,
    onComplete:function(){
        panel.innerHTML='动画完成了';
    }
});
```

例子中在`.box`元素动画完成时，`panel`内容显示`动画完成了`

---



##### onCompleteParams

```js
onCompleteParams: Array
```

传递给`onComplete`函数的参数数组

```js
TweenMax.to(element, 1, {
    left:"100px", 
    onComplete:myFunction, 
    onCompleteParams:[element, "param2"]
}); 
```

如果想传递动画对象本身，可以使用{self}

```js
onCompleteParams:["{self}", "param2"]
```

**示例**

html

```html
<div class="box"></div>
<div id="panel"></div>
```

js

```js
panel= document.getElementById("panel");
new TweenMax('.box', 3, {
    x: 500,
    onComplete:myFunction,
    onCompleteParams:["{self}", "param2 value"],
});
function myFunction(param1,param2){
    console.log(param1);
    panel.innerHTML=param2;
}
```

例子将会在动画结束后打印出动画对象本身，`panel`的内容变为`param2 value`。

---



##### onCompleteScope

```js
onCompleteScope: Object
```

定义`onComplete`函数的作用域，即函数内this的指向。

```js
TweenMax.to(mc, 1, {
    x:100,
    onCompleteScope:object,
});
```

---



##### onReverseComplete

```js
onReverseComplete: Function
```

反向播放动画完成时执行此回调函数。

```js
TweenMax.to('.box', 3, {
    x: 500,
    onReverseComplete:function(){
        ...
    }
});
```

**示例**

html

```ht'
<div class="box green"></div>
<div id="panel"></div>
<input type="button" id="reverseBtn" value="返回动画" title="返回">
```

js

```js
var tween = new TweenMax('.box', 3, {
    x: 500,
    onReverseComplete:function(){
        panel.innerHTML='返回完毕';
    }
});
panel= document.getElementById("panel");
reverseBtn = document.getElementById("reverseBtn");
reverseBtn.onclick = function() {
    tween.reverse();
}
```

例子中按下`reverseBtn` 按钮，`.box`元素执行反向动画，当反向动画完成后，`panel`的内容变为`返回完毕`

---



##### onReverseCompleteParams

```js
onReverseCompleteParams: Array
```

传递给`onReverseComplete`函数的参数数组，例如

```js
TweenLite.to(element, 1, {
    left:"100px", 
    onReverseComplete:myFunction, 
    onReverseCompleteParams:[element, "param2"]
}); 
```

如果想传递动画对象本身，可以使用{self}

```js
onReverseCompleteParams:["{self}", "param2"]
```

**示例**

html

```html
<div class="box"></div>
<div id="panel"></div>
<input type="button" id="reverseBtn" value="返回动画" title="返回">
```

js

```js
panel= document.getElementById("panel");
var tween = new TweenMax('.box', 3, {
    x: 500,
    onReverseComplete:myFunction,
    onReverseCompleteParams:["{self}", "param2 value"],
});
function myFunction(param1,param2){
    console.log(param1);
    panel.innerHTML=param2;
}
reverseBtn = document.getElementById("reverseBtn");
reverseBtn.onclick = function() {
    tween.reverse();
}
```

例子中`.box`元素返回动画执行完毕后 ，会执行`myFunction`函数，并且传入`"{self}", "param2 value"`两个参数

----



##### onReverseCompleteScope

```js
onReverseCompleteScope: Object
```

定义`onReverseComplete`函数的作用域，即函数内`this`的指向。

```js
TweenMax.to(mc, 1, {
    x:100,
    onReverseCompleteScope:object,
});
```

---



##### onStart

```js
onStart: Function
```

当动画开始渲染时执行此事件函数，有可能会被执行多次，因为动画是可以重复开始的。

````js
TweenMax.to('.box', 2, {
    x: 500,
    onStart:function(){
        ...
    }
});
````

**示例**

html

```html
<div class="box green"></div>

<div id="panel"></div>
<br>
<input type="button" id="restartBtn" value="restart()" title="重新播放">
```

js

```js
panel= document.getElementById("panel");
i=1;
tween=TweenMax.to('.box', 2, {
    x: 500,
    delay: 2,
    onStart:function(){
        panel.innerHTML='动画开始了'+i;
        i++;
    }
});
restartBtn = document.getElementById("restartBtn"),
restartBtn.onclick = function() {tween.restart();}
```

例子中点击`restartBtn`按钮后，元素将会重新执行动画，并且将`panel`内容修改为`动画开始了1`，每次重置动画都会使数字加1。

---



##### onStartParams

```js
onStartParams: Array
```

传递给`onStart`事件函数的参数数组，例如

```js
 TweenMax.to(mc, 1, {
    x:100, 
    onStart:myFunction, 
    onStartParams:[mc, "param2"]
});
```

如果想传递动画对象本身，可以使用{self}

```js
onStartParams:["{self}", "param2"]
```



**示例**

html

```html
<div class="box"></div>
<div id="panel"></div>
```

js

```js
panel= document.getElementById("panel");
tween=TweenMax.to('.box', 2, {
    x: 500,
    delay: 2,
    onStart:myFunction,
    onStartParams:["{self}", "param2 value"],
});
function myFunction(param1,param2){
    console.log(param1);
    panel.innerHTML='动画开始了，参数2是'+param2;
}
```

例子将会在动画开始时打印出动画对象本身，`panel`的内容变为`动画开始了，参数2是“param2 value”`。

---



##### onStartScope

```js
onStartScope: Object
```

定义`onStart`函数的作用域，即函数内this的指向。

```js
TweenMax.to(mc, 1, {
    x:100,
    onStartScope:object,
});
```

---



##### onUpdate

```js
onUpdate: Function
```

当动画发生改变时(动画进行中的每一帧)不停的触发此事件。

```js
TweenMax.to('.box', 3, {
    x: 500,
    onUpdate:function(){
        console.log('动画在进行')
    }
});
```

**示例**

html

```html
<div class="box"></div>
<div>动画进行时间：<span id="time">0</span>秒</div>
```

js

```js
var timeView = document.getElementById("time");
new TweenMax('.box', 3, {
    x: 500,
    onUpdate:function(){
        timeView.innerHTML=this.time().toFixed(2);  // time()是TweenMax自带的方法，后面会说明
    }
});
```

例子中`.box`动画进行的过程中，会一直改变`timeView`的内容为动画进行的时间。

---



##### onUpdateParams

```js
onUpdateParams: Array
```

传递给`onUpdate`事件函数的参数数组，例如

```js
 TweenMax.to(mc, 1, {
    x:100, 
    onUpdate:myFunction, 
    onUpdateParams:[mc, "param2"]
});
```

如果想传递动画对象本身，可以使用{self}

```js
onUpdateParams:["{self}", "param2"]
```

---



##### onUpdateScope

```js
onUpdateScope: Object
```

定义`onUpdate`函数的作用域，即函数内`this`的指向。

```js
TweenMax.to(mc, 1, {
    x:100,
    onUpdateScope:object,
});
```

---



##### onOverwrite

```js
onOverwrite: Function
```

当一个补间动画被另外一个补间动画覆盖时发生的事件。

```js
onOverwrite:function(overwrittenTween,overwritingTween,target,overwrittenProperties){
...
}
```

**参数**

| 参数                  | 类型   | 说明                                                         |
| --------------------- | ------ | ------------------------------------------------------------ |
| overwrittenTween      | Tween  | 被覆盖的补间动画实例对象                                     |
| overwritingTween      | Tween  | 覆盖的补间动画实例对象                                       |
| target                | Object | 动画目标（只有"auto"模式才会传递此参数），与overwrittenTween.target类似 例如：TweenLite.to([obj1, obj2], 1, {x:100}) 和 TweenLite.to(obj2, 1, {x:50}), 目标应是 obj2 |
| overwrittenProperties | Array  | 一个属性数组，包含了被覆盖的动画属性（只有"auto"模式才会传递此参数）， 例如：["x","y","opacity"] |

**示例**

html

```html
<div class="wrapper">
  <div class="box green"></div>
  <div class="box orange"></div>
  <div class="box grey"></div>
</div>
```

js

```js
var myTween = TweenMax.to([".green",".orange"], 3, {
    x: 300,
    alpha: 0.2,
    onOverwrite:myFunction
})
var myTween2 = TweenMax.to([".orange",".grey"], 5, {
    x: 500,
    y: 100,
})

function myFunction(overwrittenTween,overwritingTween,target,overwrittenProperties){
    console.log(overwrittenTween);
    console.log(overwritingTween);
    console.log(target);
    console.log(overwrittenProperties);
}
```

---



##### onRepeat

```js
onRepeat: Function
```

在每次动画重复时(`repeat`)执行此事件函数。

```js
TweenMax.to('.box', 2, {
    x: 500,
    repeat:1,
    onRepeat:function(){
        ...
    }
});
```

**示例**

html

```html
<div class="box"></div>
<div>重复次数<span id="num">0</span></div>
```

js

```js
var num = document.getElementById("num");
count = 1;

var tween = new TweenMax('.box', 3, {
    x: 500,
    repeat: -1,
    yoyo: true,
    onRepeat: function(){
        num.innerHTML=count;
        count++; 
    },
});
```

例子中元素每重复一次，`num`内容就会改变， 并且`count`就会加1。

---



##### onRepeatParams

```js
onRepeatParams: Array
```

传递给`onRepeat`事件函数的参数数组，例如

```js
 TweenMax.to(mc, 1, {
    x:100, 
    onRepeat:myFunction, 
    onRepeatParams:[mc, "param2"]
});
```

如果想传递动画对象本身，可以使用`{self}`

```js
onRepeatParams:["{self}", "param2"]
```

**示例**

html

```html
<div class="box green"></div>
<div>重复次数<span id="num">0</span></div>
```

js

```js
var num = document.getElementById("num");
count = 1;

new TweenMax('.box', 3, {
    x: 500,
    repeat: -1,
    yoyo: true,
    onRepeatParams:["{self}", "param2"],
    onRepeat:myFunction,
});
function myFunction(param1,param2){
        num.innerHTML=count;
        console.log(param1);
        count++; 
    }
```

---



##### onRepeatScope

```js
onRepeatScope: Object
```

定义`onRepeat`函数的作用域，即函数内`this`的指向。

```js
TweenMax.to(mc, 1, {
    x:100,
    onRepeatScope:object,
});
```

---



##### .eventCallback()

```js
.eventCallback( type:String, callback:Function, params:Array, scope:* )
```

获取或者设置事件，例如"onComplete", "onUpdate", "onStart", "onReverseComplete" , "onRepeat" ，以及应传递给该回调的任何参数。有点类似于原生js的addEventListener。

以下两个事件设置方式等效

```js
var myAnimation = new TweenMax(mc, 1, {
    x:100, 
    onComplete:myFunction, 
    onCompleteParams:["param1","param2"]
});
myAnimation.eventCallback("onComplete", myFunction, ["param1","param2"]);
```

每个动画实例的每个回调类型只能有一个(一个onComplete, 一个onUpdate, 一个onStart, 等等)，新建则会覆盖掉之前的。
可以通过设置null来删除掉回调函数

```js
myAnimation.eventCallback("onUpdate", null);
```

返回值：省略除第一个参数之外的所有参数则返回当前值（getter），而定义多于第一个参数则设置回调（setter）并返回实例本身以便于链式执行。 以下是链式执行的例子：

```js
myAnimation.eventCallback("onComplete", completeHandler).eventCallback("onUpdate", updateHandler, ["param1","{self}"]).play(1);   //play()方法后面会详解
```

**参数**

| 参数名   | 类型     | 必填 | 说明                                                         |
| -------- | -------- | ---- | ------------------------------------------------------------ |
| type     | String   | 是   | 事件回调的类型，如 "onComplete", "onUpdate", "onStart" 或 "onRepeat"。这是区分大小写的。 |
| callback | Function | 否   | 事件发生时应调用的函数，default = null                       |
| params   | Array    | 否   | 传递回调的参数数组。用 "{self}" 指动画实例本身。例： ["param1","{self}"]，default = null |
| scope    |          | 否   | 回调调用的范围（基本上代表函数中"this"指的是什么），default = null |

---

