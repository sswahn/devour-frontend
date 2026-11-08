"use strict";
(self["webpackChunkdevour_frontend"] = self["webpackChunkdevour_frontend"] || []).push([["main"],{

/***/ 7649
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorBoundary */ 1198);
/* harmony import */ var _Providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Providers */ 6440);
/* harmony import */ var _components_Interface_Interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Interface/Interface */ 6316);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ 8407);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ 4848);







function App() {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(1);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.StrictMode, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Providers__WEBPACK_IMPORTED_MODULE_3__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Interface_Interface__WEBPACK_IMPORTED_MODULE_4__["default"], {})
        })
      })
    });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ },

/***/ 1198
/*!******************************!*\
  !*** ./src/ErrorBoundary.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_logError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/logError */ 5109);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ 4848);



class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true
    };
  }
  componentDidCatch(error, info) {
    console.error("Component Stack:", info.componentStack);
    (0,_utilities_logError__WEBPACK_IMPORTED_MODULE_1__["default"])(error, {
      source: 'react.errorBoundary',
      componentStack: info.componentStack
    });
    this.setState({
      hasError: true,
      error: error
    });
  }
  render() {
    if (this.state.hasError) {
      // render custom fallback UI
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        style: {
          background: 'black',
          color: 'white',
          height: '100%',
          padding: '200px 0 0 8px',
          width: '100%'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
          children: "Oops! Something went wrong."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          children: "We\u2019re sorry for the inconvenience. Our team has been notified."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          onClick: () => window.location.reload(),
          type: "button",
          style: {
            width: '100px',
            height: '44px'
          },
          children: "Try Again"
        })]
      });
    }
    return this.props.children;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);

/***/ },

/***/ 6440
/*!**************************!*\
  !*** ./src/Providers.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var _components_Providers_SessionProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Providers/SessionProvider */ 9695);
/* harmony import */ var _components_Providers_FullscreenProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Providers/FullscreenProvider */ 5456);
/* harmony import */ var _components_Providers_OverlayProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Providers/OverlayProvider */ 6523);
/* harmony import */ var _components_Providers_ProfileProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Providers/ProfileProvider */ 8934);
/* harmony import */ var _components_Providers_DialogProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Providers/DialogProvider */ 3677);
/* harmony import */ var _components_Providers_ContentProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Providers/ContentProvider */ 4462);
/* harmony import */ var _components_Providers_FootageProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Providers/FootageProvider */ 8664);
/* harmony import */ var _components_Providers_CaptionsProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Providers/CaptionsProvider */ 386);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ 4848);










function Providers(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(2);
  const {
    children
  } = t0;
  let t1;
  if ($[0] !== children) {
    t1 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Providers_SessionProvider__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Providers_FullscreenProvider__WEBPACK_IMPORTED_MODULE_2__.FullscreenProvider, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Providers_OverlayProvider__WEBPACK_IMPORTED_MODULE_3__.OverlayProvider, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Providers_ProfileProvider__WEBPACK_IMPORTED_MODULE_4__.ProfileProvider, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Providers_ContentProvider__WEBPACK_IMPORTED_MODULE_6__.ContentProvider, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Providers_FootageProvider__WEBPACK_IMPORTED_MODULE_7__.FootageProvider, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Providers_CaptionsProvider__WEBPACK_IMPORTED_MODULE_8__.CaptionsProvider, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Providers_DialogProvider__WEBPACK_IMPORTED_MODULE_5__.DialogProvider, {
                    children: children
                  })
                })
              })
            })
          })
        })
      })
    });
    $[0] = children;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  return t1;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Providers);

/***/ },

/***/ 6608
/*!*****************************************!*\
  !*** ./src/components/Avatar/Avatar.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ 5474);
/* harmony import */ var _hooks_useProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useProfile */ 901);
/* harmony import */ var _hooks_useOverlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useOverlay */ 1124);
/* harmony import */ var _Identicon_Identicon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Identicon/Identicon */ 5508);
/* harmony import */ var _Avatar_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Avatar.module.css */ 4785);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ 4848);








function Avatar(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(12);
  const {
    username,
    image,
    size: t1
  } = t0;
  const size = t1 === undefined ? 24 : t1;
  const {
    openOverlay
  } = (0,_hooks_useOverlay__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const {
    setUserProfile
  } = (0,_hooks_useProfile__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const avatarRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  let t2;
  if ($[0] !== openOverlay || $[1] !== setUserProfile || $[2] !== username) {
    t2 = event => {
      navigator.vibrate?.(50);
      setUserProfile(username);
      openOverlay(_config__WEBPACK_IMPORTED_MODULE_2__.overlay.profile, avatarRef.current);
    };
    $[0] = openOverlay;
    $[1] = setUserProfile;
    $[2] = username;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  const onClick = t2;
  const t3 = `${username}'s avatar`;
  let t4;
  if ($[4] !== image || $[5] !== size || $[6] !== username) {
    t4 = image ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
      src: image,
      alt: `${username}'s avatar`,
      loading: "lazy",
      width: size,
      height: size
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Identicon_Identicon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      seed: username
    });
    $[4] = image;
    $[5] = size;
    $[6] = username;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  let t5;
  if ($[8] !== onClick || $[9] !== t3 || $[10] !== t4) {
    t5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
      className: _Avatar_module_css__WEBPACK_IMPORTED_MODULE_6__["default"].avatar,
      ref: avatarRef,
      onClick: onClick,
      type: "button",
      "aria-label": t3,
      children: t4
    });
    $[8] = onClick;
    $[9] = t3;
    $[10] = t4;
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  return t5;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Avatar);

/***/ },

/***/ 1760
/*!***************************************************!*\
  !*** ./src/components/CloseButton/CloseButton.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var _Icons_XmarkIcon_XmarkIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icons/XmarkIcon/XmarkIcon */ 165);
/* harmony import */ var _CloseButton_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CloseButton.module.css */ 1445);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ 4848);




function CloseButton(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(6);
  const {
    overlay,
    close
  } = t0;
  let t1;
  if ($[0] !== close) {
    t1 = event => {
      navigator.vibrate?.(50);
      close();
    };
    $[0] = close;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const onClick = t1;
  const t2 = `close ${overlay}`;
  let t3;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icons_XmarkIcon_XmarkIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {});
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  let t4;
  if ($[3] !== onClick || $[4] !== t2) {
    t4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
      className: _CloseButton_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].closeButton,
      onClick: onClick,
      type: "button",
      "aria-label": t2,
      children: t3
    });
    $[3] = onClick;
    $[4] = t2;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  return t4;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CloseButton);

/***/ },

/***/ 1986
/*!*****************************************!*\
  !*** ./src/components/Dialog/Dialog.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ 5474);
/* harmony import */ var _CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CloseButton/CloseButton */ 1760);
/* harmony import */ var _Dialog_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dialog.module.css */ 1123);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ 4848);





function Dialog(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(9);
  const {
    dialogRef,
    content,
    close
  } = t0;
  let t1;
  if ($[0] !== close) {
    t1 = event => {
      if (event.target === event.currentTarget) {
        close();
      }
    };
    $[0] = close;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const onClick = t1;
  let t2;
  if ($[2] !== close) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      overlay: _config__WEBPACK_IMPORTED_MODULE_1__.overlay.dialog,
      close: close
    });
    $[2] = close;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== content || $[5] !== dialogRef || $[6] !== onClick || $[7] !== t2) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("dialog", {
      id: "dialog",
      ref: dialogRef,
      className: _Dialog_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].dialog,
      onClick: onClick,
      children: [t2, content]
    });
    $[4] = content;
    $[5] = dialogRef;
    $[6] = onClick;
    $[7] = t2;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  return t3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dialog);

/***/ },

/***/ 4108
/*!*********************************************!*\
  !*** ./src/components/Dropdown/Dropdown.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DropdownButton_DropdownButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropdownButton/DropdownButton */ 5573);
/* harmony import */ var _DropdownList_DropdownList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DropdownList/DropdownList */ 3578);
/* harmony import */ var _Dropdown_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dropdown.module.css */ 8329);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ 4848);






function Dropdown(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(21);
  const {
    id: t1,
    label: t2,
    items
  } = t0;
  const id = t1 === undefined ? 0 : t1;
  const label = t2 === undefined ? "dropdown" : t2;
  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const listRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  let t3;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = () => {
      setIsOpen(true);
    };
    $[0] = t3;
  } else {
    t3 = $[0];
  }
  const open = t3;
  let t4;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = () => {
      listRef.current?.addEventListener("transitionend", () => setIsOpen(false), {
        once: true
      });
      setIsMounted(false);
    };
    $[1] = t4;
  } else {
    t4 = $[1];
  }
  const close = t4;
  let t5;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = () => {
      setIsMounted(true);
    };
    $[2] = t5;
  } else {
    t5 = $[2];
  }
  const mountList = t5;
  let t6;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = event => {
      if (!listRef.current?.contains(event.target) && !buttonRef.current?.contains(event.target)) {
        close();
      }
    };
    $[3] = t6;
  } else {
    t6 = $[3];
  }
  const offClickClose = t6;
  let t7;
  let t8;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = () => {
      document.addEventListener("pointerdown", offClickClose);
      return () => {
        document.removeEventListener("pointerdown", offClickClose);
      };
    };
    t8 = [];
    $[4] = t7;
    $[5] = t8;
  } else {
    t7 = $[4];
    t8 = $[5];
  }
  ;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(t7, t8);
  let t10;
  let t9;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t9 = () => () => {
      setIsOpen(false);
    };
    t10 = [];
    $[6] = t10;
    $[7] = t9;
  } else {
    t10 = $[6];
    t9 = $[7];
  }
  ;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(t9, t10);
  const t11 = `${_Dropdown_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].dropdown} ${isOpen ? _Dropdown_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].isOpen : ""}`;
  let t12;
  if ($[8] !== id || $[9] !== isOpen || $[10] !== label) {
    t12 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_DropdownButton_DropdownButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: id,
      label: label,
      isOpen: isOpen,
      open: open,
      close: close,
      buttonRef: buttonRef
    });
    $[8] = id;
    $[9] = isOpen;
    $[10] = label;
    $[11] = t12;
  } else {
    t12 = $[11];
  }
  let t13;
  if ($[12] !== id || $[13] !== isMounted || $[14] !== isOpen || $[15] !== items) {
    t13 = isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_DropdownList_DropdownList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: id,
      items: items,
      isOpen: isOpen,
      close: close,
      isMounted: isMounted,
      mountList: mountList,
      listRef: listRef,
      buttonRef: buttonRef
    });
    $[12] = id;
    $[13] = isMounted;
    $[14] = isOpen;
    $[15] = items;
    $[16] = t13;
  } else {
    t13 = $[16];
  }
  let t14;
  if ($[17] !== t11 || $[18] !== t12 || $[19] !== t13) {
    t14 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: t11,
      children: [t12, t13]
    });
    $[17] = t11;
    $[18] = t12;
    $[19] = t13;
    $[20] = t14;
  } else {
    t14 = $[20];
  }
  return t14;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);

/***/ },

/***/ 5573
/*!******************************************************************!*\
  !*** ./src/components/Dropdown/DropdownButton/DropdownButton.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var _Icons_EllipsisVerticalIcon_EllipsisVerticalIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Icons/EllipsisVerticalIcon/EllipsisVerticalIcon */ 391);
/* harmony import */ var _DropdownButton_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropdownButton.module.css */ 4137);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ 4848);




function DropdownButton(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(12);
  const {
    id,
    label,
    isOpen,
    open,
    close,
    buttonRef
  } = t0;
  let t1;
  if ($[0] !== close || $[1] !== isOpen || $[2] !== open) {
    t1 = event => {
      navigator.vibrate?.(50);
      isOpen ? close() : open();
    };
    $[0] = close;
    $[1] = isOpen;
    $[2] = open;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  const onClick = t1;
  const t2 = `dropdown-button-${id}`;
  const t3 = `dropdown-list-${id}`;
  let t4;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icons_EllipsisVerticalIcon_EllipsisVerticalIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {});
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  if ($[5] !== buttonRef || $[6] !== isOpen || $[7] !== label || $[8] !== onClick || $[9] !== t2 || $[10] !== t3) {
    t5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
      id: t2,
      className: _DropdownButton_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].dropdownButton,
      ref: buttonRef,
      onClick: onClick,
      type: "button",
      "aria-label": label,
      "aria-haspopup": "menu",
      "aria-expanded": isOpen,
      "aria-controls": t3,
      children: t4
    });
    $[5] = buttonRef;
    $[6] = isOpen;
    $[7] = label;
    $[8] = onClick;
    $[9] = t2;
    $[10] = t3;
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  return t5;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownButton);

/***/ },

/***/ 3578
/*!**************************************************************!*\
  !*** ./src/components/Dropdown/DropdownList/DropdownList.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ListItemButton_ListItemButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ListItemButton/ListItemButton */ 4038);
/* harmony import */ var _DropdownList_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DropdownList.module.css */ 3513);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ 4848);





function DropdownList(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(19);
  const {
    id,
    items,
    isOpen,
    close,
    isMounted,
    mountList,
    listRef,
    buttonRef
  } = t0;
  let t1;
  if ($[0] !== isMounted || $[1] !== listRef || $[2] !== mountList) {
    t1 = () => {
      if (!isMounted) {
        mountList();
        listRef.current.firstElementChild.firstElementChild.focus();
      }
    };
    $[0] = isMounted;
    $[1] = listRef;
    $[2] = mountList;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  const onMount = t1;
  let t2;
  if ($[4] !== onMount) {
    t2 = () => {
      const timer = requestAnimationFrame(onMount);
      return () => {
        cancelAnimationFrame(timer);
      };
    };
    $[4] = onMount;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = [];
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  ;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(t2, t3);
  const t4 = `dropdown-list-${id}`;
  const t5 = `${_DropdownList_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].dropdownList} ${isMounted ? _DropdownList_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].open : ""}`;
  const t6 = `dropdown-button-${id}`;
  const t7 = !isOpen;
  let t8;
  if ($[7] !== buttonRef || $[8] !== close || $[9] !== items || $[10] !== listRef) {
    t8 = items?.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
      role: "none",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ListItemButton_ListItemButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        buttonRef: buttonRef,
        listRef: listRef,
        icon: item.icon,
        text: item.text,
        method: item.method,
        close: close
      })
    }, index));
    $[7] = buttonRef;
    $[8] = close;
    $[9] = items;
    $[10] = listRef;
    $[11] = t8;
  } else {
    t8 = $[11];
  }
  let t9;
  if ($[12] !== listRef || $[13] !== t4 || $[14] !== t5 || $[15] !== t6 || $[16] !== t7 || $[17] !== t8) {
    t9 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
      id: t4,
      className: t5,
      ref: listRef,
      role: "menu",
      "aria-labelledby": t6,
      hidden: t7,
      children: t8
    });
    $[12] = listRef;
    $[13] = t4;
    $[14] = t5;
    $[15] = t6;
    $[16] = t7;
    $[17] = t8;
    $[18] = t9;
  } else {
    t9 = $[18];
  }
  return t9;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownList);

/***/ },

/***/ 4038
/*!******************************************************************!*\
  !*** ./src/components/Dropdown/ListItemButton/ListItemButton.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var _ListItemButton_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListItemButton.module.css */ 6189);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ 4848);



function ListItemButton(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(24);
  const {
    buttonRef,
    listRef,
    icon,
    text,
    method,
    close
  } = t0;
  let t1;
  if ($[0] !== listRef) {
    t1 = button => {
      button === listRef.current.firstElementChild.firstElementChild ? listRef.current.lastElementChild.firstElementChild.focus() : button.parentElement.previousElementSibling.firstElementChild.focus();
    };
    $[0] = listRef;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const focusPrev = t1;
  let t2;
  if ($[2] !== listRef) {
    t2 = button_0 => {
      button_0 === listRef.current.lastElementChild.firstElementChild ? listRef.current.firstElementChild.firstElementChild.focus() : button_0.parentElement.nextElementSibling.firstElementChild.focus();
    };
    $[2] = listRef;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  const focusNext = t2;
  let t3;
  if ($[4] !== buttonRef || $[5] !== close) {
    t3 = () => {
      close();
      buttonRef.current.focus();
    };
    $[4] = buttonRef;
    $[5] = close;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  const escape = t3;
  let t4;
  if ($[7] !== method) {
    t4 = () => {
      method();
    };
    $[7] = method;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  const action = t4;
  let t5;
  if ($[9] !== action) {
    t5 = event => {
      navigator.vibrate?.(50);
      action();
    };
    $[9] = action;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  const onClick = t5;
  let t6;
  if ($[11] !== action || $[12] !== close || $[13] !== escape || $[14] !== focusNext || $[15] !== focusPrev) {
    t6 = event_0 => {
      switch (event_0.key) {
        case "Enter":
          {
            event_0.preventDefault();
            return action();
          }
        case "Tab":
          {
            return close();
          }
        case "Escape":
          {
            event_0.stopPropagation();
            event_0.preventDefault();
            return escape();
          }
        case "ArrowDown":
          {
            event_0.preventDefault();
            return focusNext(event_0.target);
          }
        case "ArrowUp":
          {
            event_0.preventDefault();
            return focusPrev(event_0.target);
          }
        default:
          {
            return;
          }
      }
    };
    $[11] = action;
    $[12] = close;
    $[13] = escape;
    $[14] = focusNext;
    $[15] = focusPrev;
    $[16] = t6;
  } else {
    t6 = $[16];
  }
  const onKeyDown = t6;
  let t7;
  if ($[17] !== text) {
    t7 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      children: text
    });
    $[17] = text;
    $[18] = t7;
  } else {
    t7 = $[18];
  }
  let t8;
  if ($[19] !== icon || $[20] !== onClick || $[21] !== onKeyDown || $[22] !== t7) {
    t8 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
      className: _ListItemButton_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].listItemButton,
      onClick: onClick,
      onKeyDown: onKeyDown,
      type: "button",
      role: "menuitem",
      tabIndex: "-1",
      children: [icon, " ", t7]
    });
    $[19] = icon;
    $[20] = onClick;
    $[21] = onKeyDown;
    $[22] = t7;
    $[23] = t8;
  } else {
    t8 = $[23];
  }
  return t8;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItemButton);

/***/ },

