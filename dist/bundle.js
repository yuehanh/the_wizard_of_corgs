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

      this.ctx.beginPath();
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Enemy = /*#__PURE__*/function () {
  function Enemy(attr) {
    _classCallCheck(this, Enemy);

    this.level = attr.level;
    this.health = [];
    this.game = attr.game;
    this.size = attr.size || 40;
    this.healthBar = new _health_bar__WEBPACK_IMPORTED_MODULE_0__["HealthBar"](this);
    this.mainChar = this.game.mainChar;
    this.targetPos = this.mainChar.center;
    this.image = attr.image;
    this.status = true;
    this.init();
  }

  _createClass(Enemy, [{
    key: "init",
    value: function init() {
      var i = 0;

      while (i < this.level) {
        var rndIdx = Math.floor(Math.random() * _health_bar__WEBPACK_IMPORTED_MODULE_0__["HealthType"].length);
        this.health.push(_health_bar__WEBPACK_IMPORTED_MODULE_0__["HealthType"][rndIdx]);
        i++;
      } // this.pos = new Vector(40, 40);


      this.pos = Object(_util__WEBPACK_IMPORTED_MODULE_1__["rndEntryPoint"])(this.game, this);
      this.vel = this.targetPos.minus(this.pos);
      this.vel.scale(1 / (this.vel.mag * 5));
    }
  }, {
    key: "draw",
    value: function draw(ctx, image, frame) {
      ctx.drawImage(image, 0 + 48 * (Math.floor(frame / 20) % 6), 0, 48, 48, this.pos.x, this.pos.y, this.size, this.size);
      this.drawHealth(ctx);
    }
  }, {
    key: "drawHealth",
    value: function drawHealth(ctx) {
      this.healthBar.draw(ctx);
    }
  }, {
    key: "move",
    value: function move() {
      if (this.status && !this.isCollidedWith()) {
        this.pos = this.pos.add(this.vel);
      } else {
        this.remove();

        if (this.isCollidedWith()) {
          this.mainChar.hurt();
        }
      }
    }
  }, {
    key: "update",
    value: function update(direction) {
      if (direction === this.health[0]) {
        this.health = this.health.slice(1);
      }

      if (this.health.length === 0) {
        this.status = false;
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      this.game.remove(this);
    }
  }, {
    key: "isCollidedWith",
    value: function isCollidedWith() {
      var mainChar = this.mainChar;
      return this.pos.x < mainChar.pos.x + mainChar.size && this.pos.x + this.size > mainChar.pos.x && this.pos.y < mainChar.pos.y + mainChar.size && this.pos.y + this.size > mainChar.pos.y;
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
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images */ "./src/images.js");
/* harmony import */ var _main_char__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main_char */ "./src/main_char.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Game = /*#__PURE__*/function () {
  function Game(canvas) {
    _classCallCheck(this, Game);

    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
    this.enemies = [];
    this.maxHealth = 5;
    this.level = 0;
    this.score = 0;
    this.levelStarted = false;
    this.gameOver = false;
    this.MAX_ENEMY = 10;
  }

  _createClass(Game, [{
    key: "start",
    value: function start() {
      this.addMainChar();
      this.startNewLevel();
    }
  }, {
    key: "startNewLevel",
    value: function startNewLevel() {
      this.levelStarted = true;
      this.level++;
      this.addEnemy();
    }
  }, {
    key: "addMainChar",
    value: function addMainChar() {
      this.mainChar = new _main_char__WEBPACK_IMPORTED_MODULE_3__["MainChar"](this, _images__WEBPACK_IMPORTED_MODULE_2__["corgi"]);
    }
  }, {
    key: "addEnemy",
    value: function addEnemy() {
      var enemyNum = Math.min(this.level, this.MAX_ENEMY);
      var attr = {
        level: this.level,
        game: this
      };

      for (var i = 0; i < enemyNum; i++) {
        var enemy = new _enemies__WEBPACK_IMPORTED_MODULE_1__["Enemy"](attr);
        this.enemies.push(enemy);
      }
    }
  }, {
    key: "receiveCommand",
    value: function receiveCommand(direction) {
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
    }
  }, {
    key: "step",
    value: function step(ctx, frame) {
      this.draw(ctx, frame);
      this.move();
      this.isGameOver();
      this.isLevelCompleted();
    }
  }, {
    key: "move",
    value: function move() {
      var _iterator2 = _createForOfIteratorHelper(this.enemies),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var enemy = _step2.value;
          enemy.move();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "isGameOver",
    value: function isGameOver() {
      if (this.mainChar.health <= 0) {
        this.gameOver = true;
      }
    }
  }, {
    key: "isLevelCompleted",
    value: function isLevelCompleted() {
      var _this = this;

      if (this.enemies.length < 1 && this.levelStarted) {
        this.levelStarted = false;
        setTimeout(function () {
          _this.startNewLevel();
        }, 3000);
      }
    }
  }, {
    key: "remove",
    value: function remove(obj) {
      var idx = this.enemies.indexOf(obj);
      this.enemies.splice(idx, 1);
    }
  }, {
    key: "draw",
    value: function draw(ctx, frame) {
      ctx.clearRect(0, 0, this.width, this.height);

      var _iterator3 = _createForOfIteratorHelper(this.enemies),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var enemy = _step3.value;
          enemy.draw(ctx, _images__WEBPACK_IMPORTED_MODULE_2__["ghostSprites"], frame);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      var _iterator4 = _createForOfIteratorHelper(this.enemies),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _enemy = _step4.value;

          _enemy.drawHealth(ctx);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      this.mainChar.draw(ctx, _images__WEBPACK_IMPORTED_MODULE_2__["corgi"], frame);
      this.drawHearts(ctx);
    }
  }, {
    key: "drawHearts",
    value: function drawHearts(ctx) {
      var i = 0;

      while (i < this.mainChar.health) {
        ctx.drawImage(_images__WEBPACK_IMPORTED_MODULE_2__["hearts"], 0, 0, 17, 17, 10 + i * 43, 10, 40, 40);
        i++;
      }

      while (i < this.maxHealth) {
        ctx.drawImage(_images__WEBPACK_IMPORTED_MODULE_2__["hearts"], 17 * 4, 0, 17, 17, 10 + i * 43, 10, 40, 40);
        i++;
      }
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: GameView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameView", function() { return GameView; });
/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./command */ "./src/command.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images */ "./src/images.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var GameView = /*#__PURE__*/function () {
  function GameView(canvas) {
    _classCallCheck(this, GameView);

    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.game = new _game__WEBPACK_IMPORTED_MODULE_1__["Game"](canvas);
    this.frameId = 0;
    this.animate = this.animate.bind(this);
    this.loadedImages = new Set();
    this.command = new _command__WEBPACK_IMPORTED_MODULE_0__["Command"](canvas, this.game);
    this.start();
  }

  _createClass(GameView, [{
    key: "start",
    value: function start() {
      var _this = this;

      _images__WEBPACK_IMPORTED_MODULE_2__["corgi"].onload = function () {
        _this.loadedImages.add("corgi");
      };

      _images__WEBPACK_IMPORTED_MODULE_2__["ghostSprites"].onload = function () {
        _this.loadedImages.add("sprites");
      };

      _images__WEBPACK_IMPORTED_MODULE_2__["hearts"].onload = function () {
        _this.loadedImages.add("hearts");
      };

      this.game.start();
      this.animate();
    }
  }, {
    key: "animate",
    value: function animate() {
      if (!this.game.gameOver && this.loaded()) {
        this.game.step(this.ctx, this.frameId);
      }

      if (this.game.gameOver) {
        console.log("game Over");
        cancelAnimationFrame(this.frameId);
        this.gam;
      }

      this.frameId = requestAnimationFrame(this.animate);
    }
  }, {
    key: "loaded",
    value: function loaded() {
      return this.loadedImages.has("corgi") && this.loadedImages.has("sprites") && this.loadedImages.has("hearts");
    }
  }]);

  return GameView;
}();

/***/ }),

/***/ "./src/health_bar.js":
/*!***************************!*\
  !*** ./src/health_bar.js ***!
  \***************************/
/*! exports provided: HealthType, HealthBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthType", function() { return HealthType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthBar", function() { return HealthBar; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HealthType = ["hBar", "vBar", "fSlash", "bSlash"];
var HealthBar = /*#__PURE__*/function () {
  function HealthBar(enemy) {
    _classCallCheck(this, HealthBar);

    this.SIZE = 15;
    this.BETWEEN = 3;
    this.GAP = 10;
    this.enemy = enemy;
  }

  _createClass(HealthBar, [{
    key: "draw",
    value: function draw(ctx) {
      var _this = this;

      this.update();
      this.enemy.health.forEach(function (direction, idx) {
        ctx.lineWidth = 5;
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
      this.x = this.enemy.pos.x + this.enemy.size / 2 - this.width / 2;
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
      ctx.strokeStyle = "red";
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
      ctx.strokeStyle = "blue";
      ctx.moveTo(xStart, yStart);
      ctx.lineTo(xStart + this.SIZE, yStart);
      ctx.stroke();
    }
  }, {
    key: "drawFSlash",
    value: function drawFSlash(ctx, x, y) {
      var xStart = x + this.SIZE * 3 / 4;
      var yStart = y;
      ctx.beginPath();
      ctx.strokeStyle = "gold";
      ctx.moveTo(xStart, yStart);
      ctx.lineTo(xStart - this.SIZE / 2, yStart + this.SIZE);
      ctx.stroke();
    }
  }, {
    key: "drawBSlash",
    value: function drawBSlash(ctx, x, y) {
      var xStart = x;
      var yStart = y;
      ctx.beginPath();
      ctx.strokeStyle = "cyan";
      ctx.moveTo(xStart + this.SIZE / 4, yStart);
      ctx.lineTo(xStart + this.SIZE / 2, yStart + this.SIZE);
      ctx.stroke();
    }
  }]);

  return HealthBar;
}();

/***/ }),

/***/ "./src/images.js":
/*!***********************!*\
  !*** ./src/images.js ***!
  \***********************/
/*! exports provided: background, ghostSprites, corgi, hearts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background", function() { return background; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ghostSprites", function() { return ghostSprites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "corgi", function() { return corgi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hearts", function() { return hearts; });
var background = new Image();
background.src = "./dist/image/background.png";
var ghostSprites = new Image();
ghostSprites.src = "./dist/image/ghosts.png";
var corgi = new Image();
corgi.src = "./dist/image/corgi.png";
var hearts = new Image();
hearts.src = "./dist/image/hearts.png";

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
/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view */ "./src/game_view.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images */ "./src/images.js");



document.addEventListener("DOMContentLoaded", function () {
  var backgroundCanvas = document.getElementById("background-canvas");
  var bound = backgroundCanvas.getBoundingClientRect();
  backgroundCanvas.width = bound.width;
  backgroundCanvas.width = bound.height;

  _images__WEBPACK_IMPORTED_MODULE_2__["background"].onload = function () {
    var backgroundCtx = backgroundCanvas.getContext("2d");
    backgroundCtx.drawImage(_images__WEBPACK_IMPORTED_MODULE_2__["background"], 0, 0, backgroundCanvas.width, backgroundCanvas.height);
  };

  var canvas = document.getElementById("canvas");
  canvas.width = bound.width;
  canvas.height = bound.height;
  var gameView = new _game_view__WEBPACK_IMPORTED_MODULE_1__["GameView"](canvas);
});

/***/ }),

/***/ "./src/main_char.js":
/*!**************************!*\
  !*** ./src/main_char.js ***!
  \**************************/
/*! exports provided: MainChar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainChar", function() { return MainChar; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./src/vector.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var MainChar = /*#__PURE__*/function () {
  function MainChar(game, image) {
    _classCallCheck(this, MainChar);

    this.health = 5;
    this.game = game;
    this.size = 100;
    this.OFFSET = 60;
    this.pos = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"](game.width / 2 - this.size / 2, game.height - this.size - this.OFFSET);
    this.center = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"](this.pos.x + this.size / 2, this.pos.y + this.size / 2);
    this.image = image;
    this.frameSpeed = 20;
  }

  _createClass(MainChar, [{
    key: "draw",
    value: function draw(ctx, image, frame) {
      ctx.drawImage(image, 0 + 48 * (Math.floor(frame / this.frameSpeed) % 3), 336, 48, 48, this.pos.x, this.pos.y, this.size, this.size); // this.drawHealth(ctx);
    }
  }, {
    key: "hurt",
    value: function hurt() {
      var _this = this;

      this.health -= 1;
      this.frameSpeed = 2;
      setTimeout(function () {
        _this.frameSpeed = 20;
      }, 500);
    }
  }, {
    key: "update",
    value: function update() {}
  }]);

  return MainChar;
}();

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: vectorDirectionInDegree, vectorDirectionsInSymbol, rndEntryPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vectorDirectionInDegree", function() { return vectorDirectionInDegree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vectorDirectionsInSymbol", function() { return vectorDirectionsInSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rndEntryPoint", function() { return rndEntryPoint; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./src/vector.js");

var vectorDirectionInDegree = function vectorDirectionInDegree(x, y) {
  var degree = Math.atan(y / x) * 180 / Math.PI;

  if (x < 0) {
    degree += 180;
  }

  return degree;
};
var vectorDirectionsInSymbol = function vectorDirectionsInSymbol(x, y) {
  var THRESHOLD = 15;
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
var rndEntryPoint = function rndEntryPoint(game, enemy) {
  var rndX = Math.random() * (game.width + enemy.width + 1) - enemy.width;
  var rndY = Math.random() * (game.height + 1);
  var choiceArray = [new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"](0 - enemy.width, rndY), new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"](game.width, rndY), new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"](rndX, 0 - enemy.height)];
  var rndIdx = Math.floor(Math.random() * 3);
  return choiceArray[rndIdx];
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
    this.mag = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
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
      return new Vector(vector.x + this.x, vector.y + this.y);
    }
  }, {
    key: "minus",
    value: function minus(vector) {
      return new Vector(this.x - vector.x, this.y - vector.y);
    }
  }, {
    key: "scale",
    value: function scale(mag) {
      this.x *= mag;
      this.y *= mag;
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