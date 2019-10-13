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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/themes/portfolio/js/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wp-content/themes/portfolio/js/scripts.js":
/*!***************************************************!*\
  !*** ./wp-content/themes/portfolio/js/scripts.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./wp-content/themes/portfolio/js/util.js\");\n\nvar checkBox = document.querySelector('#menuCheckbox');\nvar mobileMenuLinks = Array.from(document.querySelectorAll('.mobile-menu__link'));\n\nwindow.onload = function () {\n  shrinkHeaderHeight();\n  document.addEventListener('scroll', throttledShrinkHeaderHeight);\n  mobileMenuLinks.forEach(function (link) {\n    return link.addEventListener('click', toggleMobileMenu);\n  });\n};\n\nwindow.onunload = function () {\n  document.removeEventListener('scroll', throttledShrinkHeaderHeight);\n  mobileMenuLinks.forEach(function (link) {\n    return link.removeEventListener('click', toggleMobileMenu);\n  });\n};\n\nvar throttledShrinkHeaderHeight = function throttledShrinkHeaderHeight() {\n  return Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"throttle\"])(shrinkHeaderHeight, 250)();\n};\n\nvar shrinkHeaderHeight = function shrinkHeaderHeight() {\n  var isPolicyPage = window.location.href.match(/policies/gi);\n\n  if (document.documentElement.scrollTop > 120 || isPolicyPage) {\n    document.querySelector('header').classList.add('header--scrolled-down');\n    document.querySelector('main').classList.add('main--scrolled-down');\n  }\n\n  if (document.documentElement.scrollTop <= 120 && !isPolicyPage) {\n    document.querySelector('header').classList.remove('header--scrolled-down');\n    document.querySelector('main').classList.remove('main--scrolled-down');\n  }\n};\n\nvar toggleMobileMenu = function toggleMobileMenu() {\n  checkBox.checked = !checkBox.checked;\n};\n\n//# sourceURL=webpack:///./wp-content/themes/portfolio/js/scripts.js?");

/***/ }),

/***/ "./wp-content/themes/portfolio/js/util.js":
/*!************************************************!*\
  !*** ./wp-content/themes/portfolio/js/util.js ***!
  \************************************************/
/*! exports provided: throttle, debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return throttle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return debounce; });\nvar throttle = function throttle(fnc, limit) {\n  var isThrottled;\n  return function () {\n    var args = arguments;\n    var context = this;\n\n    if (!isThrottled) {\n      fnc.apply(context, args);\n      isThrottled = true;\n      setTimeout(function () {\n        return isThrottled = false;\n      }, limit);\n    }\n  };\n};\nvar debounce = function debounce(fnc, delay) {\n  var isDebounced;\n  return function () {\n    var args = arguments;\n    var context = this;\n    clearTimeout(isDebounced);\n    isDebounced = setTimeout(function () {\n      return fnc.apply(context, args);\n    }, delay);\n  };\n};\n\n//# sourceURL=webpack:///./wp-content/themes/portfolio/js/util.js?");

/***/ })

/******/ });