/***/ 4948
/*!***********************************************!*\
  !*** ./src/components/FocusTrap/FocusTrap.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ 4848);



const selector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
function FocusTrap(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(6);
  const {
    children
  } = t0;
  const focusTrapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = event => {
      const elements = focusTrapRef.current.querySelectorAll(selector);
      elements[elements.length - 2]?.focus();
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const focusLast = t1;
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = event_0 => {
      const elements_0 = focusTrapRef.current.querySelectorAll(selector);
      elements_0[1]?.focus();
    };
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const focusFirst = t2;
  let t3;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      onFocus: focusLast,
      tabIndex: 0
    });
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  let t4;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      onFocus: focusFirst,
      tabIndex: 0
    });
    $[3] = t4;
  } else {
    t4 = $[3];
  }
  let t5;
  if ($[4] !== children) {
    t5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      ref: focusTrapRef,
      children: [t3, children, t4]
    });
    $[4] = children;
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  return t5;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FocusTrap);

/***/ },

/***/ 7954
/*!******************************************************************!*\
  !*** ./src/components/Header/DashboardButton/DashboardButton.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ 5474);
/* harmony import */ var _hooks_useOverlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useOverlay */ 1124);
/* harmony import */ var _Icons_LineChartIcon_LineChartIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Icons/LineChartIcon/LineChartIcon */ 9201);
/* harmony import */ var _DashboardButton_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DashboardButton.module.css */ 8957);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ 4848);







function DashboardButton() {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(5);
  const buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    openOverlay
  } = (0,_hooks_useOverlay__WEBPACK_IMPORTED_MODULE_3__["default"])();
  let t0;
  if ($[0] !== openOverlay) {
    t0 = event => {
      navigator.vibrate?.(50);
      openOverlay(_config__WEBPACK_IMPORTED_MODULE_2__.overlay.dashboard, buttonRef.current);
    };
    $[0] = openOverlay;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  const onClick = t0;
  let t1;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icons_LineChartIcon_LineChartIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {});
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  let t2;
  if ($[3] !== onClick) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
      className: _DashboardButton_module_css__WEBPACK_IMPORTED_MODULE_5__["default"].dashboardButton,
      onClick: onClick,
      ref: buttonRef,
      type: "button",
      "aria-label": "open dashboard",
      children: t1
    });
    $[3] = onClick;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  return t2;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardButton);

/***/ },

/***/ 4548
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useScrollEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useScrollEffect */ 9522);
/* harmony import */ var _hooks_useSession__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useSession */ 288);
/* harmony import */ var _Icons_HomeIcon_HomeIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icons/HomeIcon/HomeIcon */ 4263);
/* harmony import */ var _DashboardButton_DashboardButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DashboardButton/DashboardButton */ 7954);
/* harmony import */ var _LoginButton_LoginButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LoginButton/LoginButton */ 3790);
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header.module.css */ 4329);
/* harmony import */ var _Avatar_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Avatar/Avatar */ 6608);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ 4848);










const Header = t0 => {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(9);
  const {
    openAuthentication
  } = t0;
  const {
    session
  } = (0,_hooks_useSession__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const {
    scrollEffect
  } = (0,_hooks_useScrollEffect__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const headerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  let t1;
  if ($[0] !== scrollEffect) {
    t1 = () => {
      headerRef.current && scrollEffect(headerRef.current, _Header_module_css__WEBPACK_IMPORTED_MODULE_7__["default"].hidden);
    };
    $[0] = scrollEffect;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = [];
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  ;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(t1, t2);
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
      onClick: _temp,
      type: "button",
      "aria-label": "home",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Icons_HomeIcon_HomeIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {})
    });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] !== openAuthentication || $[5] !== session.isAuthenticated) {
    t4 = session.isAuthenticated && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_LoginButton_LoginButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
      openAuthentication: openAuthentication
    });
    $[4] = openAuthentication;
    $[5] = session.isAuthenticated;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] !== t4) {
    t5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("header", {
      ref: headerRef,
      className: _Header_module_css__WEBPACK_IMPORTED_MODULE_7__["default"].header,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        children: [t3, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("nav", {
          children: t4
        })]
      })
    });
    $[7] = t4;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  return t5;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);
function _temp() {
  return navigator.vibrate(50);
}

/***/ },

/***/ 3790
/*!**********************************************************!*\
  !*** ./src/components/Header/LoginButton/LoginButton.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ 5474);
/* harmony import */ var _hooks_useOverlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useOverlay */ 1124);
/* harmony import */ var _Icons_RightToBracketIcon_RightToBracketIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Icons/RightToBracketIcon/RightToBracketIcon */ 7355);
/* harmony import */ var _LoginButton_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoginButton.module.css */ 2977);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ 4848);







function LoginButton() {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(5);
  const buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    openOverlay
  } = (0,_hooks_useOverlay__WEBPACK_IMPORTED_MODULE_3__["default"])();
  let t0;
  if ($[0] !== openOverlay) {
    t0 = event => {
      navigator.vibrate?.(50);
      openOverlay(_config__WEBPACK_IMPORTED_MODULE_2__.overlay.login, buttonRef.current);
    };
    $[0] = openOverlay;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  const onClick = t0;
  let t1;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icons_RightToBracketIcon_RightToBracketIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {});
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  let t2;
  if ($[3] !== onClick) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
      className: _LoginButton_module_css__WEBPACK_IMPORTED_MODULE_5__["default"].loginButton,
      ref: buttonRef,
      onClick: onClick,
      type: "button",
      "aria-label": "sign in",
      children: t1
    });
    $[3] = onClick;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  return t2;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginButton);

/***/ },

/***/ 4761
/*!*************************************************************!*\
  !*** ./src/components/Icons/AlignLeftIcon/AlignLeftIcon.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


function AlignLeftIcon(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(3);
  const {
    size: t1
  } = t0;
  const size = t1 === undefined ? 24 : t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
    });
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] !== size) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512",
      width: size,
      height: size,
      "aria-hidden": "true",
      children: t2
    });
    $[1] = size;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  return t3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlignLeftIcon);

/***/ },

/***/ 3059
/*!***************************************************!*\
  !*** ./src/components/Icons/BellIcon/BellIcon.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


function BellIcon(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(3);
  const {
    size: t1
  } = t0;
  const size = t1 === undefined ? 24 : t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
    });
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] !== size) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512",
      width: size,
      height: size,
      "aria-hidden": "true",
      children: t2
    });
    $[1] = size;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  return t3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BellIcon);

/***/ },

/***/ 1601
/*!*****************************************************************!*\
  !*** ./src/components/Icons/ChevronLeftIcon/ChevronLeftIcon.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


function ChevronLeftIcon(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(3);
  const {
    size: t1
  } = t0;
  const size = t1 === undefined ? 24 : t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
    });
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] !== size) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 320 512",
      width: size,
      height: size,
      "aria-hidden": "true",
      children: t2
    });
    $[1] = size;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  return t3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChevronLeftIcon);

/***/ },

/***/ 5699
/*!*******************************************************************!*\
  !*** ./src/components/Icons/ChevronRightIcon/ChevronRightIcon.js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


function ChevronRightIcon(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(3);
  const {
    size: t1
  } = t0;
  const size = t1 === undefined ? 24 : t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
    });
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] !== size) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 320 512",
      width: size,
      height: size,
      "aria-hidden": "true",
      children: t2
    });
    $[1] = size;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  return t3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChevronRightIcon);

/***/ },

/***/ 391
/*!***************************************************************************!*\
  !*** ./src/components/Icons/EllipsisVerticalIcon/EllipsisVerticalIcon.js ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


function EllipsisVerticalIcon(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(3);
  const {
    size: t1
  } = t0;
  const size = t1 === undefined ? 24 : t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"
    });
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] !== size) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 640 640",
      width: size,
      height: size,
      "aria-hidden": "true",
      children: t2
    });
    $[1] = size;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  return t3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EllipsisVerticalIcon);

/***/ },

/***/ 313
/*!***************************************************!*\
  !*** ./src/components/Icons/FlagIcon/FlagIcon.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


function FlagIcon(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(3);
  const {
    size: t1
  } = t0;
  const size = t1 === undefined ? 24 : t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M160 96C160 78.3 145.7 64 128 64C110.3 64 96 78.3 96 96L96 544C96 561.7 110.3 576 128 576C145.7 576 160 561.7 160 544L160 422.4L222.7 403.6C264.6 391 309.8 394.9 348.9 414.5C391.6 435.9 441.4 438.5 486.1 421.7L523.2 407.8C535.7 403.1 544 391.2 544 377.8L544 130.1C544 107.1 519.8 92.1 499.2 102.4L487.4 108.3C442.5 130.8 389.6 130.8 344.6 108.3C308.2 90.1 266.3 86.5 227.4 98.2L160 118.4L160 96z"
    });
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] !== size) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 640 640",
      width: size,
      height: size,
      "aria-hidden": "true",
      children: t2
    });
    $[1] = size;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  return t3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlagIcon);

/***/ },

/***/ 4536
/*!*********************************************************!*\
  !*** ./src/components/Icons/HeartIcon/HeartIconFill.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


function HeartIconFill(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(3);
  const {
    size: t1
  } = t0;
  const size = t1 === undefined ? 24 : t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M305 151.1L320 171.8L335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1L576 231.7C576 343.9 436.1 474.2 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C203.9 474.2 64 343.9 64 231.7L64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1z"
    });
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] !== size) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 640 640",
      width: size,
      height: size,
      "aria-hidden": "true",
      children: t2
    });
    $[1] = size;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  return t3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeartIconFill);

/***/ },

/***/ 3621
/*!***********************************************************!*\
  !*** ./src/components/Icons/HeartIcon/HeartIconStroke.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


function HeartIconStroke(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(3);
  const {
    size: t1
  } = t0;
  const size = t1 === undefined ? 24 : t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M442.9 144C415.6 144 389.9 157.1 373.9 179.2L339.5 226.8C335 233 327.8 236.7 320.1 236.7C312.4 236.7 305.2 233 300.7 226.8L266.3 179.2C250.3 157.1 224.6 144 197.3 144C150.3 144 112.2 182.1 112.2 229.1C112.2 279 144.2 327.5 180.3 371.4C221.4 421.4 271.7 465.4 306.2 491.7C309.4 494.1 314.1 495.9 320.2 495.9C326.3 495.9 331 494.1 334.2 491.7C368.7 465.4 419 421.3 460.1 371.4C496.3 327.5 528.2 279 528.2 229.1C528.2 182.1 490.1 144 443.1 144zM335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1C576 297.7 533.1 358 496.9 401.9C452.8 455.5 399.6 502 363.1 529.8C350.8 539.2 335.6 543.9 320 543.9C304.4 543.9 289.2 539.2 276.9 529.8C240.4 502 187.2 455.5 143.1 402C106.9 358.1 64 297.7 64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1L320 171.8L335 151.1z"
    });
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] !== size) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 640 640",
      width: size,
      height: size,
      "aria-hidden": "true",
      children: t2
    });
    $[1] = size;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  return t3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeartIconStroke);

/***/ },

/***/ 4263
/*!***************************************************!*\
  !*** ./src/components/Icons/HomeIcon/HomeIcon.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


function HomeIcon(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(3);
  const {
    size: t1
  } = t0;
  const size = t1 === undefined ? 24 : t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM304 384L336 384C362.5 384 384 405.5 384 432L384 528L256 528L256 432C256 405.5 277.5 384 304 384z"
    });
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] !== size) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 640 640",
      width: size,
      height: size,
      "aria-hidden": "true",
      children: t2
    });
    $[1] = size;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  return t3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeIcon);

/***/ },

/***/ 9201
/*!*************************************************************!*\
  !*** ./src/components/Icons/LineChartIcon/LineChartIcon.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


function LineChartIcon(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(3);
  const {
    size: t1
  } = t0;
  const size = t1 === undefined ? 24 : t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M128 128C128 110.3 113.7 96 96 96C78.3 96 64 110.3 64 128L64 464C64 508.2 99.8 544 144 544L544 544C561.7 544 576 529.7 576 512C576 494.3 561.7 480 544 480L144 480C135.2 480 128 472.8 128 464L128 128zM534.6 214.6C547.1 202.1 547.1 181.8 534.6 169.3C522.1 156.8 501.8 156.8 489.3 169.3L384 274.7L326.6 217.4C314.1 204.9 293.8 204.9 281.3 217.4L185.3 313.4C172.8 325.9 172.8 346.2 185.3 358.7C197.8 371.2 218.1 371.2 230.6 358.7L304 285.3L361.4 342.7C373.9 355.2 394.2 355.2 406.7 342.7L534.7 214.7z"
    });
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] !== size) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 640 640",
      width: size,
      height: size,
      "aria-hidden": "true",
      children: t2
    });
    $[1] = size;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  return t3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineChartIcon);

/***/ },

/***/ 4183
/*!***********************************************************!*\
  !*** ./src/components/Icons/LocationIcon/LocationIcon.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


function LocationIcon(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(3);
  const {
    size: t1
  } = t0;
  const size = t1 === undefined ? 24 : t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
    });
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] !== size) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      viewBox: "0 0 384 512",
      width: size,
      height: size,
      "aria-hidden": "true",
      children: t2
    });
    $[1] = size;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  return t3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocationIcon);

/***/ },

/***/ 397
/*!***********************************************************!*\
  !*** ./src/components/Icons/MaximizeIcon/MaximizeIcon.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


function MaximizeIcon(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(3);
  const {
    size: t1
  } = t0;
  const size = t1 === undefined ? 24 : t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M264 96L120 96C106.7 96 96 106.7 96 120L96 264C96 273.7 101.8 282.5 110.8 286.2C119.8 289.9 130.1 287.8 137 281L177 241L256 320L177 399L137 359C130.1 352.1 119.8 350.1 110.8 353.8C101.8 357.5 96 366.3 96 376L96 520C96 533.3 106.7 544 120 544L264 544C273.7 544 282.5 538.2 286.2 529.2C289.9 520.2 287.9 509.9 281 503L241 463L320 384L399 463L359 503C352.1 509.9 350.1 520.2 353.8 529.2C357.5 538.2 366.3 544 376 544L520 544C533.3 544 544 533.3 544 520L544 376C544 366.3 538.2 357.5 529.2 353.8C520.2 350.1 509.9 352.1 503 359L463 399L384 320L463 241L503 281C509.9 287.9 520.2 289.9 529.2 286.2C538.2 282.5 544 273.7 544 264L544 120C544 106.7 533.3 96 520 96L376 96C366.3 96 357.5 101.8 353.8 110.8C350.1 119.8 352.2 130.1 359 137L399 177L320 256L241 177L281 137C287.9 130.1 289.9 119.8 286.2 110.8C282.5 101.8 273.7 96 264 96z"
    });
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] !== size) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 640 640",
      width: size,
      height: size,
      "aria-hidden": "true",
      children: t2
    });
    $[1] = size;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  return t3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MaximizeIcon);

/***/ },

/***/ 6721
/*!*********************************************************!*\
  !*** ./src/components/Icons/MessageIcon/MessageIcon.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


function MessageIcon(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(3);
  const {
    size: t1
  } = t0;
  const size = t1 === undefined ? 24 : t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"
    });
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] !== size) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      width: size,
      height: size,
      "aria-hidden": "true",
      children: t2
    });
    $[1] = size;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  return t3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessageIcon);

/***/ },

/***/ 3337
/*!***********************************************************!*\
  !*** ./src/components/Icons/MinimizeIcon/MinimizeIcon.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


function MinimizeIcon(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(3);
  const {
    size: t1
  } = t0;
  const size = t1 === undefined ? 24 : t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M520 288L376 288C362.7 288 352 277.3 352 264L352 120C352 110.3 357.8 101.5 366.8 97.8C375.8 94.1 386.1 96.2 393 103L433 143L506.4 69.6C510 66 514.9 64 520 64C525.1 64 530 66 533.7 69.7L570.4 106.4C574 110 576 114.9 576 120C576 125.1 574 130 570.3 133.7L497 207L537 247C543.9 253.9 545.9 264.2 542.2 273.2C538.5 282.2 529.7 288 520 288zM520 352C529.7 352 538.5 357.8 542.2 366.8C545.9 375.8 543.9 386.1 537 393L497 433L570.4 506.4C574 510 576.1 514.9 576.1 520.1C576.1 525.3 574.1 530.1 570.4 533.8L533.7 570.5C530 574 525.1 576 520 576C514.9 576 510 574 506.3 570.3L433 497L393 537C386.1 543.9 375.8 545.9 366.8 542.2C357.8 538.5 352 529.7 352 520L352 376C352 362.7 362.7 352 376 352L520 352zM264 352C277.3 352 288 362.7 288 376L288 520C288 529.7 282.2 538.5 273.2 542.2C264.2 545.9 253.9 543.9 247 537L207 497L133.6 570.4C130 574 125.1 576 120 576C114.9 576 110 574 106.3 570.3L69.7 533.7C66 530 64 525.1 64 520C64 514.9 66 510 69.7 506.3L143 433L103 393C96.1 386.1 94.1 375.8 97.8 366.8C101.5 357.8 110.3 352 120 352L264 352zM120 288C110.3 288 101.5 282.2 97.8 273.2C94.1 264.2 96.2 253.9 103 247L143 207L69.7 133.7C66 130 64 125.1 64 120C64 114.9 66 110 69.7 106.3L106.3 69.7C110 66 114.9 64 120 64C125.1 64 130 66 133.7 69.7L207 143L247 103C253.9 96.1 264.2 94.1 273.2 97.8C282.2 101.5 288 110.3 288 120L288 264C288 277.3 277.3 288 264 288L120 288z"
    });
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] !== size) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 640 640",
      width: size,
      height: size,
      "aria-hidden": "true",
      children: t2
    });
    $[1] = size;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  return t3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MinimizeIcon);

/***/ },

/***/ 4065
/*!***************************************************************!*\
  !*** ./src/components/Icons/PaperPlaneIcon/PaperPlaneIcon.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


function PaperPlaneIcon(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(3);
  const {
    size: t1
  } = t0;
  const size = t1 === undefined ? 24 : t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M568.4 37.7C578.2 34.2 589 36.7 596.4 44C603.8 51.3 606.2 62.2 602.7 72L424.7 568.9C419.7 582.8 406.6 592 391.9 592C377.7 592 364.9 583.4 359.6 570.3L295.4 412.3C290.9 401.3 292.9 388.7 300.6 379.7L395.1 267.3C400.2 261.2 399.8 252.3 394.2 246.7C388.6 241.1 379.6 240.7 373.6 245.8L261.2 340.1C252.1 347.7 239.6 349.7 228.6 345.3L70.1 280.8C57 275.5 48.4 262.7 48.4 248.5C48.4 233.8 57.6 220.7 71.5 215.7L568.4 37.7z"
    });
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] !== size) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 640 640",
      width: size,
      height: size,
      "aria-hidden": "true",
      children: t2
    });
    $[1] = size;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  return t3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaperPlaneIcon);

/***/ },

