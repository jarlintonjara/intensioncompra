(self.webpackChunk=self.webpackChunk||[]).push([[402],{7757:(t,e,r)=>{t.exports=r(5666)},5666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof _?e:_,a=Object.create(o.prototype),i=new A(n||[]);return a._invoke=function(t,e,r){var n=h;return function(o,a){if(n===v)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=O(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=v;var s=u(t,e,r);if("normal"===s.type){if(n=r.done?d:f,s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var h="suspendedStart",f="suspendedYield",v="executing",d="completed",p={};function _(){}function y(){}function g(){}var m={};s(m,a,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(N([])));b&&b!==r&&n.call(b,a)&&(m=b);var E=g.prototype=_.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,i,c){var s=u(t[o],t,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(h).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function N(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:j}}function j(){return{value:e,done:!0}}return y.prototype=g,s(E,"constructor",g),s(g,"constructor",y),y.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},x(L.prototype),s(L.prototype,i,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(E),s(E,c,"Generator"),s(E,a,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},9402:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>s});var n=r(7757),o=r.n(n);function a(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}const i={data:function(){return{bloqueados:[]}},mounted:function(){this.init()},methods:{init:function(){var t,e=this;return(t=o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=localStorage.getItem("access_token"),t.next=3,e.axios.get("/api/ingreso",{withCredentials:!0,headers:{Authorization:"Bearer ".concat(r)}}).then((function(t){e.bloqueados=t.data.bloqueados})).catch((function(t){console.log(t),e.bloqueados=[]}));case 3:return t.next=5,e.$tablaGlobal("#bloqueados");case 5:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,s,"next",t)}function s(t){a(i,n,o,c,s,"throw",t)}c(void 0)}))})()}}};var c=(0,r(1900).Z)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"page-content",attrs:{id:"js-page-content",role:"main"}},[t._m(0),t._v(" "),r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"panel",attrs:{id:"panel-4"}},[t._m(1),t._v(" "),r("div",{staticClass:"panel-container show"},[r("div",{staticClass:"panel-content"},[r("table",{staticClass:"table table-bordered table-hover table-striped w-100",attrs:{id:"bloqueados"}},[t._m(2),t._v(" "),r("tbody",t._l(t.bloqueados,(function(e){return r("tr",{key:e.id},[r("td",[t._v(t._s(e.vin))]),t._v(" "),r("td",[t._v(t._s(e.marca))]),t._v(" "),r("td",[t._v(t._s(e.modelo))]),t._v(" "),r("td",[t._v(t._s(e.version))]),t._v(" "),r("td",[t._v(t._s(e.anio_modelo))]),t._v(" "),r("td",[t._v(t._s(e.anio_fabricacion))]),t._v(" "),r("td",[t._v(t._s(e.nombre))]),t._v(" "),r("td",[t._v(t._s(e.fecha_bloqueo?e.fecha_bloqueo:""))]),t._v(" "),r("td",[t._v(t._s(e.color))]),t._v(" "),r("td",[t._v(t._s(e.codigo_sap))]),t._v(" "),r("td",[t._v(t._s(e.nave))]),t._v(" "),r("td",[t._v(t._s(e.fecha_ingreso?e.fecha_ingreso:""))])])})),0)])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"subheader"},[r("h1",{staticClass:"subheader-title"},[r("i",{staticClass:"subheader-icon fal fa-pencil"}),t._v(" "),r("span",{staticClass:"fw-300"},[t._v("PACKING LIST")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"panel-hdr"},[r("h2",[r("h2",{staticStyle:{"text-align":"center","font-size":"1.125rem"}},[r("b",[t._v("Bloqueados")])])]),t._v(" "),r("div",{staticClass:"panel-toolbar"},[r("button",{staticClass:"btn btn-panel waves-effect waves-themed",attrs:{"data-action":"panel-collapse","data-toggle":"tooltip","data-offset":"0,10","data-original-title":"Collapse"}}),t._v(" "),r("button",{staticClass:"btn btn-panel waves-effect waves-themed",attrs:{"data-action":"panel-fullscreen","data-toggle":"tooltip","data-offset":"0,10","data-original-title":"Fullscreen"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("VIN")]),t._v(" "),r("th",[t._v("MARCA")]),t._v(" "),r("th",[t._v("MODELO")]),t._v(" "),r("th",[t._v("VERSION")]),t._v(" "),r("th",[t._v("AÑO MODELO")]),t._v(" "),r("th",[t._v("AÑO FABRICACIÓN")]),t._v(" "),r("th",[t._v("USUARIO_BLOQUEO")]),t._v(" "),r("th",[t._v("FECHA BLOQUEO")]),t._v(" "),r("th",[t._v("COLOR")]),t._v(" "),r("th",[t._v("CODIGO SAP")]),t._v(" "),r("th",[t._v("NAVE")]),t._v(" "),r("th",[t._v("FECHA INGRESO")])])])}],!1,null,null,null);const s=c.exports}}]);