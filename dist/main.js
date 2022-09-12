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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/arrow-left-icon.svg */ "./src/assets/arrow-left-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/arrow-right-icon.svg */ "./src/assets/arrow-right-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Calendar */\n\n.calendar {\n    display: grid;\n    justify-items: center;\n    position: relative;\n    padding: 15px;\n    margin-bottom: 5px;\n    overflow: hidden;\n    background: var(--gradient);\n    border-radius: 0 0 10px 10px;\n    box-shadow: 0px 0px 5px lightgray;\n    color: white;\n    font-weight: 200;\n    user-select: none;\n}\n\n.days-of-week-container {\n    display: grid;\n    gap: 5px;\n    grid-template-columns: repeat(7, 1fr);\n    justify-items: center;\n    align-items: center;\n    padding-bottom: 5px;\n    border-bottom: 0.5px solid rgba(200, 200, 200, 0.5);\n    font-size: 0.9rem;\n}\n\n.calendar-grid-container {\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    grid-template-columns: repeat(7, 1fr);\n    grid-template-rows: repeat(6, auto);\n    aspect-ratio: 1/1;\n}\n\n.calendar-grid-container>div {\n    aspect-ratio: 1/1;\n}\n\n.day-container {\n    cursor: pointer;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    width: 100%;\n    transition: all 0.3s;\n}\n\n.day-container:active {\n    user-select: none;\n    transform: scale(0.9);\n    text-shadow: 0 0 5px rgb(150, 150, 150) !important;\n}\n\n.day-container:hover {\n    text-shadow: 0 0 5px white;\n}\n\n.day-container-selected > div { \n    font-weight: 500;\n}\n\n.day-container-today {\n    font-weight: 400;\n    text-shadow: 0 0 3px rgba(210, 210, 210);\n}\n\n.another-month-day {\n    color: rgb(170, 170, 170);\n}\n\n.another-month-day:hover {\n    cursor: pointer;\n    text-shadow: 0 0 5px rgb(200, 200, 200);\n}\n\n.day-with-task {\n    position: relative;\n}\n\n.day-with-task::after {\n    content: \"\";\n    position: absolute;\n    bottom: -5px;\n    left: 0;\n    right: 0;\n    margin-left: auto;\n    margin-right: auto;\n    width: 3px;\n    height: 3px;\n    border-radius: 50%;\n    background-color: white;\n}\n\n.another-month-day>.day-with-task::after {\n    background-color: rgb(170, 170, 170);\n}\n\n/* Switch */\n\n.month-switch-contianer {\n    display: grid;\n    padding: 0 0 10px;\n}\n\n.month-switch {\n    display: grid;\n    gap: 0.7rem;\n    grid-template-columns: 1fr auto 1fr;\n    align-items: center;\n    min-width: 235px;\n}\n\n.month-switch>button {\n    min-height: 1.5rem;\n    background-position-y: center;\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n}\n\n.month-switch-left {\n    background-position-x: right;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.month-switch-right {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.month-switch div {\n    display: grid;\n    gap: 0.2rem;\n    grid-template-columns: 1fr auto;\n    cursor: pointer;\n}\n\n.month-container,\n.month-current {\n    display: grid;\n    justify-items: center;\n    color: rgba(210, 210, 210);\n    min-width: 80px;\n}\n\n.month-current {\n    color: white;\n}\n\n.previous-calendar,\n.next-calendar {\n    display: none;\n}\n\n@media screen and (min-width: 520px) {\n    .previous-calendar {\n        display: block;\n        position: absolute;\n        bottom: 15px;\n        transform: translateX(-300px);\n        -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));\n        mask-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));\n    }\n\n    .next-calendar {\n        display: block;\n        position: absolute;\n        bottom: 15px;\n        transform: translateX(300px);\n        -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));\n        mask-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));\n    }\n}", "",{"version":3,"sources":["webpack://./src/components/Calendar/calendar.css"],"names":[],"mappings":"AAAA,aAAa;;AAEb;IACI,aAAa;IACb,qBAAqB;IACrB,kBAAkB;IAClB,aAAa;IACb,kBAAkB;IAClB,gBAAgB;IAChB,2BAA2B;IAC3B,4BAA4B;IAC5B,iCAAiC;IACjC,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,qCAAqC;IACrC,qBAAqB;IACrB,mBAAmB;IACnB,mBAAmB;IACnB,mDAAmD;IACnD,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,qCAAqC;IACrC,mCAAmC;IACnC,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,WAAW;IACX,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;IACrB,kDAAkD;AACtD;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,wCAAwC;AAC5C;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,uCAAuC;AAC3C;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,OAAO;IACP,QAAQ;IACR,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,oCAAoC;AACxC;;AAEA,WAAW;;AAEX;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,mCAAmC;IACnC,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,6BAA6B;IAC7B,4BAA4B;IAC5B,wBAAwB;IACxB,6BAA6B;IAC7B,YAAY;IACZ,eAAe;IACf,WAAW;AACf;;AAEA;IACI,4BAA4B;IAC5B,yDAAyD;AAC7D;;AAEA;IACI,yDAA0D;AAC9D;;AAEA;IACI,aAAa;IACb,WAAW;IACX,+BAA+B;IAC/B,eAAe;AACnB;;AAEA;;IAEI,aAAa;IACb,qBAAqB;IACrB,0BAA0B;IAC1B,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI;QACI,cAAc;QACd,kBAAkB;QAClB,YAAY;QACZ,6BAA6B;QAC7B,gFAAgF;QAChF,wEAAwE;IAC5E;;IAEA;QACI,cAAc;QACd,kBAAkB;QAClB,YAAY;QACZ,4BAA4B;QAC5B,iFAAiF;QACjF,yEAAyE;IAC7E;AACJ","sourcesContent":["/* Calendar */\n\n.calendar {\n    display: grid;\n    justify-items: center;\n    position: relative;\n    padding: 15px;\n    margin-bottom: 5px;\n    overflow: hidden;\n    background: var(--gradient);\n    border-radius: 0 0 10px 10px;\n    box-shadow: 0px 0px 5px lightgray;\n    color: white;\n    font-weight: 200;\n    user-select: none;\n}\n\n.days-of-week-container {\n    display: grid;\n    gap: 5px;\n    grid-template-columns: repeat(7, 1fr);\n    justify-items: center;\n    align-items: center;\n    padding-bottom: 5px;\n    border-bottom: 0.5px solid rgba(200, 200, 200, 0.5);\n    font-size: 0.9rem;\n}\n\n.calendar-grid-container {\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    grid-template-columns: repeat(7, 1fr);\n    grid-template-rows: repeat(6, auto);\n    aspect-ratio: 1/1;\n}\n\n.calendar-grid-container>div {\n    aspect-ratio: 1/1;\n}\n\n.day-container {\n    cursor: pointer;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    width: 100%;\n    transition: all 0.3s;\n}\n\n.day-container:active {\n    user-select: none;\n    transform: scale(0.9);\n    text-shadow: 0 0 5px rgb(150, 150, 150) !important;\n}\n\n.day-container:hover {\n    text-shadow: 0 0 5px white;\n}\n\n.day-container-selected > div { \n    font-weight: 500;\n}\n\n.day-container-today {\n    font-weight: 400;\n    text-shadow: 0 0 3px rgba(210, 210, 210);\n}\n\n.another-month-day {\n    color: rgb(170, 170, 170);\n}\n\n.another-month-day:hover {\n    cursor: pointer;\n    text-shadow: 0 0 5px rgb(200, 200, 200);\n}\n\n.day-with-task {\n    position: relative;\n}\n\n.day-with-task::after {\n    content: \"\";\n    position: absolute;\n    bottom: -5px;\n    left: 0;\n    right: 0;\n    margin-left: auto;\n    margin-right: auto;\n    width: 3px;\n    height: 3px;\n    border-radius: 50%;\n    background-color: white;\n}\n\n.another-month-day>.day-with-task::after {\n    background-color: rgb(170, 170, 170);\n}\n\n/* Switch */\n\n.month-switch-contianer {\n    display: grid;\n    padding: 0 0 10px;\n}\n\n.month-switch {\n    display: grid;\n    gap: 0.7rem;\n    grid-template-columns: 1fr auto 1fr;\n    align-items: center;\n    min-width: 235px;\n}\n\n.month-switch>button {\n    min-height: 1.5rem;\n    background-position-y: center;\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n}\n\n.month-switch-left {\n    background-position-x: right;\n    background-image: url(\"../../assets/arrow-left-icon.svg\");\n}\n\n.month-switch-right {\n    background-image: url(\"../../assets/arrow-right-icon.svg\");\n}\n\n.month-switch div {\n    display: grid;\n    gap: 0.2rem;\n    grid-template-columns: 1fr auto;\n    cursor: pointer;\n}\n\n.month-container,\n.month-current {\n    display: grid;\n    justify-items: center;\n    color: rgba(210, 210, 210);\n    min-width: 80px;\n}\n\n.month-current {\n    color: white;\n}\n\n.previous-calendar,\n.next-calendar {\n    display: none;\n}\n\n@media screen and (min-width: 520px) {\n    .previous-calendar {\n        display: block;\n        position: absolute;\n        bottom: 15px;\n        transform: translateX(-300px);\n        -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));\n        mask-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));\n    }\n\n    .next-calendar {\n        display: block;\n        position: absolute;\n        bottom: 15px;\n        transform: translateX(300px);\n        -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));\n        mask-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));\n    }\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "form {\n    display: grid;\n    gap: 1.5rem;\n    padding: 1rem 1rem 0 1rem;\n    overflow: auto;\n    grid-column: 1/-1;\n\n}\n\n.form-error {\n    grid-column: 1/-1;\n    color: var(--main-color-3);\n}\n\nlabel {\n    color: rgb(90, 90, 90);\n    align-self: center;\n    font-size: 0.9rem;\n    grid-column: 1;\n}\n\nselect {\n    align-self: center;\n    width: 150px;\n    border: none;\n    border-radius: 5px;\n    color: rgb(90, 90, 90);\n    background-color: var(--lighter-color);\n    padding: 5px 10px;\n    cursor: pointer;\n    grid-row: 1;\n    grid-column: 2;\n    justify-self: start;\n}\n\ninput[type=\"date\"] {\n    grid-row: 2;\n    grid-column: 2;\n    width: 150px;\n    border: none;\n    border-radius: 5px;\n    color: rgb(90, 90, 90);\n    background-color: var(--lighter-color);\n    padding: 5px 10px;\n}\n\n::-webkit-calendar-picker-indicator {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.submit-button {\n    bottom: 1rem !important;\n}\n\n/* Specific forms */\n\n.task-form {\n    grid-template-rows: auto auto 2fr auto 1fr;\n    grid-template-columns: auto 1fr;\n}\n\n#task-name {\n    grid-column: 1/-1;\n    resize: none;\n    border: none;\n    border-top: 1px solid var(--lighter-gray);\n    border-bottom: 1px solid var(--lighter-gray);\n    padding: 1.5rem 0;\n    margin-top: 2rem;\n    font-weight: 700;\n    outline: none;\n    overflow: auto;\n}\n\n.folder-form {\n    align-content: start;\n}\n\n#folder-name {\n    align-self: center;\n    min-width: 150px;\n    border: none;\n    border-radius: 5px;\n    color: rgb(90, 90, 90);\n    background-color: var(--lighter-color);\n    padding: 10px;\n    cursor: pointer;\n}\n\n.edit-folder-form {\n    grid-template-columns: 1fr auto auto;\n}", "",{"version":3,"sources":["webpack://./src/components/Forms/forms.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,WAAW;IACX,yBAAyB;IACzB,cAAc;IACd,iBAAiB;;AAErB;;AAEA;IACI,iBAAiB;IACjB,0BAA0B;AAC9B;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;IACtB,sCAAsC;IACtC,iBAAiB;IACjB,eAAe;IACf,WAAW;IACX,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;IACtB,sCAAsC;IACtC,iBAAiB;AACrB;;AAEA;IACI,yDAAgR;AACpR;;AAEA;IACI,uBAAuB;AAC3B;;AAEA,mBAAmB;;AAEnB;IACI,0CAA0C;IAC1C,+BAA+B;AACnC;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,yCAAyC;IACzC,4CAA4C;IAC5C,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;IACtB,sCAAsC;IACtC,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,oCAAoC;AACxC","sourcesContent":["form {\n    display: grid;\n    gap: 1.5rem;\n    padding: 1rem 1rem 0 1rem;\n    overflow: auto;\n    grid-column: 1/-1;\n\n}\n\n.form-error {\n    grid-column: 1/-1;\n    color: var(--main-color-3);\n}\n\nlabel {\n    color: rgb(90, 90, 90);\n    align-self: center;\n    font-size: 0.9rem;\n    grid-column: 1;\n}\n\nselect {\n    align-self: center;\n    width: 150px;\n    border: none;\n    border-radius: 5px;\n    color: rgb(90, 90, 90);\n    background-color: var(--lighter-color);\n    padding: 5px 10px;\n    cursor: pointer;\n    grid-row: 1;\n    grid-column: 2;\n    justify-self: start;\n}\n\ninput[type=\"date\"] {\n    grid-row: 2;\n    grid-column: 2;\n    width: 150px;\n    border: none;\n    border-radius: 5px;\n    color: rgb(90, 90, 90);\n    background-color: var(--lighter-color);\n    padding: 5px 10px;\n}\n\n::-webkit-calendar-picker-indicator {\n    background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"15\" viewBox=\"0 0 24 24\"><path fill=\"gray\" d=\"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z\"/></svg>');\n}\n\n.submit-button {\n    bottom: 1rem !important;\n}\n\n/* Specific forms */\n\n.task-form {\n    grid-template-rows: auto auto 2fr auto 1fr;\n    grid-template-columns: auto 1fr;\n}\n\n#task-name {\n    grid-column: 1/-1;\n    resize: none;\n    border: none;\n    border-top: 1px solid var(--lighter-gray);\n    border-bottom: 1px solid var(--lighter-gray);\n    padding: 1.5rem 0;\n    margin-top: 2rem;\n    font-weight: 700;\n    outline: none;\n    overflow: auto;\n}\n\n.folder-form {\n    align-content: start;\n}\n\n#folder-name {\n    align-self: center;\n    min-width: 150px;\n    border: none;\n    border-radius: 5px;\n    color: rgb(90, 90, 90);\n    background-color: var(--lighter-color);\n    padding: 10px;\n    cursor: pointer;\n}\n\n.edit-folder-form {\n    grid-template-columns: 1fr auto auto;\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Tabs/HomeTab.js/homeTab.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Tabs/HomeTab.js/homeTab.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".home-tab-container {\n    display: grid;\n    align-items: start;\n    justify-items: center;\n    background-color: var(--background-color);\n    padding: 1rem;\n    padding-bottom: calc(var(--nav-height) + 1rem);\n    overflow-y: auto;\n}\n\n.home-content-container {\n    display: grid;\n    gap: 1.5rem;\n    min-width: 250px;\n    width: 100%;\n    max-width: 800px;\n}\n\nheader {\n    display: grid;\n    gap: 1rem;\n    align-items: end;\n    grid-template-columns: auto;\n    background: var(--gradient);\n    border-radius: 5px;\n    padding: 1rem;\n}\n\nh1 {\n    color: var(--lighter-gray);\n    text-shadow: 0 0 10px var(--darker-gray);\n    font-size: 2rem;\n    font-weight: 600;\n}\n\n.home-section-label {\n    grid-row: 1;\n    grid-column: 1/-1;\n    font-size: 1rem;\n    font-weight: 600;\n    padding-left: 0.5rem;\n    padding-top: 0.5rem;\n    color: var(--darker-gray);\n}\n\n.tasks-overview-container {\n    display: grid;\n    gap: 1rem;\n    grid-template-rows: auto;\n    grid-template-columns: 1fr 1fr;\n}\n\n.task-widget {\n    display: grid;\n    gap: 0.5rem;\n    align-items: center;\n    justify-items: center;\n    border-radius: 5px;\n    background-color: var(--lighter-color);\n    padding: 1rem;\n}\n\n.task-counter {\n    font-size: 1.2rem;\n    font-weight: 500;\n    text-align: center;\n}\n\n.home-widget-label {\n    font-size: 0.8rem;\n    text-align: center;\n}\n\n.upcoming-tasks-wigdet {\n    grid-column: 1/-1;\n}\n\n.upcoming-tasks-wigdet ul {\n    display: grid;\n    gap: 0.5rem;\n    width: 100%;\n}\n\n.upcoming-tasks-wigdet ul {\n    display: grid;\n    gap: 0.5rem;\n    width: 100%;\n}\n\n.upcoming-tasks-wigdet ul:empty {\n    height: 1.5rem;\n    justify-items: center;\n    align-items: center;\n    position: relative;\n}\n\n.upcoming-tasks-wigdet ul:empty::after {\n    content: \"No tasks\";\n    font-size: 0.8rem;\n    color: gray;\n    text-align: center;\n}\n\n.upcoming-tasks-label {\n    justify-self: start;\n    color: var(--darker-gray);\n    font-size: 0.85rem;\n    font-weight: 500;\n}\n\n.upcoming-task {\n    display: grid;\n    align-items: center;\n    gap: 10px;\n    grid-template-columns: auto 1fr auto;\n}\n\n.upcoming-task svg {\n    width: 20px;\n    height: 20px;\n}\n\n.upcoming-task-icon {\n    display: grid;\n    align-items: center;\n    fill: var(--darker-gray);\n}\n\n.upcoming-task-name {\n    cursor: pointer;\n    width: 100%;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 0.9rem;\n}\n\n.upcoming-task-date {\n    font-size: 0.8rem;\n    color: var(--darker-gray);\n}", "",{"version":3,"sources":["webpack://./src/components/Tabs/HomeTab.js/homeTab.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,kBAAkB;IAClB,qBAAqB;IACrB,yCAAyC;IACzC,aAAa;IACb,8CAA8C;IAC9C,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,gBAAgB;IAChB,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,gBAAgB;IAChB,2BAA2B;IAC3B,2BAA2B;IAC3B,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,0BAA0B;IAC1B,wCAAwC;IACxC,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,eAAe;IACf,gBAAgB;IAChB,oBAAoB;IACpB,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,SAAS;IACT,wBAAwB;IACxB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,WAAW;IACX,mBAAmB;IACnB,qBAAqB;IACrB,kBAAkB;IAClB,sCAAsC;IACtC,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,WAAW;AACf;;AAEA;IACI,aAAa;IACb,WAAW;IACX,WAAW;AACf;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,oCAAoC;AACxC;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,wBAAwB;AAC5B;;AAEA;IACI,eAAe;IACf,WAAW;IACX,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;AAC7B","sourcesContent":[".home-tab-container {\n    display: grid;\n    align-items: start;\n    justify-items: center;\n    background-color: var(--background-color);\n    padding: 1rem;\n    padding-bottom: calc(var(--nav-height) + 1rem);\n    overflow-y: auto;\n}\n\n.home-content-container {\n    display: grid;\n    gap: 1.5rem;\n    min-width: 250px;\n    width: 100%;\n    max-width: 800px;\n}\n\nheader {\n    display: grid;\n    gap: 1rem;\n    align-items: end;\n    grid-template-columns: auto;\n    background: var(--gradient);\n    border-radius: 5px;\n    padding: 1rem;\n}\n\nh1 {\n    color: var(--lighter-gray);\n    text-shadow: 0 0 10px var(--darker-gray);\n    font-size: 2rem;\n    font-weight: 600;\n}\n\n.home-section-label {\n    grid-row: 1;\n    grid-column: 1/-1;\n    font-size: 1rem;\n    font-weight: 600;\n    padding-left: 0.5rem;\n    padding-top: 0.5rem;\n    color: var(--darker-gray);\n}\n\n.tasks-overview-container {\n    display: grid;\n    gap: 1rem;\n    grid-template-rows: auto;\n    grid-template-columns: 1fr 1fr;\n}\n\n.task-widget {\n    display: grid;\n    gap: 0.5rem;\n    align-items: center;\n    justify-items: center;\n    border-radius: 5px;\n    background-color: var(--lighter-color);\n    padding: 1rem;\n}\n\n.task-counter {\n    font-size: 1.2rem;\n    font-weight: 500;\n    text-align: center;\n}\n\n.home-widget-label {\n    font-size: 0.8rem;\n    text-align: center;\n}\n\n.upcoming-tasks-wigdet {\n    grid-column: 1/-1;\n}\n\n.upcoming-tasks-wigdet ul {\n    display: grid;\n    gap: 0.5rem;\n    width: 100%;\n}\n\n.upcoming-tasks-wigdet ul {\n    display: grid;\n    gap: 0.5rem;\n    width: 100%;\n}\n\n.upcoming-tasks-wigdet ul:empty {\n    height: 1.5rem;\n    justify-items: center;\n    align-items: center;\n    position: relative;\n}\n\n.upcoming-tasks-wigdet ul:empty::after {\n    content: \"No tasks\";\n    font-size: 0.8rem;\n    color: gray;\n    text-align: center;\n}\n\n.upcoming-tasks-label {\n    justify-self: start;\n    color: var(--darker-gray);\n    font-size: 0.85rem;\n    font-weight: 500;\n}\n\n.upcoming-task {\n    display: grid;\n    align-items: center;\n    gap: 10px;\n    grid-template-columns: auto 1fr auto;\n}\n\n.upcoming-task svg {\n    width: 20px;\n    height: 20px;\n}\n\n.upcoming-task-icon {\n    display: grid;\n    align-items: center;\n    fill: var(--darker-gray);\n}\n\n.upcoming-task-name {\n    cursor: pointer;\n    width: 100%;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 0.9rem;\n}\n\n.upcoming-task-date {\n    font-size: 0.8rem;\n    color: var(--darker-gray);\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/done-icon.svg */ "./src/assets/done-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".task-container {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    grid-template-rows: auto 1fr;\n    grid-auto-flow: column;\n    column-gap: 1rem;\n    align-items: center;\n    background-color: var(--lighter-color);\n    overflow: hidden;\n    border-radius: 5px;\n    padding: 1rem 2rem 1rem 1rem;\n    position: relative;\n    cursor: pointer;\n}\n\n.task-container-checked {\n    background-color: var(--lighter-gray);\n    color: gray;\n}\n\n.task-folder-name {\n    --size: 0.6rem;\n    --color: gray;\n    display: grid;\n    grid-template-columns: auto 1fr;\n    align-items: center;\n    gap: 3px;\n    grid-row: 1;\n    color: var(--color);\n    font-size: var(--size);\n    max-width: 30%;\n}\n\n.task-folder-name svg {\n    width: 0.8rem;\n    height: 0.8rem;\n    fill: var(--color);\n}\n\n.task-folder-name p {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.task-text {\n    font-size: 0.9rem;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.task-container-checked>.task-text {\n    text-decoration: line-through;\n}\n\n.task-check-button {\n    grid-row: 1/-1;\n    width: 20px;\n    height: 20px;\n    background-color: var(--background-color);\n    border-radius: 5px;\n    border: 1px solid var(--main-color-2);\n    position: relative;\n}\n\n.task-check-button::before {\n    content: \"\";\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    background-size: cover;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    transition: opacity 0.3s;\n}\n\n.task-check-button:hover::before {\n    content: \"\";\n    position: absolute;\n    opacity: 1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    background-size: cover;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.task-container-checked .task-check-button {\n    border: 1px solid gray;\n}\n\n.task-container-checked .task-check-button::before {\n    opacity: 1;\n}\n\n.task-important-button {\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    grid-row: 1/-1;\n    background-color: transparent;\n    border: none;\n    border-radius: 5px;\n}\n\n.task-important-button svg {\n    width: 25px;\n    height: 25px;\n    fill: gray;\n    transition: fill 0.5s;\n}\n\n.task-important-button:hover svg {\n    fill: var(--main-color-2);\n}\n\n.task-important-button-active svg {\n    fill: var(--main-color-2);\n}\n\n.task-container-checked .task-important-button svg {\n    fill: gray;\n}\n\n.task-remove-button {\n    display: grid;\n    grid-column-end: -1;\n    grid-row: 1;\n    align-self: center;\n    justify-self: end;\n    justify-items: center;\n    align-items: center;\n    width: 3rem;\n    height: 3rem;\n    border-radius: 5px;\n    border: none;\n    background: none;\n    transition: all 0.5s;\n}\n\n.task-remove-button svg {\n    width: 2rem;\n    height: 2rem;\n}\n\n.task-remove-button:hover {\n    background-color: var(--lighter-gray);\n}", "",{"version":3,"sources":["webpack://./src/components/Tasks/task.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,+BAA+B;IAC/B,4BAA4B;IAC5B,sBAAsB;IACtB,gBAAgB;IAChB,mBAAmB;IACnB,sCAAsC;IACtC,gBAAgB;IAChB,kBAAkB;IAClB,4BAA4B;IAC5B,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,qCAAqC;IACrC,WAAW;AACf;;AAEA;IACI,cAAc;IACd,aAAa;IACb,aAAa;IACb,+BAA+B;IAC/B,mBAAmB;IACnB,QAAQ;IACR,WAAW;IACX,mBAAmB;IACnB,sBAAsB;IACtB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,cAAc;IACd,WAAW;IACX,YAAY;IACZ,yCAAyC;IACzC,kBAAkB;IAClB,qCAAqC;IACrC,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,sBAAsB;IACtB,yDAAmD;IACnD,wBAAwB;AAC5B;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,sBAAsB;IACtB,yDAAmD;AACvD;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,6BAA6B;IAC7B,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,UAAU;IACV,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,kBAAkB;IAClB,iBAAiB;IACjB,qBAAqB;IACrB,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,qCAAqC;AACzC","sourcesContent":[".task-container {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    grid-template-rows: auto 1fr;\n    grid-auto-flow: column;\n    column-gap: 1rem;\n    align-items: center;\n    background-color: var(--lighter-color);\n    overflow: hidden;\n    border-radius: 5px;\n    padding: 1rem 2rem 1rem 1rem;\n    position: relative;\n    cursor: pointer;\n}\n\n.task-container-checked {\n    background-color: var(--lighter-gray);\n    color: gray;\n}\n\n.task-folder-name {\n    --size: 0.6rem;\n    --color: gray;\n    display: grid;\n    grid-template-columns: auto 1fr;\n    align-items: center;\n    gap: 3px;\n    grid-row: 1;\n    color: var(--color);\n    font-size: var(--size);\n    max-width: 30%;\n}\n\n.task-folder-name svg {\n    width: 0.8rem;\n    height: 0.8rem;\n    fill: var(--color);\n}\n\n.task-folder-name p {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.task-text {\n    font-size: 0.9rem;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.task-container-checked>.task-text {\n    text-decoration: line-through;\n}\n\n.task-check-button {\n    grid-row: 1/-1;\n    width: 20px;\n    height: 20px;\n    background-color: var(--background-color);\n    border-radius: 5px;\n    border: 1px solid var(--main-color-2);\n    position: relative;\n}\n\n.task-check-button::before {\n    content: \"\";\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    background-size: cover;\n    background-image: url(\"../../assets/done-icon.svg\");\n    transition: opacity 0.3s;\n}\n\n.task-check-button:hover::before {\n    content: \"\";\n    position: absolute;\n    opacity: 1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    background-size: cover;\n    background-image: url(\"../../assets/done-icon.svg\");\n}\n\n.task-container-checked .task-check-button {\n    border: 1px solid gray;\n}\n\n.task-container-checked .task-check-button::before {\n    opacity: 1;\n}\n\n.task-important-button {\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    grid-row: 1/-1;\n    background-color: transparent;\n    border: none;\n    border-radius: 5px;\n}\n\n.task-important-button svg {\n    width: 25px;\n    height: 25px;\n    fill: gray;\n    transition: fill 0.5s;\n}\n\n.task-important-button:hover svg {\n    fill: var(--main-color-2);\n}\n\n.task-important-button-active svg {\n    fill: var(--main-color-2);\n}\n\n.task-container-checked .task-important-button svg {\n    fill: gray;\n}\n\n.task-remove-button {\n    display: grid;\n    grid-column-end: -1;\n    grid-row: 1;\n    align-self: center;\n    justify-self: end;\n    justify-items: center;\n    align-items: center;\n    width: 3rem;\n    height: 3rem;\n    border-radius: 5px;\n    border: none;\n    background: none;\n    transition: all 0.5s;\n}\n\n.task-remove-button svg {\n    width: 2rem;\n    height: 2rem;\n}\n\n.task-remove-button:hover {\n    background-color: var(--lighter-gray);\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: var(--main-font);\n}\n\n@keyframes slideOut {\n    from {\n        transform: translateX(0);\n        opacity: 1;\n    }\n\n    to {\n        transform: translateX(100vw);\n        opacity: 0.8;\n    }\n}\n\n@keyframes slideIn {\n    from {\n        transform: translateX(100vw);\n    }\n\n    to {\n        transform: translateX(0);\n    }\n}\n\n:root {\n    --main-font: \"Open Sans\", sans-serif;\n    --folder-container-padding: 25px;\n    --nav-height: calc(3rem + 10px);\n    --avalible-height: calc(100vh - var(--nav-height));\n    --background-color: white;\n    --darker-gray: rgb(90, 90, 90);\n    --lighter-gray: rgb(245, 245, 245);\n    --lighter-color: rgb(211, 222, 255, 0.5);\n    --main-color-1: rgba(64, 72, 247, 1);\n    --main-color-2: rgba(192, 50, 198, 1);\n    --main-color-3: rgb(150, 100, 255);\n    --gradient: linear-gradient(200deg, var(--main-color-1) 0%, var(--main-color-2) 100%);\n}\n\n#root {\n    display: grid;\n    grid-template-rows: 1fr auto;\n    min-height: 100vh;\n    height: 100vh;\n    position: relative;\n    overflow: hidden;\n}\n\n.hidden {\n    display: none !important;\n}\n\n.disabled {\n    pointer-events: none;\n    user-select: none;\n}\n\nul {\n    list-style: none;\n}\n\nbutton,\ninput {\n    cursor: pointer;\n}\n\nbutton:active {\n    transform: scale(0.95);\n}\n\n/* Navbar section */\n\nnav {\n    display: grid;\n    grid-row: -1;\n    justify-items: center;\n    align-items: center;\n    position: relative;\n    background-color: var(--background-color);\n    height: var(--nav-height);\n    box-shadow: 0px 0px 5px lightgray;\n    overflow: hidden;\n    padding: 0 2rem;\n    z-index: 11;\n}\n\nnav {\n    display: grid;\n    grid-row: -1;\n    justify-items: center;\n    align-items: center;\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    background-color: var(--background-color);\n    height: var(--nav-height);\n    box-shadow: 0px 0px 5px lightgray;\n    overflow: hidden;\n    padding: 0 2rem;\n}\n\n.nav-buttons-wrapper {\n    display: grid;\n    gap: 2rem;\n    grid-auto-columns: auto;\n    grid-auto-flow: column;\n    justify-items: center;\n    width: 100%;\n    max-width: 800px;\n}\n\n.nav-button {\n    border: none;\n    min-width: 3rem;\n    background: none;\n    text-transform: capitalize;\n    transition: all 0.2s;\n}\n\n.nav-button path {\n    fill: gray;\n    transition: all 0.2s;\n}\n\n.nav-button:hover path {\n    fill: var(--main-color-1);\n}\n\n.nav-button:hover .nav-button-text-container {\n    color: var(--main-color-1);\n}\n\n.nav-button-active path {\n    fill: var(--main-color-1);\n}\n\n.nav-button-active .nav-button-text-container {\n    color: var(--main-color-1);\n}\n\n.nav-button-icon-container {\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.nav-button-icon-container svg {\n    width: 1.5rem;\n    height: 1.5rem;\n}\n\n.nav-button-text-container {\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    font-size: 0.7rem;\n    color: gray;\n    transition: all 0.2s;\n}\n\n/* Main section */\n\nmain {\n    display: grid;\n    grid-row: 1;\n    width: 100%;\n    background-color: var(--background-color);\n    overflow: hidden;\n    position: relative;\n}\n\n.slide-container {\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: auto auto;\n    grid-template-rows: auto 1fr;\n    position: fixed;\n    z-index: 10;\n    top: 0;\n    right: 0;\n    bottom: var(--nav-height);\n    left: 0;\n    padding: 1rem 10px 0 10px;\n    pointer-events: all;\n    overflow: visible;\n    background-color: var(--background-color);\n    translate: 0;\n}\n\n.slide-in {\n    animation-name: slideIn;\n    animation-duration: 0.5s;\n    animation-fill-mode: forwards;\n}\n\n.slide-out {\n    animation-name: slideOut;\n    animation-duration: 0.5s;\n    animation-fill-mode: forwards;\n}\n\n.slide-back-button {\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    justify-self: start;\n    height: 3rem;\n    width: 3rem;\n    background: none;\n    border: none;\n    border-radius: 5px;\n    transition: all 0.5s;\n}\n\n.slide-back-button svg {\n    height: 2rem;\n    width: 2rem;\n}\n\n.slide-back-button:hover {\n    background-color: var(--lighter-gray);\n}\n\n.floating-button {\n    border: none;\n    border-radius: 50%;\n    box-shadow: 0px 1px 5px gray;\n    background-color: var(--main-color-3);\n    color: var(--lighter-gray);\n    transition: background-color 0.5s;\n    position: fixed;\n    right: 1rem;\n    bottom: calc(var(--nav-height) + 1rem);\n    z-index: 1;\n    width: 4rem;\n    height: 4rem;\n    font-size: 2.5rem;\n    font-weight: 300;\n}\n\n.floating-button svg {\n    width: 2rem;\n    height: 2rem;\n    fill: var(--lighter-gray);\n}\n\n.floating-button:hover {\n    background-color: rgb(193, 100, 255);\n}\n\n@media only screen and (min-width: 800px) {\n    .floating-button {\n        right: calc((100vw - 800px) / 2 + 1rem) !important;\n    }\n    .slide-container {\n        padding: 1rem 10%;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: var(--main-font);\n}\n\n@keyframes slideOut {\n    from {\n        transform: translateX(0);\n        opacity: 1;\n    }\n\n    to {\n        transform: translateX(100vw);\n        opacity: 0.8;\n    }\n}\n\n@keyframes slideIn {\n    from {\n        transform: translateX(100vw);\n    }\n\n    to {\n        transform: translateX(0);\n    }\n}\n\n:root {\n    --main-font: \"Open Sans\", sans-serif;\n    --folder-container-padding: 25px;\n    --nav-height: calc(3rem + 10px);\n    --avalible-height: calc(100vh - var(--nav-height));\n    --background-color: white;\n    --darker-gray: rgb(90, 90, 90);\n    --lighter-gray: rgb(245, 245, 245);\n    --lighter-color: rgb(211, 222, 255, 0.5);\n    --main-color-1: rgba(64, 72, 247, 1);\n    --main-color-2: rgba(192, 50, 198, 1);\n    --main-color-3: rgb(150, 100, 255);\n    --gradient: linear-gradient(200deg, var(--main-color-1) 0%, var(--main-color-2) 100%);\n}\n\n#root {\n    display: grid;\n    grid-template-rows: 1fr auto;\n    min-height: 100vh;\n    height: 100vh;\n    position: relative;\n    overflow: hidden;\n}\n\n.hidden {\n    display: none !important;\n}\n\n.disabled {\n    pointer-events: none;\n    user-select: none;\n}\n\nul {\n    list-style: none;\n}\n\nbutton,\ninput {\n    cursor: pointer;\n}\n\nbutton:active {\n    transform: scale(0.95);\n}\n\n/* Navbar section */\n\nnav {\n    display: grid;\n    grid-row: -1;\n    justify-items: center;\n    align-items: center;\n    position: relative;\n    background-color: var(--background-color);\n    height: var(--nav-height);\n    box-shadow: 0px 0px 5px lightgray;\n    overflow: hidden;\n    padding: 0 2rem;\n    z-index: 11;\n}\n\nnav {\n    display: grid;\n    grid-row: -1;\n    justify-items: center;\n    align-items: center;\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    background-color: var(--background-color);\n    height: var(--nav-height);\n    box-shadow: 0px 0px 5px lightgray;\n    overflow: hidden;\n    padding: 0 2rem;\n}\n\n.nav-buttons-wrapper {\n    display: grid;\n    gap: 2rem;\n    grid-auto-columns: auto;\n    grid-auto-flow: column;\n    justify-items: center;\n    width: 100%;\n    max-width: 800px;\n}\n\n.nav-button {\n    border: none;\n    min-width: 3rem;\n    background: none;\n    text-transform: capitalize;\n    transition: all 0.2s;\n}\n\n.nav-button path {\n    fill: gray;\n    transition: all 0.2s;\n}\n\n.nav-button:hover path {\n    fill: var(--main-color-1);\n}\n\n.nav-button:hover .nav-button-text-container {\n    color: var(--main-color-1);\n}\n\n.nav-button-active path {\n    fill: var(--main-color-1);\n}\n\n.nav-button-active .nav-button-text-container {\n    color: var(--main-color-1);\n}\n\n.nav-button-icon-container {\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.nav-button-icon-container svg {\n    width: 1.5rem;\n    height: 1.5rem;\n}\n\n.nav-button-text-container {\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    font-size: 0.7rem;\n    color: gray;\n    transition: all 0.2s;\n}\n\n/* Main section */\n\nmain {\n    display: grid;\n    grid-row: 1;\n    width: 100%;\n    background-color: var(--background-color);\n    overflow: hidden;\n    position: relative;\n}\n\n.slide-container {\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: auto auto;\n    grid-template-rows: auto 1fr;\n    position: fixed;\n    z-index: 10;\n    top: 0;\n    right: 0;\n    bottom: var(--nav-height);\n    left: 0;\n    padding: 1rem 10px 0 10px;\n    pointer-events: all;\n    overflow: visible;\n    background-color: var(--background-color);\n    translate: 0;\n}\n\n.slide-in {\n    animation-name: slideIn;\n    animation-duration: 0.5s;\n    animation-fill-mode: forwards;\n}\n\n.slide-out {\n    animation-name: slideOut;\n    animation-duration: 0.5s;\n    animation-fill-mode: forwards;\n}\n\n.slide-back-button {\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    justify-self: start;\n    height: 3rem;\n    width: 3rem;\n    background: none;\n    border: none;\n    border-radius: 5px;\n    transition: all 0.5s;\n}\n\n.slide-back-button svg {\n    height: 2rem;\n    width: 2rem;\n}\n\n.slide-back-button:hover {\n    background-color: var(--lighter-gray);\n}\n\n.floating-button {\n    border: none;\n    border-radius: 50%;\n    box-shadow: 0px 1px 5px gray;\n    background-color: var(--main-color-3);\n    color: var(--lighter-gray);\n    transition: background-color 0.5s;\n    position: fixed;\n    right: 1rem;\n    bottom: calc(var(--nav-height) + 1rem);\n    z-index: 1;\n    width: 4rem;\n    height: 4rem;\n    font-size: 2.5rem;\n    font-weight: 300;\n}\n\n.floating-button svg {\n    width: 2rem;\n    height: 2rem;\n    fill: var(--lighter-gray);\n}\n\n.floating-button:hover {\n    background-color: rgb(193, 100, 255);\n}\n\n@media only screen and (min-width: 800px) {\n    .floating-button {\n        right: calc((100vw - 800px) / 2 + 1rem) !important;\n    }\n    .slide-container {\n        padding: 1rem 10%;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/components/Tabs/HomeTab.js/homeTab.css":
/*!****************************************************!*\
  !*** ./src/components/Tabs/HomeTab.js/homeTab.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_homeTab_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./homeTab.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Tabs/HomeTab.js/homeTab.css");

      
      
      
      
      
      
      
      
      

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
/* harmony import */ var _Tabs_HomeTab_js_HomeTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tabs/HomeTab.js/HomeTab */ "./src/components/Tabs/HomeTab.js/HomeTab.js");




class App {
    static root = document.querySelector("#root")

    static load() {
        this.loadLayout()
        _UI_Main__WEBPACK_IMPORTED_MODULE_1__["default"].changeContent(_Tabs_HomeTab_js_HomeTab__WEBPACK_IMPORTED_MODULE_2__["default"].render())
    }

    static loadLayout() {
        _UI_Main__WEBPACK_IMPORTED_MODULE_1__["default"].render(root)
        _UI_Nav__WEBPACK_IMPORTED_MODULE_0__["default"].render(root)
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







class Calendar {
    static htmlElement = document.createElement("div")
    static todaysDate = new Date

    static createWidget(date) {
        this.htmlElement.innerHTML = ""
        this.createMonthSwitch(date)
        this.htmlElement.appendChild(this.createCalendars(date))
    }

    static createMonthSwitch(date) {
        const container = document.createElement("div")
        container.classList.add("month-switch-contianer")

        const monthSwitch = document.createElement("div")
        monthSwitch.classList.add("month-switch")
        container.appendChild(monthSwitch)

        const arrowLeft = document.createElement("button")
        arrowLeft.classList.add("month-switch-left")
        arrowLeft.addEventListener("click", () => this.switchToPreviousMonth())

        const arrowRight = document.createElement("button")
        arrowRight.classList.add("month-switch-right")
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
            form.createRemoveFolderButton()
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
        const output = document.querySelector(".slide-container")
        output.appendChild(removeButton)
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
        const output = document.querySelector(".slide-container")
        output.appendChild(removeButton)
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

/***/ "./src/components/Tabs/HomeTab.js/HomeTab.js":
/*!***************************************************!*\
  !*** ./src/components/Tabs/HomeTab.js/HomeTab.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomeTab)
/* harmony export */ });
/* harmony import */ var _UI_Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../UI/Nav */ "./src/components/UI/Nav.js");
/* harmony import */ var _homeTab_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeTab.css */ "./src/components/Tabs/HomeTab.js/homeTab.css");
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
        homeContentContainer.appendChild(_Tasks_TasksOverview__WEBPACK_IMPORTED_MODULE_2__["default"].createWidget())

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
/* harmony import */ var _Folders_Folder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Folders/Folder */ "./src/components/Folders/Folder.js");








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
        container.addEventListener("click", () => {
            const form = new _Forms_subcomponents_EditTaskForm__WEBPACK_IMPORTED_MODULE_1__["default"](task.id)
            _UI_Main__WEBPACK_IMPORTED_MODULE_3__["default"].showSlideContent(form.render())
            form.createRemoveTaskButton()
        })

        const check = document.createElement("button")
        check.classList.add("task-check-button")
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
        folderName.textContent =  folder.name
        folderContainer.appendChild(folderName)

        const name = document.createElement("div")
        name.classList.add("task-text")
        name.textContent = task.name
        container.appendChild(name)

        const important = document.createElement("button")
        important.classList.add("task-important-button")
        important.innerHTML = _Icons_star__WEBPACK_IMPORTED_MODULE_5__["default"]
        important.addEventListener("click", e => this.handleImportantButtonClick(e, task.id))
        container.appendChild(important)

        if (task.important) {
            important.classList.add("task-important-button-active")
        }

        return container
    }

    static handleFolderClick(e, folderId) {
        e.stopPropagation()
        _Folders_Folder__WEBPACK_IMPORTED_MODULE_6__["default"].show(folderId)
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

    static createWidget() {
        const tasksOverviewContainer = document.createElement("section")
        tasksOverviewContainer.classList.add("tasks-overview-container")

        tasksOverviewContainer.appendChild(this.createTasksOverviewLabel())

        tasksOverviewContainer.appendChild(this.createTaskCounterWidget(_Task__WEBPACK_IMPORTED_MODULE_0__["default"].getAllPendingTasks().length, "Pending tasks"))
        tasksOverviewContainer.appendChild(this.createTaskCounterWidget(_Task__WEBPACK_IMPORTED_MODULE_0__["default"].getAllCompletedTasks().length, "Completed tasks"))

        tasksOverviewContainer.appendChild(this.createImportantTasksWidget())
        tasksOverviewContainer.appendChild(this.createUpcomingTasksWidget(0))
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
        const date = new Date()
        container.childNodes[0].textContent = "Upcoming important tasks"

        for (let i = 0; i < 3; i++) {
            const tasks = _Task__WEBPACK_IMPORTED_MODULE_0__["default"].findTasksForDate(_Utils_ConvertDate__WEBPACK_IMPORTED_MODULE_1__["default"].toYYYYMMDD(date))
            tasks.forEach(({ task, folder }) => {
                if (task.important && !task.checked) {
                    container.childNodes[1].appendChild(this.createListWidgetListItem(task, folder, _Icons_star__WEBPACK_IMPORTED_MODULE_3__["default"]))
                }
            })
            date.setDate(date.getDate() + 1)
        }

        return container
    }

    static createMissedTasksWidget() {
        const container = this.createListWidget()
        container.childNodes[0].textContent = "Missed tasks"

        const tasks = _Task__WEBPACK_IMPORTED_MODULE_0__["default"].getAllPendingTasks()
        tasks.forEach(item => {
            if (!item.checked && new Date(item.dueDate) < new Date()) {
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

    static createListWidgetListItem(task, folder, icon) {
        const listItem = document.createElement("li")
        listItem.classList.add("upcoming-task")

        const calendarIcon = document.createElement("div")
        calendarIcon.innerHTML = icon || _Icons_calendar__WEBPACK_IMPORTED_MODULE_4__["default"]
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


class Main {
    constructor() {
        this.main
    }

    static render(output) {
        this.main = document.createElement("main")
        output.appendChild(this.main)
    }

    static changeContent(content) {
        if(this.main.querySelector(".slide-container")) {
            this.closeSlideContainer()
        }
        this.main.innerHTML = ""
        this.main.appendChild(content)
    }

    static showSlideContent(content) {
        const container = this.createSlideContainer()
        container.appendChild(content)
        document.querySelector("main").classList.add("disabled")
        this.main.appendChild(container)
    }

    static createSlideContainer() {
        const slideContainer = document.createElement("div")
        slideContainer.classList.add("slide-container", "slide-in")

        const backButton = document.createElement("button")
        backButton.classList.add("slide-back-button")
        backButton.innerHTML = _Icons_arrow_back__WEBPACK_IMPORTED_MODULE_0__["default"]
        slideContainer.appendChild(backButton)

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
/* harmony import */ var _Tabs_HomeTab_js_HomeTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Tabs/HomeTab.js/HomeTab */ "./src/components/Tabs/HomeTab.js/HomeTab.js");
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
                clickHandler: () => _Main__WEBPACK_IMPORTED_MODULE_3__["default"].changeContent(_Tabs_HomeTab_js_HomeTab__WEBPACK_IMPORTED_MODULE_4__["default"].render())
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
        return `${date.slice(-2)}-${date.slice(5,7)}`
    }

    static getDay(date) {
        const d = new Date(date.getFullYear(), date.getMonth(), 1)
        return (d.getDay() === 0 ? 7 : d.getDay())
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

/***/ "./src/assets/arrow-left-icon.svg":
/*!****************************************!*\
  !*** ./src/assets/arrow-left-icon.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b202107003084a334b5.svg";

/***/ }),

/***/ "./src/assets/arrow-right-icon.svg":
/*!*****************************************!*\
  !*** ./src/assets/arrow-right-icon.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "504553629db0c5c1f7e8.svg";

/***/ }),

/***/ "./src/assets/done-icon.svg":
/*!**********************************!*\
  !*** ./src/assets/done-icon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d26e0f5fdac4de162660.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2hDSTtBQUNQOzs7Ozs7O1VDREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQWtDO0FBQ2Q7O0FBRXBCLDhDQUE4Qyw0REFBUSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9DYWxlbmRhci9jYWxlbmRhci5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9Gb3Jtcy9mb3Jtcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9UYWJzL0NhbGVuZGFyL2NhbGVuZGFyVGFiLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL1RhYnMvRm9sZGVycy9mb2xkZXJzVGFiLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL1RhYnMvSG9tZVRhYi5qcy9ob21lVGFiLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL1Rhc2tzL3Rhc2suY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9DYWxlbmRhci9jYWxlbmRhci5jc3M/N2I0NSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL0Zvcm1zL2Zvcm1zLmNzcz81ODk1Iiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvVGFicy9DYWxlbmRhci9jYWxlbmRhclRhYi5jc3M/ODhhNCIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL1RhYnMvRm9sZGVycy9mb2xkZXJzVGFiLmNzcz85OGQ2Iiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvVGFicy9Ib21lVGFiLmpzL2hvbWVUYWIuY3NzPzJjMzMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9UYXNrcy90YXNrLmNzcz81MTA0Iiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9BcHAuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9DYWxlbmRhci9DYWxlbmRhci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL0ZvbGRlcnMvRm9sZGVyLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvRm9sZGVycy9Gb2xkZXJzTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL0Zvcm1zL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9Gb3Jtcy9zdWJjb21wb25lbnRzL0VkaXRGb2xkZXJGb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvc3ViY29tcG9uZW50cy9FZGl0VGFza0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9Gb3Jtcy9zdWJjb21wb25lbnRzL05ld0ZvbGRlckZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9Gb3Jtcy9zdWJjb21wb25lbnRzL05ld1Rhc2tGb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvSWNvbnMvYXJyb3ctYmFjay5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL0ljb25zL2NhbGVuZGFyLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvSWNvbnMvY29sbGFwc2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9JY29ucy9lZGl0LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvSWNvbnMvZXhwYW5kLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvSWNvbnMvZm9sZGVyLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvSWNvbnMvaG9tZS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL0ljb25zL3BsdXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9JY29ucy9wcmlvcml0eS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL0ljb25zL3JlbW92ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL0ljb25zL3NhdmUuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9JY29ucy9zdGFyLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvVGFicy9DYWxlbmRhci9DYWxlbmRhclRhYi5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL1RhYnMvRm9sZGVycy9Gb2xkZXJzVGFiLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvVGFicy9Ib21lVGFiLmpzL0hvbWVUYWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9UYXNrcy9UYXNrLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvVGFza3MvVGFza3NMaXN0LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvVGFza3MvVGFza3NPdmVydmlldy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL1VJL01haW4uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9VSS9OYXYuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9VdGlscy9Db252ZXJ0RGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL1V0aWxzL0xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL1V0aWxzL1RvdWNoRXZlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvbmFub2lkL2luZGV4LmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvbmFub2lkL3VybC1hbHBoYWJldC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvYXJyb3ctbGVmdC1pY29uLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9hcnJvdy1yaWdodC1pY29uLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBDYWxlbmRhciAqL1xcblxcbi5jYWxlbmRhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggbGlnaHRncmF5O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uZGF5cy1vZi13ZWVrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNXB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIHJnYmEoMjAwLCAyMDAsIDIwMCwgMC41KTtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5jYWxlbmRhci1ncmlkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwgYXV0byk7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbn1cXG5cXG4uY2FsZW5kYXItZ3JpZC1jb250YWluZXI+ZGl2IHtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxufVxcblxcbi5kYXktY29udGFpbmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLmRheS1jb250YWluZXI6YWN0aXZlIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggcmdiKDE1MCwgMTUwLCAxNTApICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kYXktY29udGFpbmVyOmhvdmVyIHtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggd2hpdGU7XFxufVxcblxcbi5kYXktY29udGFpbmVyLXNlbGVjdGVkID4gZGl2IHsgXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5kYXktY29udGFpbmVyLXRvZGF5IHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzcHggcmdiYSgyMTAsIDIxMCwgMjEwKTtcXG59XFxuXFxuLmFub3RoZXItbW9udGgtZGF5IHtcXG4gICAgY29sb3I6IHJnYigxNzAsIDE3MCwgMTcwKTtcXG59XFxuXFxuLmFub3RoZXItbW9udGgtZGF5OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCByZ2IoMjAwLCAyMDAsIDIwMCk7XFxufVxcblxcbi5kYXktd2l0aC10YXNrIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZGF5LXdpdGgtdGFzazo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IC01cHg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogM3B4O1xcbiAgICBoZWlnaHQ6IDNweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFub3RoZXItbW9udGgtZGF5Pi5kYXktd2l0aC10YXNrOjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzAsIDE3MCwgMTcwKTtcXG59XFxuXFxuLyogU3dpdGNoICovXFxuXFxuLm1vbnRoLXN3aXRjaC1jb250aWFuZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiAwIDAgMTBweDtcXG59XFxuXFxuLm1vbnRoLXN3aXRjaCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMC43cmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLXdpZHRoOiAyMzVweDtcXG59XFxuXFxuLm1vbnRoLXN3aXRjaD5idXR0b24ge1xcbiAgICBtaW4taGVpZ2h0OiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tb250aC1zd2l0Y2gtbGVmdCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogcmlnaHQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbi5tb250aC1zd2l0Y2gtcmlnaHQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4ubW9udGgtc3dpdGNoIGRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMC4ycmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb250aC1jb250YWluZXIsXFxuLm1vbnRoLWN1cnJlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiByZ2JhKDIxMCwgMjEwLCAyMTApO1xcbiAgICBtaW4td2lkdGg6IDgwcHg7XFxufVxcblxcbi5tb250aC1jdXJyZW50IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJldmlvdXMtY2FsZW5kYXIsXFxuLm5leHQtY2FsZW5kYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MjBweCkge1xcbiAgICAucHJldmlvdXMtY2FsZW5kYXIge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBib3R0b206IDE1cHg7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwMHB4KTtcXG4gICAgICAgIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMCwgMCwgMCwgMSksIHJnYmEoMCwgMCwgMCwgMCkpO1xcbiAgICAgICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMCwgMCwgMCwgMSksIHJnYmEoMCwgMCwgMCwgMCkpO1xcbiAgICB9XFxuXFxuICAgIC5uZXh0LWNhbGVuZGFyIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYm90dG9tOiAxNXB4O1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwMHB4KTtcXG4gICAgICAgIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDEpLCByZ2JhKDAsIDAsIDAsIDApKTtcXG4gICAgICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAxKSwgcmdiYSgwLCAwLCAwLCAwKSk7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIvY2FsZW5kYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGFBQWE7O0FBRWI7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IscUNBQXFDO0lBQ3JDLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1EQUFtRDtJQUNuRCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsbUNBQW1DO0lBQ25DLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLE9BQU87SUFDUCxRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUEsV0FBVzs7QUFFWDtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLG1DQUFtQztJQUNuQyxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qix5REFBeUQ7QUFDN0Q7O0FBRUE7SUFDSSx5REFBMEQ7QUFDOUQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLCtCQUErQjtJQUMvQixlQUFlO0FBQ25COztBQUVBOztJQUVJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGFBQWE7QUFDakI7O0FBRUE7SUFDSTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLDZCQUE2QjtRQUM3QixnRkFBZ0Y7UUFDaEYsd0VBQXdFO0lBQzVFOztJQUVBO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osNEJBQTRCO1FBQzVCLGlGQUFpRjtRQUNqRix5RUFBeUU7SUFDN0U7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBDYWxlbmRhciAqL1xcblxcbi5jYWxlbmRhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggbGlnaHRncmF5O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uZGF5cy1vZi13ZWVrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNXB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIHJnYmEoMjAwLCAyMDAsIDIwMCwgMC41KTtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5jYWxlbmRhci1ncmlkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwgYXV0byk7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbn1cXG5cXG4uY2FsZW5kYXItZ3JpZC1jb250YWluZXI+ZGl2IHtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxufVxcblxcbi5kYXktY29udGFpbmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLmRheS1jb250YWluZXI6YWN0aXZlIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggcmdiKDE1MCwgMTUwLCAxNTApICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kYXktY29udGFpbmVyOmhvdmVyIHtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggd2hpdGU7XFxufVxcblxcbi5kYXktY29udGFpbmVyLXNlbGVjdGVkID4gZGl2IHsgXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5kYXktY29udGFpbmVyLXRvZGF5IHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzcHggcmdiYSgyMTAsIDIxMCwgMjEwKTtcXG59XFxuXFxuLmFub3RoZXItbW9udGgtZGF5IHtcXG4gICAgY29sb3I6IHJnYigxNzAsIDE3MCwgMTcwKTtcXG59XFxuXFxuLmFub3RoZXItbW9udGgtZGF5OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCByZ2IoMjAwLCAyMDAsIDIwMCk7XFxufVxcblxcbi5kYXktd2l0aC10YXNrIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZGF5LXdpdGgtdGFzazo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IC01cHg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogM3B4O1xcbiAgICBoZWlnaHQ6IDNweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFub3RoZXItbW9udGgtZGF5Pi5kYXktd2l0aC10YXNrOjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzAsIDE3MCwgMTcwKTtcXG59XFxuXFxuLyogU3dpdGNoICovXFxuXFxuLm1vbnRoLXN3aXRjaC1jb250aWFuZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiAwIDAgMTBweDtcXG59XFxuXFxuLm1vbnRoLXN3aXRjaCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMC43cmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLXdpZHRoOiAyMzVweDtcXG59XFxuXFxuLm1vbnRoLXN3aXRjaD5idXR0b24ge1xcbiAgICBtaW4taGVpZ2h0OiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tb250aC1zd2l0Y2gtbGVmdCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogcmlnaHQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vLi4vYXNzZXRzL2Fycm93LWxlZnQtaWNvbi5zdmdcXFwiKTtcXG59XFxuXFxuLm1vbnRoLXN3aXRjaC1yaWdodCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vLi4vYXNzZXRzL2Fycm93LXJpZ2h0LWljb24uc3ZnXFxcIik7XFxufVxcblxcbi5tb250aC1zd2l0Y2ggZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAwLjJyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vbnRoLWNvbnRhaW5lcixcXG4ubW9udGgtY3VycmVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHJnYmEoMjEwLCAyMTAsIDIxMCk7XFxuICAgIG1pbi13aWR0aDogODBweDtcXG59XFxuXFxuLm1vbnRoLWN1cnJlbnQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcmV2aW91cy1jYWxlbmRhcixcXG4ubmV4dC1jYWxlbmRhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUyMHB4KSB7XFxuICAgIC5wcmV2aW91cy1jYWxlbmRhciB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGJvdHRvbTogMTVweDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAwcHgpO1xcbiAgICAgICAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgwLCAwLCAwLCAxKSwgcmdiYSgwLCAwLCAwLCAwKSk7XFxuICAgICAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgwLCAwLCAwLCAxKSwgcmdiYSgwLCAwLCAwLCAwKSk7XFxuICAgIH1cXG5cXG4gICAgLm5leHQtY2FsZW5kYXIge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBib3R0b206IDE1cHg7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzAwcHgpO1xcbiAgICAgICAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMSksIHJnYmEoMCwgMCwgMCwgMCkpO1xcbiAgICAgICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDEpLCByZ2JhKDAsIDAsIDAsIDApKTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiMTZcXFwiIGhlaWdodD1cXFwiMTVcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZmlsbD1cXFwiZ3JheVxcXCIgZD1cXFwiTTIwIDNoLTFWMWgtMnYySDdWMUg1djJINGMtMS4xIDAtMiAuOS0yIDJ2MTZjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDE4SDRWOGgxNnYxM3pcXFwiLz48L3N2Zz5cIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJmb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAwIDFyZW07XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG5cXG59XFxuXFxuLmZvcm0tZXJyb3Ige1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3ItMyk7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxufVxcblxcbnNlbGVjdCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlci1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogcmdiKDkwLCA5MCwgOTApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyLWNvbG9yKTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcbjo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b24ge1xcbiAgICBib3R0b206IDFyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLyogU3BlY2lmaWMgZm9ybXMgKi9cXG5cXG4udGFzay1mb3JtIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gMmZyIGF1dG8gMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbn1cXG5cXG4jdGFzay1uYW1lIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbGlnaHRlci1ncmF5KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAwO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmZvbGRlci1mb3JtIHtcXG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxufVxcblxcbiNmb2xkZXItbmFtZSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWluLXdpZHRoOiAxNTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5lZGl0LWZvbGRlci1mb3JtIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0byBhdXRvO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9Gb3Jtcy9mb3Jtcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixzQ0FBc0M7SUFDdEMsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixXQUFXO0lBQ1gsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHNDQUFzQztJQUN0QyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5REFBZ1I7QUFDcFI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUEsbUJBQW1COztBQUVuQjtJQUNJLDBDQUEwQztJQUMxQywrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsNENBQTRDO0lBQzVDLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMCAxcmVtO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuXFxufVxcblxcbi5mb3JtLWVycm9yIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTMpO1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIGNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItY29sb3IpO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlci1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCIxNlxcXCIgaGVpZ2h0PVxcXCIxNVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBmaWxsPVxcXCJncmF5XFxcIiBkPVxcXCJNMjAgM2gtMVYxaC0ydjJIN1YxSDV2Mkg0Yy0xLjEgMC0yIC45LTIgMnYxNmMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMThINFY4aDE2djEzelxcXCIvPjwvc3ZnPicpO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbiB7XFxuICAgIGJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBTcGVjaWZpYyBmb3JtcyAqL1xcblxcbi50YXNrLWZvcm0ge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byAyZnIgYXV0byAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxufVxcblxcbiN0YXNrLW5hbWUge1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1saWdodGVyLWdyYXkpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHRlci1ncmF5KTtcXG4gICAgcGFkZGluZzogMS41cmVtIDA7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uZm9sZGVyLWZvcm0ge1xcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuI2ZvbGRlci1uYW1lIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlci1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVkaXQtZm9sZGVyLWZvcm0ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvIGF1dG87XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jYWxlbmRhci10YWItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gMWZyO1xcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmNhbGVuZGFyLXRhYi10YXNrcy1saXN0LXRpdGxlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxufVxcblxcbi50YXNrcy1saXN0LWNvbnRhaW5lciB7XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbSAxcmVtIGNhbGModmFyKC0tbmF2LWhlaWdodCkgKyA1LjVyZW0pO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4udGFza3MtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnRhc2tzLWxpc3QtZW1wdHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGNvbG9yOiBncmF5O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrcy1saXN0LWV4cGFuZGVkIHtcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvVGFicy9DYWxlbmRhci9jYWxlbmRhclRhYi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixtREFBbUQ7SUFDbkQsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jYWxlbmRhci10YWItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gMWZyO1xcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmNhbGVuZGFyLXRhYi10YXNrcy1saXN0LXRpdGxlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxufVxcblxcbi50YXNrcy1saXN0LWNvbnRhaW5lciB7XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbSAxcmVtIGNhbGModmFyKC0tbmF2LWhlaWdodCkgKyA1LjVyZW0pO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4udGFza3MtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnRhc2tzLWxpc3QtZW1wdHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGNvbG9yOiBncmF5O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrcy1saXN0LWV4cGFuZGVkIHtcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmZvbGRlcnMtdGFiLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyLWdyYXkpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmZvbGRlci1uZXctYnV0dG9uLXdyYXBwZXIge1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG59XFxuXFxuLmZvbGRlci1uZXctYnV0dG9uIHtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmF5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEwcHggMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4uZm9sZGVyLW5ldy1idXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggbGlnaHRncmV5O1xcbn1cXG5cXG4vKiBGb2xkZXJzIGxpc3QgKi9cXG5cXG4uZm9sZGVycy1saXN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5mb2xkZXJzLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1uYXYtaGVpZ2h0KTtcXG4gICAgbWluLXdpZHRoOiAyNTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxufVxcblxcbi5mb2xkZXJzLWxpc3Q+bGkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggbGlnaHRncmF5O1xcbn1cXG5cXG4uZm9sZGVycy1saXN0IC50YXNrLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG59XFxuXFxuLmZvbGRlcnMtbGlzdCAudGFzay1mb2xkZXItbmFtZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb2xkZXJzLWxpc3QgLnRhc2tzLWxpc3Qge1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIFRvcCBiYXIgKi9cXG5cXG4uZm9sZGVycy1saXN0LXRvcC1iYXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLWF1dG8tY29sdW1uczogYXV0bztcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDEwcHggMC41cmVtO1xcbn1cXG5cXG5bZGF0YS1mb2xkZXItZXhwYW5kZWQ9XFxcImV4cGFuZGVkXFxcIl0gLmZvbGRlcnMtbGlzdC10b3AtYmFyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxufVxcblxcbi5mb2xkZXItbmFtZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi13aWR0aDogM3JlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDJyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmZvbGRlci1uYW1lIGRpdiB7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uZm9sZGVyLWxpc3QtdG9wLWJhci1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4uZm9sZGVyLWxpc3QtdG9wLWJhci1idXR0b24gc3ZnIHtcXG4gICAgZmlsbDogdmFyKC0tbWFpbi1jb2xvci0xKTtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxufVxcblxcbi5mb2xkZXItbGlzdC10b3AtYmFyLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxufVxcblxcbi5mb2xkZXItbGlzdC10b3AtYmFyLWJ1dHRvbjpob3ZlciBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1tYWluLWNvbG9yLTIpO1xcbn1cXG5cXG4uZm9sZGVyLWVkaXQtYnV0dG9uIHN2ZyB7XFxuICAgIHdpZHRoOiAxOHB4O1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxufVxcblxcbi5mb2xkZXItZXhwYW5kLWJ1dHRvbiBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1tYWluLWNvbG9yLTEpO1xcbn1cXG5cXG4uZm9sZGVyLWV4cGFuZC1idXR0b246aG92ZXIgc3ZnIHtcXG4gICAgZmlsbDogdmFyKC0tbWFpbi1jb2xvci0yKTtcXG59XFxuXFxuLmJ1dHRvbi1leHBhbmRlZCBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1tYWluLWNvbG9yLTIpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9UYWJzL0ZvbGRlcnMvZm9sZGVyc1RhYi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtBQUNqQzs7QUFFQSxpQkFBaUI7O0FBRWpCO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUEsWUFBWTs7QUFFWjtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHlDQUF5QztJQUN6QyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUNBQXFDO0lBQ3JDLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZm9sZGVycy10YWItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uZm9sZGVyLW5ldy1idXR0b24td3JhcHBlciB7XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbn1cXG5cXG4uZm9sZGVyLW5ldy1idXR0b24ge1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudCk7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyYXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMTBweCAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5mb2xkZXItbmV3LWJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCBsaWdodGdyZXk7XFxufVxcblxcbi8qIEZvbGRlcnMgbGlzdCAqL1xcblxcbi5mb2xkZXJzLWxpc3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZvbGRlcnMtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLW5hdi1oZWlnaHQpO1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG59XFxuXFxuLmZvbGRlcnMtbGlzdD5saSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCBsaWdodGdyYXk7XFxufVxcblxcbi5mb2xkZXJzLWxpc3QgLnRhc2stY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbn1cXG5cXG4uZm9sZGVycy1saXN0IC50YXNrLWZvbGRlci1uYW1lIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZvbGRlcnMtbGlzdCAudGFza3MtbGlzdCB7XFxuICAgIGhlaWdodDogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLyogVG9wIGJhciAqL1xcblxcbi5mb2xkZXJzLWxpc3QtdG9wLWJhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtYXV0by1jb2x1bW5zOiBhdXRvO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMTBweCAwLjVyZW07XFxufVxcblxcbltkYXRhLWZvbGRlci1leHBhbmRlZD1cXFwiZXhwYW5kZWRcXFwiXSAuZm9sZGVycy1saXN0LXRvcC1iYXIge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHRlci1ncmF5KTtcXG59XFxuXFxuLmZvbGRlci1uYW1lIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLXdpZHRoOiAzcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMnJlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZm9sZGVyLW5hbWUgZGl2IHtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5mb2xkZXItbGlzdC10b3AtYmFyLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHRlci1ncmF5KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi5mb2xkZXItbGlzdC10b3AtYmFyLWJ1dHRvbiBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1tYWluLWNvbG9yLTEpO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG59XFxuXFxuLmZvbGRlci1saXN0LXRvcC1iYXItYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlci1ncmF5KTtcXG59XFxuXFxuLmZvbGRlci1saXN0LXRvcC1iYXItYnV0dG9uOmhvdmVyIHN2ZyB7XFxuICAgIGZpbGw6IHZhcigtLW1haW4tY29sb3ItMik7XFxufVxcblxcbi5mb2xkZXItZWRpdC1idXR0b24gc3ZnIHtcXG4gICAgd2lkdGg6IDE4cHg7XFxuICAgIGhlaWdodDogMThweDtcXG59XFxuXFxuLmZvbGRlci1leHBhbmQtYnV0dG9uIHN2ZyB7XFxuICAgIGZpbGw6IHZhcigtLW1haW4tY29sb3ItMSk7XFxufVxcblxcbi5mb2xkZXItZXhwYW5kLWJ1dHRvbjpob3ZlciBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1tYWluLWNvbG9yLTIpO1xcbn1cXG5cXG4uYnV0dG9uLWV4cGFuZGVkIHN2ZyB7XFxuICAgIGZpbGw6IHZhcigtLW1haW4tY29sb3ItMik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5ob21lLXRhYi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLW5hdi1oZWlnaHQpICsgMXJlbSk7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5ob21lLWNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxLjVyZW07XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbmgxIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCB2YXIoLS1kYXJrZXItZ3JheSk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmhvbWUtc2VjdGlvbi1sYWJlbCB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmtlci1ncmF5KTtcXG59XFxuXFxuLnRhc2tzLW92ZXJ2aWV3LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbi50YXNrLXdpZGdldCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlci1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi50YXNrLWNvdW50ZXIge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaG9tZS13aWRnZXQtbGFiZWwge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udXBjb21pbmctdGFza3Mtd2lnZGV0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxufVxcblxcbi51cGNvbWluZy10YXNrcy13aWdkZXQgdWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi51cGNvbWluZy10YXNrcy13aWdkZXQgdWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi51cGNvbWluZy10YXNrcy13aWdkZXQgdWw6ZW1wdHkge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi51cGNvbWluZy10YXNrcy13aWdkZXQgdWw6ZW1wdHk6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIk5vIHRhc2tzXFxcIjtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGNvbG9yOiBncmF5O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi51cGNvbWluZy10YXNrcy1sYWJlbCB7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrZXItZ3JheSk7XFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnVwY29taW5nLXRhc2sge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcXG59XFxuXFxuLnVwY29taW5nLXRhc2sgc3ZnIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuLnVwY29taW5nLXRhc2staWNvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZpbGw6IHZhcigtLWRhcmtlci1ncmF5KTtcXG59XFxuXFxuLnVwY29taW5nLXRhc2stbmFtZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLnVwY29taW5nLXRhc2stZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZGFya2VyLWdyYXkpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9UYWJzL0hvbWVUYWIuanMvaG9tZVRhYi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLDhDQUE4QztJQUM5QyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQix3Q0FBd0M7SUFDeEMsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaG9tZS10YWItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1uYXYtaGVpZ2h0KSArIDFyZW0pO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uaG9tZS1jb250ZW50LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG5oMSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyYXkpO1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggdmFyKC0tZGFya2VyLWdyYXkpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5ob21lLXNlY3Rpb24tbGFiZWwge1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrZXItZ3JheSk7XFxufVxcblxcbi50YXNrcy1vdmVydmlldy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4udGFzay13aWRnZXQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4udGFzay1jb3VudGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUtd2lkZ2V0LWxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnVwY29taW5nLXRhc2tzLXdpZ2RldCB7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbn1cXG5cXG4udXBjb21pbmctdGFza3Mtd2lnZGV0IHVsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udXBjb21pbmctdGFza3Mtd2lnZGV0IHVsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udXBjb21pbmctdGFza3Mtd2lnZGV0IHVsOmVtcHR5IHtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udXBjb21pbmctdGFza3Mtd2lnZGV0IHVsOmVtcHR5OjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJObyB0YXNrc1xcXCI7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBjb2xvcjogZ3JheTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udXBjb21pbmctdGFza3MtbGFiZWwge1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBjb2xvcjogdmFyKC0tZGFya2VyLWdyYXkpO1xcbiAgICBmb250LXNpemU6IDAuODVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi51cGNvbWluZy10YXNrIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XFxufVxcblxcbi51cGNvbWluZy10YXNrIHN2ZyB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi51cGNvbWluZy10YXNrLWljb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmaWxsOiB2YXIoLS1kYXJrZXItZ3JheSk7XFxufVxcblxcbi51cGNvbWluZy10YXNrLW5hbWUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi51cGNvbWluZy10YXNrLWRhdGUge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmtlci1ncmF5KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvZG9uZS1pY29uLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGNvbHVtbi1nYXA6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItY29sb3IpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbSAxcmVtIDFyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jb250YWluZXItY2hlY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4udGFzay1mb2xkZXItbmFtZSB7XFxuICAgIC0tc2l6ZTogMC42cmVtO1xcbiAgICAtLWNvbG9yOiBncmF5O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDNweDtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZSk7XFxuICAgIG1heC13aWR0aDogMzAlO1xcbn1cXG5cXG4udGFzay1mb2xkZXItbmFtZSBzdmcge1xcbiAgICB3aWR0aDogMC44cmVtO1xcbiAgICBoZWlnaHQ6IDAuOHJlbTtcXG4gICAgZmlsbDogdmFyKC0tY29sb3IpO1xcbn1cXG5cXG4udGFzay1mb2xkZXItbmFtZSBwIHtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi50YXNrLXRleHQge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci1jaGVja2VkPi50YXNrLXRleHQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stY2hlY2stYnV0dG9uIHtcXG4gICAgZ3JpZC1yb3c6IDEvLTE7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tY29sb3ItMik7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhc2stY2hlY2stYnV0dG9uOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcXG59XFxuXFxuLnRhc2stY2hlY2stYnV0dG9uOmhvdmVyOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci1jaGVja2VkIC50YXNrLWNoZWNrLWJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci1jaGVja2VkIC50YXNrLWNoZWNrLWJ1dHRvbjo6YmVmb3JlIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnRhc2staW1wb3J0YW50LWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMS8tMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udGFzay1pbXBvcnRhbnQtYnV0dG9uIHN2ZyB7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGZpbGw6IGdyYXk7XFxuICAgIHRyYW5zaXRpb246IGZpbGwgMC41cztcXG59XFxuXFxuLnRhc2staW1wb3J0YW50LWJ1dHRvbjpob3ZlciBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1tYWluLWNvbG9yLTIpO1xcbn1cXG5cXG4udGFzay1pbXBvcnRhbnQtYnV0dG9uLWFjdGl2ZSBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1tYWluLWNvbG9yLTIpO1xcbn1cXG5cXG4udGFzay1jb250YWluZXItY2hlY2tlZCAudGFzay1pbXBvcnRhbnQtYnV0dG9uIHN2ZyB7XFxuICAgIGZpbGw6IGdyYXk7XFxufVxcblxcbi50YXNrLXJlbW92ZS1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IC0xO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxufVxcblxcbi50YXNrLXJlbW92ZS1idXR0b24gc3ZnIHtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLnRhc2stcmVtb3ZlLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL1Rhc2tzL3Rhc2suY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsc0NBQXNDO0lBQ3RDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUNBQXlDO0lBQ3pDLGtCQUFrQjtJQUNsQixxQ0FBcUM7SUFDckMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIseURBQW1EO0lBQ25ELHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHlEQUFtRDtBQUN2RDs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGNvbHVtbi1nYXA6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItY29sb3IpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbSAxcmVtIDFyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jb250YWluZXItY2hlY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4udGFzay1mb2xkZXItbmFtZSB7XFxuICAgIC0tc2l6ZTogMC42cmVtO1xcbiAgICAtLWNvbG9yOiBncmF5O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDNweDtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZSk7XFxuICAgIG1heC13aWR0aDogMzAlO1xcbn1cXG5cXG4udGFzay1mb2xkZXItbmFtZSBzdmcge1xcbiAgICB3aWR0aDogMC44cmVtO1xcbiAgICBoZWlnaHQ6IDAuOHJlbTtcXG4gICAgZmlsbDogdmFyKC0tY29sb3IpO1xcbn1cXG5cXG4udGFzay1mb2xkZXItbmFtZSBwIHtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi50YXNrLXRleHQge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci1jaGVja2VkPi50YXNrLXRleHQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stY2hlY2stYnV0dG9uIHtcXG4gICAgZ3JpZC1yb3c6IDEvLTE7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tY29sb3ItMik7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhc2stY2hlY2stYnV0dG9uOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vLi4vYXNzZXRzL2RvbmUtaWNvbi5zdmdcXFwiKTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xcbn1cXG5cXG4udGFzay1jaGVjay1idXR0b246aG92ZXI6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi8uLi9hc3NldHMvZG9uZS1pY29uLnN2Z1xcXCIpO1xcbn1cXG5cXG4udGFzay1jb250YWluZXItY2hlY2tlZCAudGFzay1jaGVjay1idXR0b24ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG4udGFzay1jb250YWluZXItY2hlY2tlZCAudGFzay1jaGVjay1idXR0b246OmJlZm9yZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi50YXNrLWltcG9ydGFudC1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDEvLTE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRhc2staW1wb3J0YW50LWJ1dHRvbiBzdmcge1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBmaWxsOiBncmF5O1xcbiAgICB0cmFuc2l0aW9uOiBmaWxsIDAuNXM7XFxufVxcblxcbi50YXNrLWltcG9ydGFudC1idXR0b246aG92ZXIgc3ZnIHtcXG4gICAgZmlsbDogdmFyKC0tbWFpbi1jb2xvci0yKTtcXG59XFxuXFxuLnRhc2staW1wb3J0YW50LWJ1dHRvbi1hY3RpdmUgc3ZnIHtcXG4gICAgZmlsbDogdmFyKC0tbWFpbi1jb2xvci0yKTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyLWNoZWNrZWQgLnRhc2staW1wb3J0YW50LWJ1dHRvbiBzdmcge1xcbiAgICBmaWxsOiBncmF5O1xcbn1cXG5cXG4udGFzay1yZW1vdmUtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAtMTtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbn1cXG5cXG4udGFzay1yZW1vdmUtYnV0dG9uIHN2ZyB7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi50YXNrLXJlbW92ZS1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyLWdyYXkpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlT3V0IHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuXFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDB2dyk7XFxuICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZUluIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwdncpO1xcbiAgICB9XFxuXFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgfVxcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tbWFpbi1mb250OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgLS1mb2xkZXItY29udGFpbmVyLXBhZGRpbmc6IDI1cHg7XFxuICAgIC0tbmF2LWhlaWdodDogY2FsYygzcmVtICsgMTBweCk7XFxuICAgIC0tYXZhbGlibGUtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tbmF2LWhlaWdodCkpO1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAtLWRhcmtlci1ncmF5OiByZ2IoOTAsIDkwLCA5MCk7XFxuICAgIC0tbGlnaHRlci1ncmF5OiByZ2IoMjQ1LCAyNDUsIDI0NSk7XFxuICAgIC0tbGlnaHRlci1jb2xvcjogcmdiKDIxMSwgMjIyLCAyNTUsIDAuNSk7XFxuICAgIC0tbWFpbi1jb2xvci0xOiByZ2JhKDY0LCA3MiwgMjQ3LCAxKTtcXG4gICAgLS1tYWluLWNvbG9yLTI6IHJnYmEoMTkyLCA1MCwgMTk4LCAxKTtcXG4gICAgLS1tYWluLWNvbG9yLTM6IHJnYigxNTAsIDEwMCwgMjU1KTtcXG4gICAgLS1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDIwMGRlZywgdmFyKC0tbWFpbi1jb2xvci0xKSAwJSwgdmFyKC0tbWFpbi1jb2xvci0yKSAxMDAlKTtcXG59XFxuXFxuI3Jvb3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZGlzYWJsZWQge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuLyogTmF2YmFyIHNlY3Rpb24gKi9cXG5cXG5uYXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXJvdzogLTE7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1uYXYtaGVpZ2h0KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggbGlnaHRncmF5O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwYWRkaW5nOiAwIDJyZW07XFxuICAgIHotaW5kZXg6IDExO1xcbn1cXG5cXG5uYXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXJvdzogLTE7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1uYXYtaGVpZ2h0KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggbGlnaHRncmF5O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwYWRkaW5nOiAwIDJyZW07XFxufVxcblxcbi5uYXYtYnV0dG9ucy13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBncmlkLWF1dG8tY29sdW1uczogYXV0bztcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG59XFxuXFxuLm5hdi1idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1pbi13aWR0aDogM3JlbTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbiBwYXRoIHtcXG4gICAgZmlsbDogZ3JheTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxufVxcblxcbi5uYXYtYnV0dG9uOmhvdmVyIHBhdGgge1xcbiAgICBmaWxsOiB2YXIoLS1tYWluLWNvbG9yLTEpO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbjpob3ZlciAubmF2LWJ1dHRvbi10ZXh0LWNvbnRhaW5lciB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTEpO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbi1hY3RpdmUgcGF0aCB7XFxuICAgIGZpbGw6IHZhcigtLW1haW4tY29sb3ItMSk7XFxufVxcblxcbi5uYXYtYnV0dG9uLWFjdGl2ZSAubmF2LWJ1dHRvbi10ZXh0LWNvbnRhaW5lciB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTEpO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbi1pY29uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdi1idXR0b24taWNvbi1jb250YWluZXIgc3ZnIHtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbi5uYXYtYnV0dG9uLXRleHQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgY29sb3I6IGdyYXk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cXG5cXG4vKiBNYWluIHNlY3Rpb24gKi9cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2xpZGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiB2YXIoLS1uYXYtaGVpZ2h0KTtcXG4gICAgbGVmdDogMDtcXG4gICAgcGFkZGluZzogMXJlbSAxMHB4IDAgMTBweDtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICB0cmFuc2xhdGU6IDA7XFxufVxcblxcbi5zbGlkZS1pbiB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG4uc2xpZGUtb3V0IHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlT3V0O1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG4uc2xpZGUtYmFjay1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG59XFxuXFxuLnNsaWRlLWJhY2stYnV0dG9uIHN2ZyB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDJyZW07XFxufVxcblxcbi5zbGlkZS1iYWNrLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxufVxcblxcbi5mbG9hdGluZy1idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggZ3JheTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0zKTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICByaWdodDogMXJlbTtcXG4gICAgYm90dG9tOiBjYWxjKHZhcigtLW5hdi1oZWlnaHQpICsgMXJlbSk7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4uZmxvYXRpbmctYnV0dG9uIHN2ZyB7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGZpbGw6IHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxufVxcblxcbi5mbG9hdGluZy1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkzLCAxMDAsIDI1NSk7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcXG4gICAgLmZsb2F0aW5nLWJ1dHRvbiB7XFxuICAgICAgICByaWdodDogY2FsYygoMTAwdncgLSA4MDBweCkgLyAyICsgMXJlbSkgIWltcG9ydGFudDtcXG4gICAgfVxcbiAgICAuc2xpZGUtY29udGFpbmVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMTAlO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSTtRQUNJLHdCQUF3QjtRQUN4QixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSw0QkFBNEI7UUFDNUIsWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSw0QkFBNEI7SUFDaEM7O0lB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MEJBQTBCO0lBQzFCLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsV0FBVztJQUNYLHNDQUFzQztJQUN0QyxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSTtRQUNJLGtEQUFrRDtJQUN0RDtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZU91dCB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcblxcbiAgICB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwdncpO1xcbiAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVJbiB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHZ3KTtcXG4gICAgfVxcblxcbiAgICB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIH1cXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLW1haW4tZm9udDogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIC0tZm9sZGVyLWNvbnRhaW5lci1wYWRkaW5nOiAyNXB4O1xcbiAgICAtLW5hdi1oZWlnaHQ6IGNhbGMoM3JlbSArIDEwcHgpO1xcbiAgICAtLWF2YWxpYmxlLWhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLW5hdi1oZWlnaHQpKTtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLS1kYXJrZXItZ3JheTogcmdiKDkwLCA5MCwgOTApO1xcbiAgICAtLWxpZ2h0ZXItZ3JheTogcmdiKDI0NSwgMjQ1LCAyNDUpO1xcbiAgICAtLWxpZ2h0ZXItY29sb3I6IHJnYigyMTEsIDIyMiwgMjU1LCAwLjUpO1xcbiAgICAtLW1haW4tY29sb3ItMTogcmdiYSg2NCwgNzIsIDI0NywgMSk7XFxuICAgIC0tbWFpbi1jb2xvci0yOiByZ2JhKDE5MiwgNTAsIDE5OCwgMSk7XFxuICAgIC0tbWFpbi1jb2xvci0zOiByZ2IoMTUwLCAxMDAsIDI1NSk7XFxuICAgIC0tZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgyMDBkZWcsIHZhcigtLW1haW4tY29sb3ItMSkgMCUsIHZhcigtLW1haW4tY29sb3ItMikgMTAwJSk7XFxufVxcblxcbiNyb290IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmRpc2FibGVkIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblxcbi8qIE5hdmJhciBzZWN0aW9uICovXFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1yb3c6IC0xO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGhlaWdodDogdmFyKC0tbmF2LWhlaWdodCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IGxpZ2h0Z3JheTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcGFkZGluZzogMCAycmVtO1xcbiAgICB6LWluZGV4OiAxMTtcXG59XFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1yb3c6IC0xO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGhlaWdodDogdmFyKC0tbmF2LWhlaWdodCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IGxpZ2h0Z3JheTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcGFkZGluZzogMCAycmVtO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbnMtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IGF1dG87XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxufVxcblxcbi5uYXYtYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtaW4td2lkdGg6IDNyZW07XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG59XFxuXFxuLm5hdi1idXR0b24gcGF0aCB7XFxuICAgIGZpbGw6IGdyYXk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbjpob3ZlciBwYXRoIHtcXG4gICAgZmlsbDogdmFyKC0tbWFpbi1jb2xvci0xKTtcXG59XFxuXFxuLm5hdi1idXR0b246aG92ZXIgLm5hdi1idXR0b24tdGV4dC1jb250YWluZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvci0xKTtcXG59XFxuXFxuLm5hdi1idXR0b24tYWN0aXZlIHBhdGgge1xcbiAgICBmaWxsOiB2YXIoLS1tYWluLWNvbG9yLTEpO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbi1hY3RpdmUgLm5hdi1idXR0b24tdGV4dC1jb250YWluZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvci0xKTtcXG59XFxuXFxuLm5hdi1idXR0b24taWNvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXYtYnV0dG9uLWljb24tY29udGFpbmVyIHN2ZyB7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbi10ZXh0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgIGNvbG9yOiBncmF5O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG59XFxuXFxuLyogTWFpbiBzZWN0aW9uICovXFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNsaWRlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogdmFyKC0tbmF2LWhlaWdodCk7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBhZGRpbmc6IDFyZW0gMTBweCAwIDEwcHg7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgdHJhbnNsYXRlOiAwO1xcbn1cXG5cXG4uc2xpZGUtaW4ge1xcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVJbjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuLnNsaWRlLW91dCB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuLnNsaWRlLWJhY2stYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxufVxcblxcbi5zbGlkZS1iYWNrLWJ1dHRvbiBzdmcge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAycmVtO1xcbn1cXG5cXG4uc2xpZGUtYmFjay1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyLWdyYXkpO1xcbn1cXG5cXG4uZmxvYXRpbmctYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IGdyYXk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItMyk7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyYXkpO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXM7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgcmlnaHQ6IDFyZW07XFxuICAgIGJvdHRvbTogY2FsYyh2YXIoLS1uYXYtaGVpZ2h0KSArIDFyZW0pO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLmZsb2F0aW5nLWJ1dHRvbiBzdmcge1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBmaWxsOiB2YXIoLS1saWdodGVyLWdyYXkpO1xcbn1cXG5cXG4uZmxvYXRpbmctYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MywgMTAwLCAyNTUpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XFxuICAgIC5mbG9hdGluZy1idXR0b24ge1xcbiAgICAgICAgcmlnaHQ6IGNhbGMoKDEwMHZ3IC0gODAwcHgpIC8gMiArIDFyZW0pICFpbXBvcnRhbnQ7XFxuICAgIH1cXG4gICAgLnNsaWRlLWNvbnRhaW5lciB7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDEwJTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2FsZW5kYXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYWxlbmRhci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9ybXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb3Jtcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2FsZW5kYXJUYWIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYWxlbmRhclRhYi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9sZGVyc1RhYi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ZvbGRlcnNUYWIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWVUYWIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lVGFiLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YXNrLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFzay5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IE5hdiBmcm9tIFwiLi9VSS9OYXZcIlxuaW1wb3J0IE1haW4gZnJvbSBcIi4vVUkvTWFpblwiXG5pbXBvcnQgSG9tZVRhYiBmcm9tIFwiLi9UYWJzL0hvbWVUYWIuanMvSG9tZVRhYlwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XG4gICAgc3RhdGljIHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RcIilcblxuICAgIHN0YXRpYyBsb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRMYXlvdXQoKVxuICAgICAgICBNYWluLmNoYW5nZUNvbnRlbnQoSG9tZVRhYi5yZW5kZXIoKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZExheW91dCgpIHtcbiAgICAgICAgTWFpbi5yZW5kZXIocm9vdClcbiAgICAgICAgTmF2LnJlbmRlcihyb290KVxuICAgIH1cbn0iLCJpbXBvcnQgSG9tZSBmcm9tIFwiLi4vVGFicy9DYWxlbmRhci9DYWxlbmRhclRhYlwiXG5pbXBvcnQgVGFzayBmcm9tIFwiLi4vVGFza3MvVGFza1wiXG5pbXBvcnQgQ29udmVydERhdGUgZnJvbSBcIi4uL1V0aWxzL0NvbnZlcnREYXRlXCJcbmltcG9ydCBUb3VjaEV2ZW50cyBmcm9tIFwiLi4vVXRpbHMvVG91Y2hFdmVudFwiXG5pbXBvcnQgXCIuL2NhbGVuZGFyLmNzc1wiXG5pbXBvcnQgVGFza3NMaXN0IGZyb20gXCIuLi9UYXNrcy9UYXNrc0xpc3RcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxlbmRhciB7XG4gICAgc3RhdGljIGh0bWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHN0YXRpYyB0b2RheXNEYXRlID0gbmV3IERhdGVcblxuICAgIHN0YXRpYyBjcmVhdGVXaWRnZXQoZGF0ZSkge1xuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgdGhpcy5jcmVhdGVNb250aFN3aXRjaChkYXRlKVxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlQ2FsZW5kYXJzKGRhdGUpKVxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVNb250aFN3aXRjaChkYXRlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtb250aC1zd2l0Y2gtY29udGlhbmVyXCIpXG5cbiAgICAgICAgY29uc3QgbW9udGhTd2l0Y2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIG1vbnRoU3dpdGNoLmNsYXNzTGlzdC5hZGQoXCJtb250aC1zd2l0Y2hcIilcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vbnRoU3dpdGNoKVxuXG4gICAgICAgIGNvbnN0IGFycm93TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgYXJyb3dMZWZ0LmNsYXNzTGlzdC5hZGQoXCJtb250aC1zd2l0Y2gtbGVmdFwiKVxuICAgICAgICBhcnJvd0xlZnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc3dpdGNoVG9QcmV2aW91c01vbnRoKCkpXG5cbiAgICAgICAgY29uc3QgYXJyb3dSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgYXJyb3dSaWdodC5jbGFzc0xpc3QuYWRkKFwibW9udGgtc3dpdGNoLXJpZ2h0XCIpXG4gICAgICAgIGFycm93UmlnaHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc3dpdGNoVG9OZXh0TW9udGgoKSlcblxuICAgICAgICBjb25zdCBtb250aENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgaWYgKChkYXRlLmdldE1vbnRoKCkgPT09IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSkgJiYgKGRhdGUuZ2V0RnVsbFllYXIoKSA9PT0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpKSkge1xuICAgICAgICAgICAgbW9udGhDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1vbnRoLWN1cnJlbnRcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vbnRoQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtb250aC1jb250YWluZXJcIilcbiAgICAgICAgfVxuXG4gICAgICAgIG1vbnRoQ29udGFpbmVyLnRleHRDb250ZW50ID0gdGhpcy5jb252ZXJ0TW9udGhOYW1lKGRhdGUuZ2V0TW9udGgoKSlcblxuICAgICAgICBjb25zdCB5ZWFyQ29udGlhbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICB5ZWFyQ29udGlhbmVyLmNsYXNzTGlzdC5hZGQoXCJ5ZWFyLWNvbnRhaW5lclwiKVxuICAgICAgICB5ZWFyQ29udGlhbmVyLnRleHRDb250ZW50ID0gZGF0ZS5nZXRGdWxsWWVhcigpXG5cbiAgICAgICAgY29uc3QgZGF0ZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGRhdGVXcmFwcGVyLmFwcGVuZENoaWxkKG1vbnRoQ29udGFpbmVyKVxuICAgICAgICBkYXRlV3JhcHBlci5hcHBlbmRDaGlsZCh5ZWFyQ29udGlhbmVyKVxuICAgICAgICBkYXRlV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKCkgPT4gdGhpcy5zd2l0Y2hUb0N1cnJlbnRNb250aCgpKVxuXG4gICAgICAgIG1vbnRoU3dpdGNoLmFwcGVuZENoaWxkKGFycm93TGVmdClcbiAgICAgICAgbW9udGhTd2l0Y2guYXBwZW5kQ2hpbGQoZGF0ZVdyYXBwZXIpXG4gICAgICAgIG1vbnRoU3dpdGNoLmFwcGVuZENoaWxkKGFycm93UmlnaHQpXG5cbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUNhbGVuZGFycyhkYXRlKSB7XG4gICAgICAgIGNvbnN0IGNhbGVuZGFyQ3VycmVudCA9IHRoaXMuY3JlYXRlQ2FsZW5kYXJFbGVtZW50KGRhdGUpXG4gICAgICAgIGNhbGVuZGFyQ3VycmVudC5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC1jYWxlbmRhclwiKVxuXG4gICAgICAgIGNvbnN0IGNhbGVuZGFyUHJldiA9IHRoaXMuY3JlYXRlQ2FsZW5kYXJFbGVtZW50KHRoaXMuZ2V0UHJldmlvdXNNb250aChkYXRlKSlcbiAgICAgICAgY2FsZW5kYXJQcmV2LmNsYXNzTGlzdC5hZGQoXCJwcmV2aW91cy1jYWxlbmRhclwiKVxuICAgICAgICBjYWxlbmRhclByZXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc3dpdGNoVG9QcmV2aW91c01vbnRoKCkpXG5cbiAgICAgICAgY29uc3QgY2FsZW5kYXJOZXh0ID0gdGhpcy5jcmVhdGVDYWxlbmRhckVsZW1lbnQodGhpcy5nZXROZXh0TW9udGgoZGF0ZSkpXG4gICAgICAgIGNhbGVuZGFyTmV4dC5jbGFzc0xpc3QuYWRkKFwibmV4dC1jYWxlbmRhclwiKVxuICAgICAgICBjYWxlbmRhck5leHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc3dpdGNoVG9OZXh0TW9udGgoKSlcblxuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNhbGVuZGFyQ3VycmVudClcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChjYWxlbmRhclByZXYpXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY2FsZW5kYXJOZXh0KVxuXG4gICAgICAgIHJldHVybiB3cmFwcGVyXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUNhbGVuZGFyRWxlbWVudChkYXRlKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVHcmlkSGVhZGVyKCkpXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVHcmlkKGRhdGUpKVxuICAgICAgICByZXR1cm4gd3JhcHBlclxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVHcmlkSGVhZGVyKCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGF5cy1vZi13ZWVrLWNvbnRhaW5lclwiKVxuICAgICAgICBjb25zdCBkYXlzT2ZXZWVrID0gW1wiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCIsIFwiU3VuXCJdXG5cbiAgICAgICAgZGF5c09mV2Vlay5mb3JFYWNoKGRheSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgZGF5TmFtZS5jbGFzc0xpc3QuYWRkKFwiZGF5LW9mLXdlZWtcIilcbiAgICAgICAgICAgIGRheU5hbWUudGV4dENvbnRlbnQgPSBkYXlcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlOYW1lKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gY29udGFpbmVyXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUdyaWQoZGF0ZSkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2FsZW5kYXItZ3JpZC1jb250YWluZXJcIilcblxuICAgICAgICBsZXQgdG91Y2hFdmVudFxuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZSA9PiB0b3VjaEV2ZW50ID0gbmV3IFRvdWNoRXZlbnRzKGUpLCB7IHBhc3NpdmU6IGZhbHNlIH0pXG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgZSA9PiB0aGlzLmhhbmRsZVN3aXBlKGUsIHRvdWNoRXZlbnQpKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDI7IGkrKykge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlR3JpZENlbGwoaSwgZGF0ZSkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lclxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVHcmlkQ2VsbChpLCBkYXRlKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gZGF0ZVxuICAgICAgICBjb25zdCBmaXJzdERheU9mV2VlayA9IENvbnZlcnREYXRlLmdldERheSgobmV3IERhdGUoY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSwgY3VycmVudERhdGUuZ2V0TW9udGgoKSwgMSkpKVxuICAgICAgICBjb25zdCBsYXN0RGF5T2ZDdXJyZW50TW9udGggPSBuZXcgRGF0ZShjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLCBjdXJyZW50RGF0ZS5nZXRNb250aCgpICsgMSwgMCkuZ2V0RGF0ZSgpXG4gICAgICAgIGNvbnN0IGxhc3REYXlPZlByZXZpb3VzTW9udGggPSBuZXcgRGF0ZShjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLCBjdXJyZW50RGF0ZS5nZXRNb250aCgpLCAwKS5nZXREYXRlKClcblxuICAgICAgICBjb25zdCBkYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGRheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGF5LWNvbnRhaW5lclwiKVxuXG4gICAgICAgIGNvbnN0IGRheU51bWJlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgZGF5TnVtYmVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkYXktbnVtYmVyXCIpXG4gICAgICAgIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlOdW1iZXJDb250YWluZXIpXG5cbiAgICAgICAgLy9zaG93IGN1cnJlbnQgbW9udGggZGF5XG4gICAgICAgIGlmIChpICsgMSA+PSBmaXJzdERheU9mV2VlayAmJiBpIC0gZmlyc3REYXlPZldlZWsgKyAxIDwgbGFzdERheU9mQ3VycmVudE1vbnRoKSB7XG4gICAgICAgICAgICBjb25zdCBkYXkgPSBpICsgMiAtIGZpcnN0RGF5T2ZXZWVrXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gQ29udmVydERhdGUudG9ZWVlZTU1ERChuZXcgRGF0ZShjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLCBjdXJyZW50RGF0ZS5nZXRNb250aCgpLCBkYXkpKVxuXG4gICAgICAgICAgICB0aGlzLmhpZ2hsaWdodFRvZGF5KG5ldyBEYXRlKGRhdGUpLCBkYXlDb250YWluZXIpXG4gICAgICAgICAgICB0aGlzLm1hcmtEYXlXaXRoVGFzayhkYXRlLCBkYXlOdW1iZXJDb250YWluZXIpXG5cbiAgICAgICAgICAgIGRheUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5oYW5kbGVEYXlDbGljayhkYXRlLCBkYXlDb250YWluZXIpKVxuXG4gICAgICAgICAgICBkYXlOdW1iZXJDb250YWluZXIudGV4dENvbnRlbnQgPSBkYXlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vc2hvdyBwcmV2aW91cyBtb250aCBkYXlcbiAgICAgICAgaWYgKGkgKyAxIDwgZmlyc3REYXlPZldlZWspIHtcbiAgICAgICAgICAgIGRheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYW5vdGhlci1tb250aC1kYXlcIilcblxuICAgICAgICAgICAgY29uc3QgZGF5ID0gbGFzdERheU9mUHJldmlvdXNNb250aCAtIGZpcnN0RGF5T2ZXZWVrICsgaSArIDJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUodGhpcy5nZXRQcmV2aW91c01vbnRoKHRoaXMudG9kYXlzRGF0ZSwgZGF5KSlcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBDb252ZXJ0RGF0ZS50b1lZWVlNTUREKG5ldyBEYXRlKGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCksIGN1cnJlbnREYXRlLmdldE1vbnRoKCksIGRheSkpXG5cbiAgICAgICAgICAgIHRoaXMubWFya0RheVdpdGhUYXNrKGRhdGUsIGRheU51bWJlckNvbnRhaW5lcilcblxuICAgICAgICAgICAgZGF5Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hUb1ByZXZpb3VzTW9udGgoKVxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRGF5Q2xpY2soZGF0ZSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGRheU51bWJlckNvbnRhaW5lci50ZXh0Q29udGVudCA9IGRheVxuICAgICAgICB9XG5cbiAgICAgICAgLy9zaG93IG5leHQgbW9udGggZGF5XG4gICAgICAgIGlmIChpICsgMSA+IGxhc3REYXlPZkN1cnJlbnRNb250aCAmJiBpIC0gZmlyc3REYXlPZldlZWsgKyAyID4gbGFzdERheU9mQ3VycmVudE1vbnRoKSB7XG4gICAgICAgICAgICBkYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFub3RoZXItbW9udGgtZGF5XCIpXG5cbiAgICAgICAgICAgIGNvbnN0IGRheSA9IGkgKyAyIC0gZmlyc3REYXlPZldlZWsgLSBsYXN0RGF5T2ZDdXJyZW50TW9udGhcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUodGhpcy5nZXROZXh0TW9udGgodGhpcy50b2RheXNEYXRlLCBkYXkpKVxuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IENvbnZlcnREYXRlLnRvWVlZWU1NREQobmV3IERhdGUoY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSwgY3VycmVudERhdGUuZ2V0TW9udGgoKSwgZGF5KSlcblxuICAgICAgICAgICAgdGhpcy5tYXJrRGF5V2l0aFRhc2soZGF0ZSwgZGF5TnVtYmVyQ29udGFpbmVyKVxuXG4gICAgICAgICAgICBkYXlDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFRvTmV4dE1vbnRoKClcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZURheUNsaWNrKGRhdGUpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBkYXlOdW1iZXJDb250YWluZXIudGV4dENvbnRlbnQgPSBkYXlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXlDb250YWluZXJcbiAgICB9XG5cbiAgICBzdGF0aWMgc3dpdGNoVG9QcmV2aW91c01vbnRoKGRhdGUpIHtcbiAgICAgICAgdGhpcy50b2RheXNEYXRlID0gdGhpcy5nZXRQcmV2aW91c01vbnRoKGRhdGUgfHwgdGhpcy50b2RheXNEYXRlKVxuICAgICAgICB0aGlzLmNyZWF0ZVdpZGdldCh0aGlzLnRvZGF5c0RhdGUpXG4gICAgfVxuXG4gICAgc3RhdGljIHN3aXRjaFRvQ3VycmVudE1vbnRoKCkge1xuICAgICAgICB0aGlzLnRvZGF5c0RhdGUgPSBuZXcgRGF0ZSgpXG4gICAgICAgIHRoaXMuY3JlYXRlV2lkZ2V0KHRoaXMudG9kYXlzRGF0ZSlcbiAgICB9XG5cbiAgICBzdGF0aWMgc3dpdGNoVG9OZXh0TW9udGgoZGF0ZSkge1xuICAgICAgICB0aGlzLnRvZGF5c0RhdGUgPSB0aGlzLmdldE5leHRNb250aChkYXRlIHx8IHRoaXMudG9kYXlzRGF0ZSlcbiAgICAgICAgdGhpcy5jcmVhdGVXaWRnZXQodGhpcy50b2RheXNEYXRlKVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRQcmV2aW91c01vbnRoKGRhdGUsIGRheSkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgLSAxLCBkYXkgPyBkYXkgOiAxKVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXROZXh0TW9udGgoZGF0ZSwgZGF5KSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIGRheSA/IGRheSA6IDEpXG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnZlcnRNb250aE5hbWUobW9udGhOdW1iZXIpIHtcbiAgICAgICAgc3dpdGNoIChtb250aE51bWJlcikge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIG1vbnRoTnVtYmVyID0gXCJKYW51YXJ5XCJcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIG1vbnRoTnVtYmVyID0gXCJGZWJydXJhcnlcIlxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgbW9udGhOdW1iZXIgPSBcIk1hcmNoXCJcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIG1vbnRoTnVtYmVyID0gXCJBcHJpbFwiXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBtb250aE51bWJlciA9IFwiTWF5XCJcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIG1vbnRoTnVtYmVyID0gXCJKdW5lXCJcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIG1vbnRoTnVtYmVyID0gXCJKdWx5XCJcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIG1vbnRoTnVtYmVyID0gXCJBdWd1c3RcIlxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgbW9udGhOdW1iZXIgPSBcIlNlcHRlbWJlclwiXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICBtb250aE51bWJlciA9IFwiT2N0b2JlclwiXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgbW9udGhOdW1iZXIgPSBcIk5vdmVtYmVyXCJcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICBtb250aE51bWJlciA9IFwiRGVjZW1iZXJcIlxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vbnRoTnVtYmVyXG4gICAgfVxuXG4gICAgc3RhdGljIGhpZ2hsaWdodFRvZGF5KGRhdGUsIGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpXG4gICAgICAgIGlmIChkYXRlLmdldERhdGUoKSA9PT0gY3VycmVudERhdGUuZ2V0RGF0ZSgpXG4gICAgICAgICAgICAmJiBkYXRlLmdldE1vbnRoKCkgPT09IGN1cnJlbnREYXRlLmdldE1vbnRoKClcbiAgICAgICAgICAgICYmIGRhdGUuZ2V0RnVsbFllYXIoKSA9PT0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRheS1jb250YWluZXItdG9kYXlcIilcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50LW1vbnRoLWRheVwiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGhpZ2hsaWdodFNlbGVjdGVkRGF5KGRhdGUpIHtcbiAgICAgICAgY29uc3QgZGF0ZUNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmN1cnJlbnQtbW9udGgtZGF5XCIpXG4gICAgICAgIGRhdGUgPSBkYXRlLnNsaWNlKC0yKSA8IDEwID8gZGF0ZS5zbGljZSgtMSkgOiBkYXRlLnNsaWNlKC0yKVxuICAgICAgICBkYXRlQ29udGFpbmVycy5mb3JFYWNoKGNvbnRhaW5lciA9PiB7XG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRheS1jb250YWluZXItc2VsZWN0ZWRcIilcbiAgICAgICAgICAgIGlmIChjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5kYXktbnVtYmVyXCIpLnRleHRDb250ZW50ID09PSBkYXRlKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkYXktY29udGFpbmVyLXNlbGVjdGVkXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RhdGljIG1hcmtEYXlXaXRoVGFzayhkYXRlLCBjb250YWluZXIpIHtcbiAgICAgICAgaWYgKFRhc2suZmluZFRhc2tzRm9yRGF0ZShkYXRlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGF5LXdpdGgtdGFza1wiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGhhbmRsZVN3aXBlKGUsIHRvdWNoRXZlbnQpIHtcbiAgICAgICAgdG91Y2hFdmVudC5zZXRFbmRFdmVudChlKVxuICAgICAgICBpZiAodG91Y2hFdmVudC5pc1N3aXBlUmlnaHQoKSkge1xuICAgICAgICAgICAgdGhpcy5zd2l0Y2hUb1ByZXZpb3VzTW9udGgoKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0b3VjaEV2ZW50LmlzU3dpcGVMZWZ0KCkpIHtcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoVG9OZXh0TW9udGgoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGhhbmRsZURheUNsaWNrKGRhdGUpIHtcbiAgICAgICAgdGhpcy5oaWdobGlnaHRTZWxlY3RlZERheShkYXRlKVxuICAgICAgICBUYXNrc0xpc3QudXBkYXRlKGRhdGUpXG4gICAgICAgIEhvbWUudXBkYXRlRGF0ZUNvbnRhaW5lcihkYXRlKVxuICAgIH1cblxuICAgIHN0YXRpYyByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNhbGVuZGFyXCIpXG4gICAgICAgIHRoaXMuY3JlYXRlV2lkZ2V0KHRoaXMudG9kYXlzRGF0ZSlcbiAgICAgICAgcmV0dXJuIHRoaXMuaHRtbEVsZW1lbnRcbiAgICB9XG59IiwiaW1wb3J0IHsgbmFub2lkIH0gZnJvbSBcIm5hbm9pZFwiXG5pbXBvcnQgRm9sZGVyc1RhYiBmcm9tIFwiLi4vVGFicy9Gb2xkZXJzL0ZvbGRlcnNUYWJcIlxuaW1wb3J0IE1haW4gZnJvbSBcIi4uL1VJL01haW5cIlxuaW1wb3J0IExvY2FsU3RvcmFnZSBmcm9tIFwiLi4vVXRpbHMvTG9jYWxTdG9yYWdlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9sZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMuaWQgPSBuYW5vaWQoKVxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMudGFza3MgPSBbXVxuICAgIH1cblxuICAgIHN0YXRpYyBzaG93KGZvbGRlcklkKSB7XG4gICAgICAgIE1haW4uY2hhbmdlQ29udGVudChGb2xkZXJzVGFiLnJlbmRlcihmb2xkZXJJZCkpXG4gICAgfVxuXG4gICAgc3RhdGljIGdlbmVyYXRlRGVmYXVsdEZvbGRlcigpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdEZvbGRlciA9IG5ldyB0aGlzKFwiRGVmYXVsdFwiKVxuICAgICAgICBkZWZhdWx0Rm9sZGVyLmlkID0gXCJERUZBVUxUXCJcbiAgICAgICAgTG9jYWxTdG9yYWdlLnNhdmVGb2xkZXIoZGVmYXVsdEZvbGRlcilcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0U29ydGVkVGFza3MoZm9sZGVySWQpIHtcbiAgICAgICAgY29uc3QgZm9sZGVyID0gTG9jYWxTdG9yYWdlLmdldEZvbGRlcihmb2xkZXJJZClcbiAgICAgICAgY29uc3QgdGFza3MgPSBbXVxuICAgICAgICBjb25zdCB0YXNrc0RvbmUgPSBbXVxuICAgICAgICBmb2xkZXIudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGlmICh0YXNrLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICB0YXNrc0RvbmUucHVzaCh7IHRhc2ssIGZvbGRlciB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0YXNrLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICB0YXNrcy5wdXNoKHsgdGFzaywgZm9sZGVyIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0YXNrcy5jb25jYXQodGFza3NEb25lKVxuICAgIH1cblxuICAgIHN0YXRpYyB1cGRhdGUoZm9sZGVyKSB7XG4gICAgICAgIExvY2FsU3RvcmFnZS5yZW1vdmUoZm9sZGVyKVxuICAgICAgICBMb2NhbFN0b3JhZ2UuYWRkKGZvbGRlcilcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVsZXRlKGZvbGRlcklkKSB7XG4gICAgICAgIGNvbnN0IGZvbGRlcnMgPSBMb2NhbFN0b3JhZ2UuZ2V0KCkuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gZm9sZGVySWQpXG4gICAgICAgIExvY2FsU3RvcmFnZS5zZXQoZm9sZGVycylcbiAgICB9XG59IiwiaW1wb3J0IFRhc2tzTGlzdCBmcm9tIFwiLi4vVGFza3MvVGFza3NMaXN0XCJcbmltcG9ydCBFZGl0SWNvbiBmcm9tIFwiLi4vSWNvbnMvZWRpdFwiXG5pbXBvcnQgRXhwYW5kSWNvbiBmcm9tIFwiLi4vSWNvbnMvZXhwYW5kXCJcbmltcG9ydCBDb2xsYXBzZUljb24gZnJvbSBcIi4uL0ljb25zL2NvbGxhcHNlXCJcbmltcG9ydCBQbHVzSWNvbiBmcm9tIFwiLi4vSWNvbnMvcGx1c1wiXG5pbXBvcnQgRm9sZGVyIGZyb20gXCIuL0ZvbGRlclwiXG5pbXBvcnQgTG9jYWxTdG9yYWdlIGZyb20gXCIuLi9VdGlscy9Mb2NhbFN0b3JhZ2VcIlxuaW1wb3J0IEVkaXRGb2xkZXJGb3JtIGZyb20gXCIuLi9Gb3Jtcy9zdWJjb21wb25lbnRzL0VkaXRGb2xkZXJGb3JtXCJcbmltcG9ydCBNYWluIGZyb20gXCIuLi9VSS9NYWluXCJcbmltcG9ydCBOZXdUYXNrRm9ybSBmcm9tIFwiLi4vRm9ybXMvc3ViY29tcG9uZW50cy9OZXdUYXNrRm9ybVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvbGRlcnNMaXN0IHtcbiAgICBzdGF0aWMgaHRtbEVsZW1lbnQgPSB0aGlzLmNyZWF0ZUh0bWxFbGVtZW50KClcblxuICAgIHN0YXRpYyByZW5kZXIoZXhwYWRlZEZvbGRlcnMgPSBbXCJERUZBVUxUXCJdKSB7XG4gICAgICAgIHRoaXMuY2xlYXJIdG1sRWxlbWVudCgpXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVGb2xkZXJzTGlzdChleHBhZGVkRm9sZGVycykpXG4gICAgICAgIHJldHVybiB0aGlzLmh0bWxFbGVtZW50XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUh0bWxFbGVtZW50KCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmb2xkZXJzLWxpc3QtY29udGFpbmVyXCIpXG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgfVxuXG4gICAgc3RhdGljIGNsZWFySHRtbEVsZW1lbnQoKSB7XG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIlxuICAgIH1cblxuICAgIHN0YXRpYyByZWZyZXNoKCkge1xuICAgICAgICBjb25zdCBleHBhZGVkRm9sZGVycyA9IHRoaXMuZ2V0RXhwYW5kZWRGb2xkZXJzQXJyYXkoKVxuICAgICAgICB0aGlzLnJlbmRlcihleHBhZGVkRm9sZGVycylcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlRm9sZGVyc0xpc3QoZXhwYW5kZWRGb2xkZXJzKSB7XG4gICAgICAgIGNvbnN0IGZvbGRlckxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcbiAgICAgICAgZm9sZGVyTGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9sZGVycy1saXN0XCIpXG5cbiAgICAgICAgbGV0IGZvbGRlcnMgPSBMb2NhbFN0b3JhZ2UuZ2V0KClcblxuICAgICAgICBpZiAoZm9sZGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIEZvbGRlci5nZW5lcmF0ZURlZmF1bHRGb2xkZXIoKVxuICAgICAgICAgICAgZm9sZGVycyA9IExvY2FsU3RvcmFnZS5nZXQoKVxuICAgICAgICB9XG5cbiAgICAgICAgZm9sZGVycy5mb3JFYWNoKGZvbGRlciA9PiB7XG4gICAgICAgICAgICBmb2xkZXJMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlTGlzdEl0ZW0oZm9sZGVyLCBleHBhbmRlZEZvbGRlcnMpKVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBmb2xkZXJMaXN0Q29udGFpbmVyXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUxpc3RJdGVtKGZvbGRlciwgZXhwYWRlZEZvbGRlcnMpIHtcbiAgICAgICAgY29uc3QgZm9sZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgIGZvbGRlckNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWZvbGRlci1pZFwiLCBmb2xkZXIuaWQpXG5cbiAgICAgICAgY29uc3QgdG9wQmFyID0gdGhpcy5jcmVhdGVGb2xkZXJUb3BCYXIoZm9sZGVyKVxuICAgICAgICBmb2xkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodG9wQmFyKVxuXG4gICAgICAgIGZvbGRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChUYXNrc0xpc3Quc2hvd1Rhc2tzKEZvbGRlci5nZXRTb3J0ZWRUYXNrcyhmb2xkZXIuaWQpKSlcblxuICAgICAgICBpZiAoZXhwYWRlZEZvbGRlcnMuaW5jbHVkZXMoZm9sZGVyLmlkKSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVFeHBhbmRCdXR0b25DbGljayhmb2xkZXIuaWQsIGZvbGRlckNvbnRhaW5lcilcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb2xkZXJDb250YWluZXJcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlRm9sZGVyVG9wQmFyKGZvbGRlcikge1xuICAgICAgICBjb25zdCB0b3BCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIHRvcEJhci5jbGFzc0xpc3QuYWRkKFwiZm9sZGVycy1saXN0LXRvcC1iYXJcIilcblxuICAgICAgICBjb25zdCBmb2xkZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBmb2xkZXJOYW1lLmNsYXNzTGlzdC5hZGQoXCJmb2xkZXItbmFtZVwiKVxuICAgICAgICB0b3BCYXIuYXBwZW5kQ2hpbGQoZm9sZGVyTmFtZSlcbiAgICAgICAgY29uc3QgZm9sZGVyTmFtZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGZvbGRlck5hbWVUZXh0LnRleHRDb250ZW50ID0gZm9sZGVyLm5hbWVcbiAgICAgICAgZm9sZGVyTmFtZS5hcHBlbmRDaGlsZChmb2xkZXJOYW1lVGV4dClcblxuICAgICAgICBpZiAoZm9sZGVyLmlkICE9PSBcIkRFRkFVTFRcIikge1xuICAgICAgICAgICAgdG9wQmFyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWRpdEZvbGRlckJ1dHRvbihmb2xkZXIpKVxuICAgICAgICB9XG4gICAgICAgIHRvcEJhci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUFkZFRhc2tUb0ZvbGRlckJ1dHRvbihmb2xkZXIpKVxuICAgICAgICB0b3BCYXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFeHBhbmRGb2xkZXJCdXR0b24oZm9sZGVyLmlkKSlcblxuICAgICAgICByZXR1cm4gdG9wQmFyXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUVkaXRGb2xkZXJCdXR0b24oZm9sZGVyKSB7XG4gICAgICAgIGNvbnN0IGVkaXRGb2xkZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIGVkaXRGb2xkZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcImZvbGRlci1saXN0LXRvcC1iYXItYnV0dG9uXCIsIFwiZm9sZGVyLWVkaXQtYnV0dG9uXCIpXG4gICAgICAgIGVkaXRGb2xkZXJCdXR0b24uaW5uZXJIVE1MID0gRWRpdEljb25cbiAgICAgICAgZWRpdEZvbGRlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybSA9IG5ldyBFZGl0Rm9sZGVyRm9ybShmb2xkZXIpXG4gICAgICAgICAgICBNYWluLnNob3dTbGlkZUNvbnRlbnQoZm9ybS5yZW5kZXIoKSlcbiAgICAgICAgICAgIGZvcm0uY3JlYXRlUmVtb3ZlRm9sZGVyQnV0dG9uKClcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGVkaXRGb2xkZXJCdXR0b25cbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQWRkVGFza1RvRm9sZGVyQnV0dG9uKGZvbGRlcikge1xuICAgICAgICBjb25zdCBhZGRUYXNrVG9Gb2xkZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIGFkZFRhc2tUb0ZvbGRlckJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZm9sZGVyLWxpc3QtdG9wLWJhci1idXR0b25cIilcbiAgICAgICAgYWRkVGFza1RvRm9sZGVyQnV0dG9uLmlubmVySFRNTCA9IFBsdXNJY29uXG4gICAgICAgIGFkZFRhc2tUb0ZvbGRlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgTWFpbi5zaG93U2xpZGVDb250ZW50KG5ldyBOZXdUYXNrRm9ybSh1bmRlZmluZWQsIGZvbGRlcikucmVuZGVyKCkpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBhZGRUYXNrVG9Gb2xkZXJCdXR0b25cbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlRXhwYW5kRm9sZGVyQnV0dG9uKGZvbGRlcklkKSB7XG4gICAgICAgIGNvbnN0IGV4cGFuZEZvbGRlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgZXhwYW5kRm9sZGVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmb2xkZXItbGlzdC10b3AtYmFyLWJ1dHRvblwiLCBcImZvbGRlci1leHBhbmQtYnV0dG9uXCIpXG4gICAgICAgIGV4cGFuZEZvbGRlckJ1dHRvbi5pbm5lckhUTUwgPSBFeHBhbmRJY29uXG4gICAgICAgIGV4cGFuZEZvbGRlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5oYW5kbGVFeHBhbmRCdXR0b25DbGljayhmb2xkZXJJZCkpXG4gICAgICAgIHJldHVybiBleHBhbmRGb2xkZXJCdXR0b25cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0RXhwYW5kZWRGb2xkZXJzQXJyYXkoKSB7XG4gICAgICAgIGNvbnN0IGV4cGFuZGVkSHRtbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtZm9sZGVyLWV4cGFuZGVkPVwiZXhwYW5kZWRcIl1gKVxuICAgICAgICBjb25zdCBleHBhZGVkRm9sZGVyc0FycmF5ID0gW11cbiAgICAgICAgZXhwYW5kZWRIdG1sRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IGV4cGFkZWRGb2xkZXJzQXJyYXkucHVzaChlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtZm9sZGVyLWlkXCIpKSlcbiAgICAgICAgcmV0dXJuIGV4cGFkZWRGb2xkZXJzQXJyYXlcbiAgICB9XG5cbiAgICBzdGF0aWMgZXhwYW5kRm9sZGVyKGZvbGRlckh0bWxFbGVtZW50KSB7XG4gICAgICAgIGZvbGRlckh0bWxFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtZm9sZGVyLWV4cGFuZGVkXCIsIFwiZXhwYW5kZWRcIilcbiAgICAgICAgY29uc3QgbGlzdCA9IGZvbGRlckh0bWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtbGlzdFwiKVxuICAgICAgICBsaXN0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrcy1saXN0LWV4cGFuZGVkXCIpXG4gICAgfVxuXG4gICAgc3RhdGljIGNvbGxhcHNlRm9sZGVyKGZvbGRlckh0bWxFbGVtZW50KSB7XG4gICAgICAgIGZvbGRlckh0bWxFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtZm9sZGVyLWV4cGFuZGVkXCIpXG4gICAgICAgIGNvbnN0IGxpc3QgPSBmb2xkZXJIdG1sRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWxpc3RcIilcbiAgICAgICAgbGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwidGFza3MtbGlzdC1leHBhbmRlZFwiKVxuICAgIH1cblxuICAgIHN0YXRpYyBoYW5kbGVFeHBhbmRCdXR0b25DbGljayhmb2xkZXJJZCwgZm9sZGVyQ29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IGZvbGRlckh0bWxFbGVtZW50ID0gZm9sZGVyQ29udGFpbmVyID8gZm9sZGVyQ29udGFpbmVyIDogdGhpcy5odG1sRWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1mb2xkZXItaWQ9XCIke2ZvbGRlcklkfVwiXWApXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGZvbGRlckh0bWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9sZGVyLWV4cGFuZC1idXR0b25cIilcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJidXR0b24tZXhwYW5kZWRcIilcbiAgICAgICAgY29uc3QgaXNFeHBhbmRlZCA9IGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJidXR0b24tZXhwYW5kZWRcIilcbiAgICAgICAgaWYgKGlzRXhwYW5kZWQpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBDb2xsYXBzZUljb25cbiAgICAgICAgICAgIHRoaXMuZXhwYW5kRm9sZGVyKGZvbGRlckh0bWxFbGVtZW50KVxuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IEV4cGFuZEljb25cbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGb2xkZXIoZm9sZGVySHRtbEVsZW1lbnQpXG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IFwiLi9mb3Jtcy5jc3NcIlxuaW1wb3J0IExvY2FsU3RvcmFnZSBmcm9tIFwiLi4vVXRpbHMvTG9jYWxTdG9yYWdlXCJcbmltcG9ydCBTYXZlSWNvbiBmcm9tIFwiLi4vSWNvbnMvc2F2ZVwiXG5pbXBvcnQgUmVtb3ZlSWNvbiBmcm9tIFwiLi4vSWNvbnMvcmVtb3ZlXCJcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudCA9IHRoaXMuY3JlYXRlRm9ybSgpXG4gICAgICAgIHRoaXMuZXJyb3JCb3ggPSB0aGlzLmNyZWF0ZUVycm9yQm94KClcbiAgICB9XG5cbiAgICBjcmVhdGVGb3JtKCkge1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIilcbiAgICAgICAgcmV0dXJuIGZvcm1cbiAgICB9XG5cbiAgICB2YWxpZGF0ZUZvcm0oKSB7XG4gICAgICAgIHRoaXMuZXJyb3JCb3gudGV4dENvbnRlbnQgPSBcIlwiXG4gICAgICAgIGNvbnN0IGNvbnRlbnRQYXRlcm4gPSAvXigufC5cXG4pezEsfSQvZ1xuICAgICAgICBpZiAoIWNvbnRlbnRQYXRlcm4udGVzdCh0aGlzLmlucHV0TmFtZS52YWx1ZS50cmltKCkpKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yQm94LnRleHRDb250ZW50ID0gXCJUYXNrIG11c3QgY29udGFpbiBhdCBsZWFzdCAxIGNoYXJhY3RlclwiXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlucHV0TmFtZS52YWx1ZSA9IHRoaXMuaW5wdXROYW1lLnZhbHVlLnRyaW0oKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGFkZElucHV0KGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKCh7IHR5cGUsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSh0eXBlLCB2YWx1ZSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGlucHV0XG4gICAgfVxuXG4gICAgYWRkTGFiZWwoaWQsIHRleHQpIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlkKVxuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IHRleHRcbiAgICAgICAgcmV0dXJuIGxhYmVsXG4gICAgfVxuXG4gICAgYWRkVGV4dEFyZWEoYXR0cmlidXRlcywgdGV4dCkge1xuICAgICAgICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKVxuICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goKHsgdHlwZSwgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKHR5cGUsIHZhbHVlKVxuICAgICAgICB9KVxuICAgICAgICBpZiAodGV4dCkge1xuICAgICAgICAgICAgdGV4dEFyZWEudGV4dENvbnRlbnQgPSB0ZXh0XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHRBcmVhXG4gICAgfVxuXG4gICAgY3JlYXRlRm9sZGVyU2VsZWN0KCkge1xuICAgICAgICBjb25zdCBmb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpXG4gICAgICAgIGZvbGRlci5jbGFzc0xpc3QuYWRkKFwidGFzay1mb2xkZXJcIilcblxuICAgICAgICBMb2NhbFN0b3JhZ2UuZ2V0KCkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZVxuICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcImRhdGEtZm9sZGVyLWlkXCIsIGl0ZW0uaWQpXG4gICAgICAgICAgICBpZiAodGhpcy5mb2xkZXIgJiYgaXRlbS5pZCA9PT0gdGhpcy5mb2xkZXIuaWQpIHtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJzZWxlY3RlZFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmZvbGRlciAmJiBpdGVtLmlkID09PSBcIjBcIikge1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcInNlbGVjdGVkXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb2xkZXIuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBmb2xkZXJcbiAgICB9XG5cbiAgICBjcmVhdGVFcnJvckJveCgpIHtcbiAgICAgICAgY29uc3QgZXJyb3JCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGVycm9yQm94LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWVycm9yXCIpXG4gICAgICAgIHJldHVybiBlcnJvckJveFxuICAgIH1cblxuICAgIGNyZWF0ZVJlbW92ZUJ1dHRvbihyZW1vdmVIYW5kbGVyKSB7XG4gICAgICAgIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgcmVtb3ZlQnV0dG9uLmlubmVySFRNTCA9IFJlbW92ZUljb25cbiAgICAgICAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVIYW5kbGVyKVxuICAgICAgICByZXR1cm4gcmVtb3ZlQnV0dG9uXG4gICAgfVxuXG4gICAgY3JlYXRlU3VibWl0KGJ1dHRvbkNvbnRlbnQpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC1idXR0b25cIiwgXCJmbG9hdGluZy1idXR0b25cIilcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGJ1dHRvbkNvbnRlbnQgfHwgU2F2ZUljb25cbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHRoaXMuc3VibWl0QnV0dG9uSGFuZGxlcihlKSlcbiAgICAgICAgcmV0dXJuIGJ1dHRvblxuICAgIH1cbn0iLCJpbXBvcnQgRm9ybSBmcm9tIFwiLi4vRm9ybVwiXG5pbXBvcnQgRm9sZGVyIGZyb20gJy4uLy4uL0ZvbGRlcnMvRm9sZGVyJ1xuaW1wb3J0IE1haW4gZnJvbSBcIi4uLy4uL1VJL01haW5cIlxuaW1wb3J0IENhbGVuZGFyVGFiIGZyb20gXCIuLi8uLi9UYWJzL0NhbGVuZGFyL0NhbGVuZGFyVGFiXCJcbmltcG9ydCBUYXNrc0xpc3QgZnJvbSBcIi4uLy4uL1Rhc2tzL1Rhc2tzTGlzdFwiXG5pbXBvcnQgRm9sZGVyc0xpc3QgZnJvbSBcIi4uLy4uL0ZvbGRlcnMvRm9sZGVyc0xpc3RcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0Rm9sZGVyRm9ybSBleHRlbmRzIEZvcm0ge1xuICAgIGNvbnN0cnVjdG9yKGZvbGRlciwgdG9wQmFyKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5mb2xkZXIgPSBmb2xkZXJcbiAgICAgICAgdGhpcy50b3BCYXIgPSB0b3BCYXJcbiAgICAgICAgdGhpcy5pbnB1dE5hbWUgPSB0aGlzLmFkZElucHV0KFtcbiAgICAgICAgICAgIHsgdHlwZTogXCJ0eXBlXCIsIHZhbHVlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgeyB0eXBlOiBcImlkXCIsIHZhbHVlOiBcImZvbGRlci1uYW1lXCIgfSxcbiAgICAgICAgICAgIHsgdHlwZTogXCJ2YWx1ZVwiLCB2YWx1ZTogdGhpcy5mb2xkZXIubmFtZSB9XG4gICAgICAgIF0pXG4gICAgfVxuXG4gICAgY3JlYXRlUmVtb3ZlRm9sZGVyQnV0dG9uKCkge1xuICAgICAgICBjb25zdCByZW1vdmVCdXR0b24gPSB0aGlzLmNyZWF0ZVJlbW92ZUJ1dHRvbigoKSA9PiB7XG4gICAgICAgICAgICBGb2xkZXIuZGVsZXRlKHRoaXMuZm9sZGVyLmlkKVxuICAgICAgICAgICAgRm9sZGVyc0xpc3QucmVmcmVzaCh0aGlzLmZvbGRlci5pZClcbiAgICAgICAgICAgIFRhc2tzTGlzdC51cGRhdGUodGhpcy5kdWVEYXRlKVxuICAgICAgICAgICAgTWFpbi5jbG9zZVNsaWRlQ29udGFpbmVyKClcbiAgICAgICAgfSlcbiAgICAgICAgcmVtb3ZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXJlbW92ZS1idXR0b25cIilcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZS1jb250YWluZXJcIilcbiAgICAgICAgb3V0cHV0LmFwcGVuZENoaWxkKHJlbW92ZUJ1dHRvbilcbiAgICB9XG5cbiAgICBzdWJtaXRCdXR0b25IYW5kbGVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb2xkZXIubmFtZSA9IHRoaXMuaW5wdXROYW1lLnZhbHVlXG4gICAgICAgIEZvbGRlci51cGRhdGUodGhpcy5mb2xkZXIpXG4gICAgICAgIFxuICAgICAgICBDYWxlbmRhclRhYi5yZWZyZXNoKHRoaXMuZHVlRGF0ZSlcbiAgICAgICAgRm9sZGVyc0xpc3QucmVmcmVzaCh0aGlzLmZvbGRlci5pZClcbiAgICAgICAgVGFza3NMaXN0LnVwZGF0ZSh0aGlzLmR1ZURhdGUpXG4gICAgICAgIE1haW4uY2xvc2VTbGlkZUNvbnRhaW5lcigpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuYWRkTGFiZWwoXCJmb2xkZXItbmFtZVwiLCBcIkZvbGRlciBuYW1lOlwiKSlcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0TmFtZSlcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVN1Ym1pdCgpKVxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZXJyb3JCb3gpXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZvbGRlci1mb3JtXCIpXG4gICAgICAgIHJldHVybiB0aGlzLmh0bWxFbGVtZW50XG4gICAgfVxuXG59IiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4uLy4uL1Rhc2tzL1Rhc2tcIlxuaW1wb3J0IEZvcm0gZnJvbSBcIi4uL0Zvcm1cIlxuaW1wb3J0IE1haW4gZnJvbSBcIi4uLy4uL1VJL01haW5cIlxuaW1wb3J0IENhbGVuZGFyVGFiIGZyb20gXCIuLi8uLi9UYWJzL0NhbGVuZGFyL0NhbGVuZGFyVGFiXCJcbmltcG9ydCBUYXNrc0xpc3QgZnJvbSBcIi4uLy4uL1Rhc2tzL1Rhc2tzTGlzdFwiXG5pbXBvcnQgRm9sZGVyc0xpc3QgZnJvbSBcIi4uLy4uL0ZvbGRlcnMvRm9sZGVyc0xpc3RcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0VGFza0Zvcm0gZXh0ZW5kcyBGb3JtIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXNrSWQpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLm9iamVjdCA9IHsgLi4uVGFzay5nZXQodGFza0lkKSB9XG4gICAgICAgIHRoaXMuZm9sZGVyID0gdGhpcy5vYmplY3QuZm9sZGVyXG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMub2JqZWN0LnRhc2submFtZVxuICAgICAgICB0aGlzLmR1ZURhdGUgPSB0aGlzLm9iamVjdC50YXNrLmR1ZURhdGVcbiAgICAgICAgdGhpcy5pbnB1dE5hbWUgPSB0aGlzLmFkZFRleHRBcmVhKFtcbiAgICAgICAgICAgIHsgdHlwZTogXCJpZFwiLCB2YWx1ZTogXCJ0YXNrLW5hbWVcIiB9XSxcbiAgICAgICAgICAgIHRoaXMub2JqZWN0LnRhc2submFtZSlcbiAgICAgICAgdGhpcy5pbnB1dER1ZURhdGUgPSB0aGlzLmFkZElucHV0KFtcbiAgICAgICAgICAgIHsgdHlwZTogXCJpZFwiLCB2YWx1ZTogXCJlZGl0LW5hbWVcIiB9LFxuICAgICAgICAgICAgeyB0eXBlOiBcInR5cGVcIiwgdmFsdWU6IFwiZGF0ZVwiIH0sXG4gICAgICAgICAgICB7IHR5cGU6IFwidmFsdWVcIiwgdmFsdWU6IHRoaXMub2JqZWN0LnRhc2suZHVlRGF0ZSB9XG4gICAgICAgIF0pXG4gICAgICAgIHRoaXMuaW5wdXRGb2xkZXIgPSB0aGlzLmNyZWF0ZUZvbGRlclNlbGVjdCgpXG4gICAgfVxuXG4gICAgY3JlYXRlUmVtb3ZlVGFza0J1dHRvbigpIHtcbiAgICAgICAgY29uc3QgcmVtb3ZlQnV0dG9uID0gdGhpcy5jcmVhdGVSZW1vdmVCdXR0b24oKCkgPT4ge1xuICAgICAgICAgICAgVGFzay5yZW1vdmUodGhpcy5mb2xkZXIsIHRoaXMub2JqZWN0LnRhc2spXG4gICAgICAgICAgICBDYWxlbmRhclRhYi5yZWZyZXNoKHRoaXMuZHVlRGF0ZSlcbiAgICAgICAgICAgIEZvbGRlcnNMaXN0LnJlZnJlc2godGhpcy5mb2xkZXIuaWQpXG4gICAgICAgICAgICBUYXNrc0xpc3QudXBkYXRlKHRoaXMuZHVlRGF0ZSlcbiAgICAgICAgICAgIE1haW4uY2xvc2VTbGlkZUNvbnRhaW5lcigpXG4gICAgICAgIH0pXG4gICAgICAgIHJlbW92ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1yZW1vdmUtYnV0dG9uXCIpXG4gICAgICAgIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGUtY29udGFpbmVyXCIpXG4gICAgICAgIG91dHB1dC5hcHBlbmRDaGlsZChyZW1vdmVCdXR0b24pXG4gICAgfVxuXG4gICAgc3VibWl0QnV0dG9uSGFuZGxlcihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pbnB1dER1ZURhdGUudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXREdWVEYXRlLnZhbHVlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vYmplY3QudGFzay5uYW1lID0gdGhpcy5pbnB1dE5hbWUudmFsdWVcbiAgICAgICAgdGhpcy5vYmplY3QudGFzay5kdWVEYXRlID0gdGhpcy5pbnB1dER1ZURhdGUudmFsdWVcblxuICAgICAgICBUYXNrLnJlbW92ZSh0aGlzLmZvbGRlciwgdGhpcy5vYmplY3QudGFzaylcbiAgICAgICAgVGFzay5hZGQodGhpcy5vYmplY3QudGFzaywgdGhpcy5pbnB1dEZvbGRlci5zZWxlY3RlZE9wdGlvbnNbMF0uZ2V0QXR0cmlidXRlKFwiZGF0YS1mb2xkZXItaWRcIikpXG5cbiAgICAgICAgQ2FsZW5kYXJUYWIucmVmcmVzaCh0aGlzLmR1ZURhdGUpXG4gICAgICAgIEZvbGRlcnNMaXN0LnJlZnJlc2godGhpcy5mb2xkZXIuaWQpXG4gICAgICAgIFRhc2tzTGlzdC51cGRhdGUodGhpcy5kdWVEYXRlKVxuICAgICAgICBNYWluLmNsb3NlU2xpZGVDb250YWluZXIoKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmFkZExhYmVsKFwidGFzay1mb2xkZXJcIiwgXCJGb2xkZXI6XCIpKVxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuaW5wdXRGb2xkZXIpXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5hZGRMYWJlbChcInRhc2stZHVlLWRhdGVcIiwgXCJEdWUgZGF0ZTpcIikpXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dER1ZURhdGUpXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dE5hbWUpXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lcnJvckJveClcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVN1Ym1pdCgpKVxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWZvcm1cIilcbiAgICAgICAgcmV0dXJuIHRoaXMuaHRtbEVsZW1lbnRcbiAgICB9XG59IiwiaW1wb3J0IExvY2FsU3RvcmFnZSBmcm9tIFwiLi4vLi4vVXRpbHMvTG9jYWxTdG9yYWdlXCJcbmltcG9ydCBGb2xkZXJzTGlzdCBmcm9tIFwiLi4vLi4vRm9sZGVycy9Gb2xkZXJzTGlzdFwiXG5pbXBvcnQgRm9sZGVyIGZyb20gXCIuLi8uLi9Gb2xkZXJzL0ZvbGRlclwiXG5pbXBvcnQgVGFza3NMaXN0IGZyb20gXCIuLi8uLi9UYXNrcy9UYXNrc0xpc3RcIlxuaW1wb3J0IE1haW4gZnJvbSBcIi4uLy4uL1VJL01haW5cIlxuaW1wb3J0IEZvcm0gZnJvbSBcIi4uL0Zvcm1cIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdGb2xkZXJGb3JtIGV4dGVuZHMgRm9ybSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5pbnB1dE5hbWUgPSB0aGlzLmFkZElucHV0KFtcbiAgICAgICAgICAgIHsgdHlwZTogXCJ0eXBlXCIsIHZhbHVlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgeyB0eXBlOiBcImlkXCIsIHZhbHVlOiBcImZvbGRlci1uYW1lXCIgfSxcbiAgICAgICAgICAgIHsgdHlwZTogXCJwbGFjZWhvbGRlclwiLCB2YWx1ZTogXCJJbnB1dCBuZXcgZm9sZGVyIGhlcmVcIiB9XG4gICAgICAgIF0pXG4gICAgICAgIHRoaXMuZm9sZGVyID0gbnVsbFxuICAgIH1cblxuICAgIHN1Ym1pdEJ1dHRvbkhhbmRsZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvbGRlciA9IG5ldyBGb2xkZXIodGhpcy5pbnB1dE5hbWUudmFsdWUpXG4gICAgICAgIExvY2FsU3RvcmFnZS5hZGQodGhpcy5mb2xkZXIpXG4gICAgICAgIEZvbGRlcnNMaXN0LnJlZnJlc2godGhpcy5mb2xkZXIuaWQpXG4gICAgICAgIFRhc2tzTGlzdC51cGRhdGUodGhpcy5kdWVEYXRlKVxuICAgICAgICBNYWluLmNsb3NlU2xpZGVDb250YWluZXIoKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmFkZExhYmVsKFwiZm9sZGVyLW5hbWVcIiwgXCJGb2xkZXIgbmFtZTpcIikpXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dE5hbWUpXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVTdWJtaXQoKSlcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVycm9yQm94KVxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmb2xkZXItZm9ybVwiKVxuICAgICAgICByZXR1cm4gdGhpcy5odG1sRWxlbWVudFxuICAgIH1cbn0iLCJpbXBvcnQgRm9ybSBmcm9tIFwiLi4vRm9ybVwiXG5pbXBvcnQgVGFzayBmcm9tIFwiLi4vLi4vVGFza3MvVGFza1wiXG5pbXBvcnQgQ2FsZW5kYXJUYWIgZnJvbSBcIi4uLy4uL1RhYnMvQ2FsZW5kYXIvQ2FsZW5kYXJUYWJcIlxuaW1wb3J0IFRhc2tzTGlzdCBmcm9tIFwiLi4vLi4vVGFza3MvVGFza3NMaXN0XCJcbmltcG9ydCBNYWluIGZyb20gXCIuLi8uLi9VSS9NYWluXCJcbmltcG9ydCBGb2xkZXJzTGlzdCBmcm9tIFwiLi4vLi4vRm9sZGVycy9Gb2xkZXJzTGlzdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld1Rhc2tGb3JtIGV4dGVuZHMgRm9ybSB7XG4gICAgY29uc3RydWN0b3IoZGF0ZSwgZm9sZGVyKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZSB8fCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdXG4gICAgICAgIHRoaXMuZm9sZGVyID0gZm9sZGVyXG4gICAgICAgIHRoaXMuaW5wdXROYW1lID0gdGhpcy5hZGRUZXh0QXJlYShbXG4gICAgICAgICAgICB7IHR5cGU6IFwiaWRcIiwgdmFsdWU6IFwidGFzay1uYW1lXCIgfSxcbiAgICAgICAgICAgIHsgdHlwZTogXCJwbGFjZWhvbGRlclwiLCB2YWx1ZTogXCJJbnB1dCBuZXcgdGFzayBoZXJlXCIgfVxuICAgICAgICBdKVxuICAgICAgICB0aGlzLmlucHV0RHVlRGF0ZSA9IHRoaXMuYWRkSW5wdXQoW1xuICAgICAgICAgICAgeyB0eXBlOiBcInR5cGVcIiwgdmFsdWU6IFwiZGF0ZVwiIH0sXG4gICAgICAgICAgICB7IHR5cGU6IFwiaWRcIiwgdmFsdWU6IFwidGFzay1kdWUtZGF0ZVwiIH0sXG4gICAgICAgICAgICB7IHR5cGU6IFwidmFsdWVcIiwgdmFsdWU6IHRoaXMuZGF0ZSB9XG4gICAgICAgIF0pXG4gICAgICAgIHRoaXMuaW5wdXRGb2xkZXIgPSB0aGlzLmNyZWF0ZUZvbGRlclNlbGVjdCgpXG4gICAgICAgIHRoaXMuZXJyb3JCb3ggPSB0aGlzLmNyZWF0ZUVycm9yQm94KClcbiAgICB9XG5cbiAgICBzdWJtaXRCdXR0b25IYW5kbGVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlucHV0RHVlRGF0ZS52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dER1ZURhdGUudmFsdWUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRoaXMuaW5wdXROYW1lLnZhbHVlLCB0aGlzLmlucHV0RHVlRGF0ZS52YWx1ZSlcbiAgICAgICAgVGFzay5hZGQodGFzaywgdGhpcy5pbnB1dEZvbGRlci5zZWxlY3RlZE9wdGlvbnNbMF0uZ2V0QXR0cmlidXRlKFwiZGF0YS1mb2xkZXItaWRcIikpXG5cbiAgICAgICAgQ2FsZW5kYXJUYWIucmVmcmVzaCh0aGlzLmRhdGUpXG4gICAgICAgIEZvbGRlcnNMaXN0LnJlZnJlc2godGhpcy5pbnB1dEZvbGRlci5zZWxlY3RlZE9wdGlvbnNbMF0uZ2V0QXR0cmlidXRlKFwiZGF0YS1mb2xkZXItaWRcIikpXG4gICAgICAgIFRhc2tzTGlzdC51cGRhdGUodGhpcy5kYXRlKVxuICAgICAgICBNYWluLmNsb3NlU2xpZGVDb250YWluZXIoKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmFkZExhYmVsKFwidGFzay1mb2xkZXJcIiwgXCJGb2xkZXI6XCIpKVxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuaW5wdXRGb2xkZXIpXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5hZGRMYWJlbChcInRhc2stZHVlLWRhdGVcIiwgXCJEdWUgZGF0ZTpcIikpXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dER1ZURhdGUpXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dE5hbWUpXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lcnJvckJveClcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVN1Ym1pdCgpKVxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWZvcm1cIilcbiAgICAgICAgcmV0dXJuIHRoaXMuaHRtbEVsZW1lbnRcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjQ4XCIgd2lkdGg9XCI0OFwiIHZpZXdCb3g9XCIwIDAgNDggNDhcIj48cGF0aCBkPVwiTTI0IDQwLjE1IDcuODUgMjQgMjQgNy44NWwyLjQgMi40TDE0LjM1IDIyLjNoMjUuOHYzLjRoLTI1LjhMMjYuNCAzNy43NVpcIi8+PC9zdmc+YCIsImV4cG9ydCBkZWZhdWx0IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCI0OFwiIHdpZHRoPVwiNDhcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCI+PHBhdGggZD1cIk05IDQ0cS0xLjIgMC0yLjEtLjlRNiA0Mi4yIDYgNDFWMTBxMC0xLjIuOS0yLjFRNy44IDcgOSA3aDMuMjVWNGgzLjI1djNoMTdWNGgzLjI1djNIMzlxMS4yIDAgMi4xLjkuOS45LjkgMi4xdjMxcTAgMS4yLS45IDIuMS0uOS45LTIuMS45Wm0wLTNoMzBWMTkuNUg5VjQxWm0wLTI0LjVoMzBWMTBIOVptMCAwVjEwdjYuNVpNMjQgMjhxLS44NSAwLTEuNDI1LS41NzVRMjIgMjYuODUgMjIgMjZxMC0uODUuNTc1LTEuNDI1UTIzLjE1IDI0IDI0IDI0cS44NSAwIDEuNDI1LjU3NVEyNiAyNS4xNSAyNiAyNnEwIC44NS0uNTc1IDEuNDI1UTI0Ljg1IDI4IDI0IDI4Wm0tOCAwcS0uODUgMC0xLjQyNS0uNTc1UTE0IDI2Ljg1IDE0IDI2cTAtLjg1LjU3NS0xLjQyNVExNS4xNSAyNCAxNiAyNHEuODUgMCAxLjQyNS41NzVRMTggMjUuMTUgMTggMjZxMCAuODUtLjU3NSAxLjQyNVExNi44NSAyOCAxNiAyOFptMTYgMHEtLjg1IDAtMS40MjUtLjU3NVEzMCAyNi44NSAzMCAyNnEwLS44NS41NzUtMS40MjVRMzEuMTUgMjQgMzIgMjRxLjg1IDAgMS40MjUuNTc1UTM0IDI1LjE1IDM0IDI2cTAgLjg1LS41NzUgMS40MjVRMzIuODUgMjggMzIgMjhabS04IDhxLS44NSAwLTEuNDI1LS41NzVRMjIgMzQuODUgMjIgMzRxMC0uODUuNTc1LTEuNDI1UTIzLjE1IDMyIDI0IDMycS44NSAwIDEuNDI1LjU3NVEyNiAzMy4xNSAyNiAzNHEwIC44NS0uNTc1IDEuNDI1UTI0Ljg1IDM2IDI0IDM2Wm0tOCAwcS0uODUgMC0xLjQyNS0uNTc1UTE0IDM0Ljg1IDE0IDM0cTAtLjg1LjU3NS0xLjQyNVExNS4xNSAzMiAxNiAzMnEuODUgMCAxLjQyNS41NzVRMTggMzMuMTUgMTggMzRxMCAuODUtLjU3NSAxLjQyNVExNi44NSAzNiAxNiAzNlptMTYgMHEtLjg1IDAtMS40MjUtLjU3NVEzMCAzNC44NSAzMCAzNHEwLS44NS41NzUtMS40MjVRMzEuMTUgMzIgMzIgMzJxLjg1IDAgMS40MjUuNTc1UTM0IDMzLjE1IDM0IDM0cTAgLjg1LS41NzUgMS40MjVRMzIuODUgMzYgMzIgMzZaXCIvPjwvc3ZnPmAiLCJleHBvcnQgZGVmYXVsdCBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiNDhcIiB3aWR0aD1cIjQ4XCIgdmlld0JveD1cIjAgMCA0OCA0OFwiPjxwYXRoIGQ9XCJNMTQuMTUgMzAuNzUgMTIgMjguNmwxMi0xMiAxMiAxMS45NS0yLjE1IDIuMTVMMjQgMjAuODVaXCIvPjwvc3ZnPmAiLCJleHBvcnQgZGVmYXVsdCBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiNDhcIiB3aWR0aD1cIjQ4XCIgdmlld0JveD1cIjAgMCA0OCA0OFwiPjxwYXRoIGQ9XCJNOSAzOWgyLjJsMjIuMTUtMjIuMTUtMi4yLTIuMkw5IDM2LjhabTMwLjctMjQuMy02LjQtNi40IDIuMS0yLjFxLjg1LS44NSAyLjEtLjg1dDIuMS44NWwyLjIgMi4ycS44NS44NS44NSAyLjF0LS44NSAyLjFabS0yLjEgMi4xTDEyLjQgNDJINnYtNi40bDI1LjItMjUuMlptLTUuMzUtMS4wNS0xLjEtMS4xIDIuMiAyLjJaXCIvPjwvc3ZnPmAiLCJleHBvcnQgZGVmYXVsdCBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiNDhcIiB3aWR0aD1cIjQ4XCIgdmlld0JveD1cIjAgMCA0OCA0OFwiPjxwYXRoIGQ9XCJtMjQgMzAuNzUtMTItMTIgMi4xNS0yLjE1TDI0IDI2LjVsOS44NS05Ljg1TDM2IDE4LjhaXCIvPjwvc3ZnPmAiLCJleHBvcnQgZGVmYXVsdCBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiNDhcIiB3aWR0aD1cIjQ4XCIgdmlld0JveD1cIjAgMCA0OCA0OFwiPjxwYXRoIGQ9XCJNNy4wNSA0MHEtMS4yIDAtMi4xLS45MjUtLjktLjkyNS0uOS0yLjA3NVYxMXEwLTEuMTUuOS0yLjA3NVE1Ljg1IDggNy4wNSA4aDE0bDMgM2gxN3ExLjE1IDAgMi4wNzUuOTI1LjkyNS45MjUuOTI1IDIuMDc1djIzcTAgMS4xNS0uOTI1IDIuMDc1UTQyLjIgNDAgNDEuMDUgNDBabTAtMjl2MjZoMzRWMTRIMjIuOGwtMy0zSDcuMDVabTAgMHYyNlpcIi8+PC9zdmc+YCIsImV4cG9ydCBkZWZhdWx0IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCI0OFwiIHdpZHRoPVwiNDhcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCI+PHBhdGggZD1cIk04IDQyVjE4TDI0LjEgNiA0MCAxOHYyNEgyOC4zVjI3Ljc1aC04LjY1VjQyWm0zLTNoNS42NVYyNC43NUgzMS4zVjM5SDM3VjE5LjVMMjQuMSA5Ljc1IDExIDE5LjVabTEzLTE0LjY1WlwiLz48L3N2Zz5gIiwiZXhwb3J0IGRlZmF1bHQgYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjQ4XCIgd2lkdGg9XCI0OFwiIHZpZXdCb3g9XCIwIDAgNDggNDhcIj48cGF0aCBkPVwiTTIyLjUgMzhWMjUuNUgxMHYtM2gxMi41VjEwaDN2MTIuNUgzOHYzSDI1LjVWMzhaXCIvPjwvc3ZnPmAiLCJleHBvcnQgZGVmYXVsdCBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiNDhcIiB3aWR0aD1cIjQ4XCIgdmlld0JveD1cIjAgMCA0OCA0OFwiPjxwYXRoIGQ9XCJNMjQgMzRxLjcgMCAxLjE3NS0uNDc1LjQ3NS0uNDc1LjQ3NS0xLjE3NSAwLS43LS40NzUtMS4xNzVRMjQuNyAzMC43IDI0IDMwLjdxLS43IDAtMS4xNzUuNDc1LS40NzUuNDc1LS40NzUgMS4xNzUgMCAuNy40NzUgMS4xNzVRMjMuMyAzNCAyNCAzNFptLTEuMzUtNy42NWgzVjEzLjdoLTNaTTI0IDQ0cS00LjEgMC03Ljc1LTEuNTc1LTMuNjUtMS41NzUtNi4zNzUtNC4zLTIuNzI1LTIuNzI1LTQuMy02LjM3NVE0IDI4LjEgNCAyMy45NXEwLTQuMSAxLjU3NS03Ljc1IDEuNTc1LTMuNjUgNC4zLTYuMzUgMi43MjUtMi43IDYuMzc1LTQuMjc1UTE5LjkgNCAyNC4wNSA0cTQuMSAwIDcuNzUgMS41NzUgMy42NSAxLjU3NSA2LjM1IDQuMjc1IDIuNyAyLjcgNC4yNzUgNi4zNVE0NCAxOS44NSA0NCAyNHEwIDQuMS0xLjU3NSA3Ljc1LTEuNTc1IDMuNjUtNC4yNzUgNi4zNzV0LTYuMzUgNC4zUTI4LjE1IDQ0IDI0IDQ0Wm0uMDUtM3E3LjA1IDAgMTItNC45NzVUNDEgMjMuOTVxMC03LjA1LTQuOTUtMTJUMjQgN3EtNy4wNSAwLTEyLjAyNSA0Ljk1UTcgMTYuOSA3IDI0cTAgNy4wNSA0Ljk3NSAxMi4wMjVRMTYuOTUgNDEgMjQuMDUgNDFaTTI0IDI0WlwiLz48L3N2Zz5gIiwiZXhwb3J0IGRlZmF1bHQgYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjQ4XCIgd2lkdGg9XCI0OFwiIHZpZXdCb3g9XCIwIDAgNDggNDhcIj48cGF0aCBkPVwiTTEzLjA1IDQycS0xLjI1IDAtMi4xMjUtLjg3NVQxMC4wNSAzOVYxMC41SDh2LTNoOS40VjZoMTMuMnYxLjVINDB2M2gtMi4wNVYzOXEwIDEuMi0uOSAyLjEtLjkuOS0yLjEuOVptMjEuOS0zMS41aC0yMS45VjM5aDIxLjlabS0xNi42IDI0LjJoM1YxNC43NWgtM1ptOC4zIDBoM1YxNC43NWgtM1ptLTEzLjYtMjQuMlYzOVpcIi8+PC9zdmc+YCIsImV4cG9ydCBkZWZhdWx0IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCI0OFwiIHdpZHRoPVwiNDhcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCI+PHBhdGggZD1cIk00MiAxMy44NVYzOXEwIDEuMi0uOSAyLjEtLjkuOS0yLjEuOUg5cS0xLjIgMC0yLjEtLjlRNiA0MC4yIDYgMzlWOXEwLTEuMi45LTIuMVE3LjggNiA5IDZoMjUuMTVabS0zIDEuMzVMMzIuOCA5SDl2MzBoMzBaTTI0IDM1Ljc1cTIuMTUgMCAzLjY3NS0xLjUyNVQyOS4yIDMwLjU1cTAtMi4xNS0xLjUyNS0zLjY3NVQyNCAyNS4zNXEtMi4xNSAwLTMuNjc1IDEuNTI1VDE4LjggMzAuNTVxMCAyLjE1IDEuNTI1IDMuNjc1VDI0IDM1Ljc1Wk0xMS42NSAxOC44aDE3Ljl2LTcuMTVoLTE3LjlaTTkgMTUuMlYzOSA5WlwiLz48L3N2Zz5gIiwiZXhwb3J0IGRlZmF1bHQgYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjQ4XCIgd2lkdGg9XCI0OFwiIHZpZXdCb3g9XCIwIDAgNDggNDhcIj48cGF0aCBkPVwibTE2LjE1IDM3Ljc1IDcuODUtNC43IDcuODUgNC43NS0yLjEtOC45IDYuOS02LTkuMS0uOEwyNCAxMy43bC0zLjU1IDguMzUtOS4xLjggNi45IDZaTTExLjY1IDQ0bDMuMjUtMTQuMDVMNCAyMC41bDE0LjQtMS4yNUwyNCA2bDUuNiAxMy4yNUw0NCAyMC41bC0xMC45IDkuNDVMMzYuMzUgNDQgMjQgMzYuNTVaTTI0IDI2LjI1WlwiLz48L3N2Zz5gIiwiaW1wb3J0IFwiLi9jYWxlbmRhclRhYi5jc3NcIlxuaW1wb3J0IENhbGVuZGFyIGZyb20gXCIuLi8uLi9DYWxlbmRhci9DYWxlbmRhclwiXG5pbXBvcnQgTmF2IGZyb20gXCIuLi8uLi9VSS9OYXZcIlxuaW1wb3J0IENvbnZlcnREYXRlIGZyb20gXCIuLi8uLi9VdGlscy9Db252ZXJ0RGF0ZVwiXG5pbXBvcnQgVGFza3NMaXN0IGZyb20gXCIuLi8uLi9UYXNrcy9UYXNrc0xpc3RcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxlbmRhclRhYiB7XG4gICAgc3RhdGljIGh0bWxFbGVtZW50ID0gdGhpcy5jcmVhdGVIdG1sRWxlbWVudCgpXG5cbiAgICBzdGF0aWMgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmNsZWFySHRtbEVsZW1lbnQoKVxuICAgICAgICBjb25zdCB0b2RheSA9IENvbnZlcnREYXRlLnRvWVlZWU1NREQobmV3IERhdGUoKSlcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5hcHBlbmRDaGlsZChDYWxlbmRhci5yZW5kZXIoKSlcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZURhdGVDb250YWluZXIodG9kYXkpKVxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmFwcGVuZENoaWxkKFRhc2tzTGlzdC5yZW5kZXIodG9kYXkpKVxuICAgICAgICBOYXYuc2V0QnV0dG9uQWN0aXZlKFwibmF2LWJ1dHRvbi1jYWxlbmRhclwiKVxuICAgICAgICByZXR1cm4gdGhpcy5odG1sRWxlbWVudFxuICAgIH1cblxuICAgIHN0YXRpYyByZWZyZXNoKGRhdGUpIHtcbiAgICAgICAgQ2FsZW5kYXIuY3JlYXRlV2lkZ2V0KG5ldyBEYXRlKGRhdGUpKVxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVIdG1sRWxlbWVudCgpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2FsZW5kYXItdGFiLWNvbnRhaW5lclwiKVxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgIH1cblxuICAgIHN0YXRpYyBjbGVhckh0bWxFbGVtZW50KCkge1xuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmlubmVySFRNTCA9IFwiXCJcbiAgICB9XG5cbiAgICBzdGF0aWMgdXBkYXRlRGF0ZUNvbnRhaW5lcihkYXRlKSB7XG4gICAgICAgIHRoaXMuY2xlYXJEYXRlQ29udGFpbmVyKClcbiAgICAgICAgdGhpcy5zZXREYXRlQ29udGFpbmVyQ29udGVudChkYXRlKVxuICAgIH1cblxuICAgIHN0YXRpYyBjbGVhckRhdGVDb250YWluZXIoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FsZW5kYXItdGFiLXRhc2tzLWxpc3QtdGl0bGVcIikuaW5uZXJIVE1MID0gXCJcIlxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVEYXRlQ29udGFpbmVyKGRhdGUpIHtcbiAgICAgICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2FsZW5kYXItdGFiLXRhc2tzLWxpc3QtdGl0bGVcIilcbiAgICAgICAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnNldERhdGVDb250YWluZXJDb250ZW50KGRhdGUpKVxuICAgICAgICByZXR1cm4gZGF0ZUNvbnRhaW5lclxuICAgIH1cblxuICAgIHN0YXRpYyBzZXREYXRlQ29udGFpbmVyQ29udGVudChkYXRlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBgVGFza3MgZm9yICR7Q29udmVydERhdGUudG9Nb3JlSHVtYW4oZGF0ZSl9YFxuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICB3cmFwcGVyLnRleHRDb250ZW50ID0gY29udGVudFxuICAgICAgICBjb25zdCBkYXRlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYWxlbmRhci10YWItdGFza3MtbGlzdC10aXRsZVwiKVxuICAgICAgICBpZiAoZGF0ZUNvbnRhaW5lcikgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3cmFwcGVyKVxuICAgICAgICBpZiAoIWRhdGVDb250YWluZXIpIHJldHVybiB3cmFwcGVyXG4gICAgfVxufSIsImltcG9ydCBcIi4vZm9sZGVyc1RhYi5jc3NcIlxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vLi4vVUkvTmF2XCJcbmltcG9ydCBOZXdGb2xkZXJGb3JtIGZyb20gXCIuLi8uLi9Gb3Jtcy9zdWJjb21wb25lbnRzL05ld0ZvbGRlckZvcm1cIlxuaW1wb3J0IE1haW4gZnJvbSBcIi4uLy4uL1VJL01haW5cIlxuaW1wb3J0IEZvbGRlcnNMaXN0IGZyb20gXCIuLi8uLi9Gb2xkZXJzL0ZvbGRlcnNMaXN0XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9sZGVyc1RhYiB7XG4gICAgc3RhdGljIGh0bWxFbGVtZW50ID0gdGhpcy5jcmVhdGVIdG1sRWxlbWVudCgpXG5cbiAgICBzdGF0aWMgcmVuZGVyKGZvbGRlcklkKSB7XG4gICAgICAgIHRoaXMuY2xlYXJIdG1sRWxlbWVudCgpXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVOZXdGb2xkZXJCdXR0b24oKSlcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5hcHBlbmRDaGlsZChGb2xkZXJzTGlzdC5yZW5kZXIoZm9sZGVySWQpKVxuICAgICAgICBOYXYuc2V0QnV0dG9uQWN0aXZlKFwibmF2LWJ1dHRvbi1mb2xkZXJzXCIpXG4gICAgICAgIHJldHVybiB0aGlzLmh0bWxFbGVtZW50XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUh0bWxFbGVtZW50KCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmb2xkZXJzLXRhYi1jb250YWluZXJcIilcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xlYXJIdG1sRWxlbWVudCgpIHtcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZU5ld0ZvbGRlckJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgbmV3Rm9sZGVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICBuZXdGb2xkZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcImZvbGRlci1uZXctYnV0dG9uXCIpXG4gICAgICAgIG5ld0ZvbGRlckJ1dHRvbi50ZXh0Q29udGVudCA9IFwiKyBBZGQgZm9sZGVyXCJcbiAgICAgICAgbmV3Rm9sZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBNYWluLnNob3dTbGlkZUNvbnRlbnQobmV3IE5ld0ZvbGRlckZvcm0oKS5yZW5kZXIoKSkpXG5cbiAgICAgICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvbGRlci1uZXctYnV0dG9uLXdyYXBwZXJcIilcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0ZvbGRlckJ1dHRvbilcblxuICAgICAgICByZXR1cm4gYnV0dG9uQ29udGFpbmVyXG4gICAgfVxufSIsImltcG9ydCBOYXYgZnJvbSBcIi4uLy4uL1VJL05hdlwiXG5pbXBvcnQgXCIuL2hvbWVUYWIuY3NzXCJcbmltcG9ydCBUYXNrc092ZXJ2aWV3IGZyb20gXCIuLi8uLi9UYXNrcy9UYXNrc092ZXJ2aWV3XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZVRhYiB7XG4gICAgc3RhdGljIGh0bWxFbGVtZW50ID0gdGhpcy5jcmVhdGVIdG1sRWxlbWVudCgpXG5cbiAgICBzdGF0aWMgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmNsZWFySHRtbEVsZW1lbnQoKVxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlQ29udGVudCgpKVxuICAgICAgICBOYXYuc2V0QnV0dG9uQWN0aXZlKFwibmF2LWJ1dHRvbi1ob21lXCIpXG4gICAgICAgIHJldHVybiB0aGlzLmh0bWxFbGVtZW50XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUh0bWxFbGVtZW50KCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJob21lLXRhYi1jb250YWluZXJcIilcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xlYXJIdG1sRWxlbWVudCgpIHtcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUNvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IGhvbWVDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBob21lQ29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaG9tZS1jb250ZW50LWNvbnRhaW5lclwiKVxuXG4gICAgICAgIGhvbWVDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlSGVhZGVyKCkpXG4gICAgICAgIGhvbWVDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKFRhc2tzT3ZlcnZpZXcuY3JlYXRlV2lkZ2V0KCkpXG5cbiAgICAgICAgcmV0dXJuIGhvbWVDb250ZW50Q29udGFpbmVyXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUhlYWRlcigpIHtcbiAgICAgICAgY29uc3Qgd2VsY29tZU1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICAgICAgd2VsY29tZU1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlRvLURvIExpc3RcIlxuXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIilcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHdlbGNvbWVNZXNzYWdlKVxuXG4gICAgICAgIHJldHVybiBoZWFkZXJcbiAgICB9XG59IiwiaW1wb3J0IHsgbmFub2lkIH0gZnJvbSBcIm5hbm9pZFwiXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSBcIi4uL0NhbGVuZGFyL0NhbGVuZGFyXCJcbmltcG9ydCBFZGl0VGFza0Zvcm0gZnJvbSBcIi4uL0Zvcm1zL3N1YmNvbXBvbmVudHMvRWRpdFRhc2tGb3JtXCJcbmltcG9ydCBMb2NhbFN0b3JhZ2UgZnJvbSBcIi4uL1V0aWxzL0xvY2FsU3RvcmFnZVwiXG5pbXBvcnQgVGFza3NMaXN0IGZyb20gXCIuL1Rhc2tzTGlzdFwiXG5pbXBvcnQgQ2FsZW5kYXJUYWIgZnJvbSBcIi4uL1RhYnMvQ2FsZW5kYXIvQ2FsZW5kYXJUYWJcIlxuaW1wb3J0IEZvbGRlcnNMaXN0IGZyb20gXCIuLi9Gb2xkZXJzL0ZvbGRlcnNMaXN0XCJcbmltcG9ydCBcIi4vdGFzay5jc3NcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkdWVEYXRlKSB7XG4gICAgICAgIHRoaXMuaWQgPSBuYW5vaWQoKVxuICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZVxuICAgICAgICB0aGlzLmltcG9ydGFudCA9IGZhbHNlXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQodGFza0lkKSB7XG4gICAgICAgIGNvbnN0IGZvbGRlcnMgPSBMb2NhbFN0b3JhZ2UuZ2V0KClcbiAgICAgICAgbGV0IHdhbnRlZFRhc2tcbiAgICAgICAgbGV0IHdhbnRlZEZvbGRlclxuICAgICAgICBmb2xkZXJzLmZvckVhY2goZm9sZGVyID0+IHtcbiAgICAgICAgICAgIGZvbGRlci50YXNrcy5maWx0ZXIodGFzayA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2suaWQgPT09IHRhc2tJZCkge1xuICAgICAgICAgICAgICAgICAgICB3YW50ZWRUYXNrID0gdGFza1xuICAgICAgICAgICAgICAgICAgICB3YW50ZWRGb2xkZXIgPSBmb2xkZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4geyB0YXNrOiB3YW50ZWRUYXNrLCBmb2xkZXI6IHdhbnRlZEZvbGRlciB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEFsbCgpIHtcbiAgICAgICAgY29uc3QgZm9sZGVycyA9IExvY2FsU3RvcmFnZS5nZXQoKVxuICAgICAgICBjb25zdCB0YXNrcyA9IFtdXG4gICAgICAgIGZvbGRlcnMuZm9yRWFjaChmb2xkZXIgPT4ge1xuICAgICAgICAgICAgZm9sZGVyLnRhc2tzLmZpbHRlcih0YXNrID0+IHtcbiAgICAgICAgICAgICAgICB0YXNrcy5wdXNoKHRhc2spXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdGFza3NcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0QWxsUGVuZGluZ1Rhc2tzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBbGwoKS5maWx0ZXIodGFzayA9PiAhdGFzay5jaGVja2VkKVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRBbGxDb21wbGV0ZWRUYXNrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QWxsKCkuZmlsdGVyKHRhc2sgPT4gdGFzay5jaGVja2VkKVxuICAgIH1cblxuICAgIHN0YXRpYyBhZGQodGFzaywgZm9sZGVySWQpIHtcbiAgICAgICAgY29uc3QgZm9sZGVyID0gTG9jYWxTdG9yYWdlLmdldEZvbGRlcihmb2xkZXJJZClcbiAgICAgICAgZm9sZGVyLnRhc2tzLnVuc2hpZnQodGFzaylcbiAgICAgICAgTG9jYWxTdG9yYWdlLnNhdmVGb2xkZXIoZm9sZGVyKVxuICAgIH1cblxuICAgIHN0YXRpYyBjaGVjayh0YXNrSWQpIHtcbiAgICAgICAgY29uc3QgeyB0YXNrLCBmb2xkZXIgfSA9IHRoaXMuZ2V0KHRhc2tJZClcbiAgICAgICAgZm9sZGVyLnRhc2tzLmZpbmQoaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gdGFzay5pZCkge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2hlY2tlZCA9ICFpdGVtLmNoZWNrZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgTG9jYWxTdG9yYWdlLnNhdmVGb2xkZXIoZm9sZGVyKVxuICAgICAgICBDYWxlbmRhclRhYi5yZWZyZXNoKHRhc2suZHVlRGF0ZSlcbiAgICAgICAgRm9sZGVyc0xpc3QucmVmcmVzaChmb2xkZXIuaWQpXG4gICAgICAgIFRhc2tzTGlzdC51cGRhdGUodGFzay5kdWVEYXRlKVxuICAgIH1cblxuICAgIHN0YXRpYyBpbXBvcnRhbnQodGFza0lkKSB7XG4gICAgICAgIGNvbnN0IHsgdGFzaywgZm9sZGVyIH0gPSB0aGlzLmdldCh0YXNrSWQpXG4gICAgICAgIGZvbGRlci50YXNrcy5maW5kKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IHRhc2suaWQpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmltcG9ydGFudCA9ICFpdGVtLmltcG9ydGFudFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBMb2NhbFN0b3JhZ2Uuc2F2ZUZvbGRlcihmb2xkZXIpXG4gICAgICAgIENhbGVuZGFyVGFiLnJlZnJlc2godGFzay5kdWVEYXRlKVxuICAgICAgICBGb2xkZXJzTGlzdC5yZWZyZXNoKGZvbGRlci5pZClcbiAgICAgICAgVGFza3NMaXN0LnVwZGF0ZSh0YXNrLmR1ZURhdGUpXG4gICAgfVxuXG4gICAgc3RhdGljIGVkaXQoZm9sZGVyLCB0YXNrKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhc2staWQ9XCIke3Rhc2suaWR9XCJdYClcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgY29uc3QgZm9ybSA9IG5ldyBFZGl0VGFza0Zvcm0odGFzaywgZm9sZGVyKVxuICAgICAgICBmb3JtLnJlbmRlcigpLmZvckVhY2goZWxlbWVudCA9PiBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCkpXG4gICAgfVxuXG4gICAgc3RhdGljIHJlbW92ZShmb2xkZXIsIHRhc2spIHtcbiAgICAgICAgZm9sZGVyLnRhc2tzID0gZm9sZGVyLnRhc2tzLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IHRhc2suaWQpXG4gICAgICAgIExvY2FsU3RvcmFnZS5zYXZlRm9sZGVyKGZvbGRlcilcbiAgICAgICAgQ2FsZW5kYXIuY3JlYXRlV2lkZ2V0KG5ldyBEYXRlKHRhc2suZHVlRGF0ZSkpXG4gICAgfVxuXG4gICAgc3RhdGljIGZpbmRUYXNrc0ZvckRhdGUoZGF0ZSkge1xuICAgICAgICBjb25zdCBmb2xkZXJzID0gTG9jYWxTdG9yYWdlLmdldCgpXG4gICAgICAgIGNvbnN0IHRhc2tzID0gW11cbiAgICAgICAgY29uc3QgdGFza3NEb25lID0gW11cbiAgICAgICAgZm9sZGVycy5mb3JFYWNoKGZvbGRlciA9PiB7XG4gICAgICAgICAgICBmb2xkZXIudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5kdWVEYXRlID09PSBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tzRG9uZS5wdXNoKHsgdGFzaywgZm9sZGVyIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXNrLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tzLnB1c2goeyB0YXNrLCBmb2xkZXIgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0YXNrcy5jb25jYXQodGFza3NEb25lKVxuICAgIH1cbn0iLCJpbXBvcnQgTmV3VGFza0Zvcm0gZnJvbSBcIi4uL0Zvcm1zL3N1YmNvbXBvbmVudHMvTmV3VGFza0Zvcm1cIlxuaW1wb3J0IEVkaXRUYXNrRm9ybSBmcm9tIFwiLi4vRm9ybXMvc3ViY29tcG9uZW50cy9FZGl0VGFza0Zvcm1cIlxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFza1wiXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi4vVUkvTWFpblwiXG5pbXBvcnQgRm9sZGVySWNvbiBmcm9tICcuLi9JY29ucy9mb2xkZXInXG5pbXBvcnQgU3Rhckljb24gZnJvbSBcIi4uL0ljb25zL3N0YXJcIlxuaW1wb3J0IEZvbGRlciBmcm9tIFwiLi4vRm9sZGVycy9Gb2xkZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrc0xpc3Qge1xuICAgIHN0YXRpYyBodG1sRWxlbWVudCA9IHRoaXMuY3JlYXRlSHRtbEVsZW1lbnQoKVxuXG4gICAgc3RhdGljIHJlbmRlcihkYXRlKSB7XG4gICAgICAgIHRoaXMuY2xlYXJIdG1sRWxlbWVudCgpXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVOZXdUYXNrQnV0dG9uKGRhdGUpKVxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuc2hvd1Rhc2tzKFRhc2suZmluZFRhc2tzRm9yRGF0ZShkYXRlKSwgZGF0ZSkpXG4gICAgICAgIHJldHVybiB0aGlzLmh0bWxFbGVtZW50XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUh0bWxFbGVtZW50KCkge1xuICAgICAgICBjb25zdCBodG1sRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgaHRtbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2tzLWxpc3QtY29udGFpbmVyXCIpXG4gICAgICAgIHJldHVybiBodG1sRWxlbWVudFxuICAgIH1cblxuICAgIHN0YXRpYyBjbGVhckh0bWxFbGVtZW50KCkge1xuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmlubmVySFRNTCA9IFwiXCJcbiAgICB9XG5cbiAgICBzdGF0aWMgdXBkYXRlKGRhdGUpIHtcbiAgICAgICAgdGhpcy5jbGVhckh0bWxFbGVtZW50KClcbiAgICAgICAgdGhpcy5jcmVhdGVIdG1sRWxlbWVudCgpXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVOZXdUYXNrQnV0dG9uKGRhdGUpKVxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuc2hvd1Rhc2tzKFRhc2suZmluZFRhc2tzRm9yRGF0ZShkYXRlKSwgZGF0ZSkpXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUxpc3QoKSB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcbiAgICAgICAgbGlzdC5jbGFzc0xpc3QuYWRkKFwidGFza3MtbGlzdFwiKVxuICAgICAgICByZXR1cm4gbGlzdFxuICAgIH1cblxuICAgIHN0YXRpYyBzaG93VGFza3ModGFza3MpIHtcbiAgICAgICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRW1wdHlMaXN0TWVzc2FnZSgpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMuY3JlYXRlTGlzdCgpXG4gICAgICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHRoaXMuYWRkVGFza1RvTGlzdChsaXN0LCB0YXNrKSlcbiAgICAgICAgcmV0dXJuIGxpc3RcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkVGFza1RvTGlzdChsaXN0LCB7IHRhc2ssIGZvbGRlciB9KSB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlVGFza0h0bWxFbGVtZW50KHRhc2ssIGZvbGRlcikpXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUVtcHR5TGlzdE1lc3NhZ2UoKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcbiAgICAgICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwidGFza3MtbGlzdFwiLCBcInRhc2tzLWxpc3QtZW1wdHlcIilcbiAgICAgICAgbWVzc2FnZS5pbm5lckhUTUwgPSBcIk5vIHRhc2tzLiA8YnI+IENsaWNrICsgYnV0dG9uIHRvIGNyZWF0ZSBvbmUuXCJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2VcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlTmV3VGFza0J1dHRvbihkYXRlKSB7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIG5ld1Rhc2tCdXR0b24uY2xhc3NMaXN0LmFkZChcImZsb2F0aW5nLWJ1dHRvblwiKVxuICAgICAgICBuZXdUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gXCIrXCJcbiAgICAgICAgbmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gTWFpbi5zaG93U2xpZGVDb250ZW50KG5ldyBOZXdUYXNrRm9ybShkYXRlKS5yZW5kZXIoKSkpXG4gICAgICAgIHJldHVybiBuZXdUYXNrQnV0dG9uXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVRhc2tIdG1sRWxlbWVudCh0YXNrLCBmb2xkZXIpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stY29udGFpbmVyXCIpXG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staWRcIiwgdGFzay5pZClcbiAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gbmV3IEVkaXRUYXNrRm9ybSh0YXNrLmlkKVxuICAgICAgICAgICAgTWFpbi5zaG93U2xpZGVDb250ZW50KGZvcm0ucmVuZGVyKCkpXG4gICAgICAgICAgICBmb3JtLmNyZWF0ZVJlbW92ZVRhc2tCdXR0b24oKVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICBjaGVjay5jbGFzc0xpc3QuYWRkKFwidGFzay1jaGVjay1idXR0b25cIilcbiAgICAgICAgY2hlY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4gdGhpcy5oYW5kbGVDaGVja0J1dHRvbkNsaWNrKGUsIHRhc2suaWQpKVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2spXG5cbiAgICAgICAgaWYgKHRhc2suY2hlY2tlZCkge1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lci1jaGVja2VkXCIpXG4gICAgICAgICAgICBjaGVjay5jbGFzc0xpc3QuYWRkKFwidGFzay1jaGVjay1idXR0b24tY2hlY2tlZFwiKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZm9sZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBmb2xkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stZm9sZGVyLW5hbWVcIilcbiAgICAgICAgZm9sZGVyQ29udGFpbmVyLmlubmVySFRNTCA9IEZvbGRlckljb25cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvbGRlckNvbnRhaW5lcilcbiAgICAgICAgZm9sZGVyQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHRoaXMuaGFuZGxlRm9sZGVyQ2xpY2soZSwgZm9sZGVyLmlkKSlcblxuICAgICAgICBjb25zdCBmb2xkZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgZm9sZGVyTmFtZS50ZXh0Q29udGVudCA9ICBmb2xkZXIubmFtZVxuICAgICAgICBmb2xkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9sZGVyTmFtZSlcblxuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRleHRcIilcbiAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IHRhc2submFtZVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZSlcblxuICAgICAgICBjb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIGltcG9ydGFudC5jbGFzc0xpc3QuYWRkKFwidGFzay1pbXBvcnRhbnQtYnV0dG9uXCIpXG4gICAgICAgIGltcG9ydGFudC5pbm5lckhUTUwgPSBTdGFySWNvblxuICAgICAgICBpbXBvcnRhbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4gdGhpcy5oYW5kbGVJbXBvcnRhbnRCdXR0b25DbGljayhlLCB0YXNrLmlkKSlcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltcG9ydGFudClcblxuICAgICAgICBpZiAodGFzay5pbXBvcnRhbnQpIHtcbiAgICAgICAgICAgIGltcG9ydGFudC5jbGFzc0xpc3QuYWRkKFwidGFzay1pbXBvcnRhbnQtYnV0dG9uLWFjdGl2ZVwiKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lclxuICAgIH1cblxuICAgIHN0YXRpYyBoYW5kbGVGb2xkZXJDbGljayhlLCBmb2xkZXJJZCkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIEZvbGRlci5zaG93KGZvbGRlcklkKVxuICAgIH1cblxuICAgIHN0YXRpYyBoYW5kbGVDaGVja0J1dHRvbkNsaWNrKGUsIHRhc2tJZCkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIFRhc2suY2hlY2sodGFza0lkKVxuICAgIH1cblxuICAgIHN0YXRpYyBoYW5kbGVJbXBvcnRhbnRCdXR0b25DbGljayhlLCB0YXNrSWQpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBUYXNrLmltcG9ydGFudCh0YXNrSWQpXG4gICAgfVxufSIsImltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIlxuaW1wb3J0IENvbnZlcnREYXRlIGZyb20gXCIuLi9VdGlscy9Db252ZXJ0RGF0ZVwiXG5pbXBvcnQgRm9sZGVyIGZyb20gXCIuLi9Gb2xkZXJzL0ZvbGRlclwiXG5pbXBvcnQgU3Rhckljb24gZnJvbSBcIi4uL0ljb25zL3N0YXJcIlxuaW1wb3J0IENhbGVuZGFySWNvbiBmcm9tIFwiLi4vSWNvbnMvY2FsZW5kYXJcIlxuaW1wb3J0IFByaW9yaXR5SWNvbiBmcm9tIFwiLi4vSWNvbnMvcHJpb3JpdHlcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrc092ZXJ2aWV3IHtcblxuICAgIHN0YXRpYyBjcmVhdGVXaWRnZXQoKSB7XG4gICAgICAgIGNvbnN0IHRhc2tzT3ZlcnZpZXdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKVxuICAgICAgICB0YXNrc092ZXJ2aWV3Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrcy1vdmVydmlldy1jb250YWluZXJcIilcblxuICAgICAgICB0YXNrc092ZXJ2aWV3Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlVGFza3NPdmVydmlld0xhYmVsKCkpXG5cbiAgICAgICAgdGFza3NPdmVydmlld0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVRhc2tDb3VudGVyV2lkZ2V0KFRhc2suZ2V0QWxsUGVuZGluZ1Rhc2tzKCkubGVuZ3RoLCBcIlBlbmRpbmcgdGFza3NcIikpXG4gICAgICAgIHRhc2tzT3ZlcnZpZXdDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVUYXNrQ291bnRlcldpZGdldChUYXNrLmdldEFsbENvbXBsZXRlZFRhc2tzKCkubGVuZ3RoLCBcIkNvbXBsZXRlZCB0YXNrc1wiKSlcblxuICAgICAgICB0YXNrc092ZXJ2aWV3Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlSW1wb3J0YW50VGFza3NXaWRnZXQoKSlcbiAgICAgICAgdGFza3NPdmVydmlld0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVVwY29taW5nVGFza3NXaWRnZXQoMCkpXG4gICAgICAgIHRhc2tzT3ZlcnZpZXdDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVVcGNvbWluZ1Rhc2tzV2lkZ2V0KDcpKVxuICAgICAgICB0YXNrc092ZXJ2aWV3Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlTWlzc2VkVGFza3NXaWRnZXQoKSlcblxuXG4gICAgICAgIHJldHVybiB0YXNrc092ZXJ2aWV3Q29udGFpbmVyXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVRhc2tzT3ZlcnZpZXdMYWJlbCgpIHtcbiAgICAgICAgY29uc3QgdGFza3NPdmVydmlld0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICB0YXNrc092ZXJ2aWV3TGFiZWwuY2xhc3NMaXN0LmFkZChcImhvbWUtc2VjdGlvbi1sYWJlbFwiKVxuICAgICAgICB0YXNrc092ZXJ2aWV3TGFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2tzIG92ZXJ2aWV3XCJcbiAgICAgICAgcmV0dXJuIHRhc2tzT3ZlcnZpZXdMYWJlbFxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVUYXNrQ291bnRlcldpZGdldChudW1iZXIsIGxhYmVsKSB7XG4gICAgICAgIGNvbnN0IHRhc2tDb3VudGVyV2lkZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICB0YXNrQ291bnRlcldpZGdldC5jbGFzc0xpc3QuYWRkKFwidGFzay13aWRnZXRcIiwgXCJ0YXNrLWNvdW50ZXItd2lkZ2V0XCIpXG5cbiAgICAgICAgY29uc3QgdGFza0NvdW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIHRhc2tDb3VudGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvdW50ZXJcIilcbiAgICAgICAgdGFza0NvdW50ZXIudGV4dENvbnRlbnQgPSBudW1iZXJcbiAgICAgICAgdGFza0NvdW50ZXJXaWRnZXQuYXBwZW5kQ2hpbGQodGFza0NvdW50ZXIpXG5cbiAgICAgICAgY29uc3QgdGFza0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICB0YXNrTGFiZWwuY2xhc3NMaXN0LmFkZChcImhvbWUtd2lkZ2V0LWxhYmVsXCIpXG4gICAgICAgIHRhc2tMYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsXG4gICAgICAgIHRhc2tDb3VudGVyV2lkZ2V0LmFwcGVuZENoaWxkKHRhc2tMYWJlbClcblxuICAgICAgICByZXR1cm4gdGFza0NvdW50ZXJXaWRnZXRcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlVXBjb21pbmdUYXNrc1dpZGdldChudW1iZXJPZkRheXMpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jcmVhdGVMaXN0V2lkZ2V0KClcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcblxuICAgICAgICBpZiAobnVtYmVyT2ZEYXlzID09PSAwKSB7XG4gICAgICAgICAgICBjb250YWluZXIuY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9IFwiVGFza3MgZm9yIHRvZGF5XCJcblxuICAgICAgICAgICAgY29uc3QgdGFza3MgPSBUYXNrLmZpbmRUYXNrc0ZvckRhdGUoQ29udmVydERhdGUudG9ZWVlZTU1ERChkYXRlKSlcbiAgICAgICAgICAgIHRhc2tzLmZvckVhY2goKHsgdGFzaywgZm9sZGVyIH0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhc2suY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuY2hpbGROb2Rlc1sxXS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUxpc3RXaWRnZXRMaXN0SXRlbSh0YXNrLCBmb2xkZXIpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHJldHVybiBjb250YWluZXJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChudW1iZXJPZkRheXMgIT09IDApIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID0gYFRhc2tzIGZvciBuZXh0ICR7bnVtYmVyT2ZEYXlzID4gMSA/IGAke251bWJlck9mRGF5c30gZGF5c2AgOiBcImRheVwifWBcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZkRheXM7IGkrKykge1xuICAgICAgICAgICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDEpXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza3MgPSBUYXNrLmZpbmRUYXNrc0ZvckRhdGUoQ29udmVydERhdGUudG9ZWVlZTU1ERChkYXRlKSlcbiAgICAgICAgICAgICAgICB0YXNrcy5mb3JFYWNoKCh7IHRhc2ssIGZvbGRlciB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGFzay5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuY2hpbGROb2Rlc1sxXS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUxpc3RXaWRnZXRMaXN0SXRlbSh0YXNrLCBmb2xkZXIpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lclxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUltcG9ydGFudFRhc2tzV2lkZ2V0KCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNyZWF0ZUxpc3RXaWRnZXQoKVxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxuICAgICAgICBjb250YWluZXIuY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9IFwiVXBjb21pbmcgaW1wb3J0YW50IHRhc2tzXCJcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGFza3MgPSBUYXNrLmZpbmRUYXNrc0ZvckRhdGUoQ29udmVydERhdGUudG9ZWVlZTU1ERChkYXRlKSlcbiAgICAgICAgICAgIHRhc2tzLmZvckVhY2goKHsgdGFzaywgZm9sZGVyIH0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5pbXBvcnRhbnQgJiYgIXRhc2suY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuY2hpbGROb2Rlc1sxXS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUxpc3RXaWRnZXRMaXN0SXRlbSh0YXNrLCBmb2xkZXIsIFN0YXJJY29uKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb250YWluZXJcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlTWlzc2VkVGFza3NXaWRnZXQoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY3JlYXRlTGlzdFdpZGdldCgpXG4gICAgICAgIGNvbnRhaW5lci5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID0gXCJNaXNzZWQgdGFza3NcIlxuXG4gICAgICAgIGNvbnN0IHRhc2tzID0gVGFzay5nZXRBbGxQZW5kaW5nVGFza3MoKVxuICAgICAgICB0YXNrcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKCFpdGVtLmNoZWNrZWQgJiYgbmV3IERhdGUoaXRlbS5kdWVEYXRlKSA8IG5ldyBEYXRlKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHRhc2ssIGZvbGRlciB9ID0gVGFzay5nZXQoaXRlbS5pZClcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2hpbGROb2Rlc1sxXS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUxpc3RXaWRnZXRMaXN0SXRlbSh0YXNrLCBmb2xkZXIsIFByaW9yaXR5SWNvbikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lclxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVMaXN0V2lkZ2V0KCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay13aWRnZXRcIiwgXCJ1cGNvbWluZy10YXNrcy13aWdkZXRcIilcblxuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcImhvbWUtd2lkZ2V0LWxhYmVsXCIsIFwidXBjb21pbmctdGFza3MtbGFiZWxcIilcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpXG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lclxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVMaXN0V2lkZ2V0TGlzdEl0ZW0odGFzaywgZm9sZGVyLCBpY29uKSB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJ1cGNvbWluZy10YXNrXCIpXG5cbiAgICAgICAgY29uc3QgY2FsZW5kYXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjYWxlbmRhckljb24uaW5uZXJIVE1MID0gaWNvbiB8fCBDYWxlbmRhckljb25cbiAgICAgICAgY2FsZW5kYXJJY29uLmNsYXNzTGlzdC5hZGQoXCJ1cGNvbWluZy10YXNrLWljb25cIilcbiAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY2FsZW5kYXJJY29uKVxuXG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSB0YXNrLm5hbWVcbiAgICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwidXBjb21pbmctdGFzay1uYW1lXCIpXG4gICAgICAgIG5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IEZvbGRlci5zaG93KGZvbGRlci5pZCkpXG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKG5hbWUpXG5cbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IENvbnZlcnREYXRlLllZWVlNTUREdG9ERE1NKHRhc2suZHVlRGF0ZSlcbiAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidXBjb21pbmctdGFzay1kYXRlXCIpXG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGR1ZURhdGUpXG5cbiAgICAgICAgcmV0dXJuIGxpc3RJdGVtXG4gICAgfVxufSIsImltcG9ydCBBcnJvd0JhY2tJY29uIGZyb20gJy4uL0ljb25zL2Fycm93LWJhY2snXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1haW5cbiAgICB9XG5cbiAgICBzdGF0aWMgcmVuZGVyKG91dHB1dCkge1xuICAgICAgICB0aGlzLm1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKVxuICAgICAgICBvdXRwdXQuYXBwZW5kQ2hpbGQodGhpcy5tYWluKVxuICAgIH1cblxuICAgIHN0YXRpYyBjaGFuZ2VDb250ZW50KGNvbnRlbnQpIHtcbiAgICAgICAgaWYodGhpcy5tYWluLnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGUtY29udGFpbmVyXCIpKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlU2xpZGVDb250YWluZXIoKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubWFpbi5pbm5lckhUTUwgPSBcIlwiXG4gICAgICAgIHRoaXMubWFpbi5hcHBlbmRDaGlsZChjb250ZW50KVxuICAgIH1cblxuICAgIHN0YXRpYyBzaG93U2xpZGVDb250ZW50KGNvbnRlbnQpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jcmVhdGVTbGlkZUNvbnRhaW5lcigpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIilcbiAgICAgICAgdGhpcy5tYWluLmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlU2xpZGVDb250YWluZXIoKSB7XG4gICAgICAgIGNvbnN0IHNsaWRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBzbGlkZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2xpZGUtY29udGFpbmVyXCIsIFwic2xpZGUtaW5cIilcblxuICAgICAgICBjb25zdCBiYWNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICBiYWNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzbGlkZS1iYWNrLWJ1dHRvblwiKVxuICAgICAgICBiYWNrQnV0dG9uLmlubmVySFRNTCA9IEFycm93QmFja0ljb25cbiAgICAgICAgc2xpZGVDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFja0J1dHRvbilcblxuICAgICAgICBiYWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmNsb3NlU2xpZGVDb250YWluZXIoKSlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVFc2NDbGljaywgdHJ1ZSlcblxuICAgICAgICByZXR1cm4gc2xpZGVDb250YWluZXJcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xvc2VTbGlkZUNvbnRhaW5lcigpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZS1jb250YWluZXJcIilcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVFc2NDbGljaywgdHJ1ZSlcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZS1pblwiKVxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNsaWRlLW91dFwiKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIilcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjb250YWluZXIucmVtb3ZlKCksIDUwMClcbiAgICB9XG5cbiAgICBzdGF0aWMgaGFuZGxlRXNjQ2xpY2soZSkge1xuICAgICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgICAgIE1haW4uY2xvc2VTbGlkZUNvbnRhaW5lcigpXG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IEhvbWVJY29uIGZyb20gXCIuLi9JY29ucy9ob21lXCJcbmltcG9ydCBDYWxlbmRhckljb24gZnJvbSBcIi4uL0ljb25zL2NhbGVuZGFyXCJcbmltcG9ydCBGb2xkZXJJY29uIGZyb20gXCIuLi9JY29ucy9mb2xkZXJcIlxuaW1wb3J0IE1haW4gZnJvbSBcIi4vTWFpblwiXG5pbXBvcnQgSG9tZVRhYiBmcm9tIFwiLi4vVGFicy9Ib21lVGFiLmpzL0hvbWVUYWJcIlxuaW1wb3J0IENhbGVuZGFyVGFiIGZyb20gXCIuLi9UYWJzL0NhbGVuZGFyL0NhbGVuZGFyVGFiXCJcbmltcG9ydCBGb2xkZXJzVGFiIGZyb20gXCIuLi9UYWJzL0ZvbGRlcnMvRm9sZGVyc1RhYlwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdiB7XG5cbiAgICBzdGF0aWMgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKVxuXG4gICAgc3RhdGljIHJlbmRlcihvdXRwdXQpIHtcbiAgICAgICAgdGhpcy5uYXYuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVDb250cm9sc1BhbmVsKCkpXG4gICAgICAgIG91dHB1dC5hcHBlbmRDaGlsZCh0aGlzLm5hdilcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQ29udHJvbHNQYW5lbCgpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibmF2LWJ1dHRvbnMtd3JhcHBlclwiKVxuXG4gICAgICAgIGNvbnN0IGJ1dHRvbnNBcnJheSA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpY29uOiBIb21lSWNvbixcbiAgICAgICAgICAgICAgICB0ZXh0OiBcImhvbWVcIixcbiAgICAgICAgICAgICAgICBjbGlja0hhbmRsZXI6ICgpID0+IE1haW4uY2hhbmdlQ29udGVudChIb21lVGFiLnJlbmRlcigpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpY29uOiBDYWxlbmRhckljb24sXG4gICAgICAgICAgICAgICAgdGV4dDogXCJjYWxlbmRhclwiLFxuICAgICAgICAgICAgICAgIGNsaWNrSGFuZGxlcjogKCkgPT4gTWFpbi5jaGFuZ2VDb250ZW50KENhbGVuZGFyVGFiLnJlbmRlcigpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpY29uOiBGb2xkZXJJY29uLFxuICAgICAgICAgICAgICAgIHRleHQ6IFwiZm9sZGVyc1wiLFxuICAgICAgICAgICAgICAgIGNsaWNrSGFuZGxlcjogKCkgPT4gTWFpbi5jaGFuZ2VDb250ZW50KEZvbGRlcnNUYWIucmVuZGVyKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICBdXG5cbiAgICAgICAgYnV0dG9uc0FycmF5LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlQnV0dG9uKGl0ZW0pKVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiB3cmFwcGVyXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUJ1dHRvbih7IGljb24sIHRleHQsIGNsaWNrSGFuZGxlciB9KSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnV0dG9uXCIpXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgbmF2LWJ1dHRvbi0ke3RleHR9YClcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrKGJ1dHRvbiwgY2xpY2tIYW5kbGVyKSlcblxuICAgICAgICBjb25zdCBpY29uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBpY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnV0dG9uLWljb24tY29udGFpbmVyXCIpXG4gICAgICAgIGljb25Db250YWluZXIuaW5uZXJIVE1MID0gaWNvblxuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoaWNvbkNvbnRhaW5lcilcblxuICAgICAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICB0ZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnV0dG9uLXRleHQtY29udGFpbmVyXCIpXG4gICAgICAgIHRleHRDb250YWluZXIudGV4dENvbnRlbnQgPSB0ZXh0XG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZCh0ZXh0Q29udGFpbmVyKVxuXG4gICAgICAgIHJldHVybiBidXR0b25cbiAgICB9XG5cbiAgICBzdGF0aWMgcmVtb3ZlQWN0aXZlQ2xhc3NGcm9tQnV0dG9ucygpIHtcbiAgICAgICAgdGhpcy5uYXYucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKS5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1idXR0b24tYWN0aXZlXCIpKVxuICAgIH1cblxuICAgIHN0YXRpYyBzZXRCdXR0b25BY3RpdmUoaWQpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVBY3RpdmVDbGFzc0Zyb21CdXR0b25zKClcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCkuY2xhc3NMaXN0LmFkZChcIm5hdi1idXR0b24tYWN0aXZlXCIpXG4gICAgfVxuXG4gICAgc3RhdGljIGhhbmRsZUJ1dHRvbkNsaWNrKGJ1dHRvbiwgY2xpY2tIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuc2V0QnV0dG9uQWN0aXZlKGJ1dHRvbi5pZClcbiAgICAgICAgY2xpY2tIYW5kbGVyKClcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udmVydERhdGUge1xuICAgIHN0YXRpYyB0b1lZWVlNTUREKGRhdGUpIHtcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxuICAgICAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDEgPCAxMCA/IFwiMFwiICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpIDogZGF0ZS5nZXRNb250aCgpICsgMVxuICAgICAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKSA8IDEwID8gXCIwXCIgKyAoZGF0ZS5nZXREYXRlKCkpIDogZGF0ZS5nZXREYXRlKClcbiAgICAgICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWBcbiAgICB9XG5cbiAgICBzdGF0aWMgWVlZWU1NRER0b0RETU0oZGF0ZSkge1xuICAgICAgICByZXR1cm4gYCR7ZGF0ZS5zbGljZSgtMil9LSR7ZGF0ZS5zbGljZSg1LDcpfWBcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0RGF5KGRhdGUpIHtcbiAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCAxKVxuICAgICAgICByZXR1cm4gKGQuZ2V0RGF5KCkgPT09IDAgPyA3IDogZC5nZXREYXkoKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgdG9Nb3JlSHVtYW4oZGF0ZSkge1xuICAgICAgICBjb25zdCB0b2RheSA9IHRoaXMudG9ZWVlZTU1ERChuZXcgRGF0ZSgpKVxuICAgICAgICBpZiAoZGF0ZSA9PT0gdG9kYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBcInRvZGF5XCJcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3IERhdGUoZGF0ZSkuc2V0RGF0ZShuZXcgRGF0ZShkYXRlKS5nZXREYXRlKCkpID09PSBuZXcgRGF0ZSh0b2RheSkuc2V0RGF0ZShuZXcgRGF0ZSh0b2RheSkuZ2V0RGF0ZSgpIC0gMSkpIHtcbiAgICAgICAgICAgIHJldHVybiBcInllc3RlcmRheVwiXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ldyBEYXRlKGRhdGUpLnNldERhdGUobmV3IERhdGUoZGF0ZSkuZ2V0RGF0ZSgpKSA9PT0gbmV3IERhdGUodG9kYXkpLnNldERhdGUobmV3IERhdGUodG9kYXkpLmdldERhdGUoKSArIDEpKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ0b21vcnJvd1wiXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke2RhdGUuc2xpY2UoLTIpfS4ke2RhdGUuc2xpY2UoNSwgNyl9LiR7ZGF0ZS5zbGljZSgwLCA0KX1gXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsU3RvcmFnZSB7XG4gICAgc3RhdGljIGl0ZW1OYW1lID0gXCJ0b2RvLXByb2plY3RzXCJcblxuICAgIHN0YXRpYyBzZXQoaXRlbSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLml0ZW1OYW1lLCBKU09OLnN0cmluZ2lmeShpdGVtKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgYXJyYXkgPSB0aGlzLmdldCgpXG4gICAgICAgIGFycmF5LnB1c2goaXRlbSlcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5pdGVtTmFtZSwgSlNPTi5zdHJpbmdpZnkoYXJyYXkpKVxuICAgIH1cblxuICAgIHN0YXRpYyByZW1vdmUoaXRlbSkge1xuICAgICAgICBjb25zdCBhcnJheSA9IHRoaXMuZ2V0KClcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5pdGVtTmFtZSwgSlNPTi5zdHJpbmdpZnkoYXJyYXkuZmlsdGVyKGZvbGRlciA9PiBmb2xkZXIuaWQgIT09IGl0ZW0uaWQpKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0KCkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLml0ZW1OYW1lKSkgfHwgW11cbiAgICB9XG5cbiAgICBzdGF0aWMgZHJvcCgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5pdGVtTmFtZSwgSlNPTi5zdHJpbmdpZnkoXCJcIikpXG4gICAgfVxuXG4gICAgc3RhdGljIGdldEZvbGRlcihpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoKS5maW5kKGZvbGRlciA9PiBmb2xkZXIuaWQgPT09IGlkKVxuICAgIH1cblxuICAgIHN0YXRpYyBzYXZlRm9sZGVyKGZvbGRlcikge1xuICAgICAgICBjb25zdCBhcnJheSA9IHRoaXMuZ2V0KClcbiAgICAgICAgY29uc3QgY3VycmVudEZvbGRlckluZGV4ID0gYXJyYXkuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pZCA9PT0gZm9sZGVyLmlkKVxuICAgICAgICBpZiAoY3VycmVudEZvbGRlckluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgYXJyYXkucHVzaChmb2xkZXIpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnRGb2xkZXJJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGFycmF5W2N1cnJlbnRGb2xkZXJJbmRleF0gPSBmb2xkZXJcbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLml0ZW1OYW1lLCBKU09OLnN0cmluZ2lmeShhcnJheSkpXG4gICAgfVxuXG4gICAgc3RhdGljIGlzRW1wdHkoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5nZXQoKVswXVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb3VjaEV2ZW50IHtcblxuICAgIHN0YXRpYyB0aHJlc2hvbGQgPSA3MFxuXG4gICAgY29uc3RydWN0b3IodG91Y2hTdGFydCwgdG91Y2hFbmQpIHtcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0ID0gdG91Y2hTdGFydFxuICAgICAgICB0aGlzLnRvdWNoRW5kID0gdG91Y2hFbmQgfHwgbnVsbFxuICAgIH1cblxuICAgIHNldEVuZEV2ZW50KGUpIHtcbiAgICAgICAgdGhpcy50b3VjaEVuZCA9IGVcbiAgICB9XG5cbiAgICBnZXRTd2lwZURpcmVjdGlvbigpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLnRvdWNoU3RhcnQuY2hhbmdlZFRvdWNoZXNbMF1cbiAgICAgICAgY29uc3QgZW5kID0gdGhpcy50b3VjaEVuZC5jaGFuZ2VkVG91Y2hlc1swXVxuXG4gICAgICAgIGlmIChzdGFydC5zY3JlZW5YIC0gZW5kLnNjcmVlblggPiBUb3VjaEV2ZW50LnRocmVzaG9sZCkge1xuICAgICAgICAgICAgcmV0dXJuIFwibGVmdFwiXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhcnQuc2NyZWVuWCAtIGVuZC5zY3JlZW5YIDwgLVRvdWNoRXZlbnQudGhyZXNob2xkKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJyaWdodFwiXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhcnQuc2NyZWVuWSAtIGVuZC5zY3JlZW5ZID4gVG91Y2hFdmVudC50aHJlc2hvbGQpIHtcbiAgICAgICAgICAgIHJldHVybiBcInVwXCJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGFydC5zY3JlZW5ZIC0gZW5kLnNjcmVlblkgPCAtVG91Y2hFdmVudC50aHJlc2hvbGQpIHtcbiAgICAgICAgICAgIHJldHVybiBcImRvd25cIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNTd2lwZUxlZnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFN3aXBlRGlyZWN0aW9uKCkgPT09IFwibGVmdFwiIHx8IGZhbHNlXG4gICAgfVxuXG4gICAgaXNTd2lwZVJpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTd2lwZURpcmVjdGlvbigpID09PSBcInJpZ2h0XCIgfHwgZmFsc2VcbiAgICB9XG5cbiAgICBpc1N3aXBlVXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFN3aXBlRGlyZWN0aW9uKCkgPT09IFwidXBcIiB8fCBmYWxzZVxuICAgIH1cblxuICAgIGlzU3dpcGVEb3duKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTd2lwZURpcmVjdGlvbigpID09PSBcImRvd25cIiB8fCBmYWxzZVxuICAgIH1cbn0iLCJleHBvcnQgeyB1cmxBbHBoYWJldCB9IGZyb20gJy4vdXJsLWFscGhhYmV0L2luZGV4LmpzJ1xuZXhwb3J0IGxldCByYW5kb20gPSBieXRlcyA9PiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KGJ5dGVzKSlcbmV4cG9ydCBsZXQgY3VzdG9tUmFuZG9tID0gKGFscGhhYmV0LCBkZWZhdWx0U2l6ZSwgZ2V0UmFuZG9tKSA9PiB7XG4gIGxldCBtYXNrID0gKDIgPDwgKE1hdGgubG9nKGFscGhhYmV0Lmxlbmd0aCAtIDEpIC8gTWF0aC5MTjIpKSAtIDFcbiAgbGV0IHN0ZXAgPSAtfigoMS42ICogbWFzayAqIGRlZmF1bHRTaXplKSAvIGFscGhhYmV0Lmxlbmd0aClcbiAgcmV0dXJuIChzaXplID0gZGVmYXVsdFNpemUpID0+IHtcbiAgICBsZXQgaWQgPSAnJ1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBsZXQgYnl0ZXMgPSBnZXRSYW5kb20oc3RlcClcbiAgICAgIGxldCBqID0gc3RlcFxuICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICBpZCArPSBhbHBoYWJldFtieXRlc1tqXSAmIG1hc2tdIHx8ICcnXG4gICAgICAgIGlmIChpZC5sZW5ndGggPT09IHNpemUpIHJldHVybiBpZFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZXhwb3J0IGxldCBjdXN0b21BbHBoYWJldCA9IChhbHBoYWJldCwgc2l6ZSA9IDIxKSA9PlxuICBjdXN0b21SYW5kb20oYWxwaGFiZXQsIHNpemUsIHJhbmRvbSlcbmV4cG9ydCBsZXQgbmFub2lkID0gKHNpemUgPSAyMSkgPT5cbiAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShzaXplKSkucmVkdWNlKChpZCwgYnl0ZSkgPT4ge1xuICAgIGJ5dGUgJj0gNjNcbiAgICBpZiAoYnl0ZSA8IDM2KSB7XG4gICAgICBpZCArPSBieXRlLnRvU3RyaW5nKDM2KVxuICAgIH0gZWxzZSBpZiAoYnl0ZSA8IDYyKSB7XG4gICAgICBpZCArPSAoYnl0ZSAtIDI2KS50b1N0cmluZygzNikudG9VcHBlckNhc2UoKVxuICAgIH0gZWxzZSBpZiAoYnl0ZSA+IDYyKSB7XG4gICAgICBpZCArPSAnLSdcbiAgICB9IGVsc2Uge1xuICAgICAgaWQgKz0gJ18nXG4gICAgfVxuICAgIHJldHVybiBpZFxuICB9LCAnJylcbiIsImV4cG9ydCBjb25zdCB1cmxBbHBoYWJldCA9XG4gICd1c2VhbmRvbS0yNlQxOTgzNDBQWDc1cHhKQUNLVkVSWU1JTkRCVVNIV09MRl9HUVpiZmdoamtscXZ3eXpyaWN0J1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBBcHAgZnJvbSBcIi4vY29tcG9uZW50cy9BcHBcIlxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBBcHAubG9hZCgpKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==