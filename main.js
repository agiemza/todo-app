/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Calendar/calendar.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Calendar/calendar.css ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Calendar */\n\n.calendar {\n    display: grid;\n    justify-items: center;\n    position: relative;\n    padding: 15px;\n    margin-bottom: 5px;\n    overflow: hidden;\n    background: var(--gradient);\n    border-radius: 0 0 10px 10px;\n    box-shadow: 0px 0px 5px lightgray;\n    color: white;\n    font-weight: 200;\n    user-select: none;\n}\n\n.days-of-week-container {\n    display: grid;\n    gap: 5px;\n    grid-template-columns: repeat(7, 1fr);\n    justify-items: center;\n    align-items: center;\n    padding-bottom: 5px;\n    border-bottom: 0.5px solid rgba(200, 200, 200, 0.5);\n    font-size: 0.9rem;\n}\n\n.calendar-grid-container {\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    grid-template-columns: repeat(7, 1fr);\n    grid-template-rows: repeat(6, auto);\n    aspect-ratio: 1/1;\n}\n\n.calendar-grid-container>div {\n    aspect-ratio: 1/1;\n}\n\n.day-container {\n    cursor: pointer;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    width: 100%;\n    transition: all 0.3s;\n}\n\n.day-container:active {\n    user-select: none;\n    transform: scale(0.9);\n    text-shadow: 0 0 5px rgb(150, 150, 150) !important;\n}\n\n.day-container:hover {\n    text-shadow: 0 0 5px white;\n}\n\n.day-container-selected>div {\n    font-weight: 500;\n}\n\n.day-container-today {\n    font-weight: 400;\n    text-shadow: 0 0 3px rgba(210, 210, 210);\n}\n\n.another-month-day {\n    color: rgb(170, 170, 170);\n}\n\n.another-month-day:hover {\n    cursor: pointer;\n    text-shadow: 0 0 5px rgb(200, 200, 200);\n}\n\n.day-with-task {\n    position: relative;\n}\n\n.day-with-task::after {\n    content: \"\";\n    position: absolute;\n    bottom: -5px;\n    left: 0;\n    right: 0;\n    margin-left: auto;\n    margin-right: auto;\n    width: 3px;\n    height: 3px;\n    border-radius: 50%;\n    background-color: white;\n}\n\n.another-month-day>.day-with-task::after {\n    background-color: rgb(170, 170, 170);\n}\n\n/* Switch */\n\n.month-switch-contianer {\n    display: grid;\n    padding: 0 0 10px;\n}\n\n.month-switch {\n    display: grid;\n    gap: 0.7rem;\n    grid-template-columns: 1fr auto 1fr;\n    align-items: center;\n    min-width: 235px;\n}\n\n.month-switch>button {\n    display: grid;\n    min-height: 1.5rem;\n    background: none;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n}\n\n.month-switch>button>svg {\n    display: grid;\n    width: 1.5rem;\n    height: 1.5rem;\n    fill: rgba(210, 210, 210);\n}\n\n.month-switch-left {\n    justify-content: end;\n}\n\n.month-switch-right {\n    justify-content: start;\n}\n\n.month-switch div {\n    display: grid;\n    gap: 0.2rem;\n    grid-template-columns: 1fr auto;\n    cursor: pointer;\n}\n\n.month-container,\n.month-current {\n    display: grid;\n    justify-items: center;\n    color: rgba(210, 210, 210);\n    min-width: 80px;\n}\n\n.month-current {\n    color: white;\n}\n\n.previous-calendar,\n.next-calendar {\n    display: none;\n}\n\n@media screen and (min-width: 520px) {\n    .previous-calendar {\n        display: block;\n        position: absolute;\n        bottom: 15px;\n        transform: translateX(-300px);\n        -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));\n        mask-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));\n    }\n\n    .next-calendar {\n        display: block;\n        position: absolute;\n        bottom: 15px;\n        transform: translateX(300px);\n        -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));\n        mask-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));\n    }\n}", "",{"version":3,"sources":["webpack://./src/components/Calendar/calendar.css"],"names":[],"mappings":"AAAA,aAAa;;AAEb;IACI,aAAa;IACb,qBAAqB;IACrB,kBAAkB;IAClB,aAAa;IACb,kBAAkB;IAClB,gBAAgB;IAChB,2BAA2B;IAC3B,4BAA4B;IAC5B,iCAAiC;IACjC,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,qCAAqC;IACrC,qBAAqB;IACrB,mBAAmB;IACnB,mBAAmB;IACnB,mDAAmD;IACnD,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,qCAAqC;IACrC,mCAAmC;IACnC,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,WAAW;IACX,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;IACrB,kDAAkD;AACtD;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,wCAAwC;AAC5C;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,uCAAuC;AAC3C;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,OAAO;IACP,QAAQ;IACR,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,oCAAoC;AACxC;;AAEA,WAAW;;AAEX;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,mCAAmC;IACnC,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,gBAAgB;IAChB,6BAA6B;IAC7B,YAAY;IACZ,eAAe;IACf,WAAW;AACf;;AAEA;IACI,aAAa;IACb,aAAa;IACb,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,WAAW;IACX,+BAA+B;IAC/B,eAAe;AACnB;;AAEA;;IAEI,aAAa;IACb,qBAAqB;IACrB,0BAA0B;IAC1B,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI;QACI,cAAc;QACd,kBAAkB;QAClB,YAAY;QACZ,6BAA6B;QAC7B,gFAAgF;QAChF,wEAAwE;IAC5E;;IAEA;QACI,cAAc;QACd,kBAAkB;QAClB,YAAY;QACZ,4BAA4B;QAC5B,iFAAiF;QACjF,yEAAyE;IAC7E;AACJ","sourcesContent":["/* Calendar */\n\n.calendar {\n    display: grid;\n    justify-items: center;\n    position: relative;\n    padding: 15px;\n    margin-bottom: 5px;\n    overflow: hidden;\n    background: var(--gradient);\n    border-radius: 0 0 10px 10px;\n    box-shadow: 0px 0px 5px lightgray;\n    color: white;\n    font-weight: 200;\n    user-select: none;\n}\n\n.days-of-week-container {\n    display: grid;\n    gap: 5px;\n    grid-template-columns: repeat(7, 1fr);\n    justify-items: center;\n    align-items: center;\n    padding-bottom: 5px;\n    border-bottom: 0.5px solid rgba(200, 200, 200, 0.5);\n    font-size: 0.9rem;\n}\n\n.calendar-grid-container {\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    grid-template-columns: repeat(7, 1fr);\n    grid-template-rows: repeat(6, auto);\n    aspect-ratio: 1/1;\n}\n\n.calendar-grid-container>div {\n    aspect-ratio: 1/1;\n}\n\n.day-container {\n    cursor: pointer;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    width: 100%;\n    transition: all 0.3s;\n}\n\n.day-container:active {\n    user-select: none;\n    transform: scale(0.9);\n    text-shadow: 0 0 5px rgb(150, 150, 150) !important;\n}\n\n.day-container:hover {\n    text-shadow: 0 0 5px white;\n}\n\n.day-container-selected>div {\n    font-weight: 500;\n}\n\n.day-container-today {\n    font-weight: 400;\n    text-shadow: 0 0 3px rgba(210, 210, 210);\n}\n\n.another-month-day {\n    color: rgb(170, 170, 170);\n}\n\n.another-month-day:hover {\n    cursor: pointer;\n    text-shadow: 0 0 5px rgb(200, 200, 200);\n}\n\n.day-with-task {\n    position: relative;\n}\n\n.day-with-task::after {\n    content: \"\";\n    position: absolute;\n    bottom: -5px;\n    left: 0;\n    right: 0;\n    margin-left: auto;\n    margin-right: auto;\n    width: 3px;\n    height: 3px;\n    border-radius: 50%;\n    background-color: white;\n}\n\n.another-month-day>.day-with-task::after {\n    background-color: rgb(170, 170, 170);\n}\n\n/* Switch */\n\n.month-switch-contianer {\n    display: grid;\n    padding: 0 0 10px;\n}\n\n.month-switch {\n    display: grid;\n    gap: 0.7rem;\n    grid-template-columns: 1fr auto 1fr;\n    align-items: center;\n    min-width: 235px;\n}\n\n.month-switch>button {\n    display: grid;\n    min-height: 1.5rem;\n    background: none;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n}\n\n.month-switch>button>svg {\n    display: grid;\n    width: 1.5rem;\n    height: 1.5rem;\n    fill: rgba(210, 210, 210);\n}\n\n.month-switch-left {\n    justify-content: end;\n}\n\n.month-switch-right {\n    justify-content: start;\n}\n\n.month-switch div {\n    display: grid;\n    gap: 0.2rem;\n    grid-template-columns: 1fr auto;\n    cursor: pointer;\n}\n\n.month-container,\n.month-current {\n    display: grid;\n    justify-items: center;\n    color: rgba(210, 210, 210);\n    min-width: 80px;\n}\n\n.month-current {\n    color: white;\n}\n\n.previous-calendar,\n.next-calendar {\n    display: none;\n}\n\n@media screen and (min-width: 520px) {\n    .previous-calendar {\n        display: block;\n        position: absolute;\n        bottom: 15px;\n        transform: translateX(-300px);\n        -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));\n        mask-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));\n    }\n\n    .next-calendar {\n        display: block;\n        position: absolute;\n        bottom: 15px;\n        transform: translateX(300px);\n        -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));\n        mask-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Forms/forms.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Forms/forms.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 24 24"><path fill="gray" d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/></svg> */ "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"15\" viewBox=\"0 0 24 24\"><path fill=\"gray\" d=\"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z\"/></svg>"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "form {\n    display: grid;\n    gap: 1.5rem;\n    padding: 1rem 1rem 0 1rem;\n    overflow: auto;\n    grid-column: 1/-1;\n\n}\n\n.form-error {\n    grid-column: 1/-1;\n    color: var(--main-color-3);\n}\n\nlabel {\n    color: rgb(90, 90, 90);\n    align-self: center;\n    font-size: 0.9rem;\n    grid-column: 1;\n}\n\nselect {\n    align-self: center;\n    width: 150px;\n    border: none;\n    border-radius: 5px;\n    color: rgb(90, 90, 90);\n    background-color: var(--lighter-color);\n    padding: 5px 10px;\n    cursor: pointer;\n    grid-row: 1;\n    grid-column: 2;\n    justify-self: start;\n}\n\ninput[type=\"date\"] {\n    grid-row: 2;\n    grid-column: 2;\n    width: 150px;\n    border: none;\n    border-radius: 5px;\n    color: rgb(90, 90, 90);\n    background-color: var(--lighter-color);\n    padding: 5px 10px;\n}\n\n::-webkit-calendar-picker-indicator {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.submit-button {\n    bottom: 1rem !important;\n}\n\n/* Specific forms */\n\n.task-form {\n    grid-template-rows: auto auto 2fr auto 1fr;\n    grid-template-columns: auto 1fr;\n}\n\n#task-name {\n    grid-column: 1/-1;\n    resize: none;\n    border: none;\n    border-top: 1px solid var(--lighter-gray);\n    border-bottom: 1px solid var(--lighter-gray);\n    padding: 1.5rem 0;\n    margin-top: 2rem;\n    font-weight: 700;\n    outline: none;\n    overflow: auto;\n}\n\n.folder-form {\n    align-content: center;\n    padding: 0 2rem;\n    padding-bottom: calc(1rem + var(--nav-height));\n}\n\n#folder-name {\n    align-self: center;\n    min-width: 150px;\n    border: none;\n    border-radius: 5px;\n    color: rgb(90, 90, 90);\n    background-color: var(--lighter-color);\n    padding: 10px;\n    cursor: pointer;\n}\n\n.edit-folder-form {\n    grid-template-columns: 1fr auto auto;\n}", "",{"version":3,"sources":["webpack://./src/components/Forms/forms.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,WAAW;IACX,yBAAyB;IACzB,cAAc;IACd,iBAAiB;;AAErB;;AAEA;IACI,iBAAiB;IACjB,0BAA0B;AAC9B;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;IACtB,sCAAsC;IACtC,iBAAiB;IACjB,eAAe;IACf,WAAW;IACX,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;IACtB,sCAAsC;IACtC,iBAAiB;AACrB;;AAEA;IACI,yDAAgR;AACpR;;AAEA;IACI,uBAAuB;AAC3B;;AAEA,mBAAmB;;AAEnB;IACI,0CAA0C;IAC1C,+BAA+B;AACnC;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,yCAAyC;IACzC,4CAA4C;IAC5C,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,qBAAqB;IACrB,eAAe;IACf,8CAA8C;AAClD;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;IACtB,sCAAsC;IACtC,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,oCAAoC;AACxC","sourcesContent":["form {\n    display: grid;\n    gap: 1.5rem;\n    padding: 1rem 1rem 0 1rem;\n    overflow: auto;\n    grid-column: 1/-1;\n\n}\n\n.form-error {\n    grid-column: 1/-1;\n    color: var(--main-color-3);\n}\n\nlabel {\n    color: rgb(90, 90, 90);\n    align-self: center;\n    font-size: 0.9rem;\n    grid-column: 1;\n}\n\nselect {\n    align-self: center;\n    width: 150px;\n    border: none;\n    border-radius: 5px;\n    color: rgb(90, 90, 90);\n    background-color: var(--lighter-color);\n    padding: 5px 10px;\n    cursor: pointer;\n    grid-row: 1;\n    grid-column: 2;\n    justify-self: start;\n}\n\ninput[type=\"date\"] {\n    grid-row: 2;\n    grid-column: 2;\n    width: 150px;\n    border: none;\n    border-radius: 5px;\n    color: rgb(90, 90, 90);\n    background-color: var(--lighter-color);\n    padding: 5px 10px;\n}\n\n::-webkit-calendar-picker-indicator {\n    background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"15\" viewBox=\"0 0 24 24\"><path fill=\"gray\" d=\"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z\"/></svg>');\n}\n\n.submit-button {\n    bottom: 1rem !important;\n}\n\n/* Specific forms */\n\n.task-form {\n    grid-template-rows: auto auto 2fr auto 1fr;\n    grid-template-columns: auto 1fr;\n}\n\n#task-name {\n    grid-column: 1/-1;\n    resize: none;\n    border: none;\n    border-top: 1px solid var(--lighter-gray);\n    border-bottom: 1px solid var(--lighter-gray);\n    padding: 1.5rem 0;\n    margin-top: 2rem;\n    font-weight: 700;\n    outline: none;\n    overflow: auto;\n}\n\n.folder-form {\n    align-content: center;\n    padding: 0 2rem;\n    padding-bottom: calc(1rem + var(--nav-height));\n}\n\n#folder-name {\n    align-self: center;\n    min-width: 150px;\n    border: none;\n    border-radius: 5px;\n    color: rgb(90, 90, 90);\n    background-color: var(--lighter-color);\n    padding: 10px;\n    cursor: pointer;\n}\n\n.edit-folder-form {\n    grid-template-columns: 1fr auto auto;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Tabs/Calendar/calendarTab.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Tabs/Calendar/calendarTab.css ***!
  \********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".calendar-tab-container {\n    display: grid;\n    grid-template-rows: auto auto 1fr;\n    align-content: start;\n    overflow-y: auto;\n}\n\n.calendar-tab-tasks-list-title {\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    font-size: 0.8rem;\n    padding: 10px;\n    border-bottom: 1px solid var(--lighter-gray);\n}\n\n.tasks-list-container {\n    min-width: 250px;\n    width: 100%;\n    max-width: 800px;\n    justify-self: center;\n    padding: 1rem 1rem calc(var(--nav-height) + 5.5rem);\n    overflow-y: auto;\n}\n\n.tasks-list {\n    display: grid;\n    gap: 10px;\n    list-style: none;\n}\n\n.tasks-list-empty {\n    height: 100%;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    font-size: 0.8rem;\n    color: gray;\n    text-align: center;\n}\n\n.tasks-list-expanded {\n    padding: 1rem 0;\n    height: 100% !important;\n}", "",{"version":3,"sources":["webpack://./src/components/Tabs/Calendar/calendarTab.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,iCAAiC;IACjC,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,iBAAiB;IACjB,aAAa;IACb,4CAA4C;AAChD;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,gBAAgB;IAChB,oBAAoB;IACpB,mDAAmD;IACnD,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,iBAAiB;IACjB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,uBAAuB;AAC3B","sourcesContent":[".calendar-tab-container {\n    display: grid;\n    grid-template-rows: auto auto 1fr;\n    align-content: start;\n    overflow-y: auto;\n}\n\n.calendar-tab-tasks-list-title {\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    font-size: 0.8rem;\n    padding: 10px;\n    border-bottom: 1px solid var(--lighter-gray);\n}\n\n.tasks-list-container {\n    min-width: 250px;\n    width: 100%;\n    max-width: 800px;\n    justify-self: center;\n    padding: 1rem 1rem calc(var(--nav-height) + 5.5rem);\n    overflow-y: auto;\n}\n\n.tasks-list {\n    display: grid;\n    gap: 10px;\n    list-style: none;\n}\n\n.tasks-list-empty {\n    height: 100%;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    font-size: 0.8rem;\n    color: gray;\n    text-align: center;\n}\n\n.tasks-list-expanded {\n    padding: 1rem 0;\n    height: 100% !important;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Tabs/Folders/foldersTab.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Tabs/Folders/foldersTab.css ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".folders-tab-container {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    align-items: start;\n    justify-items: center;\n    background-color: var(--lighter-gray);\n    padding: 1rem;\n    overflow: auto;\n}\n\n.folder-new-button-wrapper {\n    min-width: 250px;\n    width: 100%;\n    max-width: 800px;\n}\n\n.folder-new-button {\n    justify-self: start;\n    display: flex;\n    gap: 0.5rem;\n    align-items: center;\n    justify-content: space-between;\n    background: var(--gradient);\n    color: var(--lighter-gray);\n    border-radius: 5px;\n    border: none;\n    padding: 10px 1rem;\n    margin-bottom: 1rem;\n    transition: all 0.5s;\n    font-weight: 400;\n    font-size: 0.9rem;\n}\n\n.folder-new-button:hover {\n    opacity: 0.9;\n    box-shadow: 0 0 5px lightgrey;\n}\n\n/* Folders list */\n\n.folders-list-container {\n    display: grid;\n    justify-items: center;\n    width: 100%;\n}\n\n.folders-list {\n    display: grid;\n    gap: 1rem;\n    padding-bottom: var(--nav-height);\n    min-width: 250px;\n    width: 100%;\n    max-width: 800px;\n}\n\n.folders-list>li {\n    display: grid;\n    overflow: hidden;\n    background-color: var(--background-color);\n    padding: 1rem;\n    border-radius: 10px;\n    box-shadow: 0px 0px 1px lightgray;\n}\n\n.folders-list .task-container {\n    grid-template-rows: auto;\n}\n\n.folders-list .task-folder-name {\n    display: none;\n}\n\n.folders-list .tasks-list {\n    height: 0;\n    overflow: hidden;\n}\n\n/* Top bar */\n\n.folders-list-top-bar {\n    display: grid;\n    gap: 1rem;\n    align-items: center;\n    grid-template-columns: 1fr;\n    grid-auto-columns: auto;\n    grid-auto-flow: column;\n    background-color: var(--background-color);\n    padding: 10px 0.5rem;\n}\n\n[data-folder-expanded=\"expanded\"] .folders-list-top-bar {\n    border-bottom: 1px solid var(--lighter-gray);\n}\n\n.folder-name {\n    display: grid;\n    align-items: center;\n    min-width: 3rem;\n    width: 100%;\n    max-height: 2rem;\n    color: black;\n    font-weight: 600;\n    font-size: 1rem;\n    letter-spacing: 0.2px;\n    border-radius: 10px;\n    border: none;\n}\n\n.folder-name div {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.folder-list-top-bar-button {\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    width: 25px;\n    height: 25px;\n    border-radius: 5px;\n    border: 1px solid var(--lighter-gray);\n    transition: all 0.5s;\n    background: none;\n}\n\n.folder-list-top-bar-button svg {\n    fill: var(--main-color-1);\n    width: 20px;\n    height: 20px;\n    transition: all 0.5s;\n}\n\n.folder-list-top-bar-button:hover {\n    background-color: var(--lighter-gray);\n}\n\n.folder-list-top-bar-button:hover svg {\n    fill: var(--main-color-2);\n}\n\n.folder-edit-button svg {\n    width: 18px;\n    height: 18px;\n}\n\n.folder-expand-button svg {\n    fill: var(--main-color-1);\n}\n\n.folder-expand-button:hover svg {\n    fill: var(--main-color-2);\n}\n\n.button-expanded svg {\n    fill: var(--main-color-2);\n}", "",{"version":3,"sources":["webpack://./src/components/Tabs/Folders/foldersTab.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,4BAA4B;IAC5B,kBAAkB;IAClB,qBAAqB;IACrB,qCAAqC;IACrC,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,WAAW;IACX,mBAAmB;IACnB,8BAA8B;IAC9B,2BAA2B;IAC3B,0BAA0B;IAC1B,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,oBAAoB;IACpB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,6BAA6B;AACjC;;AAEA,iBAAiB;;AAEjB;IACI,aAAa;IACb,qBAAqB;IACrB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,SAAS;IACT,iCAAiC;IACjC,gBAAgB;IAChB,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,yCAAyC;IACzC,aAAa;IACb,mBAAmB;IACnB,iCAAiC;AACrC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,SAAS;IACT,gBAAgB;AACpB;;AAEA,YAAY;;AAEZ;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,0BAA0B;IAC1B,uBAAuB;IACvB,sBAAsB;IACtB,yCAAyC;IACzC,oBAAoB;AACxB;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,WAAW;IACX,gBAAgB;IAChB,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,qBAAqB;IACrB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,qCAAqC;IACrC,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":[".folders-tab-container {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    align-items: start;\n    justify-items: center;\n    background-color: var(--lighter-gray);\n    padding: 1rem;\n    overflow: auto;\n}\n\n.folder-new-button-wrapper {\n    min-width: 250px;\n    width: 100%;\n    max-width: 800px;\n}\n\n.folder-new-button {\n    justify-self: start;\n    display: flex;\n    gap: 0.5rem;\n    align-items: center;\n    justify-content: space-between;\n    background: var(--gradient);\n    color: var(--lighter-gray);\n    border-radius: 5px;\n    border: none;\n    padding: 10px 1rem;\n    margin-bottom: 1rem;\n    transition: all 0.5s;\n    font-weight: 400;\n    font-size: 0.9rem;\n}\n\n.folder-new-button:hover {\n    opacity: 0.9;\n    box-shadow: 0 0 5px lightgrey;\n}\n\n/* Folders list */\n\n.folders-list-container {\n    display: grid;\n    justify-items: center;\n    width: 100%;\n}\n\n.folders-list {\n    display: grid;\n    gap: 1rem;\n    padding-bottom: var(--nav-height);\n    min-width: 250px;\n    width: 100%;\n    max-width: 800px;\n}\n\n.folders-list>li {\n    display: grid;\n    overflow: hidden;\n    background-color: var(--background-color);\n    padding: 1rem;\n    border-radius: 10px;\n    box-shadow: 0px 0px 1px lightgray;\n}\n\n.folders-list .task-container {\n    grid-template-rows: auto;\n}\n\n.folders-list .task-folder-name {\n    display: none;\n}\n\n.folders-list .tasks-list {\n    height: 0;\n    overflow: hidden;\n}\n\n/* Top bar */\n\n.folders-list-top-bar {\n    display: grid;\n    gap: 1rem;\n    align-items: center;\n    grid-template-columns: 1fr;\n    grid-auto-columns: auto;\n    grid-auto-flow: column;\n    background-color: var(--background-color);\n    padding: 10px 0.5rem;\n}\n\n[data-folder-expanded=\"expanded\"] .folders-list-top-bar {\n    border-bottom: 1px solid var(--lighter-gray);\n}\n\n.folder-name {\n    display: grid;\n    align-items: center;\n    min-width: 3rem;\n    width: 100%;\n    max-height: 2rem;\n    color: black;\n    font-weight: 600;\n    font-size: 1rem;\n    letter-spacing: 0.2px;\n    border-radius: 10px;\n    border: none;\n}\n\n.folder-name div {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.folder-list-top-bar-button {\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    width: 25px;\n    height: 25px;\n    border-radius: 5px;\n    border: 1px solid var(--lighter-gray);\n    transition: all 0.5s;\n    background: none;\n}\n\n.folder-list-top-bar-button svg {\n    fill: var(--main-color-1);\n    width: 20px;\n    height: 20px;\n    transition: all 0.5s;\n}\n\n.folder-list-top-bar-button:hover {\n    background-color: var(--lighter-gray);\n}\n\n.folder-list-top-bar-button:hover svg {\n    fill: var(--main-color-2);\n}\n\n.folder-edit-button svg {\n    width: 18px;\n    height: 18px;\n}\n\n.folder-expand-button svg {\n    fill: var(--main-color-1);\n}\n\n.folder-expand-button:hover svg {\n    fill: var(--main-color-2);\n}\n\n.button-expanded svg {\n    fill: var(--main-color-2);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Tabs/Home/homeTab.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Tabs/Home/homeTab.css ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".home-tab-container {\n    display: grid;\n    align-items: start;\n    justify-items: center;\n    background-color: var(--background-color);\n    padding: 1rem;\n    padding-bottom: calc(var(--nav-height) + 1rem);\n    overflow-y: auto;\n}\n\n.home-content-container {\n    display: grid;\n    gap: 1.5rem;\n    min-width: 250px;\n    width: 100%;\n    max-width: 800px;\n}\n\nheader {\n    display: grid;\n    gap: 1rem;\n    align-items: end;\n    grid-template-columns: auto;\n    background: var(--gradient);\n    border-radius: 5px;\n    padding: 1rem;\n}\n\nh1 {\n    color: var(--lighter-gray);\n    text-shadow: 0 0 10px var(--darker-gray);\n    font-size: 1.5rem;\n    font-weight: 600;\n}\n\n.home-section-label {\n    grid-row: 1;\n    grid-column: 1/-1;\n    font-size: 1rem;\n    font-weight: 600;\n    padding-left: 0.5rem;\n    padding-top: 0.5rem;\n    color: var(--darker-gray);\n}\n\n.tasks-overview-container {\n    display: grid;\n    gap: 1rem;\n    grid-template-rows: auto;\n    grid-template-columns: 1fr 1fr;\n}\n\n.task-widget {\n    display: grid;\n    gap: 0.5rem;\n    align-items: center;\n    justify-items: center;\n    border-radius: 5px;\n    background-color: var(--lighter-color);\n    padding: 1rem;\n}\n\n.task-counter {\n    font-size: 1.2rem;\n    font-weight: 500;\n    text-align: center;\n}\n\n.home-widget-label {\n    font-size: 0.8rem;\n    text-align: center;\n}\n\n.upcoming-tasks-wigdet {\n    grid-column: 1/-1;\n}\n\n.upcoming-tasks-wigdet ul {\n    display: grid;\n    gap: 0.5rem;\n    width: 100%;\n}\n\n.upcoming-tasks-wigdet ul {\n    display: grid;\n    gap: 0.5rem;\n    width: 100%;\n}\n\n.upcoming-tasks-wigdet ul:empty {\n    height: 1.5rem;\n    justify-items: center;\n    align-items: center;\n    position: relative;\n}\n\n.upcoming-tasks-wigdet ul:empty::after {\n    content: \"No tasks\";\n    font-size: 0.8rem;\n    color: gray;\n    text-align: center;\n}\n\n.upcoming-tasks-label {\n    justify-self: start;\n    color: var(--darker-gray);\n    font-size: 0.85rem;\n    font-weight: 500;\n}\n\n.upcoming-task {\n    display: grid;\n    align-items: center;\n    gap: 10px;\n    grid-template-columns: auto 1fr auto;\n}\n\n.upcoming-task svg {\n    width: 20px;\n    height: 20px;\n}\n\n.upcoming-task-icon {\n    display: grid;\n    align-items: center;\n    fill: var(--darker-gray);\n}\n\n.upcoming-task-name {\n    cursor: pointer;\n    width: 100%;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 0.9rem;\n}\n\n.upcoming-task-date {\n    font-size: 0.8rem;\n    color: var(--darker-gray);\n}", "",{"version":3,"sources":["webpack://./src/components/Tabs/Home/homeTab.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,kBAAkB;IAClB,qBAAqB;IACrB,yCAAyC;IACzC,aAAa;IACb,8CAA8C;IAC9C,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,gBAAgB;IAChB,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,gBAAgB;IAChB,2BAA2B;IAC3B,2BAA2B;IAC3B,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,0BAA0B;IAC1B,wCAAwC;IACxC,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,eAAe;IACf,gBAAgB;IAChB,oBAAoB;IACpB,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,SAAS;IACT,wBAAwB;IACxB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,WAAW;IACX,mBAAmB;IACnB,qBAAqB;IACrB,kBAAkB;IAClB,sCAAsC;IACtC,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,WAAW;AACf;;AAEA;IACI,aAAa;IACb,WAAW;IACX,WAAW;AACf;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,oCAAoC;AACxC;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,wBAAwB;AAC5B;;AAEA;IACI,eAAe;IACf,WAAW;IACX,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;AAC7B","sourcesContent":[".home-tab-container {\n    display: grid;\n    align-items: start;\n    justify-items: center;\n    background-color: var(--background-color);\n    padding: 1rem;\n    padding-bottom: calc(var(--nav-height) + 1rem);\n    overflow-y: auto;\n}\n\n.home-content-container {\n    display: grid;\n    gap: 1.5rem;\n    min-width: 250px;\n    width: 100%;\n    max-width: 800px;\n}\n\nheader {\n    display: grid;\n    gap: 1rem;\n    align-items: end;\n    grid-template-columns: auto;\n    background: var(--gradient);\n    border-radius: 5px;\n    padding: 1rem;\n}\n\nh1 {\n    color: var(--lighter-gray);\n    text-shadow: 0 0 10px var(--darker-gray);\n    font-size: 1.5rem;\n    font-weight: 600;\n}\n\n.home-section-label {\n    grid-row: 1;\n    grid-column: 1/-1;\n    font-size: 1rem;\n    font-weight: 600;\n    padding-left: 0.5rem;\n    padding-top: 0.5rem;\n    color: var(--darker-gray);\n}\n\n.tasks-overview-container {\n    display: grid;\n    gap: 1rem;\n    grid-template-rows: auto;\n    grid-template-columns: 1fr 1fr;\n}\n\n.task-widget {\n    display: grid;\n    gap: 0.5rem;\n    align-items: center;\n    justify-items: center;\n    border-radius: 5px;\n    background-color: var(--lighter-color);\n    padding: 1rem;\n}\n\n.task-counter {\n    font-size: 1.2rem;\n    font-weight: 500;\n    text-align: center;\n}\n\n.home-widget-label {\n    font-size: 0.8rem;\n    text-align: center;\n}\n\n.upcoming-tasks-wigdet {\n    grid-column: 1/-1;\n}\n\n.upcoming-tasks-wigdet ul {\n    display: grid;\n    gap: 0.5rem;\n    width: 100%;\n}\n\n.upcoming-tasks-wigdet ul {\n    display: grid;\n    gap: 0.5rem;\n    width: 100%;\n}\n\n.upcoming-tasks-wigdet ul:empty {\n    height: 1.5rem;\n    justify-items: center;\n    align-items: center;\n    position: relative;\n}\n\n.upcoming-tasks-wigdet ul:empty::after {\n    content: \"No tasks\";\n    font-size: 0.8rem;\n    color: gray;\n    text-align: center;\n}\n\n.upcoming-tasks-label {\n    justify-self: start;\n    color: var(--darker-gray);\n    font-size: 0.85rem;\n    font-weight: 500;\n}\n\n.upcoming-task {\n    display: grid;\n    align-items: center;\n    gap: 10px;\n    grid-template-columns: auto 1fr auto;\n}\n\n.upcoming-task svg {\n    width: 20px;\n    height: 20px;\n}\n\n.upcoming-task-icon {\n    display: grid;\n    align-items: center;\n    fill: var(--darker-gray);\n}\n\n.upcoming-task-name {\n    cursor: pointer;\n    width: 100%;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 0.9rem;\n}\n\n.upcoming-task-date {\n    font-size: 0.8rem;\n    color: var(--darker-gray);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Tasks/task.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Tasks/task.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".task-container {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    grid-template-rows: auto 1fr;\n    grid-auto-flow: column;\n    column-gap: 1rem;\n    align-items: center;\n    background-color: var(--lighter-color);\n    overflow: hidden;\n    border-radius: 5px;\n    padding: 1rem 2rem 1rem 1rem;\n    position: relative;\n    cursor: pointer;\n}\n\n.task-container-checked {\n    background-color: var(--lighter-gray);\n    color: gray;\n}\n\n.task-folder-name {\n    --size: 0.6rem;\n    --color: gray;\n    display: grid;\n    grid-template-columns: auto 1fr;\n    align-items: center;\n    gap: 3px;\n    grid-row: 1;\n    color: var(--color);\n    font-size: var(--size);\n    max-width: 30%;\n}\n\n.task-folder-name svg {\n    width: 0.8rem;\n    height: 0.8rem;\n    fill: var(--color);\n}\n\n.task-folder-name p {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.task-text {\n    font-size: 0.9rem;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.task-container-checked>.task-text {\n    text-decoration: line-through;\n}\n\n.task-check-button {\n    grid-row: 1/-1;\n    width: 20px;\n    height: 20px;\n    background-color: var(--background-color);\n    border-radius: 5px;\n    border: 1px solid var(--main-color-2);\n    position: relative;\n}\n\n.task-check-button svg {\n    width: 100%;\n    height: 100%;\n    fill: transparent;\n    transition: fill 0.3s;\n}\n\n.task-check-button:hover svg {\n    width: 100%;\n    height: 100%;\n    fill: gray;\n}\n\n.task-container-checked .task-check-button {\n    border: 1px solid gray;\n}\n\n.task-container-checked .task-check-button svg {\n    fill: gray;\n}\n\n.task-important-button {\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    grid-row: 1/-1;\n    background-color: transparent;\n    border: none;\n    border-radius: 5px;\n}\n\n.task-important-button svg {\n    width: 25px;\n    height: 25px;\n    fill: gray;\n    transition: fill 0.5s;\n}\n\n.task-important-button:hover svg {\n    fill: var(--main-color-2);\n}\n\n.task-important-button-active svg {\n    fill: var(--main-color-2);\n}\n\n.task-container-checked .task-important-button svg {\n    fill: gray;\n}\n\n.task-remove-button {\n    display: grid;\n    align-self: center;\n    justify-self: end;\n    justify-items: center;\n    align-items: center;\n    width: 3rem;\n    height: 3rem;\n    border-radius: 5px;\n    border: none;\n    background: none;\n    transition: all 0.5s;\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n}\n\n.task-remove-button svg {\n    width: 2rem;\n    height: 2rem;\n}\n\n.task-remove-button:hover {\n    background-color: var(--lighter-gray);\n}", "",{"version":3,"sources":["webpack://./src/components/Tasks/task.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,+BAA+B;IAC/B,4BAA4B;IAC5B,sBAAsB;IACtB,gBAAgB;IAChB,mBAAmB;IACnB,sCAAsC;IACtC,gBAAgB;IAChB,kBAAkB;IAClB,4BAA4B;IAC5B,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,qCAAqC;IACrC,WAAW;AACf;;AAEA;IACI,cAAc;IACd,aAAa;IACb,aAAa;IACb,+BAA+B;IAC/B,mBAAmB;IACnB,QAAQ;IACR,WAAW;IACX,mBAAmB;IACnB,sBAAsB;IACtB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,cAAc;IACd,WAAW;IACX,YAAY;IACZ,yCAAyC;IACzC,kBAAkB;IAClB,qCAAqC;IACrC,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,6BAA6B;IAC7B,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,UAAU;IACV,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,iBAAiB;IACjB,qBAAqB;IACrB,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;IAChB,oBAAoB;IACpB,kBAAkB;IAClB,SAAS;IACT,WAAW;AACf;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,qCAAqC;AACzC","sourcesContent":[".task-container {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    grid-template-rows: auto 1fr;\n    grid-auto-flow: column;\n    column-gap: 1rem;\n    align-items: center;\n    background-color: var(--lighter-color);\n    overflow: hidden;\n    border-radius: 5px;\n    padding: 1rem 2rem 1rem 1rem;\n    position: relative;\n    cursor: pointer;\n}\n\n.task-container-checked {\n    background-color: var(--lighter-gray);\n    color: gray;\n}\n\n.task-folder-name {\n    --size: 0.6rem;\n    --color: gray;\n    display: grid;\n    grid-template-columns: auto 1fr;\n    align-items: center;\n    gap: 3px;\n    grid-row: 1;\n    color: var(--color);\n    font-size: var(--size);\n    max-width: 30%;\n}\n\n.task-folder-name svg {\n    width: 0.8rem;\n    height: 0.8rem;\n    fill: var(--color);\n}\n\n.task-folder-name p {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.task-text {\n    font-size: 0.9rem;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.task-container-checked>.task-text {\n    text-decoration: line-through;\n}\n\n.task-check-button {\n    grid-row: 1/-1;\n    width: 20px;\n    height: 20px;\n    background-color: var(--background-color);\n    border-radius: 5px;\n    border: 1px solid var(--main-color-2);\n    position: relative;\n}\n\n.task-check-button svg {\n    width: 100%;\n    height: 100%;\n    fill: transparent;\n    transition: fill 0.3s;\n}\n\n.task-check-button:hover svg {\n    width: 100%;\n    height: 100%;\n    fill: gray;\n}\n\n.task-container-checked .task-check-button {\n    border: 1px solid gray;\n}\n\n.task-container-checked .task-check-button svg {\n    fill: gray;\n}\n\n.task-important-button {\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    grid-row: 1/-1;\n    background-color: transparent;\n    border: none;\n    border-radius: 5px;\n}\n\n.task-important-button svg {\n    width: 25px;\n    height: 25px;\n    fill: gray;\n    transition: fill 0.5s;\n}\n\n.task-important-button:hover svg {\n    fill: var(--main-color-2);\n}\n\n.task-important-button-active svg {\n    fill: var(--main-color-2);\n}\n\n.task-container-checked .task-important-button svg {\n    fill: gray;\n}\n\n.task-remove-button {\n    display: grid;\n    align-self: center;\n    justify-self: end;\n    justify-items: center;\n    align-items: center;\n    width: 3rem;\n    height: 3rem;\n    border-radius: 5px;\n    border: none;\n    background: none;\n    transition: all 0.5s;\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n}\n\n.task-remove-button svg {\n    width: 2rem;\n    height: 2rem;\n}\n\n.task-remove-button:hover {\n    background-color: var(--lighter-gray);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: var(--main-font);\n}\n\n@keyframes slideOut {\n    from {\n        transform: translateX(0);\n        opacity: 1;\n    }\n\n    to {\n        transform: translateX(100vw);\n        opacity: 0.8;\n    }\n}\n\n@keyframes slideIn {\n    from {\n        transform: translateX(100vw);\n    }\n\n    to {\n        transform: translateX(0);\n    }\n}\n\n:root {\n    --main-font: \"Open Sans\", sans-serif;\n    --folder-container-padding: 25px;\n    --nav-height: calc(3rem + 10px);\n    --avalible-height: calc(100vh - var(--nav-height));\n    --background-color: white;\n    --darker-gray: rgb(90, 90, 90);\n    --lighter-gray: rgb(245, 245, 245);\n    --lighter-color: rgb(211, 222, 255, 0.5);\n    --main-color-1: rgba(64, 72, 247, 1);\n    --main-color-2: rgba(192, 50, 198, 1);\n    --main-color-3: rgb(150, 100, 255);\n    --gradient: linear-gradient(200deg, var(--main-color-1) 0%, var(--main-color-2) 100%);\n}\n\n#root {\n    display: grid;\n    grid-template-rows: 1fr auto;\n    min-height: 100vh;\n    height: 100vh;\n    position: relative;\n    overflow: hidden;\n}\n\n.hidden {\n    display: none !important;\n}\n\n.disabled {\n    pointer-events: none;\n    user-select: none;\n}\n\nul {\n    list-style: none;\n}\n\nbutton,\ninput {\n    cursor: pointer;\n}\n\nbutton:active {\n    transform: scale(0.95);\n}\n\n/* Navbar section */\n\nnav {\n    display: grid;\n    grid-row: -1;\n    justify-items: center;\n    align-items: center;\n    position: relative;\n    background-color: var(--background-color);\n    height: var(--nav-height);\n    box-shadow: 0px 0px 5px lightgray;\n    overflow: hidden;\n    padding: 0 2rem;\n    z-index: 11;\n}\n\nnav {\n    display: grid;\n    grid-row: -1;\n    justify-items: center;\n    align-items: center;\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    background-color: var(--background-color);\n    height: var(--nav-height);\n    box-shadow: 0px 0px 5px lightgray;\n    overflow: hidden;\n    padding: 0 2rem;\n}\n\n.nav-buttons-wrapper {\n    display: grid;\n    gap: 2rem;\n    grid-auto-columns: auto;\n    grid-auto-flow: column;\n    justify-items: center;\n    width: 100%;\n    max-width: 800px;\n}\n\n.nav-button {\n    border: none;\n    min-width: 3rem;\n    background: none;\n    text-transform: capitalize;\n    transition: all 0.2s;\n}\n\n.nav-button path {\n    fill: gray;\n    transition: all 0.2s;\n}\n\n.nav-button:hover path {\n    fill: var(--main-color-1);\n}\n\n.nav-button:hover .nav-button-text-container {\n    color: var(--main-color-1);\n}\n\n.nav-button-active path {\n    fill: var(--main-color-1);\n}\n\n.nav-button-active .nav-button-text-container {\n    color: var(--main-color-1);\n}\n\n.nav-button-icon-container {\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.nav-button-icon-container svg {\n    width: 1.5rem;\n    height: 1.5rem;\n}\n\n.nav-button-text-container {\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    font-size: 0.7rem;\n    color: gray;\n    transition: all 0.2s;\n}\n\n/* Main section */\n\nmain {\n    display: grid;\n    grid-row: 1;\n    width: 100%;\n    background-color: var(--background-color);\n    overflow: hidden;\n    position: relative;\n}\n\n.slide-container {\n    display: grid;\n    position: fixed;\n    z-index: 10;\n    top: 0;\n    right: 0;\n    bottom: var(--nav-height);\n    left: 0;\n    padding: 1rem 5% var(--nav-height) 5%;\n    pointer-events: all;\n    overflow: visible;\n    background-color: var(--background-color);\n    transition: all 0.3s;\n}\n\n.slide-container-content {\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: auto auto;\n    grid-template-rows: auto 1fr;\n}\n\n.slide-in {\n    animation-name: slideIn;\n    animation-duration: 0.5s;\n    animation-fill-mode: forwards;\n}\n\n.slide-out {\n    animation-name: slideOut;\n    animation-duration: 0.5s;\n    animation-fill-mode: forwards;\n}\n\n.slide-back-button {\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    justify-self: start;\n    height: 3rem;\n    width: 3rem;\n    background: none;\n    border: none;\n    border-radius: 5px;\n    transition: all 0.5s;\n}\n\n.slide-back-button svg {\n    height: 2rem;\n    width: 2rem;\n}\n\n.slide-back-button:hover {\n    background-color: var(--lighter-gray);\n}\n\n.floating-button {\n    border: none;\n    border-radius: 50%;\n    box-shadow: 0px 1px 5px gray;\n    background-color: var(--main-color-3);\n    color: var(--lighter-gray);\n    transition: background-color 0.5s;\n    position: fixed;\n    right: 1rem;\n    bottom: calc(var(--nav-height) + 1rem);\n    z-index: 1;\n    width: 4rem;\n    height: 4rem;\n    font-size: 2.5rem;\n    font-weight: 300;\n    line-height: 0;\n}\n\n.floating-button svg {\n    width: 2rem;\n    height: 2rem;\n    fill: var(--lighter-gray);\n}\n\n.floating-button:hover {\n    background-color: rgb(193, 100, 255);\n}\n\n@media only screen and (min-width: 800px) {\n    .floating-button {\n        right: calc((100vw - 800px) / 2 + 1rem);\n    }\n\n    .submit-button {\n        right: 1rem;\n        position: absolute;\n    }\n\n    .slide-container {\n        justify-items: center;\n        align-items: center;\n        width: 100%;\n        height: 100%;\n        padding: 0 10% var(--nav-height) 10%;\n        background-color: rgba(0, 0, 0, 0.5);\n    }\n\n    .slide-container-content {\n        background-color: var(--background-color);\n        border-radius: 5px;\n        padding: 1rem;\n        position: relative;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: var(--main-font);\n}\n\n@keyframes slideOut {\n    from {\n        transform: translateX(0);\n        opacity: 1;\n    }\n\n    to {\n        transform: translateX(100vw);\n        opacity: 0.8;\n    }\n}\n\n@keyframes slideIn {\n    from {\n        transform: translateX(100vw);\n    }\n\n    to {\n        transform: translateX(0);\n    }\n}\n\n:root {\n    --main-font: \"Open Sans\", sans-serif;\n    --folder-container-padding: 25px;\n    --nav-height: calc(3rem + 10px);\n    --avalible-height: calc(100vh - var(--nav-height));\n    --background-color: white;\n    --darker-gray: rgb(90, 90, 90);\n    --lighter-gray: rgb(245, 245, 245);\n    --lighter-color: rgb(211, 222, 255, 0.5);\n    --main-color-1: rgba(64, 72, 247, 1);\n    --main-color-2: rgba(192, 50, 198, 1);\n    --main-color-3: rgb(150, 100, 255);\n    --gradient: linear-gradient(200deg, var(--main-color-1) 0%, var(--main-color-2) 100%);\n}\n\n#root {\n    display: grid;\n    grid-template-rows: 1fr auto;\n    min-height: 100vh;\n    height: 100vh;\n    position: relative;\n    overflow: hidden;\n}\n\n.hidden {\n    display: none !important;\n}\n\n.disabled {\n    pointer-events: none;\n    user-select: none;\n}\n\nul {\n    list-style: none;\n}\n\nbutton,\ninput {\n    cursor: pointer;\n}\n\nbutton:active {\n    transform: scale(0.95);\n}\n\n/* Navbar section */\n\nnav {\n    display: grid;\n    grid-row: -1;\n    justify-items: center;\n    align-items: center;\n    position: relative;\n    background-color: var(--background-color);\n    height: var(--nav-height);\n    box-shadow: 0px 0px 5px lightgray;\n    overflow: hidden;\n    padding: 0 2rem;\n    z-index: 11;\n}\n\nnav {\n    display: grid;\n    grid-row: -1;\n    justify-items: center;\n    align-items: center;\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    background-color: var(--background-color);\n    height: var(--nav-height);\n    box-shadow: 0px 0px 5px lightgray;\n    overflow: hidden;\n    padding: 0 2rem;\n}\n\n.nav-buttons-wrapper {\n    display: grid;\n    gap: 2rem;\n    grid-auto-columns: auto;\n    grid-auto-flow: column;\n    justify-items: center;\n    width: 100%;\n    max-width: 800px;\n}\n\n.nav-button {\n    border: none;\n    min-width: 3rem;\n    background: none;\n    text-transform: capitalize;\n    transition: all 0.2s;\n}\n\n.nav-button path {\n    fill: gray;\n    transition: all 0.2s;\n}\n\n.nav-button:hover path {\n    fill: var(--main-color-1);\n}\n\n.nav-button:hover .nav-button-text-container {\n    color: var(--main-color-1);\n}\n\n.nav-button-active path {\n    fill: var(--main-color-1);\n}\n\n.nav-button-active .nav-button-text-container {\n    color: var(--main-color-1);\n}\n\n.nav-button-icon-container {\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.nav-button-icon-container svg {\n    width: 1.5rem;\n    height: 1.5rem;\n}\n\n.nav-button-text-container {\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    font-size: 0.7rem;\n    color: gray;\n    transition: all 0.2s;\n}\n\n/* Main section */\n\nmain {\n    display: grid;\n    grid-row: 1;\n    width: 100%;\n    background-color: var(--background-color);\n    overflow: hidden;\n    position: relative;\n}\n\n.slide-container {\n    display: grid;\n    position: fixed;\n    z-index: 10;\n    top: 0;\n    right: 0;\n    bottom: var(--nav-height);\n    left: 0;\n    padding: 1rem 5% var(--nav-height) 5%;\n    pointer-events: all;\n    overflow: visible;\n    background-color: var(--background-color);\n    transition: all 0.3s;\n}\n\n.slide-container-content {\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: auto auto;\n    grid-template-rows: auto 1fr;\n}\n\n.slide-in {\n    animation-name: slideIn;\n    animation-duration: 0.5s;\n    animation-fill-mode: forwards;\n}\n\n.slide-out {\n    animation-name: slideOut;\n    animation-duration: 0.5s;\n    animation-fill-mode: forwards;\n}\n\n.slide-back-button {\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    justify-self: start;\n    height: 3rem;\n    width: 3rem;\n    background: none;\n    border: none;\n    border-radius: 5px;\n    transition: all 0.5s;\n}\n\n.slide-back-button svg {\n    height: 2rem;\n    width: 2rem;\n}\n\n.slide-back-button:hover {\n    background-color: var(--lighter-gray);\n}\n\n.floating-button {\n    border: none;\n    border-radius: 50%;\n    box-shadow: 0px 1px 5px gray;\n    background-color: var(--main-color-3);\n    color: var(--lighter-gray);\n    transition: background-color 0.5s;\n    position: fixed;\n    right: 1rem;\n    bottom: calc(var(--nav-height) + 1rem);\n    z-index: 1;\n    width: 4rem;\n    height: 4rem;\n    font-size: 2.5rem;\n    font-weight: 300;\n    line-height: 0;\n}\n\n.floating-button svg {\n    width: 2rem;\n    height: 2rem;\n    fill: var(--lighter-gray);\n}\n\n.floating-button:hover {\n    background-color: rgb(193, 100, 255);\n}\n\n@media only screen and (min-width: 800px) {\n    .floating-button {\n        right: calc((100vw - 800px) / 2 + 1rem);\n    }\n\n    .submit-button {\n        right: 1rem;\n        position: absolute;\n    }\n\n    .slide-container {\n        justify-items: center;\n        align-items: center;\n        width: 100%;\n        height: 100%;\n        padding: 0 10% var(--nav-height) 10%;\n        background-color: rgba(0, 0, 0, 0.5);\n    }\n\n    .slide-container-content {\n        background-color: var(--background-color);\n        border-radius: 5px;\n        padding: 1rem;\n        position: relative;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/components/Calendar/calendar.css":
/*!**********************************************!*\
  !*** ./src/components/Calendar/calendar.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_calendar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./calendar.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Calendar/calendar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_calendar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_calendar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_calendar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_calendar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Forms/forms.css":
/*!****************************************!*\
  !*** ./src/components/Forms/forms.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./forms.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Forms/forms.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Tabs/Calendar/calendarTab.css":
/*!******************************************************!*\
  !*** ./src/components/Tabs/Calendar/calendarTab.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_calendarTab_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./calendarTab.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Tabs/Calendar/calendarTab.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_calendarTab_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_calendarTab_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_calendarTab_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_calendarTab_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Tabs/Folders/foldersTab.css":
/*!****************************************************!*\
  !*** ./src/components/Tabs/Folders/foldersTab.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_foldersTab_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./foldersTab.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Tabs/Folders/foldersTab.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_foldersTab_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_foldersTab_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_foldersTab_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_foldersTab_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Tabs/Home/homeTab.css":
/*!**********************************************!*\
  !*** ./src/components/Tabs/Home/homeTab.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_homeTab_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./homeTab.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Tabs/Home/homeTab.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_homeTab_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_homeTab_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_homeTab_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_homeTab_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Tasks/task.css":
/*!***************************************!*\
  !*** ./src/components/Tasks/task.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./task.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Tasks/task.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _UI_Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/Nav */ "./src/components/UI/Nav.js");
/* harmony import */ var _UI_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/Main */ "./src/components/UI/Main.js");
/* harmony import */ var _Tabs_Home_HomeTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tabs/Home/HomeTab */ "./src/components/Tabs/Home/HomeTab.js");
/* harmony import */ var _Utils_LocalStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utils/LocalStorage */ "./src/components/Utils/LocalStorage.js");
/* harmony import */ var _Folders_Folder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Folders/Folder */ "./src/components/Folders/Folder.js");






class App {
    static root = document.querySelector("#root")

    static load() {
        this.loadLayout()
        this.loadLocalStorage()
        _UI_Main__WEBPACK_IMPORTED_MODULE_1__["default"].changeContent(_Tabs_Home_HomeTab__WEBPACK_IMPORTED_MODULE_2__["default"].render())
    }

    static loadLayout() {
        _UI_Main__WEBPACK_IMPORTED_MODULE_1__["default"].render(root)
        _UI_Nav__WEBPACK_IMPORTED_MODULE_0__["default"].render(root)
    }

    static loadLocalStorage() {
        if (_Utils_LocalStorage__WEBPACK_IMPORTED_MODULE_3__["default"].isEmpty()) {
            _Folders_Folder__WEBPACK_IMPORTED_MODULE_4__["default"].generateDefaultFolder()
        }
    }
}

/***/ }),

/***/ "./src/components/Calendar/Calendar.js":
/*!*********************************************!*\
  !*** ./src/components/Calendar/Calendar.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Calendar)
/* harmony export */ });
/* harmony import */ var _Tabs_Calendar_CalendarTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Tabs/Calendar/CalendarTab */ "./src/components/Tabs/Calendar/CalendarTab.js");
/* harmony import */ var _Tasks_Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Tasks/Task */ "./src/components/Tasks/Task.js");
/* harmony import */ var _Utils_ConvertDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/ConvertDate */ "./src/components/Utils/ConvertDate.js");
/* harmony import */ var _Utils_TouchEvent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils/TouchEvent */ "./src/components/Utils/TouchEvent.js");
/* harmony import */ var _calendar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar.css */ "./src/components/Calendar/calendar.css");
/* harmony import */ var _Tasks_TasksList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Tasks/TasksList */ "./src/components/Tasks/TasksList.js");
/* harmony import */ var _Icons_arrow_left__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Icons/arrow-left */ "./src/components/Icons/arrow-left.js");
/* harmony import */ var _Icons_arrow_right__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Icons/arrow-right */ "./src/components/Icons/arrow-right.js");









class Calendar {
    static htmlElement = document.createElement("div")
    static todaysDate = new Date

    static createWidget(date) {
        this.htmlElement.innerHTML = ""
        this.createMonthSwitch(date)
        this.htmlElement.appendChild(this.createCalendars(date))
    }

    // static createMonthSwitch(date) {
    //     const container = document.createElement("div")
    //     container.classList.add("month-switch-contianer")

    //     const monthSwitch = document.createElement("div")
    //     monthSwitch.classList.add("month-switch")
    //     container.appendChild(monthSwitch)

    //     const arrowLeft = document.createElement("button")
    //     arrowLeft.classList.add("month-switch-left")
    //     arrowLeft.addEventListener("click", () => this.switchToPreviousMonth())

    //     const arrowRight = document.createElement("button")
    //     arrowRight.classList.add("month-switch-right")
    //     arrowRight.addEventListener("click", () => this.switchToNextMonth())

    //     const monthContainer = document.createElement("div")
    //     if ((date.getMonth() === new Date().getMonth()) && (date.getFullYear() === new Date().getFullYear())) {
    //         monthContainer.classList.add("month-current")
    //     } else {
    //         monthContainer.classList.add("month-container")
    //     }

    //     monthContainer.textContent = this.convertMonthName(date.getMonth())

    //     const yearContianer = document.createElement("div")
    //     yearContianer.classList.add("year-container")
    //     yearContianer.textContent = date.getFullYear()

    //     const dateWrapper = document.createElement("div")
    //     dateWrapper.appendChild(monthContainer)
    //     dateWrapper.appendChild(yearContianer)
    //     dateWrapper.addEventListener("dblclick", () => this.switchToCurrentMonth())

    //     monthSwitch.appendChild(arrowLeft)
    //     monthSwitch.appendChild(dateWrapper)
    //     monthSwitch.appendChild(arrowRight)

    //     this.htmlElement.appendChild(container)
    // }
    static createMonthSwitch(date) {
        const container = document.createElement("div")
        container.classList.add("month-switch-contianer")

        const monthSwitch = document.createElement("div")
        monthSwitch.classList.add("month-switch")
        container.appendChild(monthSwitch)

        const arrowLeft = document.createElement("button")
        arrowLeft.classList.add("month-switch-left")
        arrowLeft.innerHTML = _Icons_arrow_left__WEBPACK_IMPORTED_MODULE_6__["default"]
        arrowLeft.addEventListener("click", () => this.switchToPreviousMonth())

        const arrowRight = document.createElement("button")
        arrowRight.classList.add("month-switch-right")
        arrowRight.innerHTML = _Icons_arrow_right__WEBPACK_IMPORTED_MODULE_7__["default"]
        arrowRight.addEventListener("click", () => this.switchToNextMonth())

        const monthContainer = document.createElement("div")
        if ((date.getMonth() === new Date().getMonth()) && (date.getFullYear() === new Date().getFullYear())) {
            monthContainer.classList.add("month-current")
        } else {
            monthContainer.classList.add("month-container")
        }

        monthContainer.textContent = this.convertMonthName(date.getMonth())

        const yearContianer = document.createElement("div")
        yearContianer.classList.add("year-container")
        yearContianer.textContent = date.getFullYear()

        const dateWrapper = document.createElement("div")
        dateWrapper.appendChild(monthContainer)
        dateWrapper.appendChild(yearContianer)
        dateWrapper.addEventListener("dblclick", () => this.switchToCurrentMonth())

        monthSwitch.appendChild(arrowLeft)
        monthSwitch.appendChild(dateWrapper)
        monthSwitch.appendChild(arrowRight)

        this.htmlElement.appendChild(container)
    }

    static createCalendars(date) {
        const calendarCurrent = this.createCalendarElement(date)
        calendarCurrent.classList.add("current-calendar")

        const calendarPrev = this.createCalendarElement(this.getPreviousMonth(date))
        calendarPrev.classList.add("previous-calendar")
        calendarPrev.addEventListener("click", () => this.switchToPreviousMonth())

        const calendarNext = this.createCalendarElement(this.getNextMonth(date))
        calendarNext.classList.add("next-calendar")
        calendarNext.addEventListener("click", () => this.switchToNextMonth())

        const wrapper = document.createElement("div")
        wrapper.appendChild(calendarCurrent)
        wrapper.appendChild(calendarPrev)
        wrapper.appendChild(calendarNext)

        return wrapper
    }

    static createCalendarElement(date) {
        const wrapper = document.createElement("div")
        wrapper.appendChild(this.createGridHeader())
        wrapper.appendChild(this.createGrid(date))
        return wrapper
    }

    static createGridHeader() {
        const container = document.createElement("div")
        container.classList.add("days-of-week-container")
        const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

        daysOfWeek.forEach(day => {
            const dayName = document.createElement("div")
            dayName.classList.add("day-of-week")
            dayName.textContent = day
            container.appendChild(dayName)
        })
        return container
    }

    static createGrid(date) {
        const container = document.createElement("div")
        container.classList.add("calendar-grid-container")

        let touchEvent
        container.addEventListener("touchstart", e => touchEvent = new _Utils_TouchEvent__WEBPACK_IMPORTED_MODULE_3__["default"](e), { passive: false })
        container.addEventListener("touchend", e => this.handleSwipe(e, touchEvent))

        for (let i = 0; i < 42; i++) {
            container.appendChild(this.createGridCell(i, date))
        }
        return container
    }

    static createGridCell(i, date) {
        const currentDate = date
        const firstDayOfWeek = _Utils_ConvertDate__WEBPACK_IMPORTED_MODULE_2__["default"].getDay((new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)))
        const lastDayOfCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
        const lastDayOfPreviousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate()

        const dayContainer = document.createElement("div")
        dayContainer.classList.add("day-container")

        const dayNumberContainer = document.createElement("div")
        dayNumberContainer.classList.add("day-number")
        dayContainer.appendChild(dayNumberContainer)

        //show current month day
        if (i + 1 >= firstDayOfWeek && i - firstDayOfWeek + 1 < lastDayOfCurrentMonth) {
            const day = i + 2 - firstDayOfWeek
            const date = _Utils_ConvertDate__WEBPACK_IMPORTED_MODULE_2__["default"].toYYYYMMDD(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))

            this.highlightToday(new Date(date), dayContainer)
            this.markDayWithTask(date, dayNumberContainer)

            dayContainer.addEventListener("click", () => this.handleDayClick(date, dayContainer))

            dayNumberContainer.textContent = day
        }

        //show previous month day
        if (i + 1 < firstDayOfWeek) {
            dayContainer.classList.add("another-month-day")

            const day = lastDayOfPreviousMonth - firstDayOfWeek + i + 2
            const currentDate = new Date(this.getPreviousMonth(this.todaysDate, day))
            const date = _Utils_ConvertDate__WEBPACK_IMPORTED_MODULE_2__["default"].toYYYYMMDD(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))

            this.markDayWithTask(date, dayNumberContainer)

            dayContainer.addEventListener("click", () => {
                this.switchToPreviousMonth()
                this.handleDayClick(date)
            })

            dayNumberContainer.textContent = day
        }

        //show next month day
        if (i + 1 > lastDayOfCurrentMonth && i - firstDayOfWeek + 2 > lastDayOfCurrentMonth) {
            dayContainer.classList.add("another-month-day")

            const day = i + 2 - firstDayOfWeek - lastDayOfCurrentMonth
            const currentDate = new Date(this.getNextMonth(this.todaysDate, day))
            const date = _Utils_ConvertDate__WEBPACK_IMPORTED_MODULE_2__["default"].toYYYYMMDD(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))

            this.markDayWithTask(date, dayNumberContainer)

            dayContainer.addEventListener("click", () => {
                this.switchToNextMonth()
                this.handleDayClick(date)
            })

            dayNumberContainer.textContent = day
        }

        return dayContainer
    }

    static switchToPreviousMonth(date) {
        this.todaysDate = this.getPreviousMonth(date || this.todaysDate)
        this.createWidget(this.todaysDate)
    }

    static switchToCurrentMonth() {
        this.todaysDate = new Date()
        this.createWidget(this.todaysDate)
    }

    static switchToNextMonth(date) {
        this.todaysDate = this.getNextMonth(date || this.todaysDate)
        this.createWidget(this.todaysDate)
    }

    static getPreviousMonth(date, day) {
        return new Date(date.getFullYear(), date.getMonth() - 1, day ? day : 1)
    }

    static getNextMonth(date, day) {
        return new Date(date.getFullYear(), date.getMonth() + 1, day ? day : 1)
    }

    static convertMonthName(monthNumber) {
        switch (monthNumber) {
            case 0:
                monthNumber = "January"
                break
            case 1:
                monthNumber = "Februrary"
                break
            case 2:
                monthNumber = "March"
                break
            case 3:
                monthNumber = "April"
                break
            case 4:
                monthNumber = "May"
                break
            case 5:
                monthNumber = "June"
                break
            case 6:
                monthNumber = "July"
                break
            case 7:
                monthNumber = "August"
                break
            case 8:
                monthNumber = "September"
                break
            case 9:
                monthNumber = "October"
                break
            case 10:
                monthNumber = "November"
                break
            case 11:
                monthNumber = "December"
                break
            default:
                break
        }
        return monthNumber
    }

    static highlightToday(date, element) {
        const currentDate = new Date()
        if (date.getDate() === currentDate.getDate()
            && date.getMonth() === currentDate.getMonth()
            && date.getFullYear() === currentDate.getFullYear()) {
            return element.classList.add("day-container-today")
        }
        else {
            return element.classList.add("current-month-day")
        }
    }

    static highlightSelectedDay(date) {
        const dateContainers = document.querySelectorAll(".current-month-day")
        date = date.slice(-2) < 10 ? date.slice(-1) : date.slice(-2)
        dateContainers.forEach(container => {
            container.classList.remove("day-container-selected")
            if (container.querySelector(".day-number").textContent === date) {
                container.classList.add("day-container-selected")
            }
        })
    }

    static markDayWithTask(date, container) {
        if (_Tasks_Task__WEBPACK_IMPORTED_MODULE_1__["default"].findTasksForDate(date).length) {
            container.classList.add("day-with-task")
        }
    }

    static handleSwipe(e, touchEvent) {
        touchEvent.setEndEvent(e)
        if (touchEvent.isSwipeRight()) {
            this.switchToPreviousMonth()
        }
        if (touchEvent.isSwipeLeft()) {
            this.switchToNextMonth()
        }
    }

    static handleDayClick(date) {
        this.highlightSelectedDay(date)
        _Tasks_TasksList__WEBPACK_IMPORTED_MODULE_5__["default"].update(date)
        _Tabs_Calendar_CalendarTab__WEBPACK_IMPORTED_MODULE_0__["default"].updateDateContainer(date)
    }

    static render() {
        this.htmlElement.classList.add("calendar")
        this.createWidget(this.todaysDate)
        return this.htmlElement
    }
}

