(self.webpackChunk=self.webpackChunk||[]).push([[332],{7757:(t,e,a)=>{t.exports=a(5666)},5666:t=>{var e=function(t){"use strict";var e,a=Object.prototype,r=a.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},s=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function l(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,a){return t[e]=a}}function c(t,e,a,r){var n=e&&e.prototype instanceof _?e:_,s=Object.create(n.prototype),i=new M(r||[]);return s._invoke=function(t,e,a){var r=v;return function(n,s){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===n)throw s;return F()}for(a.method=n,a.arg=s;;){var i=a.delegate;if(i){var o=E(i,a);if(o){if(o===p)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(r===v)throw r=d,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r=h;var l=u(t,e,a);if("normal"===l.type){if(r=a.done?d:f,l.arg===p)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(r=d,a.method="throw",a.arg=l.arg)}}}(t,a,i),s}function u(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var v="suspendedStart",f="suspendedYield",h="executing",d="completed",p={};function _(){}function g(){}function m(){}var y={};l(y,s,(function(){return this}));var w=Object.getPrototypeOf,C=w&&w(w(j([])));C&&C!==a&&r.call(C,s)&&(y=C);var b=m.prototype=_.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function a(n,s,i,o){var l=u(t[n],t,s);if("throw"!==l.type){var c=l.arg,v=c.value;return v&&"object"==typeof v&&r.call(v,"__await")?e.resolve(v.__await).then((function(t){a("next",t,i,o)}),(function(t){a("throw",t,i,o)})):e.resolve(v).then((function(t){c.value=t,i(c)}),(function(t){return a("throw",t,i,o)}))}o(l.arg)}var n;this._invoke=function(t,r){function s(){return new e((function(e,n){a(t,r,e,n)}))}return n=n?n.then(s,s):s()}}function E(t,a){var r=t.iterator[a.method];if(r===e){if(a.delegate=null,"throw"===a.method){if(t.iterator.return&&(a.method="return",a.arg=e,E(t,a),"throw"===a.method))return p;a.method="throw",a.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=u(r,t.iterator,a.arg);if("throw"===n.type)return a.method="throw",a.arg=n.arg,a.delegate=null,p;var s=n.arg;return s?s.done?(a[t.resultName]=s.value,a.next=t.nextLoc,"return"!==a.method&&(a.method="next",a.arg=e),a.delegate=null,p):s:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,p)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function z(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function j(t){if(t){var a=t[s];if(a)return a.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function a(){for(;++n<t.length;)if(r.call(t,n))return a.value=t[n],a.done=!1,a;return a.value=e,a.done=!0,a};return i.next=i}}return{next:F}}function F(){return{value:e,done:!0}}return g.prototype=m,l(b,"constructor",m),l(m,"constructor",g),g.displayName=l(m,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,o,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(k.prototype),l(k.prototype,i,(function(){return this})),t.AsyncIterator=k,t.async=function(e,a,r,n,s){void 0===s&&(s=Promise);var i=new k(c(e,a,r,n),s);return t.isGeneratorFunction(a)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(b),l(b,o,"Generator"),l(b,s,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var a in t)e.push(a);return e.reverse(),function a(){for(;e.length;){var r=e.pop();if(r in t)return a.value=r,a.done=!1,a}return a.done=!0,a}},t.values=j,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(z),!t)for(var a in this)"t"===a.charAt(0)&&r.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var a=this;function n(r,n){return o.type="throw",o.arg=t,a.next=r,n&&(a.method="next",a.arg=e),!!n}for(var s=this.tryEntries.length-1;s>=0;--s){var i=this.tryEntries[s],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var s=n;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var i=s?s.completion:{};return i.type=t,i.arg=e,s?(this.method="next",this.next=s.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),z(a),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var r=a.completion;if("throw"===r.type){var n=r.arg;z(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,a,r){return this.delegate={iterator:j(t),resultName:a,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},332:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>v});var r=a(7757),n=a.n(r);const s={name:"sidebar",props:["session"],watch:{session:function(t){this.user=t}},data:function(){return{user:{role_id:0}}},methods:{selectLi:function(t){}}};var i=a(1900);function o(t,e,a,r,n,s,i){try{var o=t[s](i),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(r,n)}const l={name:"Navbar",props:["session"],data:function(){return{user:{nombre:""},tienda:{nombre:""},concesionario:{nombre:""}}},watch:{session:function(t){this.user=t,this.tienda=this.user.tienda,this.concesionario=this.user.concesionario}},methods:{logout:function(){var t,e=this;return(t=n().mark((function t(){var a,r;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=localStorage.getItem("access_token"),r=a||"",t.next=4,axios.post("/api/logout",{access_token:r}).then((function(){localStorage.removeItem("access_token"),e.$router.push({name:"Login"})}));case 4:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(r,n){var s=t.apply(e,a);function i(t){o(s,r,n,i,l,"next",t)}function l(t){o(s,r,n,i,l,"throw",t)}i(void 0)}))})()}}};function c(t,e,a,r,n,s,i){try{var o=t[s](i),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(r,n)}const u={name:"Layout",components:{Sidebar:(0,i.Z)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"page-sidebar",staticStyle:{"background-image":"none","background-color":"#e30025"}},[a("div",[a("svg",{staticClass:"d-inline-block align-top logo",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 88 82"}},[a("defs"),t._v(" "),a("path",{attrs:{fill:"#E30025",d:"M0 82h88V0H0v82z"}}),t._v(" "),a("path",{attrs:{fill:"#FFF",d:"M18.035 57.41h4.506c3.664 0 6.072.527 6.072 4.252 0 3.666-2.408 4.252-6.072 4.252h-4.506V57.41zm3.111 1.649v4.77c0 .24.219.436.506.438h.726c1.61 0 3.133-.56 3.133-2.604 0-2.104-1.522-2.603-3.133-2.603h-1.232v-.001zM64.941 66.091c-3.547 0-5.551-1.295-5.551-4.448 0-3.127 2.004-4.449 5.551-4.449s5.552 1.322 5.552 4.449c0 3.153-2.005 4.448-5.552 4.448m2.435-4.413c0-1.603-.416-2.828-2.435-2.828s-2.435 1.226-2.435 2.828c0 1.631.416 2.756 2.435 2.756s2.435-1.125 2.435-2.756M55.807 63.412h3.092v.352c-.051 1.816-2.631 2.489-4.918 2.489-3.215 0-5.092-.819-5.092-4.437 0-3.189 1.877-4.39 5.092-4.414 2.33 0 4.918.646 4.918 2.431v.349h-3.092l.002-.349c-.006-.515-.893-.782-1.826-.782-1.448 0-1.938 1.135-1.944 2.86-.006 1.419.496 2.696 1.944 2.696.947 0 1.824-.318 1.824-.89l.002-.305h-.002zM48.336 63.729c-.191-1.222-.568-1.963-2.227-2.095 1.4-.216 2.488-.618 2.488-2.032 0-2.19-2.5-2.191-4.431-2.191h-5.285v8.504h3.106v-3.368h1.246c1.614 0 1.657.56 1.836 1.584.115.581.312 1.79.316 1.784h3.465l-.514-2.186zm-5.056-2.713h-1.271l.001-.002v-1.555c.001-.217.18-.385.406-.4h.864c1.012 0 2.15-.025 2.15.979 0 .871-1.138.978-2.15.978zM37.948 65.999l-8.62-.01V57.49l8.62.004v1.648l-5.528-.004v1.752l5.118.006v1.647l-5.118-.003v1.397c.001.22.18.389.408.402l5.121.01-.001 1.65zM47.48 15.728l.088.178.054.242.022.219-.031.173-.074.219-12.28 21.255-.13.19-.136.161-.163.104-.026.015-.087.045-.167.065-.116.029-.09.017h-.118l-8.26.001-.104-.013-.134-.03-.124-.044-.109-.052-.027-.015-.126-.084-.082-.068-.071-.073-.054-.062-.058-.08-.047-.08-1.979-3.422-.118-.22-.058-.167-.033-.185-.003-.107.007-.075.01-.077.045-.208.127-.282 10.163-17.57.031-.054.039-.054.042-.059.045-.05.073-.071.076-.064.091-.065.041-.025.001-.004.19-.086.194-.051.115-.017 12.387-.001.239.03.142.057.215.119.177.141.103.116.088.139zM58.68 45.693l-.2-.013-.237-.074-.2-.09-.135-.113-.153-.176-12.296-21.245-.1-.207-.07-.198-.008-.194v-.03l.004-.097.027-.176.033-.115.029-.088.059-.102 4.131-7.142.062-.084.094-.1.1-.086.1-.067.027-.017.136-.067.101-.036.098-.025.082-.016.099-.01.093-.001 3.957-.001.25.008.174.034.178.063.095.052.062.043.062.046.159.145.181.251 10.158 17.574.03.052.029.061.027.067.021.063.026.1.017.096.012.111.002.049.003.001-.021.208-.053.194-.042.109-6.192 10.71-.146.193-.122.094-.209.127-.211.08-.152.031-.171.008zM53.148 39.96l.024.013.083.053.139.111.084.086.061.069.061.104 4.129 7.141.041.097.041.13.023.131.01.119.002.031-.012.15-.018.105-.027.098-.027.078-.039.092-.047.08-1.979 3.422-.131.213-.115.134-.145.121-.092.056-.066.031-.072.029-.204.066-.308.03-20.323-.003h-.061l-.067-.006-.071-.008-.066-.014-.099-.027-.092-.033-.102-.046-.043-.022-.001-.003-.172-.118-.141-.143-.073-.09-6.193-10.71-.096-.222-.02-.152-.006-.245.035-.222.05-.148.076-.148.111-.165.184-.168.177-.127.165-.061.229-.055 24.576.001.23.018.205.04.172.087z"}}),t._v(" "),a("path",{attrs:{fill:"#E6E7E8",d:"M44.179 17.631l.024.074.006.07-.019.098-.046.084-10.516 18.184-.017.028-.029.035-.043.035 1.291 2.23.163-.105.136-.159.13-.19 12.28-21.254.074-.22.031-.174-.022-.217-.054-.242-.088-.178-3.301 1.901z"}}),t._v(" "),a("path",{attrs:{fill:"#BCBEC0",d:"M63.402 33.988l-.012.044-.031.065-4.387 7.592-.054.093-.069.059-.088.035-.082.013v3.807l.166-.01.152-.029.211-.082.209-.127.121-.094.146-.192 6.192-10.71.042-.11.053-.192.021-.209-2.586-.002-.004.049z"}}),t._v(" "),a("path",{attrs:{fill:"#E6E7E8",d:"M53.908 17.521l.056.036.048.06.037.063 9.314 16.103.025.058.01.06.006.036h2.588l-.004-.048-.01-.111-.017-.097-.026-.1-.021-.064-.027-.065-.029-.061-.029-.052L55.67 15.765l-.182-.251-.158-.144-.062-.046-.061-.042-1.299 2.239z"}}),t._v(" "),a("path",{attrs:{fill:"#FFF",d:"M51.241 17.52l.022-.013.026-.01.037-.008.05-.005h2.389l.041.004.041.008.039.012.024.014 1.296-2.242-.094-.052-.178-.064-.174-.033-.25-.008-3.957.001h-.094l-.098.011-.084.017-.096.024-.102.038-.137.067 1.299 2.239z"}}),t._v(" "),a("path",{attrs:{fill:"#E6E7E8",d:"M34.931 50.357l-1.294 2.231-.171-.116-.142-.144-.073-.09-6.193-10.712-.095-.221-.02-.152-.005-.244.035-.223.05-.148.076-.15 3.301 1.904-.031.077-.013.093.015.089.054.093 4.39 7.592.042.06.032.034.042.027z"}}),t._v(" "),a("path",{attrs:{fill:"#D1D3D4",d:"M53.859 50.381l-.075.014h-.073l-18.626.002-.06-.004-.058-.024-.034-.013-1.294 2.235.044.024.101.047.092.033.099.027.065.012.072.01.067.006 20.383.002.309-.031.204-.064.071-.03.067-.034-1.295-2.238-.059.026z"}}),t._v(" "),a("path",{attrs:{fill:"#FFF",d:"M30.401 42.295l-3.303-1.904.111-.164.184-.168.177-.129.165-.06.228-.054h24.576l.23.017.207.04.172.086-1.293 2.234-.051-.018-.041-.008-.033-.005H30.7l-.096.001-.094.034-.058.039-.051.059z"}}),t._v(" "),a("path",{attrs:{fill:"#E6E7E8",d:"M51.825 42.186l.084.039.063.065.071.118 3.155 5.458.029.057.02.058.006.065h2.59l-.001-.03-.01-.121-.024-.129-.041-.132-.039-.097-4.131-7.141-.06-.104-.062-.068-.082-.086-.139-.111-.083-.052-.038-.02-1.308 2.231z"}}),t._v(" "),a("path",{attrs:{fill:"#BCBEC0",d:"M55.253 48.045l-.001.027-.004.028-.012.035-.02.045-1.195 2.066-.023.031-.027.033-.029.025-.023.016 1.296 2.243.093-.056.144-.122.116-.134.132-.213 1.978-3.422.045-.08.039-.092.028-.078.028-.098.017-.105.011-.151-2.593.002z"}}),t._v(" "),a("path",{attrs:{fill:"#FFF",d:"M34.918 17.518l-1.291-2.237.19-.086.194-.051.116-.017 12.387-.001.239.029.142.059.215.117.177.143.103.116.092.14-3.301 1.904-.053-.067-.074-.058-.086-.031h-8.887l-.072.006-.046.01-.045.024z"}}),t._v(" "),a("path",{attrs:{fill:"#D1D3D4",d:"M58.68 41.886v3.808l-.199-.012-.237-.076-.2-.09-.135-.113-.153-.174-12.297-21.247-.1-.208-.07-.196-.008-.194 2.574-.001.013.055.016.043.015.029 10.516 18.184.049.082.076.066.064.03.076.014z"}}),t._v(" "),a("path",{attrs:{fill:"#E6E7E8",d:"M49.918 15.295l-.1.069-.1.086-.093.1-.063.083-4.131 7.142-.059.103-.029.087-.033.115-.028.175-.003.099v.03l2.574-.001.013-.059.019-.09.07-.121 3.154-5.457.035-.056.039-.043.055-.038-1.295-2.24-.025.016zM33.585 15.31l-.09.065-.076.063-.073.072-.044.05-.043.058-.038.055-.031.054-10.164 17.57-.127.282-.045.209-.009.077-.004.074h2.588l.007-.063.028-.074.035-.061 9.311-16.105.035-.05.05-.04.028-.023-1.294-2.238-.044.025z"}}),t._v(" "),a("path",{attrs:{fill:"#BCBEC0",d:"M33.499 36.269l-.102.02h-6.449l-.066-.004-.058-.011-.06-.027-1.295 2.24.027.015.109.051.124.045.134.029.104.013h8.379l.09-.019.117-.027.166-.065.087-.047.026-.013-1.289-2.227-.044.027z"}}),t._v(" "),a("path",{attrs:{fill:"#D1D3D4",d:"M26.763 36.247l-.022-.013-.022-.018-.025-.029-.029-.04-1.195-2.066-.017-.037-.013-.039-.008-.038-.001-.029h-2.594l.003.107.033.186.058.167.118.22 1.979 3.422.047.08.059.079.054.063.07.073.082.068.127.084 1.296-2.24z"}})])]),t._v(" "),a("nav",{staticClass:"primary-nav",attrs:{id:"js-primary-nav",role:"navigation"}},[t._m(0),t._v(" "),a("ul",{staticClass:"nav-menu",attrs:{id:"js-nav-menu"}},[6==t.user.role_id||2==t.user.role_id||3==t.user.role_id?a("router-link",{attrs:{tag:"li",to:"/dashboard","active-class":"active"}},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fal fa-info-circle"}),t._v(" "),a("span",{staticClass:"nav-link-text"},[t._v("Dashboard")]),t._v(" "),a("b",{staticClass:"collapse-sign"},[a("em",{staticClass:"fal fa-angle-down"})])])]):t._e(),t._v(" "),6==t.user.role_id||2==t.user.role_id||3==t.user.role_id?a("li",{staticClass:"active open",on:{click:t.selectLi}},[t._m(1),t._v(" "),a("ul",[6==t.user.role_id||2==t.user.role_id||3==t.user.role_id?a("router-link",{attrs:{tag:"li",to:"/usuarios","active-class":"active"}},[a("a",{attrs:{href:""}},[a("span",{staticClass:"nav-link-text"},[t._v("Usuarios")])])]):t._e(),t._v(" "),6==t.user.role_id?a("router-link",{attrs:{tag:"li",to:"/concesionarios","active-class":"active"}},[a("a",{attrs:{href:""}},[a("span",{staticClass:"nav-link-text"},[t._v("Concesionarios")])])]):t._e(),t._v(" "),6==t.user.role_id?a("router-link",{attrs:{tag:"li",to:"/tiendas","active-class":"active"}},[a("a",{attrs:{href:""}},[a("span",{staticClass:"nav-link-text"},[t._v("Tiendas")])])]):t._e(),t._v(" "),6==t.user.role_id?a("router-link",{attrs:{tag:"li",to:"/caracteristicas","active-class":"active"}},[a("a",{attrs:{href:""}},[a("span",{staticClass:"nav-link-text"},[t._v("Caracteristicas")])])]):t._e()],1)]):t._e(),t._v(" "),a("li",{staticClass:"active open"},[a("a",{attrs:{href:"#",title:"Registros","data-filter-tags":"registros"},on:{click:t.selectLi}},[a("i",{staticClass:"fal fa-th-list"}),t._v(" "),a("span",{staticClass:"nav-link-text"},[t._v("Registros")]),t._v(" "),t._m(2)]),t._v(" "),a("ul",[1==t.user.role_id||6==t.user.role_id?a("router-link",{attrs:{tag:"li",to:"/registro","active-class":"active"}},[a("a",{attrs:{href:""}},[a("span",{staticClass:"nav-link-text"},[t._v("Nuevo Registro")])])]):t._e(),t._v(" "),1==t.user.role_id||2==t.user.role_id||3==t.user.role_id||4==t.user.role_id||5==t.user.role_id||6==t.user.role_id||8==t.user.role_id?a("router-link",{attrs:{tag:"li",to:"/no-asignado","active-class":"active"}},[a("a",{attrs:{href:""}},[a("span",{staticClass:"nav-link-text"},[t._v("Lista de registros")])])]):t._e()],1)]),t._v(" "),a("li",{staticClass:"active open"},[a("a",{attrs:{href:"#",title:"Registros","data-filter-tags":"registros"},on:{click:t.selectLi}},[a("i",{staticClass:"fal fa-edit"}),t._v(" "),a("span",{staticClass:"nav-link-text"},[t._v("Asignaciones")]),t._v(" "),t._m(3)]),t._v(" "),a("ul",[a("router-link",{attrs:{tag:"li",to:"/asignacion","active-class":"active"}},[a("a",{attrs:{href:""}},[a("span",{staticClass:"nav-link-text"},[t._v("Lista de asignaciones")])])]),t._v(" "),a("router-link",{attrs:{tag:"li",to:"/reservado","active-class":"active"}},[a("a",{attrs:{href:""}},[a("span",{staticClass:"nav-link-text"},[t._v("Reservados")])])]),t._v(" "),a("router-link",{attrs:{tag:"li",to:"/emplazado","active-class":"active"}},[a("a",{attrs:{href:""}},[a("span",{staticClass:"nav-link-text"},[t._v("Emplazados")])])]),t._v(" "),a("router-link",{attrs:{tag:"li",to:"/facturado","active-class":"active"}},[a("a",{attrs:{href:""}},[a("span",{staticClass:"nav-link-text"},[t._v("Facturados")])])])],1)]),t._v(" "),4==t.user.role_id||5==t.user.role_id||6==t.user.role_id||8==t.user.role_id?a("li",{staticClass:"active open"},[a("a",{attrs:{href:"#",title:"Registros","data-filter-tags":"registros"},on:{click:t.selectLi}},[a("i",{staticClass:"fal fa-globe"}),t._v(" "),a("span",{staticClass:"nav-link-text"},[t._v("Packing List")]),t._v(" "),t._m(4)]),t._v(" "),a("ul",[a("router-link",{attrs:{tag:"li",to:"/ingreso","active-class":"active"}},[a("a",{attrs:{href:""}},[a("span",{staticClass:"nav-link-text"},[t._v("Lista de packing list")])])]),t._v(" "),a("router-link",{attrs:{tag:"li",to:"/bloqueado","active-class":"active"}},[a("a",{attrs:{href:""}},[a("span",{staticClass:"nav-link-text"},[t._v("Bloqueados")])])])],1)]):t._e()],1),t._v(" "),a("div",{staticClass:"filter-message js-filter-message bg-success-600"})])])}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-filter"},[a("div",{staticClass:"position-relative"},[a("input",{staticClass:"form-control",attrs:{type:"text",id:"nav_filter_input",placeholder:"Filter menu",tabindex:"0"}}),t._v(" "),a("a",{staticClass:"btn-primary btn-search-close js-waves-off",attrs:{href:"#",onclick:"return false;","data-action":"toggle","data-class":"list-filter-active","data-target":".page-sidebar"}},[a("i",{staticClass:"fal fa-chevron-up"})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"#",title:"Registros","data-filter-tags":"registros"}},[a("i",{staticClass:"fal fa-cog"}),t._v(" "),a("span",{staticClass:"nav-link-text"},[t._v("Mantenimientos")]),t._v(" "),a("b",{staticClass:"collapse-sign"},[a("em",{staticClass:"fal fa-angle-down"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("b",{staticClass:"collapse-sign"},[e("em",{staticClass:"fal fa-angle-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("b",{staticClass:"collapse-sign"},[e("em",{staticClass:"fal fa-angle-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("b",{staticClass:"collapse-sign"},[e("em",{staticClass:"fal fa-angle-down"})])}],!1,null,null,null).exports,Navbar:(0,i.Z)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"page-header",attrs:{role:"banner"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"search"},[a("span",{staticStyle:{color:"red",display:"block"}},[t._v("Concesionario : "),a("span",{staticStyle:{color:"#425C79"}},[t._v(t._s(t.concesionario.nombre))])]),t._v(" "),t.tienda.nombre?a("span",{staticStyle:{color:"red"}},[t._v("Tienda : "),a("span",{staticStyle:{color:"#425C79"}},[t._v(t._s(t.tienda.nombre))])]):t._e()]),t._v(" "),a("div",{staticClass:"ml-auto d-flex"},[a("div",[a("a",{staticClass:"header-icon d-flex align-items-center justify-content-center ml-2",staticStyle:{height:"31px"},attrs:{href:"#","data-toggle":"dropdown",title:"Usuario"}},[a("i",{staticClass:"fas fa-user"}),t._v(" "+t._s(t.user.nombre)+"\n               ")]),t._v(" "),a("div",{staticClass:"dropdown-menu dropdown-menu-animated dropdown-lg"},[t._m(2),t._v(" "),a("div",{staticClass:"dropdown-divider m-0"}),t._v(" "),a("router-link",{staticClass:"dropdown-item fw-500 pt-2 pb-2",attrs:{to:"perfil"}},[a("span",[t._v("Perfil")])]),t._v(" "),a("div",{staticClass:"dropdown-divider m-0"}),t._v(" "),a("a",{staticClass:"dropdown-item fw-500 pt-2 pb-2",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.logout.apply(null,arguments)}}},[a("span",[t._v("Logout")])])],1)])])])}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hidden-md-down dropdown-icon-menu position-relative"},[a("a",{staticClass:"header-btn btn js-waves-off",attrs:{href:"#","data-action":"toggle","data-class":"nav-function-hidden",title:"Hide Navigation"}},[a("i",{staticClass:"ni ni-menu"})]),t._v(" "),a("ul",[a("li",[a("a",{staticClass:"btn js-waves-off",attrs:{href:"#","data-action":"toggle","data-class":"nav-function-minify",title:"Minify Navigation"}},[a("i",{staticClass:"ni ni-minify-nav"})])]),t._v(" "),a("li",[a("a",{staticClass:"btn js-waves-off",attrs:{href:"#","data-action":"toggle","data-class":"nav-function-fixed",title:"Lock Navigation"}},[a("i",{staticClass:"ni ni-lock-nav"})])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hidden-lg-up"},[e("a",{staticClass:"header-btn btn press-scale-down",attrs:{href:"#","data-action":"toggle","data-class":"mobile-nav-on"}},[e("i",{staticClass:"ni ni-menu"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dropdown-header bg-trans-gradient d-flex flex-row py-4 rounded-top"},[a("div",{staticClass:"d-flex flex-row align-items-center mt-1 mb-1 color-white"},[a("span",{staticClass:"mr-2"}),t._v(" "),a("div",{staticClass:"info-card-text"},[a("div",{staticClass:"fs-lg text-truncate text-truncate-lg"})])])])}],!1,null,null,null).exports},data:function(){return{user:null}},mounted:function(){this.init()},methods:{init:function(){var t,e=this;return(t=n().mark((function t(){var a;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=localStorage.getItem("access_token"),t.next=3,axios.get("api/getSession/"+a).then((function(t){e.user=t.data}));case 3:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(r,n){var s=t.apply(e,a);function i(t){c(s,r,n,i,o,"next",t)}function o(t){c(s,r,n,i,o,"throw",t)}i(void 0)}))})()}}};const v=(0,i.Z)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-wrapper"},[a("div",{staticClass:"page-inner"},[a("Sidebar",{attrs:{session:t.user}}),t._v(" "),a("div",{staticClass:"page-content-wrapper"},[a("Navbar",{attrs:{session:t.user}}),t._v(" "),a("router-view"),t._v(" "),a("div",{staticClass:"page-content-overlay",attrs:{"data-action":"toggle","data-class":"mobile-nav-on"}}),t._v(" "),a("footer",{staticClass:"page-footer",attrs:{role:"contentinfo"}})],1)],1)])}),[],!1,null,null,null).exports}}]);