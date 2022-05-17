"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_tienda_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/tienda.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/tienda.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Tienda",
  data: function data() {
    return {
      concesionarios: [],
      tiendas: [],
      datos: {
        concesionario_id: '',
        nombre: '',
        direccion: ''
      },
      id: '',
      titulo: '',
      btnCrear: false,
      btnEditar: false
    };
  },
  mounted: function mounted() {
    this.init();
  },
  methods: {
    init: function init() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var token;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                token = localStorage.getItem('access_token');
                _context.next = 3;
                return _this.axios.get('/api/tienda', {
                  withCredentials: true,
                  headers: {
                    Authorization: "Bearer ".concat(token)
                  }
                }).then(function (response) {
                  _this.tiendas = response.data.tiendas;
                  _this.concesionarios = response.data.concesionarios;
                })["catch"](function (error) {
                  console.log(error);
                });

              case 3:
                _context.next = 5;
                return _this.$tablaGlobal('#tablaListado');

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    crear: function crear() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var valid;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.validarCampos();

              case 2:
                valid = _context2.sent;

                if (valid) {
                  axios.post('api/tienda', _this2.datos).then(function (response) {
                    _this2.tienda.push(response.data);

                    $('#modalForm').modal('hide');

                    _this2.$swal.fire('Registro creado!', '', 'success');
                  })["catch"](function (error) {
                    console.log(error);
                  });
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    editar: function editar() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var valid;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this3.validarCampos();

              case 2:
                valid = _context3.sent;

                if (valid) {
                  axios.put('/api/tienda/' + _this3.id, _this3.datos).then(function (response) {
                    var index = _this3.tiendas.map(function (e) {
                      return e.id;
                    }).indexOf(_this3.id);

                    if (index !== -1) {
                      var tiendas = _this3.tiendas;
                      tiendas[index] = response.data;
                      _this3.tiendas = [].concat(tiendas);
                    }

                    _this3.id = '';
                    $('#modalForm').modal('hide');

                    _this3.$swal.fire('Registro editado!', '', 'success');
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
    borrar: function borrar(id) {
      var _this4 = this;

      this.$swal.fire({
        title: '¿Seguro de eliminar?',
        showDenyButton: true,
        confirmButtonText: 'Eliminar',
        denyButtonText: "Cancelar"
      }).then( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(result) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  if (result.isConfirmed) {
                    _this4.axios["delete"]("/api/tienda/".concat(id)).then(function (response) {
                      var index = _this4.tiendas.map(function (e) {
                        return e.id;
                      }).indexOf(id);

                      if (index !== -1) {
                        var tiendas = _this4.tiendas;
                        tiendas.splice(index, 1);
                        _this4.tiendas = [].concat(tiendas);
                      }

                      _this4.$swal.fire('Registro eliminado', '', 'success');
                    })["catch"](function (error) {
                      console.log(error);
                    });
                  }

                case 1:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    },
    abrirModalCrear: function abrirModalCrear() {
      this.datos.concesionario_id = 0;
      this.datos.nombre = '';
      this.datos.direccion = '';
      this.titulo = 'Crear Tienda';
      this.btnCrear = true;
      this.btnEditar = false;
      $('#modalForm').modal('show');
    },
    abrirModalEditar: function abrirModalEditar(datos) {
      this.datos.concesionario_id = datos.concesionario_id;
      this.datos.nombre = datos.nombre;
      this.datos.direccion = datos.direccion;
      this.titulo = 'Editar tienda';
      this.btnCrear = false;
      this.btnEditar = true;
      this.id = datos.id;
      $('#modalForm').modal('show');
    },
    validarCampos: function validarCampos() {
      if (!this.datos.nombre || !this.datos.concesionario_id || !this.datos.direccion) {
        this.$swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Completa los campos requeridos!'
        });
        return false;
      }

      return true;
    },
    cerrarModal: function cerrarModal() {
      $('#modalForm').modal('hide');
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/tienda.vue":
/*!***************************************!*\
  !*** ./resources/js/pages/tienda.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tienda_vue_vue_type_template_id_0e29f004___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tienda.vue?vue&type=template&id=0e29f004& */ "./resources/js/pages/tienda.vue?vue&type=template&id=0e29f004&");
/* harmony import */ var _tienda_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tienda.vue?vue&type=script&lang=js& */ "./resources/js/pages/tienda.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tienda_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tienda_vue_vue_type_template_id_0e29f004___WEBPACK_IMPORTED_MODULE_0__.render,
  _tienda_vue_vue_type_template_id_0e29f004___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/tienda.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/tienda.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/pages/tienda.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tienda_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./tienda.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/tienda.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tienda_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/tienda.vue?vue&type=template&id=0e29f004&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/tienda.vue?vue&type=template&id=0e29f004& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tienda_vue_vue_type_template_id_0e29f004___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tienda_vue_vue_type_template_id_0e29f004___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tienda_vue_vue_type_template_id_0e29f004___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./tienda.vue?vue&type=template&id=0e29f004& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/tienda.vue?vue&type=template&id=0e29f004&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/tienda.vue?vue&type=template&id=0e29f004&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/tienda.vue?vue&type=template&id=0e29f004& ***!
  \*************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "col-lg-12" }, [
        _c("div", { staticClass: "panel", attrs: { id: "panel-4" } }, [
          _c("div", { staticClass: "panel-container show" }, [
            _c("div", { staticClass: "panel-content" }, [
              _vm._m(1),
              _c("br"),
              _vm._v(" "),
              _c(
                "table",
                {
                  staticClass:
                    "table table-bordered table-hover table-striped w-100",
                  attrs: { id: "tablaListado" },
                },
                [
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.tiendas, function (tienda) {
                      return _c("tr", { key: tienda.id }, [
                        _c("td", [_vm._v(_vm._s(tienda.id))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(tienda.nombre))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(tienda.direccion))]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-warning",
                              on: {
                                click: function ($event) {
                                  return _vm.abrirModalEditar(tienda)
                                },
                              },
                            },
                            [_c("i", { staticClass: "far fa-edit" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger",
                              on: {
                                click: function ($event) {
                                  return _vm.borrar(tienda.id)
                                },
                              },
                            },
                            [_c("i", { staticClass: "fa fa-trash" })]
                          ),
                        ]),
                      ])
                    }),
                    0
                  ),
                ]
              ),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "modal fade", attrs: { id: "modalForm" } }, [
        _c("div", { staticClass: "modal-dialog modal-lg" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c("h5", { staticClass: "modal-title" }, [
                _c("i", { staticClass: "fa fa-user-plus" }),
                _vm._v(" " + _vm._s(_vm.titulo) + "\n                "),
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: {
                    type: "button",
                    "data-dismiss": "modal",
                    "aria-label": "Close",
                  },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.cerrarModal.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("span", { attrs: { "aria-hidden": "true" } }, [
                    _vm._v("×"),
                  ]),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("form", [
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "form-row" }, [
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", { attrs: { for: "Concesionario" } }, [
                      _vm._v("Concesionario"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.datos.concesionario_id,
                            expression: "datos.concesionario_id",
                          },
                        ],
                        staticClass: "browser-default custom-select",
                        attrs: { id: "Concesionario", disabled: _vm.btnEditar },
                        on: {
                          change: function ($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function (o) {
                                return o.selected
                              })
                              .map(function (o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.datos,
                              "concesionario_id",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          },
                        },
                      },
                      [
                        _c("option", [_vm._v("Seleccione una Concesionario")]),
                        _vm._v(" "),
                        _vm._l(_vm.concesionarios, function (concesionario) {
                          return _c(
                            "option",
                            {
                              key: concesionario.id + 11,
                              domProps: { value: concesionario.id },
                            },
                            [_vm._v(_vm._s(concesionario.nombre))]
                          )
                        }),
                      ],
                      2
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", { attrs: { for: "Nombre" } }, [
                      _vm._v("Nombre"),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.datos.nombre,
                          expression: "datos.nombre",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "Nombre",
                        placeholder: "Nombre",
                        required: "",
                      },
                      domProps: { value: _vm.datos.nombre },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.datos, "nombre", $event.target.value)
                        },
                      },
                    }),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-row" }, [
                  _c("div", { staticClass: "form-group col-md-12" }, [
                    _c("label", { attrs: { for: "Direccion" } }, [
                      _vm._v("Dirección"),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.datos.direccion,
                          expression: "datos.direccion",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "Direccion",
                        placeholder: "Direccion",
                      },
                      domProps: { value: _vm.datos.direccion },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.datos, "direccion", $event.target.value)
                        },
                      },
                    }),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger",
                    attrs: { type: "button", "data-dismiss": "modal" },
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        return _vm.cerrarModal.apply(null, arguments)
                      },
                    },
                  },
                  [_vm._v("Cerrar")]
                ),
                _vm._v(" "),
                _vm.btnCrear
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit" },
                        on: {
                          click: function ($event) {
                            $event.preventDefault()
                            return _vm.crear.apply(null, arguments)
                          },
                        },
                      },
                      [_vm._v("Crear")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.btnEditar
                  ? _c(
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
                      [_vm._v("Editar")]
                    )
                  : _vm._e(),
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
        _c("i", { attrs: { cwlass: "subheader-icon fal fa-chart-area" } }),
        _vm._v(" Tienda\n        "),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-hdr" }, [
      _c("button", { staticClass: "btn btn-success" }, [_vm._v("Nuevo")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "bg-warning-200" }, [
      _c("tr", [
        _c("th", [_vm._v("Id")]),
        _vm._v(" "),
        _c("th", [_vm._v("Nombre")]),
        _vm._v(" "),
        _c("th", [_vm._v("Dirección")]),
        _vm._v(" "),
        _c("th", [_vm._v("Acciones")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);