/***/ }),

/***/ "./src/components/Folders/Folder.js":
/*!******************************************!*\
  !*** ./src/components/Folders/Folder.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Folder)
/* harmony export */ });
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var _Tabs_Folders_FoldersTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Tabs/Folders/FoldersTab */ "./src/components/Tabs/Folders/FoldersTab.js");
/* harmony import */ var _UI_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/Main */ "./src/components/UI/Main.js");
/* harmony import */ var _Utils_LocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/LocalStorage */ "./src/components/Utils/LocalStorage.js");





class Folder {
    constructor(name) {
        this.id = (0,nanoid__WEBPACK_IMPORTED_MODULE_3__.nanoid)()
        this.name = name
        this.tasks = []
    }

    static show(folderId) {
        _UI_Main__WEBPACK_IMPORTED_MODULE_1__["default"].changeContent(_Tabs_Folders_FoldersTab__WEBPACK_IMPORTED_MODULE_0__["default"].render(folderId))
    }

    static generateDefaultFolder() {
        const defaultFolder = new this("Default")
        defaultFolder.id = "DEFAULT"
        _Utils_LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].saveFolder(defaultFolder)
    }

    static getSortedTasks(folderId) {
        const folder = _Utils_LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].getFolder(folderId)
        const tasks = []
        const tasksDone = []
        folder.tasks.forEach(task => {
            if (task.checked) {
                tasksDone.push({ task, folder })
            }
            if (!task.checked) {
                tasks.push({ task, folder })
            }
        })
        return tasks.concat(tasksDone)
    }

    static update(folder) {
        _Utils_LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].remove(folder)
        _Utils_LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].add(folder)
    }

    static delete(folderId) {
        const folders = _Utils_LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].get().filter(item => item.id !== folderId)
        _Utils_LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].set(folders)
    }
}

/***/ }),

/***/ "./src/components/Folders/FoldersList.js":
/*!***********************************************!*\
  !*** ./src/components/Folders/FoldersList.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FoldersList)
/* harmony export */ });
/* harmony import */ var _Tasks_TasksList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Tasks/TasksList */ "./src/components/Tasks/TasksList.js");
/* harmony import */ var _Icons_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icons/edit */ "./src/components/Icons/edit.js");
/* harmony import */ var _Icons_expand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons/expand */ "./src/components/Icons/expand.js");
/* harmony import */ var _Icons_collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icons/collapse */ "./src/components/Icons/collapse.js");
/* harmony import */ var _Icons_plus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icons/plus */ "./src/components/Icons/plus.js");
/* harmony import */ var _Folder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Folder */ "./src/components/Folders/Folder.js");
/* harmony import */ var _Utils_LocalStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Utils/LocalStorage */ "./src/components/Utils/LocalStorage.js");
/* harmony import */ var _Forms_subcomponents_EditFolderForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Forms/subcomponents/EditFolderForm */ "./src/components/Forms/subcomponents/EditFolderForm.js");
/* harmony import */ var _UI_Main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../UI/Main */ "./src/components/UI/Main.js");
/* harmony import */ var _Forms_subcomponents_NewTaskForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Forms/subcomponents/NewTaskForm */ "./src/components/Forms/subcomponents/NewTaskForm.js");











class FoldersList {
    static htmlElement = this.createHtmlElement()

    static render(expadedFolders = ["DEFAULT"]) {
        this.clearHtmlElement()
        this.htmlElement.appendChild(this.createFoldersList(expadedFolders))
        return this.htmlElement
    }

    static createHtmlElement() {
        const element = document.createElement("div")
        element.classList.add("folders-list-container")
        return element
    }

    static clearHtmlElement() {
        this.htmlElement.innerHTML = ""
    }

    static refresh() {
        const expadedFolders = this.getExpandedFoldersArray()
        this.render(expadedFolders)
    }

    static createFoldersList(expandedFolders) {
        const folderListContainer = document.createElement("ul")
        folderListContainer.classList.add("folders-list")

        let folders = _Utils_LocalStorage__WEBPACK_IMPORTED_MODULE_6__["default"].get()

        if (folders.length === 0) {
            _Folder__WEBPACK_IMPORTED_MODULE_5__["default"].generateDefaultFolder()
            folders = _Utils_LocalStorage__WEBPACK_IMPORTED_MODULE_6__["default"].get()
        }

        folders.forEach(folder => {
            folderListContainer.appendChild(this.createListItem(folder, expandedFolders))
        })

        return folderListContainer
    }

    static createListItem(folder, expadedFolders) {
        const folderContainer = document.createElement("li")
        folderContainer.setAttribute("data-folder-id", folder.id)

        const topBar = this.createFolderTopBar(folder)
        folderContainer.appendChild(topBar)

        folderContainer.appendChild(_Tasks_TasksList__WEBPACK_IMPORTED_MODULE_0__["default"].showTasks(_Folder__WEBPACK_IMPORTED_MODULE_5__["default"].getSortedTasks(folder.id)))

        if (expadedFolders.includes(folder.id)) {
            this.handleExpandButtonClick(folder.id, folderContainer)
        }

        return folderContainer
    }

    static createFolderTopBar(folder) {
        const topBar = document.createElement("div")
        topBar.classList.add("folders-list-top-bar")

        const folderName = document.createElement("div")
        folderName.classList.add("folder-name")
        topBar.appendChild(folderName)
        const folderNameText = document.createElement("div")
        folderNameText.textContent = folder.name
        folderName.appendChild(folderNameText)

        if (folder.id !== "DEFAULT") {
            topBar.appendChild(this.createEditFolderButton(folder))
        }
        topBar.appendChild(this.createAddTaskToFolderButton(folder))
        topBar.appendChild(this.createExpandFolderButton(folder.id))

        return topBar
    }

    static createEditFolderButton(folder) {
        const editFolderButton = document.createElement("button")
        editFolderButton.classList.add("folder-list-top-bar-button", "folder-edit-button")
        editFolderButton.innerHTML = _Icons_edit__WEBPACK_IMPORTED_MODULE_1__["default"]
        editFolderButton.addEventListener("click", () => {
            const form = new _Forms_subcomponents_EditFolderForm__WEBPACK_IMPORTED_MODULE_7__["default"](folder)
            _UI_Main__WEBPACK_IMPORTED_MODULE_8__["default"].showSlideContent(form.render())
        })
        return editFolderButton
    }

    static createAddTaskToFolderButton(folder) {
        const addTaskToFolderButton = document.createElement("button")
        addTaskToFolderButton.classList.add("folder-list-top-bar-button")
        addTaskToFolderButton.innerHTML = _Icons_plus__WEBPACK_IMPORTED_MODULE_4__["default"]
        addTaskToFolderButton.addEventListener("click", () => {
            _UI_Main__WEBPACK_IMPORTED_MODULE_8__["default"].showSlideContent(new _Forms_subcomponents_NewTaskForm__WEBPACK_IMPORTED_MODULE_9__["default"](undefined, folder).render())
        })
        return addTaskToFolderButton
    }

    static createExpandFolderButton(folderId) {
        const expandFolderButton = document.createElement("button")
        expandFolderButton.classList.add("folder-list-top-bar-button", "folder-expand-button")
        expandFolderButton.innerHTML = _Icons_expand__WEBPACK_IMPORTED_MODULE_2__["default"]
        expandFolderButton.addEventListener("click", () => this.handleExpandButtonClick(folderId))
        return expandFolderButton
    }

    static getExpandedFoldersArray() {
        const expandedHtmlElements = document.querySelectorAll(`[data-folder-expanded="expanded"]`)
        const expadedFoldersArray = []
        expandedHtmlElements.forEach(element => expadedFoldersArray.push(element.getAttribute("data-folder-id")))
        return expadedFoldersArray
    }

    static expandFolder(folderHtmlElement) {
        folderHtmlElement.setAttribute("data-folder-expanded", "expanded")
        const list = folderHtmlElement.querySelector(".tasks-list")
        list.classList.add("tasks-list-expanded")
    }

    static collapseFolder(folderHtmlElement) {
        folderHtmlElement.removeAttribute("data-folder-expanded")
        const list = folderHtmlElement.querySelector(".tasks-list")
        list.classList.remove("tasks-list-expanded")
    }

    static handleExpandButtonClick(folderId, folderContainer) {
        const folderHtmlElement = folderContainer ? folderContainer : this.htmlElement.querySelector(`[data-folder-id="${folderId}"]`)
        const button = folderHtmlElement.querySelector(".folder-expand-button")
        button.classList.toggle("button-expanded")
        const isExpanded = button.classList.contains("button-expanded")
        if (isExpanded) {
            button.innerHTML = _Icons_collapse__WEBPACK_IMPORTED_MODULE_3__["default"]
            this.expandFolder(folderHtmlElement)
        }
        if (!isExpanded) {
            button.innerHTML = _Icons_expand__WEBPACK_IMPORTED_MODULE_2__["default"]
            this.collapseFolder(folderHtmlElement)
        }
    }
}

/***/ }),

/***/ "./src/components/Forms/Form.js":
/*!**************************************!*\
  !*** ./src/components/Forms/Form.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var _forms_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms.css */ "./src/components/Forms/forms.css");
/* harmony import */ var _Utils_LocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/LocalStorage */ "./src/components/Utils/LocalStorage.js");
/* harmony import */ var _Icons_save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons/save */ "./src/components/Icons/save.js");
/* harmony import */ var _Icons_remove__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icons/remove */ "./src/components/Icons/remove.js");






class Form {
    constructor() {
        this.htmlElement = this.createForm()
        this.errorBox = this.createErrorBox()
    }

    createForm() {
        const form = document.createElement("form")
        return form
    }

    validateForm() {
        this.errorBox.textContent = ""
        const contentPatern = /^(.|.\n){1,}$/g
        if (!contentPatern.test(this.inputName.value.trim())) {
            this.errorBox.textContent = "Task must contain at least 1 character"
            return false
        }
        this.inputName.value = this.inputName.value.trim()
        return true
    }

    addInput(attributes) {
        const input = document.createElement("input")
        attributes.forEach(({ type, value }) => {
            input.setAttribute(type, value)
        })
        return input
    }

    addLabel(id, text) {
        const label = document.createElement("label")
        label.setAttribute("for", id)
        label.textContent = text
        return label
    }

    addTextArea(attributes, text) {
        const textArea = document.createElement("textarea")
        attributes.forEach(({ type, value }) => {
            textArea.setAttribute(type, value)
        })
        if (text) {
            textArea.textContent = text
        }
        return textArea
    }

    createFolderSelect() {
        const folder = document.createElement("select")
        folder.classList.add("task-folder")

        _Utils_LocalStorage__WEBPACK_IMPORTED_MODULE_1__["default"].get().forEach(item => {
            const option = document.createElement("option")
            option.textContent = item.name
            option.setAttribute("data-folder-id", item.id)
            if (this.folder && item.id === this.folder.id) {
                option.setAttribute("selected", "selected")
            }
            if (!this.folder && item.id === "0") {
                option.setAttribute("selected", "selected")
            }
            folder.appendChild(option)
        })

        return folder
    }

    createErrorBox() {
        const errorBox = document.createElement("div")
        errorBox.classList.add("form-error")
        return errorBox
    }

    createRemoveButton(removeHandler) {
        const removeButton = document.createElement("button")
        removeButton.innerHTML = _Icons_remove__WEBPACK_IMPORTED_MODULE_3__["default"]
        removeButton.setAttribute("type", "button")
        removeButton.addEventListener("click", removeHandler)
        return removeButton
    }

    createSubmit(buttonContent) {
        const button = document.createElement("button")
        button.classList.add("submit-button", "floating-button")
        button.innerHTML = buttonContent || _Icons_save__WEBPACK_IMPORTED_MODULE_2__["default"]
        button.addEventListener("click", e => this.submitButtonHandler(e))
        return button
    }
}

/***/ }),

/***/ "./src/components/Forms/subcomponents/EditFolderForm.js":
/*!**************************************************************!*\
  !*** ./src/components/Forms/subcomponents/EditFolderForm.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditFolderForm)
/* harmony export */ });
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Form */ "./src/components/Forms/Form.js");
/* harmony import */ var _Folders_Folder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Folders/Folder */ "./src/components/Folders/Folder.js");
/* harmony import */ var _UI_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UI/Main */ "./src/components/UI/Main.js");
/* harmony import */ var _Tabs_Calendar_CalendarTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Tabs/Calendar/CalendarTab */ "./src/components/Tabs/Calendar/CalendarTab.js");
/* harmony import */ var _Tasks_TasksList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Tasks/TasksList */ "./src/components/Tasks/TasksList.js");
/* harmony import */ var _Folders_FoldersList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Folders/FoldersList */ "./src/components/Folders/FoldersList.js");







class EditFolderForm extends _Form__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(folder, topBar) {
        super()
        this.folder = folder
        this.topBar = topBar
        this.inputName = this.addInput([
            { type: "type", value: "text" },
            { type: "id", value: "folder-name" },
            { type: "value", value: this.folder.name }
        ])
    }

    createRemoveFolderButton() {
        const removeButton = this.createRemoveButton(() => {
            _Folders_Folder__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](this.folder.id)
            _Folders_FoldersList__WEBPACK_IMPORTED_MODULE_5__["default"].refresh(this.folder.id)
            _Tasks_TasksList__WEBPACK_IMPORTED_MODULE_4__["default"].update(this.dueDate)
            _UI_Main__WEBPACK_IMPORTED_MODULE_2__["default"].closeSlideContainer()
        })
        removeButton.classList.add("task-remove-button")
        return removeButton
    }

    submitButtonHandler(e) {
        e.preventDefault()
        if (!this.validateForm()) {
            return
        }
        this.folder.name = this.inputName.value
        _Folders_Folder__WEBPACK_IMPORTED_MODULE_1__["default"].update(this.folder)

        _Tabs_Calendar_CalendarTab__WEBPACK_IMPORTED_MODULE_3__["default"].refresh(this.dueDate)
        _Folders_FoldersList__WEBPACK_IMPORTED_MODULE_5__["default"].refresh(this.folder.id)
        _Tasks_TasksList__WEBPACK_IMPORTED_MODULE_4__["default"].update(this.dueDate)
        _UI_Main__WEBPACK_IMPORTED_MODULE_2__["default"].closeSlideContainer()
    }

    render() {
        this.htmlElement.appendChild(this.addLabel("folder-name", "Folder name:"))
        this.htmlElement.appendChild(this.inputName)
        this.htmlElement.appendChild(this.createSubmit())
        this.htmlElement.appendChild(this.errorBox)
        this.htmlElement.classList.add("folder-form")
        this.htmlElement.appendChild(this.createRemoveFolderButton())
        return this.htmlElement
    }

}

