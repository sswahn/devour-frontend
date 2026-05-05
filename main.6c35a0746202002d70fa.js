"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdevour_frontend"] = self["webpackChunkdevour_frontend"] || []).push([["main"],{

/***/ "./src/App.js"
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorBoundary */ \"./src/ErrorBoundary.js\");\n/* harmony import */ var _Providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Providers */ \"./src/Providers.js\");\n/* harmony import */ var _components_Interface_Interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Interface/Interface */ \"./src/components/Interface/Interface.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\n\n\nfunction App() {\n  return /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/React.createElement(_ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, /*#__PURE__*/React.createElement(_Providers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, /*#__PURE__*/React.createElement(_components_Interface_Interface__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null))));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://devour-frontend/./src/App.js?\n}");

/***/ },

/***/ "./src/ErrorBoundary.js"
/*!******************************!*\
  !*** ./src/ErrorBoundary.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utilities_logError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utilities/logError */ \"./src/utilities/logError.js\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\n\n\nfunction _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\n\n\nvar ErrorBoundary = /*#__PURE__*/function (_Component) {\n  function ErrorBoundary(props) {\n    var _this;\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ErrorBoundary);\n    _this = _callSuper(this, ErrorBoundary, [props]);\n    _this.state = {\n      hasError: false\n    };\n    return _this;\n  }\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ErrorBoundary, _Component);\n  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ErrorBoundary, [{\n    key: \"componentDidCatch\",\n    value: function componentDidCatch(error, info) {\n      (0,_utilities_logError__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(error, {\n        source: 'react.errorBoundary',\n        componentStack: info.componentStack\n      });\n      this.setState({\n        hasError: true,\n        error: error\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      if (this.state.hasError) {\n        // render custom fallback UI\n        return /*#__PURE__*/React.createElement(\"div\", {\n          style: {\n            background: 'black',\n            color: 'white',\n            height: '100%',\n            padding: '200px 0 0 200px',\n            width: '100%'\n          }\n        }, /*#__PURE__*/React.createElement(\"h1\", null, \"Oops! Something went wrong.\"), /*#__PURE__*/React.createElement(\"p\", null, \"We\\u2019re sorry for the inconvenience. Our team has been notified.\"), /*#__PURE__*/React.createElement(\"button\", {\n          onClick: function onClick() {\n            return window.location.reload();\n          },\n          type: \"button\",\n          style: {\n            width: '100px',\n            height: '44px'\n          }\n        }, \"Try Again\"));\n      }\n      return this.props.children;\n    }\n  }], [{\n    key: \"getDerivedStateFromError\",\n    value: function getDerivedStateFromError(error) {\n      // Update state so the next render will show the fallback UI.\n      return {\n        hasError: true\n      };\n    }\n  }]);\n}(react__WEBPACK_IMPORTED_MODULE_5__.Component);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);\n\n//# sourceURL=webpack://devour-frontend/./src/ErrorBoundary.js?\n}");

/***/ },

/***/ "./src/Providers.js"
/*!**************************!*\
  !*** ./src/Providers.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Providers_SessionProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Providers/SessionProvider */ \"./src/components/Providers/SessionProvider.js\");\n/* harmony import */ var _components_Providers_FocusTrapProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Providers/FocusTrapProvider */ \"./src/components/Providers/FocusTrapProvider.js\");\n/* harmony import */ var _components_Providers_OverlayProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Providers/OverlayProvider */ \"./src/components/Providers/OverlayProvider.js\");\n/* harmony import */ var _components_Providers_ProfileProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Providers/ProfileProvider */ \"./src/components/Providers/ProfileProvider.js\");\n/* harmony import */ var _components_Providers_DialogProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Providers/DialogProvider */ \"./src/components/Providers/DialogProvider.js\");\n/* harmony import */ var _components_Providers_ContentProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Providers/ContentProvider */ \"./src/components/Providers/ContentProvider.js\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\n\n\n\nfunction Providers(_ref) {\n  var children = _ref.children;\n  return /*#__PURE__*/React.createElement(_components_Providers_SessionProvider__WEBPACK_IMPORTED_MODULE_0__.SessionProvider, null, /*#__PURE__*/React.createElement(_components_Providers_FocusTrapProvider__WEBPACK_IMPORTED_MODULE_1__.FocusTrapProvider, null, /*#__PURE__*/React.createElement(_components_Providers_OverlayProvider__WEBPACK_IMPORTED_MODULE_2__.OverlayProvider, null, /*#__PURE__*/React.createElement(_components_Providers_ProfileProvider__WEBPACK_IMPORTED_MODULE_3__.ProfileProvider, null, /*#__PURE__*/React.createElement(_components_Providers_DialogProvider__WEBPACK_IMPORTED_MODULE_4__.DialogProvider, null, /*#__PURE__*/React.createElement(_components_Providers_ContentProvider__WEBPACK_IMPORTED_MODULE_5__.ContentProvider, null, children))))));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Providers);\n\n//# sourceURL=webpack://devour-frontend/./src/Providers.js?\n}");

/***/ },

/***/ "./src/components/Avatar/Avatar.js"
/*!*****************************************!*\
  !*** ./src/components/Avatar/Avatar.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./src/config.js\");\n/* harmony import */ var _hooks_useProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useProfile */ \"./src/hooks/useProfile.js\");\n/* harmony import */ var _hooks_useOverlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useOverlay */ \"./src/hooks/useOverlay.js\");\n/* harmony import */ var _Identicon_Identicon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Identicon/Identicon */ \"./src/components/Identicon/Identicon.js\");\n/* harmony import */ var _Avatar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Avatar.module.css */ \"./src/components/Avatar/Avatar.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\n\n\n\nfunction Avatar(_ref) {\n  var username = _ref.username,\n    image = _ref.image,\n    _ref$size = _ref.size,\n    size = _ref$size === void 0 ? 24 : _ref$size;\n  var _useOverlay = (0,_hooks_useOverlay__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n    openOverlay = _useOverlay.openOverlay;\n  var _useProfile = (0,_hooks_useProfile__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n    setUserProfile = _useProfile.setUserProfile;\n  var avatarRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var action = function action() {\n    setUserProfile(username);\n    openOverlay(_config__WEBPACK_IMPORTED_MODULE_1__.overlay.profile, avatarRef.current);\n  };\n  var onClick = function onClick(event) {\n    var _navigator$vibrate, _navigator;\n    (_navigator$vibrate = (_navigator = navigator).vibrate) === null || _navigator$vibrate === void 0 || _navigator$vibrate.call(_navigator, 50);\n    action();\n  };\n  var onKeyDown = function onKeyDown(event) {\n    if (event.key === 'Enter') {\n      event.preventDefault();\n      action();\n    }\n  };\n  return /*#__PURE__*/React.createElement(\"button\", {\n    className: _Avatar_module_css__WEBPACK_IMPORTED_MODULE_5__[\"default\"].avatar,\n    ref: avatarRef,\n    onClick: onClick,\n    onKeyDown: onKeyDown,\n    type: \"button\",\n    \"aria-label\": \"\".concat(username, \"'s avatar\")\n  }, image ? /*#__PURE__*/React.createElement(\"img\", {\n    src: image,\n    alt: \"\".concat(username, \"'s avatar\"),\n    loading: \"lazy\",\n    width: size,\n    height: size\n  }) : /*#__PURE__*/React.createElement(_Identicon_Identicon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    seed: username\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Avatar);\n\n//# sourceURL=webpack://devour-frontend/./src/components/Avatar/Avatar.js?\n}");

/***/ },

/***/ "./src/components/Dialog/Dialog.js"
/*!*****************************************!*\
  !*** ./src/components/Dialog/Dialog.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Dialog_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dialog.module.css */ \"./src/components/Dialog/Dialog.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nfunction Dialog(_ref) {\n  var dialogRef = _ref.dialogRef,\n    content = _ref.content;\n  return /*#__PURE__*/React.createElement(\"dialog\", {\n    id: \"dialog\",\n    ref: dialogRef,\n    className: _Dialog_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dialog\n  }, content);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dialog);\n\n//# sourceURL=webpack://devour-frontend/./src/components/Dialog/Dialog.js?\n}");

/***/ },