/***/ 9041
/*!***************************************************!*\
  !*** ./src/components/Icons/PlusIcon/PlusIcon.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


function PlusIcon(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(3);
  const {
    size: t1
  } = t0;
  const size = t1 === undefined ? 24 : t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"
    });
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] !== size) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 640 640",
      width: size,
      height: size,
      "aria-hidden": "true",
      children: t2
    });
    $[1] = size;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  return t3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlusIcon);

/***/ },

/***/ 7355
/*!***********************************************************************!*\
  !*** ./src/components/Icons/RightToBracketIcon/RightToBracketIcon.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


function RightToBracketIcon(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(3);
  const {
    size: t1
  } = t0;
  const size = t1 === undefined ? 24 : t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
    });
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] !== size) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      width: size,
      height: size,
      "aria-hidden": "true",
      children: t2
    });
    $[1] = size;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  return t3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RightToBracketIcon);

/***/ },

/***/ 4801
/*!*******************************************************!*\
  !*** ./src/components/Icons/SearchIcon/SearchIcon.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


function SearchIcon(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(3);
  const {
    size: t1
  } = t0;
  const size = t1 === undefined ? 24 : t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"
    });
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] !== size) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 640 640",
      width: size,
      height: size,
      "aria-hidden": "true",
      children: t2
    });
    $[1] = size;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  return t3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchIcon);

/***/ },

/***/ 2637
/*!*****************************************************!*\
  !*** ./src/components/Icons/ShareIcon/ShareIcon.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


function ShareIcon(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(3);
  const {
    size: t1
  } = t0;
  const size = t1 === undefined ? 24 : t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M371.8 82.4C359.8 87.4 352 99 352 112L352 192L240 192C142.8 192 64 270.8 64 368C64 481.3 145.5 531.9 164.2 542.1C166.7 543.5 169.5 544 172.3 544C183.2 544 192 535.1 192 524.3C192 516.8 187.7 509.9 182.2 504.8C172.8 496 160 478.4 160 448.1C160 395.1 203 352.1 256 352.1L352 352.1L352 432.1C352 445 359.8 456.7 371.8 461.7C383.8 466.7 397.5 463.9 406.7 454.8L566.7 294.8C579.2 282.3 579.2 262 566.7 249.5L406.7 89.5C397.5 80.3 383.8 77.6 371.8 82.6z"
    });
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] !== size) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 640 640",
      width: size,
      height: size,
      "aria-hidden": "true",
      children: t2
    });
    $[1] = size;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  return t3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShareIcon);

/***/ },

/***/ 4735
/*!***************************************************!*\
  !*** ./src/components/Icons/UserIcon/UserIcon.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


function UserIcon(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(3);
  const {
    size: t1
  } = t0;
  const size = t1 === undefined ? 24 : t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"
    });
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] !== size) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      width: size,
      height: size,
      "aria-hidden": "true",
      children: t2
    });
    $[1] = size;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  return t3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserIcon);

/***/ },

/***/ 6671
/*!***********************************************************!*\
  !*** ./src/components/Icons/UserPlusIcon/UserPlusIcon.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


function UserPlusIcon(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(3);
  const {
    size: t1
  } = t0;
  const size = t1 === undefined ? 24 : t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
    });
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] !== size) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 640 512",
      width: size,
      height: size,
      "aria-hidden": "true",
      children: t2
    });
    $[1] = size;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  return t3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserPlusIcon);

/***/ },

/***/ 4517
/*!*************************************************************!*\
  !*** ./src/components/Icons/UserXmarkIcon/UserXmarkIcon.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


function UserXmarkIcon(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(3);
  const {
    size: t1
  } = t0;
  const size = t1 === undefined ? 24 : t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M286.1 368C384.6 368 464.4 447.8 464.4 546.3C464.4 562.7 451.1 576 434.7 576L78.1 576C61.7 576 48.4 562.7 48.4 546.3C48.4 447.8 128.2 368 226.7 368L286.1 368zM562.3 172.1C571.7 162.7 586.9 162.7 596.2 172.1C605.5 181.5 605.6 196.7 596.2 206L562.3 239.9L596.2 273.8C605.6 283.2 605.6 298.4 596.2 307.7C586.8 317 571.6 317.1 562.3 307.7L528.4 273.8L494.5 307.7C485.1 317.1 469.9 317.1 460.6 307.7C451.3 298.3 451.2 283.1 460.6 273.8L494.5 239.9L460.6 206C451.2 196.6 451.2 181.4 460.6 172.1C470 162.8 485.2 162.7 494.5 172.1L528.4 206L562.3 172.1zM256.4 312C190.1 312 136.4 258.3 136.4 192C136.4 125.7 190.1 72 256.4 72C322.7 72 376.4 125.7 376.4 192C376.4 258.3 322.7 312 256.4 312z"
    });
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] !== size) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 640 640",
      width: size,
      height: size,
      "aria-hidden": "true",
      children: t2
    });
    $[1] = size;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  return t3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserXmarkIcon);

/***/ },

/***/ 165
/*!*****************************************************!*\
  !*** ./src/components/Icons/XmarkIcon/XmarkIcon.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


function XmarkIcon(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(3);
  const {
    size: t1
  } = t0;
  const size = t1 === undefined ? 24 : t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"
    });
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] !== size) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 640 640",
      width: size,
      height: size,
      "aria-hidden": "true",
      children: t2
    });
    $[1] = size;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  return t3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (XmarkIcon);

/***/ },

/***/ 5508
/*!***********************************************!*\
  !*** ./src/components/Identicon/Identicon.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


function Identicon(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(8);
  const {
    seed: t1,
    size: t2
  } = t0;
  const seed = t1 === undefined ? "user" : t1;
  const size = t2 === undefined ? 48 : t2;
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  const color = `hsl(${hue}, 60%, 55%)`;
  const cell = size / 5;
  let cells;
  if ($[0] !== cell || $[1] !== color || $[2] !== hash) {
    cells = [];
    let bitIndex = 0;
    for (let x = 0; x < Math.ceil(2.5); x++) {
      for (let y = 0; y < 5; y++) {
        const bit = hash >> bitIndex & 1;
        bitIndex++;
        if (bit) {
          cells.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
            x: x * cell,
            y: y * cell,
            width: cell,
            height: cell,
            fill: color
          }, `l-${x}-${y}`));
          cells.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
            x: (5 - x - 1) * cell,
            y: y * cell,
            width: cell,
            height: cell,
            fill: color
          }, `r-${x}-${y}`));
        }
      }
    }
    $[0] = cell;
    $[1] = color;
    $[2] = hash;
    $[3] = cells;
  } else {
    cells = $[3];
  }
  let t3;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      width: "100%",
      height: "100%",
      fill: "#f0f0f0"
    });
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== cells || $[6] !== size) {
    t4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
      width: size,
      height: size,
      children: [t3, cells]
    });
    $[5] = cells;
    $[6] = size;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  return t4;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Identicon);

/***/ },

/***/ 6316
/*!***********************************************!*\
  !*** ./src/components/Interface/Interface.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useFullscreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useFullscreen */ 227);
/* harmony import */ var _hooks_useScrollLock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useScrollLock */ 4996);
/* harmony import */ var _hooks_useOverlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useOverlay */ 1124);
/* harmony import */ var _hooks_useSelectionToSpeech__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useSelectionToSpeech */ 9385);
/* harmony import */ var _hooks_useContextMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useContextMenu */ 5364);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Header/Header */ 4548);
/* harmony import */ var _Main_Main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Main/Main */ 9428);
/* harmony import */ var _MobileNav_MobileNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../MobileNav/MobileNav */ 8452);
/* harmony import */ var _LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../LoadingSpinner/LoadingSpinner */ 8620);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ 4848);












const Overlays = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_ffmpeg_ffmpeg_dist_esm_index_js-node_modules_ffmpeg_util_dist_esm_index_js"), __webpack_require__.e("node_modules_ffmpeg_ffmpeg_dist_esm_sync_recursive-src_components_Overlays_Overlays_js")]).then(() => (__webpack_require__(/*! ../Overlays/Overlays */ 3280))));
function Interface() {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(13);
  const [, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    isActive
  } = (0,_hooks_useOverlay__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const {
    isFullscreen
  } = (0,_hooks_useFullscreen__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_hooks_useScrollLock__WEBPACK_IMPORTED_MODULE_3__["default"])(isActive);
  (0,_hooks_useSelectionToSpeech__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_hooks_useContextMenu__WEBPACK_IMPORTED_MODULE_6__["default"])();
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const mobileRegex = /android|blackberry|iphone|ipad|ipod|opera mini|iemobile|wpdesktop/i;
      setIsMobile(mobileRegex.test(userAgent));
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  const detectMobile = t0;
  let t1;
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = () => {
      detectMobile();
    };
    t2 = [];
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  ;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(t1, t2);
  const t3 = !!isActive;
  let t4;
  if ($[3] !== isFullscreen) {
    t4 = !isFullscreen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Header_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {});
    $[3] = isFullscreen;
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  let t6;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Main_Main__WEBPACK_IMPORTED_MODULE_8__["default"], {});
    t6 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_MobileNav_MobileNav__WEBPACK_IMPORTED_MODULE_9__["default"], {});
    $[5] = t5;
    $[6] = t6;
  } else {
    t5 = $[5];
    t6 = $[6];
  }
  let t7;
  if ($[7] !== t3 || $[8] !== t4) {
    t7 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      id: "app-shell",
      inert: t3,
      children: [t4, t5, t6]
    });
    $[7] = t3;
    $[8] = t4;
    $[9] = t7;
  } else {
    t7 = $[9];
  }
  let t8;
  if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_10__["default"], {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Overlays, {})
    });
    $[10] = t8;
  } else {
    t8 = $[10];
  }
  let t9;
  if ($[11] !== t7) {
    t9 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
      children: [t7, t8]
    });
    $[11] = t7;
    $[12] = t9;
  } else {
    t9 = $[12];
  }
  return t9;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Interface);

/***/ },

/***/ 8620
/*!*********************************************************!*\
  !*** ./src/components/LoadingSpinner/LoadingSpinner.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.css */ 6074);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ 4848);



const LoadingSpinner = t0 => {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(3);
  const {
    size: t1
  } = t0;
  const size = t1 === undefined ? 24 : t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"
    });
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] !== size) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].spinner,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      width: size,
      height: size,
      "aria-hidden": "true",
      children: t2
    });
    $[1] = size;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  return t3;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingSpinner);

/***/ },

/***/ 9428
/*!*************************************!*\
  !*** ./src/components/Main/Main.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/database */ 2584);
/* harmony import */ var _SlideShow_SlideShow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SlideShow/SlideShow */ 3780);
/* harmony import */ var _LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LoadingSpinner/LoadingSpinner */ 8620);
/* harmony import */ var _Main_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Main.module.css */ 8745);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


 // temp to test frontend


const Feed = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => Promise.resolve(/*! import() */).then(() => (__webpack_require__(/*! ../../features/Feed/Feed */ 2861))));


function Main() {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(13);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = [{
      picture: "",
      username: "test_user1",
      video: 1,
      caption: "test caption 1"
    }, {
      picture: "",
      username: "test_user2",
      video: 2,
      caption: "testing captions with multiple lines. It should expand upward instead of downward."
    }, {
      picture: "",
      username: "test_user3",
      video: 3,
      caption: "test captions 3"
    }];
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(t0);
  let t1;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [{
      picture: "",
      username: "test_user1",
      video: 1,
      caption: "test caption 1"
    }, {
      picture: "",
      username: "test_user2",
      video: 2,
      caption: "testing captions with multiple lines. It should expand upward instead of downward."
    }, {
      picture: "",
      username: "test_user3",
      video: 3,
      caption: "test captions 3"
    }];
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const [suggestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(t1);
  let t2;
  if ($[2] !== data.length) {
    t2 = () => {
      if (!data.length) {}
    };
    $[2] = data.length;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = [];
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  ;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(t2, t3);
  let t4;
  if ($[5] !== suggestions) {
    t4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_SlideShow_SlideShow__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: suggestions
    });
    $[5] = suggestions;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__["default"], {});
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  let t6;
  if ($[8] !== data) {
    t6 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
      fallback: t5,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Feed, {
        data: data,
        setData: setData
      })
    });
    $[8] = data;
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  let t7;
  if ($[10] !== t4 || $[11] !== t6) {
    t7 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("main", {
      className: _Main_module_css__WEBPACK_IMPORTED_MODULE_5__["default"].main,
      "aria-description": "When text is highlighted, it will automatically be read aloud.",
      children: [t4, t6]
    });
    $[10] = t4;
    $[11] = t6;
    $[12] = t7;
  } else {
    t7 = $[12];
  }
  return t7;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ },

/***/ 9878
/*!***************************************************************!*\
  !*** ./src/components/MobileNav/CreateButton/CreateButton.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config */ 5474);
/* harmony import */ var _hooks_useOverlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useOverlay */ 1124);
/* harmony import */ var _Icons_PlusIcon_PlusIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Icons/PlusIcon/PlusIcon */ 9041);
/* harmony import */ var _CreateButton_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CreateButton.module.css */ 3583);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ 4848);






function CreateButton() {
  const buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    openOverlay
  } = (0,_hooks_useOverlay__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const openFullscreen = async () => {
    try {
      await document.getElementById('portal')?.requestFullscreen();
      await screen.orientation?.lock?.('portrait');
    } catch (error) {
      console.warn('Opening in fullscreen not supported on this device.');
    }
  };
  const onClick = async event => {
    navigator.vibrate?.(50);
    await openFullscreen();
    openOverlay(_config__WEBPACK_IMPORTED_MODULE_1__.overlay.wizard, buttonRef.current);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
    className: _CreateButton_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].createButton,
    ref: buttonRef,
    onClick: onClick,
    type: "button",
    "aria-label": "open camera",
    "aria-haspopup": "dialog",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Icons_PlusIcon_PlusIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: 32
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateButton);

/***/ },

/***/ 4264
/*!***********************************************************!*\
  !*** ./src/components/MobileNav/HomeButton/HomeButton.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var _Icons_HomeIcon_HomeIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Icons/HomeIcon/HomeIcon */ 4263);
/* harmony import */ var _HomeButton_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeButton.module.css */ 4269);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ 4848);




function HomeButton() {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(1);
  const onClick = _temp;
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
      className: _HomeButton_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].homeButton,
      onClick: onClick,
      type: "button",
      "aria-label": "scroll to top",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icons_HomeIcon_HomeIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {})
    });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}
function _temp(event) {
  navigator.vibrate?.(50);
  window.scrollTo({
    behavior: "smooth",
    top: 0
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeButton);

/***/ },

/***/ 8452
/*!***********************************************!*\
  !*** ./src/components/MobileNav/MobileNav.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useFullscreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useFullscreen */ 227);
/* harmony import */ var _hooks_useScrollEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useScrollEffect */ 9522);
/* harmony import */ var _HomeButton_HomeButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HomeButton/HomeButton */ 4264);
/* harmony import */ var _SearchButton_SearchButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchButton/SearchButton */ 650);
/* harmony import */ var _CreateButton_CreateButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CreateButton/CreateButton */ 9878);
/* harmony import */ var _NotificationsButton_NotificationsButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NotificationsButton/NotificationsButton */ 2096);
/* harmony import */ var _ProfileButton_ProfileButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProfileButton/ProfileButton */ 192);
/* harmony import */ var _MobileNav_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MobileNav.module.css */ 5945);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ 4848);











function MobileNav() {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(4);
  const {
    isFullscreen
  } = (0,_hooks_useFullscreen__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_hooks_useScrollEffect__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const navRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  let t0;
  if ($[0] !== isFullscreen) {
    t0 = () => {
      if (!isFullscreen) {}
    };
    $[0] = isFullscreen;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  let t1;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [];
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  ;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(t0, t1);
  let t2;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("nav", {
      ref: navRef,
      className: _MobileNav_module_css__WEBPACK_IMPORTED_MODULE_9__["default"].navigation,
      "aria-label": "primary navigation",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_HomeButton_HomeButton__WEBPACK_IMPORTED_MODULE_4__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_SearchButton_SearchButton__WEBPACK_IMPORTED_MODULE_5__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_CreateButton_CreateButton__WEBPACK_IMPORTED_MODULE_6__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_NotificationsButton_NotificationsButton__WEBPACK_IMPORTED_MODULE_7__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ProfileButton_ProfileButton__WEBPACK_IMPORTED_MODULE_8__["default"], {})]
      })
    });
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  return t2;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileNav);

/***/ },

/***/ 2096
/*!*****************************************************************************!*\
  !*** ./src/components/MobileNav/NotificationsButton/NotificationsButton.js ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ 5474);
/* harmony import */ var _hooks_useOverlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useOverlay */ 1124);
/* harmony import */ var _Icons_BellIcon_BellIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Icons/BellIcon/BellIcon */ 3059);
/* harmony import */ var _NotificationsButton_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NotificationsButton.module.css */ 905);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ 4848);







function NotificationsButton() {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(6);
  const buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    openOverlay
  } = (0,_hooks_useOverlay__WEBPACK_IMPORTED_MODULE_3__["default"])();
  let t0;
  if ($[0] !== openOverlay) {
    t0 = event => {
      navigator.vibrate?.(50);
      openOverlay(_config__WEBPACK_IMPORTED_MODULE_2__.overlay.notifications, buttonRef.current);
    };
    $[0] = openOverlay;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  const onClick = t0;
  let t1;
  let t2;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icons_BellIcon_BellIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {});
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      role: "status",
      "aria-label": "notification indicator",
      "aria-hidden": "false"
    });
    $[2] = t1;
    $[3] = t2;
  } else {
    t1 = $[2];
    t2 = $[3];
  }
  let t3;
  if ($[4] !== onClick) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
      className: _NotificationsButton_module_css__WEBPACK_IMPORTED_MODULE_5__["default"].notificationsButton,
      ref: buttonRef,
      onClick: onClick,
      type: "button",
      "aria-label": "open notifications",
      "aria-haspopup": "dialog",
      children: [t1, t2]
    });
    $[4] = onClick;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  return t3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationsButton);

/***/ },