/***/ }),

/***/ "./src/components/Forms/subcomponents/EditTaskForm.js":
/*!************************************************************!*\
  !*** ./src/components/Forms/subcomponents/EditTaskForm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditTaskForm)
/* harmony export */ });
/* harmony import */ var _Tasks_Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Tasks/Task */ "./src/components/Tasks/Task.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Form */ "./src/components/Forms/Form.js");
/* harmony import */ var _UI_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UI/Main */ "./src/components/UI/Main.js");
/* harmony import */ var _Tabs_Calendar_CalendarTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Tabs/Calendar/CalendarTab */ "./src/components/Tabs/Calendar/CalendarTab.js");
/* harmony import */ var _Tasks_TasksList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Tasks/TasksList */ "./src/components/Tasks/TasksList.js");
/* harmony import */ var _Folders_FoldersList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Folders/FoldersList */ "./src/components/Folders/FoldersList.js");







class EditTaskForm extends _Form__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(taskId) {
        super()
        this.object = { ..._Tasks_Task__WEBPACK_IMPORTED_MODULE_0__["default"].get(taskId) }
        this.folder = this.object.folder
        this.name = this.object.task.name
        this.dueDate = this.object.task.dueDate
        this.inputName = this.addTextArea([
            { type: "id", value: "task-name" }],
            this.object.task.name)
        this.inputDueDate = this.addInput([
            { type: "id", value: "edit-name" },
            { type: "type", value: "date" },
            { type: "value", value: this.object.task.dueDate }
        ])
        this.inputFolder = this.createFolderSelect()
    }

    createRemoveTaskButton() {
        const removeButton = this.createRemoveButton(() => {
            _Tasks_Task__WEBPACK_IMPORTED_MODULE_0__["default"].remove(this.folder, this.object.task)
            _Tabs_Calendar_CalendarTab__WEBPACK_IMPORTED_MODULE_3__["default"].refresh(this.dueDate)
            _Folders_FoldersList__WEBPACK_IMPORTED_MODULE_5__["default"].refresh(this.folder.id)
            _Tasks_TasksList__WEBPACK_IMPORTED_MODULE_4__["default"].update(this.dueDate)
            _UI_Main__WEBPACK_IMPORTED_MODULE_2__["default"].closeSlideContainer()
        })
        removeButton.classList.add("task-remove-button")
        return removeButton
    }

    submitButtonHandler(e) {
        e.preventDefault()
        if (!this.validateForm()) {
            return
        }
        if (!this.inputDueDate.value) {
            this.inputDueDate.value = new Date().toISOString().split("T")[0]
        }

        this.object.task.name = this.inputName.value
        this.object.task.dueDate = this.inputDueDate.value

        _Tasks_Task__WEBPACK_IMPORTED_MODULE_0__["default"].remove(this.folder, this.object.task)
        _Tasks_Task__WEBPACK_IMPORTED_MODULE_0__["default"].add(this.object.task, this.inputFolder.selectedOptions[0].getAttribute("data-folder-id"))

        _Tabs_Calendar_CalendarTab__WEBPACK_IMPORTED_MODULE_3__["default"].refresh(this.dueDate)
        _Folders_FoldersList__WEBPACK_IMPORTED_MODULE_5__["default"].refresh(this.folder.id)
        _Tasks_TasksList__WEBPACK_IMPORTED_MODULE_4__["default"].update(this.dueDate)
        _UI_Main__WEBPACK_IMPORTED_MODULE_2__["default"].closeSlideContainer()
    }

    render() {
        this.htmlElement.appendChild(this.addLabel("task-folder", "Folder:"))
        this.htmlElement.appendChild(this.inputFolder)
        this.htmlElement.appendChild(this.addLabel("task-due-date", "Due date:"))
        this.htmlElement.appendChild(this.inputDueDate)
        this.htmlElement.appendChild(this.inputName)
        this.htmlElement.appendChild(this.errorBox)
        this.htmlElement.appendChild(this.createSubmit())
        this.htmlElement.appendChild(this.createRemoveTaskButton())
        this.htmlElement.classList.add("task-form")
        return this.htmlElement
    }
}

/***/ }),

/***/ "./src/components/Forms/subcomponents/NewFolderForm.js":
/*!*************************************************************!*\
  !*** ./src/components/Forms/subcomponents/NewFolderForm.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewFolderForm)
/* harmony export */ });
/* harmony import */ var _Utils_LocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utils/LocalStorage */ "./src/components/Utils/LocalStorage.js");
/* harmony import */ var _Folders_FoldersList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Folders/FoldersList */ "./src/components/Folders/FoldersList.js");
/* harmony import */ var _Folders_Folder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Folders/Folder */ "./src/components/Folders/Folder.js");
/* harmony import */ var _Tasks_TasksList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Tasks/TasksList */ "./src/components/Tasks/TasksList.js");
/* harmony import */ var _UI_Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UI/Main */ "./src/components/UI/Main.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Form */ "./src/components/Forms/Form.js");







class NewFolderForm extends _Form__WEBPACK_IMPORTED_MODULE_5__["default"] {
    constructor() {
        super()
        this.inputName = this.addInput([
            { type: "type", value: "text" },
            { type: "id", value: "folder-name" },
            { type: "placeholder", value: "Input new folder here" }
        ])
        this.folder = null
    }

    submitButtonHandler(e) {
        e.preventDefault()
        if (!this.validateForm()) {
            return
        }
        this.folder = new _Folders_Folder__WEBPACK_IMPORTED_MODULE_2__["default"](this.inputName.value)
        _Utils_LocalStorage__WEBPACK_IMPORTED_MODULE_0__["default"].add(this.folder)
        _Folders_FoldersList__WEBPACK_IMPORTED_MODULE_1__["default"].refresh(this.folder.id)
        _Tasks_TasksList__WEBPACK_IMPORTED_MODULE_3__["default"].update(this.dueDate)
        _UI_Main__WEBPACK_IMPORTED_MODULE_4__["default"].closeSlideContainer()
    }

    render() {
        this.htmlElement.appendChild(this.addLabel("folder-name", "Folder name:"))
        this.htmlElement.appendChild(this.inputName)
        this.htmlElement.appendChild(this.createSubmit())
        this.htmlElement.appendChild(this.errorBox)
        this.htmlElement.classList.add("folder-form")
        return this.htmlElement
    }
}

/***/ }),

/***/ "./src/components/Forms/subcomponents/NewTaskForm.js":
/*!***********************************************************!*\
  !*** ./src/components/Forms/subcomponents/NewTaskForm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewTaskForm)
/* harmony export */ });
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Form */ "./src/components/Forms/Form.js");
/* harmony import */ var _Tasks_Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Tasks/Task */ "./src/components/Tasks/Task.js");
/* harmony import */ var _Tabs_Calendar_CalendarTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Tabs/Calendar/CalendarTab */ "./src/components/Tabs/Calendar/CalendarTab.js");
/* harmony import */ var _Tasks_TasksList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Tasks/TasksList */ "./src/components/Tasks/TasksList.js");
/* harmony import */ var _UI_Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UI/Main */ "./src/components/UI/Main.js");
/* harmony import */ var _Folders_FoldersList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Folders/FoldersList */ "./src/components/Folders/FoldersList.js");







class NewTaskForm extends _Form__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(date, folder) {
        super()
        this.date = date || new Date().toISOString().split("T")[0]
        this.folder = folder
        this.inputName = this.addTextArea([
            { type: "id", value: "task-name" },
            { type: "placeholder", value: "Input new task here" }
        ])
        this.inputDueDate = this.addInput([
            { type: "type", value: "date" },
            { type: "id", value: "task-due-date" },
            { type: "value", value: this.date }
        ])
        this.inputFolder = this.createFolderSelect()
        this.errorBox = this.createErrorBox()
    }

    submitButtonHandler(e) {
        e.preventDefault()
        if (!this.validateForm()) {
            return
        }
        if (!this.inputDueDate.value) {
            this.inputDueDate.value = new Date().toISOString().split("T")[0]
        }
        const task = new _Tasks_Task__WEBPACK_IMPORTED_MODULE_1__["default"](this.inputName.value, this.inputDueDate.value)
        _Tasks_Task__WEBPACK_IMPORTED_MODULE_1__["default"].add(task, this.inputFolder.selectedOptions[0].getAttribute("data-folder-id"))

        _Tabs_Calendar_CalendarTab__WEBPACK_IMPORTED_MODULE_2__["default"].refresh(this.date)
        _Folders_FoldersList__WEBPACK_IMPORTED_MODULE_5__["default"].refresh(this.inputFolder.selectedOptions[0].getAttribute("data-folder-id"))
        _Tasks_TasksList__WEBPACK_IMPORTED_MODULE_3__["default"].update(this.date)
        _UI_Main__WEBPACK_IMPORTED_MODULE_4__["default"].closeSlideContainer()
    }

    render() {
        this.htmlElement.appendChild(this.addLabel("task-folder", "Folder:"))
        this.htmlElement.appendChild(this.inputFolder)
        this.htmlElement.appendChild(this.addLabel("task-due-date", "Due date:"))
        this.htmlElement.appendChild(this.inputDueDate)
        this.htmlElement.appendChild(this.inputName)
        this.htmlElement.appendChild(this.errorBox)
        this.htmlElement.appendChild(this.createSubmit())
        this.htmlElement.classList.add("task-form")
        return this.htmlElement
    }
}

/***/ }),

/***/ "./src/components/Icons/arrow-back.js":
/*!********************************************!*\
  !*** ./src/components/Icons/arrow-back.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 48 48"><path d="M24 40.15 7.85 24 24 7.85l2.4 2.4L14.35 22.3h25.8v3.4h-25.8L26.4 37.75Z"/></svg>`);

/***/ }),

/***/ "./src/components/Icons/arrow-left.js":
/*!********************************************!*\
  !*** ./src/components/Icons/arrow-left.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 48 48"><path d="M28 34 18 24l10-10Z"/></svg>`);

/***/ }),

/***/ "./src/components/Icons/arrow-right.js":
/*!*********************************************!*\
  !*** ./src/components/Icons/arrow-right.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 48 48"><path d="M20 34V14l10 10Z"/></svg>`);

/***/ }),

/***/ "./src/components/Icons/calendar.js":
/*!******************************************!*\
  !*** ./src/components/Icons/calendar.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 48 48"><path d="M9 44q-1.2 0-2.1-.9Q6 42.2 6 41V10q0-1.2.9-2.1Q7.8 7 9 7h3.25V4h3.25v3h17V4h3.25v3H39q1.2 0 2.1.9.9.9.9 2.1v31q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V19.5H9V41Zm0-24.5h30V10H9Zm0 0V10v6.5ZM24 28q-.85 0-1.425-.575Q22 26.85 22 26q0-.85.575-1.425Q23.15 24 24 24q.85 0 1.425.575Q26 25.15 26 26q0 .85-.575 1.425Q24.85 28 24 28Zm-8 0q-.85 0-1.425-.575Q14 26.85 14 26q0-.85.575-1.425Q15.15 24 16 24q.85 0 1.425.575Q18 25.15 18 26q0 .85-.575 1.425Q16.85 28 16 28Zm16 0q-.85 0-1.425-.575Q30 26.85 30 26q0-.85.575-1.425Q31.15 24 32 24q.85 0 1.425.575Q34 25.15 34 26q0 .85-.575 1.425Q32.85 28 32 28Zm-8 8q-.85 0-1.425-.575Q22 34.85 22 34q0-.85.575-1.425Q23.15 32 24 32q.85 0 1.425.575Q26 33.15 26 34q0 .85-.575 1.425Q24.85 36 24 36Zm-8 0q-.85 0-1.425-.575Q14 34.85 14 34q0-.85.575-1.425Q15.15 32 16 32q.85 0 1.425.575Q18 33.15 18 34q0 .85-.575 1.425Q16.85 36 16 36Zm16 0q-.85 0-1.425-.575Q30 34.85 30 34q0-.85.575-1.425Q31.15 32 32 32q.85 0 1.425.575Q34 33.15 34 34q0 .85-.575 1.425Q32.85 36 32 36Z"/></svg>`);

/***/ }),

/***/ "./src/components/Icons/collapse.js":
/*!******************************************!*\
  !*** ./src/components/Icons/collapse.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 48 48"><path d="M14.15 30.75 12 28.6l12-12 12 11.95-2.15 2.15L24 20.85Z"/></svg>`);

/***/ }),

/***/ "./src/components/Icons/done.js":
/*!**************************************!*\
  !*** ./src/components/Icons/done.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 48 48"><path d="M18.9 36 7.4 24.5l2.45-2.45 9.05 9.05 19.2-19.2 2.45 2.45Z"/></svg>`);

/***/ }),

/***/ "./src/components/Icons/edit.js":
/*!**************************************!*\
  !*** ./src/components/Icons/edit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 48 48"><path d="M9 39h2.2l22.15-22.15-2.2-2.2L9 36.8Zm30.7-24.3-6.4-6.4 2.1-2.1q.85-.85 2.1-.85t2.1.85l2.2 2.2q.85.85.85 2.1t-.85 2.1Zm-2.1 2.1L12.4 42H6v-6.4l25.2-25.2Zm-5.35-1.05-1.1-1.1 2.2 2.2Z"/></svg>`);

/***/ }),

/***/ "./src/components/Icons/expand.js":
/*!****************************************!*\
  !*** ./src/components/Icons/expand.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 48 48"><path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"/></svg>`);

/***/ }),

/***/ "./src/components/Icons/folder.js":
/*!****************************************!*\
  !*** ./src/components/Icons/folder.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 48 48"><path d="M7.05 40q-1.2 0-2.1-.925-.9-.925-.9-2.075V11q0-1.15.9-2.075Q5.85 8 7.05 8h14l3 3h17q1.15 0 2.075.925.925.925.925 2.075v23q0 1.15-.925 2.075Q42.2 40 41.05 40Zm0-29v26h34V14H22.8l-3-3H7.05Zm0 0v26Z"/></svg>`);

/***/ }),

/***/ "./src/components/Icons/home.js":
/*!**************************************!*\
  !*** ./src/components/Icons/home.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 48 48"><path d="M8 42V18L24.1 6 40 18v24H28.3V27.75h-8.65V42Zm3-3h5.65V24.75H31.3V39H37V19.5L24.1 9.75 11 19.5Zm13-14.65Z"/></svg>`);

/***/ }),

/***/ "./src/components/Icons/plus.js":
/*!**************************************!*\
  !*** ./src/components/Icons/plus.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 48 48"><path d="M22.5 38V25.5H10v-3h12.5V10h3v12.5H38v3H25.5V38Z"/></svg>`);

/***/ }),

/***/ "./src/components/Icons/priority.js":
/*!******************************************!*\
  !*** ./src/components/Icons/priority.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 48 48"><path d="M24 34q.7 0 1.175-.475.475-.475.475-1.175 0-.7-.475-1.175Q24.7 30.7 24 30.7q-.7 0-1.175.475-.475.475-.475 1.175 0 .7.475 1.175Q23.3 34 24 34Zm-1.35-7.65h3V13.7h-3ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm.05-3q7.05 0 12-4.975T41 23.95q0-7.05-4.95-12T24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24.05 41ZM24 24Z"/></svg>`);

/***/ }),

/***/ "./src/components/Icons/remove.js":
/*!****************************************!*\
  !*** ./src/components/Icons/remove.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 48 48"><path d="M13.05 42q-1.25 0-2.125-.875T10.05 39V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z"/></svg>`);

/***/ }),

/***/ "./src/components/Icons/save.js":
/*!**************************************!*\
  !*** ./src/components/Icons/save.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 48 48"><path d="M42 13.85V39q0 1.2-.9 2.1-.9.9-2.1.9H9q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h25.15Zm-3 1.35L32.8 9H9v30h30ZM24 35.75q2.15 0 3.675-1.525T29.2 30.55q0-2.15-1.525-3.675T24 25.35q-2.15 0-3.675 1.525T18.8 30.55q0 2.15 1.525 3.675T24 35.75ZM11.65 18.8h17.9v-7.15h-17.9ZM9 15.2V39 9Z"/></svg>`);

/***/ }),

/***/ "./src/components/Icons/star-filled.js":
/*!*********************************************!*\
  !*** ./src/components/Icons/star-filled.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 48 48"><path d="m11.65 44 3.25-14.05L4 20.5l14.4-1.25L24 6l5.6 13.25L44 20.5l-10.9 9.45L36.35 44 24 36.55Z"/></svg>`);

/***/ }),

/***/ "./src/components/Icons/star.js":
/*!**************************************!*\
  !*** ./src/components/Icons/star.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 48 48"><path d="m16.15 37.75 7.85-4.7 7.85 4.75-2.1-8.9 6.9-6-9.1-.8L24 13.7l-3.55 8.35-9.1.8 6.9 6ZM11.65 44l3.25-14.05L4 20.5l14.4-1.25L24 6l5.6 13.25L44 20.5l-10.9 9.45L36.35 44 24 36.55ZM24 26.25Z"/></svg>`);

/***/ }),

/***/ "./src/components/Tabs/Calendar/CalendarTab.js":
/*!*****************************************************!*\
  !*** ./src/components/Tabs/Calendar/CalendarTab.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CalendarTab)
/* harmony export */ });
/* harmony import */ var _calendarTab_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendarTab.css */ "./src/components/Tabs/Calendar/calendarTab.css");
/* harmony import */ var _Calendar_Calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Calendar/Calendar */ "./src/components/Calendar/Calendar.js");
/* harmony import */ var _UI_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UI/Nav */ "./src/components/UI/Nav.js");
/* harmony import */ var _Utils_ConvertDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utils/ConvertDate */ "./src/components/Utils/ConvertDate.js");
/* harmony import */ var _Tasks_TasksList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Tasks/TasksList */ "./src/components/Tasks/TasksList.js");






class CalendarTab {
    static htmlElement = this.createHtmlElement()

    static render() {
        this.clearHtmlElement()
        const today = _Utils_ConvertDate__WEBPACK_IMPORTED_MODULE_3__["default"].toYYYYMMDD(new Date())
        this.htmlElement.appendChild(_Calendar_Calendar__WEBPACK_IMPORTED_MODULE_1__["default"].render())
        this.htmlElement.appendChild(this.createDateContainer(today))
        this.htmlElement.appendChild(_Tasks_TasksList__WEBPACK_IMPORTED_MODULE_4__["default"].render(today))
        _UI_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].setButtonActive("nav-button-calendar")
        return this.htmlElement
    }

    static refresh(date) {
        _Calendar_Calendar__WEBPACK_IMPORTED_MODULE_1__["default"].createWidget(new Date(date))
        _Calendar_Calendar__WEBPACK_IMPORTED_MODULE_1__["default"].highlightSelectedDay(date)
    }

    static createHtmlElement() {
        const element = document.createElement("div")
        element.classList.add("calendar-tab-container")
        return element
    }

    static clearHtmlElement() {
        this.htmlElement.innerHTML = ""
    }

    static updateDateContainer(date) {
        this.clearDateContainer()
        this.setDateContainerContent(date)
    }

    static clearDateContainer() {
        document.querySelector(".calendar-tab-tasks-list-title").innerHTML = ""
    }

    static createDateContainer(date) {
        const dateContainer = document.createElement("div")
        dateContainer.classList.add("calendar-tab-tasks-list-title")
        dateContainer.appendChild(this.setDateContainerContent(date))
        return dateContainer
    }

    static setDateContainerContent(date) {
        const content = `Tasks for ${_Utils_ConvertDate__WEBPACK_IMPORTED_MODULE_3__["default"].toMoreHuman(date)}`
        const wrapper = document.createElement("div")
        wrapper.textContent = content
        const dateContainer = document.querySelector(".calendar-tab-tasks-list-title")
        if (dateContainer) dateContainer.appendChild(wrapper)
        if (!dateContainer) return wrapper
    }
}

/***/ }),

/***/ "./src/components/Tabs/Folders/FoldersTab.js":
/*!***************************************************!*\
  !*** ./src/components/Tabs/Folders/FoldersTab.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FoldersTab)
/* harmony export */ });
/* harmony import */ var _foldersTab_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foldersTab.css */ "./src/components/Tabs/Folders/foldersTab.css");
/* harmony import */ var _UI_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../UI/Nav */ "./src/components/UI/Nav.js");
/* harmony import */ var _Forms_subcomponents_NewFolderForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Forms/subcomponents/NewFolderForm */ "./src/components/Forms/subcomponents/NewFolderForm.js");
/* harmony import */ var _UI_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UI/Main */ "./src/components/UI/Main.js");
/* harmony import */ var _Folders_FoldersList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Folders/FoldersList */ "./src/components/Folders/FoldersList.js");






class FoldersTab {
    static htmlElement = this.createHtmlElement()

    static render(folderId) {
        this.clearHtmlElement()
        this.htmlElement.appendChild(this.createNewFolderButton())
        this.htmlElement.appendChild(_Folders_FoldersList__WEBPACK_IMPORTED_MODULE_4__["default"].render(folderId))
        _UI_Nav__WEBPACK_IMPORTED_MODULE_1__["default"].setButtonActive("nav-button-folders")
        return this.htmlElement
    }

    static createHtmlElement() {
        const element = document.createElement("div")
        element.classList.add("folders-tab-container")
        return element
    }

    static clearHtmlElement() {
        this.htmlElement.innerHTML = ""
    }

    static createNewFolderButton() {
        const newFolderButton = document.createElement("button")
        newFolderButton.classList.add("folder-new-button")
        newFolderButton.textContent = "+ Add folder"
        newFolderButton.addEventListener("click", () => _UI_Main__WEBPACK_IMPORTED_MODULE_3__["default"].showSlideContent(new _Forms_subcomponents_NewFolderForm__WEBPACK_IMPORTED_MODULE_2__["default"]().render()))

        const buttonContainer = document.createElement("div")
        buttonContainer.classList.add("folder-new-button-wrapper")
        buttonContainer.appendChild(newFolderButton)

        return buttonContainer
    }
}

/***/ }),

/***/ "./src/components/Tabs/Home/HomeTab.js":
/*!*********************************************!*\
  !*** ./src/components/Tabs/Home/HomeTab.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomeTab)
/* harmony export */ });
/* harmony import */ var _UI_Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../UI/Nav */ "./src/components/UI/Nav.js");
/* harmony import */ var _homeTab_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeTab.css */ "./src/components/Tabs/Home/homeTab.css");
/* harmony import */ var _Tasks_TasksOverview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Tasks/TasksOverview */ "./src/components/Tasks/TasksOverview.js");




class HomeTab {
    static htmlElement = this.createHtmlElement()

    static render() {
        this.clearHtmlElement()
        this.htmlElement.appendChild(this.createContent())
        _UI_Nav__WEBPACK_IMPORTED_MODULE_0__["default"].setButtonActive("nav-button-home")
        return this.htmlElement
    }

    static createHtmlElement() {
        const element = document.createElement("div")
        element.classList.add("home-tab-container")
        return element
    }

    static clearHtmlElement() {
        this.htmlElement.innerHTML = ""
    }

    static createContent() {
        const homeContentContainer = document.createElement("div")
        homeContentContainer.classList.add("home-content-container")

        homeContentContainer.appendChild(this.createHeader())
        homeContentContainer.appendChild(_Tasks_TasksOverview__WEBPACK_IMPORTED_MODULE_2__["default"].render())

        return homeContentContainer
    }

    static createHeader() {
        const welcomeMessage = document.createElement("h1")
        welcomeMessage.textContent = "To-Do List"

        const header = document.createElement("header")
        header.appendChild(welcomeMessage)

        return header
    }
}

/***/ }),

/***/ "./src/components/Tasks/Task.js":
/*!**************************************!*\
  !*** ./src/components/Tasks/Task.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var _Calendar_Calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Calendar/Calendar */ "./src/components/Calendar/Calendar.js");
/* harmony import */ var _Forms_subcomponents_EditTaskForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Forms/subcomponents/EditTaskForm */ "./src/components/Forms/subcomponents/EditTaskForm.js");
/* harmony import */ var _Utils_LocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/LocalStorage */ "./src/components/Utils/LocalStorage.js");
/* harmony import */ var _TasksList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TasksList */ "./src/components/Tasks/TasksList.js");
/* harmony import */ var _Tabs_Calendar_CalendarTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Tabs/Calendar/CalendarTab */ "./src/components/Tabs/Calendar/CalendarTab.js");
/* harmony import */ var _Folders_FoldersList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Folders/FoldersList */ "./src/components/Folders/FoldersList.js");
/* harmony import */ var _task_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task.css */ "./src/components/Tasks/task.css");









class Task {
    constructor(name, dueDate) {
        this.id = (0,nanoid__WEBPACK_IMPORTED_MODULE_7__.nanoid)()
        this.checked = false
        this.important = false
        this.name = name
        this.dueDate = dueDate
    }

    static get(taskId) {
        const folders = _Utils_LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].get()
        let wantedTask
        let wantedFolder
        folders.forEach(folder => {
            folder.tasks.filter(task => {
                if (task.id === taskId) {
                    wantedTask = task
                    wantedFolder = folder
                }
            })
        })
        return { task: wantedTask, folder: wantedFolder }
    }

    static getAll() {
        const folders = _Utils_LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].get()
        const tasks = []
        folders.forEach(folder => {
            folder.tasks.filter(task => {
                tasks.push(task)
            })
        })
        return tasks
    }

    static getAllPendingTasks() {
        return this.getAll().filter(task => !task.checked)
    }

    static getAllCompletedTasks() {
        return this.getAll().filter(task => task.checked)
    }

    static add(task, folderId) {
        const folder = _Utils_LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].getFolder(folderId)
        folder.tasks.unshift(task)
        _Utils_LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].saveFolder(folder)
    }

    static check(taskId) {
        const { task, folder } = this.get(taskId)
        folder.tasks.find(item => {
            if (item.id === task.id) {
                item.checked = !item.checked
            }
        })
        _Utils_LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].saveFolder(folder)
        _Tabs_Calendar_CalendarTab__WEBPACK_IMPORTED_MODULE_4__["default"].refresh(task.dueDate)
        _Folders_FoldersList__WEBPACK_IMPORTED_MODULE_5__["default"].refresh(folder.id)
        _TasksList__WEBPACK_IMPORTED_MODULE_3__["default"].update(task.dueDate)
    }

    static important(taskId) {
        const { task, folder } = this.get(taskId)
        folder.tasks.find(item => {
            if (item.id === task.id) {
                item.important = !item.important
            }
        })
        _Utils_LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].saveFolder(folder)
        _Tabs_Calendar_CalendarTab__WEBPACK_IMPORTED_MODULE_4__["default"].refresh(task.dueDate)
        _Folders_FoldersList__WEBPACK_IMPORTED_MODULE_5__["default"].refresh(folder.id)
        _TasksList__WEBPACK_IMPORTED_MODULE_3__["default"].update(task.dueDate)
    }

    static edit(folder, task) {
        const container = document.querySelector(`[data-task-id="${task.id}"]`)
        container.innerHTML = ""
        const form = new _Forms_subcomponents_EditTaskForm__WEBPACK_IMPORTED_MODULE_1__["default"](task, folder)
        form.render().forEach(element => container.appendChild(element))
    }

    static remove(folder, task) {
        folder.tasks = folder.tasks.filter(item => item.id !== task.id)
        _Utils_LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].saveFolder(folder)
        _Calendar_Calendar__WEBPACK_IMPORTED_MODULE_0__["default"].createWidget(new Date(task.dueDate))
    }

    static findTasksForDate(date) {
        const folders = _Utils_LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].get()
        const tasks = []
        const tasksDone = []
        folders.forEach(folder => {
            folder.tasks.forEach(task => {
                if (task.dueDate === date) {
                    if (task.checked) {
                        tasksDone.push({ task, folder })
                    }
                    if (!task.checked) {
                        tasks.push({ task, folder })
                    }
                }
            })
        })
        return tasks.concat(tasksDone)
    }
}

/***/ }),

/***/ "./src/components/Tasks/TasksList.js":
/*!*******************************************!*\
  !*** ./src/components/Tasks/TasksList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TasksList)
/* harmony export */ });
/* harmony import */ var _Forms_subcomponents_NewTaskForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Forms/subcomponents/NewTaskForm */ "./src/components/Forms/subcomponents/NewTaskForm.js");
/* harmony import */ var _Forms_subcomponents_EditTaskForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Forms/subcomponents/EditTaskForm */ "./src/components/Forms/subcomponents/EditTaskForm.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ "./src/components/Tasks/Task.js");
/* harmony import */ var _UI_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/Main */ "./src/components/UI/Main.js");
/* harmony import */ var _Icons_folder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icons/folder */ "./src/components/Icons/folder.js");
/* harmony import */ var _Icons_star__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Icons/star */ "./src/components/Icons/star.js");
/* harmony import */ var _Icons_star_filled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Icons/star-filled */ "./src/components/Icons/star-filled.js");
/* harmony import */ var _Folders_Folder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Folders/Folder */ "./src/components/Folders/Folder.js");
/* harmony import */ var _Icons_done__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Icons/done */ "./src/components/Icons/done.js");










class TasksList {
    static htmlElement = this.createHtmlElement()

    static render(date) {
        this.clearHtmlElement()
        this.htmlElement.appendChild(this.createNewTaskButton(date))
        this.htmlElement.appendChild(this.showTasks(_Task__WEBPACK_IMPORTED_MODULE_2__["default"].findTasksForDate(date), date))
        return this.htmlElement
    }

    static createHtmlElement() {
        const htmlElement = document.createElement("div")
        htmlElement.classList.add("tasks-list-container")
        return htmlElement
    }

    static clearHtmlElement() {
        this.htmlElement.innerHTML = ""
    }

    static update(date) {
        this.clearHtmlElement()
        this.createHtmlElement()
        this.htmlElement.appendChild(this.createNewTaskButton(date))
        this.htmlElement.appendChild(this.showTasks(_Task__WEBPACK_IMPORTED_MODULE_2__["default"].findTasksForDate(date), date))
    }

    static createList() {
        const list = document.createElement("ul")
        list.classList.add("tasks-list")
        return list
    }

    static showTasks(tasks) {
        if (tasks.length === 0) {
            return this.createEmptyListMessage()
        }
        const list = this.createList()
        tasks.forEach((task) => this.addTaskToList(list, task))
        return list
    }

    static addTaskToList(list, { task, folder }) {
        const listItem = document.createElement("li")
        listItem.appendChild(this.createTaskHtmlElement(task, folder))
        list.appendChild(listItem)
    }

    static createEmptyListMessage() {
        const message = document.createElement("ul")
        message.classList.add("tasks-list", "tasks-list-empty")
        message.innerHTML = "No tasks. <br> Click + button to create one."
        return message
    }

    static createNewTaskButton(date) {
        const newTaskButton = document.createElement("button")
        newTaskButton.classList.add("floating-button")
        newTaskButton.textContent = "+"
        newTaskButton.addEventListener("click", () => _UI_Main__WEBPACK_IMPORTED_MODULE_3__["default"].showSlideContent(new _Forms_subcomponents_NewTaskForm__WEBPACK_IMPORTED_MODULE_0__["default"](date).render()))
        return newTaskButton
    }

    static createTaskHtmlElement(task, folder) {
        const container = document.createElement("div")
        container.classList.add("task-container")
        container.setAttribute("data-task-id", task.id)
        container.addEventListener("click", () => this.handleTaskClick(task.id))

        const check = document.createElement("button")
        check.classList.add("task-check-button")
        check.innerHTML = _Icons_done__WEBPACK_IMPORTED_MODULE_8__["default"]
        check.addEventListener("click", e => this.handleCheckButtonClick(e, task.id))
        container.appendChild(check)

        if (task.checked) {
            container.classList.add("task-container-checked")
            check.classList.add("task-check-button-checked")
        }

        const folderContainer = document.createElement("div")
        folderContainer.classList.add("task-folder-name")
        folderContainer.innerHTML = _Icons_folder__WEBPACK_IMPORTED_MODULE_4__["default"]
        container.appendChild(folderContainer)
        folderContainer.addEventListener("click", e => this.handleFolderClick(e, folder.id))

        const folderName = document.createElement("p")
        folderName.textContent = folder.name
        folderContainer.appendChild(folderName)

        const name = document.createElement("div")
        name.classList.add("task-text")
        name.textContent = task.name
        container.appendChild(name)

        const important = document.createElement("button")
        important.classList.add("task-important-button")
        important.innerHTML = task.important ? _Icons_star_filled__WEBPACK_IMPORTED_MODULE_6__["default"] : _Icons_star__WEBPACK_IMPORTED_MODULE_5__["default"]
        important.addEventListener("click", e => this.handleImportantButtonClick(e, task.id))
        container.appendChild(important)

        if (task.important) {
            important.classList.add("task-important-button-active")
        }

        return container
    }

    static handleTaskClick(taskId) {
        const form = new _Forms_subcomponents_EditTaskForm__WEBPACK_IMPORTED_MODULE_1__["default"](taskId)
        _UI_Main__WEBPACK_IMPORTED_MODULE_3__["default"].showSlideContent(form.render())
    }

    static handleFolderClick(e, folderId) {
        e.stopPropagation()
        _Folders_Folder__WEBPACK_IMPORTED_MODULE_7__["default"].show(folderId)
    }

    static handleCheckButtonClick(e, taskId) {
        e.stopPropagation()
        _Task__WEBPACK_IMPORTED_MODULE_2__["default"].check(taskId)
    }

    static handleImportantButtonClick(e, taskId) {
        e.stopPropagation()
        _Task__WEBPACK_IMPORTED_MODULE_2__["default"].important(taskId)
    }
}

/***/ }),

/***/ "./src/components/Tasks/TasksOverview.js":
/*!***********************************************!*\
  !*** ./src/components/Tasks/TasksOverview.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TasksOverview)
/* harmony export */ });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/components/Tasks/Task.js");
/* harmony import */ var _Utils_ConvertDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/ConvertDate */ "./src/components/Utils/ConvertDate.js");
/* harmony import */ var _Folders_Folder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Folders/Folder */ "./src/components/Folders/Folder.js");
/* harmony import */ var _Icons_star__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icons/star */ "./src/components/Icons/star.js");
/* harmony import */ var _Icons_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icons/calendar */ "./src/components/Icons/calendar.js");
/* harmony import */ var _Icons_priority__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Icons/priority */ "./src/components/Icons/priority.js");







class TasksOverview {

    static render() {
        const tasksOverviewContainer = document.createElement("section")
        tasksOverviewContainer.classList.add("tasks-overview-container")

        tasksOverviewContainer.appendChild(this.createTasksOverviewLabel())

        tasksOverviewContainer.appendChild(this.createTaskCounterWidget(_Task__WEBPACK_IMPORTED_MODULE_0__["default"].getAllPendingTasks().length, "Pending tasks"))
        tasksOverviewContainer.appendChild(this.createTaskCounterWidget(_Task__WEBPACK_IMPORTED_MODULE_0__["default"].getAllCompletedTasks().length, "Completed tasks"))


        tasksOverviewContainer.appendChild(this.createUpcomingTasksWidget(0))
        tasksOverviewContainer.appendChild(this.createImportantTasksWidget())
        tasksOverviewContainer.appendChild(this.createUpcomingTasksWidget(7))
        tasksOverviewContainer.appendChild(this.createMissedTasksWidget())


        return tasksOverviewContainer
    }

    static createTasksOverviewLabel() {
        const tasksOverviewLabel = document.createElement("div")
        tasksOverviewLabel.classList.add("home-section-label")
        tasksOverviewLabel.textContent = "Tasks overview"
        return tasksOverviewLabel
    }

    static createTaskCounterWidget(number, label) {
        const taskCounterWidget = document.createElement("div")
        taskCounterWidget.classList.add("task-widget", "task-counter-widget")

        const taskCounter = document.createElement("div")
        taskCounter.classList.add("task-counter")
        taskCounter.textContent = number
        taskCounterWidget.appendChild(taskCounter)

        const taskLabel = document.createElement("div")
        taskLabel.classList.add("home-widget-label")
        taskLabel.textContent = label
        taskCounterWidget.appendChild(taskLabel)

        return taskCounterWidget
    }

    static createUpcomingTasksWidget(numberOfDays) {
        const container = this.createListWidget()
        const date = new Date()

        if (numberOfDays === 0) {
            container.childNodes[0].textContent = "Tasks for today"

            const tasks = _Task__WEBPACK_IMPORTED_MODULE_0__["default"].findTasksForDate(_Utils_ConvertDate__WEBPACK_IMPORTED_MODULE_1__["default"].toYYYYMMDD(date))
            tasks.forEach(({ task, folder }) => {
                if (!task.checked) {
                    container.childNodes[1].appendChild(this.createListWidgetListItem(task, folder))
                }
            })

            return container
        }

        if (numberOfDays !== 0) {
            container.childNodes[0].textContent = `Tasks for next ${numberOfDays > 1 ? `${numberOfDays} days` : "day"}`

            for (let i = 0; i < numberOfDays; i++) {
                date.setDate(date.getDate() + 1)
                const tasks = _Task__WEBPACK_IMPORTED_MODULE_0__["default"].findTasksForDate(_Utils_ConvertDate__WEBPACK_IMPORTED_MODULE_1__["default"].toYYYYMMDD(date))
                tasks.forEach(({ task, folder }) => {
                    if (!task.checked) {
                        container.childNodes[1].appendChild(this.createListWidgetListItem(task, folder))
                    }
                })
            }

            return container
        }
    }

    static createImportantTasksWidget() {
        const container = this.createListWidget()
        const tomorrow = _Utils_ConvertDate__WEBPACK_IMPORTED_MODULE_1__["default"].getNextDay(new Date)
        container.childNodes[0].textContent = "Important tasks for next 3 days"

        for (let i = 0; i < 3; i++) {
            const tasks = _Task__WEBPACK_IMPORTED_MODULE_0__["default"].findTasksForDate(_Utils_ConvertDate__WEBPACK_IMPORTED_MODULE_1__["default"].toYYYYMMDD(tomorrow))
            tasks.forEach(({ task, folder }) => {
                if (task.important && !task.checked) {
                    container.childNodes[1].appendChild(this.createListWidgetListItem(task, folder))
                }
            })
            tomorrow.setDate(tomorrow.getDate() + 1)
        }

        return container
    }

    static createMissedTasksWidget() {
        const container = this.createListWidget()
        container.childNodes[0].textContent = "Missed tasks"

        const tasks = _Task__WEBPACK_IMPORTED_MODULE_0__["default"].getAllPendingTasks()
        const today = _Utils_ConvertDate__WEBPACK_IMPORTED_MODULE_1__["default"].toYYYYMMDD(new Date())
        tasks.forEach(item => {
            if (!item.checked && item.dueDate < today) {
                const { task, folder } = _Task__WEBPACK_IMPORTED_MODULE_0__["default"].get(item.id)
                container.childNodes[1].appendChild(this.createListWidgetListItem(task, folder, _Icons_priority__WEBPACK_IMPORTED_MODULE_5__["default"]))
            }
        })

        return container
    }

    static createListWidget() {
        const container = document.createElement("div")
        container.classList.add("task-widget", "upcoming-tasks-wigdet")

        const label = document.createElement("div")
        label.classList.add("home-widget-label", "upcoming-tasks-label")
        container.appendChild(label)

        const list = document.createElement("ul")
        container.appendChild(list)

        return container
    }