/***/ "./src/components/Header/DashboardButton/DashboardButton.js"
/*!******************************************************************!*\
  !*** ./src/components/Header/DashboardButton/DashboardButton.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config */ \"./src/config.js\");\n/* harmony import */ var _hooks_useOverlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useOverlay */ \"./src/hooks/useOverlay.js\");\n/* harmony import */ var _Icons_LineChartIcon_LineChartIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Icons/LineChartIcon/LineChartIcon */ \"./src/components/Icons/LineChartIcon/LineChartIcon.js\");\n/* harmony import */ var _DashboardButton_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DashboardButton.module.css */ \"./src/components/Header/DashboardButton/DashboardButton.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\n\n\nfunction DashboardButton() {\n  var buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var _useOverlay = (0,_hooks_useOverlay__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n    openOverlay = _useOverlay.openOverlay;\n  var action = function action() {\n    openOverlay(_config__WEBPACK_IMPORTED_MODULE_1__.overlay.dashboard, buttonRef.current);\n  };\n  var onClick = function onClick(event) {\n    var _navigator$vibrate, _navigator;\n    (_navigator$vibrate = (_navigator = navigator).vibrate) === null || _navigator$vibrate === void 0 || _navigator$vibrate.call(_navigator, 50);\n    action();\n  };\n  var onKeyDown = function onKeyDown(event) {\n    if (event.key === 'Enter') {\n      event.preventDefault();\n      action();\n    }\n  };\n  return /*#__PURE__*/React.createElement(\"button\", {\n    className: _DashboardButton_module_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].dashboardButton,\n    onClick: onClick,\n    onKeyDown: onKeyDown,\n    ref: buttonRef,\n    type: \"button\",\n    \"aria-label\": \"open dashboard\"\n  }, /*#__PURE__*/React.createElement(_Icons_LineChartIcon_LineChartIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardButton);\n\n//# sourceURL=webpack://devour-frontend/./src/components/Header/DashboardButton/DashboardButton.js?\n}");

/***/ },

/***/ "./src/components/Header/Header.js"
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useScrollEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useScrollEffect */ \"./src/hooks/useScrollEffect.js\");\n/* harmony import */ var _hooks_useSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useSession */ \"./src/hooks/useSession.js\");\n/* harmony import */ var _Icons_HomeIcon_HomeIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icons/HomeIcon/HomeIcon */ \"./src/components/Icons/HomeIcon/HomeIcon.js\");\n/* harmony import */ var _DashboardButton_DashboardButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DashboardButton/DashboardButton */ \"./src/components/Header/DashboardButton/DashboardButton.js\");\n/* harmony import */ var _LoginButton_LoginButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoginButton/LoginButton */ \"./src/components/Header/LoginButton/LoginButton.js\");\n/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Header.module.css */ \"./src/components/Header/Header.module.css\");\n/* harmony import */ var _Avatar_Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Avatar/Avatar */ \"./src/components/Avatar/Avatar.js\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\n\n\n\n\n\nvar Header = function Header(_ref) {\n  var openAuthentication = _ref.openAuthentication,\n    openDashboard = _ref.openDashboard;\n  var _useSession = (0,_hooks_useSession__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n    session = _useSession.session;\n  var _useScrollEffect = (0,_hooks_useScrollEffect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n    scrollEffect = _useScrollEffect.scrollEffect;\n  var headerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    headerRef && scrollEffect(headerRef.current, _Header_module_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].hidden);\n  }, []);\n  return /*#__PURE__*/React.createElement(\"header\", {\n    ref: headerRef,\n    className: _Header_module_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].header\n  }, /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"button\", {\n    onClick: function onClick() {\n      return navigator.vibrate(50);\n    },\n    type: \"button\",\n    \"aria-label\": \"home\"\n  }, /*#__PURE__*/React.createElement(_Icons_HomeIcon_HomeIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)), /*#__PURE__*/React.createElement(\"nav\", null, session.isAuthenticated &&\n  /*#__PURE__*/\n  // && .isProUser &&\n  React.createElement(_DashboardButton_DashboardButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    openDashboard: openDashboard\n  }), session.isAuthenticated && /*#__PURE__*/React.createElement(_LoginButton_LoginButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    openAuthentication: openAuthentication\n  }))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://devour-frontend/./src/components/Header/Header.js?\n}");

/***/ },

/***/ "./src/components/Header/LoginButton/LoginButton.js"
/*!**********************************************************!*\
  !*** ./src/components/Header/LoginButton/LoginButton.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config */ \"./src/config.js\");\n/* harmony import */ var _hooks_useOverlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useOverlay */ \"./src/hooks/useOverlay.js\");\n/* harmony import */ var _Icons_RightToBracketIcon_RightToBracketIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Icons/RightToBracketIcon/RightToBracketIcon */ \"./src/components/Icons/RightToBracketIcon/RightToBracketIcon.js\");\n/* harmony import */ var _LoginButton_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoginButton.module.css */ \"./src/components/Header/LoginButton/LoginButton.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\n\n\nfunction LoginButton() {\n  var buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var _useOverlay = (0,_hooks_useOverlay__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n    openOverlay = _useOverlay.openOverlay;\n  var action = function action() {\n    openOverlay(_config__WEBPACK_IMPORTED_MODULE_1__.overlay.login, buttonRef.current);\n  };\n  var onClick = function onClick(event) {\n    var _navigator$vibrate, _navigator;\n    (_navigator$vibrate = (_navigator = navigator).vibrate) === null || _navigator$vibrate === void 0 || _navigator$vibrate.call(_navigator, 50);\n    action();\n  };\n  var onKeyDown = function onKeyDown(event) {\n    if (event.key === 'Enter') {\n      event.preventDefault();\n      action();\n    }\n  };\n  return /*#__PURE__*/React.createElement(\"button\", {\n    className: _LoginButton_module_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].loginButton,\n    ref: buttonRef,\n    onClick: onClick,\n    onKeyDown: onKeyDown,\n    type: \"button\",\n    \"aria-label\": \"sign in\"\n  }, /*#__PURE__*/React.createElement(_Icons_RightToBracketIcon_RightToBracketIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginButton);\n\n//# sourceURL=webpack://devour-frontend/./src/components/Header/LoginButton/LoginButton.js?\n}");

/***/ },

/***/ "./src/components/Icons/BellIcon/BellIcon.js"
/*!***************************************************!*\
  !*** ./src/components/Icons/BellIcon/BellIcon.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction BellIcon(_ref) {\n  var _ref$size = _ref.size,\n    size = _ref$size === void 0 ? 24 : _ref$size;\n  return /*#__PURE__*/React.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 448 512\",\n    width: size,\n    height: size,\n    \"aria-hidden\": \"true\"\n  }, /*#__PURE__*/React.createElement(\"path\", {\n    d: \"M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z\"\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BellIcon);\n\n//# sourceURL=webpack://devour-frontend/./src/components/Icons/BellIcon/BellIcon.js?\n}");

/***/ },

/***/ "./src/components/Icons/HomeIcon/HomeIcon.js"
/*!***************************************************!*\
  !*** ./src/components/Icons/HomeIcon/HomeIcon.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction HomeIcon(_ref) {\n  var _ref$size = _ref.size,\n    size = _ref$size === void 0 ? 24 : _ref$size;\n  return /*#__PURE__*/React.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 640 640\",\n    width: size,\n    height: size,\n    \"aria-hidden\": \"true\"\n  }, /*#__PURE__*/React.createElement(\"path\", {\n    d: \"M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM304 384L336 384C362.5 384 384 405.5 384 432L384 528L256 528L256 432C256 405.5 277.5 384 304 384z\"\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeIcon);\n\n//# sourceURL=webpack://devour-frontend/./src/components/Icons/HomeIcon/HomeIcon.js?\n}");

/***/ },

