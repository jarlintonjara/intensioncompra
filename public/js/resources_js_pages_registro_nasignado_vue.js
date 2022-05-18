"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_registro_nasignado_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/registro/nasignado.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/registro/nasignado.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils.js */ "./resources/js/utils.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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
  data: function data() {
    return {
      noasignados: [],
      user: null,
      registro: {
        nombreCompleto: "",
        documento: "",
        email: "",
        celular: "",
        usuarioNombre: "",
        usuarioEmail: "",
        tienda: "",
        concesionario: "",
        marca: "",
        modelo: "",
        version: "",
        anio_modelo: "",
        anio_fabricacion: "",
        color1: "",
        color2: "",
        color3: ""
      }
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
                return axios.get('api/getSession/' + token).then(function (res) {
                  _this.user = res.data;
                });

              case 3:
                _context.next = 5;
                return _this.axios.get('/api/registro', {
                  withCredentials: true,
                  headers: {
                    Authorization: "Bearer ".concat(token)
                  }
                }).then(function (response) {
                  _this.noasignados = response.data.noasignados;
                })["catch"](function (error) {
                  console.log(error);
                });

              case 5:
                _this.$tablaGlobal('#tnoasignado');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    detalle: function detalle(datos) {
      this.registro.nombreCompleto = datos.nombre_completo;
      this.registro.documento = datos.documento;
      this.registro.email = datos.correo;
      this.registro.celular = datos.celular;
      this.registro.usuarioNombre = datos.nombre + " " + (datos.apellido ? datos.apellido : " ");
      this.registro.usuarioEmail = datos.email;
      this.registro.tienda = datos.tienda;
      this.registro.concesionario = datos.concesionario;
      this.registro.marca = datos.marca;
      this.registro.modelo = datos.modelo;
      this.registro.version = datos.version;
      this.registro.anio_modelo = datos.anio_modelo;
      this.registro.color1 = datos.color1;
      this.registro.color2 = datos.color2;
      this.registro.color3 = datos.color3;
      $('#modalForm').modal('show');
    },
    borrar: function borrar(id) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this2.$swal.fire({
                  title: '¿Seguro de eliminar?',
                  showDenyButton: true,
                  confirmButtonText: 'Eliminar',
                  denyButtonText: "Cancelar"
                }).then( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(result) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (!result.isConfirmed) {
                              _context2.next = 3;
                              break;
                            }

                            _context2.next = 3;
                            return _this2.axios["delete"]("/api/registro/".concat(id)).then(function (response) {
                              var index = _this2.noasignados.map(function (e) {
                                return e.id;
                              }).indexOf(id);

                              if (index !== -1) {
                                var noasignados = _this2.noasignados;
                                noasignados.splice(index, 1);
                                _this2.noasignados = [].concat(noasignados);
                              }

                              _this2.$swal.fire('Registro eliminado', '', 'success');
                            })["catch"](function (error) {
                              console.log(error);
                            });

                          case 3:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    ReporteExcel: function ReporteExcel() {
      //e.preventDefault();
      var dataExcel = [];
      this.noasignados.map(function (e) {
        var _dataExcel$push;

        dataExcel.push((_dataExcel$push = {}, _defineProperty(_dataExcel$push, 'ID', e.id), _defineProperty(_dataExcel$push, 'Concesionario', e.concesionario), _defineProperty(_dataExcel$push, 'Tienda', e.tienda), _defineProperty(_dataExcel$push, 'Nombre Completo', e.nombre_completo), _defineProperty(_dataExcel$push, 'Documento', e.documento), _defineProperty(_dataExcel$push, 'Celular', e.celular), _defineProperty(_dataExcel$push, 'Marca', e.marca), _defineProperty(_dataExcel$push, 'Modelo', e.modelo), _defineProperty(_dataExcel$push, 'Version', e.version), _defineProperty(_dataExcel$push, 'Año modelo', e.anio_modelo), _defineProperty(_dataExcel$push, 'Color 1', e.color1), _defineProperty(_dataExcel$push, 'Color 2', e.color2), _defineProperty(_dataExcel$push, 'Color 3', e.color3), _defineProperty(_dataExcel$push, 'Asesor', e.nombre + (e.apellido ? e.apellido : '')), _defineProperty(_dataExcel$push, 'Fecha actualizada', e.fecha), _defineProperty(_dataExcel$push, 'Fecha creación', e.created_at), _dataExcel$push));
      });
      var dataSend = {
        data: {
          "Report": dataExcel
        },
        name: ['Reporte'],
        filename: 'Registros.xlsx',
        vacios: [[]]
      };
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.ExpExcel)(dataExcel, "Registros.xlsx", dataSend.name, dataSend.vacios);
    },
    cerrarModal: function cerrarModal() {
      $('#modalForm').modal('hide');
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/registro/nasignado.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/registro/nasignado.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nasignado_vue_vue_type_template_id_5e96c1ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nasignado.vue?vue&type=template&id=5e96c1ee& */ "./resources/js/pages/registro/nasignado.vue?vue&type=template&id=5e96c1ee&");
/* harmony import */ var _nasignado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nasignado.vue?vue&type=script&lang=js& */ "./resources/js/pages/registro/nasignado.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _nasignado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nasignado_vue_vue_type_template_id_5e96c1ee___WEBPACK_IMPORTED_MODULE_0__.render,
  _nasignado_vue_vue_type_template_id_5e96c1ee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/registro/nasignado.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/registro/nasignado.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/registro/nasignado.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nasignado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./nasignado.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/registro/nasignado.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nasignado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/registro/nasignado.vue?vue&type=template&id=5e96c1ee&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/registro/nasignado.vue?vue&type=template&id=5e96c1ee& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nasignado_vue_vue_type_template_id_5e96c1ee___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nasignado_vue_vue_type_template_id_5e96c1ee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nasignado_vue_vue_type_template_id_5e96c1ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./nasignado.vue?vue&type=template&id=5e96c1ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/registro/nasignado.vue?vue&type=template&id=5e96c1ee&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/registro/nasignado.vue?vue&type=template&id=5e96c1ee&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/registro/nasignado.vue?vue&type=template&id=5e96c1ee& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
              _c("div", { staticClass: "row mb-2" }, [
                _c("div", { staticClass: "col-md-2" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.ReporteExcel.apply(null, arguments)
                        },
                      },
                    },
                    [
                      _c("i", { staticClass: "fa fa-file-excel" }),
                      _vm._v(" Reporte"),
                    ]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "table",
                {
                  staticClass:
                    "table table-bordered table-hover table-striped table-responsive w-100",
                  attrs: { id: "tnoasignado", translate: "no" },
                },
                [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.noasignados, function (noasignado) {
                      return _c("tr", { key: noasignado.id }, [
                        _c(
                          "td",
                          {
                            staticStyle: {
                              "text-align": "center",
                              display: "flex",
                            },
                          },
                          [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-warning",
                                on: {
                                  click: function ($event) {
                                    return _vm.detalle(noasignado)
                                  },
                                },
                              },
                              [_c("i", { staticClass: "fa fa-list" })]
                            ),
                            _vm._v(" "),
                            _vm.user.role_id == 6 || _vm.user.role_id == 1
                              ? _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-danger",
                                    on: {
                                      click: function ($event) {
                                        return _vm.borrar(noasignado.id)
                                      },
                                    },
                                  },
                                  [_c("i", { staticClass: "fa fa-trash" })]
                                )
                              : _vm._e(),
                          ]
                        ),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(noasignado.concesionario))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(noasignado.tienda))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(noasignado.nombre))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(noasignado.nombre_completo))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(noasignado.documento))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(noasignado.celular))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(noasignado.marca))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(noasignado.modelo))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(noasignado.version))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(noasignado.anio_modelo))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(noasignado.color1))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(noasignado.color2))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(noasignado.color3))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(noasignado.fecha ? noasignado.fecha : "")
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
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "modalForm",
            tabindex: "-1",
            role: "dialog",
            "aria-hidden": "true",
          },
        },
        [
          _c("div", { staticClass: "modal-dialog modal-lg" }, [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c("h5", { staticClass: "modal-title h4" }, [
                  _vm._v("Detalle de registro"),
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
                        return _vm.cerrarModal()
                      },
                    },
                  },
                  [_vm._m(2)]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "card mb-5" }, [
                  _c("div", { staticClass: "card-body p-3" }, [
                    _c("h5", { staticClass: "text-danger" }, [
                      _vm._v(
                        "\n                                Cliente\n                                "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-3" }, [
                          _vm._v("Nombre Completo:"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("b", [
                            _vm._v(_vm._s(_vm.registro.nombreCompleto)),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _vm._v("Documento:"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("b", [_vm._v(_vm._s(_vm.registro.documento))]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row mt-2" }, [
                        _c("div", { staticClass: "col-md-3" }, [
                          _vm._v("Celular:"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("b", [_vm._v(_vm._s(_vm.registro.celular))]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _vm._v("Email:"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("b", [_vm._v(_vm._s(_vm.registro.email))]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card mb-g" }, [
                  _c("div", { staticClass: "card-body p-3" }, [
                    _c("h5", { staticClass: "text-danger" }, [
                      _vm._v(
                        "\n                                Ejecutivo\n                            "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-3" }, [
                          _vm._v("Nombre Completo:"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("b", [_vm._v(_vm._s(_vm.registro.usuarioNombre))]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _vm._v("Tienda:"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("b", [_vm._v(_vm._s(_vm.registro.tienda))]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row mt-2" }, [
                        _c("div", { staticClass: "col-md-3" }, [
                          _vm._v("Email:"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("b", [_vm._v(_vm._s(_vm.registro.usuarioEmail))]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _vm._v("Concesionario:"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("b", [_vm._v(_vm._s(_vm.registro.concesionario))]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card mb-g" }, [
                  _c("div", { staticClass: "card-body p-3" }, [
                    _c("h5", { staticClass: "text-danger" }, [
                      _vm._v(
                        "\n                                Detalle de la Unidad\n                            "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-3" }, [
                          _vm._v("Marca:"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("b", [_vm._v(_vm._s(_vm.registro.marca))]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _vm._v("Versión:"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("b", [_vm._v(_vm._s(_vm.registro.version))]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row mt-2" }, [
                        _c("div", { staticClass: "col-md-3" }, [
                          _vm._v("Modelo:"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("b", [_vm._v(_vm._s(_vm.registro.modelo))]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _vm._v("Año Modelo:"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("b", [_vm._v(_vm._s(_vm.registro.anio_modelo))]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row mt-2" }, [
                        _c("div", { staticClass: "col-md-3" }, [
                          _vm._v("Año Fabricación:"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("b", [
                            _vm._v(_vm._s(_vm.registro.anio_fabricacion)),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _vm._v("Color 1:"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("b", [_vm._v(_vm._s(_vm.registro.color1))]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row mt-2" }, [
                        _c("div", { staticClass: "col-md-3" }, [
                          _vm._v("Color 2:"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("b", [_vm._v(_vm._s(_vm.registro.color2))]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _vm._v("Color 3:"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("b", [_vm._v(_vm._s(_vm.registro.color3))]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary",
                    attrs: { type: "button", "data-dismiss": "modal" },
                    on: {
                      click: function ($event) {
                        return _vm.cerrarModal()
                      },
                    },
                  },
                  [_vm._v("Close")]
                ),
              ]),
            ]),
          ]),
        ]
      ),
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
        _c("i", { staticClass: "subheader-icon fal fa-list" }),
        _vm._v(" "),
        _c("span", { staticClass: "fw-300" }, [_vm._v("Registros")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ACCIONES")]),
        _vm._v(" "),
        _c("th", [_vm._v("CONCESIONARIO")]),
        _vm._v(" "),
        _c("th", [_vm._v("TIENDA")]),
        _vm._v(" "),
        _c("th", [_vm._v("ASESOR")]),
        _vm._v(" "),
        _c("th", [_vm._v("NOMBRE COMPLETO")]),
        _vm._v(" "),
        _c("th", [_vm._v("DOCUMENTO")]),
        _vm._v(" "),
        _c("th", [_vm._v("CELULAR")]),
        _vm._v(" "),
        _c("th", [_vm._v("MARCA")]),
        _vm._v(" "),
        _c("th", [_vm._v("MODELO")]),
        _vm._v(" "),
        _c("th", [_vm._v("VERSION")]),
        _vm._v(" "),
        _c("th", [_vm._v("AÑO MODELO")]),
        _vm._v(" "),
        _c("th", [_vm._v("COLOR 1")]),
        _vm._v(" "),
        _c("th", [_vm._v("COLOR 2")]),
        _vm._v(" "),
        _c("th", [_vm._v("COLOR 3")]),
        _vm._v(" "),
        _c("th", [_vm._v("FECHA CREACION")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { attrs: { "aria-hidden": "true" } }, [
      _c("i", { staticClass: "fal fa-times" }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);