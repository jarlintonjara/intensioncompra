"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_auditoria_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auditoria.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auditoria.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./resources/js/utils.js");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      data: [],
      user: null
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
                return _this.axios.get('/api/auditoria', {
                  withCredentials: true,
                  headers: {
                    Authorization: "Bearer ".concat(token)
                  }
                }).then(function (response) {
                  _this.data = response.data;
                })["catch"](function (error) {
                  console.log(error);
                });

              case 5:
                _this.$tablaGlobal('#table-data');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    ReporteExcel: function ReporteExcel() {
      //e.preventDefault();
      var dataExcel = [];
      this.data.map(function (e) {
        var _dataExcel$push;

        dataExcel.push((_dataExcel$push = {}, _defineProperty(_dataExcel$push, 'Concesionario', e.concesionario), _defineProperty(_dataExcel$push, 'Tienda', e.tienda), _defineProperty(_dataExcel$push, 'VIN', e.vin), _defineProperty(_dataExcel$push, 'FECHA FACTURACIÓN SI', e.fecha_facturacion_si), _defineProperty(_dataExcel$push, 'FECHA FACTURACIÓN SO', e.fecha_facturacion_so), _defineProperty(_dataExcel$push, 'DIFERENCIA', e.diferencia), _defineProperty(_dataExcel$push, 'DOCUMENTO INCORRECTO', e.incorrecto_documento), _defineProperty(_dataExcel$push, 'REGISTRO DOCUMENTO', e.registro_documento), _defineProperty(_dataExcel$push, 'FACTURACIÓN DOCUMENTO', e.facturacion_documento), _defineProperty(_dataExcel$push, 'REGISTRO NOMBRE', e.registro_nombre), _defineProperty(_dataExcel$push, 'FACTURACIÓN NOMBRE', e.facturacion_nombre), _dataExcel$push));
      });
      var dataSend = {
        data: {
          "Report": dataExcel
        },
        name: ['Reporte'],
        filename: 'Auditoria.xlsx',
        vacios: [[]]
      };
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.ExpExcel)(dataExcel, "Auditoria.xlsx", dataSend.name, dataSend.vacios);
    },
    cerrarModal: function cerrarModal() {
      $('#modalForm').modal('hide');
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/auditoria.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/auditoria.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _auditoria_vue_vue_type_template_id_78f7527d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auditoria.vue?vue&type=template&id=78f7527d& */ "./resources/js/pages/auditoria.vue?vue&type=template&id=78f7527d&");
/* harmony import */ var _auditoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auditoria.vue?vue&type=script&lang=js& */ "./resources/js/pages/auditoria.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _auditoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _auditoria_vue_vue_type_template_id_78f7527d___WEBPACK_IMPORTED_MODULE_0__.render,
  _auditoria_vue_vue_type_template_id_78f7527d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/auditoria.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/auditoria.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/auditoria.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_auditoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./auditoria.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auditoria.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_auditoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/auditoria.vue?vue&type=template&id=78f7527d&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/auditoria.vue?vue&type=template&id=78f7527d& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_auditoria_vue_vue_type_template_id_78f7527d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_auditoria_vue_vue_type_template_id_78f7527d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_auditoria_vue_vue_type_template_id_78f7527d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./auditoria.vue?vue&type=template&id=78f7527d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auditoria.vue?vue&type=template&id=78f7527d&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auditoria.vue?vue&type=template&id=78f7527d&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auditoria.vue?vue&type=template&id=78f7527d& ***!
  \****************************************************************************************************************************************************************************************************************/
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
                  attrs: { id: "table-data", translate: "no" },
                },
                [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.data, function (row) {
                      return _c("tr", { key: row.id }, [
                        _c("td", [_vm._v(_vm._s(row.concesionario))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(row.tienda))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(row.vin))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(row.fecha_facturacion_si))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(row.fecha_facturacion_so))]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _vm._v(_vm._s(row.diferencia)),
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _vm._v(_vm._s(row.incorrecto_documento)),
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(row.registro_documento))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(row.facturacion_documento))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(row.registro_nombre))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(row.facturacion_nombre))]),
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
        _c("i", { staticClass: "subheader-icon fal fa-list" }),
        _vm._v(" "),
        _c("span", { staticClass: "fw-300" }, [_vm._v("Auditoría")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("CONCESIONARIO")]),
        _vm._v(" "),
        _c("th", [_vm._v("TIENDA")]),
        _vm._v(" "),
        _c("th", [_vm._v("VIN")]),
        _vm._v(" "),
        _c("th", [_vm._v("FECHA FACTURACIÓN SI")]),
        _vm._v(" "),
        _c("th", [_vm._v("FECHA FACTURACIÓN SO")]),
        _vm._v(" "),
        _c("th", [_vm._v("DIFERENCIA")]),
        _vm._v(" "),
        _c("th", [_vm._v("DOCUMENTO INCORRECTO")]),
        _vm._v(" "),
        _c("th", [_vm._v("REGISTRO DOCUMENTO")]),
        _vm._v(" "),
        _c("th", [_vm._v("FACTURACIÓN DOCUMENTO")]),
        _vm._v(" "),
        _c("th", [_vm._v("REGISTRO NOMBRE")]),
        _vm._v(" "),
        _c("th", [_vm._v("FACTURACIÓN NOMBRE")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);