/***/ "./src/components/Icons/LineChartIcon/LineChartIcon.js"
/*!*************************************************************!*\
  !*** ./src/components/Icons/LineChartIcon/LineChartIcon.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction LineChartIcon(_ref) {\n  var _ref$size = _ref.size,\n    size = _ref$size === void 0 ? 24 : _ref$size;\n  return /*#__PURE__*/React.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 640 640\",\n    width: size,\n    height: size,\n    \"aria-hidden\": \"true\"\n  }, /*#__PURE__*/React.createElement(\"path\", {\n    d: \"M128 128C128 110.3 113.7 96 96 96C78.3 96 64 110.3 64 128L64 464C64 508.2 99.8 544 144 544L544 544C561.7 544 576 529.7 576 512C576 494.3 561.7 480 544 480L144 480C135.2 480 128 472.8 128 464L128 128zM534.6 214.6C547.1 202.1 547.1 181.8 534.6 169.3C522.1 156.8 501.8 156.8 489.3 169.3L384 274.7L326.6 217.4C314.1 204.9 293.8 204.9 281.3 217.4L185.3 313.4C172.8 325.9 172.8 346.2 185.3 358.7C197.8 371.2 218.1 371.2 230.6 358.7L304 285.3L361.4 342.7C373.9 355.2 394.2 355.2 406.7 342.7L534.7 214.7z\"\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineChartIcon);\n\n//# sourceURL=webpack://devour-frontend/./src/components/Icons/LineChartIcon/LineChartIcon.js?\n}");

/***/ },

/***/ "./src/components/Icons/PlusIcon/PlusIcon.js"
/*!***************************************************!*\
  !*** ./src/components/Icons/PlusIcon/PlusIcon.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction PlusIcon(_ref) {\n  var _ref$size = _ref.size,\n    size = _ref$size === void 0 ? 24 : _ref$size;\n  return /*#__PURE__*/React.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 640 640\",\n    width: size,\n    height: size,\n    \"aria-hidden\": \"true\"\n  }, /*#__PURE__*/React.createElement(\"path\", {\n    d: \"M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z\"\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlusIcon);\n\n//# sourceURL=webpack://devour-frontend/./src/components/Icons/PlusIcon/PlusIcon.js?\n}");

/***/ },

/***/ "./src/components/Icons/RightToBracketIcon/RightToBracketIcon.js"
/*!***********************************************************************!*\
  !*** ./src/components/Icons/RightToBracketIcon/RightToBracketIcon.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction RightToBracketIcon(_ref) {\n  var _ref$size = _ref.size,\n    size = _ref$size === void 0 ? 24 : _ref$size;\n  return /*#__PURE__*/React.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 512 512\",\n    width: size,\n    height: size,\n    \"aria-hidden\": \"true\"\n  }, /*#__PURE__*/React.createElement(\"path\", {\n    d: \"M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z\"\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RightToBracketIcon);\n\n//# sourceURL=webpack://devour-frontend/./src/components/Icons/RightToBracketIcon/RightToBracketIcon.js?\n}");

/***/ },

/***/ "./src/components/Icons/SearchIcon/SearchIcon.js"
/*!*******************************************************!*\
  !*** ./src/components/Icons/SearchIcon/SearchIcon.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction SearchIcon(_ref) {\n  var _ref$size = _ref.size,\n    size = _ref$size === void 0 ? 24 : _ref$size;\n  return /*#__PURE__*/React.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 640 640\",\n    width: size,\n    height: size,\n    \"aria-hidden\": \"true\"\n  }, /*#__PURE__*/React.createElement(\"path\", {\n    d: \"M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z\"\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchIcon);\n\n//# sourceURL=webpack://devour-frontend/./src/components/Icons/SearchIcon/SearchIcon.js?\n}");

/***/ },

/***/ "./src/components/Icons/UserIcon/UserIcon.js"
/*!***************************************************!*\
  !*** ./src/components/Icons/UserIcon/UserIcon.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction UserIcon(_ref) {\n  var _ref$size = _ref.size,\n    size = _ref$size === void 0 ? 24 : _ref$size;\n  return /*#__PURE__*/React.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 512 512\",\n    width: size,\n    height: size,\n    \"aria-hidden\": \"true\"\n  }, /*#__PURE__*/React.createElement(\"path\", {\n    d: \"M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z\"\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserIcon);\n\n//# sourceURL=webpack://devour-frontend/./src/components/Icons/UserIcon/UserIcon.js?\n}");

/***/ },

/***/ "./src/components/Identicon/Identicon.js"
/*!***********************************************!*\
  !*** ./src/components/Identicon/Identicon.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction Identicon(_ref) {\n  var _ref$seed = _ref.seed,\n    seed = _ref$seed === void 0 ? \"user\" : _ref$seed,\n    _ref$size = _ref.size,\n    size = _ref$size === void 0 ? 48 : _ref$size;\n  // hash\n  var hash = 0;\n  for (var i = 0; i < seed.length; i++) {\n    hash = seed.charCodeAt(i) + ((hash << 5) - hash);\n  }\n  var hue = Math.abs(hash) % 360;\n  var color = \"hsl(\".concat(hue, \", 60%, 55%)\");\n  var grid = 5;\n  var cell = size / grid;\n  var cells = [];\n  var bitIndex = 0;\n  for (var x = 0; x < Math.ceil(grid / 2); x++) {\n    for (var y = 0; y < grid; y++) {\n      var bit = hash >> bitIndex & 1;\n      bitIndex++;\n      if (bit) {\n        // left\n        cells.push(/*#__PURE__*/React.createElement(\"rect\", {\n          key: \"l-\".concat(x, \"-\").concat(y),\n          x: x * cell,\n          y: y * cell,\n          width: cell,\n          height: cell,\n          fill: color\n        }));\n\n        // mirrored right\n        cells.push(/*#__PURE__*/React.createElement(\"rect\", {\n          key: \"r-\".concat(x, \"-\").concat(y),\n          x: (grid - x - 1) * cell,\n          y: y * cell,\n          width: cell,\n          height: cell,\n          fill: color\n        }));\n      }\n    }\n  }\n  return /*#__PURE__*/React.createElement(\"svg\", {\n    width: size,\n    height: size\n  }, /*#__PURE__*/React.createElement(\"rect\", {\n    width: \"100%\",\n    height: \"100%\",\n    fill: \"#f0f0f0\"\n  }), cells);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Identicon);\n\n//# sourceURL=webpack://devour-frontend/./src/components/Identicon/Identicon.js?\n}");

/***/ },

/***/ "./src/components/Interface/Interface.js"
/*!***********************************************!*\
  !*** ./src/components/Interface/Interface.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useSelectionToSpeech__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useSelectionToSpeech */ \"./src/hooks/useSelectionToSpeech.js\");\n/* harmony import */ var _hooks_useContextMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useContextMenu */ \"./src/hooks/useContextMenu.js\");\n/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Header/Header */ \"./src/components/Header/Header.js\");\n/* harmony import */ var _Main_Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Main/Main */ \"./src/components/Main/Main.js\");\n/* harmony import */ var _MobileNav_MobileNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MobileNav/MobileNav */ \"./src/components/MobileNav/MobileNav.js\");\n/* harmony import */ var _LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../LoadingSpinner/LoadingSpinner */ \"./src/components/LoadingSpinner/LoadingSpinner.js\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\n\n\n\n\nvar Overlays = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_sswahn_database_src_index_js-node_modules_babel_runtime_regenerator_inde-55ec4e\"), __webpack_require__.e(\"src_components_CloseButton_CloseButton_js-src_components_Dropdown_Dropdown_js-src_features_Co-d2be30\"), __webpack_require__.e(\"src_components_Overlays_Overlays_js-src_components_CloseButton_CloseButton_module_css-src_com-f4a4c4\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../Overlays/Overlays */ \"./src/components/Overlays/Overlays.js\"));\n});\nfunction Interface() {\n  (0,_hooks_useSelectionToSpeech__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_hooks_useContextMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), /*#__PURE__*/React.createElement(_Main_Main__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), /*#__PURE__*/React.createElement(_MobileNav_MobileNav__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n    fallback: /*#__PURE__*/React.createElement(_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)\n  }, /*#__PURE__*/React.createElement(Overlays, null)));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Interface);\n\n//# sourceURL=webpack://devour-frontend/./src/components/Interface/Interface.js?\n}");

/***/ },

/***/ "./src/components/LoadingSpinner/LoadingSpinner.js"
/*!*********************************************************!*\
  !*** ./src/components/LoadingSpinner/LoadingSpinner.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.module.css */ \"./src/components/LoadingSpinner/styles.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar LoadingSpinner = function LoadingSpinner(_ref) {\n  var _ref$size = _ref.size,\n    size = _ref$size === void 0 ? 24 : _ref$size;\n  return /*#__PURE__*/React.createElement(\"svg\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].spinner,\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 512 512\",\n    width: size,\n    height: size,\n    role: \"img\",\n    \"aria-label\": \"loading icon\"\n  }, /*#__PURE__*/React.createElement(\"path\", {\n    d: \"M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z\"\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingSpinner);\n\n//# sourceURL=webpack://devour-frontend/./src/components/LoadingSpinner/LoadingSpinner.js?\n}");

