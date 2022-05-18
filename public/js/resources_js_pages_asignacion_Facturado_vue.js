"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_asignacion_facturado_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/asignacion/facturado.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/asignacion/facturado.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      asignaciones: [],
      images: [],
      registro: {
        id: "",
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
        color3: "",
        codigo_reserva: "",
        monto_reserva: "",
        fecha_reserva: "",
        fecha_distribucion: "",
        fecha_emplazado: "",
        codigo_sap: "",
        codigo_sap_cliente: "",
        vin: ""
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
                return _this.axios.get('/api/facturado', {
                  withCredentials: true,
                  headers: {
                    Authorization: "Bearer ".concat(token)
                  }
                }).then(function (response) {
                  _this.asignaciones = response.data;
                })["catch"](function (error) {
                  console.log(error);
                  _this.asignaciones = [];
                });

              case 3:
                _context.next = 5;
                return _this.$tablaGlobal('#treservado');

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    detalle: function detalle(datos) {
      var _this2 = this;

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
      this.registro.codigo_reserva = datos.codigo_reserva;
      this.registro.monto_reserva = datos.monto_reserva;
      this.registro.fecha_reserva = datos.fecha_reserva;
      this.registro.fecha_distribucion = datos.fecha_distribucion;
      this.registro.fecha_emplazado = datos.fecha_emplazado;
      this.registro.codigo_sap = datos.codigo_sap;
      this.registro.codigo_sap_cliente = datos.codigo_sap_cliente;
      this.registro.vin = datos.vin;
      this.registro.id = datos.id;
      this.axios.get('/api/getimages/' + this.registro.id).then(function (response) {
        _this2.images = response.data;
      })["catch"](function (error) {
        console.log(error);
        _this2.images = [];
      });
      $('#modalDetalle').modal('show');
    },
    ReporteExcel: function ReporteExcel() {
      //e.preventDefault();
      var dataExcel = [];
      this.asignaciones.map(function (e) {
        var _dataExcel$push;

        dataExcel.push((_dataExcel$push = {}, _defineProperty(_dataExcel$push, 'ID', e.id), _defineProperty(_dataExcel$push, 'Concesionario', e.concesionario), _defineProperty(_dataExcel$push, 'Tienda', e.tienda), _defineProperty(_dataExcel$push, 'Asesor', e.nombre + (e.apellido ? e.apellido : '')), _defineProperty(_dataExcel$push, 'Nombre Completo', e.nombre_completo), _defineProperty(_dataExcel$push, 'Documento', e.documento), _defineProperty(_dataExcel$push, 'Celular', e.celular), _defineProperty(_dataExcel$push, 'VIN', e.vin), _defineProperty(_dataExcel$push, 'Marca', e.marca), _defineProperty(_dataExcel$push, 'Modelo', e.modelo), _defineProperty(_dataExcel$push, 'Version', e.version), _defineProperty(_dataExcel$push, 'Año modelo', e.anio_modelo), _defineProperty(_dataExcel$push, 'Color Reservado', e.color), _defineProperty(_dataExcel$push, 'Código reserva', e.codigo_reserva), _defineProperty(_dataExcel$push, 'Monto reserva', e.monto_reserva), _defineProperty(_dataExcel$push, 'Fecha reserva', e.fecha_reserva), _defineProperty(_dataExcel$push, 'Fecha emplazado', e.fecha_emplazado), _defineProperty(_dataExcel$push, 'Fecha Facturado', e.fecha_facturado), _defineProperty(_dataExcel$push, 'Fecha SAP_facturado', e.fecha_sap_facturado), _defineProperty(_dataExcel$push, 'código SAP cliente', e.codigo_sap_cliente), _dataExcel$push));
      });
      var dataSend = {
        data: {
          "Report": dataExcel
        },
        name: ['Reporte'],
        filename: 'Facturados.xlsx',
        vacios: [[]]
      };
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.ExpExcel)(dataExcel, "Facturados.xlsx", dataSend.name, dataSend.vacios);
    },
    cerrarModal: function cerrarModal() {
      $('#modalDetalle').modal('hide');
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/asignacion/facturado.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/asignacion/facturado.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _facturado_vue_vue_type_template_id_d0161536___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facturado.vue?vue&type=template&id=d0161536& */ "./resources/js/pages/asignacion/facturado.vue?vue&type=template&id=d0161536&");
/* harmony import */ var _facturado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./facturado.vue?vue&type=script&lang=js& */ "./resources/js/pages/asignacion/facturado.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _facturado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _facturado_vue_vue_type_template_id_d0161536___WEBPACK_IMPORTED_MODULE_0__.render,
  _facturado_vue_vue_type_template_id_d0161536___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/asignacion/facturado.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/asignacion/facturado.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/asignacion/facturado.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_facturado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./facturado.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/asignacion/facturado.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_facturado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/asignacion/facturado.vue?vue&type=template&id=d0161536&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/asignacion/facturado.vue?vue&type=template&id=d0161536& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_facturado_vue_vue_type_template_id_d0161536___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_facturado_vue_vue_type_template_id_d0161536___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_facturado_vue_vue_type_template_id_d0161536___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./facturado.vue?vue&type=template&id=d0161536& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/asignacion/facturado.vue?vue&type=template&id=d0161536&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/asignacion/facturado.vue?vue&type=template&id=d0161536&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/asignacion/facturado.vue?vue&type=template&id=d0161536& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
                    "table table-bordered table-hover table-striped w-100",
                  attrs: { id: "treservado", translate: "no" },
                },
                [
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.asignaciones, function (asignacion) {
                      return _c("tr", { key: asignacion.id }, [
                        _c("td", { attrs: { tyle: "text-align: center" } }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-warning",
                              on: {
                                click: function ($event) {
                                  return _vm.detalle(asignacion)
                                },
                              },
                            },
                            [_c("i", { staticClass: "fa fa-list" })]
                          ),
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(asignacion.concesionario))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(asignacion.tienda))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(asignacion.nombre))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(asignacion.documento))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(asignacion.celular))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(asignacion.vin))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(asignacion.marca))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(asignacion.modelo))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(asignacion.version))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(asignacion.color))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(asignacion.anio_modelo))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              asignacion.fecha_distribucion
                                ? asignacion.fecha_distribucion
                                : "-"
                            )
                          ),
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(asignacion.fecha_facturado))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(asignacion.fecha_sap_facturado)),
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(asignacion.codigo_sap_cliente)),
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
            id: "modalDetalle",
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
                  [_vm._m(3)]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
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
                          _vm._v("Año fabricación:"),
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
                      _vm._v(" "),
                      _c("div", { staticClass: "row mt-2" }, [
                        _c("div", { staticClass: "col-md-3" }, [
                          _vm._v("Fecha Emplazado:"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("b", [
                            _vm._v(
                              _vm._s(
                                _vm.registro.fecha_emplazado
                                  ? _vm.registro.fecha_emplazado
                                  : "-"
                              )
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _vm._v("Código Reserva:"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("b", [
                            _vm._v(_vm._s(_vm.registro.codigo_reserva)),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row mt-2" }, [
                        _c("div", { staticClass: "col-md-3" }, [
                          _vm._v("Monto reserva:"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("b", [_vm._v(_vm._s(_vm.registro.monto_reserva))]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _vm._v("Fecha reserva:"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("b", [_vm._v(_vm._s(_vm.registro.fecha_reserva))]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row mt-2" }, [
                        _c("div", { staticClass: "col-md-3" }, [
                          _vm._v("Código SAP:"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("b", [
                            _vm._v(_vm._s(_vm.registro.codigo_sap_cliente)),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _vm._v("Fecha de distribución:"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("b", [
                            _vm._v(
                              _vm._s(
                                _vm.registro.fecha_distribucion
                                  ? _vm.registro.fecha_distribucion
                                  : "-"
                              )
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row mt-2" }, [
                        _c("div", { staticClass: "col-md-3" }, [
                          _vm._v("VIN:"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-9" }, [
                          _c("b", [_vm._v(_vm._s(_vm.registro.vin))]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
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
                _c("div", { staticClass: "card mb-5" }, [
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
                _c("div", { staticClass: "card mb-5" }, [
                  _c("div", { staticClass: "card-body p-3" }, [
                    _c("h5", { staticClass: "text-danger" }, [
                      _vm._v(
                        "\n                                Documentos adjuntos\n                            "
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "d-flex mt-3 flex-wrap" },
                      _vm._l(_vm.images, function (image) {
                        return _c(
                          "div",
                          {
                            key: image.id + 99,
                            staticClass: "btn-group mr-1 mt-1",
                            attrs: {
                              role: "group",
                              "aria-label":
                                "Button group with nested dropdown ",
                            },
                          },
                          [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-default btn-xs btn-block px-1 py-1 fw-500 waves-effect waves-themed",
                                attrs: {
                                  type: "button",
                                  "data-action": "toggle",
                                },
                              },
                              [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "d-block text-truncate text-truncate-sm",
                                  },
                                  [
                                    _c("i", {
                                      staticClass:
                                        "fal fa-file-pdf mr-1 color-danger-700",
                                    }),
                                    _vm._v(
                                      " " +
                                        _vm._s(image.original_filename) +
                                        "\n                                        "
                                    ),
                                  ]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "btn-group",
                                attrs: { role: "group" },
                              },
                              [
                                _c("button", {
                                  staticClass:
                                    "btn btn-default btn-xs dropdown-toggle px-2 js-waves-off",
                                  attrs: {
                                    id: "btnGroupDrop1",
                                    type: "button",
                                    "data-toggle": "dropdown",
                                    "aria-haspopup": "true",
                                    "aria-expanded": "false",
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "dropdown-menu p-0 fs-xs",
                                    attrs: {
                                      "aria-labelledby": "btnGroupDrop1",
                                    },
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "dropdown-item px-3 py-2",
                                        attrs: {
                                          href:
                                            "/displayImage/" +
                                            _vm.registro.id +
                                            "/" +
                                            image.filename,
                                          download: "",
                                        },
                                      },
                                      [_vm._v("download")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass: "dropdown-item px-3 py-2",
                                        attrs: {
                                          href:
                                            "/displayImage/" +
                                            _vm.registro.id +
                                            "/" +
                                            image.filename,
                                          target: "_blank",
                                        },
                                      },
                                      [_vm._v("Open")]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        )
                      }),
                      0
                    ),
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
        _c("i", { staticClass: "subheader-icon fal fa-pencil" }),
        _vm._v(" "),
        _c("span", { staticClass: "fw-300" }, [_vm._v("Facturados")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-hdr" }, [
      _c(
        "h2",
        { staticStyle: { "text-align": "center", "font-size": "1.125rem" } },
        [_c("b")]
      ),
      _vm._v(" "),
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
        _c("th", [_vm._v("DOCUMENTO")]),
        _vm._v(" "),
        _c("th", [_vm._v("CELULAR")]),
        _vm._v(" "),
        _c("th", [_vm._v("VIN")]),
        _vm._v(" "),
        _c("th", [_vm._v("MARCA")]),
        _vm._v(" "),
        _c("th", [_vm._v("MODELO")]),
        _vm._v(" "),
        _c("th", [_vm._v("VERSIÓN")]),
        _vm._v(" "),
        _c("th", [_vm._v("COLOR")]),
        _vm._v(" "),
        _c("th", [_vm._v("AÑO MODELO")]),
        _vm._v(" "),
        _c("th", [_vm._v("FECHA DISTRIBUCIÓN")]),
        _vm._v(" "),
        _c("th", [_vm._v("FECHA FACTURADO")]),
        _vm._v(" "),
        _c("th", [_vm._v("FECHA SAP FACTURADO")]),
        _vm._v(" "),
        _c("th", [_vm._v("CODIGO SAP")]),
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