/***/ 192
/*!*****************************************************************!*\
  !*** ./src/components/MobileNav/ProfileButton/ProfileButton.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ 5474);
/* harmony import */ var _hooks_useSession__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useSession */ 288);
/* harmony import */ var _hooks_useProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useProfile */ 901);
/* harmony import */ var _hooks_useOverlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useOverlay */ 1124);
/* harmony import */ var _Icons_UserIcon_UserIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Icons/UserIcon/UserIcon */ 4735);
/* harmony import */ var _ProfileButton_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProfileButton.module.css */ 6161);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ 4848);









function ProfileButton() {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(7);
  const buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    session
  } = (0,_hooks_useSession__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const {
    setUserProfile
  } = (0,_hooks_useProfile__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const {
    openOverlay
  } = (0,_hooks_useOverlay__WEBPACK_IMPORTED_MODULE_5__["default"])();
  let t0;
  if ($[0] !== openOverlay || $[1] !== session.username || $[2] !== setUserProfile) {
    t0 = event => {
      navigator.vibrate?.(50);
      setUserProfile(session.username);
      openOverlay(_config__WEBPACK_IMPORTED_MODULE_2__.overlay.profile, buttonRef.current);
    };
    $[0] = openOverlay;
    $[1] = session.username;
    $[2] = setUserProfile;
    $[3] = t0;
  } else {
    t0 = $[3];
  }
  const onClick = t0;
  let t1;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Icons_UserIcon_UserIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {});
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== onClick) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
      className: _ProfileButton_module_css__WEBPACK_IMPORTED_MODULE_7__["default"].profileButton,
      ref: buttonRef,
      onClick: onClick,
      type: "button",
      "aria-label": "open profile",
      "aria-haspopup": "dialog",
      children: t1
    });
    $[5] = onClick;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  return t2;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileButton);

/***/ },

/***/ 650
/*!***************************************************************!*\
  !*** ./src/components/MobileNav/SearchButton/SearchButton.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ 5474);
/* harmony import */ var _hooks_useOverlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useOverlay */ 1124);
/* harmony import */ var _Icons_SearchIcon_SearchIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Icons/SearchIcon/SearchIcon */ 4801);
/* harmony import */ var _SearchButton_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchButton.module.css */ 1919);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ 4848);







function SearchButton() {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(5);
  const buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    openOverlay
  } = (0,_hooks_useOverlay__WEBPACK_IMPORTED_MODULE_3__["default"])();
  let t0;
  if ($[0] !== openOverlay) {
    t0 = event => {
      navigator.vibrate?.(50);
      openOverlay(_config__WEBPACK_IMPORTED_MODULE_2__.overlay.search, buttonRef.current);
    };
    $[0] = openOverlay;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  const onClick = t0;
  let t1;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icons_SearchIcon_SearchIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {});
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  let t2;
  if ($[3] !== onClick) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
      className: _SearchButton_module_css__WEBPACK_IMPORTED_MODULE_5__["default"].searchButton,
      ref: buttonRef,
      onClick: onClick,
      type: "button",
      "aria-label": "search",
      "aria-haspopup": "dialog",
      children: t1
    });
    $[3] = onClick;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  return t2;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchButton);

/***/ },

/***/ 386
/*!******************************************************!*\
  !*** ./src/components/Providers/CaptionsProvider.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CaptionsContext: () => (/* binding */ CaptionsContext),
/* harmony export */   CaptionsProvider: () => (/* binding */ CaptionsProvider)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ 4848);



const CaptionsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function CaptionsProvider(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(7);
  const {
    children
  } = t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [];
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const [captions, setCaptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(t1);
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = data => {
      setCaptions(prev => [...prev, data]);
    };
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const createCaption = t2;
  let t3;
  if ($[2] !== captions) {
    t3 = {
      captions,
      createCaption
    };
    $[2] = captions;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] !== children || $[5] !== t3) {
    t4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CaptionsContext.Provider, {
      value: t3,
      children: children
    });
    $[4] = children;
    $[5] = t3;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  return t4;
}


/***/ },

/***/ 4462
/*!*****************************************************!*\
  !*** ./src/components/Providers/ContentProvider.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentContext: () => (/* binding */ ContentContext),
/* harmony export */   ContentProvider: () => (/* binding */ ContentProvider)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ 4848);



const ContentContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function ContentProvider(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(6);
  const {
    children
  } = t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = {
      id: ""
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(t1);
  let t2;
  if ($[1] !== content) {
    t2 = {
      content,
      setContent
    };
    $[1] = content;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] !== children || $[4] !== t2) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ContentContext.Provider, {
      value: t2,
      children: children
    });
    $[3] = children;
    $[4] = t2;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  return t3;
}


/***/ },

/***/ 3677
/*!****************************************************!*\
  !*** ./src/components/Providers/DialogProvider.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DialogContext: () => (/* binding */ DialogContext),
/* harmony export */   DialogProvider: () => (/* binding */ DialogProvider)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Dialog_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Dialog/Dialog */ 1986);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ 4848);




const DialogContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function DialogProvider(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(14);
  const {
    children
  } = t0;
  const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const dialogRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = component => {
      setContent(component);
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const openDialog = t1;
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = () => {
      setContent(null);
    };
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const closeDialog = t2;
  let t3;
  if ($[2] !== content) {
    t3 = () => {
      const dialog = dialogRef.current;
      if (dialog) {
        content !== null ? dialog.showModal() : dialog.close();
      }
    };
    $[2] = content;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  const action = t3;
  let t4;
  if ($[4] !== action) {
    t4 = () => {
      action();
    };
    $[4] = action;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  let t5;
  if ($[6] !== content) {
    t5 = [content];
    $[6] = content;
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  ;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(t4, t5);
  let t6;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = {
      openDialog,
      closeDialog
    };
    $[8] = t6;
  } else {
    t6 = $[8];
  }
  let t7;
  if ($[9] !== content) {
    t7 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Dialog_Dialog__WEBPACK_IMPORTED_MODULE_2__["default"], {
      dialogRef: dialogRef,
      content: content,
      close: closeDialog
    });
    $[9] = content;
    $[10] = t7;
  } else {
    t7 = $[10];
  }
  let t8;
  if ($[11] !== children || $[12] !== t7) {
    t8 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(DialogContext.Provider, {
      value: t6,
      children: [children, t7]
    });
    $[11] = children;
    $[12] = t7;
    $[13] = t8;
  } else {
    t8 = $[13];
  }
  return t8;
}


/***/ },

/***/ 8664
/*!*****************************************************!*\
  !*** ./src/components/Providers/FootageProvider.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FootageContext: () => (/* binding */ FootageContext),
/* harmony export */   FootageProvider: () => (/* binding */ FootageProvider)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ 4848);



const FootageContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);

// consider moving this to Wizard

function FootageProvider(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(6);
  const {
    children
  } = t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [];
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const [footage, setFootage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(t1);
  let t2;
  if ($[1] !== footage) {
    t2 = {
      footage,
      setFootage
    };
    $[1] = footage;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] !== children || $[4] !== t2) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FootageContext.Provider, {
      value: t2,
      children: children
    });
    $[3] = children;
    $[4] = t2;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  return t3;
}


/***/ },

/***/ 5456
/*!********************************************************!*\
  !*** ./src/components/Providers/FullscreenProvider.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FullscreenContext: () => (/* binding */ FullscreenContext),
/* harmony export */   FullscreenProvider: () => (/* binding */ FullscreenProvider)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ 4848);



const FullscreenContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function FullscreenProvider(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(8);
  const {
    children
  } = t0;
  const [isFullscreen, setFullscreen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = event => {
      setFullscreen(!!document.fullscreenElement);
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const onFullscreenChange = t1;
  let t2;
  let t3;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = () => {
      document.addEventListener("fullscreenchange", onFullscreenChange);
      return () => {
        document.removeEventListener("fullscreenchange", onFullscreenChange);
      };
    };
    t3 = [];
    $[1] = t2;
    $[2] = t3;
  } else {
    t2 = $[1];
    t3 = $[2];
  }
  ;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(t2, t3);
  let t4;
  if ($[3] !== isFullscreen) {
    t4 = {
      isFullscreen
    };
    $[3] = isFullscreen;
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  if ($[5] !== children || $[6] !== t4) {
    t5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FullscreenContext.Provider, {
      value: t4,
      children: children
    });
    $[5] = children;
    $[6] = t4;
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  return t5;
}


/***/ },

/***/ 6523
/*!*****************************************************!*\
  !*** ./src/components/Providers/OverlayProvider.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverlayContext: () => (/* binding */ OverlayContext),
/* harmony export */   OverlayProvider: () => (/* binding */ OverlayProvider)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ 4848);



const OverlayContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function OverlayProvider(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(14);
  const {
    children
  } = t0;
  const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [];
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const focusStack = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(t1);
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = element => {
      focusStack.current.push(element);
    };
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const push = t2;
  let t3;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = () => {
      for (let i = focusStack.current.length - 1; i >= 0; i--) {
        const element_0 = focusStack.current[i];
        if (document.body.contains(element_0)) {
          element_0.focus();
          focusStack.current = [];
          return;
        }
      }
    };
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  const pop = t3;
  let t4;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = (id, focusElement) => {
      if (history.state?.overlayOpen === id) {
        history.replaceState({
          overlayOpen: id
        }, "");
      } else {
        history.pushState({
          overlayOpen: id
        }, "");
      }
      push(focusElement);
      setIsActive(id);
    };
    $[3] = t4;
  } else {
    t4 = $[3];
  }
  const openOverlay = t4;
  const closeOverlay = _temp;
  let t5;
  if ($[4] !== isActive) {
    t5 = () => {
      if (isActive) {
        setIsActive(null);
        pop();
      }
    };
    $[4] = isActive;
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  const handlePopState = t5;
  let t6;
  let t7;
  if ($[6] !== handlePopState) {
    t6 = () => {
      window.addEventListener("popstate", handlePopState);
      return () => {
        window.removeEventListener("popstate", handlePopState);
      };
    };
    t7 = [handlePopState];
    $[6] = handlePopState;
    $[7] = t6;
    $[8] = t7;
  } else {
    t6 = $[7];
    t7 = $[8];
  }
  ;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(t6, t7);
  let t8;
  if ($[9] !== isActive) {
    t8 = {
      isActive,
      openOverlay,
      closeOverlay
    };
    $[9] = isActive;
    $[10] = t8;
  } else {
    t8 = $[10];
  }
  let t9;
  if ($[11] !== children || $[12] !== t8) {
    t9 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(OverlayContext.Provider, {
      value: t8,
      children: children
    });
    $[11] = children;
    $[12] = t8;
    $[13] = t9;
  } else {
    t9 = $[13];
  }
  return t9;
}
function _temp() {
  if (history.state?.overlayOpen) {
    history.back();
  }
}


/***/ },

/***/ 8934
/*!*****************************************************!*\
  !*** ./src/components/Providers/ProfileProvider.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileContext: () => (/* binding */ ProfileContext),
/* harmony export */   ProfileProvider: () => (/* binding */ ProfileProvider)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ 4848);



const ProfileContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function ProfileProvider(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(5);
  const {
    children
  } = t0;
  const [userProfile, setUserProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  let t1;
  if ($[0] !== userProfile) {
    t1 = {
      userProfile,
      setUserProfile
    };
    $[0] = userProfile;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== children || $[3] !== t1) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ProfileContext.Provider, {
      value: t1,
      children: children
    });
    $[2] = children;
    $[3] = t1;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  return t2;
}


/***/ },

/***/ 9695
/*!*****************************************************!*\
  !*** ./src/components/Providers/SessionProvider.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionContext: () => (/* binding */ SessionContext),
/* harmony export */   SessionProvider: () => (/* binding */ SessionProvider)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ 4848);



const SessionContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function SessionProvider(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(6);
  const {
    children
  } = t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = {
      username: "testUser",
      picture: "",
      isAuthenticated: true
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const [session, setSession] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(t1);
  let t2;
  if ($[1] !== session) {
    t2 = {
      session,
      setSession
    };
    $[1] = session;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] !== children || $[4] !== t2) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SessionContext.Provider, {
      value: t2,
      children: children
    });
    $[3] = children;
    $[4] = t2;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  return t3;
}


/***/ },

/***/ 2051
/*!***********************************************************!*\
  !*** ./src/components/SlideShow/NextButton/NextButton.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var _Icons_ChevronRightIcon_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Icons/ChevronRightIcon/ChevronRightIcon */ 5699);
/* harmony import */ var _NextButton_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NextButton.module.css */ 454);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ 4848);




function NextButton(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(6);
  const {
    length,
    setCurrentIndex
  } = t0;
  let t1;
  if ($[0] !== length || $[1] !== setCurrentIndex) {
    t1 = event => {
      console.log("clicked next slide");
      setCurrentIndex(prev => (prev + 1) % length);
    };
    $[0] = length;
    $[1] = setCurrentIndex;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const onClick = t1;
  let t2;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icons_ChevronRightIcon_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {});
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== onClick) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
      className: _NextButton_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].nextButton,
      onClick: onClick,
      "aria-label": "next slide",
      children: t2
    });
    $[4] = onClick;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  return t3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextButton);

/***/ },

/***/ 4843
/*!*******************************************************************!*\
  !*** ./src/components/SlideShow/PreviousButton/PreviousButton.js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var _Icons_ChevronLeftIcon_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Icons/ChevronLeftIcon/ChevronLeftIcon */ 1601);
/* harmony import */ var _PreviousButton_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PreviousButton.module.css */ 7626);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ 4848);




function PreviousButton(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(6);
  const {
    length,
    setCurrentIndex
  } = t0;
  let t1;
  if ($[0] !== length || $[1] !== setCurrentIndex) {
    t1 = event => {
      console.log("clicked previous slide");
      setCurrentIndex(prev => (prev - 1 + length) % length);
    };
    $[0] = length;
    $[1] = setCurrentIndex;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const onClick = t1;
  let t2;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icons_ChevronLeftIcon_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {});
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== onClick) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
      className: _PreviousButton_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].previousButton,
      onClick: onClick,
      "aria-label": "previous slide",
      children: t2
    });
    $[4] = onClick;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  return t3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreviousButton);

/***/ },

/***/ 3780
/*!***********************************************!*\
  !*** ./src/components/SlideShow/SlideShow.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NextButton_NextButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NextButton/NextButton */ 2051);
/* harmony import */ var _PreviousButton_PreviousButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PreviousButton/PreviousButton */ 4843);
/* harmony import */ var _features_Feed_Feed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/Feed/Feed */ 2861);
/* harmony import */ var _SlideShow_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SlideShow.module.css */ 6313);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ 4848);







function SlideShow(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(20);
  const {
    data
  } = t0;
  const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [];
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const videoRefs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(t1);
  let t2;
  if ($[1] !== currentIndex) {
    t2 = () => {
      videoRefs.current?.forEach((video, index) => {
        if (index === currentIndex) {
          video.currentTime = 0;
          video.play().catch(console.error);
        } else {
          video.pause();
        }
      });
    };
    $[1] = currentIndex;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const playCurrent = t2;
  let t3;
  if ($[3] !== data.length || $[4] !== playCurrent) {
    t3 = () => {
      if (!!data.length) {
        playCurrent();
      }
    };
    $[3] = data.length;
    $[4] = playCurrent;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  if ($[6] !== currentIndex) {
    t4 = [currentIndex];
    $[6] = currentIndex;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  ;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(t3, t4);
  let t5;
  let t6;
  if ($[8] !== data.length) {
    t5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_PreviousButton_PreviousButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      length: data.length,
      setCurrentIndex: setCurrentIndex
    });
    t6 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_NextButton_NextButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      length: data.length,
      setCurrentIndex: setCurrentIndex
    });
    $[8] = data.length;
    $[9] = t5;
    $[10] = t6;
  } else {
    t5 = $[9];
    t6 = $[10];
  }
  const t7 = `translateX(-${currentIndex * 100}%)`;
  let t8;
  if ($[11] !== t7) {
    t8 = {
      transform: t7
    };
    $[11] = t7;
    $[12] = t8;
  } else {
    t8 = $[12];
  }
  let t9;
  if ($[13] !== data || $[14] !== t8) {
    t9 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: _SlideShow_module_css__WEBPACK_IMPORTED_MODULE_5__["default"].slideContainer,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_features_Feed_Feed__WEBPACK_IMPORTED_MODULE_4__["default"], {
        data: data,
        videoRefs: videoRefs,
        style: t8,
        slideshow: true
      })
    });
    $[13] = data;
    $[14] = t8;
    $[15] = t9;
  } else {
    t9 = $[15];
  }
  let t10;
  if ($[16] !== t5 || $[17] !== t6 || $[18] !== t9) {
    t10 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section", {
      className: _SlideShow_module_css__WEBPACK_IMPORTED_MODULE_5__["default"].slideShow,
      "aria-label": "slideshow",
      "aria-description": "a slideshow of popular content",
      children: [t5, t6, t9]
    });
    $[16] = t5;
    $[17] = t6;
    $[18] = t9;
    $[19] = t10;
  } else {
    t10 = $[19];
  }
  return t10;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SlideShow);

/***/ },

/***/ 5474
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   api: () => (/* binding */ api),
/* harmony export */   contextmenu: () => (/* binding */ contextmenu),
/* harmony export */   overlay: () => (/* binding */ overlay),
/* harmony export */   storage: () => (/* binding */ storage)
/* harmony export */ });
const overlay = {
  camera: 'camera',
  comments: 'comments',
  dashboard: 'dashboard',
  dialog: 'dialog',
  editor: 'editor',
  notifications: 'notifications',
  login: 'login',
  profile: 'profile',
  register: 'register',
  search: 'search',
  wizard: 'wizard'
};
const api = {
  login: '/api/v1/login',
  logout: '/api/v1/logout',
  register: '/api/v1/register',
  session: '/api/v1/session',
  posts: '/api/v1/posts',
  comments: '/api/v1/comments'
};
const storage = {
  draft: 'draft',
  captions: 'captions',
  publisher: 'publisher'
};

// consider moving to its own config file:
const contextmenu = {
  default: {
    actions: [],
    information: []
  },
  feednode: {
    actions: ['like', 'comment', 'share', 'fullscreen', 'report', 'blockuser'],
    information: []
  },
  camera: {
    actions: [],
    information: []
  },
  search: {
    actions: [],
    information: []
  },
  profile: {
    actions: [],
    information: []
  },
  notifications: {
    actions: [],
    information: []
  },
  dashboard: {
    actions: [],
    information: []
  },
  login: {
    actions: [],
    information: []
  }
};

/***/ },

