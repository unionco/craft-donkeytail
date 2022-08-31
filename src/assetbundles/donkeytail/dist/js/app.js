(function(e){function t(t){for(var i,o,r=t[0],d=t[1],c=t[2],u=0,l=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(e[i]=d[i]);p&&p(t);while(l.length)l.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,r=1;r<n.length;r++){var d=n[r];0!==a[d]&&(i=!1)}i&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},a={app:0},s=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var p=d;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("32b5")},"32b5":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("a026"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"canvas",staticClass:"rounded leading-0 overflow-hidden relative",attrs:{id:e.namespacedId+"-canvas"}},[n("img",{ref:"image",staticClass:"w-full",attrs:{src:e.canvasUrl}}),e.showPins?n("div",e._l(e.pins,function(t){return n("donkeytail-pin",{key:"pin-"+t.id,attrs:{pin:t,"canvas-id":e.namespacedId+"-canvas"},on:{positioned:function(t){return e.setPinPosition(t)}}})}),1):e._e(),e._l(e.pins,function(t){return n("div",{key:"pinput-"+t.id},[n("input",{attrs:{type:"hidden",name:e.name+"[meta]["+t.id+"]"}}),n("input",{attrs:{type:"hidden",name:e.name+"[meta]["+t.id+"][id]"},domProps:{value:t.id}}),n("input",{attrs:{type:"hidden",name:e.name+"[meta]["+t.id+"][label]"},domProps:{value:t.label}}),n("input",{attrs:{type:"hidden",name:e.name+"[meta]["+t.id+"][x]"},domProps:{value:t.x}}),n("input",{attrs:{type:"hidden",name:e.name+"[meta]["+t.id+"][y]"},domProps:{value:t.y}}),n("input",{attrs:{type:"hidden",name:e.name+"[meta]["+t.id+"][showTippy]"},domProps:{value:t.showTippy}})])})],2)},s=[],o=(n("4de4"),n("c740"),n("4160"),n("a630"),n("caad"),n("a434"),n("a9e3"),n("b64b"),n("2532"),n("3ca3"),n("159b"),n("b85c")),r={props:{namespacedId:{type:String,required:!0},name:{type:String,required:!0},value:{type:Number},image:{type:String},meta:{type:[Object,Array]}},data:function(){return{canvasUrl:!1,showPins:!1,pins:[]}},methods:{getCanvasUrl:function(e){var t=this;window.axios({method:"post",url:window.Craft.getActionUrl("donkeytail/default/get-asset"),data:{assetId:e,requestId:1},headers:{"X-CSRF-Token":window.csrfToken}}).then(function(e){t.canvasUrl=e.data,t.$refs.image.onload=function(){$("#".concat(t.namespacedId,"-pane")).velocity({height:$("#".concat(t.namespacedId,"-pane")).get(0).scrollHeight,padding:"24px",opacity:1},400,"easeInOut",function(){$(this).css("height","auto"),t.showPins=!0})}}).catch(function(e){console.log(e)})},setPinPosition:function(e){var t=this.pins.findIndex(function(t){return t.id===e.id});Object.assign(this.pins[t],e)}},mounted:function(){var e=this;if(e.value&&(e.image?(e.canvasUrl=e.image,e.showPins=!0):e.getCanvasUrl(e.value),e.meta&&Object.keys(e.meta).length)){for(var t=[],n=0,i=Object.keys(e.meta);n<i.length;n++){var a=i[n];e.meta[a].id=Number(e.meta[a].id),e.meta[a].x=Number(e.meta[a].x),e.meta[a].y=Number(e.meta[a].y),e.meta[a].showTippy=!1,t.push(e.meta[a])}e.pins=t}$(document).ready(function(){$("#".concat(e.namespacedId,"-canvasId")).data("elementSelect").on("selectElements",function(t){e.getCanvasUrl(t.elements[0].id)}),$("#".concat(e.namespacedId,"-canvasId")).data("elementSelect").on("removeElements",function(t){e.canvasUrl=!1,$("#".concat(e.namespacedId,"-pane")).velocity({height:0,padding:0,opacity:0},{duration:400,easing:"easeInOut"})}),$("#".concat(e.namespacedId,"-pins")).data("elementSelect").on("selectElements",function(t){var n=t.elements.filter(function(t){return!e.pins.includes(t)});n.forEach(function(t){e.pins.push({id:t.id,label:t.label,x:50,y:50,showTippy:!1})})});var t=Array.from($("#".concat(e.namespacedId,"-pins .element"))),n={attributes:!0},i=function(t,n){t.forEach(function(t){if("attributes"===t.type&&"class"===t.attributeName){var n=t.target;if(n.classList.contains("sel")){var i=n.dataset.id,a=e.pins.findIndex(function(e){return e.id===parseInt(i)});Object.assign(e.pins[a],{showTippy:!0})}else{var s=n.dataset.id,o=e.pins.findIndex(function(e){return e.id===parseInt(s)});Object.assign(e.pins[o],{showTippy:!1})}}})},a=new MutationObserver(i);t.forEach(function(e){a.observe(e,n)}),$("#".concat(e.namespacedId,"-pins")).data("elementSelect").on("removeElements",function(t){var n,i=[],a=Object(o["a"])(t.target.elementSelect.$items);try{for(a.s();!(n=a.n()).done;){var s=n.value;i.push(Number(s.getAttribute("data-id")))}}catch(c){a.e(c)}finally{a.f()}var r=e.pins.filter(function(e){return!i.includes(e.id)})[0],d=e.pins.findIndex(function(e){return e.id==r.id});e.pins.splice(d,1)})})}},d=r,c=n("2877"),p=Object(c["a"])(d,a,s,!1,null,null,null),u=p.exports,l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"pin",staticClass:"-ml-2 -mt-2 h-4 w-4 rounded-full border-white shadow-sm border-2 border-solid border-opacity-90 bg-black bg-opacity-50 absolute z-10 top-0 left-0 cursor-move flex items-center justify-center"},[n("div",{staticClass:"h-1 w-1 rounded-full bg-white bg-opacity-90",staticStyle:{margin:"0"}})])},f=[],h=(n("b680"),n("ce88")),m=n.n(h),v=n("6f9a"),y=(n("52df"),{props:["canvas-id","pin"],data:function(){return{draggie:null,canvas:null,tippy:null,showTippy:!1,position:{x:0,y:0}}},watch:{pin:{deep:!0,handler:function(e,t){e.showTippy?this.tippy.show():this.tippy.hide()}}},methods:{setPosition:function(){var e=this.canvas.getBoundingClientRect().width,t=this.canvas.getBoundingClientRect().height,n=this.position.x*e/100,i=this.position.y*t/100;this.draggie.setPosition(n,i)}},mounted:function(){var e=this;if(this.canvas=document.getElementById(e.canvasId),this.position.x=this.pin.x,this.position.y=this.pin.y,this.showTippy=this.pin.showTippy,this.draggie=new m.a(this.$refs.pin,{containment:e.canvas}),this.tippy=Object(v["a"])(e.$refs.pin,{content:e.pin.label,moveTransition:"transform 0.35s ease-in-out"}),0!==this.position.x||0!==this.position.y){this.setPosition(),window.addEventListener("resize",this.setPosition),new ResizeObserver(this.setPosition).observe(document.getElementById("content-container"));var t=document.getElementById("tabs");t&&t.addEventListener("click",this.setPosition)}this.draggie.on("dragEnd",function(){var t=0,n=this.position.x+t,i=this.position.y+t,a=e.canvas.getBoundingClientRect().width,s=e.canvas.getBoundingClientRect().height,o=n/a*100,r=i/s*100;e.position.x=Math.max(0,Number(o.toFixed(3))),e.position.y=Math.max(0,Number(r.toFixed(3))),e.$emit("positioned",{id:e.pin.id,x:e.position.x,y:e.position.y})})},destroyed:function(){window.removeEventListener("resize",this.setPosition)}}),g=y,b=Object(c["a"])(g,l,f,!1,null,null,null),w=b.exports;n("d109"),n("df24");n.p="http://localhost:8080/",i["a"].config.productionTip=!1;var x={install:function(e){e.component("donkeytail-canvas",u),e.component("donkeytail-pin",w)}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(x);var I=function(e){return{el:e.detail}};window.addEventListener("build",function(e){new window.Vue(I(e))},!1)},d109:function(e,t,n){}});