/***/ },

/***/ "./src/components/Main/Main.js"
/*!*************************************!*\
  !*** ./src/components/Main/Main.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Suggestions_Suggestions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Suggestions/Suggestions */ \"./src/components/Suggestions/Suggestions.js\");\n/* harmony import */ var _LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LoadingSpinner/LoadingSpinner */ \"./src/components/LoadingSpinner/LoadingSpinner.js\");\n/* harmony import */ var _Main_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Main.module.css */ \"./src/components/Main/Main.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\nvar Feed = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_sswahn_database_src_index_js-node_modules_babel_runtime_regenerator_inde-55ec4e\"), __webpack_require__.e(\"src_components_CloseButton_CloseButton_js-src_components_Dropdown_Dropdown_js-src_features_Co-d2be30\"), __webpack_require__.e(\"src_features_Feed_Feed_js-src_components_CloseButton_CloseButton_module_css-src_components_Dr-1b0b2b\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../features/Feed/Feed */ \"./src/features/Feed/Feed.js\"));\n});\n\nfunction Main() {\n  return /*#__PURE__*/React.createElement(\"main\", {\n    className: _Main_module_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].main,\n    \"aria-description\": \"When text is highlighted, it will automatically be read aloud.\"\n  }, /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n    fallback: /*#__PURE__*/React.createElement(_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)\n  }, /*#__PURE__*/React.createElement(Feed, null)));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);\n\n//# sourceURL=webpack://devour-frontend/./src/components/Main/Main.js?\n}");

/***/ },

/***/ "./src/components/MobileNav/CameraButton/CameraButton.js"
/*!***************************************************************!*\
  !*** ./src/components/MobileNav/CameraButton/CameraButton.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config */ \"./src/config.js\");\n/* harmony import */ var _hooks_useOverlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useOverlay */ \"./src/hooks/useOverlay.js\");\n/* harmony import */ var _Icons_PlusIcon_PlusIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Icons/PlusIcon/PlusIcon */ \"./src/components/Icons/PlusIcon/PlusIcon.js\");\n/* harmony import */ var _CameraButton_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CameraButton.module.css */ \"./src/components/MobileNav/CameraButton/CameraButton.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\n\n\nfunction CameraButton() {\n  var buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var _useOverlay = (0,_hooks_useOverlay__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n    openOverlay = _useOverlay.openOverlay;\n  var action = function action() {\n    return;\n    // await document.getElementById('portal').requestFullscreen()\n    // await screen.orientation.lock('portrait')\n    // removed by dead control flow\n\n  };\n  var onClick = function onClick(event) {\n    var _navigator$vibrate, _navigator;\n    (_navigator$vibrate = (_navigator = navigator).vibrate) === null || _navigator$vibrate === void 0 || _navigator$vibrate.call(_navigator, 50);\n    action();\n  };\n  var onKeyDown = function onKeyDown(event) {\n    if (event.key === 'Enter') {\n      event.preventDefault();\n      action();\n    }\n  };\n  return /*#__PURE__*/React.createElement(\"button\", {\n    className: _CameraButton_module_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].cameraButton,\n    ref: buttonRef,\n    onClick: onClick,\n    onKeyDown: onKeyDown,\n    type: \"button\",\n    \"aria-label\": \"open camera\",\n    \"aria-haspopup\": \"dialog\"\n  }, /*#__PURE__*/React.createElement(_Icons_PlusIcon_PlusIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    size: 32\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CameraButton);\n\n//# sourceURL=webpack://devour-frontend/./src/components/MobileNav/CameraButton/CameraButton.js?\n}");

/***/ },

/***/ "./src/components/MobileNav/HomeButton/HomeButton.js"
/*!***********************************************************!*\
  !*** ./src/components/MobileNav/HomeButton/HomeButton.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Icons_HomeIcon_HomeIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Icons/HomeIcon/HomeIcon */ \"./src/components/Icons/HomeIcon/HomeIcon.js\");\n/* harmony import */ var _HomeButton_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeButton.module.css */ \"./src/components/MobileNav/HomeButton/HomeButton.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nfunction HomeButton() {\n  var action = function action() {\n    window.scrollTo({\n      behavior: 'smooth',\n      top: 0\n    });\n  };\n  var onClick = function onClick(event) {\n    var _navigator$vibrate, _navigator;\n    (_navigator$vibrate = (_navigator = navigator).vibrate) === null || _navigator$vibrate === void 0 || _navigator$vibrate.call(_navigator, 50);\n    action();\n  };\n  var onKeyDown = function onKeyDown(event) {\n    if (event.key === 'Enter') {\n      event.preventDefault();\n      action();\n    }\n  };\n  return /*#__PURE__*/React.createElement(\"button\", {\n    className: _HomeButton_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].homeButton,\n    onClick: onClick\n    // onKeyDown={onKeyDown} \n    ,\n    type: \"button\",\n    \"aria-label\": \"scroll to top\"\n  }, /*#__PURE__*/React.createElement(_Icons_HomeIcon_HomeIcon__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeButton);\n\n//# sourceURL=webpack://devour-frontend/./src/components/MobileNav/HomeButton/HomeButton.js?\n}");

/***/ },

/***/ "./src/components/MobileNav/MobileNav.js"
/*!***********************************************!*\
  !*** ./src/components/MobileNav/MobileNav.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useScrollEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useScrollEffect */ \"./src/hooks/useScrollEffect.js\");\n/* harmony import */ var _HomeButton_HomeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeButton/HomeButton */ \"./src/components/MobileNav/HomeButton/HomeButton.js\");\n/* harmony import */ var _SearchButton_SearchButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchButton/SearchButton */ \"./src/components/MobileNav/SearchButton/SearchButton.js\");\n/* harmony import */ var _CameraButton_CameraButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CameraButton/CameraButton */ \"./src/components/MobileNav/CameraButton/CameraButton.js\");\n/* harmony import */ var _NotificationsButton_NotificationsButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NotificationsButton/NotificationsButton */ \"./src/components/MobileNav/NotificationsButton/NotificationsButton.js\");\n/* harmony import */ var _ProfileButton_ProfileButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProfileButton/ProfileButton */ \"./src/components/MobileNav/ProfileButton/ProfileButton.js\");\n/* harmony import */ var _MobileNav_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MobileNav.module.css */ \"./src/components/MobileNav/MobileNav.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\n\n\n\n\n\nfunction MobileNav() {\n  var navRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var _useScrollEffect = (0,_hooks_useScrollEffect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n    scrollEffect = _useScrollEffect.scrollEffect;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    navRef && scrollEffect(navRef.current, _MobileNav_module_css__WEBPACK_IMPORTED_MODULE_7__[\"default\"].hidden);\n  }, []);\n  return /*#__PURE__*/React.createElement(\"nav\", {\n    ref: navRef,\n    className: _MobileNav_module_css__WEBPACK_IMPORTED_MODULE_7__[\"default\"].navigation,\n    \"aria-label\": \"primary navigation\"\n  }, /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(_HomeButton_HomeButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/React.createElement(_SearchButton_SearchButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), /*#__PURE__*/React.createElement(_CameraButton_CameraButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), /*#__PURE__*/React.createElement(_NotificationsButton_NotificationsButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), /*#__PURE__*/React.createElement(_ProfileButton_ProfileButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileNav);\n\n//# sourceURL=webpack://devour-frontend/./src/components/MobileNav/MobileNav.js?\n}");

/***/ },