    static createListWidgetListItem(task, folder) {
        const listItem = document.createElement("li")
        listItem.classList.add("upcoming-task")

        const calendarIcon = document.createElement("div")
        calendarIcon.innerHTML = task.important ? _Icons_star__WEBPACK_IMPORTED_MODULE_3__["default"] : _Icons_calendar__WEBPACK_IMPORTED_MODULE_4__["default"]
        calendarIcon.classList.add("upcoming-task-icon")
        listItem.appendChild(calendarIcon)

        const name = document.createElement("div")
        name.textContent = task.name
        name.classList.add("upcoming-task-name")
        name.addEventListener("click", () => _Folders_Folder__WEBPACK_IMPORTED_MODULE_2__["default"].show(folder.id))
        listItem.appendChild(name)

        const dueDate = document.createElement("div")
        dueDate.textContent = _Utils_ConvertDate__WEBPACK_IMPORTED_MODULE_1__["default"].YYYYMMDDtoDDMM(task.dueDate)
        dueDate.classList.add("upcoming-task-date")
        listItem.appendChild(dueDate)

        return listItem
    }
}

/***/ }),

/***/ "./src/components/UI/Main.js":
/*!***********************************!*\
  !*** ./src/components/UI/Main.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var _Icons_arrow_back__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Icons/arrow-back */ "./src/components/Icons/arrow-back.js");
/* harmony import */ var _Utils_FocusTrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/FocusTrap */ "./src/components/Utils/FocusTrap.js");
// import ArrowBackIcon from '../Icons/arrow-back'

// export default class Main {
//     constructor() {
//         this.main
//     }

//     static render(output) {
//         this.main = document.createElement("main")
//         output.appendChild(this.main)
//     }

//     static changeContent(content) {
//         if (this.main.querySelector(".slide-container")) {
//             this.closeSlideContainer()
//         }
//         this.main.innerHTML = ""
//         this.main.appendChild(content)
//     }

//     static showSlideContent(content) {
//         const container = this.createSlideContainer()
//         const containerContent = container.querySelector(".slide-container-content")
//         containerContent.appendChild(content)
//         document.querySelector("main").classList.add("disabled")
//         this.main.appendChild(container)
//         this.focusTrap(containerContent)
//     }

//     static createSlideContainer() {
//         const slideContainer = document.createElement("div")
//         slideContainer.classList.add("slide-container", "slide-in")

//         const slideContainerContent = document.createElement("div")
//         slideContainerContent.classList.add("slide-container-content")
//         slideContainer.appendChild(slideContainerContent)

//         const backButton = document.createElement("button")
//         backButton.classList.add("slide-back-button")
//         backButton.innerHTML = ArrowBackIcon
//         slideContainerContent.appendChild(backButton)

//         backButton.addEventListener("click", () => this.closeSlideContainer())
//         document.addEventListener("keydown", this.handleEscClick, true)

//         return slideContainer
//     }

//     static closeSlideContainer() {
//         const container = document.querySelector(".slide-container")
//         document.removeEventListener("keydown", this.handleEscClick, true)
//         container.classList.remove("slide-in")
//         container.classList.add("slide-out")
//         document.querySelector("main").classList.remove("disabled")
//         setTimeout(() => container.remove(), 500)
//     }

//     static handleEscClick(e) {
//         if (e.key === "Escape") {
//             Main.closeSlideContainer()
//         }
//     }

//     static focusTrap(container) {
//         const containerElements = Array.from(container.querySelectorAll("button, input, select, textarea"))
//         const navElements = Array.from(document.querySelector("nav").querySelectorAll("button"))
//         const focusableElements = containerElements.concat(navElements)

//         const firstTextInput = container.querySelectorAll(`input[type="text"], textarea`)[0]
//         let firstElement = focusableElements[0]
//         let lastElement = focusableElements[focusableElements.length - 1]
//         let currentElement = null

//         firstTextInput.focus()
//         currentElement = firstTextInput || firstElement

//         document.addEventListener("focus", e => {
//             e.preventDefault()
//             if (focusableElements.includes(e.target)) {
//                 currentElement = e.target
//             }
//             if(!focusableElements.includes(e.target)) {
//                 if (currentElement === lastElement) {
//                     firstElement.focus()
//                 } else {    
//                     firstElement.focus()
//                 }
//                 currentElement = document.activeElement
//             }
//         }, true)
//     }


// }



class Main {
    constructor() {
        this.main
    }

    static render(output) {
        this.main = document.createElement("main")
        output.appendChild(this.main)
    }

    static changeContent(content) {
        if (this.main.querySelector(".slide-container")) {
            this.closeSlideContainer()
        }
        this.main.innerHTML = ""
        this.main.appendChild(content)
    }

    static showSlideContent(content) {
        const container = this.createSlideContainer()
        const containerContent = container.querySelector(".slide-container-content")
        containerContent.appendChild(content)
        document.querySelector("main").classList.add("disabled")
        this.main.appendChild(container)
        _Utils_FocusTrap__WEBPACK_IMPORTED_MODULE_1__["default"].activate(containerContent)
    }

    static createSlideContainer() {
        const slideContainer = document.createElement("div")
        slideContainer.classList.add("slide-container", "slide-in")

        const slideContainerContent = document.createElement("div")
        slideContainerContent.classList.add("slide-container-content")
        slideContainer.appendChild(slideContainerContent)

        const backButton = document.createElement("button")
        backButton.classList.add("slide-back-button")
        backButton.innerHTML = _Icons_arrow_back__WEBPACK_IMPORTED_MODULE_0__["default"]
        slideContainerContent.appendChild(backButton)

        backButton.addEventListener("click", () => this.closeSlideContainer())
        document.addEventListener("keydown", this.handleEscClick, true)

        return slideContainer
    }

    static closeSlideContainer() {
        const container = document.querySelector(".slide-container")
        document.removeEventListener("keydown", this.handleEscClick, true)
        container.classList.remove("slide-in")
        container.classList.add("slide-out")
        document.querySelector("main").classList.remove("disabled")
        setTimeout(() => container.remove(), 500)
        _Utils_FocusTrap__WEBPACK_IMPORTED_MODULE_1__["default"].deactivate()
    }

    static handleEscClick(e) {
        if (e.key === "Escape") {
            Main.closeSlideContainer()
        }
    }
}

/***/ }),

/***/ "./src/components/UI/Nav.js":
/*!**********************************!*\
  !*** ./src/components/UI/Nav.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var _Icons_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Icons/home */ "./src/components/Icons/home.js");
/* harmony import */ var _Icons_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icons/calendar */ "./src/components/Icons/calendar.js");
/* harmony import */ var _Icons_folder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons/folder */ "./src/components/Icons/folder.js");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Main */ "./src/components/UI/Main.js");
/* harmony import */ var _Tabs_Home_HomeTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Tabs/Home/HomeTab */ "./src/components/Tabs/Home/HomeTab.js");
/* harmony import */ var _Tabs_Calendar_CalendarTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Tabs/Calendar/CalendarTab */ "./src/components/Tabs/Calendar/CalendarTab.js");
/* harmony import */ var _Tabs_Folders_FoldersTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Tabs/Folders/FoldersTab */ "./src/components/Tabs/Folders/FoldersTab.js");








class Nav {

    static nav = document.createElement("nav")

    static render(output) {
        this.nav.appendChild(this.createControlsPanel())
        output.appendChild(this.nav)
    }

    static createControlsPanel() {
        const wrapper = document.createElement("div")
        wrapper.classList.add("nav-buttons-wrapper")

        const buttonsArray = [
            {
                icon: _Icons_home__WEBPACK_IMPORTED_MODULE_0__["default"],
                text: "home",
                clickHandler: () => _Main__WEBPACK_IMPORTED_MODULE_3__["default"].changeContent(_Tabs_Home_HomeTab__WEBPACK_IMPORTED_MODULE_4__["default"].render())
            },
            {
                icon: _Icons_calendar__WEBPACK_IMPORTED_MODULE_1__["default"],
                text: "calendar",
                clickHandler: () => _Main__WEBPACK_IMPORTED_MODULE_3__["default"].changeContent(_Tabs_Calendar_CalendarTab__WEBPACK_IMPORTED_MODULE_5__["default"].render())
            },
            {
                icon: _Icons_folder__WEBPACK_IMPORTED_MODULE_2__["default"],
                text: "folders",
                clickHandler: () => _Main__WEBPACK_IMPORTED_MODULE_3__["default"].changeContent(_Tabs_Folders_FoldersTab__WEBPACK_IMPORTED_MODULE_6__["default"].render())
            },
        ]

        buttonsArray.forEach(item => {
            wrapper.appendChild(this.createButton(item))
        })

        return wrapper
    }

    static createButton({ icon, text, clickHandler }) {
        const button = document.createElement("button")
        button.classList.add("nav-button")
        button.setAttribute("id", `nav-button-${text}`)
        button.addEventListener("click", () => this.handleButtonClick(button, clickHandler))

        const iconContainer = document.createElement("div")
        iconContainer.classList.add("nav-button-icon-container")
        iconContainer.innerHTML = icon
        button.appendChild(iconContainer)

        const textContainer = document.createElement("div")
        textContainer.classList.add("nav-button-text-container")
        textContainer.textContent = text
        button.appendChild(textContainer)

        return button
    }

    static removeActiveClassFromButtons() {
        this.nav.querySelectorAll("button").forEach(button => button.classList.remove("nav-button-active"))
    }

    static setButtonActive(id) {
        this.removeActiveClassFromButtons()
        document.querySelector(`#${id}`).classList.add("nav-button-active")
    }

    static handleButtonClick(button, clickHandler) {
        this.setButtonActive(button.id)
        clickHandler()
    }
}

/***/ }),

/***/ "./src/components/Utils/ConvertDate.js":
/*!*********************************************!*\
  !*** ./src/components/Utils/ConvertDate.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConvertDate)
/* harmony export */ });
class ConvertDate {
    static toYYYYMMDD(date) {
        const year = date.getFullYear()
        const month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
        const day = date.getDate() < 10 ? "0" + (date.getDate()) : date.getDate()
        return `${year}-${month}-${day}`
    }

    static YYYYMMDDtoDDMM(date) {
        return `${date.slice(-2)}-${date.slice(5, 7)}`
    }

    static getDay(date) {
        const d = new Date(date.getFullYear(), date.getMonth(), 1)
        return (d.getDay() === 0 ? 7 : d.getDay())
    }

    static getNextDay(date) {
        const d = new Date(date)
        d.setDate(d.getDate() + 1)
        return d
    }

    static toMoreHuman(date) {
        const today = this.toYYYYMMDD(new Date())
        if (date === today) {
            return "today"
        }
        if (new Date(date).setDate(new Date(date).getDate()) === new Date(today).setDate(new Date(today).getDate() - 1)) {
            return "yesterday"
        }
        if (new Date(date).setDate(new Date(date).getDate()) === new Date(today).setDate(new Date(today).getDate() + 1)) {
            return "tomorrow"
        }
        return `${date.slice(-2)}.${date.slice(5, 7)}.${date.slice(0, 4)}`
    }

}

/***/ }),

/***/ "./src/components/Utils/FocusTrap.js":
/*!*******************************************!*\
  !*** ./src/components/Utils/FocusTrap.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FocusTrap)
/* harmony export */ });
class FocusTrap {
    static focusableElements = null
    static firstElement = null
    static lastElement = null
    static currentElement = null
    static boundFocusHandler = this.handleTrapFocus.bind(this)

    static activate(container) {
        const containerElements = Array.from(container.querySelectorAll("button, input, select, textarea"))
        const navElements = Array.from(document.querySelector("nav").querySelectorAll("button"))
        this.focusableElements = containerElements.concat(navElements)

        const firstTextInput = container.querySelectorAll(`input[type="text"], textarea`)[0]
        this.firstElement = this.focusableElements[0]
        this.lastElement = this.focusableElements[this.focusableElements.length - 1]

        firstTextInput.focus()
        this.currentElement = firstTextInput || this.firstElement

        document.addEventListener("focus", this.boundFocusHandler, true)
    }

    static deactivate() {
        document.removeEventListener("focus", this.boundFocusHandler, true)
    }

    static handleTrapFocus(e) {
        e.preventDefault()
        if (this.focusableElements.includes(e.target)) {
            this.currentElement = e.target
        }
        if (!this.focusableElements.includes(e.target)) {
            if (this.currentElement === this.lastElement) {
                this.firstElement.focus()
            } else {
                this.firstElement.focus()
            }
            this.currentElement = document.activeElement
        }
    }

}

/***/ }),

/***/ "./src/components/Utils/LocalStorage.js":
/*!**********************************************!*\
  !*** ./src/components/Utils/LocalStorage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocalStorage)
/* harmony export */ });
class LocalStorage {
    static itemName = "todo-projects"

    static set(item) {
        localStorage.setItem(this.itemName, JSON.stringify(item))
    }

    static add(item) {
        const array = this.get()
        array.push(item)
        localStorage.setItem(this.itemName, JSON.stringify(array))
    }

    static remove(item) {
        const array = this.get()
        localStorage.setItem(this.itemName, JSON.stringify(array.filter(folder => folder.id !== item.id)))
    }

    static get() {
        return JSON.parse(localStorage.getItem(this.itemName)) || []
    }

    static drop() {
        localStorage.setItem(this.itemName, JSON.stringify(""))
    }

    static getFolder(id) {
        return this.get().find(folder => folder.id === id)
    }

    static saveFolder(folder) {
        const array = this.get()
        const currentFolderIndex = array.findIndex(item => item.id === folder.id)
        if (currentFolderIndex === -1) {
            array.push(folder)
        }
        if (currentFolderIndex !== -1) {
            array[currentFolderIndex] = folder
        }
        localStorage.setItem(this.itemName, JSON.stringify(array))
    }

    static isEmpty() {
        return !this.get()[0]
    }
}

/***/ }),

/***/ "./src/components/Utils/TouchEvent.js":
/*!********************************************!*\
  !*** ./src/components/Utils/TouchEvent.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TouchEvent)
/* harmony export */ });
class TouchEvent {

    static threshold = 70

    constructor(touchStart, touchEnd) {
        this.touchStart = touchStart
        this.touchEnd = touchEnd || null
    }

    setEndEvent(e) {
        this.touchEnd = e
    }

    getSwipeDirection() {
        const start = this.touchStart.changedTouches[0]
        const end = this.touchEnd.changedTouches[0]

        if (start.screenX - end.screenX > TouchEvent.threshold) {
            return "left"
        }

        if (start.screenX - end.screenX < -TouchEvent.threshold) {
            return "right"
        }

        if (start.screenY - end.screenY > TouchEvent.threshold) {
            return "up"
        }

        if (start.screenY - end.screenY < -TouchEvent.threshold) {
            return "down"
        }
    }

    isSwipeLeft() {
        return this.getSwipeDirection() === "left" || false
    }

    isSwipeRight() {
        return this.getSwipeDirection() === "right" || false
    }

    isSwipeUp() {
        return this.getSwipeDirection() === "up" || false
    }

    isSwipeDown() {
        return this.getSwipeDirection() === "down" || false
    }
}

/***/ }),

/***/ "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"15\" viewBox=\"0 0 24 24\"><path fill=\"gray\" d=\"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z\"/></svg>":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 24 24"><path fill="gray" d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/></svg> ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"15\" viewBox=\"0 0 24 24\"><path fill=\"gray\" d=\"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z\"/></svg>";

/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customAlphabet": () => (/* binding */ customAlphabet),
/* harmony export */   "customRandom": () => (/* binding */ customRandom),
/* harmony export */   "nanoid": () => (/* binding */ nanoid),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "urlAlphabet": () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet)
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) =>
  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
    byte &= 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte > 62) {
      id += '-'
    } else {
      id += '_'
    }
    return id
  }, '')


/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urlAlphabet": () => (/* binding */ urlAlphabet)
/* harmony export */ });
const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



