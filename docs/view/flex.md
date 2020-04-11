## Flex布局
网页布局（layout）是CSS的一个重点应用。布局的传统解决方案，基于盒状模型，依赖 display属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。2009年，W3C提出了一种新的方案—-Flex布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。Flex布局将成为未来布局的首选方案。本文介绍Flex布局的语法。

### Flex布局简介
Flex英文为 flexiable box，翻译为弹性盒子，Flex布局即弹性布局。

Flex布局为盒子模型提供了很大的灵活性，任何一个容器都可以指定为Flex布局，设置方法为：

```css
.box{
  display: flex;
}
```

行内元素也可以使用Flex布局。

```css
.box{
  display: inline-flex;
}
```

Webkit内核的浏览器，必须加上-webkit前缀。
```css
.box{
    display: -webkit-flex; /* Safari */
  	display: flex;
}
```

注意，设为Flex布局以后，子元素的float、clear和vertical-align属性将失效，（而且可以嵌套使用。）

##  基本概念
采用Flex布局的元素，称为Flex容器（flex container），简称”容器”。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称”项目”。
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_1.png)

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

## 容器的属性
```css
flex-direction;
flex-wrap;
flex-flow;
justify-content;
align-items;
align-content;
```

### flex-direction属性
flex-direction属性决定主轴的方向（即项目的排列方向）。它可能有四个值：
```css
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```
flex-direction : row（默认值），主轴为水平方向，起点在左端。效果：
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_2.png)

flex-direction : row-reverse，主轴为水平方向，起点在右端。效果：
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_3.png)

flex-direction : column，主轴为垂直方向，起点在上沿。效果：
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_4.png)

flex-direction : column-reverse，主轴为垂直方向，起点在下沿。效果：
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_5.png)

完整代码 :
```html
HTML 部 分：
<div class="box">    
    <span>love1</span>    
    <span>love2</span>    
    <span>love3</span>    
    <span>love4</span></div>
CSS 部分：
<style>    
    .box{        
        display: flex;        
        display: -webkit-flex;        
        /*水平方向，左端对齐*/        
        flex-direction: row;        
        /*水平方向，右端对齐*/        
        /* flex-direction: row-reverse; */        
        /*垂直方向，顶部对齐*/        
        /* flex-direction: column; */        
        /*垂直方向，底部对齐*/        
        /* flex-direction: column-reverse; */        
        background: #999;        
        width: 100%;    
    }        
    .box span{            
        margin: 10px 10px;            
        padding: 10px;            
        background: #ff0;            
        width: 50px;        
    }    
</style>
```

### flex-wrap属性
默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。它可能取三个值。

```css
	.box{
      flex-wrap: nowrap | wrap | wrap-reverse;
    }
```

（1）当设置为 flex-wrap : nowrap（默认），效果（不换行，默认会缩放）：
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_6.png)

（2）flex-wrap : wrap，换行，第一行在上方。
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_7.png)

（3）flex-wrap : wrap-reverse，换行，第一行在下方。
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_8.png)

完整代码 :
```html
<style>        
    .box{            
        display: flex;            
        display: -webkit-flex;            
        /*不换行，默认*/            
        /* flex-wrap: nowrap; */            
        /*换行*/            
        /* flex-wrap: wrap; */            
        /*换行，第一行在下方*/            
        /* flex-wrap: wrap-reverse; */            
        background: #999;            
        width: 100%;        
    }        
    .box span{           
        margin: 10px 10px;            
        padding: 10px;            
        background: #ff0;            
        width: 50px;        
    }    
</style>

HTML 代码：    
<div class="box">        
    <span>love1</span>        
    <span>love2</span>        
    <span>love3</span>        
    <span>love4</span>        
    <span>love5</span>        
    <span>love6</span>        
    <span>love7</span>        
    <span>love8</span>   
</div> 
```

### flex-flow 属性
flex-flow 属性是 flex-direction 属性和 flex-wrap 属性的简写形式，默认值为 row nowrap。

```css
.box {
  flex-flow: <flex-direction> <flex-wrap>;
}
```

###  justify-content属性
justify-content属性定义了项目在主轴上的对齐方式。

