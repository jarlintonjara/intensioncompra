"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_auth_register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/register.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/register.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: {
        nombre: '',
        apellido: '',
        email: '',
        documento: '',
        password: '',
        password_confirmation: ''
      },
      errors: []
    };
  },
  methods: {
    validarCampos: function validarCampos() {
      if (!this.form.nombre || !this.form.apellido || !this.form.email || !this.form.password || !this.form.password_confirmation) {
        this.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Completa los campos requeridos!'
        });
        return false;
      }

      return true;
    },
    saveForm: function saveForm() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var valid;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.validarCampos();

              case 2:
                valid = _context.sent;

                if (valid) {
                  axios.post('/api/register', _this.form).then(function (response) {
                    _this.$swal.fire('Registro creado correctamente!', '', 'success');

                    _this.$router.push({
                      name: "Login"
                    });
                  })["catch"](function (error) {
                    _this.errors = error.response.data.errors;
                  });
                }

              case 4:
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

/***/ "./resources/js/pages/auth/register.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/auth/register.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _register_vue_vue_type_template_id_425558de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=425558de& */ "./resources/js/pages/auth/register.vue?vue&type=template&id=425558de&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./resources/js/pages/auth/register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_425558de___WEBPACK_IMPORTED_MODULE_0__.render,
  _register_vue_vue_type_template_id_425558de___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/auth/register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/auth/register.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/auth/register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/auth/register.vue?vue&type=template&id=425558de&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/auth/register.vue?vue&type=template&id=425558de& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_425558de___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_425558de___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_425558de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./register.vue?vue&type=template&id=425558de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/register.vue?vue&type=template&id=425558de&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/register.vue?vue&type=template&id=425558de&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/register.vue?vue&type=template&id=425558de& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", {}, [
    _c(
      "div",
      { staticClass: "blankpage-form-field", staticStyle: { width: "600px" } },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "p-2 w-full" }, [
          _vm.errors.name
            ? _c("span", { staticClass: "w-full text-red-500" }, [
                _vm._v(_vm._s(_vm.errors.name[0])),
              ])
            : _vm._e(),
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "card p-4 border-top-left-radius-0 border-top-right-radius-0",
          },
          [
            _c("form", [
              _c("div", { staticClass: "row mb-2" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      { staticClass: "form-label", attrs: { for: "nombres" } },
                      [_vm._v("Nombres")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.nombre,
                          expression: "form.nombre",
                        },
                      ],
                      staticClass: "form-control form-control-lg",
                      attrs: { type: "text", id: "nombres" },
                      domProps: { value: _vm.form.nombre },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "nombre", $event.target.value)
                        },
                      },
                    }),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticClass: "form-label",
                        attrs: { for: "apellidos" },
                      },
                      [_vm._v("Apellidos")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.apellido,
                          expression: "form.apellido",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: "apellidos" },
                      domProps: { value: _vm.form.apellido },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "apellido", $event.target.value)
                        },
                      },
                    }),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mb-2" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      { staticClass: "form-label", attrs: { for: "email" } },
                      [_vm._v("Email")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.email,
                          expression: "form.email",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "email", id: "email" },
                      domProps: { value: _vm.form.email },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "email", $event.target.value)
                        },
                      },
                    }),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticClass: "form-label",
                        attrs: { for: "documento" },
                      },
                      [_vm._v("Documento")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.documento,
                          expression: "form.documento",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: "documento" },
                      domProps: { value: _vm.form.documento },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "documento", $event.target.value)
                        },
                      },
                    }),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mb-2" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      { staticClass: "form-label", attrs: { for: "password" } },
                      [_vm._v("Password")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.password,
                          expression: "form.password",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "password", id: "password" },
                      domProps: { value: _vm.form.password },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "password", $event.target.value)
                        },
                      },
                    }),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticClass: "form-label",
                        attrs: { for: "password_confirm" },
                      },
                      [_vm._v("Confirmar Password")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.password_confirmation,
                          expression: "form.password_confirmation",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "password", id: "password_confirm" },
                      domProps: { value: _vm.form.password_confirmation },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "password_confirmation",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary float-right",
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.saveForm.apply(null, arguments)
                    },
                  },
                },
                [_vm._v("Registrarse")]
              ),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "blankpage-footer text-center" },
          [
            _c("router-link", { attrs: { to: "/" } }, [
              _c("strong", [_vm._v("Recuperar Password")]),
            ]),
            _vm._v(" |\n            "),
            _c("router-link", { attrs: { to: "/login" } }, [
              _c("strong", [_vm._v("Login")]),
            ]),
          ],
          1
        ),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "page-logo m-0 w-100 align-items-center justify-content-center rounded border-bottom-left-radius-0 border-bottom-right-radius-0 px-4",
      },
      [
        _c(
          "a",
          {
            staticClass:
              "page-logo-link press-scale-down d-flex align-items-center",
            attrs: { href: "javascript:void(0)" },
          },
          [
            _c("span", { staticClass: "page-logo-text mr-1" }, [
              _vm._v("Registro"),
            ]),
          ]
        ),
      ]
    )
  },
]
render._withStripped = true



/***/ })

}]);