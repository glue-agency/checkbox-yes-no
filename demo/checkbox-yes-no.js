window["CheckboxYesNo"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/CheckboxYesNo.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/CheckboxYesNo.js":
/*!******************************!*\
  !*** ./src/CheckboxYesNo.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar CheckboxYesNo = function () {\n  function CheckboxYesNo(checkbox, target) {\n    _classCallCheck(this, CheckboxYesNo);\n\n    this.checkbox = checkbox;\n    this.target = target;\n\n    this.updateTarget();\n    this.bindEventListeners();\n  }\n\n  _createClass(CheckboxYesNo, [{\n    key: 'bindEventListeners',\n    value: function bindEventListeners() {\n      this.checkbox.addEventListener('change', this.updateTarget.bind(this));\n    }\n  }, {\n    key: 'updateTarget',\n    value: function updateTarget() {\n      this.target.value = this.checkbox.checked ? 'yes' : 'no';\n    }\n  }], [{\n    key: 'init',\n    value: function init() {\n      CheckboxYesNo.instances = CheckboxYesNo.instances || [];\n\n      var checkboxes = document.querySelectorAll('[data-checkbox-yes-no]');\n\n      checkboxes.forEach(function (checkbox) {\n        var instance = CheckboxYesNo.newFromCheckboxWithDataAttributes(checkbox);\n\n        CheckboxYesNo.instances.push(instance);\n      });\n    }\n  }, {\n    key: 'newFromCheckboxWithDataAttributes',\n    value: function newFromCheckboxWithDataAttributes(checkbox) {\n      var targetSelector = checkbox.getAttribute('data-checkbox-yes-no');\n      var target = document.querySelector(targetSelector);\n\n      return new CheckboxYesNo(checkbox, target);\n    }\n  }]);\n\n  return CheckboxYesNo;\n}();\n\nexports.default = CheckboxYesNo;\n\n//# sourceURL=webpack://CheckboxYesNo/./src/CheckboxYesNo.js?");

/***/ })

/******/ })["default"];