/***/ 9897
/*!*******************************************!*\
  !*** ./src/features/Comments/Comments.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ 5474);
/* harmony import */ var _utilities_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/server */ 8754);
/* harmony import */ var _hooks_useContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useContent */ 9553);
/* harmony import */ var _hooks_useGestures__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useGestures */ 3042);
/* harmony import */ var _components_FocusTrap_FocusTrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/FocusTrap/FocusTrap */ 4948);
/* harmony import */ var _TopNav_TopNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TopNav/TopNav */ 9114);
/* harmony import */ var _CommentsListItem_CommentsListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CommentsListItem/CommentsListItem */ 7680);
/* harmony import */ var _CommentsForm_CommentsForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CommentsForm/CommentsForm */ 3102);
/* harmony import */ var _Comments_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Comments.module.css */ 3492);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ 4848);












function Comments(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(43);
  const {
    closeComments,
    slideshow: t1
  } = t0;
  const slideshow = t1 === undefined ? false : t1;
  (0,_hooks_useContent__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = [];
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  const [data] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(t2);
  const commentsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const ticking = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
  const latestDeltaX = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
  const {
    onGestureDown,
    onGestureMove,
    onGestureUp,
    onGestureCancel
  } = (0,_hooks_useGestures__WEBPACK_IMPORTED_MODULE_5__["default"])();
  let t3;
  if ($[1] !== closeComments) {
    t3 = () => {
      setIsOpen(false);
      commentsRef.current.addEventListener("transitionend", closeComments, {
        once: true
      });
    };
    $[1] = closeComments;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  const close = t3;
  let t4;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = [];
    $[3] = t4;
  } else {
    t4 = $[3];
  }
  ;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(_temp, t4);
  let t5;
  if ($[4] !== isOpen) {
    t5 = () => {
      requestAnimationFrame(() => {
        if (!isOpen) {
          setIsOpen(true);
        }
      });
    };
    $[4] = isOpen;
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  let t6;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = [];
    $[6] = t6;
  } else {
    t6 = $[6];
  }
  ;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(t5, t6);
  let t7;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = [];
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  ;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(_temp3, t7);
  let t8;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = (deltaX, currentTarget$0) => {
      latestDeltaX.current = deltaX;
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(() => {
          currentTarget$0.style.transform = `translate3d(${latestDeltaX.current}px, 0, 0)`;
          ticking.current = false;
        });
      }
    };
    $[8] = t8;
  } else {
    t8 = $[8];
  }
  const throttleTransition = t8;
  let t9;
  if ($[9] !== onGestureDown) {
    t9 = event => {
      if (event.target.tagName === "BUTTON") {
        return;
      }
      const {
        clientX,
        currentTarget: currentTarget_0
      } = event;
      const isLeft = clientX < 35;
      if (!isLeft) {
        return;
      }
      onGestureDown(event);
      currentTarget_0.style.transition = "none";
      currentTarget_0.style.willChange = "transform";
    };
    $[9] = onGestureDown;
    $[10] = t9;
  } else {
    t9 = $[10];
  }
  const onPointerDown = t9;
  let t10;
  if ($[11] !== onGestureMove) {
    t10 = event_0 => {
      const {
        currentTarget: currentTarget_1
      } = event_0;
      const {
        deltaX: deltaX_0,
        axis
      } = onGestureMove(event_0);
      if (deltaX_0 === undefined || axis !== "x") {
        return;
      }
      const raw = Math.max(0, deltaX_0);
      const resisted = raw / (1 + raw / 300);
      throttleTransition(resisted, currentTarget_1);
    };
    $[11] = onGestureMove;
    $[12] = t10;
  } else {
    t10 = $[12];
  }
  const onPointerMove = t10;
  let t11;
  if ($[13] !== close || $[14] !== onGestureUp) {
    t11 = event_1 => {
      if (event_1.target.tagName === "BUTTON") {
        return;
      }
      const {
        currentTarget: currentTarget_2
      } = event_1;
      const {
        deltaX: deltaX_1
      } = onGestureUp(event_1);
      ticking.current = false;
      const raw_0 = Math.max(0, deltaX_1);
      const resisted_0 = raw_0 / (1 + raw_0 / 300);
      const shouldClose = resisted_0 >= 150;
      currentTarget_2.style.transition = "transform 0.25s cubic-bezier(0.2, 0, 0, 1)";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (shouldClose) {
            navigation.vibrate?.(50);
            currentTarget_2.style.transform = "translate3d(100vw, 0, 0)";
            currentTarget_2.parentElement.style.opacity = 0;
            close();
          } else {
            currentTarget_2.style.transform = "translate3d(0, 0, 0)";
            currentTarget_2.addEventListener("transitionend", () => {
              currentTarget_2.style.transform = "";
              currentTarget_2.style.transition = "";
              currentTarget_2.style.willChange = "";
            }, {
              once: true
            });
          }
        });
      });
    };
    $[13] = close;
    $[14] = onGestureUp;
    $[15] = t11;
  } else {
    t11 = $[15];
  }
  const onPointerUp = t11;
  let t12;
  if ($[16] !== onGestureCancel) {
    t12 = event_2 => {
      currentTarget.style.transform = "";
      currentTarget.style.transition = "";
      currentTarget.style.willChange = "";
      onGestureCancel(event_2);
    };
    $[16] = onGestureCancel;
    $[17] = t12;
  } else {
    t12 = $[17];
  }
  const onPointerCancel = t12;
  console.log("slideshow: ", slideshow);
  const t13 = slideshow ? _Comments_module_css__WEBPACK_IMPORTED_MODULE_10__["default"].slideshow_overlay : _Comments_module_css__WEBPACK_IMPORTED_MODULE_10__["default"].overlay;
  const t14 = slideshow && _Comments_module_css__WEBPACK_IMPORTED_MODULE_10__["default"].slideshow_comments;
  const t15 = !slideshow && _Comments_module_css__WEBPACK_IMPORTED_MODULE_10__["default"].comments;
  const t16 = isOpen === true && _Comments_module_css__WEBPACK_IMPORTED_MODULE_10__["default"].open;
  const t17 = isOpen === false && _Comments_module_css__WEBPACK_IMPORTED_MODULE_10__["default"].close;
  let t18;
  if ($[18] !== t14 || $[19] !== t15 || $[20] !== t16 || $[21] !== t17) {
    t18 = [t14, t15, t16, t17].filter(Boolean);
    $[18] = t14;
    $[19] = t15;
    $[20] = t16;
    $[21] = t17;
    $[22] = t18;
  } else {
    t18 = $[22];
  }
  const t19 = t18.join(" ");
  let t20;
  if ($[23] !== close) {
    t20 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_TopNav_TopNav__WEBPACK_IMPORTED_MODULE_7__["default"], {
      close: close
    });
    $[23] = close;
    $[24] = t20;
  } else {
    t20 = $[24];
  }
  let t21;
  if ($[25] !== data) {
    t21 = !data.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("li", {
      children: "No comments yet."
    }) : data.map(_temp4);
    $[25] = data;
    $[26] = t21;
  } else {
    t21 = $[26];
  }
  let t22;
  if ($[27] !== t21) {
    t22 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("ul", {
      children: t21
    });
    $[27] = t21;
    $[28] = t22;
  } else {
    t22 = $[28];
  }
  let t23;
  if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
    t23 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_CommentsForm_CommentsForm__WEBPACK_IMPORTED_MODULE_9__["default"], {});
    $[29] = t23;
  } else {
    t23 = $[29];
  }
  let t24;
  if ($[30] !== t20 || $[31] !== t22) {
    t24 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_components_FocusTrap_FocusTrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: [t20, t22, t23]
    });
    $[30] = t20;
    $[31] = t22;
    $[32] = t24;
  } else {
    t24 = $[32];
  }
  let t25;
  if ($[33] !== onPointerCancel || $[34] !== onPointerDown || $[35] !== onPointerMove || $[36] !== onPointerUp || $[37] !== t19 || $[38] !== t24) {
    t25 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      ref: commentsRef,
      className: t19,
      onPointerDown: onPointerDown,
      onPointerMove: onPointerMove,
      onPointerUp: onPointerUp,
      onPointerCancel: onPointerCancel,
      children: t24
    });
    $[33] = onPointerCancel;
    $[34] = onPointerDown;
    $[35] = onPointerMove;
    $[36] = onPointerUp;
    $[37] = t19;
    $[38] = t24;
    $[39] = t25;
  } else {
    t25 = $[39];
  }
  let t26;
  if ($[40] !== t13 || $[41] !== t25) {
    t26 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("aside", {
      className: t13,
      children: t25
    });
    $[40] = t13;
    $[41] = t25;
    $[42] = t26;
  } else {
    t26 = $[42];
  }
  return t26;
}
function _temp4(comment) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_CommentsListItem_CommentsListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    comment: comment
  });
}
function _temp3() {
  if (navigator.virtualKeyboard) {
    navigator.virtualKeyboard.overlaysContent = true;
  }
  return _temp2;
}
function _temp2() {
  if (navigator.virtualKeyboard) {
    navigator.virtualKeyboard.overlaysContent = false;
  }
}
function _temp() {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comments);

/***/ },

/***/ 3102
/*!************************************************************!*\
  !*** ./src/features/Comments/CommentsForm/CommentsForm.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config */ 5474);
/* harmony import */ var _hooks_useContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useContent */ 9553);
/* harmony import */ var _utilities_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utilities/validate */ 1135);
/* harmony import */ var _utilities_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utilities/server */ 8754);
/* harmony import */ var _components_Icons_PaperPlaneIcon_PaperPlaneIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Icons/PaperPlaneIcon/PaperPlaneIcon */ 4065);
/* harmony import */ var _CommentsForm_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CommentsForm.module.css */ 8989);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ 4848);








function CommentsForm() {
  const {
    content
  } = (0,_hooks_useContent__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const onSubmit = async event => {
    try {
      event.preventDefault();
      navigator.vibrate?.(50);
      setLoading(true);
      const formData = new FormData(event.target);
      const comment = formData.get('comment').trim();
      const request = {
        id: content.id,
        comment: _utilities_validate__WEBPACK_IMPORTED_MODULE_3__["default"].comment(comment)
      };
      // const response = await server.post(api.comments, request)
      // loadComments or append comment to state?
      // update feed. perhaps a snackbar sucess message.
    } catch (error) {
      setErrorMessage(error);
    } finally {
      setLoading(false);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("form", {
    className: _CommentsForm_module_css__WEBPACK_IMPORTED_MODULE_6__["default"].commentsForm,
    onSubmit: onSubmit,
    "aria-label": "comment form",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("textarea", {
      id: "comment",
      name: "comment",
      spellCheck: "true",
      enterkeyhint: "send",
      required: true,
      placeholder: "Leave a comment...",
      "aria-label": "comment input"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
      type: "submit",
      "aria-label": "submit comment",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Icons_PaperPlaneIcon_PaperPlaneIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {})
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentsForm);

/***/ },

/***/ 7680
/*!********************************************************************!*\
  !*** ./src/features/Comments/CommentsListItem/CommentsListItem.js ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


function CommentsListItem(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(16);
  const {
    comment
  } = t0;
  let t1;
  if ($[0] !== comment.username) {
    t1 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4", {
      children: comment.username
    });
    $[0] = comment.username;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== comment.datetime) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("time", {
      datetime: comment.datetime,
      children: "comment.datetime"
    });
    $[2] = comment.datetime;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== t1 || $[5] !== t2) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("header", {
      children: [t1, t2]
    });
    $[4] = t1;
    $[5] = t2;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  let t4;
  if ($[7] !== comment.text) {
    t4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      children: comment.text
    });
    $[7] = comment.text;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  let t5;
  if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {});
    $[9] = t5;
  } else {
    t5 = $[9];
  }
  let t6;
  if ($[10] !== t3 || $[11] !== t4) {
    t6 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("article", {
      children: [t3, t4, t5]
    });
    $[10] = t3;
    $[11] = t4;
    $[12] = t6;
  } else {
    t6 = $[12];
  }
  let t7;
  if ($[13] !== comment.id || $[14] !== t6) {
    t7 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
      children: t6
    }, comment.id);
    $[13] = comment.id;
    $[14] = t6;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  return t7;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentsListItem);

/***/ },

/***/ 9114
/*!************************************************!*\
  !*** ./src/features/Comments/TopNav/TopNav.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config */ 5474);
/* harmony import */ var _components_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/CloseButton/CloseButton */ 1760);
/* harmony import */ var _TopNav_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopNav.module.css */ 6505);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ 4848);





function TopNav(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(5);
  const {
    close
  } = t0;
  let t1;
  if ($[0] !== close) {
    t1 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      overlay: _config__WEBPACK_IMPORTED_MODULE_1__.overlay.comments,
      close: close
    });
    $[0] = close;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
      children: "Comments"
    });
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] !== t1) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("nav", {
      className: _TopNav_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].topNav,
      children: [t1, t2]
    });
    $[3] = t1;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  return t3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopNav);

/***/ },

/***/ 3564
/*!************************************************************!*\
  !*** ./src/features/Feed/CommentsButton/CommentsButton.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ 5474);
/* harmony import */ var _hooks_useOverlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useOverlay */ 1124);
/* harmony import */ var _components_Icons_MessageIcon_MessageIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Icons/MessageIcon/MessageIcon */ 6721);
/* harmony import */ var _CommentsButton_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CommentsButton.module.css */ 9011);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ 4848);







function CommentsButton(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(5);
  const {
    openComments
  } = t0;
  const buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  let t1;
  if ($[0] !== openComments) {
    t1 = event => {
      navigator.vibrate?.(50);
      openComments();
    };
    $[0] = openComments;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const onClick = t1;
  let t2;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Icons_MessageIcon_MessageIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {});
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] !== onClick) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
      className: _CommentsButton_module_css__WEBPACK_IMPORTED_MODULE_5__["default"].commentsButton,
      onClick: onClick,
      ref: buttonRef,
      type: "button",
      "aria-label": "leave a comment",
      children: t2
    });
    $[3] = onClick;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  return t3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentsButton);

/***/ },

/***/ 2861
/*!***********************************!*\
  !*** ./src/features/Feed/Feed.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ 5474);
/* harmony import */ var _utilities_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/observer */ 2039);
/* harmony import */ var _utilities_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/server */ 8754);
/* harmony import */ var _utilities_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/database */ 2584);
/* harmony import */ var _FeedNode_FeedNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FeedNode/FeedNode */ 6532);
/* harmony import */ var _components_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/LoadingSpinner/LoadingSpinner */ 8620);
/* harmony import */ var _Sentinel_Sentinel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Sentinel/Sentinel */ 3932);
/* harmony import */ var _Feed_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Feed.module.css */ 3988);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ 4848);











function Feed(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(19);
  const {
    data,
    videoRefs,
    style
  } = t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = (0,_utilities_observer__WEBPACK_IMPORTED_MODULE_3__["default"])();
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const {
    disconnect
  } = t1;
  const [loadMore, setLoadMore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [loading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  let t2;
  let t3;
  if ($[1] !== loadMore) {
    t2 = () => {
      if (loadMore) {
        console.log("sentinel intersected, loading more data!");
      }
    };
    t3 = [loadMore];
    $[1] = loadMore;
    $[2] = t2;
    $[3] = t3;
  } else {
    t2 = $[2];
    t3 = $[3];
  }
  ;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(t2, t3);
  let t4;
  let t5;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = () => () => {
      disconnect();
    };
    t5 = [];
    $[4] = t4;
    $[5] = t5;
  } else {
    t4 = $[4];
    t5 = $[5];
  }
  ;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(t4, t5);
  let t6;
  if ($[6] !== data || $[7] !== videoRefs) {
    let t7;
    if ($[9] !== data.length || $[10] !== videoRefs) {
      t7 = (item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_FeedNode_FeedNode__WEBPACK_IMPORTED_MODULE_6__["default"], {
        videoRefs: videoRefs,
        item: item,
        index: index + 1,
        count: data.length,
        slideshow: true
      }, index);
      $[9] = data.length;
      $[10] = videoRefs;
      $[11] = t7;
    } else {
      t7 = $[11];
    }
    t6 = data.map(t7);
    $[6] = data;
    $[7] = videoRefs;
    $[8] = t6;
  } else {
    t6 = $[8];
  }
  let t7;
  if ($[12] !== loading) {
    t7 = loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_7__["default"], {});
    $[12] = loading;
    $[13] = t7;
  } else {
    t7 = $[13];
  }
  let t8;
  if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Sentinel_Sentinel__WEBPACK_IMPORTED_MODULE_8__["default"], {
      setLoadMore: setLoadMore
    });
    $[14] = t8;
  } else {
    t8 = $[14];
  }
  let t9;
  if ($[15] !== style || $[16] !== t6 || $[17] !== t7) {
    t9 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("section", {
      className: _Feed_module_css__WEBPACK_IMPORTED_MODULE_9__["default"].feed,
      style: style,
      role: "feed",
      children: [t6, t7, t8]
    });
    $[15] = style;
    $[16] = t6;
    $[17] = t7;
    $[18] = t9;
  } else {
    t9 = $[18];
  }
  return t9;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Feed);

/***/ },

/***/ 6532
/*!************************************************!*\
  !*** ./src/features/Feed/FeedNode/FeedNode.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useContent */ 9553);
/* harmony import */ var _hooks_useGestures__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useGestures */ 3042);
/* harmony import */ var _hooks_useScrollLock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useScrollLock */ 4996);
/* harmony import */ var _TopNav_TopNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TopNav/TopNav */ 9556);
/* harmony import */ var _SideNav_SideNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SideNav/SideNav */ 5398);
/* harmony import */ var _Comments_Comments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Comments/Comments */ 9897);
/* harmony import */ var _FeedNode_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FeedNode.module.css */ 8891);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ 4848);










