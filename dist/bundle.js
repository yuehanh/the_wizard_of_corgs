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
/* harmony import */ var _enemies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemies */ "./src/enemies.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Command = /*#__PURE__*/function () {
  function Command(canvas, game) {
    var pathStyle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Command);

    this.threshhold = 10;
    this.canvas = canvas;
    this.game = game;
    this.directions = [];
    this.isMouseDown = false;
    this.tmpCanvas = null;
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

      this.canvas.oncontextmenu = function (e) {
        e.preventDefault();
      }; // document.addEventListener("touchstart", (e) => {
      //   e.preventDefault();
      //   this.handleMouseDown(e);
      // });
      // document.addEventListener("touchmove", (e) => {
      //   e.preventDefault();
      //   this.handleMouseMove(e);
      // });
      // document.addEventListener("touchend", (e) => {
      //   e.preventDefault();
      //   this.handleMouseUp(e);
      // });

    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(e) {
      if (this.isMouseDown) {
        if (this.tmpCanvas !== null) {
          document.body.removeChild(this.tmpCanvas);
          this.tmpCanvas = null;
        }
      }

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
        var dx = this.xCurrent - this.xLast;
        var dy = this.yCurrent - this.yLast;
        if (Math.abs(dx) < this.threshhold && Math.abs(dy) < this.threshhold) return;
        var direction = Object(_util__WEBPACK_IMPORTED_MODULE_1__["vectorDirectionsInSymbol"])(dx, dy);
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
        this.execute();
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
    key: "execute",
    value: function execute() {
      this.game.receiveCommand(this.interpretDirections());
    }
  }, {
    key: "interpretDirections",
    value: function interpretDirections() {
      switch (this.directions.join()) {
        case "R":
        case "L":
          return "hBar";

        case "U":
        case "D":
          return "vBar";

        case "URS":
        case "DLS":
          return "fSlash";

        case "ULS":
        case "DRS":
          return "bSlash";

        default:
          console.log(this.directions.join());
      }
    }
  }]);

  return Command;
}();

/***/ }),

/***/ "./src/enemies.js":
/*!************************!*\
  !*** ./src/enemies.js ***!
  \************************/