/***/ "./src/components/MobileNav/NotificationsButton/NotificationsButton.js"
/*!*****************************************************************************!*\
  !*** ./src/components/MobileNav/NotificationsButton/NotificationsButton.js ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config */ \"./src/config.js\");\n/* harmony import */ var _hooks_useOverlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useOverlay */ \"./src/hooks/useOverlay.js\");\n/* harmony import */ var _Icons_BellIcon_BellIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Icons/BellIcon/BellIcon */ \"./src/components/Icons/BellIcon/BellIcon.js\");\n/* harmony import */ var _NotificationsButton_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NotificationsButton.module.css */ \"./src/components/MobileNav/NotificationsButton/NotificationsButton.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\n\n\nfunction NotificationsButton() {\n  var buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var _useOverlay = (0,_hooks_useOverlay__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n    openOverlay = _useOverlay.openOverlay;\n  var action = function action() {\n    openOverlay(_config__WEBPACK_IMPORTED_MODULE_1__.overlay.notifications, buttonRef.current);\n  };\n  var onClick = function onClick(event) {\n    var _navigator$vibrate, _navigator;\n    (_navigator$vibrate = (_navigator = navigator).vibrate) === null || _navigator$vibrate === void 0 || _navigator$vibrate.call(_navigator, 50);\n    action();\n  };\n  var onKeyDown = function onKeyDown(event) {\n    if (event.key === 'Enter') {\n      event.preventDefault();\n      action();\n    }\n  };\n  return /*#__PURE__*/React.createElement(\"button\", {\n    className: _NotificationsButton_module_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].notificationsButton,\n    ref: buttonRef,\n    onClick: onClick,\n    onKeyDown: onKeyDown,\n    type: \"button\",\n    \"aria-label\": \"open notifications\",\n    \"aria-haspopup\": \"dialog\"\n  }, /*#__PURE__*/React.createElement(_Icons_BellIcon_BellIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), /*#__PURE__*/React.createElement(\"div\", {\n    role: \"status\",\n    \"aria-label\": \"notification indicator\",\n    \"aria-hidden\": \"false\"\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationsButton);\n\n//# sourceURL=webpack://devour-frontend/./src/components/MobileNav/NotificationsButton/NotificationsButton.js?\n}");

/***/ },

/***/ "./src/components/MobileNav/ProfileButton/ProfileButton.js"
/*!*****************************************************************!*\
  !*** ./src/components/MobileNav/ProfileButton/ProfileButton.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config */ \"./src/config.js\");\n/* harmony import */ var _hooks_useSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useSession */ \"./src/hooks/useSession.js\");\n/* harmony import */ var _hooks_useProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useProfile */ \"./src/hooks/useProfile.js\");\n/* harmony import */ var _hooks_useOverlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useOverlay */ \"./src/hooks/useOverlay.js\");\n/* harmony import */ var _Icons_UserIcon_UserIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Icons/UserIcon/UserIcon */ \"./src/components/Icons/UserIcon/UserIcon.js\");\n/* harmony import */ var _ProfileButton_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProfileButton.module.css */ \"./src/components/MobileNav/ProfileButton/ProfileButton.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\n\n\n\n\nfunction ProfileButton() {\n  var buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var _useSession = (0,_hooks_useSession__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n    session = _useSession.session;\n  var _useProfile = (0,_hooks_useProfile__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n    setUserProfile = _useProfile.setUserProfile;\n  var _useOverlay = (0,_hooks_useOverlay__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n    openOverlay = _useOverlay.openOverlay;\n  var action = function action() {\n    setUserProfile(session.username);\n    openOverlay(_config__WEBPACK_IMPORTED_MODULE_1__.overlay.profile, buttonRef.current);\n  };\n  var onClick = function onClick(event) {\n    var _navigator$vibrate, _navigator;\n    (_navigator$vibrate = (_navigator = navigator).vibrate) === null || _navigator$vibrate === void 0 || _navigator$vibrate.call(_navigator, 50);\n    action();\n  };\n  var onKeyDown = function onKeyDown(event) {\n    if (event.key === 'Enter') {\n      event.preventDefault();\n      action();\n    }\n  };\n  return /*#__PURE__*/React.createElement(\"button\", {\n    className: _ProfileButton_module_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].profileButton,\n    ref: buttonRef,\n    onClick: onClick,\n    onKeyDown: onKeyDown,\n    type: \"button\",\n    \"aria-label\": \"open profile\",\n    \"aria-haspopup\": \"dialog\"\n  }, /*#__PURE__*/React.createElement(_Icons_UserIcon_UserIcon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileButton);\n\n//# sourceURL=webpack://devour-frontend/./src/components/MobileNav/ProfileButton/ProfileButton.js?\n}");

/***/ },

/***/ "./src/components/MobileNav/SearchButton/SearchButton.js"
/*!***************************************************************!*\
  !*** ./src/components/MobileNav/SearchButton/SearchButton.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config */ \"./src/config.js\");\n/* harmony import */ var _hooks_useOverlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useOverlay */ \"./src/hooks/useOverlay.js\");\n/* harmony import */ var _Icons_SearchIcon_SearchIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Icons/SearchIcon/SearchIcon */ \"./src/components/Icons/SearchIcon/SearchIcon.js\");\n/* harmony import */ var _SearchButton_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchButton.module.css */ \"./src/components/MobileNav/SearchButton/SearchButton.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\n\n\nfunction SearchButton() {\n  var buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var _useOverlay = (0,_hooks_useOverlay__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n    openOverlay = _useOverlay.openOverlay;\n  var action = function action() {\n    openOverlay(_config__WEBPACK_IMPORTED_MODULE_1__.overlay.search, buttonRef.current);\n  };\n  var onClick = function onClick(event) {\n    var _navigator$vibrate, _navigator;\n    (_navigator$vibrate = (_navigator = navigator).vibrate) === null || _navigator$vibrate === void 0 || _navigator$vibrate.call(_navigator, 50);\n    action();\n  };\n  var onKeyDown = function onKeyDown(event) {\n    if (event.key === 'Enter') {\n      event.preventDefault();\n      action();\n    }\n  };\n  return /*#__PURE__*/React.createElement(\"button\", {\n    className: _SearchButton_module_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].searchButton,\n    ref: buttonRef,\n    onClick: onClick,\n    onKeyDown: onKeyDown,\n    type: \"button\",\n    \"aria-label\": \"search\",\n    \"aria-haspopup\": \"dialog\"\n  }, /*#__PURE__*/React.createElement(_Icons_SearchIcon_SearchIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchButton);\n\n//# sourceURL=webpack://devour-frontend/./src/components/MobileNav/SearchButton/SearchButton.js?\n}");

/***/ },

/***/ "./src/components/Providers/ContentProvider.js"
/*!*****************************************************!*\
  !*** ./src/components/Providers/ContentProvider.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ContentContext: () => (/* binding */ ContentContext),\n/* harmony export */   ContentProvider: () => (/* binding */ ContentProvider)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nvar ContentContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nfunction ContentProvider(_ref) {\n  var children = _ref.children;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n      id: ''\n    }),\n    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n    content = _useState2[0],\n    setContent = _useState2[1];\n  return /*#__PURE__*/React.createElement(ContentContext.Provider, {\n    value: {\n      content: content,\n      setContent: setContent\n    }\n  }, children);\n}\n\n\n//# sourceURL=webpack://devour-frontend/./src/components/Providers/ContentProvider.js?\n}");

/***/ },

/***/ "./src/components/Providers/DialogProvider.js"
/*!****************************************************!*\
  !*** ./src/components/Providers/DialogProvider.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DialogContext: () => (/* binding */ DialogContext),\n/* harmony export */   DialogProvider: () => (/* binding */ DialogProvider)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Dialog_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Dialog/Dialog */ \"./src/components/Dialog/Dialog.js\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\nvar DialogContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nfunction DialogProvider(_ref) {\n  var children = _ref.children;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n    content = _useState2[0],\n    setContent = _useState2[1];\n  var dialogRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n  var openDialog = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (component) {\n    setContent(component);\n  }, []);\n  var closeDialog = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {\n    setContent(null);\n  }, []);\n  var action = function action() {\n    var dialog = dialogRef.current;\n    if (dialog) {\n      content !== null ? dialog.showModal() : dialog.close();\n    }\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    action();\n  }, [content]);\n  return /*#__PURE__*/React.createElement(DialogContext.Provider, {\n    value: {\n      openDialog: openDialog,\n      closeDialog: closeDialog\n    }\n  }, children, /*#__PURE__*/React.createElement(_Dialog_Dialog__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    dialogRef: dialogRef,\n    content: content\n  }));\n}\n\n\n//# sourceURL=webpack://devour-frontend/./src/components/Providers/DialogProvider.js?\n}");

/***/ },

