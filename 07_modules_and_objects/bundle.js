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
	
	var _person = __webpack_require__(/*! ./person */ 1);
	
	var _person2 = _interopRequireDefault(_person);
	
	var _summer = __webpack_require__(/*! ./summer */ 2);
	
	var _summer2 = _interopRequireDefault(_summer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var p1 = new _person2.default('Mike');
	var p2 = new _person2.default('Jim');
	
	// prints: My name is Mike and I am 1 years old
	p1.hello();
	
	p1.growUp();
	
	// prints: My name is Mike and I am 2 years old
	p1.hello();
	
	// prints: My name is Jim and I am 1 years old
	p2.hello();
	
	var s1 = new _summer2.default();
	var s2 = new _summer2.default();
	
	s1.add(10);
	s1.add(20);
	
	s2.add(30);
	
	s2.add(5);
	
	// prints 30
	console.log(s1.currentSum);
	
	// prints 35
	console.log(s2.currentSum);

/***/ },
/* 1 */
/*!***********************!*\
  !*** ./src/person.js ***!
  \***********************/
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ES6
	
	var Person = (function () {
	  function Person(name) {
	    _classCallCheck(this, Person);
	
	    this.name = name;
	    this.age = 1;
	  }
	
	  _createClass(Person, [{
	    key: 'hello',
	    value: function hello() {
	      console.log('Hi! ' + this.name + ' and I am ' + this.age + ' years old');
	    }
	  }, {
	    key: 'growUp',
	    value: function growUp() {
	      this.age++;
	    }
	  }]);
	
	  return Person;
	})();
	
	exports.default = Person;
	
	var Student = (function (_Person) {
	  _inherits(Student, _Person);
	
	  function Student(name) {
	    _classCallCheck(this, Student);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Student).call(this, name));
	
	    _this.grade = 77;
	    return _this;
	  }
	
	  _createClass(Student, [{
	    key: 'grades',
	    value: function grades() {
	      console.log('You got 100');
	    }
	  }]);
	
	  return Student;
	})(Person);
	
	/*
	export default function Person(name) {
	  this.name = name;
	  this.age = 1;
	}

	Person.prototype.hello = function() {
	  console.log(`Hi! ${this.name} and I am ${this.age} years old`);
	};

	Person.prototype.growUp = function() {
	  this.age++;
	};
	  */

/***/ },
/* 2 */
/*!***********************!*\
  !*** ./src/summer.js ***!
  \***********************/
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Summer = (function () {
	  function Summer() {
	    _classCallCheck(this, Summer);
	
	    this.sum = 0;
	  }
	
	  _createClass(Summer, [{
	    key: "add",
	    value: function add(n) {
	      this.sum += n;
	    }
	  }, {
	    key: "currentSum",
	    get: function get() {
	      return this.sum;
	    }
	  }]);
	
	  return Summer;
	})();
	
	exports.default = Summer;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map