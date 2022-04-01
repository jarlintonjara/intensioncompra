(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Layout_vue"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sidebar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue */ "./resources/js/components/Sidebar.vue");
/* harmony import */ var _Navbar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar.vue */ "./resources/js/components/Navbar.vue");


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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Layout",
  components: {
    Sidebar: _Sidebar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Navbar: _Navbar_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Navbar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Navbar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Navbar",
  props: ['session'],
  data: function data() {
    return {
      user: {
        nombre: ""
      },
      tienda: {
        nombre: ""
      },
      concesionario: {
        nombre: ""
      }
    };
  },
  watch: {
    session: function session(val) {
      this.user = val;
      this.tienda = this.user.tienda;
      this.concesionario = this.user.concesionario;
    }
  },
  methods: {
    logout: function logout() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var token, access_token;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                token = localStorage.getItem('access_token');
                access_token = token ? token : "";
                _context.next = 4;
                return axios.post('/api/logout', {
                  access_token: access_token
                }).then(function () {
                  localStorage.removeItem("access_token");

                  _this.$router.push({
                    name: "Login"
                  });
                });

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "sidebar",
  props: ['session'],
  watch: {
    session: function session(val) {
      this.user = val;
    }
  },
  data: function data() {
    return {
      user: {
        role_id: 0
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./resources/js/components/Layout.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Layout.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout_vue_vue_type_template_id_e245f756___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=e245f756& */ "./resources/js/components/Layout.vue?vue&type=template&id=e245f756&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/components/Layout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_e245f756___WEBPACK_IMPORTED_MODULE_0__.render,
  _Layout_vue_vue_type_template_id_e245f756___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Layout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Navbar.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Navbar.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=6dde423b& */ "./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js& */ "./resources/js/components/Navbar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__.render,
  _Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Navbar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Sidebar.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Sidebar.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=81fbb27e& */ "./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/js/components/Sidebar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Sidebar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Layout.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Layout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Navbar.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Navbar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Navbar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Sidebar.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Sidebar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Layout.vue?vue&type=template&id=e245f756&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Layout.vue?vue&type=template&id=e245f756& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_e245f756___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_e245f756___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_e245f756___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Layout.vue?vue&type=template&id=e245f756& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout.vue?vue&type=template&id=e245f756&");


/***/ }),

/***/ "./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navbar.vue?vue&type=template&id=6dde423b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&");


/***/ }),

