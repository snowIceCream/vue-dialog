!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Dialog=e():t.Dialog=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={name:"vue-dialog",props:{id:[String,Number],closeIcon:Boolean,isDialog:[String,Boolean],isMask:[String,Boolean],fixed:Boolean,quickClose:Boolean,align:String,skin:String,width:[String,Number],height:[String,Number],zIndex:[String,Number],title:[String,Number],content:Object,statusbar:Object,button:Array,onShow:Function,onClose:Function,onBeforeDestroy:Function,onDestroy:Function},watch:{isDialog:{handler:function(t,e){t?document.body.addEventListener("click",this.quickCloseCb):document.body.removeEventListener("click",this.quickCloseCb)},immediate:!1}},methods:{closeCb:function(){this.isDialog=!1},clickCb:function(){!1!==(arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){}).call(this)&&(this.isDialog=!1)},quickCloseCb:function(t){var e=t.target||t.srcElement,n=this.$refs.dialogWrapper;e!==n&&!n.contains(e)&&this.quickClose&&(this.isDialog=!1)}},beforeDestroy:function(){this.onBeforeDestroy()},destroyed:function(){this.onDestroy()}},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isDialog?n("div",{staticClass:"dialog-outter-wrapper",style:{"z-index":t.zIndex},attrs:{"dialog-id":t.id}},[t.isMask?n("div",{staticClass:"dialog-mask"}):t._e(),t._v(" "),n("div",{ref:"dialogWrapper",staticClass:"dialog-wrapper",class:{skin:t.skin},style:{width:t.width,height:t.height,position:t.fixed?"fixed":"absolute"}},[t.closeIcon?n("div",{staticClass:"dialog-close",on:{click:t.closeCb}},[t._v("x")]):t._e(),t._v(" "),t.title?n("div",{staticClass:"dialog-title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),n("div",{ref:"content",staticClass:"dialog-content"}),t._v(" "),n("div",{staticClass:"dialog-footer"},[t.statusbar?n("div",{ref:"statusbar",staticClass:"dialog-statusbar"}):t._e(),t._v(" "),t.button.length>0?n("div",{staticClass:"dialog-buttons"},t._l(t.button,function(e,o){return n("div",{key:o,staticClass:"dialog-button",attrs:{"button-id":e.id},on:{click:function(n){t.clickCb(e.callback)}}},[t._v(t._s(e.value))])})):t._e()]),t._v(" "),n("div",{staticClass:"dialog-anchor-arrow",attrs:{align:t.align}})])]):t._e()};i._withStripped=!0;var s={render:i,staticRenderFns:[]},r=s;var a=!1;var l=n(2)(o,r,!1,function(t){a||n(1)},null,null);l.options.__file="src\\components\\vue-dialog.vue";var c=l.exports;function d(){}function u(t){let e=0,n=0;for(;t;)e=e+t.offsetLeft+t.clientLeft,n=n+t.offsetTop+t.clientTop,t=t.offsetParent;return{left:e,top:n}}let f;e.default={install(t,e){const n=e=>{const n=t.extend(c);return(f=(new n).$mount()).isDialog=!1,{show(n){f.id=e.id||"",f.closeIcon=!1!==e.closeIcon,f.title=e.title||"",f.skin=e.skin||"",f.fixed=e.fixed||!1,f.align=e.align||"top left",f.quickClose=e.quickClose||!1,f.isMask=e.isMask||!1,f.width=e.width||"auto",f.height=e.height||"auto",f.zIndex=e.zIndex||"1024",f.button=e.button||[],f.onShow=e.onShow||d,f.onClose=e.onClose||d,f.onBeforeDestroy=e.onBeforeDestroy||d,f.onDestroy=e.onDestroy||d,document.body.appendChild(f.$el),f.isDialog=!0;const o=t.extend(e.content||{template:"<div></div>"});if(f.content=(new o).$mount(),e.statusbar){const n=t.extend(e.statusbar);f.statusbar=(new n).$mount()}return f.$nextTick(()=>{if(f.$refs.content.appendChild(f.content.$el),f.statusbar&&f.$refs.statusbar.appendChild(f.statusbar.$el),n){f.fixed=!1;const t=u(n).left,e=u(n).top,o=n.offsetWidth,i=n.offsetHeight,s=f.$refs.dialogWrapper.offsetWidth,r=f.$refs.dialogWrapper.offsetHeight,a={"top left":`translateX(${t}px) translateY(${e-r-10}px)`,top:`translateX(${t+(o-s)/2}px) translateY(${e-r-10}px)`,"top right":`translateX(${t+o-s}px) translateY(${e-r-10}px)`,"right top":`translateX(${t+o+10}px) translateY(${e}px)`,right:`translateX(${t+o+10}px) translateY(${e+(i-r)/2}px)`,"right bottom":`translateX(${t+o+10}px) translateY(${e+i-r}px)`,"bottom right":`translateX(${t+o-s}px) translateY(${e+i+10}px)`,bottom:`translateX(${t+(o-s)/2}px) translateY(${e+i+10}px)`,"bottom left":`translateX(${t}px) translateY(${e+i+10}px)`,"left bottom":`translateX(${t-s-10}px) translateY(${e+i-r}px)`,left:`translateX(${t-s-10}px) translateY(${e+i-r}px)`,"left top":`translateX(${t-s-10}px) translateY(${e}px)`};!function(t,e){for(let n in e)t.style[n]=e[n]}(f.$refs.dialogWrapper,{left:0,top:0,transform:`${a[f.align]}`})}f.onShow()}),this},close(){return f.isDialog=!1,f.onClose(),this},destroy(){return f.$destroy(),this},content(e){const n=f.content.$el;f.content.$destroy();const o=t.extend(e);return f.content=(new o).$mount(),f.$nextTick(()=>{f.$refs.content.removeChild(n),f.$refs.content.appendChild(f.content.$el)}),this},open:f.isDialog}};t.dialog||(t.dialog=n),t.mixin({created(){this.$dialog=t.dialog}})}}},function(t,e){},function(t,e){t.exports=function(t,e,n,o,i,s){var r,a=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(r=t,a=t.default);var c,d="function"==typeof a?a.options:a;if(e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),i&&(d._scopeId=i),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},d._ssrRegister=c):o&&(c=o),c){var u=d.functional,f=u?d.render:d.beforeCreate;u?(d._injectStyles=c,d.render=function(t,e){return c.call(e),f(t,e)}):d.beforeCreate=f?[].concat(f,c):[c]}return{esModule:r,exports:a,options:d}}}])});