function FeedNode(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(39);
  const {
    item,
    index,
    count,
    videoRefs: t1,
    onEnded: t2
  } = t0;
  t1 === undefined ? undefined : t1;
  t2 === undefined ? undefined : t2;
  const {
    content,
    setContent
  } = (0,_hooks_useContent__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const [isDoubleTap, setIsDoubleTap] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [isLongPress, setIsLongPress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [commentsIsOpen, setCommentsIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    onGestureDown,
    onGestureMove,
    onGestureUp,
    onGestureCancel
  } = (0,_hooks_useGestures__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_hooks_useScrollLock__WEBPACK_IMPORTED_MODULE_4__["default"])(commentsIsOpen);
  let t3;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = () => {
      setCommentsIsOpen(true);
    };
    $[0] = t3;
  } else {
    t3 = $[0];
  }
  const openComments = t3;
  let t4;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = () => {
      setCommentsIsOpen(false);
    };
    $[1] = t4;
  } else {
    t4 = $[1];
  }
  const closeComments = t4;
  let t5;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = longPress => {
      if (longPress) {
        setIsLongPress(longPress);
      }
    };
    $[2] = t5;
  } else {
    t5 = $[2];
  }
  const getLongPress = t5;
  let t6;
  if ($[3] !== onGestureDown) {
    t6 = event => {
      console.log("onPointerDown");
      console.log("onPointerDown event.target: ", event.target);
      if (event.target.closest(".sideNav") || event.target.closest(".topNav")) {
        return;
      }
      console.log("onPointerDown past condition.");
      onGestureDown(event, getLongPress);
    };
    $[3] = onGestureDown;
    $[4] = t6;
  } else {
    t6 = $[4];
  }
  const onPointerDown = t6;
  let t7;
  if ($[5] !== onGestureMove) {
    t7 = event_0 => {
      onGestureMove(event_0);
    };
    $[5] = onGestureMove;
    $[6] = t7;
  } else {
    t7 = $[6];
  }
  const onPointerMove = t7;
  let t8;
  if ($[7] !== onGestureUp) {
    t8 = event_1 => {
      console.log("onPointerUp");
      if (event_1.target.closest(".sideNav") || event_1.target.closest(".topNav")) {
        return;
      }
      console.log("onPointerUp past condition.");
      const {
        tapCount
      } = onGestureUp(event_1);
      console.log("tapCount: ", tapCount);
      if (tapCount === 2) {
        setIsDoubleTap(performance.now());
      }
    };
    $[7] = onGestureUp;
    $[8] = t8;
  } else {
    t8 = $[8];
  }
  const onPointerUp = t8;
  let t9;
  if ($[9] !== onGestureCancel) {
    t9 = event_2 => {
      onGestureCancel(event_2);
    };
    $[9] = onGestureCancel;
    $[10] = t9;
  } else {
    t9 = $[10];
  }
  const onPointerCancel = t9;
  const enterFullScreen = _temp;
  const exitFullScreen = _temp2;
  let t10;
  if ($[11] !== content.id || $[12] !== item.id || $[13] !== setContent) {
    t10 = () => {
      if (content.id !== item.id) {
        setContent({
          id: item.id
        });
      }
    };
    $[11] = content.id;
    $[12] = item.id;
    $[13] = setContent;
    $[14] = t10;
  } else {
    t10 = $[14];
  }
  let t11;
  if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
    t11 = [];
    $[15] = t11;
  } else {
    t11 = $[15];
  }
  ;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(t10, t11);
  let t12;
  if ($[16] !== item.picture || $[17] !== item.username) {
    t12 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_TopNav_TopNav__WEBPACK_IMPORTED_MODULE_5__["default"], {
      image: item.picture,
      username: item.username
    });
    $[16] = item.picture;
    $[17] = item.username;
    $[18] = t12;
  } else {
    t12 = $[18];
  }
  let t13;
  if ($[19] !== item.caption) {
    t13 = item.caption && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("figcaption", {
      children: item.caption
    });
    $[19] = item.caption;
    $[20] = t13;
  } else {
    t13 = $[20];
  }
  let t14;
  if ($[21] !== isDoubleTap || $[22] !== isLongPress) {
    t14 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_SideNav_SideNav__WEBPACK_IMPORTED_MODULE_6__["default"], {
      isDoubleTap: isDoubleTap,
      isLongPress: isLongPress,
      enterFullScreen: enterFullScreen,
      exitFullScreen: exitFullScreen,
      openComments: openComments
    });
    $[21] = isDoubleTap;
    $[22] = isLongPress;
    $[23] = t14;
  } else {
    t14 = $[23];
  }
  let t15;
  if ($[24] !== t12 || $[25] !== t13 || $[26] !== t14) {
    t15 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("figure", {
      children: [t12, t13, t14]
    });
    $[24] = t12;
    $[25] = t13;
    $[26] = t14;
    $[27] = t15;
  } else {
    t15 = $[27];
  }
  let t16;
  if ($[28] !== commentsIsOpen) {
    t16 = commentsIsOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Comments_Comments__WEBPACK_IMPORTED_MODULE_7__["default"], {
      closeComments: closeComments,
      slideshow: true
    });
    $[28] = commentsIsOpen;
    $[29] = t16;
  } else {
    t16 = $[29];
  }
  let t17;
  if ($[30] !== count || $[31] !== index || $[32] !== onPointerCancel || $[33] !== onPointerDown || $[34] !== onPointerMove || $[35] !== onPointerUp || $[36] !== t15 || $[37] !== t16) {
    t17 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("article", {
      className: _FeedNode_module_css__WEBPACK_IMPORTED_MODULE_8__["default"].feedNode,
      "aria-posinset": index,
      "aria-setsize": count,
      onPointerDown: onPointerDown,
      onPointerMove: onPointerMove,
      onPointerUp: onPointerUp,
      onPointerCancel: onPointerCancel,
      children: [t15, t16]
    });
    $[30] = count;
    $[31] = index;
    $[32] = onPointerCancel;
    $[33] = onPointerDown;
    $[34] = onPointerMove;
    $[35] = onPointerUp;
    $[36] = t15;
    $[37] = t16;
    $[38] = t17;
  } else {
    t17 = $[38];
  }
  return t17;
}
async function _temp2() {
  screen.orientation?.unlock?.();
  await document.exitFullscreen();
}
async function _temp() {
  await document.documentElement.requestFullscreen();
  await screen.orientation?.lock?.("portrait");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedNode);

/***/ },

/***/ 78
/*!****************************************************************!*\
  !*** ./src/features/Feed/FullscreenButton/FullscreenButton.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var _hooks_useFullscreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useFullscreen */ 227);
/* harmony import */ var _components_Icons_MaximizeIcon_MaximizeIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Icons/MaximizeIcon/MaximizeIcon */ 397);
/* harmony import */ var _components_Icons_MinimizeIcon_MinimizeIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Icons/MinimizeIcon/MinimizeIcon */ 3337);
/* harmony import */ var _FullscreenButton_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FullscreenButton.module.css */ 7041);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ 4848);






function FullscreenButton(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(10);
  const {
    enterFullScreen,
    exitFullScreen
  } = t0;
  const {
    isFullscreen
  } = (0,_hooks_useFullscreen__WEBPACK_IMPORTED_MODULE_1__["default"])();
  let t1;
  if ($[0] !== enterFullScreen || $[1] !== exitFullScreen || $[2] !== isFullscreen) {
    t1 = event => {
      navigator.vibrate?.(50);
      !isFullscreen ? enterFullScreen() : exitFullScreen();
    };
    $[0] = enterFullScreen;
    $[1] = exitFullScreen;
    $[2] = isFullscreen;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  const onClick = t1;
  let t2;
  if ($[4] !== isFullscreen) {
    t2 = isFullscreen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Icons_MinimizeIcon_MinimizeIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Icons_MaximizeIcon_MaximizeIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {});
    $[4] = isFullscreen;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] !== isFullscreen || $[7] !== onClick || $[8] !== t2) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
      className: _FullscreenButton_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].fullscreenButton,
      onClick: onClick,
      type: "button",
      "aria-pressed": isFullscreen,
      "aria-label": "enter fullscreen mode",
      children: t2
    });
    $[6] = isFullscreen;
    $[7] = onClick;
    $[8] = t2;
    $[9] = t3;
  } else {
    t3 = $[9];
  }
  return t3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FullscreenButton);

/***/ },

/***/ 7058
/*!****************************************************!*\
  !*** ./src/features/Feed/LikeButton/LikeButton.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/server */ 8754);
/* harmony import */ var _components_Icons_HeartIcon_HeartIconFill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Icons/HeartIcon/HeartIconFill */ 4536);
/* harmony import */ var _components_Icons_HeartIcon_HeartIconStroke__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Icons/HeartIcon/HeartIconStroke */ 3621);
/* harmony import */ var _LikeButton_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LikeButton.module.css */ 6765);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ 4848);







function LikeButton(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(17);
  const {
    isDoubleTap,
    likedByUser: t1
  } = t0;
  const likedByUser = t1 === undefined ? false : t1;
  const [liked, setLiked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [loading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  let t2;
  if ($[0] !== likedByUser) {
    t2 = () => {
      setLiked(likedByUser);
    };
    $[0] = likedByUser;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const init = t2;
  let t3;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    const action = async () => {
      setLiked(_temp);
    };
    t3 = event => {
      navigator.vibrate?.(50);
      action();
    };
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  const onClick = t3;
  let t4;
  if ($[3] !== liked) {
    t4 = () => {
      if (!liked) {
        onClick();
      }
    };
    $[3] = liked;
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  if ($[5] !== isDoubleTap) {
    t5 = [isDoubleTap];
    $[5] = isDoubleTap;
    $[6] = t5;
  } else {
    t5 = $[6];
  }
  ;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(t4, t5);
  let t6;
  if ($[7] !== init) {
    t6 = () => {
      init();
    };
    $[7] = init;
    $[8] = t6;
  } else {
    t6 = $[8];
  }
  let t7;
  if ($[9] !== likedByUser) {
    t7 = [likedByUser];
    $[9] = likedByUser;
    $[10] = t7;
  } else {
    t7 = $[10];
  }
  ;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(t6, t7);
  let t8;
  if ($[11] !== liked) {
    t8 = liked ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Icons_HeartIcon_HeartIconFill__WEBPACK_IMPORTED_MODULE_3__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Icons_HeartIcon_HeartIconStroke__WEBPACK_IMPORTED_MODULE_4__["default"], {});
    $[11] = liked;
    $[12] = t8;
  } else {
    t8 = $[12];
  }
  let t9;
  if ($[13] !== liked || $[14] !== loading || $[15] !== t8) {
    t9 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
      className: _LikeButton_module_css__WEBPACK_IMPORTED_MODULE_5__["default"].likeButton,
      onClick: onClick,
      disabled: loading,
      type: "button",
      "aria-label": "like this",
      "aria-pressed": liked,
      children: t8
    });
    $[13] = liked;
    $[14] = loading;
    $[15] = t8;
    $[16] = t9;
  } else {
    t9 = $[16];
  }
  return t9;
}
function _temp(prev) {
  return !prev;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LikeButton);

/***/ },

/***/ 3802
/*!************************************************************!*\
  !*** ./src/features/Feed/LocationButton/LocationButton.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var _components_Icons_LocationIcon_LocationIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Icons/LocationIcon/LocationIcon */ 4183);
/* harmony import */ var _LocationButton_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocationButton.module.css */ 5449);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ 4848);




function LocationButton() {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(1);
  const onClick = _temp;
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
      className: _LocationButton_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].locationButton,
      onClick: onClick,
      type: "button",
      "aria-label": "open location on map",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Icons_LocationIcon_LocationIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {})
    });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}
function _temp(event) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocationButton);

/***/ },

/***/ 3932
/*!************************************************!*\
  !*** ./src/features/Feed/Sentinel/Sentinel.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/observer */ 2039);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ 4848);




function Sentinel(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(8);
  const {
    setLoadMore
  } = t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = (0,_utilities_observer__WEBPACK_IMPORTED_MODULE_2__["default"])({
      rootMargin: "200px"
    });
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const {
    observe,
    unobserve,
    disconnect
  } = t1;
  let t2;
  if ($[1] !== setLoadMore) {
    const observerCallback = entry => {
      if (entry.isIntersecting) {
        setLoadMore(true);
        unobserve(entry.target);
      }
    };
    t2 = node => {
      if (node) {
        observe(node, observerCallback);
      }
    };
    $[1] = setLoadMore;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const setObserver = t2;
  let t3;
  let t4;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = () => () => {
      disconnect();
    };
    t4 = [];
    $[3] = t3;
    $[4] = t4;
  } else {
    t3 = $[3];
    t4 = $[4];
  }
  ;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(t3, t4);
  let t5;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = {
      height: "64px"
    };
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  let t6;
  if ($[6] !== setObserver) {
    t6 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      ref: setObserver,
      style: t5
    });
    $[6] = setObserver;
    $[7] = t6;
  } else {
    t6 = $[7];
  }
  return t6;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sentinel);

/***/ },

/***/ 5170
/*!******************************************************!*\
  !*** ./src/features/Feed/ShareButton/ShareButton.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Icons_ShareIcon_ShareIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Icons/ShareIcon/ShareIcon */ 2637);
/* harmony import */ var _ShareButton_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShareButton.module.css */ 9849);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ 4848);





function ShareButton(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(4);
  const {
    isLongPress
  } = t0;
  const onClick = _temp;
  let t1;
  let t2;
  if ($[0] !== isLongPress) {
    t1 = () => {
      if (isLongPress) {
        onClick();
      }
    };
    t2 = [isLongPress];
    $[0] = isLongPress;
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  ;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(t1, t2);
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
      className: _ShareButton_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].shareButton,
      onClick: onClick,
      type: "button",
      "aria-label": "share this video",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Icons_ShareIcon_ShareIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {})
    });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  return t3;
}
function _temp(event) {
  navigator.vibrate?.(50);
  navigator.share({
    title: "post.title",
    text: "post.location",
    url: "https://sswahn.github.io/devour-frontend/post-id",
    files: []
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShareButton);

/***/ },

/***/ 5398
/*!**********************************************!*\
  !*** ./src/features/Feed/SideNav/SideNav.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var _LikeButton_LikeButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LikeButton/LikeButton */ 7058);
/* harmony import */ var _CommentsButton_CommentsButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CommentsButton/CommentsButton */ 3564);
/* harmony import */ var _ShareButton_ShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ShareButton/ShareButton */ 5170);
/* harmony import */ var _FullscreenButton_FullscreenButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FullscreenButton/FullscreenButton */ 78);
/* harmony import */ var _LocationButton_LocationButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LocationButton/LocationButton */ 3802);
/* harmony import */ var _SideNav_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SideNav.module.css */ 8965);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ 4848);








function SideNav(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(11);
  const {
    isDoubleTap,
    isLongPress,
    openComments
  } = t0;
  let t1;
  if ($[0] !== isDoubleTap) {
    t1 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_LikeButton_LikeButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
      isDoubleTap: isDoubleTap
    });
    $[0] = isDoubleTap;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== openComments) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_CommentsButton_CommentsButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      openComments: openComments
    });
    $[2] = openComments;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== isLongPress) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ShareButton_ShareButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      isLongPress: isLongPress
    });
    $[4] = isLongPress;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_LocationButton_LocationButton__WEBPACK_IMPORTED_MODULE_5__["default"], {});
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] !== t1 || $[8] !== t2 || $[9] !== t3) {
    t5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("nav", {
      className: `sideNav ${_SideNav_module_css__WEBPACK_IMPORTED_MODULE_6__["default"].sideNav}`,
      "aria-label": "video actions",
      children: [t1, t2, t3, t4]
    });
    $[7] = t1;
    $[8] = t2;
    $[9] = t3;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  return t5;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideNav);

/***/ },

/***/ 9556
/*!********************************************!*\
  !*** ./src/features/Feed/TopNav/TopNav.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var _components_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Avatar/Avatar */ 6608);
/* harmony import */ var _components_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Dropdown/Dropdown */ 4108);
/* harmony import */ var _components_Icons_AlignLeftIcon_AlignLeftIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Icons/AlignLeftIcon/AlignLeftIcon */ 4761);
/* harmony import */ var _components_Icons_UserPlusIcon_UserPlusIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Icons/UserPlusIcon/UserPlusIcon */ 6671);
/* harmony import */ var _components_Icons_FlagIcon_FlagIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Icons/FlagIcon/FlagIcon */ 313);
/* harmony import */ var _components_Icons_UserXmarkIcon_UserXmarkIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Icons/UserXmarkIcon/UserXmarkIcon */ 4517);
/* harmony import */ var _TopNav_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TopNav.module.css */ 5779);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ 4848);









function TopNav(t0) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(12);
  const {
    image,
    username
  } = t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [{
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Icons_AlignLeftIcon_AlignLeftIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {}),
      text: "Description",
      method: _temp
    }, {
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Icons_UserPlusIcon_UserPlusIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {}),
      text: "Follow",
      method: _temp2
    }, {
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Icons_FlagIcon_FlagIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {}),
      text: "Flag content",
      method: _temp3
    }, {
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Icons_UserXmarkIcon_UserXmarkIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {}),
      text: "Block user",
      method: _temp4
    }];
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const dropdown = t1;
  let t2;
  if ($[1] !== image || $[2] !== username) {
    t2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      username: username,
      image: image
    });
    $[1] = image;
    $[2] = username;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== username) {
    t3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("strong", {
      children: username
    });
    $[4] = username;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  if ($[6] !== t2 || $[7] !== t3) {
    t4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      children: [t2, t3]
    });
    $[6] = t2;
    $[7] = t3;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  let t5;
  if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
      items: dropdown
    });
    $[9] = t5;
  } else {
    t5 = $[9];
  }
  let t6;
  if ($[10] !== t4) {
    t6 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("nav", {
      className: `topNav ${_TopNav_module_css__WEBPACK_IMPORTED_MODULE_7__["default"].topNav}`,
      "aria-label": "top menu",
      children: [t4, t5]
    });
    $[10] = t4;
    $[11] = t6;
  } else {
    t6 = $[11];
  }
  return t6;
}
function _temp4() {
  return confirm("Block user?");
}
function _temp3() {
  return confirm("Report content?");
}
function _temp2() {
  return alert("User followed.");
}
function _temp() {
  return alert("Read post description.");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopNav);

/***/ },

/***/ 9553
/*!*********************************!*\
  !*** ./src/hooks/useContent.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Providers_ContentProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Providers/ContentProvider */ 4462);



function useContent() {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(3);
  const {
    content,
    setContent
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_Providers_ContentProvider__WEBPACK_IMPORTED_MODULE_2__.ContentContext);
  let t0;
  if ($[0] !== content || $[1] !== setContent) {
    t0 = {
      content,
      setContent
    };
    $[0] = content;
    $[1] = setContent;
    $[2] = t0;
  } else {
    t0 = $[2];
  }
  return t0;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useContent);

/***/ },

/***/ 5364
/*!*************************************!*\
  !*** ./src/hooks/useContextMenu.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useContextMenu() {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(2);
  const onContextMenu = _temp;
  let t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = () => {
      document.addEventListener("contextmenu", onContextMenu);
      return () => {
        document.removeEventListener("contextmenu", onContextMenu);
      };
    };
    t1 = [];
    $[0] = t0;
    $[1] = t1;
  } else {
    t0 = $[0];
    t1 = $[1];
  }
  ;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(t0, t1);
}
function _temp(event) {
  console.log("contextmenu event fired.");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useContextMenu);

/***/ },

