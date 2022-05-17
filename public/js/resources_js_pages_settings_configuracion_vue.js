"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_settings_configuracion_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/configuracion.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/configuracion.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Setting",
  components: {},
  data: function data() {
    return {
      items: [],
      datos: {
        time: '',
        email: '',
        email1: '',
        email2: '',
        email3: '',
        email4: ''
      },
      titulo: '',
      btnEditar: true,
      id: ''
    };
  },
  mounted: function mounted() {
    this.mostrarItems();
  },
  methods: {
    editar: function editar() {
      var _this = this;

      console.log(this.datos);
      axios.put('/api/setting/' + 1, this.datos).then(function (response) {
        _this.items = [].concat(response.data);
        _this.id = ''; //this.getUser()

        $('#modalForm').modal('hide');

        _this.$swal.fire('Editado correctamente!', '', 'success'); //swal("Felicidades!", "Usuario editado correctamente!", "success");

      })["catch"](function (error) {
        console.log(error);
      });
    },
    mostrarItems: function mostrarItems() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.axios.get('/api/setting').then(function (response) {
                  _this2.datos = response.data[0];
                })["catch"](function (error) {
                  console.log(error);
                  _this2.datos = [];
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/settings/configuracion.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/settings/configuracion.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _configuracion_vue_vue_type_template_id_d5be3e38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuracion.vue?vue&type=template&id=d5be3e38& */ "./resources/js/pages/settings/configuracion.vue?vue&type=template&id=d5be3e38&");
/* harmony import */ var _configuracion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuracion.vue?vue&type=script&lang=js& */ "./resources/js/pages/settings/configuracion.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _configuracion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _configuracion_vue_vue_type_template_id_d5be3e38___WEBPACK_IMPORTED_MODULE_0__.render,
  _configuracion_vue_vue_type_template_id_d5be3e38___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/settings/configuracion.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/settings/configuracion.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/settings/configuracion.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_configuracion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./configuracion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/configuracion.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_configuracion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/settings/configuracion.vue?vue&type=template&id=d5be3e38&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/settings/configuracion.vue?vue&type=template&id=d5be3e38& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_configuracion_vue_vue_type_template_id_d5be3e38___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_configuracion_vue_vue_type_template_id_d5be3e38___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_configuracion_vue_vue_type_template_id_d5be3e38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./configuracion.vue?vue&type=template&id=d5be3e38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/configuracion.vue?vue&type=template&id=d5be3e38&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/configuracion.vue?vue&type=template&id=d5be3e38&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/configuracion.vue?vue&type=template&id=d5be3e38& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "panel-container show" }, [
            _c("div", { staticClass: "panel-content" }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  {
                    staticClass: "col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6",
                  },
                  [
                    _c("div", { staticClass: "input-group mb-3" }, [
                      _vm._m(2),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.datos.time,
                            expression: "datos.time",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { id: "time", type: "time", name: "time" },
                        domProps: { value: _vm.datos.time },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.datos, "time", $event.target.value)
                          },
                        },
                      }),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6",
                  },
                  [
                    _c("div", { staticClass: "input-group mb-3" }, [
                      _vm._m(3),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.datos.email,
                            expression: "datos.email",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "email",
                          id: "email",
                          name: "email",
                          "aria-label": "Email",
                        },
                        domProps: { value: _vm.datos.email },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.datos, "email", $event.target.value)
                          },
                        },
                      }),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12",
                  },
                  [
                    _c("div", { staticClass: "input-group" }, [
                      _vm._m(4),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3",
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.datos.email1,
                                expression: "datos.email1",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "email",
                              id: "email1",
                              name: "email1",
                              "aria-label": "Email1",
                            },
                            domProps: { value: _vm.datos.email1 },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.datos,
                                  "email1",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3",
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.datos.email2,
                                expression: "datos.email2",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "email",
                              id: "email2",
                              name: "email2",
                              "aria-label": "Email2",
                            },
                            domProps: { value: _vm.datos.email2 },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.datos,
                                  "email2",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3",
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.datos.email3,
                                expression: "datos.email3",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "email",
                              id: "email3",
                              name: "email3",
                              "aria-label": "Email3",
                            },
                            domProps: { value: _vm.datos.email3 },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.datos,
                                  "email3",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3",
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.datos.email4,
                                expression: "datos.email4",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "email",
                              id: "email4",
                              name: "email4",
                              "aria-label": "Email4",
                            },
                            domProps: { value: _vm.datos.email4 },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.datos,
                                  "email4",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]
                      ),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col align-self-end" }, [
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
                        [_vm._v("Guardar Cambios")]
                      )
                    : _vm._e(),
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
        _vm._v(" Configuraciones \n            "),
        _c("small"),
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
        [_c("b", [_vm._v("Envío de correo")])]
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
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Hora")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _vm._v("Correo principal"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend col-12 col-sm-12" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _vm._v("Correos de copia"),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);