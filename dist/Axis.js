!function(t,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof define&&define.amd?define([],i):"object"==typeof exports?exports.Axis=i():t.Axis=i()}(window,(function(){return function(t){var i={};function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var r in t)e.d(n,r,function(i){return t[i]}.bind(null,r));return n},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=2)}([function(t,i,e){"use strict";e.d(i,"e",(function(){return n})),e.d(i,"b",(function(){return a})),e.d(i,"f",(function(){return h})),e.d(i,"i",(function(){return c})),e.d(i,"h",(function(){return l})),e.d(i,"g",(function(){return u})),e.d(i,"d",(function(){return f})),e.d(i,"c",(function(){return d})),e.d(i,"a",(function(){return x}));var n="undefined"!=typeof window,r=(!0===n?window.navigator.userAgent:"").toLowerCase(),a=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=t.length,n=[];for(e>=4&&(n=t.slice(0,4)),3===e&&(n=t.concat(t[1]));n.length<4;)n=n.concat(t);return n.map((function(t){return t*i}))},s=r.indexOf("android")>-1,o=/iphone|ipad|ipod|ios/.test(r),h=s||o,c=function(t,i,e){t&&i&&e&&t.addEventListener(i,e,!1)},l=function(t,i,e){t&&i&&t.removeEventListener(i,e,!1)},u=function(){return performance?performance.now():Date.now()},f=function(t){for(var i=t,e=0,n=0;null!==i;)e+=i.offsetTop,n+=i.offsetLeft,i=i.offsetParent;return{top:e,left:n}},d=function(t){if(t.length<=0)return[];var i=t.length;return t.map((function(e,n){var r=n===i-1?e:t[n+1],a=e.x,s=e.y,o=r.x,h=r.y,c=Math.abs(o-a)*(1/3);return{start:e,end:r,control1:{x:a+c,y:s},control2:{x:o-c,y:h}}}))},x=function(t,i,e,n,r){r>1&&(r=1);var a=1-r;return t*Math.pow(a,3)+3*i*r*Math.pow(a,2)+3*e*Math.pow(r,2)*a+n*Math.pow(r,3)}},function(t,i,e){"use strict";e.r(i),e.d(i,"default",(function(){return a}));var n=e(0);function r(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=function(){function t(i,e){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=void 0,this.elWidth=0,this.elHeight=0,this.options={},this.canvas=null,this.ctx=null,this.canvasWidth=0,this.canvasHeight=0,this.canvasPadding=[0],this.chartWidth=0,this.chartHeight=0,this.chartStartX=0,this.chartStartY=0,this.chartEndX=0,this.chartEndY=0,this.chartPadding=[0],this.titleBarHeight=0,this.mousePosition={x:0,y:0},this.dpi=1,this.el=i,this.mergeOptions(e),this.createCanvas(),this.addMoveHandler()}var i,e,a;return i=t,(e=[{key:"createCanvas",value:function(){if(!1!==n.e){if(this.elWidth=this.el.offsetWidth,this.elHeight=this.el.offsetHeight,this.canvas=document.createElement("canvas"),this.canvas.innerHTML="您的浏览器不支持Canvas",this.ctx=this.canvas.getContext("2d"),!this.ctx)throw new Error("TWChart: get canvas 2D context fail");var t=this.ctx,i=t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1,e=(window.devicePixelRatio||1)/i;e<1&&(e=1),this.dpi=e/i,this.el.innerHTML="",this.el.appendChild(this.canvas)}}},{key:"handleMove",value:function(t){if(this.canvas){if(n.f){var i=Object(n.d)(this.canvas),e=i.top,r=i.left,a=t.targetTouches[0],s=a.pageX,o=a.pageY;this.mousePosition={x:(s-r)*this.dpi,y:(o-e)*this.dpi}}else{var h=t||window.event;h.offsetX||0===h.offsetX?this.mousePosition={x:h.offsetX*this.dpi,y:h.offsetY*this.dpi}:(h.layerX||0===h.layerX)&&(this.mousePosition={x:h.layerX*this.dpi,y:h.layerY*this.dpi})}this.onMove()}}},{key:"addMoveHandler",value:function(){if(this.canvas){var t=n.f?"touchmove":"mousemove";this.removeMoveHandler(),Object(n.i)(this.canvas,t,this.handleMove.bind(this))}}},{key:"removeMoveHandler",value:function(){var t=n.f?"touchmove":"mousemove";Object(n.h)(this.canvas,t,this.handleMove.bind(this))}},{key:"mergeOptions",value:function(t){var i={canvasPadding:[0],canvasBg:"#fff",title:"",titleStyle:void 0,titleBarHeight:30,chartPadding:[0],chartBg:"#fff",chartCursor:"pointer"};this.options=Object.assign({},i,this.options,t);var e=Object(n.b)(this.options.canvasPadding||[0]),r={size:18,font:"PingFangSC-Semibold PingFang SC",weight:"bold",x:e[3],y:e[0],color:"#333"},a=Object.assign({},r,this.options.titleStyle,null==t?void 0:t.titleStyle);this.options.titleStyle=a}},{key:"formatNumParam",value:function(t){return(t||0)*this.dpi}},{key:"drawText",value:function(t,i){if(this.ctx){var e=i.size,n=i.font,r=i.weight,a=i.color,s=i.x,o=i.y,h=i.maxWidth;e=e||16,n=n||"PingFangSC-Semibold PingFang SC",a=a||"#333",s=s||0,o=o||0,this.ctx.save(),this.ctx.font="".concat(r," ").concat(e,"px ").concat(n),this.ctx.fillStyle=a,this.ctx.fillText(t,s,o,h),this.ctx.restore()}}},{key:"drawLine",value:function(t,i,e,n,r,a){this.ctx&&(this.ctx.save(),this.ctx.fillStyle=a,this.ctx.strokeStyle=a,this.ctx.lineWidth=r,this.ctx.beginPath(),this.ctx.moveTo(t,i),this.ctx.lineTo(e,n),this.ctx.stroke(),this.ctx.closePath(),this.ctx.restore())}},{key:"fixPixel",value:function(t){return(t=parseInt(t+""))%2!=0?t+1:t}},{key:"drawRect",value:function(t,i,e,n,r){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"default";this.ctx&&this.canvas&&(this.ctx.save(),this.ctx.beginPath(),t=this.fixPixel(t),i=this.fixPixel(i),e=this.fixPixel(e),n=this.fixPixel(n),this.ctx.rect(t,i,e,n),this.ctx.isPointInPath(this.mousePosition.x,this.mousePosition.y)&&(this.canvas.style.cursor=a),this.ctx.fillStyle=r,this.ctx.fill(),this.ctx.closePath(),this.ctx.restore())}},{key:"drawTitle",value:function(){var t=this,i=this.options,e=i.title,n=i.titleStyle,r=Object.assign({},n);["x","y","size","maxWidth"].map((function(i){if("number"==typeof r[i]){var e=r[i];r[i]=e*t.dpi}})),this.ctx&&e&&(this.ctx.save(),this.ctx.textBaseline="top",this.ctx.textAlign="start",this.drawText(e,r),this.ctx.restore())}},{key:"drawCanvasBg",value:function(){if(this.ctx){var t=this.options.canvasBg;t=t||"#fff",this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.drawRect(0,0,this.canvasWidth,this.canvasHeight,t)}}},{key:"drawChartBg",value:function(){if(this.ctx){var t=this.options.chartBg;t=t||"#fff",this.ctx.clearRect(this.chartStartX,this.chartStartY,this.chartWidth,this.chartHeight),this.drawRect(this.chartStartX,this.chartStartY,this.chartWidth,this.chartHeight,t,this.options.chartCursor)}}}])&&r(i.prototype,e),a&&r(i,a),t}()},function(t,i,e){"use strict";e.r(i),e.d(i,"default",(function(){return x}));var n=e(1),r=e(0);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,i){return function(t){if(Array.isArray(t))return t}(t)||function(t,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],n=!0,r=!1,a=void 0;try{for(var s,o=t[Symbol.iterator]();!(n=(s=o.next()).done)&&(e.push(s.value),!i||e.length!==i);n=!0);}catch(t){r=!0,a=t}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}return e}(t,i)||function(t,i){if(!t)return;if("string"==typeof t)return o(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,i)}(t,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,n=new Array(i);e<i;e++)n[e]=t[e];return n}function h(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,i,e){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,i,e){var n=function(t,i){for(;!Object.prototype.hasOwnProperty.call(t,i)&&null!==(t=d(t)););return t}(t,i);if(n){var r=Object.getOwnPropertyDescriptor(n,i);return r.get?r.get.call(e):r.value}})(t,i,e||t)}function l(t,i){return(l=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,i)}function u(t){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=d(t);if(i){var r=d(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return f(this,e)}}function f(t,i){return!i||"object"!==a(i)&&"function"!=typeof i?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):i}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var x=function(t){!function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&l(t,i)}(o,t);var i,e,n,a=u(o);function o(t,i){var e;return function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,o),(e=a.call(this,t,i)).xAxisData=[],e.xAxisHeight=0,e.yAxisData=[],e.yAxisWidth=0,e.minValue=0,e.maxValue=0,e}return i=o,(e=[{key:"initData",value:function(){var t=this,i=this.options,e=i.xAxisData,n=i.yAxisData,r=i.drawDataLength;e=e||[],n=n||[],r=r||7;var a=0,s=999999;this.xAxisData=e.slice(-r),n.map((function(i,e){t.yAxisData[e]=i.slice(-(r||7)),t.yAxisData[e].map((function(t){t>a&&(a=t),t<s&&(s=t)}))})),s===a&&(a=s+10),this.maxValue=a,this.minValue=s,this.afterInitData()}},{key:"drawAxis",value:function(){var t=this;if(this.ctx){var i=this.canvasPadding[3],e={startX:i+this.yAxisWidth,startY:this.chartEndY,endX:this.chartEndX,endY:this.chartEndY},n={startX:i+this.yAxisWidth,startY:this.chartStartY,endX:i+this.yAxisWidth,endY:this.chartEndY};this.ctx.clearRect(i+this.yAxisWidth,e.startY,this.chartWidth,this.xAxisHeight),this.drawRect(i+this.yAxisWidth,e.startY,this.chartWidth,this.xAxisHeight,this.options.canvasBg||"#fff"),this.ctx.clearRect(i,n.startY,this.yAxisWidth,this.chartHeight),this.drawRect(i,n.startY,this.yAxisWidth,this.chartHeight,this.options.canvasBg||"#fff");var r=this.options,a=r.axisStyle,s=r.xAxisLength,o=r.xAxisFormat,h=r.yAxisLength,c=r.yAxisFormat;s=s||10,h=h||10,h--;var l=Object.assign({},a);if(["lineWidth","size"].map((function(i){if("number"==typeof l[i]){var e=l[i];l[i]=e*t.dpi}})),this.drawLine(e.startX,e.startY,e.endX,e.endY,l.lineWidth||1,l.lineColor||"#666"),this.drawLine(n.startX,n.startY,n.endX,n.endY,l.lineWidth||1,l.lineColor||"#666"),this.ctx.save(),this.ctx.textBaseline="top",this.ctx.textAlign="center",this.xAxisHeight>=0){var u=this.xAxisData.length,f=u/s;f=f<2?1:Math.ceil(f);for(var d=0;d<u;d++)if(!(u>s&&d%f!=0)){var x=this.xAxisData[d];x="function"==typeof o?o(x):x;var v=this.getPosX(d),y=this.chartEndY+10*this.dpi;this.drawText(x,{x:v,y:y,color:l.color,size:l.size,font:l.font,weight:"normal"})}}if(this.ctx.textBaseline="middle",this.ctx.textAlign="left",this.yAxisWidth>=0)for(var p=(this.maxValue-this.minValue)/h,g=0;g<=h;g++){var m=p*g+this.minValue,b="function"==typeof c?c(m):m+"",P=this.chartStartX-this.yAxisWidth,w=this.getPosY(m);this.drawText(b,{x:P,y:w,color:l.color,size:l.size,font:l.font,weight:"normal",maxWidth:this.yAxisWidth}),g>0&&this.drawLine(e.startX,w,e.endX,w,l.lineWidth||1,l.lineColor||"#666")}this.ctx.restore()}}},{key:"initSize",value:function(){if(this.canvas&&r.e){this.canvas.width=this.canvasWidth=this.elWidth*this.dpi,this.canvas.height=this.canvasHeight=this.elHeight*this.dpi,this.canvas.style.width=this.elWidth+"px",this.canvas.style.height=this.elHeight+"px";var t=this.options,i=t.title,e=t.titleBarHeight,n=t.canvasPadding,a=t.chartPadding,o=t.yAxisWidth,h=t.xAxisHeight;n=n||[0],a=a||[0],e=this.formatNumParam(e),o=this.formatNumParam(o),h=this.formatNumParam(h),this.xAxisHeight=h,this.yAxisWidth=o,this.titleBarHeight=i?e:0,this.canvasPadding=Object(r.b)(n,this.dpi);var c=s(this.canvasPadding,4),l=c[0],u=c[1],f=c[2],d=c[3];this.chartPadding=Object(r.b)(a,this.dpi),this.chartWidth=this.canvasWidth-d-u-o,this.chartHeight=this.canvasHeight-this.titleBarHeight-l-f-h,this.chartStartX=d+o,this.chartStartY=l+e,this.chartEndX=this.chartStartX+this.chartWidth,this.chartEndY=this.chartStartY+this.chartHeight}}},{key:"mergeOptions",value:function(t){var i={drawDataLength:7,xAxisHeight:30,xAxisData:[],xAxisLength:10,xAxisFormat:void 0,yAxisWidth:30,yAxisData:[],yAxisLength:10,yAxisFormat:void 0,axisStyle:void 0};this.options=Object.assign({},i,this.options,t);var e=Object.assign({},{lineColor:"#666",lineWidth:1,font:"PingFangSC-Semibold PingFang SC",size:10,color:"#666"},this.options.axisStyle,null==t?void 0:t.axisStyle);this.options.axisStyle=e,c(d(o.prototype),"mergeOptions",this).call(this,t)}},{key:"getPosY",value:function(t){var i=this.chartEndY-this.chartPadding[2],e=this.chartHeight-this.chartPadding[0]-this.chartPadding[2],n=this.maxValue-this.minValue;return i-e*((t-this.minValue)/n)}},{key:"getPosX",value:function(t){return this.chartStartX+this.chartPadding[3]+(this.chartWidth-this.chartPadding[1]-this.chartPadding[3])*(t/(this.xAxisData.length-1))}}])&&h(i.prototype,e),n&&h(i,n),o}(n.default)}]).default}));