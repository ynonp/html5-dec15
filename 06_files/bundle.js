/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _mytextarea = __webpack_require__(/*! ./mytextarea */ 1);
	
	var _mytextarea2 = _interopRequireDefault(_mytextarea);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var div = document.querySelector('div');
	//for (var i=0; i < items.length; i++ ) {
	//  var ta = MyTextArea(items[i]);
	//}
	
	var t1 = new _mytextarea2.default(div);

/***/ },
/* 1 */
/*!***************************!*\
  !*** ./src/mytextarea.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = MyTextArea;
	
	var _util = __webpack_require__(/*! ./util */ 2);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function MyTextArea(input_el) {
	  input_el.innerHTML = '<p>Total: <span class="val">0</span> characters</p>' + '<textarea></textarea>';
	
	  this.el = {
	    ta: input_el.querySelector('textarea'),
	    val: input_el.querySelector('.val')
	  };
	
	  input_el.addEventListener('input', this.handleInput.bind(this));
	}
	
	MyTextArea.prototype.setText = function (text) {
	  this.el.ta.textContent = text;
	};
	
	MyTextArea.prototype.reset = function () {
	  this.el.ta.textContent = '';
	};
	
	MyTextArea.prototype.handleInput = function (ev) {
	  this.el.val.textContent = _util2.default.lengthOf(this.el.ta);
	};

/***/ },
/* 2 */
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.lengthOf = lengthOf;
	exports.demo = demo;
	function lengthOf(textarea) {
	  return textarea.value.length;
	}
	
	function demo() {
	  console.log('demo!!!');
	}
	
	var Util = {
	  lengthOf: lengthOf,
	  demo: demo
	};
	
	exports.default = Util;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map