/***/ 1217
/*!**********************************!*\
  !*** ./src/hooks/useDebounce.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useDebounce(fn, delay) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(7);
  const timeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const fnRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(fn);
  let t0;
  let t1;
  if ($[0] !== fn) {
    t0 = () => {
      fnRef.current = fn;
    };
    t1 = [fn];
    $[0] = fn;
    $[1] = t0;
    $[2] = t1;
  } else {
    t0 = $[1];
    t1 = $[2];
  }
  ;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(t0, t1);
  let t2;
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = () => () => {
      clearTimeout(timeoutRef.current);
    };
    t3 = [];
    $[3] = t2;
    $[4] = t3;
  } else {
    t2 = $[3];
    t3 = $[4];
  }
  ;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(t2, t3);
  let t4;
  if ($[5] !== delay) {
    t4 = (...t5) => {
      const args = t5;
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        fnRef.current(...args);
      }, delay);
    };
    $[5] = delay;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  return t4;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDebounce);

/***/ },

/***/ 227
/*!************************************!*\
  !*** ./src/hooks/useFullscreen.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Providers_FullscreenProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Providers/FullscreenProvider */ 5456);



function useFullscreen() {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(2);
  const {
    isFullscreen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_Providers_FullscreenProvider__WEBPACK_IMPORTED_MODULE_2__.FullscreenContext);
  let t0;
  if ($[0] !== isFullscreen) {
    t0 = {
      isFullscreen
    };
    $[0] = isFullscreen;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  return t0;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFullscreen);

/***/ },

/***/ 3042
/*!**********************************!*\
  !*** ./src/hooks/useGestures.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useSwipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useSwipe */ 5822);



function useGestures() {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(16);
  const id = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const timer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const moved = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
  const prevTap = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
  const tapCount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
  const {
    onSwipeDown,
    onSwipeMove,
    onSwipeUp,
    onSwipeCancel
  } = (0,_useSwipe__WEBPACK_IMPORTED_MODULE_2__["default"])();
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = () => {
      const now = performance.now();
      const deltaT = now - prevTap.current;
      const isSequence = deltaT > 0 && deltaT < 300;
      tapCount.current = isSequence ? tapCount.current + 1 : 1;
      prevTap.current = now;
      return tapCount.current;
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  const tapCounter = t0;
  let t1;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = () => {
      if (timer.current) {
        clearTimeout(timer.current);
        timer.current = null;
      }
    };
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const longPressCancel = t1;
  let t2;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = callback => {
      timer.current = setTimeout(() => {
        callback(performance.now());
        longPressCancel();
      }, 500);
    };
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const onLongPressDown = t2;
  let t3;
  if ($[3] !== onSwipeDown) {
    t3 = (event, t4) => {
      const callback_0 = t4 === undefined ? undefined : t4;
      const {
        currentTarget,
        pointerId
      } = event;
      currentTarget.setPointerCapture(pointerId);
      id.current = pointerId;
      moved.current = false;
      if (callback_0) {
        onLongPressDown(callback_0);
      }
      onSwipeDown(event);
    };
    $[3] = onSwipeDown;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  const onGestureDown = t3;
  let t4;
  if ($[5] !== onSwipeMove) {
    t4 = event_0 => {
      const {
        pointerId: pointerId_0
      } = event_0;
      if (id?.current !== pointerId_0) {
        return {};
      }
      const swipeMove = onSwipeMove(event_0);
      const absX = Math.abs(swipeMove.deltaX);
      const absY = Math.abs(swipeMove.deltaY);
      if (absX > 10 || absY > 10) {
        longPressCancel();
        moved.current = true;
      }
      return {
        ...swipeMove
      };
    };
    $[5] = onSwipeMove;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  const onGestureMove = t4;
  let t5;
  if ($[7] !== onSwipeUp) {
    t5 = event_1 => {
      longPressCancel();
      const {
        pointerId: pointerId_1,
        currentTarget: currentTarget_0
      } = event_1;
      if (id?.current !== pointerId_1) {
        return {};
      }
      if (currentTarget_0.hasPointerCapture(id.current)) {
        currentTarget_0.releasePointerCapture(id.current);
      }
      let taps = 0;
      if (!moved.current) {
        taps = tapCounter();
      }
      const swipeUp = onSwipeUp(event_1);
      return {
        ...swipeUp,
        tapCount: taps
      };
    };
    $[7] = onSwipeUp;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  const onGestureUp = t5;
  let t6;
  if ($[9] !== onSwipeCancel) {
    t6 = event_2 => {
      longPressCancel();
      const {
        pointerId: pointerId_2,
        currentTarget: currentTarget_1
      } = event_2;
      if (id?.current !== pointerId_2) {
        return;
      }
      if (currentTarget_1.hasPointerCapture(id.current)) {
        currentTarget_1.releasePointerCapture(id.current);
      }
      onSwipeCancel(event_2);
      id.current = null;
      moved.current = false;
    };
    $[9] = onSwipeCancel;
    $[10] = t6;
  } else {
    t6 = $[10];
  }
  const onGestureCancel = t6;
  let t7;
  if ($[11] !== onGestureCancel || $[12] !== onGestureDown || $[13] !== onGestureMove || $[14] !== onGestureUp) {
    t7 = {
      onGestureDown,
      onGestureMove,
      onGestureUp,
      onGestureCancel
    };
    $[11] = onGestureCancel;
    $[12] = onGestureDown;
    $[13] = onGestureMove;
    $[14] = onGestureUp;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  return t7;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGestures);

/***/ },

/***/ 1124
/*!*********************************!*\
  !*** ./src/hooks/useOverlay.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Providers_OverlayProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Providers/OverlayProvider */ 6523);



function useOverlay() {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(4);
  const {
    isActive,
    openOverlay,
    closeOverlay
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_Providers_OverlayProvider__WEBPACK_IMPORTED_MODULE_2__.OverlayContext);
  let t0;
  if ($[0] !== closeOverlay || $[1] !== isActive || $[2] !== openOverlay) {
    t0 = {
      isActive,
      openOverlay,
      closeOverlay
    };
    $[0] = closeOverlay;
    $[1] = isActive;
    $[2] = openOverlay;
    $[3] = t0;
  } else {
    t0 = $[3];
  }
  return t0;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useOverlay);

/***/ },

/***/ 901
/*!*********************************!*\
  !*** ./src/hooks/useProfile.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Providers_ProfileProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Providers/ProfileProvider */ 8934);



function useProfile() {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(3);
  const {
    userProfile,
    setUserProfile
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_Providers_ProfileProvider__WEBPACK_IMPORTED_MODULE_2__.ProfileContext);
  let t0;
  if ($[0] !== setUserProfile || $[1] !== userProfile) {
    t0 = {
      userProfile,
      setUserProfile
    };
    $[0] = setUserProfile;
    $[1] = userProfile;
    $[2] = t0;
  } else {
    t0 = $[2];
  }
  return t0;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useProfile);

/***/ },

/***/ 9522
/*!**************************************!*\
  !*** ./src/hooks/useScrollEffect.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_scrollEngine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/scrollEngine */ 1874);



function useScrollEffect() {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(6);
  const elementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const styleRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const isHidden = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
  const highVelocity = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = (element, style) => {
      elementRef.current = element;
      styleRef.current = style;
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  const scrollEffect = t0;
  let t1;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = element_0 => {
      if (!isHidden.current) {
        element_0.classList.add(styleRef.current);
        isHidden.current = true;
      }
    };
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const setHidden = t1;
  let t2;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    const setVisible = element_1 => {
      if (isHidden.current) {
        element_1.classList.remove(styleRef.current);
        isHidden.current = false;
      }
    };
    t2 = t3 => {
      const {
        deltaY,
        direction,
        velocity
      } = t3;
      const element_2 = elementRef.current;
      if (!element_2) {
        return;
      }
      if (!highVelocity.current && velocity > 90) {
        highVelocity.current = true;
        return setVisible(element_2);
      }
      if (highVelocity.current && velocity === 0) {
        highVelocity.current = false;
        return;
      }
      if (highVelocity.current) {
        return;
      }
      if (direction === "down" && deltaY > 200) {
        return setHidden(element_2);
      }
      if (direction === "up") {
        return setVisible(element_2);
      }
    };
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const updateElement = t2;
  let t3;
  let t4;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = () => {
      const unsubscribe = _utilities_scrollEngine__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe(updateElement);
      return () => {
        unsubscribe();
      };
    };
    t4 = [];
    $[3] = t3;
    $[4] = t4;
  } else {
    t3 = $[3];
    t4 = $[4];
  }
  ;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(t3, t4);
  let t5;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = {
      scrollEffect
    };
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  return t5;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useScrollEffect);

/***/ },

/***/ 4996
/*!************************************!*\
  !*** ./src/hooks/useScrollLock.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useScrollLock(isActive) {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(3);
  const lockScroll = _temp;
  let t0;
  let t1;
  if ($[0] !== isActive) {
    t0 = () => {
      if (!isActive) {
        return;
      }
      const unlockScroll = lockScroll();
      return () => {
        unlockScroll();
      };
    };
    t1 = [isActive];
    $[0] = isActive;
    $[1] = t0;
    $[2] = t1;
  } else {
    t0 = $[1];
    t1 = $[2];
  }
  ;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(t0, t1);
}
function _temp() {
  const {
    scrollY
  } = window;
  const html = document.documentElement;
  html.classList.add("lockScroll");
  return () => {
    html.removeAttribute("class");
    window.scrollTo(0, scrollY);
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useScrollLock);

/***/ },

/***/ 9385
/*!*******************************************!*\
  !*** ./src/hooks/useSelectionToSpeech.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useDebounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useDebounce */ 1217);



function useSelectionToSpeech() {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(3);
  const onSelectionChange = (0,_useDebounce__WEBPACK_IMPORTED_MODULE_2__["default"])(_temp, 200);
  let t0;
  if ($[0] !== onSelectionChange) {
    t0 = () => {
      document.addEventListener("selectionchange", onSelectionChange);
      return () => {
        document.removeEventListener("selectionchange", onSelectionChange);
      };
    };
    $[0] = onSelectionChange;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  let t1;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [];
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  ;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(t0, t1);
}
function _temp() {
  const selection = window.getSelection().toString().trim();
  window.speechSynthesis.cancel();
  if (selection) {
    const utterance = new SpeechSynthesisUtterance(selection);
    window.speechSynthesis.speak(utterance);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSelectionToSpeech);

/***/ },

/***/ 288
/*!*********************************!*\
  !*** ./src/hooks/useSession.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/compiler-runtime */ 6522);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Providers_SessionProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Providers/SessionProvider */ 9695);



function useSession() {
  const $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(3);
  const {
    session,
    setSession
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_Providers_SessionProvider__WEBPACK_IMPORTED_MODULE_2__.SessionContext);
  let t0;
  if ($[0] !== session || $[1] !== setSession) {
    t0 = {
      session,
      setSession
    };
    $[0] = session;
    $[1] = setSession;
    $[2] = t0;
  } else {
    t0 = $[2];
  }
  return t0;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSession);

/***/ },

/***/ 5822
/*!*******************************!*\
  !*** ./src/hooks/useSwipe.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useSwipe({
  swipeThreshold = 10,
  edgeThreshold = 35
} = {}) {
  const data = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  const prevTimestamp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const finalVelocity = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const onSwipeDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    const {
      clientX,
      clientY
    } = event;
    const width = window.innerWidth;
    const isLeft = clientX < edgeThreshold;
    const isRight = clientX > width - edgeThreshold;
    prevTimestamp.current = performance.now();
    data.current = {
      startX: clientX,
      startY: clientY,
      axis: null,
      direction: null,
      edge: isLeft ? 'left' : 'right'
    };
  }, []);
  const onSwipeMove = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event_0 => {
    if (!Object.keys(data?.current || {}).length) {
      return;
    }
    const {
      clientX: clientX_0,
      clientY: clientY_0
    } = event_0;
    const {
      startX,
      startY,
      edge,
      direction
    } = data.current;
    const timestamp = performance.now();
    const deltaX = clientX_0 - startX;
    const deltaY = clientY_0 - startY;
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);
    // Determine the dominant axis of the movement:
    if (!direction) {
      data.current.axis = absX > absY ? 'x' : 'y';
      data.current.direction = data.current.axis === 'x' ? deltaX > 0 ? 'right' : 'left' : deltaY > 0 ? 'down' : 'up';
    }
    // Calculate scroll velocity
    const deltaTime = timestamp - prevTimestamp.current;
    const velocity = data.current.direction === 'x' ? deltaX / deltaTime : deltaY / deltaTime;
    prevTimestamp.current = timestamp;
    finalVelocity.current = velocity;
    return {
      deltaX,
      deltaY,
      edge,
      axis: data.current.axis,
      direction: data.current.direction,
      velocity,
      timestamp
    };
  }, []);
  const onSwipeUp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event_1 => {
    if (!Object.keys(data?.current || {}).length) {
      return;
    }
    const {
      clientX: clientX_1,
      clientY: clientY_1
    } = event_1;
    const {
      startX: startX_0,
      startY: startY_0,
      edge: edge_0,
      axis,
      direction: direction_0
    } = data.current;
    const deltaX_0 = clientX_1 - startX_0;
    const deltaY_0 = clientY_1 - startY_0;
    return {
      deltaX: deltaX_0,
      deltaY: deltaY_0,
      edge: edge_0,
      axis,
      direction: direction_0,
      velocity: finalVelocity.current,
      timestamp: prevTimestamp.current
    };
  }, []);
  const onSwipeCancel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event_2 => {
    data.current = {};
    prevTimestamp.current = 0;
    finalVelocity.current = 0;
  }, []);
  return {
    onSwipeDown,
    onSwipeMove,
    onSwipeUp,
    onSwipeCancel
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSwipe);

/***/ },

/***/ 6954
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ 5338);
/* harmony import */ var _registerServiceWorker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registerServiceWorker */ 2380);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ 7649);
/* harmony import */ var _utilities_logError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities/logError */ 5109);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ 4848);





// Global error listeners

window.addEventListener('error', event => {
  (0,_utilities_logError__WEBPACK_IMPORTED_MODULE_3__["default"])(event.error || new Error('Unknown error'), {
    source: "error"
  });
});
window.addEventListener('unhandledrejection', event => {
  (0,_utilities_logError__WEBPACK_IMPORTED_MODULE_3__["default"])(event.reason || new Error('Unknown promise rejection.'), {
    source: "unhandledrejection"
  });
});
(0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(document.getElementById('root')).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {}));
// registerServiceWorker()

/***/ },

/***/ 2380
/*!**************************************!*\
  !*** ./src/registerServiceWorker.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ registerServiceWorker)
/* harmony export */ });
async function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        const registration = await navigator.serviceWorker.register('/devour-frontend/sw.js'); // change this later when live to /sw.js

        console.log('SW registered:', registration);
      } catch (error) {
        console.error('SW registration failed:', error);
      }
    });
  }
}

/***/ },

/***/ 2584
/*!***********************************!*\
  !*** ./src/utilities/database.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DEFAULT_CONFIG = {
  storeName: 'store',
  dbName: 'indexedDB',
  dbVersion: 1,
  keyPath: 'id'
};
let dbInstance = null;
const openDatabase = async storeConfigs => {
  if (dbInstance) {
    return dbInstance;
  }
  storeConfigs = Array.isArray(storeConfigs) ? storeConfigs : [storeConfigs];
  const config = {
    ...DEFAULT_CONFIG,
    ...storeConfigs[0]
  };
  return new Promise((resolve, reject) => {
    const connection = indexedDB.open(config.dbName, config.dbVersion);
    connection.onupgradeneeded = event => {
      const db = event.target.result;
      storeConfigs.forEach(storeConfig => {
        if (!db.objectStoreNames.contains(storeConfig.storeName)) {
          const store = db.createObjectStore(storeConfig.storeName, {
            keyPath: storeConfig.keyPath || config.keyPath
          });
          storeConfig.indexes && storeConfig.indexes.forEach(index => {
            store.createIndex(index.name, index.keyPath, {
              unique: index.unique
            });
          });
        }
      });
    };
    connection.onsuccess = () => {
      dbInstance = connection.result;
      resolve(dbInstance);
    };
    connection.onerror = ({
      target: {
        error
      }
    }) => {
      reject(new Error(`Failed to open DB: ${error}`));
    };
  });
};
const executeRequest = async (storeConfigs, storeName, mode, operation, data) => {
  const db = await openDatabase(storeConfigs);
  const transaction = db.transaction(storeName, mode);
  const objectStore = transaction.objectStore(storeName);
  const request = data ? objectStore[operation](data) : objectStore[operation]();
  return new Promise((resolve, reject) => {
    request.onsuccess = () => {
      resolve(request.result);
    };
    request.onerror = ({
      target: {
        error
      }
    }) => {
      reject(new Error(`Failed to execute ${operation} on ${storeName}: ${error}`));
    };
  });
};
const database = (storeConfigs = [DEFAULT_CONFIG]) => {
  return {
    get(key, storeName = DEFAULT_CONFIG.storeName) {
      return executeRequest(storeConfigs, storeName, 'readonly', 'get', key);
    },
    async getAll(storeName = DEFAULT_CONFIG.storeName) {
      const db = await openDatabase(storeConfigs);
      const transaction = db.transaction(storeName, 'readonly');
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.getAll();
      return new Promise((resolve, reject) => {
        request.onsuccess = () => {
          resolve(request.result);
        };
        request.onerror = ({
          target: {
            error
          }
        }) => {
          reject(new Error(`Failed to retrieve all records from ${storeName}: ${error}`));
        };
      });
    },
    add(data, storeName = DEFAULT_CONFIG.storeName) {
      return executeRequest(storeConfigs, storeName, 'readwrite', 'add', data);
    },
    put(data, storeName = DEFAULT_CONFIG.storeName) {
      return executeRequest(storeConfigs, storeName, 'readwrite', 'put', data);
    },
    delete(key, storeName = DEFAULT_CONFIG.storeName) {
      return executeRequest(storeConfigs, storeName, 'readwrite', 'delete', key);
    },
    destroy(dbName = DEFAULT_CONFIG.dbName) {
      return new Promise((resolve, reject) => {
        const request = indexedDB.deleteDatabase(dbName);
        request.onsuccess = () => {
          if (dbInstance) {
            dbInstance.close();
            dbInstance = null;
          }
          resolve(`Database ${dbName} deleted successfully.`);
        };
        request.onerror = ({
          target: {
            error
          }
        }) => {
          reject(new Error(`Failed to delete ${dbName}: ${error}`));
        };
      });
    },
    async addAll(items, storeName = DEFAULT_CONFIG.storeName) {
      const db = await openDatabase(storeConfigs);
      const transaction = db.transaction(storeName, 'readwrite');
      const objectStore = transaction.objectStore(storeName);
      items.forEach(item => objectStore.add(item));
      return new Promise((resolve, reject) => {
        transaction.oncomplete = () => {
          resolve(`Successfully added ${items.length} items to ${storeName}.`);
        };
        transaction.onerror = () => {
          reject(new Error(`Failed to add items to ${storeName}.`));
        };
        transaction.onabort = ({
          target: {
            error
          }
        }) => {
          reject(new Error(`Transaction aborted while adding items to ${storeName}: ${error}`));
        };
      });
    },
    async count(storeName = DEFAULT_CONFIG.storeName) {
      const db = await openDatabase(storeConfigs);
      const transaction = db.transaction(storeName, 'readonly');
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.count();
      return new Promise((resolve, reject) => {
        request.onsuccess = () => {
          resolve(request.result);
        };
        request.onerror = ({
          target: {
            error
          }
        }) => {
          reject(new Error(`Failed to retrieve count of records from ${storeName}: ${error}`));
        };
      });
    },
    close() {
      if (dbInstance) {
        dbInstance.close();
        dbInstance = null;
      }
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (database);

/***/ },

