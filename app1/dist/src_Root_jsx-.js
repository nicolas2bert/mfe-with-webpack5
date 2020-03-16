(window["webpackJsonpapp_01"] = window["webpackJsonpapp_01"] || []).push([["src_Root_jsx-"],{

/***/ "./src/App1.jsx":
/*!**********************!*\
  !*** ./src/App1.jsx ***!
  \**********************/
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
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content */ "./src/Content.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





class App1 extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
      store: this.props.store
    }, " ", react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Content__WEBPACK_IMPORTED_MODULE_2__.default, null), " ");
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App1);

/***/ }),

/***/ "./src/Content.jsx":
/*!*************************!*\
  !*** ./src/Content.jsx ***!
  \*************************/
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



class Content extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, " ", react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: e => this.props.updateVersion(this.props.appVersion + 1)
    }, " Increase App1 version ")), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, " ", react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: e => this.props.updateVersionThunk(this.props.appVersion + 1)
    }, " Increase THUNK App1 version ")), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "App1 version: ", this.props.appVersion), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null));
  }

}

function mapStateToProps(state) {
  return {
    appVersion: state.app.info.version
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateVersion: version => dispatch({
      type: 'UPDATE_VERSION',
      version
    }),
    updateVersionThunk: version => dispatch(dispatch => {
      return setTimeout(() => {
        dispatch({
          type: 'UPDATE_VERSION',
          version
        });
      }, 3000);
    })
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(Content));

/***/ }),

/***/ "./src/Root.jsx":
/*!**********************!*\
  !*** ./src/Root.jsx ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "?6365");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App1 */ "./src/App1.jsx");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");




class Root extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.store.addNamespacedReducer('app1', _reducers__WEBPACK_IMPORTED_MODULE_2__.default);
    this.store = this.props.store.getNameSpacedStore('app1');
  }

  render() {
    const isReady = !!this.props.store.getState().app1;
    return isReady && react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, " ", react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App1__WEBPACK_IMPORTED_MODULE_1__.default, {
      store: this.store
    }), " ");
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Root);

/***/ }),

/***/ "./src/reducers/app.js":
/*!*****************************!*\
  !*** ./src/reducers/app.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function app(state = {
  info: {
    version: 0
  }
}, action) {
  switch (action.type) {
    case 'INIT_APP':
      return { ...state,
        info: action.info
      };

    case 'UPDATE_VERSION':
      return { ...state,
        info: { ...state.info,
          version: action.version
        }
      };

    default:
      return state;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/reducers/app.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  app: _app__WEBPACK_IMPORTED_MODULE_0__.default
}));

/***/ })

}]);
//# sourceMappingURL=src_Root_jsx-.js.map