/***/ "./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=template&id=81fbb27e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout.vue?vue&type=template&id=e245f756&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout.vue?vue&type=template&id=e245f756& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "page-wrapper" }, [
      _c(
        "div",
        { staticClass: "page-inner" },
        [
          _c("Sidebar", { attrs: { session: _vm.user } }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "page-content-wrapper" },
            [
              _c("Navbar", { attrs: { session: _vm.user } }),
              _vm._v(" "),
              _c("router-view"),
              _vm._v(" "),
              _c("div", {
                staticClass: "page-content-overlay",
                attrs: {
                  "data-action": "toggle",
                  "data-class": "mobile-nav-on",
                },
              }),
              _vm._v(" "),
              _c("footer", {
                staticClass: "page-footer",
                attrs: { role: "contentinfo" },
              }),
            ],
            1
          ),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    "header",
    { staticClass: "page-header", attrs: { role: "banner" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "search" }, [
        _c("span", { staticStyle: { color: "red", display: "block" } }, [
          _vm._v("Concesionario : "),
          _c("span", { staticStyle: { color: "#425C79" } }, [
            _vm._v(_vm._s(_vm.concesionario.nombre)),
          ]),
        ]),
        _vm._v(" "),
        _c("span", { staticStyle: { color: "red" } }, [
          _vm._v("Tienda : "),
          _c("span", { staticStyle: { color: "#425C79" } }, [
            _vm._v(_vm._s(_vm.tienda.nombre)),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "ml-auto d-flex" }, [
        _c("div", [
          _c(
            "a",
            {
              staticClass:
                "header-icon d-flex align-items-center justify-content-center ml-2",
              staticStyle: { height: "31px" },
              attrs: { href: "#", "data-toggle": "dropdown", title: "Usuario" },
            },
            [
              _c("i", { staticClass: "fas fa-user" }),
              _vm._v(" " + _vm._s(_vm.user.nombre) + "\n            "),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "dropdown-menu dropdown-menu-animated dropdown-lg" },
            [
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "dropdown-divider m-0" }),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "dropdown-item fw-500 pt-3 pb-3",
                  attrs: { to: "perfil" },
                },
                [
                  _c("span", { attrs: { "data-i18n": "drpdwn.page-logout" } }, [
                    _vm._v("Perfil"),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "dropdown-divider m-0" }),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "dropdown-item fw-500 pt-3 pb-3",
                  attrs: { href: "" },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.logout.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("span", { attrs: { "data-i18n": "drpdwn.page-logout" } }, [
                    _vm._v("Logout"),
                  ]),
                ]
              ),
            ],
            1
          ),
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
    return _c(
      "div",
      { staticClass: "hidden-md-down dropdown-icon-menu position-relative" },
      [
        _c(
          "a",
          {
            staticClass: "header-btn btn js-waves-off",
            attrs: {
              href: "#",
              "data-action": "toggle",
              "data-class": "nav-function-hidden",
              title: "Hide Navigation",
            },
          },
          [_c("i", { staticClass: "ni ni-menu" })]
        ),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _c(
              "a",
              {
                staticClass: "btn js-waves-off",
                attrs: {
                  href: "#",
                  "data-action": "toggle",
                  "data-class": "nav-function-minify",
                  title: "Minify Navigation",
                },
              },
              [_c("i", { staticClass: "ni ni-minify-nav" })]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "btn js-waves-off",
                attrs: {
                  href: "#",
                  "data-action": "toggle",
                  "data-class": "nav-function-fixed",
                  title: "Lock Navigation",
                },
              },
              [_c("i", { staticClass: "ni ni-lock-nav" })]
            ),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "hidden-lg-up" }, [
      _c(
        "a",
        {
          staticClass: "header-btn btn press-scale-down",
          attrs: {
            href: "#",
            "data-action": "toggle",
            "data-class": "mobile-nav-on",
          },
        },
        [_c("i", { staticClass: "ni ni-menu" })]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "dropdown-header bg-trans-gradient d-flex flex-row py-4 rounded-top",
      },
      [
        _c(
          "div",
          {
            staticClass:
              "d-flex flex-row align-items-center mt-1 mb-1 color-white",
          },
          [
            _c("span", { staticClass: "mr-2" }),
            _vm._v(" "),
            _c("div", { staticClass: "info-card-text" }, [
              _c("div", {
                staticClass: "fs-lg text-truncate text-truncate-lg",
              }),
            ]),
          ]
        ),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    "aside",
    {
      staticClass: "page-sidebar",
      staticStyle: {
        "background-image": "none",
        "background-color": "#e30025",
      },
    },
    [
      _c("div", [
        _c(
          "svg",
          {
            staticClass: "d-inline-block align-top logo",
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 88 82",
            },
          },
          [
            _c("defs"),
            _vm._v(" "),
            _c("path", { attrs: { fill: "#E30025", d: "M0 82h88V0H0v82z" } }),
            _vm._v(" "),
            _c("path", {
              attrs: {
                fill: "#FFF",
                d: "M18.035 57.41h4.506c3.664 0 6.072.527 6.072 4.252 0 3.666-2.408 4.252-6.072 4.252h-4.506V57.41zm3.111 1.649v4.77c0 .24.219.436.506.438h.726c1.61 0 3.133-.56 3.133-2.604 0-2.104-1.522-2.603-3.133-2.603h-1.232v-.001zM64.941 66.091c-3.547 0-5.551-1.295-5.551-4.448 0-3.127 2.004-4.449 5.551-4.449s5.552 1.322 5.552 4.449c0 3.153-2.005 4.448-5.552 4.448m2.435-4.413c0-1.603-.416-2.828-2.435-2.828s-2.435 1.226-2.435 2.828c0 1.631.416 2.756 2.435 2.756s2.435-1.125 2.435-2.756M55.807 63.412h3.092v.352c-.051 1.816-2.631 2.489-4.918 2.489-3.215 0-5.092-.819-5.092-4.437 0-3.189 1.877-4.39 5.092-4.414 2.33 0 4.918.646 4.918 2.431v.349h-3.092l.002-.349c-.006-.515-.893-.782-1.826-.782-1.448 0-1.938 1.135-1.944 2.86-.006 1.419.496 2.696 1.944 2.696.947 0 1.824-.318 1.824-.89l.002-.305h-.002zM48.336 63.729c-.191-1.222-.568-1.963-2.227-2.095 1.4-.216 2.488-.618 2.488-2.032 0-2.19-2.5-2.191-4.431-2.191h-5.285v8.504h3.106v-3.368h1.246c1.614 0 1.657.56 1.836 1.584.115.581.312 1.79.316 1.784h3.465l-.514-2.186zm-5.056-2.713h-1.271l.001-.002v-1.555c.001-.217.18-.385.406-.4h.864c1.012 0 2.15-.025 2.15.979 0 .871-1.138.978-2.15.978zM37.948 65.999l-8.62-.01V57.49l8.62.004v1.648l-5.528-.004v1.752l5.118.006v1.647l-5.118-.003v1.397c.001.22.18.389.408.402l5.121.01-.001 1.65zM47.48 15.728l.088.178.054.242.022.219-.031.173-.074.219-12.28 21.255-.13.19-.136.161-.163.104-.026.015-.087.045-.167.065-.116.029-.09.017h-.118l-8.26.001-.104-.013-.134-.03-.124-.044-.109-.052-.027-.015-.126-.084-.082-.068-.071-.073-.054-.062-.058-.08-.047-.08-1.979-3.422-.118-.22-.058-.167-.033-.185-.003-.107.007-.075.01-.077.045-.208.127-.282 10.163-17.57.031-.054.039-.054.042-.059.045-.05.073-.071.076-.064.091-.065.041-.025.001-.004.19-.086.194-.051.115-.017 12.387-.001.239.03.142.057.215.119.177.141.103.116.088.139zM58.68 45.693l-.2-.013-.237-.074-.2-.09-.135-.113-.153-.176-12.296-21.245-.1-.207-.07-.198-.008-.194v-.03l.004-.097.027-.176.033-.115.029-.088.059-.102 4.131-7.142.062-.084.094-.1.1-.086.1-.067.027-.017.136-.067.101-.036.098-.025.082-.016.099-.01.093-.001 3.957-.001.25.008.174.034.178.063.095.052.062.043.062.046.159.145.181.251 10.158 17.574.03.052.029.061.027.067.021.063.026.1.017.096.012.111.002.049.003.001-.021.208-.053.194-.042.109-6.192 10.71-.146.193-.122.094-.209.127-.211.08-.152.031-.171.008zM53.148 39.96l.024.013.083.053.139.111.084.086.061.069.061.104 4.129 7.141.041.097.041.13.023.131.01.119.002.031-.012.15-.018.105-.027.098-.027.078-.039.092-.047.08-1.979 3.422-.131.213-.115.134-.145.121-.092.056-.066.031-.072.029-.204.066-.308.03-20.323-.003h-.061l-.067-.006-.071-.008-.066-.014-.099-.027-.092-.033-.102-.046-.043-.022-.001-.003-.172-.118-.141-.143-.073-.09-6.193-10.71-.096-.222-.02-.152-.006-.245.035-.222.05-.148.076-.148.111-.165.184-.168.177-.127.165-.061.229-.055 24.576.001.23.018.205.04.172.087z",
              },
            }),
            _vm._v(" "),
            _c("path", {
              attrs: {
                fill: "#E6E7E8",
                d: "M44.179 17.631l.024.074.006.07-.019.098-.046.084-10.516 18.184-.017.028-.029.035-.043.035 1.291 2.23.163-.105.136-.159.13-.19 12.28-21.254.074-.22.031-.174-.022-.217-.054-.242-.088-.178-3.301 1.901z",
              },
            }),
            _vm._v(" "),
            _c("path", {
              attrs: {
                fill: "#BCBEC0",
                d: "M63.402 33.988l-.012.044-.031.065-4.387 7.592-.054.093-.069.059-.088.035-.082.013v3.807l.166-.01.152-.029.211-.082.209-.127.121-.094.146-.192 6.192-10.71.042-.11.053-.192.021-.209-2.586-.002-.004.049z",
              },
            }),
            _vm._v(" "),
            _c("path", {
              attrs: {
                fill: "#E6E7E8",
                d: "M53.908 17.521l.056.036.048.06.037.063 9.314 16.103.025.058.01.06.006.036h2.588l-.004-.048-.01-.111-.017-.097-.026-.1-.021-.064-.027-.065-.029-.061-.029-.052L55.67 15.765l-.182-.251-.158-.144-.062-.046-.061-.042-1.299 2.239z",
              },
            }),
            _vm._v(" "),
            _c("path", {
              attrs: {
                fill: "#FFF",
                d: "M51.241 17.52l.022-.013.026-.01.037-.008.05-.005h2.389l.041.004.041.008.039.012.024.014 1.296-2.242-.094-.052-.178-.064-.174-.033-.25-.008-3.957.001h-.094l-.098.011-.084.017-.096.024-.102.038-.137.067 1.299 2.239z",
              },
            }),
            _vm._v(" "),
            _c("path", {
              attrs: {
                fill: "#E6E7E8",
                d: "M34.931 50.357l-1.294 2.231-.171-.116-.142-.144-.073-.09-6.193-10.712-.095-.221-.02-.152-.005-.244.035-.223.05-.148.076-.15 3.301 1.904-.031.077-.013.093.015.089.054.093 4.39 7.592.042.06.032.034.042.027z",
              },
            }),
            _vm._v(" "),
            _c("path", {
              attrs: {
                fill: "#D1D3D4",
                d: "M53.859 50.381l-.075.014h-.073l-18.626.002-.06-.004-.058-.024-.034-.013-1.294 2.235.044.024.101.047.092.033.099.027.065.012.072.01.067.006 20.383.002.309-.031.204-.064.071-.03.067-.034-1.295-2.238-.059.026z",
              },
            }),
            _vm._v(" "),
            _c("path", {
              attrs: {
                fill: "#FFF",
                d: "M30.401 42.295l-3.303-1.904.111-.164.184-.168.177-.129.165-.06.228-.054h24.576l.23.017.207.04.172.086-1.293 2.234-.051-.018-.041-.008-.033-.005H30.7l-.096.001-.094.034-.058.039-.051.059z",
              },
            }),
            _vm._v(" "),
            _c("path", {
              attrs: {
                fill: "#E6E7E8",
                d: "M51.825 42.186l.084.039.063.065.071.118 3.155 5.458.029.057.02.058.006.065h2.59l-.001-.03-.01-.121-.024-.129-.041-.132-.039-.097-4.131-7.141-.06-.104-.062-.068-.082-.086-.139-.111-.083-.052-.038-.02-1.308 2.231z",
              },
            }),
            _vm._v(" "),
            _c("path", {
              attrs: {
                fill: "#BCBEC0",
                d: "M55.253 48.045l-.001.027-.004.028-.012.035-.02.045-1.195 2.066-.023.031-.027.033-.029.025-.023.016 1.296 2.243.093-.056.144-.122.116-.134.132-.213 1.978-3.422.045-.08.039-.092.028-.078.028-.098.017-.105.011-.151-2.593.002z",
              },
            }),
            _vm._v(" "),
            _c("path", {
              attrs: {
                fill: "#FFF",
                d: "M34.918 17.518l-1.291-2.237.19-.086.194-.051.116-.017 12.387-.001.239.029.142.059.215.117.177.143.103.116.092.14-3.301 1.904-.053-.067-.074-.058-.086-.031h-8.887l-.072.006-.046.01-.045.024z",
              },
            }),
            _vm._v(" "),
            _c("path", {
              attrs: {
                fill: "#D1D3D4",
                d: "M58.68 41.886v3.808l-.199-.012-.237-.076-.2-.09-.135-.113-.153-.174-12.297-21.247-.1-.208-.07-.196-.008-.194 2.574-.001.013.055.016.043.015.029 10.516 18.184.049.082.076.066.064.03.076.014z",
              },
            }),
            _vm._v(" "),
            _c("path", {
              attrs: {
                fill: "#E6E7E8",
                d: "M49.918 15.295l-.1.069-.1.086-.093.1-.063.083-4.131 7.142-.059.103-.029.087-.033.115-.028.175-.003.099v.03l2.574-.001.013-.059.019-.09.07-.121 3.154-5.457.035-.056.039-.043.055-.038-1.295-2.24-.025.016zM33.585 15.31l-.09.065-.076.063-.073.072-.044.05-.043.058-.038.055-.031.054-10.164 17.57-.127.282-.045.209-.009.077-.004.074h2.588l.007-.063.028-.074.035-.061 9.311-16.105.035-.05.05-.04.028-.023-1.294-2.238-.044.025z",
              },
            }),
            _vm._v(" "),
            _c("path", {
              attrs: {
                fill: "#BCBEC0",
                d: "M33.499 36.269l-.102.02h-6.449l-.066-.004-.058-.011-.06-.027-1.295 2.24.027.015.109.051.124.045.134.029.104.013h8.379l.09-.019.117-.027.166-.065.087-.047.026-.013-1.289-2.227-.044.027z",
              },
            }),
            _vm._v(" "),
            _c("path", {
              attrs: {
                fill: "#D1D3D4",
                d: "M26.763 36.247l-.022-.013-.022-.018-.025-.029-.029-.04-1.195-2.066-.017-.037-.013-.039-.008-.038-.001-.029h-2.594l.003.107.033.186.058.167.118.22 1.979 3.422.047.08.059.079.054.063.07.073.082.068.127.084 1.296-2.24z",
              },
            }),
          ]
        ),
      ]),
      _vm._v(" "),
      _c(
        "nav",
        {
          staticClass: "primary-nav",
          attrs: { id: "js-primary-nav", role: "navigation" },
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("ul", { staticClass: "nav-menu", attrs: { id: "js-nav-menu" } }, [
            _c("li", { staticClass: "active" }, [
              _c(
                "ul",
                [
                  _c(
                    "router-link",
                    { attrs: { tag: "li", to: "", "active-class": "" } },
                    [
                      _c("a", { attrs: { href: "#" } }, [
                        _c("i", {
                          staticClass: "fa-solid fa-pencil fa-3x",
                          staticStyle: { color: "white !important" },
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "nav-link-text",
                            attrs: { "data-i18n": "nav.application_intel" },
                          },
                          [_vm._v("REGISTRO")]
                        ),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      attrs: {
                        tag: "li",
                        to: "/registro",
                        "active-class": "active",
                      },
                    },
                    [
                      _c("a", { attrs: { href: "#" } }, [
                        _c("i", {
                          staticClass: "fa fa-minus fa-3x",
                          staticStyle: { color: "white !important" },
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "nav-link-text",
                            attrs: { "data-i18n": "nav.application_intel" },
                          },
                          [_vm._v("Nuevo Registro")]
                        ),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      attrs: {
                        tag: "li",
                        to: "/noasignado",
                        "active-class": "active",
                      },
                    },
                    [
                      _c("a", { attrs: { href: "#" } }, [
                        _c("i", {
                          staticClass: "fa fa-minus fa-3x",
                          staticStyle: { color: "white !important" },
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "nav-link-text",
                            attrs: { "data-i18n": "nav.application_intel" },
                          },
                          [_vm._v("Lista de registros")]
                        ),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    { attrs: { tag: "li", to: "", "active-class": "" } },
                    [
                      _c("a", { attrs: { href: "#" } }, [
                        _c("i", {
                          staticClass: "fa-solid fa-random fa-3x",
                          staticStyle: { color: "white !important" },
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "nav-link-text",
                            attrs: { "data-i18n": "nav.application_intel" },
                          },
                          [_vm._v("ASIGNACIONES")]
                        ),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      attrs: {
                        tag: "li",
                        to: "/asignacion",
                        "active-class": "active",
                      },
                    },
                    [
                      _c("a", { attrs: { href: "#" } }, [
                        _c("i", {
                          staticClass: "fa fa-minus fa-3x",
                          staticStyle: { color: "white !important" },
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "nav-link-text",
                            attrs: { "data-i18n": "nav.application_intel" },
                          },
                          [_vm._v("Lista de asignaciones")]
                        ),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    { attrs: { tag: "li", to: "", "active-class": "" } },
                    [
                      _c("a", { attrs: { href: "#" } }, [
                        _c("i", {
                          staticClass: "fa-solid fa-registered fa-3x",
                          staticStyle: { color: "white !important" },
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "nav-link-text",
                            attrs: { "data-i18n": "nav.application_intel" },
                          },
                          [_vm._v("RESERVADOS")]
                        ),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      attrs: {
                        tag: "li",
                        to: "/reservado",
                        "active-class": "active",
                      },
                    },
                    [
                      _c("a", { attrs: { href: "#" } }, [
                        _c("i", {
                          staticClass: "fa fa-minus fa-3x",
                          staticStyle: { color: "white !important" },
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "nav-link-text",
                            attrs: { "data-i18n": "nav.application_intel" },
                          },
                          [_vm._v("Reservados")]
                        ),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    { attrs: { tag: "li", to: "", "active-class": "" } },
                    [
                      _c("a", { attrs: { href: "#" } }, [
                        _c("i", {
                          staticClass: "fa-solid fa-database fa-3x",
                          staticStyle: { color: "white !important" },
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "nav-link-text",
                            attrs: { "data-i18n": "nav.application_intel" },
                          },
                          [_vm._v("PACKING LIST")]
                        ),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      attrs: {
                        tag: "li",
                        to: "/ingreso",
                        "active-class": "active",
                      },
                    },
                    [
                      _c("a", { attrs: { href: "#" } }, [
                        _c("i", {
                          staticClass: "fa fa-minus fa-3x",
                          staticStyle: { color: "white !important" },
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "nav-link-text",
                            attrs: { "data-i18n": "nav.application_intel" },
                          },
                          [_vm._v("Packing List")]
                        ),
                      ]),
                    ]
                  ),
                ],
                1
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("div", {
            staticClass: "filter-message js-filter-message bg-success-600",
          }),
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
    return _c("div", { staticClass: "nav-filter" }, [
      _c("div", { staticClass: "position-relative" }, [
        _c("input", {
          staticClass: "form-control",
          attrs: {
            type: "text",
            id: "nav_filter_input",
            placeholder: "Filter menu",
            tabindex: "0",
          },
        }),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn-primary btn-search-close js-waves-off",
            attrs: {
              href: "#",
              onclick: "return false;",
              "data-action": "toggle",
              "data-class": "list-filter-active",
              "data-target": ".page-sidebar",
            },
          },
          [_c("i", { staticClass: "fal fa-chevron-up" })]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);