/***/ 5109
/*!***********************************!*\
  !*** ./src/utilities/logError.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* 
context = {
  component: 'HomeButton',
  action: 'onClick',
  userId: context.user.id
}
*/

function logError(error, context = {}) {
  const payload = {
    message: error.message,
    stack: error.stack,
    name: error.name,
    context,
    timestamp: Date.now(),
    userAgent: navigator.userAgent
  };
  console.error('error payload: ', payload);

  // make request to sentry
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logError);

/***/ },

/***/ 2039
/*!***********************************!*\
  !*** ./src/utilities/observer.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createObserver({
  root = null,
  rootMargin = '0px',
  threshold = 0
} = {}) {
  const elementCallbacks = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elementCallbacks.get(entry.target);
      if (callback) {
        callback(entry);
      }
    });
  }, {
    root,
    rootMargin,
    threshold
  });
  const observe = (element, callback) => {
    elementCallbacks.set(element, callback);
    observer.observe(element);
  };
  const unobserve = element => {
    elementCallbacks.delete(element);
    observer.unobserve(element);
  };
  const disconnect = () => {
    elementCallbacks.clear();
    observer.disconnect();
  };
  return {
    observe,
    unobserve,
    disconnect
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createObserver);

/***/ },

/***/ 1874
/*!***************************************!*\
  !*** ./src/utilities/scrollEngine.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// scrollEngine.js
let subscribers = new Set();
let started = false;
let ticking = false;
let deltaY = 0;
let velocity = 0;
let direction = 'idle';
let scrollStart = 0;
let prevScrollY = 0;
let prevTimestamp = performance.now();
function notify(data) {
  for (const fn of subscribers) {
    fn(data);
  }
}
function update(timestamp) {
  const scrollY = window.scrollY;

  // Calculate change in Y
  deltaY = scrollY - scrollStart;

  // Calculate current scroll direction
  const dY = scrollY - prevScrollY;
  direction = dY > 0 ? 'down' : dY < 0 ? 'up' : 'idle';

  // Set prevScrollY for use in next frame
  prevScrollY = scrollY;

  // Calculate scroll velocity
  const deltaTime = timestamp - prevTimestamp;
  const velocity = dY / deltaTime;

  // Set prevTimestamp for use in next frame
  prevTimestamp = timestamp;
  notify({
    deltaY,
    direction,
    velocity
  });
}
function onScroll(event) {
  // Throttle on scroll event
  if (!ticking) {
    requestAnimationFrame(timestamp => {
      update(timestamp);
      ticking = false;
    });
    ticking = true;
  }
}
function onScrollEnd(event) {
  scrollStart = window.scrollY;
  notify({
    deltaY,
    direction,
    velocity: 0
  });
}
function start() {
  window.addEventListener('scroll', onScroll, {
    passive: true
  });
  window.addEventListener("scrollend", onScrollEnd, {
    passive: true
  });
  started = true;
}
function stop() {
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('scrollend', onScrollEnd);
  started = false;
}
const scroll = {
  subscribe(fn) {
    if (typeof fn !== 'function') {
      throw new TypeError('scroll.subscribe arugument must be of type "function".');
    }
    if (!started) {
      start();
    }
    subscribers.add(fn);
    fn({
      deltaY,
      direction,
      velocity
    });
    return () => {
      subscribers.delete(fn);
      if (subscribers.size === 0) {
        stop();
      }
    };
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);

/***/ },

/***/ 8754
/*!*********************************!*\
  !*** ./src/utilities/server.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const typeCheck = (method, api, request = {}, headers = {}) => {
  if (typeof api !== 'string') {
    throw new TypeError(`${method} request expects api to be a string.`, {
      cause: 'server'
    });
  }
  if (typeof request !== 'object' || request === null || Array.isArray(request)) {
    throw new TypeError(`${method} request expects request to be an object literal.`, {
      cause: 'server'
    });
  }
  if (typeof headers !== 'object' || headers === null || Array.isArray(headers)) {
    throw new TypeError(`${method} request expects headers to be an object literal.`, {
      cause: 'server'
    });
  }
};
const handleResponse = async response => {
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(`${response.status}: ${errorMessage}`, {
      cause: 'server'
    });
  }
  // Handle 204 No Content or empty body
  if (response.status === 204 || response.headers.get('Content-Length') === '0') {
    console.log('server response: No Content: ', response);
    return {
      success: true,
      message: 'No content'
    };
  }
  // Handle API response errors
  if (response.error) {
    throw new Error(response.error, {
      cause: 'server'
    });
  }
  return response.json();
};
const server = {
  async get(api, headers = {}) {
    const request = {};
    typeCheck('get', api, request, headers);
    const options = {
      method: 'get',
      headers: {
        ...headers
      }
    };
    const response = await fetch(api, request);
    return handleResponse(response);
  },
  async post(api, request, headers = {}) {
    typeCheck('post', api, request, headers);
    const options = {
      method: 'post',
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    };
    const response = await fetch(api, options);
    return handleResponse(response);
  },
  async put(api, request, headers = {}) {
    typeCheck('put', api, request, headers);
    const options = {
      method: 'put',
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    };
    const response = await fetch(api, options);
    return handleResponse(response);
  },
  async remove(api, headers = {}) {
    typeCheck('delete', api, undefined, headers);
    const options = {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    };
    const response = await fetch(api, options);
    return handleResponse(response);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (server);

/***/ },

/***/ 1135
/*!***********************************!*\
  !*** ./src/utilities/validate.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const validate = {
  async image(file, options = {
    maxSizeMB: 5,
    minDimension: 320,
    maxDimension: 4096
  }) {
    if (!file) {
      throw new Error('No image file found.');
    }
    // Define allowed MIME types and extensions
    const allowedMimeTypes = ['image/webp', 'image/png', 'image/jpeg'];
    const allowedExtensions = /(\.webp|\.png|\.jpg|\.jpeg)$/i;
    // Validate both the MIME type and the file extension
    const isValidMime = allowedMimeTypes.includes(file.type);
    const isValidExtension = allowedExtensions.test(file.name);
    if (!isValidMime || !isValidExtension) {
      throw new Error('Invalid file type, must be .webp .png or .jpg');
    }
    // 2. File Size Validation
    const maxSizeBytes = options.maxSizeMB * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      throw new Error(`File is too large. Maximum allowed size is ${options.maxSizeMB}MB.`);
    }
    // 3. Image Dimensions Validation (Asynchronous)
    return new Promise((resolve, reject) => {
      const img = new Image();

      // Create an object URL from the file blob to load into the Image object
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        // Clean up memory allocated for the object URL
        URL.revokeObjectURL(img.src);
        // Verify image meets the 2026 platform minimum standards 320px
        if (img.width < options.minDimension || img.height < options.minDimension) {
          return reject(new Error(`Image dimensions are too small. Minimum resolution is ${options.minDimension}x${options.minDimension}px.`));
        }
        // Maximum bounds verification (Prevents downstream memory/processing crash)
        if (img.width > options.maxDimension || img.height > options.maxDimension) {
          return reject(new Error(`Image dimensions are too large. Maximum allowed resolution is ${options.maxDimension}x${options.maxDimension}px.`));
        }
        // If all checks pass, return the original file object
        resolve(file);
      };
      img.onerror = () => {
        URL.revokeObjectURL(img.src);
        reject(new Error('Failed to parse image file. The file may be corrupted.'));
      };
    });
  },
  username(username) {
    if (username.length < 3 || username.length > 30) {
      throw new Error('Username must be between 3 and 30 characters.', {
        cause: 'username'
      });
    }
    const regex = /^[\p{L}\p{N}](?:[\p{L}\p{N}_]*[\p{L}\p{N}])?$/u;
    if (!regex.test(username)) {
      throw new Error('Please use a valid username format.', {
        cause: 'username'
      });
    }
    return username;
  },
  contact(contact) {
    if (contact.length < 3 || contact.length > 254) {
      throw new Error('Contact must be a valid length.', {
        cause: 'contact'
      });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/u;
    if (emailRegex.test(contact)) {
      return contact;
    }
    const phoneRegex = /^\+?\(?\d{1,4}\)?[\s.-]?\(?\d{1,4}\)?[\s.-]?\d{3,4}[\s.-]?\d{3,4}$/;
    if (phoneRegex.test(contact)) {
      const totalDigits = contact.replace(/\D/g, '').length;
      if (totalDigits >= 7 && totalDigits <= 15) {
        return contact;
      }
    }
    throw new Error('Please use a valid email or phone number.', {
      cause: 'contact'
    });
  },
  search(search) {
    if (search.length < 3 || search.length > 100) {
      throw new Error('Search query must be between 3 and 100 characters.');
    }
    const regex = /^[^<>()\[\]\\/|;=~%^]+$/;
    if (!regex.test(search)) {
      throw new Error('Special characters are not allowed.');
    }
    return search;
  },
  comment(comment) {
    if (comment.length < 3 || comment.length > 1000) {
      throw new Error('Comment length must be between 3 and 1000 characters.');
    }
    return comment;
  },
  biography(biography) {
    if (biography.length < 3 || biography.length > 250) {
      throw new Error('Bio length must be between 3 and 250 characters.', {
        cause: 'biography'
      });
    }
    return biography;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ },

/***/ 4785
/*!*************************************************!*\
  !*** ./src/components/Avatar/Avatar.module.css ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"avatar":"cNFgJeNuNF741mqy3HjF"});

/***/ },

/***/ 1445
/*!***********************************************************!*\
  !*** ./src/components/CloseButton/CloseButton.module.css ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"closeButton":"nRmVNOUPXPt07q2izPkS"});

/***/ },

/***/ 1123
/*!*************************************************!*\
  !*** ./src/components/Dialog/Dialog.module.css ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"dialog":"ZWJzr7wpZVh1FbHdy6Q2"});

/***/ },

/***/ 8329
/*!*****************************************************!*\
  !*** ./src/components/Dropdown/Dropdown.module.css ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"dropdown":"fsRjQsePCOqWh1LwmMMg","isOpen":"RLBrXxilu6IURBAdbzpA"});

/***/ },

/***/ 4137
/*!**************************************************************************!*\
  !*** ./src/components/Dropdown/DropdownButton/DropdownButton.module.css ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"dropdownButton":"abpuI_3Na2ydJj24PSqD"});

/***/ },

/***/ 3513
/*!**********************************************************************!*\
  !*** ./src/components/Dropdown/DropdownList/DropdownList.module.css ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"dropdownList":"SaGbxhcxIln6hpTb0Klg","open":"ANLuoq2GOx9WvRvddcjR"});

/***/ },

/***/ 6189
/*!**************************************************************************!*\
  !*** ./src/components/Dropdown/ListItemButton/ListItemButton.module.css ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"listItemButton":"OGbMvckCuIXNF7ZaS8mY"});

/***/ },

/***/ 8957
/*!**************************************************************************!*\
  !*** ./src/components/Header/DashboardButton/DashboardButton.module.css ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"dashboardButton":"MI9YuuDMLrrY7RC1z4G1"});

/***/ },

/***/ 4329
/*!*************************************************!*\
  !*** ./src/components/Header/Header.module.css ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"header":"Qp5xkmMJGKUSGJdCNCHD","hidden":"hKTxAAkjtN_fM8U_Tz8H"});

/***/ },

/***/ 2977
/*!******************************************************************!*\
  !*** ./src/components/Header/LoginButton/LoginButton.module.css ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"loginButton":"f0DR3GXaCwh0Tt2bx2NG"});

/***/ },

/***/ 6074
/*!*********************************************************!*\
  !*** ./src/components/LoadingSpinner/styles.module.css ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"spinner":"JSakJNmRTraPgvlafis2","spin":"hM4c7jIc3EU9mwjKA04L"});

/***/ },

/***/ 8745
/*!*********************************************!*\
  !*** ./src/components/Main/Main.module.css ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"main":"ZYvmIXad4zI5lNYgAWld"});

/***/ },

/***/ 3583
/*!***********************************************************************!*\
  !*** ./src/components/MobileNav/CreateButton/CreateButton.module.css ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"createButton":"JgoNSW3AF8kBN6hv5Mg1","cameraButton":"rXsfI58pQsDh_Ss8D0Lw"});

/***/ },

/***/ 4269
/*!*******************************************************************!*\
  !*** ./src/components/MobileNav/HomeButton/HomeButton.module.css ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"homeButton":"y95ixwKpz9zik3aNbQQn"});

/***/ },

/***/ 5945
/*!*******************************************************!*\
  !*** ./src/components/MobileNav/MobileNav.module.css ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"navigation":"UAUS7uG3u3pzkuV10IMH","hidden":"v1tq2Cmlw7JsA0T_1Kfr"});

/***/ },

/***/ 905
/*!*************************************************************************************!*\
  !*** ./src/components/MobileNav/NotificationsButton/NotificationsButton.module.css ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"notificationsButton":"jyDxw9Gc_5ANGYSwwcqw"});

/***/ },

/***/ 6161
/*!*************************************************************************!*\
  !*** ./src/components/MobileNav/ProfileButton/ProfileButton.module.css ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"profileButton":"vYH84xE9dFALX47vYg5q"});

/***/ },

/***/ 1919
/*!***********************************************************************!*\
  !*** ./src/components/MobileNav/SearchButton/SearchButton.module.css ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"searchButton":"iouS73xSycZpVOshef37"});

/***/ },

/***/ 454
/*!*******************************************************************!*\
  !*** ./src/components/SlideShow/NextButton/NextButton.module.css ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"nextButton":"j3Rsos0kJXZTSs_BFRte"});

/***/ },

/***/ 7626
/*!***************************************************************************!*\
  !*** ./src/components/SlideShow/PreviousButton/PreviousButton.module.css ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"previousButton":"HVIGLU46j6z66gLpDHo3"});

/***/ },

/***/ 6313
/*!*******************************************************!*\
  !*** ./src/components/SlideShow/SlideShow.module.css ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"slideShow":"ldVBjdQig0478ng9aVGa","slideContainer":"g2M9XH5x4RV4urxHaLOy"});

/***/ },

/***/ 3492
/*!***************************************************!*\
  !*** ./src/features/Comments/Comments.module.css ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"overlay":"B1u4yoaXrqQwWpu_SIbH","slideshow_overlay":"Cmdt6TomC8wBQRo8eXPa","comments":"uoscghNXGwijRME3XZY7","slideshow_comments":"Ys7HFq5q1ExfAdPdE66o","open":"jxIdzEO4hgkWkmA8kQQ7","close":"S6Ix9GDpnIoFxzyIpZtA"});

/***/ },

/***/ 8989
/*!********************************************************************!*\
  !*** ./src/features/Comments/CommentsForm/CommentsForm.module.css ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"commentsForm":"Ncbs8UQPXbDntYupAwAK"});

/***/ },

/***/ 6505
/*!********************************************************!*\
  !*** ./src/features/Comments/TopNav/TopNav.module.css ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"topNav":"nXoS5gL32zb6iiymIjaR"});

/***/ },

/***/ 9011
/*!********************************************************************!*\
  !*** ./src/features/Feed/CommentsButton/CommentsButton.module.css ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"commentsButton":"u93giZHNw1r8XONVVjuT"});

/***/ },

/***/ 3988
/*!*******************************************!*\
  !*** ./src/features/Feed/Feed.module.css ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"feed":"FXju5x6KeXy0fnVXd9I2"});

/***/ },

/***/ 8891
/*!********************************************************!*\
  !*** ./src/features/Feed/FeedNode/FeedNode.module.css ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"feedNode":"QNshFBXSoGNyBxo7mpBY"});

/***/ },

/***/ 7041
/*!************************************************************************!*\
  !*** ./src/features/Feed/FullscreenButton/FullscreenButton.module.css ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"fullscreenButton":"gwFM11KfM2Zh3vK3llzI"});

/***/ },

/***/ 6765
/*!************************************************************!*\
  !*** ./src/features/Feed/LikeButton/LikeButton.module.css ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"likeButton":"tPgn6_d8EcB9qbtXe5Ke"});

/***/ },

/***/ 5449
/*!********************************************************************!*\
  !*** ./src/features/Feed/LocationButton/LocationButton.module.css ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"locationButton":"XX3tiDHS9iPMFdtJCXrv"});

/***/ },

/***/ 9849
/*!**************************************************************!*\
  !*** ./src/features/Feed/ShareButton/ShareButton.module.css ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"shareButton":"QyOWKukTcDhXHdC6M19r"});

/***/ },

/***/ 8965
/*!******************************************************!*\
  !*** ./src/features/Feed/SideNav/SideNav.module.css ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"sideNav":"e2IegedGqgKHDJ9K5GKq"});

/***/ },

/***/ 5779
/*!****************************************************!*\
  !*** ./src/features/Feed/TopNav/TopNav.module.css ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"topNav":"RDylejBr3Rzb8YpYfiDx"});

/***/ },

/***/ 8407
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_react-dom_client_js-node_modules_react_compiler-runtime_js-node_modules_-65e0d9"], () => (__webpack_exec__(6954)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.3eec6d5071dd0b0828ae.js.map