```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。

justify-content : flex-start（默认值），左对齐
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_9.png)

justify-content : flex-end，右对齐
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_10.png)

justify-content : center，居中
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_11.png)

justify-content : space-between，两端对齐，项目之间的间隔都相等。
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_12.png)

justify-content : space-around，每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_13.png)

完整代码 :
```html
CSS代码：
<style>        
    .box{            
        display: flex;            
        display: -webkit-flex;            
        /*默认，项目左对齐*/            
        /* justify-content: flex-start; */            
        /*项目右对齐*/            
        /* justify-content: flex-end; */            
        /*项目居中对齐*/            
        /* justify-content: center; */            
        /*项目两端对齐*/            
        /* justify-content: space-between; */            
        /*每个项目两侧的间隔相等*/            
        justify-content: space-around;            
        background: #999;            
        width: 100%;        }        
    .box span{            
        margin: 10px 10px;            
        padding: 10px;            
        background: #ff0;            
        width: 50px;        
    }    
</style>
HTML代码：
<div class="box">        
    <span>love1</span>        
    <span>love2</span>        
    <span>love3</span>        
    <span>love4</span>        
    <span>love5</span>        
    <span>love6</span>        
    <span>love7</span>        
    <span>love8</span>    
</div>
```

### align-items属性
align-items属性定义项目在交叉轴上如何对齐。
```css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

它可能取5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。

align-items : flex-start，交叉轴的起点对齐。
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_14.png)

align-items : flex-end，交叉轴的终点对齐。
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_15.png)

align-items : center，交叉轴的中点对齐。
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_16.png)

align-items : baseline，项目的第一行文字的基线对齐。
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_17.png)

align-items : stretch（默认值），如果项目未设置高度或设为auto，将占满整个容器的高度。
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_18.png)

完整代码
```html
<style type="text/css">
.box{
    display: flex;
    display: -webkit-flex;
    /*纵轴的顶部对齐*/
    /*align-items: flex-start;*/
    /*纵轴的底部对齐*/
    /*align-items: flex-end;*/
    /*纵轴的中点对齐*/
    /*align-items: center;*/
    /*项目的第一行文字的基线对齐*/
    /*align-items: baseline;*/
    /*默认对齐方式，如果项目未设置高度或设为auto，将占满整个容器的高度*/
    align-items: stretch;
    background: #999;
    width: 100%;
}
.box span{
    margin: 10px 10px;
    padding: 10px;
    background: #ff0;
    width: 50px;
}
.box span:nth-of-type(2n){
    height: 80px;
    padding-top: 20px;
}
</style>
<div class="box">
    <span>love1</span>
    <span>love2</span>
    <span>love3</span>
    <span>love4</span>
    <span>love5</span>
    <span>love6</span>
    <span>love7</span>
    <span>love8</span>
</div>
```

### align-content属性
align-content 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用 (即需要设置容器的 flex-wrap 属性值为 wrap )(为了让效更加明显，我设置了容器的高度)

```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

该属性可能取6个值。

align-content : flex-start，与交叉轴的起点对齐。
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_19.png)

align-content : flex-end，与交叉轴的终点对齐。
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_20.png)

align-content : center，与交叉轴的中点对齐。
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_21.png)

align-content : space-between，与交叉轴两端对齐，轴线之间的间隔平均分布。
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_22.png)

align-content : space-around，每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_23.png)

align-content : stretch（默认值），轴线占满整个交叉轴。
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_24.png)

完整代码

```html
CSS 代码：
<style>        
    .box{            
        display: flex;            
        display: -webkit-flex;
        //如果项目只有一根轴线，该属性不起作用 (即需要设置容器的 flex-wrap 属性值为 wrap )
        flex-wrap: wrap;
        /*与纵轴的顶部对齐*/            
        /*align-content: flex-start;*/ 
           
        /*与纵轴的底部对齐*/           
        /*align-content: flex-end;*/   
         
        /*与纵轴的中点对齐*/            
        /*align-content: center;*/   
         
        /*与纵轴两端对齐*/            
        /*align-content: space-between;*/ 
           
        /*每根轴线两侧的间隔都相等*/            
        align-content: space-around;     
       
        /*默认值，轴线占满整个交叉轴默认值，*/            
        /* align-content: stretch; */   
         
        background: #999;            
        width: 600px;            
        height: 300px;        
    }        
    .box span{            
        margin: 10px 10px;            
        padding: 10px;            
        background: #ff0;            
        width: 50px;        
    }    
