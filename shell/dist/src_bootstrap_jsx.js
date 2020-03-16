(window["webpackJsonpapp_01"] = window["webpackJsonpapp_01"] || []).push([["src_bootstrap_jsx"],{

/***/ "./src/Navbar.jsx":
/*!************************!*\
  !*** ./src/Navbar.jsx ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "?6365");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



class Navbar extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  // console.log('this.props.shellVersion!!!', this.props.shellVersion);
  render() {
    console.log('this.props!!!', this.props);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, " version: ", this.props.version, " "), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, " ", react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: e => this.props.init()
    }, " New Info "), " "));
  }

}

function mapStateToProps(state) {
  console.log('state!!!', state);
  return {
    version: state.shell.init.info.version
  };
}

function mapDispatchToProps(dispatch) {
  return {
    init: () => dispatch({
      type: 'INIT',
      info: {
        version: 1
      }
    })
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(Navbar));

/***/ }),

/***/ "./src/Shell.jsx":
/*!***********************!*\
  !*** ./src/Shell.jsx ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.e, __webpack_require__.t, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "?6365");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./src/Navbar.jsx");


 // import Root from 'app1/Root';

const Root = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "-_6ca7").then(__webpack_require__.t.bind(__webpack_require__, /*! app1/Root */ "?6ca7", 7)));

class Shell extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
      store: this.props.store
    }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navbar__WEBPACK_IMPORTED_MODULE_2__.default, null), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: 'fallback'
    }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Root, {
      store: this.props.store
    }))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shell);

/***/ }),

/***/ "./src/bootstrap.jsx":
/*!***************************!*\
  !*** ./src/bootstrap.jsx ***!
  \***************************/
/*! namespace exports */
/*! exports [not provided] [maybe used (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "?6365");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "?a75e");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Shell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shell */ "./src/Shell.jsx");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers_init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/init */ "./src/reducers/init.js");





const shellReducer = (0,redux__WEBPACK_IMPORTED_MODULE_4__.combineReducers)({
  init: _reducers_init__WEBPACK_IMPORTED_MODULE_3__.default
});
const rootReducer = createReducer({});
const store = (0,redux__WEBPACK_IMPORTED_MODULE_4__.createStore)(rootReducer);
store.asyncReducers = {};

store.addReducer = (key, reducer) => {
  store.asyncReducers[key] = reducer;
  console.log('store1!!!', store);
  store.replaceReducer(createReducer(store.asyncReducers));
  console.log('store2!!!', store);
};

react_dom__WEBPACK_IMPORTED_MODULE_1___default().render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Shell__WEBPACK_IMPORTED_MODULE_2__.default, {
  store: store
}), document.getElementById('app'));

function createReducer(asyncReducers) {
  return (0,redux__WEBPACK_IMPORTED_MODULE_4__.combineReducers)({
    shell: shellReducer,
    ...asyncReducers
  });
}

/***/ }),

/***/ "./src/reducers/init.js":
/*!******************************!*\
  !*** ./src/reducers/init.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function init(state = {
  info: {
    version: '0'
  }
}, action) {
  switch (action.type) {
    case 'INIT':
      return { ...state,
        info: action.info
      };

    default:
      return state;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);

/***/ })

}]);
//# sourceMappingURL=src_bootstrap_jsx.js.map