/***/ "./src/components/Providers/FocusTrapProvider.js"
/*!*******************************************************!*\
  !*** ./src/components/Providers/FocusTrapProvider.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FocusTrapContext: () => (/* binding */ FocusTrapContext),\n/* harmony export */   FocusTrapProvider: () => (/* binding */ FocusTrapProvider)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nvar FocusTrapContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nvar selector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])';\nfunction FocusTrapProvider(_ref) {\n  var children = _ref.children;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n    isMounted = _useState2[0],\n    setIsMounted = _useState2[1];\n  var overlayRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n  var focusRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (node) {\n    if (node !== null) {\n      overlayRef.current = node;\n      overlayRef.current.focus();\n      setIsMounted(true);\n    } else {\n      overlayRef.current = null; // 2. Cleanup logic (unmount)\n      setIsMounted(false);\n    }\n  }, []);\n  var focusLast = function focusLast(event) {\n    var _elements;\n    var elements = overlayRef.current.querySelectorAll(selector);\n    (_elements = elements[elements.length - 1]) === null || _elements === void 0 || _elements.focus();\n  };\n  var focusFirst = function focusFirst(event) {\n    var _elements$;\n    var elements = overlayRef.current.querySelectorAll(selector);\n    (_elements$ = elements[0]) === null || _elements$ === void 0 || _elements$.focus();\n  };\n  return /*#__PURE__*/React.createElement(FocusTrapContext.Provider, {\n    value: {\n      overlayRef: overlayRef,\n      focusRef: focusRef\n    }\n  }, isMounted && /*#__PURE__*/React.createElement(\"div\", {\n    onFocus: focusLast,\n    tabIndex: 0\n  }), children, isMounted && /*#__PURE__*/React.createElement(\"div\", {\n    onFocus: focusFirst,\n    tabIndex: 0\n  }));\n}\n\n\n//# sourceURL=webpack://devour-frontend/./src/components/Providers/FocusTrapProvider.js?\n}");

/***/ },

/***/ "./src/components/Providers/OverlayProvider.js"
/*!*****************************************************!*\
  !*** ./src/components/Providers/OverlayProvider.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   OverlayContext: () => (/* binding */ OverlayContext),\n/* harmony export */   OverlayProvider: () => (/* binding */ OverlayProvider)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nvar OverlayContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nfunction OverlayProvider(_ref) {\n  var children = _ref.children;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n    isActive = _useState2[0],\n    setIsActive = _useState2[1];\n  var focusStack = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);\n  var push = function push(element) {\n    focusStack.current.push(element);\n  };\n  var pop = function pop() {\n    for (var i = focusStack.current.length - 1; i >= 0; i--) {\n      var element = focusStack.current[i];\n      if (document.body.contains(element)) {\n        element.focus();\n        focusStack.current = [];\n        return;\n      }\n    }\n  };\n  var openOverlay = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (id, focusElement) {\n    var _history$state;\n    if (((_history$state = history.state) === null || _history$state === void 0 ? void 0 : _history$state.overlayOpen) === id) {\n      return;\n    }\n    history.pushState({\n      overlayOpen: id\n    }, '');\n    push(focusElement);\n    setIsActive(id);\n  }, []);\n  var closeOverlay = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {\n    var _history$state2;\n    if ((_history$state2 = history.state) !== null && _history$state2 !== void 0 && _history$state2.overlayOpen) {\n      history.back();\n    }\n  }, []);\n  var handlePopState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {\n    if (isActive) {\n      setIsActive(null);\n      pop();\n    }\n  }, [isActive]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    window.addEventListener('popstate', handlePopState);\n    return function () {\n      window.removeEventListener('popstate', handlePopState);\n    };\n  }, [handlePopState]);\n  return /*#__PURE__*/React.createElement(OverlayContext.Provider, {\n    value: {\n      isActive: isActive,\n      openOverlay: openOverlay,\n      closeOverlay: closeOverlay\n    }\n  }, children);\n}\n\n\n//# sourceURL=webpack://devour-frontend/./src/components/Providers/OverlayProvider.js?\n}");

/***/ },

/***/ "./src/components/Providers/ProfileProvider.js"
/*!*****************************************************!*\
  !*** ./src/components/Providers/ProfileProvider.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProfileContext: () => (/* binding */ ProfileContext),\n/* harmony export */   ProfileProvider: () => (/* binding */ ProfileProvider)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nvar ProfileContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nfunction ProfileProvider(_ref) {\n  var children = _ref.children;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n    userProfile = _useState2[0],\n    setUserProfile = _useState2[1];\n  return /*#__PURE__*/React.createElement(ProfileContext.Provider, {\n    value: {\n      userProfile: userProfile,\n      setUserProfile: setUserProfile\n    }\n  }, children);\n}\n\n\n//# sourceURL=webpack://devour-frontend/./src/components/Providers/ProfileProvider.js?\n}");

/***/ },

/***/ "./src/components/Providers/SessionProvider.js"
/*!*****************************************************!*\
  !*** ./src/components/Providers/SessionProvider.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SessionContext: () => (/* binding */ SessionContext),\n/* harmony export */   SessionProvider: () => (/* binding */ SessionProvider)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nvar SessionContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction SessionProvider(_ref) {\n  var children = _ref.children;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n      username: 'testUser',\n      isAuthenticated: true // false\n    }),\n    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n    session = _useState2[0],\n    setSession = _useState2[1];\n\n  // login sets session (setSession)\n  // app gets session\n\n  return /*#__PURE__*/React.createElement(SessionContext.Provider, {\n    value: {\n      session: session,\n      setSession: setSession\n    }\n  }, children);\n}\n\n\n//# sourceURL=webpack://devour-frontend/./src/components/Providers/SessionProvider.js?\n}");

/***/ },

/***/ "./src/components/Suggestions/Suggestions.js"
/*!***************************************************!*\
  !*** ./src/components/Suggestions/Suggestions.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Suggestions_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Suggestions.module.css */ \"./src/components/Suggestions/Suggestions.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\nfunction Suggestions() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n    suggestions = _useState2[0],\n    setSuggestions = _useState2[1];\n  return /*#__PURE__*/React.createElement(\"section\", {\n    className: _Suggestions_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].suggestions,\n    \"aria-label\": \"suggested content\"\n  }, suggestions.map(function (suggestion) {\n\n    // Not sure how to present suggestions. Possibly posters.\n    // Maybe a fullscreen slideshow of video, similar to the edit post section.\n    // Use intersection observer to auto rotate through videos.\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Suggestions);\n\n//# sourceURL=webpack://devour-frontend/./src/components/Suggestions/Suggestions.js?\n}");

/***/ },

/***/ "./src/config.js"
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: () => (/* binding */ api),\n/* harmony export */   contextmenu: () => (/* binding */ contextmenu),\n/* harmony export */   overlay: () => (/* binding */ overlay)\n/* harmony export */ });\nvar overlay = {\n  camera: 'camera',\n  comments: 'comments',\n  dashboard: 'dashboard',\n  notifications: 'notifications',\n  login: 'login',\n  profile: 'profile',\n  register: 'register',\n  search: 'search'\n};\nvar api = {\n  login: '/api/v1/login',\n  logout: '/api/v1/logout',\n  register: '/api/v1/register',\n  session: '/api/v1/session'\n};\nvar contextmenu = {\n  \"default\": {\n    actions: [],\n    information: []\n  },\n  feednode: {\n    actions: ['like', 'comment', 'share', 'fullscreen', 'report', 'blockuser'],\n    information: []\n  },\n  camera: {\n    actions: [],\n    information: []\n  },\n  search: {\n    actions: [],\n    information: []\n  },\n  profile: {\n    actions: [],\n    information: []\n  },\n  notifications: {\n    actions: [],\n    information: []\n  },\n  dashboard: {\n    actions: [],\n    information: []\n  },\n  login: {\n    actions: [],\n    information: []\n  }\n};\n\n//# sourceURL=webpack://devour-frontend/./src/config.js?\n}");

/***/ },

/***/ "./src/hooks/useContextMenu.js"
/*!*************************************!*\
  !*** ./src/hooks/useContextMenu.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useContextMenu() {\n  var onContextMenu = function onContextMenu(event) {\n    var clientX = event.clientX,\n      clientY = event.clientY,\n      target = event.target;\n    console.log('contextmenu event fired.');\n\n    // leave preventDefualt commented-out while developing:\n    // event.preventDefault()\n\n    // To get the render location\n    // Check if triggered by keyboard (coordinates will be 0 or -1)\n    /* Example: \n      let x = clientX\n      let y = clientY\n      if (x <= 0 && y <= 0) { // means keyboard initiated\n        const rect = target.getBoundingClientRect()\n        x = rect.left\n        y = rect.bottom\n      }\n      renderMenu(x, y)\n    */\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    document.addEventListener('contextmenu', onContextMenu);\n    return function () {\n      document.removeEventListener('contextmenu', onContextMenu);\n    };\n  }, []);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useContextMenu);\n\n//# sourceURL=webpack://devour-frontend/./src/hooks/useContextMenu.js?\n}");

