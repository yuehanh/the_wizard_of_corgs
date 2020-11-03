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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/command.js":
/*!************************!*\
  !*** ./src/command.js ***!
  \************************/
/*! exports provided: Command */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return Command; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Command = /*#__PURE__*/function () {
  function Command(pathStyle) {
    _classCallCheck(this, Command);

    this.threshhold = 10;
    this.canvas = canvas;
    this.directions = [];
    this.isMouseDown = false;
    this.lineWidth = pathStyle.lineWidth || 5;
    this.strokeStyle = pathStyle.strokeStyle || "red";
    this.addInputListener();
  }

  _createClass(Command, [{
    key: "addInputListener",
    value: function addInputListener() {
      var _this = this;

      document.addEventListener("mousedown", function (e) {
        e.preventDefault();

        _this.handleMouseDown(e);
      });
      document.addEventListener("mousemove", function (e) {
        e.preventDefault();

        _this.handleMouseMove(e);
      });
      document.addEventListener("mouseup", function (e) {
        e.preventDefault();

        _this.handleMouseUp(e);
      });
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(e) {
      this.isMouseDown = true;
      this.tmpCanvas = document.createElement("canvas");
      this.ctx = this.tmpCanvas.getContext("2d");
      this.tmpCanvas.width = window.innerWidth || window.clientWidth;
      this.tmpCanvas.height = window.innerHeight || window.clientHeight;
      this.tmpCanvas.style = "position: fixed; left: 0; right: 0; top: 0; bottom: 0;";
      document.body.appendChild(this.tmpCanvas);
      var mousePos = this.calibrateInput(e, this.tmpCanvas);
      this.xStart = mousePos.x;
      this.yStart = mousePos.y;
      this.xLast = mousePos.x;
      this.yLast = mousePos.y; //starting position of visible path

      this.ctx.moveTo(this.xStart, this.yStart);
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(e) {
      if (this.isMouseDown) {
        var mousePos = this.calibrateInput(e, this.tmpCanvas);
        this.xCurrent = mousePos.x;
        this.yCurrent = mousePos.y;
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.lineTo(this.xCurrent, this.yCurrent);
        this.ctx.stroke();
        var dx, dy, direction;
        dx = Math.abs(this.xCurrent - this.xLast);
        dy = Math.abs(this.yCurrent - this.yLast);
        if (dx < this.threshhold && dy < this.threshhold) return;

        if (dx > dy) {
          direction = this.xCurrent > this.xLast ? "R" : "L";
        } else {
          direction = this.yCurrent > this.yLast ? "D" : "U";
        }

        var lastDirection = this.directions[this.directions.length - 1];

        if (lastDirection !== direction) {
          this.directions.push(direction);
        }

        this.xLast = this.xCurrent;
        this.yLast = this.yCurrent;
      }
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp() {
      if (this.directions.length !== 0) {
        this.executeDirections();
      }

      this.isMouseDown = false;
      this.directions = [];
      document.body.removeChild(this.tmpCanvas);
      this.tmpCanvas = null;
    }
  }, {
    key: "calibrateInput",
    value: function calibrateInput(e, canvas) {
      var bound = canvas.getBoundingClientRect();
      return {
        x: (e.clientX - bound.left) / bound.width * canvas.width,
        y: (e.clientY - bound.top) / bound.height * canvas.height
      };
    }
  }, {
    key: "executeDirections",
    value: function executeDirections() {
      switch (this.directions.join("")) {
        case "R":
          console.log("Right");
          break;

        case "L":
          console.log("Left");
          break;

        case "U":
          console.log("up");
          break;

        case "D":
          console.log("down");
          break;

        default:
          console.log(this.directions.join(""));
      }
    }
  }]);

  return Command;
}();

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./command */ "./src/command.js");

document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("canvas");
  var bound = canvas.getBoundingClientRect();
  canvas.width = bound.width;
  canvas.height = bound.height;
  var ctx = canvas.getContext("2d");
  var command = new _command__WEBPACK_IMPORTED_MODULE_0__["Command"](canvas);
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map