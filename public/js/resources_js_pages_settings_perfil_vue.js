"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_settings_perfil_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/perfil.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/perfil.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Perfil",
  data: function data() {
    return {
      session: null,
      datosUsuario: {
        nombre: '',
        apellido: '',
        documento: '',
        email: '',
        cargo: '',
        area: '',
        telefono: ''
      },
      datos: {
        password: '',
        password_confirmation: ''
      }
    };
  },
  mounted: function () {
    var _mounted = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.init();

            case 2:
              this.datosUsuario.nombre = this.session.nombre;
              this.datosUsuario.apellido = this.session.apellido;
              this.datosUsuario.documento = this.session.documento;
              this.datosUsuario.email = this.session.email;
              this.datosUsuario.cargo = this.session.cargo;
              this.datosUsuario.area = this.session.area;
              this.datosUsuario.telefono = this.session.telefono;

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _mounted.apply(this, arguments);
    }

    return mounted;
  }(),
  methods: {
    init: function init() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var token;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                token = localStorage.getItem('access_token');
                _context2.next = 3;
                return axios.get('api/getSession/' + token).then(function (res) {
                  var user = res.data;
                  _this.session = user;
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    validarCampos: function validarCampos() {
      if (!this.datosUsuario.nombre || !this.datosUsuario.apellido || !this.datosUsuario.email) {
        this.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Completa los campos requeridos!'
        });
        return false;
      }

      return true;
    },
    editar: function editar() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var valid;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this2.validarCampos();

              case 2:
                valid = _context3.sent;

                if (valid) {
                  axios.put('/api/updateProfile/' + _this2.session.id, _this2.datosUsuario).then(function (response) {
                    console.log(response);

                    _this2.$swal.fire('Se guardo correctamente!', '', 'success');
                  })["catch"](function (error) {
                    console.log(error);
                  });
                }

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    editarPassword: function editarPassword() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(_this3.datos.password !== _this3.datos.password_confirmation)) {
                  _context4.next = 3;
                  break;
                }

                _this3.$swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Las contraseñas no son iguales!'
                });

                return _context4.abrupt("return", false);

              case 3:
                _context4.next = 5;
                return axios.put('/api/updateProfile/' + _this3.session.id, _this3.datos).then(function (response) {
                  console.log(response);

                  _this3.$swal.fire('Se guardo correctamente!', '', 'success');
                })["catch"](function (error) {
                  console.log(error);
                });

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/settings/perfil.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/settings/perfil.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _perfil_vue_vue_type_template_id_3310c6df___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil.vue?vue&type=template&id=3310c6df& */ "./resources/js/pages/settings/perfil.vue?vue&type=template&id=3310c6df&");
/* harmony import */ var _perfil_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.vue?vue&type=script&lang=js& */ "./resources/js/pages/settings/perfil.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _perfil_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _perfil_vue_vue_type_template_id_3310c6df___WEBPACK_IMPORTED_MODULE_0__.render,
  _perfil_vue_vue_type_template_id_3310c6df___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/settings/perfil.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/settings/perfil.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/settings/perfil.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_perfil_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./perfil.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/perfil.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_perfil_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/settings/perfil.vue?vue&type=template&id=3310c6df&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/settings/perfil.vue?vue&type=template&id=3310c6df& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_perfil_vue_vue_type_template_id_3310c6df___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_perfil_vue_vue_type_template_id_3310c6df___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_perfil_vue_vue_type_template_id_3310c6df___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./perfil.vue?vue&type=template&id=3310c6df& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/perfil.vue?vue&type=template&id=3310c6df&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/perfil.vue?vue&type=template&id=3310c6df&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/perfil.vue?vue&type=template&id=3310c6df& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "main",
    {
      staticClass: "page-content",
      attrs: { id: "js-page-content", role: "main" },
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-12" }, [
        _c("div", { staticClass: "panel", attrs: { id: "panel-4" } }, [
          _c("div", { staticClass: "panel-container show" }, [
            _c("div", { staticClass: "panel-content" }, [
              _c("form", [
                _c("div", { staticClass: "form-row" }, [
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", { attrs: { for: "Nombres" } }, [
                      _vm._v("Nombres"),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.datosUsuario.nombre,
                          expression: "datosUsuario.nombre",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "Nombres",
                        placeholder: "Nombres",
                        required: "",
                      },
                      domProps: { value: _vm.datosUsuario.nombre },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.datosUsuario,
                            "nombre",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", { attrs: { for: "Apellidos" } }, [
                      _vm._v("Apellidos"),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.datosUsuario.apellido,
                          expression: "datosUsuario.apellido",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "Apellidos",
                        placeholder: "Apellidos",
                        required: "",
                      },
                      domProps: { value: _vm.datosUsuario.apellido },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.datosUsuario,
                            "apellido",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-row" }, [
                  _c("div", { staticClass: "form-group col-md-4" }, [
                    _c("label", { attrs: { for: "Documento" } }, [
                      _vm._v("Documento"),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.datosUsuario.documento,
                          expression: "datosUsuario.documento",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "Documento",
                        placeholder: "Documento",
                      },
                      domProps: { value: _vm.datosUsuario.documento },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.datosUsuario,
                            "documento",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-4" }, [
                    _c("label", { attrs: { for: "Telefono" } }, [
                      _vm._v("Telefono"),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.datosUsuario.telefono,
                          expression: "datosUsuario.telefono",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "Telefono",
                        placeholder: "Documento",
                      },
                      domProps: { value: _vm.datosUsuario.telefono },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.datosUsuario,
                            "telefono",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-4" }, [
                    _c("label", { attrs: { for: "Email" } }, [_vm._v("Email")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.datosUsuario.email,
                          expression: "datosUsuario.email",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "email",
                        id: "Email",
                        placeholder: "Email",
                      },
                      domProps: { value: _vm.datosUsuario.email },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.datosUsuario,
                            "email",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-row" }, [
                  _c("div", { staticClass: "form-group col-md-4" }, [
                    _c("label", { attrs: { for: "Cargo" } }, [_vm._v("Cargo")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.datosUsuario.cargo,
                          expression: "datosUsuario.cargo",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "Cargo",
                        placeholder: "Cargo",
                      },
                      domProps: { value: _vm.datosUsuario.cargo },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.datosUsuario,
                            "cargo",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-4" }, [
                    _c("label", { attrs: { for: "Area" } }, [_vm._v("Area")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.datosUsuario.area,
                          expression: "datosUsuario.area",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: "Area", placeholder: "Area" },
                      domProps: { value: _vm.datosUsuario.area },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.datosUsuario,
                            "area",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.editar.apply(null, arguments)
                        },
                      },
                    },
                    [_vm._v("Guardar datos")]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("form", [
                _c("div", { staticClass: "form-row" }, [
                  _c("div", { staticClass: "form-group col-md-4" }, [
                    _c("label", { attrs: { for: "password" } }, [
                      _vm._v("Nueva Contraseña"),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.datos.password,
                          expression: "datos.password",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "passsword",
                        id: "password",
                        placeholder: "nueva contraseña",
                      },
                      domProps: { value: _vm.datos.password },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.datos, "password", $event.target.value)
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-4" }, [
                    _c("label", { attrs: { for: "password_confirmation" } }, [
                      _vm._v("Confirmar contraseña"),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.datos.password_confirmation,
                          expression: "datos.password_confirmation",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "passsword",
                        id: "password_confirmation",
                        placeholder: "confirmar password",
                      },
                      domProps: { value: _vm.datos.password_confirmation },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.datos,
                            "password_confirmation",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.editarPassword.apply(null, arguments)
                        },
                      },
                    },
                    [_vm._v("Cambiar contraseña")]
                  ),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "subheader" }, [
      _c("h1", { staticClass: "subheader-title" }, [
        _c("i", { staticClass: "subheader-icon fal fa-chart-area" }),
        _vm._v(" Perfil \n     \n        "),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);