/***/ },

/***/ "./src/hooks/useDebounce.js"
/*!**********************************!*\
  !*** ./src/hooks/useDebounce.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useDebounce(fn, delay) {\n  var timeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  var fnRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(fn);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    fnRef.current = fn;\n  }, [fn]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    return function () {\n      clearTimeout(timeoutRef.current);\n    };\n  }, []);\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    clearTimeout(timeoutRef.current);\n    timeoutRef.current = setTimeout(function () {\n      fnRef.current.apply(fnRef, args);\n    }, delay);\n  }, [delay]);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDebounce);\n\n//# sourceURL=webpack://devour-frontend/./src/hooks/useDebounce.js?\n}");

/***/ },

/***/ "./src/hooks/useOverlay.js"
/*!*********************************!*\
  !*** ./src/hooks/useOverlay.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Providers_OverlayProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Providers/OverlayProvider */ \"./src/components/Providers/OverlayProvider.js\");\n\n\nfunction useOverlay() {\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_Providers_OverlayProvider__WEBPACK_IMPORTED_MODULE_1__.OverlayContext),\n    isActive = _useContext.isActive,\n    openOverlay = _useContext.openOverlay,\n    closeOverlay = _useContext.closeOverlay;\n  return {\n    isActive: isActive,\n    openOverlay: openOverlay,\n    closeOverlay: closeOverlay\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useOverlay);\n\n//# sourceURL=webpack://devour-frontend/./src/hooks/useOverlay.js?\n}");

/***/ },

/***/ "./src/hooks/useProfile.js"
/*!*********************************!*\
  !*** ./src/hooks/useProfile.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Providers_ProfileProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Providers/ProfileProvider */ \"./src/components/Providers/ProfileProvider.js\");\n\n\nfunction useProfile() {\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_Providers_ProfileProvider__WEBPACK_IMPORTED_MODULE_1__.ProfileContext),\n    userProfile = _useContext.userProfile,\n    setUserProfile = _useContext.setUserProfile;\n  return {\n    userProfile: userProfile,\n    setUserProfile: setUserProfile\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useProfile);\n\n//# sourceURL=webpack://devour-frontend/./src/hooks/useProfile.js?\n}");

/***/ },

/***/ "./src/hooks/useScrollEffect.js"
/*!**************************************!*\
  !*** ./src/hooks/useScrollEffect.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utilities_scrollEngine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/scrollEngine */ \"./src/utilities/scrollEngine.js\");\n\n\nfunction useScrollEffect() {\n  var elementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var styleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var isHidden = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);\n  var highVelocity = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);\n  var scrollEffect = function scrollEffect(element, style) {\n    elementRef.current = element;\n    styleRef.current = style;\n  };\n  var setHidden = function setHidden(element) {\n    if (!isHidden.current) {\n      element.classList.add(styleRef.current);\n      isHidden.current = true;\n    }\n  };\n  var setVisible = function setVisible(element) {\n    if (isHidden.current) {\n      element.classList.remove(styleRef.current);\n      isHidden.current = false;\n    }\n  };\n  var updateElement = function updateElement(_ref) {\n    var deltaY = _ref.deltaY,\n      direction = _ref.direction,\n      velocity = _ref.velocity;\n    var element = elementRef.current;\n    if (!element) {\n      return;\n    }\n    if (!highVelocity.current && velocity > 90) {\n      highVelocity.current = true;\n      return setVisible(element);\n    }\n    if (highVelocity.current && velocity === 0) {\n      highVelocity.current = false;\n      return;\n    }\n    if (highVelocity.current) {\n      return;\n    }\n    if (direction === 'down' && deltaY > 200) {\n      // since css snap scrolling, timeout could be better here.\n      return setHidden(element);\n    }\n    if (direction === 'up') {\n      return setVisible(element);\n    }\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var unsubscribe = _utilities_scrollEngine__WEBPACK_IMPORTED_MODULE_1__[\"default\"].subscribe(updateElement);\n    return function () {\n      unsubscribe();\n    };\n  }, []);\n  return {\n    scrollEffect: scrollEffect\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useScrollEffect);\n\n//# sourceURL=webpack://devour-frontend/./src/hooks/useScrollEffect.js?\n}");

/***/ },

/***/ "./src/hooks/useSelectionToSpeech.js"
/*!*******************************************!*\
  !*** ./src/hooks/useSelectionToSpeech.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _useDebounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useDebounce */ \"./src/hooks/useDebounce.js\");\n\n\nfunction useSelectionToSpeech() {\n  var onSelectionChange = (0,_useDebounce__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function () {\n    var selection = window.getSelection().toString().trim();\n    window.speechSynthesis.cancel();\n    if (selection) {\n      var utterance = new SpeechSynthesisUtterance(selection);\n      window.speechSynthesis.speak(utterance);\n    }\n  }, 200);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    document.addEventListener('selectionchange', onSelectionChange);\n    return function () {\n      document.removeEventListener('selectionchange', onSelectionChange);\n    };\n  }, []);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSelectionToSpeech);\n\n//# sourceURL=webpack://devour-frontend/./src/hooks/useSelectionToSpeech.js?\n}");

/***/ },

/***/ "./src/hooks/useSession.js"
/*!*********************************!*\
  !*** ./src/hooks/useSession.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Providers_SessionProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Providers/SessionProvider */ \"./src/components/Providers/SessionProvider.js\");\n\n\nfunction useSession() {\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_Providers_SessionProvider__WEBPACK_IMPORTED_MODULE_1__.SessionContext),\n    session = _useContext.session,\n    setSession = _useContext.setSession;\n  return {\n    session: session,\n    setSession: setSession\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSession);\n\n//# sourceURL=webpack://devour-frontend/./src/hooks/useSession.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var _utilities_logError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities/logError */ \"./src/utilities/logError.js\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n//import * as serviceWorker from './serviceWorker'\n\n\n\n\n// Global error listeners\nwindow.addEventListener('error', function (event) {\n  (0,_utilities_logError__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(event.error || new Error('Unknown error'), {\n    source: \"error\"\n  });\n});\nwindow.addEventListener('unhandledrejection', function (event) {\n  (0,_utilities_logError__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(event.reason || new Error('Unknown promise rejection.'), {\n    source: \"unhandledrejection\"\n  });\n});\n(0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(document.getElementById('root')).render(/*#__PURE__*/React.createElement(_App__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n\n//serviceWorker.register()\n\n//# sourceURL=webpack://devour-frontend/./src/index.js?\n}");

/***/ },

/***/ "./src/utilities/logError.js"
/*!***********************************!*\
  !*** ./src/utilities/logError.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* \ncontext = {\n  component: 'HomeButton',\n  action: 'onClick',\n  userId: context.user.id\n}\n*/\n\nfunction logError(error) {\n  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  console.error('Temp error: ', error);\n  return;\n\n  // consider dedupe method\n\n  // removed by dead control flow\n var payload; \n  // removed by dead control flow\n\n\n  // make request to sentry\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logError);\n\n//# sourceURL=webpack://devour-frontend/./src/utilities/logError.js?\n}");

/***/ },