</style>

HTML 代码：
<div class="box">       
    <span>love1</span>        
    <span>love2</span>        
    <span>love3</span>        
    <span>love4</span>        
    <span>love5</span>        
    <span>love6</span>        
    <span>love7</span>        
    <span>love8</span>    
</div>
```


## 项目的属性
以下6个属性设置在项目上。

- order
- flex-grow
- flex-shrink
- flex-basis
- flex
- align-self

### order属性
order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

```css
.item {
  order: <integer>;
}
```

如下为第1个设置order属性为10，第2个设置order属性为-1，第5个设置order属性为-10，效果如下
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_25.png)

代码：
```html
CSS:
<style>        
    .box{            
        display: flex;           
        display: -webkit-flex;            
        background: #999;        
    }        
    .box span{            
        margin: 10px 10px;            
        padding: 10px;            
        background: #ff0;        
    }        
    .box span:nth-of-type(1){            
        order: 10;        
    }        
    .box span:nth-of-type(2){            
        order: -1;        
    }        
    .box span:nth-of-type(5){            
        order: -10;        
    }   
</style>

HTML 代码：
<div class="box">        
    <span>love1</span>        
    <span>love2</span>        
    <span>love3</span>        
    <span>love4</span>        
    <span>love5</span>    
</div>
```

### flex-grow属性
flex-grow属性定义项目的放大比例，主要在父元素的宽度大于子元素的宽度之和时候起作用，它定义子元素如何分配父元素的剩余宽度，默认为0，这个时候不索取父元素的宽度。

```css
.item {
  flex-grow: <number>; /* default 0 */
}
```
如下，给第1个子元素设置 flex-grow 属性值为1，第2个子元素设置 flex-grow 属性值为2，则父元素的剩余宽度会被分成三等分，分别添加给第1个第2个子元素，效果如下：

![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_26.png)

```html
CSS 代码：
<style>        
    .box{            
        display: flex;           
        display: -webkit-flex;            
        background: #999;        
    }        
    .box span{            
        margin: 10px 10px;            
        padding: 10px;            
        background: #ff0;            
        width: 50px;        
    }        
    .box span:nth-of-type(1){            
        flex-grow: 1;        
    }        
    .box span:nth-of-type(2){            
        flex-grow: 2;        
    }    
</style>

HTML 代码：
<div class="box">        
    <span>love1</span>        
    <span>love2</span>        
    <span>love3</span>        
    <span>love4</span>        
    <span>love5</span>    
</div>
```

例如：以上面的为例子，假设父元素的宽度为 1000px ,每个子元素的宽度为100px,则还剩余500px 的宽度，第1个子元素 flex-grow 值为 1，第2个子元素 flex-grow 值为 2，则会把500px分成三等分，第1个子元素增加500乘以1/3px的宽度，第2个子元素增加500乘以2/3px的宽度 

### flex-shrink属性
flex-shrink 属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```

如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。

负值对该属性无效。

### flex-basis 属性
flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```

它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。

### flex属性

flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

### align-self属性

align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

该属性可能取6个值，除了auto，其他都与align-items属性完全一致。
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_27.png)

```html
CSS 代码：
<style>        
    .box{            
        display: flex;            
        display: -webkit-flex;            
        background: #999;            
        height: 300px;            
        align-items: flex-start;        
    }        
    .box span{            
        margin: 10px 10px;           
        padding: 10px;            
        background: #ff0;        
    }        
    .box span:nth-of-type(3){            
        align-self: flex-end;        
    }    
</style>

HTML 代码：
<div class="box">        
    <span>love1</span>        
    <span>love2</span>        
    <span>love3</span>        
    <span>love4</span>        
    <span>love5</span>    
</div>
```

## 比较常用熟悉
![avatar](http://h5.yscase.com/xiaoming/ys-wiki-imgs/p1_28.jpg)
