/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    border: 3px solid black;\\r\\n}\\r\\n\\r\\nbody, #content {\\r\\n    border: 0;\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    height: 100vh;\\r\\n}\\r\\n\\r\\nheader {\\r\\n    text-align: center;\\r\\n    height: 8%;\\r\\n}\\r\\n\\r\\n.page-container {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    height: 90vh;\\r\\n}\\r\\n\\r\\n#sidebar {\\r\\n    width: 20%;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n.top-div {\\r\\n    height: 3rem;\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n\\r\\n.projects-container {\\r\\n    padding: 2rem 0;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 2rem;\\r\\n}\\r\\n\\r\\n.todo-page {\\r\\n    flex: 1 0 auto;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n.todo-cards-container {\\r\\n    flex: 1 0 auto;\\r\\n    display: flex;\\r\\n    gap: 3rem;\\r\\n    overflow: auto;\\r\\n}\\r\\n\\r\\n.todo-title {\\r\\n    height: 15%;\\r\\n}\\r\\n\\r\\n.todo-card, .prompt {\\r\\n    width: 20%;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/createElement.js":
/*!******************************!*\
  !*** ./src/createElement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createElement)\n/* harmony export */ });\n/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItem */ \"./src/todoItem.js\");\n/* harmony import */ var _todoProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoProject */ \"./src/todoProject.js\");\n\r\n\r\n\r\nfunction createElement(elemName, ...params) {\r\n    if (elemName === \"TodoDiv\") {\r\n        // ...params = [todoProject]\r\n        return createTodoDiv(params[0]);\r\n    }\r\n    if (elemName === \"TodoItem\") {\r\n        // ...params = [todoItem]\r\n        return createTodoItem(...params);\r\n    }\r\n    if (elemName === \"TodoPrompt\") {\r\n        // ...params = [project, projIndex]\r\n        return createTodoPrompt(...params);\r\n    }\r\n    if (elemName === \"Project\") {\r\n        // ...params = [project]\r\n        return createProject(...params);\r\n    }\r\n    return;\r\n}\r\n\r\nfunction createHeader() {\r\n    let header = document.createElement(\"header\");\r\n    return header;\r\n}\r\nfunction createSidebar() {\r\n    let sidebarDiv = document.createElement(\"div\");\r\n    return sidebarDiv;\r\n}\r\nfunction createTitleCard() {\r\n    let titleCardDiv = document.createElement(\"div\");\r\n    return titleCardDiv;\r\n}\r\n\r\nfunction createProject(project) {\r\n    let projectDiv = document.createElement(\"div\");\r\n    projectDiv.classList.add(\"project\");\r\n\r\n    let innerHtml = project.title;\r\n    projectDiv.innerHTML += innerHtml;\r\n    \r\n\r\n    return projectDiv;\r\n}\r\n\r\nfunction createTodoItem(todoItem) {\r\n    let itemDiv = document.createElement(\"div\");\r\n    itemDiv.classList.add(\"todo-card\");\r\n\r\n    let innerHtml = ``;\r\n    for (const attrKey in todoItem) {\r\n        innerHtml = innerHtml + `<div class=\"todo-entry\">${todoItem[attrKey]}</div>`;\r\n    }\r\n    itemDiv.innerHTML = innerHtml;\r\n\r\n    return itemDiv;\r\n\r\n}\r\n\r\nfunction createTodoDiv(todoProject) {\r\n    let todoDiv = document.createElement(\"div\");\r\n    todoDiv.classList.add(\"todo-container\");\r\n\r\n    todoProject.getTodoItems().forEach(item => {\r\n        todoDiv.appendChild(createTodoItem(item));\r\n    });\r\n\r\n    return todoDiv;\r\n}\r\n\r\nfunction createTodoPrompt(project, projIndex) {\r\n    console.log(\"Calling createTodoPrompt\")\r\n    let todoPrompt = document.createElement(\"div\");\r\n    todoPrompt.classList.add(\"prompt\");\r\n    let inputs = [];\r\n\r\n    inputs.push(createInput(\"title\"));\r\n    inputs.push(createInput(\"desc\"));\r\n    inputs.push(createInput(\"dueDate\"));\r\n    inputs.push(createInput(\"priority\"));\r\n    inputs.push(createInput(\"notes\"));\r\n\r\n    inputs.forEach(input => {\r\n         todoPrompt.appendChild(input);\r\n         \r\n    });\r\n\r\n    let enterButton = document.createElement(\"button\");\r\n    enterButton.addEventListener(\"click\", () => onPromptEnterButton(project, projIndex));\r\n    todoPrompt.appendChild(enterButton);\r\n\r\n    return todoPrompt;\r\n}\r\n\r\nfunction onPromptEnterButton(project, projIndex) {\r\n    // Get data from prompt then destroy it\r\n    let promptDiv = document.querySelector(\".prompt\");\r\n    let inputElems = promptDiv.querySelectorAll(\"input\");\r\n    let todoParams = [];\r\n\r\n    inputElems.forEach(input => {\r\n        todoParams.push(input.value);\r\n    });\r\n    promptDiv.parentNode.removeChild(promptDiv);\r\n    \r\n    // Create a TodoItem based on input\r\n    const newItem = new _todoItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"](...todoParams);\r\n    const itemDiv = createElement(\"TodoItem\", newItem);\r\n    document.querySelector(\".todo-cards-container\").appendChild(itemDiv);\r\n\r\n    // Add todoItem to current project's local storage\r\n    project.todoItems.push(newItem);\r\n    updateProject(project, projIndex)\r\n\r\n    // Re-enable add todo button\r\n    document.querySelector(\".add-todo\").disabled = false;\r\n}\r\n\r\nfunction updateProject(project, projIndex) {\r\n    let projects = localStorage.getObj(\"todo-projects\");\r\n    projects[projIndex] = project;\r\n    localStorage.setObj(\"todo-projects\", projects);\r\n}\r\n\r\nfunction createInput(inputName) {\r\n    let input = document.createElement(\"input\");\r\n    input.setAttribute(\"type\", \"text\");\r\n    input.classList.add(inputName);\r\n    input.setAttribute(\"name\", inputName)\r\n\r\n    return input;\r\n}\n\n//# sourceURL=webpack://todo-list/./src/createElement.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElement.js */ \"./src/createElement.js\");\n/* harmony import */ var _todoItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoItem.js */ \"./src/todoItem.js\");\n/* harmony import */ var _todoProject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoProject.js */ \"./src/todoProject.js\");\n\r\n\r\n\r\n\r\n\r\nvar currProjectIndex = null;\r\nvar currProject = null;\r\n\r\nfunction main() {\r\n    // Initial stuff\r\n    setupOnClicks();\r\n    renderProjects();\r\n\r\n    let todoTest = new _todoItem_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"a\", \"b\", \"c\", \"d\", \"e\");\r\n    let projectTest = new _todoProject_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"title\", \"desc\", [todoTest]);\r\n\r\n    currProjectIndex = 0;\r\n    currProject = 0;\r\n\r\n    renderProjectAsCurrent(projectTest);\r\n    \r\n}\r\n\r\nfunction addNewProject() {\r\n    // Make default project\r\n    let newProject = new _todoProject_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"New Project\", \"No description yet\", []);\r\n\r\n    // Add it to localStorage\r\n    let projects = localStorage.getObj(\"todo-projects\");\r\n    if (projects === null) {\r\n        // reset array of projects\r\n        projects = [];\r\n        localStorage.setObj(\"todo-projects\", projects);\r\n    }\r\n    projects.push(newProject);\r\n    localStorage.setObj(\"todo-projects\", projects);\r\n\r\n    // refresh sidebar\r\n    renderProjects();\r\n}\r\n\r\n\r\nfunction addNewTodo(...params) {\r\n    let todoItem = new _todoItem_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](...params);\r\n    let itemDiv = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"TodoItem\", todoItem);\r\n\r\n    document.querySelector(\".todo-cards-container\").appendChild(itemDiv);\r\n}\r\n\r\nfunction promptAddTodo() {\r\n    //DEBUG Section\r\n    let itemParams = [\"a\", \"b\", \"c\", \"d\", \"e\"];\r\n    //addNewTodo(...itemParams);\r\n\r\n    //Intended section\r\n    // Disable Add Button\r\n    document.querySelector(\".add-todo\").disabled = true;\r\n\r\n    let prompt = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"TodoPrompt\", currProject, currProjectIndex);\r\n    document.querySelector(\".todo-cards-container\").appendChild(prompt);\r\n    \r\n}\r\n\r\nfunction renderProjects() {\r\n    // localStorage.removeItem(\"todo-projects\");\r\n    const container = document.querySelector(\".projects-container\");\r\n    container.innerHTML = \"\";       //Clear the div\r\n\r\n    let projectsArray = localStorage.getObj(\"todo-projects\");\r\n    if (projectsArray === null) {\r\n        // Initialise storage for projects\r\n        projectsArray = [];\r\n        localStorage.setObj(\"todo-projects\", projectsArray);\r\n    }\r\n\r\n    projectsArray.forEach((project, index) => {\r\n        const projectDiv = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Project\", project);\r\n        container.appendChild(projectDiv);\r\n\r\n        // Render the project data when its div is clicked\r\n        projectDiv.addEventListener(\"click\", () => {\r\n            renderProjectAsCurrent(project, index);\r\n        });\r\n    });\r\n}\r\n\r\nfunction renderProjectAsCurrent(project, index) {\r\n    const titleDiv = document.querySelector(\".todo-title .title\");\r\n    const descDiv = document.querySelector(\".todo-title .desc\");\r\n\r\n    titleDiv.innerHTML = project.title;\r\n    descDiv.innerHTML = project.desc;\r\n\r\n    currProject = project;\r\n    currProjectIndex = index;\r\n    renderTodoItems(project.todoItems);\r\n}\r\n\r\nfunction renderTodoItems(items) {\r\n    // Clear container, then add current project's items\r\n    const container = document.querySelector(\".todo-cards-container\");\r\n    container.innerHTML = ``;\r\n\r\n    items.forEach(item => {\r\n        const itemCardDiv = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"TodoItem\", item);\r\n        container.appendChild(itemCardDiv);\r\n    });\r\n}\r\n\r\nfunction setupOnClicks() {\r\n    const addTodo = document.querySelector(\".add-todo\");\r\n    const addProject = document.querySelector(\".add-project\");\r\n\r\n    addTodo.addEventListener(\"click\", promptAddTodo);\r\n    addProject.addEventListener(\"click\", addNewProject);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n// localStorage extension to include objects\r\n\r\nStorage.prototype.setObj = function(key, obj) {\r\n    return this.setItem(key, JSON.stringify(obj))\r\n}\r\nStorage.prototype.getObj = function(key) {\r\n    return JSON.parse(this.getItem(key))\r\n}\r\n\r\nmain();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/todoItem.js":
/*!*************************!*\
  !*** ./src/todoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoItem)\n/* harmony export */ });\n/* To do\r\n- workable todoitem\r\n- enable editing via input div elements\r\n- workable todo checklist\r\n*/\r\n\r\n// TodoItem Class //\r\nclass TodoItem {\r\n\r\n    constructor (...formParams) {\r\n        this.title = formParams[0];\r\n        this.desc = formParams[1];\r\n        this.dueDate = formParams[2];\r\n        this.priority = formParams[3];\r\n        this.notes = formParams[4];\r\n    }\r\n\r\n    // Edit the Item\r\n    editItem(...params) {\r\n        this.title = formParams[0];\r\n        this.desc = formParams[1];\r\n        this.dueDate = formParams[2];\r\n        this.priority = formParams[3];\r\n        this.notes = formParams[4];\r\n        return;\r\n    }\r\n\r\n    // Delete the Item\r\n    deleteItem(itemElement) {\r\n        // DO WITH element.remove instead!!!\r\n        // dont forget to destroy class\r\n        itemElement.remove();\r\n    }\r\n}\r\n\r\nclass TodoItemWithChecklist extends TodoItem {\r\n    constructor (...formParams) {\r\n        super(formParams);\r\n        this.checklist = [];\r\n    }\r\n}\r\n// END //\r\n\r\n// (object checklist) desc isDone\n\n//# sourceURL=webpack://todo-list/./src/todoItem.js?");

/***/ }),

/***/ "./src/todoProject.js":
/*!****************************!*\
  !*** ./src/todoProject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoProject)\n/* harmony export */ });\n\r\n// TodoProject Class //\r\nclass TodoProject {\r\n\r\n    constructor (title, desc, todoItems) {\r\n        this.title = title;\r\n        this.desc = desc;\r\n        this.todoItems = todoItems;\r\n    }\r\n\r\n    getTodoItems() {\r\n        return this.todoItems;\r\n    }\r\n\r\n    addTodoItems(item) {\r\n        this.todoItems.push(item);\r\n    }\r\n\r\n    \r\n    removeTodoItems(item) {\r\n        this.todoItems.remove(item);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/todoProject.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;