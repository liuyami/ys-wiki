# 微信公众号交互 SVG 注意事项


1.	不支持 `<polygon>` 标签，所有svg内的图形需要转换成复合路径(path)
2.	不支持 `<style>` 标签，同上，处理成复合路径后不会出现
3.	Svg 内的 `<polygon>` 需要转换 成 `<path>`，可由技术操作，演示地址：https://codepen.io/michaelschofield/pen/gKpef
```javascript
// 参考： https://stackoverflow.com/questions/10717190/convert-svg-polygon-to-path

var polys = document.querySelectorAll('polygon,polyline');
[].forEach.call(polys,convertPolyToPath);

function convertPolyToPath(poly){
  var svgNS = poly.ownerSVGElement.namespaceURI;
  var path = document.createElementNS(svgNS,'path');
  var pathdata = 'M '+poly.getAttribute('points');
  if (poly.tagName=='polygon') pathdata+='z';
  path.setAttribute('d',pathdata);
  poly.parentNode.replaceChild(path,poly);
}
```
4.	Svg 内必须含有至少一个`<text>`标签！例如 `<text>1</text>`
5.	支持动画`<animate>`标签，例如：
`<animate attributename="opacity" begin="click" dur=".8s" values="1;0" fill="freeze"></animate>`
6.	所有svg文件按照以上要求处理后，放入135编辑器内处理，再复制到微信公众号图文内即可