/***/ "./src/utilities/scrollEngine.js"
/*!***************************************!*\
  !*** ./src/utilities/scrollEngine.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(r, e) { var t = \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && \"number\" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t[\"return\"] || t[\"return\"](); } finally { if (u) throw o; } } }; }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\n// scrollEngine.js\n\nvar subscribers = new Set();\nvar started = false;\nvar ticking = false;\nvar deltaY = 0;\nvar velocity = 0;\nvar direction = 'idle';\nvar scrollStart = 0;\nvar prevScrollY = 0;\nvar prevTimestamp = performance.now();\nfunction notify(data) {\n  var _iterator = _createForOfIteratorHelper(subscribers),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var fn = _step.value;\n      fn(data);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\nfunction update(timestamp) {\n  var scrollY = window.scrollY;\n\n  // Calculate change in Y\n  deltaY = scrollY - scrollStart;\n\n  // Calculate current scroll direction\n  var dY = scrollY - prevScrollY;\n  direction = dY > 0 ? 'down' : dY < 0 ? 'up' : 'idle';\n\n  // Set prevScrollY for use in next frame\n  prevScrollY = scrollY;\n\n  // Calculate scroll velocity\n  var deltaTime = timestamp - prevTimestamp;\n  var rawVelocity = deltaY / deltaTime;\n\n  // Formula: (currentRawVelocity * smoothingFactor) + (PreviousSmoothedVelocity * (1 - Factor))\n  // (smoothingFactor: 0 < factor <= 1. Smaller = smoother.\n  velocity = rawVelocity * 0.05 + velocity * (1 - 0.05);\n\n  // Set prevTimestamp for use in next frame\n  prevTimestamp = timestamp;\n  notify({\n    deltaY: deltaY,\n    direction: direction,\n    velocity: velocity\n  });\n}\nfunction onScroll(event) {\n  // Throttle on scroll event\n  if (!ticking) {\n    requestAnimationFrame(function (timestamp) {\n      update(timestamp);\n      ticking = false;\n    });\n    ticking = true;\n  }\n}\nfunction onScrollEnd(event) {\n  scrollStart = window.scrollY;\n  notify({\n    deltaY: deltaY,\n    direction: direction,\n    velocity: 0\n  });\n}\nfunction start() {\n  window.addEventListener('scroll', onScroll, {\n    passive: true\n  });\n  window.addEventListener(\"scrollend\", onScrollEnd, {\n    passive: true\n  });\n  started = true;\n}\nfunction stop() {\n  window.removeEventListener('scroll', onScroll);\n  window.removeEventListener('scrollend', onScrollEnd);\n  started = false;\n}\nvar scroll = {\n  subscribe: function subscribe(fn) {\n    if (typeof fn !== 'function') {\n      throw new TypeError('scroll.subscribe arugument must be of type \"function\".');\n    }\n    if (!started) {\n      start();\n    }\n    subscribers.add(fn);\n    fn({\n      deltaY: deltaY,\n      direction: direction,\n      velocity: velocity\n    });\n    return function () {\n      subscribers[\"delete\"](fn);\n      if (subscribers.size === 0) {\n        stop();\n      }\n    };\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://devour-frontend/./src/utilities/scrollEngine.js?\n}");

/***/ },

/***/ "./src/components/Avatar/Avatar.module.css"
/*!*************************************************!*\
  !*** ./src/components/Avatar/Avatar.module.css ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"avatar\":\"cNFgJeNuNF741mqy3HjF\"});\n\n//# sourceURL=webpack://devour-frontend/./src/components/Avatar/Avatar.module.css?\n}");

/***/ },

/***/ "./src/components/Dialog/Dialog.module.css"
/*!*************************************************!*\
  !*** ./src/components/Dialog/Dialog.module.css ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"dialog\":\"ZWJzr7wpZVh1FbHdy6Q2\"});\n\n//# sourceURL=webpack://devour-frontend/./src/components/Dialog/Dialog.module.css?\n}");

/***/ },

/***/ "./src/components/Header/DashboardButton/DashboardButton.module.css"
/*!**************************************************************************!*\
  !*** ./src/components/Header/DashboardButton/DashboardButton.module.css ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"dashboardButton\":\"MI9YuuDMLrrY7RC1z4G1\"});\n\n//# sourceURL=webpack://devour-frontend/./src/components/Header/DashboardButton/DashboardButton.module.css?\n}");

/***/ },

/***/ "./src/components/Header/Header.module.css"
/*!*************************************************!*\
  !*** ./src/components/Header/Header.module.css ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"header\":\"Qp5xkmMJGKUSGJdCNCHD\",\"hidden\":\"hKTxAAkjtN_fM8U_Tz8H\"});\n\n//# sourceURL=webpack://devour-frontend/./src/components/Header/Header.module.css?\n}");

/***/ },

/***/ "./src/components/Header/LoginButton/LoginButton.module.css"
/*!******************************************************************!*\
  !*** ./src/components/Header/LoginButton/LoginButton.module.css ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"loginButton\":\"f0DR3GXaCwh0Tt2bx2NG\"});\n\n//# sourceURL=webpack://devour-frontend/./src/components/Header/LoginButton/LoginButton.module.css?\n}");

/***/ },

/***/ "./src/components/LoadingSpinner/styles.module.css"
/*!*********************************************************!*\
  !*** ./src/components/LoadingSpinner/styles.module.css ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"spinner\":\"JSakJNmRTraPgvlafis2\",\"spin\":\"hM4c7jIc3EU9mwjKA04L\"});\n\n//# sourceURL=webpack://devour-frontend/./src/components/LoadingSpinner/styles.module.css?\n}");

/***/ },

/***/ "./src/components/Main/Main.module.css"
/*!*********************************************!*\
  !*** ./src/components/Main/Main.module.css ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"main\":\"ZYvmIXad4zI5lNYgAWld\"});\n\n//# sourceURL=webpack://devour-frontend/./src/components/Main/Main.module.css?\n}");

/***/ },

/***/ "./src/components/MobileNav/CameraButton/CameraButton.module.css"
/*!***********************************************************************!*\
  !*** ./src/components/MobileNav/CameraButton/CameraButton.module.css ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"cameraButton\":\"QxIKV6eTzw1tBn0VK2ZN\"});\n\n//# sourceURL=webpack://devour-frontend/./src/components/MobileNav/CameraButton/CameraButton.module.css?\n}");

/***/ },

/***/ "./src/components/MobileNav/HomeButton/HomeButton.module.css"
/*!*******************************************************************!*\
  !*** ./src/components/MobileNav/HomeButton/HomeButton.module.css ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"homeButton\":\"y95ixwKpz9zik3aNbQQn\"});\n\n//# sourceURL=webpack://devour-frontend/./src/components/MobileNav/HomeButton/HomeButton.module.css?\n}");

/***/ },

/***/ "./src/components/MobileNav/MobileNav.module.css"
/*!*******************************************************!*\
  !*** ./src/components/MobileNav/MobileNav.module.css ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"navigation\":\"UAUS7uG3u3pzkuV10IMH\",\"hidden\":\"v1tq2Cmlw7JsA0T_1Kfr\"});\n\n//# sourceURL=webpack://devour-frontend/./src/components/MobileNav/MobileNav.module.css?\n}");

/***/ },

/***/ "./src/components/MobileNav/NotificationsButton/NotificationsButton.module.css"
/*!*************************************************************************************!*\
  !*** ./src/components/MobileNav/NotificationsButton/NotificationsButton.module.css ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"notificationsButton\":\"jyDxw9Gc_5ANGYSwwcqw\"});\n\n//# sourceURL=webpack://devour-frontend/./src/components/MobileNav/NotificationsButton/NotificationsButton.module.css?\n}");

/***/ },

/***/ "./src/components/MobileNav/ProfileButton/ProfileButton.module.css"
/*!*************************************************************************!*\
  !*** ./src/components/MobileNav/ProfileButton/ProfileButton.module.css ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"profileButton\":\"vYH84xE9dFALX47vYg5q\"});\n\n//# sourceURL=webpack://devour-frontend/./src/components/MobileNav/ProfileButton/ProfileButton.module.css?\n}");

/***/ },

/***/ "./src/components/MobileNav/SearchButton/SearchButton.module.css"
/*!***********************************************************************!*\
  !*** ./src/components/MobileNav/SearchButton/SearchButton.module.css ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"searchButton\":\"iouS73xSycZpVOshef37\"});\n\n//# sourceURL=webpack://devour-frontend/./src/components/MobileNav/SearchButton/SearchButton.module.css?\n}");

/***/ },

/***/ "./src/components/Suggestions/Suggestions.module.css"
/*!***********************************************************!*\
  !*** ./src/components/Suggestions/Suggestions.module.css ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"suggestions\":\"FC64mqGiUzcsotZEPWoU\"});\n\n//# sourceURL=webpack://devour-frontend/./src/components/Suggestions/Suggestions.module.css?\n}");

/***/ },

/***/ "./src/index.css"
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://devour-frontend/./src/index.css?\n}");

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_react-dom_client_js-node_modules_babel_runtime_helpers_esm_classCallChec-fa093d"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);