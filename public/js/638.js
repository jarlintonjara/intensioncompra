(self.webpackChunk=self.webpackChunk||[]).push([[638],{7757:(t,e,o)=>{t.exports=o(5666)},5666:t=>{var e=function(t){"use strict";var e,o=Object.prototype,r=o.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},n=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,o){return Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,o){return t[e]=o}}function c(t,e,o,r){var a=e&&e.prototype instanceof h?e:h,n=Object.create(a.prototype),i=new N(r||[]);return n._invoke=function(t,e,o){var r=u;return function(a,n){if(r===p)throw new Error("Generator is already running");if(r===m){if("throw"===a)throw n;return T()}for(o.method=a,o.arg=n;;){var i=o.delegate;if(i){var s=L(i,o);if(s){if(s===v)continue;return s}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(r===u)throw r=m,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);r=p;var l=d(t,e,o);if("normal"===l.type){if(r=o.done?m:f,l.arg===v)continue;return{value:l.arg,done:o.done}}"throw"===l.type&&(r=m,o.method="throw",o.arg=l.arg)}}}(t,o,i),n}function d(t,e,o){try{return{type:"normal",arg:t.call(e,o)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var u="suspendedStart",f="suspendedYield",p="executing",m="completed",v={};function h(){}function _(){}function g(){}var b={};l(b,n,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(P([])));w&&w!==o&&r.call(w,n)&&(b=w);var C=g.prototype=h.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function o(a,n,i,s){var l=d(t[a],t,n);if("throw"!==l.type){var c=l.arg,u=c.value;return u&&"object"==typeof u&&r.call(u,"__await")?e.resolve(u.__await).then((function(t){o("next",t,i,s)}),(function(t){o("throw",t,i,s)})):e.resolve(u).then((function(t){c.value=t,i(c)}),(function(t){return o("throw",t,i,s)}))}s(l.arg)}var a;this._invoke=function(t,r){function n(){return new e((function(e,a){o(t,r,e,a)}))}return a=a?a.then(n,n):n()}}function L(t,o){var r=t.iterator[o.method];if(r===e){if(o.delegate=null,"throw"===o.method){if(t.iterator.return&&(o.method="return",o.arg=e,L(t,o),"throw"===o.method))return v;o.method="throw",o.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=d(r,t.iterator,o.arg);if("throw"===a.type)return o.method="throw",o.arg=a.arg,o.delegate=null,v;var n=a.arg;return n?n.done?(o[t.resultName]=n.value,o.next=t.nextLoc,"return"!==o.method&&(o.method="next",o.arg=e),o.delegate=null,v):n:(o.method="throw",o.arg=new TypeError("iterator result is not an object"),o.delegate=null,v)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(t){if(t){var o=t[n];if(o)return o.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function o(){for(;++a<t.length;)if(r.call(t,a))return o.value=t[a],o.done=!1,o;return o.value=e,o.done=!0,o};return i.next=i}}return{next:T}}function T(){return{value:e,done:!0}}return _.prototype=g,l(C,"constructor",g),l(g,"constructor",_),_.displayName=l(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,s,"GeneratorFunction")),t.prototype=Object.create(C),t},t.awrap=function(t){return{__await:t}},x(E.prototype),l(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,o,r,a,n){void 0===n&&(n=Promise);var i=new E(c(e,o,r,a),n);return t.isGeneratorFunction(o)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(C),l(C,s,"Generator"),l(C,n,(function(){return this})),l(C,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var o in t)e.push(o);return e.reverse(),function o(){for(;e.length;){var r=e.pop();if(r in t)return o.value=r,o.done=!1,o}return o.done=!0,o}},t.values=P,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach($),!t)for(var o in this)"t"===o.charAt(0)&&r.call(this,o)&&!isNaN(+o.slice(1))&&(this[o]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var o=this;function a(r,a){return s.type="throw",s.arg=t,o.next=r,a&&(o.method="next",o.arg=e),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var n=a;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=e&&e<=n.finallyLoc&&(n=null);var i=n?n.completion:{};return i.type=t,i.arg=e,n?(this.method="next",this.next=n.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),$(o),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc===t){var r=o.completion;if("throw"===r.type){var a=r.arg;$(o)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,o,r){return this.delegate={iterator:P(t),resultName:o,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},9638:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>c});var r=o(7757),a=o.n(r);function n(t,e,o,r,a,n,i){try{var s=t[n](i),l=s.value}catch(t){return void o(t)}s.done?e(l):Promise.resolve(l).then(r,a)}function i(t){return function(){var e=this,o=arguments;return new Promise((function(r,a){var i=t.apply(e,o);function s(t){n(i,r,a,s,l,"next",t)}function l(t){n(i,r,a,s,l,"throw",t)}s(void 0)}))}}const s={name:"Usuario",data:function(){return{users:[],roles:[],concesionarios:[],tiendas:[],tiendasFilter:[],datos:{nombre:"",apellido:"",concesionario_id:0,tienda_id:0,documento:"",email:"",role_id:"",telefono:"",usuario:"",password:"",password_confirmation:""},titulo:"",btnCrear:!1,btnEditar:!1,id:""}},mounted:function(){this.init()},watch:{"datos.concesionario_id":function(t){if(t){var e=this.tiendas.filter((function(e){return e.concesionario_id==t}));this.tiendasFilter=[].concat(e),this.datos.tienda_id=this.datos.tienda_id?this.datos.tienda_id:""}}},methods:{init:function(){var t=this;return i(a().mark((function e(){var o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=localStorage.getItem("access_token"),e.next=3,t.axios.get("/api/usuario",{withCredentials:!0,headers:{Authorization:"Bearer ".concat(o)}}).then((function(e){t.users=e.data.users,t.roles=e.data.roles,t.concesionarios=e.data.concesionarios,t.tiendas=e.data.tiendas})).catch((function(t){console.log(t)}));case 3:return e.next=5,t.$tablaGlobal("#tablaListado");case 5:case"end":return e.stop()}}),e)})))()},validarCampos:function(){return!!(this.datos.nombre&&this.datos.apellido&&this.datos.role_id&&this.datos.concesionario_id&&this.datos.tienda_id&&this.datos.usuario)||(this.$swal.fire({icon:"error",title:"Error",text:"Completa los campos requeridos!"}),!1)},crear:function(){var t=this;return i(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.validarCampos();case 2:e.sent&&axios.post("api/usuario",t.datos).then((function(e){t.users.push(e.data),$("#modalForm").modal("hide"),t.$swal.fire("Registro creado!","","success")})).catch((function(t){console.log(t)}));case 4:case"end":return e.stop()}}),e)})))()},editar:function(){var t=this;return i(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.validarCampos();case 2:e.sent&&axios.put("/api/usuario/"+t.id,t.datos).then((function(e){var o=t.users.map((function(t){return t.id})).indexOf(t.id);if(-1!==o){var r=t.users;r[o]=e.data,t.users=[].concat(r)}t.id="",$("#modalForm").modal("hide"),t.$swal.fire("Registro editado!","","success")})).catch((function(t){console.log(t)}));case 4:case"end":return e.stop()}}),e)})))()},borrar:function(t){var e=this;this.$swal.fire({title:"¿Seguro de eliminar?",showDenyButton:!0,confirmButtonText:"Eliminar",denyButtonText:"Cancelar"}).then(function(){var o=i(a().mark((function o(r){return a().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:r.isConfirmed&&e.axios.delete("/api/usuario/".concat(t)).then((function(o){var r=e.users.map((function(t){return t.id})).indexOf(t);if(-1!==r){var a=e.users;a.splice(r,1),e.users=[].concat(a)}e.$swal.fire("Registro eliminado","","success")})).catch((function(t){console.log(t)}));case 1:case"end":return o.stop()}}),o)})));return function(t){return o.apply(this,arguments)}}())},abrirModalCrear:function(){this.datos.nombre="",this.datos.apellido="",this.datos.concesionario_id="",this.datos.tienda_id="",this.datos.documento="",this.datos.email="",this.datos.role_id="",this.datos.telefono="",this.datos.usuario="",this.datos.password="",this.datos.password_confirmation="",this.titulo="Crear usuario",this.btnCrear=!0,this.btnEditar=!1,$("#modalForm").modal("show")},abrirModalEditar:function(t){this.tiendasFilter=[].concat(this.tiendas),this.titulo=" Editar usuario",this.datos.nombre=t.nombre,this.datos.apellido=t.apellido,this.datos.documento=t.documento,this.datos.email=t.email,this.datos.role_id=t.role_id,this.datos.tienda_id=t.tienda_id,this.datos.concesionario_id=t.concesionario_id,this.datos.usuario=t.usuario,this.btnCrear=!1,this.btnEditar=!0,this.id=t.id,$("#modalForm").modal("show")},cerrarModal:function(){$("#modalForm").modal("hide")}}},l=s;const c=(0,o(1900).Z)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",{staticClass:"page-content",attrs:{id:"js-page-content",role:"main"}},[t._m(0),t._v(" "),o("div",{staticClass:"col-lg-12"},[o("div",{staticClass:"panel",attrs:{id:"panel-4"}},[o("div",{staticClass:"panel-container show"},[o("div",{staticClass:"panel-content"},[o("div",{staticClass:"panel-hdr"},[o("button",{staticClass:"btn btn-success",on:{click:t.abrirModalCrear}},[t._v("Nuevo")])]),o("br"),t._v(" "),o("table",{staticClass:"table table-bordered table-hover table-striped w-100",attrs:{id:"tablaListado"}},[t._m(1),t._v(" "),o("tbody",t._l(t.users,(function(e){return o("tr",{key:e.id},[o("td",[t._v(t._s(e.nombre+" "+(null!=e.apellido?e.apellido:"")))]),t._v(" "),o("td",[t._v(t._s(e.tienda.nombre))]),t._v(" "),o("td",[t._v(t._s(e.role.descripcion))]),t._v(" "),o("td",[t._v(t._s(e.documento))]),t._v(" "),o("td",[o("button",{staticClass:"btn btn-warning",on:{click:function(o){return t.abrirModalEditar(e)}}},[o("i",{staticClass:"far fa-edit"})]),t._v(" "),o("button",{staticClass:"btn btn-danger",on:{click:function(o){return t.borrar(e.id)}}},[o("i",{staticClass:"fa fa-trash"})])])])})),0)])])])])]),t._v(" "),o("div",{staticClass:"modal fade",attrs:{id:"modalForm"}},[o("div",{staticClass:"modal-dialog modal-lg"},[o("div",{staticClass:"modal-content"},[o("div",{staticClass:"modal-header"},[o("h5",{staticClass:"modal-title"},[o("i",{staticClass:"fa fa-user-plus"}),t._v(" "+t._s(t.titulo)+"\n                ")]),t._v(" "),o("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return e.preventDefault(),t.cerrarModal.apply(null,arguments)}}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),o("form",{attrs:{autocomplete:"off"}},[o("div",{staticClass:"modal-body"},[o("div",{staticClass:"form-row"},[o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"Nombres"}},[t._v("Nombres")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.datos.nombre,expression:"datos.nombre"}],staticClass:"form-control",attrs:{type:"text",id:"Nombres"},domProps:{value:t.datos.nombre},on:{input:function(e){e.target.composing||t.$set(t.datos,"nombre",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"Apellidos"}},[t._v("Apellidos")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.datos.apellido,expression:"datos.apellido"}],staticClass:"form-control",attrs:{type:"text",id:"Apellidos"},domProps:{value:t.datos.apellido},on:{input:function(e){e.target.composing||t.$set(t.datos,"apellido",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"form-row"},[o("div",{staticClass:"form-group col-md-4"},[o("label",{attrs:{for:"Documento"}},[t._v("Documento")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.datos.documento,expression:"datos.documento"}],staticClass:"form-control",attrs:{type:"text",id:"Documento"},domProps:{value:t.datos.documento},on:{input:function(e){e.target.composing||t.$set(t.datos,"documento",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group col-md-4"},[o("label",{attrs:{for:"Telefono"}},[t._v("Telefono")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.datos.telefono,expression:"datos.telefono"}],staticClass:"form-control",attrs:{type:"text",id:"Telefono"},domProps:{value:t.datos.telefono},on:{input:function(e){e.target.composing||t.$set(t.datos,"telefono",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group col-md-4"},[o("label",{attrs:{for:"Email"}},[t._v("Email")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.datos.email,expression:"datos.email"}],staticClass:"form-control",attrs:{type:"email",id:"Email"},domProps:{value:t.datos.email},on:{input:function(e){e.target.composing||t.$set(t.datos,"email",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"form-row"},[o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"Concesionario"}},[t._v("Concesionario")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.datos.concesionario_id,expression:"datos.concesionario_id"}],staticClass:"browser-default custom-select",attrs:{id:"Concesionario",disabled:t.btnEditar},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.datos,"concesionario_id",e.target.multiple?o:o[0])}}},[o("option",[t._v("Seleccione una Concesionario")]),t._v(" "),t._l(t.concesionarios,(function(e){return o("option",{key:e.id+11,domProps:{value:e.id}},[t._v(t._s(e.nombre))])}))],2)]),t._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"Tienda"}},[t._v("Tienda")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.datos.tienda_id,expression:"datos.tienda_id"}],staticClass:"browser-default custom-select",attrs:{id:"Tienda",disabled:t.btnEditar},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.datos,"tienda_id",e.target.multiple?o:o[0])}}},[o("option",[t._v("Seleccione una Tienda")]),t._v(" "),t._l(t.tiendasFilter,(function(e){return o("option",{key:e.id+22,domProps:{value:e.id}},[t._v(t._s(e.nombre))])}))],2)])]),t._v(" "),o("div",{staticClass:"form-row"},[o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"Role"}},[t._v("Rol")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.datos.role_id,expression:"datos.role_id"}],staticClass:"browser-default custom-select",attrs:{id:"Perfil",disabled:t.btnEditar},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.datos,"role_id",e.target.multiple?o:o[0])}}},[o("option",[t._v("Seleccione un rol")]),t._v(" "),t._l(t.roles,(function(e){return o("option",{key:e.id+33,domProps:{value:e.id}},[t._v(t._s(e.nombre))])}))],2)]),t._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"usuario"}},[t._v("Usuario")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.datos.usuario,expression:"datos.usuario"}],staticClass:"form-control",attrs:{type:"text",id:"usuario",disabled:t.btnEditar},domProps:{value:t.datos.usuario},on:{input:function(e){e.target.composing||t.$set(t.datos,"usuario",e.target.value)}}})])]),t._v(" "),t.btnEditar?t._e():o("div",{staticClass:"form-row"},[o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"password"}},[t._v("Contraseña ")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.datos.password,expression:"datos.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"ejem: ventas..",autocomplete:"new-password"},domProps:{value:t.datos.password},on:{input:function(e){e.target.composing||t.$set(t.datos,"password",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"password_confirmation"}},[t._v("Confirmar contraseña")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.datos.password_confirmation,expression:"datos.password_confirmation"}],staticClass:"form-control",attrs:{type:"password",id:"password_confirmation",autocomplete:"new-password2"},domProps:{value:t.datos.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.datos,"password_confirmation",e.target.value)}}})])])]),t._v(" "),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return e.preventDefault(),t.cerrarModal.apply(null,arguments)}}},[t._v("Cerrar")]),t._v(" "),t.btnCrear?o("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.crear.apply(null,arguments)}}},[t._v("Crear")]):t._e(),t._v(" "),t.btnEditar?o("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.editar.apply(null,arguments)}}},[t._v("Editar")]):t._e()])])])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"subheader"},[o("h1",{staticClass:"subheader-title"},[o("i",{staticClass:"subheader-icon fal fa-chart-area"}),t._v(" Usuarios \n        ")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",{staticClass:"bg-warning-200"},[o("tr",[o("th",[t._v("Nombre Completo")]),t._v(" "),o("th",[t._v("Tienda")]),t._v(" "),o("th",[t._v("Rol")]),t._v(" "),o("th",[t._v("Documento")]),t._v(" "),o("th",[t._v("Acciones")])])])}],!1,null,null,null).exports}}]);