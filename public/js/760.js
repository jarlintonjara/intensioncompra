(self.webpackChunk=self.webpackChunk||[]).push([[760],{7757:(t,r,e)=>{t.exports=e(5666)},5666:t=>{var r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{c({},"")}catch(t){c=function(t,r,e){return t[r]=e}}function u(t,r,e,n){var o=r&&r.prototype instanceof m?r:m,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(t,r,e){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return N()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var s=k(i,e);if(s){if(s===v)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var c=l(t,r,e);if("normal"===c.type){if(n=e.done?d:h,c.arg===v)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n=d,e.method="throw",e.arg=c.arg)}}}(t,e,i),a}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function m(){}function g(){}function y(){}var w={};c(w,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(P([])));x&&x!==e&&n.call(x,a)&&(w=x);var _=y.prototype=m.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(r){c(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){function e(o,a,i,s){var c=l(t[o],t,a);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,i,s)}),(function(t){e("throw",t,i,s)})):r.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,s)}))}s(c.arg)}var o;this._invoke=function(t,n){function a(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(a,a):a()}}function k(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,k(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function C(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:N}}function N(){return{value:r,done:!0}}return g.prototype=y,c(_,"constructor",y),c(y,"constructor",g),g.displayName=c(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},L(E.prototype),c(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(r,e,n,o,a){void 0===a&&(a=Promise);var i=new E(u(r,e,n,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(_),c(_,s,"Generator"),c(_,a,(function(){return this})),c(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=P,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return s.type="throw",s.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),C(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;C(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},6760:(t,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>s});var n=e(7757),o=e.n(n);function a(t,r,e,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void e(t)}s.done?r(c):Promise.resolve(c).then(n,o)}const i={data:function(){return{form:{usuario:"",password:""},errors:[]}},methods:{login:function(){var t,r=this;return(t=o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r,t.next=3,axios.post("api/login",r.form).then((function(t){localStorage.setItem("access_token",t.data.access_token),r.$router.push({name:"dashboard"})})).catch((function(t){e.$swal.fire({icon:"error",title:"Oops...",text:"usuario o password incorrectos!"})}));case 3:case"end":return t.stop()}}),t)})),function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function s(t){a(i,n,o,s,c,"next",t)}function c(t){a(i,n,o,s,c,"throw",t)}s(void 0)}))})()}}};const s=(0,e(1900).Z)(i,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{},[e("div",{staticClass:"blankpage-form-field"},[t._m(0),t._v(" "),e("div",{staticClass:"card p-4 border-top-left-radius-0 border-top-right-radius-0"},[e("form",[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label",attrs:{for:"username"}},[t._v("usuario")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.usuario,expression:"form.usuario"}],staticClass:"form-control",attrs:{type:"usuario",id:"username",placeholder:"your id or usuario",value:"demo@derco.com"},domProps:{value:t.form.usuario},on:{input:function(r){r.target.composing||t.$set(t.form,"usuario",r.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"password",value:"password123"},domProps:{value:t.form.password},on:{input:function(r){r.target.composing||t.$set(t.form,"password",r.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-danger float-right",on:{click:function(r){return r.preventDefault(),t.login.apply(null,arguments)}}},[t._v("Login")])])])])])}),[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"page-logo m-0 w-100 align-items-center justify-content-center rounded border-bottom-left-radius-0 border-bottom-right-radius-0 px-4",staticStyle:{"background-color":"#e30025"}},[e("a",{staticClass:"page-logo-link press-scale-down d-flex align-items-center",attrs:{href:"javascript:void(0)"}},[e("span",{staticClass:"page-logo-text mr-1"},[t._v("Login")])])])}],!1,null,null,null).exports}}]);