document.addEventListener("DOMContentLoaded", _components_App__WEBPACK_IMPORTED_MODULE_0__["default"].load())
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF3Qiw2QkFBNkIsT0FBTyxHQUFHLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxL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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxHQUFHO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDOUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsS0FBSyxHQUFHLE1BQU0sR0FBRyxJQUFJO0FBQ3ZDOztBQUVBO0FBQ0Esa0JBQWtCLGVBQWUsR0FBRyxpQkFBaUI7QUFDckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGVBQWUsR0FBRyxpQkFBaUIsR0FBRyxpQkFBaUI7QUFDekU7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDckNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDekNlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3Q2U7O0FBRWY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRHFEO0FBQzlDO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRzs7Ozs7Ozs7Ozs7Ozs7O0FDaENJO0FBQ1A7Ozs7Ozs7VUNEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBa0M7QUFDZDs7QUFFcEIsOENBQThDLDREQUFRLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL0NhbGVuZGFyL2NhbGVuZGFyLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL0Zvcm1zL2Zvcm1zLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL1RhYnMvQ2FsZW5kYXIvY2FsZW5kYXJUYWIuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvVGFicy9Gb2xkZXJzL2ZvbGRlcnNUYWIuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvVGFicy9Ib21lL2hvbWVUYWIuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvVGFza3MvdGFzay5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL0NhbGVuZGFyL2NhbGVuZGFyLmNzcz83YjQ1Iiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvZm9ybXMuY3NzPzU4OTUiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9UYWJzL0NhbGVuZGFyL2NhbGVuZGFyVGFiLmNzcz84OGE0Iiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvVGFicy9Gb2xkZXJzL2ZvbGRlcnNUYWIuY3NzPzk4ZDYiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9UYWJzL0hvbWUvaG9tZVRhYi5jc3M/OGVkNCIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL1Rhc2tzL3Rhc2suY3NzPzUxMDQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL0NhbGVuZGFyL0NhbGVuZGFyLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvRm9sZGVycy9Gb2xkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9Gb2xkZXJzL0ZvbGRlcnNMaXN0LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL0Zvcm1zL3N1YmNvbXBvbmVudHMvRWRpdEZvbGRlckZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9Gb3Jtcy9zdWJjb21wb25lbnRzL0VkaXRUYXNrRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL0Zvcm1zL3N1YmNvbXBvbmVudHMvTmV3Rm9sZGVyRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL0Zvcm1zL3N1YmNvbXBvbmVudHMvTmV3VGFza0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9JY29ucy9hcnJvdy1iYWNrLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvSWNvbnMvYXJyb3ctbGVmdC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL0ljb25zL2Fycm93LXJpZ2h0LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvSWNvbnMvY2FsZW5kYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9JY29ucy9jb2xsYXBzZS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL0ljb25zL2RvbmUuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9JY29ucy9lZGl0LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvSWNvbnMvZXhwYW5kLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvSWNvbnMvZm9sZGVyLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvSWNvbnMvaG9tZS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL0ljb25zL3BsdXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9JY29ucy9wcmlvcml0eS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL0ljb25zL3JlbW92ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL0ljb25zL3NhdmUuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9JY29ucy9zdGFyLWZpbGxlZC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL0ljb25zL3N0YXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9UYWJzL0NhbGVuZGFyL0NhbGVuZGFyVGFiLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvVGFicy9Gb2xkZXJzL0ZvbGRlcnNUYWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9UYWJzL0hvbWUvSG9tZVRhYi5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL1Rhc2tzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9UYXNrcy9UYXNrc0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9UYXNrcy9UYXNrc092ZXJ2aWV3LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvVUkvTWFpbi5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL1VJL05hdi5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL1V0aWxzL0NvbnZlcnREYXRlLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvVXRpbHMvRm9jdXNUcmFwLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvVXRpbHMvTG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvVXRpbHMvVG91Y2hFdmVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9uYW5vaWQvaW5kZXguYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9uYW5vaWQvdXJsLWFscGhhYmV0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQ2FsZW5kYXIgKi9cXG5cXG4uY2FsZW5kYXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IGxpZ2h0Z3JheTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmRheXMtb2Ytd2Vlay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDVweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuNSk7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4uY2FsZW5kYXItZ3JpZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIGF1dG8pO1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG59XFxuXFxuLmNhbGVuZGFyLWdyaWQtY29udGFpbmVyPmRpdiB7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbn1cXG5cXG4uZGF5LWNvbnRhaW5lciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5kYXktY29udGFpbmVyOmFjdGl2ZSB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHJnYigxNTAsIDE1MCwgMTUwKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZGF5LWNvbnRhaW5lcjpob3ZlciB7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHdoaXRlO1xcbn1cXG5cXG4uZGF5LWNvbnRhaW5lci1zZWxlY3RlZD5kaXYge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uZGF5LWNvbnRhaW5lci10b2RheSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgM3B4IHJnYmEoMjEwLCAyMTAsIDIxMCk7XFxufVxcblxcbi5hbm90aGVyLW1vbnRoLWRheSB7XFxuICAgIGNvbG9yOiByZ2IoMTcwLCAxNzAsIDE3MCk7XFxufVxcblxcbi5hbm90aGVyLW1vbnRoLWRheTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggcmdiKDIwMCwgMjAwLCAyMDApO1xcbn1cXG5cXG4uZGF5LXdpdGgtdGFzayB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRheS13aXRoLXRhc2s6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtNXB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDNweDtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5hbm90aGVyLW1vbnRoLWRheT4uZGF5LXdpdGgtdGFzazo6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcwLCAxNzAsIDE3MCk7XFxufVxcblxcbi8qIFN3aXRjaCAqL1xcblxcbi5tb250aC1zd2l0Y2gtY29udGlhbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogMCAwIDEwcHg7XFxufVxcblxcbi5tb250aC1zd2l0Y2gge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDAuN3JlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0byAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi13aWR0aDogMjM1cHg7XFxufVxcblxcbi5tb250aC1zd2l0Y2g+YnV0dG9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWluLWhlaWdodDogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubW9udGgtc3dpdGNoPmJ1dHRvbj5zdmcge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgZmlsbDogcmdiYSgyMTAsIDIxMCwgMjEwKTtcXG59XFxuXFxuLm1vbnRoLXN3aXRjaC1sZWZ0IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi5tb250aC1zd2l0Y2gtcmlnaHQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4ubW9udGgtc3dpdGNoIGRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMC4ycmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb250aC1jb250YWluZXIsXFxuLm1vbnRoLWN1cnJlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiByZ2JhKDIxMCwgMjEwLCAyMTApO1xcbiAgICBtaW4td2lkdGg6IDgwcHg7XFxufVxcblxcbi5tb250aC1jdXJyZW50IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJldmlvdXMtY2FsZW5kYXIsXFxuLm5leHQtY2FsZW5kYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MjBweCkge1xcbiAgICAucHJldmlvdXMtY2FsZW5kYXIge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBib3R0b206IDE1cHg7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwMHB4KTtcXG4gICAgICAgIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMCwgMCwgMCwgMSksIHJnYmEoMCwgMCwgMCwgMCkpO1xcbiAgICAgICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMCwgMCwgMCwgMSksIHJnYmEoMCwgMCwgMCwgMCkpO1xcbiAgICB9XFxuXFxuICAgIC5uZXh0LWNhbGVuZGFyIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYm90dG9tOiAxNXB4O1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwMHB4KTtcXG4gICAgICAgIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDEpLCByZ2JhKDAsIDAsIDAsIDApKTtcXG4gICAgICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAxKSwgcmdiYSgwLCAwLCAwLCAwKSk7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIvY2FsZW5kYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGFBQWE7O0FBRWI7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IscUNBQXFDO0lBQ3JDLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1EQUFtRDtJQUNuRCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsbUNBQW1DO0lBQ25DLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLE9BQU87SUFDUCxRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUEsV0FBVzs7QUFFWDtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLG1DQUFtQztJQUNuQyxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7UUFDSSxjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWiw2QkFBNkI7UUFDN0IsZ0ZBQWdGO1FBQ2hGLHdFQUF3RTtJQUM1RTs7SUFFQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLDRCQUE0QjtRQUM1QixpRkFBaUY7UUFDakYseUVBQXlFO0lBQzdFO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQ2FsZW5kYXIgKi9cXG5cXG4uY2FsZW5kYXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IGxpZ2h0Z3JheTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmRheXMtb2Ytd2Vlay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDVweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuNSk7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4uY2FsZW5kYXItZ3JpZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIGF1dG8pO1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG59XFxuXFxuLmNhbGVuZGFyLWdyaWQtY29udGFpbmVyPmRpdiB7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbn1cXG5cXG4uZGF5LWNvbnRhaW5lciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5kYXktY29udGFpbmVyOmFjdGl2ZSB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHJnYigxNTAsIDE1MCwgMTUwKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZGF5LWNvbnRhaW5lcjpob3ZlciB7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHdoaXRlO1xcbn1cXG5cXG4uZGF5LWNvbnRhaW5lci1zZWxlY3RlZD5kaXYge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uZGF5LWNvbnRhaW5lci10b2RheSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgM3B4IHJnYmEoMjEwLCAyMTAsIDIxMCk7XFxufVxcblxcbi5hbm90aGVyLW1vbnRoLWRheSB7XFxuICAgIGNvbG9yOiByZ2IoMTcwLCAxNzAsIDE3MCk7XFxufVxcblxcbi5hbm90aGVyLW1vbnRoLWRheTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggcmdiKDIwMCwgMjAwLCAyMDApO1xcbn1cXG5cXG4uZGF5LXdpdGgtdGFzayB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRheS13aXRoLXRhc2s6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtNXB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDNweDtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5hbm90aGVyLW1vbnRoLWRheT4uZGF5LXdpdGgtdGFzazo6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcwLCAxNzAsIDE3MCk7XFxufVxcblxcbi8qIFN3aXRjaCAqL1xcblxcbi5tb250aC1zd2l0Y2gtY29udGlhbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogMCAwIDEwcHg7XFxufVxcblxcbi5tb250aC1zd2l0Y2gge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDAuN3JlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0byAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi13aWR0aDogMjM1cHg7XFxufVxcblxcbi5tb250aC1zd2l0Y2g+YnV0dG9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWluLWhlaWdodDogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubW9udGgtc3dpdGNoPmJ1dHRvbj5zdmcge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgZmlsbDogcmdiYSgyMTAsIDIxMCwgMjEwKTtcXG59XFxuXFxuLm1vbnRoLXN3aXRjaC1sZWZ0IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi5tb250aC1zd2l0Y2gtcmlnaHQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4ubW9udGgtc3dpdGNoIGRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMC4ycmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb250aC1jb250YWluZXIsXFxuLm1vbnRoLWN1cnJlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiByZ2JhKDIxMCwgMjEwLCAyMTApO1xcbiAgICBtaW4td2lkdGg6IDgwcHg7XFxufVxcblxcbi5tb250aC1jdXJyZW50IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJldmlvdXMtY2FsZW5kYXIsXFxuLm5leHQtY2FsZW5kYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MjBweCkge1xcbiAgICAucHJldmlvdXMtY2FsZW5kYXIge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBib3R0b206IDE1cHg7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwMHB4KTtcXG4gICAgICAgIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMCwgMCwgMCwgMSksIHJnYmEoMCwgMCwgMCwgMCkpO1xcbiAgICAgICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMCwgMCwgMCwgMSksIHJnYmEoMCwgMCwgMCwgMCkpO1xcbiAgICB9XFxuXFxuICAgIC5uZXh0LWNhbGVuZGFyIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYm90dG9tOiAxNXB4O1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwMHB4KTtcXG4gICAgICAgIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDEpLCByZ2JhKDAsIDAsIDAsIDApKTtcXG4gICAgICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAxKSwgcmdiYSgwLCAwLCAwLCAwKSk7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjE2XFxcIiBoZWlnaHQ9XFxcIjE1XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGZpbGw9XFxcImdyYXlcXFwiIGQ9XFxcIk0yMCAzaC0xVjFoLTJ2Mkg3VjFINXYySDRjLTEuMSAwLTIgLjktMiAydjE2YzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptMCAxOEg0VjhoMTZ2MTN6XFxcIi8+PC9zdmc+XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMCAxcmVtO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuXFxufVxcblxcbi5mb3JtLWVycm9yIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTMpO1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIGNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItY29sb3IpO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlci1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uIHtcXG4gICAgYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIFNwZWNpZmljIGZvcm1zICovXFxuXFxuLnRhc2stZm9ybSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIDJmciBhdXRvIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG59XFxuXFxuI3Rhc2stbmFtZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saWdodGVyLWdyYXkpO1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gMDtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5mb2xkZXItZm9ybSB7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAycmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygxcmVtICsgdmFyKC0tbmF2LWhlaWdodCkpO1xcbn1cXG5cXG4jZm9sZGVyLW5hbWUge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1pbi13aWR0aDogMTUwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogcmdiKDkwLCA5MCwgOTApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZWRpdC1mb2xkZXItZm9ybSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG8gYXV0bztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvZm9ybXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsc0NBQXNDO0lBQ3RDLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsV0FBVztJQUNYLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixzQ0FBc0M7SUFDdEMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseURBQWdSO0FBQ3BSOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBLG1CQUFtQjs7QUFFbkI7SUFDSSwwQ0FBMEM7SUFDMUMsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0lBQ1oseUNBQXlDO0lBQ3pDLDRDQUE0QztJQUM1QyxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMCAxcmVtO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuXFxufVxcblxcbi5mb3JtLWVycm9yIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTMpO1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIGNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItY29sb3IpO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlci1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCIxNlxcXCIgaGVpZ2h0PVxcXCIxNVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBmaWxsPVxcXCJncmF5XFxcIiBkPVxcXCJNMjAgM2gtMVYxaC0ydjJIN1YxSDV2Mkg0Yy0xLjEgMC0yIC45LTIgMnYxNmMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMThINFY4aDE2djEzelxcXCIvPjwvc3ZnPicpO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbiB7XFxuICAgIGJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBTcGVjaWZpYyBmb3JtcyAqL1xcblxcbi50YXNrLWZvcm0ge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byAyZnIgYXV0byAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxufVxcblxcbiN0YXNrLW5hbWUge1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1saWdodGVyLWdyYXkpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHRlci1ncmF5KTtcXG4gICAgcGFkZGluZzogMS41cmVtIDA7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uZm9sZGVyLWZvcm0ge1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMnJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IGNhbGMoMXJlbSArIHZhcigtLW5hdi1oZWlnaHQpKTtcXG59XFxuXFxuI2ZvbGRlci1uYW1lIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlci1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVkaXQtZm9sZGVyLWZvcm0ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvIGF1dG87XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jYWxlbmRhci10YWItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gMWZyO1xcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmNhbGVuZGFyLXRhYi10YXNrcy1saXN0LXRpdGxlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxufVxcblxcbi50YXNrcy1saXN0LWNvbnRhaW5lciB7XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbSAxcmVtIGNhbGModmFyKC0tbmF2LWhlaWdodCkgKyA1LjVyZW0pO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4udGFza3MtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnRhc2tzLWxpc3QtZW1wdHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGNvbG9yOiBncmF5O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrcy1saXN0LWV4cGFuZGVkIHtcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvVGFicy9DYWxlbmRhci9jYWxlbmRhclRhYi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixtREFBbUQ7SUFDbkQsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jYWxlbmRhci10YWItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gMWZyO1xcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmNhbGVuZGFyLXRhYi10YXNrcy1saXN0LXRpdGxlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxufVxcblxcbi50YXNrcy1saXN0LWNvbnRhaW5lciB7XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbSAxcmVtIGNhbGModmFyKC0tbmF2LWhlaWdodCkgKyA1LjVyZW0pO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4udGFza3MtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnRhc2tzLWxpc3QtZW1wdHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGNvbG9yOiBncmF5O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrcy1saXN0LWV4cGFuZGVkIHtcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmZvbGRlcnMtdGFiLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyLWdyYXkpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmZvbGRlci1uZXctYnV0dG9uLXdyYXBwZXIge1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG59XFxuXFxuLmZvbGRlci1uZXctYnV0dG9uIHtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmF5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEwcHggMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4uZm9sZGVyLW5ldy1idXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggbGlnaHRncmV5O1xcbn1cXG5cXG4vKiBGb2xkZXJzIGxpc3QgKi9cXG5cXG4uZm9sZGVycy1saXN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5mb2xkZXJzLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1uYXYtaGVpZ2h0KTtcXG4gICAgbWluLXdpZHRoOiAyNTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxufVxcblxcbi5mb2xkZXJzLWxpc3Q+bGkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggbGlnaHRncmF5O1xcbn1cXG5cXG4uZm9sZGVycy1saXN0IC50YXNrLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG59XFxuXFxuLmZvbGRlcnMtbGlzdCAudGFzay1mb2xkZXItbmFtZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb2xkZXJzLWxpc3QgLnRhc2tzLWxpc3Qge1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIFRvcCBiYXIgKi9cXG5cXG4uZm9sZGVycy1saXN0LXRvcC1iYXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLWF1dG8tY29sdW1uczogYXV0bztcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDEwcHggMC41cmVtO1xcbn1cXG5cXG5bZGF0YS1mb2xkZXItZXhwYW5kZWQ9XFxcImV4cGFuZGVkXFxcIl0gLmZvbGRlcnMtbGlzdC10b3AtYmFyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxufVxcblxcbi5mb2xkZXItbmFtZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi13aWR0aDogM3JlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDJyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmZvbGRlci1uYW1lIGRpdiB7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uZm9sZGVyLWxpc3QtdG9wLWJhci1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4uZm9sZGVyLWxpc3QtdG9wLWJhci1idXR0b24gc3ZnIHtcXG4gICAgZmlsbDogdmFyKC0tbWFpbi1jb2xvci0xKTtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxufVxcblxcbi5mb2xkZXItbGlzdC10b3AtYmFyLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxufVxcblxcbi5mb2xkZXItbGlzdC10b3AtYmFyLWJ1dHRvbjpob3ZlciBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1tYWluLWNvbG9yLTIpO1xcbn1cXG5cXG4uZm9sZGVyLWVkaXQtYnV0dG9uIHN2ZyB7XFxuICAgIHdpZHRoOiAxOHB4O1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxufVxcblxcbi5mb2xkZXItZXhwYW5kLWJ1dHRvbiBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1tYWluLWNvbG9yLTEpO1xcbn1cXG5cXG4uZm9sZGVyLWV4cGFuZC1idXR0b246aG92ZXIgc3ZnIHtcXG4gICAgZmlsbDogdmFyKC0tbWFpbi1jb2xvci0yKTtcXG59XFxuXFxuLmJ1dHRvbi1leHBhbmRlZCBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1tYWluLWNvbG9yLTIpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9UYWJzL0ZvbGRlcnMvZm9sZGVyc1RhYi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtBQUNqQzs7QUFFQSxpQkFBaUI7O0FBRWpCO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUEsWUFBWTs7QUFFWjtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHlDQUF5QztJQUN6QyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUNBQXFDO0lBQ3JDLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZm9sZGVycy10YWItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uZm9sZGVyLW5ldy1idXR0b24td3JhcHBlciB7XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbn1cXG5cXG4uZm9sZGVyLW5ldy1idXR0b24ge1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudCk7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyYXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMTBweCAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5mb2xkZXItbmV3LWJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCBsaWdodGdyZXk7XFxufVxcblxcbi8qIEZvbGRlcnMgbGlzdCAqL1xcblxcbi5mb2xkZXJzLWxpc3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZvbGRlcnMtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLW5hdi1oZWlnaHQpO1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG59XFxuXFxuLmZvbGRlcnMtbGlzdD5saSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCBsaWdodGdyYXk7XFxufVxcblxcbi5mb2xkZXJzLWxpc3QgLnRhc2stY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbn1cXG5cXG4uZm9sZGVycy1saXN0IC50YXNrLWZvbGRlci1uYW1lIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZvbGRlcnMtbGlzdCAudGFza3MtbGlzdCB7XFxuICAgIGhlaWdodDogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLyogVG9wIGJhciAqL1xcblxcbi5mb2xkZXJzLWxpc3QtdG9wLWJhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtYXV0by1jb2x1bW5zOiBhdXRvO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMTBweCAwLjVyZW07XFxufVxcblxcbltkYXRhLWZvbGRlci1leHBhbmRlZD1cXFwiZXhwYW5kZWRcXFwiXSAuZm9sZGVycy1saXN0LXRvcC1iYXIge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHRlci1ncmF5KTtcXG59XFxuXFxuLmZvbGRlci1uYW1lIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLXdpZHRoOiAzcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMnJlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZm9sZGVyLW5hbWUgZGl2IHtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5mb2xkZXItbGlzdC10b3AtYmFyLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHRlci1ncmF5KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi5mb2xkZXItbGlzdC10b3AtYmFyLWJ1dHRvbiBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1tYWluLWNvbG9yLTEpO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG59XFxuXFxuLmZvbGRlci1saXN0LXRvcC1iYXItYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlci1ncmF5KTtcXG59XFxuXFxuLmZvbGRlci1saXN0LXRvcC1iYXItYnV0dG9uOmhvdmVyIHN2ZyB7XFxuICAgIGZpbGw6IHZhcigtLW1haW4tY29sb3ItMik7XFxufVxcblxcbi5mb2xkZXItZWRpdC1idXR0b24gc3ZnIHtcXG4gICAgd2lkdGg6IDE4cHg7XFxuICAgIGhlaWdodDogMThweDtcXG59XFxuXFxuLmZvbGRlci1leHBhbmQtYnV0dG9uIHN2ZyB7XFxuICAgIGZpbGw6IHZhcigtLW1haW4tY29sb3ItMSk7XFxufVxcblxcbi5mb2xkZXItZXhwYW5kLWJ1dHRvbjpob3ZlciBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1tYWluLWNvbG9yLTIpO1xcbn1cXG5cXG4uYnV0dG9uLWV4cGFuZGVkIHN2ZyB7XFxuICAgIGZpbGw6IHZhcigtLW1haW4tY29sb3ItMik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5ob21lLXRhYi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLW5hdi1oZWlnaHQpICsgMXJlbSk7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5ob21lLWNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxLjVyZW07XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbmgxIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCB2YXIoLS1kYXJrZXItZ3JheSk7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uLWxhYmVsIHtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZGFya2VyLWdyYXkpO1xcbn1cXG5cXG4udGFza3Mtb3ZlcnZpZXctY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuLnRhc2std2lkZ2V0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnRhc2stY291bnRlciB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ob21lLXdpZGdldC1sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi51cGNvbWluZy10YXNrcy13aWdkZXQge1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG59XFxuXFxuLnVwY29taW5nLXRhc2tzLXdpZ2RldCB1bCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnVwY29taW5nLXRhc2tzLXdpZ2RldCB1bCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnVwY29taW5nLXRhc2tzLXdpZ2RldCB1bDplbXB0eSB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnVwY29taW5nLXRhc2tzLXdpZ2RldCB1bDplbXB0eTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiTm8gdGFza3NcXFwiO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgY29sb3I6IGdyYXk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnVwY29taW5nLXRhc2tzLWxhYmVsIHtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgY29sb3I6IHZhcigtLWRhcmtlci1ncmF5KTtcXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4udXBjb21pbmctdGFzayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xcbn1cXG5cXG4udXBjb21pbmctdGFzayBzdmcge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4udXBjb21pbmctdGFzay1pY29uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmlsbDogdmFyKC0tZGFya2VyLWdyYXkpO1xcbn1cXG5cXG4udXBjb21pbmctdGFzay1uYW1lIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4udXBjb21pbmctdGFzay1kYXRlIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrZXItZ3JheSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL1RhYnMvSG9tZS9ob21lVGFiLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2IsOENBQThDO0lBQzlDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLHdDQUF3QztJQUN4QyxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCx3QkFBd0I7SUFDeEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ob21lLXRhYi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLW5hdi1oZWlnaHQpICsgMXJlbSk7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5ob21lLWNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxLjVyZW07XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbmgxIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCB2YXIoLS1kYXJrZXItZ3JheSk7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uLWxhYmVsIHtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZGFya2VyLWdyYXkpO1xcbn1cXG5cXG4udGFza3Mtb3ZlcnZpZXctY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuLnRhc2std2lkZ2V0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnRhc2stY291bnRlciB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ob21lLXdpZGdldC1sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi51cGNvbWluZy10YXNrcy13aWdkZXQge1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG59XFxuXFxuLnVwY29taW5nLXRhc2tzLXdpZ2RldCB1bCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnVwY29taW5nLXRhc2tzLXdpZ2RldCB1bCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnVwY29taW5nLXRhc2tzLXdpZ2RldCB1bDplbXB0eSB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnVwY29taW5nLXRhc2tzLXdpZ2RldCB1bDplbXB0eTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiTm8gdGFza3NcXFwiO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgY29sb3I6IGdyYXk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnVwY29taW5nLXRhc2tzLWxhYmVsIHtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgY29sb3I6IHZhcigtLWRhcmtlci1ncmF5KTtcXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4udXBjb21pbmctdGFzayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xcbn1cXG5cXG4udXBjb21pbmctdGFzayBzdmcge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4udXBjb21pbmctdGFzay1pY29uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmlsbDogdmFyKC0tZGFya2VyLWdyYXkpO1xcbn1cXG5cXG4udXBjb21pbmctdGFzay1uYW1lIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4udXBjb21pbmctdGFzay1kYXRlIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrZXItZ3JheSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGNvbHVtbi1nYXA6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItY29sb3IpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbSAxcmVtIDFyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jb250YWluZXItY2hlY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4udGFzay1mb2xkZXItbmFtZSB7XFxuICAgIC0tc2l6ZTogMC42cmVtO1xcbiAgICAtLWNvbG9yOiBncmF5O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDNweDtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZSk7XFxuICAgIG1heC13aWR0aDogMzAlO1xcbn1cXG5cXG4udGFzay1mb2xkZXItbmFtZSBzdmcge1xcbiAgICB3aWR0aDogMC44cmVtO1xcbiAgICBoZWlnaHQ6IDAuOHJlbTtcXG4gICAgZmlsbDogdmFyKC0tY29sb3IpO1xcbn1cXG5cXG4udGFzay1mb2xkZXItbmFtZSBwIHtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi50YXNrLXRleHQge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci1jaGVja2VkPi50YXNrLXRleHQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stY2hlY2stYnV0dG9uIHtcXG4gICAgZ3JpZC1yb3c6IDEvLTE7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tY29sb3ItMik7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhc2stY2hlY2stYnV0dG9uIHN2ZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZpbGw6IHRyYW5zcGFyZW50O1xcbiAgICB0cmFuc2l0aW9uOiBmaWxsIDAuM3M7XFxufVxcblxcbi50YXNrLWNoZWNrLWJ1dHRvbjpob3ZlciBzdmcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmaWxsOiBncmF5O1xcbn1cXG5cXG4udGFzay1jb250YWluZXItY2hlY2tlZCAudGFzay1jaGVjay1idXR0b24ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG4udGFzay1jb250YWluZXItY2hlY2tlZCAudGFzay1jaGVjay1idXR0b24gc3ZnIHtcXG4gICAgZmlsbDogZ3JheTtcXG59XFxuXFxuLnRhc2staW1wb3J0YW50LWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMS8tMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udGFzay1pbXBvcnRhbnQtYnV0dG9uIHN2ZyB7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGZpbGw6IGdyYXk7XFxuICAgIHRyYW5zaXRpb246IGZpbGwgMC41cztcXG59XFxuXFxuLnRhc2staW1wb3J0YW50LWJ1dHRvbjpob3ZlciBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1tYWluLWNvbG9yLTIpO1xcbn1cXG5cXG4udGFzay1pbXBvcnRhbnQtYnV0dG9uLWFjdGl2ZSBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1tYWluLWNvbG9yLTIpO1xcbn1cXG5cXG4udGFzay1jb250YWluZXItY2hlY2tlZCAudGFzay1pbXBvcnRhbnQtYnV0dG9uIHN2ZyB7XFxuICAgIGZpbGw6IGdyYXk7XFxufVxcblxcbi50YXNrLXJlbW92ZS1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDFyZW07XFxuICAgIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udGFzay1yZW1vdmUtYnV0dG9uIHN2ZyB7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi50YXNrLXJlbW92ZS1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyLWdyYXkpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9UYXNrcy90YXNrLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHNDQUFzQztJQUN0QyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlDQUF5QztJQUN6QyxrQkFBa0I7SUFDbEIscUNBQXFDO0lBQ3JDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGNvbHVtbi1nYXA6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItY29sb3IpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbSAxcmVtIDFyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jb250YWluZXItY2hlY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4udGFzay1mb2xkZXItbmFtZSB7XFxuICAgIC0tc2l6ZTogMC42cmVtO1xcbiAgICAtLWNvbG9yOiBncmF5O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDNweDtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZSk7XFxuICAgIG1heC13aWR0aDogMzAlO1xcbn1cXG5cXG4udGFzay1mb2xkZXItbmFtZSBzdmcge1xcbiAgICB3aWR0aDogMC44cmVtO1xcbiAgICBoZWlnaHQ6IDAuOHJlbTtcXG4gICAgZmlsbDogdmFyKC0tY29sb3IpO1xcbn1cXG5cXG4udGFzay1mb2xkZXItbmFtZSBwIHtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi50YXNrLXRleHQge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci1jaGVja2VkPi50YXNrLXRleHQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stY2hlY2stYnV0dG9uIHtcXG4gICAgZ3JpZC1yb3c6IDEvLTE7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tY29sb3ItMik7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhc2stY2hlY2stYnV0dG9uIHN2ZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZpbGw6IHRyYW5zcGFyZW50O1xcbiAgICB0cmFuc2l0aW9uOiBmaWxsIDAuM3M7XFxufVxcblxcbi50YXNrLWNoZWNrLWJ1dHRvbjpob3ZlciBzdmcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmaWxsOiBncmF5O1xcbn1cXG5cXG4udGFzay1jb250YWluZXItY2hlY2tlZCAudGFzay1jaGVjay1idXR0b24ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG4udGFzay1jb250YWluZXItY2hlY2tlZCAudGFzay1jaGVjay1idXR0b24gc3ZnIHtcXG4gICAgZmlsbDogZ3JheTtcXG59XFxuXFxuLnRhc2staW1wb3J0YW50LWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMS8tMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udGFzay1pbXBvcnRhbnQtYnV0dG9uIHN2ZyB7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGZpbGw6IGdyYXk7XFxuICAgIHRyYW5zaXRpb246IGZpbGwgMC41cztcXG59XFxuXFxuLnRhc2staW1wb3J0YW50LWJ1dHRvbjpob3ZlciBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1tYWluLWNvbG9yLTIpO1xcbn1cXG5cXG4udGFzay1pbXBvcnRhbnQtYnV0dG9uLWFjdGl2ZSBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1tYWluLWNvbG9yLTIpO1xcbn1cXG5cXG4udGFzay1jb250YWluZXItY2hlY2tlZCAudGFzay1pbXBvcnRhbnQtYnV0dG9uIHN2ZyB7XFxuICAgIGZpbGw6IGdyYXk7XFxufVxcblxcbi50YXNrLXJlbW92ZS1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDFyZW07XFxuICAgIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udGFzay1yZW1vdmUtYnV0dG9uIHN2ZyB7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi50YXNrLXJlbW92ZS1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyLWdyYXkpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlT3V0IHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuXFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDB2dyk7XFxuICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZUluIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwdncpO1xcbiAgICB9XFxuXFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgfVxcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tbWFpbi1mb250OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgLS1mb2xkZXItY29udGFpbmVyLXBhZGRpbmc6IDI1cHg7XFxuICAgIC0tbmF2LWhlaWdodDogY2FsYygzcmVtICsgMTBweCk7XFxuICAgIC0tYXZhbGlibGUtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tbmF2LWhlaWdodCkpO1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAtLWRhcmtlci1ncmF5OiByZ2IoOTAsIDkwLCA5MCk7XFxuICAgIC0tbGlnaHRlci1ncmF5OiByZ2IoMjQ1LCAyNDUsIDI0NSk7XFxuICAgIC0tbGlnaHRlci1jb2xvcjogcmdiKDIxMSwgMjIyLCAyNTUsIDAuNSk7XFxuICAgIC0tbWFpbi1jb2xvci0xOiByZ2JhKDY0LCA3MiwgMjQ3LCAxKTtcXG4gICAgLS1tYWluLWNvbG9yLTI6IHJnYmEoMTkyLCA1MCwgMTk4LCAxKTtcXG4gICAgLS1tYWluLWNvbG9yLTM6IHJnYigxNTAsIDEwMCwgMjU1KTtcXG4gICAgLS1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDIwMGRlZywgdmFyKC0tbWFpbi1jb2xvci0xKSAwJSwgdmFyKC0tbWFpbi1jb2xvci0yKSAxMDAlKTtcXG59XFxuXFxuI3Jvb3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZGlzYWJsZWQge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuLyogTmF2YmFyIHNlY3Rpb24gKi9cXG5cXG5uYXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXJvdzogLTE7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1uYXYtaGVpZ2h0KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggbGlnaHRncmF5O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwYWRkaW5nOiAwIDJyZW07XFxuICAgIHotaW5kZXg6IDExO1xcbn1cXG5cXG5uYXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXJvdzogLTE7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1uYXYtaGVpZ2h0KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggbGlnaHRncmF5O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwYWRkaW5nOiAwIDJyZW07XFxufVxcblxcbi5uYXYtYnV0dG9ucy13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBncmlkLWF1dG8tY29sdW1uczogYXV0bztcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG59XFxuXFxuLm5hdi1idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1pbi13aWR0aDogM3JlbTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbiBwYXRoIHtcXG4gICAgZmlsbDogZ3JheTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxufVxcblxcbi5uYXYtYnV0dG9uOmhvdmVyIHBhdGgge1xcbiAgICBmaWxsOiB2YXIoLS1tYWluLWNvbG9yLTEpO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbjpob3ZlciAubmF2LWJ1dHRvbi10ZXh0LWNvbnRhaW5lciB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTEpO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbi1hY3RpdmUgcGF0aCB7XFxuICAgIGZpbGw6IHZhcigtLW1haW4tY29sb3ItMSk7XFxufVxcblxcbi5uYXYtYnV0dG9uLWFjdGl2ZSAubmF2LWJ1dHRvbi10ZXh0LWNvbnRhaW5lciB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTEpO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbi1pY29uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdi1idXR0b24taWNvbi1jb250YWluZXIgc3ZnIHtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbi5uYXYtYnV0dG9uLXRleHQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgY29sb3I6IGdyYXk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cXG5cXG4vKiBNYWluIHNlY3Rpb24gKi9cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2xpZGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiB2YXIoLS1uYXYtaGVpZ2h0KTtcXG4gICAgbGVmdDogMDtcXG4gICAgcGFkZGluZzogMXJlbSA1JSB2YXIoLS1uYXYtaGVpZ2h0KSA1JTtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLnNsaWRlLWNvbnRhaW5lci1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG59XFxuXFxuLnNsaWRlLWluIHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW47XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbi5zbGlkZS1vdXQge1xcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVPdXQ7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbi5zbGlkZS1iYWNrLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbn1cXG5cXG4uc2xpZGUtYmFjay1idXR0b24gc3ZnIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMnJlbTtcXG59XFxuXFxuLnNsaWRlLWJhY2stYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlci1ncmF5KTtcXG59XFxuXFxuLmZsb2F0aW5nLWJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCBncmF5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTMpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmF5KTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHJpZ2h0OiAxcmVtO1xcbiAgICBib3R0b206IGNhbGModmFyKC0tbmF2LWhlaWdodCkgKyAxcmVtKTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcbn1cXG5cXG4uZmxvYXRpbmctYnV0dG9uIHN2ZyB7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGZpbGw6IHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxufVxcblxcbi5mbG9hdGluZy1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkzLCAxMDAsIDI1NSk7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcXG4gICAgLmZsb2F0aW5nLWJ1dHRvbiB7XFxuICAgICAgICByaWdodDogY2FsYygoMTAwdncgLSA4MDBweCkgLyAyICsgMXJlbSk7XFxuICAgIH1cXG5cXG4gICAgLnN1Ym1pdC1idXR0b24ge1xcbiAgICAgICAgcmlnaHQ6IDFyZW07XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIH1cXG5cXG4gICAgLnNsaWRlLWNvbnRhaW5lciB7XFxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiAwIDEwJSB2YXIoLS1uYXYtaGVpZ2h0KSAxMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIH1cXG5cXG4gICAgLnNsaWRlLWNvbnRhaW5lci1jb250ZW50IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0k7UUFDSSx3QkFBd0I7UUFDeEIsVUFBVTtJQUNkOztJQUVBO1FBQ0ksNEJBQTRCO1FBQzVCLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksNEJBQTRCO0lBQ2hDOztJQUVBO1FBQ0ksd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZ0NBQWdDO0lBQ2hDLCtCQUErQjtJQUMvQixrREFBa0Q7SUFDbEQseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixrQ0FBa0M7SUFDbEMsd0NBQXdDO0lBQ3hDLG9DQUFvQztJQUNwQyxxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLHFGQUFxRjtBQUN6Rjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBLG1CQUFtQjs7QUFFbkI7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHlDQUF5QztJQUN6Qyx5QkFBeUI7SUFDekIsaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixTQUFTO0lBQ1QsUUFBUTtJQUNSLE9BQU87SUFDUCx5Q0FBeUM7SUFDekMseUJBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCOztBQUVBLGlCQUFpQjs7QUFFakI7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7SUFDWCx5Q0FBeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLE1BQU07SUFDTixRQUFRO0lBQ1IseUJBQXlCO0lBQ3pCLE9BQU87SUFDUCxxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQix5Q0FBeUM7SUFDekMsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixxQ0FBcUM7SUFDckMsMEJBQTBCO0lBQzFCLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsV0FBVztJQUNYLHNDQUFzQztJQUN0QyxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJO1FBQ0ksdUNBQXVDO0lBQzNDOztJQUVBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsV0FBVztRQUNYLFlBQVk7UUFDWixvQ0FBb0M7UUFDcEMsb0NBQW9DO0lBQ3hDOztJQUVBO1FBQ0kseUNBQXlDO1FBQ3pDLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2Isa0JBQWtCO0lBQ3RCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZU91dCB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcblxcbiAgICB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwdncpO1xcbiAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVJbiB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHZ3KTtcXG4gICAgfVxcblxcbiAgICB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIH1cXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLW1haW4tZm9udDogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIC0tZm9sZGVyLWNvbnRhaW5lci1wYWRkaW5nOiAyNXB4O1xcbiAgICAtLW5hdi1oZWlnaHQ6IGNhbGMoM3JlbSArIDEwcHgpO1xcbiAgICAtLWF2YWxpYmxlLWhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLW5hdi1oZWlnaHQpKTtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLS1kYXJrZXItZ3JheTogcmdiKDkwLCA5MCwgOTApO1xcbiAgICAtLWxpZ2h0ZXItZ3JheTogcmdiKDI0NSwgMjQ1LCAyNDUpO1xcbiAgICAtLWxpZ2h0ZXItY29sb3I6IHJnYigyMTEsIDIyMiwgMjU1LCAwLjUpO1xcbiAgICAtLW1haW4tY29sb3ItMTogcmdiYSg2NCwgNzIsIDI0NywgMSk7XFxuICAgIC0tbWFpbi1jb2xvci0yOiByZ2JhKDE5MiwgNTAsIDE5OCwgMSk7XFxuICAgIC0tbWFpbi1jb2xvci0zOiByZ2IoMTUwLCAxMDAsIDI1NSk7XFxuICAgIC0tZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgyMDBkZWcsIHZhcigtLW1haW4tY29sb3ItMSkgMCUsIHZhcigtLW1haW4tY29sb3ItMikgMTAwJSk7XFxufVxcblxcbiNyb290IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmRpc2FibGVkIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblxcbi8qIE5hdmJhciBzZWN0aW9uICovXFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1yb3c6IC0xO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGhlaWdodDogdmFyKC0tbmF2LWhlaWdodCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IGxpZ2h0Z3JheTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcGFkZGluZzogMCAycmVtO1xcbiAgICB6LWluZGV4OiAxMTtcXG59XFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1yb3c6IC0xO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGhlaWdodDogdmFyKC0tbmF2LWhlaWdodCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IGxpZ2h0Z3JheTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcGFkZGluZzogMCAycmVtO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbnMtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IGF1dG87XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxufVxcblxcbi5uYXYtYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtaW4td2lkdGg6IDNyZW07XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG59XFxuXFxuLm5hdi1idXR0b24gcGF0aCB7XFxuICAgIGZpbGw6IGdyYXk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbjpob3ZlciBwYXRoIHtcXG4gICAgZmlsbDogdmFyKC0tbWFpbi1jb2xvci0xKTtcXG59XFxuXFxuLm5hdi1idXR0b246aG92ZXIgLm5hdi1idXR0b24tdGV4dC1jb250YWluZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvci0xKTtcXG59XFxuXFxuLm5hdi1idXR0b24tYWN0aXZlIHBhdGgge1xcbiAgICBmaWxsOiB2YXIoLS1tYWluLWNvbG9yLTEpO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbi1hY3RpdmUgLm5hdi1idXR0b24tdGV4dC1jb250YWluZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvci0xKTtcXG59XFxuXFxuLm5hdi1idXR0b24taWNvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXYtYnV0dG9uLWljb24tY29udGFpbmVyIHN2ZyB7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbi10ZXh0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgIGNvbG9yOiBncmF5O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG59XFxuXFxuLyogTWFpbiBzZWN0aW9uICovXFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNsaWRlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogdmFyKC0tbmF2LWhlaWdodCk7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBhZGRpbmc6IDFyZW0gNSUgdmFyKC0tbmF2LWhlaWdodCkgNSU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5zbGlkZS1jb250YWluZXItY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxufVxcblxcbi5zbGlkZS1pbiB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG4uc2xpZGUtb3V0IHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlT3V0O1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG4uc2xpZGUtYmFjay1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG59XFxuXFxuLnNsaWRlLWJhY2stYnV0dG9uIHN2ZyB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDJyZW07XFxufVxcblxcbi5zbGlkZS1iYWNrLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxufVxcblxcbi5mbG9hdGluZy1idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggZ3JheTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0zKTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICByaWdodDogMXJlbTtcXG4gICAgYm90dG9tOiBjYWxjKHZhcigtLW5hdi1oZWlnaHQpICsgMXJlbSk7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG59XFxuXFxuLmZsb2F0aW5nLWJ1dHRvbiBzdmcge1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBmaWxsOiB2YXIoLS1saWdodGVyLWdyYXkpO1xcbn1cXG5cXG4uZmxvYXRpbmctYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MywgMTAwLCAyNTUpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XFxuICAgIC5mbG9hdGluZy1idXR0b24ge1xcbiAgICAgICAgcmlnaHQ6IGNhbGMoKDEwMHZ3IC0gODAwcHgpIC8gMiArIDFyZW0pO1xcbiAgICB9XFxuXFxuICAgIC5zdWJtaXQtYnV0dG9uIHtcXG4gICAgICAgIHJpZ2h0OiAxcmVtO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB9XFxuXFxuICAgIC5zbGlkZS1jb250YWluZXIge1xcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogMCAxMCUgdmFyKC0tbmF2LWhlaWdodCkgMTAlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICB9XFxuXFxuICAgIC5zbGlkZS1jb250YWluZXItY29udGVudCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhbGVuZGFyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2FsZW5kYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvcm1zLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9ybXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhbGVuZGFyVGFiLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2FsZW5kYXJUYWIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ZvbGRlcnNUYWIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb2xkZXJzVGFiLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lVGFiLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZVRhYi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFzay5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Rhc2suY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBOYXYgZnJvbSBcIi4vVUkvTmF2XCJcbmltcG9ydCBNYWluIGZyb20gXCIuL1VJL01haW5cIlxuaW1wb3J0IEhvbWVUYWIgZnJvbSBcIi4vVGFicy9Ib21lL0hvbWVUYWJcIlxuaW1wb3J0IExvY2FsU3RvcmFnZSBmcm9tIFwiLi9VdGlscy9Mb2NhbFN0b3JhZ2VcIlxuaW1wb3J0IEZvbGRlciBmcm9tIFwiLi9Gb2xkZXJzL0ZvbGRlclwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XG4gICAgc3RhdGljIHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RcIilcblxuICAgIHN0YXRpYyBsb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRMYXlvdXQoKVxuICAgICAgICB0aGlzLmxvYWRMb2NhbFN0b3JhZ2UoKVxuICAgICAgICBNYWluLmNoYW5nZUNvbnRlbnQoSG9tZVRhYi5yZW5kZXIoKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZExheW91dCgpIHtcbiAgICAgICAgTWFpbi5yZW5kZXIocm9vdClcbiAgICAgICAgTmF2LnJlbmRlcihyb290KVxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICBpZiAoTG9jYWxTdG9yYWdlLmlzRW1wdHkoKSkge1xuICAgICAgICAgICAgRm9sZGVyLmdlbmVyYXRlRGVmYXVsdEZvbGRlcigpXG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IEhvbWUgZnJvbSBcIi4uL1RhYnMvQ2FsZW5kYXIvQ2FsZW5kYXJUYWJcIlxuaW1wb3J0IFRhc2sgZnJvbSBcIi4uL1Rhc2tzL1Rhc2tcIlxuaW1wb3J0IENvbnZlcnREYXRlIGZyb20gXCIuLi9VdGlscy9Db252ZXJ0RGF0ZVwiXG5pbXBvcnQgVG91Y2hFdmVudHMgZnJvbSBcIi4uL1V0aWxzL1RvdWNoRXZlbnRcIlxuaW1wb3J0IFwiLi9jYWxlbmRhci5jc3NcIlxuaW1wb3J0IFRhc2tzTGlzdCBmcm9tIFwiLi4vVGFza3MvVGFza3NMaXN0XCJcbmltcG9ydCBBcnJvd0xlZnRJY29uIGZyb20gXCIuLi9JY29ucy9hcnJvdy1sZWZ0XCJcbmltcG9ydCBBcnJvd1JpZ2h0SWNvbiBmcm9tIFwiLi4vSWNvbnMvYXJyb3ctcmlnaHRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxlbmRhciB7XG4gICAgc3RhdGljIGh0bWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHN0YXRpYyB0b2RheXNEYXRlID0gbmV3IERhdGVcblxuICAgIHN0YXRpYyBjcmVhdGVXaWRnZXQoZGF0ZSkge1xuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgdGhpcy5jcmVhdGVNb250aFN3aXRjaChkYXRlKVxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlQ2FsZW5kYXJzKGRhdGUpKVxuICAgIH1cblxuICAgIC8vIHN0YXRpYyBjcmVhdGVNb250aFN3aXRjaChkYXRlKSB7XG4gICAgLy8gICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAvLyAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtb250aC1zd2l0Y2gtY29udGlhbmVyXCIpXG5cbiAgICAvLyAgICAgY29uc3QgbW9udGhTd2l0Y2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgLy8gICAgIG1vbnRoU3dpdGNoLmNsYXNzTGlzdC5hZGQoXCJtb250aC1zd2l0Y2hcIilcbiAgICAvLyAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vbnRoU3dpdGNoKVxuXG4gICAgLy8gICAgIGNvbnN0IGFycm93TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAvLyAgICAgYXJyb3dMZWZ0LmNsYXNzTGlzdC5hZGQoXCJtb250aC1zd2l0Y2gtbGVmdFwiKVxuICAgIC8vICAgICBhcnJvd0xlZnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc3dpdGNoVG9QcmV2aW91c01vbnRoKCkpXG5cbiAgICAvLyAgICAgY29uc3QgYXJyb3dSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAvLyAgICAgYXJyb3dSaWdodC5jbGFzc0xpc3QuYWRkKFwibW9udGgtc3dpdGNoLXJpZ2h0XCIpXG4gICAgLy8gICAgIGFycm93UmlnaHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc3dpdGNoVG9OZXh0TW9udGgoKSlcblxuICAgIC8vICAgICBjb25zdCBtb250aENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAvLyAgICAgaWYgKChkYXRlLmdldE1vbnRoKCkgPT09IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSkgJiYgKGRhdGUuZ2V0RnVsbFllYXIoKSA9PT0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpKSkge1xuICAgIC8vICAgICAgICAgbW9udGhDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1vbnRoLWN1cnJlbnRcIilcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIG1vbnRoQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtb250aC1jb250YWluZXJcIilcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIG1vbnRoQ29udGFpbmVyLnRleHRDb250ZW50ID0gdGhpcy5jb252ZXJ0TW9udGhOYW1lKGRhdGUuZ2V0TW9udGgoKSlcblxuICAgIC8vICAgICBjb25zdCB5ZWFyQ29udGlhbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIC8vICAgICB5ZWFyQ29udGlhbmVyLmNsYXNzTGlzdC5hZGQoXCJ5ZWFyLWNvbnRhaW5lclwiKVxuICAgIC8vICAgICB5ZWFyQ29udGlhbmVyLnRleHRDb250ZW50ID0gZGF0ZS5nZXRGdWxsWWVhcigpXG5cbiAgICAvLyAgICAgY29uc3QgZGF0ZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgLy8gICAgIGRhdGVXcmFwcGVyLmFwcGVuZENoaWxkKG1vbnRoQ29udGFpbmVyKVxuICAgIC8vICAgICBkYXRlV3JhcHBlci5hcHBlbmRDaGlsZCh5ZWFyQ29udGlhbmVyKVxuICAgIC8vICAgICBkYXRlV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKCkgPT4gdGhpcy5zd2l0Y2hUb0N1cnJlbnRNb250aCgpKVxuXG4gICAgLy8gICAgIG1vbnRoU3dpdGNoLmFwcGVuZENoaWxkKGFycm93TGVmdClcbiAgICAvLyAgICAgbW9udGhTd2l0Y2guYXBwZW5kQ2hpbGQoZGF0ZVdyYXBwZXIpXG4gICAgLy8gICAgIG1vbnRoU3dpdGNoLmFwcGVuZENoaWxkKGFycm93UmlnaHQpXG5cbiAgICAvLyAgICAgdGhpcy5odG1sRWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgLy8gfVxuICAgIHN0YXRpYyBjcmVhdGVNb250aFN3aXRjaChkYXRlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtb250aC1zd2l0Y2gtY29udGlhbmVyXCIpXG5cbiAgICAgICAgY29uc3QgbW9udGhTd2l0Y2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIG1vbnRoU3dpdGNoLmNsYXNzTGlzdC5hZGQoXCJtb250aC1zd2l0Y2hcIilcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vbnRoU3dpdGNoKVxuXG4gICAgICAgIGNvbnN0IGFycm93TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgYXJyb3dMZWZ0LmNsYXNzTGlzdC5hZGQoXCJtb250aC1zd2l0Y2gtbGVmdFwiKVxuICAgICAgICBhcnJvd0xlZnQuaW5uZXJIVE1MID0gQXJyb3dMZWZ0SWNvblxuICAgICAgICBhcnJvd0xlZnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc3dpdGNoVG9QcmV2aW91c01vbnRoKCkpXG5cbiAgICAgICAgY29uc3QgYXJyb3dSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgYXJyb3dSaWdodC5jbGFzc0xpc3QuYWRkKFwibW9udGgtc3dpdGNoLXJpZ2h0XCIpXG4gICAgICAgIGFycm93UmlnaHQuaW5uZXJIVE1MID0gQXJyb3dSaWdodEljb25cbiAgICAgICAgYXJyb3dSaWdodC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zd2l0Y2hUb05leHRNb250aCgpKVxuXG4gICAgICAgIGNvbnN0IG1vbnRoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBpZiAoKGRhdGUuZ2V0TW9udGgoKSA9PT0gbmV3IERhdGUoKS5nZXRNb250aCgpKSAmJiAoZGF0ZS5nZXRGdWxsWWVhcigpID09PSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkpKSB7XG4gICAgICAgICAgICBtb250aENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibW9udGgtY3VycmVudFwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9udGhDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1vbnRoLWNvbnRhaW5lclwiKVxuICAgICAgICB9XG5cbiAgICAgICAgbW9udGhDb250YWluZXIudGV4dENvbnRlbnQgPSB0aGlzLmNvbnZlcnRNb250aE5hbWUoZGF0ZS5nZXRNb250aCgpKVxuXG4gICAgICAgIGNvbnN0IHllYXJDb250aWFuZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIHllYXJDb250aWFuZXIuY2xhc3NMaXN0LmFkZChcInllYXItY29udGFpbmVyXCIpXG4gICAgICAgIHllYXJDb250aWFuZXIudGV4dENvbnRlbnQgPSBkYXRlLmdldEZ1bGxZZWFyKClcblxuICAgICAgICBjb25zdCBkYXRlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgZGF0ZVdyYXBwZXIuYXBwZW5kQ2hpbGQobW9udGhDb250YWluZXIpXG4gICAgICAgIGRhdGVXcmFwcGVyLmFwcGVuZENoaWxkKHllYXJDb250aWFuZXIpXG4gICAgICAgIGRhdGVXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCAoKSA9PiB0aGlzLnN3aXRjaFRvQ3VycmVudE1vbnRoKCkpXG5cbiAgICAgICAgbW9udGhTd2l0Y2guYXBwZW5kQ2hpbGQoYXJyb3dMZWZ0KVxuICAgICAgICBtb250aFN3aXRjaC5hcHBlbmRDaGlsZChkYXRlV3JhcHBlcilcbiAgICAgICAgbW9udGhTd2l0Y2guYXBwZW5kQ2hpbGQoYXJyb3dSaWdodClcblxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQ2FsZW5kYXJzKGRhdGUpIHtcbiAgICAgICAgY29uc3QgY2FsZW5kYXJDdXJyZW50ID0gdGhpcy5jcmVhdGVDYWxlbmRhckVsZW1lbnQoZGF0ZSlcbiAgICAgICAgY2FsZW5kYXJDdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50LWNhbGVuZGFyXCIpXG5cbiAgICAgICAgY29uc3QgY2FsZW5kYXJQcmV2ID0gdGhpcy5jcmVhdGVDYWxlbmRhckVsZW1lbnQodGhpcy5nZXRQcmV2aW91c01vbnRoKGRhdGUpKVxuICAgICAgICBjYWxlbmRhclByZXYuY2xhc3NMaXN0LmFkZChcInByZXZpb3VzLWNhbGVuZGFyXCIpXG4gICAgICAgIGNhbGVuZGFyUHJldi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zd2l0Y2hUb1ByZXZpb3VzTW9udGgoKSlcblxuICAgICAgICBjb25zdCBjYWxlbmRhck5leHQgPSB0aGlzLmNyZWF0ZUNhbGVuZGFyRWxlbWVudCh0aGlzLmdldE5leHRNb250aChkYXRlKSlcbiAgICAgICAgY2FsZW5kYXJOZXh0LmNsYXNzTGlzdC5hZGQoXCJuZXh0LWNhbGVuZGFyXCIpXG4gICAgICAgIGNhbGVuZGFyTmV4dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zd2l0Y2hUb05leHRNb250aCgpKVxuXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY2FsZW5kYXJDdXJyZW50KVxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNhbGVuZGFyUHJldilcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChjYWxlbmRhck5leHQpXG5cbiAgICAgICAgcmV0dXJuIHdyYXBwZXJcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQ2FsZW5kYXJFbGVtZW50KGRhdGUpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUdyaWRIZWFkZXIoKSlcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUdyaWQoZGF0ZSkpXG4gICAgICAgIHJldHVybiB3cmFwcGVyXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUdyaWRIZWFkZXIoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkYXlzLW9mLXdlZWstY29udGFpbmVyXCIpXG4gICAgICAgIGNvbnN0IGRheXNPZldlZWsgPSBbXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIiwgXCJTdW5cIl1cblxuICAgICAgICBkYXlzT2ZXZWVrLmZvckVhY2goZGF5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRheU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICBkYXlOYW1lLmNsYXNzTGlzdC5hZGQoXCJkYXktb2Ytd2Vla1wiKVxuICAgICAgICAgICAgZGF5TmFtZS50ZXh0Q29udGVudCA9IGRheVxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRheU5hbWUpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBjb250YWluZXJcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlR3JpZChkYXRlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjYWxlbmRhci1ncmlkLWNvbnRhaW5lclwiKVxuXG4gICAgICAgIGxldCB0b3VjaEV2ZW50XG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBlID0+IHRvdWNoRXZlbnQgPSBuZXcgVG91Y2hFdmVudHMoZSksIHsgcGFzc2l2ZTogZmFsc2UgfSlcbiAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBlID0+IHRoaXMuaGFuZGxlU3dpcGUoZSwgdG91Y2hFdmVudCkpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0MjsgaSsrKSB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVHcmlkQ2VsbChpLCBkYXRlKSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGFpbmVyXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUdyaWRDZWxsKGksIGRhdGUpIHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBkYXRlXG4gICAgICAgIGNvbnN0IGZpcnN0RGF5T2ZXZWVrID0gQ29udmVydERhdGUuZ2V0RGF5KChuZXcgRGF0ZShjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLCBjdXJyZW50RGF0ZS5nZXRNb250aCgpLCAxKSkpXG4gICAgICAgIGNvbnN0IGxhc3REYXlPZkN1cnJlbnRNb250aCA9IG5ldyBEYXRlKGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCksIGN1cnJlbnREYXRlLmdldE1vbnRoKCkgKyAxLCAwKS5nZXREYXRlKClcbiAgICAgICAgY29uc3QgbGFzdERheU9mUHJldmlvdXNNb250aCA9IG5ldyBEYXRlKGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCksIGN1cnJlbnREYXRlLmdldE1vbnRoKCksIDApLmdldERhdGUoKVxuXG4gICAgICAgIGNvbnN0IGRheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgZGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkYXktY29udGFpbmVyXCIpXG5cbiAgICAgICAgY29uc3QgZGF5TnVtYmVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBkYXlOdW1iZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRheS1udW1iZXJcIilcbiAgICAgICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGRheU51bWJlckNvbnRhaW5lcilcblxuICAgICAgICAvL3Nob3cgY3VycmVudCBtb250aCBkYXlcbiAgICAgICAgaWYgKGkgKyAxID49IGZpcnN0RGF5T2ZXZWVrICYmIGkgLSBmaXJzdERheU9mV2VlayArIDEgPCBsYXN0RGF5T2ZDdXJyZW50TW9udGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRheSA9IGkgKyAyIC0gZmlyc3REYXlPZldlZWtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBDb252ZXJ0RGF0ZS50b1lZWVlNTUREKG5ldyBEYXRlKGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCksIGN1cnJlbnREYXRlLmdldE1vbnRoKCksIGRheSkpXG5cbiAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0VG9kYXkobmV3IERhdGUoZGF0ZSksIGRheUNvbnRhaW5lcilcbiAgICAgICAgICAgIHRoaXMubWFya0RheVdpdGhUYXNrKGRhdGUsIGRheU51bWJlckNvbnRhaW5lcilcblxuICAgICAgICAgICAgZGF5Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmhhbmRsZURheUNsaWNrKGRhdGUsIGRheUNvbnRhaW5lcikpXG5cbiAgICAgICAgICAgIGRheU51bWJlckNvbnRhaW5lci50ZXh0Q29udGVudCA9IGRheVxuICAgICAgICB9XG5cbiAgICAgICAgLy9zaG93IHByZXZpb3VzIG1vbnRoIGRheVxuICAgICAgICBpZiAoaSArIDEgPCBmaXJzdERheU9mV2Vlaykge1xuICAgICAgICAgICAgZGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhbm90aGVyLW1vbnRoLWRheVwiKVxuXG4gICAgICAgICAgICBjb25zdCBkYXkgPSBsYXN0RGF5T2ZQcmV2aW91c01vbnRoIC0gZmlyc3REYXlPZldlZWsgKyBpICsgMlxuICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSh0aGlzLmdldFByZXZpb3VzTW9udGgodGhpcy50b2RheXNEYXRlLCBkYXkpKVxuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IENvbnZlcnREYXRlLnRvWVlZWU1NREQobmV3IERhdGUoY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSwgY3VycmVudERhdGUuZ2V0TW9udGgoKSwgZGF5KSlcblxuICAgICAgICAgICAgdGhpcy5tYXJrRGF5V2l0aFRhc2soZGF0ZSwgZGF5TnVtYmVyQ29udGFpbmVyKVxuXG4gICAgICAgICAgICBkYXlDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFRvUHJldmlvdXNNb250aCgpXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVEYXlDbGljayhkYXRlKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgZGF5TnVtYmVyQ29udGFpbmVyLnRleHRDb250ZW50ID0gZGF5XG4gICAgICAgIH1cblxuICAgICAgICAvL3Nob3cgbmV4dCBtb250aCBkYXlcbiAgICAgICAgaWYgKGkgKyAxID4gbGFzdERheU9mQ3VycmVudE1vbnRoICYmIGkgLSBmaXJzdERheU9mV2VlayArIDIgPiBsYXN0RGF5T2ZDdXJyZW50TW9udGgpIHtcbiAgICAgICAgICAgIGRheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYW5vdGhlci1tb250aC1kYXlcIilcblxuICAgICAgICAgICAgY29uc3QgZGF5ID0gaSArIDIgLSBmaXJzdERheU9mV2VlayAtIGxhc3REYXlPZkN1cnJlbnRNb250aFxuICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSh0aGlzLmdldE5leHRNb250aCh0aGlzLnRvZGF5c0RhdGUsIGRheSkpXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gQ29udmVydERhdGUudG9ZWVlZTU1ERChuZXcgRGF0ZShjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLCBjdXJyZW50RGF0ZS5nZXRNb250aCgpLCBkYXkpKVxuXG4gICAgICAgICAgICB0aGlzLm1hcmtEYXlXaXRoVGFzayhkYXRlLCBkYXlOdW1iZXJDb250YWluZXIpXG5cbiAgICAgICAgICAgIGRheUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoVG9OZXh0TW9udGgoKVxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRGF5Q2xpY2soZGF0ZSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGRheU51bWJlckNvbnRhaW5lci50ZXh0Q29udGVudCA9IGRheVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRheUNvbnRhaW5lclxuICAgIH1cblxuICAgIHN0YXRpYyBzd2l0Y2hUb1ByZXZpb3VzTW9udGgoZGF0ZSkge1xuICAgICAgICB0aGlzLnRvZGF5c0RhdGUgPSB0aGlzLmdldFByZXZpb3VzTW9udGgoZGF0ZSB8fCB0aGlzLnRvZGF5c0RhdGUpXG4gICAgICAgIHRoaXMuY3JlYXRlV2lkZ2V0KHRoaXMudG9kYXlzRGF0ZSlcbiAgICB9XG5cbiAgICBzdGF0aWMgc3dpdGNoVG9DdXJyZW50TW9udGgoKSB7XG4gICAgICAgIHRoaXMudG9kYXlzRGF0ZSA9IG5ldyBEYXRlKClcbiAgICAgICAgdGhpcy5jcmVhdGVXaWRnZXQodGhpcy50b2RheXNEYXRlKVxuICAgIH1cblxuICAgIHN0YXRpYyBzd2l0Y2hUb05leHRNb250aChkYXRlKSB7XG4gICAgICAgIHRoaXMudG9kYXlzRGF0ZSA9IHRoaXMuZ2V0TmV4dE1vbnRoKGRhdGUgfHwgdGhpcy50b2RheXNEYXRlKVxuICAgICAgICB0aGlzLmNyZWF0ZVdpZGdldCh0aGlzLnRvZGF5c0RhdGUpXG4gICAgfVxuXG4gICAgc3RhdGljIGdldFByZXZpb3VzTW9udGgoZGF0ZSwgZGF5KSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSAtIDEsIGRheSA/IGRheSA6IDEpXG4gICAgfVxuXG4gICAgc3RhdGljIGdldE5leHRNb250aChkYXRlLCBkYXkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpICsgMSwgZGF5ID8gZGF5IDogMSlcbiAgICB9XG5cbiAgICBzdGF0aWMgY29udmVydE1vbnRoTmFtZShtb250aE51bWJlcikge1xuICAgICAgICBzd2l0Y2ggKG1vbnRoTnVtYmVyKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgbW9udGhOdW1iZXIgPSBcIkphbnVhcnlcIlxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgbW9udGhOdW1iZXIgPSBcIkZlYnJ1cmFyeVwiXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBtb250aE51bWJlciA9IFwiTWFyY2hcIlxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgbW9udGhOdW1iZXIgPSBcIkFwcmlsXCJcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIG1vbnRoTnVtYmVyID0gXCJNYXlcIlxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgbW9udGhOdW1iZXIgPSBcIkp1bmVcIlxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgbW9udGhOdW1iZXIgPSBcIkp1bHlcIlxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgbW9udGhOdW1iZXIgPSBcIkF1Z3VzdFwiXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICBtb250aE51bWJlciA9IFwiU2VwdGVtYmVyXCJcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIG1vbnRoTnVtYmVyID0gXCJPY3RvYmVyXCJcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICBtb250aE51bWJlciA9IFwiTm92ZW1iZXJcIlxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgIG1vbnRoTnVtYmVyID0gXCJEZWNlbWJlclwiXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW9udGhOdW1iZXJcbiAgICB9XG5cbiAgICBzdGF0aWMgaGlnaGxpZ2h0VG9kYXkoZGF0ZSwgZWxlbWVudCkge1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKClcbiAgICAgICAgaWYgKGRhdGUuZ2V0RGF0ZSgpID09PSBjdXJyZW50RGF0ZS5nZXREYXRlKClcbiAgICAgICAgICAgICYmIGRhdGUuZ2V0TW9udGgoKSA9PT0gY3VycmVudERhdGUuZ2V0TW9udGgoKVxuICAgICAgICAgICAgJiYgZGF0ZS5nZXRGdWxsWWVhcigpID09PSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGF5LWNvbnRhaW5lci10b2RheVwiKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtbW9udGgtZGF5XCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgaGlnaGxpZ2h0U2VsZWN0ZWREYXkoZGF0ZSkge1xuICAgICAgICBjb25zdCBkYXRlQ29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY3VycmVudC1tb250aC1kYXlcIilcbiAgICAgICAgZGF0ZSA9IGRhdGUuc2xpY2UoLTIpIDwgMTAgPyBkYXRlLnNsaWNlKC0xKSA6IGRhdGUuc2xpY2UoLTIpXG4gICAgICAgIGRhdGVDb250YWluZXJzLmZvckVhY2goY29udGFpbmVyID0+IHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZGF5LWNvbnRhaW5lci1zZWxlY3RlZFwiKVxuICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmRheS1udW1iZXJcIikudGV4dENvbnRlbnQgPT09IGRhdGUpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRheS1jb250YWluZXItc2VsZWN0ZWRcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgbWFya0RheVdpdGhUYXNrKGRhdGUsIGNvbnRhaW5lcikge1xuICAgICAgICBpZiAoVGFzay5maW5kVGFza3NGb3JEYXRlKGRhdGUpLmxlbmd0aCkge1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkYXktd2l0aC10YXNrXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgaGFuZGxlU3dpcGUoZSwgdG91Y2hFdmVudCkge1xuICAgICAgICB0b3VjaEV2ZW50LnNldEVuZEV2ZW50KGUpXG4gICAgICAgIGlmICh0b3VjaEV2ZW50LmlzU3dpcGVSaWdodCgpKSB7XG4gICAgICAgICAgICB0aGlzLnN3aXRjaFRvUHJldmlvdXNNb250aCgpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvdWNoRXZlbnQuaXNTd2lwZUxlZnQoKSkge1xuICAgICAgICAgICAgdGhpcy5zd2l0Y2hUb05leHRNb250aCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgaGFuZGxlRGF5Q2xpY2soZGF0ZSkge1xuICAgICAgICB0aGlzLmhpZ2hsaWdodFNlbGVjdGVkRGF5KGRhdGUpXG4gICAgICAgIFRhc2tzTGlzdC51cGRhdGUoZGF0ZSlcbiAgICAgICAgSG9tZS51cGRhdGVEYXRlQ29udGFpbmVyKGRhdGUpXG4gICAgfVxuXG4gICAgc3RhdGljIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2FsZW5kYXJcIilcbiAgICAgICAgdGhpcy5jcmVhdGVXaWRnZXQodGhpcy50b2RheXNEYXRlKVxuICAgICAgICByZXR1cm4gdGhpcy5odG1sRWxlbWVudFxuICAgIH1cbn0iLCJpbXBvcnQgeyBuYW5vaWQgfSBmcm9tIFwibmFub2lkXCJcbmltcG9ydCBGb2xkZXJzVGFiIGZyb20gXCIuLi9UYWJzL0ZvbGRlcnMvRm9sZGVyc1RhYlwiXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi4vVUkvTWFpblwiXG5pbXBvcnQgTG9jYWxTdG9yYWdlIGZyb20gXCIuLi9VdGlscy9Mb2NhbFN0b3JhZ2VcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb2xkZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5pZCA9IG5hbm9pZCgpXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdXG4gICAgfVxuXG4gICAgc3RhdGljIHNob3coZm9sZGVySWQpIHtcbiAgICAgICAgTWFpbi5jaGFuZ2VDb250ZW50KEZvbGRlcnNUYWIucmVuZGVyKGZvbGRlcklkKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2VuZXJhdGVEZWZhdWx0Rm9sZGVyKCkge1xuICAgICAgICBjb25zdCBkZWZhdWx0Rm9sZGVyID0gbmV3IHRoaXMoXCJEZWZhdWx0XCIpXG4gICAgICAgIGRlZmF1bHRGb2xkZXIuaWQgPSBcIkRFRkFVTFRcIlxuICAgICAgICBMb2NhbFN0b3JhZ2Uuc2F2ZUZvbGRlcihkZWZhdWx0Rm9sZGVyKVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRTb3J0ZWRUYXNrcyhmb2xkZXJJZCkge1xuICAgICAgICBjb25zdCBmb2xkZXIgPSBMb2NhbFN0b3JhZ2UuZ2V0Rm9sZGVyKGZvbGRlcklkKVxuICAgICAgICBjb25zdCB0YXNrcyA9IFtdXG4gICAgICAgIGNvbnN0IHRhc2tzRG9uZSA9IFtdXG4gICAgICAgIGZvbGRlci50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2suY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHRhc2tzRG9uZS5wdXNoKHsgdGFzaywgZm9sZGVyIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRhc2suY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHRhc2tzLnB1c2goeyB0YXNrLCBmb2xkZXIgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRhc2tzLmNvbmNhdCh0YXNrc0RvbmUpXG4gICAgfVxuXG4gICAgc3RhdGljIHVwZGF0ZShmb2xkZXIpIHtcbiAgICAgICAgTG9jYWxTdG9yYWdlLnJlbW92ZShmb2xkZXIpXG4gICAgICAgIExvY2FsU3RvcmFnZS5hZGQoZm9sZGVyKVxuICAgIH1cblxuICAgIHN0YXRpYyBkZWxldGUoZm9sZGVySWQpIHtcbiAgICAgICAgY29uc3QgZm9sZGVycyA9IExvY2FsU3RvcmFnZS5nZXQoKS5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBmb2xkZXJJZClcbiAgICAgICAgTG9jYWxTdG9yYWdlLnNldChmb2xkZXJzKVxuICAgIH1cbn0iLCJpbXBvcnQgVGFza3NMaXN0IGZyb20gXCIuLi9UYXNrcy9UYXNrc0xpc3RcIlxuaW1wb3J0IEVkaXRJY29uIGZyb20gXCIuLi9JY29ucy9lZGl0XCJcbmltcG9ydCBFeHBhbmRJY29uIGZyb20gXCIuLi9JY29ucy9leHBhbmRcIlxuaW1wb3J0IENvbGxhcHNlSWNvbiBmcm9tIFwiLi4vSWNvbnMvY29sbGFwc2VcIlxuaW1wb3J0IFBsdXNJY29uIGZyb20gXCIuLi9JY29ucy9wbHVzXCJcbmltcG9ydCBGb2xkZXIgZnJvbSBcIi4vRm9sZGVyXCJcbmltcG9ydCBMb2NhbFN0b3JhZ2UgZnJvbSBcIi4uL1V0aWxzL0xvY2FsU3RvcmFnZVwiXG5pbXBvcnQgRWRpdEZvbGRlckZvcm0gZnJvbSBcIi4uL0Zvcm1zL3N1YmNvbXBvbmVudHMvRWRpdEZvbGRlckZvcm1cIlxuaW1wb3J0IE1haW4gZnJvbSBcIi4uL1VJL01haW5cIlxuaW1wb3J0IE5ld1Rhc2tGb3JtIGZyb20gXCIuLi9Gb3Jtcy9zdWJjb21wb25lbnRzL05ld1Rhc2tGb3JtXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9sZGVyc0xpc3Qge1xuICAgIHN0YXRpYyBodG1sRWxlbWVudCA9IHRoaXMuY3JlYXRlSHRtbEVsZW1lbnQoKVxuXG4gICAgc3RhdGljIHJlbmRlcihleHBhZGVkRm9sZGVycyA9IFtcIkRFRkFVTFRcIl0pIHtcbiAgICAgICAgdGhpcy5jbGVhckh0bWxFbGVtZW50KClcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUZvbGRlcnNMaXN0KGV4cGFkZWRGb2xkZXJzKSlcbiAgICAgICAgcmV0dXJuIHRoaXMuaHRtbEVsZW1lbnRcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlSHRtbEVsZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZvbGRlcnMtbGlzdC1jb250YWluZXJcIilcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xlYXJIdG1sRWxlbWVudCgpIHtcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiXG4gICAgfVxuXG4gICAgc3RhdGljIHJlZnJlc2goKSB7XG4gICAgICAgIGNvbnN0IGV4cGFkZWRGb2xkZXJzID0gdGhpcy5nZXRFeHBhbmRlZEZvbGRlcnNBcnJheSgpXG4gICAgICAgIHRoaXMucmVuZGVyKGV4cGFkZWRGb2xkZXJzKVxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVGb2xkZXJzTGlzdChleHBhbmRlZEZvbGRlcnMpIHtcbiAgICAgICAgY29uc3QgZm9sZGVyTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxuICAgICAgICBmb2xkZXJMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb2xkZXJzLWxpc3RcIilcblxuICAgICAgICBsZXQgZm9sZGVycyA9IExvY2FsU3RvcmFnZS5nZXQoKVxuXG4gICAgICAgIGlmIChmb2xkZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgRm9sZGVyLmdlbmVyYXRlRGVmYXVsdEZvbGRlcigpXG4gICAgICAgICAgICBmb2xkZXJzID0gTG9jYWxTdG9yYWdlLmdldCgpXG4gICAgICAgIH1cblxuICAgICAgICBmb2xkZXJzLmZvckVhY2goZm9sZGVyID0+IHtcbiAgICAgICAgICAgIGZvbGRlckxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVMaXN0SXRlbShmb2xkZXIsIGV4cGFuZGVkRm9sZGVycykpXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGZvbGRlckxpc3RDb250YWluZXJcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlTGlzdEl0ZW0oZm9sZGVyLCBleHBhZGVkRm9sZGVycykge1xuICAgICAgICBjb25zdCBmb2xkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgZm9sZGVyQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtZm9sZGVyLWlkXCIsIGZvbGRlci5pZClcblxuICAgICAgICBjb25zdCB0b3BCYXIgPSB0aGlzLmNyZWF0ZUZvbGRlclRvcEJhcihmb2xkZXIpXG4gICAgICAgIGZvbGRlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3BCYXIpXG5cbiAgICAgICAgZm9sZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKFRhc2tzTGlzdC5zaG93VGFza3MoRm9sZGVyLmdldFNvcnRlZFRhc2tzKGZvbGRlci5pZCkpKVxuXG4gICAgICAgIGlmIChleHBhZGVkRm9sZGVycy5pbmNsdWRlcyhmb2xkZXIuaWQpKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUV4cGFuZEJ1dHRvbkNsaWNrKGZvbGRlci5pZCwgZm9sZGVyQ29udGFpbmVyKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvbGRlckNvbnRhaW5lclxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVGb2xkZXJUb3BCYXIoZm9sZGVyKSB7XG4gICAgICAgIGNvbnN0IHRvcEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgdG9wQmFyLmNsYXNzTGlzdC5hZGQoXCJmb2xkZXJzLWxpc3QtdG9wLWJhclwiKVxuXG4gICAgICAgIGNvbnN0IGZvbGRlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGZvbGRlck5hbWUuY2xhc3NMaXN0LmFkZChcImZvbGRlci1uYW1lXCIpXG4gICAgICAgIHRvcEJhci5hcHBlbmRDaGlsZChmb2xkZXJOYW1lKVxuICAgICAgICBjb25zdCBmb2xkZXJOYW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgZm9sZGVyTmFtZVRleHQudGV4dENvbnRlbnQgPSBmb2xkZXIubmFtZVxuICAgICAgICBmb2xkZXJOYW1lLmFwcGVuZENoaWxkKGZvbGRlck5hbWVUZXh0KVxuXG4gICAgICAgIGlmIChmb2xkZXIuaWQgIT09IFwiREVGQVVMVFwiKSB7XG4gICAgICAgICAgICB0b3BCYXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFZGl0Rm9sZGVyQnV0dG9uKGZvbGRlcikpXG4gICAgICAgIH1cbiAgICAgICAgdG9wQmFyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlQWRkVGFza1RvRm9sZGVyQnV0dG9uKGZvbGRlcikpXG4gICAgICAgIHRvcEJhci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUV4cGFuZEZvbGRlckJ1dHRvbihmb2xkZXIuaWQpKVxuXG4gICAgICAgIHJldHVybiB0b3BCYXJcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlRWRpdEZvbGRlckJ1dHRvbihmb2xkZXIpIHtcbiAgICAgICAgY29uc3QgZWRpdEZvbGRlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgZWRpdEZvbGRlckJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZm9sZGVyLWxpc3QtdG9wLWJhci1idXR0b25cIiwgXCJmb2xkZXItZWRpdC1idXR0b25cIilcbiAgICAgICAgZWRpdEZvbGRlckJ1dHRvbi5pbm5lckhUTUwgPSBFZGl0SWNvblxuICAgICAgICBlZGl0Rm9sZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gbmV3IEVkaXRGb2xkZXJGb3JtKGZvbGRlcilcbiAgICAgICAgICAgIE1haW4uc2hvd1NsaWRlQ29udGVudChmb3JtLnJlbmRlcigpKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gZWRpdEZvbGRlckJ1dHRvblxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVBZGRUYXNrVG9Gb2xkZXJCdXR0b24oZm9sZGVyKSB7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tUb0ZvbGRlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgYWRkVGFza1RvRm9sZGVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmb2xkZXItbGlzdC10b3AtYmFyLWJ1dHRvblwiKVxuICAgICAgICBhZGRUYXNrVG9Gb2xkZXJCdXR0b24uaW5uZXJIVE1MID0gUGx1c0ljb25cbiAgICAgICAgYWRkVGFza1RvRm9sZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBNYWluLnNob3dTbGlkZUNvbnRlbnQobmV3IE5ld1Rhc2tGb3JtKHVuZGVmaW5lZCwgZm9sZGVyKS5yZW5kZXIoKSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGFkZFRhc2tUb0ZvbGRlckJ1dHRvblxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVFeHBhbmRGb2xkZXJCdXR0b24oZm9sZGVySWQpIHtcbiAgICAgICAgY29uc3QgZXhwYW5kRm9sZGVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICBleHBhbmRGb2xkZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcImZvbGRlci1saXN0LXRvcC1iYXItYnV0dG9uXCIsIFwiZm9sZGVyLWV4cGFuZC1idXR0b25cIilcbiAgICAgICAgZXhwYW5kRm9sZGVyQnV0dG9uLmlubmVySFRNTCA9IEV4cGFuZEljb25cbiAgICAgICAgZXhwYW5kRm9sZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmhhbmRsZUV4cGFuZEJ1dHRvbkNsaWNrKGZvbGRlcklkKSlcbiAgICAgICAgcmV0dXJuIGV4cGFuZEZvbGRlckJ1dHRvblxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRFeHBhbmRlZEZvbGRlcnNBcnJheSgpIHtcbiAgICAgICAgY29uc3QgZXhwYW5kZWRIdG1sRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1mb2xkZXItZXhwYW5kZWQ9XCJleHBhbmRlZFwiXWApXG4gICAgICAgIGNvbnN0IGV4cGFkZWRGb2xkZXJzQXJyYXkgPSBbXVxuICAgICAgICBleHBhbmRlZEh0bWxFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4gZXhwYWRlZEZvbGRlcnNBcnJheS5wdXNoKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1mb2xkZXItaWRcIikpKVxuICAgICAgICByZXR1cm4gZXhwYWRlZEZvbGRlcnNBcnJheVxuICAgIH1cblxuICAgIHN0YXRpYyBleHBhbmRGb2xkZXIoZm9sZGVySHRtbEVsZW1lbnQpIHtcbiAgICAgICAgZm9sZGVySHRtbEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1mb2xkZXItZXhwYW5kZWRcIiwgXCJleHBhbmRlZFwiKVxuICAgICAgICBjb25zdCBsaXN0ID0gZm9sZGVySHRtbEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1saXN0XCIpXG4gICAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZChcInRhc2tzLWxpc3QtZXhwYW5kZWRcIilcbiAgICB9XG5cbiAgICBzdGF0aWMgY29sbGFwc2VGb2xkZXIoZm9sZGVySHRtbEVsZW1lbnQpIHtcbiAgICAgICAgZm9sZGVySHRtbEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1mb2xkZXItZXhwYW5kZWRcIilcbiAgICAgICAgY29uc3QgbGlzdCA9IGZvbGRlckh0bWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtbGlzdFwiKVxuICAgICAgICBsaXN0LmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrcy1saXN0LWV4cGFuZGVkXCIpXG4gICAgfVxuXG4gICAgc3RhdGljIGhhbmRsZUV4cGFuZEJ1dHRvbkNsaWNrKGZvbGRlcklkLCBmb2xkZXJDb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgZm9sZGVySHRtbEVsZW1lbnQgPSBmb2xkZXJDb250YWluZXIgPyBmb2xkZXJDb250YWluZXIgOiB0aGlzLmh0bWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWZvbGRlci1pZD1cIiR7Zm9sZGVySWR9XCJdYClcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZm9sZGVySHRtbEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb2xkZXItZXhwYW5kLWJ1dHRvblwiKVxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImJ1dHRvbi1leHBhbmRlZFwiKVxuICAgICAgICBjb25zdCBpc0V4cGFuZGVkID0gYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImJ1dHRvbi1leHBhbmRlZFwiKVxuICAgICAgICBpZiAoaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IENvbGxhcHNlSWNvblxuICAgICAgICAgICAgdGhpcy5leHBhbmRGb2xkZXIoZm9sZGVySHRtbEVsZW1lbnQpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0V4cGFuZGVkKSB7XG4gICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gRXhwYW5kSWNvblxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZvbGRlcihmb2xkZXJIdG1sRWxlbWVudClcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgXCIuL2Zvcm1zLmNzc1wiXG5pbXBvcnQgTG9jYWxTdG9yYWdlIGZyb20gXCIuLi9VdGlscy9Mb2NhbFN0b3JhZ2VcIlxuaW1wb3J0IFNhdmVJY29uIGZyb20gXCIuLi9JY29ucy9zYXZlXCJcbmltcG9ydCBSZW1vdmVJY29uIGZyb20gXCIuLi9JY29ucy9yZW1vdmVcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmh0bWxFbGVtZW50ID0gdGhpcy5jcmVhdGVGb3JtKClcbiAgICAgICAgdGhpcy5lcnJvckJveCA9IHRoaXMuY3JlYXRlRXJyb3JCb3goKVxuICAgIH1cblxuICAgIGNyZWF0ZUZvcm0oKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxuICAgICAgICByZXR1cm4gZm9ybVxuICAgIH1cblxuICAgIHZhbGlkYXRlRm9ybSgpIHtcbiAgICAgICAgdGhpcy5lcnJvckJveC50ZXh0Q29udGVudCA9IFwiXCJcbiAgICAgICAgY29uc3QgY29udGVudFBhdGVybiA9IC9eKC58Llxcbil7MSx9JC9nXG4gICAgICAgIGlmICghY29udGVudFBhdGVybi50ZXN0KHRoaXMuaW5wdXROYW1lLnZhbHVlLnRyaW0oKSkpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JCb3gudGV4dENvbnRlbnQgPSBcIlRhc2sgbXVzdCBjb250YWluIGF0IGxlYXN0IDEgY2hhcmFjdGVyXCJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5wdXROYW1lLnZhbHVlID0gdGhpcy5pbnB1dE5hbWUudmFsdWUudHJpbSgpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgYWRkSW5wdXQoYXR0cmlidXRlcykge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goKHsgdHlwZSwgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKHR5cGUsIHZhbHVlKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gaW5wdXRcbiAgICB9XG5cbiAgICBhZGRMYWJlbChpZCwgdGV4dCkge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaWQpXG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gdGV4dFxuICAgICAgICByZXR1cm4gbGFiZWxcbiAgICB9XG5cbiAgICBhZGRUZXh0QXJlYShhdHRyaWJ1dGVzLCB0ZXh0KSB7XG4gICAgICAgIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpXG4gICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaCgoeyB0eXBlLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgICAgICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUodHlwZSwgdmFsdWUpXG4gICAgICAgIH0pXG4gICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICB0ZXh0QXJlYS50ZXh0Q29udGVudCA9IHRleHRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGV4dEFyZWFcbiAgICB9XG5cbiAgICBjcmVhdGVGb2xkZXJTZWxlY3QoKSB7XG4gICAgICAgIGNvbnN0IGZvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIilcbiAgICAgICAgZm9sZGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWZvbGRlclwiKVxuXG4gICAgICAgIExvY2FsU3RvcmFnZS5nZXQoKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gaXRlbS5uYW1lXG4gICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwiZGF0YS1mb2xkZXItaWRcIiwgaXRlbS5pZClcbiAgICAgICAgICAgIGlmICh0aGlzLmZvbGRlciAmJiBpdGVtLmlkID09PSB0aGlzLmZvbGRlci5pZCkge1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcInNlbGVjdGVkXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuZm9sZGVyICYmIGl0ZW0uaWQgPT09IFwiMFwiKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwic2VsZWN0ZWRcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvbGRlci5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGZvbGRlclxuICAgIH1cblxuICAgIGNyZWF0ZUVycm9yQm94KCkge1xuICAgICAgICBjb25zdCBlcnJvckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgZXJyb3JCb3guY2xhc3NMaXN0LmFkZChcImZvcm0tZXJyb3JcIilcbiAgICAgICAgcmV0dXJuIGVycm9yQm94XG4gICAgfVxuXG4gICAgY3JlYXRlUmVtb3ZlQnV0dG9uKHJlbW92ZUhhbmRsZXIpIHtcbiAgICAgICAgY29uc3QgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICByZW1vdmVCdXR0b24uaW5uZXJIVE1MID0gUmVtb3ZlSWNvblxuICAgICAgICByZW1vdmVCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKVxuICAgICAgICByZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUhhbmRsZXIpXG4gICAgICAgIHJldHVybiByZW1vdmVCdXR0b25cbiAgICB9XG5cbiAgICBjcmVhdGVTdWJtaXQoYnV0dG9uQ29udGVudCkge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic3VibWl0LWJ1dHRvblwiLCBcImZsb2F0aW5nLWJ1dHRvblwiKVxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gYnV0dG9uQ29udGVudCB8fCBTYXZlSWNvblxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4gdGhpcy5zdWJtaXRCdXR0b25IYW5kbGVyKGUpKVxuICAgICAgICByZXR1cm4gYnV0dG9uXG4gICAgfVxufSIsImltcG9ydCBGb3JtIGZyb20gXCIuLi9Gb3JtXCJcbmltcG9ydCBGb2xkZXIgZnJvbSAnLi4vLi4vRm9sZGVycy9Gb2xkZXInXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi4vLi4vVUkvTWFpblwiXG5pbXBvcnQgQ2FsZW5kYXJUYWIgZnJvbSBcIi4uLy4uL1RhYnMvQ2FsZW5kYXIvQ2FsZW5kYXJUYWJcIlxuaW1wb3J0IFRhc2tzTGlzdCBmcm9tIFwiLi4vLi4vVGFza3MvVGFza3NMaXN0XCJcbmltcG9ydCBGb2xkZXJzTGlzdCBmcm9tIFwiLi4vLi4vRm9sZGVycy9Gb2xkZXJzTGlzdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRGb2xkZXJGb3JtIGV4dGVuZHMgRm9ybSB7XG4gICAgY29uc3RydWN0b3IoZm9sZGVyLCB0b3BCYXIpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmZvbGRlciA9IGZvbGRlclxuICAgICAgICB0aGlzLnRvcEJhciA9IHRvcEJhclxuICAgICAgICB0aGlzLmlucHV0TmFtZSA9IHRoaXMuYWRkSW5wdXQoW1xuICAgICAgICAgICAgeyB0eXBlOiBcInR5cGVcIiwgdmFsdWU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICB7IHR5cGU6IFwiaWRcIiwgdmFsdWU6IFwiZm9sZGVyLW5hbWVcIiB9LFxuICAgICAgICAgICAgeyB0eXBlOiBcInZhbHVlXCIsIHZhbHVlOiB0aGlzLmZvbGRlci5uYW1lIH1cbiAgICAgICAgXSlcbiAgICB9XG5cbiAgICBjcmVhdGVSZW1vdmVGb2xkZXJCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IHRoaXMuY3JlYXRlUmVtb3ZlQnV0dG9uKCgpID0+IHtcbiAgICAgICAgICAgIEZvbGRlci5kZWxldGUodGhpcy5mb2xkZXIuaWQpXG4gICAgICAgICAgICBGb2xkZXJzTGlzdC5yZWZyZXNoKHRoaXMuZm9sZGVyLmlkKVxuICAgICAgICAgICAgVGFza3NMaXN0LnVwZGF0ZSh0aGlzLmR1ZURhdGUpXG4gICAgICAgICAgICBNYWluLmNsb3NlU2xpZGVDb250YWluZXIoKVxuICAgICAgICB9KVxuICAgICAgICByZW1vdmVCdXR0b24uY2xhc3NMaXN0LmFkZChcInRhc2stcmVtb3ZlLWJ1dHRvblwiKVxuICAgICAgICByZXR1cm4gcmVtb3ZlQnV0dG9uXG4gICAgfVxuXG4gICAgc3VibWl0QnV0dG9uSGFuZGxlcihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9sZGVyLm5hbWUgPSB0aGlzLmlucHV0TmFtZS52YWx1ZVxuICAgICAgICBGb2xkZXIudXBkYXRlKHRoaXMuZm9sZGVyKVxuXG4gICAgICAgIENhbGVuZGFyVGFiLnJlZnJlc2godGhpcy5kdWVEYXRlKVxuICAgICAgICBGb2xkZXJzTGlzdC5yZWZyZXNoKHRoaXMuZm9sZGVyLmlkKVxuICAgICAgICBUYXNrc0xpc3QudXBkYXRlKHRoaXMuZHVlRGF0ZSlcbiAgICAgICAgTWFpbi5jbG9zZVNsaWRlQ29udGFpbmVyKClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5hZGRMYWJlbChcImZvbGRlci1uYW1lXCIsIFwiRm9sZGVyIG5hbWU6XCIpKVxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuaW5wdXROYW1lKVxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlU3VibWl0KCkpXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lcnJvckJveClcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZm9sZGVyLWZvcm1cIilcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVJlbW92ZUZvbGRlckJ1dHRvbigpKVxuICAgICAgICByZXR1cm4gdGhpcy5odG1sRWxlbWVudFxuICAgIH1cblxufSIsImltcG9ydCBUYXNrIGZyb20gXCIuLi8uLi9UYXNrcy9UYXNrXCJcbmltcG9ydCBGb3JtIGZyb20gXCIuLi9Gb3JtXCJcbmltcG9ydCBNYWluIGZyb20gXCIuLi8uLi9VSS9NYWluXCJcbmltcG9ydCBDYWxlbmRhclRhYiBmcm9tIFwiLi4vLi4vVGFicy9DYWxlbmRhci9DYWxlbmRhclRhYlwiXG5pbXBvcnQgVGFza3NMaXN0IGZyb20gXCIuLi8uLi9UYXNrcy9UYXNrc0xpc3RcIlxuaW1wb3J0IEZvbGRlcnNMaXN0IGZyb20gXCIuLi8uLi9Gb2xkZXJzL0ZvbGRlcnNMaXN0XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdFRhc2tGb3JtIGV4dGVuZHMgRm9ybSB7XG4gICAgY29uc3RydWN0b3IodGFza0lkKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5vYmplY3QgPSB7IC4uLlRhc2suZ2V0KHRhc2tJZCkgfVxuICAgICAgICB0aGlzLmZvbGRlciA9IHRoaXMub2JqZWN0LmZvbGRlclxuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLm9iamVjdC50YXNrLm5hbWVcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gdGhpcy5vYmplY3QudGFzay5kdWVEYXRlXG4gICAgICAgIHRoaXMuaW5wdXROYW1lID0gdGhpcy5hZGRUZXh0QXJlYShbXG4gICAgICAgICAgICB7IHR5cGU6IFwiaWRcIiwgdmFsdWU6IFwidGFzay1uYW1lXCIgfV0sXG4gICAgICAgICAgICB0aGlzLm9iamVjdC50YXNrLm5hbWUpXG4gICAgICAgIHRoaXMuaW5wdXREdWVEYXRlID0gdGhpcy5hZGRJbnB1dChbXG4gICAgICAgICAgICB7IHR5cGU6IFwiaWRcIiwgdmFsdWU6IFwiZWRpdC1uYW1lXCIgfSxcbiAgICAgICAgICAgIHsgdHlwZTogXCJ0eXBlXCIsIHZhbHVlOiBcImRhdGVcIiB9LFxuICAgICAgICAgICAgeyB0eXBlOiBcInZhbHVlXCIsIHZhbHVlOiB0aGlzLm9iamVjdC50YXNrLmR1ZURhdGUgfVxuICAgICAgICBdKVxuICAgICAgICB0aGlzLmlucHV0Rm9sZGVyID0gdGhpcy5jcmVhdGVGb2xkZXJTZWxlY3QoKVxuICAgIH1cblxuICAgIGNyZWF0ZVJlbW92ZVRhc2tCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IHRoaXMuY3JlYXRlUmVtb3ZlQnV0dG9uKCgpID0+IHtcbiAgICAgICAgICAgIFRhc2sucmVtb3ZlKHRoaXMuZm9sZGVyLCB0aGlzLm9iamVjdC50YXNrKVxuICAgICAgICAgICAgQ2FsZW5kYXJUYWIucmVmcmVzaCh0aGlzLmR1ZURhdGUpXG4gICAgICAgICAgICBGb2xkZXJzTGlzdC5yZWZyZXNoKHRoaXMuZm9sZGVyLmlkKVxuICAgICAgICAgICAgVGFza3NMaXN0LnVwZGF0ZSh0aGlzLmR1ZURhdGUpXG4gICAgICAgICAgICBNYWluLmNsb3NlU2xpZGVDb250YWluZXIoKVxuICAgICAgICB9KVxuICAgICAgICByZW1vdmVCdXR0b24uY2xhc3NMaXN0LmFkZChcInRhc2stcmVtb3ZlLWJ1dHRvblwiKVxuICAgICAgICByZXR1cm4gcmVtb3ZlQnV0dG9uXG4gICAgfVxuXG4gICAgc3VibWl0QnV0dG9uSGFuZGxlcihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pbnB1dER1ZURhdGUudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXREdWVEYXRlLnZhbHVlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vYmplY3QudGFzay5uYW1lID0gdGhpcy5pbnB1dE5hbWUudmFsdWVcbiAgICAgICAgdGhpcy5vYmplY3QudGFzay5kdWVEYXRlID0gdGhpcy5pbnB1dER1ZURhdGUudmFsdWVcblxuICAgICAgICBUYXNrLnJlbW92ZSh0aGlzLmZvbGRlciwgdGhpcy5vYmplY3QudGFzaylcbiAgICAgICAgVGFzay5hZGQodGhpcy5vYmplY3QudGFzaywgdGhpcy5pbnB1dEZvbGRlci5zZWxlY3RlZE9wdGlvbnNbMF0uZ2V0QXR0cmlidXRlKFwiZGF0YS1mb2xkZXItaWRcIikpXG5cbiAgICAgICAgQ2FsZW5kYXJUYWIucmVmcmVzaCh0aGlzLmR1ZURhdGUpXG4gICAgICAgIEZvbGRlcnNMaXN0LnJlZnJlc2godGhpcy5mb2xkZXIuaWQpXG4gICAgICAgIFRhc2tzTGlzdC51cGRhdGUodGhpcy5kdWVEYXRlKVxuICAgICAgICBNYWluLmNsb3NlU2xpZGVDb250YWluZXIoKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmFkZExhYmVsKFwidGFzay1mb2xkZXJcIiwgXCJGb2xkZXI6XCIpKVxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuaW5wdXRGb2xkZXIpXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5hZGRMYWJlbChcInRhc2stZHVlLWRhdGVcIiwgXCJEdWUgZGF0ZTpcIikpXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dER1ZURhdGUpXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dE5hbWUpXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lcnJvckJveClcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVN1Ym1pdCgpKVxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlUmVtb3ZlVGFza0J1dHRvbigpKVxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWZvcm1cIilcbiAgICAgICAgcmV0dXJuIHRoaXMuaHRtbEVsZW1lbnRcbiAgICB9XG59IiwiaW1wb3J0IExvY2FsU3RvcmFnZSBmcm9tIFwiLi4vLi4vVXRpbHMvTG9jYWxTdG9yYWdlXCJcbmltcG9ydCBGb2xkZXJzTGlzdCBmcm9tIFwiLi4vLi4vRm9sZGVycy9Gb2xkZXJzTGlzdFwiXG5pbXBvcnQgRm9sZGVyIGZyb20gXCIuLi8uLi9Gb2xkZXJzL0ZvbGRlclwiXG5pbXBvcnQgVGFza3NMaXN0IGZyb20gXCIuLi8uLi9UYXNrcy9UYXNrc0xpc3RcIlxuaW1wb3J0IE1haW4gZnJvbSBcIi4uLy4uL1VJL01haW5cIlxuaW1wb3J0IEZvcm0gZnJvbSBcIi4uL0Zvcm1cIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdGb2xkZXJGb3JtIGV4dGVuZHMgRm9ybSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5pbnB1dE5hbWUgPSB0aGlzLmFkZElucHV0KFtcbiAgICAgICAgICAgIHsgdHlwZTogXCJ0eXBlXCIsIHZhbHVlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgeyB0eXBlOiBcImlkXCIsIHZhbHVlOiBcImZvbGRlci1uYW1lXCIgfSxcbiAgICAgICAgICAgIHsgdHlwZTogXCJwbGFjZWhvbGRlclwiLCB2YWx1ZTogXCJJbnB1dCBuZXcgZm9sZGVyIGhlcmVcIiB9XG4gICAgICAgIF0pXG4gICAgICAgIHRoaXMuZm9sZGVyID0gbnVsbFxuICAgIH1cblxuICAgIHN1Ym1pdEJ1dHRvbkhhbmRsZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvbGRlciA9IG5ldyBGb2xkZXIodGhpcy5pbnB1dE5hbWUudmFsdWUpXG4gICAgICAgIExvY2FsU3RvcmFnZS5hZGQodGhpcy5mb2xkZXIpXG4gICAgICAgIEZvbGRlcnNMaXN0LnJlZnJlc2godGhpcy5mb2xkZXIuaWQpXG4gICAgICAgIFRhc2tzTGlzdC51cGRhdGUodGhpcy5kdWVEYXRlKVxuICAgICAgICBNYWluLmNsb3NlU2xpZGVDb250YWluZXIoKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmFkZExhYmVsKFwiZm9sZGVyLW5hbWVcIiwgXCJGb2xkZXIgbmFtZTpcIikpXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dE5hbWUpXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVTdWJtaXQoKSlcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVycm9yQm94KVxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmb2xkZXItZm9ybVwiKVxuICAgICAgICByZXR1cm4gdGhpcy5odG1sRWxlbWVudFxuICAgIH1cbn0iLCJpbXBvcnQgRm9ybSBmcm9tIFwiLi4vRm9ybVwiXG5pbXBvcnQgVGFzayBmcm9tIFwiLi4vLi4vVGFza3MvVGFza1wiXG5pbXBvcnQgQ2FsZW5kYXJUYWIgZnJvbSBcIi4uLy4uL1RhYnMvQ2FsZW5kYXIvQ2FsZW5kYXJUYWJcIlxuaW1wb3J0IFRhc2tzTGlzdCBmcm9tIFwiLi4vLi4vVGFza3MvVGFza3NMaXN0XCJcbmltcG9ydCBNYWluIGZyb20gXCIuLi8uLi9VSS9NYWluXCJcbmltcG9ydCBGb2xkZXJzTGlzdCBmcm9tIFwiLi4vLi4vRm9sZGVycy9Gb2xkZXJzTGlzdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld1Rhc2tGb3JtIGV4dGVuZHMgRm9ybSB7XG4gICAgY29uc3RydWN0b3IoZGF0ZSwgZm9sZGVyKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZSB8fCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdXG4gICAgICAgIHRoaXMuZm9sZGVyID0gZm9sZGVyXG4gICAgICAgIHRoaXMuaW5wdXROYW1lID0gdGhpcy5hZGRUZXh0QXJlYShbXG4gICAgICAgICAgICB7IHR5cGU6IFwiaWRcIiwgdmFsdWU6IFwidGFzay1uYW1lXCIgfSxcbiAgICAgICAgICAgIHsgdHlwZTogXCJwbGFjZWhvbGRlclwiLCB2YWx1ZTogXCJJbnB1dCBuZXcgdGFzayBoZXJlXCIgfVxuICAgICAgICBdKVxuICAgICAgICB0aGlzLmlucHV0RHVlRGF0ZSA9IHRoaXMuYWRkSW5wdXQoW1xuICAgICAgICAgICAgeyB0eXBlOiBcInR5cGVcIiwgdmFsdWU6IFwiZGF0ZVwiIH0sXG4gICAgICAgICAgICB7IHR5cGU6IFwiaWRcIiwgdmFsdWU6IFwidGFzay1kdWUtZGF0ZVwiIH0sXG4gICAgICAgICAgICB7IHR5cGU6IFwidmFsdWVcIiwgdmFsdWU6IHRoaXMuZGF0ZSB9XG4gICAgICAgIF0pXG4gICAgICAgIHRoaXMuaW5wdXRGb2xkZXIgPSB0aGlzLmNyZWF0ZUZvbGRlclNlbGVjdCgpXG4gICAgICAgIHRoaXMuZXJyb3JCb3ggPSB0aGlzLmNyZWF0ZUVycm9yQm94KClcbiAgICB9XG5cbiAgICBzdWJtaXRCdXR0b25IYW5kbGVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlucHV0RHVlRGF0ZS52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dER1ZURhdGUudmFsdWUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRoaXMuaW5wdXROYW1lLnZhbHVlLCB0aGlzLmlucHV0RHVlRGF0ZS52YWx1ZSlcbiAgICAgICAgVGFzay5hZGQodGFzaywgdGhpcy5pbnB1dEZvbGRlci5zZWxlY3RlZE9wdGlvbnNbMF0uZ2V0QXR0cmlidXRlKFwiZGF0YS1mb2xkZXItaWRcIikpXG5cbiAgICAgICAgQ2FsZW5kYXJUYWIucmVmcmVzaCh0aGlzLmRhdGUpXG4gICAgICAgIEZvbGRlcnNMaXN0LnJlZnJlc2godGhpcy5pbnB1dEZvbGRlci5zZWxlY3RlZE9wdGlvbnNbMF0uZ2V0QXR0cmlidXRlKFwiZGF0YS1mb2xkZXItaWRcIikpXG4gICAgICAgIFRhc2tzTGlzdC51cGRhdGUodGhpcy5kYXRlKVxuICAgICAgICBNYWluLmNsb3NlU2xpZGVDb250YWluZXIoKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmFkZExhYmVsKFwidGFzay1mb2xkZXJcIiwgXCJGb2xkZXI6XCIpKVxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuaW5wdXRGb2xkZXIpXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5hZGRMYWJlbChcInRhc2stZHVlLWRhdGVcIiwgXCJEdWUgZGF0ZTpcIikpXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dER1ZURhdGUpXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dE5hbWUpXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lcnJvckJveClcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVN1Ym1pdCgpKVxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWZvcm1cIilcbiAgICAgICAgcmV0dXJuIHRoaXMuaHRtbEVsZW1lbnRcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjQ4XCIgd2lkdGg9XCI0OFwiIHZpZXdCb3g9XCIwIDAgNDggNDhcIj48cGF0aCBkPVwiTTI0IDQwLjE1IDcuODUgMjQgMjQgNy44NWwyLjQgMi40TDE0LjM1IDIyLjNoMjUuOHYzLjRoLTI1LjhMMjYuNCAzNy43NVpcIi8+PC9zdmc+YCIsImV4cG9ydCBkZWZhdWx0IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCI0OFwiIHdpZHRoPVwiNDhcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCI+PHBhdGggZD1cIk0yOCAzNCAxOCAyNGwxMC0xMFpcIi8+PC9zdmc+YCIsImV4cG9ydCBkZWZhdWx0IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCI0OFwiIHdpZHRoPVwiNDhcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCI+PHBhdGggZD1cIk0yMCAzNFYxNGwxMCAxMFpcIi8+PC9zdmc+YCIsImV4cG9ydCBkZWZhdWx0IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCI0OFwiIHdpZHRoPVwiNDhcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCI+PHBhdGggZD1cIk05IDQ0cS0xLjIgMC0yLjEtLjlRNiA0Mi4yIDYgNDFWMTBxMC0xLjIuOS0yLjFRNy44IDcgOSA3aDMuMjVWNGgzLjI1djNoMTdWNGgzLjI1djNIMzlxMS4yIDAgMi4xLjkuOS45LjkgMi4xdjMxcTAgMS4yLS45IDIuMS0uOS45LTIuMS45Wm0wLTNoMzBWMTkuNUg5VjQxWm0wLTI0LjVoMzBWMTBIOVptMCAwVjEwdjYuNVpNMjQgMjhxLS44NSAwLTEuNDI1LS41NzVRMjIgMjYuODUgMjIgMjZxMC0uODUuNTc1LTEuNDI1UTIzLjE1IDI0IDI0IDI0cS44NSAwIDEuNDI1LjU3NVEyNiAyNS4xNSAyNiAyNnEwIC44NS0uNTc1IDEuNDI1UTI0Ljg1IDI4IDI0IDI4Wm0tOCAwcS0uODUgMC0xLjQyNS0uNTc1UTE0IDI2Ljg1IDE0IDI2cTAtLjg1LjU3NS0xLjQyNVExNS4xNSAyNCAxNiAyNHEuODUgMCAxLjQyNS41NzVRMTggMjUuMTUgMTggMjZxMCAuODUtLjU3NSAxLjQyNVExNi44NSAyOCAxNiAyOFptMTYgMHEtLjg1IDAtMS40MjUtLjU3NVEzMCAyNi44NSAzMCAyNnEwLS44NS41NzUtMS40MjVRMzEuMTUgMjQgMzIgMjRxLjg1IDAgMS40MjUuNTc1UTM0IDI1LjE1IDM0IDI2cTAgLjg1LS41NzUgMS40MjVRMzIuODUgMjggMzIgMjhabS04IDhxLS44NSAwLTEuNDI1LS41NzVRMjIgMzQuODUgMjIgMzRxMC0uODUuNTc1LTEuNDI1UTIzLjE1IDMyIDI0IDMycS44NSAwIDEuNDI1LjU3NVEyNiAzMy4xNSAyNiAzNHEwIC44NS0uNTc1IDEuNDI1UTI0Ljg1IDM2IDI0IDM2Wm0tOCAwcS0uODUgMC0xLjQyNS0uNTc1UTE0IDM0Ljg1IDE0IDM0cTAtLjg1LjU3NS0xLjQyNVExNS4xNSAzMiAxNiAzMnEuODUgMCAxLjQyNS41NzVRMTggMzMuMTUgMTggMzRxMCAuODUtLjU3NSAxLjQyNVExNi44NSAzNiAxNiAzNlptMTYgMHEtLjg1IDAtMS40MjUtLjU3NVEzMCAzNC44NSAzMCAzNHEwLS44NS41NzUtMS40MjVRMzEuMTUgMzIgMzIgMzJxLjg1IDAgMS40MjUuNTc1UTM0IDMzLjE1IDM0IDM0cTAgLjg1LS41NzUgMS40MjVRMzIuODUgMzYgMzIgMzZaXCIvPjwvc3ZnPmAiLCJleHBvcnQgZGVmYXVsdCBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiNDhcIiB3aWR0aD1cIjQ4XCIgdmlld0JveD1cIjAgMCA0OCA0OFwiPjxwYXRoIGQ9XCJNMTQuMTUgMzAuNzUgMTIgMjguNmwxMi0xMiAxMiAxMS45NS0yLjE1IDIuMTVMMjQgMjAuODVaXCIvPjwvc3ZnPmAiLCJleHBvcnQgZGVmYXVsdCBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiNDhcIiB3aWR0aD1cIjQ4XCIgdmlld0JveD1cIjAgMCA0OCA0OFwiPjxwYXRoIGQ9XCJNMTguOSAzNiA3LjQgMjQuNWwyLjQ1LTIuNDUgOS4wNSA5LjA1IDE5LjItMTkuMiAyLjQ1IDIuNDVaXCIvPjwvc3ZnPmAiLCJleHBvcnQgZGVmYXVsdCBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiNDhcIiB3aWR0aD1cIjQ4XCIgdmlld0JveD1cIjAgMCA0OCA0OFwiPjxwYXRoIGQ9XCJNOSAzOWgyLjJsMjIuMTUtMjIuMTUtMi4yLTIuMkw5IDM2LjhabTMwLjctMjQuMy02LjQtNi40IDIuMS0yLjFxLjg1LS44NSAyLjEtLjg1dDIuMS44NWwyLjIgMi4ycS44NS44NS44NSAyLjF0LS44NSAyLjFabS0yLjEgMi4xTDEyLjQgNDJINnYtNi40bDI1LjItMjUuMlptLTUuMzUtMS4wNS0xLjEtMS4xIDIuMiAyLjJaXCIvPjwvc3ZnPmAiLCJleHBvcnQgZGVmYXVsdCBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiNDhcIiB3aWR0aD1cIjQ4XCIgdmlld0JveD1cIjAgMCA0OCA0OFwiPjxwYXRoIGQ9XCJtMjQgMzAuNzUtMTItMTIgMi4xNS0yLjE1TDI0IDI2LjVsOS44NS05Ljg1TDM2IDE4LjhaXCIvPjwvc3ZnPmAiLCJleHBvcnQgZGVmYXVsdCBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiNDhcIiB3aWR0aD1cIjQ4XCIgdmlld0JveD1cIjAgMCA0OCA0OFwiPjxwYXRoIGQ9XCJNNy4wNSA0MHEtMS4yIDAtMi4xLS45MjUtLjktLjkyNS0uOS0yLjA3NVYxMXEwLTEuMTUuOS0yLjA3NVE1Ljg1IDggNy4wNSA4aDE0bDMgM2gxN3ExLjE1IDAgMi4wNzUuOTI1LjkyNS45MjUuOTI1IDIuMDc1djIzcTAgMS4xNS0uOTI1IDIuMDc1UTQyLjIgNDAgNDEuMDUgNDBabTAtMjl2MjZoMzRWMTRIMjIuOGwtMy0zSDcuMDVabTAgMHYyNlpcIi8+PC9zdmc+YCIsImV4cG9ydCBkZWZhdWx0IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCI0OFwiIHdpZHRoPVwiNDhcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCI+PHBhdGggZD1cIk04IDQyVjE4TDI0LjEgNiA0MCAxOHYyNEgyOC4zVjI3Ljc1aC04LjY1VjQyWm0zLTNoNS42NVYyNC43NUgzMS4zVjM5SDM3VjE5LjVMMjQuMSA5Ljc1IDExIDE5LjVabTEzLTE0LjY1WlwiLz48L3N2Zz5gIiwiZXhwb3J0IGRlZmF1bHQgYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjQ4XCIgd2lkdGg9XCI0OFwiIHZpZXdCb3g9XCIwIDAgNDggNDhcIj48cGF0aCBkPVwiTTIyLjUgMzhWMjUuNUgxMHYtM2gxMi41VjEwaDN2MTIuNUgzOHYzSDI1LjVWMzhaXCIvPjwvc3ZnPmAiLCJleHBvcnQgZGVmYXVsdCBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiNDhcIiB3aWR0aD1cIjQ4XCIgdmlld0JveD1cIjAgMCA0OCA0OFwiPjxwYXRoIGQ9XCJNMjQgMzRxLjcgMCAxLjE3NS0uNDc1LjQ3NS0uNDc1LjQ3NS0xLjE3NSAwLS43LS40NzUtMS4xNzVRMjQuNyAzMC43IDI0IDMwLjdxLS43IDAtMS4xNzUuNDc1LS40NzUuNDc1LS40NzUgMS4xNzUgMCAuNy40NzUgMS4xNzVRMjMuMyAzNCAyNCAzNFptLTEuMzUtNy42NWgzVjEzLjdoLTNaTTI0IDQ0cS00LjEgMC03Ljc1LTEuNTc1LTMuNjUtMS41NzUtNi4zNzUtNC4zLTIuNzI1LTIuNzI1LTQuMy02LjM3NVE0IDI4LjEgNCAyMy45NXEwLTQuMSAxLjU3NS03Ljc1IDEuNTc1LTMuNjUgNC4zLTYuMzUgMi43MjUtMi43IDYuMzc1LTQuMjc1UTE5LjkgNCAyNC4wNSA0cTQuMSAwIDcuNzUgMS41NzUgMy42NSAxLjU3NSA2LjM1IDQuMjc1IDIuNyAyLjcgNC4yNzUgNi4zNVE0NCAxOS44NSA0NCAyNHEwIDQuMS0xLjU3NSA3Ljc1LTEuNTc1IDMuNjUtNC4yNzUgNi4zNzV0LTYuMzUgNC4zUTI4LjE1IDQ0IDI0IDQ0Wm0uMDUtM3E3LjA1IDAgMTItNC45NzVUNDEgMjMuOTVxMC03LjA1LTQuOTUtMTJUMjQgN3EtNy4wNSAwLTEyLjAyNSA0Ljk1UTcgMTYuOSA3IDI0cTAgNy4wNSA0Ljk3NSAxMi4wMjVRMTYuOTUgNDEgMjQuMDUgNDFaTTI0IDI0WlwiLz48L3N2Zz5gIiwiZXhwb3J0IGRlZmF1bHQgYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjQ4XCIgd2lkdGg9XCI0OFwiIHZpZXdCb3g9XCIwIDAgNDggNDhcIj48cGF0aCBkPVwiTTEzLjA1IDQycS0xLjI1IDAtMi4xMjUtLjg3NVQxMC4wNSAzOVYxMC41SDh2LTNoOS40VjZoMTMuMnYxLjVINDB2M2gtMi4wNVYzOXEwIDEuMi0uOSAyLjEtLjkuOS0yLjEuOVptMjEuOS0zMS41aC0yMS45VjM5aDIxLjlabS0xNi42IDI0LjJoM1YxNC43NWgtM1ptOC4zIDBoM1YxNC43NWgtM1ptLTEzLjYtMjQuMlYzOVpcIi8+PC9zdmc+YCIsImV4cG9ydCBkZWZhdWx0IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCI0OFwiIHdpZHRoPVwiNDhcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCI+PHBhdGggZD1cIk00MiAxMy44NVYzOXEwIDEuMi0uOSAyLjEtLjkuOS0yLjEuOUg5cS0xLjIgMC0yLjEtLjlRNiA0MC4yIDYgMzlWOXEwLTEuMi45LTIuMVE3LjggNiA5IDZoMjUuMTVabS0zIDEuMzVMMzIuOCA5SDl2MzBoMzBaTTI0IDM1Ljc1cTIuMTUgMCAzLjY3NS0xLjUyNVQyOS4yIDMwLjU1cTAtMi4xNS0xLjUyNS0zLjY3NVQyNCAyNS4zNXEtMi4xNSAwLTMuNjc1IDEuNTI1VDE4LjggMzAuNTVxMCAyLjE1IDEuNTI1IDMuNjc1VDI0IDM1Ljc1Wk0xMS42NSAxOC44aDE3Ljl2LTcuMTVoLTE3LjlaTTkgMTUuMlYzOSA5WlwiLz48L3N2Zz5gIiwiZXhwb3J0IGRlZmF1bHQgYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjQ4XCIgd2lkdGg9XCI0OFwiIHZpZXdCb3g9XCIwIDAgNDggNDhcIj48cGF0aCBkPVwibTExLjY1IDQ0IDMuMjUtMTQuMDVMNCAyMC41bDE0LjQtMS4yNUwyNCA2bDUuNiAxMy4yNUw0NCAyMC41bC0xMC45IDkuNDVMMzYuMzUgNDQgMjQgMzYuNTVaXCIvPjwvc3ZnPmAiLCJleHBvcnQgZGVmYXVsdCBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiNDhcIiB3aWR0aD1cIjQ4XCIgdmlld0JveD1cIjAgMCA0OCA0OFwiPjxwYXRoIGQ9XCJtMTYuMTUgMzcuNzUgNy44NS00LjcgNy44NSA0Ljc1LTIuMS04LjkgNi45LTYtOS4xLS44TDI0IDEzLjdsLTMuNTUgOC4zNS05LjEuOCA2LjkgNlpNMTEuNjUgNDRsMy4yNS0xNC4wNUw0IDIwLjVsMTQuNC0xLjI1TDI0IDZsNS42IDEzLjI1TDQ0IDIwLjVsLTEwLjkgOS40NUwzNi4zNSA0NCAyNCAzNi41NVpNMjQgMjYuMjVaXCIvPjwvc3ZnPmAiLCJpbXBvcnQgXCIuL2NhbGVuZGFyVGFiLmNzc1wiXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSBcIi4uLy4uL0NhbGVuZGFyL0NhbGVuZGFyXCJcbmltcG9ydCBOYXYgZnJvbSBcIi4uLy4uL1VJL05hdlwiXG5pbXBvcnQgQ29udmVydERhdGUgZnJvbSBcIi4uLy4uL1V0aWxzL0NvbnZlcnREYXRlXCJcbmltcG9ydCBUYXNrc0xpc3QgZnJvbSBcIi4uLy4uL1Rhc2tzL1Rhc2tzTGlzdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGVuZGFyVGFiIHtcbiAgICBzdGF0aWMgaHRtbEVsZW1lbnQgPSB0aGlzLmNyZWF0ZUh0bWxFbGVtZW50KClcblxuICAgIHN0YXRpYyByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJIdG1sRWxlbWVudCgpXG4gICAgICAgIGNvbnN0IHRvZGF5ID0gQ29udmVydERhdGUudG9ZWVlZTU1ERChuZXcgRGF0ZSgpKVxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmFwcGVuZENoaWxkKENhbGVuZGFyLnJlbmRlcigpKVxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRGF0ZUNvbnRhaW5lcih0b2RheSkpXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQoVGFza3NMaXN0LnJlbmRlcih0b2RheSkpXG4gICAgICAgIE5hdi5zZXRCdXR0b25BY3RpdmUoXCJuYXYtYnV0dG9uLWNhbGVuZGFyXCIpXG4gICAgICAgIHJldHVybiB0aGlzLmh0bWxFbGVtZW50XG4gICAgfVxuXG4gICAgc3RhdGljIHJlZnJlc2goZGF0ZSkge1xuICAgICAgICBDYWxlbmRhci5jcmVhdGVXaWRnZXQobmV3IERhdGUoZGF0ZSkpXG4gICAgICAgIENhbGVuZGFyLmhpZ2hsaWdodFNlbGVjdGVkRGF5KGRhdGUpXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUh0bWxFbGVtZW50KCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjYWxlbmRhci10YWItY29udGFpbmVyXCIpXG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgfVxuXG4gICAgc3RhdGljIGNsZWFySHRtbEVsZW1lbnQoKSB7XG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIlxuICAgIH1cblxuICAgIHN0YXRpYyB1cGRhdGVEYXRlQ29udGFpbmVyKGRhdGUpIHtcbiAgICAgICAgdGhpcy5jbGVhckRhdGVDb250YWluZXIoKVxuICAgICAgICB0aGlzLnNldERhdGVDb250YWluZXJDb250ZW50KGRhdGUpXG4gICAgfVxuXG4gICAgc3RhdGljIGNsZWFyRGF0ZUNvbnRhaW5lcigpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYWxlbmRhci10YWItdGFza3MtbGlzdC10aXRsZVwiKS5pbm5lckhUTUwgPSBcIlwiXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZURhdGVDb250YWluZXIoZGF0ZSkge1xuICAgICAgICBjb25zdCBkYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBkYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjYWxlbmRhci10YWItdGFza3MtbGlzdC10aXRsZVwiKVxuICAgICAgICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuc2V0RGF0ZUNvbnRhaW5lckNvbnRlbnQoZGF0ZSkpXG4gICAgICAgIHJldHVybiBkYXRlQ29udGFpbmVyXG4gICAgfVxuXG4gICAgc3RhdGljIHNldERhdGVDb250YWluZXJDb250ZW50KGRhdGUpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGBUYXNrcyBmb3IgJHtDb252ZXJ0RGF0ZS50b01vcmVIdW1hbihkYXRlKX1gXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIHdyYXBwZXIudGV4dENvbnRlbnQgPSBjb250ZW50XG4gICAgICAgIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbGVuZGFyLXRhYi10YXNrcy1saXN0LXRpdGxlXCIpXG4gICAgICAgIGlmIChkYXRlQ29udGFpbmVyKSBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHdyYXBwZXIpXG4gICAgICAgIGlmICghZGF0ZUNvbnRhaW5lcikgcmV0dXJuIHdyYXBwZXJcbiAgICB9XG59IiwiaW1wb3J0IFwiLi9mb2xkZXJzVGFiLmNzc1wiXG5pbXBvcnQgTmF2IGZyb20gXCIuLi8uLi9VSS9OYXZcIlxuaW1wb3J0IE5ld0ZvbGRlckZvcm0gZnJvbSBcIi4uLy4uL0Zvcm1zL3N1YmNvbXBvbmVudHMvTmV3Rm9sZGVyRm9ybVwiXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi4vLi4vVUkvTWFpblwiXG5pbXBvcnQgRm9sZGVyc0xpc3QgZnJvbSBcIi4uLy4uL0ZvbGRlcnMvRm9sZGVyc0xpc3RcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb2xkZXJzVGFiIHtcbiAgICBzdGF0aWMgaHRtbEVsZW1lbnQgPSB0aGlzLmNyZWF0ZUh0bWxFbGVtZW50KClcblxuICAgIHN0YXRpYyByZW5kZXIoZm9sZGVySWQpIHtcbiAgICAgICAgdGhpcy5jbGVhckh0bWxFbGVtZW50KClcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZU5ld0ZvbGRlckJ1dHRvbigpKVxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmFwcGVuZENoaWxkKEZvbGRlcnNMaXN0LnJlbmRlcihmb2xkZXJJZCkpXG4gICAgICAgIE5hdi5zZXRCdXR0b25BY3RpdmUoXCJuYXYtYnV0dG9uLWZvbGRlcnNcIilcbiAgICAgICAgcmV0dXJuIHRoaXMuaHRtbEVsZW1lbnRcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlSHRtbEVsZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZvbGRlcnMtdGFiLWNvbnRhaW5lclwiKVxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgIH1cblxuICAgIHN0YXRpYyBjbGVhckh0bWxFbGVtZW50KCkge1xuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmlubmVySFRNTCA9IFwiXCJcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlTmV3Rm9sZGVyQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBuZXdGb2xkZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIG5ld0ZvbGRlckJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZm9sZGVyLW5ldy1idXR0b25cIilcbiAgICAgICAgbmV3Rm9sZGVyQnV0dG9uLnRleHRDb250ZW50ID0gXCIrIEFkZCBmb2xkZXJcIlxuICAgICAgICBuZXdGb2xkZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IE1haW4uc2hvd1NsaWRlQ29udGVudChuZXcgTmV3Rm9sZGVyRm9ybSgpLnJlbmRlcigpKSlcblxuICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9sZGVyLW5ldy1idXR0b24td3JhcHBlclwiKVxuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3Rm9sZGVyQnV0dG9uKVxuXG4gICAgICAgIHJldHVybiBidXR0b25Db250YWluZXJcbiAgICB9XG59IiwiaW1wb3J0IE5hdiBmcm9tIFwiLi4vLi4vVUkvTmF2XCJcbmltcG9ydCBcIi4vaG9tZVRhYi5jc3NcIlxuaW1wb3J0IFRhc2tzT3ZlcnZpZXcgZnJvbSBcIi4uLy4uL1Rhc2tzL1Rhc2tzT3ZlcnZpZXdcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lVGFiIHtcbiAgICBzdGF0aWMgaHRtbEVsZW1lbnQgPSB0aGlzLmNyZWF0ZUh0bWxFbGVtZW50KClcblxuICAgIHN0YXRpYyByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJIdG1sRWxlbWVudCgpXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVDb250ZW50KCkpXG4gICAgICAgIE5hdi5zZXRCdXR0b25BY3RpdmUoXCJuYXYtYnV0dG9uLWhvbWVcIilcbiAgICAgICAgcmV0dXJuIHRoaXMuaHRtbEVsZW1lbnRcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlSHRtbEVsZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhvbWUtdGFiLWNvbnRhaW5lclwiKVxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgIH1cblxuICAgIHN0YXRpYyBjbGVhckh0bWxFbGVtZW50KCkge1xuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmlubmVySFRNTCA9IFwiXCJcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQ29udGVudCgpIHtcbiAgICAgICAgY29uc3QgaG9tZUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGhvbWVDb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJob21lLWNvbnRlbnQtY29udGFpbmVyXCIpXG5cbiAgICAgICAgaG9tZUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVIZWFkZXIoKSlcbiAgICAgICAgaG9tZUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoVGFza3NPdmVydmlldy5yZW5kZXIoKSlcblxuICAgICAgICByZXR1cm4gaG9tZUNvbnRlbnRDb250YWluZXJcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlSGVhZGVyKCkge1xuICAgICAgICBjb25zdCB3ZWxjb21lTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgICAgICB3ZWxjb21lTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiVG8tRG8gTGlzdFwiXG5cbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKVxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQod2VsY29tZU1lc3NhZ2UpXG5cbiAgICAgICAgcmV0dXJuIGhlYWRlclxuICAgIH1cbn0iLCJpbXBvcnQgeyBuYW5vaWQgfSBmcm9tIFwibmFub2lkXCJcbmltcG9ydCBDYWxlbmRhciBmcm9tIFwiLi4vQ2FsZW5kYXIvQ2FsZW5kYXJcIlxuaW1wb3J0IEVkaXRUYXNrRm9ybSBmcm9tIFwiLi4vRm9ybXMvc3ViY29tcG9uZW50cy9FZGl0VGFza0Zvcm1cIlxuaW1wb3J0IExvY2FsU3RvcmFnZSBmcm9tIFwiLi4vVXRpbHMvTG9jYWxTdG9yYWdlXCJcbmltcG9ydCBUYXNrc0xpc3QgZnJvbSBcIi4vVGFza3NMaXN0XCJcbmltcG9ydCBDYWxlbmRhclRhYiBmcm9tIFwiLi4vVGFicy9DYWxlbmRhci9DYWxlbmRhclRhYlwiXG5pbXBvcnQgRm9sZGVyc0xpc3QgZnJvbSBcIi4uL0ZvbGRlcnMvRm9sZGVyc0xpc3RcIlxuaW1wb3J0IFwiLi90YXNrLmNzc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGR1ZURhdGUpIHtcbiAgICAgICAgdGhpcy5pZCA9IG5hbm9pZCgpXG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlXG4gICAgICAgIHRoaXMuaW1wb3J0YW50ID0gZmFsc2VcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgfVxuXG4gICAgc3RhdGljIGdldCh0YXNrSWQpIHtcbiAgICAgICAgY29uc3QgZm9sZGVycyA9IExvY2FsU3RvcmFnZS5nZXQoKVxuICAgICAgICBsZXQgd2FudGVkVGFza1xuICAgICAgICBsZXQgd2FudGVkRm9sZGVyXG4gICAgICAgIGZvbGRlcnMuZm9yRWFjaChmb2xkZXIgPT4ge1xuICAgICAgICAgICAgZm9sZGVyLnRhc2tzLmZpbHRlcih0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5pZCA9PT0gdGFza0lkKSB7XG4gICAgICAgICAgICAgICAgICAgIHdhbnRlZFRhc2sgPSB0YXNrXG4gICAgICAgICAgICAgICAgICAgIHdhbnRlZEZvbGRlciA9IGZvbGRlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB7IHRhc2s6IHdhbnRlZFRhc2ssIGZvbGRlcjogd2FudGVkRm9sZGVyIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0QWxsKCkge1xuICAgICAgICBjb25zdCBmb2xkZXJzID0gTG9jYWxTdG9yYWdlLmdldCgpXG4gICAgICAgIGNvbnN0IHRhc2tzID0gW11cbiAgICAgICAgZm9sZGVycy5mb3JFYWNoKGZvbGRlciA9PiB7XG4gICAgICAgICAgICBmb2xkZXIudGFza3MuZmlsdGVyKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIHRhc2tzLnB1c2godGFzaylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0YXNrc1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRBbGxQZW5kaW5nVGFza3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEFsbCgpLmZpbHRlcih0YXNrID0+ICF0YXNrLmNoZWNrZWQpXG4gICAgfVxuXG4gICAgc3RhdGljIGdldEFsbENvbXBsZXRlZFRhc2tzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBbGwoKS5maWx0ZXIodGFzayA9PiB0YXNrLmNoZWNrZWQpXG4gICAgfVxuXG4gICAgc3RhdGljIGFkZCh0YXNrLCBmb2xkZXJJZCkge1xuICAgICAgICBjb25zdCBmb2xkZXIgPSBMb2NhbFN0b3JhZ2UuZ2V0Rm9sZGVyKGZvbGRlcklkKVxuICAgICAgICBmb2xkZXIudGFza3MudW5zaGlmdCh0YXNrKVxuICAgICAgICBMb2NhbFN0b3JhZ2Uuc2F2ZUZvbGRlcihmb2xkZXIpXG4gICAgfVxuXG4gICAgc3RhdGljIGNoZWNrKHRhc2tJZCkge1xuICAgICAgICBjb25zdCB7IHRhc2ssIGZvbGRlciB9ID0gdGhpcy5nZXQodGFza0lkKVxuICAgICAgICBmb2xkZXIudGFza3MuZmluZChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSB0YXNrLmlkKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jaGVja2VkID0gIWl0ZW0uY2hlY2tlZFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBMb2NhbFN0b3JhZ2Uuc2F2ZUZvbGRlcihmb2xkZXIpXG4gICAgICAgIENhbGVuZGFyVGFiLnJlZnJlc2godGFzay5kdWVEYXRlKVxuICAgICAgICBGb2xkZXJzTGlzdC5yZWZyZXNoKGZvbGRlci5pZClcbiAgICAgICAgVGFza3NMaXN0LnVwZGF0ZSh0YXNrLmR1ZURhdGUpXG4gICAgfVxuXG4gICAgc3RhdGljIGltcG9ydGFudCh0YXNrSWQpIHtcbiAgICAgICAgY29uc3QgeyB0YXNrLCBmb2xkZXIgfSA9IHRoaXMuZ2V0KHRhc2tJZClcbiAgICAgICAgZm9sZGVyLnRhc2tzLmZpbmQoaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gdGFzay5pZCkge1xuICAgICAgICAgICAgICAgIGl0ZW0uaW1wb3J0YW50ID0gIWl0ZW0uaW1wb3J0YW50XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIExvY2FsU3RvcmFnZS5zYXZlRm9sZGVyKGZvbGRlcilcbiAgICAgICAgQ2FsZW5kYXJUYWIucmVmcmVzaCh0YXNrLmR1ZURhdGUpXG4gICAgICAgIEZvbGRlcnNMaXN0LnJlZnJlc2goZm9sZGVyLmlkKVxuICAgICAgICBUYXNrc0xpc3QudXBkYXRlKHRhc2suZHVlRGF0ZSlcbiAgICB9XG5cbiAgICBzdGF0aWMgZWRpdChmb2xkZXIsIHRhc2spIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIl1gKVxuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICBjb25zdCBmb3JtID0gbmV3IEVkaXRUYXNrRm9ybSh0YXNrLCBmb2xkZXIpXG4gICAgICAgIGZvcm0ucmVuZGVyKCkuZm9yRWFjaChlbGVtZW50ID0+IGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KSlcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVtb3ZlKGZvbGRlciwgdGFzaykge1xuICAgICAgICBmb2xkZXIudGFza3MgPSBmb2xkZXIudGFza3MuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gdGFzay5pZClcbiAgICAgICAgTG9jYWxTdG9yYWdlLnNhdmVGb2xkZXIoZm9sZGVyKVxuICAgICAgICBDYWxlbmRhci5jcmVhdGVXaWRnZXQobmV3IERhdGUodGFzay5kdWVEYXRlKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgZmluZFRhc2tzRm9yRGF0ZShkYXRlKSB7XG4gICAgICAgIGNvbnN0IGZvbGRlcnMgPSBMb2NhbFN0b3JhZ2UuZ2V0KClcbiAgICAgICAgY29uc3QgdGFza3MgPSBbXVxuICAgICAgICBjb25zdCB0YXNrc0RvbmUgPSBbXVxuICAgICAgICBmb2xkZXJzLmZvckVhY2goZm9sZGVyID0+IHtcbiAgICAgICAgICAgIGZvbGRlci50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLmR1ZURhdGUgPT09IGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2suY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza3NEb25lLnB1c2goeyB0YXNrLCBmb2xkZXIgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRhc2suY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza3MucHVzaCh7IHRhc2ssIGZvbGRlciB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRhc2tzLmNvbmNhdCh0YXNrc0RvbmUpXG4gICAgfVxufSIsImltcG9ydCBOZXdUYXNrRm9ybSBmcm9tIFwiLi4vRm9ybXMvc3ViY29tcG9uZW50cy9OZXdUYXNrRm9ybVwiXG5pbXBvcnQgRWRpdFRhc2tGb3JtIGZyb20gXCIuLi9Gb3Jtcy9zdWJjb21wb25lbnRzL0VkaXRUYXNrRm9ybVwiXG5pbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrXCJcbmltcG9ydCBNYWluIGZyb20gXCIuLi9VSS9NYWluXCJcbmltcG9ydCBGb2xkZXJJY29uIGZyb20gJy4uL0ljb25zL2ZvbGRlcidcbmltcG9ydCBTdGFySWNvbiBmcm9tIFwiLi4vSWNvbnMvc3RhclwiXG5pbXBvcnQgU3Rhckljb25GaWxsZWQgZnJvbSBcIi4uL0ljb25zL3N0YXItZmlsbGVkXCJcbmltcG9ydCBGb2xkZXIgZnJvbSBcIi4uL0ZvbGRlcnMvRm9sZGVyXCJcbmltcG9ydCBEb25lSWNvbiBmcm9tIFwiLi4vSWNvbnMvZG9uZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tzTGlzdCB7XG4gICAgc3RhdGljIGh0bWxFbGVtZW50ID0gdGhpcy5jcmVhdGVIdG1sRWxlbWVudCgpXG5cbiAgICBzdGF0aWMgcmVuZGVyKGRhdGUpIHtcbiAgICAgICAgdGhpcy5jbGVhckh0bWxFbGVtZW50KClcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZU5ld1Rhc2tCdXR0b24oZGF0ZSkpXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5zaG93VGFza3MoVGFzay5maW5kVGFza3NGb3JEYXRlKGRhdGUpLCBkYXRlKSlcbiAgICAgICAgcmV0dXJuIHRoaXMuaHRtbEVsZW1lbnRcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlSHRtbEVsZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGh0bWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBodG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFza3MtbGlzdC1jb250YWluZXJcIilcbiAgICAgICAgcmV0dXJuIGh0bWxFbGVtZW50XG4gICAgfVxuXG4gICAgc3RhdGljIGNsZWFySHRtbEVsZW1lbnQoKSB7XG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIlxuICAgIH1cblxuICAgIHN0YXRpYyB1cGRhdGUoZGF0ZSkge1xuICAgICAgICB0aGlzLmNsZWFySHRtbEVsZW1lbnQoKVxuICAgICAgICB0aGlzLmNyZWF0ZUh0bWxFbGVtZW50KClcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZU5ld1Rhc2tCdXR0b24oZGF0ZSkpXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5zaG93VGFza3MoVGFzay5maW5kVGFza3NGb3JEYXRlKGRhdGUpLCBkYXRlKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlTGlzdCgpIHtcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxuICAgICAgICBsaXN0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrcy1saXN0XCIpXG4gICAgICAgIHJldHVybiBsaXN0XG4gICAgfVxuXG4gICAgc3RhdGljIHNob3dUYXNrcyh0YXNrcykge1xuICAgICAgICBpZiAodGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFbXB0eUxpc3RNZXNzYWdlKClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5jcmVhdGVMaXN0KClcbiAgICAgICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4gdGhpcy5hZGRUYXNrVG9MaXN0KGxpc3QsIHRhc2spKVxuICAgICAgICByZXR1cm4gbGlzdFxuICAgIH1cblxuICAgIHN0YXRpYyBhZGRUYXNrVG9MaXN0KGxpc3QsIHsgdGFzaywgZm9sZGVyIH0pIHtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVUYXNrSHRtbEVsZW1lbnQodGFzaywgZm9sZGVyKSlcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSlcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlRW1wdHlMaXN0TWVzc2FnZSgpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxuICAgICAgICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrcy1saXN0XCIsIFwidGFza3MtbGlzdC1lbXB0eVwiKVxuICAgICAgICBtZXNzYWdlLmlubmVySFRNTCA9IFwiTm8gdGFza3MuIDxicj4gQ2xpY2sgKyBidXR0b24gdG8gY3JlYXRlIG9uZS5cIlxuICAgICAgICByZXR1cm4gbWVzc2FnZVxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVOZXdUYXNrQnV0dG9uKGRhdGUpIHtcbiAgICAgICAgY29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgbmV3VGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZmxvYXRpbmctYnV0dG9uXCIpXG4gICAgICAgIG5ld1Rhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIitcIlxuICAgICAgICBuZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBNYWluLnNob3dTbGlkZUNvbnRlbnQobmV3IE5ld1Rhc2tGb3JtKGRhdGUpLnJlbmRlcigpKSlcbiAgICAgICAgcmV0dXJuIG5ld1Rhc2tCdXR0b25cbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlVGFza0h0bWxFbGVtZW50KHRhc2ssIGZvbGRlcikge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250YWluZXJcIilcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtdGFzay1pZFwiLCB0YXNrLmlkKVxuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuaGFuZGxlVGFza0NsaWNrKHRhc2suaWQpKVxuXG4gICAgICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICBjaGVjay5jbGFzc0xpc3QuYWRkKFwidGFzay1jaGVjay1idXR0b25cIilcbiAgICAgICAgY2hlY2suaW5uZXJIVE1MID0gRG9uZUljb25cbiAgICAgICAgY2hlY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4gdGhpcy5oYW5kbGVDaGVja0J1dHRvbkNsaWNrKGUsIHRhc2suaWQpKVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2spXG5cbiAgICAgICAgaWYgKHRhc2suY2hlY2tlZCkge1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lci1jaGVja2VkXCIpXG4gICAgICAgICAgICBjaGVjay5jbGFzc0xpc3QuYWRkKFwidGFzay1jaGVjay1idXR0b24tY2hlY2tlZFwiKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZm9sZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBmb2xkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stZm9sZGVyLW5hbWVcIilcbiAgICAgICAgZm9sZGVyQ29udGFpbmVyLmlubmVySFRNTCA9IEZvbGRlckljb25cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvbGRlckNvbnRhaW5lcilcbiAgICAgICAgZm9sZGVyQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHRoaXMuaGFuZGxlRm9sZGVyQ2xpY2soZSwgZm9sZGVyLmlkKSlcblxuICAgICAgICBjb25zdCBmb2xkZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgZm9sZGVyTmFtZS50ZXh0Q29udGVudCA9IGZvbGRlci5uYW1lXG4gICAgICAgIGZvbGRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChmb2xkZXJOYW1lKVxuXG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcInRhc2stdGV4dFwiKVxuICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gdGFzay5uYW1lXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lKVxuXG4gICAgICAgIGNvbnN0IGltcG9ydGFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgaW1wb3J0YW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWltcG9ydGFudC1idXR0b25cIilcbiAgICAgICAgaW1wb3J0YW50LmlubmVySFRNTCA9IHRhc2suaW1wb3J0YW50ID8gU3Rhckljb25GaWxsZWQgOiBTdGFySWNvblxuICAgICAgICBpbXBvcnRhbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4gdGhpcy5oYW5kbGVJbXBvcnRhbnRCdXR0b25DbGljayhlLCB0YXNrLmlkKSlcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltcG9ydGFudClcblxuICAgICAgICBpZiAodGFzay5pbXBvcnRhbnQpIHtcbiAgICAgICAgICAgIGltcG9ydGFudC5jbGFzc0xpc3QuYWRkKFwidGFzay1pbXBvcnRhbnQtYnV0dG9uLWFjdGl2ZVwiKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lclxuICAgIH1cblxuICAgIHN0YXRpYyBoYW5kbGVUYXNrQ2xpY2sodGFza0lkKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBuZXcgRWRpdFRhc2tGb3JtKHRhc2tJZClcbiAgICAgICAgTWFpbi5zaG93U2xpZGVDb250ZW50KGZvcm0ucmVuZGVyKCkpXG4gICAgfVxuXG4gICAgc3RhdGljIGhhbmRsZUZvbGRlckNsaWNrKGUsIGZvbGRlcklkKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgRm9sZGVyLnNob3coZm9sZGVySWQpXG4gICAgfVxuXG4gICAgc3RhdGljIGhhbmRsZUNoZWNrQnV0dG9uQ2xpY2soZSwgdGFza0lkKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgVGFzay5jaGVjayh0YXNrSWQpXG4gICAgfVxuXG4gICAgc3RhdGljIGhhbmRsZUltcG9ydGFudEJ1dHRvbkNsaWNrKGUsIHRhc2tJZCkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIFRhc2suaW1wb3J0YW50KHRhc2tJZClcbiAgICB9XG59IiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFza1wiXG5pbXBvcnQgQ29udmVydERhdGUgZnJvbSBcIi4uL1V0aWxzL0NvbnZlcnREYXRlXCJcbmltcG9ydCBGb2xkZXIgZnJvbSBcIi4uL0ZvbGRlcnMvRm9sZGVyXCJcbmltcG9ydCBTdGFySWNvbiBmcm9tIFwiLi4vSWNvbnMvc3RhclwiXG5pbXBvcnQgQ2FsZW5kYXJJY29uIGZyb20gXCIuLi9JY29ucy9jYWxlbmRhclwiXG5pbXBvcnQgUHJpb3JpdHlJY29uIGZyb20gXCIuLi9JY29ucy9wcmlvcml0eVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tzT3ZlcnZpZXcge1xuXG4gICAgc3RhdGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgdGFza3NPdmVydmlld0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpXG4gICAgICAgIHRhc2tzT3ZlcnZpZXdDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tzLW92ZXJ2aWV3LWNvbnRhaW5lclwiKVxuXG4gICAgICAgIHRhc2tzT3ZlcnZpZXdDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVUYXNrc092ZXJ2aWV3TGFiZWwoKSlcblxuICAgICAgICB0YXNrc092ZXJ2aWV3Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlVGFza0NvdW50ZXJXaWRnZXQoVGFzay5nZXRBbGxQZW5kaW5nVGFza3MoKS5sZW5ndGgsIFwiUGVuZGluZyB0YXNrc1wiKSlcbiAgICAgICAgdGFza3NPdmVydmlld0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVRhc2tDb3VudGVyV2lkZ2V0KFRhc2suZ2V0QWxsQ29tcGxldGVkVGFza3MoKS5sZW5ndGgsIFwiQ29tcGxldGVkIHRhc2tzXCIpKVxuXG5cbiAgICAgICAgdGFza3NPdmVydmlld0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVVwY29taW5nVGFza3NXaWRnZXQoMCkpXG4gICAgICAgIHRhc2tzT3ZlcnZpZXdDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVJbXBvcnRhbnRUYXNrc1dpZGdldCgpKVxuICAgICAgICB0YXNrc092ZXJ2aWV3Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlVXBjb21pbmdUYXNrc1dpZGdldCg3KSlcbiAgICAgICAgdGFza3NPdmVydmlld0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZU1pc3NlZFRhc2tzV2lkZ2V0KCkpXG5cblxuICAgICAgICByZXR1cm4gdGFza3NPdmVydmlld0NvbnRhaW5lclxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVUYXNrc092ZXJ2aWV3TGFiZWwoKSB7XG4gICAgICAgIGNvbnN0IHRhc2tzT3ZlcnZpZXdMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgdGFza3NPdmVydmlld0xhYmVsLmNsYXNzTGlzdC5hZGQoXCJob21lLXNlY3Rpb24tbGFiZWxcIilcbiAgICAgICAgdGFza3NPdmVydmlld0xhYmVsLnRleHRDb250ZW50ID0gXCJUYXNrcyBvdmVydmlld1wiXG4gICAgICAgIHJldHVybiB0YXNrc092ZXJ2aWV3TGFiZWxcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlVGFza0NvdW50ZXJXaWRnZXQobnVtYmVyLCBsYWJlbCkge1xuICAgICAgICBjb25zdCB0YXNrQ291bnRlcldpZGdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgdGFza0NvdW50ZXJXaWRnZXQuY2xhc3NMaXN0LmFkZChcInRhc2std2lkZ2V0XCIsIFwidGFzay1jb3VudGVyLXdpZGdldFwiKVxuXG4gICAgICAgIGNvbnN0IHRhc2tDb3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICB0YXNrQ291bnRlci5jbGFzc0xpc3QuYWRkKFwidGFzay1jb3VudGVyXCIpXG4gICAgICAgIHRhc2tDb3VudGVyLnRleHRDb250ZW50ID0gbnVtYmVyXG4gICAgICAgIHRhc2tDb3VudGVyV2lkZ2V0LmFwcGVuZENoaWxkKHRhc2tDb3VudGVyKVxuXG4gICAgICAgIGNvbnN0IHRhc2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgdGFza0xhYmVsLmNsYXNzTGlzdC5hZGQoXCJob21lLXdpZGdldC1sYWJlbFwiKVxuICAgICAgICB0YXNrTGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFxuICAgICAgICB0YXNrQ291bnRlcldpZGdldC5hcHBlbmRDaGlsZCh0YXNrTGFiZWwpXG5cbiAgICAgICAgcmV0dXJuIHRhc2tDb3VudGVyV2lkZ2V0XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVVwY29taW5nVGFza3NXaWRnZXQobnVtYmVyT2ZEYXlzKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY3JlYXRlTGlzdFdpZGdldCgpXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXG5cbiAgICAgICAgaWYgKG51bWJlck9mRGF5cyA9PT0gMCkge1xuICAgICAgICAgICAgY29udGFpbmVyLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgPSBcIlRhc2tzIGZvciB0b2RheVwiXG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gVGFzay5maW5kVGFza3NGb3JEYXRlKENvbnZlcnREYXRlLnRvWVlZWU1NREQoZGF0ZSkpXG4gICAgICAgICAgICB0YXNrcy5mb3JFYWNoKCh7IHRhc2ssIGZvbGRlciB9KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0YXNrLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmNoaWxkTm9kZXNbMV0uYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVMaXN0V2lkZ2V0TGlzdEl0ZW0odGFzaywgZm9sZGVyKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICByZXR1cm4gY29udGFpbmVyXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobnVtYmVyT2ZEYXlzICE9PSAwKSB7XG4gICAgICAgICAgICBjb250YWluZXIuY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9IGBUYXNrcyBmb3IgbmV4dCAke251bWJlck9mRGF5cyA+IDEgPyBgJHtudW1iZXJPZkRheXN9IGRheXNgIDogXCJkYXlcIn1gXG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZEYXlzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyAxKVxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gVGFzay5maW5kVGFza3NGb3JEYXRlKENvbnZlcnREYXRlLnRvWVlZWU1NREQoZGF0ZSkpXG4gICAgICAgICAgICAgICAgdGFza3MuZm9yRWFjaCgoeyB0YXNrLCBmb2xkZXIgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRhc2suY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmNoaWxkTm9kZXNbMV0uYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVMaXN0V2lkZ2V0TGlzdEl0ZW0odGFzaywgZm9sZGVyKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb250YWluZXJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVJbXBvcnRhbnRUYXNrc1dpZGdldCgpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jcmVhdGVMaXN0V2lkZ2V0KClcbiAgICAgICAgY29uc3QgdG9tb3Jyb3cgPSBDb252ZXJ0RGF0ZS5nZXROZXh0RGF5KG5ldyBEYXRlKVxuICAgICAgICBjb250YWluZXIuY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9IFwiSW1wb3J0YW50IHRhc2tzIGZvciBuZXh0IDMgZGF5c1wiXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gVGFzay5maW5kVGFza3NGb3JEYXRlKENvbnZlcnREYXRlLnRvWVlZWU1NREQodG9tb3Jyb3cpKVxuICAgICAgICAgICAgdGFza3MuZm9yRWFjaCgoeyB0YXNrLCBmb2xkZXIgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLmltcG9ydGFudCAmJiAhdGFzay5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jaGlsZE5vZGVzWzFdLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlTGlzdFdpZGdldExpc3RJdGVtKHRhc2ssIGZvbGRlcikpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRvbW9ycm93LnNldERhdGUodG9tb3Jyb3cuZ2V0RGF0ZSgpICsgMSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb250YWluZXJcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlTWlzc2VkVGFza3NXaWRnZXQoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY3JlYXRlTGlzdFdpZGdldCgpXG4gICAgICAgIGNvbnRhaW5lci5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID0gXCJNaXNzZWQgdGFza3NcIlxuXG4gICAgICAgIGNvbnN0IHRhc2tzID0gVGFzay5nZXRBbGxQZW5kaW5nVGFza3MoKVxuICAgICAgICBjb25zdCB0b2RheSA9IENvbnZlcnREYXRlLnRvWVlZWU1NREQobmV3IERhdGUoKSlcbiAgICAgICAgdGFza3MuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmICghaXRlbS5jaGVja2VkICYmIGl0ZW0uZHVlRGF0ZSA8IHRvZGF5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB0YXNrLCBmb2xkZXIgfSA9IFRhc2suZ2V0KGl0ZW0uaWQpXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNoaWxkTm9kZXNbMV0uYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVMaXN0V2lkZ2V0TGlzdEl0ZW0odGFzaywgZm9sZGVyLCBQcmlvcml0eUljb24pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBjb250YWluZXJcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlTGlzdFdpZGdldCgpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2std2lkZ2V0XCIsIFwidXBjb21pbmctdGFza3Mtd2lnZGV0XCIpXG5cbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJob21lLXdpZGdldC1sYWJlbFwiLCBcInVwY29taW5nLXRhc2tzLWxhYmVsXCIpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KVxuXG4gICAgICAgIHJldHVybiBjb250YWluZXJcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlTGlzdFdpZGdldExpc3RJdGVtKHRhc2ssIGZvbGRlcikge1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgICAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwidXBjb21pbmctdGFza1wiKVxuXG4gICAgICAgIGNvbnN0IGNhbGVuZGFySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY2FsZW5kYXJJY29uLmlubmVySFRNTCA9IHRhc2suaW1wb3J0YW50ID8gU3Rhckljb24gOiBDYWxlbmRhckljb25cbiAgICAgICAgY2FsZW5kYXJJY29uLmNsYXNzTGlzdC5hZGQoXCJ1cGNvbWluZy10YXNrLWljb25cIilcbiAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY2FsZW5kYXJJY29uKVxuXG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSB0YXNrLm5hbWVcbiAgICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwidXBjb21pbmctdGFzay1uYW1lXCIpXG4gICAgICAgIG5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IEZvbGRlci5zaG93KGZvbGRlci5pZCkpXG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKG5hbWUpXG5cbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IENvbnZlcnREYXRlLllZWVlNTUREdG9ERE1NKHRhc2suZHVlRGF0ZSlcbiAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidXBjb21pbmctdGFzay1kYXRlXCIpXG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGR1ZURhdGUpXG5cbiAgICAgICAgcmV0dXJuIGxpc3RJdGVtXG4gICAgfVxufSIsIi8vIGltcG9ydCBBcnJvd0JhY2tJY29uIGZyb20gJy4uL0ljb25zL2Fycm93LWJhY2snXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4ge1xuLy8gICAgIGNvbnN0cnVjdG9yKCkge1xuLy8gICAgICAgICB0aGlzLm1haW5cbi8vICAgICB9XG5cbi8vICAgICBzdGF0aWMgcmVuZGVyKG91dHB1dCkge1xuLy8gICAgICAgICB0aGlzLm1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKVxuLy8gICAgICAgICBvdXRwdXQuYXBwZW5kQ2hpbGQodGhpcy5tYWluKVxuLy8gICAgIH1cblxuLy8gICAgIHN0YXRpYyBjaGFuZ2VDb250ZW50KGNvbnRlbnQpIHtcbi8vICAgICAgICAgaWYgKHRoaXMubWFpbi5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlLWNvbnRhaW5lclwiKSkge1xuLy8gICAgICAgICAgICAgdGhpcy5jbG9zZVNsaWRlQ29udGFpbmVyKClcbi8vICAgICAgICAgfVxuLy8gICAgICAgICB0aGlzLm1haW4uaW5uZXJIVE1MID0gXCJcIlxuLy8gICAgICAgICB0aGlzLm1haW4uYXBwZW5kQ2hpbGQoY29udGVudClcbi8vICAgICB9XG5cbi8vICAgICBzdGF0aWMgc2hvd1NsaWRlQ29udGVudChjb250ZW50KSB7XG4vLyAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY3JlYXRlU2xpZGVDb250YWluZXIoKVxuLy8gICAgICAgICBjb25zdCBjb250YWluZXJDb250ZW50ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGUtY29udGFpbmVyLWNvbnRlbnRcIilcbi8vICAgICAgICAgY29udGFpbmVyQ29udGVudC5hcHBlbmRDaGlsZChjb250ZW50KVxuLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIilcbi8vICAgICAgICAgdGhpcy5tYWluLmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbi8vICAgICAgICAgdGhpcy5mb2N1c1RyYXAoY29udGFpbmVyQ29udGVudClcbi8vICAgICB9XG5cbi8vICAgICBzdGF0aWMgY3JlYXRlU2xpZGVDb250YWluZXIoKSB7XG4vLyAgICAgICAgIGNvbnN0IHNsaWRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuLy8gICAgICAgICBzbGlkZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2xpZGUtY29udGFpbmVyXCIsIFwic2xpZGUtaW5cIilcblxuLy8gICAgICAgICBjb25zdCBzbGlkZUNvbnRhaW5lckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4vLyAgICAgICAgIHNsaWRlQ29udGFpbmVyQ29udGVudC5jbGFzc0xpc3QuYWRkKFwic2xpZGUtY29udGFpbmVyLWNvbnRlbnRcIilcbi8vICAgICAgICAgc2xpZGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2xpZGVDb250YWluZXJDb250ZW50KVxuXG4vLyAgICAgICAgIGNvbnN0IGJhY2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4vLyAgICAgICAgIGJhY2tCdXR0b24uY2xhc3NMaXN0LmFkZChcInNsaWRlLWJhY2stYnV0dG9uXCIpXG4vLyAgICAgICAgIGJhY2tCdXR0b24uaW5uZXJIVE1MID0gQXJyb3dCYWNrSWNvblxuLy8gICAgICAgICBzbGlkZUNvbnRhaW5lckNvbnRlbnQuYXBwZW5kQ2hpbGQoYmFja0J1dHRvbilcblxuLy8gICAgICAgICBiYWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmNsb3NlU2xpZGVDb250YWluZXIoKSlcbi8vICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVFc2NDbGljaywgdHJ1ZSlcblxuLy8gICAgICAgICByZXR1cm4gc2xpZGVDb250YWluZXJcbi8vICAgICB9XG5cbi8vICAgICBzdGF0aWMgY2xvc2VTbGlkZUNvbnRhaW5lcigpIHtcbi8vICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZS1jb250YWluZXJcIilcbi8vICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVFc2NDbGljaywgdHJ1ZSlcbi8vICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZS1pblwiKVxuLy8gICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNsaWRlLW91dFwiKVxuLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIilcbi8vICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjb250YWluZXIucmVtb3ZlKCksIDUwMClcbi8vICAgICB9XG5cbi8vICAgICBzdGF0aWMgaGFuZGxlRXNjQ2xpY2soZSkge1xuLy8gICAgICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbi8vICAgICAgICAgICAgIE1haW4uY2xvc2VTbGlkZUNvbnRhaW5lcigpXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICBzdGF0aWMgZm9jdXNUcmFwKGNvbnRhaW5lcikge1xuLy8gICAgICAgICBjb25zdCBjb250YWluZXJFbGVtZW50cyA9IEFycmF5LmZyb20oY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b24sIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhXCIpKVxuLy8gICAgICAgICBjb25zdCBuYXZFbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKS5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpKVxuLy8gICAgICAgICBjb25zdCBmb2N1c2FibGVFbGVtZW50cyA9IGNvbnRhaW5lckVsZW1lbnRzLmNvbmNhdChuYXZFbGVtZW50cylcblxuLy8gICAgICAgICBjb25zdCBmaXJzdFRleHRJbnB1dCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPVwidGV4dFwiXSwgdGV4dGFyZWFgKVswXVxuLy8gICAgICAgICBsZXQgZmlyc3RFbGVtZW50ID0gZm9jdXNhYmxlRWxlbWVudHNbMF1cbi8vICAgICAgICAgbGV0IGxhc3RFbGVtZW50ID0gZm9jdXNhYmxlRWxlbWVudHNbZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMV1cbi8vICAgICAgICAgbGV0IGN1cnJlbnRFbGVtZW50ID0gbnVsbFxuXG4vLyAgICAgICAgIGZpcnN0VGV4dElucHV0LmZvY3VzKClcbi8vICAgICAgICAgY3VycmVudEVsZW1lbnQgPSBmaXJzdFRleHRJbnB1dCB8fCBmaXJzdEVsZW1lbnRcblxuLy8gICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgZSA9PiB7XG4vLyAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbi8vICAgICAgICAgICAgIGlmIChmb2N1c2FibGVFbGVtZW50cy5pbmNsdWRlcyhlLnRhcmdldCkpIHtcbi8vICAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudCA9IGUudGFyZ2V0XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBpZighZm9jdXNhYmxlRWxlbWVudHMuaW5jbHVkZXMoZS50YXJnZXQpKSB7XG4vLyAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRFbGVtZW50ID09PSBsYXN0RWxlbWVudCkge1xuLy8gICAgICAgICAgICAgICAgICAgICBmaXJzdEVsZW1lbnQuZm9jdXMoKVxuLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7ICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICBmaXJzdEVsZW1lbnQuZm9jdXMoKVxuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSwgdHJ1ZSlcbi8vICAgICB9XG5cblxuLy8gfVxuaW1wb3J0IEFycm93QmFja0ljb24gZnJvbSAnLi4vSWNvbnMvYXJyb3ctYmFjaydcbmltcG9ydCBGb2N1c1RyYXAgZnJvbSAnLi4vVXRpbHMvRm9jdXNUcmFwJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tYWluXG4gICAgfVxuXG4gICAgc3RhdGljIHJlbmRlcihvdXRwdXQpIHtcbiAgICAgICAgdGhpcy5tYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIilcbiAgICAgICAgb3V0cHV0LmFwcGVuZENoaWxkKHRoaXMubWFpbilcbiAgICB9XG5cbiAgICBzdGF0aWMgY2hhbmdlQ29udGVudChjb250ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLm1haW4ucXVlcnlTZWxlY3RvcihcIi5zbGlkZS1jb250YWluZXJcIikpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VTbGlkZUNvbnRhaW5lcigpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYWluLmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgdGhpcy5tYWluLmFwcGVuZENoaWxkKGNvbnRlbnQpXG4gICAgfVxuXG4gICAgc3RhdGljIHNob3dTbGlkZUNvbnRlbnQoY29udGVudCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNyZWF0ZVNsaWRlQ29udGFpbmVyKClcbiAgICAgICAgY29uc3QgY29udGFpbmVyQ29udGVudCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlLWNvbnRhaW5lci1jb250ZW50XCIpXG4gICAgICAgIGNvbnRhaW5lckNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudClcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpXG4gICAgICAgIHRoaXMubWFpbi5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgICAgIEZvY3VzVHJhcC5hY3RpdmF0ZShjb250YWluZXJDb250ZW50KVxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVTbGlkZUNvbnRhaW5lcigpIHtcbiAgICAgICAgY29uc3Qgc2xpZGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIHNsaWRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzbGlkZS1jb250YWluZXJcIiwgXCJzbGlkZS1pblwiKVxuXG4gICAgICAgIGNvbnN0IHNsaWRlQ29udGFpbmVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgc2xpZGVDb250YWluZXJDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJzbGlkZS1jb250YWluZXItY29udGVudFwiKVxuICAgICAgICBzbGlkZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzbGlkZUNvbnRhaW5lckNvbnRlbnQpXG5cbiAgICAgICAgY29uc3QgYmFja0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgYmFja0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2xpZGUtYmFjay1idXR0b25cIilcbiAgICAgICAgYmFja0J1dHRvbi5pbm5lckhUTUwgPSBBcnJvd0JhY2tJY29uXG4gICAgICAgIHNsaWRlQ29udGFpbmVyQ29udGVudC5hcHBlbmRDaGlsZChiYWNrQnV0dG9uKVxuXG4gICAgICAgIGJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuY2xvc2VTbGlkZUNvbnRhaW5lcigpKVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZUVzY0NsaWNrLCB0cnVlKVxuXG4gICAgICAgIHJldHVybiBzbGlkZUNvbnRhaW5lclxuICAgIH1cblxuICAgIHN0YXRpYyBjbG9zZVNsaWRlQ29udGFpbmVyKCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlLWNvbnRhaW5lclwiKVxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZUVzY0NsaWNrLCB0cnVlKVxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlLWluXCIpXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2xpZGUtb3V0XCIpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNvbnRhaW5lci5yZW1vdmUoKSwgNTAwKVxuICAgICAgICBGb2N1c1RyYXAuZGVhY3RpdmF0ZSgpXG4gICAgfVxuXG4gICAgc3RhdGljIGhhbmRsZUVzY0NsaWNrKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgICBNYWluLmNsb3NlU2xpZGVDb250YWluZXIoKVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBIb21lSWNvbiBmcm9tIFwiLi4vSWNvbnMvaG9tZVwiXG5pbXBvcnQgQ2FsZW5kYXJJY29uIGZyb20gXCIuLi9JY29ucy9jYWxlbmRhclwiXG5pbXBvcnQgRm9sZGVySWNvbiBmcm9tIFwiLi4vSWNvbnMvZm9sZGVyXCJcbmltcG9ydCBNYWluIGZyb20gXCIuL01haW5cIlxuaW1wb3J0IEhvbWVUYWIgZnJvbSBcIi4uL1RhYnMvSG9tZS9Ib21lVGFiXCJcbmltcG9ydCBDYWxlbmRhclRhYiBmcm9tIFwiLi4vVGFicy9DYWxlbmRhci9DYWxlbmRhclRhYlwiXG5pbXBvcnQgRm9sZGVyc1RhYiBmcm9tIFwiLi4vVGFicy9Gb2xkZXJzL0ZvbGRlcnNUYWJcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXYge1xuXG4gICAgc3RhdGljIG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIilcblxuICAgIHN0YXRpYyByZW5kZXIob3V0cHV0KSB7XG4gICAgICAgIHRoaXMubmF2LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlQ29udHJvbHNQYW5lbCgpKVxuICAgICAgICBvdXRwdXQuYXBwZW5kQ2hpbGQodGhpcy5uYXYpXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUNvbnRyb2xzUGFuZWwoKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm5hdi1idXR0b25zLXdyYXBwZXJcIilcblxuICAgICAgICBjb25zdCBidXR0b25zQXJyYXkgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWNvbjogSG9tZUljb24sXG4gICAgICAgICAgICAgICAgdGV4dDogXCJob21lXCIsXG4gICAgICAgICAgICAgICAgY2xpY2tIYW5kbGVyOiAoKSA9PiBNYWluLmNoYW5nZUNvbnRlbnQoSG9tZVRhYi5yZW5kZXIoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWNvbjogQ2FsZW5kYXJJY29uLFxuICAgICAgICAgICAgICAgIHRleHQ6IFwiY2FsZW5kYXJcIixcbiAgICAgICAgICAgICAgICBjbGlja0hhbmRsZXI6ICgpID0+IE1haW4uY2hhbmdlQ29udGVudChDYWxlbmRhclRhYi5yZW5kZXIoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWNvbjogRm9sZGVySWNvbixcbiAgICAgICAgICAgICAgICB0ZXh0OiBcImZvbGRlcnNcIixcbiAgICAgICAgICAgICAgICBjbGlja0hhbmRsZXI6ICgpID0+IE1haW4uY2hhbmdlQ29udGVudChGb2xkZXJzVGFiLnJlbmRlcigpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgXVxuXG4gICAgICAgIGJ1dHRvbnNBcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUJ1dHRvbihpdGVtKSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gd3JhcHBlclxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVCdXR0b24oeyBpY29uLCB0ZXh0LCBjbGlja0hhbmRsZXIgfSkge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmF2LWJ1dHRvblwiKVxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYG5hdi1idXR0b24tJHt0ZXh0fWApXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5oYW5kbGVCdXR0b25DbGljayhidXR0b24sIGNsaWNrSGFuZGxlcikpXG5cbiAgICAgICAgY29uc3QgaWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgaWNvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmF2LWJ1dHRvbi1pY29uLWNvbnRhaW5lclwiKVxuICAgICAgICBpY29uQ29udGFpbmVyLmlubmVySFRNTCA9IGljb25cbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGljb25Db250YWluZXIpXG5cbiAgICAgICAgY29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgdGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmF2LWJ1dHRvbi10ZXh0LWNvbnRhaW5lclwiKVxuICAgICAgICB0ZXh0Q29udGFpbmVyLnRleHRDb250ZW50ID0gdGV4dFxuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcilcblxuICAgICAgICByZXR1cm4gYnV0dG9uXG4gICAgfVxuXG4gICAgc3RhdGljIHJlbW92ZUFjdGl2ZUNsYXNzRnJvbUJ1dHRvbnMoKSB7XG4gICAgICAgIHRoaXMubmF2LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtYnV0dG9uLWFjdGl2ZVwiKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0QnV0dG9uQWN0aXZlKGlkKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQWN0aXZlQ2xhc3NGcm9tQnV0dG9ucygpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnV0dG9uLWFjdGl2ZVwiKVxuICAgIH1cblxuICAgIHN0YXRpYyBoYW5kbGVCdXR0b25DbGljayhidXR0b24sIGNsaWNrSGFuZGxlcikge1xuICAgICAgICB0aGlzLnNldEJ1dHRvbkFjdGl2ZShidXR0b24uaWQpXG4gICAgICAgIGNsaWNrSGFuZGxlcigpXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnZlcnREYXRlIHtcbiAgICBzdGF0aWMgdG9ZWVlZTU1ERChkYXRlKSB7XG4gICAgICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgICAgICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxIDwgMTAgPyBcIjBcIiArIChkYXRlLmdldE1vbnRoKCkgKyAxKSA6IGRhdGUuZ2V0TW9udGgoKSArIDFcbiAgICAgICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCkgPCAxMCA/IFwiMFwiICsgKGRhdGUuZ2V0RGF0ZSgpKSA6IGRhdGUuZ2V0RGF0ZSgpXG4gICAgICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gXG4gICAgfVxuXG4gICAgc3RhdGljIFlZWVlNTUREdG9ERE1NKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIGAke2RhdGUuc2xpY2UoLTIpfS0ke2RhdGUuc2xpY2UoNSwgNyl9YFxuICAgIH1cblxuICAgIHN0YXRpYyBnZXREYXkoZGF0ZSkge1xuICAgICAgICBjb25zdCBkID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIDEpXG4gICAgICAgIHJldHVybiAoZC5nZXREYXkoKSA9PT0gMCA/IDcgOiBkLmdldERheSgpKVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXROZXh0RGF5KGRhdGUpIHtcbiAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKGRhdGUpXG4gICAgICAgIGQuc2V0RGF0ZShkLmdldERhdGUoKSArIDEpXG4gICAgICAgIHJldHVybiBkXG4gICAgfVxuXG4gICAgc3RhdGljIHRvTW9yZUh1bWFuKGRhdGUpIHtcbiAgICAgICAgY29uc3QgdG9kYXkgPSB0aGlzLnRvWVlZWU1NREQobmV3IERhdGUoKSlcbiAgICAgICAgaWYgKGRhdGUgPT09IHRvZGF5KSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ0b2RheVwiXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ldyBEYXRlKGRhdGUpLnNldERhdGUobmV3IERhdGUoZGF0ZSkuZ2V0RGF0ZSgpKSA9PT0gbmV3IERhdGUodG9kYXkpLnNldERhdGUobmV3IERhdGUodG9kYXkpLmdldERhdGUoKSAtIDEpKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ5ZXN0ZXJkYXlcIlxuICAgICAgICB9XG4gICAgICAgIGlmIChuZXcgRGF0ZShkYXRlKS5zZXREYXRlKG5ldyBEYXRlKGRhdGUpLmdldERhdGUoKSkgPT09IG5ldyBEYXRlKHRvZGF5KS5zZXREYXRlKG5ldyBEYXRlKHRvZGF5KS5nZXREYXRlKCkgKyAxKSkge1xuICAgICAgICAgICAgcmV0dXJuIFwidG9tb3Jyb3dcIlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgJHtkYXRlLnNsaWNlKC0yKX0uJHtkYXRlLnNsaWNlKDUsIDcpfS4ke2RhdGUuc2xpY2UoMCwgNCl9YFxuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvY3VzVHJhcCB7XG4gICAgc3RhdGljIGZvY3VzYWJsZUVsZW1lbnRzID0gbnVsbFxuICAgIHN0YXRpYyBmaXJzdEVsZW1lbnQgPSBudWxsXG4gICAgc3RhdGljIGxhc3RFbGVtZW50ID0gbnVsbFxuICAgIHN0YXRpYyBjdXJyZW50RWxlbWVudCA9IG51bGxcbiAgICBzdGF0aWMgYm91bmRGb2N1c0hhbmRsZXIgPSB0aGlzLmhhbmRsZVRyYXBGb2N1cy5iaW5kKHRoaXMpXG5cbiAgICBzdGF0aWMgYWN0aXZhdGUoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckVsZW1lbnRzID0gQXJyYXkuZnJvbShjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvbiwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWFcIikpXG4gICAgICAgIGNvbnN0IG5hdkVsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikpXG4gICAgICAgIHRoaXMuZm9jdXNhYmxlRWxlbWVudHMgPSBjb250YWluZXJFbGVtZW50cy5jb25jYXQobmF2RWxlbWVudHMpXG5cbiAgICAgICAgY29uc3QgZmlyc3RUZXh0SW5wdXQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdHlwZT1cInRleHRcIl0sIHRleHRhcmVhYClbMF1cbiAgICAgICAgdGhpcy5maXJzdEVsZW1lbnQgPSB0aGlzLmZvY3VzYWJsZUVsZW1lbnRzWzBdXG4gICAgICAgIHRoaXMubGFzdEVsZW1lbnQgPSB0aGlzLmZvY3VzYWJsZUVsZW1lbnRzW3RoaXMuZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMV1cblxuICAgICAgICBmaXJzdFRleHRJbnB1dC5mb2N1cygpXG4gICAgICAgIHRoaXMuY3VycmVudEVsZW1lbnQgPSBmaXJzdFRleHRJbnB1dCB8fCB0aGlzLmZpcnN0RWxlbWVudFxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCB0aGlzLmJvdW5kRm9jdXNIYW5kbGVyLCB0cnVlKVxuICAgIH1cblxuICAgIHN0YXRpYyBkZWFjdGl2YXRlKCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgdGhpcy5ib3VuZEZvY3VzSGFuZGxlciwgdHJ1ZSlcbiAgICB9XG5cbiAgICBzdGF0aWMgaGFuZGxlVHJhcEZvY3VzKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGlmICh0aGlzLmZvY3VzYWJsZUVsZW1lbnRzLmluY2x1ZGVzKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RWxlbWVudCA9IGUudGFyZ2V0XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmZvY3VzYWJsZUVsZW1lbnRzLmluY2x1ZGVzKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEVsZW1lbnQgPT09IHRoaXMubGFzdEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0RWxlbWVudC5mb2N1cygpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RFbGVtZW50LmZvY3VzKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3VycmVudEVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhbFN0b3JhZ2Uge1xuICAgIHN0YXRpYyBpdGVtTmFtZSA9IFwidG9kby1wcm9qZWN0c1wiXG5cbiAgICBzdGF0aWMgc2V0KGl0ZW0pIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5pdGVtTmFtZSwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpXG4gICAgfVxuXG4gICAgc3RhdGljIGFkZChpdGVtKSB7XG4gICAgICAgIGNvbnN0IGFycmF5ID0gdGhpcy5nZXQoKVxuICAgICAgICBhcnJheS5wdXNoKGl0ZW0pXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuaXRlbU5hbWUsIEpTT04uc3RyaW5naWZ5KGFycmF5KSlcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVtb3ZlKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgYXJyYXkgPSB0aGlzLmdldCgpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuaXRlbU5hbWUsIEpTT04uc3RyaW5naWZ5KGFycmF5LmZpbHRlcihmb2xkZXIgPT4gZm9sZGVyLmlkICE9PSBpdGVtLmlkKSkpXG4gICAgfVxuXG4gICAgc3RhdGljIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5pdGVtTmFtZSkpIHx8IFtdXG4gICAgfVxuXG4gICAgc3RhdGljIGRyb3AoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuaXRlbU5hbWUsIEpTT04uc3RyaW5naWZ5KFwiXCIpKVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRGb2xkZXIoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCkuZmluZChmb2xkZXIgPT4gZm9sZGVyLmlkID09PSBpZClcbiAgICB9XG5cbiAgICBzdGF0aWMgc2F2ZUZvbGRlcihmb2xkZXIpIHtcbiAgICAgICAgY29uc3QgYXJyYXkgPSB0aGlzLmdldCgpXG4gICAgICAgIGNvbnN0IGN1cnJlbnRGb2xkZXJJbmRleCA9IGFycmF5LmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT09IGZvbGRlci5pZClcbiAgICAgICAgaWYgKGN1cnJlbnRGb2xkZXJJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGFycmF5LnB1c2goZm9sZGVyKVxuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50Rm9sZGVySW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBhcnJheVtjdXJyZW50Rm9sZGVySW5kZXhdID0gZm9sZGVyXG4gICAgICAgIH1cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5pdGVtTmFtZSwgSlNPTi5zdHJpbmdpZnkoYXJyYXkpKVxuICAgIH1cblxuICAgIHN0YXRpYyBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuZ2V0KClbMF1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG91Y2hFdmVudCB7XG5cbiAgICBzdGF0aWMgdGhyZXNob2xkID0gNzBcblxuICAgIGNvbnN0cnVjdG9yKHRvdWNoU3RhcnQsIHRvdWNoRW5kKSB7XG4gICAgICAgIHRoaXMudG91Y2hTdGFydCA9IHRvdWNoU3RhcnRcbiAgICAgICAgdGhpcy50b3VjaEVuZCA9IHRvdWNoRW5kIHx8IG51bGxcbiAgICB9XG5cbiAgICBzZXRFbmRFdmVudChlKSB7XG4gICAgICAgIHRoaXMudG91Y2hFbmQgPSBlXG4gICAgfVxuXG4gICAgZ2V0U3dpcGVEaXJlY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy50b3VjaFN0YXJ0LmNoYW5nZWRUb3VjaGVzWzBdXG4gICAgICAgIGNvbnN0IGVuZCA9IHRoaXMudG91Y2hFbmQuY2hhbmdlZFRvdWNoZXNbMF1cblxuICAgICAgICBpZiAoc3RhcnQuc2NyZWVuWCAtIGVuZC5zY3JlZW5YID4gVG91Y2hFdmVudC50aHJlc2hvbGQpIHtcbiAgICAgICAgICAgIHJldHVybiBcImxlZnRcIlxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXJ0LnNjcmVlblggLSBlbmQuc2NyZWVuWCA8IC1Ub3VjaEV2ZW50LnRocmVzaG9sZCkge1xuICAgICAgICAgICAgcmV0dXJuIFwicmlnaHRcIlxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXJ0LnNjcmVlblkgLSBlbmQuc2NyZWVuWSA+IFRvdWNoRXZlbnQudGhyZXNob2xkKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ1cFwiXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhcnQuc2NyZWVuWSAtIGVuZC5zY3JlZW5ZIDwgLVRvdWNoRXZlbnQudGhyZXNob2xkKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJkb3duXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzU3dpcGVMZWZ0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTd2lwZURpcmVjdGlvbigpID09PSBcImxlZnRcIiB8fCBmYWxzZVxuICAgIH1cblxuICAgIGlzU3dpcGVSaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3dpcGVEaXJlY3Rpb24oKSA9PT0gXCJyaWdodFwiIHx8IGZhbHNlXG4gICAgfVxuXG4gICAgaXNTd2lwZVVwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTd2lwZURpcmVjdGlvbigpID09PSBcInVwXCIgfHwgZmFsc2VcbiAgICB9XG5cbiAgICBpc1N3aXBlRG93bigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3dpcGVEaXJlY3Rpb24oKSA9PT0gXCJkb3duXCIgfHwgZmFsc2VcbiAgICB9XG59IiwiZXhwb3J0IHsgdXJsQWxwaGFiZXQgfSBmcm9tICcuL3VybC1hbHBoYWJldC9pbmRleC5qcydcbmV4cG9ydCBsZXQgcmFuZG9tID0gYnl0ZXMgPT4gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShieXRlcykpXG5leHBvcnQgbGV0IGN1c3RvbVJhbmRvbSA9IChhbHBoYWJldCwgZGVmYXVsdFNpemUsIGdldFJhbmRvbSkgPT4ge1xuICBsZXQgbWFzayA9ICgyIDw8IChNYXRoLmxvZyhhbHBoYWJldC5sZW5ndGggLSAxKSAvIE1hdGguTE4yKSkgLSAxXG4gIGxldCBzdGVwID0gLX4oKDEuNiAqIG1hc2sgKiBkZWZhdWx0U2l6ZSkgLyBhbHBoYWJldC5sZW5ndGgpXG4gIHJldHVybiAoc2l6ZSA9IGRlZmF1bHRTaXplKSA9PiB7XG4gICAgbGV0IGlkID0gJydcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgbGV0IGJ5dGVzID0gZ2V0UmFuZG9tKHN0ZXApXG4gICAgICBsZXQgaiA9IHN0ZXBcbiAgICAgIHdoaWxlIChqLS0pIHtcbiAgICAgICAgaWQgKz0gYWxwaGFiZXRbYnl0ZXNbal0gJiBtYXNrXSB8fCAnJ1xuICAgICAgICBpZiAoaWQubGVuZ3RoID09PSBzaXplKSByZXR1cm4gaWRcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBsZXQgY3VzdG9tQWxwaGFiZXQgPSAoYWxwaGFiZXQsIHNpemUgPSAyMSkgPT5cbiAgY3VzdG9tUmFuZG9tKGFscGhhYmV0LCBzaXplLCByYW5kb20pXG5leHBvcnQgbGV0IG5hbm9pZCA9IChzaXplID0gMjEpID0+XG4gIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSkpLnJlZHVjZSgoaWQsIGJ5dGUpID0+IHtcbiAgICBieXRlICY9IDYzXG4gICAgaWYgKGJ5dGUgPCAzNikge1xuICAgICAgaWQgKz0gYnl0ZS50b1N0cmluZygzNilcbiAgICB9IGVsc2UgaWYgKGJ5dGUgPCA2Mikge1xuICAgICAgaWQgKz0gKGJ5dGUgLSAyNikudG9TdHJpbmcoMzYpLnRvVXBwZXJDYXNlKClcbiAgICB9IGVsc2UgaWYgKGJ5dGUgPiA2Mikge1xuICAgICAgaWQgKz0gJy0nXG4gICAgfSBlbHNlIHtcbiAgICAgIGlkICs9ICdfJ1xuICAgIH1cbiAgICByZXR1cm4gaWRcbiAgfSwgJycpXG4iLCJleHBvcnQgY29uc3QgdXJsQWxwaGFiZXQgPVxuICAndXNlYW5kb20tMjZUMTk4MzQwUFg3NXB4SkFDS1ZFUllNSU5EQlVTSFdPTEZfR1FaYmZnaGprbHF2d3l6cmljdCdcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBBcHAgZnJvbSBcIi4vY29tcG9uZW50cy9BcHBcIlxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBBcHAubG9hZCgpKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==