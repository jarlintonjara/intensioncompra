"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_ingreso_bloqueado_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/ingreso/bloqueado.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/ingreso/bloqueado.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      bloqueados: [],
      user: {
        role_id: 0
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
                return _this.axios.get('/api/ingreso', {
                  withCredentials: true,
                  headers: {
                    Authorization: "Bearer ".concat(token)
                  }
                }).then(function (response) {
                  _this.bloqueados = response.data.bloqueados;
                })["catch"](function (error) {
                  console.log(error);
                  _this.bloqueados = [];
                });

              case 5:
                _context.next = 7;
                return _this.$tablaGlobal('#bloqueados');

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    desbloquear: function desbloquear(id) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this2.$swal.fire({
                  title: '¿Seguro de desbloquear?',
                  showDenyButton: true,
                  confirmButtonText: 'Desbloquear',
                  denyButtonText: "Cancelar"
                }).then( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(result) {
                    var token;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            token = localStorage.getItem('access_token');

                            if (!result.isConfirmed) {
                              _context2.next = 4;
                              break;
                            }

                            _context2.next = 4;
                            return axios.post("/api/ingreso/desbloquear", {
                              'ingreso_id': id
                            }, {
                              withCredentials: true,
                              headers: {
                                Authorization: "Bearer ".concat(token)
                              }
                            }).then(function (response) {
                              var index = _this2.bloqueados.map(function (e) {
                                return e.id;
                              }).indexOf(id);

                              if (index !== -1) {
                                var bloqueados = _this2.bloqueados;
                                bloqueados.splice(index, 1);
                                _this2.bloqueados = [].concat(bloqueados);
                              }

                              _this2.$swal.fire('Registro desbloqueado', '', 'success');
                            })["catch"](function (error) {
                              if (error.response.status == 400) {
                                _this2.$swal.fire({
                                  icon: 'error',
                                  title: 'Packing List',
                                  text: error.response.data
                                });
                              }

                              if (error.response.status == 401) {
                                _this2.$swal.fire({
                                  icon: '',
                                  title: '',
                                  text: 'Session terminada'
                                });

                                _this2.$router.push({
                                  name: "Login"
                                });
                              }
                            });

                          case 4:
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
      this.bloqueados.map(function (e) {
        var _dataExcel$push;

        dataExcel.push((_dataExcel$push = {}, _defineProperty(_dataExcel$push, 'ID', e.id), _defineProperty(_dataExcel$push, 'VIN', e.vin), _defineProperty(_dataExcel$push, 'Marca', e.marca), _defineProperty(_dataExcel$push, 'Modelo', e.modelo), _defineProperty(_dataExcel$push, 'Version', e.version), _defineProperty(_dataExcel$push, 'Año modelo', e.anio_modelo), _defineProperty(_dataExcel$push, 'Color', e.color), _defineProperty(_dataExcel$push, 'Situacion', e.situacion), _defineProperty(_dataExcel$push, 'Responsable', e.nombre + " " + e.apellido), _defineProperty(_dataExcel$push, 'Fecha bloqueado', e.fecha_bloqueo ? e.fecha_bloqueo : ""), _defineProperty(_dataExcel$push, 'Nave', e.nave), _defineProperty(_dataExcel$push, 'Codigo SAP', e.codigo_sap), _defineProperty(_dataExcel$push, 'Fecha ingreso', e.fecha_ingreso), _dataExcel$push));
      });
      var dataSend = {
        data: {
          "Report": dataExcel
        },
        name: ['Reporte'],
        filename: 'Bloqueados.xlsx',
        vacios: [[]]
      };
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.ExpExcel)(dataExcel, "Bloqueados.xlsx", dataSend.name, dataSend.vacios);
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/ingreso/bloqueado.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/ingreso/bloqueado.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bloqueado_vue_vue_type_template_id_89800a0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bloqueado.vue?vue&type=template&id=89800a0e& */ "./resources/js/pages/ingreso/bloqueado.vue?vue&type=template&id=89800a0e&");
/* harmony import */ var _bloqueado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bloqueado.vue?vue&type=script&lang=js& */ "./resources/js/pages/ingreso/bloqueado.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _bloqueado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _bloqueado_vue_vue_type_template_id_89800a0e___WEBPACK_IMPORTED_MODULE_0__.render,
  _bloqueado_vue_vue_type_template_id_89800a0e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/ingreso/bloqueado.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/ingreso/bloqueado.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/ingreso/bloqueado.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bloqueado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./bloqueado.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/ingreso/bloqueado.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bloqueado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/ingreso/bloqueado.vue?vue&type=template&id=89800a0e&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/ingreso/bloqueado.vue?vue&type=template&id=89800a0e& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bloqueado_vue_vue_type_template_id_89800a0e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bloqueado_vue_vue_type_template_id_89800a0e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bloqueado_vue_vue_type_template_id_89800a0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./bloqueado.vue?vue&type=template&id=89800a0e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/ingreso/bloqueado.vue?vue&type=template&id=89800a0e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/ingreso/bloqueado.vue?vue&type=template&id=89800a0e&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/ingreso/bloqueado.vue?vue&type=template&id=89800a0e& ***!
  \************************************************************************************************************************************************************************************************************************/
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
          _vm._m(1),
          _vm._v(" "),
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
                      _vm._v(" Excel"),
                    ]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "table",
                {
                  staticClass:
                    "table table-bordered table-hover table-striped w-100",
                  attrs: { id: "bloqueados", translate: "no" },
                },
                [
                  _c("thead", [
                    _c("tr", [
                      _vm.user.role_id == 4 ||
                      _vm.user.role_id == 5 ||
                      _vm.user.role_id == 6
                        ? _c("th", [_vm._v("DESBLOQUEAR")])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("th", [_vm._v("VIN")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("MARCA")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("MODELO")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("VERSION")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("AÑO MODELO")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("AÑO FABRICACIÓN")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("RESPONSABLE")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("FECHA BLOQUEO")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("COLOR")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("CODIGO SAP")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("NAVE")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("FECHA INGRESO")]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.bloqueados, function (bloqueado) {
                      return _c("tr", { key: bloqueado.id }, [
                        _vm.user.role_id == 4 ||
                        _vm.user.role_id == 5 ||
                        _vm.user.role_id == 6
                          ? _c(
                              "td",
                              { staticStyle: { "text-align": "center" } },
                              [
                                _vm.user.role_id == 4 ||
                                _vm.user.role_id == 5 ||
                                _vm.user.role_id == 6
                                  ? _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-success",
                                        on: {
                                          click: function ($event) {
                                            return _vm.desbloquear(bloqueado.id)
                                          },
                                        },
                                      },
                                      [_c("i", { staticClass: "fa fa-unlock" })]
                                    )
                                  : _vm._e(),
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(bloqueado.vin))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(bloqueado.marca))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(bloqueado.modelo))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(bloqueado.version))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(bloqueado.anio_modelo))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(bloqueado.anio_fabricacion))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(bloqueado.nombre + " " + bloqueado.nombre)
                          ),
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              bloqueado.fecha_bloqueo
                                ? bloqueado.fecha_bloqueo
                                : ""
                            )
                          ),
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(bloqueado.color))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(bloqueado.codigo_sap))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(bloqueado.nave))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              bloqueado.fecha_ingreso
                                ? bloqueado.fecha_ingreso
                                : ""
                            )
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
        _c("i", { staticClass: "subheader-icon fal fa-pencil" }),
        _vm._v(" "),
        _c("span", { staticClass: "fw-300" }, [
          _vm._v("PACKING LIST - BLOQUEADOS"),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-hdr" }, [
      _c("div", { staticClass: "panel-toolbar" }, [
        _c("button", {
          staticClass: "btn btn-panel waves-effect waves-themed",
          attrs: {
            "data-action": "panel-collapse",
            "data-toggle": "tooltip",
            "data-offset": "0,10",
            "data-original-title": "Collapse",
          },
        }),
        _vm._v(" "),
        _c("button", {
          staticClass: "btn btn-panel waves-effect waves-themed",
          attrs: {
            "data-action": "panel-fullscreen",
            "data-toggle": "tooltip",
            "data-offset": "0,10",
            "data-original-title": "Fullscreen",
          },
        }),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);