/*! exports provided: Enemy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enemy", function() { return Enemy; });
/* harmony import */ var _health_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./health_bar */ "./src/health_bar.js");
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vector */ "./src/vector.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Enemy = /*#__PURE__*/function () {
  function Enemy(game) {
    _classCallCheck(this, Enemy);

    this.health = ["hBar"];
    this.body = document.createElement("monster");
    this.healthBar = document.createElement("healthbar");
    document.body.appendChild(this.body);
    this.game = game;
    this.body.appendChild(this.healthBar);
    this.size = 20;
    this.pos = new _vector__WEBPACK_IMPORTED_MODULE_1__["Vector"](40, 40);
    this.width = 20;
    this.height = 40;
    this.healthBar = new _health_bar__WEBPACK_IMPORTED_MODULE_0__["HealthBar"](this);
  }

  _createClass(Enemy, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.beginPath();
      ctx.rect(this.pos.x, this.pos.y, this.width, this.height);
      ctx.fillStyle = "red";
      ctx.fill();
      this.drawHealth(ctx);
    }
  }, {
    key: "drawHealth",
    value: function drawHealth(ctx) {
      this.healthBar.draw(ctx);
    }
  }, {
    key: "update",
    value: function update(direction) {
      debugger;

      if (direction === this.health[0]) {
        this.health = this.health.slice(1);
      }

      if (this.health.length === 0) {
        this.remove();
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      debugger;
      this.game.remove(this);
    }
  }]);

  return Enemy;
}();

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./command */ "./src/command.js");
/* harmony import */ var _enemies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemies */ "./src/enemies.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Game = /*#__PURE__*/function () {
  function Game(canvas) {
    _classCallCheck(this, Game);

    this.enemies = [];
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
  }

  _createClass(Game, [{
    key: "start",
    value: function start() {
      var command = new _command__WEBPACK_IMPORTED_MODULE_0__["Command"](canvas, this);
      this.addEnemy();
      this.draw();
    }
  }, {
    key: "addEnemy",
    value: function addEnemy() {
      var enemy = new _enemies__WEBPACK_IMPORTED_MODULE_1__["Enemy"](this);
      this.enemies.push(enemy);
    }
  }, {
    key: "receiveCommand",
    value: function receiveCommand(direction) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      var _iterator = _createForOfIteratorHelper(this.enemies),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var enemy = _step.value;
          enemy.update(direction);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.draw();
    }
  }, {
    key: "draw",
    value: function draw() {
      var _iterator2 = _createForOfIteratorHelper(this.enemies),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var enemy = _step2.value;
          enemy.draw(this.ctx);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "remove",
    value: function remove(obj) {
      debugger;
      var idx = this.enemies.indexOf(obj);
      this.enemies.splice(idx, 1);
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./src/health_bar.js":
/*!***************************!*\
  !*** ./src/health_bar.js ***!
  \***************************/
/*! exports provided: HealthBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthBar", function() { return HealthBar; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HealthBar = /*#__PURE__*/function () {
  function HealthBar(enemy) {
    _classCallCheck(this, HealthBar);

    this.SIZE = 20;
    this.BETWEEN = 5;
    this.GAP = 10;
    this.enemy = enemy;
  }

  _createClass(HealthBar, [{
    key: "draw",
    value: function draw(ctx) {
      var _this = this;

      this.update();
      this.enemy.health.forEach(function (direction, idx) {
        ctx.strokeStyle = "red";
        var directionY = _this.y;
        var directionX = _this.x + idx * (_this.SIZE + _this.BETWEEN);

        _this.drawDirections(direction, ctx, directionX, directionY);
      });
    }
  }, {
    key: "update",
    value: function update() {
      this.width = this.enemy.health.length * this.SIZE;
      this.height = this.SIZE;
      this.y = this.enemy.pos.y - this.GAP - this.SIZE;
      this.x = this.enemy.pos.x + this.enemy.width / 2 - this.width / 2;
    } // x, y will always be the top left corner of the draw box

  }, {
    key: "drawDirections",
    value: function drawDirections(direction, ctx, x, y) {
      switch (direction) {
        case "vBar":
          this.drawVBar(ctx, x, y);
          break;

        case "hBar":
          this.drawHBar(ctx, x, y);
          break;

        case "fSlash":
          this.drawFSlash(ctx, x, y);
          break;

        case "bSlash":
          this.drawBSlash(ctx, x, y);
          break;

        default:
          return;
      }
    }
  }, {
    key: "drawVBar",
    value: function drawVBar(ctx, x, y) {
      var xStart = x + this.SIZE / 2;
      var yStart = y;
      ctx.beginPath();
      ctx.moveTo(xStart, yStart);
      ctx.lineTo(xStart, yStart + this.SIZE);
      ctx.stroke();
    }
  }, {
    key: "drawHBar",
    value: function drawHBar(ctx, x, y) {
      var xStart = x;
      var yStart = y + this.SIZE / 2;
      ctx.beginPath();
      ctx.moveTo(xStart, yStart);
      ctx.lineTo(xStart + this.SIZE, yStart);
      ctx.stroke();
    }
  }, {
    key: "drawFSlash",
    value: function drawFSlash(ctx, x, y) {
      var xStart = x + this.SIZE;
      var yStart = y;
      ctx.beginPath();
      ctx.moveTo(xStart, yStart);
      ctx.lineTo(xStart - this.SIZE, yStart + this.SIZE);
      ctx.stroke();
    }
  }, {
    key: "drawBSlash",
    value: function drawBSlash(ctx, x, y) {
      var xStart = x;
      var yStart = y;
      ctx.beginPath();
      ctx.moveTo(xStart, yStart);
      ctx.lineTo(xStart + this.SIZE, yStart + this.SIZE);
      ctx.stroke();
    }
  }]);

  return HealthBar;
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
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");

document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("canvas");
  var bound = canvas.getBoundingClientRect();
  canvas.width = bound.width;
  canvas.height = bound.height;
  var game = new _game__WEBPACK_IMPORTED_MODULE_0__["Game"](canvas);
  game.start();
});

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: vectorDirectionInDegree, vectorDirectionsInSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vectorDirectionInDegree", function() { return vectorDirectionInDegree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vectorDirectionsInSymbol", function() { return vectorDirectionsInSymbol; });
var vectorDirectionInDegree = function vectorDirectionInDegree(x, y) {
  var degree = Math.atan(y / x) * 180 / Math.PI;

  if (x < 0) {
    degree += 180;
  }

  return degree;
};
var vectorDirectionsInSymbol = function vectorDirectionsInSymbol(x, y) {
  var THRESHOLD = 20;
  var degree = vectorDirectionInDegree(x, y);

  switch (true) {
    case Math.abs(degree) < THRESHOLD:
      return "R";

    case Math.abs(degree - 180) < THRESHOLD:
      return "L";
    //revsered U and D since the 0,0 for canvas is at top left

    case Math.abs(degree - 90) < THRESHOLD:
      return "D";

    case Math.abs(degree - 270) < THRESHOLD:
    case Math.abs(degree + 90) < THRESHOLD:
      return "U";

    case degree < THRESHOLD && degree > THRESHOLD - 90:
      return "URS";

    case degree < 180 - THRESHOLD && degree > THRESHOLD + 90:
      return "DLS";

    case degree > 270 - THRESHOLD && degree > THRESHOLD + 180:
      return "ULS";

    case degree < 90 - THRESHOLD && degree > THRESHOLD:
      return "DRS";

    default:
      return "not detected";
  }
};

/***/ }),

/***/ "./src/vector.js":
/*!***********************!*\
  !*** ./src/vector.js ***!
  \***********************/
/*! exports provided: Vector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return Vector; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vector = /*#__PURE__*/function () {
  function Vector(x, y) {
    _classCallCheck(this, Vector);

    this.x = x || 0;
    this.y = y || 0;
  }

  _createClass(Vector, [{
    key: "set",
    value: function set(x, y) {
      this.x = x;
      this.y = y;
    }
  }, {
    key: "add",
    value: function add(vector) {
      this.x += vector.x;
      this.y += vector.y;
    }
  }, {
    key: "minus",
    value: function minus(vector) {
      this.x -= vector.x;
      this.y -= vector.y;
    }
  }, {
    key: "reverse",
    value: function reverse(vector) {
      this.x = -vector.x;
      this.y = -vector.y;
    }
  }]);

  return Vector;
}();

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map