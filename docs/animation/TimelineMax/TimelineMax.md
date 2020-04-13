# 介绍

[官方文档](https://www.tweenmax.com.cn/api/timelinemax/TimelineMax()) :arrow_left:点它 ​

**TimelineMax**是GreenSock 动画平台中的动画组织、排序、管理工具，可创建时间轴（timeline）作为动画或其他时间轴的容器，这使得整个动画控制和精确管理时间变得简单。

试想一下，如果不使用TimelineLite/TimelineMax创建时间轴，那么构建复杂的动画序列将会非常麻烦，因为你需要用delay为每个动画设置开始时间。以下是没有使用时间轴的动画序列的基本示例：

```js
TweenLite.to(element, 1, {left:100});
TweenLite.to(element, 1, {top:50, delay:1});//延迟1秒，接续前一个动画
TweenLite.to(element, 1, {opacity:0, delay:2});//延迟2秒，接续前一个动画
```

上面的代码将元素的"left" 属性设置为100，然后将“top”设置为50，最后将“透明度”设置为0（注意 delay除第一个以外的所有其他动画都用上了）。但想象一下，如果你想将第一个动画的持续时间增加到1.5，那么你需要调整其后的每一个延迟。
如果你想要pause()整个动画序列或者restart()它，或者reverse() 它在运行中或跳到整个动画中的特定点，这变得相当混乱（或不可能），但TimelineMax使其非常简单：

```js
var tl = new TimelineLite();
tl.add( TweenLite.to(element, 1, {left:100}) );//将一个动画添加到时间轴
tl.add( TweenLite.to(element, 1, {top:50}) );//将一个动画添加到时间轴末端，即与前一个动画接续
tl.add( TweenLite.to(element, 1, {opacity:0}) ); //将一个动画添加到时间轴末端，即与前一个动画接续
```

或者使用简单的to()方法和链式调用使其更加简洁：

```js
var tl = new TimelineLite();
tl.to(element, 1, {left:100}).to(element, 1, {top:50}).to(element, 1, {opacity:0});
```

现在，你可以随意调整任何动画，而不必担心延迟时间会发生混乱。增加第一个动画的持续时间，一切都会自动调整。

例子中使用的CSS属性动画（opacity、left、top等）需要`CSSPlugin`插件支持，`CSSPlugin插件`及`TweenLite和TimelineLite`等都包含在`TweenMax.min.js`中。如果你使用`TimelineLite.min.js/TimelineMax.min.js`，则需另外加载`CSSPlugin.min.js`和`TweenLite.min.js`。

---



# TimelineMax API

